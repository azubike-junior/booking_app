import { useGetAccountQuery } from '@/features/auth'
import { useMakePaymentMutation } from '@/features/reservations'
import { getItem } from '@/utils'
import { SubscriptionProp } from '@/utils/types'
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Spinner,
} from '@chakra-ui/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

type prop = {
  openSubDetails: boolean
  setOpenSubDetails: (open: boolean) => void
  subSelected: SubscriptionProp
}

type cardProp = {
  img: string
  title: string
  subtitle: string
  onClick?: () => void
  duration?: boolean
}

const DurationCard = ({
  duration,
  img,
  title,
  subtitle,
  onClick,
}: cardProp) => {
  return (
    <div
      onClick={onClick}
      className={`border-[#E6E6E6] border-[0.3px] rounded-lg p-3 px-4 shadow-lg cursor-pointer ${
        duration ? 'bg-[#FAC7A233]' : ''
      }`}
    >
      <Image src={img} width={40} height={40} alt="subIcon" />

      <p className="text-sm font-semibold pt-4">{title}</p>

      <span className="font-md text-sm text-[#4F4D55] pt-1">{subtitle}</span>
    </div>
  )
}

const SubscriptionDetails = ({
  openSubDetails,
  setOpenSubDetails,
  subSelected,
}: prop) => {
  const [selectedDuration, setSelectedDuration] = useState({
    monthly: true,
    sixMonth: false,
    yearly: false,
  })

  const [total, setTotal] = useState(0)
  const [durationPlan, setDurationPlan] = useState(1)

  // const updateDuration = (duration: string) => {
  //   setSelectedDuration((prevState: any) => ({
  //     ...prevState,
  //     [duration]: !prevState[duration],
  //   }))
  // }

  const { data: user, isLoading: loadingUser } = useGetAccountQuery(
    getItem('user_id'),
  )

  const [
    makePayment,
    { isLoading: loadingPaymentResponse },
  ] = useMakePaymentMutation()

  const calculatedSubAmount = () => {
    let amount = 0
    if (selectedDuration.monthly) {
      setDurationPlan(1)
      amount = subSelected?.monthly_cost
      setTotal(amount)
    }

    if (selectedDuration.sixMonth) {
      setDurationPlan(6)
      amount = subSelected?.monthly_cost * 6
      setTotal(amount)
    }

    if (selectedDuration.yearly) {
      setDurationPlan(12)
      amount = subSelected?.monthly_cost * 12
      setTotal(amount)
    }

    return amount
  }

  useEffect(() => {
    calculatedSubAmount()
  }, [selectedDuration, subSelected, total])

  const paymentHandler = () => {
    const newData = {
      email: user?.email,
      phonenumber: user?.mobilenumber,
      first_name: user?.firstname,
      last_name: user?.lastname,
      type: 'subscription',
      sub_id: subSelected.id,
      amount: total,
      account_id: user?.id,
      sub_duration: subSelected.monthly_cost,
    }
    makePayment(newData)
  }

  return (
    <Modal
      isOpen={openSubDetails}
      onClose={() => {
        setOpenSubDetails(false)
        setDurationPlan(1)
        setTotal(0)
      }}
      size={'2xl'}
    >
      <ModalCloseButton />
      <ModalOverlay />
      <ModalContent className="py-10 px-6 lg:px-10 lato">
        <div className="flex space-x-3 items-center ">
          <Image src={'/subIcon.svg'} width={60} height={60} alt="subIcon" />

          <div>
            <h3 className="text-lg font-semibold">Subscription Details</h3>
            <p className="text-sm font-light">
              To explore better features, set up a subscription
            </p>
          </div>
        </div>

        <div className="flex justify-between space-x-3 pt-6">
          <DurationCard
            img={'/1month.svg'}
            title="Monthly Payment"
            subtitle="Be charged a one-time payment fee to access the content"
            onClick={() =>
              setSelectedDuration({
                monthly: true,
                sixMonth: false,
                yearly: false,
              })
            }
            duration={selectedDuration.monthly}
          />
          <DurationCard
            img={'/2month.svg'}
            title="6-Monthly Payment"
            subtitle="Split the full bundle price over several monthly payments"
            onClick={() =>
              setSelectedDuration((prevState: any) => ({
                monthly: false,
                sixMonth: true,
                yearly: false,
              }))
            }
            duration={selectedDuration.sixMonth}
          />
          <DurationCard
            img={'/2month.svg'}
            title="Annual Payment"
            subtitle="Be charged a one-time payment fee to access the content"
            onClick={() =>
              setSelectedDuration((prevState: any) => ({
                monthly: false,
                sixMonth: false,
                yearly: true,
              }))
            }
            duration={selectedDuration.yearly}
          />
        </div>

        <div className="bg-[#FDFDFD] border-[#F1F1F1] border-[0.4px] p-6 mt-5">
          <div>
            <label htmlFor="" className="">
              {' '}
              Name
            </label>

            <input
              type="text"
              className="w-full bg-white border-[#E6E6E6] border-[0.3px] py-1.5 px-2 outline-none mt-2 rounded-lg shadow"
              value={`${user?.firstname}`}
            />
          </div>

          <div className="flex justify-between w-full mt-6 space-x-6">
            <div className="w-full">
              <label htmlFor="" className="">
                price
              </label>

              <div className=" bg-white border-[#E6E6E6] border-[0.3px] flex space-x-2 px-2  shadow mt-2 rounded-lg">
                <select name="" id="" className="">
                  <option value="" key="">
                    USD
                  </option>
                </select>
                <input
                  type="text"
                  className="w-full py-1.5 px-2 outline-none border-l-[0.3px] border-[#E6E6E6]"
                  // defaultValue={subSelected.monthly_cost}
                  value={total}
                />
              </div>
            </div>

            <div className="w-full">
              <label htmlFor="" className="">
                Enrollment Duration
              </label>
              <div className=" bg-white border-[#E6E6E6] border-[0.3px] flex space-x-2 px-2  shadow mt-2 rounded-lg">
                <input
                  type="text"
                  className="w-full py-1.5 px-2 outline-none border-r-[0.3px] border-[#E6E6E6]"
                  value={durationPlan}
                />
                {/* <select name="" id=""  className="w-full py-1.5 px-2 outline-none border-r-[0.3px] border-[#E6E6E6]" >
                  {Array.from({ length: 10 }, (_, index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select> */}

                <div className="flex justify-center items-center">
                  {selectedDuration.monthly ? 'Month' : 'Months'}
                </div>
              </div>
            </div>
          </div>
        </div>

        <button onClick={() => paymentHandler()} className="bg-[#1A2B47] text-white py-2 rounded-lg mt-4">
          {loadingPaymentResponse ? <Spinner /> : 'Subsribe'}
        </button>
      </ModalContent>
    </Modal>
  )
}

export default SubscriptionDetails
