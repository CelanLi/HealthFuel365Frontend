import axios from "axios";
import { backendUrl, adminRoutes } from "../util/constants";
import { message } from "antd";
import serviceAxios from "../util/request.js";
import { setAdminCookie, invalidateCookie } from "../util/cookie.js";

export const loginAdmin = async (data) => {
  try {
    const result = await axios.post(backendUrl + adminRoutes + "/login", {
      adminID: data.adminID,
      password: data.password,
    });
    const response = result.data;
    if (response.status >= 300) {
      throw new Error(response.message);
    }
    setAdminCookie(data.adminID, response.token);
    return response;
  } catch (error) {
    if (error.response) {
      const responseData = error.response.data;
      message.error(`Login failed: ${responseData.message}`);
    } else {
      message.error("Login failed!");
    }
  }
};

export const logoutAdmin = async () => {
  invalidateCookie("adminLogin");
};

export const getAllUserWithProfile = async (keyWords) => {
  try {
    const result: Response = await axios.get(
      backendUrl + adminRoutes + "/user" + "/?keyWords=" + keyWords,
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
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteUserWithProfile = async (userID) => {
  try {
    const result: Response = await axios.delete(
      backendUrl + adminRoutes + "/" + userID,
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
    message.success("Delete user successfully.");
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateUserEmail = async (userID, email) => {
  try {
    const result: Response = await axios.put(
      backendUrl + adminRoutes + "/update/" + userID + "/" + email,
      {},
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
      },
      {
        headers: {
          Authorization: document.cookie, //put cookie into header
        }
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
      },
      {
        headers: {
          Authorization: document.cookie, //put cookie into header
        }
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

export const getAllOrdersWithService = async (keyWords) => {
  try {
    const result: Response = await axios.get(
      backendUrl + adminRoutes + "/orders" + "/?keyWords=" + keyWords,
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
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateOrder = async (orderID, status, trackingnumber) => {
  try {
    const result: Response = await axios.put(
      backendUrl +
        adminRoutes +
        "/orders/update/" +
        orderID +
        "/" +
        status +
        "/" +
        trackingnumber,
      {},
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
    message.success("Update order " + orderID + " successfully.");
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const getOrderById = async (orderID) => {
  try {
    const result: Response = await axios.get(
      backendUrl + adminRoutes + "/getOrder/" + orderID,
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
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const getProductsWithDetail = async (keywords) => {
  try {
    const result: Response = await axios.get(
      backendUrl + adminRoutes + "/products" + "/?keywords=" + keywords,
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
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
export const getProductWithDetail = async (productID) => {
  try {
    const result: Response = await axios.get(
      backendUrl + adminRoutes + "/products/edit/" + productID,
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
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteProduct = async (productID) => {
  console.log(productID);
  try {
    const result = await axios.delete(
      backendUrl + adminRoutes + "/products/delete/" + productID,
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
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const addProduct = async (data) => {
  try {
    console.log(data.vegan);
    const result: Response = await axios.post(
      backendUrl + adminRoutes + "/products/add",
      {
        productID: "1",
        category: data.category,
        imageUrl: data.imageUrl,
        nutriScore: data.nutriScore,
        capacity: data.capacity,
        productBrand: data.productBrand,
        productPrice: data.productPrice,
        productName: data.productName,
        vegan: data.vegan,
        vegetarian: data.vegetarian,
        fat: data.fat,
        sugar: data.sugar,
        salt: data.salt,
        fatLevel: data.fatLevel,
        sugarLevel: data.sugarLevel,
        saltLevel: data.saltLevel,
        productDescription: data.description,
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
    console.log(result.data);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateProduct = async (data) => {
  try {
    console.log(JSON.stringify(data.description) + "update");
    // await deleteProduct(data.productID);
    const result: Response = await axios.post(
      backendUrl + adminRoutes + "/products/update/" + data.productID,
      {
        productID: data.productID,
        category: data.category,
        imageUrl: data.imageUrl,
        nutriScore: data.nutriScore,
        capacity: data.capacity,
        productBrand: data.productBrand,
        productPrice: data.productPrice,
        productName: data.productName,
        vegan: data.vegan,
        vegetarian: data.vegetarian,
        fat: data.fat,
        sugar: data.sugar,
        salt: data.salt,
        fatLevel: data.fatLevel,
        sugarLevel: data.sugarLevel,
        saltLevel: data.saltLevel,
        productDescription: data.description,
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
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
