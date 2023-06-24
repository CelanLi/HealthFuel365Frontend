import serviceAxios from "../util/request.js";
import axios, { AxiosHeaders } from "axios";
import { backendUrl, orderRoute } from "../util/constants"; 

export const createOrder = (data) => {
  return serviceAxios({
    url: backendUrl + orderRoute + "/createOrder",
    method: "post",
    data,
  });
};

export const getOrder = async () => {
  try {
    if (!document.cookie) {
      throw new Error("Cookie is empty");
    }
    const result: Response = await axios.get(
      'http://localhost:8081/user/getorder',
      {
        headers: {
          Authorization: document.cookie, //put cookie into header
        },
      },
    );
    const response = result.data;
    console.log(response,"getorder")
    if (response.status >= 300) {
      throw new Error(response.message);
    }
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
 