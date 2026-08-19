import axios from "axios";

const UseAxios = () => {
  const axiosInstance = axios.create({
    baseUrl: "http://localhost:5000",
  });
  return axiosInstance;
};

export default UseAxios;
