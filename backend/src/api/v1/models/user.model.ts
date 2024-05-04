import { Schema, model } from 'mongoose'
import { type UserDTO } from '../types'

const UserSchema = new Schema<UserDTO>(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
  },
  { timestamps: true }
)

const UserModel = model<UserDTO>('User', UserSchema)

export default UserModel
