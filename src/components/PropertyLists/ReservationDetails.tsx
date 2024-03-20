'use client'

import { PropertyProp, RoomProps } from '@/utils/types'
import { useToast } from '@chakra-ui/react'
import { useEffect, useLayoutEffect, useState } from 'react'
import { FaBed, FaRulerCombined } from 'react-icons/fa'
import { FaChildren } from 'react-icons/fa6'
import { IoIosBed } from 'react-icons/io'
import { IoManSharp } from 'react-icons/io5'
import { MdLocalLaundryService } from 'react-icons/md'
import { PiPhoneDisconnectBold, PiTelevisionFill } from 'react-icons/pi'
import { TbBedOff } from 'react-icons/tb'
import { TfiRulerAlt2 } from 'react-icons/tfi'

interface Room {
  room: RoomProps | any
  property?: PropertyProp
  index: number
  setShowCheckout: (show: boolean) => void
}

export const ReservationDetails = ({ room, property, index, setShowCheckout}: Room) => {
  const [bg, setbg] = useState<any>(null)
  const [showDetails, setShowDetails] = useState(false)
  const toast = useToast()
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')

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

  return (
    <div className="pb-10">
      <div
        className={` pt-2 pl-2 mt-8 lg:flex lg:space-x-2 border`}
        style={{ background: showDetails ? bg : 'white' }}
      >
        <div className=" group w-full lg:w-[300px] lg:h-[260px] border flex justify-center items-center  cursor-pointer relative overflow-hidden ">
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
            <div>
              <IoIosBed size={20} className="mx-auto" />
              <p>1 King Bed</p>
            </div>
          </div>
          <p className="font-medium text-xs md:text-sm w-[270px] pt-6">
            A suite with a king bed size, jacuzzi, pair of couches, dining
            table, balcony & 2 smart TVs
          </p>

          <p className="underline text-sm pt-6">
            View Room Details and Enhancement
          </p>

          <div className="flex justify-end">
            <p className="p-2 px-4 border text-end w-fit bg-[#4d4c4c] text-white">
              $ {room?.price}
            </p>
          </div>
        </div>
      </div>

      {showDetails ? (
        <div className="font-light flex justify-between">
          <div className="w-7/12 pt-6">
            <h1
              className={`quicksand text-3xl text-${bg}-600 pt-4`}
            >
              {room?.name}
            </h1>
            <p className="pt-2 text-[#7a7878]">
              A suite with a king bed size, jacuzzi, pair of couches, dining
              table, balcony & 2 smart TVs
            </p>
            <p className="pt-6 text-xs font-semibold">ROOMS DETAILS</p>
            <div className="flex flex-wrap justify-between font-light items-center gap-4 md:gap-8 lg:gap-6 pt-4 text-xs md:text-base font-md">
              <div className="flex space-x-3">
                <IoManSharp size={30} className="mx-auto" />
                <p>{room?.adults} adult</p>
              </div>
              <div className="flex space-x-3">
                <IoIosBed size={30} className="mx-auto" />
                <p>1 King Bed</p>
              </div>

              <div className="flex space-x-3">
                <FaRulerCombined size={26} className="mx-auto" />
                <p>550 ft2 / 51 m2</p>
              </div>
            </div>

            <p className="pt-10 text-xs font-semibold">ROOMS AMENITIES</p>
            <div className="flex flex-wrap justify-between font-light items-center gap-4 md:gap-8 lg:gap-6 text-xs md:text-base font-md">
              <div className="flex flex-wrap justify-between  items-center gap-4 md:gap-8 lg:gap-6 pt-8 lg:pt-4">
                {room?.bedside_fridge === 1 ? (
                  <div className="flex space-x-3">
                    <FaBed size={30} className="mx-auto" />
                    <p>Bedside Fridge</p>
                  </div>
                ) : null}
                <div className="flex space-x-3">
                  <IoManSharp size={30} className="mx-auto" />
                  <p>{room?.adults} adult</p>
                </div>
                {room?.flat_tv ? (
                  <div className="flex space-x-3">
                    <PiTelevisionFill size={30} className="mx-auto" />
                    <p> flat tv</p>
                  </div>
                ) : null}
              </div>
              <div className="flex flex-wrap justify-between items-center gap-4 md:gap-8 lg:gap-6 pt-8 lg:pt-8">
                <div className="flex space-x-3">
                  <FaChildren size={30} className="text-center mx-auto" />
                  <p>{room?.children} children</p>
                </div>
                {room?.intercom ? (
                  <div className="flex space-x-3">
                    <PiPhoneDisconnectBold size={30} className=" mx-auto" />
                    <p> Intercom</p>
                  </div>
                ) : null}
                {room?.laundry ? (
                  <div className="flex space-x-3">
                    <MdLocalLaundryService size={30} className=" mx-auto" />
                    <p> Laundry</p>
                  </div>
                ) : null}

                {room?.wakeup_call ? (
                  <div className="flex space-x-3">
                    <TbBedOff size={30} className=" mx-auto" />
                    <p> Wakeup call</p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="w-4/12 border px-4 mt-10">
            <form className={`lato pt-6 `}>
              <div className=" block  font-semibold space-y-6">
                <div className="w-full">
                  Check in:{' '}
                  <span className="text-[#10375C] pl-2">
                    {/* February 3rd, 2024 */}
                    {checkIn}
                  </span>
                  <div className="w-full border-2 border-stone-300 flex p-1 mt-4 rounded-lg">
                    <input
                      type="date"
                      placeholder="Check in"
                      className="flex-1 p-2 outline-none border-none"
                      onChange={(e) => setCheckIn(e.target.value)}
                    />
                    {/* <CiCalendarDate size={24} /> */}
                  </div>
                </div>
                <div className="w-full ">
                  Check out:{' '}
                  <span className="text-[#10375C] pl-2">
                    {checkOut}
                  </span>
                  <div className="w-full border-2 border-stone-300 flex p-1 mt-4 rounded-lg">
                    <input
                      type="date"
                      placeholder="Check in"
                      className="flex-1 p-2"
                      onChange={(e) => setCheckOut(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex justify-center items-center">
                  <button
                    type="button"
                    className=" text-white text-center text-xs lg:text-sm font-md rounded-lg py-1.5 px-2 w-full"
                    style={{ background: bg }}
                    onClick={() => setShowCheckout(true)}
                  >
                    Confirm booking
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  )
}
