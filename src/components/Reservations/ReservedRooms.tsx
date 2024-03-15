import { useGetRoomByPropertyIdQuery } from '@/features/property'
import { lato, quickSand } from '@/utils'
import { RoomProps, StepProps } from '@/utils/types'
import { useToast } from '@chakra-ui/react'
import { useParams, useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { CiLock } from 'react-icons/ci'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Rooms } from '../PropertyLists/roomLists'

export default function ReservedRooms({ step, setStep }: StepProps) {
  const route = useRouter()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RoomProps>({})
  const toast = useToast()
  const params = useParams<{ id: string }>()

  const { data: rooms } = useGetRoomByPropertyIdQuery(
    '1a50e45a-e06d-4929-ba76-422734d91c24',
  )

  console.log('>>>>>rrooms', rooms)

  return (
    <div className="w-full lg:w-1/2 bg-white rounded-l-[40px] px-8 lg:px-14">
      <div className="mx-auto mt-16 max-w-[800px]">
        <p
          className={`${quickSand.className} text-left text-[#111827] text-3xl`}
        >
          Date of Stay
        </p>

        <p className="pt-8 text-[#10375C] font-semibold text-sm">Step 3 of 4</p>

        <div className={`${lato.className} space-y-8 pt-8`}>
          <div className="space-y-8">
            <div className="flex justify-between space-x-6 font-medium">
              <div className="w-full">
                <div className="w-full border-2 border-stone-300 flex p-2 mt-4 rounded-lg space-x-2">
                  <CiLock size={24} />
                  <span>Unlock private offers</span>
                </div>
              </div>
              <div className="w-full">
                <div className="w-full border-2 border-stone-300 flex p-2 mt-4 rounded-lg justify-between">
                  All Rooms
                  <MdKeyboardArrowDown size={24} />
                </div>
              </div>
            </div>

            <div className="space-y-8 h-[900px] overflow-scroll">
              {rooms?.map((p: RoomProps, index) => {
                return <Rooms data={p} key={index} />
              })}
            </div>

            <div className="flex space-x-6 ">
              <button
                type="submit"
                className="border-[#10375C] border  py-3 text-center w-full text-[#10375C] my-10 rounded-lg"
                onClick={() => setStep(step - 1)}
              >
                Go back
              </button>

              <button
                type="submit"
                className="bg-[#10375C] py-3 text-center w-full text-white my-10 rounded-lg"
                onClick={() => setStep(step + 1)}
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
