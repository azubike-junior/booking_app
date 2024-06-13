// import Footer from '@/components/Footer'
// import SuiteDetail from '@/components/SuiteDetail'
// import { quickSand } from '@/utils'
// import Head from 'next/head'
// import Image from 'next/image'
// import Script from 'next/script'
// import { IoArrowForwardCircle } from 'react-icons/io5'

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
//         <div className="elfsight-app-9f147f4e-70ef-4f7f-9fa4-6e47148934dd" data-elfsight-app-lazy></div>
//       </Head>

//       <div className={`pb-20 quicksand`}>
//         <section className="bg-[#F2F7FF] slanted">
//           <div className="px-6 md:px-10 max-w-[1062px] mx-auto flex lg:pt-10 ">
//             <div className="pt-10 lg:pt-28">
//               <div
//                 className={`text-[#111827] tahoma font-black  tracking-wider  space-y-1 md:space-y-3.5`}
//               >
//                 <p className="text-base md:text-xl axiforma ">Increase Your </p>
//                 <p className=" text-[24px] md:text-3xl lg:text-4xl roboto  xl:text-4xl font-extrabold uppercase">
//                   Occupancy <span className="text-[#F58634]">Rate</span> with
//                 </p>
//                 <p className=" text-[24px] md:text-3xl lg:text-4xl xl:text-4xl uppercase roboto font-extrabold">
//                   {' '}
//                   <span className="text-[#F58634] roboto font-extrabold">
//                     Direct
//                   </span>{' '}
//                   Bookings{' '}
//                 </p>

//                 <p className="text-base md:text-xl axiforma ">
//                   No Commission Fees
//                 </p>
//               </div>

//               <p className="lg:w-[48%] pt-6 text-base text-[#374151] font-medium text-left tracking-wider">
//                 Increase your direct bookings by up to 20% with Bookteller
//                 Booking Engine without paying additional commissions.  Make your
//                 hotel's website your most effective source of reservations.
//                 Reduce the income split with OTAs and other partners as well.
//               </p>

//               <div
//                 className={`${quickSand.className} bg-_green  text-white text-sm  items-center  space-x-3 inline-flex py-3 px-8 rounded-[50px] mt-10 `}
//               >
//                 <p>Get Started</p>
//                 <IoArrowForwardCircle color="white" size={26} />
//               </div>

//               <div className=" justify-between lg:hidden items-center mt-10">
//                 <Image
//                   src={'/phone.jpg'}
//                   width={200}
//                   height={500}
//                   alt="bg_img"
//                   className="p-image lg:block shadow-2xl shadow-slate-500 z-10"
//                 />

//                 <img
//                   src="/sm-crop.png"
//                   alt="phone"
//                   className="hidden md:flex w-[30%] _graph"
//                 />
//               </div>
//             </div>

//             <Image
//               src={'/phone.jpg'}
//               width={200}
//               height={500}
//               alt="bg_img"
//               className="phone-image hidden lg:block shadow-2xl shadow-slate-500 z-10"
//             />

//             <div className="mt-32">
//               <img
//                 src="/sm-crop.png"
//                 alt=""
//                 className="graph hidden lg:block z-1 w-[30%]"
//               />
//             </div>
//           </div>
//         </section>

//         <section className="w-full relative z-40">
//           <div className="bg-[#F2F7FF] skew-slant w-full h-72 absolute -z-10 bottom-44 -skew-y-12"></div>

//           <div className="max-w-[1062px] mx-auto bg-transparent mt-20 lg:mt-28 px-6 md:px-10 z-50">
//             <h3 className="text-lg lg:text-[30px] roboto font-bold ">
//               Why you need direct bookings
//             </h3>

//             <p className="pt-4 tracking-wide tahoma-light font-light">
//               Stay ahead of the competition by leveraging the power of Google
//               travel procuts and Microsoft Maps to capture the attention of
//               travelers and drive direct bookings to your properties.
//             </p>

//             <div className="md:flex justify-center items-center space-y-10 md:space-y-0  md:space-x-10 lg:space-x-20">
//               <div className="block mt-20 space-y-10 md:w-1/2 ">
//                 <SuiteDetail />
//                 <SuiteDetail />
//                 <SuiteDetail />
//               </div>

//               <div className="md:w-1/2">
//                 <h4 className="text-lg font-bold roboto md:text-2xl  pb-2">
//                   Build your direct channel
//                 </h4>

//                 <p className="tahoma-light">
//                   When you book directly through our platform, you unlock
//                   exclusive deals and rates that you won't find anywhere else.
//                   Say good.
//                 </p>

//                 <div
//                   className={`${quickSand.className} bg-_green  text-white text-sm  items-center  space-x-3 inline-flex py-3 px-8 rounded-[50px] mt-6 `}
//                 >
//                   <p>Get Started</p>
//                   <IoArrowForwardCircle color="white" size={26} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="bg-[#F2F7FF] mt-28">
//           <div className="max-w-[1062px] mx-auto px-6 md:px-10 py-14 ">
//             <h3 className="text-lg lg:text-[32px] roboto  font-bold text-center">
//               Accept secure online payments.
//             </h3>

//             <p className="text-[16px] tahoma-light font-medium pt-6 text-center md:w-[60%] mx-auto">
//               Easily and securely accept payments online. Integrate secured
//               payment gateway into your website to provide quick, safe, and easy
//               payment processing for you and your guests
//             </p>

//             <div className="block md:flex space-y-6 justify-center md:space-x-10  items-center pt-4 ">
//               <img
//                 src="/paystack.svg"
//                 alt="phone"
//                 className="w-[160px] md:w-[200px] lg:w-[240px] mt-7 "
//               />
//               <img
//                 src="/stripe.svg"
//                 alt="phone"
//                 className="w-[160px] md:w-[200px]  lg:w-[200px] "
//               />

//               <img
//                 src="/flutter.svg"
//                 alt="phone"
//                 className="w-[160px] md:w-[200px]  lg:w-[240px]"
//               />
//             </div>
//           </div>
//         </section>

//         <section className="max-w-[1062px] mx-auto bg-white mt-20 lg:mt-28 px-6 md:px-10">
//           <h3 className="text-xl lg:text-[32px] roboto  font-bold text-center">
//             Why you need direct bookings
//           </h3>

//           <p className="text-sm lg:text-[16px] tahoma-light font-medium pt-6 text-center md:w-[60%] mx-auto">
//             Stay ahead of the competition by leveraging the power of Google free
//             booking links and Microsoft Maps to capture the attention of
//             travelers and drive direct bookings to your properties.
//           </p>

//           <div className="block md:flex space-y-6 justify-center md:space-x-10  items-center pt-4 ">
//             <img
//               src="/google.svg"
//               alt="phone"
//               className="w-[160px] md:w-[200px] lg:w-[180px]  mt-10"
//             />
//             <img
//               src="/microsoft.svg"
//               alt="phone"
//               className="w-[160px] md:w-[200px]  lg:w-[180px]  mt-10"
//             />
//           </div>
//         </section>

//         <section className="max-w-[1062px] mx-auto px-6 md:px-10">
//           <div className="mt-10 md:mt-28  bg-_green w-full rounded-xl p-5 md:p-14 block lg:flex justify-between items-center shadow-[#0066F440] shadow-xl md:space-x-4">
//             <div className="w-full lg:w-6/12 text-[16px] lg:text-[32px] text-white font-semibold">
//               <p className="roboto">
//                 Start Investing in assets and business ideas today.
//               </p>
//             </div>

//             <div className="w-full lg:w-6/12 mt-4 lg:mt-0">
//               <div className="bg-[#FFFFFF80] h-[64px] rounded-[50px] py-2 px-4 flex">
//                 <input
//                   type="text"
//                   className="w-8/12 py-2 bg-transparent outline-none text-white placeholder-white"
//                   placeholder="Your email"
//                 />

//                 <button className="bg-white w-4/12  rounded-[40px] text-_green text-xs md:text-base font-bold">
//                   Explore
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>

//         <Footer />
//       </div>
//     </>
//   )
// }

import InputField from '@/components/shared/Input'
import { useLoginMutation } from '@/features/auth'
import { useAppDispatch } from '@/store'
import { lato, quickSand } from '@/utils'
import { FormValues } from '@/utils/types'
import { Spinner, useToast } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Login() {
  const router = useRouter()
  const toast = useToast()
  const dispatch = useAppDispatch()
  const [errorMessage, setErrorMessage] = useState('')

  const [login, { isLoading, error }] = useLoginMutation()

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>({})

  async function loginHandler(data: FormValues) {
    try {
      const _data = { toast, router, ...data }
      login(_data)
        .unwrap()
        .then((payload) => {})
        .catch((error) => {
          toast({
            title: error?.data?.error,
            description: '',
            status: 'error',
            duration: 9000,
            isClosable: true,
            position: 'top-right',
          })
        })
    } catch (err) {}
  }

  return (
    <div className="flex justify-between h-screen">
      <div className="hidden lg:block w-1/2 bg-[#00525DB2]">
        <div className="px-24 mt-16">
          <Link href="/">
            <Image
              src="/whitelogo.svg"
              width={250}
              height={200}
              alt="bookteller"
            />
          </Link>

          <div className="mt-56">
            <Image src="/login.svg" width={400} height={400} alt="bookteller" />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 bg-white rounded-l-[40px] px-10 md:px-20">
        <div className="mx-auto mt-16 max-w-[500px]">
          <p
            className={`${quickSand.className} text-center text-[#111827] text-3xl`}
          >
            Login
          </p>

          <div className="border border-[#96A0A5]  space-x-2 flex justify-center items-center py-2 mt-16 rounded-lg">
            <Image src="/googlee.svg" width={22} height={22} alt="bookteller" />
            <p className={`${quickSand.className} text-xs`}>
              Sign up with Google
            </p>
          </div>

          <p
            className={`${quickSand.className} text-center text-[#717E83] pt-10 pb-6`}
          >
            OR
          </p>

          <form
            onSubmit={handleSubmit(loginHandler)}
            className={`${lato.className} space-y-6`}
          >
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

            <button
              type="submit"
              className="bg-primary-color py-3 text-center w-full text-white mt-10 rounded-lg"
            >
              {isLoading ? <Spinner /> : 'Login'}
            </button>
          </form>

          <Link href={'/auth/signup'}>
            <p className="text-right pt-2">Sign up</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
