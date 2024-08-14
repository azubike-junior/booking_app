'use client'

// import Properties from '@/components/PropertySections'
import Rooms from '@/components/PropertySections/Rooms'
import Settings from '@/components/PropertySections/Settings'
import PropertyToggle from '@/components/PropertyToggle'
import { useGetPropertiesQuery } from '@/features/property'
import { getItem } from '@/utils'
import { Spinner } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { MdOutlineMapsHomeWork } from 'react-icons/md'
const Properties = dynamic(
  () => import('@/components/PropertySections'),
  { ssr: false }
)


export default function Property() {
  const [clickedSection, setClickedSection] = useState('properties')

  const { data: properties, isLoading } = useGetPropertiesQuery(
    getItem('user_id'),
  )

  let property: any = []

  if (properties) {
    property = [properties[0]]
  }

  return (
    <div className="lato">
      <div className="flex justify-between ">
        {isLoading ? (
          <div className="flex justify-center items-center">
            <Spinner size="34" />
          </div>
        ) : (
          <>
            {property && (
              <div>
                <h3 className="text-2xl font-semibold">{property[0]?.name}</h3>
                <div className="flex items-center space-x-2">
                  <MdOutlineMapsHomeWork />
                  <p className="text-sm">{property[0]?.address}</p>
                </div>
              </div>
            )}
          </>
        )}

        <PropertyToggle
          clickedSection={clickedSection}
          setClickedSection={setClickedSection}
        />
      </div>

      <div className="py-10">
        {clickedSection === 'properties' && (
          <Properties property={property[0]} isLoading={isLoading} />
        )}
        {clickedSection === 'rooms' && <Rooms property={property[0]} />}
        {clickedSection === 'settings' && <Settings property={property[0]} />}
      </div>
    </div>
  )
}
