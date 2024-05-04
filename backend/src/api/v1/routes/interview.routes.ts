import { type NextFunction, Router, type Request, type Response } from 'express'
import { interviewController } from '../controllers'
import { interviewValidator } from '../validators'

const interviewRouter = Router()

interviewRouter.post(
  '/',
  interviewValidator.validateInput.bind(interviewValidator),
  (req: Request, res: Response, next: NextFunction) => {
    const userId = (req as any).userId
    req.body = { ...req.body, userId }
    next()
  },
  interviewController.addController.bind(interviewController)
)

interviewRouter.get(
  '/',
  (req: Request, res: Response, next: NextFunction) => {
    const userId = (req as any).userId
    req.query = { ...req.query, userId }
    next()
  },
  interviewController.getAllController.bind(interviewController)
)

interviewRouter.get(
  '/:id',
  interviewController.getByIdController.bind(interviewController)
)

interviewRouter.patch(
  '/:id',
  interviewController.updateController.bind(interviewController)
)

interviewRouter.delete(
  '/:id',
  interviewController.deleteController.bind(interviewController)
)

export default interviewRouter
