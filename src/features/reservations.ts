import { PaymentProps, ReservationProps, ReservationRes } from '../utils/types';
import { api } from './api';

export const reservationApi = api.injectEndpoints({
  endpoints: (builder) => ({
    makePayment: builder.mutation<string, PaymentProps>({
      query: (body) => ({
        url: `/payment/paystack/initiate`,
        method: 'POST',
        body
      }),
       transformResponse: (res: any, meta, arg:PaymentProps): any => {
         const { toast, route } = arg
         route.replace(res.data.authorization_url)
         
         if (meta?.response?.status === 200) {
           toast({
                title: 'Room has been publish successfully',
                description: '',
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: 'top-right',
            })
         }
         
        return {res}
      },
     invalidatesTags:['Property']
    }),
     getReservationsByRoomID: builder.query<ReservationProps[], {id: string, page: number}>({
      query: ({id, page}) => ({
        url: `/reservation/room/${id}?page=${page}&pageSize=${10}`,
        method: 'GET',
       }),
        transformResponse: (res: ReservationRes, meta): any => {
        return res.data
      },
      providesTags: ['Property',]
     }),
      getReservation: builder.query<ReservationProps, string>({
      query: (id) => ({
        url: `/reservation/find/${id}`,
        method: 'GET',
        }),
        transformResponse: (res:{data: ReservationProps, message: string}, meta): any => {
          return res.data
        },
      providesTags: ['Property',]
     }),
  })
})

export const {useMakePaymentMutation, useGetReservationsByRoomIDQuery, useGetReservationQuery} = reservationApi

