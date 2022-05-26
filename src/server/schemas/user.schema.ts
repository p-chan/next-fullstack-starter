import { z } from 'zod'

import { userModel } from '@server/models'

export const indexResponseSchema = z.object({
  users: z.array(userModel.userModelSchema),
})

export const createRequestSchema = z.object({
  body: userModel.userModelSchema,
})

export const createResponseSchema = z.object({
  user: userModel.userModelSchema,
})

export const showRequestSchema = z.object({
  params: z.object({
    userId: z.string(),
  }),
})

export const showResponseSchema = z.object({
  user: userModel.userModelSchema,
})

export const updateRequestSchema = z.object({
  params: z.object({
    userId: z.string(),
  }),
  body: userModel.userModelSchema,
})

export const updateResponseSchema = z.object({
  user: userModel.userModelSchema,
})

export const destroyRequestSchema = z.object({
  params: z.object({
    userId: z.string(),
  }),
})

export type IndexResponse = z.infer<typeof indexResponseSchema>
export type CreateRequest = z.infer<typeof createRequestSchema>
export type CreateResponse = z.infer<typeof createResponseSchema>
export type ShowRequest = z.infer<typeof showRequestSchema>
export type ShowResponse = z.infer<typeof showResponseSchema>
export type UpdateRequest = z.infer<typeof updateRequestSchema>
export type UpdateResponse = z.infer<typeof updateResponseSchema>
export type DestroyRequest = z.infer<typeof destroyRequestSchema>
