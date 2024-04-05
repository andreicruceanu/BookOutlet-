import { API_URL_IMG } from "../api/api-img";

export const getImageUrl = (filename) => {
  return new URL(`${API_URL_IMG}${filename}`, import.meta.url).href;
};
