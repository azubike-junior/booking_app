import Image from 'next/image'

export default function SuiteDetail() {
  return (
    <div className="w-full md:w-[400px] lg:w-full bg-white text-center px-6  xl:px-12 py-8 rounded-t-full shadow-2xl rounded-b-xl">
      <Image
        src={'/_web.svg'}
        width={140}
        height={500}
        alt="bg_img"
        className="mx-auto"
      />

      <p className="font-bold text-lg lg:text-xl pt-8">Seamless User Experience</p>

      <p className="font-light text-sm pt-4 tracking-wider">
        Create a website that highlights your property’s best features with
        ready-to-go templates. Easily add a booking engine and start getting
        direct online bookings and payments.
      </p>

      <div className="flex gap-3 pt-14 pb-3 ">
        <div className=" bg-_green text-white rounded-lg p-1 font-light  md:text-sm px-2">
          Booking engine
        </div>

        <div className=" bg-_green text-white rounded-lg p-1 font-light text-sm px-2">
          Website
        </div>
        <div className=" bg-_green text-white rounded-lg p-1 font-light text-sm px-2">
          Payments
        </div>
      </div>
      <div className="flex gap-3 pb-6 justify-start ">
        <div className=" inline-flex  bg-_green text-white rounded-lg p-1 font-light text-sm px-2">
          CMS
        </div>
      </div>
    </div>
  )
}
