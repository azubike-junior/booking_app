import toast from 'react-hot-toast'
import { CouponProp, SubscriptionProp, _Coupon } from '../utils/types'
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
        if (res.status === 201) {
          toast.success('Coupon created successfully')
          setOpenCoupon(false)
        }

        return res.data
      },
      invalidatesTags: ['Coupon'],
    }),

    couponsByPropertyId: builder.query<_Coupon[], string>({
      query: (id) => ({
        url: `/coupon/property/${id}`,
        method: 'GET',
      }),
      transformResponse: (res: any): any => {
        return res.data.data
      },
      providesTags: ['Coupon'],
    }),
    deleteCouponId: builder.mutation<string, void>({
      query: (id) => ({
        url: `/coupon/del/${id}`,
        method: 'DELETE',
      }),
      transformResponse: (res: any): any => {
        return res.data.data
      },
     invalidatesTags: ['Coupon'],
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
    getDashboardSummaries: builder.query<any, void>({
      query: () => ({
        url: `/dashboard`,
        method: 'GET',
      }),
      transformResponse: (res: any): any => {
        return res.data
      },
    }),
  }),
})

export const {
  useGetDashboardSummariesQuery,
  useDeleteCouponIdMutation,
  useCreateCouponMutation,
  useCouponsByPropertyIdQuery,
  useSubscriptionPlanQuery,
} = couponApi
