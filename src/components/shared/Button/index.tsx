import { ReactElement } from 'react'
import { MdOutlinePhotoCamera } from 'react-icons/md'


type btnProp = {
  name: string | ReactElement
  icon?: boolean
  onClick?: () => void
  type: 'button' | 'submit'
}

export default function Button({ name, icon, onClick, type }: Readonly<btnProp>) {
  return (
    <button
      onClick={onClick}
      type={type}
      className="border-[#10375C] bg-[#10375C] text-sm  text-white border py-1 text-center px-4 items-center  rounded-lg flex space-x-2"
    >
      {icon && <MdOutlinePhotoCamera size={16} color="white" />} <p>{name}</p>
    </button>
  )
}
