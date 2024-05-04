import { authController } from '../controllers'
import { Router } from 'express'
import { authValidator } from '../validators'

const authRouter = Router()

authRouter.post(
  '/login',
  authValidator.validateInput.bind(authValidator),
  authController.login.bind(authController)
)
authRouter.post(
  '/register',
  authValidator.validateInput.bind(authValidator),
  authController.register.bind(authController)
)

authRouter.post(
  '/reset-password',
  authValidator.validateInput.bind(authValidator),
  authController.resetPassword.bind(authController)
)

export default authRouter
