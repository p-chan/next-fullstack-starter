import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { useAuthentication } from '@client/hooks'

export const LogoutContainer = () => {
  const router = useRouter()
  const { logout } = useAuthentication()

  useEffect(() => {
    ;(async () => {
      await logout()

      router.push('/login')
    })()
  }, [])

  return null
}
