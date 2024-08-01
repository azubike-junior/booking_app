import { useCouponsByPropertyIdQuery } from '@/features/couponManager'
import { COUPON_COLUMNS } from '@/utils'
import { PropertyProp, SubscriptionProp } from '@/utils/types'
import { Spinner } from '@chakra-ui/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Coupon from '../Modals/Coupon'
import SubscriptionDetails from '../Modals/SubscriptionDetails'
import Filters from '../shared/Filters'
import InputField from '../shared/Input'
import Subscription from '../Subscription'
import CouponTable from '../Table/CouponTable'
import Pagination from '../Table/Pagination'

type prop = {
  property: PropertyProp
}

export default function Settings({ property }: prop) {
  const [openCoupon, setOpenCoupon] = useState(false)
  const [openSubDetails, setOpenSubDetails] = useState(false)
  const [subSelected, setSubSelected] = useState<SubscriptionProp | {}>({})

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<any>({})

  const { data, isLoading } = useCouponsByPropertyIdQuery(property.id)

  console.log('>>>>>>>data', data)

  return (
    <div className="lato">
      <form className="border-[#B8BDC6] border-[0.3px] w-9/12 rounded-lg py-12 px-16 space-y-6">
        <div className="flex justify-between space-x-6">
          <InputField
            name="email"
            label="Whatsapp Phone Number"
            type="email"
            register={register}
            required
            placeHolder="08123456789"
            // errors={errors?.email}
            message={'Email is required'}
          />
          <InputField
            name="email"
            label="Email Address"
            type="email"
            register={register}
            required
            placeHolder="joedoe@gmail.com"
            // errors={errors?.email}
            message={'Email is required'}
          />
        </div>
        <div className="flex justify-between space-x-6">
          <InputField
            name="email"
            label="Contact Phone Number"
            type="email"
            register={register}
            required
            placeHolder="08123456789"
            // errors={errors?.email}
            message={'Email is required'}
          />
          <InputField
            name="email"
            label="Coupon Expiration Date"
            type="email"
            register={register}
            required
            placeHolder="10/07/2024"
            // errors={errors?.email}
            message={'Email is required'}
          />
        </div>

        <div className="flex justify-between space-x-6">
          <InputField
            name="email"
            label="Facebook PIxel ID"
            type="email"
            register={register}
            required
            placeHolder="08123456789"
            // errors={errors?.email}
            message={'Email is required'}
          />
          <InputField
            name="email"
            label="Google Tag Manager ID"
            type="email"
            register={register}
            required
            placeHolder="10/07/2024"
            // errors={errors?.email}
            message={'Email is required'}
          />
        </div>
      </form>

      <div className="w-9/12">
        <div className="flex justify-between pt-6 items-center">
          <div className="">
            <h3 className="font-semibold text-lg">Booking Policy</h3>
            <p className="text-sm w-9/12 text-[#798489] italic">
              Adding a booking Policy helps your customers understand and
              navigate the guidelines of your establishment by clearly stating
              the rules for payments cancellations and changes
            </p>
          </div>

          <button className="border-[#34C759] border-[0.4px] text-[#34C759] rounded-md p-2 px-8 text-sm">
            Save
          </button>
        </div>

        <textarea
          className="w-full bg-[#FCFCFF] border-[#D7DADE] border-[0.3px] rounded-lg mt-4 px-4 py-4 text-sm text-[#E4E6E8] h-44 outline-none"
          placeholder="Add your booking policy.."
        />
      </div>

      <div className="w-10/12 bg-[#FEF3EB] py-6 mt-8 px-3 rounded-lg shadow-md shadow-slate-100">
        <span className="text-[#673816] text-base">Coupon Details</span>
      </div>

      <button
        onClick={() => setOpenCoupon(true)}
        className="bg-[#1A2B47] text-white px-10 py-2 rounded-md mt-4 "
      >
        Add Coupon
      </button>

      <div className="w-10/12 pt-8 flex justify-between items-center">
        <p className="text-[#1A2B47] font-semibold">Coupon History</p>

        <Filters />
      </div>

      <div className="w-10/12 pt-10">
        {isLoading ? (
          <div className="flex justify-center items-center pb-6">
            <Spinner />{' '}
          </div>
        ) : null}
        <CouponTable columns={COUPON_COLUMNS} data={data ?? []} />
      </div>
      <Pagination />
      <Subscription
        openSubDetails={openSubDetails}
        setOpenSubDetails={setOpenSubDetails}
        setSubSelected={setSubSelected}
      />

      <Coupon
        property={property}
        openCoupon={openCoupon}
        setOpenCoupon={setOpenCoupon}
      />

      <SubscriptionDetails
        openSubDetails={openSubDetails}
        setOpenSubDetails={setOpenSubDetails}
        subSelected={subSelected}
      />
    </div>
  )
}
