import { lato } from '@/utils/fonts'
import Image from 'next/image'
import Link from 'next/link'
import { MdKeyboardArrowDown } from 'react-icons/md'

export default function Navbar() {
  return (
    <div className="flex justify-between items-center max-w-[1300px] mx-auto  ">
      <Image src="/bookteller.svg" width={200} height={200} alt="bookteller" />

      <ul
        className={`${lato.className} flex text-black space-x-14 font-poppins text-base items-center font-medium leading `}
      >
        <Link href={'/'}>Home</Link>
        <Link href={'/auth/registerproperty'}>Properties</Link>
        <Link href={'/'}>Bookings</Link>
        <Link href={'/'}>Rooms</Link>
        <Link href={'/'}>Contact Us</Link>
        <Link className="flex items-center space-x-2" href="">
          <Image
            src="/web.svg"
            width={30}
            height={30}
            alt="bookteller"
            className="mr-2"
          />
          EN
          <MdKeyboardArrowDown size={20} />
        </Link>
        <Link href='/auth/login' className=" text-primary-color">Log In</Link>
        <Link href='/auth/signup' className="bg-primary-color p-2 px-6 text-white">Sign Up</Link>
      </ul>
    </div>
  )
}
