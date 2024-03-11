import { quickSand } from '@/utils'

export default function Footer() {
  return (
    <div className={`${quickSand.className} flex flex-wrap justify-between`}>
      <div className="space-y-3 text-[#717E83] font-light">
        <p className=" text-_green font-semibold ">Company</p>
        <p>About Us</p>
        <p>Careers</p>
      </div>
      <div className="space-y-3 text-[#717E83] font-light">
        <p className=" text-_green font-semibold">Products</p>
        <p>Leasing</p>
        <p>Apprenticeship Finance</p>
        <p>Travel Advance</p>
        <p>Saving</p>
      </div>
      <div className="space-y-3 text-[#717E83] font-light">
        <p className=" text-_green font-semibold">Resources</p>
        <p>FAQ</p>
        <p>Media</p>
      </div>
      <div className="space-y-3 text-[#717E83] font-light">
        <p className=" text-_green font-semibold">Legal</p>
        <p>Privacy Policy</p>
        <p>Terms Of Service</p>
      </div>{' '}
      <div className="space-y-3 text-[#717E83] font-light">
        <p className=" text-_green font-semibold">Contact</p>
        <p> support@fortcore.com</p>
        <p>WhatsApp</p>
      </div>
    </div>
  )
}
