import axios from "axios";
import { Modal } from "antd";
import { useNavigate } from "react-router";

// create axios request instance
const serviceAxios = axios.create({
  baseURL: "", // base request address
  timeout: 10000,
  withCredentials: false,
});

serviceAxios.interceptors.request.use(
  (config) => { 
    config.headers["Authorization"] = document.cookie; 
    config.headers["content-type"] = "application/json"; 
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const showLoginReminder = () => {
  // navigate = useNavigate();
  Modal.error({
    title: "please log in",
    content: "Sorry, log in is reuired",
    onOk: () => {
      window.location.href = "http://localhost:3000";
      // navigate("/login");
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
      else {
        message = `Error: ${error.response.data.message}`;
      }
    }

    return Promise.reject(message);
  }
);

export default serviceAxios;
