import { AuthWrapper } from '@/components/shared/AuthWrapper'
import { useGetPropertiesQuery } from '@/features/property'
import { BOOKINGS_COLUMNS, bookings_data, getItem, lato } from '@/utils'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'
import { IoIosArrowDown, IoIosArrowDropleftCircle } from 'react-icons/io'

export default function Inspection() {
  const { data, isLoading } = useGetPropertiesQuery(getItem('user_id'))
  const [firstname, setFirstname] = useState('')
  const route = useRouter()

  useEffect(() => {
    setFirstname(getItem('first_name'))
  }, [])

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
    <div className={`${lato.className}`}>
      <div className={` bg-[#10375C] w-full  lg:h-[240px]`}>
        <div className="max-w-[1400px] mt-4 px-10 py-10 mx-auto text-white">
          <p className="text-3xl lg:text-5xl lg:pt-10">Hi {firstname}</p>
          <p className="text-xl lg:text-2xl pt-6">
            Welcome to your Bookteller administrative dashboard
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto lg:px-10 mt-16">
        <div
          onClick={() => route.back()}
          className="flex  items-center space-x-2 cursor-pointer px-6 lg:px-0 "
        >
          <IoIosArrowDropleftCircle size={35} />
          <p>Go Back</p>
        </div>

        <div className="bg-[#F5F5F580] space-y-10 w-full px-16 py-10 mt-14">
          <div>
            <div className="flex justify-between items-center w-full space-x-3">
              <p className=" md:w-2/12 text-lg">Personal Information</p>

              <div className=" bg-[#ccc] hidden  h-0.5 md:block  w-full"></div>
              <IoIosArrowDown size={24} className="hidden md:block" />
            </div>

            <div className="pt-10 grid grid-cols-1 gap-y-4 lg:gap-y-0  md:grid-cols-3 font-light">
              <div>
                <p className="text-[#747F8A] text-sm font-light">FIRST NAME</p>
                <p>Joe</p>
              </div>

              <div>
                <p className="text-[#747F8A] text-sm font-light">LAST NAME</p>
                <p>Doe</p>
              </div>

              <div>
                <p className="text-[#747F8A] text-sm font-light"> EMAIL</p>
                <p>pearlthelma299@gmail.com</p>
              </div>
            </div>
            <div className="pt-10 grid grid-cols-1 gap-y-4 lg:gap-y-0  md:grid-cols-3 font-light">
              <div>
                <p className="text-[#747F8A] text-sm font-light">COUNTRY</p>
                <p>Nigeria</p>
              </div>
              <div>
                <p className="text-[#747F8A] text-sm font-light">
                  PHONE NUMBER
                </p>
                <p>+234908744833</p>
              </div>{' '}
              <div>
                <p className="text-[#747F8A] text-sm font-light">CITY</p>
                <p>Lagos</p>
              </div>
            </div>
            <div className="pt-10 grid grid-cols-1 gap-y-4 lg:gap-y-0  md:grid-cols-3 font-light">
              <div>
                <p className="text-[#747F8A] text-sm font-light">ADDRESS</p>
                <p>Banana Island, Ikoyi, Lagos</p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center w-full space-x-3">
              <p className="md:w-2/12 text-lg">Room Information</p>

              <div className=" bg-[#ccc] hidden  h-0.5 md:block  w-full"></div>
              <IoIosArrowDown size={24} className="hidden md:block" />
            </div>

            <div className="pt-10 grid grid-cols-1 gap-y-4 lg:gap-y-0  md:grid-cols-3 font-light">
              <div>
                <p className="text-[#747F8A] text-sm font-light">ADULTS </p>
                <p>3</p>
              </div>

              <div>
                <p className="text-[#747F8A] text-sm font-light">CHILDREN</p>
                <p>3</p>
              </div>

              <div>
                <p className="text-[#747F8A] text-sm font-light">AMOUNT</p>
                <p>$ 3,197.00</p>
              </div>
            </div>
            <div className="pt-10 grid grid-cols-1 gap-y-4 lg:gap-y-0  md:grid-cols-3 font-light">
              <div>
                <p className="text-[#747F8A] text-sm font-light">CHECK OUT</p>
                <p>Mar 3rd, 2024</p>
              </div>
              <div>
                <p className="text-[#747F8A] text-sm font-light">CHECK IN</p>
                <p>Feb 3rd, 2024</p>
              </div>
              <div>
                <p className="text-[#747F8A] text-sm font-light">ROOM NAME</p>
                <p>Executive Suite</p>
              </div>
            </div>
            <div className="pt-10 grid grid-cols-1 gap-y-4 lg:gap-y-0  md:grid-cols-3 font-light">
              <div>
                <p className="text-[#747F8A] text-sm font-light">DOUBLE BED</p>
                <p>1</p>
              </div>
              <div>
                <p className="text-[#747F8A] text-sm font-light">KING BED</p>
                <p>1</p>
              </div>
              <div>
                <p className="text-[#747F8A] text-sm font-light">ROOM SIZE </p>
                <p>200/CM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Inspection.getLayout = function getLayout(page: any) {
  return <AuthWrapper>{page}</AuthWrapper>
}
