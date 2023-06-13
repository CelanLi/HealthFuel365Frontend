import axios, { AxiosHeaders } from "axios";
import serviceAxios from "../util/request.js";
import { message } from "antd";

export const registerUser = async (data) => {
  //catch error
  try {
    const result: Response = await axios.post(
      'http://localhost:8081/user/register',
      {
        username:data.username,
        password:data.password,
        email:data.email,
      }
    );
      const response = result.data;
      
      if (response.status >= 300) {
        throw new Error(response.message);
      }
      return response;
  } catch (error){
    if(error.response){
      const responseData = error.response.data;
      alert('Register failed:\n' + JSON.stringify(responseData.message));
    }
    else{
      alert("Registration failed!")
    }
  }
};

export const loginUser = async (data) => {
  console.log("1234",data);
  try{
    const result:Response = await axios.post(
      'http://localhost:8081/user/login',
      {
        username:data.username,
        password:data.password,
      }
    );
    const response = result.data;
      
      if (response.status >= 300) {
        throw new Error(response.message);
      }
      return response;

  } catch (error){
    if(error.response){
      const responseData = error.response.data;
      alert('Login failed:\n' + JSON.stringify(responseData.message));
    }
    else{
      alert("Login failed!")
    }
  }

};