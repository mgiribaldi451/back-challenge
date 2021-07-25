
import { getFromDb} from "../../db/mysql";

async function getServers() {
  return getFromDb();
}


export default { getServers  };
