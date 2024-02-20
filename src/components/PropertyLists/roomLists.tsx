'use client'

import { lato } from '@/utils'
import { RoomProps } from '@/utils/types'
import Image from 'next/image'

export const Rooms = ({
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
}: RoomProps) => {
  return (
    <div className="flex space-x-6">
      <Image
        src={'/prop.svg'}
        width={100}
        height={100}
        alt="prop"
        className="w-5/12 h-full "
      />

      <div className={`${lato.className} bg-white p-10 w-7/12 font-light`}>
        <p className="text-4xl text-[#10375C]">{name}</p>

        <div className="flex pt-14 text-sm space-x-10 font-light">
          <div className="">
            <Image
              width={25}
              height={100}
              src={'/icon_1.svg'}
              alt="prop"
              className="mx-auto"
            />
            <p>{children} children</p>
          </div>
          <div>
            <Image
              width={25}
              height={100}
              src={'/icon_1.svg'}
              alt="prop"
              className="mx-auto"
            />
            <p>{adults} adult</p>
          </div>
          <div>
            <Image
              width={25}
              height={100}
              src={'/icon_1.svg'}
              alt="prop"
              className="mx-auto"
            />
            <p>{size} size</p>
          </div>
          <div>
            <Image
              width={25}
              height={100}
              src={'/icon_1.svg'}
              alt="prop"
              className="mx-auto"
            />
            <p>{flat_tv} flat tv</p>
          </div>{' '}
          <div>
            <Image
              width={25}
              height={100}
              src={'/icon_1.svg'}
              alt="prop"
              className="mx-auto"
            />
            <p>{internet} internet</p>
          </div>
        </div>

        <p className="font-light text-sm pt-10">550ft/51m</p>

        <p className="font-light text-sm pt-6">
          {category} - {mode}
        </p>

        <p className="font-light text-sm pt-8 underline">view room details</p>

        <div className="font-semibold texet-sm pt-10 flex items-center justify-between">
          <p className="text-2xl text-[#10375C]">N {price}</p>
          <div className="bg-[#10375C] text-white text-center font-md rounded-lg py-2 px-10">
            <p>Book to publish</p>
          </div>
        </div>
      </div>
    </div>
  )
}
