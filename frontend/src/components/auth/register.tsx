"use client";
import TextField from "../utils/TextField";
import Button from "../utils/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { register } from "@/lib/Auth/register";

export default function RegisterForm() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  const [, setCookies] = useCookies(["token"]);

  const handleRegister = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    try {
      e.preventDefault();

      if (username === "" || password === "") {
        toast.warn("Please fill all the fields");
        return;
      }

      const data: {
        message: string;
        token: string;
      } = (await register({
        username: username,
        password: password,
      })) as any;
      toast.success(data.message);
      setUsername("");
      setPassword("");
      setCookies("token", data.token, { path: "/" });
      router.push("/");
    } catch (e: any) {
      console.log(e.response);
      toast.error(e?.response?.data ?? "Something Went Wrong!!");
    }
  };

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
      <div
        id="page-container"
        className="mx-auto flex min-h-dvh w-full min-w-[320px] flex-col bg-gray-100 text-gray-800"
      >
        <main id="page-content" className="flex max-w-full flex-auto flex-col">
          <div className="relative mx-auto flex min-h-dvh w-full max-w-10xl items-center justify-center overflow-hidden p-4 lg:p-8">
            <section className="w-full max-w-xl py-6">
              <header className="mb-10 text-center">
                <h1 className="mb-2 inline-flex items-center space-x-2 text-2xl font-bold">
                  Welcome, Please Register
                </h1>
              </header>

              <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm ">
                <div className="grow p-5 md:px-16 md:py-12">
                  <form className="space-y-6">
                    <TextField
                      name="username"
                      type="username"
                      placeholder="Enter your username"
                      value={username}
                      setValue={setUsername}
                      className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500 focus:ring-opacity-50 "
                    ></TextField>
                    <TextField
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      setValue={setPassword}
                      className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500 focus:ring-opacity-50 "
                    ></TextField>
                    <div>
                      <div className="mb-5 flex items-center justify-between space-x-2">
                        <a
                          href="/login"
                          className="inline-block text-sm font-medium text-blue-600 hover:text-blue-400 "
                        >
                          Already a User
                        </a>
                      </div>
                      <Button
                        className="inline-flex w-full items-center justify-center space-x-2 rounded-lg border border-blue-700 bg-blue-700 px-6 py-3 font-semibold leading-6 text-white hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:border-blue-700 active:bg-blue-700 "
                        onClick={(e) => handleRegister(e)}
                        name="Register"
                      ></Button>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
