import { Enum } from '../constants'
import { type InterviewDetailsDTO } from '../types'
import { Schema, model } from 'mongoose'

const interviewDetailsSchema = new Schema<InterviewDetailsDTO>({
  name: { type: String, required: true },
  status: { type: String, enum: Enum.Status, required: true },
  feedback: { type: String, required: true },
  rating: { type: Number, required: true },
  interviewId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Interview',
  },
})

const InterviewDetailsModel = model<InterviewDetailsDTO>(
  'InterviewDetails',
  interviewDetailsSchema
)

export default InterviewDetailsModel
