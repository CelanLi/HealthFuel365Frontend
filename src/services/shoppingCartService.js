import serviceAxios from "../util/request.js";

export const getShoppingCartDetail = (params) => {
  return serviceAxios({
    url: "http://localhost:8081/shoppingcart/shoppingCartList",
    method: "get",
    params,
  });
};

export const deleteProductItem = (data) => {
  return serviceAxios({
    url: "http://localhost:8081/shoppingcart/deleteProductItem",
    method: "post",
    data,
  });
};

export const changeProductCount = (data) => {
  return serviceAxios({
    url: "http://localhost:8081/shoppingcart/changeProductCount",
    method: "post",
    data,
  });
};

export const validatePromoCode = (data) => {
  return serviceAxios({
    url: "http://localhost:8081/shoppingcart/validatePromoCode",
    method: "post",
    data,
  });
};
