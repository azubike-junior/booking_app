import { AuthWrapper } from '@/components/shared/AuthWrapper'
import Banner from '@/components/shared/Banner'
import Table from '@/components/Table'
import RoomOrderTable from '@/components/Table/RoomOrder'
import { useGetPropertyByUserIdQuery } from '@/features/property'
import {
  useGetReservationsByPropertyIdQuery,
  useGetRoomOrderByReservationIdQuery,
} from '@/features/reservations'
import { BOOKINGS_COLUMNS, getItem, lato, RESERVATION_COLUMNS } from '@/utils'
import { Spinner } from '@chakra-ui/react'
import { useParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaDownload } from 'react-icons/fa'

export default function Bookings() {
  const params = useParams<{ id: string }>()
  const [openRoomOrder, setOpenRoomOrder] = useState(false)
  const [reservationId, setReservationId] = useState('')

  const { data: property } = useGetPropertyByUserIdQuery(getItem('user_id'))
  const [firstname, setFirstname] = useState('')

  const { data: reservations, isLoading } = useGetReservationsByPropertyIdQuery(
    params?.id,
  )

  const {
    data: roomOrders,
    isLoading: loadingRoomOrders,
  } = useGetRoomOrderByReservationIdQuery(reservationId)

  useEffect(() => {
    setFirstname(getItem('first_name'))
  }, [])

  const bookingColumns = useMemo(() => BOOKINGS_COLUMNS, [])

  const reservationColumn = useMemo(() => RESERVATION_COLUMNS, [])

  return (
    <div className={`${lato.className}`}>
      <Banner firstname={firstname} />

      <div className="max-w-[1062px] mx-auto  lg:px-10 mt-24">
        <p className="text-3xl text-[#10375C] px-6 lg:px-0 ">
          Reservation List
        </p>

        <div className="pt-24 block  md:flex space-x-6 lg:justify-between px-4 lg::px-0 space-y-4 md:space-y-0">
          <div className=" border border-[#D8D8D8] rounded-lg p-2 flex justify-between items-center bg-[#F5F5F54D] space-x-3  md:w-1/2">
            <CiSearch size={24} />{' '}
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none py-1"
            />
          </div>

          <div className="space-x-8 flex items-center">
            <div className="flex items-center space-x-4">
              <p className="text-base">Sort:</p>
              <select name="" id="" className="border px-3 py-3 rounded-md">
                <option value="">Most Recent</option>
                <option value="">Yesterday</option>
              </select>
            </div>

            <div className="border border-[#D8D8D8] rounded-lg p-2 flex space-x-3 items-center">
              <FaDownload /> <p>Export </p>
            </div>
          </div>
        </div>

        <div className="my-20">
          {reservations?.length === 0 ? (
            <div className="bg-white p-10 w-full text-xl rounded-xl">
              <p className="text-center">No available data 😔</p>
            </div>
          ) : (
            <>
              {!openRoomOrder ? (
                <div className="pb-10">
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
    </div>
  )
}

Bookings.getLayout = function getLayout(page: any) {
  return <AuthWrapper>{page}</AuthWrapper>
}
