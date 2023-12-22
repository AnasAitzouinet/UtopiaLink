"use client";
import React, { useState, useRef } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { useInView, motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Business() {
  const container = useRef(null);
  const isInView = useInView(container);
  return (
    <div
      ref={container}
      style={{
        transform: isInView ? "none" : "translateX(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
      }}
      className="w-[90%] h-[90%] flex flex-col justify-start py-5 items-center "
    >
      <h1 className="text-3xl font-bold">Business Category</h1>
      <h2 className="text-xl text-gray-200 font-">
        Please tell us a little about your business
      </h2>
      <div className=" grid grid-cols-2 mt-3 place-items-center place-content-start gap-5 py-5 px-12  w-full h-full">
        <input
          type="text"
          className="w-full rounded-full px-5 col-span-2
                border  hover:border-[#C0F497] py-3 text-lg text-white outline-none ring-0
            bg-transparent"
          placeholder="Business Name"
        />

        <input
          type="text"
          className="w-full rounded-full px-5 col-span-2   
                border  hover:border-[#C0F497] py-3 text-lg text-white outline-none ring-0
            bg-transparent"
          placeholder="Business Type (e.g. E-Commerce, Retail, etc.)"
        />
        <input
          type="text"
          className="w-full rounded-full px-5 col-span-2   
                border  hover:border-[#C0F497] py-3 text-lg text-white outline-none ring-0
            bg-transparent"
          placeholder="Business Category (e.g. Clothing, Electronics, etc.)"
        />

        <input
          type="text"
          className="w-full rounded-full px-5   col-span-2
                border  hover:border-[#C0F497] py-3 text-lg text-white outline-none ring-0
            bg-transparent"
          placeholder="Business description"
        />
        <div className="flex gap-2 items-center justify-center w-full text-center col-span-2">
          <Checkbox
            id="checkBox"
            className="border-[#C0F497] data-[state=checked]:bg-transparent h-5 w-5"
          />

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <label
                  htmlFor="checkBox"
                  className="cursor-pointer text-center text-gray-200"
                >
                  Is your business located in the same country as you?
                </label>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  If that&apos;s not the case, please specify it in your
                  description
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
}
