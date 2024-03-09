'use client'

import { Rooms } from '@/components/PropertyLists/roomLists'
import { AuthWrapper } from '@/components/shared/AuthWrapper'
import {
  useGetPropertyQuery,
  useGetRoomByPropertyIdQuery,
} from '@/features/property'
import { lato } from '@/utils'
import { PropertyProp, RoomProps } from '@/utils/types'
import { Spinner, useToast } from '@chakra-ui/react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/router'
import { MutableRefObject, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { IoIosArrowDropleftCircle } from 'react-icons/io'

export default function PropertyDetails() {
  const route = useRouter()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<PropertyProp>({})
  const [loading, setLoading] = useState(false)
  const toast = useToast()
  const [imgUrl, setImgUrl] = useState('')
  const [logoUrl, setLogoUrl] = useState('')
  const [logoLoading, setLogoLoading] = useState(false)
  const fileRef = useRef() as MutableRefObject<HTMLInputElement>
  const logoRef = useRef() as MutableRefObject<HTMLInputElement>

  const [editDetails, toggleEditDetails] = useState(false)
  const params = useParams<{ id: string }>()
  const { data, isLoading } = useGetPropertyQuery(params?.id)
  const { data: rooms } = useGetRoomByPropertyIdQuery(params?.id)
  let img: any = data?.image

  return (
    <div className="mt-5">
      {isLoading ? (
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <>
          <div
            className="w-full h-[300px] lg:h-[450px] border "
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.3), rgba(11, 0, 0, 0.60)), url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              width: '100%',
            }}
          >
            {/* Content inside the div */}
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
              <div className={`${lato.className}  w-full h-[400px]`}>
                <div className="max-w-[1400px]  mt-10 lg:px-10 mx-auto text-white">
                  <p className="text-3xl lg:text-6xl pt-10 lg:pt-48">
                    {data?.name},{' '}
                  </p>
                  <p className="text-xl lg:text-3xl pt-10">
                    Lorem ipsum dolor sit amet consectetur. Integer volutpat nam
                    facilisis facilisis id porta adipiscing a neque.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[1400px] mt-10 mx-auto lg:px-10">
            <div
              onClick={() => route.back()}
              className="flex  items-center space-x-2 cursor-pointer"
            >
              <IoIosArrowDropleftCircle size={35} />
              <p>Go back</p>
            </div>
            <div className="bg-[#F5F5F5] py-10 my-10 space-y-10">
              <div className="max-w-[1400px] mx-auto lg:px-6">
                <div className="bg-[#F5F5F5] px-6">
                  <div className="lg:flex justify-between items-center pb-8">
                    <p className="text-[#10375C] text-base lg:text-2xl">
                      Rooms under this property
                    </p>

                    <Link
                      href={`/properties/rooms/${params?.id}`}
                      type="button"
                      className="border-[#10375C] bg-[#10375C]  text-white border py-1.5 text-xs mt-2 lg:mt-0 lg:text-sm text-center px-4 rounded-lg"
                    >
                      Add a new room
                    </Link>
                  </div>

                  {isLoading ? <Spinner /> : null}

                  {rooms?.length === 0 ? (
                    <div>
                      <p className="text-3xl text-center py-6">
                        No rooms are available under this property
                      </p>
                    </div>
                  ) : null}

                  <div className="space-y-8">
                    {rooms?.map((p: RoomProps, index) => {
                      return <Rooms {...p} key={index} />
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

PropertyDetails.getLayout = function getLayout(page: any) {
  return <AuthWrapper>{page}</AuthWrapper>
}
