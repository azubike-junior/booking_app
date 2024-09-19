import toast from 'react-hot-toast';
import { FormValues, LoginResponse } from '../utils/types';
import { api } from './api';

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<string, FormValues>({
      query: (data) => ({
        url: `/auth/login`,
        method: 'POST',
        data
      }),
      transformResponse: (res: any, meta, arg:FormValues): any => {
        const { router } = arg
        if (res.status === 200) {
            router.push('/dashboard')
              toast.success(
              'Login successfully'
            )
      }
        return {res}
      },
      transformErrorResponse: (res: any) => {
          toast.error(
              res?.data.error
            )
      }
    }),
    createAccount: build.mutation<string, FormValues>({
      query: (data) => ({
        url: `/auth/pm/create/account`,
        method: 'POST',
        data
      }),
      transformResponse: (res: any, meta, arg): any => {
        const {  router } = arg
        if (res.status === 201) {
          toast.success(
            "A Verification email has been sent to your email inbox, please verify your email "
          )
        } 
        return res.status
      },
      transformErrorResponse: (res: any) => {

        if (res.status === 500) {
            toast.error(
             res.data.error
            )
        }
        
        
        if (res.status === 400) {
             toast.error(
              res.data.error
            )
          }
      }
    }),
     getAccount: build.query<LoginResponse, string>({
      query: (id) => ({
        url: `/account/find/${id}`,
        method: 'GET',
       }),
        transformResponse: (res: any, meta): any => {
        return res.data
      },

       providesTags: ['Accounts']
     }),
    editAccount: build.mutation<string, LoginResponse>({
      query: ({id, ...data}) => ({
        url: `/account/edit/${id}`,
        method: 'PUT',
        data
      }),
      transformResponse: (res: any, meta, arg): any => {
        const { toast } = arg
        if (res.status === 200) {
          toast({
            title: 'Account updated successfully',
            description: '',
            status: 'success',
            duration: 9000,
            isClosable: true,
            position: 'top-right',
          })
        }
        
        return {res: res.status}
      },
      invalidatesTags: ['Accounts',]
    }),
    contactUs: build.mutation<string, FormValues>({
      query: (data) => ({
        url: `/contact-us`,
        method: 'POST',
        data
      }),
      transformResponse: (res: any, meta, arg): any => {
        if (res.status === 200) {
          toast.success(
            "Your message has been sent successfully"
          )
          
        }
        
        return {res: res.status}
      },
    }),
    
  })
})


export const {useCreateAccountMutation, useLoginMutation, useGetAccountQuery, useEditAccountMutation, useContactUsMutation} = authApi