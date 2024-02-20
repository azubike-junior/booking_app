import { getItem, lato, open_sans } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { MdKeyboardArrowDown } from 'react-icons/md'

export default function Navbar() {
  const router = useRouter()
  const firstname = getItem('first_name')
  const lastname = getItem('last_name')

  return (
    <div className="flex justify-between items-center max-w-[1400px] mx-auto px-10 pt-10 ">
      <Link href={'/'}>
        <Image
          src="/bookteller.svg"
          width={200}
          height={200}
          alt="bookteller"
        />
      </Link>

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

          <Link className="font-medium" href={'/'}>
            Contact Us
          </Link>
          <Link
            className="flex items-center font-medium space-x-2"
            href=""
          ></Link>

          <div className=" p-2 px-6 flex items-center space-x-6 ">
            <div className="flex items-center space-x-2">
              <Image
                src="/web.svg"
                width={30}
                height={30}
                alt="bookteller"
                className="mr-2"
              />
              <p> EN</p>
              <MdKeyboardArrowDown size={20} />
            </div>
            <p
              onClick={() => {
                localStorage.clear()
                router.push('/auth/login')
              }}
              className="bg-[#FAFAFA] cursor-pointer"
            >
              {firstname.charAt(0).toUpperCase()}
              {lastname.charAt(0).toUpperCase()}
            </p>
            <div className={`${open_sans.className} font-semibold`}>
              <p>
                Hi, {firstname} {lastname}
              </p>
              <p className="text-[#8B8B8B] text-xs">You are welcome</p>
            </div>
          </div>
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
            <p>EN</p>
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
    // <></>
  )
}
