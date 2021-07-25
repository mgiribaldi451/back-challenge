import { NextFunction, Request, Response } from "express";
import postService from "./post-services";
import Iservers from "../../interfaces/Iservers";

/**
 * Esta funcion es usada como controlador para el endppoint /post-server con el metodo POST
 * 
 * @param res objeto , reperesenta la respuesta http que una app express envia cuando recibe una respuesta http
 * @param next pasa el control al manejador Next
 */
async function postServers(req: Request, res: Response, next: NextFunction) {
  try {
    const obj: Iservers = req.body;
    const data = await postService.postServers(obj);
    res.status(200).send(data);
  } catch (error) {
    next(new Error("Error intentando traer servers: " + error));
  }
}

export default { postServers };

