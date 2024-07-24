import { CiBellOn } from 'react-icons/ci'
import { IoMdArrowDropdown } from 'react-icons/io'

export default function Header() {
  return (
    <div className="flex justify-between px-10 shadow py-2 fixed w-full bg-white ">
      <img src="/bookteller.svg" alt="" className=" w-32 md:w-40" />

      <div className="flex items-center space-x-4">
        <CiBellOn size={24} className="" />

        <div className='flex space-x-2 items-center'>
          <p className='text-sm'>Joe Doe</p>
          <img src="/user.svg" alt="" className=" w-8" />
        </div>

        <IoMdArrowDropdown />
      </div>
    </div>
  )
}
