import { useGetAccountQuery } from '@/features/auth'
import {
  useMakePaymentMutation,
  useMakePaymentOnArrivalMutation,
} from '@/features/reservations'
import { getItem } from '@/utils'
import { PaymentProps, PropertyProp, RoomOrderProp } from '@/utils/types'
import { Spinner, useToast } from '@chakra-ui/react'
import moment from 'moment'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { IoIosArrowDropleftCircle } from 'react-icons/io'
import { PaymentField } from '../shared/Input'

interface Room {
  room: any
  property: PropertyProp | undefined
  setOpenCheckout: (bool: boolean) => void
  checkIn: string
  checkOut: string
  cartItems: RoomOrderProp[]
  total: number
}

export default function Checkout({
  room,
  property,
  setOpenCheckout,
  checkIn,
  checkOut,
  cartItems,
  total,
}: Room) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentProps>({})

  //   useEffect(() => {
  //   setFirstname(getItem('first_name'))
  // }, [])

  const toast = useToast()

  const [makePayment, { isLoading }] = useMakePaymentMutation()
  const [
    makePaymentOnArrival,
    { isLoading: loadingPaymentOnArrivalResponse },
  ] = useMakePaymentOnArrivalMutation()

  const route = useRouter()

  console.log(">>>>>>cartItems", cartItems);
  

  const orders = cartItems.map((c) => {
    return {
      ...c,
      start_date: moment(c.start_date).format('YYYY-MM-DDTHH:mm:ssZ'),
      end_date: moment(c.end_date).format('YYYY-MM-DDTHH:mm:ssZ'),
    }
  })

  const onlinePaymentHandler = (data: PaymentProps) => {
    const { email, phonenumber, first_name, last_name } = data
    const newData = {
      toast,
      route,
      email,
      phonenumber,
      amount: total,
      property_id: property?.id,
      first_name,
      last_name,
      orders,
      type: 'booking',
      account_id: getItem('user_id'),
    }

    makePayment(newData)
     .unwrap()
      .then((payload) => {})
      .catch((error) => {
        console.log(">>>>>>>e");
        
        toast({
          title: error?.data?.error,
          description: '',
          status: 'error',
          duration: 9000,
          isClosable: true,
          position: 'top-right',
        })
      })
  }

  const { data: user } = useGetAccountQuery(getItem('user_id'))

  const onArrivalPaymentHandler = (data: PaymentProps) => {
     try {
    const { email, phonenumber, first_name, last_name } = data
    const newData = {
      toast,
      route,
      email,
      phonenumber,
      amount: total,
      property_id: property?.id,
      first_name,
      last_name,
      orders,
      type: 'booking',
      account_id: getItem('user_id'),
    }

    makePaymentOnArrival(newData)
      .unwrap()
      .then((payload) => {})
      .catch((error) => {
        console.log(">>>>>>>e");
        
        toast({
          title: error?.data?.error,
          description: '',
          status: 'error',
          duration: 9000,
          isClosable: true,
          position: 'top-right',
        })
      })
    } catch (err) {}
       
  }

  return (
    <div className="max-w-[1000px] mx-auto pt-10">
      <div
        onClick={() => setOpenCheckout(false)}
        className="flex  items-center space-x-2 cursor-pointer px-8 lg:px-0"
      >
        <IoIosArrowDropleftCircle size={35} />
        <p>Go back</p>
      </div>
      <div className="mt-10 quicksand bg-[#F5F5F5] px-2 py-8">
        <form
          // onSubmit={handleSubmit(paymentHandler)}
          className="lg:flex justify-center space-y-4 lg:space-y-0"
        >
          <div className="w-full text-lg px-10 border-dashed border-r">
            <h1 className="text-xl text-slate-500 font-medium">
              Your Reservation
            </h1>
            <div className=" border-dashed border-b pb-3 space-y-2 mt-6 lg:mt-10 text-[#747171] font-medium">
              <div className="text-sm space-y-2">
                <p className="font-bold ">Room orders:</p>
                <hr />
                {/* <p>{room?.name}</p> */}
                {cartItems.map((c) => {
                  return (
                    <div
                      key={c.room_id}
                      className="text-sm flex justify-between "
                    >
                      <p className="w-44 lg:w-24">{c?.room_name}</p>
                      <div className="w-44 lg:w-28">
                        <p>&#8358; {(c.price * c.quantity).toLocaleString()}</p>
                        <p className="text-xs">
                          {moment(c?.start_date).format('ddd, Do YYYY')} -{' '}
                          {moment(c?.end_date).format('ddd, Do YYYY')}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <hr />

              <div className="text-sm flex justify-between font-bold">
                <p className="w-44 lg:w-24">Subtotal:</p>
                <p className="w-44 lg:w-28">
                  {' '}
                  &#8358; {total?.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
          <div className="text-lg px-10 border-dashed border-r w-full">
            <h1 className="text-xl text-[#747171] font-medium">
              Guest Information
            </h1>

            <div className="space-y-4 mt-6 lg:mt-10">
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

            {/* <button
              onClick={handleSubmit(onlinePaymentHandler)}
              type="button"
              className="w-full text-white mt-6 lg:mt-10 text-sm py-2 rounded-lg"
              style={{ background: property?.primary_color }}
            >
              {isLoading ? <Spinner /> : 'Make payment online'}
            </button> */}

            {/* {user?.subscription === 'Premium' ||
              (user?.subscription === 'Business' && (
                <> */}
                  <p className="text-center py-2 text-black">OR</p>
                  <button
                    onClick={handleSubmit(onArrivalPaymentHandler)}
                    type="button"
                    className={`w-full text-white mt-6 text-sm py-2 rounded-lg  shadow-md shadow-[#ccc]`}
                    style={{
                     background: property?.primary_color ,
                      color: 'white',
                    }}
                  >
                    {loadingPaymentOnArrivalResponse ? (
                      <Spinner />
                    ) : (
                      'Make payment on arrival'
                    )}
                  </button>
                {/* </>
              ))} */}
          </div>
        </form>
      </div>
    </div>
  )
}
