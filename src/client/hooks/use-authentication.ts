import { useCallback } from 'react'
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

import { firebase } from '@client/utilities'

export const useAuthentication = () => {
  const register = useCallback(async (email: string, password: string) => {
    await createUserWithEmailAndPassword(firebase.auth, email, password)
  }, [])

  const login = useCallback(async (email: string, password: string) => {
    await signInWithEmailAndPassword(firebase.auth, email, password)
  }, [])

  const logout = useCallback(async () => {
    await signOut(firebase.auth)
  }, [])

  return { register, login, logout }
}
