import { getItem } from '@/utils';
import { BaseQueryFn, createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import toast from 'react-hot-toast';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers['token'] = token;
    }
    config.headers['Authorization'] = 'Basic ' + btoa('bookingengine:secretbookingenginesecret');

    return config;
  },
  (error) => {
    // Handle the error
    return Promise.reject(error);
  }
);

const axiosBaseQuery = (
  { baseUrl }: { baseUrl: string } = { baseUrl: '' }
): BaseQueryFn<
  {
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
  },
  unknown,
  unknown
  > => async ({ url, method, data }) => {
  
    try {
     let headers: AxiosRequestConfig['headers'] = {};
      const token = localStorage.getItem("access_token");
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }

    headers.Authorization = 'Basic ' + btoa('bookingengine:secretbookingenginesecret');


      if (url === "/file-upload") {
        headers['Content-Type'] = 'multipart/form-data';
      }
    const result = await axiosInstance({ url: baseUrl + url, method, data });
    return { data: result };
  } catch (axiosError) {
    let err: any = axiosError as AxiosError;

    if (err) {
      if (err.response?.data.message) {
         toast.error(err.response?.data.message, {
          duration: 4000,
          position: 'top-right'
        })
      }
      if (err.response?.data.error) {
          toast.error(err.response?.data.error, {
          duration: 4000,
          position: 'top-right'
        })
      }
    }
    
    return { error: { status: err.response?.status, data: err.response?.data } };
  }
};

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const token = getItem("access_token")
    headers.set('token', getItem("access_token"))
    
    headers.set('Authorization', 'Basic ' + btoa('bookingengine:secretbookingenginesecret'))

    return headers
  },
})



const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 })

/**
 * Create a base API to inject endpoints into elsewhere.
 * Components using this API should import from the injected site,
 * in order to get the appropriate types,
 * and to ensure that the file injecting the endpoints is loaded
 */
export const api = createApi({
  /**
   * `reducerPath` is optional and will not be required by most users.
   * This is useful if you have multiple API definitions,
   * e.g. where each has a different domain, with no interaction between endpoints.
   * Otherwise, a single API definition should be used in order to support tag invalidation,
   * among other features
   */
  reducerPath: 'splitApi',
  /**
   * A bare bones base query would just be `baseQuery: fetchBaseQuery({ baseUrl: '/' })`
   */
  // baseQuery: baseQueryWithRetry,
  baseQuery: axiosBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  }),
  /**
   * Tag types must be defined in the original API definition
   * for any tags that would be provided by injected endpoints
   */
  tagTypes: ['Property','Accounts', 'Coupon'],
  /**
   * This api has endpoints injected in adjacent files,
   * which is why no endpoints are shown below.
   * If you want all endpoints defined in the same file, they could be included here instead
   */
  endpoints: () => ({}),
})

export const enhancedApi = api.enhanceEndpoints({
  endpoints: () => ({
    getPost: () => 'test',
  }),
})
