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

const authService = {
  register,
  logout,
  login,
};

export default authService;
