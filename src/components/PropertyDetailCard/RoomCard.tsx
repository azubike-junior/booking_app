import { useGetRoomByIdQuery } from '@/features/property'
import { RoomProps } from '@/utils/types'
import { IoCheckmark } from 'react-icons/io5'

type prop = {
  room: RoomProps
  setRoomID: (room: string) => void
  roomID: string
  onClose: any
}

export default function RoomCard({ room, setRoomID, roomID, onClose }: prop) {
  const { data: _room, isLoading } = useGetRoomByIdQuery(room?.id)

  return (
    <div
      onClick={() => {
        setRoomID(room?.id)
        onClose()
      }}
    >
      <div
        className={`p-3 py-4 shadow-md shadow-slate-300 flex justify-between items-center rounded-lg cursor-pointer ${
          room.id === roomID ? 'bg-[#FEF3EB]' : 'bg-white'
        }`}
      >
        <div>
          <h3 className="">{room.name}</h3>
          <div
            className={`flex space-x-2 items-center bg-[#F58634] text-white text-xs xl:text-sm mt-3 py-1 px-2 xl:px-3 rounded-xl ${
              room.published ? 'bg-[#F58634]' : 'bg-[#FCD9C0]'
            }`}
          >
            {room.published ? <IoCheckmark /> : ''}{' '}
            <span>{room.published ? 'published' : 'unpublished'}</span>
          </div>
        </div>

        {/* <Image
          src={room?.image_one}
          width={100}
          height={100}
          alt="property"
          className=" rounded-lg"
        /> */}

        <img
          src={room?.image_one}
          className="w-20 xl:w-24 h-16 rounded-lg"
          alt="room"
        />
      </div>
    </div>
  )
}
