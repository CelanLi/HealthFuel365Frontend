import axios from "axios";
import { backendUrl, alternativeRoute } from "../util/constants";

export const getAlternative = async (junkFoodType) => {

    try {
      const result = await axios.get(
        backendUrl + alternativeRoute + "/" + junkFoodType
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