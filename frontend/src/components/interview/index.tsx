import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { FormType } from "@/constants/enum";
import { InterviewDTO } from "@/types";
import { DataTable } from "../utils/Table";
import { columns } from "./columns";
import { InterviewForm } from "./form";
import { useEffect, useState } from "react";
import { getAllInterview } from "@/lib/Interview/get";
import { ToastContainer } from "react-toastify";

export default function Interviews() {
  const [data, setData] = useState<InterviewDTO[]>([]);

  useEffect(() => {
    getAllInterview()
      .then((result) => {
        setData(result);
      })
      .catch((e) => {
        console.log("Error: ", e);
      });
  }, []);

  return (
    <>
    <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    <div className="flex flex-col   p-4 lg:p-8">
      <h1 className="text-3xl font-bold text-black text-center my-2 mb-6 p-2">
        Interviews List
      </h1>
      <div className="flex flex-row justify-end">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-black rounded-lg text-md text-white mb-3 w-28 md:w-48 p-2 hover:bg-gray-700">
              {" "}
              Add{" "}
            </Button>
          </DialogTrigger>
          <InterviewForm
            type={FormType.Add}
            data={{
              name: "",
              _id: "",
            }}
          />
        </Dialog>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
    </>
  );
}
