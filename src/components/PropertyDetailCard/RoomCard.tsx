import Image from "next/image";
import { IoCheckmark } from "react-icons/io5";

export default function RoomCard() {
  return (
    <div>
      <div className="bg-[#FEF3EB] p-3 py-4 shadow-md shadow-slate-300 flex justify-between items-center rounded-lg">
        <div>
          <h3 className="">Beauty Room</h3>
          <div className="flex space-x-3 items-center bg-[#F58634] text-white text-sm mt-3 py-1 px-3 rounded-xl">
            <IoCheckmark /> <span>Published</span>
          </div>
        </div>

        <Image
          src={'/prop1.jpg'}
          width={100}
          height={100}
          alt="property"
          className=" rounded-lg"
        />
      </div>
    </div>
  )
}
