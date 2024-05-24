import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://home-con-node-js.vercel.app/api",
  withCredentials: true,
});

export default apiRequest;