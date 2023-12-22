"use client";
import React, { useState, useContext, useRef } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useInView, motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Personal() {
  const container = useRef(null);
  const isInView = useInView(container);
  return (
    <motion.div
      style={{
        transform: isInView ? "none" : "translateX(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
      }}
      ref={container}
      className="w-[90%] h-[90%] flex flex-col justify-start py-8 items-center "
    >
      <h1 className="text-3xl font-bold">About you</h1>
      <h2 className="text-xl text-gray-200 font-">
        Please tell us a little about yourself
      </h2>
      <div className="grid grid-cols-2 mt-5 place-items-center place-content-start gap-5 py-5 px-12  w-full h-full">
        <input
          type="text"
          className="w-full rounded-full px-5 
                border  hover:border-[#C0F497] py-3 text-lg text-white outline-none ring-0
            bg-transparent"
          placeholder="First Name"
        />
        <input
          type="text"
          className="w-full rounded-full px-5 
                border  hover:border-[#C0F497] py-3 text-lg text-white outline-none ring-0
            bg-transparent"
          placeholder="Last Name"
        />
        <input
          type="email"
          className="w-full rounded-full px-5 
                border  hover:border-[#C0F497] py-3 text-lg text-white outline-none ring-0
            bg-transparent"
          placeholder="Email"
        />
        <input
          type="text"
          className="w-full rounded-full px-5 
                border  hover:border-[#C0F497] py-3 text-lg text-white outline-none ring-0
            bg-transparent"
          placeholder="Phone number"
        />
        <input
          type="text"
          className="w-full rounded-full px-5 col-span-2
                border  hover:border-[#C0F497] py-3 text-lg text-white outline-none ring-0
            bg-transparent"
          placeholder="Home address"
        />
        <input
          type="text"
          className="w-full rounded-full px-5 
                border  hover:border-[#C0F497] py-3 text-lg text-white outline-none ring-0
            bg-transparent"
          placeholder="City"
        />

        <Select>
          <SelectTrigger
            className="w-full rounded-full px-5 focus:outline-none focus:ring-0
                border  hover:border-[#C0F497] py-7 text-lg text-white outline-none ring-0
            bg-transparent"
          >
            <SelectValue placeholder="Country" className="text-gray-200" />
          </SelectTrigger>
          <SelectContent className="bg-[#1C1C1C] text-white rounded-xl">
            <SelectItem
              value="light"
              className="bg-[#1C1C1C] text-white rounded-xl"
            >
              Light
            </SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </motion.div>
  );
}
