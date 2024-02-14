import { RootState } from '@/store'
import { getItem, lato } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { useSelector } from 'react-redux'

export default function Navbar() {
  const user = useSelector((state: RootState) => state.authslice)

  const firstname = getItem('first_name')

  return (
    <div className="flex justify-between items-center max-w-[1400px] mx-auto px-10 pt-10 ">
      <Image src="/bookteller.svg" width={200} height={200} alt="bookteller" />

      {firstname ? (
        <ul
          className={`${lato.className} flex text-black lg:space-x-6 xl:space-x-14 font-poppins text-sm xl:text-base items-center leading font-medium `}
        >
          <Link className="font-medium " href={'/auth/registerproperty'}>
            Booking Engine
          </Link>
          <Link className="font-medium " href={'/properties'}>
            Property Listing
          </Link>
          <Link className="font-medium " href={'/'}>
            My Properties
          </Link>
          <Link className="font-medium" href={'/'}>
            Contact Us
          </Link>
          <Link className="flex items-center font-medium space-x-2" href="">
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
          <Link
            onClick={() => localStorage.clear()}
            href="/auth/login"
            className=" text-primary-color font-medium "
          >
            {firstname.charAt(0).toUpperCase()}
          </Link>
          <Link href="/auth/signup" className=" p-2 px-6  ">
            <p className="font-semibold"> Hi, {firstname}</p>
            <p className="text-[#8B8B8B] text-xs">You are welcome</p>
          </Link>
        </ul>
      ) : (
        <ul
          className={`${lato.className} flex text-black lg:space-x-6 xl:space-x-14 font-poppins text-sm xl:text-base items-center leading font-medium `}
        >
          <Link className="font-medium " href={'/auth/registerproperty'}>
            Booking Engine
          </Link>
          <Link className="font-medium " href={'/'}>
            About Us
          </Link>
          <Link className="font-medium " href={'/'}>
            Our Service
          </Link>
          <Link className="font-medium" href={'/'}>
            Contact Us
          </Link>
          <Link className="flex items-center font-medium space-x-2" href="">
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
          <Link href="/auth/login" className=" text-primary-color font-medium ">
            Log In
          </Link>
          <Link
            href="/auth/signup"
            className="bg-primary-color p-2 px-6 text-white font-semibold "
          >
            Sign Up
          </Link>
        </ul>
      )}
    </div>
  )
}
