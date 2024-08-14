import Image from 'next/image'

type prop = {
  img: string
  title: string
  subtitle: string
}

export default function SuiteDetail({img, title, subtitle}: prop) {
  return (
    <div className="w-full shadow-lg shadow-[#ccc] bg-white px-6 rounded-lg py-10 z-50">
      <Image
        src={img}
        width={50}
        height={50}
        alt="bg_img"
        className="flex justify-start"
      />

      <h4 className="font-bold text-lg roboto  py-4">
        {title}
      </h4>

      <p className="text-base tahoma-light text-[#331B3B] tracking-wider">
        {subtitle}
      </p>
    </div>
  )
}
