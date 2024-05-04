import { Router } from 'express'
import authRouter from './auth.routes'
import interviewRouter from './interview.routes'
import interviewDetailsRouter from './interviewDetails.routes'
import { validateToken } from '../middleware'
const apiRouter = Router()

apiRouter.use('/auth', authRouter)
apiRouter.use('/interview',validateToken,interviewRouter)
apiRouter.use('/interviewDetails',validateToken,interviewDetailsRouter)

export default apiRouter
