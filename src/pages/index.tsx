import HeroInput from '@/components/HeroInput'
import Navbar from '@/components/Navbar/index'
import { lato, lora } from '@/utils/fonts'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-white pt-12">
      <Navbar />
      <div className="max-w-[1300px] mx-auto mt-14">
        <div className="flex  items-center text-ash">
          <span className={`${lato.className} capitalize pr-4 text-xl`}>
            introducing
          </span>{' '}
          <div className="w-20 h-0.5 bg-ash mt-1"></div>
        </div>

        <div className="flex pt-6 ">
          <div
            className={`${lora.className} w-8/12 text-6xl space-y-3 text-brand-color`}
          >
            <p className="">
              <span className="text-primary-color">Revolutionary</span>{' '}
              co-working{' '}
            </p>
            <p> space to realize your</p>
            <p> innovation</p>
          </div>
          <div className="w-4/12">
            <p className={`${lato.className} text-xl leading-9 text-light-ash`}>
              Lorem ipsum dolor sit amet consectetur. Faucibus odio sed nibh
              sit. Eu nibh sodales mus in. Turpis molestie elit massa quis non
              et hendrerit vel ultricies. ullamcorper eu.
            </p>
          </div>
        </div>
      </div>

      <div className='flex justify-end mt-10 max-w-[2000px] relative mb-10'>
        <HeroInput />
        <Image
          src="/hero.svg"
          width={1130}
          height={1200}
          alt="bookteller"
        />
      </div>

      <div>
        hlell
      </div>
    </main>
  )
}
