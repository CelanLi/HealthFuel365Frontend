import serviceAxios from "../util/request.js";
import { backendUrl, orderRoute } from "../util/constants"; 

export const createOrder = (data) => {
  return serviceAxios({
    url: backendUrl + orderRoute + "/createOrder",
    method: "post",
    data,
  });
};
 