'use client'

import InputField from '@/components/shared/Input'
import { useCreateRoomMutation, useGetPropertyQuery } from '@/features/property'
import {
  handleImageChange,
  handleImageThreeChange,
  handleImageTwoChange,
  uploadImage,
  uploadImageThree,
  uploadImageTwo,
} from '@/utils'
import { RoomProps } from '@/utils/types'
import { Checkbox, Spinner, useToast } from '@chakra-ui/react'
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
    setValue,
    formState: { errors },
  } = useForm<RoomProps>({})
  const toast = useToast()
  const params = useParams<{ id: string }>()
  const [createRoom, { isLoading, error, data }] = useCreateRoomMutation()
  const [loading, setLoading] = useState(false)
  const [imgUrl, setImgUrl] = useState('')
  const [logoUrl, setLogoUrl] = useState('')
  const [logoLoading, setLogoLoading] = useState(false)
  const fileRef = useRef() as MutableRefObject<HTMLInputElement>
  const logoRef = useRef() as MutableRefObject<HTMLInputElement>

  const { data: property } = useGetPropertyQuery(params.id)

  const [checks, setchecks] = useState({
    wakeup_call: false,
    laundry: false,
    intercom: false,
    internet: false,
    room_service_24h: false,
    bedside_fridge: false,
    flat_tv: false,
    air_conditioner: false,
    balcony: false,
    bed_breakfast: false,
    bathroom_telephone: false,
    smoke_detector: false,
    hair_dryer: false,
    guest_amenities: false,
    magnifying_mirror: false,
  })

  const handleCheckboxChange = (event: any) => {
    const { name, checked } = event.target
    setchecks((prevChecks) => ({
      ...prevChecks,
      [name]: checked,
    }))
  }

  async function roomHandler(data: RoomProps) {
    const {
      name,
      size,
      adults,
      category,
      price,
      mode,
      children,
      description,
    } = data
    const _data = {
      route,
      toast,
      description,
      property_name: property?.name,
      price: Number(price),
      property_id: params.id,
      adults: Number(adults),
      children: Number(children),
      wakeup_call: checks.wakeup_call ? 1 : 0,
      flat_tv: checks.flat_tv ? 1 : 0,
      laundry: checks.laundry ? 1 : 0,
      internet: checks.internet ? 1 : 0,
      room_service_24h: checks.room_service_24h ? 1 : 0,
      intercom: checks.intercom ? 1 : 0,
      bedside_fridge: checks.bedside_fridge ? 1 : 0,
      air_conditioner: checks.air_conditioner ? 1 : 0,
      balcony: checks.balcony ? 1 : 0,
      bed_breakfast: checks.bed_breakfast ? 1 : 0,
      bathroom_telephone: checks.bathroom_telephone ? 1 : 0,
      smoke_detector: checks.smoke_detector ? 1 : 0,
      hair_dryer: checks.hair_dryer ? 1 : 0,
      guest_amenities: checks.guest_amenities ? 1 : 0,
      magnifying_mirror: checks.magnifying_mirror ? 1 : 0,
      category: Number(category),
      name,
      size,
      image_one: image,
      image_two: imageTwo,
      image_three: imageThree,
      id: '',
      payment_link: '',
    }

    createRoom(_data)
  }

  const [image, setImage] = useState<any | string>('')
  const [imageTwo, setImageTwo] = useState<any | string>('')
  const [imageThree, setImageThree] = useState<any | string>('')

  const imageRef = useRef() as MutableRefObject<HTMLInputElement>
  const imageTwoRef = useRef() as MutableRefObject<HTMLInputElement>
  const imageThreeRef = useRef() as MutableRefObject<HTMLInputElement>

  const [imageLoading, setImageLoading] = useState(false)
  const [imageTwoLoading, setImageTwoLoading] = useState(false)
  const [imageThreeLoading, setImageThreeLoading] = useState(false)

  return (
    <div className="flex h-full justify-between">
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

          <div className={`lato text-5xl text-white font-bold mt-44`}>
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
      <div className="w-full lg:w-1/2 bg-white rounded-l-[40px] px-8 lg:px-20 overflow-scroll">
        <div
          onClick={() => route.back()}
          className="flex mt-20 items-center space-x-2 cursor-pointer"
        >
          <IoIosArrowDropleftCircle size={35} />
          <p>Go back</p>
        </div>
        <div className="mx-auto mt-16 max-w-[500px]">
          <p className={`quicksand text-center text-[#111827] text-3xl`}>
            Register your room here!
          </p>

          <form
            onSubmit={handleSubmit(roomHandler)}
            className={`lato space-y-8 pt-14`}
          >
            <div className="flex space-x-8">
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

              {/* <InputField
                name="price"
                label="Price"
                type="number"
                register={register}
                required
                placeHolder="Enter price"
                errors={errors?.price}
                message={'Price is required'}
              /> */}
            </div>

            <div className="flex space-x-8">
              {/* <InputField
                name="currency"
                label="Currency"
                type="text"
                register={register}
                value={property?.currency}
                required
                placeHolder="Enter name"
                errors={errors?.name}
                message={' Name is required'}
              /> */}

              <div className="w-full">
                <label
                  className="flex text-sm text-[#969DAA] font-light"
                  htmlFor=""
                >
                  Currency
                </label>

                <div className="border-[0.5px] border-[#D4D6D7] w-full mt-2 py-2 rounded-md px-4 outline-none text-sm font-medium text-[#747F8A]">
                 <p>{property?.currency}</p> 
                </div>
              </div>

              <InputField
                name="price"
                label="Price"
                type="number"
                register={register}
                required
                placeHolder="Enter price"
                errors={errors?.price}
                message={'Price is required'}
              />
            </div>

            <InputField
              name="description"
              label="Description"
              textarea
              type="text"
              register={register}
              required
              placeHolder="Enter description"
              errors={errors?.description}
              message={'Description is required'}
            />

            <div className="flex space-x-8">
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
                name="children"
                label="Children"
                type="number"
                register={register}
                required
                placeHolder="Enter number of children"
                errors={errors?.children}
                message={'Number of children is required'}
              />
            </div>

            <div className="flex space-x-8">
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
              {/* <InputField
                name="mode"
                label="Mode"
                type="number"
                register={register}
                placeHolder="Enter mode"
                errors={errors?.mode}
                message={'mode is required'}
              /> */}
            </div>

            <div>
              <label
                className="flex text-sm text-[#393F42] font-semibold pb-2"
                htmlFor=""
              >
                Attribute: Room Amenities
              </label>

              <div className="bg-[#F4F4F4] border border-[#B9B9B9] rounded-lg p-6">
                <div className="grid grid-cols-2">
                  <div className="grid grid-cols-1">
                    <Checkbox
                      onChange={handleCheckboxChange}
                      isChecked={checks.wakeup_call}
                      name="wakeup_call"
                      colorScheme="blue"
                    >
                      Wakeup calls
                    </Checkbox>
                    <Checkbox
                      onChange={handleCheckboxChange}
                      isChecked={checks.flat_tv}
                      name="flat_tv"
                      colorScheme="blue"
                    >
                      Flat TVs
                    </Checkbox>

                    <Checkbox
                      onChange={handleCheckboxChange}
                      isChecked={checks.laundry}
                      name="laundry"
                      colorScheme="blue"
                    >
                      Laundry
                    </Checkbox>

                    <Checkbox
                      onChange={handleCheckboxChange}
                      isChecked={checks.air_conditioner}
                      name="air_conditioner"
                      colorScheme="blue"
                    >
                      Air Condition
                    </Checkbox>

                    <Checkbox
                      onChange={handleCheckboxChange}
                      isChecked={checks.balcony}
                      name="balcony"
                      colorScheme="blue"
                    >
                      Balcony
                    </Checkbox>
                    <Checkbox
                      onChange={handleCheckboxChange}
                      isChecked={checks.bed_breakfast}
                      name="bed_breakfast"
                      colorScheme="blue"
                    >
                      Bed Breakfast
                    </Checkbox>
                    <Checkbox
                      onChange={handleCheckboxChange}
                      isChecked={checks.guest_amenities}
                      name="guest_amenities"
                      colorScheme="blue"
                    >
                      Guest amenities
                    </Checkbox>
                    <Checkbox
                      onChange={handleCheckboxChange}
                      isChecked={checks.magnifying_mirror}
                      name="magnifying_mirror"
                      colorScheme="blue"
                    >
                      Magnifying mirror
                    </Checkbox>
                  </div>

                  <div className="grid grid-cols-1">
                    <Checkbox
                      onChange={handleCheckboxChange}
                      isChecked={checks.bathroom_telephone}
                      name="bathroom_telephone"
                      colorScheme="blue"
                    >
                      Bathroom telephone
                    </Checkbox>
                    <Checkbox
                      onChange={handleCheckboxChange}
                      isChecked={checks.smoke_detector}
                      name="smoke_detector"
                      colorScheme="blue"
                    >
                      Smoke detector
                    </Checkbox>
                    <Checkbox
                      onChange={handleCheckboxChange}
                      isChecked={checks.hair_dryer}
                      name="hair_dryer"
                      colorScheme="blue"
                    >
                      Hair_dryer
                    </Checkbox>
                    <Checkbox
                      onChange={handleCheckboxChange}
                      isChecked={checks.internet}
                      name="internet"
                      colorScheme="blue"
                    >
                      Internet
                    </Checkbox>
                    <Checkbox
                      onChange={handleCheckboxChange}
                      isChecked={checks.room_service_24h}
                      name="room_service_24h"
                      colorScheme="blue"
                    >
                      24 hours room service
                    </Checkbox>
                    <Checkbox
                      onChange={handleCheckboxChange}
                      isChecked={checks.intercom}
                      name="intercom"
                      colorScheme="blue"
                    >
                      Intercom
                    </Checkbox>

                    <Checkbox
                      onChange={handleCheckboxChange}
                      isChecked={checks.bedside_fridge}
                      name="bedside_fridge"
                      colorScheme="blue"
                    >
                      Bedside fridge
                    </Checkbox>
                  </div>
                </div>
              </div>

              <div className="flex mb-10 space-x-6 text-sm pt-4">
                <button
                  type="button"
                  onClick={() => imageRef?.current?.click()}
                  className=" text-sm "
                >
                  <p
                    className={`quicksand text-[#737373] text-left font-semibold`}
                  >
                    Upload cover
                  </p>
                  <div className="rounded-lg h-24 w-36  border border-[#B9B9B9] flex justify-center my-2 items-center text-sm">
                    <div>
                      <input
                        onChange={(e) =>
                          handleImageChange({
                            e,
                            setImage,
                            setImageLoading,
                            uploadImage,
                          })
                        }
                        ref={imageRef}
                        hidden
                        type="file"
                      />
                      {imageLoading ? (
                        <Spinner />
                      ) : (
                        <>
                          {image ? (
                            <img src={image} alt="" className="h-24 w-36" />
                          ) : (
                            <>
                              <p className="text-[#0B60B0]">Click to Upload</p>
                              <p className="text-[#2E2E2E]">
                                {' '}
                                SVG, PNG, or JPG{' '}
                              </p>
                            </>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => imageTwoRef?.current?.click()}
                  className=" text-sm"
                >
                  <p
                    className={`quicksand text-[#737373] text-left font-semibold`}
                  >
                    Upload Image
                  </p>
                  <div className="rounded-lg h-24 w-36 border border-[#B9B9B9]  flex justify-center my-2  items-center text-sm">
                    <div>
                      <input
                        onChange={(e) =>
                          handleImageTwoChange({
                            e,
                            setImageTwoLoading,
                            setImageTwo,
                            uploadImageTwo,
                          })
                        }
                        ref={imageTwoRef}
                        hidden
                        type="file"
                      />
                      {imageTwoLoading ? (
                        <Spinner />
                      ) : (
                        <>
                          {imageTwo ? (
                            <img src={imageTwo} alt="" className="h-24 w-36" />
                          ) : (
                            <>
                              <p className="text-[#0B60B0]">Click to Upload</p>
                              <p className="text-[#2E2E2E]">
                                SVG, PNG, or JPG{' '}
                              </p>
                            </>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                  {/* <div className="flex justify-start">
                    <div className="border-[#10375C] bg-[#10375C] text-sm  text-white border py-0.5 text-center px-2 items-center  rounded-lg flex space-x-2 ">
                      <MdOutlinePhotoCamera size={16} color="white" />
                      <p>Change Image</p>
                    </div>
                  </div> */}
                </button>

                <button
                  type="button"
                  onClick={() => imageThreeRef?.current?.click()}
                  className=" text-sm"
                >
                  <p
                    className={`quicksand text-[#737373] text-left font-semibold`}
                  >
                    Upload Image
                  </p>
                  <div className="rounded-lg h-24 w-36 border border-[#B9B9B9]  flex justify-center my-2  items-center text-sm">
                    <div>
                      <input
                        onChange={(e) =>
                          handleImageThreeChange({
                            e,
                            setImageThreeLoading,
                            setImageThree,
                            uploadImageThree,
                          })
                        }
                        ref={imageThreeRef}
                        hidden
                        type="file"
                      />
                      {imageThreeLoading ? (
                        <Spinner />
                      ) : (
                        <>
                          {imageThree ? (
                            <img
                              src={imageThree}
                              alt=""
                              className="h-24 w-36"
                            />
                          ) : (
                            <>
                              <p className="text-[#0B60B0]">Click to Upload</p>
                              <p className="text-[#2E2E2E]">
                                SVG, PNG, or JPG{' '}
                              </p>
                            </>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </button>
              </div>
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
