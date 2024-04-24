import publicClient from "../../api/client/public.clinet";

const bannersEndpoint = {
  getBanners: "banners",
};

const getBanners = async () => {
  const response = await publicClient.get(bannersEndpoint.getBanners);

  return response;
};

const bannersServices = {
  getBanners,
};

export default bannersServices;
