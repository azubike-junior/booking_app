type prop = {
  setClickedSection: (c: string) => void
  clickedSection: string
}

export default function PropertyToggle({ setClickedSection, clickedSection }: prop) {
  return (
    <div className="flex w-5/12 border-[0.3px] bg-white shadow-slate-200 shadow-md  items-center rounded-[50px]">
      <span
        onClick={() => setClickedSection('properties')}
        className={`py-3  h-full rounded-[50px] flex justify-center items-center w-full cursor-pointer ${
          clickedSection === 'properties'
            ? 'bg-[#1A2B47] text-white'
            : 'text-black'
        }`}
      >
        Property Details
      </span>
      <span
        onClick={() => setClickedSection('rooms')}
        className={` h-full rounded-[50px] flex justify-center items-center w-full cursor-pointer ${
          clickedSection === 'rooms' ? 'bg-[#1A2B47] text-white' : 'text-black'
        }`}
      >
        Rooms
      </span>
      <span
        onClick={() => setClickedSection('settings')}
        className={` h-full rounded-[50px] flex justify-center items-center w-full cursor-pointer ${
          clickedSection === 'settings'
            ? 'bg-[#1A2B47] text-white'
            : 'text-black'
        }  `}
      >
        Settings
      </span>
    </div>
  )
}
