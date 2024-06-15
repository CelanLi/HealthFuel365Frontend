import axios from "axios";
import { backendUrl, recommendationRoutes } from "../util/constants";
import { getCookie } from "../util/cookie";
import serviceAxios from "../util/request";

export const getRecommendation = async () => {
    if (getCookie("userLogin")) {
            console.log(document.cookie)
            const result = await serviceAxios({
                url: backendUrl + recommendationRoutes + "/getRecommendationsWithCookies",
                method: "get",
            });
          return result;
    }
    else{
          const result = await serviceAxios({
            url: backendUrl + recommendationRoutes + "/getRecommendations",
            method: "get",
          });
          return result;
    }
};