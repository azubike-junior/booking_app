
'use client'

import { AuthWrapper } from '@/components/AuthWrapper'
import { DisabledField } from '@/components/Input'
import { useGetPropertyQuery } from '@/features/property'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useForm } from 'react-hook-form'

export default function PropertyDetails() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({})

  const params = useParams<{ id: string }>()

  const { data, isLoading } = useGetPropertyQuery(params?.id)

  // console.log('>>>>>id', id, data)

  return (
    <div className="mt-5">
      <Image
        src="/property.svg"
        className="_properties -z-10"
        alt="properyImg"
        width={100}
        height={100}
      />

      <div className="max-w-[1400px] mt-10 mx-auto px-10">
        <div className="bg-[#F5F5F5] pt-14 px-10 mt-16 space-y-10">
          <div className="flex items-center space-x-4">
            <Image
              src="/bookteller.svg"
              width={100}
              height={100}
              alt="bookteller"
            />
            <p className="text-3xl text-[#10375C]">Bookteller</p>
          </div>
          <p className="text-[#777C81] text-xl">
            Here is your property listing details.
          </p>

          <form className="bg-white rounded-lg p-10 space-y-10">
            <div className="flex space-x-14">
              <DisabledField label="Name" value={data?.name} />

              <DisabledField label="Address" value={data?.address} />
            </div>

            <div className="flex space-x-14">
              <DisabledField
                label="Email Address"
                value={data?.email_address}
              />

              <DisabledField label="Phone Address" value={data?.phone_number} />
            </div>
            <div className="flex space-x-14">
              <DisabledField label="Web Address" value={data?.web_address} />

              <DisabledField label="Text Color" value={data?.text_color} />
            </div>
            <div className="flex space-x-14">
              <DisabledField
                label="Primary Color"
                value={data?.primary_color}
              />

              <DisabledField
                label="Secondary Color"
                value={data?.secondary_color}
              />
            </div>

            <div className="flex space-x-14">
              <DisabledField
                label="Number of rooms"
                value={data?.number_of_rooms}
              />

              <div className="w-full"></div>
            </div>

            <div className="w-full text-sm">
              <p>Upload Image</p>
              <div className="w-60 bg-[#F4F4F4] rounded-lg py-10 flex justify-center mt-2">
                <div>
                  <p className="text-[#0B60B0]">Click to Upload</p>
                  <p className="text-[#2E2E2E]"> SVG, PNG, or JPG </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
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
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

PropertyDetails.getLayout = function getLayout(page: any) {
  return <AuthWrapper>{page}</AuthWrapper>
}
