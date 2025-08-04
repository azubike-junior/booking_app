'use client'

import { HowCards } from '@/components/HowCards'
import SharedLayout from '@/components/shared/SharedLayout'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="Sendora, Payment, Fintech, Sending money home, Fast, Secure, Affordable, Anywhere in Africa, Instant Remittances"
        />

        <meta
          name="description"
          content="Send Money Home, Instantly | Fast. Secure. Affordable. Anywhere in Africa."
        ></meta>
      </Head>

      <SharedLayout>
        <div className={`flex-grow`}>
          <section className="bg-[#6DBE45] pt-10  ">
            <div className=" max-w-[1300px] mx-auto flex relative h-[34rem] ">
              <div className="pt-24 w-full lg:w-6/12  text-white">
                <div className="text-[45px] leading-[50px] font-bold font-geist ">
                  <p>Send money to</p>
                  <p>Nigeria instantly at </p>
                  <p>the best rates</p>
                </div>
                <p className="text-[17px] font-inter w-[60%] pt-6">
                  Your sacrifice matters. Sendora ensures your funds arrive
                  instantly, securely and without stress.
                </p>

                <div className="flex gap-4 mt-10 text-[17px] ">
                  <div className="bg-[#FFF7D6] py-3 px-6 flex items-center text-[17px] text-black rounded-[32px] justify-center gap-2 ">
                    <p>Download & Save Fees</p>

                    <div className="flex gap-2">
                      <Image
                        src="/apple.svg"
                        width={17}
                        height={17}
                        alt="phone"
                      />
                      <div className="h-[19px] w-[0.7px] bg-[#D9D9D9]"></div>
                      <Image
                        src="/playstore.svg"
                        width={15}
                        height={17}
                        alt="phone"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="">
                <Image
                  src="/herolady.png"
                  width={651}
                  height={815}
                  alt="phone"
                  className="absolute left-[28rem] -top-32"
                />
                <Image
                  src="/form.svg"
                  width={440}
                  height={338}
                  alt="phone"
                  className="absolute right-[6rem] top-[5rem] "
                />
                <Image
                  src="/kwame.svg"
                  width={139}
                  height={64}
                  alt="phone"
                  className="absolute right-0 top-[16rem] "
                />
              </div>
            </div>
          </section>

          <section className="bg-[#FFF7D6]">
            <div className="py-24 max-w-[1300px] mx-auto">
              <h3 className="text-[65px] text-center font-semibold ">
                How it works
              </h3>
              <p className="text-center w-[545px] text-black  mx-auto text-[17px] pt-4 font-inter font-thin">
                Spend smarter, lower your bills, get cashback on everything you
                buy, and unlock credit to grow your business.
              </p>

              <div className="mt-20 space-y-4">
                <HowCards
                  img="./waitlistbox.svg"
                  title="Download App"
                  subtitle="Lorem ipsum dolor sit amet consectetur. Convallis pellentesque nulla egestas purus enim velit libero ut dictumst. Dolor a et enim ac mi mauris congue."
                  digit="01"
                />

                <HowCards
                  img="./signupbox.svg"
                  className="w-[400px]"
                  title="Sign up and complete KYC"
                  subtitle="Lorem ipsum dolor sit amet consectetur. Egestas ut egestas."
                  digit="02"
                  change
                />

                <HowCards
                  img="./sendbox.svg"
                  className="w-[400px]"
                  title="Send at the best rate instantly"
                  subtitle="Lorem ipsum dolor sit amet consectetur. Convallis pellentesque nulla egestas purus enim velit libero ut dictumst. Dolor a et enim ac mi mauris congue."
                  digit="03"
                />

                <HowCards
                  img="./waitlistbox.svg"
                  title="Celebrate delivery"
                  subtitle="Lorem ipsum dolor sit amet consectetur. Id dolor rutrum convallis porttitor odio ipsum curabitur. Augue id est nisi sed. Nunc luctus."
                  digit="04"
                  change
                />
              </div>
            </div>
          </section>

          <section className="bg-[#ECE9F8]">
            <div className="py-16 max-w-[1300px] mx-auto">
              <h3 className="text-[65px] text-center font-semibold ">
                Why choose us?
              </h3>
              <p className="text-center w-[545px] text-black  mx-auto text-[17px] pt-4 font-inter font-thin">
                Spend smarter, lower your bills, get cashback on everything you
                buy, and unlock credit to grow your business.
              </p>

              <div className="mt-20 flex gap-4">
                <div className="w-full">
                  <div className="space-y-6">
                    <div className="bg-[#F1BB17]  flex items-center justify-center h-[232px] rounded-[16px] gap-4">
                      <h2 className="text-[#8E264E] text-[40px] font-bold">
                        Fast transfers
                      </h2>
                      <Image
                        src="/fasttransfers.svg"
                        width={82}
                        height={55}
                        alt="phone"
                      />
                    </div>
                    <div className="bg-[#E6F4EC] flex items-center justify-center h-[232px]  rounded-[16px] gap-4">
                      <div className="px-10">
                        <h2 className="text-[#1A1A1A] text-[30px] font-bold">
                          Fast, Safe, Convenient!
                        </h2>
                        <p className="font-inter text-[18px] w-[400px]">
                          Lightening-Fast Transfers: From “send” to “delivered”
                          in seconds
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#6DBE45] w-full h-[488px] rounded-[24px]  relative text-white">
                  <Image
                    src="/zeroTransfer.svg"
                    width={270}
                    height={300}
                    alt="phone"
                  />

                  <h2 className="text-[40px] leading-[46px] font-bold absolute top-10 px-10">
                    Zero transfer charge
                  </h2>

                  <h1 className="px-10 text-[18px]  pt-28">
                    Keep 100% of your money- No hidden charges
                  </h1>
                </div>

                <div className="w-full">
                  <div className="space-y-6">
                    <div className="bg-[#FFF7D6] flex items-center justify-center h-[232px]  rounded-[16px] gap-4">
                      <div className="px-10 ">
                        <h2 className="text-[#1A1A1A] text-[30px] font-bold">
                          Bank Grade Security
                        </h2>
                        <p className="font-inter text-[18px] w-[360px] ">
                          We protect every transaction with military-grade
                          encryption and 24/7 fraud monitoring
                        </p>
                      </div>
                    </div>
                    <div className="bg-[#8E264E] relative  h-[232px]  rounded-[24px] flex justify-center ">
                      <Image
                        src="/secure.svg"
                        width={145}
                        height={182}
                        alt="phone"
                        className="mx-auto"
                      />

                      <h4 className="text-[68px] text-white font-extrabold absolute top-16 tracking-tighter">
                        Secure
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-40 flex gap-6 ">
                <div className="bg-[#6DBE45] w-[856px] h-[564px] rounded-[22px] relative overflow-hidden">
                  {/* Image in background */}
                  <Image
                    src="/best.svg"
                    width={540}
                    height={634}
                    alt="phone"
                    className="absolute right-0 top-0 z-0"
                  />

                  {/* Text on top */}
                  <div className="text-white p-16 relative z-10">
                    <div className="text-[64px] font-bold leading-[70px]">
                      <h3>Best exchange</h3>
                      <h3>rates guaranteed.</h3>
                    </div>

                    <p className="pt-10 text-[16px]">
                      Sendora has integration which cuts across all mobile
                      networks and local banks allowing you to send money with
                      no hidden charges to mobile wallets or bank accounts.
                    </p>

                    <div className="bg-white flex justify-center py-4 items-center text-[#6DBE45] mt-14 w-[146px] rounded-[58px] text-[16px] font-bold">
                      Get Started
                    </div>
                  </div>
                </div>
                <div className="bg-[url('/girl.svg')] bg-cover bg-center w-[418px] h-[564px] rounded-[40px] relative">
                  <Image
                    src="/girl_2.svg"
                    width={440}
                    height={400}
                    alt="phone"
                    className="absolute bottom-0"
                  />
                  <Image
                    src="/percent.svg"
                    width={65}
                    height={65}
                    alt="phone"
                    className="absolute top-56 left-10"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#0F2E4F]">
            <div className="gap-6 flex pt-36 justify-center ">
              <Image src="/facebook.svg" width={13} height={12} alt="phone" />
              <Image src="/insta.svg" width={24} height={24} alt="phone" />
              <Image src="/linkedin.svg" width={24} height={24} alt="phone" />
              <Image src="/x.svg" width={24} height={24} alt="phone" />
              <Image src="/medium.svg" width={24} height={24} alt="phone" />
            </div>

            <Image
              src="/send.svg"
              width={1250}
              height={249}
              alt="phone"
              className="mx-auto mt-48"
            />
          </section>
        </div>
      </SharedLayout>
    </>
  )
}
