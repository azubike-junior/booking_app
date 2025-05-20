import AppleBtn, { PlayStoreBtn } from '@/components/StoreBtn/AppleBtn'
import { useGetAccountQuery } from '@/features/auth'
import { getItem } from '@/utils'
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { IoMdMenu } from 'react-icons/io'

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()
  const firstname = getItem('first_name')
  const lastname = getItem('last_name')
  const userId = getItem('user_id')

  const { data, isLoading } = useGetAccountQuery(userId)

  const {
    isOpen: isProfileOpen,
    onOpen: openProfile,
    onClose: closeProfile,
  } = useDisclosure()

  const pathname = usePathname()

  return (
    <header className={'bg-[#FFF7D6] sticky top-0 z-50 '}>
      <nav className="container flex justify-between  items-center max-w-[1062px]   mx-auto px-6 md:px-10 py-4 axiforma-light">
        <Link href={'/'}>
          <img src="/sendora.svg" alt="" className=" w-32 md:w-[200px]" />
        </Link>
        <IoMdMenu size={30} className="flex sm:hidden" onClick={onOpen} />

        <div className="hidden sm:flex space-x-6 items-center">
          <AppleBtn />
          <PlayStoreBtn />
        </div>
      </nav>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Image
              src="/sendora.svg"
              width={200}
              height={200}
              alt="bookteller"
              className="logo"
            />
          </DrawerHeader>

          <DrawerBody>
            <div className="block py-6">
              <AppleBtn />
            </div>
            <PlayStoreBtn />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </header>
  )
}
