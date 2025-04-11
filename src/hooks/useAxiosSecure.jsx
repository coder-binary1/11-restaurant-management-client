import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "https://11-restaurant-management-server.vercel.app/",
  // baseURL: "https://11-restaurant-management-server.vercel.app/",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOutUser } = useAuth();
  const navigate = useNavigate("/");

  useEffect(() => {
    axiosInstance.interceptors.request.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.status === 401 || error.status === 403) {
          logOutUser();
          navigate("/login");
        }

        return Promise.reject(error);
      }
    );
  }, [logOutUser, navigate]);
  return axiosInstance;
};

export default useAxiosSecure;
