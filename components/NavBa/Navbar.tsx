"use client";
import React from "react";
import UButton from "../Costume Inputs/Button";
import Link from "next/link";
import { Menu, SeparatorHorizontal } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/" },
  { name: "FAQ", href: "/" },
  { name: "Support", href: "/" },
];
export default function Navbar() {
  return (
    <nav className="text-[#FFFFFF] z-50 backdrop-blur-xl bg-transparent fixed top-0 flex w-full h-[10%] border-b border-gray-300/40">
      <div className="w-full py-5 px-6 flex items-center justify-between md:hidden">
        <img src="/Utopia.svg" alt="test" className="object-cover h-14 " />

        <Sheet>
          <SheetTrigger>
            <Menu className="h-12 w-12 cursor-pointer" />
          </SheetTrigger>
          <SheetContent className="bg-black text-white flex flex-col items-center justify-center">
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href} className="">
                {link.name}
              </Link>
            ))}

            <div className="w-3/4 border-b py-4 "></div>

            <UButton
              text="Sign up"
              className="hover:bg-[#C0F497] mt-5 hover:underline
              transition-all duration-700
              hover:text-black hover:font-bold"
            />
            <UButton
              text="Login"
              className="bg-[#C0F497] hover:underline
              transition-all duration-300 
              text-black font-bold"
            />
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:flex w-full gap-20 items-center px-2">
        <div className="w-[10%] h-full flex mx-5 text-center items-center cursor-pointer justify-center">
          {/* <img src="/Utopia.svg" alt="test" className="object-cover h-14 " /> */}
          <h1 className="text-4xl uppercase text-center font-bold cursor-pointer">Utopia</h1>
        </div>
        <ul className="flex w-full  md:gap-2 h-full py-2 ">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="border border-gray-300/0
              transition-all duration-300
              hover:border-[#C0F497] hover:text-[#C0F497] rounded-lg text-lg  flex items-center justify-center
                 w-[10%] "
            >
              <Link
                href={link.href}
                className=" flex items-center 
              justify-center w-full h-full text-center"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden md:flex gap-2 py-2 items-center justify-center px-2">
        {/* <UButton
          handleClick={() => window.open("/Account-Setup", "_self")}
          text="Get Started"
          className="hover:bg-[#C0F497] hover:underline
          transition-all duration-700 w-[150px]
          hover:text-black hover:font-bold"
        /> */}
        <UButton
          text="Join Our Whitelist"
          className="bg-[#C0F497] hover:underline
              transition-all duration-300 w-[160px]
              text-black font-bold"
        />
      </div>
    </nav>
  );
}
