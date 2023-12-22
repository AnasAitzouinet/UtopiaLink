"use client";

import React, { useRef } from "react";
import UButton from "../Costume Inputs/Button";
import { useInView } from "framer-motion";
import { Settings, LogOut } from "lucide-react";
const sideBarItems = [
  {
    name: "Home",
    path: "/Dashboard",
    icon: "dashboard",
  },
  {
    name: "Payments",
    path: "/Dashboard/payments",
    icon: "profile",
  },
  {
    name: "Subscriptions",
    path: "/Dashboard/subscriptions",
    icon: "subscriptions",
  },
  {
    name: "Payouts",
    path: "/Dashboard/payouts",
    icon: "invoices",
  },
  {
    name: "Customers",
    path: "/Dashboard/customers",
    icon: "customers",
  },
  {
    name: "Products",
    path: "/Dashboard/products",
    icon: "products",
  },
];

export default function SideBar() {
  let path = "";
  if (typeof window !== "undefined") {
    path = window.location.pathname;
  }
  return (
    <div className="flex flex-col items-center justify-center py-8  h-full w-full">
      <h1 className="text-4xl uppercase font-bold">Utopia</h1>
      <div className="flex flex-col items-center justify-center h-full w-full ">
        {sideBarItems.map((item, index) => (
          <div
            key={index}
            className={`
              ${
                path === item.path
                  ? "border-l-4 text-[#C0F497] border-[#C0F497] underline"
                  : "border-r-0 border-l-4 border-[#1C1C1C]"
              }
              cursor-pointer hover:border-l-4 hover:border-[#C0F497]
              hover:text-[#C0F497] hover:underline 
              border-b-0 border-t-0 w-full py-2`}
          >
            <p className="text-start px-5 text-xl ">{item.name}</p>
          </div>
        ))}
        <UButton
          text="Create Payment"
          className="bg-[#C0F497] text-[#1C1C1C]
            hover:text-[#C0F497] hover:bg-transparent border border-[#C0F497] hover:border-[#C0F497] transition-all duration-300 ease-in-out 
            rounded-full my-5 w-3/4"
        />
      </div>
      <div className="flex w-3/4 justify-center items-center gap-4">
        <Settings
          className="hover:rotate-180 transition-all duration-300 ease-in-out 
        h-9 w-9 bg-[#C0F497] rounded-full p-1 text-black
        cursor-pointer"
        />
        <LogOut
          className="hover:text-[#C0F497] hover:bg-transparent border border-[#C0F497] hover:border-[#C0F497] transition-all duration-300 ease-in-out 
        h-9 w-9 bg-[#C0F497] rounded-full p-1 text-black
        cursor-pointer"
        />
      </div>
    </div>
  );
}
