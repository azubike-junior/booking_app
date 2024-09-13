import Image from 'next/image'

type prop = {
  img: string
  title: string
  subtitle: string
}

export default function SuiteDetail({img, title, subtitle}: prop) {
  return (
    <div className="w-full shadow-sm shadow-[#ccc] bg-white px-6 rounded-lg py-5 ">
      <Image
        src={img}
        width={40}
        height={40}
        alt="bg_img"
        className="flex justify-start"
      />

      <h4 className="font-bold text-base   py-4">
        {title}
      </h4>

      <p className="text-sm text-[#331B3B] tracking-wider">
        {subtitle}
      </p>
    </div>
  )
}
