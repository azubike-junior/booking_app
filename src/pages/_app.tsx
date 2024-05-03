// import Navbar from '@/components/Navbar'
import { store } from '@/store'
import '@/styles/globals.css'
import { lato, lora, quickSand, roboto } from '@/utils'
import { ChakraProvider } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { Provider } from 'react-redux'
const Navbar = dynamic(() => import('@/components/shared/Navbar'), {
  ssr: false,
})

export default function App({ Component, pageProps }: any) {
  const { pathname } = useRouter()
  const pathnames = [
    '/auth/login',
    '/auth/signup',
    '/properties/registerproperty',
    `/properties/rooms/create/[id]`,
    `/properties/reservations`,
    `/properties/reservations/[id]`,
  ]

  const getLayout = Component.getLayout || ((page: any) => page)

  return (
    <Provider store={store}>
      <ChakraProvider>
        <main className={`${quickSand.variable} ${lora.variable} ${lato.variable} ${roboto.variable}`}>
          {!pathnames.includes(pathname) ? <Navbar /> : null}
          {getLayout(<Component {...pageProps} />)}
        </main>
      </ChakraProvider>
    </Provider>
  )
}
