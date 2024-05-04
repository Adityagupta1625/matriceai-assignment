import { type NextFunction, type Request, type Response } from 'express'
import jwt from 'jsonwebtoken'
import { errorHandler } from '../../../utils'
import { userCRUD } from '../crud'
import { type UserDTO } from '../types'

export const validateToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const token = req.headers?.authorization

    if (token === null || token === undefined) {
      res.status(400).json({ message: 'Token not found' })
      return
    }

    jwt.verify(
      token.split(' ')[1],
      process.env.SECRET as string,
      (err, decoded: any) => {
        if (err !== null) {
          res.status(401).json({ message: 'Invalid Token' })
        } else {
          const id: string = decoded?.id
          const user: Promise<UserDTO | null> = userCRUD.find({
            _id: id,
          })

          user
            .then((result: UserDTO | null) => {
              if (result === null) {
                res.status(401).json({ message: 'Invalid Token' })
              } else {
                ;(req as any).userId = result.id
                next()
              }
            })
            .catch((e: any) => {
              errorHandler(e, res)
                .then(() => {})
                .catch(() => {})
            })
        }
      }
    )
  } catch (e) {
    errorHandler(e, res)
      .then(() => {})
      .catch(() => {})
  }
}
