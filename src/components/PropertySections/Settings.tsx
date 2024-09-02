import { useCouponsByPropertyIdQuery } from '@/features/couponManager'
import { useEditPropertyMutation } from '@/features/property'
import { COUPON_COLUMNS } from '@/utils'
import { PropertyProp, SubscriptionProp } from '@/utils/types'
import { Spinner } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
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

  const [value, setValue] = useState('')

  const quillRef = useRef<any>(null)

  // Set initial value when the component mounts or property changes
  useEffect(() => {
    if (property?.booking_policy) {
      setValue(property.booking_policy) // Set the initial value as the HTML content
    }

    getHTML()
  }, [property?.booking_policy])

  const getHTML = () => {
    // Access the Quill instance
    if (quillRef.current) {
      const editor = quillRef.current.getEditor() // Get the Quill editor instance
      const html = editor.root.innerHTML // Get the HTML content from the editor
      console.log(html) // You can use the HTML content as needed
      return html
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<any>({})

  const { data, isLoading } = useCouponsByPropertyIdQuery(property?.id || '')

  console.log('>>>value', data)

  const [
    editProperty,
    { isLoading: editingProperty },
  ] = useEditPropertyMutation()

  const editPropertyHandler = (data: PropertyProp) => {
    const _data = { ...property, ...data, booking_policy: value }

    editProperty(_data)
  }

  return (
    <form onSubmit={handleSubmit(editPropertyHandler)} className="lato">
      <div className="border-[#B8BDC6] lg:border-[0.3px] w-full lg:w-9/12 rounded-lg py-12 lg:px-12 space-y-6">
        <div className="lg:flex space-y-4 lg:space-y-0 justify-between lg:space-x-6">
          <InputField
            name="whatsapp_number"
            label="Whatsapp Phone Number"
            type="text"
            register={register}
            // required
            placeHolder="Enter whatsapp number"
            defaultValue={property?.whatsapp_number}
            // errors={errors?.email}
            // message={'Email is required'}
          />
          <InputField
            name="email_address"
            label="Email Address"
            type="text"
            register={register}
            defaultValue={property?.email_address}
            placeHolder="Enter email"
            // errors={errors?.email}
            // message={'Email is required'}
          />
        </div>
        <div className="lg:flex space-y-4 lg:space-y-0 justify-between lg:space-x-6">
          <InputField
            name="phone_number"
            label="Contact Phone Number"
            type="text"
            register={register}
            defaultValue={property?.phone_number}
            placeHolder="Enter phone number"
            // errors={errors?.email}
            // message={'Email is required'}
          />
          <InputField
            name="web_address"
            label="Web Address"
            type="text"
            register={register}
            defaultValue={property?.web_address}
            placeHolder="Enter web address"
            // errors={errors?.email}
            // message={'Email is required'}
          />
        </div>

        <div className="lg:flex space-y-4 lg:space-y-0 justify-between lg:space-x-6">
          <InputField
            name="facebook_pixel_id"
            label="Facebook PIxel ID"
            type="text"
            register={register}
            defaultValue={property?.facebook_pixel_id}
            placeHolder="Enter facebook pixel ID"
            // errors={errors?.email}
            // message={'Email is required'}
          />
          <InputField
            name="google_tag_manager_id"
            label="Google Tag Manager ID"
            type="text"
            register={register}
            placeHolder="Enter google tag manager ID"
            defaultValue={property?.google_tag_manager_id}

            // message={'Email is required'}
          />
        </div>
         <div className="lg:flex space-y-4 lg:space-y-0 justify-between lg:space-x-6">
          <InputField
            name="payment_link"
            label="Payment Link"
            type="text"
            register={register}
            defaultValue={property?.payment_link}
            placeHolder="Enter Payment link"
            // errors={errors?.email}
            // message={'Email is required'}
          />
          <div className='w-full'>
            
         </div>

        </div>
      </div>

      <div className="w-full lg:w-9/12 pb-10">
        <div className="flex justify-between pt-6 items-center">
          <div className="">
            <h3 className="font-semibold text-lg">Booking Policy</h3>
            <p className="text-sm w-9/12 text-[#798489] italic">
              Adding a booking Policy helps your customers understand and
              navigate the guidelines of your establishment by clearly stating
              the rules for payments cancellations and changes
            </p>
          </div>

          <button
            type="submit"
            className="border-[#34C759] border-[0.4px] text-[#34C759] rounded-md p-2 px-8 text-sm hidden lg:block"
          >
            {editingProperty ? <Spinner /> : 'Update'}
          </button>
        </div>

        <ReactQuill
          ref={quillRef}
          theme="snow"
          value={value}
          defaultValue={property?.booking_policy}
          onChange={setValue}
          style={{ height: 150 }}
          placeholder="Add your booking policy.."
          className="my-10"
        />

        <button
          type="submit"
          className="border-[#34C759] border-[0.4px] text-[#34C759] rounded-md p-2 px-8 text-sm  lg:hidden mt-8"
        >
          {editingProperty ? <Spinner /> : 'Update'}
        </button>
      </div>

      <div className="w-10/12 bg-[#FEF3EB] py-6 mt-8 px-3 rounded-lg shadow-md shadow-slate-100">
        <span className="text-[#673816] text-base">Coupon Details</span>
      </div>

      <button
        type="button"
        onClick={() => setOpenCoupon(true)}
        className="bg-[#1A2B47] text-white px-10 py-2 rounded-md mt-4 "
      >
        Add Coupon
      </button>

      <div className="w-10/12 pt-8 flex justify-between items-center">
        <p className="text-[#1A2B47] font-semibold">Coupon History</p>

        <Filters />
      </div>

      <div className="overflow-scroll xl:w-10/12 pt-10 ">
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
    </form>
  )
}
