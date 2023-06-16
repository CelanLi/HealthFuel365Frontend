import axios from "axios";
import { backendUrl, alternativeRoute } from "../util/constants";

export const getAlternative = async (selectedItem: number) => {

    try {
      const result: Response = await axios.get(
        backendUrl + alternativeRoute + "/" + selectedItem
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