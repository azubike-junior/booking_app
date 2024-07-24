import Image from 'next/image'
import Link from 'next/link'

type prop = {
  message: string
  btnText: string
  subText?: string
  route?: string
}

export default function EmptyState({ message, subText, btnText, route }: prop) {
  return (
    <div>
      <div className="shadow-md shadow-slate-200 w-7/12 flex justify-center items-center mx-auto lato py-6 mt-6 px-4 ">
        <div className="border-dashed border-[#969DAA]  border-[1px] w-full py-20">
          <div className="">
            <Image
              src={'/empty.svg'}
              width={100}
              height={100}
              alt="empty state"
              className="mx-auto"
            />

            <p className="pt-4 text-[#1A2B47] font-medium text-center tracking-wider lato">
              {message}
            </p>

            <Link href={route === 'property' ? '/dashboard/registerproperty' : `/room`}>
              <button className="flex space-x-2 border-[#34C759] text-[#34C759] border rounded-lg mx-auto p-2 px-3 my-6">
                <Image
                  src={'/arrow.svg'}
                  width={30}
                  height={30}
                  alt="empty state"
                />
                <p className="font-semibold "> {btnText}</p>
              </button>
            </Link>

            <p className="text-[#48556C] text-center font-light text-base">
              {subText}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
