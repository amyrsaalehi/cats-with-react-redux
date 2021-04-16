import axios from "axios";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import "nprogress/nprogress";

// // The BASE_URL should be in .env file
// axios.defaults.baseURL = process.env.PROD_API_URL;
axios.defaults.baseURL = "https://api.thecatapi.com/v1/";


axios.interceptors.request.use((config) => {
  nProgress.start();
  // The API_KEY should be in .env file
  // config.headers["x-api-key"] = process.env.API_KEY;
  config.headers["x-api-key"] = "a4f34bb9-8e29-4dbe-a164-04e16ebf3e4fa4f34bb9-8e29-4dbe-a164-04e16ebf3e4f";
  config.headers["Accept-Language"] = "en";
  return config;
});

axios.interceptors.response.use(
  (response) => {
    nProgress.done();
    return response;
  },
  (error) => {
    nProgress.done();
    return Promise.reject(error);
  }
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};
