import React from "react";

export default function Chip({ text }: { text: string }) {
  return (
    <div className="bg-black/8 text-white border border-white/12 px-[12px] py-[6px] text-[12px] font-semibold uppercase text-center font-mono rounded-[6px] w-fit">
      {text}
    </div>
  );
}
