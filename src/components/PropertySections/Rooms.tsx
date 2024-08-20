import {
  useGetRoomByIdQuery,
  useGetRoomByPropertyIdQuery,
  usePublishRoomMutation,
  useUnpublishRoomMutation,
} from '@/features/property'
import { PropertyProp, RoomProps } from '@/utils/types'
import { Spinner } from '@chakra-ui/react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { CiEdit, CiSearch } from 'react-icons/ci'
import { IoCheckmarkCircle } from 'react-icons/io5'
import { RiLink } from 'react-icons/ri'
import { AmenitiesCard } from '../PropertyDetailCard'
import RoomCard from '../PropertyDetailCard/RoomCard'
import EmptyState from './emptyState'

type prop = {
  property: PropertyProp
  room?: RoomProps
}

export default function Rooms({ property, room }: prop) {
  const { data: rooms, isLoading } = useGetRoomByPropertyIdQuery(
    property?.id || '',
  )

  const [roomID, setRoomID] = useState<string>(rooms ? rooms[0].id : '')

  const { data: r, isLoading: loadingRoom } = useGetRoomByIdQuery(roomID)
  const [publishRoom, { isLoading: publishing }] = usePublishRoomMutation()
  const [
    unpublishRoom,
    { isLoading: unpublishing },
  ] = useUnpublishRoomMutation()

  let details: RoomProps = {
    id: '',
    property_id: '',
    description: '',
    name: '',
    size: '',
    price: 0,
    adults: 0,
    children: 0,
    wakeup_call: 0,
    flat_tv: 0,
    laundry: 0,
    internet: 0,
    room_service_24h: 0,
    intercom: 0,
    bedside_fridge: 0,
    category: 0,
    air_conditioner: 0,
    balcony: 0,
    bed_breakfast: 0,
    bathroom_telephone: 0,
    smoke_detector: 0,
    hair_dryer: 0,
    guest_amenities: 0,
    magnifying_mirror: 0,
  }

  if (rooms) {
    details = !r ? rooms[0] : r
  }

  const base_url = `
    http://localhost:3000/reservation/${property.id}?${details?.id}
    `

  const publishLink = async () => {
    if (navigator?.clipboard) {
      const cb = navigator.clipboard

      cb.writeText(`${base_url}`)
        .then(() => {
          toast.success('link has been copied and published successfully')
        })
        .catch(() => {
          toast.error('could not copy link')
        })
    }
  }

  async function publishARoom() {
    try {
      publishRoom({ id: details?.id })
    } catch (e) {}
  }

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center pt-10">
          <Spinner />
        </div>
      ) : (
        <>
          {rooms?.length === 0 ? (
            <EmptyState
              message="You currently do not have a room registered under this property."
              btnText="Create a Room"
              route="rooms"
              property={property}
            />
          ) : (
            <div className="lato">
              <div className="flex justify-between space-x-10">
                <div className="grid grid-cols-2 w-7/12 gap-6">
                  {/* <Image
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
                  /> */}

                  <img
                    src={details?.image_one}
                    alt=""
                    className=" rounded-2xl w-full"
                  />
                  <img
                    src={details?.image_two}
                    alt=""
                    className=" rounded-2xl w-full"
                  />
                  <img
                    src={details?.image_one}
                    alt=""
                    className=" rounded-2xl w-full"
                  />
                  <img
                    src={details?.image_two}
                    alt=""
                    className=" rounded-2xl w-full"
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
                    {rooms?.map((room, index) => {
                      return (
                        <RoomCard
                          room={room}
                          key={index}
                          setRoomID={setRoomID}
                          roomID={roomID}
                        />
                      )
                    })}
                  </div>
                </div>
              </div>
              <div className="w-7/12 pt-6 pr-6 ">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-3xl font-semibold">
                      NGN {details?.price.toLocaleString()}
                    </h3>
                    <span className="text-[#798489]">/Per month</span>
                  </div>

                  {details?.published === 1 ? (
                    <p className="flex space-x-2 items-center">
                      <IoCheckmarkCircle color="#F58634" size={24} />
                      <span className="text-[#F58634]">Published</span>
                    </p>
                  ) : (
                    <p
                      className="px-7 py-2 text-sm bg-[#34C759] text-white rounded-[20px] cursor-pointer "
                      onClick={() => {
                        publishLink
                        publishARoom()
                      }}
                    >
                      {publishing ? <Spinner /> : 'publish'}
                    </p>
                  )}
                </div>

                <div className="pt-6 space-y-4">
                  <p className="text-sm">{details?.description}</p>
                </div>

                {details?.published === 0 && (
                  <div className="bg-[#E8EAED] px-4 py-2.5 space-x-2 rounded-lg inline-flex items-center mt-4">
                    <CiEdit size={20} />{' '}
                    <p className="text-sm">Edit Room Details</p>
                  </div>
                )}

                <div className="pt-4">
                  <h4 className="font-semibold">Amenities</h4>

                  <div className="grid grid-cols-3 pt-4 gap-6">
                    {details?.bedside_fridge ? (
                      <AmenitiesCard name="Bedside Fridge" img="" />
                    ) : (
                      ''
                    )}
                    {details?.adults ? (
                      <AmenitiesCard
                        name={`${details?.adults} Adults`}
                        img=""
                      />
                    ) : (
                      ''
                    )}
                    {details?.flat_tv ? (
                      <AmenitiesCard name="Flat TV" img="" />
                    ) : null}
                    {details?.balcony ? (
                      <AmenitiesCard name="Balcony" img="" />
                    ) : (
                      ''
                    )}
                    {details?.bathroom_telephone ? (
                      <AmenitiesCard name="Bathroom Telephone" img="" />
                    ) : (
                      ''
                    )}
                    {details?.air_conditioner ? (
                      <AmenitiesCard name="Air Conditioner" img="" />
                    ) : (
                      ''
                    )}
                    {details?.children ? (
                      <AmenitiesCard name="Children" img="" />
                    ) : (
                      ''
                    )}
                    {details?.hair_dryer ? (
                      <AmenitiesCard name="Hair Dryer" img="" />
                    ) : (
                      ''
                    )}
                    {details?.bed_breakfast ? (
                      <AmenitiesCard name="Bed breakfast" img="" />
                    ) : (
                      ''
                    )}
                    {details?.laundry ? (
                      <AmenitiesCard name="Laundry" img="" />
                    ) : (
                      ''
                    )}
                    {details?.magnifying_mirror ? (
                      <AmenitiesCard name="Magnifying mirror" img="" />
                    ) : (
                      ''
                    )}
                    {details?.internet ? (
                      <AmenitiesCard name="Internet" img="" />
                    ) : (
                      ''
                    )}
                    {details?.room_service_24h ? (
                      <AmenitiesCard name="24hr Room Sevice" img="" />
                    ) : null}{' '}
                    {details?.wakeup_call ? (
                      <AmenitiesCard name="Wake up Calls" img="" />
                    ) : null}
                    {details?.intercom ? (
                      <AmenitiesCard name="Intercom" img="" />
                    ) : null}
                  </div>
                </div>

                {details?.published ? (
                  <div className="pt-4">
                    <p className="w-3/6 text-[#1A2B47] text-sm">
                      Add the link below link to your website or advert. Users
                      will be able to book this room using this link. All
                      bookings submitted for this room can be found in the
                      booking page
                    </p>

                    <div className="flex pt-4 justify-between items-center text-sm font-semibold">
                      <button
                        className="border-[#F58634] border text-[#F58634] p-2 rounded-lg flex items-center space-x-2 "
                        onClick={publishLink}
                      >
                        <p>Copy link</p> <RiLink color="#F58634" />
                      </button>

                      <p>
                        This room has been published, you can{' '}
                        <span
                          onClick={() => unpublishRoom({ id: details?.id })}
                          className="text-[#F58634] underline"
                        >
                          unpublish
                        </span>{' '}
                      </p>
                    </div>
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
