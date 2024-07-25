import { PropertyProp } from '@/utils/types'
import { Spinner } from '@chakra-ui/react'
import { CiLink, CiMail } from 'react-icons/ci'
import { FaCheckCircle } from 'react-icons/fa'
import { FiCamera, FiPhone } from 'react-icons/fi'
import { IoBookmarkOutline, IoLocationOutline } from 'react-icons/io5'
import { MdOutlineBedroomChild } from 'react-icons/md'
import { RiBaseStationLine } from 'react-icons/ri'
import DetailCard from '../PropertyDetailCard'
import EmptyState from './emptyState'

type prop = {
  property: PropertyProp
  isLoading: boolean
}

export default function Properties({ property, isLoading }: prop) {
  console.log('>>>>property', property)

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center pt-10">
          <Spinner />
        </div>
      ) : (
        <div>
          {!property && (
            <EmptyState
              message=" You currently do not have a property registered under this account"
              subText=" Hotels, Guest Houses, Shortlets, Apartments."
              btnText="Register Your Property"
              route="property"
              property={property}
            />
          )}

          <div className="flex space-x-8 w-full ">
            <div className="w-8/12">
              <img
                src={property?.image}
                alt=""
                className="w-full h-full  rounded-l-3xl "
              />
            </div>

            <div className="w-4/12 flex flex-col justify-between space-y-6">
              <div className="h-1/2">
                <img
                  src={property?.logo}
                  alt=""
                  className="rounded-r-3xl w-full h-full object-cover"
                />
              </div>

              <div className="w-full bg-white shadow-lg shadow-slate-200 rounded-r-3xl  p-4 border-[0.2px] h-full  ">
                <div className="border-dashed border-[0.3px] border-r-lg p-10 pt-16 h-full ">
                  <div className="space-x-3 border border-[#48556C] rounded-lg  items-center justify-center py-3 px-4 w-4/6 flex mx-auto">
                    <FiCamera size={24} />
                    <span className="text-[#48556C]">Upload Photo</span>
                  </div>

                  <p className="text-[#969DAA] text-center pt-3">
                    jpg/jpeg or png, maximum 10mb each
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4 pt-8">
            <div className="flex space-x-2 items-center">
              <div
                style={{ background: property?.primary_color }}
                className={` w-7 h-7 rounded-full`}
              ></div>
              <p>Primary Color</p>
            </div>

            <div className="flex space-x-2 items-center">
              <div
                style={{ background: property?.secondary_color }}
                className=" w-7 h-7 rounded-full"
              ></div>
              <p>Secondary Color</p>
            </div>

            <div className="flex space-x-2 items-center">
              <div
                style={{ background: property?.text_color }}
                className=" w-7 h-7 rounded-full"
              ></div>
              <p>Text Color</p>
            </div>
          </div>

          <div className="pt-6 space-y-6">
            <div className="flex justify-between space-x-4">
              <DetailCard
                icon={<IoLocationOutline size={20} />}
                img="/location.svg"
                name={property?.address}
              />
              <DetailCard
                icon={<FiPhone size={20} />}
                img="/location.svg"
                name={property?.phone_number}
              />
              <DetailCard
                icon={<CiMail size={20} />}
                img="/location.svg"
                name={property?.email_address}
              />
            </div>
            <div className="flex justify-between space-x-4">
              <DetailCard
                icon={<RiBaseStationLine size={20} />}
                img="/location.svg"
                name={property?.web_address}
              />
              <DetailCard
                icon={<CiLink size={20} />}
                img="/location.svg"
                name={property?.payment_link}
              />
              <DetailCard
                icon={<IoBookmarkOutline size={20}  />}
                img="/location.svg"
                name="Total Bookings"
                value="12"
              />
            </div>

            <div className="flex justify-between space-x-4">
              <DetailCard
                icon={<MdOutlineBedroomChild size={20} />}
                img="/location.svg"
                name="Total Rooms"
                value="2"
              />
              <DetailCard
                icon={<FaCheckCircle size={20} color="#F58634" />}
                img="/location.svg"
                name="Published Rooms"
                value="12"
              />
              <div className="w-full px-2"></div>
            </div>
          </div>

          <div className="pt-10 space-y-4">
            <p>{property?.description}</p>

            {/* <p>
              Houses have a roof to keep off the rain, sun and walls to keep out
              the wind and cold. They have window openings to let in light, and
              a floor. Houses of different places may look different to each
              other, because of different materials, climate and styles
            </p>

            <p>
              Houses have a roof to keep off the rain, sun and walls to keep out
              the wind and cold.
            </p> */}
          </div>
        </div>
      )}
    </div>
  )
}
