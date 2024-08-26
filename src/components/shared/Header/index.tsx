'use client'

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
import { useRouter } from 'next/navigation'
import { CiBellOn } from 'react-icons/ci'
import { IoMdArrowDropdown } from 'react-icons/io'
import { RxHamburgerMenu } from 'react-icons/rx'

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const userId = getItem('user_id')
  const firstname = getItem('first_name')
  const router = useRouter()
  const lastname = getItem('last_name')

  const { data, isLoading } = useGetAccountQuery(userId)
  return (
    <>
      <div className=" hidden lg:flex justify-between px-10 shadow py-2 fixed w-full bg-white ">
        <img src="/bookteller.svg" alt="" className=" w-32 md:w-40" />

        <div className="flex items-center space-x-4">
          <CiBellOn size={24} className="" />

          <Menu>
            <MenuButton>
              <div className="flex items-center space-x-3">
                <div className="flex space-x-2 items-center">
                  <p className="text-sm">
                    {firstname} {lastname}
                  </p>
                  <div className="w-8 h-8 bg-[#d1d0d0] flex justify-center items-center rounded-full ">
                    {data?.firstname?.charAt(0).toUpperCase()}
                    {data?.lastname?.charAt(0).toUpperCase()}
                  </div>
                </div>

                <IoMdArrowDropdown />
              </div>
            </MenuButton>
            <MenuList>
              <MenuItem
                onClick={() => {
                  localStorage.clear()
                  router.push('/login')
                }}
              >
                Log out
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>

      <div className="lg:hidden p-3 px-6 flex justify-between pt-5">
        <div className="w-36 p-2 space-x-3 bg-[#F5F5F5] flex rounded-3xl items-center ">
          <div className="w-8 h-8 bg-[#d1d0d0] flex justify-center items-center rounded-full ">
            {data?.firstname?.charAt(0).toUpperCase()}
            {data?.lastname?.charAt(0).toUpperCase()}
          </div>

          <p className="text-sm">
            {firstname} {lastname}
          </p>
        </div>

        <div className="flex space-x-4 items-center">
          <CiBellOn size={26} className="" />

          <RxHamburgerMenu size={26} onClick={onOpen}/>
        </div>
      </div>

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
              <div
                className={`   text-black text-base grid gap-6 mt-4 leading font-medium`}
              >
                <Link onClick={onClose} className=" " href={'/dashboard'}>
                  <p>Dashboard</p>
                </Link>
                <Link
                  onClick={onClose}
                  className=" "
                  href={'/dashboard/bookings'}
                >
                  <p>Bookings</p>
                </Link>
                <Link
                  onClick={onClose}
                  className=" "
                  href={'/dashboard/property'}
                >
                  <p>Properties</p>
                </Link>
                <Link
                  onClick={() => {
                    onClose()
                    localStorage.clear()
                  }}
                  className=" "
                  href={'/login'}
                >
                  <p>Logout</p>
                </Link>
              </div>
            </div>
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
    </>
  )
}
