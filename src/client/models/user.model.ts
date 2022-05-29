import { z } from 'zod'

const userModelSchema = z.object({
  id: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
})

export type UserModel = z.infer<typeof userModelSchema>

// type UserModel = {
//   id: string
//   displayName?: string
//   email: string
//   emailVerified: boolean
//   photoURL: string
// }
