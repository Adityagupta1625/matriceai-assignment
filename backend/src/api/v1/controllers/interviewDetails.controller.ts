import { BaseController } from '../../../utils'
import { interviewDetailsCRUD } from '../crud'
import { type InterviewDetailsDTO } from '../types'

class InterviewDetailsController extends BaseController<InterviewDetailsDTO> {
  constructor () {
    super(interviewDetailsCRUD)
  }
}

const interviewDetailsController = new InterviewDetailsController()
export default interviewDetailsController
