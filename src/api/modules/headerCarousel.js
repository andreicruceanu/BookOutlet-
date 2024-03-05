import publicClient from "../client/public.clinet";

const headerEndpoints = {
  carouselSliders: "/sliders/all",
};

const headerApi = {
  getSliders: async () => {
    try {
      const response = await publicClient.get(headerEndpoints.carouselSliders);

      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default headerApi;
