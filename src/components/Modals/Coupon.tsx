import { useCreateCouponMutation } from '@/features/couponManager'
import { Coupon, CouponProp, PropertyProp } from '@/utils/types'
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Spinner,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

type prop = {
  setOpenCoupon: (open: boolean) => void
  openCoupon: boolean
  property: PropertyProp
}

export default function Coupon({ setOpenCoupon, openCoupon, property }: prop) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Coupon>({})

  const [createCoupon, { isLoading }] = useCreateCouponMutation()

  const submitCoupon = (data: Coupon) => {
    const { property_id, discount_percentage, ..._data } = data
    createCoupon({
      property_id: property.id,
      setOpenCoupon,
      discount_percentage: Number(discount_percentage),
      ..._data,
    })
  }

  return (
    <Modal isOpen={openCoupon} onClose={() => setOpenCoupon(false)} size={'lg'}>
      <ModalCloseButton />
      <ModalOverlay />
      <ModalContent className="py-10 px-6 lg:px-10">
        <h3>Add Coupon</h3>

        <form onSubmit={handleSubmit(submitCoupon)}>
          <div className="pt-10 space-y-4">
            <div className="">
              <label htmlFor="" className="text-sm flex">
                Name
              </label>
              <input
                type="text"
                className={`pt-2 border-b w-full pb-1 text-sm outline-none ${
                  errors.name ? `border-b-red-400` : 'border-b-[#D4D6D7]'
                }`}
                placeholder="Enter your name"
                {...register('name', { required: true })}
              />
            </div>
            <div>
              <label htmlFor="" className="text-sm flex">
                Description
              </label>
              <input
                type="text"
                className={`pt-2 border-b w-full pb-1 text-sm outline-none ${
                  errors.description ? `border-b-red-400` : 'border-b-[#D4D6D7]'
                }`}
                placeholder="Enter description"
                {...register('description', { required: true })}
              />
            </div>
            <div>
              <label htmlFor="" className="text-sm flex">
                Percentage Discount(Per Room)
              </label>
              <input
                type="text"
                className={`pt-2 border-b w-full pb-1 text-sm outline-none ${
                  errors.discount_percentage
                    ? `border-b-red-400`
                    : 'border-b-[#D4D6D7]'
                }`}
                placeholder="e.g 40%"
                {...register('discount_percentage', { required: true })}
              />
            </div>
          </div>

          <div className="flex justify-between mt-10 space-x-10">
            <button
              onClick={() => setOpenCoupon(false)}
              className="border-[#F58634] border-[1px] p-2 w-full rounded-lg text-[#F58634]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="border-[#F58634] border-[1px] p-2 w-full rounded-lg bg-[#F58634] text-white"
            >
              {isLoading ? <Spinner /> : 'Save'}
            </button>
          </div>
        </form>
      </ModalContent>
    </Modal>
  )
}
