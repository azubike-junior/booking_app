import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import axios from 'axios'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import moment from 'moment'
import {
  Lato,
  Lora,
  Open_Sans,
  Poppins,
  Quicksand,
  Roboto,
} from 'next/font/google'
import { storage } from './firebase'

export const lato = Lato({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-lato',
})

export const lora = Lora({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-lora',
})

export const quickSand = Quicksand({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-quicksand',
})

export const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

export const open_sans = Open_Sans({
  weight: '500',
  subsets: ['latin'],
})

export const poppins = Poppins({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

interface Response {
  status: number | undefined
  data?: any
}

export function handleErrorResponse(error: any): Response {
  let status
  let data
  if (error) {
    if ('status' in error) {
      status = error.status
      data = error.data
      return {
        status,
        data,
      }
    }
  }
  return {
    status,
    data,
  }
}

export function handleSuccessResponse(res: any): Response {
  let status
  if (res) {
    if ('res' in res) {
      status = res.res
      return {
        status,
      }
    }
  }
  return {
    status,
  }
}

export const getItem = (name: string): string => {
  let value: any
  if (typeof window !== 'undefined') {
    value = localStorage.getItem(name) || ''
  }
  return value
}

export const setItem = (name: string, value: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(name, value)
  }
}

export const _http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  auth: { username: 'bookingengine', password: 'secretbookingenginesecret' },
  headers: { token: getItem('access_token') },
})

export const firstname = getItem('first_name')

export const uploadImage = (file: any, setImgUrl: any, setLoading: any) => {
  // const file = e.target[0]?.files[0]
  if (!file) return
  const storageRef = ref(storage, `files/${file.name}`)
  const uploadTask = uploadBytesResumable(storageRef, file)

  uploadTask.on(
    'state_changed',
    (snapshot) => {
      console.log(snapshot)
    },
    (error) => {
      alert(error)
    },

    () => {
      setLoading(false)
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setImgUrl(downloadURL)
      })
    },
  )
}

export const uploadLogo = (file: any, setLogoUrl: any, setLogoLoading: any) => {
  // const file = e.target[0]?.files[0]
  if (!file) return
  const storageRef = ref(storage, `files/${file.name}`)
  const uploadTask = uploadBytesResumable(storageRef, file)

  uploadTask.on(
    'state_changed',
    (snapshot) => {
      console.log(snapshot)
    },
    (error) => {
      alert(error)
    },

    () => {
      setLogoLoading(false)
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setLogoUrl(downloadURL)
      })
    },
  )
}

export function isFetchBaseQueryError(
  error: unknown,
): error is FetchBaseQueryError {
  return typeof error === 'object' && error != null && 'status' in error
}

export function isErrorWithMessage(
  error: unknown,
): error is { message: string } {
  return (
    typeof error === 'object' &&
    error != null &&
    'message' in error &&
    typeof (error as any).message === 'string'
  )
}

interface handlerProp {
  e: any
  setLoading?: any
  setImgUrl?: any
  uploadImage?: any
  setLogoLoading?: any
  setLogoUrl?: any
  uploadLogo?: any
}

export const handleImageChange = ({
  e,
  setLoading,
  setImgUrl,
  uploadImage,
}: handlerProp) => {
  setLoading(true)
  uploadImage(e.target.files[0], setImgUrl, setLoading)
}

export const handleLogoChange = ({
  e,
  setLogoLoading,
  setLogoUrl,
  uploadLogo,
}: handlerProp) => {
  setLogoLoading(true)
  uploadLogo(e.target.files[0], setLogoUrl, setLogoLoading)
}

export function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export const RESERVATION_COLUMNS = [
  {
    Header: 'Name',
    accessor: 'name',
    Cell: (row: any) => (
      <span className="flex items-center justify-center">
        <span className="whitespace-nowrap">
          {row.row.original?.first_name} {row.row.original?.last_name}
        </span>
      </span>
    ),
  },
  {
    Header: 'Phone ',
    accessor: 'phone',
    Cell: ({ value }: any) => {
      return (
        <>
          <span className={'text-blue-600 whitespace-nowrap'}>{value}</span>
        </>
      )
    },
  },

  {
    Header: 'Email ',
    accessor: 'email',
  },
  {
    Header: 'Amount ',
    accessor: 'amount',
    Cell: ({ value }: any) => {
      return (
        <>
          <span className={'text-blue-600 whitespace-nowrap'}>
            &#8358; {value?.toLocaleString()}
          </span>
        </>
      )
    },
  },
  {
    Header: 'Payment Status',
    accessor: 'payment_status_str',
    Cell: ({ value }: any) => {
      return (
        <>
          <span
            className={
              value === 'Pending'
                ? 'text-blue-400 whitespace-nowrap'
                : value === 'Failed'
                ? 'text-red-600 whitespace-nowrap'
                : 'text-green-600'
            }
          >
            {value}
          </span>
        </>
      )
    },
  },
  {
    accessor: 'id',
    Cell: (row: any) => (
      <>
        <span style={{ display: 'none', visibility: 'hidden', width: '0' }}>
          {''}
        </span>{' '}
      </>
    ),
  },
]

export const BOOKINGS_COLUMNS = [
  {
    Header: 'Room name',
    accessor: 'room_name',
  },
  {
    Header: 'Price ',
    accessor: 'price',
    Cell: ({ value }: any) => {
      return (
        <>
          <span className={'text-blue-600 whitespace-nowrap'}>
            &#8358; {value?.toLocaleString()}
          </span>
        </>
      )
    },
  },
  {
    Header: 'Quantity ',
    accessor: 'quantity',
  },
  {
    Header: 'Check In',
    accessor: 'start_date',
    Cell: ({ value }: any) => {
      return (
        <span className="whitespace-nowrap">
          {moment(value).format('MMM Do YYYY, HH:mm')}
        </span>
      )
    },
  },
  {
    Header: 'Check out',
    accessor: 'end_date',
    Cell: ({ value }: any) => {
      return (
        <span className="whitespace-nowrap">
          {moment(value).format('MMM Do YYYY, HH:mm')}
        </span>
      )
    },
  },
]

export const bookings_data = [
  {
    name: 'Orji Kalu',
    checkin: '2023-03-30',
    checkout: '2023-03-30',
    amount: '200000',
  },
  {
    name: 'Orji Kalu',
    checkin: '2023-03-30',
    checkout: '2023-03-30',
    amount: '200000',
  },
  {
    name: 'Orji Kalu',
    checkin: '2023-03-30',
    checkout: '2023-03-30',
    amount: '200000',
  },
  {
    name: 'Orji Kalu',
    checkin: '2023-03-30',
    checkout: '2023-03-30',
    amount: '200000',
  },
  {
    name: 'Orji Kalu',
    checkin: '2023-03-30',
    checkout: '2023-03-30',
    amount: '200000',
  },
]

export function convertDateFormat(dateString: string) {
  // Split the input date string
  const [day, month, year] = dateString.split('/');

  // Return the formatted date string in yyyy-MM-dd format
  return `${year}-${month}-${day}`;
}

export function _convertDateFormat(dateString: string) {
  // Split the input date string
  const [day, month, year] = dateString?.split('-');

  // Return the formatted date string in yyyy-MM-dd format
  return `${year}/${month}/${day}`;
}

