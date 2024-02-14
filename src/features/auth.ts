import { FormValues, LoginResponse } from '../utils/types';
import { api } from './api';

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<string, FormValues>({
      query: (body) => ({
        url: `/auth/login`,
        method: 'POST',
        body
      }),
      transformResponse: (res: LoginResponse, meta, arg): any => {
        console.log(">>>>res", res);
        localStorage.setItem('access_token', res.access_token)
        return {res}
      },
    }),
    createAccount: build.mutation<string, FormValues>({
      query: (body) => ({
        url: `/auth/pm/create/account`,
        method: 'POST',
        body
      }),
      transformResponse: (res, meta, arg): any => {
        console.log("meerra", meta);
        
        return {res: meta?.response?.status}
      },
    })
  })
})


export const {useCreateAccountMutation, useLoginMutation} = authApi