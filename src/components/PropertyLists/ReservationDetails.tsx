'use client'

import { convertDateFormat } from '@/utils'
import { PropertyProp, RoomOrderProp, RoomProps } from '@/utils/types'
import { useToast } from '@chakra-ui/react'
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { FaBed, FaRulerCombined } from 'react-icons/fa'
import { FaChildren, FaMinus, FaPlus } from 'react-icons/fa6'
import { GiMirrorMirror, GiTrousers } from 'react-icons/gi'
import { IoCloseSharp, IoManSharp } from 'react-icons/io5'
import {
  MdFreeBreakfast,
  MdLocalLaundryService,
  MdOutlineBalcony,
  MdOutlineBathroom,
  MdSignalWifiStatusbarConnectedNoInternet3,
  MdSmokeFree,
} from 'react-icons/md'
import {
  PiPhoneDisconnectBold,
  PiTelevisionFill,
  PiUserCirclePlusFill,
} from 'react-icons/pi'
import { TbAirConditioningDisabled, TbBedOff } from 'react-icons/tb'
import { TfiRulerAlt2 } from 'react-icons/tfi'
import Button from '../shared/Button'

interface Room {
  room: RoomProps | any
  property?: PropertyProp
  index: number
  setCheckIn: (checkIn: any) => void
  setCheckOut: (checkOut: any) => void
  checkIn: any
  checkOut: any
  setOpenCheckout: (open: boolean) => void
  setCartItems: Dispatch<SetStateAction<RoomOrderProp[]>>
  cartItems: RoomOrderProp[]
  setOpenCart: (open: boolean) => void
  textColor: string
  removeItem: (id: any) => void
  quantity: number
  setQuantity: (quan: number) => void
}

export const ReservationDetails = ({
  room,
  property,
  index,
  setOpenCart,
  checkIn,
  checkOut,
  setCheckIn,
  setCheckOut,
  setOpenCheckout,
  setCartItems,
  cartItems,
  textColor,
  removeItem,
  quantity,
  setQuantity,
}: Room) => {
  const [bg, setbg] = useState<any>(null)
  const [showDetails, setShowDetails] = useState(false)
  const toast = useToast()

  // console.log(">>>>>cart----", cart);

  useLayoutEffect(() => {
    setbg(property?.primary_color)
  }, [property])

  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }

  useEffect(() => {
    if (index === 0) {
      setShowDetails(true)
    }
  }, [index])

  const checkItemAdded = (id: string) =>
    cartItems.some((item) => {
      // console.log(item.room_id, id)
      return item.room_id === id
    })

  const changeQuantity = (room_id: string, action: string) => {
    setCartItems((prev) => {
      return prev.map((item: RoomOrderProp) => {
        console.log('>>>>prev', item)

        if (action === 'inc') {
          return item.room_id === room_id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        }
        if (action === 'dec') {
          return item.room_id === room_id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        }

        return item
      })
    })
  }

  // console.log('>>>>>cartItem', cartItems)

  return (
    <div className="shadow px-2 rounded-lg  w-full ">
      <div
        className={`py-2 px-2 mt-8 lg:flex lg:space-x-2 `}
        style={{
          background: showDetails ? bg : 'white',
          color: showDetails ? textColor : '#000000',
        }}
      >
        <div className=" group w-full lg:w-[300px] lg:h-[260px] border flex justify-center items-center  cursor-pointer relative overflow-hidden rounded-lg ">
          <img
            src={!room?.image_one ? '/placeholder.png' : room?.image_one}
            alt=""
            className="w-full h-full z-0"
          />
          <div className="absolute h-full w-full bg-black/20 flex justify-center items-center -bottom-10 group-hover:bottom-0 opacity-0  group-hover:opacity-100 transition-all duration-300">
            <button
              onClick={() => {
                toggleDetails()
              }}
              className="bg-black text-white p-2"
            >
              View Details
            </button>
          </div>
        </div>

        <div
          style={{ color: showDetails ? textColor : '#000000' }}
          className={`lato pl-2 pt-2  w-full lg:w-8/12 font-light ${
            showDetails ? 'text-white' : 'text-black'
          } `}
        >
          <p className="text-lg font-light md:text-2xl lg:text-2xl">
            {room?.name}
          </p>

          <div className="flex flex-wrap  items-center gap-4 md:gap-8 lg:gap-6 pt-8 lg:pt-4 text-xs md:text-xs font-md">
            <div>
              <IoManSharp size={20} className="mx-auto" />
              <p>{room?.adults} adult</p>
            </div>
            <div>
              <TfiRulerAlt2 size={20} className="mx-auto" />
              <p>550 ft2 / 51 m2</p>
            </div>
            {room?.bedside_fridge === 1 ? (
              <div className="">
                <FaBed size={20} className="mx-auto" />
                <p>Bedside Fridge</p>
              </div>
            ) : null}
          </div>
          <p className="font-medium text-xs md:text-sm w-[270px] pt-6">
            {room?.description?.substring(40).concat('....')}
          </p>

          <p
            onClick={() => {
              toggleDetails()
            }}
            className="underline text-sm pt-6 cursor-pointer"
          >
            View Room Details and Enhancement
          </p>

          <div className="flex justify-end">
            <p className="p-2 px-4 border text-end w-fit bg-[#4d4c4c] text-white rounded-lg">
              &#8358; {room?.price?.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {showDetails ? (
        <div className="font-light block lg:flex justify-between px-5 lg:px-0">
          <div className="w-full lg:w-7/12 pt-6">
            <h1 className={`quicksand text-3xl text-${bg}-600 pt-4`}>
              {room?.name}
            </h1>
            <p className="pt-2">{room?.description}</p>
            <p className="pt-6 text-xs font-semibold">ROOMS DETAILS</p>

            <div className="flex flex-wrap  items-center gap-4 md:gap-8 lg:gap-6 pt-8 lg:py-4 text-xs md:text-sm font-md">
              {room?.bedside_fridge === 1 ? (
                <div className="">
                  <FaBed size={20} className="mx-auto" />
                  <p>Bedside Fridge</p>
                </div>
              ) : null}
              <div>
                <IoManSharp size={20} className="mx-auto" />
                <p>{room?.adults} adult</p>
              </div>
              {room?.flat_tv ? (
                <div>
                  <PiTelevisionFill size={20} className="mx-auto" />
                  <p> flat tv</p>
                </div>
              ) : null}
              {room?.internet ? (
                <div>
                  <MdSignalWifiStatusbarConnectedNoInternet3
                    size={20}
                    className="mx-auto"
                  />
                  <p> internet</p>
                </div>
              ) : null}
              {room?.air_conditioner ? (
                <div>
                  <TbAirConditioningDisabled size={28} className="mx-auto" />
                  <p> air condition</p>
                </div>
              ) : null}
              <div className="">
                <FaChildren size={20} className="text-center mx-auto" />
                <p>{room?.children} children</p>
              </div>
              {room?.intercom ? (
                <div>
                  <PiPhoneDisconnectBold size={20} className=" mx-auto" />
                  <p> Intercom</p>
                </div>
              ) : null}
              {room?.laundry ? (
                <div>
                  <MdLocalLaundryService size={20} className=" mx-auto" />
                  <p> Laundry</p>
                </div>
              ) : null}
              {room?.wakeup_call ? (
                <div>
                  <TbBedOff size={24} className=" mx-auto" />
                  <p> Wakeup call</p>
                </div>
              ) : null}
              {room?.balcony ? (
                <div>
                  <MdOutlineBalcony size={20} className="mx-auto" />
                  <p> balcony</p>
                </div>
              ) : null}
              {room?.bed_breakfast ? (
                <div>
                  <MdFreeBreakfast size={20} className="mx-auto" />
                  <p> bed breakfast</p>
                </div>
              ) : null}

              {room?.bathroom_telephone ? (
                <div>
                  <MdOutlineBathroom size={20} className="mx-auto" />
                  <p> bathroom telephone</p>
                </div>
              ) : null}

              {room?.guest_amenities ? (
                <div>
                  <PiUserCirclePlusFill size={20} className=" mx-auto" />
                  <p> Guest amenities</p>
                </div>
              ) : null}

              {room?.magnifying_mirror ? (
                <div>
                  <GiMirrorMirror size={20} className=" mx-auto" />
                  <p> Magnifying mirror</p>
                </div>
              ) : null}

              {room?.smoke_detector ? (
                <div>
                  <MdSmokeFree size={20} className=" mx-auto" />
                  <p> Smoke detector</p>
                </div>
              ) : null}

              {room?.hair_dryer ? (
                <div>
                  <GiTrousers size={20} className=" mx-auto" />
                  <p> Hair Dryer</p>
                </div>
              ) : null}

              <div className="flex space-x-3">
                <IoManSharp size={20} className="mx-auto" />
                <p>{room?.adults} adult</p>
              </div>

              <div className="flex space-x-3">
                <FaRulerCombined size={20} className="mx-auto" />
                <p>{room?.size}</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-4/12 border px-4 mt-10 rounded-lg">
            <form className={`lato pt-6  flex justify-center items-center`}>
              <div className=" block  font-semibold space-y-6">
                <div className="w-full">
                  Check in:{' '}
                  <span className="text-[#10375C] pl-2">
                    {cartItems[index]?.start_date}
                  </span>
                  <div className="  flex  mt-2 rounded-lg">
                    <DatePicker
                      className="w-full py-1 px-2 outline-none flex-1 border-2 rounded-lg border-stone-300"
                      selected={checkIn}
                      onChange={(date) => setCheckIn(date)}
                      minDate={new Date()}
                      dateFormat="yyyy-MM-dd"
                    />
                  </div>
                </div>
                <div className="w-full ">
                  Check out:{' '}
                  <span className="text-[#10375C] pl-2">
                    {cartItems[index]?.end_date}
                  </span>
                  <div className="  flex mt-2 rounded-lg">
                    <DatePicker
                      className="w-full py-1 px-2 outline-none flex-1 border-2 rounded-lg border-stone-300"
                      selected={checkOut}
                      onChange={(date) => setCheckOut(date)}
                      minDate={
                        checkIn
                          ? new Date(checkIn.getTime() + 24 * 60 * 60 * 1000)
                          : new Date()
                      }
                      dateFormat="yyyy-MM-dd"
                    />
                  </div>
                </div>

                <div className="flex justify-center items-center">
                  <button
                    disabled={
                      (!checkIn && !checkOut) || checkItemAdded(room.id)
                    }
                    type="button"
                    className=" text-white text-center text-xs lg:text-sm font-md rounded-lg py-1.5 px-2 w-full "
                    style={{
                      background: checkItemAdded(room.id) ? '#a9a4a4cc' : bg,
                    }}
                    onClick={() => {
                      // setShowCheckout(true)
                      setOpenCart(true)

                      const cart = {
                        image: room.image_one,
                        room_id: room.id,
                        index,
                        room_name: room?.name,
                        price: room.price,
                        quality: 0,
                        quantity: 1,
                        start_date: convertDateFormat(
                          checkIn.toLocaleDateString(),
                        ),
                        end_date: convertDateFormat(
                          checkOut.toLocaleDateString(),
                        ),
                        adults: room?.adults,
                        children: room?.children,
                      }
                      setCartItems((prev: any) => [...prev, cart])
                    }}
                  >
                    {checkItemAdded(room.id) ? 'Room added' : 'Add room'}
                  </button>
                </div>

                {cartItems[index]?.quantity > 0 && (
                  <>
                    <hr />
                    <div className="flex space-x-4 items-center">
                      <p className="text-red-600 text-xs">No rooms left</p>
                      <div className="flex justify-between border-[1px] items-center rounded-md shadow-lg px-2 text-xs space-x-2 shadow-lg">
                        <div
                          onClick={() => {
                            if (cartItems[index]?.quantity === 1) {
                              removeItem(cartItems[index]?.room_id)
                            }
                            console.log('>>>>>infx', cartItems[index]?.quantity)

                            changeQuantity(cartItems[index]?.room_id, 'dec')
                          }}
                          className="py-2 cursor-pointer"
                        >
                          <FaMinus />
                        </div>
                        <span className="border-l border-r px-3">
                          {cartItems[index]?.quantity}
                        </span>
                        <div
                          onClick={() => {
                            changeQuantity(cartItems[index]?.room_id, 'inc')
                          }}
                          className="py-1 cursor-pointer"
                        >
                          <FaPlus />
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      ) : null}

      {cartItems[index]?.room_id && (
        <div className="pt-4 xl:hidden">
          <hr />
          <div className="text-xs md:flex space-y-2 md:space-x-10 items-center justify-between py-4 lato">
            <p className="text-[#666666] text-xs">Room 1</p>

            <div className="text-xs md:text-sm flex space-x-4 items-center">
              <div className="flex items-center space-x-2">
                <p>Name:</p>
                <span className="border border-1 rounded-lg p-2">
                  {cartItems[index]?.room_name}
                </span>{' '}
              </div>
              <div className="flex items-center space-x-2">
                <p>Adult:</p>
                <span className="border border-1 rounded-lg p-2">
                  {cartItems[index]?.adults}
                </span>{' '}
              </div>
              <div className="flex items-center space-x-2">
                <p>child:</p>
                <span className="border border-1 rounded-lg p-2">
                  {cartItems[index]?.children}
                </span>{' '}
              </div>

              <IoCloseSharp
                className=" cursor-pointer "
                size={18}
                color="red"
                onClick={() => removeItem(cartItems[index]?.room_id)}
              />
            </div>

            <div className="flex justify-end px-2">
              <Button
                onClick={() => {
                  setOpenCheckout(true)
                  // setOpenCart(false)
                }}
                type="button"
                name="Checkout "
                bg={bg}
                className={`border-[#10375C]  text-white border py-1.5 text-xs lg:text-sm text-center px-4 rounded-lg w-full`}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
