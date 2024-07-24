import { HiOutlineArrowTrendingUp } from 'react-icons/hi2'
import { MdAddChart } from 'react-icons/md'

type prop = {
  title: string
  emptyString: string
}

export default function SummaryCard({ title, emptyString }: prop) {
  return (
    <div className="pt-8 w-full">
      <div className="border-[0.3px] border-[#EEEFF3] rounded-2xl bg-[#FAFCFE]  ">
        <div className="border-b-[0.4px] border-[#EEEFF3] p-4 px-6">
          <p className="font-semibold text-lg text-[#1B2559]">{title}</p>

          <p className="text-[#70707A] text-sm">From 1-31 July, 2024</p>
        </div>

        <div className=" py-16">
          <div className="flex justify-center items-center ">
            <div className="border-[0.3px] border[#EEEFF3] mx-auto  rounded-lg p-4 ">
              {title === 'Impressions' ? (
                <HiOutlineArrowTrendingUp size={20} color={'#F58634'} />
              ) : (
                <MdAddChart size={24} color="#F58634" />
              )}
            </div>
          </div>
          <p className="text-center pt-4">{emptyString}</p>
        </div>
      </div>
    </div>
  )
}
