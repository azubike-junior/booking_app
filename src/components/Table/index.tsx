import { useGetReservationQuery } from '@/features/reservations'
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from '@chakra-ui/react'
import { useState } from 'react'
import { HiDotsVertical } from 'react-icons/hi'
import { usePagination, useTable } from 'react-table'

interface TableProps {
  data: any
  setOpenRoomOrder: (open: boolean) => void
  setReservationId: (res: string) => void
  columns: any[] // Replace with the appropriate type for your columns
}

export default function Table({
  data,
  columns,
  setOpenRoomOrder,
  setReservationId,
}: TableProps) {
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

  const [reservationId, setReservatioId] = useState('')

  const { data: reservation, isLoading } = useGetReservationQuery(reservationId)

  return (
    <>
      <table {...getTableProps()} className="w-full bg-white rounded-xl scrollbar-hide">
        <thead className="">
          {headerGroups.map((headerGroup, index) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              className="bg-[#F1F5F9] text-[#667085] font-semibold"
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

                <td className="text-[#80B539] text-[14px] font-normal cursor-pointer pr-6">
                  <Menu>
                    <MenuButton>
                      <div className="flex justify-start">
                        <Button variant="ghost">
                          <HiDotsVertical />
                        </Button>
                      </div>
                    </MenuButton>

                    {/* <div className="p-2 py-0 bg-red-200  absolute z-10  -top-10 border border-[#E6E6E6] flex flex-col gap-3 rounded-[8px]"> */}
                    <MenuList>
                      <MenuItem
                        onClick={() => {
                          // onOpen()
                          setReservationId(row.values.id)
                          setOpenRoomOrder(true)
                        }}
                        className=" py-[5px] whitespace-nowrap  text-sm px-4"
                      >
                        <p className="text-sm px-2">
                          View Room Order
                        </p>
                      </MenuItem>

                      <MenuItem className="cursor-pointer py-[5px] whitespace-nowrap ">
                        <p className="text-red-500 text-sm px-2">Delete</p>
                      </MenuItem>
                    </MenuList>
                    {/* </div> */}
                  </Menu>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
