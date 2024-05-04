import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { FormType } from "@/constants/enum";
import { addInterview } from "@/lib/Interview/add";
import { updateInterview } from "@/lib/Interview/update";
import { InterviewDTO } from "@/types";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type InterviewProps = {
  type: FormType;
  data: InterviewDTO;
};

export function InterviewForm(props: InterviewProps) {
  const [name, setName] = useState<string>(props.data.name);

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault();

      if (props.type === FormType.Add) {
        await addInterview({ name: name });
        toast.success("Details Added Successfully!!");
      } else {
        await updateInterview({ name: name }, props.data._id);
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
            {props.type === FormType.Add ? "Add" : " View & Edit"} Interviews
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              className="w-96"
              type="text"
              placeholder="company name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
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
