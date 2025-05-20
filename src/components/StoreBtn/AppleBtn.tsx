import Image from 'next/image'

function AppleBtn() {
  return (
    <div className="bg-black space-x-3 rounded-[8px] items-center inline-flex px-4 py-2">
      <Image
        src={'/apple.svg'}
        width={18}
        height={18}
        alt="bg_img"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <Image
        src={'/appleText.svg'}
        width={60}
        height={60}
        alt="bg_img"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
}

export function PlayStoreBtn() {
  return (
    <div className="bg-black space-x-3 rounded-[8px] items-center inline-flex px-4 py-2 ">
      <Image
        src={'/playstore.png'}
        width={20}
        height={20}
        alt="bg_img"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <Image
        src={'/appleText.svg'}
        width={60}
        height={60}
        alt="bg_img"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
}

type prop = {
  num: string
  title: string
  text: string
}

export function HowItWorks({ num, title, text }: prop) {
  return (
    <div className="lg:flex  space-x-4">
      <div className="flex lg:block justify-center items-center">
        <div className="w-12 h-12 rounded-full bg-[#6DBE45] text-white flex items-center justify-center text-[20px] font-bold">
          {num}
        </div>
      </div>

      <div className="pt-3 lg:pt-0">
        <h2 className="text-center  font-bold">{title}</h2>
        <p className="text-center">{text}</p>
      </div>
    </div>
  )
}

export default AppleBtn
