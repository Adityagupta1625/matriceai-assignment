import { Router } from 'express'
import { interviewDetailsController } from '../controllers'
import { interviewDetailsValidator } from '../validators'

const interviewDetailsRouter = Router()

interviewDetailsRouter.post(
  '/',
  interviewDetailsValidator.validateInput.bind(interviewDetailsValidator),

  interviewDetailsController.addController.bind(interviewDetailsController)
)

interviewDetailsRouter.get(
  '/',
  interviewDetailsController.getAllController.bind(interviewDetailsController)
)

interviewDetailsRouter.patch(
  '/:id',
  interviewDetailsController.updateController.bind(interviewDetailsController)
)

interviewDetailsRouter.delete(
  '/:id',
  interviewDetailsController.deleteController.bind(interviewDetailsController)
)

export default interviewDetailsRouter
