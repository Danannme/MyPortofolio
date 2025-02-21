import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@material-tailwind/react";
import { Alert } from "@material-tailwind/react";

export default function FormContact() {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(null);

    const onSubmit = async (data, event) => {
        event.preventDefault();

        setIsLoading(true);
        try {
            const res = await fetch("https://formspree.io/f/manqvqrq", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            console.log(await res.json());
            reset();
            setIsSuccess(true);
        } catch {
            setIsSuccess(false);
            console.log("Error:", errors);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="relative flex flex-col rounded-xl bg-transparent">
            <h4 className="block self-center text-xl font-medium text-slate-800">
                Get In Touch!
            </h4>
            {isSuccess == true ? (
                <Alert color="green" onClose={() => setIsSuccess(null)}>
                    Message sent successfully
                </Alert>
            ) : isSuccess == false ? (
                <Alert color="red" onClose={() => setIsSuccess(null)}>
                    Message failed to send
                </Alert>
            ) : (
                <></>
            )}
            <form
                className="mt-2 mb-2 w-80 max-w-screen-lg sm:w-96"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="mb-5 flex flex-col gap-3">
                    <div class="w-full max-w-sm min-w-[200px]">
                        <label className="block mb-0 text-sm text-slate-600">
                            Name
                        </label>
                        <input
                            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                            labelProps={{
                                className:
                                    "before:content-none after:content-none",
                            }}
                            type="text"
                            {...register("name", { required: true })}
                        />
                    </div>

                    <div class="w-full max-w-sm min-w-[200px]">
                        <label className="block text-sm text-slate-600">
                            Email
                        </label>
                        <input
                            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                            labelProps={{
                                className:
                                    "before:content-none after:content-none",
                            }}
                            type="email"
                            {...register("email", { required: true })}
                        />
                    </div>

                    <div class="w-full max-w-sm min-w-[200px]">
                        <label className="block text-sm text-slate-600">
                            Subject
                        </label>
                        <input
                            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                            labelProps={{
                                className:
                                    "before:content-none after:content-none",
                            }}
                            type="text"
                            {...register("_subject", { required: true })}
                        />
                    </div>

                    <div class="w-full max-w-sm min-w-[200px]">
                        <label className="block text-sm text-slate-600">
                            Message
                        </label>
                        <input
                            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                            labelProps={{
                                className:
                                    "before:content-none after:content-none",
                            }}
                            type="text"
                            {...register("message", { required: true })}
                        />
                    </div>
                </div>
                <Button
                    class="w-full rounded-md bg-black py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md focus:bg-slate-700 focus:shadow-none active:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer!"
                    type="submit"
                    fullWidth
                    loading={isLoading == true ? true : false}
                >
                    {isLoading ? "Loading" : "Send"}
                </Button>
            </form>
        </div>
    );
}
