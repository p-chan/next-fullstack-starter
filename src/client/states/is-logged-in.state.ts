import { atom } from 'recoil'

export const isLoggedInState = atom<boolean | undefined>({
  key: 'isLoggedInState',
  default: undefined,
})
