import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommerce-app-backend-ycmq.onrender.com"
});

API.interceptors.request.use(req => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;