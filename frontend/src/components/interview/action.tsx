import { IconPencil, IconTrash } from "@tabler/icons-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { FormType } from "@/constants/enum";
import { InterviewForm } from "./form";
import { toast } from "react-toastify";
import { deleteInterview } from "@/lib/Interview/delete";
import { useRouter } from "next/navigation";

export default function Actions(props: { name: string; id: string }) {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <DotsHorizontalIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem
          onClick={() => {
            router.push(`/details/${props.id}`);
          }}
          className="cursor-pointer"
        >
          View Interview Details
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Dialog>
            <DialogTrigger asChild>
              <p className="flex flex-row p-1 items-center cursor-pointer justify-start">
                <IconPencil className="h-4 w-4 mr-2" />
                <p className="text-sm">View & Edit</p>
              </p>
            </DialogTrigger>
            <InterviewForm
              type={FormType.Update}
              data={{
                name: props.name,
                _id: props.id,
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
                  await deleteInterview(props.id);
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
