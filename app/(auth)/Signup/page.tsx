"use client";
import UButton from "@/components/Costume Inputs/Button";
import PasswordInput from "@/components/Costume Inputs/PasswordInput";
import React from "react";

export default function SignUpPage() {
  const [widthScreen, setWidthScreen] = React.useState(0);
  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setWidthScreen(window.innerWidth);
    });
   
  }, []);
  return (
    <main
      className="w-screen h-screen bg-black overflow-hidden flex"
      {...(widthScreen < 1024 && {
        style: {
          backgroundImage: "url(/bg.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPositionX: "10px",
          backgroundPositionY: "150px",
        },
      })}
    >
      <div
        className="flex flex-col items-center justify-center py-8 h-full w-full
      lg:w-[45%] 
      "
      >
        <img src="/Utopia.svg" alt="" className="object-cover" />
        <h1 className="text-4xl text-white pt-16 lg:pt-8">Sign Up</h1>
        <p className="text-gray-200">
          Already have an account?{" "}
          <a href="/login" className="text-[#C0F497]">
            Log In
          </a>
        </p>
        <form
          className="my-10 lg:my-5
        flex flex-col items-center justify-center py-5 gap-5 lg:border-none 
        lg:backdrop-blur-none lg:bg-transparent lg:
        border border-[#C0F497]/20 w-3/4 h-2/3 rounded-xl bg-black/20 backdrop-blur-xl"
        >
          <input
            type="text"
            className="w-3/4 rounded-full px-5 
                border  hover:border-[#C0F497] py-3 text-lg text-white outline-none ring-0
            bg-transparent"
            placeholder="Full Name"
          />
          <input
            type="text"
            className="w-3/4 rounded-full px-5 
                border  hover:border-[#C0F497] py-3 text-lg text-white outline-none ring-0
            bg-transparent"
            placeholder="Email"
          />
          <PasswordInput placeholder="Password" />
          <PasswordInput placeholder="Confirm Password" />
          <UButton
            text="Sign Up"
            className="bg-[#C0F497] hover:underline
            transition-all duration-300 
            text-black font-bold w-3/4"
          />
        </form>
      </div>
      <div className="hidden lg:flex w-[65%] h-full ">
        <img src="/lgnBG.jpg" alt="" className="object-cover h-full w-full" />
      </div>
    </main>
  );
}
