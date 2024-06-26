'use client'

import {
  usePublishRoomMutation,
  useUnpublishRoomMutation,
} from '@/features/property'
import { RoomProps } from '@/utils/types'
import { Spinner, useToast } from '@chakra-ui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FaCopy } from 'react-icons/fa'
import { FaBed, FaChildren } from 'react-icons/fa6'
import { GiMirrorMirror, GiTrousers } from 'react-icons/gi'
import { IoManSharp } from 'react-icons/io5'
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
import { Carousel } from 'react-responsive-carousel'
import Subscription from '../Modal'

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
    description,
    intercom,
    internet,
    property_id,
    category,
    price,
    mode,
    children,
    room_service_24h,
    air_conditioner,
    balcony,
    bathroom_telephone,
    bed_breakfast,
    smoke_detector,
    guest_amenities,
    magnifying_mirror,
    hair_dryer,
    bedside_fridge,
    published,
    reserved,
    mode_str,
    image_one,
    image_two,
  } = data
  const toast = useToast()

  const [openSubscription, setOpenSubscription] = useState(false)

  const [publishRoom, { isLoading: publishing }] = usePublishRoomMutation()

  async function publishARoom() {
    try {
      publishRoom({ toast, id })
        .unwrap()
        .then((payload) => {})
        .catch((error) => {
          if (error) {
            setOpenSubscription(true)
          }
          toast({
            title: error?.data?.error,
            description: '',
            status: 'error',
            duration: 9000,
            isClosable: true,
            position: 'top-right',
          })
        })
    } catch (e) {}
  }

  const [
    unpublishRoom,
    { isLoading: unpublishing },
  ] = useUnpublishRoomMutation()

  const pathname = usePathname()

  const base_url = `
    https://candid-sherbet-40f282.netlify.app/properties/reservations/${property_id}+${id}
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
    <div className="w-full">
      <div className=" w-full  lg:h-[500px] overflow-hidden  border flex justify-center items-center rounded-xl shadow-xl shadow-slate-60 lg:shadow-none ">
        <Carousel
          swipeable={true}
          autoPlay={true}
          interval={4000}
          infiniteLoop={true}
        >
          <img
            src={!image_one ? '/placeholder.png' : image_one}
            alt=""
            className="w-full h-full"
          />

          <img
            src={!image_two ? '/placeholder.png' : image_two}
            alt=""
            className="w-full h-full"
          />
        </Carousel>
      </div>

      <div
        className={`lato ${
          published === 0 ? 'bg-white' : 'bg-green-50'
        } px-6 py-6  w-full  font-light`}
      >
        <div className="flex justify-between items-center">
          <p className="text-lg md:text-2xl lg:text-3xl text-[#10375C]">
            {name}
          </p>

          {published ? (
            <Link
              href={`/properties/rooms/bookings/${id}`}
              type="button"
              className="border-[#10375C] bg-[#10375C]  text-white border py-1 text-xs mt-2 lg:mt-0 lg:text-sm text-center px-2 rounded-lg"
            >
              View bookings
            </Link>
          ) : null}
        </div>
        <p className="font-medium text-xs md:text-base pt-2">{description}</p>
        <div className="flex flex-wrap  items-center gap-4 md:gap-8 lg:gap-6 pt-8 lg:py-4 text-xs md:text-sm font-md">
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
          {air_conditioner ? (
            <div>
              <TbAirConditioningDisabled size={28} className="mx-auto" />
              <p> air condition</p>
            </div>
          ) : null}
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
          {balcony ? (
            <div>
              <MdOutlineBalcony size={20} className="mx-auto" />
              <p> balcony</p>
            </div>
          ) : null}
        </div>

        {/* <div className="flex flex-wrap items-center gap-4 md:gap-8 lg:gap-6 pt-8 lg:pt-4 text-xs md:text-sm font-md"></div> */}
        <div className="flex flex-wrap items-center gap-4 md:gap-8 lg:gap-6 pt-8 lg:pt-4 text-xs md:text-sm font-md">
          {bed_breakfast ? (
            <div>
              <MdFreeBreakfast size={20} className="mx-auto" />
              <p> bed breakfast</p>
            </div>
          ) : null}

          {bathroom_telephone ? (
            <div>
              <MdOutlineBathroom size={20} className="mx-auto" />
              <p> bathroom telephone</p>
            </div>
          ) : null}

          {guest_amenities ? (
            <div>
              <PiUserCirclePlusFill size={20} className=" mx-auto" />
              <p> Guest amenities</p>
            </div>
          ) : null}

          {magnifying_mirror ? (
            <div>
              <GiMirrorMirror size={20} className=" mx-auto" />
              <p> Magnifying mirror</p>
            </div>
          ) : null}

          {smoke_detector ? (
            <div>
              <MdSmokeFree size={20} className=" mx-auto" />
              <p> Smoke detector</p>
            </div>
          ) : null}

          {hair_dryer ? (
            <div>
              <GiTrousers size={20} className=" mx-auto" />
              <p> Hair Dryer</p>
            </div>
          ) : null}
        </div>
        <div className="pt-6 flex space-x-10 text-xs md:text-sm font-medium">
          <div>
            <p>Size</p>
            <p className=" ">{size} /m</p>
          </div>

          <div>
            <p>Mode</p>
            <p>{mode_str === 'available' ? 'Available' : 'Not available'}</p>
          </div>
        </div>

        {published === 1 ? (
          <>
            <p className="pt-6 text-[#656363]">Booking link for this room</p>
            <div
              onClick={publishLink}
              className="border w-full p-2 px-3 mt-1 lg:flex justify-between items-center text-base font-light md:font-semibold rounded-lg bg-green-200 cursor-pointer "
            >
              <p className="w-full">{base_url}</p>{' '}
              <FaCopy size={20} onClick={publishLink} />
            </div>
            <p className="text-sm pt-2 font-medium">
              Add this link to your website or advert. Users will be able to
              book this room using this link. All books submitted for this room
              can be found in the booking page
            </p>
          </>
        ) : null}

        <div className="font-semibold texet-sm pt-6 flex items-center justify-between ">
          <p className="text-xl md:text-2xl text-[#10375C]">
            &#8358; {price.toLocaleString()}
          </p>
          {published !== 1 ? (
            <button
              onClick={() => {
                // editRoom({ ...data, toast, published: 1 })
                publishLink
                publishARoom()
              }}
              className="bg-[#F58634] text-white text-center font-md rounded-lg py-1 md:py-2 px-3 md:px-6 lg:px-10 cursor-pointer"
            >
              {publishing ? <Spinner /> : 'publish'}
            </button>
          ) : (
            <div className="flex items-center space-x-3">
              <p className="text-base text-green-600 font-medium flex space-x-2">
                <span className="hidden md:flex">
                  This room has been published, you can
                </span>{' '}
                <span
                  onClick={() => unpublishRoom({ toast, id })}
                  className="font-semibold underline cursor-pointer text-red-800"
                >
                  {unpublishing ? (
                    <Spinner className="text-base" />
                  ) : (
                    'unpublish'
                  )}
                </span>
              </p>
            </div>
          )}
        </div>
      </div>

      <Subscription
        openSubscription={openSubscription}
        setOpenSubscription={setOpenSubscription}
      />
    </div>
  )
}
