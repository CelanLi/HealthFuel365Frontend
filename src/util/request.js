import axios from "axios";
import qs from "qs";
import { Modal } from "antd";

// create axios request instance
const serviceAxios = axios.create({
  baseURL: "", // base request address
  timeout: 10000,
  withCredentials: false,
});

serviceAxios.interceptors.request.use(
  (config) => {
    //   if (serverConfig.useTokenAuthorization) {
    config.headers["Authorization"] = document.cookie;

    // headers: {
    //   Authorization: document.cookie, //put cookie into header
    // },
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

const showLoginReminder = () => {
  Modal.error({
    title: "please log in",
    content: "Sorry, log in is reuired",
    onOk: () => {
      window.location.href = "http://localhost:3000";
    },
  });
};

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
      } else if (error.response.status === 401) {
        showLoginReminder();
      }
    }

    return Promise.reject(message);
  }
);

export default serviceAxios;
