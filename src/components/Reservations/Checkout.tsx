import { useMakePaymentMutation } from '@/features/reservations'
import { PaymentProps, PropertyProp } from '@/utils/types'
import { Spinner, useToast } from '@chakra-ui/react'
import moment from 'moment'
import { useRouter, redirect} from 'next/navigation'
import { useForm } from 'react-hook-form'
import { IoIosArrowDropleftCircle } from 'react-icons/io'
import { PaymentField } from '../shared/Input'

interface Room {
  room: any
  property: PropertyProp | undefined
  setShowCheckout: (bool: boolean) => void
  checkIn: string
  checkOut: string
}

export default function Checkout({
  room,
  property,
  setShowCheckout,
  checkIn,
  checkOut,
}: Room) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentProps>({})


  const toast = useToast()

  const [makePayment, { isLoading }] = useMakePaymentMutation()

  const route = useRouter()

  const paymentHandler = (data: PaymentProps) => {
    const {email, phonenumber, first_name, last_name, other_names} = data
    const newData = {
      toast,
      route,
      email,
      phonenumber,
      amount: room?.price,
      room_id: room?.id,
      property_id: property?.id,
      start_date: moment(checkIn).format('YYYY-MM-DDTHH:mm:ssZ'),
      end_date: moment(checkOut).format('YYYY-MM-DDTHH:mm:ssZ'),
      name: room?.name,
      first_name,
      last_name,
      other_names,
    }

    makePayment(newData)
  }

  return (
    <div className="max-w-[1000px] mx-auto pt-10">
      <div
        onClick={() => setShowCheckout(false)}
        className="flex  items-center space-x-2 cursor-pointer"
      >
        <IoIosArrowDropleftCircle size={35} />
        <p>Go back</p>
      </div>
      <div className="mt-10 quicksand bg-[#F5F5F5] px-2 py-8">
        <form onSubmit={handleSubmit(paymentHandler)} className="flex justify-center ">
          <div className="w-full text-lg px-10 border-dashed border-r">
            <h1 className="text-xl text-slate-500 font-medium">
              Your Reservation
            </h1>
            <div className=" border-dashed border-b pb-3 space-y-2 mt-10 text-[#747171] font-medium">
              <div className="text-sm flex justify-between space-x-4">
                <p>Room name:</p>
                <p>{room?.name}</p>
              </div>
              <div className="text-sm flex justify-between">
                <p>Check in date:</p>
                <p>{moment(checkIn).format('ddd, Do YYYY')}</p>
              </div>

              <div className="text-sm flex justify-between">
                <p>Check out date:</p>
                <p>{moment(checkOut).format('ddd, Do YYYY')}</p>
              </div>

              <div className="text-sm flex justify-between">
                <p>Subtotal:</p>
                <p> &#8358; {room?.price.toLocaleString()}</p>
              </div>
            </div>
          </div>
          <div className="text-lg px-10 border-dashed border-r w-full">
            <h1 className="text-xl text-[#747171] font-medium">
              Guest Information
            </h1>

            <div className="space-y-4 mt-10">
              <PaymentField
                type="name"
                errors={errors?.first_name}
                message="required"
                placeHolder="First name"
                name="first_name"
                required
                register={register}
              />

               <PaymentField
                type="name"
                errors={errors?.last_name}
                message="required"
                placeHolder="Last name"
                name="last_name"
                required
                register={register}
              />

               <PaymentField
                type="name"
                errors={errors.other_names}
                message="required"
                placeHolder="Other names"
                name="other_names"
                required
                register={register}
              />

               <PaymentField
                type="name"
                errors={errors.email}
                message="required"
                placeHolder="Email address"
                name="email"
                required
                register={register}
              />

               <PaymentField
                type="name"
                errors={errors.phonenumber}
                message="required"
                placeHolder="Phone number"
                name="phonenumber"
                required
                register={register}
              />

        
            </div>
          </div>
          <div className="text-lg px-10 w-full">
            <h1 className="text-xl text-[#747171] font-medium">
              Payment Method
            </h1>

            {/* <div className="flex space-x-4 mt-10">
              <LiaCcVisa size={30} />
              <FaCcMastercard size={28} />
            </div> */}

            {/* <div className="pt-4 space-y-4">
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
            </div> */}

            <button
              className="w-full text-white mt-10 text-sm py-2 rounded-lg"
              style={{ background: property?.primary_color }}
            >
             {isLoading ? <Spinner/> :  'Make Payment' }
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
