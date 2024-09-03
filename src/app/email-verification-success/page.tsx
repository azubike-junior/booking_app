import Image from 'next/image'
import Link from 'next/link'

const EmailVerificationSuccess = () => {
  return (
    <div className="flex justify-center items-center p-4 mt-10">
      <div className="shadow-lg  rounded-[20px] border-[0.3px] p-10 xl:w-4/12">
        <Image
          src={'/emailSuccess.svg'}
          width={300}
          height={200}
          alt="success"
          className="mx-auto"
        />

        <p className="text-center font-bold ">
          Email address Verification Success
        </p>

        <p className="text-sm pt-4 w-7/12 text-center mx-auto">
          Congratulations your email address has been verified! Please log in to
          continue.{' '}
        </p>

        <div className="flex justify-center items-center space-x-4 pt-6">
          <Link href={`/login`}>
            <button className="flex space-x-2 p-2 items-center rounded-lg mt-4 lato text-sm bg-[#1A2B47] text-white px-10 ">
              Login
            </button>
          </Link>

          <Link href={`/login`}>
            <button className="flex space-x-2 p-2 items-center rounded-lg mt-4 lato text-sm bg-white text-[#1A2B47]  border-[#1A2B47] border-[1px] px-10">
              Cancel
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default EmailVerificationSuccess
