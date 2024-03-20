import { MdKeyboardArrowDown } from 'react-icons/md'

export default function HeroInput() {
  return (
    <div
      className={` w-[400px] xl:w-[500px] h-[510px] xl:h-[700px]  bg-[#10375C] absolute left-[40px] xl:left-44 top-10 xl:top-16 3xl:left-[610px] 3xl:w-[600px] 3xl:h-[900px]`}
    >
      <p
        className={`lora text-lg xl:text-2xl 3xl:text-3xl text-white pl-10 pt-4 xl:pt-10 `}
      >
        {' '}
        Where would you like to go?
      </p>

      <div
        className={`lato px-10 pt-4 xl:pt-10 space-y-4 3xl:text-lg 3xl:space-y-8`}
      >
        <div className="w-full bg-[#18232B] flex justify-between items-center px-4 py-1 xl:py-3">
          <div className="space-y-1">
            <p className="text-[#636262]">Type</p>
            <p className="text-white">Hotel</p>
          </div>
          <MdKeyboardArrowDown size={20} color={'white'} />
        </div>
        <div className="w-full bg-[#18232B] flex justify-between items-center px-4 py-1 xl:py-3">
          <div className="space-y-1">
            <p className="text-[#636262]">Location</p>
            <p className="text-white">Abuja</p>
          </div>
          <MdKeyboardArrowDown size={20} color={'white'} />
        </div>
        <div className="w-full bg-[#18232B] flex justify-between items-center px-4 py-1 xl:py-3">
          <div className="space-y-1">
            <p className="text-[#636262]">Check in</p>
            <p className="text-white">9 Aug 2020</p>
          </div>
          <MdKeyboardArrowDown size={20} color={'white'} />
        </div>
        <div className="w-full bg-[#18232B] flex justify-between items-center px-4 py-1 xl:py-3">
          <div className="space-y-1">
            <p className="text-[#636262]">Check out</p>
            <p className="text-white">9 Aug 2020</p>
          </div>
          <MdKeyboardArrowDown size={20} color={'white'} />
        </div>
        <div className="w-full bg-[#18232B] flex justify-between items-center px-4 py-1 xl:py-3">
          <div className="space-y-1">
            <p className="text-[#636262]">Numbers of guest</p>
            <p className="text-white">9</p>
          </div>
          <MdKeyboardArrowDown size={20} color={'white'} />
        </div>
      </div>

      <div
        className={`lato px-10 mt-6 xl:mt-10 flex justify-center items-center`}
      >
        <p className="w-full bg-primary-color text-center  px-4 py-2 xl:py-4 text-white">
          FIND MY BOOKINGS
        </p>
      </div>
    </div>
  )
}
