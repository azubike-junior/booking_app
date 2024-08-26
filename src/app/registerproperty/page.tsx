'use client'

import Button from '@/components/shared/Button'
import InputField, { SelectField } from '@/components/shared/Input'
import { useCreatePropertyMutation } from '@/features/property'
import {
  handleImageChange,
  handleImageTwoChange,
  uploadImage,
  uploadImageTwo,
} from '@/utils'
import { PropertyProp } from '@/utils/types'
import {
  Modal,
  ModalContent,
  ModalOverlay,
  Spinner,
  useToast,
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { MutableRefObject, useRef, useState } from 'react'
import { ColorPicker, useColor } from 'react-color-palette'
import 'react-color-palette/css'
import { useForm } from 'react-hook-form'
import { IoIosArrowDropleftCircle } from 'react-icons/io'

export default function RegisterProperty() {
  const route = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PropertyProp>({})
  const [loading, setLoading] = useState(false)
  const toast = useToast()
  const [imgUrl, setImgUrl] = useState('')
  const [logoUrl, setLogoUrl] = useState('')
  const [logoLoading, setLogoLoading] = useState(false)
  const [colorModals, setColorModals] = useState({
    primaryColor: false,
    secondaryColor: false,
    textColor: false,
  })
  const [secondaryColor, setSecondaryColor] = useColor('#fff')
  const [primaryColor, setPrimaryColor] = useColor('#fff')
  const [textColor, setTextColor] = useColor('#fff')

  const currencies = ['NGN', 'USD', 'EURO']

  const updateColorModal = (key: string, value: boolean) => {
    setColorModals((prevState) => ({
      ...prevState,
      [key]: value,
    }))
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

  const [
    createProperty,
    { isLoading, error, data },
  ] = useCreatePropertyMutation()

  const fileRef = useRef() as MutableRefObject<HTMLInputElement>

  const logoRef = useRef() as MutableRefObject<HTMLInputElement>

  async function propertyHandler(data: PropertyProp) {
    if (!imgUrl || !logoUrl) {
      toast({
        title: 'please upload the following images listed',
        description: '',
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      })
      return
    }

    if (
      secondaryColor.hex === '#ffffff' ||
      textColor.hex === '#ffffff' ||
      primaryColor.hex === '#ffffff'
    ) {
      toast({
        title: 'please select colors to continue',
        description: '',
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      })
      return
    }
    const {
      image,
      number_of_rooms,
      country,
      logo,
      secondary_color,
      text_color,
      primary_color,
      ...rest
    } = data

    // console.log(">>>>>dataa", data);

    createProperty({
      toast,
      route,
      number_of_rooms: Number(number_of_rooms),
      country: 'Nigeria',
      image_two:imageTwo,
      image: image,
      secondary_color: secondaryColor.hex,
      primary_color: primaryColor.hex,
      text_color: textColor.hex,
      ...rest,
    })
      .unwrap()
      .then((payload) => {})
      .catch((error) => {
        toast({
          title: error?.data.error,
          description: '',
          status: 'error',
          duration: 9000,
          isClosable: true,
          position: 'top-right',
        })
      })
  }

  return (
    <div className="flex justify-between h-full">
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
      <div className=" overflow-scroll w-full lg:w-7/12 bg-white rounded-l-[40px] px-8 lg:px-20">
        <div
          onClick={() => route.back()}
          className="flex mt-20 items-center space-x-2 cursor-pointer"
        >
          <IoIosArrowDropleftCircle size={35} />
          <p>Go back</p>
        </div>
        <div className="mx-auto mt-16 max-w-[500px]">
          <p className={`quicksand text-center text-[#111827] text-3xl`}>
            Register your property here!
          </p>

          <form
            onSubmit={handleSubmit(propertyHandler)}
            className={`lato space-y-4 pt-14`}
          >
            <div className="block space-y-6 lg:space-y-0  lg:flex lg:space-x-8">
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
                name="address"
                label="Address"
                type="text"
                register={register}
                required
                placeHolder="Enter address"
                errors={errors?.address}
                message={'Address is required'}
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

            <div className="block space-y-6 lg:space-y-0  lg:flex lg:space-x-8">
              <InputField
                name="phone_number"
                label="Phone Number"
                type="text"
                register={register}
                required
                placeHolder="Enter Phone"
                errors={errors?.phone_number}
                message={'Phone is required'}
              />

              <InputField
                name="email_address"
                label="Email Address"
                type="text"
                register={register}
                required
                placeHolder="Enter email"
                errors={errors?.email_address}
                message={' Email is required'}
              />
            </div>

            <div className="block space-y-6 lg:space-y-0  lg:flex lg:space-x-8">
              <InputField
                name="web_address"
                label="Web address"
                type="text"
                register={register}
                required
                placeHolder="Enter web address"
                errors={errors?.web_address}
                message={'Web address is required'}
              />

              <InputField
                name="bank"
                label="Bank"
                type="text"
                register={register}
                required
                placeHolder="Enter bank name"
                errors={errors?.bank}
                message={'bank is required'}
              />
            </div>

            <div className="block space-y-6 lg:space-y-0  lg:flex lg:space-x-8">
              <InputField
                name="account_number"
                label="Account Number"
                type="text"
                register={register}
                required
                placeHolder="Enter account"
                errors={errors?.account_number}
                message={'Account no. is required'}
              />

              <InputField
                name="payment_link"
                label="Payment Link"
                type="text"
                register={register}
                placeHolder="Enter payment link"
                errors={errors?.payment_link}
              />
            </div>

            <SelectField
              name="currency"
              label="Currency"
              type="text"
              register={register}
              errors={errors?.payment_link}
              selectArray={currencies.map((c) => (
                <option value={c} key="">
                  {c}
                </option>
              ))}
            />

            <div className="block space-y-6 lg:space-y-0  lg:flex lg:space-x-8">
              <div className="w-full">
                <label
                  className="flex text-sm text-[#393F42] font-semibold"
                  htmlFor=""
                >
                  No. of rooms
                </label>
                <input
                  placeholder="Enter no."
                  type="number"
                  className="border-[0.5px] border-[#b7bcbe] w-full mt-2 rounded-lg p-[2.5px] px-2 outline-none font-medium text-[#747F8A]"
                  {...register('number_of_rooms', { required: true })}
                />
                {/* {errors?.number_of_rooms ? ( */}
                <p className="text-red-500 text-xs pt-1">
                  {errors?.number_of_rooms?.message}
                </p>
                {/* ) : null} */}
              </div>

              <div className="w-full">
                <label
                  className="flex text-sm text-[#393F42] font-semibold pb-2"
                  htmlFor=""
                >
                  Secondary color
                </label>
                <Button
                  onClick={() =>
                    updateColorModal(
                      'secondaryColor',
                      !colorModals.secondaryColor,
                    )
                  }
                  bg={secondaryColor.hex}
                  name="select color"
                  type="button"
                  className={`border-[#b7bcbe] text-sm  text-[#747F8A] border py-1 text-center px-2 items-center  rounded-lg flex space-x-2`}
                />
              </div>
              <div className="w-full">
                <label
                  className="flex text-sm text-[#393F42] font-semibold pb-2"
                  htmlFor=""
                >
                  Primary color
                </label>
                <Button
                  onClick={() =>
                    updateColorModal('primaryColor', !colorModals.primaryColor)
                  }
                  bg={primaryColor.hex}
                  name="select color"
                  type="button"
                  className="border-[#b7bcbe] text-sm  text-[#747F8A] border py-1 text-center px-2 items-center  rounded-lg flex space-x-2"
                />
              </div>

              <div className="w-full">
                <label
                  className="flex text-sm text-[#393F42] font-semibold pb-2"
                  htmlFor=""
                >
                  text color
                </label>
                <Button
                  onClick={() =>
                    updateColorModal('textColor', !colorModals.textColor)
                  }
                  bg={textColor.hex}
                  name="select color"
                  type="button"
                  className="border-[#b7bcbe] text-sm text-[#747F8A] border py-1 text-center px-2 items-center  rounded-lg flex space-x-2"
                />
              </div>
            </div>

            <div className="flex  mb-10 space-x-4 text-sm">
              <button
                onClick={() => imageTwoRef.current.click()}
                type="button"
                className="w-full text-sm"
              >
                <p>Upload cover</p>
                <div className="w-full bg-[#F4F4F4] rounded-lg p-4 flex justify-center mt-2 text-sm">
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
                            <img src={image} width={200} height={240} className="rounded-lg"  />
                        ) : (
                          <>
                            <p className="text-[#0B60B0]">Click to Upload</p>
                            <p className="text-[#2E2E2E]"> SVG, PNG, or JPG </p>
                          </>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </button>

              <button
                onClick={() => imageRef.current.click()}
                type="button"
                className="w-full text-sm"
              >
                <p>Upload Image</p>
               


                  <div className="w-full bg-[#F4F4F4] rounded-lg  p-4 text-sm  flex justify-center mt-2">
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
                          <img
                            src={imageTwo}
                            width={240}
                            height={200}
                            className="rounded-lg"
                          />
                        ) : (
                          <>
                            <p className="text-[#0B60B0]">Click to Upload</p>
                            <p className="text-[#2E2E2E]"> SVG, PNG, or JPG </p>
                          </>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </button>
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

      <Modal
        isOpen={colorModals.secondaryColor}
        onClose={() => updateColorModal('secondaryColor', false)}
      >
        <ModalOverlay />
        <ModalContent>
          <ColorPicker color={secondaryColor} onChange={setSecondaryColor} />;
        </ModalContent>
      </Modal>

      <Modal
        isOpen={colorModals.primaryColor}
        onClose={() => updateColorModal('primaryColor', false)}
      >
        <ModalOverlay />
        <ModalContent>
          <ColorPicker color={primaryColor} onChange={setPrimaryColor} />;
        </ModalContent>
      </Modal>

      <Modal
        isOpen={colorModals.textColor}
        onClose={() => updateColorModal('textColor', false)}
      >
        <ModalOverlay />
        <ModalContent>
          <ColorPicker color={textColor} onChange={setTextColor} />;
        </ModalContent>
      </Modal>
    </div>
  )
}
