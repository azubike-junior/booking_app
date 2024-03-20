'use client'

import { useEditRoomMutation } from '@/features/property'
import { lato } from '@/utils'
import { RoomProps } from '@/utils/types'
import { Spinner, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { FaCopy } from 'react-icons/fa'
import { FaBed, FaChildren } from 'react-icons/fa6'
import { IoManSharp } from 'react-icons/io5'
import {
  MdLocalLaundryService,
  MdSignalWifiStatusbarConnectedNoInternet3,
} from 'react-icons/md'
import { PiPhoneDisconnectBold, PiTelevisionFill } from 'react-icons/pi'
import { TbBedOff } from 'react-icons/tb'

interface Room {
  data: RoomProps
}

export const Rooms = ({ data }: Room) => {
  const {
    id,
    name,
    size,
    adults,
    flat_tv,
    wakeup_call,
    laundry,
    intercom,
    internet,
    property_id,
    category,
    price,
    mode,
    children,
    room_service_24h,
    bedside_fridge,
    published,
    reserved,
    mode_str,
    image_one,
  } = data
  const toast = useToast()

  const [editRoom, { isLoading: editing }] = useEditRoomMutation()
  const [publishedLink, setPublishedLink] = useState('')

  const base_url = `
    http://localhost:3000/properties/reservations/${property_id}+${id}
    `

  const publishLink = async () => {
    if (navigator?.clipboard) {
      const cb = navigator.clipboard

      cb.writeText(`${base_url}`)
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
    <div className="lg:flex lg:space-x-4">
      <div className=" w-full lg:w-[500px] lg:h-[440px] overflow-hidden  border flex justify-center items-center rounded-xl shadow-xl shadow-slate-60 lg:shadow-none ">
        <img
          src={!image_one ? '/placeholder.png' : image_one}
          alt=""
          className="w-full h-full"
        />
      </div>

      <div
        className={`${lato.className} ${
          published === 0 ? 'bg-white' : 'bg-green-50'
        } p-6  w-full lg:w-7/12 font-light`}
      >
        <p className="text-lg md:text-2xl lg:text-3xl text-[#10375C]">{name}</p>
        <p className="font-medium text-xs md:text-sm pt-2">
          A suite with a king bed size, jacuzzi, pair of couches, dining table,
          balcony & 2 smart TVs
        </p>
        <div className="flex flex-wrap  items-center gap-4 md:gap-8 lg:gap-6 pt-8 lg:pt-4 text-xs md:text-sm font-md">
          {bedside_fridge === 1 ? (
            <div className="">
              <FaBed size={20} className="mx-auto" />
              <p>Bedside Fridge</p>
            </div>
          ) : null}
          <div>
            <IoManSharp size={20} className="mx-auto" />
            <p>{adults} adult</p>
          </div>
          {flat_tv ? (
            <div>
              <PiTelevisionFill size={20} className="mx-auto" />
              <p> flat tv</p>
            </div>
          ) : null}
          {internet ? (
            <div>
              <MdSignalWifiStatusbarConnectedNoInternet3
                size={20}
                className="mx-auto"
              />
              <p> internet</p>
            </div>
          ) : null}
        </div>
        <div className="flex flex-wrap items-center gap-4 md:gap-8 lg:gap-6 pt-8 lg:pt-4 text-xs md:text-sm font-md">
          <div className="">
            <FaChildren size={20} className="text-center mx-auto" />
            <p>{children} children</p>
          </div>
          {intercom ? (
            <div>
              <PiPhoneDisconnectBold size={20} className=" mx-auto" />
              <p> Intercom</p>
            </div>
          ) : null}
          {laundry ? (
            <div>
              <MdLocalLaundryService size={20} className=" mx-auto" />
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

        {published === 1 ? (
          <>
            <p className="pt-3 text-[#969393]">Booking link for this room</p>
            <div
              onClick={publishLink}
              className="border w-full p-1 px-3 mt-1 flex justify-between items-center text-base rounded-lg bg-green-300 cursor-pointer "
            >
              <p>{base_url}</p> <FaCopy size={20} onClick={publishLink} />
            </div>
          </>
        ) : null}

        <div className="font-semibold texet-sm pt-6 flex items-center justify-between ">
          <p className="text-2xl text-[#10375C]">N {price}</p>
          {published !== 1 ? (
            <button
              onClick={() => {
                editRoom({ ...data, toast, published: 1 })
                publishLink
              }}
              className="bg-[#F58634] text-white text-center font-md rounded-lg py-2 px-10 cursor-pointer"
            >
              {editing ? <Spinner /> : 'publish'}
            </button>
          ) : (
            <p className="text-base text-green-600">PUBLISHED</p>
          )}
        </div>
      </div>
    </div>
  )
}
