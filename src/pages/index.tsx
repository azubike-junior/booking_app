import HeroInput from '@/components/HeroInput'
import { lato, lora, lora_small } from '@/utils'
import Image from 'next/image'
import { IoArrowForwardCircleSharp } from 'react-icons/io5'

export default function Home() {
  return (
    <main className="bg-white py-12 ">
      <div className="max-w-[1300px] mx-auto mt-14 px-10">
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

      <div className="max-w-[1300px] mx-auto mt-36 px-10">
        <div className="flex justify-between">
          <div className="w-7/12 pt-10">
            <p className={`${lora.className} text-4xl `}>About Us</p>
            <p
              className={`${lora_small.className} text-[#0F172A] leading-10 text-xl tracking-wide pt-6`}
            >
              Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin
              massa tincidunt viverra lectus pulvinar. Nunc ipsum est
              pellentesque turpis ultricies. Amet nunc diam orci duis ut sit
              diam arcu, nec. Eleifend proin massa tincidunt viverra lectus
              pulvinar. Nunc ipsum est pellentesque turpis ultricies.
            </p>

            <button className="bg-[#F58634] flex items-center space-x-2 px-6 py-4 text-white rounded-lg mt-10">
              <p>Learn More</p>{' '}
              <IoArrowForwardCircleSharp size={20} color="white" />{' '}
            </button>
          </div>

          <Image
            src={'/left.png'}
            width={450}
            height={100}
            alt="bg_img"
            className=""
          />
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto mt-36 px-10">
        <div className="flex  items-center text-ash">
          <p className={`${lato.className} capitalize pr-4 text-xl`}>
            Our Services
          </p>{' '}
          <div className="w-20 h-0.5 bg-ash mt-1"></div>
        </div>

        <div className="space-y-2">
          <p
            className={`${lora.className} w-8/12 text-2xl xl:text-4xl space-y-3 text-brand-color pt-4`}
          >
            All facilities are ready to meet
          </p>
          <p
            className={`${lora.className} w-8/12 text-2xl xl:text-4xl space-y-3 text-brand-color`}
          >
            all your needs
          </p>
        </div>

        <div className="flex pt-10 space-x-16">
          <div className="bg-[#DFDFDF] h-44 w-1"></div>
          <div
            className={`${lato.className} capitalize pr-4 text-base pt-6 font-semibold space-y-10`}
          >
            <p>Spacious parking area</p>

            <p>Comfortable spaces</p>

            <p className="bg-[#F58634] p-4 w-56 text-white">Cozy cafe</p>

            <p>Child playground</p>

            <p>Outdoor spaces</p>
          </div>

          <Image
            src={'/service_img.svg'}
            width={1000}
            height={100}
            alt="bg_img"
            className=""
          />
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto mt-36 px-10 ">
        <p
          className={`${lora.className} text-2xl xl:text-4xl space-y-3 text-brand-color pt-4 text-center`}
        >
          Who uses Bookteller?
        </p>
        <p
          className={`${lato.className} capitalize pt-6 text-center text-[#9A9A9A] text-base`}
        >
          Big brands, small bussiness, new startup and inividuals
        </p>

        <div className="flex items-center justify-center space-x-14 mt-8">
          <Image
            src={'/google.svg'}
            width={130}
            height={100}
            alt="bg_img"
            className=""
          />
          <Image
            src={'/microsoft.svg'}
            width={130}
            height={100}
            alt="bg_img"
            className=""
          />
          <Image
            src={'/toko.svg'}
            width={130}
            height={100}
            alt="bg_img"
            className=""
          />{' '}
          <Image
            src={'/upwork.svg'}
            width={130}
            height={100}
            alt="bg_img"
            className=""
          />
        </div>
      </div>

      {/* <div>hlell</div> */}
    </main>
  )
}
