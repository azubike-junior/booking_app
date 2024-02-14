import Navbar from '@/components/Navbar'
import { store } from '@/store'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: any) {
  const { pathname } = useRouter()
  const pathnames = ['/auth/login', '/auth/signup', '/auth/registerproperty']

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}>
      <ChakraProvider>
         {!pathnames.includes(pathname) ? <Navbar/> : null} 
       {getLayout(<Component {...pageProps} />)}
      </ChakraProvider>
    </Provider>
  )
}
