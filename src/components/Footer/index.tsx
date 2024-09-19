import Link from 'next/link'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { IoLogoInstagram } from 'react-icons/io'

export default function Footer() {
  return (
    <div className="max-w-[1062px] mx-auto px-8 md:px-10 text-sm">
      <div
        className={`lato flex space-x-10 lg:space-x-20 justify-between pb-6`}
      >
        <Link href={'/'}>
          <img src="/bookteller.svg" alt="" className=" w-40 md:w-[150px]" />
          <img src="/SSL.svg" alt="" className=" w-12" />
        </Link>

        <div className="grid grid-cols-2 gap-10  lg:flex justify-between w-full">
          <div className="space-y-3 text-[#717E83] font-light">
            <p className=" text-_green font-semibold ">Company</p>
            <p>
              <Link href="/about">About Us</Link>
            </p>
            <p>
              <Link href="/contact">Contact Us</Link>
            </p>
          </div>
          <div className="space-y-3 text-[#717E83] font-light">
            <p className=" text-_green font-semibold">Solutions</p>
            <p>
              <Link
                passHref
                legacyBehavior
                href={'https://yubinax.com/hotel-marketing/'}
              >
                <a target="_blank">Hotel marketing</a>
              </Link>
            </p>

            <p>
              <Link
                passHref
                legacyBehavior
                href={'https://bookteller.ng/page/register'}
              >
                <a target="_blank">Booking portal</a>
              </Link>
            </p>

            <p>
              <Link passHref legacyBehavior href={'https://yubinax.com'}>
                <a target="_blank">Hotel website</a>
              </Link>
            </p>
          </div>
          <div className="space-y-3 text-[#717E83] font-light">
            <p className=" text-_green font-semibold">Legal</p>
            <p>
              <Link
                href="https://policies.google.com/privacy"
                passHref
                legacyBehavior
              >
                <a target="_blank"> Google Privacy Policy</a>
              </Link>
            </p>
            <p>
              <Link
                href="https://policies.google.com/terms"
                passHref
                legacyBehavior
              >
                <a target="_blank">Terms of Service</a>
              </Link>{' '}
            </p>
            {/* <p>Refund Policy</p> */}
          </div>

          <div className="space-y-3 text-[#717E83] font-light">
            <p className=" text-_green font-semibold">Contact</p>
            {/* <p>Partner</p> */}
            <p> +2348150367790</p>
            <p>support@bookteller.ng</p>
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
              <Link
                passHref
                legacyBehavior
                href={'https://web.facebook.com/booktellerng'}
              >
                <a target="_blank">
                  <FaFacebook size={24} />
                </a>
              </Link>
              <Link
                passHref
                legacyBehavior
                href={'https://twitter.com/booktellerng'}
              >
                <a target="_blank">
                  <FaXTwitter size={24} />
                </a>
              </Link>

              <Link
                passHref
                legacyBehavior
                href={'https://www.instagram.com/bookteller_ng'}
              >
                <a target="_blank">
                  <IoLogoInstagram size={24} />
                </a>
              </Link>
              <Link
                passHref
                legacyBehavior
                href={'https://www.linkedin.com/company/booktellerng'}
              >
                <a target="_blank">
                  <FaLinkedin size={24} />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <hr /> */}

      <p className="text-center py-6 text-sm text-[#717E83]">
        Copyright © 2024 BTL Engine
      </p>
    </div>
  )
}
