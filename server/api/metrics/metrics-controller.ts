import { NextFunction, Request, Response } from "express";
import getMetricas from "./metrics-services";
import Imetrics from "../../interfaces/Imetrics";

/**
 * Esta funcion es usada como controlador para el endppoint /metrics con el metodo GET
 * 
 * @param res objeto , reperesenta la respuesta http que una app express envia cuando recibe una respuesta http
 * @param next pasa el control al manejador Next
 */
async function getMetrics(req: Request, res: Response, next: NextFunction) {
  try {
    const obj: Imetrics = req.body;
    const data = await getMetricas.getMetrics(obj);
    res.status(200).send(data);
  } catch (error) {
    next(new Error("Error intentando traer servers: " + error));
  }
}

export default { getMetrics };
