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
import { FaMinus, FaPlus } from 'react-icons/fa'
import { HiOutlineUserGroup } from 'react-icons/hi2'
import { Carousel } from 'react-responsive-carousel'
import MoreRoomDetails from '../Modals/MoreRoomDetails'

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
}

const ReservationCard = ({
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
}: Room) => {
  const [bg, setbg] = useState<any>(null)
  const [showDetails, setShowDetails] = useState(false)
  const toast = useToast()
  const [openDetails, setOpenDetails] = useState(false)

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
      return item.room_id === id
    })

  const changeQuantity = (room_id: any, action: string) => {
    setCartItems((prev) => {
      return prev.map((item: RoomOrderProp) => {
        if (action === 'inc') {
          return item.room_id === room_id
            ? { ...item, quantity: item.quantity++ }
            : item
        }
        if (action === 'dec') {
          return item.room_id === room_id
            ? { ...item, quantity: item.quantity-- }
            : item
        }

        return item
      })
    })
  }

  const chosenItem = (id: string): any => {
    return cartItems.find((item) => item?.room_id === id)
  }
  return (
    <div className="w-full">
      <div className="border-[#D9E6F280] border-[0.2px] shadow-md shadow-slate-300 flex rounded-lg ">
        <div className="group w-1/2 h-full  border-r-[1px] p-5 relative overflow-hidden rounded-lg  ">
          <Carousel
            swipeable={true}
            showThumbs={false}
            centerMode
            centerSlidePercentage={130}
            dynamicHeight={true}
            className="mx-auto"
          >
            <div>
              <img
                src={!room?.image_one ? '/placeholder.png' : room?.image_one}
                alt=""
                className="w-full z-0"
              />
            </div>
            <div>
              <img
                src={!room?.image_two ? '/placeholder.png' : room?.image_two}
                alt=""
                className="w-full z-0"
              />
            </div>
          </Carousel>

          {/* {checkItemAdded(room.id) && chosenItem(room?.id)?.quantity > 0 && ( */}

          {/* )} */}
        </div>

        <div className="w-1/2 p-5">
          <div className="flex justify-between w-full items-center text-[#673816]">
            <h3 className="text-xl font-semibold ">{room?.name}</h3>
            <span className="text-sm font-semibold">
              NGN {room?.price.toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between text-[#798489] text-sm pt-7">
            <div>
              <span className="">Capacity</span>
              <div className="flex items-center gap-2">
                <HiOutlineUserGroup /> <span>{room?.adults}</span>
              </div>
            </div>
            {room?.bedside_fridge && (
              <div>
                <span>Bedside Fridge</span>
                <div className="flex items-center gap-2">
                  <HiOutlineUserGroup /> <span>1</span>
                </div>
              </div>
            )}

            <div>
              <span>Area</span>
              <div className="flex items-center gap-2">
                <HiOutlineUserGroup /> <span>{room?.size}</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-[#BFC6D5] py-6 tracking-wider">
            {room?.description.substring(0, 100).concat('..')}{' '}
            <span
              onClick={() => setOpenDetails(true)}
              className="underline text-[#DF7A2FC4] cursor-pointer"
            >
              See More
            </span>
          </p>

          <hr />

          <div className="shadow-xl shadow-[#AABDD01F] p-2">
            <div className="flex justify-between text-sm text-[#667184] pt-4 w-full ">
              <div className="w-full ">
                Check in:{' '}
                <span className="text-[#10375C] pl-2">
                  {chosenItem(room?.id)?.start_date}
                </span>
                <div className="w-full mt-2 rounded-lg">
                  <DatePicker
                    className=" w-[100%] py-[7px] px-2 outline-none border-[0.2px] rounded-lg border-[#ECEFF580] shadow-md shadow-[#7090B00F]"
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
                  {chosenItem(room?.id)?.end_date}
                </span>
                <div className=" w-full flex mt-2 rounded-lg">
                  <DatePicker
                    className="w-[100%] py-[7px] px-2 outline-none  border-[0.2px] border-[#ECEFF580] shadow-md shadow-[#7090B00F] rounded-lg"
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
            </div>

            {/* <p className="text-[#AE5F25] font-semibold text-sm pt-5">
              {checkItemAdded(room?.id) ? 'No room left' : 'Only 1 Room Left'}
            </p> */}

            <div className="">
              {/* <hr />/ */}
              <div className="flex justify-start space-x-4 items-center pt-6">
                <p className="text-red-600 text-xs">
                  {checkItemAdded(room?.id)
                    ? 'No room left'
                    : 'Only 1 Room Left'}{' '}
                </p>
                <div className="flex justify-between border-[1px] items-center rounded-md shadow-lg px-2 text-xs space-x-2 ">
                  <button
                    onClick={() => {
                      if (chosenItem(room?.id)?.quantity === 1) {
                        removeItem(chosenItem(room?.id)?.room_id)
                      }
                      changeQuantity(chosenItem(room?.id)?.room_id, 'dec')
                    }}
                    className="py-2 cursor-pointer"
                    disabled={
                      !checkItemAdded(room?.id) &&
                      !chosenItem(room?.id)?.quantity
                    }
                  >
                    <FaMinus />
                  </button>
                  <span className="border-l border-r px-3">
                    {!checkItemAdded(room?.id) &&
                    !chosenItem(room?.id)?.quantity
                      ? 0
                      : chosenItem(room.id)?.quantity}
                  </span>
                  <button
                    onClick={() => {
                      changeQuantity(chosenItem(room?.id)?.room_id, 'inc')
                    }}
                    className="py-1 cursor-pointer"
                    disabled={
                      !checkItemAdded(room?.id) &&
                      !chosenItem(room?.id)?.quantity
                    }
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
            </div>

            <button
              type="button"
              style={{
                background: checkItemAdded(room?.id) ? '#a9a4a4cc' : '#AE5F25',
              }}
              disabled={(!checkIn && !checkOut) || checkItemAdded(room?.id)}
              className="bg-[#AE5F25]  w-full text-center text-white mt-6 py-2.5 rounded-lg"
              onClick={() => {
                setOpenCart(true)
                const cart = {
                  image: room?.image_one,
                  room_id: room?.id,
                  index,
                  room_name: room?.name,
                  price: room?.price,
                  quality: 0,
                  quantity: 1,
                  start_date: convertDateFormat(checkIn.toLocaleDateString()),
                  end_date: convertDateFormat(checkOut.toLocaleDateString()),
                  adults: room?.adults,
                  children: room?.children,
                }
                setCartItems((prev: any) => [...prev, cart])
              }}
            >
              {checkItemAdded(room?.id) ? 'Room added' : 'Add room'}
            </button>
          </div>
        </div>
      </div>

      <MoreRoomDetails
        room={room}
        property={property}
        setOpenDetails={setOpenDetails}
        openDetails={openDetails}
      />
    </div>
  )
}

export default ReservationCard