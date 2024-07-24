import { getItem } from '@/utils'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

type Props = {
  children?: any
}

export const AuthWrapper = ({ children }: Props) => {
  const { push } = useRouter()

  const token = getItem('access_token')

  useEffect(() => {
    if (!token) {
      push('/')
      localStorage.clear()
    }
  }, [token, push])

   return children;
}
