import { PropertyProp } from '@/utils/types'

type prop = {
  setClickedSection: (c: string) => void
  clickedSection: string
  property: PropertyProp
}

export default function PropertyToggle({
  setClickedSection,
  clickedSection,
  property,
}: prop) {
  return (
    <div className="flex w-full lg:w-6/12 xl:w-5/12 border-[0.3px] bg-white shadow-slate-200 shadow-md  items-center rounded-[50px] h-14 text-sm xl:text-base">
      <button
        disabled={!property}
        onClick={() => setClickedSection('properties')}
        className={`h-full rounded-[50px] flex justify-center items-center w-full cursor-pointer ${
          clickedSection === 'properties'
            ? 'bg-[#1A2B47] text-white'
            : 'text-black'
        }`}
      >
        Property Details
      </button>
      <button
        disabled={!property}
        onClick={() => setClickedSection('rooms')}
        className={` h-full rounded-[50px] flex justify-center items-center w-full cursor-pointer ${
          clickedSection === 'rooms' ? 'bg-[#1A2B47] text-white' : 'text-black'
        }`}
      >
        Rooms
      </button>
      <button
        disabled={!property}
        onClick={() => setClickedSection('settings')}
        className={` h-full rounded-[50px] flex justify-center items-center w-full cursor-pointer ${
          clickedSection === 'settings'
            ? 'bg-[#1A2B47] text-white'
            : 'text-black'
        }  `}
      >
        Settings
      </button>
    </div>
  )
}
