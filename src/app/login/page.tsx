'use client'

import InputField from '@/components/shared/Input'
import { useLoginMutation } from '@/features/auth'
import { useAppDispatch } from '@/features/store'
import { lato, quickSand } from '@/utils'
import { FormValues } from '@/utils/types'
import { Spinner, useToast } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'

export default function Login() {
  const toast = useToast()

  const router = useRouter()
  const dispatch = useAppDispatch()
  const [recaptchaValidation, setRecaptchaValidation] = useState(true)

  async function onChange() {
    setRecaptchaValidation(false)
  }

  const [login, { isLoading, error }] = useLoginMutation()

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>({})

  async function loginHandler(data: FormValues) {
    const _data = { router, ...data }
    login(_data)
  }

  return (
    <div className="flex justify-between h-screen">
      <div className="hidden lg:block w-1/2 bg-[#00525DB2]">
        <div className="px-24 mt-16">
          <Link href="/">
            <Image
              src="/whitelogo.svg"
              width={250}
              height={200}
              alt="bookteller"
            />
          </Link>

          <div className="mt-36">
            <Image src="/login.svg" width={400} height={400} alt="bookteller" />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 bg-white rounded-l-[40px] px-10 md:px-20">
        <Link href={'/'}>
          <img
            src="/bookteller.svg"
            alt=""
            className=" w-32 md:w-[200px] lg:hidden mt-10"
          />
        </Link>
        <div className="mx-auto mt-16 max-w-[500px]">
          <div className="flex space-x-6 justify-center items-center">
            <p
              className={`${quickSand.className} text-center text-[#111827] text-xl lg:text-3xl`}
            >
              Welcome back
            </p>
          </div>

          <form
            onSubmit={handleSubmit(loginHandler)}
            className={`${lato.className} space-y-6 mt-10 lg:mt-20`}
          >
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

            {/* <ReCAPTCHA
              sitekey="6LcjYTgqAAAAAP3hn9YT1sIPESxieOypWTqPqja8"
              onChange={onChange}
            /> */}

            <button
              type="submit"
              // disabled={recaptchaValidation}
              className="bg-primary-color py-3 text-center w-full text-white mt-10 rounded-lg"
            >
              {isLoading ? <Spinner /> : 'Sign In'}
            </button>
          </form>

          <p className="text-center pt-4 lato">
            Don't have an account?{' '}
            <Link href={'/signup'}>
              <span className=" text-[#F58634] underline">Sign up</span>
            </Link>{' '}
          </p>
        </div>
      </div>
    </div>
  )
}
