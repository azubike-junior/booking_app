import Image from 'next/image'

export default function SuiteDetail() {
  return (
    <div className="w-full shadow-lg shadow-[#ccc] px-6 rounded-lg py-10">
      <Image
        src={'/best_1.svg'}
        width={50}
        height={50}
        alt="bg_img"
        className="flex justify-start"
      />

      <h4 className="font-bold text-lg  py-4">Seamless User Experience</h4>

      <p className='text-sm'>
        When you book directly through our platform, you unlock exclusive deals
        and rates that you won't find anywhere else. Say goodbye to inflated
        prices and hidden fees – with direct booking, you're getting the best
        value for your stay.
      </p>
    </div>
  )
}
