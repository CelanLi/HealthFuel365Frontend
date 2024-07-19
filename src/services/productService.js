import axios from "axios";
import { backendUrl, productRoute } from "../util/constants";
import { Modal, message } from "antd";

const showLoginReminder = () => {
  Modal.error({
    title: "please log in",
    content: "Before adding items to your shopping cart, log in is reuired",
    onOk: () => {
      window.location.href = `${window.location.origin}`;
    },
  });
};
export const getAllProducts = async (selectedSort) => {
  try {
    const result = await axios.get(
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
    const result = await axios.get(
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
    const result = await axios.post(
      backendUrl +
        productRoute +
        "/addToSc/" +
        shoppingCartID +
        "/" +
        productID,
      null,
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
    message.success("1 item added to shopping cart.");
    return response;
  } catch (error) {
    console.error(error);
    if (error.response && error.response.status === 401) {
      showLoginReminder();
    } else if (error.response && error.response.status === 500) {
      message.error("Sorry, chosen item reach the maximum quantity");
    } else {
      throw new Error(error);
    }
  }
};

export const getAllBrands = async () => {
  try {
    const result = await axios.get(
      backendUrl + productRoute + "/filter/brands"
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