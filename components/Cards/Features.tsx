"use client";
import React from "react";

interface Props {
    title: string;
    description: string;
    image: string;
    }

export default function Features({ title, description, image }: Props) {
  return (
    <div
      className="flex-col flex text-white justify-center items-center transition-all 
      duration-500 ease-in-out
      hover:border-[#FFD700] hover:cursor-pointer
    border w-[90%] h-[90%] py-5 rounded-xl bg-[#111218]  border-gray-300/20
    "
    >
      <img src={image} alt="" className="h-[70%] w-[70%] py-2" />
      <h1 className="text-lg text-center font-semibold pt-5">
       {title}
      </h1>
      <h2 className="text-sm text-gray-200 text-center px-2">
        {description}
      </h2>
    </div>
  );
}
