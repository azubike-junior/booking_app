import { PropertyProp } from '../../utils/types'
import { DisabledField } from '../shared/Input'

type Prop = {
  data: PropertyProp | undefined
}

export default function Details({ data }: Prop) {
  return (
    <div className="space-y-10">
      <div className="flex space-x-14">
        <DisabledField label="Name" value={data?.name} />
        <DisabledField label="Address" value={data?.address} />
      </div>

      <div className="flex space-x-14">
        <DisabledField label="Email Address" value={data?.email_address} />

        <DisabledField label="Phone Address" value={data?.phone_number} />
      </div>
      <div className="flex space-x-14">
        <DisabledField label="Web Address" value={data?.web_address} />

        <DisabledField label="Text Color" value={data?.text_color} />
      </div>
      <div className="flex space-x-14">
        <DisabledField label="Primary Color" value={data?.primary_color} />

        <DisabledField label="Secondary Color" value={data?.secondary_color} />
      </div>

      <div className="flex space-x-14">
        <DisabledField label="Number of rooms" value={data?.number_of_rooms} />

        <div className="w-full"></div>
      </div>

      {/* <div className="w-full text-sm">
              <p>Upload Image</p>
              <div className="w-60 bg-[#F4F4F4] rounded-lg py-10 flex justify-center mt-2">
                <div>
                  <p className="text-[#0B60B0]">Click to Upload</p>
                  <p className="text-[#2E2E2E]"> SVG, PNG, or JPG </p>
                </div>
              </div>
            </div> */}

      {/* <div className="flex justify-between">
              <button
                type="submit"
                className="border-[#10375C]  text-[#10375C] border py-2 text-center px-10 my-10 rounded-lg"
              >
                Back
              </button>

              <button
                type="submit"
                className="border-[#10375C] bg-[#10375C]  text-white border py-2 text-center px-10 my-10 rounded-lg"
              >
                Save Changes
              </button>
            </div> */}
    </div>
  )
}
