import Image from 'next/image'
import Link from 'next/link'
import { RiVerifiedBadgeFill } from 'react-icons/ri'

const Success = () => {
  return (
    <div className="flex justify-center items-center mt-20  text-black ">
      <div className="w-4/12 py-8 shadow-lg shadow-slate-300 rounded-xl">
        <p className="text-center text-lg poppins pt-4">
          Payment has been made successfully
        </p>

        <div className="flex space-x-2 items-center justify-center pt-4">
          <p className="text-center text-base">Completed </p>
          <RiVerifiedBadgeFill size={24} color="green" />
        </div>

        <div className={'my-4 flex justify-center items-center'}>
          <Image
            src={'/checkmark-transparent.gif'}
            alt={'mark'}
            width={200}
            height={200}
          />
        </div>

        <div className={'my-4 flex justify-center items-center'}>
          <Link href={`/properties`}>
            <button
              type="button"
              className="border-[#10375C] bg-[#10375C]  text-white border py-1 text-center px-6  rounded-lg"
            >
              Go back
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Success
