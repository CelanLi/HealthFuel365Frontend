import axios from "axios";
import { backendUrl, productDetailRoute } from "../util/constants";

export const getDetail = async (productID) => {
  try {
    console.log(backendUrl + productDetailRoute + "/" + productID);
    const result = await axios.get(
      backendUrl + productDetailRoute + "/" + productID
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
