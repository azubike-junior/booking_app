import AppleBtn, { PlayStoreBtn } from '@/components/StoreBtn/AppleBtn'
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { IoMdMenu } from 'react-icons/io'

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()


  return (
    <header className={'bg-[#6DBE45] pt-10 '}>
      <nav className="  bg-[#FFF7D6] rounded-[39px] flex justify-between  items-center max-w-[1062px]   mx-auto px-6 md:px-2 md:pl-6 py-2">
        <Link href={'/'}>
          <Image src="/logo.svg" width={178} height={28} alt="logo"/>
        </Link>
        <IoMdMenu size={30} className="flex sm:hidden" onClick={onOpen} />

          <div className='bg-[#6DBE45] text-white rounded-[32px] px-5 py-2.5'>
            Download
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
