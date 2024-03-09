'use client'

import { lato } from '@/utils'
import { RoomProps } from '@/utils/types'
import { useToast } from '@chakra-ui/react'
import { FaBed, FaChildren } from 'react-icons/fa6'
import { IoManSharp } from 'react-icons/io5'
import {
  MdLocalLaundryService,
  MdSignalWifiStatusbarConnectedNoInternet3,
} from 'react-icons/md'
import { PiPhoneDisconnectBold, PiTelevisionFill } from 'react-icons/pi'
import { TbBedOff } from 'react-icons/tb'

export const Rooms = ({
  id,
  name,
  size,
  adults,
  flat_tv,
  wakeup_call,
  laundry,
  intercom,
  internet,
  category,
  price,
  mode,
  children,
  room_service_24h,
  bedside_fridge,
  published,
  reserved,
  mode_str,
  image_one
}: RoomProps) => {
  const toast = useToast()

  const publishLink = async () => {
    const base_url = `
    http://localhost:3000/properties
    `
    if (navigator?.clipboard) {
      const cb = navigator.clipboard

      cb.writeText(`${base_url}/properties/rooms/reservations/${id}`)
        .then(() => {
          toast({
            position: 'top-right',
            title: 'Success',
            description: 'link has been copied and published successfully',
            status: 'success',
            duration: 5000,
            isClosable: true,
          })
        })
        .catch(() => {
          toast({
            position: 'top-right',
            title: 'Error',
            description: 'could not copy link',
            status: 'error',
            duration: 5000,
            isClosable: true,
          })
        })
    }
  }

  return (
    <div className="lg:flex lg:space-x-6">
      <div className="h-[300px] lg:h-[550px] w-full lg:w-[500px] overflow-hidden  border flex justify-center items-center rounded-t-xl shadow-xl shadow-slate-60 lg:shadow-none ">
        <img src={image_one} alt="" className="w-[500px]" />
      </div>

      <div
        className={`${lato.className} bg-white p-4 lg:p-10 w-full lg:w-7/12 font-light`}
      >
        <p className="text-lg md:text-2xl lg:text-4xl text-[#10375C]">{name}</p>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-12 pt-8 lg:pt-14 text-xs md:text-sm font-md">
          {bedside_fridge === 1 ? (
            <div className="">
              <FaBed size={30} className="mx-auto" />
              <p>Bedside Fridge</p>
            </div>
          ) : null}
          <div>
            <IoManSharp size={30} className="mx-auto" />
            <p>{adults} adult</p>
          </div>
          {flat_tv ? (
            <div>
              <PiTelevisionFill size={30} className="mx-auto" />
              <p> flat tv</p>
            </div>
          ) : null}
          {internet ? (
            <div>
              <MdSignalWifiStatusbarConnectedNoInternet3
                size={30}
                className="mx-auto"
              />
              <p> internet</p>
            </div>
          ) : null}
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-12 pt-8 lg:pt-14 text-xs md:text-sm  font-md">
          <div className="">
            <FaChildren size={26} className="text-center mx-auto" />
            <p>{children} children</p>
          </div>
          {intercom ? (
            <div>
              <PiPhoneDisconnectBold size={24} className=" mx-auto" />
              <p> Intercom</p>
            </div>
          ) : null}
          {laundry ? (
            <div>
              <MdLocalLaundryService size={24} className=" mx-auto" />
              <p> Laundry</p>
            </div>
          ) : null}

          {wakeup_call ? (
            <div>
              <TbBedOff size={24} className=" mx-auto" />
              <p> Wakeup call</p>
            </div>
          ) : null}
        </div>
        <div className="pt-6 flex space-x-10 text-xs md:text-sm">
          <div>
            <p>Size</p>
            <p className="font-light ">{size} /m</p>
          </div>

          <div>
            <p>Mode</p>
            <p>{mode_str === 'available' ? 'Available' : 'Not available'}</p>
          </div>
        </div>
        <p className="font-medium text-xs md:text-base pt-6">
          A suite with a king bed size, jacuzzi, pair of couches, dining table,
          balcony & 2 smart TVs
        </p>
        <div className="font-semibold texet-sm pt-10 flex items-center justify-between ">
          <p className="text-2xl text-[#10375C]">N {price}</p>
          <button
            onClick={publishLink}
            className="bg-[#F58634] text-white text-center font-md rounded-lg py-2 px-10 cursor-pointer"
          >
            {published ? 'published' : 'publish'}
          </button>
        </div>
      </div>
    </div>
  )
}
