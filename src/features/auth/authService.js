import axios from "axios";

axios.defaults.baseURL = "https://api-book-outlet.vercel.app/api";

const register = async (userData) => {
  const res = await axios.post("/auth/register", userData);

  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
    localStorage.setItem("firstName", res.data.firstName);
    localStorage.setItem("token", res.data.token);
  }
  return res.data;
};

const login = async (userData) => {
  const res = await axios.post("/auth/login", userData);

  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data.userDetails));
    localStorage.setItem("firstName", res.data.userDetails.firstName);
    localStorage.setItem("token", res.data.token);
  }
  return res.data;
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("firstName");
  localStorage.removeItem("token");
};

const forgotPassword = async (email) => {
  const res = await axios.post("/auth/forgotPassword", email);

  return res.data;
};
const resetPassword = async (data) => {
  const res = await axios.patch(
    `/auth/forgotPassword/reset/${data.token}`,
    data.userData
  );
  return res.data;
};

const getFavoriteOfUser = async () => {
  const res = await axios.get("/user/favorite", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return res.data;
};
const authService = {
  register,
  logout,
  login,
  forgotPassword,
  resetPassword,
  getFavoriteOfUser,
};

export default authService;
