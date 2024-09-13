'use client'

import { useEditPropertyMutation } from '@/features/property'
import {
  handleImageChange,
  handleImageThreeChange,
  handleImageTwoChange,
  uploadImage,
  uploadImageThree,
  uploadImageTwo,
} from '@/utils'
import { PropertyProp } from '@/utils/types'
import { Modal, ModalContent, ModalOverlay, Spinner } from '@chakra-ui/react'
import { MutableRefObject, useEffect, useRef, useState } from 'react'
import { ColorPicker, useColor } from 'react-color-palette'
import 'react-color-palette/css'
import { useForm } from 'react-hook-form'
import { CiEdit, CiLink, CiMail } from 'react-icons/ci'
import { FaCheckCircle } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'
import { IoMdCloseCircle } from 'react-icons/io'
import {
  IoBookmarkOutline,
  IoHomeOutline,
  IoLocationOutline,
} from 'react-icons/io5'
import { MdOutlineBedroomChild, MdOutlineMapsHomeWork } from 'react-icons/md'
import { RiBaseStationLine } from 'react-icons/ri'
import DetailCard from '../PropertyDetailCard'
import {
  UploadImage,
  UploadImageThree,
  UploadImageTwo,
} from '../shared/UploadPhoto'
import EmptyState from './emptyState'

type prop = {
  property: PropertyProp | any
  isLoading: boolean
}

export default function Properties({ property, isLoading }: prop) {
  const updateColorModal = (key: string, value: boolean) => {
    setColorModals((prevState) => ({
      ...prevState,
      [key]: value,
    }))
  }
  const imageRef = useRef() as MutableRefObject<HTMLInputElement>
  const imageTwoRef = useRef() as MutableRefObject<HTMLInputElement>
  const imageThreeRef = useRef() as MutableRefObject<HTMLInputElement>

  const [imageLoading, setImageLoading] = useState(false)
  const [imageTwoLoading, setImageTwoLoading] = useState(false)
  const [imageThreeLoading, setImageThreeLoading] = useState(false)
  const [edit, setEdit] = useState(false)
  const [colorModals, setColorModals] = useState({
    primaryColor: false,
    secondaryColor: false,
    textColor: false,
  })
  const [image, setImage] = useState<any | string>('')
  const [imageTwo, setImageTwo] = useState<any | string>('')
  const [imageThree, setImageThree] = useState<any | string>('')

  const [logoImg, setLogoImg] = useState('')

  const [
    editProperty,
    { isLoading: editingProperty },
  ] = useEditPropertyMutation()

  const [secondaryColor, setSecondaryColor] = useColor('')
  const [primaryColor, setPrimaryColor] = useColor('')
  const [textColor, setTextColor] = useColor('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PropertyProp>({})

  useEffect(() => {
    if (property) {
      setImage(property?.image)
      setImageTwo(property?.image_two)
      setImageThree(property?.image_three)
    }
  }, [property?.logo, property?.image])

  const editPropertyHandler = (data: PropertyProp) => {
    const { id, number_of_rooms, ...rest } = data

    const editedData = {
      id: property.id,
      number_of_rooms: Number(data?.number_of_rooms),
      country: 'Nigeria',
      logo: logoImg ? logoImg : property?.logo,
      image,
      image_two: imageTwo,
      image_three: imageThree,
      secondary_color: secondaryColor.hex,
      primary_color: primaryColor.hex,
      text_color: textColor.hex,
      setEdit,
      ...rest,
    }
    editProperty(editedData)
  }

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center pt-10">
          <Spinner />
        </div>
      ) : (
        <div>
          {!property ? (
            <EmptyState
              message=" You currently do not have a property registered under this account"
              subText=" Hotels, Guest Houses, Shortlets, Apartments."
              btnText="Register Your Property"
              route="property"
              property={property}
            />
          ) : (
            <>
              {property && (
                <div className=" lg:hidden pb-4">
                  <h3 className="text-xl font-semibold">{property?.name}</h3>
                  <div className="flex items-center space-x-2">
                    <MdOutlineMapsHomeWork />
                    <p className="text-sm">{property?.address}</p>
                  </div>
                </div>
              )}

              {/* web image */}
              <div className="hidden lg:flex space-x-8 w-full ">
                <div className="w-8/12 relative h-[400px] xl:h-[600px] bg-[#f7f5f5] rounded-l-3xl">
                  {edit && (
                    <IoMdCloseCircle
                      onClick={() => setImage('')}
                      size={30}
                      className="absolute right-8 top-6 cursor-pointer"
                      color="white"
                    />
                  )}

                  {!image ? (
                    <UploadImage
                      imageRef={imageRef}
                      imageFunc={(e: any) =>
                        handleImageChange({
                          e,
                          setImage,
                          setImageLoading,
                          uploadImage,
                        })
                      }
                      imageLoading={imageLoading}
                    />
                  ) : (
                    <img
                      src={image}
                      alt=""
                      className="w-full rounded-l-3xl h-[400px] xl:h-[600px] "
                    />
                  )}
                </div>

                <div className="w-4/12 flex flex-col justify-between space-y-4  ">
                  {!imageTwo ? (
                    <UploadImageTwo
                      imageTwoFunc={(e: any) =>
                        handleImageTwoChange({
                          e,
                          setImageTwoLoading,
                          setImageTwo,
                          uploadImageTwo,
                        })
                      }
                      imageTwoRef={imageTwoRef}
                      imageTwoLoading={imageTwoLoading}
                    />
                  ) : (
                    <div className="h-[190px] xl:h-1/2   relative bg-[#f7f5f5] rounded-r-3xl ">
                      {edit && (
                        <IoMdCloseCircle
                          onClick={() => setImageTwo('')}
                          size={30}
                          color="white"
                          className="absolute right-8 top-6 cursor-pointer"
                        />
                      )}
                      <img
                        src={imageTwo}
                        alt=""
                        className="rounded-r-3xl w-full object-cover h-[190px] xl:h-[290px]"
                      />
                    </div>
                  )}

                  {!imageThree ? (
                    <UploadImageThree
                      imageThreeFunc={(e: any) =>
                        handleImageThreeChange({
                          e,
                          setImageThree,
                          setImageThreeLoading,
                          uploadImageThree,
                        })
                      }
                      imageThreeLoading={imageThreeLoading}
                      imageThreeRef={imageThreeRef}
                    />
                  ) : (
                    <div className="h-[190px] xl:h-1/2 relative bg-[#f7f5f5] rounded-r-3xl ">
                      {edit && (
                        <IoMdCloseCircle
                          onClick={() => setImageThree('')}
                          size={30}
                          color="white"
                          className="absolute right-8 top-6 cursor-pointer"
                        />
                      )}
                      <img
                        src={imageThree}
                        alt=""
                        className="rounded-r-3xl w-full h-[190px] xl:h-[290px] object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* mobile image */}
              <div className=" space-y-4 w-full lg:hidden gap-6">
                <div className="flex space-x-4">
                  <div className="relative bg-[#f7f5f5] h-[190px] xl:h-[290px] rounded-lg w-full">
                    {edit && (
                      <IoMdCloseCircle
                        onClick={() => setImage('')}
                        size={30}
                        className="absolute right-8 top-6 cursor-pointer"
                        color="white"
                      />
                    )}

                    {!image ? (
                      <UploadImage
                        room
                        imageRef={imageRef}
                        imageFunc={(e: any) =>
                          handleImageChange({
                            e,
                            setImage,
                            setImageLoading,
                            uploadImage,
                          })
                        }
                        imageLoading={imageLoading}
                      />
                    ) : (
                      <img
                        src={image}
                        alt=""
                        className=" h-[190px] xl:h-[290px] rounded-2xl w-full"
                      />
                    )}
                  </div>
                  <div className="w-full h-[190px] xl:h-[290px]">
                    {!imageTwo ? (
                      <UploadImageTwo
                        room
                        imageTwoFunc={(e: any) =>
                          handleImageTwoChange({
                            e,
                            setImageTwoLoading,
                            setImageTwo,
                            uploadImageTwo,
                          })
                        }
                        imageTwoRef={imageTwoRef}
                        imageTwoLoading={imageTwoLoading}
                      />
                    ) : (
                      <div className="relative bg-[#f7f5f5] h-[190px] xl:h-[290px] rounded-lg w-full">
                        {edit && (
                          <IoMdCloseCircle
                            onClick={() => setImageTwo('')}
                            size={30}
                            color="white"
                            className="absolute right-8 top-6 cursor-pointer"
                          />
                        )}
                        <img
                          src={imageTwo}
                          alt=""
                          className=" h-[190px] xl:h-[290px] rounded-2xl w-full"
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <div className="relative bg-[#f7f5f5] h-[190px] xl:h-[290px] rounded-lg w-full">
                    {!imageThree ? (
                      <UploadImageThree
                        room
                        imageThreeFunc={(e: any) =>
                          handleImageThreeChange({
                            e,
                            setImageThree,
                            setImageThreeLoading,
                            uploadImageThree,
                          })
                        }
                        imageThreeLoading={imageThreeLoading}
                        imageThreeRef={imageThreeRef}
                      />
                    ) : (
                      <div className="h-[190px] xl:h-[290px]  relative bg-[#f7f5f5] rounded-r-3xl ">
                        {edit && (
                          <IoMdCloseCircle
                            onClick={() => setImageThree('')}
                            size={30}
                            color="white"
                            className="absolute right-8 top-6 cursor-pointer"
                          />
                        )}
                        <img
                          src={imageThree}
                          alt=""
                          className=" h-[190px] xl:h-[290px] rounded-2xl w-full"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit(editPropertyHandler)}>
                <div className="flex justify-center lg:justify-between items-center">
                  <div className="flex items-center space-x-2 lg:space-x-4 pt-8 text-xs lg:text-lg">
                    <button
                      type="button"
                      disabled={!edit}
                      onClick={() =>
                        updateColorModal(
                          'primaryColor',
                          !colorModals.primaryColor,
                        )
                      }
                      className={`flex space-x-2 items-center ${
                        edit ? 'cursor-pointer' : 'cursor-default'
                      }`}
                    >
                      {edit ? (
                        <div
                          style={{
                            background: primaryColor.hex
                              ? primaryColor.hex
                              : property?.primary_color,
                          }}
                          className={` h-5 w-5 lg:w-7 lg:h-7 rounded-full border-[0.2px]`}
                        ></div>
                      ) : (
                        <div
                          style={{ background: property?.primary_color }}
                          className={`h-5 w-5 lg:w-7 xl:h-7 rounded-full`}
                        ></div>
                      )}
                      <p>Primary Color</p>
                    </button>

                    <button
                      type="button"
                      disabled={!edit}
                      onClick={() =>
                        updateColorModal(
                          'secondaryColor',
                          !colorModals.secondaryColor,
                        )
                      }
                      className={`flex space-x-2 items-center ${
                        edit ? 'cursor-pointer' : 'cursor-default'
                      }`}
                    >
                      {edit ? (
                        <div
                          style={{
                            background: secondaryColor.hex
                              ? secondaryColor.hex
                              : property?.secondary_color,
                          }}
                          className=" h-5 w-5 lg:w-7 xl:h-7 rounded-full border-[0.2px]"
                        ></div>
                      ) : (
                        <div
                          style={{ background: property?.secondary_color }}
                          className=" h-5 w-5 lg:w-7 xl:h-7 rounded-full"
                        ></div>
                      )}
                      <p>Secondary Color</p>
                    </button>

                    <button
                      type="button"
                      disabled={!edit}
                      onClick={() =>
                        updateColorModal('textColor', !colorModals.textColor)
                      }
                      className={`flex space-x-2 items-center ${
                        edit ? 'cursor-pointer' : 'cursor-default'
                      }`}
                    >
                      {edit ? (
                        <div
                          style={{
                            background: textColor.hex
                              ? textColor.hex
                              : property?.text_color,
                          }}
                          className="h-5 w-5 lg:w-7 xl:h-7 rounded-full border-[0.2px]"
                        ></div>
                      ) : (
                        <div
                          style={{ background: property?.text_color }}
                          className=" h-5 w-5 lg:w-7 xl:h-7 rounded-full"
                        ></div>
                      )}
                      <p>Text Color</p>
                    </button>

                    {edit && (
                      <IoMdCloseCircle size={24} className="cursor-pointer" />
                    )}
                  </div>

                  <div className="hidden lg:block">
                    {edit ? (
                      <div className="flex space-x-4">
                        <div
                          onClick={() => setEdit(false)}
                          className={`flex space-x-2 p-2 px-4 items-center rounded-lg mt-4 lato text-sm bg-[#E8EAED] cursor-pointer
                  }`}
                        >
                          <span>Cancel</span>
                        </div>
                        <button
                          type={'submit'}
                          className="flex space-x-2 p-2 items-center rounded-lg mt-4 lato text-sm bg-[#34C759] text-white px-4"
                        >
                          {editingProperty ? <Spinner /> : 'Save'}
                        </button>
                      </div>
                    ) : (
                      <div
                        onClick={() => setEdit(true)}
                        className={`flex space-x-2 p-2 px-4 items-center rounded-lg mt-4 lato text-sm bg-[#E8EAED] cursor-pointer
                  }`}
                      >
                        <CiEdit size={24} />
                        <span>Edit Property details</span>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <div className="pt-6 space-y-3 lg:space-y-6">
                    <div className="flex justify-between lg:space-x-4 border-b-[0.1px] lg:border-0">
                      <DetailCard
                        icon={<IoHomeOutline size={20} />}
                        img="/location.svg"
                        subtitle={property?.name}
                        edit={edit}
                        name="name"
                        register={register}
                      />
                      <DetailCard
                        icon={<IoLocationOutline size={20} />}
                        img="/location.svg"
                        subtitle={property?.address}
                        edit={edit}
                        name="address"
                        register={register}
                      />
                      <DetailCard
                        icon={<FiPhone size={20} />}
                        img="/location.svg"
                        subtitle={property?.phone_number}
                        edit={edit}
                        name="phone_number"
                        register={register}
                      />
                    </div>
                    <div className="flex justify-between lg:space-x-4 border-b-[0.1px] lg:border-0">
                      <DetailCard
                        icon={<RiBaseStationLine size={20} />}
                        img="/location.svg"
                        subtitle={property?.web_address}
                        edit={edit}
                        name="web_address"
                        register={register}
                      />
                      <DetailCard
                        icon={<CiLink size={20} />}
                        img="/location.svg"
                        subtitle={property?.payment_link}
                        edit={edit}
                        name="payment_link"
                        register={register}
                      />
                      <DetailCard
                        icon={<IoBookmarkOutline size={20} />}
                        img="/location.svg"
                        subtitle="Total Bookings"
                        value="12"
                      />
                    </div>

                    <div className="flex justify-between lg:space-x-4 border-b-[0.1px] lg:border-0">
                      <DetailCard
                        icon={<MdOutlineBedroomChild size={20} />}
                        img="/location.svg"
                        subtitle="Total Rooms"
                        value={property?.number_of_rooms}
                        edit={edit}
                        name="number_of_rooms"
                        register={register}
                      />
                      <DetailCard
                        icon={<CiMail size={20} />}
                        img="/location.svg"
                        subtitle={property?.email_address}
                        edit={edit}
                        name="email_address"
                        register={register}
                      />
                      <DetailCard
                        icon={<FaCheckCircle size={20} color="#F58634" />}
                        img="/location.svg"
                        subtitle="Published Rooms"
                        value="12"
                      />
                      {/* <div className="w-full px-2"></div> */}
                    </div>
                  </div>

                  <div className="pt-10 space-y-4">
                    {edit ? (
                      <>
                        <IoMdCloseCircle size={24} className="cursor-pointer" />

                        <textarea
                          className="w-full p-3 border-[0.4px] text-sm rounded-lg outline-none"
                          defaultValue={property?.description}
                          {...register('description')}
                        />
                      </>
                    ) : (
                      <p className="text-sm lg:text-base">
                        {property?.description}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex justify-center items-center lg:hidden pt-4">
                  {edit ? (
                    <div className="flex space-x-4">
                      <div
                        onClick={() => setEdit(false)}
                        className={`flex space-x-2 p-2 px-4 items-center rounded-lg mt-4 lato text-sm bg-[#E8EAED] cursor-pointer
                  }`}
                      >
                        <span>Cancel</span>
                      </div>
                      <button
                        type={'submit'}
                        className="flex space-x-2 p-2 items-center rounded-lg mt-4 lato text-sm bg-[#34C759] text-white px-4"
                      >
                        {editingProperty ? <Spinner /> : 'Save'}
                      </button>
                    </div>
                  ) : (
                    <div
                      onClick={() => setEdit(true)}
                      className={`flex space-x-2 p-2 px-4 items-center rounded-lg mt-4 lato text-sm bg-[#E8EAED] cursor-pointer
                  }`}
                    >
                      <CiEdit size={24} />
                      <span>Edit Property details</span>
                    </div>
                  )}
                </div>
              </form>
            </>
          )}
        </div>
      )}

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
