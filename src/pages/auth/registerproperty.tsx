import InputField from '@/components/Input'
import { lato, lato_bold, quickSand } from '@/utils/fonts'
import { FormValues } from '@/utils/types'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

export default function RegisterProperty() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({})

  function signupHandler(data: FormValues) {
    console.log('>>>>data', data)
  }

  return (
    <div className="flex justify-between h-screen content_bg">
      <div className="w-5/12 ">
        <div className="px-24 mt-16">
          <Link href={'/'}>
            <Image
              src="/whitelogo.svg"
              width={200}
              height={200}
              alt="bookteller"
            />
          </Link>

          <div
            className={`${lato_bold.className} text-5xl text-white font-bold mt-44`}
          >
            <p>Become </p>
            <p>future-ready</p>
          </div>

          <div
            className={`${lato.className} text-white text-xl leading-7 tracking-widest pt-10 `}
          >
            <p>Boost your online sales streamline,</p>
            <p>your operations, and engage with</p>
            <p> your guests.</p>
          </div>
        </div>
      </div>
      <div className=" w-7/12 bg-white rounded-l-[40px] px-20">
        <div className="mx-auto mt-16 max-w-[500px]">
          <p
            className={`${quickSand.className} text-center text-[#111827] text-3xl`}
          >
            Register your property here!
          </p>

          <p
            className={`${quickSand.className} text-left text-[#111827] text-xl pt-14 py-4`}
          >
            Your property details
          </p>

          <form
            onSubmit={handleSubmit(signupHandler)}
            className={`${lato.className} space-y-8`}
          >
            <InputField
              name="propertyName"
              label="Property Name"
              type="text"
              register={register}
              required
              placeHolder="Enter first name"
              // message={errors?.firstName}
            />

            <div className="flex space-x-8">
              <InputField
                name="lastName"
                label="Property Type"
                type="text"
                register={register}
                required
                placeHolder="Enter last name"
                // message={errors?.lastName?.message}
              />
              <InputField
                name="lastName"
                label="Number of rooms"
                type="text"
                register={register}
                required
                placeHolder="Enter last name"
                // message={errors?.lastName?.message}
              />
            </div>

            <div className="flex space-x-8">
              <InputField
                name="country"
                label="Country"
                type="text"
                register={register}
                required
                placeHolder="Enter last name"
                // message={errors?.lastName?.message}
              />
              <InputField
                name="city"
                label="City"
                type="text"
                register={register}
                required
                placeHolder="Enter last name"
                // message={errors?.lastName?.message}
              />
            </div>

            <p
              className={`${quickSand.className} text-left text-[#111827] text-xl pt-3 `}
            >
              Contact Information
            </p>

            <div className="flex space-x-8">
              <InputField
                name="country"
                label="First Name"
                type="text"
                register={register}
                required
                placeHolder="Enter last name"
                // message={errors?.lastName?.message}
              />
              <InputField
                name="city"
                label="Last Name"
                type="text"
                register={register}
                required
                placeHolder="Enter last name"
                // message={errors?.lastName?.message}
              />
            </div>

            <div className="flex space-x-8 mb-10">
              <InputField
                name="country"
                label="Email"
                type="text"
                register={register}
                required
                placeHolder="Enter last name"
                // message={errors?.lastName?.message}
              />
              <InputField
                name="city"
                label="Phone"
                type="text"
                register={register}
                required
                placeHolder="Enter last name"
                // message={errors?.lastName?.message}
              />
            </div>

            <div className="">
              <button
                type="submit"
                className="bg-primary-color py-3 text-center w-full text-white mt-12 rounded-lg"
              >
                Register Property
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
