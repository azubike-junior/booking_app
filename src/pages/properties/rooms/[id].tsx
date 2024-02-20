import InputField from '@/components/Input'
import { useCreateRoomMutation } from '@/features/property'
import { lato, lato_bold, quickSand } from '@/utils'
import { RoomProps } from '@/utils/types'
import { Spinner, useToast } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { MutableRefObject, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { IoIosArrowDropleftCircle } from 'react-icons/io'

export default function RegisterRoom() {
  const route = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RoomProps>({})
  const toast = useToast()
  const params = useParams<{ id: string }>()
  const [createRoom, { isLoading, error, data }] = useCreateRoomMutation()

  async function roomHandler(data: RoomProps) {
    const { name, size, adults, flat_tv, wakeup_call, laundry, intercom, internet, category, price, mode, children, room_service_24h, bedside_fridge } = data
    const _data = {
      route,
      toast,
      price: Number(price),
      property_id: params.id,
      adults: Number(adults),
      mode: Number(mode),
      children: Number(children),
      wakeup_call: Number(wakeup_call),
      flat_tv: Number(flat_tv),
      laundry: Number(laundry),
      internet: Number(internet),
      room_service_24h: Number(room_service_24h),
      intercom: Number(intercom),
      bedside_fridge: Number(bedside_fridge),
      category: Number(category),
      name,
      size
    }
    createRoom(_data)
  }

  return (
    <div className="flex justify-between content_bg">
      <div className="w-5/12 ">
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
            className={`${lato_bold.className} text-5xl text-white font-bold mt-44`}
          >
            <p>Become </p>
            <p>future-ready</p>
          </div>

          <div
            className={`${lato.className} text-white text-xl leading-7 tracking-widest pt-10 `}
          >
            <p>Boost your online sales streamline,</p>
            <p>your operations, and engage with</p>
            <p> your guests.</p>
          </div>
        </div>
      </div>
      <div className=" w-7/12 bg-white rounded-l-[40px] px-20">
        <div
          onClick={() => route.back()}
          className="flex mt-20 items-center space-x-2 cursor-pointer"
        >
          <IoIosArrowDropleftCircle size={35} />
          <p>Go back</p>
        </div>
        <div className="mx-auto mt-16 max-w-[500px]">
          <p
            className={`${quickSand.className} text-center text-[#111827] text-3xl`}
          >
            Register your room here!
          </p>

          <form
            onSubmit={handleSubmit(roomHandler)}
            className={`${lato.className} space-y-8 pt-14`}
          >
            <InputField
              name="name"
              label="Name"
              type="text"
              register={register}
              required
              placeHolder="Enter name"
              errors={errors?.name}
              message={' Name is required'}
            />

            <InputField
              name="size"
              label="Size"
              type="text"
              register={register}
              required
              placeHolder="Enter size"
              errors={errors?.size}
              message={'Size is required'}
            />

            <InputField
              name="price"
              label="Price"
              type="text"
              register={register}
              required
              placeHolder="Enter price"
              errors={errors?.price}
              message={'Price is required'}
            />

            <InputField
              name="adults"
              label="Adults"
              type="number"
              register={register}
              required
              placeHolder="Enter number of adults"
              errors={errors?.adults}
              message={' numbers of adults is required'}
            />
            <InputField
              name="mode"
              label="Mode"
              type="number"
              register={register}
              placeHolder="Enter mode"
              errors={errors?.mode}
              message={'mode is required'}
            />

            <div className="flex space-x-8">
              <InputField
                name="children"
                label="Children"
                type="number"
                register={register}
                required
                placeHolder="Enter number of children"
                errors={errors?.children}
                message={'Number of children is required'}
              />
              <InputField
                name="wakeup_call"
                label="Wakeup Calls"
                type="number"
                register={register}
                placeHolder="Enter number of wakeup calls"
                errors={errors?.wakeup_call}
                message={'number of wakeup calls is required'}
              />
            </div>

            <div className="flex space-x-8">
              <InputField
                name="flat_tv"
                label="Flat TVs"
                type="number"
                register={register}
                required
                placeHolder="Enter number of flat TVs"
                errors={errors?.flat_tv}
                message={'number of flat tvs is required'}
              />
              <InputField
                name="laundry"
                label="Laundry"
                type="number"
                register={register}
                required
                placeHolder="Enter number of laundry"
                errors={errors?.laundry}
                message={'number of laundry is required'}
              />
            </div>

            <div className="flex space-x-8">
              <InputField
                name="internet"
                label="Internet"
                type="number"
                register={register}
                placeHolder="Enter number of internets"
                errors={errors?.internet}
                message={'number of internets is required'}
              />
              <InputField
                name="room_service_24h"
                label="Room Service"
                type="number"
                register={register}
                placeHolder="Enter number of room service"
                errors={errors?.room_service_24h}
                message={'number of room service is required'}
              />
            </div>

            <div className="flex space-x-8">
              <InputField
                name="intercom"
                label="Intercom"
                type="number"
                register={register}
                required
                placeHolder="Enter number of intercoms"
                errors={errors?.intercom}
                message={'number of internets is required'}
              />
              <InputField
                name="room_service_24h"
                label="Room Service"
                type="number"
                register={register}
                placeHolder="Enter number of room service"
                errors={errors?.room_service_24h}
                message={'number of room service is required'}
              />
            </div>

            <div className="flex space-x-8">
              <InputField
                name="bedside_fridge"
                label="Beside Fridge"
                type="number"
                register={register}
                placeHolder=""
                errors={errors?.bedside_fridge}
                message={'number of internets is required'}
              />
              <InputField
                name="category"
                label="Category"
                type="number"
                register={register}
                placeHolder="Enter number of category"
                errors={errors?.category}
                message={'number of room service is required'}
              />
            </div>

            <div className="">
              <button
                type="submit"
                className="bg-primary-color py-3 text-center w-full text-white my-10 rounded-lg"
              >
                {isLoading ? <Spinner /> : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
