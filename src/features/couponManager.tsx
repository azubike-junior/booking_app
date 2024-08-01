import toast from 'react-hot-toast'
import { Coupon, CouponProp, SubscriptionProp } from '../utils/types'
import { api } from './api'

export const couponApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createCoupon: builder.mutation<void, CouponProp>({
      query: (data) => ({
        url: `/coupon/create`,
        method: 'POST',
        data,
      }),
      transformResponse: (res: any, meta, arg: CouponProp): any => {
        const { setOpenCoupon } = arg
        console.log(">>>>>res", res);
        
        if (res.status === 201) {
          toast.success('Coupon created successfully')
          setOpenCoupon(false)
        }

        return res.data
      },
      invalidatesTags: ['Coupon'],
    }),

    couponsByPropertyId: builder.query<Coupon[], string>({
      query: (id) => ({
        url: `/coupon/property/${id}`,
        method: 'GET',
      }),
      transformResponse: (res: any): any => {
        return res.data.data
      },
      providesTags:['Coupon']
    }),
    subscriptionPlan: builder.query<SubscriptionProp, string | undefined>({
      query: (id) => ({
        url: `/subscription/find/${id}`,
        method: 'GET',
      }),
      transformResponse: (res: any): any => {
        return res.data
      },
    }),
  }),
})

export const {
  useCreateCouponMutation,
  useCouponsByPropertyIdQuery,
  useSubscriptionPlanQuery,
} = couponApi
