'use client'

import StatCard from '@/components/StatCard'
import SummaryCard from '@/components/StatCard/summaryCard'
import { useGetDashboardSummariesQuery } from '@/features/couponManager'
import { Spinner } from '@chakra-ui/react'
import { CgSortAz } from 'react-icons/cg'
import { CiSearch } from 'react-icons/ci'

export default function Dashboard() {
  const { data, isLoading } = useGetDashboardSummariesQuery()
  // const data: any = {}
  // const isLoading = false

  console.log('>>>>>rate', data)

  const date = new Date()

  const datePart = date.toLocaleDateString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const timePart = date.toLocaleTimeString('en-GB', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })

  return (
    <div className="lato">
      <div className="bg-[#FEF3EB] space-y-3 md:space-y-0 w-full md:flex items-center justify-between py-4 rounded-lg border-dashed border-[#874A1D] mb-8 border-b-[2px] xl:px-20 px-10">
        <div className="flex space-x-6  items-center  text-sm xl:text-base">
          <p className="text-[#F8AE77]">Active Plan:</p>{' '}
          <span className=" text-sm  xl:text-lg  font-semibold text-[#874A1D]">
            {' '}
            Basic Plan
          </span>
        </div>

        <div className="w-[1px] bg-[#D9C2B2] hidden md:block h-16"></div>

        <div className="md:space-y-4 text-sm xl:text-base">
          <div className="text-[#F8AE77] space-x-6 flex ">
            <p className="xl:w-36">Date Activited:</p>
            <span className="text-[#874A1D] font-semibold">
              30/10/2023
            </span>{' '}
          </div>
          <div className="text-[#F8AE77] space-x-6 flex ">
            <p className="xl:w-36"> Expiry Date:</p>{' '}
            <span className="text-[#874A1D] font-semibold">30/10/2023</span>
          </div>
        </div>

        <div className="w-[1px] bg-[#D9C2B2] h-16 hidden md:block"></div>

        <div className="md:space-y-4 text-sm xl:text-base">
          <div className="text-[#F8AE77] space-x-6 flex ">
            <p className="xl:w-36">Duration:</p>
            <span className="text-[#874A1D] font-semibold">1 Year</span>{' '}
          </div>
          <div className="text-[#F8AE77] space-x-6 flex ">
            <p className="xl:w-36"> Status:</p>{' '}
            <span className="text-[#31CF1C] font-semibold">Active</span>
          </div>
        </div>

        <div className="w-[1px] bg-[#D9C2B2] h-16 hidden md:block"></div>

        <div className="md:space-y-4 text-sm xl:text-base">
          <div className="text-[#F8AE77] space-x-6 flex ">
            <p>Price:</p>
            <span className="text-[#874A1D] font-semibold"># 30, 000</span>{' '}
          </div>
          <button className="bg-[#673816] py-1 rounded-[20px] text-white px-6 text-center ">
            Upgrade
          </button>
        </div>
      </div>
      <div className="flex justify-between items-baseline">
        <div className="">
          <h2 className="text-2xl xl:text-4xl font-medium ">Today</h2>
          <p className=" font-medium text-[#8F9BBA] pt-2">
            {`${datePart} | ${timePart}`}
          </p>
        </div>

        <div className=" w-3/12 hidden lg:flex space-x-3 items-center lato">
          <div className="border-[0.3px] border-[#DDDEDF] flex rounded-lg w-full  items-center  px-4 shadow-sm">
            <CiSearch size={24} />
            <input
              type="text"
              className="rounded-lg w-full flex-1  py-2 px-4 outline-none "
              placeholder="Search here..."
            />
          </div>
          <CgSortAz size={26} />
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-10 pt-8">
        <StatCard
          title="Total Impressions"
          amount={isLoading ? <Spinner /> : data?.total_impressions}
        />
        <StatCard
          title="Successful Bookings"
          amount={isLoading ? <Spinner /> : data?.successful_bookings}
        />
        <StatCard
          title="Conversion rate"
          amount={isLoading ? <Spinner /> : '0'}
        />
        <StatCard
          title="Total Revenue"
          amount={isLoading ? <Spinner /> : data?.revenue}
        />
      </div>

      <div className="pt-8 lato">
        <h2 className="text-xl font-medium ">Recent Activity</h2>

        <div className="lg:grid grid-cols-2 gap-10 ">
          <SummaryCard title=" Booking Summary" emptyString="Add bookings" />
          <SummaryCard title=" Impressions" emptyString="No activity Logged" />
        </div>
      </div>
    </div>
  )
}
