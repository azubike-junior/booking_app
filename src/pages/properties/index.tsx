import { Lists } from '@/components/PropertyLists'
import { AuthWrapper } from '@/components/shared/AuthWrapper'
import Banner from '@/components/shared/Banner'
import { useGetPropertiesQuery } from '@/features/property'
import { getItem } from '@/utils'
import { Spinner } from '@chakra-ui/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Properties() {
  const { data, isLoading } = useGetPropertiesQuery(getItem('user_id'))
  const [firstname, setFirstname] = useState('')

  useEffect(() => {
    setFirstname(getItem('first_name'))
  }, [])

  let _data: any = []

  if (data) {
    _data = [data[0]]
  }

  return (
    <div className={`lato`}>
      <Banner firstname={firstname} />

      <div className="max-w-[1062px] mx-auto lg:px-10">
        <div className="bg-[#F5F5F5] py-10 px-6 md:px-10 lg:px-10 mt-8 space-y-10">
          <div className="flex justify-between items-center">
            <p className="text-[#10375C] text-base md:text-xl lg:text-3xl">
              Your properties on Bookteller
            </p>

            {data?.length === 0 ? (
              <Link href={'/properties/registerproperty'}>
                <button
                  type="button"
                  className="border-[#10375C] bg-[#10375C]  text-white border py-1 text-center px-6  rounded-lg"
                >
                  Add Property
                </button>
              </Link>
            ) : (
              <Link href={`/properties/reservations/bookings/${_data[0]?.id}`}>
                <button
                  type="button"
                  className="border-[#10375C] bg-[#10375C]  text-white border py-1 text-center px-3 lg:px-6 font-light rounded-lg text-sm"
                >
                  Reservations
                </button>
              </Link>
            )}
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center pb-6">
              <Spinner />{' '}
            </div>
          ) : null}

          {data?.length === 0 ? (
            <div className="mt-4 flex">
              <p className="text-[#7b7c7d] text-xl">
                No property has been added
              </p>
            </div>
          ) : (
            <>
              {_data?.map((p: any, index: number) => {
                return <Lists {...p} key={index} />
              })}
            </>
          )}
        </div>
      </div>

      {/* <div className="max-w-[1062px] mt-10 mx-auto lg:px-10">
        <div className="bg-[#F5F5F5] py-10 px-6 lg:px-14 mt-16 space-y-10">
          <p className="text-[#10375C] text-xl lg:text-3xl">
            Your acccount information
          </p>

          <ProfileAccount />

          <div className="flex justify-center space-x-2 items-center lg:justify-end">
            <button
              type="button"
              className="border-[#10375C] bg-[#10375C]  text-white border py-1 text-center px-6  rounded-lg"
            >
              Save changes
            </button>
          </div>
        </div>
      </div> */}
    </div>
  )
}

Properties.getLayout = function getLayout(page: any) {
  return <AuthWrapper>{page}</AuthWrapper>
}
