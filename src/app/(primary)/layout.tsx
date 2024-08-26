import Header from '@/components/shared/Header'
import Sidebar from '@/components/shared/Sidebar'
import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full">
      <Header />
      <div className="flex justify-between h-full lg:py-14 z-0">
        <Sidebar />
        <div className='w-full lg:ml-[17%] px-6 xl:px-10 py-10'>{children}</div>
      </div>
    </div>
  )
}
