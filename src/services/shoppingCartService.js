import serviceAxios from "../util/request.js";
import { backendUrl, shoppingCartRoute } from "../util/constants";

export const getShoppingCartDetail = (params) => {
  return serviceAxios({
    url: backendUrl + shoppingCartRoute + "/shoppingCartList",
    method: "get",
    params,
  });
};

export const deleteProductItem = (data) => {
  return serviceAxios({
    url: backendUrl + shoppingCartRoute + "/deleteProductItem",
    method: "post",
    data,
  });
};

export const changeProductCount = (data) => {
  return serviceAxios({
    url: backendUrl + shoppingCartRoute + "/changeProductCount",
    method: "post",
    data,
  });
};

export const validatePromoCode = (data) => {
  return serviceAxios({
    url: backendUrl + shoppingCartRoute + "/validatePromoCode",
    method: "post",
    data,
  });
};
