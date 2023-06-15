import serviceAxios from "../util/request.js";

export const getShoppingCartDetail = (params) => {
  return serviceAxios({
    url: "http://localhost:8081/shoppingcart/shoppingCartList",
    method: "get",
    params,
  });
};

export const deleteProductItem = (params) => {
  let param = new URLSearchParams();
  param.append("shoppingCartID", params.shoppingCardID);
  param.append("productID", params.productID);

  return serviceAxios({
    url: "http://localhost:8081/shoppingcart/deleteProductItem",
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      a: 1
    }),
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
