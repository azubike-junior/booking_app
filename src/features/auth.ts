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
      transformResponse: (res: LoginResponse, meta, arg:FormValues): any => {
        const { toast, router } = arg
          console.log(">>>>>meeta", meta, res, arg);
        
        if (res.access_token) {
            router.push('/properties')
              toast({
                title: 'Account created successfully',
                description: '',
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: 'top-right',
            })
        }
        if (!res.access_token) {
            router.push('/properties')
              toast({
              title: 'Invalid Login credentials',
              description: '',
              status: 'error',
              duration: 9000,
              isClosable: true,
              position: 'top-right',
            })
        }
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
          console.log(">>>>>meeta", meta, res, arg);


        const { toast, router } = arg
        
        if (meta?.response?.status === 201) {
            router.push('/properties')
              toast({
                title: 'Account created successfully',
                description: '',
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: 'top-right',
            })
        } else {
            toast({
              title: 'Invalid Login credentials',
              description: '',
              status: 'error',
              duration: 9000,
              isClosable: true,
              position: 'top-right',
            })
        }
       
             
        
        return {res: meta?.response?.status}
      },
    })
  })
})


export const {useCreateAccountMutation, useLoginMutation} = authApi