import { HttpException, errorHandler } from '../../../utils'
import { userCRUD } from '../crud'
import { type Request, type Response } from 'express'
import bcrypt, { compareSync } from 'bcryptjs'
import jwt from 'jsonwebtoken'

class AuthController {
  public async register (req: Request, res: Response): Promise<Response> {
    try {
      const { username, password } = req.body
      const hashedPassword = bcrypt.hashSync(password, 10)

      const user = await userCRUD.add({ username, password: hashedPassword })

      const token = jwt.sign({ id: user._id }, process.env.SECRET ?? '')

      return res.status(200).json({
        message: 'Registered Successfully!!',
        token
      })
    } catch (e) {
      return await errorHandler(e, res)
    }
  }

  public async login (req: Request, res: Response): Promise<Response> {
    try {
      const { username, password } = req.body

      const user = await userCRUD.find({ username })
      if (user === null) throw new HttpException(404, 'User Does not Exist')

      const isValid = compareSync(password, user.password)
      if (!isValid) throw new HttpException(401, 'Invalid Credentials')

      const token = jwt.sign({ id: user._id }, process.env.SECRET ?? '')

      return res.status(200).json({
        message: 'Login Successfully!!',
        token
      })
    } catch (e) {
      return await errorHandler(e, res)
    }
  }

  public async resetPassword (req: Request, res: Response): Promise<Response> {
    try {
      const { username, password } = req.body
      const hashedPassword = bcrypt.hashSync(password, 10)

      const user = await userCRUD.find({ username })
      if (user === null) throw new HttpException(404, 'User Does not Exist')

      await userCRUD.update(user._id, { password: hashedPassword })

      const token = jwt.sign({ id: user._id }, process.env.SECRET ?? '')

      return res.status(200).json({
        message: 'Password Reset Successfully!!',
        token
      })
    } catch (e) {
      return await errorHandler(e, res)
    }
  }
}

const authController = new AuthController()
export default authController
