import { NextFunction, Request, Response } from "express";
import services from "./services";

/**
 * Esta funcion es usada como controlador para el endppoint /get-server con el metodo GET
 * 
 * @param res objeto , reperesenta la respuesta http que una app express envia cuando recibe una respuesta http
 * @param next pasa el control al manejador Next
 */
async function getServers(req: Request,res: Response, next: NextFunction) {
  try {
    const data = await services.getServers();
    res.status(200).send(data);
  } catch (error) {
    next(new Error("Error intentando traer servers: " + error));
  }
}

export default { getServers };
