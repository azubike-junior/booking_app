import { RoomProps, StepProps } from '@/utils/types'
import {  useToast } from '@chakra-ui/react'
import { useParams, useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

export default function DateOfStay({step, setStep} : StepProps) {
  const route = useRouter()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RoomProps>({})
  const toast = useToast()
  const params = useParams<{ id: string }>()

  return (
    <div className="w-full lg:w-1/2 bg-white rounded-l-[40px] px-8 lg:px-14">
      <div className="mx-auto mt-16 max-w-[800px]">
        <p
          className={`quicksand text-left text-[#111827] text-3xl`}
        >
          Date of Stay
        </p>

        <p className="pt-14 text-[#10375C] font-semibold text-sm">
          Step 2 of 4
        </p>

        <form className={`lato space-y-8 pt-14`}>
          <div className="space-y-8">
            <div className="flex justify-between space-x-6 font-semibold">
              <div className="w-full">
                Check in:{' '}
                <span className="text-[#10375C] pl-2">February 3rd, 2024</span>
                <div className="w-full border-2 border-stone-300 flex p-1 mt-4 rounded-lg">
                  <input
                    type="date"
                    placeholder="Check in"
                    className="flex-1 p-2 outline-none border-none"
                  />
                  {/* <CiCalendarDate size={24} /> */}
                </div>
              </div>
              <div className="w-full">
                Check out:{' '}
                <span className="text-[#10375C] pl-2">February 3rd, 2024</span>
                <div className="w-full border-2 border-stone-300 flex p-1 mt-4 rounded-lg">
                  <input
                    type="date"
                    placeholder="Check in"
                    className="flex-1 p-2"
                  />
                  {/* <CiCalendarDate size={24} /> */}
                </div>
              </div>
            </div>

            <div className='flex space-x-6 '>
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
        </form>
      </div>
    </div>
  )
}
