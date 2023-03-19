import { post } from "../../utils/request";

const REGISTER_API_URI = "/auth/register";
// const ACTIVATE_API_URI = "/auth/activate";
// const LOGIN_API_URI = "/auth/login";
// const FORGOT_PASSWORD_API_URI = "/auth/forgot-password";

const register = async (requestPayload) =>
  post(REGISTER_API_URI, requestPayload);

export const service = {
  register,
};
