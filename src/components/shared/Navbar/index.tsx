import Profile from '@/components/Profile'
import { useGetAccountQuery } from '@/features/auth'
import { getItem } from '@/utils'
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { IoMdMenu } from 'react-icons/io'
import { MdKeyboardArrowDown } from 'react-icons/md'

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()
  const firstname = getItem('first_name')
  const lastname = getItem('last_name')
  const userId = getItem('user_id')

  const { data, isLoading } = useGetAccountQuery(userId)

  const {
    isOpen: isProfileOpen,
    onOpen: openProfile,
    onClose: closeProfile,
  } = useDisclosure()

  const pathname = usePathname()

  return (
    <header className={pathname === '/' ? 'bg-[#F2F7FF] sticky top-0 z-50 ' : 'bg-[#F2F7FF] sticky top-0 z-50 '}>
      <nav className="container flex justify-between  items-center max-w-[1400px]   mx-auto px-6 md:px-10 pt-6 axiforma-light">
        <Link href={'/'}>
          <img src="/bookteller.svg" alt="" className=' w-32 md:w-[200px]'/>
        </Link>

        <IoMdMenu size={30} className="flex sm:hidden" onClick={onOpen} />

        {firstname ? (
          <ul
            className={` hidden  sm:flex text-black space-x-6  text-sm xl:text-base items-center leading font-medium `}
          >
            <Link className="font-medium " href={'/dashboard'}>
              Dashboard
            </Link>
            

            <Link className="font-medium" href={'/dashboard/properties'}>
              Settings
            </Link>
          </ul>
        ) : (
          <ul
            className={` hidden  sm:flex text-black space-x-6  font-poppins text-sm xl:text-base items-center leading font-light `}
          >
            <Link className=" " href={'/'}>
              Home
            </Link>
            <Link className=" " href={'/about'}>
              About
            </Link>

            <Link className="" href={'/contact'}>
              Contact
            </Link>
          </ul>
        )}

        {firstname ? (
          <div className="p-2 px-6 hidden sm:flex items-center space-x-6 z-40">
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
            <p className="bg-[#d1d0d0] cursor-pointer p-1.5 rounded-full">
              {data?.firstname?.charAt(0).toUpperCase()}
              {data?.lastname?.charAt(0).toUpperCase()}
            </p>
            <Menu>
              <MenuButton>
                <div className={`quicksand font-semibold`}>
                  <p>
                    Hi, {firstname} {lastname}
                  </p>
                  <p className="text-[#8B8B8B] text-xs text-left">
                    You are welcome
                  </p>
                </div>
              </MenuButton>

              <MenuList>
                <MenuItem onClick={() => openProfile()}>Profile</MenuItem>
                <MenuItem
                  onClick={() => {
                    localStorage.clear()
                    router.push('/login')
                  }}
                >
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        ) : (
          <div className="hidden sm:flex space-x-6 items-center">
            <Link href="/login" className={`quicksand text-black font-md`}>
              Log In
            </Link>
            <Link
              href="/signup"
              className={` bg-_green rounded-[50px] p-3 px-8 text-white font-md`}
            >
              Sign Up
            </Link>
          </div>
        )}

        <Profile isOpen={isProfileOpen} onClose={closeProfile} />
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
                  className={`   text-black text-base grid gap-6 mt-4 leading font-medium`}
                >
                  <Link onClick={onClose} className=" " href={'/properties'}>
                    <p>Dashboard</p>
                  </Link>
                  {/* <Link
                    onClick={onClose}
                    className=" "
                    href={'/properties/reservations/bookings'}
                  >
                    <p>Bookings</p>
                  </Link> */}

                  <Link onClick={onClose} className=" " href={'#'}>
                    <p>Settings</p>
                  </Link>
                </div>
              ) : (
                <div
                  className={`   text-black text-base grid gap-6 mt-4 leading font-medium`}
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
                <Link href="/login" className={` text-black font-md`}>
                  Log In
                </Link>

                <div className="pt-10">
                  <Link
                    href="/signup"
                    className={` bg-_green rounded-[50px] p-3 px-8 text-white font-md`}
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            )}
          </DrawerBody>

          {/* <DrawerFooter className="flex space-x-10">
            <div className={`font-semibold`}>
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
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </header>
  )
}
