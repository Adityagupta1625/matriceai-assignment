import { IconPencil, IconTrash } from "@tabler/icons-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { FormType } from "@/constants/enum";
import { InterviewDetailsForm } from "./form";
import { toast } from "react-toastify";
import { InterviewDetailsDTO } from "@/types";
import { deleteInterviewDetails } from "@/lib/InterviewDetails/delete";

export default function Actions(props: {data:InterviewDetailsDTO}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only text-black">Open menu</span>
          <DotsHorizontalIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
      
        <DropdownMenuItem asChild>
          <Dialog>
            <DialogTrigger asChild>
              <p className="flex flex-row p-1 items-center cursor-pointer justify-start">
                <IconPencil className="h-4 w-4 mr-2" />
                <p className="text-sm">View & Edit</p>
              </p>
            </DialogTrigger>
            <InterviewDetailsForm
              type={FormType.Update}
              data={{
                name: props.data.name,
                _id: props.data._id,
                rating: props.data.rating,
                feedback: props.data.feedback,
                status: props.data.status,
                interviewId: props.data.interviewId,
              }}
            />
          </Dialog>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <div className="flex flex-row p-1 cursor-pointer">
            <IconTrash className="h-4 w-4 mr-2" />
            <p
              onClick={async (e) => {
                try {
                  e.preventDefault();
                  await deleteInterviewDetails(props.data._id);
                  toast.success("Deleted Successfully!!");
                  window.location.reload();
                } catch (e: any) {
                  toast.error(
                    e?.message ?? "Error Occurred! Please Try Again Later"
                  );
                }
              }}
            >
              {" "}
              Delete{" "}
            </p>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
