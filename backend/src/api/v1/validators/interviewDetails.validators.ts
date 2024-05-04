import { BaseValidator } from '../../../utils'

const interviewDetailsSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    status: { type: 'string', enum: ['Completed', 'In Progress'] },
    feedback: { type: 'string' },
    rating: { type: 'number' },
    interviewId: { type: 'string' }
  },
  required: ['name', 'status', 'feedback', 'rating', 'interviewId'],
  additionalProperties: false
}

const interviewDetailsValidator = new BaseValidator(interviewDetailsSchema)

export { interviewDetailsValidator }
