import { useGetReservationQuery } from '@/features/reservations'
import { useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import { usePagination, useTable } from 'react-table'

interface TableProps {
  data: any
  setOpenRoomOrder: (open:boolean) => void
  columns: any[] // Replace with the appropriate type for your columns
}

export default function RoomOrderTable({ data, columns }: TableProps) {
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

  const { data: reservation, isLoading } = useGetReservationQuery(reservationId)

  return (
    <>
      <table {...getTableProps()} className="w-full bg-white rounded-xl scrollbar-hide">
        <thead className="">
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
              <th></th>
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
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
                  <td key={index} className="py-[14px]">
                    <div
                      {...cell.getCellProps()}
                      className="text-sm rounded-3xl w-fit px-2 py-1 text-[#667085] font-normal"
                    >
                      <p className="pl-6 w-fit">{cell.render('Cell')}</p>
                    </div>
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
