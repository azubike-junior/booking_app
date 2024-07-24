import StatCard from '@/components/StatCard'
import SummaryCard from '@/components/StatCard/summaryCard'
import { CgSortAz } from 'react-icons/cg'
import { CiSearch } from 'react-icons/ci'

export default function page() {
  return (
    <div className="lato">
      <div className="flex justify-between items-baseline">
        <div className="">
          <h2 className="text-4xl font-medium ">Today</h2>
          <p className=" font-medium text-[#8F9BBA] pt-2">
            Tue 16 July, 2024 | 11:00 AM
          </p>
        </div>

        <div className=" w-3/12 flex space-x-3 items-center lato">
          <div className="border-[0.3px] border-[#DDDEDF] flex rounded-lg w-full  items-center  px-4 shadow-sm">
            <CiSearch size={24} />
            <input
              type="text "
              className="rounded-lg w-full flex-1  py-2 px-4 outline-none "
              placeholder="Search here..."
            />
          </div>
          <CgSortAz size={26} />
        </div>
      </div>

      <div className="flex w-full space-x-10 pt-8">
        <StatCard title="Recent Bookings" amount="200" />
        <StatCard title="Successful Bookings" amount="200" />
        <StatCard title="Successful Bookings(%)" amount="200" />
        <StatCard title="Total Revenue" amount="200" />
      </div>

      <div className="pt-8 lato">
        <h2 className="text-xl font-medium ">Recent Activity</h2>

        <div className="flex space-x-10 ">
          <SummaryCard title=" Booking Summary" emptyString="Add bookings" />
          <SummaryCard title=" Impressions" emptyString="No activity Logged" />
        </div>
      </div>
    </div>
  )
}
