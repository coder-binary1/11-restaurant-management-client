import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "https://11-restaurant-management-server.vercel.app/",
  baseURL: "http://localhost:5000/",
});

const useAxiosPublic = () => {
  return axiosInstance;
};

export default useAxiosPublic;
