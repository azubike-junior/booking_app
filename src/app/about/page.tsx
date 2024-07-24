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
import { IoArrowForwardCircle } from 'react-icons/io5'
import { PiMinusCircleDuotone } from 'react-icons/pi'

export default function About() {
  return (
    <SharedLayout>
      <div className={`pb-20`}>
        <section className="bg-white">
          <div className="px-6 md:px-10 max-w-[1062px]  mx-auto  lg:flex lg:pt-10 justify-between lg:space-x-10 space-y-10 lg:space-y-0 ">
            <div className="pt-10 lg:w-1/2">
              <div
                className={`text-[#111827] text-[24px] roboto font-bold lg:text-3xl xl:text-4xl tracking-wider space-y-3`}
              >
                <p>About us</p>
              </div>

              <p className="w-full pt-6 text-lg text-[#374151] tahoma-light font-light tracking-wider">
                Bookteller Nigeria is a prime provider of innovative solutions
                in the hospitality industry. As a Google Hotel connectivity
                partner and Microsoft hotel ads expert, we specialize in
                empowering hotels to optimize their online presence and maximize
                direct bookings from travelers worldwide.
              </p>

              <p className="w-full pt-6 text-lg text-[#374151] tahoma-light font-light tracking-wider">
                At Bookteller Nigeria, we offer a state-of-the-art booking
                engine that seamlessly integrates with hotel websites, enabling
                them to efficiently attract and convert potential guests into
                confirmed bookings. Our technology is designed to streamline the
                booking process, enhance user experience, and drive revenue
                growth for our hotel partners.
              </p>

              <div
                className={`${quickSand.className} bg-_green  text-white text-sm  items-center  space-x-3 inline-flex py-3 px-8 rounded-[50px] mt-10 `}
              >
                <p>Get Started</p>
                <IoArrowForwardCircle color="white" size={26} />
              </div>
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
        <section className="max-w-[1062px] mx-auto bg-white mt-28 px-6 md:px-10 space-y-20">
          <div>
            <h3
              className={`text-[#111827] text-[24px] roboto font-bold lg:text-3xl xl:text-4xl tracking-wider space-y-3`}
            >
              Our Mission
            </h3>

            <p className="pt-6 tracking-wide font-medium tahoma-light">
              At The Peoples POS System, we are dedicated to providing access to
              swift, secure, and transparent payment solutions. We believe in a
              future where everyone, regardless of location, enjoys access to
              fair compensation for their efforts.  Our partnership structure
              rewards your contribution and opens doors to your financial
              freedom.
            </p>

            <p className="pt-6 tracking-wide font-medium tahoma-light">
              We remain committed to supporting your business in every possible
              ramification either through face-to-face transactions or
              facilitating seamless payments across continents. PPOS remains
              your trusted and transparent payment processor.
            </p>
          </div>

          <div>
            <h3
              className={`text-[#111827] text-[24px] roboto font-bold lg:text-3xl xl:text-4xl tracking-wider space-y-3`}
            >
              Our Vision
            </h3>

            <p className="pt-6 tracking-wide font-medium tahoma-light">
              Stay ahead of the competition by leveraging the power of Google
              travel procuts and Microsoft Maps to capture the attention of
              travelers and drive direct bookings to your properties.
            </p>

            <p className="pt-6 tracking-wide font-medium tahoma-light">
              We remain committed to supporting your business in every possible
              ramification either through face-to-face transactions or
              facilitating seamless payments across continents. PPOS remains
              your trusted and transparent payment processor.
            </p>
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
                              Lorem Ipsum is simply dummy text of the prin....?
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
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
                              Section 2 title
                            </Box>
                            {isExpanded ? (
                              <PiMinusCircleDuotone fontSize="12px" />
                            ) : (
                              <p>+</p>
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
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
                              Section 2 title
                            </Box>
                            {isExpanded ? (
                              <PiMinusCircleDuotone fontSize="12px" />
                            ) : (
                              <p>+</p>
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
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
                              Section 2 title
                            </Box>
                            {isExpanded ? (
                              <PiMinusCircleDuotone fontSize="12px" />
                            ) : (
                              <p>+</p>
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
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
                              Section 2 title
                            </Box>
                            {isExpanded ? (
                              <PiMinusCircleDuotone fontSize="12px" />
                            ) : (
                              <p>+</p>
                            )}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
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
  )
}
