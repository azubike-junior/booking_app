import Image from 'next/image'
import { CiSearch } from 'react-icons/ci'
import { IoCheckmarkCircle } from 'react-icons/io5'
import { RiLink } from 'react-icons/ri'
import { AmenitiesCard } from '../PropertyDetailCard'
import RoomCard from '../PropertyDetailCard/RoomCard'
import EmptyState from './emptyState'

export default function Rooms() {
  const rooms = ''
  return (
    <div>
      {rooms === '' ? (
        <EmptyState
          message="You currently do not have a room registered under this property."
          btnText="Create a Room"
          route='rooms'
        />
      ) : (
        <div className="lato">
          <div className="flex justify-between space-x-10">
            <div className="grid grid-cols-2 w-7/12 gap-6 h-40">
              <Image
                src={'/prop1.jpg'}
                width={300}
                height={460}
                alt="property"
                className=" rounded-2xl w-full"
              />
              <Image
                src={'/prop1.jpg'}
                width={300}
                height={460}
                alt="property"
                className=" rounded-2xl w-full   h-full"
              />
              <Image
                src={'/prop1.jpg'}
                width={300}
                height={460}
                alt="property"
                className=" rounded-2xl w-full   h-full"
              />
              <Image
                src={'/prop1.jpg'}
                width={300}
                height={460}
                alt="property"
                className=" rounded-2xl w-full   h-full"
              />
            </div>

            <div className="w-5/12">
              <div className=" w-full flex space-x-3 items-center lato">
                <div className="border-[0.3px] border-[#48556CCC] flex rounded-lg w-full  items-center  px-4 shadow-sm">
                  <input
                    type="text "
                    className="rounded-lg w-full flex-1  py-2 px-4 outline-none "
                    placeholder="Search here..."
                  />
                  <CiSearch size={24} />
                </div>
              </div>

              <div className="bg-[#FFFAF7] space-y-4 rounded-lg shadow-sm p-4 px-6 mt-4">
                <RoomCard />
                <RoomCard />
                <RoomCard />
                <RoomCard />
              </div>
            </div>
          </div>
          <div className="w-7/12 pt-6 pr-6 ">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <h3 className="text-3xl font-semibold"> NGN30,000</h3>
                <span className="text-[#798489]">/Per month</span>
              </div>

              <p className="flex space-x-2 items-center">
                <IoCheckmarkCircle color="#F58634" />
                <span className="text-[#F58634]">Published</span>
              </p>
            </div>

            <div className="pt-6 space-y-4">
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur. Posuere semper et
                parturient porttitor. Quis urna nibh a a fames cursus. Risus
                viverra proin ridiculus enim eu.{' '}
              </p>

              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur. Posuere semper et
                parturient porttitor. Quis urna nibh a a fames cursus. Risus
                viverra proin ridiculus enim eu.{' '}
              </p>
            </div>

            <div>
              <h4>Amenities</h4>

              <div className="grid grid-cols-3 pt-4 gap-6">
                <AmenitiesCard name="Bedside Fridge" img="" />
                <AmenitiesCard name="10 Adults" img="" />
                <AmenitiesCard name="Flat TV" img="" />
                <AmenitiesCard name="Bedside Fridge" img="" />
                <AmenitiesCard name="10 Adults" img="" />
                <AmenitiesCard name="Flat TV" img="" />{' '}
                <AmenitiesCard name="Bedside Fridge" img="" />
                <AmenitiesCard name="10 Adults" img="" />
                <AmenitiesCard name="Flat TV" img="" />
                <AmenitiesCard name="Bedside Fridge" img="" />
                <AmenitiesCard name="10 Adults" img="" />
              </div>
            </div>

            <div className="pt-4">
              <p className="w-3/6 text-[#1A2B47] text-sm">
                Add the link below link to your website or advert. Users will be
                able to book this room using this link. All bookings submitted
                for this room can be found in the booking page
              </p>

              <div className="flex pt-4 justify-between items-center">
                <button className="border-[#F58634] border text-[#F58634] p-2 rounded-lg flex items-center space-x-2">
                  <p>Copy link</p> <RiLink color="#F58634" />
                </button>

                <p>
                  This room has been published, you can{' '}
                  <span className="text-[#F58634]">unpublish</span>{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
