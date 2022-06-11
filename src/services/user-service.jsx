import axios from 'axios';
import authHeader from './auth-header';

const API_URL = "https://sutt-front-task-one.herokuapp.com/api/v1/auth/";

const userInfo = () => {
  return axios.get(API_URL + "user", {headers: authHeader()});
};

export default userInfo;