import {
  useMakePaymentMutation,
  useMakePaymentOnArrivalMutation,
} from '@/features/reservations'
import { getItem } from '@/utils'
import { PaymentProps, PropertyProp, RoomOrderProp } from '@/utils/types'
import { Spinner, Switch, useToast } from '@chakra-ui/react'
import moment from 'moment'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../shared/Button'
import { PaymentField } from '../shared/Input'

interface Room {
  room: any
  property: PropertyProp | undefined
  openCheckout: boolean
  setOpenCart: (bool: boolean) => void
  setOpenCheckout: (bool: boolean) => void
  checkIn: string
  checkOut: string
  cartItems: RoomOrderProp[]
  total: number
}

const Checkout = ({
  setOpenCheckout,
  openCheckout,
  cartItems,
  total,
  setOpenCart,
  room,
  property,
}: Room) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentProps>({})

  const [htmlContent, setHtmlContent] = useState('')
  const quillRef = useRef<any>(null)
  const [checked, setChecked] = useState(false)

  const toast = useToast()

  const [makePayment, { isLoading }] = useMakePaymentMutation()
  const [
    makePaymentOnArrival,
    { isLoading: loadingPaymentOnArrivalResponse },
  ] = useMakePaymentOnArrivalMutation()

  const route = useRouter()

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
        console.log('>>>>>>>e')

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

  // useEffect(() => {
  //   getHTML()
  // }, [property?.booking_policy])

  // const getHTML = () => {
  //   if (quillRef.current) {
  //     const editor = quillRef.current.getEditor()
  //     const html = editor.root.innerHTML
  //     setHtmlContent(html)
  //   }
  // }

  return (
    <form className="bg-white p-10 flex max-w-[1400px] mx-auto space-x-20">
      <div className="w-8/12">
        <h4 className="text-xl font-semibold">Guest Information</h4>

        <div className="space-y-4 mt-6 lg:mt-10">
          <div className="flex space-x-4">
            <PaymentField
              label="First Name"
              type="name"
              errors={errors?.first_name}
              message="required"
              placeHolder="First name"
              name="first_name"
              required
              register={register}
            />

            <PaymentField
              label="Last Name"
              type="name"
              errors={errors?.last_name}
              message="required"
              placeHolder="Last name"
              name="last_name"
              required
              register={register}
            />
          </div>

          <div className="flex space-x-4">
            <PaymentField
              label="Phone Number"
              type="name"
              errors={errors.email}
              message="required"
              placeHolder="Email address"
              name="email"
              required
              register={register}
            />

            <PaymentField
              label="Email Address"
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

        <div className="mt-8">
          <h4 className="text-xl font-semibold">Payment Method</h4>

          <div className="pt-2 flex space-x-4 -ml-4">
            <Switch
              isChecked={checked}
              // onChange={handleChange}
              sx={{
                transform: 'rotate(90deg)',
              }}
            />
            <div className="text-xs space-y-1">
              <p>Make payment on arrival</p>
              <p>Online payment</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="text-xl font-semibold">Booking Policy</h4>

          <div
            //@ts-ignore
            dangerouslySetInnerHTML={{ __html: property?.booking_policy }}
            className=" text-sm pt-2"
          ></div>
        </div>
      </div>
      <div className="justify-between w-4/12">
        <div className=" border rounded-t-xl w-full border-[#F2F4F7] h-fit">
          <div className="bg-[#F7FAF6] border-[0.3px] rounded-t-xl p-6 w-full border-[#F2F4F7]">
            <p>Your booking Summary</p>
          </div>

          <div className="p-6 space-y-10 ">
            {cartItems.map((c) => {
              return (
                <div key={c.room_id}>
                  <p>{c.room_name}</p>
                  <p className=" text-[#969DAA] text-sm pt-2">
                    {c?.adults} Adult, {c.children} Child, {c.quantity} Room
                  </p>

                  <div className="text-[#969DAA] text-sm flex justify-between pt-2">
                    <p>
                      NGN {c.price.toLocaleString()} x {c.quantity} Nights
                    </p>

                    <p>NGN {(c.price * c.quantity).toLocaleString()} </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex justify-between text-md font-semibold pt-4">
          <p>Pay</p>
          <p>NGN {total?.toLocaleString()}</p>
        </div>

        <div className="space-x-6 pt-6 flex justify-between">
          <Button
            onClick={handleSubmit(onArrivalPaymentHandler)}
            type="button"
            name={loadingPaymentOnArrivalResponse ? <Spinner /> : 'Book Now'}
            className={` text-white border py-3 text-xs mt-2 lg:mt-4 lg:text-sm text-center px-4 rounded-lg w-full bg-[#AE5F25]`}
          />
          <Button
            onClick={() => {
              setOpenCheckout(false)
              setOpenCart(false)
            }}
            type="button"
            name="Review Your Bookings"
            className={` text-[#48556C] border py-2 text-xs mt-2 lg:mt-4 lg:text-sm text-center px-4 rounded-lg w-full`}
          />
        </div>
      </div>
    </form>
  )
}

export default Checkout