import Image from 'next/image'
import DetailCard from '../PropertyDetailCard'
import EmptyState from './emptyState'

export default function Properties() {
  const properties = 0

  return (
    <div>
      {properties === 0 ? (
        <EmptyState
          message=" You currently do not have a property registered under this account"
          subText=" Hotels, Guest Houses, Shortlets, Apartments."
          btnText="Register Your Property"
          route='property'
        />
      ) : (
        <div>
          <div className="flex space-x-8 w-full ">
            <div className="w-8/12">
              <Image
                src={'/prop1.jpg'}
                width={300}
                height={460}
                alt="property"
                className=" rounded-l-3xl w-full   h-full"
              />
            </div>

            <div className="w-4/12 grid gap-y-8  ">
              <Image
                src={'/prop.jpg'}
                width={300}
                height={400}
                alt="property"
                className="rounded-r-3xl w-full"
              />
              <Image
                src={'/prop3.jpg'}
                width={300}
                height={400}
                alt="property"
                className="rounded-r-3xl h-full  w-full"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4 pt-8">
            <div className="flex space-x-2 items-center">
              <div className={`bg-[#673816] w-7 h-7 rounded-full`}></div>
              <p>Primary Color</p>
            </div>

            <div className="flex space-x-2 items-center">
              <div className="bg-[#673816] w-7 h-7 rounded-full"></div>
              <p>Secondary Color</p>
            </div>

            <div className="flex space-x-2 items-center">
              <div className="bg-[#673816] w-7 h-7 rounded-full"></div>
              <p>Text Color</p>
            </div>
          </div>

          <div className="pt-6 space-y-6">
            <div className="flex justify-between space-x-4">
              <DetailCard
                img="/location.svg"
                name="Ajah, Lagos State, Nigeria"
              />
              <DetailCard img="/location.svg" name="08123456789" />
              <DetailCard img="/location.svg" name="pearlthelma299@gmail.com" />
            </div>

            <div className="flex justify-between space-x-4">
              <DetailCard
                img="/location.svg"
                name="Total Bookings"
                value="12"
              />
              <DetailCard img="/location.svg" name="Total Rooms" value="12" />
              <DetailCard
                img="/location.svg"
                name="Published Rooms"
                value="12"
              />
            </div>
          </div>

          <div className="pt-10 space-y-4">
            <p>
              Houses have a roof to keep off the rain, sun and walls to keep out
              the wind and cold. They have window openings to let in light, and
              a floor. Houses of different places may look different to each
              other, because of different materials, climate and styles
            </p>

            <p>
              Houses have a roof to keep off the rain, sun and walls to keep out
              the wind and cold. They have window openings to let in light, and
              a floor. Houses of different places may look different to each
              other, because of different materials, climate and styles
            </p>

            <p>
              Houses have a roof to keep off the rain, sun and walls to keep out
              the wind and cold.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
