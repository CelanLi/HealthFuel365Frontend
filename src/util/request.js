import axios from "axios";
import qs from "qs";

// create axios request instance
const serviceAxios = axios.create({
  baseURL: "", // base request address
  timeout: 10000,  
  withCredentials: false,  
});

serviceAxios.interceptors.request.use(
  (config) => {
     
    //   if (serverConfig.useTokenAuthorization) {
    //     config.headers["Authorization"] = localStorage.getItem("token");  
    //   }
     
    // if (!config.headers["content-type"]) {
    //    
    //   if (config.method === "post") {
    //     config.headers["content-type"] = "application/x-www-form-urlencoded";  
    //     config.data = qs.stringify(config.data);  
    //   } else {
        config.headers["content-type"] = "application/json";  
    //   }
    // } 
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

//  create response interceptors
serviceAxios.interceptors.response.use(
  (res) => {
    return res.data; 
    // To do: Add Logics
  },
  (error) => {
    let message = "";
    if (error && error.response) {
      if (error.response.status === 404) {
        message = `Request address fault: ${error.response.config.url}`;
      }
    }
    return Promise.reject(message);
  }
);

export default serviceAxios;
