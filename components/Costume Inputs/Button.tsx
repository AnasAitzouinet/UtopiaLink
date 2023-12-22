"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
interface Props {
  type?: "submit" | "reset" | "button";
  text: string;
  handleClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  ref?: React.RefObject<HTMLButtonElement>;
}

export default function UButton({
  type = "submit",
  text,
  handleClick,
  className,
  style,
  ref
}: Props) {
  return (
    <button
      ref={ref}
      type={type}
      style={style}
      onClick={handleClick}
      className={twMerge(
        "border border-[#C0F497] w-[100px] h-[40px] rounded-lg text-[#C0F497]",
        className
      )}
    >
      {text}
    </button>
  );
}
