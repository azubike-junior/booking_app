import toast from 'react-hot-toast';
import { PaymentProps, ReservationProps, ReservationRes, SubscriptionProp } from '../utils/types';
import { api } from './api';

export const reservationApi = api.injectEndpoints({
  endpoints: (builder) => ({
    makePayment: builder.mutation<string, PaymentProps>({
      query: (data) => ({
        url: `/payment/paystack/initiate`,
        method: 'POST',
        data
      }),
      transformResponse: (res: any, meta, arg: PaymentProps): any => {
        const { route } = arg
        route.replace(res.data.data.authorization_url)
         
        // if (res?.status === 200) {
        //   toast({
        //     title: 'Room has been publish successfully',
        //     description: '',
        //     status: 'success',
        //     duration: 9000,
        //     isClosable: true,
        //     position: 'top-right',
        //   })
        // }
         
        return { res }
      },
    }),
    makePaymentOnArrival: builder.mutation<string, PaymentProps>({
      query: (data) => ({
        url: `/reservation/create`,
        method: 'POST',
        data
      }),
      transformResponse: (res: any, meta, arg: PaymentProps): any => {
        const {  route, trigger } = arg
         
        if (res?.status === 200) {
          console.log(">>>>res.data", res.data);
          
          trigger(res.data.reservation_id)
          route.push(`/${res.data.reservation_id}/success`)
          toast.success( 'Room has been booked successfully')
        }
        return res.data
      },
       transformErrorResponse: (res: any, meta, arg: PaymentProps): any => {
        toast.error(res.data.error)
      },
      invalidatesTags: ['Property']
    }),
    getReservationsByRoomID: builder.query<ReservationProps[], { id: string, page: number }>({
      query: ({ id, page }) => ({
        url: `/reservation/room/${id}?page=${page}&pageSize=${10}`,
        method: 'GET',
      }),
      transformResponse: (res: ReservationRes, meta): any => {
        return res.data
      },
      providesTags: ['Property',]
    }),
     getReservationsByID: builder.query<ReservationProps, string>({
      query: (id) => ({
        url: `/reservation/find/${id}`,
        method: 'GET',
      }),
      transformResponse: (res: {data: {data:ReservationProps}, message:""}, meta): any => {
        return res.data.data
      },
      providesTags: ['Property',]
    }),
    getReservation: builder.query<ReservationProps, string>({
      query: (id) => ({
        url: `/reservation/find/${id}`,
        method: 'GET',
      }),
      transformResponse: (res: { data: ReservationProps, message: string }, meta): any => {
        return res.data
      },
      providesTags: ['Property',]
    }),
    getRoomOrderByReservationId: builder.query<any, string>({
      query: (id) => ({
        url: `/room-order/reservation/${id}`,
        method: 'GET',
      }),
      transformResponse: (res: any, meta): any => {
        console.log(">>>res", res.data);
        
        return res.data.data
      },
      providesTags: ['Property',]
    }),
    getReservationsByPropertyId: builder.query < ReservationProps[], string>({
        query: (id) => ({
          url: `/reservation/property/${id}?page=0&pageSize=10`,
          method: 'GET',
          }),
          transformResponse: (res: any, meta): any => {
        return res.data.data
      },
      providesTags: ['Property',]
    }),
     subscriptionPlans: builder.query < SubscriptionProp[], void>({
        query: () => ({
          url: `/subscription/all`,
          method: 'GET',
       }),
       transformResponse: (res: any): any => {
         return res.data
       }
     }),
     subscriptionPlan: builder.query <SubscriptionProp, string|undefined>({
        query: (id) => ({
          url: `/subscription/find/${id}`,
          method: 'GET',
       }),
         transformResponse: (res: any): any => {
        return res.data
      },
     }),
     
  })
})

export const {useMakePaymentMutation, useGetReservationsByIDQuery, useLazyGetRoomOrderByReservationIdQuery, useMakePaymentOnArrivalMutation, useGetReservationsByRoomIDQuery, useGetReservationQuery, useGetReservationsByPropertyIdQuery, useGetRoomOrderByReservationIdQuery, useSubscriptionPlansQuery, useSubscriptionPlanQuery} = reservationApi

