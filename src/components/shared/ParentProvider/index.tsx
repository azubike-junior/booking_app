'use client'

import { store } from '@/features/store'
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'

export default function ParentProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Provider store={store}>
      <ChakraProvider>{children}</ChakraProvider>
      <Toaster position='top-right' />
    </Provider>
  )
}
