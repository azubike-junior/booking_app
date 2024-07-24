import { BOOKINGS_COLUMNS } from '@/utils'
import { useForm } from 'react-hook-form'
import { CiFilter } from 'react-icons/ci'
import { FaRegCalendar } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import InputField from '../shared/Input'
import RoomOrderTable from '../Table/RoomOrder'

export default function Settings() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<any>({})
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

      <div className="w-4/12 bg-[#FEF3EB] py-5 mt-8 px-3 rounded-lg shadow-md shadow-slate-100">
        <span className="text-[#673816] text-base">Coupon Details</span>
      </div>

      <button className="bg-[#1A2B47] text-white px-10 py-2 rounded-md mt-4 ">
        Add Coupon
      </button>

      <div className="w-10/12 pt-8 flex justify-between items-center">
        <p className="text-[#1A2B47] font-semibold">Coupon History</p>

        <div className="flex justify-between space-x-4">
          <div className="px-4 py-2 rounded-[20px] flex space-x-2 items-center justify-start border-[0.2px] border-[#E8EAED] pr-20">
            <CiFilter /> <span className="text-[#48556C] text-sm">Filter</span>
          </div>
          <div className="px-4 py-2 rounded-[20px] flex space-x-2 items-center justify-start border-[0.2px] border-[#E8EAED] pr-20">
            <FaRegCalendar />{' '}
            <span className="text-[#48556C] text-sm">Date</span>
          </div>{' '}
          <div className="px-4 py-2 rounded-[20px] flex space-x-2 items-center justify-start border-[0.2px] border-[#E8EAED] pr-20">
            <span className="text-[#48556C] text-sm">Export</span>{' '}
            <IoIosArrowDown size={14} />
          </div>
        </div>
      </div>

      <div className="w-10/12 pt-10">
        {/* {loadingRoomOrders ? (
          <div className="flex justify-center items-center pb-6">
            <Spinner />{' '}
          </div>
        ) : null} */}
        <RoomOrderTable columns={BOOKINGS_COLUMNS} data={[]} />
      </div>

      <div className="flex items-center justify-between w-10/12 pt-6">
        <div className='flex space-x-4'>
          <div className=" py-2 rounded-[20px] flex space-x-2 items-center justify-start border-[0.2px] border-[#E8EAED] px-14">
            <span className="text-[#48556C] text-sm">Previous</span>
          </div>
          <div className="px-14 py-2 rounded-[20px] flex space-x-2 items-center justify-start border-[0.2px] border-[#E8EAED]">
            <span className="text-[#48556C] text-sm">Next</span>
          </div>{' '}
        </div>

        <p className='text-sm'>Page 0 of 0</p>
      </div>
    </div>
  )
}
