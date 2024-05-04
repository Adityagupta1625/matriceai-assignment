import { BaseValidator } from '../../../utils'

const authSchema = {
  type: 'object',
  properties: {
    username: { type: 'string' },
    password: { type: 'string' },
  },
  required: ['username', 'password'],
  additionalProperties: false,
}

const authValidator = new BaseValidator(authSchema)

export { authValidator }
