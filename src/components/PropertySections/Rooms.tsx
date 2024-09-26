import {
  useEditRoomMutation,
  useGetRoomByIdQuery,
  useGetRoomByPropertyIdQuery,
  usePublishRoomMutation,
  useUnpublishRoomMutation,
} from '@/features/property'
import {
  handleImageChange,
  handleImageThreeChange,
  handleImageTwoChange,
  uploadImage,
  uploadImageThree,
  uploadImageTwo,
} from '@/utils'
import { PropertyProp, RoomProps } from '@/utils/types'
import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Spinner,
  useDisclosure,
} from '@chakra-ui/react'
import Link from 'next/link'
import { MutableRefObject, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { CiEdit, CiSearch } from 'react-icons/ci'
import { IoIosArrowDown, IoMdCloseCircle } from 'react-icons/io'
import { IoCheckmarkCircle } from 'react-icons/io5'
import { MdOutlineMapsHomeWork } from 'react-icons/md'
import { RiLink } from 'react-icons/ri'
import { AmenitiesCard, _AmenitiesCard } from '../PropertyDetailCard'
import RoomCard from '../PropertyDetailCard/RoomCard'
import {
  UploadImage,
  UploadImageThree,
  UploadImageTwo,
} from '../shared/UploadPhoto'
import EmptyState from './emptyState'

type prop = {
  property: PropertyProp
  room?: RoomProps
}

export default function Rooms({ property, room }: prop) {
  const { data: rooms, isLoading } = useGetRoomByPropertyIdQuery(
    property?.id || '',
  )
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [image, setImage] = useState<any | string>('')
  const [imageTwo, setImageTwo] = useState<any | string>('')
  const [imageThree, setImageThree] = useState<any | string>('')

  const [roomID, setRoomID] = useState<string>(rooms ? rooms[0]?.id : '')

  const imageRef = useRef() as MutableRefObject<HTMLInputElement>
  const imageTwoRef = useRef() as MutableRefObject<HTMLInputElement>
  const imageThreeRef = useRef() as MutableRefObject<HTMLInputElement>

  const [imageLoading, setImageLoading] = useState(false)
  const [imageTwoLoading, setImageTwoLoading] = useState(false)
  const [imageThreeLoading, setImageThreeLoading] = useState(false)

  const { data: r, isLoading: loadingRoom } = useGetRoomByIdQuery(roomID)
  const [publishRoom, { isLoading: publishing }] = usePublishRoomMutation()
  const [
    unpublishRoom,
    { isLoading: unpublishing },
  ] = useUnpublishRoomMutation()

  const [edit, setEdit] = useState(false)

  let details: RoomProps | any = {
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
    payment_link: '',
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RoomProps>({})

  if (rooms) {
    details = !r ? rooms[0] : r
  }

  // console.log('>>>>>>room', details)

  const base_url = `
    https://btlengine.com/reservation/${details?.slug}
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

  const [editRoom, { isLoading: editingRoom }] = useEditRoomMutation()

  const [allAmenities, setAllAmenities] = useState([
    {
      name: 'bed breakfast',
      value: '',
      checked: false,
    },
    {
      name: 'air conditioner',
      value: '',
      checked: false,
    },
    {
      name: 'balcony',
      value: '',
      checked: false,
    },
    {
      name: 'bathroom telephone',
      value: '',
      checked: false,
    },
    {
      name: 'bedside fridge',
      value: '',
      checked: false,
    },
    {
      name: 'flat tv',
      value: '',
      checked: false,
    },
    {
      name: 'guest amenities',
      value: '',
      checked: false,
    },
    {
      name: 'intercom',
      value: '',
      checked: false,
    },
    {
      name: 'internet',
      value: '',
      checked: false,
    },
    {
      name: 'laundry',
      value: '',
      checked: false,
    },
    {
      name: 'magnifying mirror',
      value: '',
      checked: false,
    },
    {
      name: 'room service 24h',
      value: '',
      checked: false,
    },
    {
      name: 'smoke detector',
      value: '',
      checked: false,
    },
    {
      name: 'wakeup call',
      value: '',
      checked: false,
    },
  ])

  const updateAmenities = () => {
    const updatedAmenities = allAmenities.map((amenity) => {
      const formattedName: any = amenity.name.replace(/\s+/g, '_').toLowerCase()
      const amenityValue: any = details[formattedName]

      return {
        ...amenity,
        value: amenityValue !== undefined ? amenityValue : '',
        checked: amenityValue > 0 ? true : false,
      }
    })

    setAllAmenities(updatedAmenities)
  }

  useEffect(() => {
    if (details) {
      setImage(details?.image_one)
      setImageTwo(details?.image_two)
      setImageThree(details?.image_three)
      updateAmenities()
    }
  }, [details?.image_one, details?.image_two, details?.image_three])


  const handleCheckboxChange = (index: number) => {
    const updatedAmenities = allAmenities.map((amenity, i) =>
      i === index ? { ...amenity, checked: !amenity.checked } : amenity,
    )

    setAllAmenities(updatedAmenities)
  }

  const handleEditRoom = (data: RoomProps) => {
    const generateDataFromAmenities = () => {
      const amenities: any = {}

      allAmenities.forEach((amenity) => {
        const formattedName = amenity.name.replace(/\s+/g, '_').toLowerCase()
        amenities[formattedName] = amenity.checked ? 1 : 0 // 1 for checked, 0 for unchecked
      })

      return amenities
    }

    const _amenities = generateDataFromAmenities()

    const { price, adults, children, ..._data } = data

    const new_data = {
      setEdit,
      price: Number(data?.price),
      id: details?.id,
      adults: Number(data?.adults),
      children: Number(data?.children),
      property_id: details?.property_id,
      image_one: image ? image : details?.image_one,
      image_two: imageTwo ? imageTwo : details?.image_two,
      image_three: imageThree ? imageThree : details?.image_three,
      ..._data,
      ..._amenities,
    }

    editRoom(new_data)
  }

  console.log(">>.rooms", rooms);
  

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center pt-10">
          <Spinner />
        </div>
      ) : (
        <>
          {!rooms ? (
            <EmptyState
              message="You currently do not have a room registered under this property."
              btnText="Create a Room"
              route="rooms"
              property={property}
            />
          ) : (
            <div className="lato">
              {details && (
                <div className=" flex justify-between lg:hidden pb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{details?.name}</h3>
                    <div className="flex items-center space-x-2">
                      {/* <MdOutlineMapsHomeWork className='hidden' /> */}
                      <p className="text-sm">{property?.address?.substring(0, 24).concat("....")}</p>
                    </div>
                  </div>

                  <div
                    onClick={onOpen}
                    className="flex space-x-2 items-center justify-center text-sm"
                  >
                    <p>Select rooms</p>
                    <IoIosArrowDown />
                  </div>
                </div>
              )}
              <div className="flex justify-between space-x-4 xl:space-x-10">
                <div className=" space-y-4 w-full lg:w-8/12 gap-6">
                  <div className="flex space-x-4">
                    <div className="relative bg-[#f7f5f5] h-[190px] xl:h-[290px] rounded-lg w-full">
                      {edit && (
                        <IoMdCloseCircle
                          onClick={() => setImage('')}
                          size={30}
                          className="absolute right-8 top-6 cursor-pointer"
                          color="white"
                        />
                      )}

                      {!image ? (
                        <UploadImage
                          imageRef={imageRef}
                          room
                          imageFunc={(e: any) =>
                            handleImageChange({
                              e,
                              setImage,
                              setImageLoading,
                              uploadImage,
                            })
                          }
                          imageLoading={imageLoading}
                        />
                      ) : (
                        <img
                          src={image}
                          alt=""
                          className=" h-[190px] xl:h-[290px] rounded-2xl w-full"
                        />
                      )}
                    </div>

                    <div className="w-full h-[190px] xl:h-[290px]">
                      {!imageTwo ? (
                        <UploadImageTwo
                          room
                          imageTwoFunc={(e: any) =>
                            handleImageTwoChange({
                              e,
                              setImageTwoLoading,
                              setImageTwo,
                              uploadImageTwo,
                            })
                          }
                          imageTwoRef={imageTwoRef}
                          imageTwoLoading={imageTwoLoading}
                        />
                      ) : (
                        <div className=" relative bg-[#f7f5f5] rounded-lg ">
                          {edit && (
                            <IoMdCloseCircle
                              onClick={() => setImageTwo('')}
                              size={30}
                              color="white"
                              className="absolute right-8 top-6 cursor-pointer"
                            />
                          )}
                          <img
                            src={imageTwo}
                            alt=""
                            className=" h-[190px] xl:h-[290px] rounded-2xl w-full"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="w-full">
                    {!imageThree ? (
                      <UploadImageThree
                        room
                        imageThreeFunc={(e: any) =>
                          handleImageThreeChange({
                            e,
                            setImageThree,
                            setImageThreeLoading,
                            uploadImageThree,
                          })
                        }
                        imageThreeLoading={imageThreeLoading}
                        imageThreeRef={imageThreeRef}
                      />
                    ) : (
                      <div className="h-[190px] xl:h-[290px] relative bg-[#f7f5f5] rounded-lg ">
                        {edit && (
                          <IoMdCloseCircle
                            onClick={() => setImageThree('')}
                            size={30}
                            color="white"
                            className="absolute right-8 top-6 cursor-pointer"
                          />
                        )}
                        <img
                          src={imageThree}
                          alt=""
                          className="rounded-2xl w-full h-[190px] xl:h-[290px] object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="w-4/12  hidden lg:block ">
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

                  <div className="bg-[#FFFAF7] space-y-4 rounded-lg shadow-sm p-4 px-4 mt-4 text-sm lg:text-base h-[60%] xl:h-[70%] overflow-scroll ">
                    {rooms?.map((room, index) => {
                      return (
                        <RoomCard
                          room={room}
                          key={index}
                          setRoomID={setRoomID}
                          roomID={roomID}
                          onClose={() => {}}
                        />
                      )
                    })}

                    <Link href={`/room/${property?.id}`}>
                      <button className="flex space-x-2 p-2 items-center rounded-lg mt-4 lato text-sm bg-[#34C759] text-white px-4">
                        Add more rooms
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <form
                onSubmit={handleSubmit(handleEditRoom)}
                className="w-full lg:w-8/12 pt-6 pr-6 "
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    {edit ? (
                      <input
                        type="text"
                        defaultValue={details?.price}
                        className="p-2 w-3/6 rounded-lg outline-none border-[0.2px] text-xl lg:text-3xl font-semibold"
                        {...register('price')}
                      />
                    ) : (
                      <h3 className=" text-xl lg:text-3xl font-semibold">
                        {`${property?.currency}`} {details?.price.toLocaleString()}
                      </h3>
                    )}
                    <span className="text-[#798489]">/Per month</span>
                  </div>

                  {details?.published === 1 ? (
                    <p className="flex space-x-2 items-center">
                      <IoCheckmarkCircle color="#F58634" size={24} />
                      <span className="text-[#F58634] text-sm lg:text-base">
                        Published
                      </span>
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
                  {edit ? (
                    <textarea
                      defaultValue={details?.description}
                      className="w-full p-2 py-4 outline-none border-[0.2px] rounded-lg"
                      {...register('description')}
                    />
                  ) : (
                    <p className="text-sm">{details?.description}</p>
                  )}
                </div>

                <div className="pt-4">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold">Amenities</h4>

                    <>
                      {edit ? (
                        <div className="flex space-x-4">
                          <div
                            onClick={() => setEdit(false)}
                            className={`flex space-x-2 p-2 px-4 items-center rounded-lg mt-4 lato text-sm bg-[#E8EAED] cursor-pointer
                            }`}
                          >
                            <span>Cancel</span>
                          </div>
                          <button
                            type={'submit'}
                            className="flex space-x-2 p-2 items-center rounded-lg mt-4 lato text-sm bg-[#34C759] text-white px-4"
                          >
                            {editingRoom ? <Spinner /> : 'Save'}
                          </button>
                        </div>
                      ) : (
                        <div
                          onClick={() => setEdit(true)}
                          className={`flex space-x-2 p-2 px-4 items-center rounded-lg mt-4 lato text-sm bg-[#E8EAED] cursor-pointer
                  }`}
                        >
                          <CiEdit size={24} />
                          <span>Edit room details</span>
                        </div>
                      )}
                    </>
                  </div>

                  {!edit ? (
                    <div className="grid grid-cols-2 lg:grid-cols-3 pt-4 gap-6">
                      <AmenitiesCard value={details?.size} name="Size" />
                      <AmenitiesCard
                        edit={edit}
                        value={details?.bedside_fridge}
                        name="Bedside Fridge"
                      />
                      <AmenitiesCard
                        edit={edit}
                        name={`${details?.adults} Adults`}
                        value={details?.adults}
                      />
                      <AmenitiesCard
                        edit={edit}
                        value={details?.flat_tv}
                        name="Flat TV"
                      />
                      <AmenitiesCard
                        edit={edit}
                        value={details?.balcony}
                        name="Balcony"
                      />

                      <AmenitiesCard
                        edit={edit}
                        value={details?.bathroom_telephone}
                        name="Bathroom Telephone"
                      />

                      <AmenitiesCard
                        edit={edit}
                        value={details?.air_conditioner}
                        name="Air Conditioner"
                      />

                      <AmenitiesCard
                        edit={edit}
                        name={`${details?.children} Children`}
                        value={details?.children}
                      />

                      <AmenitiesCard
                        edit={edit}
                        value={details?.hair_dryer}
                        name="Hair Dryer"
                      />

                      <AmenitiesCard
                        edit={edit}
                        value={details?.bed_breakfast}
                        name="Bed breakfast"
                      />

                      <AmenitiesCard
                        value={details?.laundry}
                        edit={edit}
                        name="Laundry"
                      />

                      <AmenitiesCard
                        edit={edit}
                        value={details?.magnifying_mirror}
                        name="Magnifying mirror"
                      />

                      <AmenitiesCard
                        value={details?.internet}
                        edit={edit}
                        name="Internet"
                      />

                      <AmenitiesCard
                        value={details?.room_service_24h}
                        edit={edit}
                        name="24hr Room Sevice"
                      />

                      <AmenitiesCard
                        value={details?.wakeup_call}
                        edit={edit}
                        name="Wake up Calls"
                      />

                      <AmenitiesCard
                        value={details?.intercom}
                        edit={edit}
                        name="Intercom"
                      />
                     
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 lg:grid-cols-3 pt-4 gap-6 text-sm ">
                      <div className="w-full border-[1px] rounded-lg p-2 ">
                        <label htmlFor="">Room Name</label>
                        <input
                          type="text"
                          placeholder="Enter room name"
                          defaultValue={details?.name}
                          className="w-full outline-none"
                          {...register('name')}
                        />
                      </div>
                      <div className="w-full border-[1px] rounded-lg p-2">
                        <label htmlFor="">Adults</label>
                        <input
                          type="text"
                          placeholder="Enter numbers of adults"
                          defaultValue={details?.adults}
                          className="w-full outline-none"
                          {...register('adults')}
                        />
                      </div>
                      <div className="w-full border-[1px] rounded-lg p-2">
                        <label htmlFor="">Children</label>
                        <input
                          type="text"
                          placeholder="Enter numbers of children"
                          defaultValue={details?.children}
                          className="w-full outline-none"
                          {...register('children')}
                        />
                      </div>
                      <div className="w-full border-[1px] rounded-lg p-2">
                        <label htmlFor="">Size</label>
                        <input
                          type="text"
                          placeholder="Enter numbers of children"
                          defaultValue={details?.size}
                          className="w-full outline-none"
                          {...register('size')}
                        />
                      </div>
                      {allAmenities.map((a, index) => {
                        return (
                          <_AmenitiesCard
                            key={index}
                            value={a.value}
                            name={a.name}
                            checked={a.checked}
                            handleCheckboxChange={() =>
                              handleCheckboxChange(index)
                            }
                          />
                        )
                      })}
                    </div>
                  )}
                </div>

                {details?.published ? (
                  <div className="pt-4">
                    <button
                      className="border-[#F58634] border text-[#F58634] p-2 rounded-lg flex items-center space-x-2 px-6 text-sm "
                      onClick={publishLink}
                      type="button"
                    >
                      <p>Copy link</p> <RiLink color="#F58634" />
                    </button>

                    <div className="lg:flex pt-4 justify-between items-center text-xs xl:text-sm">
                      <p className="w-full lg:w-3/6 text-[#1A2B47 ">
                        Add the link below link to your website or advert. Users
                        will be able to book this room using this link. All
                        bookings submitted for this room can be found in the
                        booking page
                      </p>

                      <p className="pt-4 lg:pt-0">
                        This room has been published, you can{' '}
                        <span
                          onClick={() => unpublishRoom({ id: details?.id })}
                          className="text-[#F58634] underline cursor-pointer"
                        >
                          {unpublishing ? <Spinner /> : 'Unpublish'}
                        </span>{' '}
                      </p>
                    </div>
                  </div>
                ) : (
                  ''
                )}

                {/* <div className="w-full lg:w-8/12 flex mt-6 space-x-3 text-xs xl:text-sm">
                  <div className=" xl:w-5/12 flex space-x-2 bg-[#F58634] text-white rounded-lg items-center justify-center px-3 py-3 ">
                    <span>Paste payment link</span>
                    <RiLink color="white" />
                  </div>

                  <input
                    disabled={!edit}
                    type="text"
                    defaultValue={details?.payment_link}
                    {...register('payment_link')}
                    className="xl:w-7/12 p-2 py-3 outline-none border-[1px] rounded-lg"
                    placeholder="Enter payment link"
                  />
                </div> */}
              </form>
            </div>
          )}
        </>
      )}

      <Drawer placement={'bottom'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <div className="bg-[#FFFAF7] space-y-4 rounded-lg shadow-sm p-4 px-4 mt-4 text-sm lg:text-base overflow-y-scroll">
            {rooms?.map((room, index) => {
              return (
                <RoomCard
                  room={room}
                  key={index}
                  setRoomID={setRoomID}
                  roomID={roomID}
                  onClose={onClose}
                />
              )
            })}

            <Link href={`/room/${property?.id}`}>
              <button className="flex space-x-2 p-2 items-center rounded-lg mt-4 lato text-sm bg-[#34C759] text-white px-4">
                Add more rooms
              </button>
            </Link>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
