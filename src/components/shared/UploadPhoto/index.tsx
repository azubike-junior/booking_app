import { Spinner } from '@chakra-ui/react'
import { FiCamera } from 'react-icons/fi'

type prop = {
  name?: string
  logoFunc?: any
  logoRef?: any
  loadingLogo?: boolean
}

type imageProp = {
  imageFunc?: any
  imageRef?: any
  imageLoading?: boolean
  room?: boolean
}

type imageTwoProp = {
  imageTwoFunc?: any
  imageTwoRef?: any
  imageTwoLoading?: boolean
  room?: boolean
}

type imageThreeProp = {
  imageThreeFunc?: any
  imageThreeRef?: any
  imageThreeLoading?: boolean
  room?: boolean
}

const UploadName = ({ name }: prop) => {
  return (
    <div className="border-dashed border-[0.3px] border-r-lg p-10 pt-16 h-full flex justify-center items-center text-sm">
      <div className='text-xs'>
        <div className="space-x-2 border border-[#48556C] rounded-lg  items-center justify-center py-3 px-4 w-4/6 flex mx-auto">
          <FiCamera size={20} />
          <span className="text-[#48556C]">{name}</span>
        </div>

        <p className="text-[#969DAA] text-center pt-3">
          jpg/jpeg or png, maximum 10mb each
        </p>
      </div>
    </div>
  )
}

export const UploadImage = ({
  imageRef,
  imageFunc,
  imageLoading,
  room,
}: imageProp) => {
  return (
    <button
      onClick={() => imageRef.current.click()}
      className={`w-full bg-white shadow-lg shadow-slate-200   p-4 border-[0.2px] ${
        room ? 'h-[190px] xl:h-[290px] text-sm rounded-lg' : 'h-[400px] xl:h-[600px] rounded-r-3xl'
      }`}
    >
      <input onChange={imageFunc} ref={imageRef} hidden type="file" />
      {imageLoading ? (
        <Spinner />
      ) : (
        <UploadName name={room ? 'Upload Image' : 'Upload Cover'} />
      )}
    </button>
  )
}

export const UploadLogo = ({ logoFunc, logoRef, loadingLogo }: prop) => {
  return (
    <button
      onClick={() => logoRef.current.click()}
      className="w-full bg-white shadow-lg shadow-slate-200 rounded-r-3xl  p-4 border-[0.2px] h-[280px]  "
    >
      <input onChange={logoFunc} ref={logoRef} hidden type="file" />
      {loadingLogo ? <Spinner /> : <UploadName name="Upload Logo" />}
    </button>
  )
}

export const UploadImageTwo = ({
  imageTwoRef,
  imageTwoLoading,
  imageTwoFunc,
  room,
}: imageTwoProp) => {
  return (
    <button
      onClick={() => imageTwoRef.current.click()}
      className={`w-full bg-white shadow-lg shadow-slate-200   p-4 border-[0.2px] ${
        room ? 'h-[190px] xl:h-[290px] text-sm rounded-lg' : 'h-[190px] xl:h-[280px] rounded-r-3xl'
      }`}
    >
      <input onChange={imageTwoFunc} ref={imageTwoRef} hidden type="file" />
      {imageTwoLoading ? <Spinner /> : <UploadName name="Upload Image" />}
    </button>
  )
}

export const UploadImageThree = ({
  imageThreeRef,
  imageThreeLoading,
  imageThreeFunc,
  room
}: imageThreeProp) => {
  return (
    <button
      onClick={() => imageThreeRef.current.click()}
      className={`w-full bg-white shadow-lg shadow-slate-200   p-4 border-[0.2px] ${
        room ? 'h-[190px] xl:h-[290px] text-sm rounded-lg' : 'h-[190px] xl:h-[280px] rounded-r-3xl'
      }`}
    >
      <input onChange={imageThreeFunc} ref={imageThreeRef} hidden type="file" />
      {imageThreeLoading ? <Spinner /> : <UploadName name="Upload Image" />}
    </button>
  )
}
