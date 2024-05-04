import { CRUDBase } from '../../../utils'
import { InterviewModel } from '../models'
import { type InterviewDTO } from '../types'

class InterviewCRUD extends CRUDBase<InterviewDTO> {
  constructor () {
    super(InterviewModel)
  }
}

const interviewCRUD = new InterviewCRUD()
export default interviewCRUD
