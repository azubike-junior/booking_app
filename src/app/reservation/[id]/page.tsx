'use client'

import BookingSummaryDrawer from '@/components/Modals/BookingSummaryDrawer'
import Checkout from '@/components/Modals/Checkout'
import ReservationCard from '@/components/ReservationComp/ReservationCard'
import Button from '@/components/shared/Button'
import { useGetAccountQuery } from '@/features/auth'
import {
  useGetPropertyQuery,
  useGetRoomByPropertyIdQuery,
  useGetRoomBySlugQuery
} from '@/features/property'
import { getItem, _convertDateFormat } from '@/utils'
import { RoomOrderProp } from '@/utils/types'
import { Spinner } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useLayoutEffect, useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { IoCloseSharp } from 'react-icons/io5'
import { MdOutlineArrowBackIos } from 'react-icons/md'

const Reservations = () => {
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
  const [openBookingDrawer, setOpenBookingDrawer] = useState(false)

  const [cartItems, setCartItems] = useState<RoomOrderProp[] | any>([])

  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }

  const slug = params?.id

  const {
    data: roomDetail,
    isLoading: loadingRoomDetails,
  } = useGetRoomBySlugQuery(slug)

  // @ts-ignore
  const { data: property, isLoading: loadingProperty } = useGetPropertyQuery(
    roomDetail?.property_id,
  )
  // @ts-ignore
  const { data: otherRooms, isLoading } = useGetRoomByPropertyIdQuery(
    roomDetail?.property_id,
  )

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
    return cur.price * cur.quantity * cur.noOfDays + acc
  }, 0)

  const checkRooms = (arr: any) => {
    const roomIndex: any = otherRooms?.findIndex(
      (r: any) => r.id === roomDetail?.id,
    )
    const [selectedRoom] = arr?.splice(roomIndex, 1)
    arr?.unshift(selectedRoom)
    return arr
  }
  let allRooms

  if (otherRooms) {
    console.log(">>>>>allRooms", otherRooms);

    const publishedRooms = otherRooms?.map((room) => room.published)
    
    allRooms = checkRooms([...otherRooms])
  }

  let img: any = property?.image

  const userId = getItem('user_id')

  const { data: user, isLoading: loadingUser } = useGetAccountQuery(userId)

  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="hotel booking engine, free booking engine, Booking engine 
            for hotels, booking engine examples, direct booking site, Booking extranet, hotel booking 
            discount, Hotels deals, commission free booking, book direct"
                    ></meta>
        <meta
          name="description"
          content={`${property?.name}, booking is powered by btlengine.com`}
        ></meta>
      </Head>

      {loadingProperty || loadingRoomDetails || isLoading ? (
        <div className="flex justify-center items-center pb-6 mt-20">
          <Spinner />
        </div>
      ) : (
        <div
          style={{
            minHeight: '100vh',
          }}
          className="lato flex flex-col h-screen"
        >
          <div className="">
            <div
              className="w-full h-[300px] lg:h-[350px] border "
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.3), rgba(11, 0, 0, 0.60)), url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
              }}
            >
              <div className="max-w-[1400px] px-10 mx-auto">
                <div className={`lato  w-full h-[350px]`}>
                  <div className="mt-4  text-white md:flex  md:space-x-6">
                    <MdOutlineArrowBackIos
                      color="white"
                      size={24}
                      onClick={() => {
                        setOpenCheckout(false)
                        setOpenCart(true)
                      }}
                    />

                    <div className="border-[0.1px] shadow-xl border-white bg-opacity-30 xl:w-4/12 mt-6 md:mt-0 px-2 py-4 md:py-7 flex justify-center items-center rounded-lg space-x-6 bg-[#ccc]">
                      <img
                        src={property?.image}
                        className="w-10 h-10 lg:w-16 lg:h-16 z-10 shadow rounded-lg"
                      />

                      <div className="z-30">
                        <h3 className="font-bold text-xl lg:text-2xl shadow-sm">
                          {property?.name?.substring(0, 20).concat('...')}
                        </h3>
                        <p>{property?.address}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {!openCheckout && (
              <div className="flex justify-center items-center mt-6">
                <button
                  className="border-[1px] border-[#EEEFF3] rounded-[20px] flex items-center space-x-4 px-4 py-2 lg:hidden"
                  onClick={() => setOpenBookingDrawer(true)}
                >
                  {/* <GiBookCover /> */}
                  <div className="bg-red-500 w-5 h-5 rounded-full text-xs flex items-center justify-center text-white">
                    {cartItems.length}
                  </div>
                  <span>Booking Summary</span>
                </button>
              </div>
            )}

            {openCheckout ? (
              <Checkout
                room={roomDetail}
                property={property}
                setOpenCheckout={setOpenCheckout}
                setOpenCart={setOpenCart}
                checkIn={checkIn}
                checkOut={checkOut}
                cartItems={cartItems}
                total={total}
                openCheckout={openCheckout}
              />
            ) : (
              <div className="lato xl:w-[1400px] mx-auto h-full flex p-10 lg:px-10 gap-5 xl:gap-10 justify-between relative ">
                <div className=" lg:w-[800px] xl:w-[900px] mx-auto space-y-10">
                  {allRooms?.map((p: any, index: number) => {
                    return (
                      <ReservationCard
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
                        bg={bg}
                        removeItem={removeItem}
                        openBookingDrawer={openBookingDrawer}
                        setOpenBookingDrawer={setOpenBookingDrawer}
                      />
                    )
                  })}
                </div>

                <div className="w-[350px] hidden lg:block mb-20">
                  <div className="border-[#F2F4F7] sticky top-5 min-h-[500px]  max-h-[700px] right-0  border-[0.2px] shadow-md shadow-[#7090B01A] w-full rounded-lg overflow-scroll ">
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
                                  <p className="text-[#969DAA] text-base">
                                    Check-In
                                  </p>
                                  <p className="text-black text-base">
                                    {_convertDateFormat(c.start_date)}
                                  </p>
                                </div>

                                <div className="w-[1px] h-10 bg-[#E8EAED]"></div>

                                <div>
                                  <p className="text-[#969DAA] text-base ">
                                    Check-Out
                                  </p>
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

                <BookingSummaryDrawer
                  openBookingDrawer={openBookingDrawer}
                  setOpenBookingDrawer={setOpenBookingDrawer}
                  setOpenCheckout={setOpenCheckout}
                  setOpenCart={setOpenCart}
                  property={property}
                  cartItems={cartItems}
                  removeItem={removeItem}
                  total={total}
                  bg={bg}
                />
              </div>
            )}
          </div>

          <div
            style={{
              background: bg,
              // position: 'absolute',
              // bottom: 0,
              //   width: '100%',
            }}
            className=" py-14 px-10 lg:px-10 mt-72 z-30"
          >
            <div className="flex justify-center xl:justify-between xl:max-w-[1400px] mx-auto items-center">
              <div className="flex items-center">
                <div className="mr-10 hidden md:flex lg:space-x-20">
                  <img
                    src={property?.image}
                    className="w-20 h-20 z-10 shadow rounded-lg"
                  />

                  <div className="bg-[#798489] w-[1px] h-[80px] ml-6"></div>
                </div>

                <div className="text-white text-sm tracking-wider font-light ">
                  <p className="">
                    This site is protected by{' '}
                    <span className="font-bold">reCAPTCHA </span> and the{' '}
                    <span className="font-bold">
                      {' '}
                      <Link
                        href="https://policies.google.com/privacy"
                        passHref
                        legacyBehavior
                      >
                        <a target="_blank"> Google Privacy Policy</a>
                      </Link>
                    </span>{' '}
                    and{' '}
                    <span className="font-bold">
                      {' '}
                      <Link
                        href="https://policies.google.com/terms"
                        passHref
                        legacyBehavior
                      >
                        <a target="_blank">Terms of Service</a>
                      </Link>{' '}
                    </span>{' '}
                    apply
                  </p>
                  <p className="pt-3">Copyright © 2024 BTL Engine</p>
                </div>
              </div>

              {user?.current_subscription === 'Business' && (
                <div className="flex space-x-6">
                  <Link href={`mailto:${user?.email}`}>
                    <Image
                      src={'/gmail.svg'}
                      width={30}
                      height={100}
                      alt="gmail"
                    />
                  </Link>

                  <Link href={`https://wa.me/${property?.whatsapp_number}`}>
                    <Image
                      src={'/whatsapp.svg'}
                      width={34}
                      height={100}
                      alt="gmail"
                    />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Reservations
