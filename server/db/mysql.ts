import mysql from "mysql";
import Iservers from "../interfaces/Iservers";
import metricas from "../lib/metricas";

/**
 * Se define la conexion a la base de datos
 */
const defaultConecction = {
  host: "us-cdbr-east-04.cleardb.com",
  user: "b1353e99469b83",
  password: "61becea4",
  database: "heroku_5d1e0eee7f9db9d",
};

/**
 * Query a la base de datos para el endpoint /get-server
 * trae todos los servidores en la base
 */
export async function getFromDb() {
  var conecction = mysql.createConnection(defaultConecction);
  return new Promise((resolve, reject) => {
    conecction.query("SELECT * FROM servidores", (err, rows) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
    });
    conecction.end(() => {
      conecction.destroy();
    });
  });
}
/**
 * Query a la base de datos para el endpoint /metrics
 * trae todos los servidores alertados el ultimo mes parar que lo prorcese la libreria metricas
 */
export async function getDateFromDb() {
  var conecction = mysql.createConnection(defaultConecction);

  return new Promise((resolve, reject) => {
    conecction.query(
      "SELECT * FROM servidores WHERE MONTH(created_at) = MONTH(CURDATE())",
      (err, rows) => {
        if (err) {
          reject(err);
        }
        var i: any;
        var arreglo = [];
        for (i in rows) {
          arreglo[i] = rows[i].server;
        }
        var top3 = metricas.getServerLastMonth(arreglo);

        resolve(top3);
      }
    );
    conecction.end(() => {
      conecction.destroy();
    });
  });
}
/**
 * Query a la base para insertar datos
 * 
 */
export async function postToDb(obj: Iservers) {
  var conecction = mysql.createConnection(defaultConecction);
  console.log("fechita: ", obj.created_at);
  return new Promise((resolve, reject) => {
    conecction.query(
      `INSERT INTO servidores(server, description, created_at, server_type) VALUES ('${obj.server}','${obj.description}','${obj.created_at}','${obj.server_type}')`,
      (err, rows) => {
        if (err) {
          reject(err);
        }
        resolve(rows);
      }
    );
    conecction.end(() => {
      conecction.destroy();
    });
  });
}
