import serviceAxios from "../util/request.js";
import axios, { AxiosHeaders } from "axios";
import { backendUrl, orderRoute, userRoute } from "../util/constants"; 

export const createOrder = (data) => {
  return serviceAxios({
    url: backendUrl + orderRoute + "/createOrder",
    method: "post",
    data,
  });
};

export const cancelPayment = (data) => {
  return serviceAxios({
    url: backendUrl + orderRoute + "/cancelPayment",
    method: "post",
    data,
  });
};

export const successPayment = (data) => {
  return serviceAxios({
    url: backendUrl + orderRoute + "/successPayment",
    method: "post",
    data,
  });
};

export const getOrder = async () => {
    if (!document.cookie) {
      throw new Error("Cookie is empty");
    }
    const result = await serviceAxios({
      url: backendUrl + userRoute + "/getorder",
      method: "get",
    });
    return result;
};

// get order by order id
export const getOrderById = async (orderID) => {
    if (!document.cookie) {
      throw new Error("Cookie is empty");
    }
    const result = await serviceAxios({
      url: backendUrl + userRoute + "/getorderbyid",
      method: "get",
      params: {orderID : orderID},
    });
    return result;

};

// get package and shipping services by order id
export const getServiceByOrderId = async (orderID) => {
    if (!document.cookie) {
      throw new Error("Cookie is empty");
    }
    const result = await serviceAxios({
      url: backendUrl + userRoute + "/getServiceByOrderId",
      method: "get",
      params: {orderID : orderID},
    });
    return result;
};

// get payment information by order id
export const getPaymentByOrderId = async (orderID) => {
    if (!document.cookie) {
      throw new Error("Cookie is empty");
    }
    const result = await serviceAxios({
      url: backendUrl + userRoute + "/getPaymentByOrderId",
      method: "get",
      params: {orderID : orderID},
    });
    return result;
};

// get promocode information by order id
export const getPromocodeByOrderId = async (orderID) => {
    if (!document.cookie) {
      throw new Error("Cookie is empty");
    }
    const result = await serviceAxios({
      url: backendUrl + userRoute + "/getPromocodeByOrderId",
      method: "get",
      params: {orderID : orderID},
    });
    return result;
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
 