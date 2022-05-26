import { userSchema } from '@server/schemas'

import { Request, Response } from './shared'

export const indexHandler = (req: Request, res: Response<userSchema.IndexResponse>) => {}

export const createHandler = (req: Request, res: Response<userSchema.CreateResponse>) => {}

export const showHandler = (req: Request, res: Response<userSchema.ShowResponse>) => {}

export const updateHandler = (req: Request, res: Response<userSchema.UpdateResponse>) => {}

export const destroyHandler = (req: Request, res: Response<userSchema.DestroyRequest>) => {}
