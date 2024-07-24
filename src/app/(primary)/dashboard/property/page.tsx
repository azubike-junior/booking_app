'use client'

import Properties from '@/components/PropertySections'
import Rooms from '@/components/PropertySections/Rooms'
import Settings from '@/components/PropertySections/Settings'
import PropertyToggle from '@/components/PropertyToggle'
import { useState } from 'react'
import { MdOutlineMapsHomeWork } from 'react-icons/md'

export default function Property() {
  const [clickedSection, setClickedSection] = useState('settings')

  const prop = false

  return (
    <div className="lato">
      <div className="flex justify-between ">
        {prop ? (
          <div>
            <h3 className="text-2xl font-semibold">Beauty Room</h3>
            <div className="flex items-center space-x-2">
              <MdOutlineMapsHomeWork />
              <p className="text-sm">Ajah, Lekki, Lagos state</p>
            </div>
          </div>
        ) : (
          <div></div>
        )}

        <PropertyToggle
          clickedSection={clickedSection}
          setClickedSection={setClickedSection}
        />
      </div>

      <div className="py-10">
        {clickedSection === 'properties' && <Properties />}
        {clickedSection === 'rooms' && <Rooms />}
        {clickedSection === 'settings' && <Settings />}
      </div>
    </div>
  )
}
