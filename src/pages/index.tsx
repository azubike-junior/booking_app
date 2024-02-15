import HeroInput from '@/components/HeroInput'
import { lato, lora } from '@/utils'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-white pt-12 ">
      <div className="max-w-[1400px] mx-auto mt-14 px-10">
        <div className="flex  items-center text-ash">
          <p className={`${lato.className} capitalize pr-4 text-xl`}>
            introducing
          </p>{' '}
          <div className="w-20 h-0.5 bg-ash mt-1"></div>
        </div>

        <div className="flex pt-6 ">
          <div
            className={`${lora.className} w-8/12 text-4xl xl:text-6xl space-y-3 text-brand-color`}
          >
            <p className="">
              <span className="text-primary-color">Revolutionary</span>
              co-working
            </p>
            <p> space to realize your</p>
            <p> innovation</p>
          </div>
          <div className="w-6/12 xl:w-4/12">
            <p
              className={`${lato.className} text-base xl:text-2xl leading-9 font-medium text-[#6A6A6A]`}
            >
              Lorem ipsum dolor sit amet consectetur. Faucibus odio sed nibh
              sit. Eu nibh sodales mus in. Turpis molestie elit massa quis non
              et hendrerit vel ultricies. ullamcorper eu.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-10  relative mb-10 mx-auto">
        <HeroInput />
        <Image
          src="/hero.svg"
          width={500}
          height={500}
          alt="bookteller"
          // layout="responsive"
          // sizes="(min-width: 768px) 80px, 60px, (min-width: 1200px) 1000px, 10000px"
          className="_image"
        />
      </div>

      {/* <div>hlell</div> */}
    </main>
  )
}
