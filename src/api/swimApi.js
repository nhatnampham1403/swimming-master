import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const instance = axios.create({
  // <<<<<<< HEAD
  // baseURL: "http://localhost:3000",
  // baseURL: "http://192.168.43.99:3000",
  baseURL: "https://api.goswim.fun",
  // baseURL: "https://fresh-vans-try-113-185-43-109.loca.lt",
  // =======
  //     baseURL: "http://localhost:3000",
  //     // baseURL: "http://192.168.43.99:3000",
  //     // baseURL: "https://fresh-vans-try-113-185-43-109.loca.lt",

  // >>>>>>> 5bb612b8fe51eb608dd58f3d0ef61912a0fd7131
});

instance.defaults.timeout = 5000;
instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
