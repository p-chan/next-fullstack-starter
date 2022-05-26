import { z } from 'zod'
import { NextApiRequest, NextApiResponse } from 'next'
import { NextHandler } from 'next-connect'
import { badRequest } from '@hapi/boom'

export const validateMiddleware =
  (schema: z.ZodType) => (req: NextApiRequest, res: NextApiResponse, next: NextHandler) => {
    try {
      schema.parse(req)

      return next()
    } catch (error) {
      if (error instanceof z.ZodError) return next(badRequest())

      return next(error)
    }
  }
