import axios from "axios";

const API_URL = "https://sutt-front-task-one.herokuapp.com/api/v1/auth/";

const register = (name, username, email, password) => {
  return axios.post(API_URL + "register", {
    name,
    username,
    email,
    password,
  });
};

// const register = (name, username, email, password) => {
//   return axios.post(API_URL + "register", {
//     name,
//     username,
//     email,
//     password,
//   });
// };

const login = (username, password) => {
  return axios
    .post(API_URL + "login", {username, password})
    .then((response) => {
      if(response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
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
