import Link from 'next/link'
import { PropertyProp } from '../../utils/types'

type Prop = {
  data: PropertyProp | undefined
}

export default function Details({ data }: Prop) {
  return (
    <div className="quicksand w-full">
      <div className="space-y-3 lg:space-y-0 lg:grid  grid-cols-3 gap-6">
        <div className="bg-white px-3 rounded-lg py-3 w-full shadow ">
          <h3 className="font-semibold ">Property Name</h3>
          <p>{data?.name}</p>
        </div>
        <div className="bg-white px-3 rounded-lg py-3 w-full shadow ">
          <h3 className="font-semibold ">Email Address</h3>
          <p>{data?.email_address}</p>
        </div>
        <div className="bg-white px-3 rounded-lg py-3 w-full shadow ">
          <h3 className="font-semibold">Address</h3>
          <p>{data?.address}</p>
        </div>
      </div>

     <div className="space-y-3 lg:space-y-0 lg:grid  grid-cols-3 gap-6 mt-4">
        <div className="bg-white px-3 rounded-lg py-3 w-full shadow ">
          <h3 className="font-semibold">Web Address</h3>
          <p className="text-[#10375C] hover:underline">
            <Link href={data?.web_address || ''}>{data?.web_address}</Link>{' '}
          </p>
        </div>
        <div className="bg-white px-3 rounded-lg py-3 w-full shadow ">
          <h3 className="font-semibold">Phone Number</h3>
          <p>{data?.phone_number}</p>
        </div>
        <div className="bg-white px-3 rounded-lg py-3 w-full shadow ">
          <h3 className="font-semibold">Number of rooms</h3>
          <p>{data?.number_of_rooms}</p>
        </div>
      </div>

      <div className="space-y-3 lg:grid grid-cols-2 gap-6 mt-4 ">
        <div className="bg-white px-3 rounded-lg py-3 w-full shadow ">
          <h3 className="font-semibold">Description</h3>
          <p>{data?.description}</p>
        </div>
        <div className="bg-white px-3 rounded-lg py-3 w-full shadow ">
          <div className="flex  space-x-5 ">
            <div className="">
              <h3 className="font-semibold pt-4">Primary Color</h3>
              <div
                style={{ background: data?.primary_color }}
                className={`w-8 h-8 rounded-lg border mx-auto mt-2 border-[#747F8A]`}
              ></div>
            </div>
            <div className="">
              <h3 className="font-semibold pt-4">Secondary Color</h3>
              <div
                style={{ background: data?.secondary_color }}
                className={`w-8 h-8 rounded-lg border mx-auto mt-2 border-[#747F8A] `}
              ></div>
            </div>
            <div className="">
              <h3 className="font-semibold pt-4">Text Color</h3>
              <div
                style={{ background: data?.text_color }}
                className={`w-8 h-8 rounded-lg border mx-auto mt-2 border-[#747F8A] `}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
