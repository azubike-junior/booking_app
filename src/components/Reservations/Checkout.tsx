import { PropertyProp, RoomProps } from '@/utils/types'
import { useForm } from 'react-hook-form'
import { FaCcMastercard } from 'react-icons/fa6'
import { LiaCcVisa } from 'react-icons/lia'

interface Room {
  room: RoomProps
  property: PropertyProp
}

export default function Checkout({ room, property }: Room) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({})

  return (
    <div className="max-w-[1000px] mx-auto mt-10 font-poppins bg-[#F5F5F5] px-2 py-8">
      <div className="flex justify-center ">
        <div className="w-full text-lg px-10 border-dashed border-r">
          <h1 className='text-xl text-slate-500'>Your Reservation</h1>
          <div className=" border-dashed border-b pb-3 space-y-2 mt-10">
            <div className="text-sm flex justify-between space-x-4">
              <p>{room?.name}</p>
              <p>{room?.price}</p>
            </div>
            <div className="text-sm flex justify-between">
              <p>Tue, Apr 16, 2024</p>
              <p>{room?.price}</p>
            </div>

            <div className="text-sm flex justify-between">
              <p>Subtotal</p>
              <p>{room?.price}</p>
            </div>
          </div>
        </div>
        <div className="text-lg px-10 border-dashed border-r w-full">
          <h1 className='text-xl text-slate-500'>Guest Information</h1>

          <div className="space-y-4 mt-10">
            <input
              className="w-full outline-none bg-white border-none p-2 text-sm "
              placeholder="Last Name"
            />
            <input
              className="w-full outline-none bg-white border-none p-2 text-sm "
              placeholder="Email Address Name"
            />
            <input
              className="w-full outline-none bg-white border-none p-2 text-sm "
              placeholder="Phone Number"
            />
            <input
              className="w-full outline-none bg-white border-none p-2 text-sm "
              placeholder="Address"
            />
            <input
              className="w-full outline-none bg-white border-none p-2 text-sm "
              placeholder="City"
            />
            <input
              className="w-full outline-none bg-white border-none p-2 text-sm "
              placeholder="Country"
            />
          </div>
        </div>
        <div className="text-lg px-10 w-full">
          <h1 className='text-xl text-slate-500'>Payment Method</h1>

          <div className="flex space-x-4 mt-10">
            <LiaCcVisa size={30} />
            <FaCcMastercard size={28} />
          </div>

          <div className="pt-4 space-y-4">
            <input
              className="w-full outline-none bg-white border-none p-2 text-sm "
              placeholder="Name on Card"
            />

            <input
              className="w-full outline-none bg-white border-none p-2 text-sm "
              placeholder="Card Number"
            />

            <input
              className="w-full outline-none bg-white border-none p-2 text-sm "
              placeholder="MM/YY"
            />
          </div>

          <button
            className="w-full text-white mt-4 text-sm py-2"
            style={{ background: property.primary_color }}
          >
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  )
}
