import { type Document } from 'mongoose'

export interface UserDTO extends Document {
  username: string
  password: string
}
