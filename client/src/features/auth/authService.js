import axios from "axios";

const API_URL = "http://localhost:9000/api/";

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL + "register", userData);

  if (response.data) {
    return response.data;
  }
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("token", JSON.stringify(response.data["token"]));
  }
  return response.data["token"];
};

// Logout user
const logout = () => localStorage.removeItem("token");

const authService = {
  register,
  logout,
  login,
};

export default authService;
