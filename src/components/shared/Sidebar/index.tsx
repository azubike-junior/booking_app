'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IoHomeOutline } from 'react-icons/io5'
import { LuMailOpen } from 'react-icons/lu'
import { MdOutlineDashboard } from 'react-icons/md'
import { RiLogoutCircleRLine } from 'react-icons/ri'

export default function Sidebar() {
  const pathname = usePathname()

  console.log('>>>>pathname', pathname)

  const _protected = [
    { name: 'Dashoard', route: '', icon: <MdOutlineDashboard size={20} /> },
    { name: 'Bookings', route: '/bookings', icon: <LuMailOpen size={20} /> },
    {
      name: 'My Properties',
      route: '/property',
      icon: <IoHomeOutline size={20} />,
    },
  ]

  return (
    <div className="hidden w-2/12 fixed h-full lg:flex justify-center items-center">
      <ul className="  text-base py-8 px-6 xl:pl-10 shadow-lg w-full shadow-slate-200 lato h-full">
        {_protected.map((r, index) => {
          const isActive = pathname === `/dashboard${r.route}`

          console.log('>>>>', `/dashboard/${r.route}`)

          return (
            <Link
              key={index}
              href={r.name === 'Home' ? '/' : `/dashboard${r.route}`}
            >
              <li
                className={` py-4 flex items-center space-x-2 text-sm xl:text-base xl:space-x-6 ${
                  isActive ? 'text-[#F58634] font-semibold' : 'text-[#858C94]'
                }`}
              >
                <span>{r.icon}</span> <span>{r.name}</span>{' '}
              </li>
            </Link>
          )
        })}

        <Link
          onClick={() => {
            localStorage.clear()
          }}
          className=" "
          href={'/login'}
        >
          <li className="text-[#858C94] py-4 flex items-center space-x-2 text-sm xl:text-base xl:space-x-6">
            <RiLogoutCircleRLine />
            <span>Logout</span>
          </li>
        </Link>
      </ul>
    </div>
  )
}
