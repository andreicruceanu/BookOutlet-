import publicClient from "../client/public.clinet";

const bannersEndpoints = {
  banners: "/banners",
};

const bannersApi = {
  getBanners: async () => {
    try {
      const response = await publicClient.get(bannersEndpoints.banners);

      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default bannersApi;
