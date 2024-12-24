import axios from "axios";
import { navigateToLogin } from "@/utils/navigation";

const axiosInstance = axios.create({
  baseURL: "/api",
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      navigateToLogin();
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
