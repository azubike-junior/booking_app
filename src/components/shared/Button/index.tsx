import { ReactElement } from 'react'
import { MdOutlinePhotoCamera } from 'react-icons/md'


type btnProp = {
  name: string | ReactElement
  icon?: boolean
  onClick?: () => void
  type: 'button' | 'submit'
  className?: string
  bg?: string
}

export default function Button({ name, icon, onClick, type, className, bg}: Readonly<btnProp>) {
  return (
    <button
      onClick={onClick}
      style={{background: bg}}
      type={type}
      className={className}
    >
      {icon && <MdOutlinePhotoCamera size={16} color="white" />} <p>{name}</p>
    </button>
  )
}
