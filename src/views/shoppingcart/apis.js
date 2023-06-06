import serviceAxios from "../../util/request.js";


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