'use client'

import SharedLayout from '@/components/shared/SharedLayout'
import SuiteDetail from '@/components/SuiteDetail'
import { quickSand } from '@/utils'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { IoArrowForwardCircle } from 'react-icons/io5'

export default function Home() {
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
          content="Increase your direct bookings by 20% or more with Bookteller 
          Booking Engine without paying additional commissions."
        ></meta>
      </Head>

      <Script id="gtm-script" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W4QDRNNH');`}
      </Script>

      <Script id="gtm-script">{`fbq('track', 'PageView');`}</Script>

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-W4QDRNNH"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
      <SharedLayout>
        <div className={`pb-20 quicksand flex-grow`}>
          <section className="bg-[#F2F7FF] slanted">
            <div className="px-6 md:px-10 max-w-[1062px] mx-auto flex lg:pt-10 justify-between">
              <div className="pt-10 lg:pt-18 ">
                <div
                  className={`text-[#111827] tahoma font-black  tracking-wider  space-y-1 md:space-y-3.5`}
                >
                  <p className="text-base md:text-xl axiforma ">
                    Increase Your{' '}
                  </p>
                  <p className=" text-[24px] md:text-3xl lg:text-4xl roboto  xl:text-4xl font-extrabold uppercase">
                    Occupancy <span className="text-[#F58634]">Rate</span> with
                  </p>
                  <p className=" text-[24px] md:text-3xl lg:text-4xl xl:text-4xl uppercase roboto font-extrabold">
                    {' '}
                    <span className="text-[#F58634] roboto font-extrabold">
                      Direct
                    </span>{' '}
                    Bookings{' '}
                  </p>

                  <p className="text-base md:text-xl axiforma ">
                    No Commission Fees
                  </p>
                </div>

                <p className="lg:w-[60%] pt-6 text-base text-[#374151] font-medium  tracking-wider">
                  Increase your direct bookings by up to 20% with Bookteller
                  Booking Engine without paying additional commissions.  Make
                  your hotel's website your most effective source of
                  reservations. Reduce the income split with OTAs and other
                  partners as well.
                </p>

                <div className="flex justify-center items-center lg:items-start lg:justify-start ">
                  <Link
                    href={'/signup'}
                    className={`${quickSand.className} bg-_green  text-white text-sm  items-center  space-x-3 inline-flex py-3 px-8 rounded-[50px] mt-10 `}
                  >
                    <p>Get Started</p>
                    <IoArrowForwardCircle color="white" size={26} />
                  </Link>
                </div>

                <div className="  lg:hidden items-center mt-10 mx-auto">
                  <Image
                    src={'/phone.webp'}
                    width={300}
                    height={500}
                    alt="bg_img"
                    className="lg:block z-10 mx-auto"
                  />
                </div>
              </div>

              <div className=" w-full xl:mt-20 hidden lg:block">
                <Image
                  src={'/phone.webp'}
                  // width={300}
                  // height={800}
                  alt="bg_img"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className=" object-contain lg:pl-72  xl:ml-[11rem] mt-10 xl:mt-10 md:hidden lg:block z-10"
                />
              </div>

              <div className="mt-32">
                <Image
                  src="/sm-crop.png"
                  alt=""
                  width={200}
                  height={500}
                  className="graph hidden lg:block xl:hidden z-1 w-[30%]"
                  // fill
                  // priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  // className="object-contain"
                />
              </div>
            </div>
          </section>

          <section className="w-full relative lato px-8 lg:px-0  pt-10 ">
            <h3 className="text-lg lg:text-xl text-center font-bold uppercase ">
              SEAMLESS INTEGRATION WITH HOTEL WEBSITES
            </h3>
            <p className="text-center w-full max-w-3xl mx-auto text-sm lg:text-base pt-4">
              BTL (Bookteller) Engine easily integrates with your hotel’s
              existing website, providing a seamless booking experience for
              guests. The engine is designed to blend effortlessly with your
              site’s design, ensuring brand consistency and a smooth transition
              from browsing to booking.
            </p>

            {/* <p className="max-w-[400px] pt-6 mx-auto text-center text-sm lg:text-base">
            Increase Your Occupancy Rate with Direct Bookings
            <br />- No Commission Fees
          </p> */}

            <h3 className="text-lg lg:text-xl text-center font-bold pt-10 uppercase ">
              Why you need direct bookings
            </h3>

            <p className="text-center w-full max-w-2xl mx-auto pt-4 text-sm lg:text-base">
              Stay ahead of the competition by leveraging the power of Google
              travel products and Microsoft Maps to capture the attention of
              travelers and drive direct bookings to your properties.
            </p>

            <div className="grid grid-cols-1 px-2 lg:px-10 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-6 mt-14   max-w-5xl mx-auto">
              {/* <SuiteDetail
              img={'/bookPrice.svg'}
              title=" Innovate Continuously"
              subtitle="By leveraging cutting-edge technology, we aim to provide intuitive and efficient booking solutions that cater to the evolving needs of both travelers and hoteliers.
"
            /> */}
              <SuiteDetail
                img={'/personalize.svg'}
                title="Personalized Experience"
                subtitle="Direct booking lets guests communicate directly with the hotel, ensuring their needs and preferences are met. Whether it's room preferences, special requests, or additional amenities, this ensures satisfaction tailored to their stay."
              />
              <SuiteDetail
                img="/flex.svg"
                title="Flexibility and Transparency"
                subtitle="With direct booking, you have full control over your reservation, from making changes to cancellations. Enjoy peace of mind knowing that your booking details are transparent and easily accessible, without the hassle of intermediaries."
              />
              {/* <SuiteDetail
              img={'/access.svg'}
              title="Accept Secure Online Payments"
              subtitle=" Integrate a secured payment gateway into your website to provide quick, safe, and easy payment processing for you and your guests."
            /> */}
              <SuiteDetail
                img="/access.svg"
                title="Our Direct Booking Partners"
                subtitle="Stay ahead of the competition by leveraging the power of Google free booking links and Microsoft Maps to capture the attention of travelers and drive direct bookings to your properties."
              />
            </div>
          </section>

          <section className="bg-[#F2F7FF] mt-28">
            <div className="max-w-[1062px] mx-auto px-6 md:px-10 py-14 ">
              <h3 className="text-lg lg:text-[32px] roboto  font-bold text-center">
                Accept secure online payments.
              </h3>

              <p className="text-sm lg:text-base tahoma-light font-medium pt-4 lg:pt-6 text-center md:w-[60%] mx-auto">
                Integrate a secured payment gateway into your website to provide
                quick, safe, and easy payment processing for you and your guests
              </p>

              <div className="flex  justify-center space-x-4 md:space-x-10  items-center pt-6 ">
                <img
                  src="/paystack.svg"
                  alt="phone"
                  className="w-[130px] md:w-[200px] lg:w-[240px] "
                />

                <img
                  src="/flutter.svg"
                  alt="phone"
                  className="w-[130px] md:w-[200px]  lg:w-[240px]"
                />
              </div>
            </div>
          </section>

          <section className="max-w-[1062px] mx-auto bg-white mt-20 lg:mt-28 px-8 md:px-10">
            <h3 className="text-xl lg:text-[32px] roboto  font-bold text-center">
              Why you need direct bookings
            </h3>

            <p className="text-sm lg:text-[16px] tahoma-light font-medium pt-4 lg:pt-6 text-center md:w-[60%] mx-auto">
              Stay ahead of the competition by leveraging the power of Google
              free booking links and Microsoft Maps to capture the attention of
              travelers and drive direct bookings to your properties.
            </p>

            <div className="flex  justify-center space-x-4 md:space-x-10  items-center lg:pt-4 ">
              <img
                src="/google.svg"
                alt="phone"
                className="w-[130px] md:w-[200px] lg:w-[180px]  mt-10"
              />
              <img
                src="/microsoft.svg"
                alt="phone"
                className="w-[130px] md:w-[200px]  lg:w-[180px]  mt-10"
              />
            </div>
          </section>

          {/* <section className="max-w-[1062px] mx-auto px-6 md:px-10">
         
          <div className="mt-10 md:mt-28  w-full rounded-xl p-4 md:p-10 block lg:flex justify-between items-center shadow-[#ccc] shadow-sm md:space-x-4 text-[#667184] lato">
            <div className="w-full lg:w-4/12 text-[14px] lg:text-xl  font-semibold">
              <p className="">
                Start Investing in assets and business ideas today.
              </p>
            </div>

            <div className="w-full lg:w-8/12 mt-4 lg:mt-0 bg-[#F5F5F5] rounded-lg">
              <div className=" h-12 rounded-sm   flex text-sm ">
                <input
                  type="text"
                  className="w-8/12 px-4 bg-transparent outline-none text-[#969DAA]"
                  placeholder="Enter Your Phone Number"
                />

                <input
                  type="text"
                  className="w-8/12 py-2 px-4 my-1 outline-none text-black bg-[#FCFFFD]"
                  placeholder="Your email"
                />
                <button className="bg-[#1A2B47] px-2 md:w-3/12  rounded-sm text-white text-xs md:text-base font-bold">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </section> */}
        </div>
      </SharedLayout>
    </>
  )
}
