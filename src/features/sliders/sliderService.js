import axios from "axios";

const getSliders = async () => {
  const response = await axios.get("api/sliders/all");

  return response.data;
};

const sliderService = {
  getSliders,
};

export default sliderService;
