"use client";

import UButton from "@/components/Costume Inputs/Button";
import React, { useState } from "react";
import prisma from "@/lib/prismadb";

import toast, { Toaster } from "react-hot-toast";
const notify = ({ message, type }: any) => {
  if (type === "success") {
    toast.success(message, { duration: 4000, position: "top-center" });
  } else {
    toast.error(message, { duration: 4000, position: "top-center" });
  }
};

export default function Whitelist() {
  const [email, setEmail] = useState("");
  const handelSubmit = async (e: any) => {
    e.preventDefault();
    if (email === "") {
      notify({ message: "Please Enter Your Email", type: "error" });
      return;
    }
    await fetch("/Waitlist/api", {
      method: "POST",
      body: JSON.stringify({ email }),
    }).then(async (res) => {
      const data = await res.json();
      notify({
        message: data.message,
        type: res.status === 200 ? "success" : "error",
      });
      setEmail("");
    });
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-[#1C1C1C] text-white">
      <Toaster />
      <h1
        onClick={() => window.open("/", "_self")}
        className="text-center cursor-pointer py-5 text-5xl font-bold uppercase"
      >
        Utopia
      </h1>
      <div className="lg:grid lg:grid-cols-2 lg:py-28 lg:place-items-start h-screen w-screen">
        <div className="flex flex-col items-start justify-center py-5 gap-4 px-6">
          <h2 className="text-start text-4xl font-semibold text-yellow-200 ">
            Join our WaitList
          </h2>
          <p className="text-start  text-lg font-semibold text-gray-200 ">
            Catch a sneak peek and be among the first to experience the Utopia
            platform! Sign up now for early access, and be the first in line to
            explore our innovative platform. As a part of our exclusive early
            access group, you&apos;ll receive notifications the moment we
            officially launch. Stay ahead of the curve, witness the future of
            seamless transactions, and unlock a world of possibilities with
            Utopia
          </p>
        </div>
        <form
          onSubmit={handelSubmit}
          className="w-full flex flex-col items-center justify-center py-10 gap-5  "
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-3/4 bg-transparent border rounded-2xl border-yellow-200 px-5 py-3 text-white text-lg font-semibold placeholder-gray-400 "
            placeholder="email address"
          />
          <UButton
            type="submit"
            text="Join Us"
            className="bg-[#C0F497] hover:underline
              transition-all duration-300 w-3/4
              text-black font-bold"
          />
          <span className="w-3/4 text-gray-400 text-sm">
            We&apos;ll keep it simple—expect only one notification when we
            officially launch. No need to worry about a flood of emails from us.
          </span>
        </form>
      </div>
    </div>
  );
}
