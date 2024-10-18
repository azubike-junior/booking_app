'use client'

import { useGetPropertyQuery } from '@/features/property'
import {
  useGetReservationsByIDQuery,
  useGetRoomOrderByReservationIdQuery,
} from '@/features/reservations'
import { calculateDifferenceInDays } from '@/utils'
import { Spinner } from '@chakra-ui/react'
import { useParams } from 'next/navigation'
import { IoIosCheckmarkCircle } from 'react-icons/io'

const Success = () => {
  const params = useParams<{ id: string }>()

  const { data: property, isLoading } = useGetReservationsByIDQuery(params?.id)

  const { data: p, isLoading: loadingProp } = useGetPropertyQuery(
    property?.property_id,
  )

  const { data, isLoading: loadingOrder } = useGetRoomOrderByReservationIdQuery(
    params?.id,
  )

  let prop

  if (data) {
    prop = data[0]
  }

  return (
    <>
      <div className=" flex justify-center h-screen  bg-[#f4f4f4]">
        {isLoading || loadingOrder || loadingProp ? (
          <Spinner />
        ) : (
          <div className="xl:w-4/12 border-[0.2px] mx-6 lg:mx-0 h-fit mt-20  p-10 px-10 rounded-xl shadow-kg bg-white ">
            <div className="flex items-center justify-between text-[#667184]">
              <div className='flex space-x-4 items-center'>
                <IoIosCheckmarkCircle size={80} color="green" />
                <p className="text-xl font-semibold pt-2 text-black">
                  {property?.first_name}, Your booking was submitted
                  successfully
                </p>
              </div>

              {/* <div>
              <p>Booking number</p>
              <p className="pt-2 w-36 font-semibold text-black">{params.id}</p>
            </div> */}
            </div>

            <div className="pt-8">
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

            <div className="pt-10">
              <p className="font-bold text-lg">Booking details</p>

              <div className="flex  justify-between mt-5 text-[#48556C] ">
                <p>Booking number</p>
                <p>{property?.booking_number}</p>
              </div>

              {/* <div className="flex  justify-between pb-3 mt-5 text-[#48556C] ">
                <p>Payment Link</p>
                <p>{p?.payment_link}</p>
              </div> */}

              {data?.map((d: any, index: number) => {
                return (
                  <div key={index} className="mt-3 text-[#48556C] text-sm ">
                    <div
                      // key={c.room_id}
                      style={{ borderTop: '3px' }}
                      className=" py-4 items-center text-xl rounded-xl relative"
                    >
                      <p className=" text-base capitalize text-[#273238] pt-2 flex justify-between">
                        <p>
                          {' '}
                          {d.room_name}{' '}
                          <span className="text-sm">
                            (
                            {` ${d?.quantity} ${
                              d.quantity > 1 ? 'Units' : 'Unit'
                            }`}
                            )
                          </span>{' '}
                        </p>
                        <p className="text-sm">
                          {p?.currency}{' '}
                          {(
                            d.price *
                            d.quantity *
                            calculateDifferenceInDays(
                              d?.start_date,
                              d?.end_date,
                            )
                          ).toLocaleString()}
                        </p>
                      </p>

                      <div className="text-sm flex justify-between"></div>

                      <div className="text-sm items-center flex justify-between space-x-4 pb-1 pt-5 text-[#273238]">
                        <div>
                          <p className="text-base">Check-In</p>
                          <p className=" text-sm">
                            {new Date(d.start_date).toLocaleString()}
                          </p>
                        </div>

                        <div className="w-[1px] h-10 bg-[#E8EAED]"></div>

                        <div>
                          <p className=" text-base text-right">Check-Out</p>
                          <p className=" text-sm text-right">
                            {new Date(d.end_date).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Success
