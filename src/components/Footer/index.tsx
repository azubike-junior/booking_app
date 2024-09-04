import { quickSand } from '@/utils'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="max-w-[1062px] mx-auto px-6 md:px-10 text-sm">
      <div className={`lato flex flex-wrap justify-between pb-6`}>
        <Link href={'/'}>
          <img src="/bookteller.svg" alt="" className=' w-32 md:w-[150px]'/>
        </Link>

        <div className="space-y-3 text-[#717E83] font-light">
          <p className=" text-_green font-semibold ">Company</p>
          <p>About Us</p>
          <p>Partners</p>
        </div>
        <div className="space-y-3 text-[#717E83] font-light">
          <p className=" text-_green font-semibold">Solutions</p>
          <p>Hotel marketing</p>
          <p>Boking engine</p>
          <p>Hotel website</p>
        </div>
        <div className="space-y-3 text-[#717E83] font-light">
          <p className=" text-_green font-semibold">Legal</p>
          <p>Privacy Policy</p>
          <p>Terms Of Service</p>
          <p>Refund Policy</p>
        </div>

        <div className="space-y-3 text-[#717E83] font-light">
          <p className=" text-_green font-semibold">Contact</p>
          <p>Partner</p>
          <p> +2348150367790</p>
          <p>support@bookteller.ng</p>
        </div>
      </div>

      {/* <hr /> */}

      <p className='text-center py-6 text-sm text-[#717E83]'>Copyright © 2024 Bookteller Nigeria Ent.</p>
    </div>
  )
}
