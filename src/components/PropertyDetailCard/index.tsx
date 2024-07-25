import { FaRegCheckSquare } from 'react-icons/fa'

type prop = {
  img?: string
  name?: string
  value?: string
  icon?: any
}

export default function DetailCard({ icon, img, name, value }: prop) {
  return (
    <div className="flex justify-between w-full border-[0.3px] border-[#667184] px-3 py-3 rounded-lg items-center space-x-4 text-sm">
      <div className="flex space-x-2 items-center">
        {/* <Image src={img} width={45} height={40} alt="location" /> */}
        <div className='bg-[#E8EAED] h-10 w-10 rounded-full flex justify-center items-center'>{icon}</div>
        <p className="text-[#5F6C72] font-normal">{name}</p>
      </div>

      <span>{value}</span>
    </div>
  )
}

export function AmenitiesCard({ name }: prop) {
  return (
    <div className="flex  w-full border-[0.3px] border-[#969DAA] px-3 py-4 rounded-md items-center space-x-4">
      <FaRegCheckSquare color="#34C759" />

      <p className="text-black text-sm">{name}</p>
    </div>
  )
}
