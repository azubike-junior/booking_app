import { useGetAccountQuery } from '@/features/auth'
import {
  useMakePaymentMutation,
  useSubscriptionPlansQuery,
} from '@/features/reservations'
import { getItem } from '@/utils'
import { SubscriptionProp } from '@/utils/types'
import { Spinner } from '@chakra-ui/react'
import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { IoCheckmark } from 'react-icons/io5'

type prop = {
  openSubDetails: boolean
  setOpenSubDetails: (open: boolean) => void
  setSubSelected: (sub: SubscriptionProp) => void
}

export default function Subscription({
  openSubDetails,
  setOpenSubDetails,
  setSubSelected,
}: prop) {
  const { data, isLoading } = useSubscriptionPlansQuery()
  const [clicked, setClicked] = useState('Free')
  const [scroll, setScroll] = useState(4)

  const { data: user, isLoading: loadingUser } = useGetAccountQuery(
    getItem('user_id'),
  )

  const [
    makePayment,
    { isLoading: loadingPaymentResponse },
  ] = useMakePaymentMutation()

  const paymentHandler = (sub_id: string, sub_duration: number) => {
    const newData = {
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
    <div className="pt-6">
      <h3 className="text-lg font-semibold">Subscription Plan & Pricing</h3>
      <p className="text-sm text-[#667184]">Simple pricing. No hidden fees. </p>

      <div className=" flex  space-x-8 pt-8">
        {data?.map((s, index: number) => {
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
              key={index}
              className={` border-[#DDDDE5] border-[0.4px] p-6 px-8 w-full rounded-xl  ${
                index === 2 ? 'linear text-white ' : 'bg-[#FDFDFF] '
              } ${scroll === index ? 'h-full' : 'h-fit'} `}
            >
              <div className="flex justify-between items-center border-b-[0.6px] pb-6 border-b-[#E8EAED]">
                <div>
                  <h3
                    className={`font-semibold text-xl ${
                      index === 2 ? ' text-white' : 'text-black'
                    }`}
                  >
                    {name}
                  </h3>

                  <p
                    className={`text-sm  pt-2 ${
                      index === 2 ? ' text-white' : 'text-[#969DAA]'
                    }`}
                  >
                    {index === 0
                      ? 'Perfect plan for starters'
                      : index === 1
                      ? 'For users who want more features'
                      : 'For users who want all features'}
                  </p>
                </div>

                <h3 className="text-2xl font-semibold">
                  {annual_cost === 0 ? 'Free' : `$ ${monthly_cost}`}{' '}
                </h3>
              </div>

              <div
                className={`pt-4 space-y-6 border-b-[0.6px] pb-6 border-b-[#E8EAED]  ${
                  index === 2 ? ' text-white' : 'text-[#798489]'
                } ${scroll === index ? 'overflow-scroll' : 'h-[200px]'}`}
              >
                <p className="flex space-x-3 items-center">
                  <IoCheckmark size={20} color="#34C759" />{' '}
                  <span className=" text-base">
                    {room_category_allowed} category allowed
                  </span>
                </p>
                <p className="flex space-x-3 items-center">
                  <IoCheckmark size={20} color="#34C759" />{' '}
                  <span className=" text-base">
                    {index === 2 ? 'Unlimited' : '30'} bookings monthly
                  </span>
                </p>

                {pay_on_arrival === 1 && (
                  <p className="flex space-x-3 items-center">
                    <IoCheckmark size={20} color="#34C759" />{' '}
                    <span className=" text-base">Pay on arrival</span>
                  </p>
                )}

                <p className="flex space-x-3 items-center">
                  <IoCheckmark size={20} color="#34C759" />{' '}
                  <span className=" text-base">Support (Technical)</span>
                </p>

                <div
                  className={`space-y-6  ${
                    scroll === index ? 'block' : 'hidden'
                  }`}
                >
                  {show_property_contact === 1 && (
                    <p className="flex space-x-3 items-center">
                      <IoCheckmark size={20} color="#34C759" />{' '}
                      <span className=" text-base">
                        Property listed on Google
                      </span>
                    </p>
                  )}
                  {pay_online === 1 && (
                    <p className="flex space-x-3 items-center">
                      <IoCheckmark size={20} color="#34C759" />{' '}
                      <span className=" text-base">Pay on online</span>
                    </p>
                  )}
                  {show_booking_history === 1 && (
                    <p className="flex space-x-3 items-center">
                      <IoCheckmark size={20} color="#34C759" />{' '}
                      <span className=" text-base">{`Show booking history, up to  ${
                        name === 'Premium' ? '3 Months' : '1 year'
                      } `}</span>
                    </p>
                  )}

                  {show_property_contact === 1 && (
                    <p className="flex space-x-3 items-center">
                      <IoCheckmark size={20} color="#34C759" />{' '}
                      <span className=" text-base">Show property contact</span>
                    </p>
                  )}
                  {allow_custom_branding === 1 && (
                    <p className="flex space-x-3 items-center">
                      <IoCheckmark size={20} color="#34C759" />{' '}
                      <span className=" text-base">Show custom branding</span>
                    </p>
                  )}

                  {booking_data_download === 1 && (
                    <p className="flex space-x-3 items-center">
                      <IoCheckmark size={20} color="#34C759" />{' '}
                      <span className=" text-base">Booking data download</span>
                    </p>
                  )}

                  {google_hotel_ads == 1 && (
                    <p className="flex space-x-3 items-center">
                      <IoCheckmark size={20} color="#34C759" />{' '}
                      <span className=" text-base">
                        Google hotel Ads weekly (bi weekly)
                      </span>
                    </p>
                  )}
                  {microsoft_hotel_ads === 1 && (
                    <p className="flex space-x-3 items-center">
                      <IoCheckmark size={20} color="#34C759" />{' '}
                      <span className=" text-base">
                        Microsoft hotel Ads weekly (Upon request)
                      </span>
                    </p>
                  )}

                  {free_dedicated_ads === 1 && (
                    <p className="flex space-x-3 items-center">
                      <IoCheckmark size={20} color="#34C759" />{' '}
                      <span className=" text-base">
                        Eligible for free dedicated ads support on Google
                      </span>
                    </p>
                  )}
                </div>
              </div>

              {index !== 0 && (
                <div className="flex justify-center items-center py-4 cursor-pointer">
                  {scroll === index ? (
                    <IoIosArrowUp
                      onClick={() => setScroll(5)}
                      size={20}
                      className="text-center"
                    />
                  ) : (
                    <IoIosArrowDown
                      onClick={() => setScroll(index)}
                      size={20}
                      className="text-center"
                    />
                  )}
                </div>
              )}

              <button
                disabled={index === 0}
                onClick={() => {
                  setOpenSubDetails(true)
                  setSubSelected(s)
                }}
                className={`bg-[#EBEDED] rounded-lg py-3 w-full text-center font-semibold text-base ${
                  index === 1 ? 'linear text-white' : 'text-black'
                }`}
              >
                {loadingPaymentResponse && name === clicked ? (
                  <Spinner />
                ) : name === user?.current_subscription ? (
                  'Already in Use'
                ) : (
                  'Buy Now'
                )}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
