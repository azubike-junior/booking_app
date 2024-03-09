import InputField from '@/components/shared/Input'
import { useCreatePropertyMutation } from '@/features/property'
import {
  handleImageChange,
  handleLogoChange,
  lato,
  lato_bold,
  quickSand,
} from '@/utils'
import { PropertyProp } from '@/utils/types'
import { Spinner, useToast } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { MutableRefObject, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { IoIosArrowDropleftCircle } from 'react-icons/io'
import { uploadImage, uploadLogo } from '../../utils/index'

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

  const [
    createProperty,
    { isLoading, error, data },
  ] = useCreatePropertyMutation()

  const fileRef = useRef() as MutableRefObject<HTMLInputElement>

  const logoRef = useRef() as MutableRefObject<HTMLInputElement>

  async function propertyHandler(data: PropertyProp) {
    if (!imgUrl || !logoUrl) {
      return
    }
    const { image, number_of_rooms, country, logo, ...rest } = data
    createProperty({
      toast,
      route,
      number_of_rooms: Number(number_of_rooms),
      country: 'Nigeria',
      logo: logoUrl,
      image: imgUrl,
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
      <div className=" w-full lg:w-7/12 bg-white rounded-l-[40px] px-8 lg:px-20">
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
            Register your property here!
          </p>

          <form
            onSubmit={handleSubmit(propertyHandler)}
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
              name="address"
              label="Address"
              type="text"
              register={register}
              required
              placeHolder="Enter address"
              errors={errors?.address}
              message={'Address is required'}
            />

            <InputField
              name="phone_number"
              label="Phone Number"
              type="text"
              register={register}
              required
              placeHolder="Enter first name"
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
            <InputField
              name="web_address"
              label="Web address"
              type="text"
              register={register}
              required
              placeHolder="Enter first name"
              errors={errors?.web_address}
              message={'Web address is required'}
            />

            <div className="block space-y-6 lg:space-y-0  lg:flex lg:space-x-8">
              <InputField
                name="number_of_rooms"
                label="Number of rooms"
                type="number"
                register={register}
                required
                placeHolder="Enter last name"
                errors={errors?.number_of_rooms}
                message={'Number of rooms is required'}
              />
              <InputField
                name="text_color"
                label="Text Color"
                type="text"
                register={register}
                required
                placeHolder="Enter last name"
                errors={errors?.text_color}
                message={'Text color is required'}
              />
            </div>

            <div className="block space-y-6 lg:space-y-0  lg:flex lg:space-x-8">
              <InputField
                name="primary_color"
                label="Primary Color"
                type="text"
                register={register}
                required
                placeHolder="Enter last name"
                errors={errors?.primary_color}
                message={'Primary color is required'}
              />
              <InputField
                name="secondary_color"
                label="Secondary Color"
                type="text"
                register={register}
                required
                placeHolder="Enter last name"
                errors={errors?.secondary_color}
                message={'Secondary color is required'}
              />
            </div>

            <div className="flex  mb-10 space-x-4 text-sm">
              <button
                onClick={() => logoRef.current.click()}
                type="button"
                className="w-full text-sm"
              >
                <p>Upload a Logo</p>
                <div className="w-full bg-[#F4F4F4] rounded-lg  py-10 flex justify-center mt-2">
                  <div>
                    <input
                      onChange={(e) =>
                        handleLogoChange({
                          e,
                          setLogoLoading,
                          setLogoUrl,
                          uploadLogo,
                        })
                      }
                      ref={logoRef}
                      hidden
                      type="file"
                    />
                    {logoLoading ? (
                      <Spinner />
                    ) : (
                      <>
                        {logoUrl ? (
                          <p>Done !</p>
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
                onClick={() => fileRef.current.click()}
                type="button"
                className="w-full text-sm"
              >
                <p>Upload Image</p>
                <div className="w-full bg-[#F4F4F4] rounded-lg  py-10 flex justify-center mt-2">
                  <div>
                    <input
                      onChange={(e) =>
                        handleImageChange({
                          e,
                          setLoading,
                          setImgUrl,
                          uploadImage,
                        })
                      }
                      ref={fileRef}
                      hidden
                      type="file"
                    />
                    {loading ? (
                      <Spinner />
                    ) : (
                      <>
                        {imgUrl ? (
                          <p>Done !</p>
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
    </div>
  )
}
