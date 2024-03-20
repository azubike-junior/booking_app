import { useGetRoomByPropertyIdQuery } from '@/features/property'
import { PropertyProp, StepProps } from '@/utils/types'
import { useToast } from '@chakra-ui/react'
import { useParams, useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import InputField from '../shared/Input'

export default function GuestInfo({ step, setStep }: StepProps) {
  const route = useRouter()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<PropertyProp>({})
  const toast = useToast()
  const params = useParams<{ id: string }>()

  const { data: rooms } = useGetRoomByPropertyIdQuery(
    '1a50e45a-e06d-4929-ba76-422734d91c24',
  )

  return (
    <div className="w-full lg:w-1/2 bg-white rounded-l-[40px] px-8 lg:px-14">
      <div className="mx-auto mt-16 max-w-[800px]">
        <p
          className={`quicksand text-left text-[#111827] text-3xl`}
        >
          Guest Information
        </p>

        <p className="pt-8 text-[#10375C] font-semibold text-sm">Step 4 of 4</p>

        <form
          // onSubmit={handleSubmit(propertyHandler)}
          className={`lato space-y-8 pt-14`}
        >
          <InputField
            name="name"
            label="Name"
            type="text"
            register={register}
            required
            placeHolder="Enter name"
            errors={errors?.name}
            message={' Name is required'}
          />

          <InputField
            name="address"
            label="Address"
            type="text"
            register={register}
            required
            placeHolder="Enter address"
            errors={errors?.address}
            message={'Address is required'}
          />

          <InputField
            name="phone_number"
            label="Phone Number"
            type="text"
            register={register}
            required
            placeHolder="Enter first name"
            errors={errors?.phone_number}
            message={'Phone is required'}
          />

          <InputField
            name="email_address"
            label="Email Address"
            type="text"
            register={register}
            required
            placeHolder="Enter email"
            errors={errors?.email_address}
            message={' Email is required'}
          />
          <InputField
            name="web_address"
            label="Web address"
            type="text"
            register={register}
            required
            placeHolder="Enter first name"
            errors={errors?.web_address}
            message={'Web address is required'}
          />

          <div className="block space-y-6 lg:space-y-0  lg:flex lg:space-x-8">
            <InputField
              name="number_of_rooms"
              label="Number of rooms"
              type="number"
              register={register}
              required
              placeHolder="Enter last name"
              errors={errors?.number_of_rooms}
              message={'Number of rooms is required'}
            />
            <InputField
              name="text_color"
              label="Text Color"
              type="text"
              register={register}
              required
              placeHolder="Enter last name"
              errors={errors?.text_color}
              message={'Text color is required'}
            />
          </div>

          <div className="block space-y-6 lg:space-y-0  lg:flex lg:space-x-8">
            <InputField
              name="primary_color"
              label="Primary Color"
              type="text"
              register={register}
              required
              placeHolder="Enter last name"
              errors={errors?.primary_color}
              message={'Primary color is required'}
            />
            <InputField
              name="secondary_color"
              label="Secondary Color"
              type="text"
              register={register}
              required
              placeHolder="Enter last name"
              errors={errors?.secondary_color}
              message={'Secondary color is required'}
            />
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
        </form>
      </div>
    </div>
  )
}
