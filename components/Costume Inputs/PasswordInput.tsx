"use client";
import React from "react";
import { Eye, EyeOff } from "lucide-react";

interface Props {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PasswordInput({ placeholder, onChange }: Props) {
  const [type, setType] = React.useState("password");
  const [visible, setVisible] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="w-3/4 rounded-full px-5 flex
    border  hover:border-[#C0F497] py-3 text-lg text-white outline-none ring-0
bg-transparent"
    >
      <input
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        className=" outline-none ring-0 w-[90%]
bg-transparent "
      />
      {visible && (
        <div
          className="w-[10%] flex items-center justify-center"
          onClick={() => setType(type === "password" ? "text" : "password")}
        >
          {type === "password" ? (
            <Eye className="text-white cursor-pointer" />
          ) : (
            <EyeOff className="text-white cursor-pointer" />
          )}
        </div>
      )}
    </div>
  );
}
