import Image from 'next/image'
import { FaRegCheckSquare } from 'react-icons/fa'

type prop = {
  img: string
  name?: string
  value?: string
}

export default function DetailCard({ img, name, value }: prop) {
  return (
    <div className="flex justify-between w-full border-[0.3px] border-[#667184] px-3 py-3 rounded-lg items-center space-x-4">
      <div className="flex space-x-2 items-center">
        <Image src={img} width={45} height={40} alt="location" />
        <p className="text-[#5F6C72] font-normal text-base">{name}</p>
      </div>

      <span>{value}</span>
    </div>
  )
}

export function AmenitiesCard({ name }: prop) {
  return (
    <div className="flex space-x-2 w-full border-[0.3px] border-[#969DAA] px-3 py-4 rounded-md items-center space-x-4">
      <FaRegCheckSquare color="#34C759" />

      <p className="text-black">{name}</p>
    </div>
  )
}
