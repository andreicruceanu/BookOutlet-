import publicClient from "../../api/client/public.clinet";
import endpoints from "../../api/endpoints";

const getBanners = async () => {
  const response = await publicClient.get(endpoints.getBanners);

  return response;
};

const bannersServices = {
  getBanners,
};

export default bannersServices;
