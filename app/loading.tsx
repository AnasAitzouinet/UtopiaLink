"use client";

import React from "react";

export default function loading() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#1C1C1C] gap-2  text-white">
      <h1 className="text-6xl font-bold">UTOPIA</h1>
      <div className="flex flex-row justify-center items-center pt-6 h-full gap-1">
        <div
          className="bg-[#e6e6f7] rounded-full h-4 w-4 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="bg-[#e6e6f7] rounded-full h-4 w-4 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="bg-[#e6e6f7] rounded-full h-4 w-4 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>
    </div>
  );
}
