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
    document.cookie = response.token
    console.log("22222",document.cookie)
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
    //when user log in successfully, a token will be stored in his browser.
    setCookie(data.username,response.token)

    const cookieName = data.username;

    console.log("22222",document.cookie)
    console.log("333",getCookie(cookieName))
    window.location.href = '/homepage';
    return response;

  } catch (error){
    if(error.response){
      const responseData = error.response.data;
      alert('Login failed:\n' + JSON.stringify(responseData.message));
    }
    else{
      alert("Login failed!")
    }
  };
};

export const getUser = async () => {
  try {
    console.log("fjdalk")
    const result: Response = await axios.get(
      'http://localhost:8081/user/getuser',
      {
        headers: {
          Authorization: document.cookie, //put cookie into header
        },
      },
    );
    const response = result.data;
    console.log("fdafa",response)
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
      alert('Profile edit failed:\n' + JSON.stringify(responseData.message));
    }
    else{
      alert("Profile edit failed!")
    }
  }
};

export const profileGet = async () => {
  try {
    console.log("fjdalk")
    const result: Response = await axios.get(
      'http://localhost:8081/user/profileget',
      {
        headers: {
          Authorization: document.cookie, //put cookie into header
        },
      },
    );
    const response = result.data;
    console.log("fdafa",response)
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
      alert('Address addition failed:\n' + JSON.stringify(responseData.message));
    }
    else{
      alert("Address addition failed!")
    }
  }
};

export const addressGet = async () => {
  try {
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
    console.log(response)
    if (response.status >= 300) {
      throw new Error(response.message);
    }
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