import { counties } from "../pages/account/Components/FormAddress/counties";

export function getCountyNameById(id) {
  const county = counties.find((county) => county.id === id);
  return county ? county.name : "";
}
