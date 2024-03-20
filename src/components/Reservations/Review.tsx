import { useGetRoomByPropertyIdQuery } from '@/features/property'
import { RoomProps } from '@/utils/types'
import { useToast } from '@chakra-ui/react'
import { useParams, useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

export default function Review() {
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
          className={`quicksand text-left text-[#111827] text-3xl`}
        >
          Your reservation
        </p>

        <p className="pt-8 text-[#10375C] font-semibold text-sm">Step 4 of 4</p>

        <div className={`lato space-y-8 pt-8`}>
          <div className="space-y-8 font-semibold">
            <p>
              Confirmation Number:{' '}
              <span className="text-[#10375C]">#joedoe20001777</span>
            </p>

            <p>
              Date of stay:{' '}
              <span className="text-[#10375C]">
                3rd February, 2024 - 4th March, 2024
              </span>
            </p>

            <p className="flex justify-between">
              Classic Room: 1 Room
              <span className="text-[#10375C]">$ 2,689.00</span>
            </p>

            <p className="flex justify-between">25 Nights, 2 Adults</p>

            <p className="flex justify-between border-b border-slate-500">
              Sub Total:
              <span className="text-[#10375C]">$ 2,689.00</span>
            </p>

            <p className="flex justify-between">
              Tax Fee:
              <span className="text-[#10375C]">$ 289.00</span>
            </p>

            <p className="flex justify-between border-b border-slate-500">
              Service Fee:
              <span className="text-[#10375C]">$ 2,689.00</span>
            </p>

            <p className="flex justify-between">
              Total:
              <span className="text-[#10375C]">$ 2,689.00</span>
            </p>

            

              <button
                type="submit"
                className="bg-[#10375C] py-3 text-center w-full text-white my-10 rounded-lg"
              >
               Start a new reservation
              </button>
         
          </div>
        </div>
      </div>
    </div>
  )
}
