import publicClient from "../../api/client/public.clinet";

const headerEndpoints = {
  carouselSliders: "/sliders/all",
};

const getSliders = async () => {
  const response = await publicClient.get(headerEndpoints.carouselSliders);

  return response;
};

const sliderService = {
  getSliders,
};

export default sliderService;
