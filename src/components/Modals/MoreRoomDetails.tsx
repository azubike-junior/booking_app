import { PropertyProp, RoomProps } from '@/utils/types'
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react'
import { useState } from 'react'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { Carousel } from 'react-responsive-carousel'
import { AmenitiesCard } from '../PropertyDetailCard'

interface Room {
  room: RoomProps | any
  property?: PropertyProp
  openDetails: boolean
  setOpenDetails: any
}

const MoreRoomDetails = ({ room, property, openDetails, setOpenDetails }: Room) => {
  return (
    <Modal
      isOpen={openDetails}
      onClose={() => setOpenDetails(false)}
      size={'4xl'}
    >
      <ModalCloseButton />
      <ModalOverlay />
      <ModalContent>
        <div className="bg-[#F7FAF6] lato">
          <div className="px-14 py-10 flex space-x-10 items-center">
            <MdOutlineArrowBackIos color="black" size={24} />

            <div className=" flex space-x-6">
              <img
                src={property?.image_three}
                className="w-16 h-16 z-10 shadow rounded-lg"
              />
              <div className="z-30">
                <h3 className="font-Semibold text-2xl shadow-sm">
                  {room?.name}
                </h3>
                <p>{property?.address}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 ">
          <div className="flex justify-between space-x-10">
            <Carousel
              swipeable={true}
              showThumbs={false}
              centerMode
              centerSlidePercentage={110}
              // dynamicHeight={true}
              className="mx-auto w-1/2 rounded-lg"
            >
              <div>
                <img
                  src={!room?.image_one ? '/placeholder.png' : room?.image_one}
                  alt=""
                  className="w-full rounded-lg"
                />
              </div>
              <div>
                <img
                  src={!room?.image_two ? '/placeholder.png' : room?.image_two}
                  alt=""
                  className="w-full  rounded-lg"
                />
              </div>
            </Carousel>

            <div className="w-1/2 lato">
              <h4 className="text-xl font-semibold">Room Description</h4>
              <p className="text-[#273238] pt-6">{room?.description}</p>
            </div>
          </div>
          <div className="pt-6">
            <h4 className="text-xl font-semibold">Amenities</h4>

            <div className="grid grid-cols-4 pt-4 gap-6">
              {room?.bedside_fridge ? (
                <AmenitiesCard name="Bedside Fridge"  />
              ) : (
                ''
              )}
              {room?.adults ? (
                <AmenitiesCard name={`${room?.adults} Adults`}  />
              ) : (
                ''
              )}
              {room?.flat_tv ? <AmenitiesCard name="Flat TV"  /> : null}
              {room?.balcony ? <AmenitiesCard name="Balcony"  /> : ''}
              {room?.bathroom_telephone ? (
                <AmenitiesCard name="Bathroom Telephone"  />
              ) : (
                ''
              )}
              {room?.air_conditioner ? (
                <AmenitiesCard name="Air Conditioner"  />
              ) : (
                ''
              )}
              {room?.children ? <AmenitiesCard name="Children"  /> : ''}
              {room?.hair_dryer ? (
                <AmenitiesCard name="Hair Dryer"  />
              ) : (
                ''
              )}
              {room?.bed_breakfast ? (
                <AmenitiesCard name="Bed breakfast"  />
              ) : (
                ''
              )}
              {room?.laundry ? <AmenitiesCard name="Laundry"  /> : ''}
              {room?.magnifying_mirror ? (
                <AmenitiesCard name="Magnifying mirror"  />
              ) : (
                ''
              )}
              {room?.internet ? <AmenitiesCard name="Internet"  /> : ''}
              {room?.room_service_24h ? (
                <AmenitiesCard name="24hr Room Sevice"  />
              ) : null}{' '}
              {room?.wakeup_call ? (
                <AmenitiesCard name="Wake up Calls"  />
              ) : null}
              {room?.intercom ? <AmenitiesCard name="Intercom"  /> : null}
            </div>
          </div>
        </div>
      </ModalContent>
    </Modal>
  )
}

export default MoreRoomDetails
