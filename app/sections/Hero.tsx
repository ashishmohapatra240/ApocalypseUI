"use client";
import { useState } from "react";
import Chip from "../components/ui/Chip";
import TextField from "../components/ui/TextField";
import Button from "../components/ui/Button";
import Marquee from "../components/ui/Marquee";
import Image from "next/image";
import { useWaitlist } from "../hooks/useWaitlist";
import { toast } from "sonner";

export default function Hero() {
  const [email, setEmail] = useState("");
  const { mutate, isPending } = useWaitlist();

  const handleSubmit = () => {
    if (!email) {
      toast.error("Please enter an email address");
      return;
    }

    mutate(email, {
      onSuccess: () => {
        setEmail("");
        toast.success("Joined the waitlist!");
      },
      onError: (error) => {
        toast.error(error.message || "Failed to join waitlist");
      },
    });
  };

  return (
    <section className="flex flex-col items-center justify-center h-screen relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black">
        <Image
          src="/images/pop.png"
          alt="Background"
          preload={true}
          width={2400}
          height={2400}
          className="w-full md:h-full h-[500px] object-cover md:right-[40%] right-[30%] md:mt-[40px] absolute scale-160"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
          <Chip text="Web 3 UI Design Kit" />
          <h1 className="text-white md:text-4xl text-2xl font-bold uppercase max-w-[400px] text-center leading-[1.6] mt-5">
            We're launching soon
          </h1>
          <div className="flex mt-10">
            <TextField
              label="Email"
              placeholder="Enter Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              text="Join Waitlist"
              handleClick={handleSubmit}
              isLoading={isPending}
            />
          </div>
        </div>
      </div>
      <Marquee />
    </section>
  );
}