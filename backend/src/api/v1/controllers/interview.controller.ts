import { BaseController } from '../../../utils'
import { interviewCRUD } from '../crud'
import { type InterviewDTO } from '../types'

class InterviewController extends BaseController<InterviewDTO> {
  constructor() {
    super(interviewCRUD)
  }
}

const interviewController = new InterviewController()
export default interviewController
