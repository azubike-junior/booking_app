import { AuthWrapper } from '@/components/shared/AuthWrapper'
import Banner from '@/components/shared/Banner'
import Table from '@/components/Table'
import { useGetPropertiesQuery } from '@/features/property'
import { BOOKINGS_COLUMNS, bookings_data, getItem, lato } from '@/utils'
import { useEffect, useMemo, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaDownload } from 'react-icons/fa'

export default function Bookings() {
  const { data, isLoading } = useGetPropertiesQuery(getItem('user_id'))
  const [firstname, setFirstname] = useState('')

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
      <Banner firstname={firstname} />

      <div className="max-w-[1062px] mx-auto  lg:px-10 mt-24">
        <p className="text-3xl text-[#10375C] px-6 lg:px-0 ">
          Reservation List
        </p>

        <div className="pt-24 block  md:flex space-x-6 lg:justify-between px-4 lg::px-0 space-y-4 md:space-y-0">
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
              <select name="" id="" className="border px-3 py-3 rounded-md">
                <option value="">Most Recent</option>
                <option value="">Yesterday</option>
              </select>
            </div>

            <div className="border border-[#D8D8D8] rounded-lg p-2 flex space-x-3 items-center">
              <FaDownload /> <p>Export </p>
            </div>
          </div>
        </div>
        <div className="mt-20">
          {bookings_data?.length === 0 ? (
            <div className="bg-white p-10 w-full text-xl rounded-xl">
              <p className="text-center">No available data 😔</p>
            </div>
          ) : (
            <>
              <Table columns={columns} data={_bookings ?? []} />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

Bookings.getLayout = function getLayout(page: any) {
  return <AuthWrapper>{page}</AuthWrapper>
}
