import axios, { AxiosHeaders } from "axios";
import {setCookie,getCookie, invalidateCookie, invalidateAllCookies} from "../util/cookie.js"
import serviceAxios from "../util/request.js";
import { message } from "antd";

const expiryDate = new Date();
expiryDate.setTime(expiryDate.getTime() + 24 * 60 * 60 * 1000);

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
    setCookie(data.username,response.token)
    return true;
  } catch (error){
    if(error.response){
      const responseData = error.response.data;
      message.error(`Registration failed: ${responseData.message}`);
      return false;
    }
    else{
      message.error('Registration failed!');
      return false;
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
    //when user log in successfully, a token will be stored in his browser.
    setCookie(data.username,response.token)
    return response;

  } catch (error){
    if(error.response){
      const responseData = error.response.data;
      message.error(`Login failed: ${responseData.message}`);
    }
    else{
      message.error('Login failed!');
    }
  };
};

export const getUser = async () => {
  try {
    console.log("fjdalk")
    console.log(document.cookie)

    if (!document.cookie) {
      throw new Error("Cookie is empty");
    }

    const result: Response = await axios.get(
      'http://localhost:8081/user/getuser',
      {
        headers: {
          Authorization: document.cookie, //put cookie into header
        },
      },
    );
    const response = result.data;

    if (response.status >= 300) {
      throw new Error(response.message);
    }
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const profileEdit = async (data) => {
  console.log("bbb",data)
  //catch error
  try {
    const result: Response = await axios.put(
      'http://localhost:8081/user/profileedit',
      {
        losingWeightAsGoal: data.losingWeightAsGoal,
        keepGoodDietAsGoal: data.keepGoodDietAsGoal,
        typeOfEater: data.typeOfEater,
        nutriPreference: data.nutriPreference,
        lowInFat: data.lowInFat,
        lowInSalt: data.lowInSalt,
        lowInSugar: data.lowInSugar,
      },
      {
        headers: {
          Authorization: document.cookie, //put cookie into header
        },
      }
    );
    const response = result.data;
    if (response.status >= 300) {
      throw new Error(response.message);
    }
    console.log("ccc",result.data)
    return response;
  } catch (error){
    if(error.response){
      const responseData = error.response.data;
      message.error(`Profile edit failed: ${responseData.message}`);
    }
    else{
      message.error(`Profile edit failed!`);
    }
  }
};

export const profileGet = async () => {
  try {
    console.log("fjdalk")
    console.log(document.cookie)
    const result: Response = await axios.get(
      'http://localhost:8081/user/profileget',
      {
        headers: {
          Authorization: document.cookie, //put cookie into header
        },
      },
    );
    const response = result.data;

    if (response.status >= 300) {
      throw new Error(response.message);
    }
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const logoutUser = async () => {
  invalidateAllCookies();
};

export const addressAdd = async (data) => {
  console.log("addressAdd",data)
  //catch error
  try {
    const result: Response = await axios.post(
      'http://localhost:8081/user/addressadd',
      {
        street: data.street,
        postCode: data.postCode,
        city: data.city,
        additionalAddress: data.additionalAddress,
        tel: data.tel,
        receiver: data.receiver,
      },
      {
        headers: {
          Authorization: document.cookie, //put cookie into header
        },
      }
    );
    const response = result.data;
    if (response.status >= 300) {
      throw new Error(response.message);
    }
    console.log(result.data)
    return response;
  } catch (error){
    if(error.response){
      const responseData = error.response.data;
      message.error(`Address addition failed: ${responseData.message}`);
    }
    else{
      message.error(`Address addition failed!`);
    }
  }
};

export const addressGet = async () => {
  try {
    if (!document.cookie) {
      throw new Error("Cookie is empty");
    }
    const result: Response = await axios.get(
      'http://localhost:8081/user/addressget',
      {
        headers: {
          Authorization: document.cookie, //put cookie into header
        },
      },
    );
    const response = result.data;
    if (response.status >= 300) {
      throw new Error(response.message);
    }
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const addressDelete = async (addressID) => {
  try {
    const result: Response = await axios.delete(
      'http://localhost:8081/user/addressdelete',
      {
        headers: {
          Authorization: document.cookie, //put cookie into header
        },
        params: {addressID : addressID},
      },
    );
    const response = result.data;
    if (response.status >= 300) {
      throw new Error(response.message);
    }
    console.log("deleteResponse",response)
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

// export const addressEdit = async (data, addressID) => {
//   console.log("bbb",data)
//   //catch error
//   try {
//     const result: Response = await axios.put(
//       'http://localhost:8081/user/addressedit',
//       {
//         street: data.street,
//         postCode: data.postCode,
//         city: data.city,
//         additionalAddress: data.additionalAddress,
//         tel: data.tel,
//         receiver: data.receiver,
//       },
//       {
//         headers: {
//           Authorization: document.cookie, //put cookie into header
//         },
//         params: {addressID : addressID},
//       }
//     );
//     const response = result.data;
//     if (response.status >= 300) {
//       throw new Error(response.message);
//     }
//     console.log(result.data)
//     return response;
//   } catch (error){
//     if(error.response){
//       const responseData = error.response.data;
//       alert('Address edit failed:\n' + JSON.stringify(responseData.message));
//     }
//     else{
//       alert("Address edit failed!")
//     }
//   }
// };