import Footer from '@/components/Footer'
import { quickSand } from '@/utils'
import { IoArrowForwardCircle } from 'react-icons/io5'

export default function About() {
  return (
    <div className={`pb-20 quicksand`}>
      <section className="bg-white">
        <div className="px-10 max-w-[1300px]  mx-auto  lg:flex lg:pt-10 justify-between lg:space-x-10 space-y-10 lg:space-y-0 ">
          <div className="pt-28 w-1/2">
            <div
              className={`text-[#111827] text-[24px] quicksand font-bold lg:text-3xl xl:text-4xl tracking-wider space-y-3`}
            >
              <p>About us</p>
            </div>

            <p className="w-full pt-6 text-lg text-[#374151] font-light tracking-wider">
              Increase your direct bookings by up to 20% with Bookteller Booking
              Engine without paying additional commissions.  Make your hotel's
              website your most effective source of reservations. Reduce the
              income split with OTAs and other partners as well.
            </p>

            <div
              className={`${quickSand.className} bg-_green  text-white text-sm  items-center  space-x-3 inline-flex py-3 px-8 rounded-[50px] mt-10 `}
            >
              <p>Get Started</p>
              <IoArrowForwardCircle color="white" size={26} />
            </div>
          </div>

          <div className='w-1/2'>
            <img
              src="/about.png"
              alt=""
              className=" about-img lg:block z-1 w-[30%]"
            />
          </div>
        </div>
      </section>
      <section className="max-w-[1300px] mx-auto bg-white mt-28 px-10 space-y-20">
        <div>
          <h3 className="text-xl lg:text-[36px]  font-semibold">Our Mission</h3>

          <p className="pt-6 tracking-wide font-medium">
            At The Peoples POS System, we are dedicated to providing access to
            swift, secure, and transparent payment solutions. We believe in a
            future where everyone, regardless of location, enjoys access to fair
            compensation for their efforts.  Our partnership structure rewards
            your contribution and opens doors to your financial freedom.
          </p>

          <p className="pt-6 tracking-wide font-medium">
            We remain committed to supporting your business in every possible
            ramification either through face-to-face transactions or
            facilitating seamless payments across continents. PPOS remains your
            trusted and transparent payment processor.
          </p>
        </div>

        <div>
          <h3 className="text-xl lg:text-[36px]  font-semibold">Our Vision</h3>

          <p className="pt-6 tracking-wide font-medium">
            Stay ahead of the competition by leveraging the power of Google
            travel procuts and Microsoft Maps to capture the attention of
            travelers and drive direct bookings to your properties.
          </p>

          <p className="pt-6 tracking-wide font-medium">
            We remain committed to supporting your business in every possible
            ramification either through face-to-face transactions or
            facilitating seamless payments across continents. PPOS remains your
            trusted and transparent payment processor.
          </p>
        </div>
      </section>

      <section className="bg-[#F2F7FF] mt-20">
        <div className="max-w-[1300px] mx-auto px-10 py-14 ">
          <h3 className="text-lg lg:text-[36px]  font-bold text-center">
            Accept secure online payments.
          </h3>

          <p className="text-[16px] font-medium pt-6 text-center md:w-[60%] mx-auto">
            Easily and securely accept payments online. Integrate secured
            payment gateway into your website to provide quick, safe, and easy
            payment processing for you and your guests
          </p>

          <div className="block md:flex space-y-6 justify-center space-x-10 items-center pt-4 ">
            <img
              src="/paystack.svg"
              alt="phone"
              className="w-[160px] md:w-[200px] lg:w-[200px]  mt-10"
            />
            <img
              src="/stripe.svg"
              alt="phone"
              className="w-[160px] md:w-[200px]  lg:w-[180px]  mt-10"
            />

            <img
              src="/flutter.svg"
              alt="phone"
              className="w-[160px] md:w-[200px]  lg:w-[200px] mt-10"
            />
          </div>
        </div>
      </section>

      <div className="max-w-[1300px] mx-auto pt-28 px-10">
        <Footer />
      </div>
    </div>
  )
}
