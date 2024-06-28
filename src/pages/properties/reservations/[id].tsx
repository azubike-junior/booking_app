import { ReservationDetails } from '@/components/PropertyLists/ReservationDetails'
import Checkout from '@/components/Reservations/Checkout'
import Button from '@/components/shared/Button'
import {
  useGetPropertyQuery,
  useGetRoomByIdQuery,
  useGetRoomByPropertyIdQuery,
} from '@/features/property'
import { _convertDateFormat } from '@/utils'
import { RoomOrderProp } from '@/utils/types'
import { Spinner } from '@chakra-ui/react'
import { useParams } from 'next/navigation'
import { useLayoutEffect, useState } from 'react'
import { IoCloseSharp } from 'react-icons/io5'

export default function BookProperty() {
  const params = useParams<{ id: string }>()
  const [bg, setbg] = useState<any>(null)
  const [textColor, setTextColor] = useState<any>(null)
  const [showDetails, setShowDetails] = useState(false)

  const defaultCheckInDate = new Date()
  const defaultCheckOutDate = new Date(
    defaultCheckInDate.getTime() + 24 * 60 * 60 * 1000,
  )

  const [checkIn, setCheckIn] = useState<any>(defaultCheckInDate)
  const [checkOut, setCheckOut] = useState<any>(defaultCheckOutDate)
  const [openCheckout, setOpenCheckout] = useState(false)
  const [openCart, setOpenCart] = useState(false)
  const [quantity, setQuantity] = useState(0)

  const [cartItems, setCartItems] = useState<RoomOrderProp[] | any>([])

  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }

  const property_id = params?.id.split('+')[0]
  const room_id = params?.id.split('+')[1]

  const { data: property } = useGetPropertyQuery(property_id)
  const { data: otherRooms, isLoading } = useGetRoomByPropertyIdQuery(
    property_id,
  )

  const {
    data: roomDetail,
    isLoading: loadingRoomDetails,
  } = useGetRoomByIdQuery(room_id)

  let _data: any = []

  if (otherRooms) {
    _data = [otherRooms[0]]
  }

  useLayoutEffect(() => {
    setbg(property?.primary_color)
    setTextColor(property?.text_color)
  }, [property])

  const removeItem = (id: string) => {
    const newItems = cartItems.filter((item: RoomOrderProp) => {
      if (item.room_id !== id) {
        return item
      }
    })
    setCartItems(newItems)
  }

  const total = cartItems.reduce((acc: number, cur: RoomOrderProp) => {
    return cur.price * cur.quantity + acc
  }, 0)

  const checkRooms = (arr: any) => {
    const roomIndex: any = otherRooms?.findIndex((r) => r.id === roomDetail?.id)
    const [selectedRoom] = arr?.splice(roomIndex, 1)

    arr?.unshift(selectedRoom)

    return arr
  }

  let allRooms

  if (otherRooms) {
    // console.log('......allRooms', checkRooms([...otherRooms]))

    allRooms = checkRooms([...otherRooms])
  }

  // console.log('......allRooms----', allRooms)
  console.log('>>>cartItems', cartItems)

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center pb-6 mt-20">
          <Spinner />
        </div>
      ) : (
        <div className={`font-lato `}>
          <div
            className={` w-full  lg:h-[240px] `}
            style={{ background: bg, color: textColor }}
          >
            <div className="max-w-[1200px] px-10 pb-10 pt-16 mx-auto flex justify-between items-center">
              <div className="">
                <p className="text-3xl lg:text-5xl">{property?.name}</p>
                <p className="text-xl lg:text-2xl pt-6">{property?.address}</p>
              </div>

              <img src={property?.logo} alt="" className="w-20 h-20" />
            </div>
          </div>

          {openCheckout ? (
            <Checkout
              property={property}
              room={roomDetail}
              setOpenCheckout={setOpenCheckout}
              checkIn={checkIn}
              checkOut={checkOut}
              cartItems={cartItems}
              total={total}
            />
          ) : (
            <div className="max-w-[1200px] w-full  mx-auto mt-6 flex px-5 relative ">
              <div className="max-w-[1200px] w-full mx-auto lg:px-5">
                <div className="max-w-[900px] mx-auto">
                  {otherRooms?.length === 0 ? (
                    <div className="mt-4 flex">
                      <p className="text-[#7b7c7d] text-xl">
                        No property has been added
                      </p>
                    </div>
                  ) : null}

                  {allRooms?.map((p: any, index: number) => {
                    return (
                      <ReservationDetails
                        property={property}
                        room={p}
                        key={index}
                        index={index}
                        checkIn={checkIn}
                        checkOut={checkOut}
                        setCheckIn={setCheckIn}
                        setCheckOut={setCheckOut}
                        setCartItems={setCartItems}
                        cartItems={cartItems}
                        setOpenCart={setOpenCart}
                        setOpenCheckout={setOpenCheckout}
                        textColor={textColor}
                        removeItem={removeItem}
                      />
                    )
                  })}
                </div>
              </div>
              <div className="border w-[300px] mt-8 lato hidden xl:block sticky ">
                <div className="bg-[#f1efef] text-xs text-center py-2">
                  Booking Summary
                </div>

                {cartItems.length === 0 ? (
                  <p className="text-center mt-10">No items in your cart</p>
                ) : (
                  <div className="  rounded-xl py-2 space-y-4">
                    {cartItems?.map((c: RoomOrderProp) => {
                      return (
                        <div
                          key={c.room_id}
                          style={{ borderTop: '3px', borderColor: bg }}
                          className=" px-2 py-4 items-center text-xl rounded-xl relative"
                        >
                          <div className="text-sm items-center flex space-x-4 border-b pb-1">
                            <p className="font-medium text-[#7c7a7a]">Date</p>
                            <div>
                              <p className="text-black text-xs">
                                {_convertDateFormat(c.start_date)} -{' '}
                                {_convertDateFormat(c.end_date)}
                              </p>
                            </div>
                          </div>
                          <div className="flex justify-between space-x-3 items-center pt-2">
                            <p className=" text-sm capitalize">{c.room_name}</p>

                            <IoCloseSharp
                              className=" cursor-pointer"
                              size={18}
                              color="red"
                              onClick={() => removeItem(c.room_id)}
                            />
                          </div>

                          <div className="text-sm flex justify-between">
                            <div>
                              {c?.adults} adult, {c?.children} child, 1 room
                            </div>

                            <p>
                              {' '}
                              &#8358; {(c.price * c.quantity).toLocaleString()}
                            </p>
                          </div>

                          <div></div>
                        </div>
                      )
                    })}

                    <hr />

                    <div className="flex justify-between px-4">
                      <p>Total:</p>

                      <p> &#8358; {total.toLocaleString()}</p>
                    </div>

                    <div className="flex justify-end px-2">
                      <Button
                        onClick={() => {
                          setOpenCheckout(true)
                          setOpenCart(false)
                        }}
                        type="button"
                        name="Checkout "
                        bg={bg}
                        className={`border-[#10375C]  text-white border py-1.5 text-xs mt-2 lg:mt-4 lg:text-sm text-center px-4 rounded-lg w-full`}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}
