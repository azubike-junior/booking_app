'use client'

import { AuthWrapper } from '@/components/shared/AuthWrapper'
import Button from '@/components/shared/Button'
import InputField from '@/components/shared/Input'
import {
  useEditPropertyMutation,
  useGetPropertyQuery,
} from '@/features/property'
import { handleImageChange, handleLogoChange } from '@/utils'
import { PropertyProp } from '@/utils/types'
import { Spinner, useToast } from '@chakra-ui/react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/router'
import { MutableRefObject, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { IoIosArrowDropleftCircle } from 'react-icons/io'
import { MdOutlinePhotoCamera } from 'react-icons/md'
import { uploadImage, uploadLogo } from '../../../utils/index'

export default function EditProperty() {
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
  const fileRef = useRef() as MutableRefObject<HTMLInputElement>
  const logoRef = useRef() as MutableRefObject<HTMLInputElement>

  const params = useParams<{ id: string }>()
  const { data, isLoading } = useGetPropertyQuery(params?.id)
  let img: any = data?.image
  let logo: any = data?.logo

  const [editProperty, { isLoading: editing }] = useEditPropertyMutation()

  async function editPropertyHandler(data: PropertyProp) {
    // if (!imgUrl || !logoUrl) {
    //   return
    // }
    const { id, image, number_of_rooms, country, logo, ...rest } = data
    editProperty({
      toast,
      route,
      id: params.id,
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
    <div className="">
      {isLoading ? (
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      ) : null}

      <div
        className="w-full h-[300px] lg:h-[450px] border "
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.3), rgba(11, 0, 0, 0.73)), url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
        }}
      >
        {/* Content inside the div */}
        <div className="max-w-[1062px] mx-auto px-6 md:px-10">
          <div className={`lato w-full h-[400px]`}>
            <div className=" mt-10 mx-auto text-white">
              <p className="text-3xl lg:text-6xl pt-10 lg:pt-48">
                {data?.name},{' '}
              </p>
              <p className="text-xl lg:text-3xl pt-10">
                Properties listed on Bookteller
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1062px] mt-10 mx-auto px-6 md:px-10">
        <div
          onClick={() => route.back()}
          className="flex  items-center space-x-2 cursor-pointer"
        >
          <IoIosArrowDropleftCircle size={35} />
          <p>Go back</p>
        </div>
        <div className="bg-[#F5F5F5] py-14 px-2 lg:px-10 my-10 space-y-10">
          <div className="flex items-center space-x-4">
            <Image
              src="/bookteller.svg"
              width={100}
              height={100}
              alt="bookteller"
            />
            <p className="text-3xl text-[#10375C]">Bookteller</p>
          </div>
          <p className="text-[#777C81] px-2 lg:text-xl">
            Here is your property listing details.
          </p>

          <div className="bg-white rounded-lg p-10 ">
            <form
              onSubmit={handleSubmit(editPropertyHandler)}
              className={`lato space-y-8 pt-6 lg:px-6`}
            >
              <div className="block space-y-6 lg:space-y-0  lg:flex lg:space-x-12">
                <InputField
                  name="name"
                  label="Name"
                  type="text"
                  register={register}
                  required
                  placeHolder="Enter name"
                  errors={errors?.name}
                  message={' Name is required'}
                  defaultValue={data?.name}
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
                  defaultValue={data?.address}
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
                defaultValue={data?.description}
              />

              <div className="block space-y-6 lg:space-y-0  lg:flex lg:space-x-12">
                <InputField
                  name="phone_number"
                  label="Phone Number"
                  type="text"
                  register={register}
                  required
                  placeHolder="Enter first name"
                  errors={errors?.phone_number}
                  message={'Phone is required'}
                  defaultValue={data?.phone_number}
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
                  defaultValue={data?.email_address}
                />
              </div>

              <div className="block space-y-6 lg:space-y-0  lg:flex lg:space-x-12">
                <InputField
                  name="number_of_rooms"
                  label="Number of rooms"
                  type="number"
                  register={register}
                  required
                  placeHolder="Enter last name"
                  errors={errors?.number_of_rooms}
                  message={'Number of rooms is required'}
                  defaultValue={data?.number_of_rooms}
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
                  defaultValue={data?.text_color}
                />
              </div>

              <div className="block space-y-6 lg:space-y-0  lg:flex lg:space-x-12">
                <InputField
                  name="primary_color"
                  label="Primary Color"
                  type="text"
                  register={register}
                  required
                  placeHolder="Enter last name"
                  errors={errors?.primary_color}
                  message={'Primary color is required'}
                  defaultValue={data?.primary_color}
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
                  defaultValue={data?.secondary_color}
                />
              </div>

              <div className="flex space-x-12">
                <InputField
                  name="web_address"
                  label="Web address"
                  type="text"
                  register={register}
                  required
                  placeHolder="Enter first name"
                  errors={errors?.web_address}
                  message={'Web address is required'}
                  defaultValue={data?.web_address}
                />

                <div className="w-full"></div>
              </div>

              <div className=" lg:flex mb-10 lg:space-x-6 space-y-4 lg:space-y-0 text-sm pt-4">
                <button
                  type="button"
                  onClick={() => logoRef?.current?.click()}
                  className=" text-sm "
                >
                  <p className={`lato text-[#737373] text-left font-semibold`}>
                    Upload a Logo
                  </p>
                  <div className="rounded-lg h-44 w-48  border border-[#B9B9B9] flex justify-center my-2 items-center">
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
                            <p className="text-base text-[#10375C]">
                              Logo uploaded !
                            </p>
                          ) : (
                            <img
                              src={logo}
                              alt=""
                              className="w-48 h-44 rounded-lg "
                            />
                          )}
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="border-[#10375C] bg-[#10375C] text-sm  text-white border py-0.5 text-center px-2 items-center  rounded-lg flex space-x-2 ">
                      <MdOutlinePhotoCamera size={16} color="white" />
                      <p>Change Logo</p>
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => fileRef?.current?.click()}
                  className=" text-sm"
                >
                  <p className={`lato text-[#737373] text-left font-semibold`}>
                    Upload Image
                  </p>
                  <div className="rounded-lg h-44 w-48 border border-[#B9B9B9]  flex justify-center my-2  items-center">
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
                            <p className="text-base text-[#10375C]">
                              Image uploaded !
                            </p>
                          ) : (
                            <img
                              src={data?.image}
                              alt=""
                              className="w-48 h-44 rounded-lg "
                            />
                          )}
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="border-[#10375C] bg-[#10375C] text-sm  text-white border py-0.5 text-center px-2 items-center  rounded-lg flex space-x-2 ">
                      <MdOutlinePhotoCamera size={16} color="white" />
                      <p>Change Image</p>
                    </div>
                  </div>
                </button>

                {!data?.image ? (
                  <div>
                    <button
                      onClick={() => logoRef.current.click()}
                      type="button"
                      className=" text-sm "
                    >
                      <p
                        className={`lato text-[#737373] text-left font-semibold`}
                      >
                        Upload an Image
                      </p>
                      <div className="rounded-lg h-44 w-48 bg-[#F4F4F4] border border-[#B9B9B9] flex justify-center items-center my-2">
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
                              {imgUrl ? (
                                <p>Done !</p>
                              ) : (
                                <>
                                  <p className="text-[#0B60B0]">
                                    Click to Upload
                                  </p>
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
                  </div>
                ) : null}
              </div>

              <div className="flex justify-end space-x-2">
                <Button
                  onClick={() => route.push('/properties')}
                  type="button"
                  name={'Cancel'}
                />
                <Button
                  type="submit"
                  name={editing ? <Spinner size={'14'} /> : 'Save changes'}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

EditProperty.getLayout = function getLayout(page: any) {
  return <AuthWrapper>{page}</AuthWrapper>
}
