import { InterviewDetailsDTO } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import ReactStars from "react-stars";
import Actions from "./actions";

export const columns: ColumnDef<InterviewDetailsDTO>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "feedback",
    header: "Feedback",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("feedback")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "rating",
    header: "Rating",
    cell: ({ row }) => (
      <ReactStars
        count={5}
        size={24}
        value={row.getValue("rating")}
        color2={"#ffd700"}
        edit={false}
      />
    ),
  },
  {
    accessorKey: "Row Actions",
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      return <Actions data={row.original} />;
    },
  },
];
