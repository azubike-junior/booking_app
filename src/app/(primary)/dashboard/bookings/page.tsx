'use client'

import Filters from '@/components/shared/Filters'
import Table from '@/components/Table'
import Pagination from '@/components/Table/Pagination'
import RoomOrderTable from '@/components/Table/RoomOrder'
import { useGetPropertiesQuery } from '@/features/property'
import {
  useGetReservationsByPropertyIdQuery,
  useGetRoomOrderByReservationIdQuery,
} from '@/features/reservations'
import { getItem, _convertDateFormat } from '@/utils'
import { Spinner } from '@chakra-ui/react'
import moment from 'moment'
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
    properties ? properties[0]?.id : property.id,
  )

  const {
    data: roomOrders,
    isLoading: loadingRoomOrders,
  } = useGetRoomOrderByReservationIdQuery(reservationId)

  const bookingColumns = useMemo(
    () => [
      {
        Header: 'Room name',
        accessor: 'room_name',
      },
      {
        Header: 'Price ',
        accessor: 'price',
        Cell: ({ value }: any) => {
          return (
            <>
              <span className={'text-blue-600 whitespace-nowrap'}>
                {property[0]?.currency} {value?.toLocaleString()}
              </span>
            </>
          )
        },
      },
      {
        Header: 'Quantity ',
        accessor: 'quantity',
      },
      {
        Header: 'Check In',
        accessor: 'start_date',
        Cell: ({ value }: any) => {
          return (
            <span className="whitespace-nowrap">
              {moment(value).format('MMM Do YYYY, HH:mm')}
            </span>
          )
        },
      },
      {
        Header: 'Check out',
        accessor: 'end_date',
        Cell: ({ value }: any) => {
          return (
            <span className="whitespace-nowrap">
              {moment(value).format('MMM Do YYYY, HH:mm')}
            </span>
          )
        },
      },
    ],
    [],
  )
  const reservationColumn = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
        Cell: (row: any) => (
          <span className="flex items-center justify-center">
            <span className="whitespace-nowrap">
              {row.row.original?.first_name} {row.row.original?.last_name}
            </span>
          </span>
        ),
      },
      {
        Header: 'Phone ',
        accessor: 'phone',
        Cell: ({ value }: any) => {
          return (
            <>
              <span className={'text-blue-600 whitespace-nowrap'}>{value}</span>
            </>
          )
        },
      },

      {
        Header: 'Email ',
        accessor: 'email',
      },
      {
        Header: 'Amount ',
        accessor: 'amount',
        Cell: ({ value }: any) => {
          return (
            <>
              <span className={'text-blue-600 whitespace-nowrap'}>
                {property[0]?.currency} {value?.toLocaleString()}
              </span>
            </>
          )
        },
      },
      {
        Header: 'Booking Status',
        accessor: 'payment_status_str',
        Cell: ({ value }: any) => {
          return (
            <>
              <span
                className={
                  value === 'Pending'
                    ? 'text-blue-400 whitespace-nowrap'
                    : value === 'Failed'
                    ? 'text-red-600 whitespace-nowrap'
                    : 'text-green-600'
                }
              >
                {value}
              </span>
            </>
          )
        },
      },
      {
        Header: 'Date Created',
        accessor: 'created_at',
        Cell: ({ value }: any) => {
          return (
            <>
              <span>{moment(value).format('MMM Do YYYY, HH:mm')}</span>
            </>
          )
        },
      },
      {
        accessor: 'id',
        Cell: (row: any) => (
          <>
            <span style={{ display: 'none', visibility: 'hidden', width: '0' }}>
              {''}
            </span>{' '}
          </>
        ),
      },
    ],
    [],
  )

  return (
    <div className="lato">
      <div className="space-y-2 lg:space-y-0 lg:flex justify-between">
        <h3 className="font-semibold text-base">Reservation history</h3>
        <Filters />
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
                  <p
                    onClick={() => setOpenRoomOrder(false)}
                    className="px-2 cursor-pointer"
                  >
                    Reservations
                  </p>{' '}
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
