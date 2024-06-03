import publicClient from "../../api/client/public.clinet";
import endpoints from "../../api/endpoints";

const getSliders = async () => {
  const response = await publicClient.get(endpoints.sliders);

  return response;
};

const sliderService = {
  getSliders,
};

export default sliderService;
