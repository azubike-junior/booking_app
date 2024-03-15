import Footer from '@/components/Footer'
import SuiteDetail from '@/components/SuiteDetail'
import { quickSand } from '@/utils'
import Image from 'next/image'
import { IoArrowForwardCircle } from 'react-icons/io5'

export default function Home() {
  return (
    <div className={`${quickSand.className} pb-20`}>
      <div className="bg-[#F2F7FF]  slanted mb-36">
        <div className="px-4 md:pl-10 xl:pl-36 3xl:pl-10 3xl:max-w-[1500px] mx-auto flex lg:pt-10 ">
          <div className="pt-10 lg:pt-36 lg:pr-10">
            <div
              className={`${quickSand.className} text-[#111827] text-[24px] md:text-[30px] lg:text-[48px] font-extrabold`}
            >
              <p>A sales-first approach to </p>
              <p>travel and hospitality</p>
            </div>

            <p className="lg:w-[600px] pt-6 text-lg text-[#374151] font-light">
              An innovative, end-to-end, integrated sales, operations, and
              distribution management platform bringing the travel industry
              together.
            </p>

            <div
              className={`${quickSand.className} bg-_green  text-white text-sm  items-center  space-x-3 inline-flex py-3 px-8 rounded-[50px] mt-10 `}
            >
              <p>Get Started</p>
              <IoArrowForwardCircle color="white" size={26} />
            </div>

            <div className="flex justify-between lg:hidden items-center">
              <img
                src="/phone.jpg"
                alt="phone"
                className="w-[120px] md:w-[250px] mt-10"
              />

              <img
                src="/sm-crop.png"
                alt="phone"
                className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] mt-10"
              />
            </div>
          </div>

          <Image
            src={'/phone.jpg'}
            width={400}
            height={500}
            alt="bg_img"
            className="phone-image hidden lg:block shadow-2xl shadow-slate-500"
          />

          <div className="mt-32">
            <img src="/sm-crop.png" alt="" className="graph hidden xl:block" />
          </div>
        </div>
      </div>
      <main className="bg-white mt-44 px-4 md:px-10">
        <div className="max-w-[1400px] mx-auto mt-4">
          <p className="text-lg lg:text-[36px] font-bold">
            A powerful suite to grow your hospitality business
          </p>

          <div className="flex justify-center items-center">
            <div className="block mx-auto lg:flex lg:justify-between lg:space-x-5 xl:space-x-24 space-y-6 lg:space-y-0 mt-20">
              <SuiteDetail />
              <SuiteDetail />
              <SuiteDetail />
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto pt-28">
          <p className="text-[20px] md:text-[36px] font-bold">
            Accept secure online payments.
          </p>

          <p className="text-[16px] font-md pt-6">
            We accept online payments through;
          </p>

          <div className="block md:flex space-y-6  justify-between items-center xl:mt-10">
            <img
              src="/paystack.svg"
              alt="phone"
              className="w-[160px] md:w-[200px] lg:w-[250px] xl:w-[400px] mt-10"
            />
            <img
              src="/stripe.svg"
              alt="phone"
              className="w-[160px] md:w-[200px]  lg:w-[250px] xl:w-[400px] mt-10"
            />

            <img
              src="/flutter.svg"
              alt="phone"
              className="w-[160px] md:w-[200px]  lg:w-[250px] xl:w-[400px] mt-10"
            />
          </div>

          <div className="mt-10 md:mt-36  bg-_green w-full rounded-xl p-5 md:p-20 block lg:flex justify-between items-center shadow-[#0066F440] shadow-xl">
            <div className="w-full lg:w-6/12 text-[16px] lg:text-[36px] text-white font-semibold">
              <p className="">
                Start Investing in assets and business ideas today.
              </p>
            </div>

            <div className="w-full lg:w-6/12 mt-4 lg:mt-0">
              <div className="bg-[#FFFFFF80] h-[64px] rounded-[50px] py-2 px-4 flex">
                <input
                  type="text"
                  className="w-8/12 py-2 bg-transparent outline-none text-white placeholder-white"
                  placeholder="Your email"
                />

                <button className="bg-white w-4/12  rounded-[40px] text-_green text-xs md:text-base font-bold">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto pt-28">
          <Footer />
        </div>
      </main>
    </div>
  )
}
