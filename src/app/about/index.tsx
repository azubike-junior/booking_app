'use client'

import SharedLayout from '@/components/shared/SharedLayout'
import { quickSand } from '@/utils/index'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import { IoArrowForwardCircle } from 'react-icons/io5'
import { PiMinusCircleDuotone } from 'react-icons/pi'

export default function AboutPage() {
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
          content="Our BTL Engine integrates with Google's free booking link, and 
        ensures a seamless booking experience for travelers searching to book your property."
        />
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
        <div className={`pb-20`}>
          <section className="bg-white">
            <div className="px-6 md:px-10 max-w-[1062px]  mx-auto  lg:flex lg:pt-4 justify-between lg:space-x-10 space-y-10 lg:space-y-0 ">
              <div className="pt-10 lg:w-1/2">
                <div
                  className={`text-[#111827] text-[24px] roboto font-bold lg:text-3xl xl:text-4xl tracking-wider space-y-3`}
                >
                  <p>About us</p>
                </div>

                <p className="w-full pt-6 text-sm text-[#374151] tahoma-light font-light tracking-wider">
                  BTL Engine (Bookteller Engine) is a state-of-the-art hotel
                  booking engine developed by Bookteller, specifically designed
                  to help hotels attract more direct bookings, reduce reliance
                  on third-party platforms, and boost revenue. The engine is
                  built with cutting-edge technology, ensuring seamless
                  integration with hotel websites, an intuitive user experience,
                  and powerful management tools.
                </p>

                <p className="w-full pt-6 text-sm text-[#374151] tahoma-light font-light tracking-wider">
                  One of the most notable features of BTL Engine is its
                  integration with Google's free booking link. We are a
                  Microsoft hotel ads expert and a Google Hotel connectivity
                  partner, and our expertise is in enabling hotels to optimise
                  their online presence. This feature improves the visibility of
                  your hotel on Google's meta-search engine, thereby increasing
                  the probability of securing direct reservations and driving
                  more traffic to your direct booking channel.
                </p>

                <Link
                  href={'/signup'}
                  className={`${quickSand.className} bg-_green  text-white text-sm  items-center  space-x-3 inline-flex py-3 px-8 rounded-[50px] mt-10 `}
                >
                  <p>Get Started</p>
                  <IoArrowForwardCircle color="white" size={26} />
                </Link>
              </div>

              <div className="lg:w-1/2 pt-14">
                <img
                  src="/about2.png"
                  alt=""
                  className=" about-img lg:block z-1 w-[30%]"
                />
              </div>
            </div>
          </section>
          <section className="max-w-[1062px] md:flex  mx-auto bg-white mt-28 px-6 md:px-10 md:space-x-6">
            <div>
              <h3
                className={`text-[#111827] text-[18px] roboto font-bold lg:text-xl tracking-wider space-y-3`}
              >
                Our Mission
              </h3>

              <p className="pt-3 tracking-wide font-medium tahoma-light text-sm">
                Commitment to transforming how travelers connect with
                accommodations, ensuring a seamless and enjoyable booking
                experience for everyone, everywhere.
              </p>
            </div>

            <div className='pt-6 md:pt-0'>
              <h3
                className={`text-[#111827] text-[18px] roboto font-bold lg:text-xl tracking-wider space-y-3`}
              >
                Our Vision
              </h3>

              <p className="pt-3 tracking-wide font-medium tahoma-light text-sm">
                To become the go-to destination for travelers worldwide,
                ensuring they find and book accommodations with ease,
                confidence, and satisfaction every time.
              </p>

              {/* <p className="pt-6 tracking-wide font-medium tahoma-light">
              We remain committed to supporting your business in every possible
              ramification either through face-to-face transactions or
              facilitating seamless payments across continents. PPOS remains
              your trusted and transparent payment processor.
            </p> */}
            </div>
          </section>

          <section className="bg-[#F2F7FF] mt-28 py-20">
            <div className="px-6 md:px-10 max-w-[1062px]  mx-auto  lg:flex lg:py-14 justify-between lg:space-x-10 space-y-10 lg:space-y-0 ">
              <div className="lg:w-1/2">
                <img
                  src="/faq.png"
                  alt=""
                  className=" about-img lg:block z-1 w-[30%]"
                />
              </div>
              <div className=" lg:w-1/2">
                <h3
                  className={`text-[#111827] text-[24px] roboto font-bold text-lg lg:text-2xl xl:text-3xl tracking-wider space-y-3`}
                >
                  Frequently asked questions
                </h3>

                <div className="pt-8 quicksand">
                  <Accordion allowMultiple>
                    <AccordionItem>
                      {({ isExpanded }) => (
                        <div className="border-[#F58634] border-l">
                          <h2>
                            <AccordionButton>
                              <Box
                                as="span"
                                flex="1"
                                textAlign="left"
                                className={`${
                                  isExpanded ? 'text-[#F58634]' : ''
                                } font-bold py-3`}
                              >
                                What is the Bookteller Engine?
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            The Bookteller Engine is a powerful hotel booking
                            engine designed to help hotels manage bookings
                            directly from travelers worldwide. It offers
                            seamless integration, real-time availability, and
                            secure payment options, ensuring a smooth booking
                            experience for both hotels and guests.
                          </AccordionPanel>
                        </div>
                      )}
                    </AccordionItem>

                    <AccordionItem>
                      {({ isExpanded }) => (
                        <div className="border-[#F58634] border-l">
                          <h2>
                            <AccordionButton>
                              <Box
                                as="span"
                                flex="1"
                                textAlign="left"
                                className={`${
                                  isExpanded ? 'text-[#F58634]' : ''
                                } font-bold py-3`}
                              >
                                How does Bookteller Engine help increase direct
                                bookings ?
                              </Box>
                              {isExpanded ? (
                                <PiMinusCircleDuotone fontSize="12px" />
                              ) : (
                                <p>+</p>
                              )}
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            Bookteller Engine connects hotels directly with
                            travelers, bypassing third-party platforms and
                            reducing commission fees. With features like dynamic
                            pricing, special offers, and instant booking
                            confirmations, it drives more direct bookings,
                            maximizing your hotel’s revenue.
                          </AccordionPanel>
                        </div>
                      )}
                    </AccordionItem>

                    <AccordionItem>
                      {({ isExpanded }) => (
                        <div className="border-[#F58634] border-l">
                          <h2>
                            <AccordionButton>
                              <Box
                                as="span"
                                flex="1"
                                textAlign="left"
                                className={`${
                                  isExpanded ? 'text-[#F58634]' : ''
                                } font-bold py-3`}
                              >
                                Is Bookteller Engine easy to integrate with my
                                hotel’s existing website?
                              </Box>
                              {isExpanded ? (
                                <PiMinusCircleDuotone fontSize="12px" />
                              ) : (
                                <p>+</p>
                              )}
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            Yes, the Bookteller Engine is designed for easy
                            integration with any hotel website. Our team
                            provides full support during the setup process,
                            ensuring your booking system is up and running
                            smoothly without disrupting your current operations.
                          </AccordionPanel>
                        </div>
                      )}
                    </AccordionItem>
                    <AccordionItem>
                      {({ isExpanded }) => (
                        <div className="border-[#F58634] border-l">
                          <h2>
                            <AccordionButton>
                              <Box
                                as="span"
                                flex="1"
                                textAlign="left"
                                className={`${
                                  isExpanded ? 'text-[#F58634]' : ''
                                } font-bold py-3`}
                              >
                                Can I manage bookings and cancellations through
                                the Bookteller Engine?
                              </Box>
                              {isExpanded ? (
                                <PiMinusCircleDuotone fontSize="12px" />
                              ) : (
                                <p>+</p>
                              )}
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            Absolutely! Bookteller Engine offers a comprehensive
                            management dashboard where you can handle bookings,
                            cancellations, and modifications in real-time.
                            You’ll receive instant notifications for any
                            changes, keeping your booking records accurate and
                            up-to-date.
                          </AccordionPanel>
                        </div>
                      )}
                    </AccordionItem>
                    <AccordionItem>
                      {({ isExpanded }) => (
                        <div className="border-[#F58634] border-l">
                          <h2>
                            <AccordionButton>
                              <Box
                                as="span"
                                flex="1"
                                textAlign="left"
                                className={`${
                                  isExpanded ? 'text-[#F58634]' : ''
                                } font-bold py-3`}
                              >
                                Does Bookteller Engine support multiple payment
                                options?
                              </Box>
                              {isExpanded ? (
                                <PiMinusCircleDuotone fontSize="12px" />
                              ) : (
                                <p>+</p>
                              )}
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            Yes, Bookteller Engine supports a variety of payment
                            methods, including credit/debit cards, mobile
                            payments, and online transfers. Guests can also
                            choose to pay upon arrival, providing flexibility
                            and convenience.
                          </AccordionPanel>
                        </div>
                      )}
                    </AccordionItem>
                    <AccordionItem>
                      {({ isExpanded }) => (
                        <div className="border-[#F58634] border-l">
                          <h2>
                            <AccordionButton>
                              <Box
                                as="span"
                                flex="1"
                                textAlign="left"
                                className={`${
                                  isExpanded ? 'text-[#F58634]' : ''
                                } font-bold py-3`}
                              >
                                Is there customer support available for
                                Bookteller Engine users?
                              </Box>
                              {isExpanded ? (
                                <PiMinusCircleDuotone fontSize="12px" />
                              ) : (
                                <p>+</p>
                              )}
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            Yes, Bookteller Engine offers 24/7 customer support
                            to assist with any technical issues or questions you
                            may have. Our dedicated team is always ready to help
                            ensure that your booking engine operates smoothly
                            and efficiently.
                          </AccordionPanel>
                        </div>
                      )}
                    </AccordionItem>
                    <AccordionItem>
                      {({ isExpanded }) => (
                        <div className="border-[#F58634] border-l">
                          <h2>
                            <AccordionButton>
                              <Box
                                as="span"
                                flex="1"
                                textAlign="left"
                                className={`${
                                  isExpanded ? 'text-[#F58634]' : ''
                                } font-bold py-3`}
                              >
                                How secure is the Bookteller Engine for handling
                                guest data?
                              </Box>
                              {isExpanded ? (
                                <PiMinusCircleDuotone fontSize="12px" />
                              ) : (
                                <p>+</p>
                              )}
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4}>
                            The Booteller Engine is built with advanced security
                            protocols to protect guest data. All transactions
                            are encrypted, and we comply with international data
                            protection standards, ensuring that your guests’
                            information is safe and secure.
                          </AccordionPanel>
                        </div>
                      )}
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </section>
        </div>
      </SharedLayout>
    </>
  )
}
