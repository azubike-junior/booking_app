'use client'

import { lato } from '@/utils'
import { PropertyProp } from '@/utils/types'
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
  return (
    <div className="lg:flex lg:space-x-6">
      <div className="w-full lg:w-5/12">
        <div className="h-[300px] lg:h-[420px] w-full lg:w-[500px] overflow-hidden  border flex justify-center items-center rounded-t-xl shadow-xl shadow-slate-60 lg:shadow-none ">
          <img src={url} alt="" className="" />
        </div>
      </div>

      <div
        className={`${lato.className} bg-white px-4 py-4 lg:p-6 w-full lg:w-7/12 font-light`}
      >
        <div className="flex justify-between items-center">
          <p className="text-3xl text-[#10375C] capitalize">{name}</p>
          <img src={logo} alt="" className="w-10 h-10" />
        </div>
        <div className="flex pt-6 lg:pt-8 text-xs lg:text-sm space-x-10 font-light">
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

        <div className='space-y-4 lg:space-y-4 pt-10 text-xs lg:text-sm'>
          <div className="flex items-center space-x-2">
            <HiOutlineMapPin />
            <p className="font-light ">{address}</p>
          </div>
          <div className="flex items-center space-x-2">
            <CiMail />
            <p className="font-light ">{email_address}</p>
          </div>
          <div className="flex items-center space-x-2">
            <FiPhone />
            <p className="font-light ">{phone_number}</p>
          </div>
          <div className="flex items-center space-x-2">
            <SiWebauthn />
            <p className="font-light ">{web_address}</p>
          </div>
        </div>

        <div className="flex w-full items-center justify-between space-x-2 pt-4">
          <div className="flex items-center space-x-2 ">
            <MdOutlineBedroomParent />
            <p className="font-light text-sm ">{number_of_rooms}</p>
          </div>

          <div className="space-x-4">
            <Link
              href={`/properties/${id}`}
              className="bg-[#10375C] text-white text-center text-xs lg:text-sm font-md rounded-lg py-1.5 px-2"
            >
              Manage property
            </Link>

            <Link
              href={`/properties/edit/${id}`}
              className="bg-[#10375C] text-white text-center text-xs lg:text-sm font-md rounded-lg py-1.5 px-4"
            >
              Edit
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
