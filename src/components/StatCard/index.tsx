import { GoArrowUpRight } from 'react-icons/go'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { ImArrowUpRight2 } from "react-icons/im";

type prop = {
  title: string
  amount: string
}

export default function StatCard({ title, amount }: prop) {
  return (
    <div className=" shadow-slate-200 shadow-sm p-4 rounded-lg w-full">
      <div className="flex justify-between ">
        <p className="text-[#B8BDC6] font-normal text-sm">{title}</p>

        <ImArrowUpRight2 size={20} color={'#ACFFAA'} />
      </div>

      <div className="flex justify-between pt-8">
        <h3 className="text-[#1A2B47] text-2xl font-bold ">{amount}</h3>
        <div className="flex space-x-2 items-center text-[#F58634] text-sm">
          <p>Details</p>
          <MdOutlineKeyboardArrowRight size={20} color={'#F58634'} />
        </div>
      </div>
    </div>
  )
}
