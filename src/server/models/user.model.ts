import { z } from 'zod'

export const userModelSchema = z.object({
  id: z.string(),
  name: z.string(),
})

export type UserModel = z.infer<typeof userModelSchema>
