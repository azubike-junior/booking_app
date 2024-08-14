'use client'

import { useGetAccountQuery } from '@/features/auth'
import { getItem } from '@/utils'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { CiBellOn } from 'react-icons/ci'
import { IoMdArrowDropdown } from 'react-icons/io'

export default function Header() {
  const userId = getItem('user_id')
  const firstname = getItem('first_name')
  const router = useRouter()
  const lastname = getItem('last_name')

  const { data, isLoading } = useGetAccountQuery(userId)
  return (
    <div className="flex justify-between px-10 shadow py-2 fixed w-full bg-white ">
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
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  )
}
