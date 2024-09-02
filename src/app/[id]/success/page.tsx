'use client'

import {
  useGetReservationsByIDQuery,
  useGetRoomOrderByReservationIdQuery,
} from '@/features/reservations'
import { calculateDifferenceInDays } from '@/utils'
import { Spinner } from '@chakra-ui/react'
import Image from 'next/image'
import { useParams } from 'next/navigation'

const Success = () => {
  const params = useParams<{ id: string }>()

  const { data: property, isLoading } = useGetReservationsByIDQuery(params?.id)

  const { data, isLoading: loadingOrder } = useGetRoomOrderByReservationIdQuery(
    params?.id,
  )

  let prop

  if (data) {
    prop = data[0]
  }

  return (
    <>
      <div className="mx-auto flex justify-center items-center my-10 ">
        {isLoading || loadingOrder ? (
          <Spinner />
        ) : (
          <div className="xl:w-4/12 border-[0.2px] shadow p-10 px-20 rounded-lg">
            <div className="flex items-center justify-between text-[#667184]">
              <div>
                <Image src="/room.svg" width={60} height={30} alt="logo" />
                <p className="text-sm pt-2">This is your receipt</p>
              </div>

              {/* <div>
              <p>Booking number</p>
              <p className="pt-2 w-36 font-semibold text-black">{params.id}</p>
            </div> */}
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

            <div className="pt-10">
              <p className="font-bold text-lg">Booking details</p>

              <div className="flex  justify-between pb-3 mt-5 text-[#48556C] ">
                <p>Booking number</p>
                <p>{params?.id}</p>
              </div>

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
                          &#8358;{' '}
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

                      <div className="text-sm items-center flex justify-between space-x-4 pb-1 pt-5">
                        <div>
                          <p className="text-[#969DAA] text-base">Check-In</p>
                          <p className="text-[#969DAA] text-sm">
                            {new Date(d.start_date).toLocaleString()}
                          </p>
                        </div>

                        <div className="w-[1px] h-10 bg-[#E8EAED]"></div>

                        <div>
                          <p className="text-[#969DAA] text-base ">Check-Out</p>
                          <p className="text-[#969DAA]  text-sm">
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
