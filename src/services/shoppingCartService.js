import serviceAxios from "../util/request.js";

export const getShoppingCartDetail = (data) => {
  return serviceAxios({
    url: "/api/shoppingCartList",
    method: "get",
    data,
  });
};

export const deleteProductItem = (data) => {
  return serviceAxios({
    url: "/api/deleteProductItem",
    method: "post",
    data,
  });
};

export const changeProductCount = (data) => {
  return serviceAxios({
    url: "/api/changeProductCount",
    method: "post",
    data,
  });
};

export const validatePromoCode = (data) => {
  return serviceAxios({
    url: "/api/validatePromoCode",
    method: "post",
    data,
  });
};
