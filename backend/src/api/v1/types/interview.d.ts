import { type Enum } from '../constants'
import { type Document, type ObjectId } from 'mongoose'

export interface InterviewDTO extends Document {
  name: string
  userId: string
}

export interface InterviewDetailsDTO extends Document {
  name: string
  status: Enum.Status
  feedback: string
  rating: number
  interviewId: ObjectId
}
