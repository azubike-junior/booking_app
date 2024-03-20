type InputProps = {
  name: string
  value: string
}

const Input = ({ name, value }: InputProps) => {
  return (
    <div className="bg-white  w-full px-6 rounded-lg py-2">
      <p className="text-[#737373] text-sm">{name}</p>
      <p className="capitalize">{value}</p>
    </div>
  )
}

export default function ProfileAccount() {
  return (
    <div className="space-y-8">
      <div className="lg:flex lg:space-x-8 space-y-4 lg:space-y-0">
        <Input name="First name" value="Address" />
        <Input name="Email Address" value="sean@gmail.com" />
      </div>
      <div className="lg:flex lg:space-x-8 space-y-4 lg:space-y-0">
        <Input name="Address" value="Sola str" />
        <Input name="Phone Number" value="0903838939" />
      </div>
      <div className="lg:flex lg:space-x-8 space-y-4 lg:space-y-0">
        <Input name="Web Address" value="SeanBusiness.com" />
         <div className="w-full px-5"></div>
      </div>
      {/* <div className="lg:flex lg:space-x-8 space-y-4 lg:space-y-0">
        <Input name="Primary Color" value="Yellow" />
        <Input name="Secondary Color" value="Blue" />
      </div>
      <div className="lg:flex lg:space-x-8 space-y-4 lg:space-y-0">
        <Input name="Number of rooms" value="10" />
        <div className="w-full px-5"></div>
      </div> */}
    </div>
  )
}
