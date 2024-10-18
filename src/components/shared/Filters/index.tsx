import { CiFilter } from "react-icons/ci"
import { FaRegCalendar } from "react-icons/fa"
import { IoIosArrowDown } from "react-icons/io"

const Filters = () => {
  return (
    <div className="hidden lg:flex justify-between space-x-4">
      {/* <div className="px-4 py-2 rounded-[20px] flex space-x-2 items-center justify-start border-[0.2px] border-[#E8EAED] pr-20">
        <CiFilter/> <span className="text-[#48556C] text-sm">Filter</span>
      </div> */}
      <div className="px-4 py-2 rounded-[20px] flex space-x-2 items-center justify-start border-[0.2px] border-[#E8EAED] pr-20">
        <FaRegCalendar /> <span className="text-[#48556C] text-sm">Date</span>
      </div>{' '}
      {/* <div className="px-4 py-2 rounded-[20px] flex space-x-2 items-center justify-start border-[0.2px] border-[#E8EAED] pr-20">
        <span className="text-[#48556C] text-sm">Export</span>{' '}
        <IoIosArrowDown size={14} />
      </div> */}
    </div>
  )
}

export default Filters
