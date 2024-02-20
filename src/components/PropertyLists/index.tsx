'use client'

import { lato } from '@/utils'
import { PropertyProp } from '@/utils/types'
import Image from 'next/image'
import Link from 'next/link'
import { CiMail } from 'react-icons/ci'
import { FiPhone } from 'react-icons/fi'
import { HiOutlineMapPin } from 'react-icons/hi2'
import { MdOutlineBedroomParent } from 'react-icons/md'
import { SiWebauthn } from 'react-icons/si'

export const Lists = ({
  id,
  web_address,
  address,
  primary_color,
  text_color,
  secondary_color,
  phone_number,
  email_address,
  image: url,
  logo,
  country,
  number_of_rooms,
  name,
}: PropertyProp) => {
  console.log('>>>>>>url', url)

  return (
    <div className="flex space-x-6">
      <div className="w-5/12">
        <img src={url} alt="" className="h-full w-full" />
      </div>

      <div className={`${lato.className} bg-white p-10 w-7/12 font-light`}>
        <div className="flex justify-between items-center">
          <p className="text-2xl text-[#10375C]">Bookteller</p>
          <Image
            src="/bookteller.svg"
            width={80}
            height={80}
            alt="bookteller"
          />
        </div>
        <div className="flex  pt-14 text-sm space-x-10 font-light">
          <div className="">
            <p>Primary Color</p>
            <div className="w-8 h-8 rounded-lg border mx-auto mt-2 border-[#747F8A] bg-[#F58634]"></div>
          </div>
          <div className="">
            <p className="">Secondary Color</p>
            <div className="w-8 h-8 rounded-lg border mx-auto mt-2 border-[#747F8A] bg-[#10375C]"></div>
          </div>
          <div className="">
            <p>Text Color</p>
            <div className="w-8 h-8 rounded-lg border mx-auto mt-2 border-[#747F8A] bg-[#747F8A]"></div>
          </div>
        </div>
        <div className="flex items-center space-x-2 pt-10">
          <HiOutlineMapPin />
          <p className="font-light text-sm ">{address}</p>
        </div>
        <div className="flex items-center space-x-2 pt-10">
          <CiMail />
          <p className="font-light text-sm ">{email_address}</p>
        </div>
        <div className="flex items-center space-x-2 pt-10">
          <FiPhone />
          <p className="font-light text-sm ">{phone_number}</p>
        </div>
        <div className="flex items-center space-x-2 pt-10">
          <SiWebauthn />
          <p className="font-light text-sm ">{web_address}</p>
        </div>
        <div className="flex items-center justify-between space-x-2 pt-10">
          <div className="flex items-center space-x-2 ">
            <MdOutlineBedroomParent />
            <p className="font-light text-sm ">{number_of_rooms}</p>
          </div>

          <Link
            href={`/properties/${id}`}
            className="bg-[#10375C] text-white text-center font-md rounded-lg py-2 px-10"
          >
            <p>View Details</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
