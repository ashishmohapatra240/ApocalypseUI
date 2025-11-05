"use client";
import Link from "next/link";
import Image from "next/image";
import Button from "./ui/Button";
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between mx-auto max-w-7xl w-full fixed top-0 left-1/2 -translate-x-1/2 z-50 px-4 py-[24px]">
      <div className="flex items-center justify-between w-full">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={400}
            height={400}
            className="w-auto md:h-12 h-8"
          />
        </Link>
        <Button text="Follow us on X" handleClick={() => {window.open("https://x.com/ApocalypseUI", "_blank")}} variant="secondary" />
      </div>
    </nav>
  );
}
