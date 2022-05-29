import { ReactNode, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'next/router'

import { isLoggedInState } from '@client/states'
import { firebase } from '@client/utilities'

type ContainerProps = {
  isAuthentication?: boolean
  children: ReactNode
}

export const PageWrapperContainer = ({ isAuthentication = false, children }: ContainerProps) => {
  const router = useRouter()

  const [isAuthStateLoaded, setIsAuthStateLoaded] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState)

  useEffect(() => {
    const handleUnsubscribe = onAuthStateChanged(firebase.auth, (user) => {
      setIsAuthStateLoaded(true)

      if (user == undefined) return setIsLoggedIn(undefined)

      return setIsLoggedIn(true)
    })

    return () => handleUnsubscribe()
  }, [])

  if (!isAuthentication) return <>{children}</>

  if (!isAuthStateLoaded) return <p>読み込み中</p>

  if (isLoggedIn == undefined) {
    router.push('/login')

    return null
  }

  return <>{children}</>
}
