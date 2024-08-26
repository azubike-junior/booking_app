import { FieldError } from 'react-hook-form'

type InputProp = {
  register: any
  label?: string
  placeHolder?: string
  name: string
  type: string
  required?: boolean
  message?: string | undefined
  errors?: FieldError | undefined
  validate?: any
  defaultValue?: string | number
  selectArray?: any
  value?: string | number
  className?: string
  min?: string
  max?: string
  textarea?: boolean
}

export default function InputField({
  defaultValue,
  label,
  type,
  register,
  placeHolder,
  name,
  required,
  message,
  errors,
  validate,
  min,
  textarea,
  max,
}: InputProp) {
  return (
    <div className="w-full">
      <label className="flex text-sm text-[#969DAA] font-light" htmlFor="">
        {label}
      </label>
      {textarea ? (
        <textarea
          className="border-[0.5px] border-[#b7bcbe] w-full mt-2 py-2 rounded-lg px-4 outline-none font-medium text-[#747F8A]"
          defaultValue={defaultValue}
          placeholder={placeHolder}
          {...register(name, { required, validate })}
        ></textarea>
      ) : (
        <input
          defaultValue={defaultValue}
          type={type}
          min={min}
            max={max}
        
          placeholder={placeHolder}
          className="border-[0.5px] border-[#D4D6D7] w-full mt-2 py-2 rounded-md px-4 outline-none text-sm font-medium text-[#747F8A]"
          {...register(name, { required, validate })}
        />
      )}
      {errors ? <p className="text-red-500 text-sm pt-1">{message}</p> : null}
    </div>
  )
}

type DisabledFieldProp = {
  label: string
  value: any | undefined
}

export function DisabledField({ label, value }: DisabledFieldProp) {
  return (
    <div className="bg-white  w-full px-6 rounded-lg py-2">
      <p className="text-[#737373] text-">{label}</p>
      <p className="capitalize">{value}</p>
    </div>
  )
}

export const SelectField = ({
  label,
  className,
  selectArray,
  register,
  name,
  required,
  defaultValue,
  value,
  errors,
  message,
}: InputProp) => {
  return (
    <div className={className}>
      {label && (
        <label className="flex text-sm text-[#393F42] font-semibold" htmlFor="">
          {label}
        </label>
      )}
      <div>
        <select
          className={
            'border-[0.5px] border-[#b7bcbe] w-full mt-2 py-2 rounded-lg px-4 outline-none font-medium text-[#747F8A]'
          }
          {...register(name, { required })}
          value={value}
          name={name}
          defaultValue={defaultValue}
        >
          {selectArray}
        </select>
      </div>
      {errors && <span className="text-red-500 text-sm">{message}</span>}
    </div>
  )
}

export function PaymentField({
  label,
  type,
  register,
  placeHolder,
  name,
  required,
  message,
  errors,
}: InputProp) {
  return (
    <div className='w-full'>
      <label htmlFor="" className='text-sm'>{label}</label>

      <div className="w-full border rounded-lg lato p-2 mt-3">
        <input
          type={type}
          placeholder={placeHolder}
          className="w-full outline-none  text-sm "
          {...register(name, { required })}
        />
        {errors ? <p className="text-red-500 text-sm pt-1">{message}</p> : null}
      </div>
    </div>
  )
}
