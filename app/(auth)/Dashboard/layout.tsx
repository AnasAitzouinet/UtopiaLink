"use client";
import SideBar from "@/components/Sidebare/SideBar";
import React, { useRef } from "react";
import { useInView, motion, inView } from "framer-motion";

interface Props {
  children: React.ReactNode;
}
export default function Layout({ children }: Props) {
  const ref = useRef(null);
  const InView = useInView(ref);
  return (
    <div className="w-screen h-screen relative bg-[#1C1C1C]">
      <motion.div
        className={`bg-[#1C1C1C] hidden md:flex w-[20%] h-full absolute left-0 text-white`}
        ref={ref}
        style={{
          transform: InView ? "none" : "translateX(-200px)",
          opacity: InView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
      >
        <SideBar />
      </motion.div>
      <motion.div
        initial={{ width: "100%" ,media: "(min-width: 768px)"}}
        animate={{ width: InView ? "80%" : "100%" }}
        transition={{ duration: 0.9 }}
        className="bg-[#E5ECF6] w-full md:w-[80%] rounded-none
        p-2
        h-full absolute top-0 md:rounded-t-3xl rounded-e-none right-0"
      >
        {children}
      </motion.div>
    </div>
  );
}
