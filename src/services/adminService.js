import axios from "axios";
import { backendUrl, adminRoutes } from "../util/constants";
import { message } from "antd";

export const getAllUserWithProfile = async () => {
    try {
      const result: Response = await axios.get(
        backendUrl + adminRoutes+ "/user"
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

export const deleteUserWithProfile = async (userID) => {
    try {
      const result: Response = await axios.delete(
        backendUrl + adminRoutes+ "/" + userID
      );
      const response = result.data;
      if (response.status >= 300) {
        throw new Error(response.message);
      }
      message.success("Delete user successfully.");
      return response;
    } catch (error) {
      throw new Error(error);
    }
};

export const updateUserEmail = async (userID, email) => {
  try {
    const result: Response = await axios.put(
      backendUrl + adminRoutes + "/update/" + userID + "/" + email
      );
    const response = result.data;
    if (response.status >= 300) {
      throw new Error(response.message);
    }
    message.success("Update user's email successfully.");
    return response;
  } catch (error) {
    throw new Error(error);
  }
}