import axios, { AxiosHeaders } from "axios";
import serviceAxios from "../util/request.js";

export const registerUser = (data) => {
  console.log("1233",data);
  axios.post(
    'http://localhost:8081/user/register',
    {
      username:data.username,
      password:data.password,
      email:data.email,
    }
  )
};

export const loginUser = (data) => {
  console.log("1234",data);
  axios.post(
    'http://localhost:8081/user/login',
    {
      username:data.username,
      password:data.password,
    }
  )
};