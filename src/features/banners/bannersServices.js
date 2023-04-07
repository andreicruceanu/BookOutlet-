import axios from "axios";

const getBanners = async () => {
  const response = await axios.get("api/banners");

  return response.data;
};

const bannersServices = {
  getBanners,
};

export default bannersServices;
