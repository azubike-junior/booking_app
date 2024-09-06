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
        <div className="mx-auto mt-16 max-w-[500px]">
          <p
            className={`${quickSand.className} text-center text-[#111827] text-3xl`}
          >
            Welcome back
          </p>

          {/* <div className="border border-[#96A0A5]  space-x-2 flex justify-center items-center py-2 mt-16 rounded-lg">
            <Image src="/googlee.svg" width={22} height={22} alt="bookteller" />
            <p className={`${quickSand.className} text-xs`}>
              Sign up with Google
            </p>
          </div>

          <p
            className={`${quickSand.className} text-center text-[#717E83] pt-10 pb-6`}
          >
            OR
          </p> */}

          <form
            onSubmit={handleSubmit(loginHandler)}
            className={`${lato.className} space-y-6 mt-20`}
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

            <ReCAPTCHA
              sitekey="6LcjYTgqAAAAAP3hn9YT1sIPESxieOypWTqPqja8"
              onChange={onChange}
            />

            <button
              type="submit"
              disabled={recaptchaValidation}
              className="bg-primary-color py-3 text-center w-full text-white mt-10 rounded-lg"
            >
              {isLoading ? <Spinner /> : 'Sign In'}
            </button>
          </form>

          <Link href={'/signup'}>
            <p className="text-right pt-2">Sign up</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
