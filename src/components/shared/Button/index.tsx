import { ReactElement } from 'react'
import { MdOutlinePhotoCamera } from 'react-icons/md'


type btnProp = {
  name: string | ReactElement
  icon?: any
  onClick?: () => void
  type: 'button' | 'submit'
  className?: string
  bg?: string
  disabled?: boolean
}

export default function Button({ name, icon, onClick, type, className, bg, disabled}: Readonly<btnProp>) {
  return (
    <button
      onClick={onClick}
      style={{background: bg}}
      type={type}
      className={className}
      disabled={disabled}
    >
      {icon && icon} <p>{name}</p>
    </button>
  )
}
