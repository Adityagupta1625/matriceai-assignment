import { BaseValidator } from '../../../utils'

const interviewSchema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
  },
  required: ['name'],
  additionalProperties: false,
}

const interviewValidator = new BaseValidator(interviewSchema)

export { interviewValidator }
