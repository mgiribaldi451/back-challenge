import Imetrics from "../interfaces/Imetrics";
import Iservers from "../interfaces/Iservers";
var count: number = 0;
function getServerLastMonth(obj: any) {
  var mapa = obj
    .reduce((memo: any, curr: any) => {
      const itemIndex = memo.findIndex((e: any) => e.name === curr);
      if (itemIndex >= 0) memo[itemIndex].count++;
      else
        memo.push({
          name: curr,
          count: 1,
        });
      return memo;
    }, [])
    .sort((a: any, b: any) => (a.count < b.count ? 1 : -1))
    .slice(0, 3);
  return mapa;
}

export default { getServerLastMonth };
