import axios from 'axios';
import authHeader from './auth-header';

const API_URL = "https://sutt-front-task-one.herokuapp.com/api/v1/auth/";

const userInfo = () => {
  // console.log("https://sutt-front-task-one.herokuapp.com/api/v1/auth/user", {headers: authHeader()});
  return axios.get("https://sutt-front-task-one.herokuapp.com/api/v1/auth/user", {headers: authHeader()});
};

export default userInfo;