import serviceAxios from "../util/request.js";
import {setUserCookie, invalidateCookie} from "../util/cookie.js";
import { encodeFileToBase64 } from "../util/avatar.js";
import { backendUrl, userRoute } from "../util/constants.js";

const expiryDate = new Date();
expiryDate.setTime(expiryDate.getTime() + 24 * 60 * 60 * 1000);

export const registerUser = async (data) => {
  let avatar = data.avatar;
  if (avatar !== "default") {
    avatar = await encodeFileToBase64(data.avatar)
    console.log("avatar",avatar.length)
  }
  else{
    avatar = data.avatar;
  }
    const result = await serviceAxios({
      url: backendUrl + userRoute + "/register",
      method: "post",
      data: {
        username:data.username,
        password:data.password,
        email:data.email,
        avatar: avatar,
      },
    })
    setUserCookie(data.username,result.token);
    return true;
};

export const loginUser = async (data) => {
    const result = await serviceAxios({
      url: backendUrl + userRoute + "/login",
      method: "post",
      data,
    })
    //when user log in successfully, a token will be stored in his browser.
    setUserCookie(data.username,result.token)
    return true;
};

export const getUser = async () => {
  if (!document.cookie) {
    throw new Error("Cookie is empty!");
  }
  const result = await serviceAxios({
    url: backendUrl + userRoute + "/getuser",
    method: "get",
  });
  return result;
};

export const AvatarEdit = async (data) => {
const avatar = await encodeFileToBase64(data.avatar)
  const result = await serviceAxios({
    url: backendUrl + userRoute + "/AvatarEdit",
    method: "put",
    data: {
      avatar: avatar,
    },
  })
  if (result.status >= 300) {
    throw new Error(result.message);
  }
  return result;
};

export const profileEdit = async (data) => {
  const result = await serviceAxios({
    url: backendUrl + userRoute + "/profileEdit",
    method: "put",
    data: {
      losingWeightAsGoal: data.losingWeightAsGoal,
      keepGoodDietAsGoal: data.keepGoodDietAsGoal,
      typeOfEater: data.typeOfEater,
      nutriPreference: data.nutriPreference,
      lowInFat: data.lowInFat,
      lowInSalt: data.lowInSalt,
      lowInSugar: data.lowInSugar,
    },
  })  
  return result;
};

export const profileGet = async () => {
  const result = await serviceAxios({
    url: backendUrl + userRoute + "/profileget",
    method: "get",
  })
    return result;
};

export const logoutUser = async () => {
  invalidateCookie("userLogin");
};

export const addressAdd = async (data) => {
  if (!document.cookie) {
    throw new Error("Cookie is empty");
  }
  const result = await serviceAxios({
    url: backendUrl + userRoute + "/addressadd",
    method: "post",
    data: {
      street: data.street,
      postCode: data.postCode,
      city: data.city,
      additionalAddress: data.additionalAddress,
      tel: data.tel,
      receiver: data.receiver,
    },
  })
    return result;
};

export const addressGet = async () => {
    if (!document.cookie) {
      throw new Error("Cookie is empty");
    }
    const result = await serviceAxios({
      url: backendUrl + userRoute + "/addressget",
      method: "get",
    })
    return result;
};

export const addressDelete = async (addressID) => {
    if (!document.cookie) {
      throw new Error("Cookie is empty");
    }
    const result = await serviceAxios({
      url: backendUrl + userRoute + "/addressdelete",
      method: "delete",
      params: {addressID : addressID},
    })
    return result;
};