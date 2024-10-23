'use client'

import InputField from '@/components/shared/Input'
import { useCreateAccountMutation } from '@/features/auth'
import { FormValues } from '@/utils/types'
import { Alert, AlertIcon, Spinner, useToast } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Script from 'next/script'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'

export default function SignupPage() {
  const router = useRouter()
  const toast = useToast()
  const [recaptchaValidation, setRecaptchaValidation] = useState(true)

  const [
    createAccount,
    { isLoading, data: response, error, isError },
  ] = useCreateAccountMutation()

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset
  } = useForm<FormValues>({})

  const password = watch('password')

  async function onChange() {
    setRecaptchaValidation(false)
  }

  async function signupHandler(data: FormValues) {
    const { confirmPassword, ..._data } = data
    const updated = { toast, router, country_code: '+234', ..._data}
    createAccount(updated)
  }

  return (
    <>
      <Head>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1150219128782889&ev=PageView&noscript=1"
          />
        </noscript>

        <meta
          name="keywords"
          content="hotel booking engine, free booking engine, Booking engine 
          for hotels, booking engine examples, direct booking site, Booking extranet, hotel booking 
          discount, Hotels deals, commission free booking, book direct"
        />

        <meta
          name="description"
          content="Create your free Bookteller Engine account today and experience the benefits first hand"
        ></meta>
      </Head>

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-W4QDRNNH"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
      <Script id="gtm-script" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W4QDRNNH');`}
      </Script>
      <Script id="gtm-script">{`fbq('track', 'PageView');`}</Script>

      <div className="flex justify-between h-screen">
        <div className="hidden lg:block w-1/2 top-0 bottom-0  bg-[#00525DB2] lg:fixed ">
          <div className="px-24 mt-16">
            <Link href={'/'}>
              <Image
                src="/white.png"
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
        <div className="w-full lg:w-1/2 lg:ml-[50%] bg-white rounded-l-[40px] px-8 lg:px-20">
          {response && (
            <Alert status="success" className="pt-6">
              <AlertIcon />
              <p>
                A Verification email has been sent to your email inbox, please
                verify your email
              </p>
            </Alert>
          )}

          <Link href={'/'}>
            <img
              src="/bookteller.svg"
              alt=""
              className=" w-32 md:w-[200px] lg:hidden mt-10"
            />
          </Link>

          <div className="mx-auto my-16 max-w-[500px]">
            <div className="flex justify-center space-x-6 items-center">
              <p
                className={`quicksand text-center text-[#111827] text-xl lg:text-3xl`}
              >
                Create Your Bookteller Account
              </p>
            </div>

            <form
              onSubmit={handleSubmit(signupHandler)}
              className={`lato space-y-6 my-10 lg:mt-10`}
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

              <ReCAPTCHA
                sitekey="6LcjYTgqAAAAAP3hn9YT1sIPESxieOypWTqPqja8"
                onChange={onChange}
              />

              <button
                type="submit"
                disabled={recaptchaValidation}
                className="bg-primary-color py-3 text-center w-full text-white mt-10 rounded-lg"
              >
                {isLoading ? <Spinner /> : 'Create Account'}
              </button>

              <p className="text-center lato">
                Already have an account?{' '}
                <Link href={'/login'}>
                  <span className=" text-[#F58634] underline">Login</span>
                </Link>{' '}
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
