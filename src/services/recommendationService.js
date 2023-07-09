import axios from "axios";
import { backendUrl, alternativeRoute } from "../util/constants";
import { getCookie } from "../util/cookie";

export const getRecommendation = async () => {
    if (getCookie("userLogin")) {
        console.log("getRecommendationswithCookies"+ getCookie("userLogin"))
        try {
            console.log(document.cookie)
            const result: Response = await axios.get(
                'http://localhost:8081/recommendation/getRecommendationsWithCookies',
                {
                    headers: {
                    Authorization: document.cookie, //put cookie into header
                    },
                },
                );
          const response = result.data;
          console.log(response);
          if (response.status >= 300) {
            throw new Error(response.message);
          }
          return response;
        } catch (error) {
          throw new Error(error);
        }
    }
    else{
        console.log("getRecommendations")
        try {
            const result: Response = await axios.get(
                'http://localhost:8081/recommendation/getRecommendations',
                {
                    headers: {
                    Authorization: document.cookie, //put cookie into header
                    },
                },
                );
          const response = result.data;
          console.log(response);
          if (response.status >= 300) {
            throw new Error(response.message);
          }
          return response;
        } catch (error) {
          throw new Error(error);
        }
    }
};