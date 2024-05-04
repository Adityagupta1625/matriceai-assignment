import * as Enum from '@/constants/enum'

export type InterviewDetailsDTO = {
  name: string;
  status: Enum.Status;
  feedback: string;
  rating: number;
  interviewId: ObjectId;
  _id: string;
};
