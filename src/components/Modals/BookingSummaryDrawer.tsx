import { _convertDateFormat } from '@/utils'
import { PropertyProp, RoomOrderProp } from '@/utils/types'
import { Drawer, DrawerContent, DrawerOverlay } from '@chakra-ui/react'
import Image from 'next/image'
import { IoCloseSharp } from 'react-icons/io5'
import Button from '../shared/Button'

type prop = {
  setOpenBookingDrawer: any
  openBookingDrawer: boolean
  cartItems: RoomOrderProp[]
  property?: PropertyProp
  removeItem: (id: any) => void
  setOpenCheckout: (open: boolean) => void
  setOpenCart: (open: boolean) => void
  total: string
  bg: string
}

const BookingSummaryDrawer = ({
  setOpenBookingDrawer,
  openBookingDrawer,
  cartItems,
  property,
  removeItem,
  total,
  setOpenCheckout,
  setOpenCart,
  bg,
}: prop) => {
  return (
    <Drawer
      placement={'bottom'}
      onClose={setOpenBookingDrawer}
      isOpen={openBookingDrawer}
    >
      <DrawerOverlay />
      <DrawerContent className="lg:hidden  ">
        <div className="bg-white space-y-4 rounded-lg shadow-sm p-4 px-4 mt-2 text-sm lg:text-base ">
          <div className="border-[#F2F4F7] border-[0.2px] shadow-md shadow-[#7090B01A] w-full rounded-lg h-full">
            <p className="text-center border-b pb-4 py-6 text-[#673816]">
              Booking Summary
            </p>

            {cartItems.length === 0 ? (
              <div className="pt-10">
                <Image
                  src={'/emptybed.svg'}
                  width={60}
                  height={60}
                  alt="empty"
                  className="mx-auto"
                />

                <p className="text-center text-sm text-[#969DAA]">
                  No Room(s) Selected
                </p>
              </div>
            ) : (
              <div className="  rounded-xl py-2 space-y-4">
                {cartItems?.map((c: RoomOrderProp) => {
                  return (
                    <div
                      key={c.room_id}
                      style={{ borderTop: '3px' }}
                      className=" px-4 py-4 items-center text-xl rounded-xl relative border-b"
                    >
                      <div className="flex justify-end">
                        <IoCloseSharp
                          className=" cursor-pointer text-end"
                          size={18}
                          color="red"
                          onClick={() => removeItem(c.room_id)}
                        />
                      </div>

                      <p className=" text-base capitalize text-[#273238] pt-2">
                        {c.room_name}
                      </p>

                      <div className="text-sm flex justify-between">
                        <div>
                          {`${c?.adults} Adult, ${c?.children} Child, ${
                            c?.quantity
                          } ${c.quantity > 1 ? 'Rooms' : 'Room'},  ${
                            c?.noOfDays
                          } ${c.noOfDays > 1 ? 'Days' : 'Day'}`}
                        </div>

                        <p>
                          {`${property?.currency}`}{' '}
                          {(
                            c.price *
                            c.quantity *
                            c?.noOfDays
                          ).toLocaleString()}
                        </p>
                      </div>

                      <div className="text-sm items-center flex justify-between space-x-4 pb-1 pt-5">
                        <div>
                          <p className="text-[#969DAA] text-base">Check-In</p>
                          <p className="text-black text-base">
                            {_convertDateFormat(c.start_date)}
                          </p>
                        </div>

                        <div className="w-[1px] h-10 bg-[#E8EAED]"></div>

                        <div>
                          <p className="text-[#969DAA] text-base ">Check-Out</p>
                          <p className="text-black text-base">
                            {_convertDateFormat(c.end_date)}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}

                {/* <hr /> */}

                <div className="flex justify-between px-4">
                  <p>Total:</p>

                  <p>
                    {' '}
                    {`${property?.currency}`} {total.toLocaleString()}
                  </p>
                </div>

                <div className="flex justify-end px-2">
                  <Button
                    bg={bg}
                    onClick={() => {
                      setOpenCheckout(true)
                      setOpenCart(false)
                    }}
                    type="button"
                    name="Book "
                    className={` text-white border py-2 text-xs mt-2 lg:mt-4 lg:text-sm text-center px-4 rounded-lg w-full bg-[#AE5F25]`}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default BookingSummaryDrawer
