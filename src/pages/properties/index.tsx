import { AuthWrapper } from '@/components/AuthWrapper'
import { useGetPropertiesQuery } from '@/features/property'
import { firstname, getItem, lato } from '@/utils'
import { Spinner } from '@chakra-ui/react'
import { Lists } from '@/components/PropertyLists'

export default function Properties() {
  const { data, isLoading } = useGetPropertiesQuery()

  return (
    <div className="">
      <div className={`${lato.className} bg-[#10375C] w-full h-[400px]`}>
        <div className="max-w-[1400px]  mt-10 px-10 mx-auto text-white">
          <p className="text-6xl pt-48">Hi {firstname}</p>
          <p className="text-4xl pt-10">
            Welcome to Bookteller property listing
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mt-10 mx-auto px-10">
        <div className="bg-[#F5F5F5] pt-14 px-10 mt-16 space-y-10">
          <p className="text-[#10375C] text-3xl">Your Property Listing</p>

          {isLoading ? <Spinner /> : null}

          <>
            {data?.map((p, index) => {
              return <Lists {...p} key={index}/>
            })}
          </>
        </div>
      </div>
    </div>
  )
}

Properties.getLayout = function getLayout(page: any) {
  return <AuthWrapper>{page}</AuthWrapper>
}
