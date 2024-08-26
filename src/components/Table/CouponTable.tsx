import { useDeleteCouponIdMutation } from '@/features/couponManager'
import { useGetReservationQuery } from '@/features/reservations'
import { Spinner, useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import { RiDeleteBin4Line } from 'react-icons/ri'
import { usePagination, useTable } from 'react-table'

interface TableProps {
  data: any
  columns: any[]
}

export default function CouponTable({ data, columns }: TableProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
  } = useTable(
    {
      data,
      columns,
      manualPagination: true,
    },
    usePagination,
  )

  const [reservationId, setReservationId] = useState('')
  const [couponID, setCouponID] = useState('')

  const { data: reservation, isLoading } = useGetReservationQuery(reservationId)

  const [
    deleteCoupon,
    { isLoading: deletingCoupon },
  ] = useDeleteCouponIdMutation()

  return (
    <>
      <table {...getTableProps()} className="w-full bg-white rounded-xl shadow overflow-scroll">
        <thead className="overflow-scroll">
          {headerGroups.map((headerGroup, index) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              className="bg-[#F5F5F5] text-[#667085] font-semibold"
              key={index}
            >
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="text-sm text-left px-2 py-[18px] pl-8"
                  key={column.id} // Use column.id as a key
                >
                  {column.render('Header')}
                </th>
              ))}
              <th className="text-xs text-left px-1 py-[18px] pl-6 whitespace-nowrap uppercase">
                ACTION
              </th>
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()} className="overflow-scroll">
          {data.length === 0 && (
            <tr className="bg-[#EEEFF3] ">
              <td>
                <p className="text-sm text-[#808080] px-6 py-3">
                  No Coupons found
                </p>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          )}
          {page?.map((row, rowIndex) => {
            prepareRow(row)
            return (
              <tr
                {...row.getRowProps()}
                className="border-b-[1px] hover:bg-[#F1F5F9]"
                key={rowIndex}
              >
                {row.cells.map((cell, index) => (
                  <>
                    <td key={index} className="py-[14px]">
                      <div
                        {...cell.getCellProps()}
                        className="text-sm rounded-3xl w-fit px-2 py-1 text-[#667085] font-normal"
                      >
                        <p className="pl-6 w-fit">{cell.render('Cell')}</p>
                      </div>
                    </td>
                  </>
                ))}

                <td
                  onClick={() => {
                    deleteCoupon(row.values.id)
                    setCouponID(row.values.id)
                  }}
                  className="py-[14px] whitespace-nowrap px-6 cursor-pointer"
                >
                  {deletingCoupon && row.values.id === couponID ? (
                    <Spinner />
                  ) : (
                    <RiDeleteBin4Line color="red" />
                  )}{' '}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
