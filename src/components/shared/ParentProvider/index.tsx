'use client'

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
    <div>
      <ChakraProvider>{children}</ChakraProvider>
      <Toaster position='top-right' />
    </div>
  )
}
