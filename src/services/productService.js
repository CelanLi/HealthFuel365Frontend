import axios from "axios";
import { IOpenFoodFactsData } from "../models/types";
import { backendUrl, productRoute } from "../util/constants";

export const getAllProducts = async (selectedSort: string) => {
  try {
    const result: Response = await axios.get(
      backendUrl + productRoute + "/" + selectedSort
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

export const getProductsByName = async (name, selectedSort) => {
  try {
    const result: Response = await axios.get(
      backendUrl + productRoute + "/" + selectedSort + "/?search=" + name
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

export const addShoppingCart = async (shoppingCartID, productID) => {
  try {
    const result: Response = await axios.post(
      backendUrl + productRoute + "/addToSc/" + shoppingCartID + "/" + productID
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
