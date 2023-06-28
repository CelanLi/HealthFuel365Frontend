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

// get order list of user
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

// get order by order id
export const getOrderById = async (orderID) => {
  try {
    if (!document.cookie) {
      throw new Error("Cookie is empty");
    }
    const result: Response = await axios.get(
      'http://localhost:8081/user/getorderbyid',
      {
        headers: {
          Authorization: document.cookie, //put cookie into header
        },
        params: {orderID : orderID},
      },
    );
    const response = result.data;
    if (response.status >= 300) {
      throw new Error(response.message);
    }
    console.log(response[0])
    return response[0];
  } catch (error) {
    throw new Error(error);
  }
};

// get package and shipping services by order id
export const getServiceByOrderId = async (orderID) => {
  try {
    if (!document.cookie) {
      throw new Error("Cookie is empty");
    }
    const result: Response = await axios.get(
      'http://localhost:8081/user/getServiceByOrderId',
      {
        headers: {
          Authorization: document.cookie, //put cookie into header
        },
        params: {orderID : orderID},
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

// convert date string to timestamp
export const getOrderTimestamp = (order) => {
  if (!order || !order.orderDate) {
    return 0; // Return 0 or any default value if the order or date is missing
  }
  if (order.orderDate.includes(',')) {
    const [dateString, timeString] = order.orderDate.split(', ');
    const [day, month, year] = dateString.split('.');
    const [hour, minute, second] = timeString.split(':');
    const timestamp = new Date(year, month - 1, day, hour, minute, second).getTime();
    return timestamp;
  }
  else{
    return 0;
  }
};
 