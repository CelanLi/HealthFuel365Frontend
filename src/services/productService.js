import axios from "axios";
import { IOpenFoodFactsData } from "../models/types";
import { backendUrl, productRoute } from "../util/constants";

export const getProducts = async () => {
  try {
    console.log(backendUrl + productRoute);
    const result: Response = await axios.get(backendUrl + productRoute);
    const response = result.data;
    console.log(response);
    if (response.status >= 300) {
      throw new Error(response.message);
    }
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
