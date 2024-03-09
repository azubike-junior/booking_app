import { FieldError } from 'react-hook-form'

type InputProp = {
  register: any
  label: string
  placeHolder: string
  name: string
  type: string
  required?: boolean
  message?: string | undefined
  errors?: FieldError | undefined
  validate?: any
  defaultValue?: string | number
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
}: InputProp) {
  return (
    <div className="w-full">
      <label className="flex text-sm text-[#393F42] font-semibold" htmlFor="">
        {label}
      </label>
      <input
        defaultValue={defaultValue}
        type={type}
        placeholder={placeHolder}
        className="border-[0.5px] border-[#96A0A5] bg-white w-full mt-2 py-3 rounded-lg px-4 outline-none font-medium text-[#747F8A]"
        {...register(name, { required, validate })}
      />
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
    <div className="w-full">
      <label className="flex text-sm text-[#393F42]" htmlFor="">
        {label}
      </label>
      <div  className="border-[#96A0A5]  w-full mt-2 py-3 rounded-lg px-4 outline-none font-medium bg-[#F5F5F5]">
        <p>{value}</p>
      </div>
    </div>
  )
}
