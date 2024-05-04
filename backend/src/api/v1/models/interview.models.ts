import { type InterviewDTO } from '../types'
import { Schema, model } from 'mongoose'

const interviewSchema = new Schema<InterviewDTO>({
  name: { type: String, required: true },
  userId: { type: String, required: true }
})

const InterviewModel = model<InterviewDTO>('Interview', interviewSchema)
export default InterviewModel
