import { useGetAccountQuery } from '@/features/auth'
import {
  useMakePaymentMutation,
  useSubscriptionPlansQuery,
} from '@/features/reservations'
import { getItem } from '@/utils'
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Spinner,
  useToast,
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import Button from '../shared/Button'

interface Sub {
  openSubscription: boolean
  setOpenSubscription: (open: boolean) => void
}

const Subscription = ({ openSubscription, setOpenSubscription }: Sub) => {
  const { data, isLoading } = useSubscriptionPlansQuery()
  const [clicked, setClicked] = useState('Free')

  const [
    makePayment,
    { isLoading: loadingPaymentResponse },
  ] = useMakePaymentMutation()

  const { data: user, isLoading: loadingUser } = useGetAccountQuery(
    getItem('user_id'),
  )

  const route = useRouter()
  const toast = useToast()

  const paymentHandler = (sub_id: string, sub_duration: number) => {
    const newData = {
      toast,
      route,
      email: user?.email,
      phonenumber: user?.mobilenumber,
      first_name: user?.firstname,
      last_name: user?.lastname,
      type: 'subscription',
      sub_id,
      amount: 200000,
      account_id: user?.id,
      sub_duration,
    }
    makePayment(newData)
  }

  return (
    <Modal
      isOpen={openSubscription}
      onClose={() => setOpenSubscription(false)}
      size={'6xl'}
    >
      <ModalCloseButton />
      <ModalOverlay />
      <ModalContent className="py-10 px-6 lg:px-10">
        <h1 className="quicksand text-xl md:text-3xl lg:text-5xl leading-8 tracking-wider text-center  font-medium ">
          Choose your plan
        </h1>

        <div className="block space-y-6 lg:space-y-0  md:grid md:grid-cols-3 gap-4 lg:gap-10 mt-10 lg:mt-38 text-white">
          {data?.map((s) => {
            const {
              annual_cost,
              monthly_cost,
              name,
              room_category_allowed,
              allow_custom_branding,
              show_property_contact,
              pay_on_arrival,
              pay_online,
              free_dedicated_ads,
              support_google_note,
              technical_support,
              support_microsoft_note,
              booking_data_download,
              google_hotel_ads,
              show_booking_history,
              microsoft_hotel_ads,
              bookings,
              id,
            } = s

            return (
              <div
                key={s.id}
                className={`bg-[#1A2B47] rounded-[26px] w-full h-[550px] ${
                  name === 'Premium' && '-mt-28'
                }`}
              >
                <div className="">
                  <p className="font-bold uppercase text-center text-lg py-6 pt-10 border-b-[0.5px] border-[#a09e9e]">
                    {name}
                  </p>
                </div>

                <div className="py-5 px-6 overflow-scroll h-[340px] ">
                  <div className=" space-y-4">
                    <p className="font-bold text-lg pt-2">
                      ${annual_cost}
                      <span className="font-light">/Year</span>
                    </p>

                    <p className="font-bold text-lg pt-2">
                      ${monthly_cost}
                      <span className="font-light">/mo</span>
                    </p>
                    <p className="flex items-center space-x-2">
                      <FaCheckCircle />
                      <span>{room_category_allowed} categories allowed</span>
                    </p>
                    <p className="flex items-center space-x-2">
                      <FaCheckCircle />
                      <span>
                        {' '}
                        {bookings === 1 ? 'Unlimited' : '30'} bookings monthly
                      </span>
                    </p>
                    {show_property_contact === 1 && (
                      <p className="flex items-center space-x-2">
                        <FaCheckCircle />
                        <span>Property listed on Google</span>
                      </p>
                    )}
                    {pay_on_arrival === 1 && (
                      <p className="flex items-center space-x-2">
                        <FaCheckCircle />
                        <span>Pay on arrival</span>
                      </p>
                    )}
                    {pay_online === 1 && (
                      <p className="flex items-center space-x-2">
                        <FaCheckCircle />
                        <span>Pay online</span>
                      </p>
                    )}
                    {show_booking_history === 1 && (
                      <p className="flex items-center space-x-2">
                        <FaCheckCircle />
                        <span>{`Show booking history, up to  ${
                          name === 'Premium' ? '3 Months' : '1 year'
                        } `}</span>
                      </p>
                    )}
                    {show_property_contact === 1 && (
                      <p className="flex items-center space-x-2">
                        <FaCheckCircle />
                        <span>Show property contact</span>
                      </p>
                    )}
                    {allow_custom_branding === 1 && (
                      <p className="flex items-center space-x-2">
                        <FaCheckCircle />
                        <span>Show custom branding</span>
                      </p>
                    )}
                    {technical_support === 1 && (
                      <p className="flex items-center space-x-2">
                        <FaCheckCircle />
                        <span>Support (Technical)</span>
                      </p>
                    )}

                    {booking_data_download === 1 && (
                      <p className="flex items-center space-x-2">
                        <FaCheckCircle />
                        <span>Booking data download</span>
                      </p>
                    )}

                    {google_hotel_ads == 1 && (
                      <p className="flex items-center space-x-2">
                        <FaCheckCircle />
                        <span>Google hotel Ads weekly (bi weekly)</span>
                      </p>
                    )}
                    {microsoft_hotel_ads === 1 && (
                      <p className="flex items-center space-x-2">
                        <FaCheckCircle />
                        <span>Microsoft hotel Ads weekly (Upon request)</span>
                      </p>
                    )}

                    {free_dedicated_ads === 1 && (
                      <p className="flex items-center space-x-2">
                        <FaCheckCircle size={30} />
                        <span>
                          Eligible for free dedicated ads support on Google
                        </span>
                      </p>
                    )}
                  </div>
                </div>

                <div className='px-6'>
                  <Button
                    onClick={() => {
                      paymentHandler(id, annual_cost)
                      setClicked(name)
                    }}
                    name={
                      loadingPaymentResponse && name === clicked ? (
                        <Spinner />
                      ) : name === user?.subscription ? (
                        'Already in Use'
                      ) : (
                        'Buy Now'
                      )
                    }
                    bg="#F58634"
                    className="w-full mt-10 py-2.5 text-black font-semibold rounded-[10px] "
                    type="button"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </ModalContent>
    </Modal>
  )
}

export default Subscription
