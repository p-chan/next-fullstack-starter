import { ChangeEvent, FormEvent, useCallback, useState } from 'react'

import { Navigation } from '@client/components/shared/Navigation'
import { useAuthentication } from '@client/hooks'

type Props = {
  onSubmit: (email: string, password: string) => Promise<void>
}

export const Register = ({ onSubmit }: Props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeEmail = useCallback((event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value), [])
  const handleChangePassword = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value),
    []
  )

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      await onSubmit(email, password)
    },
    [email, password]
  )

  return (
    <>
      <Navigation />
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={handleChangeEmail} />
        <input type="password" value={password} onChange={handleChangePassword} />
        <button type="submit">新規登録</button>
      </form>
    </>
  )
}

export const RegisterContainer = () => {
  const { register } = useAuthentication()

  const handleSubmit = useCallback(async (email: string, password: string) => {
    await register(email, password)
  }, [])

  return <Register onSubmit={handleSubmit} />
}
