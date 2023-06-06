import serviceAxios from "../../util/request.js";


export const deleteProductItem = (data) => {
  return serviceAxios({
    url: "/api/deleteProductItem",
    method: "post",
    data,
  });
};
 