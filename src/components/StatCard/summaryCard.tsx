import { HiOutlineArrowTrendingUp } from 'react-icons/hi2'
import { MdAddChart } from 'react-icons/md'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

type prop = {
  title: string
  emptyString: string
  data: any
  type: string
}

export default function SummaryCard({ title, emptyString, data, type }: prop) {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  let impressions

  if (data) {
    impressions = Object.entries(data?.property_impressions).map(
      ([monthNumber, impressions]) => ({
        name: monthNames[parseInt(monthNumber) - 1],
        imp: impressions,
      }),
    )
  }


  const cx = 150
  const cy = 200
  const iR = 50
  const oR = 100

  const bookings = [
    { name: 'Success', value: data?.successful_bookings, color: '#1A2B47' },
    { name: 'Total', value: data?.total_impressions, color: '#F58634' },
  ]
  return (
    <div className="pt-8 w-full">
      <div className="border-[0.3px] border-[#EEEFF3] rounded-2xl bg-[#FAFCFE] h-full  ">
        <div className="border-b-[0.4px] border-[#EEEFF3] p-4 px-6">
          <p className="font-semibold text-lg text-[#1B2559]">{title}</p>

          <p className="text-[#70707A] text-sm">From 1-31 July, 2024</p>
        </div>

        {type === 'imp' ? (
          <div className=" py-16 mx-auto">
            {data?.total_impressions === 0 ?
              <div>
                <div className="flex justify-center items-center ">
                  <div className="border-[0.3px] border[#EEEFF3] mx-auto  rounded-lg p-4 ">
                    {title === 'Impressions' ? (
                      <HiOutlineArrowTrendingUp size={20} color={'#F58634'} />
                    ) : (
                      <MdAddChart size={24} color="#F58634" />
                    )}
                  </div>
                </div>
                

                <p className="text-center pt-4">{emptyString}</p>
              </div>
              :

              <ResponsiveContainer
                width="100%"
                height={350}
                className="pr-8 xl:px-10"
              >
                <BarChart
                  className="w-full mx-auto"
                  width={350}
                  height={350}
                  data={impressions}
                  margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="imp"
                    fill="#F58634"
                    activeBar={<Rectangle fill="#F8AE77" stroke="blue" />}
                  />
                </BarChart>
              </ResponsiveContainer>
            }
          </div>
        ) : (
            <div className=" py-16 mx-auto h-full">
              {data?.successful_bookings === 0 ?
                <div>
                  <div className="flex justify-center items-center ">
                    <div className="border-[0.3px] border[#EEEFF3] mx-auto  rounded-lg p-4 ">
                      {title === 'Impressions' ? (
                        <HiOutlineArrowTrendingUp size={20} color={'#F58634'} />
                      ) : (
                        <MdAddChart size={24} color="#F58634" />
                      )}
                    </div>
                  </div>
                

                  <p className="text-center pt-4">{emptyString}</p>
                </div>
                :
                <>
                  <div className="flex justify-between items-center px-2 lg:px-20">
                    <div className="flex space-x-3 items-center">
                      <div className="w-2 bg-[#1A2B47] h-14 rounded-lg"></div>
                      <div>
                        <p className="text-[#8F9BBA]">Successful</p>
                        <p className="font-bold text-lg">
                          {data?.successful_bookings}
                        </p>
                      </div>
                    </div>

                    <div className="flex space-x-3 items-center">
                      <div className="w-2 bg-[#F58634] h-14 rounded-lg"></div>
                      <div>
                        <p className="text-[#8F9BBA]">Total number of bookings</p>
                        <p className="font-bold text-lg">{data?.total_impressions}</p>
                      </div>
                    </div>
                  </div>
                  <PieChart width={400} height={300} className="mx-auto ">
                    <Pie
                      dataKey="value"
                      startAngle={180}
                      endAngle={0}
                      data={bookings}
                      cx={cx}
                      cy={cy}
                      innerRadius={iR}
                      outerRadius={oR}
                      fill="#8884d8"
                      stroke="none"
                    >
                      {bookings.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </>
              }
          </div>
        )}
      </div>
    </div>
  )
}
