"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Loader from "./Loader";

const buttonVariants = cva(
  "bg-white text-black md:px-4 md:py-2 px-2 py-1 md:text-[12px] text-[10px] font-semibold uppercase text-center font-mono cursor-pointer whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "bg-white text-black rounded-r-[6px]",
        secondary: "bg-white/8 text-white border border-white/12 rounded-[6px]",
        outline: "bg-transparent text-white border border-white/12 rounded-[6px]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export default function Button({
  text,
  handleClick,
  variant = "default",
  isLoading = false,
}: {
  text: string;
  handleClick: () => void;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  isLoading?: boolean;
}) {
  return (
    <button
      onClick={handleClick}
      className={cn(buttonVariants({ variant }), "flex items-center justify-center gap-2 relative")}
      disabled={isLoading}
    >
      <span className={cn(isLoading && "invisible")}>{text}</span>
      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <Loader size="sm" />
        </span>
      )}
    </button>
  );
}
