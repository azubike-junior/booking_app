'use client'

import {
  useGetReservationsByIDQuery,
  useGetRoomOrderByReservationIdQuery,
} from '@/features/reservations'
import Image from 'next/image'
import { useParams } from 'next/navigation'

const Success = () => {
  const params = useParams<{ id: string }>()

  const { data: property } = useGetReservationsByIDQuery(params?.id)

  const { data } = useGetRoomOrderByReservationIdQuery(params?.id)

  let prop

  if (data) {
    prop = data[0]
  }

  return (
    <>
      {/* <div className="flex justify-center items-center mt-20  text-black ">
        <div className="w-4/12 py-8 shadow-lg shadow-slate-300 border-[0.2px] rounded-xl">
          <p className="text-center text-lg poppins pt-4">
            Room has been booked successfully
          </p>

          <div className="flex space-x-2 items-center justify-center pt-4">
            <p className="text-center text-base">Completed </p>
            <RiVerifiedBadgeFill size={24} color="green" />
          </div>

          <div className={'my-4 flex justify-center items-center'}>
            <Image
              src={'/checkmark-transparent.gif'}
              alt={'mark'}
              width={200}
              height={200}
            />
          </div>

          <div className={'my-4 flex justify-center items-center'}>
            <Link href={`/properties`}>
              <button
                type="button"
                className="border-[#10375C] bg-[#10375C]  text-white border py-1 text-center px-6  rounded-lg"
              >
                Go back
              </button>
            </Link>
          </div>
        </div>
      </div> */}

      <div className="mx-auto flex justify-center items-center my-10 ">
        <div className="w-4/12 border-[0.2px] shadow p-10 px-20 rounded-lg">
          <div className="flex items-center justify-between text-[#667184]">
            <div>
              <Image src="/room.svg" width={60} height={30} alt="logo" />
              <p className="text-sm pt-2">This is your receipt</p>
            </div>

            <div>
              <p>Booking number</p>
              <p className="pt-2 font-semibold text-black">{params.id}</p>
            </div>
          </div>

          <div className="pt-4">
            <p>Your details</p>

            <div className="mt-3 text-[#48556C] text-sm ">
              <div className="flex justify-between  pb-3 mt-5 text-[#48556C]">
                <p>Name</p>
                <p>
                  {property?.first_name} {property?.last_name}
                </p>
              </div>
              <hr />
              <div className="flex justify-between  pb-3 mt-5 text-[#48556C]">
                <p>Email Address</p>
                <p>{property?.email}</p>
              </div>
              <hr />

              <div className="flex justify-between  pb-3 mt-5 text-[#48556C]">
                <p>Date</p>
                <p>{property?.created_at}</p>
              </div>
              <hr />
            </div>
          </div>

          <div className="pt-4">
            <p>Booking details</p>

            <div className="mt-3 text-[#48556C] text-sm ">
              <div className="flex  justify-between  pb-3 mt-5 text-[#48556C]">
                <p>Room Name</p>
                <p>{prop?.room_name}</p>
              </div>
              <hr />
              <div className="flex  justify-between  pb-3 mt-5 text-[#48556C]">
                <p>Booking number</p>
                <p>{params?.id}</p>
              </div>
              <hr />

              <div className="flex  justify-between  pb-3 mt-5 text-[#48556C]">
                <p>Check-in</p>
                <p>{prop?.start_date}</p>
              </div>
              <hr />
              <div className="flex  justify-between  pb-3 mt-5 text-[#48556C]">
                <p>Check-out</p>
                <p>{prop?.end_date}</p>
              </div>
              <hr />
              <div className="flex  justify-between  pb-3 mt-5 text-[#48556C]">
                <p>Amount Paid</p>
                <p>NGN {prop?.price.toLocaleString()}</p>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Success
