import headerApi from "../../api/modules/headerCarousel";

const getSliders = async () => {
  const { response } = await headerApi.getSliders();

  return response;
};

const sliderService = {
  getSliders,
};

export default sliderService;
