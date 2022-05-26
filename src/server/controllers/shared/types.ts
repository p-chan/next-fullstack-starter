import { NextApiRequest, NextApiResponse } from 'next'
import { NextHandler } from 'next-connect'

export type Request<P = {}, B = {}, Q = {}> = Omit<NextApiRequest, 'params' | 'body' | 'query'> & {
  params: P
  body: B
  query: Q
}

export type Response<B = never> = NextApiResponse<B>

export type NextFunction = NextHandler
