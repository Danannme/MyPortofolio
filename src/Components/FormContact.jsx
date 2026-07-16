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
        <div className="relative flex flex-col border border-black/80 bg-white p-6 md:p-8 rounded-none w-80 sm:w-96 crop-marks print-proof-frame">
            {/* Top gold design line accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gold"></div>
            
            <h4 className="block self-center text-xl font-serif font-black uppercase tracking-widest text-black mb-4">
                Get In Touch!
            </h4>
            {isSuccess == true ? (
                <Alert color="green" className="rounded-none font-sans font-bold text-xs tracking-wider" onClose={() => setIsSuccess(null)}>
                    Message sent successfully
                </Alert>
            ) : isSuccess == false ? (
                <Alert color="red" className="rounded-none font-sans font-bold text-xs tracking-wider" onClose={() => setIsSuccess(null)}>
                    Message failed to send
                </Alert>
            ) : (
                <></>
            )}
            <form
                className="mt-2 mb-2 w-full"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="mb-6 flex flex-col gap-4">
                    <div className="w-full">
                        <label className="block text-xs font-sans font-bold tracking-widest uppercase text-black mb-1.5">
                            Name
                        </label>
                        <input
                            className="w-full bg-beige/10 placeholder:text-slate-400 text-black font-sans text-sm border border-black/80 rounded-none px-3.5 py-2.5 transition duration-300 ease focus:outline-none focus:border-winered hover:border-winered"
                            type="text"
                            {...register("name", { required: true })}
                        />
                    </div>

                    <div className="w-full">
                        <label className="block text-xs font-sans font-bold tracking-widest uppercase text-black mb-1.5">
                            Email
                        </label>
                        <input
                            className="w-full bg-beige/10 placeholder:text-slate-400 text-black font-sans text-sm border border-black/80 rounded-none px-3.5 py-2.5 transition duration-300 ease focus:outline-none focus:border-winered hover:border-winered"
                            type="email"
                            {...register("email", { required: true })}
                        />
                    </div>

                    <div className="w-full">
                        <label className="block text-xs font-sans font-bold tracking-widest uppercase text-black mb-1.5">
                            Subject
                        </label>
                        <input
                            className="w-full bg-beige/10 placeholder:text-slate-400 text-black font-sans text-sm border border-black/80 rounded-none px-3.5 py-2.5 transition duration-300 ease focus:outline-none focus:border-winered hover:border-winered"
                            type="text"
                            {...register("_subject", { required: true })}
                        />
                    </div>

                    <div className="w-full">
                        <label className="block text-xs font-sans font-bold tracking-widest uppercase text-black mb-1.5">
                            Message
                        </label>
                        <textarea
                            className="w-full min-h-[80px] bg-beige/10 placeholder:text-slate-400 text-black font-sans text-sm border border-black/80 rounded-none px-3.5 py-2.5 transition duration-300 ease focus:outline-none focus:border-winered hover:border-winered"
                            {...register("message", { required: true })}
                        />
                    </div>
                </div>
                <Button
                    className="w-full rounded-none bg-winered hover:bg-black text-white hover:text-gold border border-transparent hover:border-gold py-3.5 px-4 text-center font-sans text-xs tracking-widest font-bold uppercase transition-all duration-500 shadow-none hover:shadow-md cursor-pointer flex justify-center items-center"
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
