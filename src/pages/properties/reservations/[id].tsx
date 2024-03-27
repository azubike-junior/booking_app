import { ReservationDetails } from '@/components/PropertyLists/ReservationDetails'
import Checkout from '@/components/Reservations/Checkout'
import { AuthWrapper } from '@/components/shared/AuthWrapper'
import {
  useGetPropertyQuery,
  useGetRoomByIdQuery,
  useGetRoomByPropertyIdQuery,
} from '@/features/property'
import { Spinner } from '@chakra-ui/react'
import { useParams } from 'next/navigation'
import { useLayoutEffect, useState } from 'react'

export default function BookProperty() {
  const params = useParams<{ id: string }>()
  const [bg, setbg] = useState<any>(null)
  const [showDetails, setShowDetails] = useState(false)
  const [showCheckout, setShowCheckout] = useState(false)

  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }

  const property_id = params?.id.split('+')[0]
  const room_id = params?.id.split('+')[1]

  const { data: property } = useGetPropertyQuery(property_id)
  const { data: otherRooms, isLoading } = useGetRoomByPropertyIdQuery(
    property_id,
  )

  const {
    data: roomDetail,
    isLoading: loadingRoomDetails,
  } = useGetRoomByIdQuery(room_id)

  let _data: any = []

  if (otherRooms) {
    _data = [otherRooms[0]]
  }

  useLayoutEffect(() => {
    setbg(property?.primary_color)
  }, [property])

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center pb-6 mt-20">
          <Spinner />
        </div>
      ) : (
        <div className={`font-lato`}>
          <div
            className={` w-full  lg:h-[240px]`}
            style={{ background: bg }}
          >
            <div className="max-w-[1062px] px-10 pb-10 pt-16 mx-auto text-white flex justify-between items-center">
              <div className=" text-white">
                <p className="text-3xl lg:text-5xl">
                  {property?.name}
                </p>
                <p className="text-xl lg:text-2xl pt-6">{property?.address}</p>
              </div>

              <img src={property?.logo} alt="" className='w-20 h-20' />
            </div>
          </div>

          {showCheckout ? (
            <Checkout property={property} room={roomDetail} />
          ) : (
            <div>
              <div className="max-w-[1062px] mx-auto lg:px-10 mt-20">
                {!roomDetail ? (
                  <div className="flex justify-center items-center pb-6">
                    <Spinner size="30" color="blue" />{' '}
                  </div>
                ) : null}

                <ReservationDetails
                  property={property}
                  room={roomDetail || {}}
                  index={0}
                  setShowCheckout={setShowCheckout}
                />
              </div>

              <div className="max-w-[1200px] mx-auto lg:px-10 pt-20">
                <p className="text-2xl text-center">
                  Other rooms under {property?.name}{' '}
                </p>
                {isLoading ? (
                  <div className="flex justify-center items-center pb-6">
                    <Spinner />{' '}
                  </div>
                ) : null}

                {otherRooms?.length === 0 ? (
                  <div className="mt-4 flex">
                    <p className="text-[#7b7c7d] text-xl">
                      No property has been added
                    </p>
                  </div>
                ) : null}

                {otherRooms?.map((p: any, index: number) => {
                  return (
                    <ReservationDetails
                      property={property}
                      room={p}
                      key={index}
                      index={index + 1}
                      setShowCheckout={setShowCheckout}
                    />
                  )
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}

BookProperty.getLayout = function getLayout(page: any) {
  return <AuthWrapper>{page}</AuthWrapper>
}
