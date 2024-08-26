'use client'

import InputField from '@/components/shared/Input'
import { useCreateAccountMutation } from '@/features/auth'
import { handleErrorResponse, handleSuccessResponse } from '@/utils'
import { FormValues } from '@/utils/types'
import { Spinner, useToast } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

export default function Signup() {
  const router = useRouter()
  const toast = useToast()
  const [
    createAccount,
    { isLoading, data: response, error, isError },
  ] = useCreateAccountMutation()

  // console.log(">>>>>isError", error, isError);
  

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>({})

  const password = watch('password')

  async function signupHandler(data: FormValues) {
    const { confirmPassword, ..._data } = data
    const updated = { toast, router, country_code: '+234', ..._data }
    createAccount(updated)
      // .unwrap()
      // .then((payload) => {})
      // .catch((error) => {
      //   toast({
      //     title: error?.data.error,
      //     description: '',
      //     status: 'error',
      //     duration: 9000,
      //     isClosable: true,
      //     position: 'top-right',
      //   })
      // })
  }

  return (
    <div className="flex justify-between h-screen">
      <div className="hidden lg:block w-1/2  bg-[#00525DB2] ">
        <div className="px-24 mt-16">
          <Link href={'/'}>
            <Image
              src="/whitelogo.svg"
              width={250}
              height={200}
              alt="bookteller"
            />
          </Link>

          <div className="mt-36">
            <Image
              src="/signup.svg"
              width={400}
              height={400}
              alt="bookteller"
            />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 bg-white rounded-l-[40px] px-8 lg:px-20">
        <div className="mx-auto mt-16 max-w-[500px]">
          <p className={`quicksand text-center text-[#111827] text-3xl`}>
            Create Account
          </p>

          {/* <div className="border border-[#96A0A5]  space-x-2 flex justify-center items-center py-2 mt-12 rounded-lg">
            <Image src="/googlee.svg" width={22} height={22} alt="bookteller" />
            <p className={`quicksand text-xs`}>
              Sign up with Google
            </p>
          </div>

          <p
            className={`quicksand text-center text-[#717E83] pt-6 pb-6`}
          >
            OR
          </p> */}

          <form
            onSubmit={handleSubmit(signupHandler)}
            className={`lato space-y-6 mt-20`}
          >
            <div className="block space-y-6 lg:space-y-0 lg:flex lg:space-x-6">
              <InputField
                name="firstname"
                label="First Name"
                type="text"
                register={register}
                required
                placeHolder="Enter first name"
                errors={errors?.firstname}
                message={'First Name is required'}
              />

              <InputField
                name="lastname"
                label="Last Name"
                type="text"
                register={register}
                required
                placeHolder="Enter last name"
                errors={errors?.lastname}
                message={'Last Name is required'}
              />
            </div>

            <InputField
              name="phonenumber"
              label="Phone"
              type="number"
              register={register}
              required
              placeHolder="Enter phone number"
              errors={errors?.phonenumber}
              message={'Phone is required'}
            />

            <InputField
              name="email"
              label="Email Address"
              type="email"
              register={register}
              required
              placeHolder="Enter email address"
              errors={errors?.email}
              message={'Email is required'}
            />

            <InputField
              name="password"
              label="Password"
              type="password"
              register={register}
              required
              placeHolder="Enter Password"
              errors={errors?.password}
              message={'Password is required'}
            />

            <InputField
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              register={register}
              errors={errors?.confirmPassword}
              required={watch('confirmPassword') === watch('password')}
              placeHolder="Confirm your password"
              message="Password do not match"
              validate={(value: any) =>
                value === password || 'Password do not match'
              }
            />

            <button
              type="submit"
              className="bg-primary-color py-3 text-center w-full text-white mt-10 rounded-lg"
            >
              {isLoading ? <Spinner /> : 'Create Account'}
            </button>
            <Link href={'/login'}>
              <p className="text-right pt-2">Login</p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}
