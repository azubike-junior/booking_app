'use client'

import Pagination from '@/components/Pagination'
import { AuthWrapper } from '@/components/shared/AuthWrapper'
import Table from '@/components/Table'
import { useGetRoomByIdQuery } from '@/features/property'
import { useGetReservationsByRoomIDQuery } from '@/features/reservations'
import { BOOKINGS_COLUMNS, bookings_data } from '@/utils'
import { PropertyProp } from '@/utils/types'
import { Spinner } from '@chakra-ui/react'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/router'
import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { CiSearch } from 'react-icons/ci'
import { FaBed, FaDownload } from 'react-icons/fa'
import { FaChildren } from 'react-icons/fa6'
import { GiMirrorMirror, GiTrousers } from 'react-icons/gi'
import { IoIosArrowDropleftCircle } from 'react-icons/io'
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

export default function RoomBookings() {
  const [page, setPage] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)

  const route = useRouter()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<PropertyProp>({})

  const params = useParams<{ id: string }>()
  const { data: room, isLoading } = useGetRoomByIdQuery(params?.id)
  const {
    data: reservations,
    isLoading: loadingReservations,
  } = useGetReservationsByRoomIDQuery({ id: params?.id, page })

  let img: any = room?.image_one

  const columns = useMemo(() => BOOKINGS_COLUMNS, [])

  const _bookings = bookings_data
    .map((b) => {
      return {
        name: b.name,
        checkin: b.checkin,
        checkout: b.checkout,
        amount: b.amount,
      }
    })
    .filter(Boolean)

  return (
    <div className="lato">
      {isLoading ? (
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <>
          <div
            className="w-full h-[300px] lg:h-[350px] border "
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.3), rgba(11, 0, 0, 0.60)), url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              width: '100%',
            }}
          >
            {/* Content inside the div */}
            <div className="max-w-[1062px] px-10 mx-auto">
              <div className={`lato  w-full h-[350px]`}>
                <div className="mt-4   text-white">
                  <p className="text-3xl lg:text-6xl pt-10 lg:pt-28">
                    {room?.name},{' '}
                  </p>
                  <p className="text-xl lg:text-3xl pt-10">
                   {room?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[1062px] mt-10 mx-auto md:px-10">
            <div
              onClick={() => route.back()}
              className="flex  items-center space-x-2 cursor-pointer"
            >
              <IoIosArrowDropleftCircle size={35} />
              <p>Go back</p>
            </div>
            <div
              className={`lato shadow shadow-slate-400 p-6  w-full font-light mt-10 rounded-lg`}
            >
              <h2 className="text-lg font-medium">Room Details</h2>
              <p className="font-light text-xs md:text-lg pt-2">
                {room?.description}
              </p>
              <div className="flex flex-wrap  items-center gap-4 md:gap-8 lg:gap-10 pt-8 lg:pt-4 text-xs md:text-sm font-md">
                {room?.bedside_fridge === 1 ? (
                  <div className="">
                    <FaBed size={28} className="mx-auto" />
                    <p>Bedside Fridge</p>
                  </div>
                ) : null}
                <div>
                  <IoManSharp size={28} className="mx-auto" />
                  <p>{room?.adults} adult</p>
                </div>
                {room?.flat_tv ? (
                  <div>
                    <PiTelevisionFill size={28} className="mx-auto" />
                    <p> flat tv</p>
                  </div>
                ) : null}
                {room?.internet ? (
                  <div>
                    <MdSignalWifiStatusbarConnectedNoInternet3
                      size={28}
                      className="mx-auto"
                    />
                    <p> internet</p>
                  </div>
                ) : null}

                {room?.internet ? (
                  <div>
                    <TbAirConditioningDisabled size={28} className="mx-auto" />
                    <p> air condition</p>
                  </div>
                ) : null}

                {room?.internet ? (
                  <div>
                    <MdOutlineBalcony size={28} className="mx-auto" />
                    <p> balcony</p>
                  </div>
                ) : null}

                {room?.internet ? (
                  <div>
                    <MdFreeBreakfast size={28} className="mx-auto" />
                    <p> bed breakfast</p>
                  </div>
                ) : null}

                {room?.internet ? (
                  <div>
                    <MdOutlineBathroom size={28} className="mx-auto" />
                    <p> bathroom telephone</p>
                  </div>
                ) : null}
              </div>
              <div className="flex flex-wrap items-center gap-4 md:gap-8 lg:gap-10 pt-8 lg:pt-10 text-xs md:text-sm font-md">
                <div className="">
                  <FaChildren size={28} className="text-center mx-auto" />
                  <p>{room?.children} children</p>
                </div>
                {room?.intercom ? (
                  <div>
                    <PiPhoneDisconnectBold size={28} className=" mx-auto" />
                    <p> Intercom</p>
                  </div>
                ) : null}
                {room?.laundry ? (
                  <div>
                    <MdLocalLaundryService size={28} className=" mx-auto" />
                    <p> Laundry</p>
                  </div>
                ) : null}

                {room?.wakeup_call ? (
                  <div>
                    <TbBedOff size={28} className=" mx-auto" />
                    <p> Wakeup call</p>
                  </div>
                ) : null}

                {room?.smoke_detector ? (
                  <div>
                    <MdSmokeFree size={28} className=" mx-auto" />
                    <p> Smoke detector</p>
                  </div>
                ) : null}

                {room?.hair_dryer ? (
                  <div>
                    <GiTrousers size={28} className=" mx-auto" />
                    <p> Hair Dryer</p>
                  </div>
                ) : null}

                {room?.guest_amenities ? (
                  <div>
                    <PiUserCirclePlusFill size={28} className=" mx-auto" />
                    <p> Guest amenities</p>
                  </div>
                ) : null}

                {room?.magnifying_mirror ? (
                  <div>
                    <GiMirrorMirror size={28} className=" mx-auto" />
                    <p> Magnifying mirror</p>
                  </div>
                ) : null}
              </div>
              <div className="py-6 flex space-x-10 text-xs md:text-sm">
                <div>
                  <p>Size</p>
                  <p className="font-light ">{room?.size} /m</p>
                </div>

                <div>
                  <p>Mode</p>
                  <p>
                    {room?.mode_str === 'available'
                      ? 'Available'
                      : 'Not available'}
                  </p>
                </div>
              </div>

              <div>
                <h3>Other Images of {room?.name}</h3>

                <div className="flex  space-x-6 py-4">
                  <img src={room?.image_two} alt="" className="w-36 h-36" />
                  <img src={room?.image_two} alt="" className="w-36 h-36" />
                </div>
                <div></div>
              </div>

              <hr />

              <div className=" mx-auto  mt-10">
                <h2 className="text-lg font-medium">Room Bookings</h2>
                <div className="pt-10 block  md:flex space-x-6 lg:justify-between px-4 lg:px-0 space-y-4 md:space-y-0">
                  <div className=" border border-[#D8D8D8] rounded-lg p-2 flex justify-between items-center bg-[#F5F5F54D] space-x-3  md:w-1/2">
                    <CiSearch size={24} />{' '}
                    <input
                      type="text"
                      placeholder="Search"
                      className="flex-1 outline-none py-1"
                    />
                  </div>

                  <div className="space-x-8 flex items-center">
                    <div className="flex items-center space-x-4">
                      <p className="text-base">Sort:</p>
                      <select
                        name=""
                        id=""
                        className="border px-3 py-3 rounded-md"
                      >
                        <option value="">Most Recent</option>
                        <option value="">Yesterday</option>
                      </select>
                    </div>

                    <div className="border border-[#D8D8D8] rounded-lg p-2 flex space-x-3 items-center">
                      <FaDownload /> <p>Export </p>
                    </div>
                  </div>
                </div>

                {loadingReservations ? (
                  <div className="flex justify-center items-center pt-6">
                    <Spinner />
                  </div>
                ) : (
                  <div className="mt-10">
                    {reservations?.length === 0 ? (
                      <div className="bg-white p-10 w-full text-xl rounded-xl">
                        <p className="text-center">No available data 😔</p>
                      </div>
                    ) : (
                      <>
                        {/* <Table columns={columns} data={reservations} /> */}
                      </>
                    )}

                    <Pagination
                      totalRows={reservations?.length}
                      pageChangeHandler={setCurrentPage}
                      rowsPerPage={20}
                      currentPage={currentPage}
                      slicePageNo={page}
                      setSlicePageNo={setPage}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

RoomBookings.getLayout = function getLayout(page: any) {
  return <AuthWrapper>{page}</AuthWrapper>
}
