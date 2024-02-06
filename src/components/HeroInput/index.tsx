import { lato, lora } from '@/utils/fonts'
import { MdKeyboardArrowDown } from 'react-icons/md'

export default function HeroInput() {
  return (
    <div className={` w-[480px] h-[700px] bg-[#10375C] absolute left-48 top-16`}>
      <p className={`${lora.className} text-2xl text-white pl-10 pt-10 `}>
        {' '}
        Where would you like to go?
      </p>

      <div className={`${lato.className} px-10 pt-10 space-y-4`}>
        <div className="w-full bg-[#18232B] flex justify-between items-center px-4 py-3">
          <div className="space-y-1">
            <p className="text-[#636262]">Type</p>
            <p className="text-white">Hotel</p>
          </div>
          <MdKeyboardArrowDown size={20} color={'white'} />
        </div>
        <div className="w-full bg-[#18232B] flex justify-between items-center px-4 py-3">
          <div className="space-y-1">
            <p className="text-[#636262]">Location</p>
            <p className="text-white">Abuja</p>
          </div>
          <MdKeyboardArrowDown size={20} color={'white'} />
        </div>
        <div className="w-full bg-[#18232B] flex justify-between items-center px-4 py-3">
          <div className="space-y-1">
            <p className="text-[#636262]">Check in</p>
            <p className="text-white">9 Aug 2020</p>
          </div>
          <MdKeyboardArrowDown size={20} color={'white'} />
        </div>
        <div className="w-full bg-[#18232B] flex justify-between items-center px-4 py-3">
          <div className="space-y-1">
            <p className="text-[#636262]">Check out</p>
            <p className="text-white">9 Aug 2020</p>
          </div>
          <MdKeyboardArrowDown size={20} color={'white'} />
        </div>
        <div className="w-full bg-[#18232B] flex justify-between items-center px-4 py-3">
          <div className="space-y-1">
            <p className="text-[#636262]">Numbers of guest</p>
            <p className="text-white">9</p>
          </div>
          <MdKeyboardArrowDown size={20} color={'white'} />
        </div>
      </div>

      <div className={`${lato.className} px-10 mt-10 flex justify-center items-center`}>
        <p className="w-full bg-primary-color text-center  px-4 py-4 text-white">
          FIND MY BOOKINGS
        </p>
      </div>
    </div>
  )
}
