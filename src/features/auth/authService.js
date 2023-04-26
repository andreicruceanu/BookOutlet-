import axios from "axios";

const register = async (userData) => {
  const res = await axios.post("api/auth/register", userData);

  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
    localStorage.setItem("firstName", res.data.firstName);
    localStorage.setItem("token", res.data.token);
  }
  return res.data;
};

const login = async (userData) => {
  const res = await axios.post("api/auth/login", userData);

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
  const res = await axios.post("api/auth/forgotPassword", email);

  return res.data;
};
const resetPassword = async (data) => {
  const res = await axios.patch(
    `api/auth/forgotPassword/reset/${data.token}`,
    data.userData
  );
  return res.data;
};

const addFavorite = async (bookId) => {
  const res = await axios.post("/api/user/addFavorite", bookId, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return res.data;
};

const removeFavorite = async (favoriteId) => {
  const res = await axios.delete(`/api/user/favorite/${favoriteId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return res.data;
};

const getFavoriteOfUser = async () => {
  const res = await axios.get("/api/user/favorite", {
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
  addFavorite,
  getFavoriteOfUser,
  removeFavorite,
};

export default authService;
