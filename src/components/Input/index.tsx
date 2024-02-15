import { FieldError } from 'react-hook-form'

type InputProp = {
  register: any
  label: string
  placeHolder: string
  name: string
  type: string
  required: boolean
  message?: string | undefined
  errors?: FieldError | undefined
  validate?: any
}

export default function InputField({
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
      <label className="flex text-sm text-[#393F42]" htmlFor="">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeHolder}
        className="border-[1px] border-[#96A0A5] bg-white w-full mt-2 py-3 rounded-lg px-4 outline-none font-medium"
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
      <div className="border-[1px] border-[#96A0A5] bg-white w-full mt-2 py-3 rounded-lg px-4 outline-none font-medium">
        <p>{value}</p>
      </div>
    </div>
  )
}
