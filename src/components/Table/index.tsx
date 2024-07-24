import { useGetReservationQuery } from '@/features/reservations'
import {
  Button,
  Modal,
  ModalContent,
  ModalOverlay,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Spinner,
  useDisclosure,
} from '@chakra-ui/react'
import moment from 'moment'
import { useState } from 'react'
import { HiDotsVertical } from 'react-icons/hi'
import { usePagination, useTable } from 'react-table'

interface TableProps {
  data: any
  setOpenRoomOrder: (open: boolean) => void
  setReservationId: (res: string) => void
  columns: any[] // Replace with the appropriate type for your columns
}

export default function Table({ data, columns, setOpenRoomOrder, setReservationId }: TableProps) {
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

  // const [reservationId, setReservatioId] = useState('')

  // const { data: reservation, isLoading } = useGetReservationQuery(reservationId)

  return (
    <>
      <table {...getTableProps()} className="w-full bg-white rounded-xl">
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
                  <Popover>
                    <PopoverTrigger>
                      <div className="flex justify-start">
                        <Button variant="ghost">
                          <HiDotsVertical />
                        </Button>
                      </div>
                    </PopoverTrigger>

                    <div className="p-2 py-0 bg-red-200  absolute z-10 left-10 -top-10 border border-[#E6E6E6] flex flex-col gap-3 rounded-[8px]">
                      <PopoverContent
                        width={'38'}
                        position={'absolute'}
                        left={-25}
                        top={-10}
                        padding={'1.5'}
                      >
                        <PopoverArrow />
                        <div className="opacity-0">
                          {/* <PopoverCloseButton display={"false"} /> */}
                        </div>

                        <div
                          onClick={() => {
                            // onOpen()
                            setReservationId(row.values.id)
                            setOpenRoomOrder(true)
                          }}
                          className=" py-[5px] whitespace-nowrap  text-sm px-4"
                        >
                          <button>View Room Order</button>
                        </div>

                        <div className="cursor-pointer py-[5px] whitespace-nowrap text-red-500 text-sm px-4">
                          Delete
                        </div>
                      </PopoverContent>
                    </div>
                  </Popover>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      
    </>
  )
}
