import { CRUDBase } from '../../../utils'
import { InterviewDetailsModel } from '../models'
import { type InterviewDetailsDTO } from '../types'

class InterviewDetailsCRUD extends CRUDBase<InterviewDetailsDTO> {
  constructor () {
    super(InterviewDetailsModel)
  }
}

const interviewDetailsCRUD = new InterviewDetailsCRUD()
export default interviewDetailsCRUD
