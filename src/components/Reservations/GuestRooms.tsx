import { lato, quickSand } from '@/utils'
import { RoomProps, StepProps } from '@/utils/types'
import { Checkbox, useToast } from '@chakra-ui/react'
import { useParams, useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import InputField, { SelectField } from '../shared/Input'

export default function GuestRooms({step, setStep} : StepProps) {
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
          className={`${quickSand.className} text-left text-[#111827] text-3xl`}
        >
          Guests & Rooms
        </p>

        <p className="pt-14 text-[#10375C] font-semibold text-sm">
          Step 1 of 4
        </p>

        <form className={`${lato.className} space-y-8 pt-14`}>
          <div className="space-y-8">
            <SelectField
              label="Adults"
              register={register}
              selectArray={[]}
              type=""
              name="adults"
              required
            />

            <SelectField
              label="Children"
              register={register}
              selectArray={[]}
              type=""
              name="children"
              required
            />

            <div>
              <SelectField
                label="Code (optional)"
                register={register}
                selectArray={[]}
                type=""
                name="children"
                required
              />

              <InputField
                name="name"
                label=""
                type="text"
                register={register}
                required
                placeHolder="Enter code number"
                errors={errors?.name}
                message={' Name is required'}
              />
            </div>

            <Checkbox
              // onChange={handleCheckboxChange}
              // isChecked={checks.wakeup_call}
              className='py-6'
              name=""
              colorScheme="blue"
            >
              Add a room
            </Checkbox>

            <button
              type="submit"
              className="bg-[#10375C] py-3 text-center w-full text-white my-10 rounded-lg"
              onClick={() => setStep(step + 1)}
            >
              Proceed
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
