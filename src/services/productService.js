import axios from "axios";
import { IOpenFoodFactsData } from "../models/types";
import { backendUrl, productRoute } from "../util/constants";

export const getAllProducts = async (selectedSort: string) => {
  try {
    console.log(backendUrl + productRoute);
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

// export const sortingMethodInvocation = async (selectedSort: string) => {
//   if (selectedSort === "1") {
//     console.log("selectedSort === 1");
//     return sortByNutriscore();
//   } else if (selectedSort === "2") {
//     console.log("selectedSort === 2");
//     return sortByName();
//   } else if (selectedSort === "3") {
//     return sortPriceAscending();
//   } else {
//     return sortPriceDescending();
//   }
// };
// export const sortByNutriscore = async () => {
//   try {
//     console.log(backendUrl + productRoute);
//     const result: Response = await axios.get(
//       backendUrl + productRoute + "/byNutri"
//     );
//     const response = result.data;
//     console.log(response);
//     if (response.status >= 300) {
//       throw new Error(response.message);
//     }
//     return response;
//   } catch (error) {
//     throw new Error(error);
//   }
// };
// export const sortByName = async () => {
//   try {
//     console.log(backendUrl + productRoute);
//     const result: Response = await axios.get(
//       backendUrl + productRoute + "/byname"
//     );
//     const response = result.data;
//     console.log(response);
//     if (response.status >= 300) {
//       throw new Error(response.message);
//     }
//     return response;
//   } catch (error) {
//     throw new Error(error);
//   }
// };
// export const sortPriceAscending = async () => {
//   try {
//     console.log(backendUrl + productRoute);
//     const result: Response = await axios.get(
//       backendUrl + productRoute + "/price-asc"
//     );
//     const response = result.data;
//     console.log(response);
//     if (response.status >= 300) {
//       throw new Error(response.message);
//     }
//     return response;
//   } catch (error) {
//     throw new Error(error);
//   }
// };
// export const sortPriceDescending = async () => {
//   try {
//     console.log(backendUrl + productRoute);
//     const result: Response = await axios.get(
//       backendUrl + productRoute + "/price-desc"
//     );
//     const response = result.data;
//     console.log(response);
//     if (response.status >= 300) {
//       throw new Error(response.message);
//     }
//     return response;
//   } catch (error) {
//     throw new Error(error);
//   }
//};
