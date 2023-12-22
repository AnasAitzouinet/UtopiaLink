"use client";
import React, { useContext, useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Progress from "@/components/Progress/Progress";
import Personal from "./Personal";
import UButton from "@/components/Costume Inputs/Button";
import Business from "./Business";
import { useInView } from "framer-motion";
export default function AccountSetup() {
  const [steps, setSteps] = useState(25);
  const nextButton = useRef(null);
  const nextButtonInView = useInView(nextButton);
  const handelSteps = (steps: number) => {
    switch (steps) {
      case 25:
        return <Personal />;
      case 50:
        return <Business />;
      case 75:
        return <Personal />;
      case 100:
        return <Business />;
      default:
        return <Personal />;
    }
  };

  return (
    <div className="w-screen h-screen text-white bg-[#1C1C1C] -[#C0F497] overflow-hidden relative">
      <div
        className="bg-[#C0F497] w-[35%] h-screen fixed top-0 left-0 z-10
        justify-center items-center 
        text-black flex flex-col"
      >
        <h1 className="text-6xl font-bold uppercase">Utopia</h1>
        <p className="text-xl font-bold">
          complete your account setup to get started
        </p>
        <Link
          href={"/"}
          className="flex gap-2 items-center justify-center py-5"
        >
          <ArrowLeft className="h-5 w-5 font-bold" />
          <span className=" hover:underline capitalize font-bold">
            return to homepage
          </span>
        </Link>
      </div>
      <div
        className="w-[65%] h-screen flex flex-col
      absolute top-0 right-0 z-10
      text-white items-center"
      >
        <Progress steps={steps} />
        <div className="flex justify-center items-center w-full h-full">
          {handelSteps(steps)}
        </div>
        <div className="grid grid-cols-2 place-items-center gap-3 place-content-start w-[90%] px-12 py-12">
          <UButton
            text="Back"
            className={` ${
              steps === 25 ? "opacity-0 cursor-default" : "cursor-pointer"
            } capitalize hover:bg-[#C0F497] hover:underline
            transition-all duration-700 w-full
            hover:text-black hover:font-bold `}
            handleClick={() =>
              steps === 25 ? setSteps(25) : setSteps(steps - 25)
            }
          />

          <UButton
           
            className="capitalize hover:bg-[#C0F497] hover:underline
            transition-all duration-700 w-full
            hover:text-black hover:font-bold"
            text="next"
            handleClick={() => {
              steps === 100 ? setSteps(100) : setSteps(steps + 25);
            }}
          />
        </div>
      </div>
    </div>
  );
}
