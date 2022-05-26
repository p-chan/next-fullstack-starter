import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'

import { usersController } from '@server/controllers'
import { errorMiddleware, noMatchMiddleware, validateMiddleware } from '@server/middlewares'
import { userSchema } from '@server/schemas'

const app = nextConnect<NextApiRequest, NextApiResponse>({
  onError: errorMiddleware,
  onNoMatch: noMatchMiddleware,
  attachParams: true,
})

app.get('/api/users', usersController.indexHandler)
app.post('/api/users', validateMiddleware(userSchema.createRequestSchema), usersController.createHandler)
app.get('/api/users/:userId', validateMiddleware(userSchema.showRequestSchema), usersController.showHandler)
app.put('/api/users/:userId', validateMiddleware(userSchema.updateRequestSchema), usersController.updateHandler)
app.delete('/api/users/:userId', validateMiddleware(userSchema.destroyRequestSchema), usersController.destroyHandler)

export default app
