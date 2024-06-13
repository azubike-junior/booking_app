// import Navbar from '@/components/Navbar'
import { store } from '@/store'
import '@/styles/globals.css'
import { lato, lora, poppins, quickSand, roboto } from '@/utils'
import { ChakraProvider } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { Provider } from 'react-redux'
const Navbar = dynamic(() => import('@/components/shared/Navbar'), {
  ssr: false,
})

export default function App({ Component, pageProps }: any) {
  const { pathname } = useRouter()
  const noNavbarPaths = [
    '/auth/signup',
    '/properties/registerproperty',
    '/payment/success',
    '/auth/login',
    `/properties/rooms/create/[id]`,
    `/properties/reservations`,
    `/properties/reservations/[id]`,
  ]

   const shouldRenderNavbar = !noNavbarPaths.some((path: string) => new RegExp(path.replace(/\[id\]/, '.*')).test(pathname))


  const getLayout = Component.getLayout || ((page: any) => page)

  return (
    <Provider store={store}>
      <ChakraProvider>
        {shouldRenderNavbar && <Navbar />}

        <main
          className={`${quickSand.variable} ${lora.variable} ${lato.variable} ${roboto.variable} ${poppins.variable}`}
        >
          {getLayout(<Component {...pageProps} />)}
        </main>
      </ChakraProvider>
    </Provider>
  )
}
