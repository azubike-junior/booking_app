import { FaRegCheckSquare } from 'react-icons/fa'

type prop = {
  img?: string
  subtitle?: string
  name?: string
  type?: string
  value?: string | number
  icon?: any
  edit?: boolean
  register?: any
}

type AmenitiesProp = {
  name?: string
  value: string | number
  edit?: boolean
  checked?: boolean
  handleCheckboxChange?: any
}

export default function DetailCard({
  icon,
  img,
  name,
  value,
  edit,
  subtitle,
  type,
  register,
}: prop) {
  return (
    <>
      {!edit ? (
        <div className="lg:flex justify-between w-full overflow-scroll lg:border-[0.3px] border-[#667184] lg:px-3 py-3 rounded-lg items-center lg:space-x-4 text-xs lg:text-sm">
          <div className="lg:flex space-x-2 items-center">
            <div className="bg-[#E8EAED] w-7 h-7 lg:h-10 lg:w-10 rounded-full flex justify-center items-center mx-auto">
              {icon}
            </div>

            <p className="text-[#5F6C72] font-normal text-center pt-2 lg:pt-0">{subtitle}</p>
          </div>

          <p className="text-center pt-2 lg:pt-0">{value}</p>
        </div>
      ) : (
        <div className="lg:flex justify-between w-full overflow-scroll lg:border-[0.3px] border-[#667184] lg:px-3 py-3 rounded-lg items-center lg:space-x-4 text-xs lg:text-sm">
          <span className="bg-[#E8EAED] w-7 h-7 lg:h-10 lg:w-10 rounded-full flex justify-center items-center mx-auto">
            {icon}
          </span>

          <input
            type={type}
            defaultValue={value ? value : subtitle}
            className="w-full p-2 outline-none text-center"
            {...register(name)}
          />
        </div>
      )}
    </>
  )
}

export function AmenitiesCard({ name, value }: AmenitiesProp) {
  return (
    <>
      {value > 0 && (
        <div
          className={
            'flex  w-full border-[0.3px] border-[#969DAA] px-3 py-4 rounded-md items-center space-x-4'
          }
        >
          <FaRegCheckSquare color="#34C759" />

          <p className="text-black text-xs xl:text-sm">{name}</p>
        </div>
      )}
    </>
  )
}

export function _AmenitiesCard({
  name,
  value,
  checked,
  handleCheckboxChange,
}: AmenitiesProp) {
  return (
    <>
      <div
        className={`flex  w-full border-[0.3px] border-[#969DAA] px-3 py-4 rounded-md items-center space-x-4 relative bg-[#f3f1f1]
        }`}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        <p className="text-black text-sm">{name}</p>
      </div>
    </>
  )
}
