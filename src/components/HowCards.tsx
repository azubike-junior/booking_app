import Image from 'next/image'

type prop = {
  title: string
  subtitle: string
  digit: string
  img: string
  change?: boolean
  className?: string
}

export function HowCards({ title, subtitle, digit, img, change, className }: prop) {
  return (
    <div className="flex gap-4 ">
      {change ? '' : <Image src={img} width={404} height={815} alt="phone" />}
      <div className="bg-white w-full rounded-[20px] flex items-center px-16 relative">
        <div>
          <p className={`text-[48px]  font-geist tracking-normal leading-[55px] font-medium ${className}`}>
            {title}
          </p>
          <p className="font-inter w-[420px] pt-4">{subtitle}</p>
        </div>

        <div className="absolute right-20 top-16">
          <Image
            src="/waitlistAsteric.svg"
            width={74}
            height={76}
            alt="asteric"
          />
          <p className="text-[100px] font-geist font-semibold">{digit}</p>
        </div>
      </div>
      {change && <Image src={img} width={404} height={815} alt="phone" />}
    </div>
  )
}
