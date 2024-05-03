import Link from 'next/link'
import { PropertyProp } from '../../utils/types'

type Prop = {
  data: PropertyProp | undefined
}

export default function Details({ data }: Prop) {
  return (
    <div className="quicksand w-8/12">
      <h3 className="font-semibold pt-4">Property Name</h3>
      <p>{data?.name}</p>

      <h3 className="font-semibold pt-4">Description</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
        laborum omnis ullam consectetur sapiente aliquam tempore et eligendi,
        perferendis excepturi officiis reiciendis veritatis quod iusto delectus
        doloribus! Sunt, et porro.
      </p>

      <h3 className="font-semibold pt-4">Email Address</h3>
      <p>{data?.email_address}</p>

      <h3 className="font-semibold pt-4">Address</h3>
      <p>{data?.address}</p>

      <h3 className="font-semibold pt-4">Web Address</h3>
      <p className="text-[#10375C] hover:underline">
        <Link href={data?.web_address || ''}>{data?.web_address}</Link>{' '}
      </p>

      <h3 className="font-semibold pt-4">Phone Number</h3>
      <p>{data?.phone_number}</p>

      <h3 className="font-semibold pt-4">Number of rooms</h3>
      <p>{data?.number_of_rooms}</p>

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
  )
}
