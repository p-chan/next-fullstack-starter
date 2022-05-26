import { NextApiRequest, NextApiResponse } from 'next'
import { notFound, internal, isBoom, Payload } from '@hapi/boom'

export const errorMiddleware = (err: unknown, _: NextApiRequest, res: NextApiResponse<Payload>) => {
  console.error(err)

  return isBoom(err)
    ? (() => {
        const { statusCode, payload } = err.output

        return res.status(statusCode).json(payload)
      })()
    : (() => {
        const { statusCode, payload } = internal().output

        return res.status(statusCode).json(payload)
      })()
}

export const noMatchMiddleware = (_: NextApiRequest, res: NextApiResponse<Payload>) => {
  const { statusCode, payload } = notFound().output

  return res.status(statusCode).json(payload)
}
