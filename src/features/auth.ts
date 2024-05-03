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
        if (res.access_token) {
            router.push('/properties')
              toast({
                title: 'Login successfully',
                description: '',
                status: 'success',
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
        const { toast, router } = arg
        if (meta?.response?.status === 201) {
            router.push('/auth/login')
              toast({
                title: 'Account created successfully',
                description: '',
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: 'top-right',
            })
        } 
        
        return {res: meta?.response?.status}
      },
    }),
     getAccount: build.query<LoginResponse, string>({
      query: (id) => ({
        url: `/account/find/${id}`,
        method: 'GET',
       }),
       providesTags: ['Accounts']
     }),
    editAccount: build.mutation<string, LoginResponse>({
      query: ({id, ...body}) => ({
        url: `/account/edit/${id}`,
        method: 'PUT',
        body
      }),
      transformResponse: (res, meta, arg): any => {
        console.log(">>>>>ok", res, meta);
        
        const { toast } = arg
        if (meta?.response?.status === 200) {
          toast({
            title: 'Account updated successfully',
            description: '',
            status: 'success',
            duration: 9000,
            isClosable: true,
            position: 'top-right',
          })
        }
        
        return {res: meta?.response?.status}
      },
      invalidatesTags: ['Accounts',]
    }),
    
  })
})


export const {useCreateAccountMutation, useLoginMutation, useGetAccountQuery, useEditAccountMutation} = authApi