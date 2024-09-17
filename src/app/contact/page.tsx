'use client'

import InputField from '@/components/shared/Input/index'
import SharedLayout from '@/components/shared/SharedLayout'
import { quickSand } from '@/utils/index'
import { FormValues } from '@/utils/types'
import { useForm } from 'react-hook-form'

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>({})

  return (
    <SharedLayout>
      <div className={`pb-20 quicksand`}>
        <section className="bg-[#F2F7FF] pb-28">
          <div className="px-6 md:px-10 max-w-[1062px] mx-auto pt-6 lg:flex lg:pt-4 justify-between lg:space-x-10 block">
            <div className="pt-2 lg:w-1/2">
              <div
                className={`text-[#111827] text-[24px] roboto font-bold lg:text-3xl xl:text-4xl tracking-wider space-y-3`}
              >
                <p>Get in touch</p>
              </div>

              <p className="w-full pt-4 text-lg text-[#374151] tahoma-light font-light tracking-wider">
                Our friendly team would love to hear from you.
              </p>

              <div className="space-y-3 lg:space-y-6 pt-10">
                <div className="block space-y-3 lg:space-y-0  lg:flex lg:space-x-8">
                  <InputField
                    name="phone_number"
                    label="First name"
                    type="text"
                    register={register}
                    required
                    placeHolder="Enter first name"
                    message={'Phone is required'}
                  />

                  <InputField
                    name="email_address"
                    label="Last name"
                    type="text"
                    register={register}
                    required
                    placeHolder="Enter email"
                    message={' Email is required'}
                  />
                </div>

                <InputField
                  name="email_address"
                  label="Email Address"
                  type="text"
                  register={register}
                  required
                  placeHolder="Enter email"
                  message={' Email is required'}
                />

                <InputField
                  name="email_address"
                  label="Phone number"
                  type="text"
                  register={register}
                  required
                  placeHolder="Enter email"
                  message={' Email is required'}
                />

                <InputField
                  textarea
                  name="email_address"
                  label="Message"
                  type="text"
                  register={register}
                  required
                  placeHolder="Enter email"
                  message={' Email is required'}
                />
              </div>

              <div
                className={`${quickSand.className} bg-_green  text-white text-sm  items-center flex  space-x-3 justify-center py-3 px-8 rounded-[10px] mt-10 w-full`}
              >
                <p>Submit</p>
              </div>
            </div>

            <div className="lg:w-1/2 pt-10">
              <img
                src="/contact.png"
                alt=""
                className=" about-img lg:block z-1  h-full"
              />
            </div>
          </div>
        </section>
      </div>
    </SharedLayout>
  )
}
