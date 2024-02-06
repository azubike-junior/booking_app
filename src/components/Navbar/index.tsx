import { lato } from '@/utils/fonts'
import Image from 'next/image'
import { MdKeyboardArrowDown } from 'react-icons/md'

export default function Navbar() {
  return (
    <div className="flex justify-between items-center max-w-[1300px] mx-auto  ">
      <Image src="/bookteller.svg" width={200} height={200} alt="bookteller" />

      <ul
        className={`${lato.className} flex text-black space-x-14 font-poppins text-base items-center font-medium leading `}
      >
        <a>Home</a>
        <a>Properties</a>
        <a>Bookings</a>
        <a>Rooms</a>
        <a>Contact Us</a>
        <a className="flex items-center space-x-2" href="">
          <Image
            src="/web.svg"
            width={30}
            height={30}
            alt="bookteller"
            className="mr-2"
          />
          EN
          <MdKeyboardArrowDown size={20} />
        </a>
        <a href='/auth/login' className=" text-primary-color">Log In</a>
        <a href='/auth/signup' className="bg-primary-color p-2 px-6 text-white">Sign Up</a>
      </ul>
    </div>
  )
}
