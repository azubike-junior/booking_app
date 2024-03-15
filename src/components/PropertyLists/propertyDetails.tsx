import { PropertyProp } from '../../utils/types'
import { DisabledField } from '../shared/Input'

type Prop = {
  data: PropertyProp | undefined
}

export default function Details({ data }: Prop) {
  return (
    <div className="space-y-4  lg:space-y-6">
      <div className="lg:flex lg:space-x-4 space-y-4 lg:space-y-0">
        <DisabledField label="Name" value={data?.name} />
        <DisabledField label="Address" value={data?.address} />
        <DisabledField label="Email Address" value={data?.email_address} />
      </div>

      <div className="lg:flex lg:space-x-4 space-y-4 lg:space-y-0">
        <DisabledField label="Web Address" value={data?.web_address} />
        <DisabledField label="Text Color" value={data?.text_color} />
        <DisabledField label="Phone Address" value={data?.phone_number} />
      </div>
      <div className="lg:flex lg:space-x-4 space-y-4 lg:space-y-0">
        <DisabledField label="Primary Color" value={data?.primary_color} />
        <DisabledField label="Number of rooms" value={data?.number_of_rooms} />
        <DisabledField label="Secondary Color" value={data?.secondary_color} />
      </div>

      <div className="flex space-x-14">
        <div className="w-full"></div>
      </div>
    </div>
  )
}
