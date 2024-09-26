'use client'

import InputField from '@/components/shared/Input/index'
import SharedLayout from '@/components/shared/SharedLayout'
import { useContactUsMutation } from '@/features/auth'
import { quickSand } from '@/utils/index'
import { FormValues } from '@/utils/types'
import { Spinner } from '@chakra-ui/react'
import Head from 'next/head'
import Script from 'next/script'
import { useForm } from 'react-hook-form'

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<FormValues>({})

  const [submitContact, { isLoading }] = useContactUsMutation()

  const submitForm = (data: FormValues) => {
    submitContact(data)
    reset()
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
          content="Contact us today as our friendly team would love to show you 
        a demo designed just for your hotel brand."
        ></meta>
      </Head>

      <Script id="gtm-script">{`fbq('track', 'PageView');`}</Script>
      <Script id="gtm-script" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W4QDRNNH');`}
      </Script>

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-W4QDRNNH"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
      <SharedLayout>
        <Script
          id="script"
          src="https://static.elfsight.com/platform/platform.js"
          data-use-service-core
          defer
        >
          {/* <script
          src="https://static.elfsight.com/platform/platform.js"
          data-use-service-core
          defer
        ></script> */}
          <div
            className="elfsight-app-88645a73-887a-4718-890a-20f925c87145"
            data-elfsight-app-lazy
          ></div>
        </Script>
        <div className={`pb-20 quicksand`}>
          <form
            onSubmit={handleSubmit(submitForm)}
            className="bg-[#F2F7FF] pb-28"
          >
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
                      name="first_name"
                      label="First name"
                      type="text"
                      register={register}
                      required
                      placeHolder="Enter first name"
                      errors={errors?.first_name}
                      message={'First name is required'}
                    />

                    <InputField
                      name="last_name"
                      label="Last name"
                      type="text"
                      register={register}
                      required
                      errors={errors?.last_name}
                      placeHolder="Enter last name"
                      message={' Last name is required'}
                    />
                  </div>

                  <InputField
                    name="email"
                    label="Email Address"
                    type="text"
                    register={register}
                    required
                    placeHolder="Enter email"
                    errors={errors?.email}
                    message={' Email is required'}
                  />

                  <InputField
                    name="phone_number"
                    label="Phone number"
                    type="number"
                    register={register}
                    required
                    placeHolder="Enter phone number"
                    errors={errors?.phone_number}
                    message={' Phone number is required'}
                  />

                  <InputField
                    textarea
                    name="message"
                    label="Message"
                    type="text"
                    register={register}
                    required
                    placeHolder="Enter email"
                    errors={errors?.message}
                    message={'A message is required'}
                  />
                </div>

                <button
                  className={`${quickSand.className} bg-_green  text-white text-sm  items-center flex  space-x-3 justify-center py-3 px-8 rounded-[10px] mt-10 w-full`}
                >
                  <p>{isLoading ? <Spinner /> : 'Submit'}</p>
                </button>
              </div>

              <div className="lg:w-1/2 pt-10">
                <img
                  src="/contact.png"
                  alt=""
                  className=" about-img lg:block z-1  h-full"
                />
              </div>
            </div>
          </form>
        </div>
      </SharedLayout>
    </>
  )
}
