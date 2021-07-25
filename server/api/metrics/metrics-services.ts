import { getDateFromDb } from "../../db/mysql";
import Imetrics from "../../interfaces/Imetrics";

/**
 * 
 * @param obj 
 * @returns 
 */
async function getMetrics(obj:Imetrics) {

  return getDateFromDb();
}

export default { getMetrics };


