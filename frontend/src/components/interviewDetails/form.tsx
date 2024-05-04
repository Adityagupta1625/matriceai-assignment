import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { FormType } from "@/constants/enum";
import { addInterviewDetails } from "@/lib/InterviewDetails/add";
import { updateInterviewDetails } from "@/lib/InterviewDetails/update";
import { InterviewDetailsDTO } from "@/types";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Enum from "@/constants/enum";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type InterviewDetailsProps = {
  type: FormType;
  data: InterviewDetailsDTO;
};

export function InterviewDetailsForm(props: InterviewDetailsProps) {
  const [name, setName] = useState<string>(props.data.name);
  const [status, setStatus] = useState<string>(props.data.status);
  const [rating, setRating] = useState<number>(props.data.rating);
  // const [interviewId,setInterviewId]=useState<string>(props.data.interviewId)
  const [feedback, setFeedback] = useState<string>(props.data.feedback);

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault();

      if (props.type === FormType.Add) {
        await addInterviewDetails({
          name: name,
          status: status as Enum.Status,
          feedback: feedback,
          rating: rating,
          interviewId: props.data.interviewId,
        });
        toast.success("Details Added Successfully!!");
      } else {
        await updateInterviewDetails(
          {
            name: name,
            status: status as Enum.Status,
            feedback: feedback,
            rating: rating,
            interviewId: props.data.interviewId,
          },
          props.data._id
        );
        toast.success("Details Updated Successfully!!");
      }

      window.location.reload();
    } catch (e: any) {
      console.log(e);
      toast.error(e?.message ?? "Something Went Wrong!!");
    }
  };

  return (
    <>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {props.type === FormType.Add ? "Add" : " View & Edit"} Interview
            Details
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              className="w-96"
              type="text"
              placeholder="Candidate Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Textarea
              className="w-96"
              placeholder="Feedback"
              value={feedback}
              onChange={(e) => {
                setFeedback(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Select value={status} onValueChange={(e)=>{
                setStatus(e)
            }}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Completed">Completed</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
              
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              type="number"
              className="w-96"
              placeholder="Rating"
              value={rating}
              onChange={(e) => {
                setRating(parseInt(e.target.value));
              }}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </>
  );
}
