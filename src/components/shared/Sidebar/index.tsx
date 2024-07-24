import Link from 'next/link'
import { IoHomeOutline, IoSettingsOutline } from 'react-icons/io5'
import { LuMailOpen } from 'react-icons/lu'
import { MdOutlineDashboard } from 'react-icons/md'
import { RiLogoutCircleRLine } from 'react-icons/ri'

export default function Sidebar() {
  // const { jwt } = useContext(Context)

  const _public = [
    { name: 'Home', route: '/' },
    { name: 'Movies', route: '/movies' },
    { name: 'Genres', route: '/genres' },
  ]

  const _protected = [
    { name: 'Dashoard', route: '/', icon: <MdOutlineDashboard size={20} /> },
    { name: 'Bookings', route: '/bookings', icon: <LuMailOpen size={20} /> },
    {
      name: 'My Properties',
      route: '/property',
      icon: <IoHomeOutline size={20} />,
    },
    {
      name: 'Settings',
      route: '/settings',
      icon: <IoSettingsOutline size={20} />,
    },
    {
      name: 'Log out',
      route: '/Log out',
      icon: <RiLogoutCircleRLine size={20} />,
    },
  ]

  // const getRoute = jwt ? _protected : _public

  return (
    <div className='w-2/12 fixed h-full'>
      <ul className=" text-[#858C94] text-base py-8 px-4 pl-10 shadow-lg shadow-slate-200 lato h-full">
        {_protected.map((r) => {
          return (
            <Link href={r.name === 'Home' ? '/' : `/dashboard/${r.route}`}>
              <li className=" py-4 flex items-center space-x-6">
                <span>{r.icon}</span> <span>{r.name}</span>{' '}
              </li>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}
