import { RoomOrderProp } from '@/utils/types'
import { Drawer, DrawerCloseButton, DrawerContent } from '@chakra-ui/react'
import { IoCloseCircle } from 'react-icons/io5'
import Button from '../shared/Button'

interface Sub {
  openCheckout: boolean
  setOpenCheckout: (open: boolean) => void
  setOpenCart: (open: boolean) => void
  cartItems: RoomOrderProp[]
  removeItem: (id: string) => void
  openCart: boolean
  bg: string
}

export const CartModal = ({
  openCheckout,
  setOpenCheckout,
  cartItems,
  removeItem,
  setOpenCart,
  openCart,
  bg,
}: Sub) => {
  const total = cartItems.reduce((acc: number, cur) => {
    return cur.price + acc
  }, 0)

  return (
    <Drawer isOpen={openCart} onClose={() => setOpenCart(false)} size="md">
      <DrawerContent className="py-10 px-4">
        <DrawerCloseButton />
        <h1 className="quicksand text-xl leading-8 tracking-wider text-center  font-medium ">
          Your bookings
        </h1>
        <p className="text-sm text-center">List of rooms in your cart</p>

        {cartItems.length === 0 ? (
          <p className="text-center mt-10">No items in your cart</p>
        ) : (
          <div className="mt-10  rounded-xl px-4 py-4 space-y-4">
            {cartItems?.map((c: RoomOrderProp) => {
              return (
                <div
                  key={c.room_id}
                  className="flex border-b justify-between px-4 py-4  items-center text-xl rounded-xl relative"
                >
                  <IoCloseCircle
                    className="absolute right-0 -top-2 cursor-pointer"
                    size={30}
                    onClick={() => removeItem(c.room_id)}
                  />

                  <div className="flex space-x-3 items-center">
                    <img
                      src={!c.image ? '/placeholder.png' : c?.image}
                      alt=""
                      className="w-16 h-16 z-0 rounded-lg"
                    />
                    <p className="font-semibold">{c.room_name}</p>
                  </div>

                  <div>
                    <p> &#8358; {c.price.toLocaleString()}</p>
                  </div>
                </div>
              )
            })}

            <hr />

            <div className="flex justify-between px-4">
              <p>Total:</p>

              <p> &#8358; {total.toLocaleString()}</p>
            </div>

            <div className="flex justify-end">
              <Button
                onClick={() => {
                  setOpenCheckout(true)
                  setOpenCart(false)
                }}
                type="button"
                name="Checkout "
                bg={bg}
                className={`border-[#10375C]  text-white border py-1.5 text-xs mt-2 lg:mt-4 lg:text-sm text-center px-4 rounded-lg w-full`}
              />
            </div>
          </div>
        )}
      </DrawerContent>
    </Drawer>
  )
}
