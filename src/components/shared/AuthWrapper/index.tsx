import { useAppDispatch } from '@/store'
import { getItem } from '@/utils'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

type Props = {
  children?: any
}

export const AuthWrapper = ({ children }: Props) => {
  const dispatch = useAppDispatch()
  const { push } = useRouter()

  const token = getItem('access_token')

  useEffect(() => {
    if (!token) {
      push('/auth/login')
      // will explain this in a moment
      // dispatch(logout())
      localStorage.clear()
    }
  }, [token, push])

   return children;
}
