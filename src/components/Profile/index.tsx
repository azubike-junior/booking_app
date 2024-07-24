import { useEditAccountMutation, useGetAccountQuery } from '@/features/auth'
import { getItem } from '@/utils'
import { LoginResponse } from '@/utils/types'
import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  InputProps,
  Spinner,
  useToast,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { CiEdit } from 'react-icons/ci'
import { IoMdArrowBack } from 'react-icons/io'
import InputField from '../shared/Input'

type ProfileProps = {
  isOpen: boolean
  onClose: () => void
}

const Input = ({ name, value }: InputProps) => {
  return (
    <div className="bg-white  w-full px-6 rounded-lg py-2 flex justify-between border-b">
      <p className="text-[#737373] text-base">{name}</p>
      <p className="capitalize ">{value}</p>
    </div>
  )
}

export default function Profile({ isOpen, onClose }: ProfileProps) {
  const [userId, setUserId] = useState('')
  const [edit, setEdit] = useState(false)
  const toast = useToast()

  useEffect(() => {
    setUserId(getItem('user_id'))
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<LoginResponse>({})

  const { data, isLoading } = useGetAccountQuery(userId)
  const [editAccount, { isLoading: loadingAction }] = useEditAccountMutation()

  const editAccountHandler = (data: LoginResponse) => {
    const { id, ...rest } = data
    const newData = { id: userId, toast, ...rest }
    editAccount(newData)
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
    <Drawer size="md" isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />

      <DrawerContent>
        {!edit ? (
          <div className="bg-[#F5F5F5] h-[160px]">
            <div className="flex justify-end p-6">
              <CiEdit
                size={26}
                className="cursor-pointer"
                onClick={() => setEdit(!edit)}
              />
            </div>
          </div>
        ) : (
          <div className="flex justify-end p-6">
            <IoMdArrowBack
              size={26}
              className="cursor-pointer"
              onClick={() => setEdit(!edit)}
            />
          </div>
        )}

        {!edit ? (
          <>
            <img
              src="/placeholder.png"
              alt=""
              className="w-36 h-36 rounded-full overflow-hidden -mt-20  mx-auto border border-[#a2a0a0] shadow-xl"
            />
            <h4 className="capitalize text-center text-2xl font-semibold mt-4">
              {data?.firstname} {data?.lastname}
            </h4>
          </>
        ) : null}

        {!edit ? (
          <div className="px-6 mt-10 space-y-10">
            <div className="space-y-3">
              <Input name="Email" value={data?.email} />
              <Input name="Phone Number" value={data?.mobilenumber} />
              <Input
                name="Status"
                value={
                  data?.verification_status === 1 ? 'verified' : 'not verified'
                }
              />
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(editAccountHandler)}
            className={`lato space-y-6 px-10`}
          >
            <InputField
              name="firstname"
              label="First Name"
              type="text"
              register={register}
              required
              defaultValue={data?.firstname}
              placeHolder="Enter first name"
              errors={errors?.firstname}
              message={'First Name is required'}
            />

            <InputField
              name="lastname"
              label="Last Name"
              type="text"
              register={register}
              required
              defaultValue={data?.lastname}
              placeHolder="Enter last name"
              errors={errors?.lastname}
              message={'Last Name is required'}
            />

            <InputField
              name="phonenumber"
              label="Phone"
              type="number"
              register={register}
              defaultValue={data?.mobilenumber}
              required
              placeHolder="Enter phone number"
              errors={errors?.mobilenumber}
              message={'Phone is required'}
            />

            <InputField
              name="email"
              label="Email Address"
              type="email"
              register={register}
              defaultValue={data?.email}
              required
              placeHolder="Enter email address"
              errors={errors?.email}
              message={'Email is required'}
            />

            <button
              type="submit"
              className="bg-primary-color py-3 text-center w-full text-white mt-10 rounded-lg"
            >
              {loadingAction ? <Spinner /> : 'Save update'}
            </button>
          </form>
        )}
      </DrawerContent>
    </Drawer>
  )
}
