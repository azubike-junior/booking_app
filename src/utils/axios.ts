import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    if (config.url?.includes("/login")) return config;
    if (config.url?.includes("/pm/create/account")) return config;

    // validateToken()

    config.headers!["Authorization"] =
      "Bearer " + localStorage.getItem("access_token");
    config.headers!["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// const basic = {
//   username: 'bookingengine',
//   password: 'secretbookingenginesecret'
// }

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const request = error.config;
    //this is actual request that was sent, and error is received in response to that request
    if (error.response.status === 401 && !request._retry) {
      request._retry = true;
      // axios.defaults.headers.common["Authorization"] =
      //   "Bearer " + localStorage.getItem("access_token");
      axios.defaults.headers.common["Content-Type"] = "application/json";
      // axios.defaults.headers.common["Authorization"] =
      //   "Basic " + basic;
      return axios(request);
    }
  }
);

export default axiosInstance