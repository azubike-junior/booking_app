import ProfileAccount from '@/components/ProfileAccount'
import { Lists } from '@/components/PropertyLists'
import { AuthWrapper } from '@/components/shared/AuthWrapper'
import { useGetPropertiesQuery } from '@/features/property'
import { getItem, lato } from '@/utils'
import { Spinner } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export default function Properties() {
  const { data, isLoading } = useGetPropertiesQuery(getItem("user_id"))
  const [firstname, setFirstname] = useState('')

  useEffect(() => {
    setFirstname(getItem('first_name'))

  }, [])

  return (
    <div className={`${lato.className}`}>
      <div className={` bg-[#10375C] w-full  lg:h-[400px]`}>
        <div className="max-w-[1400px] mt-4 px-10 py-10 mx-auto text-white">
          <p className="text-3xl lg:text-6xl lg:pt-44">Hi {firstname}</p>
          <p className="text-xl lg:text-4xl pt-10">
            Welcome to your Bookteller administrative dashboard
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mt-10 mx-auto lg:px-10">
        <div className="bg-[#F5F5F5] py-10 px-6 lg:px-14 mt-16 space-y-10">
          <p className="text-[#10375C] text-xl lg:text-3xl">Profile Account</p>

          <ProfileAccount />

          <div className="flex justify-center items-center lg:justify-end">
            <button
              type="button"
              className="border-[#10375C] bg-[#10375C]  text-white border py-1 text-center px-6  rounded-lg"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto lg:px-10">
        <div className="bg-[#F5F5F5] pt-10 px-2 md:px-10 lg:px-10 mt-8 space-y-10">
          <p className="text-[#10375C] text-xl lg:text-3xl">
            Your properties on Bookteller
          </p>

          {isLoading ? (
            <div className="flex justify-center items-center pb-6">
              <Spinner />{' '}
            </div>
          ) : null}

          {data?.map((p, index) => {
            return <Lists {...p} key={index} />
          })}
        </div>
      </div>
    </div>
  )
}

Properties.getLayout = function getLayout(page: any) {
  return <AuthWrapper>{page}</AuthWrapper>
}
