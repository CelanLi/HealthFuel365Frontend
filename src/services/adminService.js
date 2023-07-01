import axios from "axios";
import { backendUrl, adminRoutes } from "../util/constants";
import { message } from "antd";
import serviceAxios from "../util/request.js";

export const getAllUserWithProfile = async () => {
  try {
    const result: Response = await axios.get(
      backendUrl + adminRoutes + "/user"
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

export const deleteUserWithProfile = async (userID) => {
  try {
    const result: Response = await axios.delete(
      backendUrl + adminRoutes + "/" + userID
    );
    const response = result.data;
    if (response.status >= 300) {
      throw new Error(response.message);
    }
    message.success("Delete user successfully.");
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateUserEmail = async (userID, email) => {
  try {
    const result: Response = await axios.put(
      backendUrl + adminRoutes + "/update/" + userID + "/" + email
    );
    const response = result.data;
    if (response.status >= 300) {
      throw new Error(response.message);
    }
    message.success("Update user's email successfully.");
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const getAllPromoCode = (params) => { 
  return serviceAxios({
    url: backendUrl + adminRoutes + "/getAllPromoCode",
    method: "get",
    params,
  });
};

export const deletePromoCode = (data) => {
  return serviceAxios({
    url: backendUrl + adminRoutes + "/deletePromoCode",
    method: "post",
    data,
  });
};

export const updatePromoCode = async (data) => {
  console.log("updatePromoCode", data);
  //catch error
  try {
    const result: Response = await axios.post(
      backendUrl + adminRoutes + "/updatePromoCode",
      {
        promocodeID: data.promocodeID,
        code: data.code,
        expirationDate: data.expirationDate,
        discountRate: data.discountRate / 100,
        minThreshold: data.minThreshold, 
      }
    );
    const response = result.data;
    if (response.status >= 300) {
      throw new Error(response.message);
    }
    console.log(result.data);
    return response;
  } catch (error) {
    if (error.response) {
      const responseData = error.response.data;
      message.error(`PromoCode edition failed: ${responseData.message}`);
    } else {
      message.error(`PromoCode edition failed!`);
    }
  }
};

export const addPromoCode = async (data) => {
  console.log("addPromoCode", data);
  //catch error
  try {
    const result: Response = await axios.post(
      backendUrl + adminRoutes + "/addPromoCode",
      {
        code: data.code,
        expirationDate: data.expirationDate,
        discountRate: data.discountRate / 100,
        minThreshold: data.minThreshold,
        usedUser: [],
      }
    );
    const response = result.data;
    if (response.status >= 300) {
      throw new Error(response.message);
    }
    console.log(result.data);
    return response;
  } catch (error) {
    if (error.response) {
      const responseData = error.response.data;
      message.error(`PromoCode addition failed: ${responseData.message}`);
    } else {
      message.error(`PromoCode addition failed!`);
    }
  }
};
