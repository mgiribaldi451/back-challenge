import Iservers from "../../interfaces/Iservers";
import { postToDb } from "../../db/mysql";
import dayjs from "dayjs";

/**
 * Consume la informacion de la db y se la sirve al controlador 
 * parsea la fecha para almacenarla en la base de datos
 */

async function postServers(obj: Iservers) {
  let date = obj.created_at.split("-");
  
  obj.created_at = dayjs(
    new Date(
      parseInt(date[5]),
      parseInt(date[4]) - 1,
      parseInt(date[3]),
      parseInt(date[0]),
      parseInt(date[1]),
      parseInt(date[2])
    )
  ).format("YYYY-MM-DD HH:mm:ss");
  
console.log(obj.created_at)
  return postToDb(obj);
}

export default { postServers };
