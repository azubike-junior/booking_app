import { getItem, lato, open_sans, quickSand } from '@/utils'
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useRef } from 'react'
import { IoMdMenu } from 'react-icons/io'
import { MdKeyboardArrowDown } from 'react-icons/md'

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()
  const firstname = getItem('first_name')
  const lastname = getItem('last_name')
  const btnRef = useRef()

  const pathname = usePathname()

  return (
    <header className={pathname === '/' ? 'bg-[#F2F7FF] ' : 'bg-[#F2F7FF] '}>
      <nav className="container flex justify-between items-center max-w-[1300px]   mx-auto px-10 pt-6 ">
        <Link href={'/'}>
          <Image
            src="/bookteller.svg"
            width={200}
            height={200}
            alt="bookteller"
            className="logo"
          />
        </Link>

        <IoMdMenu size={30} className="flex sm:hidden" onClick={onOpen} />

        {firstname ? (
          <ul
            className={`${lato.className} hidden sm:flex flex-1 text-black font-poppins text-sm xl:text-base items-center leading font-medium `}
          >
            <Link className="font-medium " href={'/properties'}>
              Dashboard
            </Link>
            <Link
              className="font-medium "
              href={'/properties/reservations/bookings'}
            >
              Bookings
            </Link>

            <Link className="font-medium" href={'#'}>
              Settings
            </Link>
            <Link
              className="flex items-center font-medium space-x-2"
              href=""
            ></Link>
          </ul>
        ) : (
          <ul
            className={`${quickSand.className} hidden  sm:flex text-black space-x-6  font-poppins text-sm xl:text-base items-center leading font-medium `}
          >
            <Link className="font-medium " href={'/'}>
              Home
            </Link>
            <Link className="font-medium " href={'/about'}>
              About
            </Link>

            <Link className="font-medium" href={'/contact'}>
              Contact
            </Link>
          </ul>
        )}

        {firstname ? (
          <div className="p-2 px-6 hidden sm:flex items-center space-x-6 ">
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
        ) : (
          <div className="hidden sm:flex space-x-6 items-center">
            <Link
              href="/auth/login"
              className={`${quickSand.className} text-black font-md`}
            >
              Log In
            </Link>
            <Link
              href="/auth/signup"
              className={`${quickSand.className} bg-_green rounded-[50px] p-3 px-8 text-white font-md`}
            >
              Sign Up
            </Link>
          </div>
        )}
      </nav>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Image
              src="/bookteller.svg"
              width={200}
              height={200}
              alt="bookteller"
              className="logo"
            />
          </DrawerHeader>

          <DrawerBody>
            <div className="">
              {firstname ? (
                <div
                  className={`${quickSand.className}   text-black text-base grid gap-6 mt-4 leading font-medium`}
                >
                  <Link onClick={onClose} className=" " href={'/properties'}>
                    <p>Dashboard</p>
                  </Link>
                  <Link
                    onClick={onClose}
                    className=" "
                    href={'/properties/reservations/bookings'}
                  >
                    <p>Bookings</p>
                  </Link>

                  <Link onClick={onClose} className=" " href={'#'}>
                    <p>Settings</p>
                  </Link>
                </div>
              ) : (
                <div
                  className={`${quickSand.className}   text-black text-base grid gap-6 mt-4 leading font-medium`}
                >
                  <Link onClick={onClose} className=" " href={'#'}>
                    <p>Home</p>
                  </Link>

                  <Link onClick={onClose} className=" " href={'#'}>
                    <p> About</p>
                  </Link>

                  <Link onClick={onClose} className=" " href={'#'}>
                    <p> Contact</p>
                  </Link>
                </div>
              )}
            </div>

            {firstname ? (
              <div className=" pt-6 flex items-center space-x-6 ">
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
              </div>
            ) : (
              <div className="block pt-6">
                <Link
                  href="/auth/login"
                  className={`${quickSand.className} text-black font-md`}
                >
                  Log In
                </Link>

                <div className="pt-10">
                  <Link
                    href="/auth/signup"
                    className={`${quickSand.className} bg-_green rounded-[50px] p-3 px-8 text-white font-md`}
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            )}
          </DrawerBody>

          <DrawerFooter className="flex space-x-10">
            <div className={`${open_sans.className} font-semibold`}>
              <p>
                Hi, {firstname} {lastname}
              </p>
              <p className="text-[#8B8B8B] text-xs">You are welcome</p>
            </div>
            <Button
              onClick={() => {
                localStorage.clear()
                router.push('/auth/login')
              }}
              colorScheme="blue"
            >
              Log out
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </header>
  )
}
