import { CartModal } from '@/components/Modal/CartModal'
import { ReservationDetails } from '@/components/PropertyLists/ReservationDetails'
import Checkout from '@/components/Reservations/Checkout'
import Button from '@/components/shared/Button'
import {
  useGetPropertyQuery,
  useGetRoomByIdQuery,
  useGetRoomByPropertyIdQuery,
} from '@/features/property'
import { RoomOrderProp } from '@/utils/types'
import { Spinner } from '@chakra-ui/react'
import { useParams } from 'next/navigation'
import { useLayoutEffect, useState } from 'react'

export default function BookProperty() {
  const params = useParams<{ id: string }>()
  const [bg, setbg] = useState<any>(null)
  const [textColor, setTextColor] = useState<any>(null)
  const [showDetails, setShowDetails] = useState(false)
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [openCheckout, setOpenCheckout] = useState(false)
  const [openCart, setOpenCart] = useState(false)

  const [cartItems, setCartItems] = useState<RoomOrderProp[] | any>([])

  console.log('>>>>cartItems', cartItems)

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
    const newItems = cartItems.filter(
      (item: RoomOrderProp) => item.room_id !== id,
    )
    setCartItems(newItems)
  }

  const total = cartItems.reduce((acc: number, cur: RoomOrderProp) => {
    return cur.price + acc
  }, 0)

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center pb-6 mt-20">
          <Spinner />
        </div>
      ) : (
        <div className={`font-lato`}>
          <div
            className={` w-full  lg:h-[240px]`}
            style={{ background: bg, color: textColor }}
          >
            <div className="max-w-[1062px] px-10 pb-10 pt-16 mx-auto flex justify-between items-center">
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
            <div>
              <div className="max-w-[1062px] mx-auto lg:px-10 mt-20">
                {!roomDetail ? (
                  <div className="flex justify-center items-center pb-6">
                    <Spinner size="30" color="blue" />{' '}
                  </div>
                ) : null}

                <div className="flex justify-end px-6 lg:px-0">
                  <Button
                    onClick={() => setOpenCart(true)}
                    type="button"
                    name="View Cart"
                    className="border-[#10375C] bg-[#10375C]  text-white border py-1.5 text-xs mt-2 lg:mt-0 lg:text-sm text-center px-4 rounded-lg"
                    bg={bg}
                  />
                </div>

                <ReservationDetails
                  // setOpenCheckout={setOpenCheckout}
                  setOpenCart={setOpenCart}
                  property={property}
                  room={roomDetail || {}}
                  index={0}
                  checkIn={checkIn}
                  checkOut={checkOut}
                  setCheckIn={setCheckIn}
                  setCheckOut={setCheckOut}
                  setCartItems={setCartItems}
                  cartItems={cartItems}
                  setOpenCheckout={setOpenCheckout}
                />
              </div>

              <div className="max-w-[1062px] mx-auto lg:px-10 pt-20">
                <p className="text-2xl text-center">
                  Other rooms under {property?.name}{' '}
                </p>
                {isLoading ? (
                  <div className="flex justify-center items-center pb-6">
                    <Spinner />{' '}
                  </div>
                ) : null}

                {otherRooms?.length === 0 ? (
                  <div className="mt-4 flex">
                    <p className="text-[#7b7c7d] text-xl">
                      No property has been added
                    </p>
                  </div>
                ) : null}

                {otherRooms
                  ?.filter((r) => r.id !== roomDetail?.id)
                  ?.map((p: any, index: number) => {
                    return (
                      <ReservationDetails
                        property={property}
                        // setOpenCheckout={setOpenCheckout}
                        room={p}
                        key={index}
                        index={index + 1}
                        checkIn={checkIn}
                        checkOut={checkOut}
                        setCheckIn={setCheckIn}
                        setCheckOut={setCheckOut}
                        setCartItems={setCartItems}
                        cartItems={cartItems}
                        setOpenCart={setOpenCart}
                        setOpenCheckout={setOpenCheckout}
                      />
                    )
                  })}
              </div>
            </div>
          )}
        </div>
      )}

      <CartModal
        openCheckout={openCheckout}
        setOpenCheckout={setOpenCheckout}
        setOpenCart={setOpenCart}
        cartItems={cartItems}
        removeItem={removeItem}
        openCart={openCart}
      />
    </>
  )
}

// BookProperty.getLayout = function getLayout(page: any) {
//   return <AuthWrapper>{page}</AuthWrapper>
// }
