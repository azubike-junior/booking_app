'use client'

import Simple from '@/components/Newsletter/newsletter'
import SharedLayout from '@/components/shared/SharedLayout'
import AppleBtn, {
  HowItWorks,
  PlayStoreBtn,
} from '@/components/StoreBtn/AppleBtn'
import SuiteDetail from '@/components/SuiteDetail'
import { TestimonialCard } from '@/components/TestimonialCard'
import Head from 'next/head'
import { BsFillBookmarkCheckFill } from 'react-icons/bs'

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
        <div className={` quicksand flex-grow`}>
          <section className="bg-[#FFF7D6] slanted">
            <div className="px-6 md:px-10 max-w-[1062px] mx-auto flex items-center lg:pt-10 justify-between">
              <div className="pt-10 lg:pt-18 w-full lg:w-6/12">
                <div
                  className={`text-[#111827] tahoma font-black  tracking-wider  space-y-1 md:space-y-3.5`}
                >
                  <p className="text-base md:text-xl axiforma ">
                    Welcome to Sendora -{' '}
                  </p>
                  <p className=" text-[24px] md:text-3xl lg:text-4xl roboto  xl:text-4xl font-extrabold uppercase">
                    {/* Occupancy <span className="text-[#F58634]">Rate</span> with */}
                    Send Money Home,
                  </p>
                  <p className=" text-[24px] md:text-3xl lg:text-4xl xl:text-4xl uppercase roboto font-extrabold">
                    {' '}
                    <span className="text-[#6DBE45] roboto font-extrabold">
                      Instantly
                    </span>{' '}
                  </p>

                  <p className="text-base md:text-xl axiforma ">
                    Fast. Secure. Affordable. Anywhere in Africa.
                  </p>
                </div>

                <p className=" pt-6 text-base text-[#374151] font-medium  tracking-wider">
                  Millions of Africans live and work abroad. Sending money home
                  should be simple, safe, and fast - and with Sendora, it is.
                </p>
                <p className=" text-base text-[#374151] font-medium  tracking-wider">
                  We built Sendora for you: Africans who support families,
                  invest in communities, and drive change across borders.
                </p>

                <div className="flex justify-center items-center lg:items-start lg:justify-start ">
                  <div className="flex space-x-4 justify-center mt-10">
                    <AppleBtn />
                    <PlayStoreBtn />
                  </div>
                </div>

                <div className="lg:hidden flex justify-center items-center mt-10 mx-auto">
                  <img src={'/phoness.jpg'} width={200} height={200} alt="ok" />
                </div>
              </div>

              <div className=" hidden lg:block">
                <img src="/phoness.jpg" width={300} height={300} />
              </div>
            </div>
          </section>

          <section className="w-full relative lato px-8 lg:px-0 pt-20  md:pt-10 ">
            <h3 className="text-lg lg:text-xl text-center font-bold uppercase ">
              Why Sendora?
            </h3>
            <p className="text-center w-full max-w-3xl mx-auto text-sm lg:text-base pt-4">
              Millions of Africans live and work abroad. Sending money home
              should be simple, safe, and fast - and with Sendora, it is. We
              built Sendora for you: Africans who support families, invest in
              communities, and drive change across borders
            </p>

            <h3 className="text-lg lg:text-xl text-center font-bold pt-10 uppercase ">
              What We Offer
            </h3>

            <div className="grid grid-cols-1 px-2 lg:px-10 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-6 mt-14   max-w-5xl mx-auto">
              <SuiteDetail
                img={'/access.svg'}
                title="Instant Remittances"
                subtitle="Send money to Nigeria, Ghana, Kenya, South Africa, Uganda, and beyond - in seconds, not days."
              />
              <SuiteDetail
                img={'/access.svg'}
                title="Best Exchange Rates"
                subtitle="Get real-time rates with no hidden fees. What you send is what your loved ones receive"
              />
              <SuiteDetail
                img={'/access.svg'}
                title="User-Friendly App"
                subtitle="From registration to transaction - all in a few taps. Available on iOS and Android."
              />
              <SuiteDetail
                img="/access.svg"
                title="Secure & Regulated"
                subtitle="Bank-grade security, full KYC compliance, and encrypted transactions."
              />
              <SuiteDetail
                img="/access.svg"
                title="Multiple Payment Methods"
                subtitle="Use debit/credit cards, bank transfers, Apple Pay, or mobile money."
              />
            </div>
          </section>

          <section className="bg-[#FFF7D6] mt-28">
            <div className="max-w-[1062px] mx-auto px-6 md:px-10 py-14 ">
              <h3 className="text-lg lg:text-[32px] roboto  font-bold text-center">
                Built for Africans, by Africans
              </h3>

              <p className="text-sm lg:text-base tahoma-light font-medium pt-4 lg:pt-6 text-center md:w-[60%] mx-auto">
                We understand the pain points - delays, high fees, unclear
                processes. That's why Sendora offers:
              </p>

              <div className="grid grid-cols-1 px-2 lg:px-10 md:grid-cols-2 lg:grid-cols-2 grid-rows-1 gap-6 gap-y-10 mt-14   max-w-5xl mx-auto">
                <div className="flex space-x-2 items-center">
                  <BsFillBookmarkCheckFill color="#6DBE45" size={30} />
                  <p>24/7 customer support with real human agents</p>
                </div>
                <div className="flex space-x-2 items-center">
                  <BsFillBookmarkCheckFill color="#6DBE45" size={30} />
                  <p>Transparent fee structure</p>
                </div>
                <div className="flex space-x-2 items-center">
                  <BsFillBookmarkCheckFill color="#6DBE45" size={30} />
                  <p>Local partnerships for fast payouts</p>
                </div>{' '}
                <div className="flex space-x-2 items-center">
                  <BsFillBookmarkCheckFill color="#6DBE45" size={30} />
                  <p>Support for English, French, and Swahili</p>
                </div>
              </div>
            </div>
          </section>

          <section className="max-w-[1062px] mx-auto bg-white mt-20 lg:mt-28 px-8 md:px-10">
            <h3 className="text-xl lg:text-[32px] roboto  font-bold text-center">
              How It Works
            </h3>

            <div className="grid grid-cols-1 px-2 lg:px-10 md:grid-cols-2 lg:grid-cols-2 grid-rows-1 gap-6 mt-14 gap-y-10   max-w-5xl mx-auto">
              <HowItWorks
                num="1"
                title="Sign Up"
                text="Quick verification to keep your money safe"
              />
              <HowItWorks
                num="2"
                title="Add Recipient"
                text="Choose from bank, mobile money, or cash pickup"
              />
              <div className="lg:flex space-x-4 w-full  ">
                <div className="flex lg:block justify-center items-center">
                  <div className="w-12 h-12 rounded-full bg-[#6DBE45] text-white flex items-center justify-center text-[20px]">
                    3
                  </div>
                </div>

                <div className="flex justify-center items-center pt-3 lg:pt-0 lg:w-9/12 ">
                  <div className="text-center">
                    <h2 className="text-center  font-bold">Send Money</h2>
                    <p>In just a few taps</p>
                  </div>
                </div>
              </div>{' '}
              <HowItWorks
                num="4"
                title="Track Transfer"
                text="Get real-time updates and instant notifications"
              />
            </div>
          </section>
          <section className="bg-[#FFF7D6] mt-28">
            <div className="max-w-[1062px] mx-auto px-6 md:px-10 py-14 ">
              <h3 className="text-lg lg:text-[32px] roboto  font-bold text-center">
                Join Thousands Sending Money Home with Ease
              </h3>

              <div className="grid grid-cols-1 px-2 lg:px-10 md:grid-cols-2 lg:grid-cols-2 grid-rows-1 gap-6 mt-14 gap-y-10   max-w-5xl mx-auto">
                <div className="border rounded-lg shadow-lg p-2 bg-white">
                  <TestimonialCard
                    data={{
                      author: 'Joseph Mwangi',
                      quote:
                        'Sendora changed how I support my family in Kenya. No delays, no drama',
                      title: '',
                      company: 'London',
                    }}
                  />
                </div>

                <div className="border rounded-lg shadow-lg p-2 bg-white">
                  <TestimonialCard
                    data={{
                      author: '- Fatoumata D.',
                      quote:
                        'Finally, a remittance app that understands Africa.',
                      title: '',
                      company: 'Paris',
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="mt-20">
            <div className="max-w-[1062px] mx-auto px-6 md:px-10 py-14 ">
              <h3 className="text-lg lg:text-[32px] roboto  font-bold text-center">
                Download Now & Send Your First Transfer - (Fee - Free)
              </h3>

              <div className="">
                <div className="flex justify-center items-center mt-6 mx-auto">
                  {/* <Image
                    src={'/phoness.jpg'}
                    width={200}
                    height={200}
                    alt="bg_img"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className=" mt-10 xl:mt-10  lg:block z-10"
                  /> */}

                   <img src="/phoness.jpg" width={200} height={200} />
                </div>

                <div className="flex space-x-4 justify-center mt-10">
                  <AppleBtn />
                  <PlayStoreBtn />
                </div>
              </div>
            </div>
          </section>

          <section>
            <Simple />
          </section>
        </div>
      </SharedLayout>
    </>
  )
}
