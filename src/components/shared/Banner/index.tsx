// import Subscription from '@/components/Modal'
import { useState } from 'react'
import Button from '../Button'


type BannerProp = {
  firstname: string
}

export default function Banner({ firstname }: BannerProp) {
  const [openSubscription, setOpenSubscription] = useState(false)

  return (
    <div className={` bg-[#10375C] w-full  lg:h-[240px]`}>
      <div className="max-w-[1062px] px-6 md:px-10 py-10 mx-auto text-white flex justify-between items-center">
        <div>
          <p className="text-3xl lg:text-5xl lg:pt-10">Hi {firstname}</p>
          <p className="text-lg lg:text-2xl pt-6">
            Welcome to your Bookteller administrative dashboard
          </p>
        </div>

        <Button
          onClick={() => setOpenSubscription(true)}
          name="Subscribe"
          className="bg-white shadow-sm inline-flex shadow-[#10375ce2] text-[#10375C] px-3 py-1 rounded-[40px] hover:bg-[#69b5fc] transition-all duration-100 ease-in-out hover:text-white text-sm"
          type="button"
        />

        {/* <Subscription
          openSubscription={openSubscription}
          setOpenSubscription={setOpenSubscription}
        /> */}
      </div>
    </div>
  )
}
