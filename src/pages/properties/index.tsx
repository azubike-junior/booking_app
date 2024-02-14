import { AuthWrapper } from '@/components/AuthWrapper'
import { lato } from '@/utils'
import Image from 'next/image'

const Lists = () => {
  return (
    <div className="flex space-x-6">
      <Image
        src={'/prop.svg'}
        width={100}
        height={100}
        alt="prop"
        className="w-5/12 h-full "
      />

      <div className={`${lato.className} bg-white p-10 w-7/12 font-light`}>
        <p className="text-4xl text-[#10375C]">Executive Suite</p>

        <div className="flex pt-14 text-sm space-x-10 font-light">
          <div className="">
            <Image
              width={25}
              height={100}
              src={'/icon_1.svg'}
              alt="prop"
              className="mx-auto"
            />
            <p>4 people</p>
          </div>
          <div>
            <Image
              width={25}
              height={100}
              src={'/icon_1.svg'}
              alt="prop"
              className="mx-auto"
            />
            <p>4 people</p>
          </div>
          <div>
            <Image
              width={25}
              height={100}
              src={'/icon_1.svg'}
              alt="prop"
              className="mx-auto"
            />
            <p>4 people</p>
          </div>
        </div>

        <p className="font-light text-sm pt-10">550ft/51m</p>

        <p className="font-light text-sm pt-6">
          A suite with a king bed size, jacuzzi, pair of couches, dining table,
          balcony & 2 smart TVs
        </p>

        <p className="font-light text-sm pt-8 underline">view room details</p>

        <div className="font-semibold texet-sm pt-10 flex items-center justify-between">
          <p className="text-2xl text-[#10375C]">N 450,000</p>
          <div className="bg-[#10375C] text-white text-center font-md rounded-lg py-2 px-10">
          <p>Book</p>  
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Properties() {
  return (
    <div className="pt-8">
      <Image
        src="/property.svg"
        className="_properties -z-10"
        alt="properyImg"
        width={100}
        height={100}
      />

      <div className="max-w-[1200px]  mt-10  mx-auto">
        <div className="bg-white w-full rounded-lg shadow-lg z-50 shadow-slate-300 mx-auto flex px-4 py-4 border space-x-4 text-sm _property-div font-medium">
          <div className="bg-[#F2F2F2] rounded-sm w-full py-3  pl-4 ">
            <p>Anambra</p>
          </div>
          <div className="bg-[#F2F2F2] rounded-sm w-full py-3 pl-4">
            <p>Mar 20, 2022</p>
          </div>
          <div className="bg-[#F2F2F2] rounded-sm w-full py-3 pl-4">
            <p>Mar 20, 2022</p>
          </div>
          <div className="bg-[#F2F2F2] rounded-sm w-full py-3 pl-4">
            <p>Type</p>
          </div>
          <div className="bg-primary-color text-white text-center rounded-lg w-full py-3 pl-4">
           <p>Search</p> 
          </div>
        </div>

        <div className="bg-[#F5F5F5] p-6 px-6 mt-16 space-y-10">
          <Lists />
          <Lists />
          <Lists />
          <Lists />
          <Lists />
        </div>
      </div>
    </div>
  )
}

Properties.getLayout = function getLayout(page) {
  return <AuthWrapper>{page}</AuthWrapper>;
};
