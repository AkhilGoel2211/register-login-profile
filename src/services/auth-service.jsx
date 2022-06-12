const API_URL = "https://sutt-front-task-one.herokuapp.com/api/v1/auth/";
const axios = require("axios");

const register = (name, username, email, password) => {
  return axios.post(API_URL + "register", {
    name: `${name}`,
    username: `${username}`,
    email: `${email}`,
    password: `${password}`,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "login", {username, password})
    .then((response) => {
      console.log(response);
      if(response.data.responses.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      console.log(response.data);
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const AuthService = {
  register,
  login,
  logout,
};

export default AuthService;
