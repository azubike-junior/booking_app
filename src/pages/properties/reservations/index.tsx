import DateOfStay from '@/components/Reservations/DateOfStay'
import GuestInfo from '@/components/Reservations/GuestInfo'
import GuestRooms from '@/components/Reservations/GuestRooms'
import ReservedRooms from '@/components/Reservations/ReservedRooms'
import Review from '@/components/Reservations/Review'
import { RoomProps } from '@/utils/types'
import { useToast } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Reservations() {
  const [step, setStep] = useState(1)
  const route = useRouter()
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RoomProps>({})
  const toast = useToast()
  const params = useParams<{ id: string }>()

  const showScreen = () => {
    if (step === 1) {
      return <GuestRooms step={step} setStep={setStep}/>
    }
    if (step === 2) {
      return <DateOfStay step={step} setStep={setStep} />
    }
    if (step === 3) {
      return <ReservedRooms step={step} setStep={setStep} />
    }
    if (step === 4) {
      return <GuestInfo  step={step} setStep={setStep}/>
    }
    if (step === 5) {
      return <Review/>
    }
  }

  return (
    <div className="flex h-screen justify-between">
      <div className=" hidden lg:block w-1/2 bg-[#00525DB2]">
        <div className="px-24 mt-16">
          <Link href={'/'}>
            <Image
              src="/whitelogo.svg"
              width={200}
              height={200}
              alt="bookteller"
            />
          </Link>

          <div
            className={`lato  text-5xl text-white font-bold mt-44`}
          >
            <p>Become </p>
            <p>future-ready</p>
          </div>

          <div
            className={`lato text-white text-xl leading-7 tracking-widest pt-10 `}
          >
            <p>Boost your online sales streamline,</p>
            <p>your operations, and engage with</p>
            <p> your guests.</p>
          </div>
        </div>
      </div>

     {showScreen()}
    </div>
  )
}
