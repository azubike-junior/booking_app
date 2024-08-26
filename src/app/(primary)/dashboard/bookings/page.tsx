'use client'

import Filters from '@/components/shared/Filters'
import Table from '@/components/Table'
import Pagination from '@/components/Table/Pagination'
import RoomOrderTable from '@/components/Table/RoomOrder'
import { useGetPropertiesQuery } from '@/features/property'
import { useGetReservationsByPropertyIdQuery, useGetRoomOrderByReservationIdQuery } from '@/features/reservations'
import { BOOKINGS_COLUMNS, getItem, RESERVATION_COLUMNS } from '@/utils'
import { Spinner } from '@chakra-ui/react'
import { useMemo, useState } from 'react'

const Bookings = () => {
  const [openRoomOrder, setOpenRoomOrder] = useState(false)
  const [reservationId, setReservationId] = useState('')
  const { data: properties } = useGetPropertiesQuery(getItem('user_id'))

  let property: any = []

  if (properties) {
    property = [properties[0]]
  }

  const { data: reservations, isLoading } = useGetReservationsByPropertyIdQuery(
   properties ? properties[0]?.id : property.id
  )

  

    const {
    data: roomOrders,
    isLoading: loadingRoomOrders,
    } = useGetRoomOrderByReservationIdQuery(reservationId)
  
  console.log(">>>>>data", roomOrders);
  

  const bookingColumns = useMemo(() => BOOKINGS_COLUMNS, [])
  const reservationColumn = useMemo(() => RESERVATION_COLUMNS, [])

  return (
    <div className="lato">
      <div className='space-y-2 lg:space-y-0 lg:flex justify-between'> 
        <h3 className='font-semibold text-base'>
          Reservation history
        </h3>
        <Filters/>
      </div>

         <div className="mt-10">
          {reservations?.length === 0 ? (
            <div className="bg-white p-10 w-full text-xl rounded-xl">
              <p className="text-center">No available data 😔</p>
            </div>
          ) : (
            <>
              {!openRoomOrder ? (
                <div className="pb-10 overflow-scroll ">
                  {isLoading ? (
                    <div className="flex justify-center items-center pb-6">
                      <Spinner />{' '}
                    </div>
                  ) : null}
                  <Table
                    setOpenRoomOrder={setOpenRoomOrder}
                    columns={reservationColumn}
                    data={reservations ?? []}
                    setReservationId={setReservationId}
                  />

                  <Pagination />
                </div>
              ) : (
                <div className="pb-10">
                  <div className="flex pb-6  items-center space-x-2 ">
                    {/* <IoIosArrowDropleftCircle size={20} />
                        <p>Go back</p> */}
                    <p onClick={() => setOpenRoomOrder(false)} className="px-2 cursor-pointer">Reservations</p>{' '} 
                    / <span className="text-[#9d9b9b]">Room details</span>
                  </div>
                  {loadingRoomOrders ? (
                    <div className="flex justify-center items-center pb-6">
                      <Spinner />{' '}
                    </div>
                  ) : null}
                  <RoomOrderTable
                    setOpenRoomOrder={setOpenRoomOrder}
                    columns={bookingColumns}
                    data={roomOrders ?? []}
                  />
                </div>
              )}
            </>
          )}
        </div>
    </div>
  )
}

export default Bookings
