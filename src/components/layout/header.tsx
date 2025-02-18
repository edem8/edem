import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-col gap-2 pb-1 sm:pb-3 sm:pt-3 pt-10 lg:w-3/4 w-full row-start-1 font-semibold">
      <nav className=" flex flex-col xxs:flex-row xs:gap-2 gap-0  items-start justify-start sm:text-base text-xs xs:text-sm font-semibold">
        <Link
          className="flex items-center xs:gap-1.5 gap-1 hover:bg-[#262626] border rounded-lg p-1 pl-2 pr-2 border-zinc-600 bg-[#404040] text-white"
          href="/"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Home
        </Link>
        <Link
          className="flex items-center xs:gap-1.5 gap-1 hover:bg-[#262626] p-1 pl-2 pr-2 rounded-lg"
          href={"/projects"}
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Projects
        </Link>
        <Link
          className="flex items-center xs:gap-1.5 gap-1 hover:bg-[#262626] p-1 pl-2 pr-2 rounded-lg"
          href={"/blogs"}
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Blog
        </Link>
        <Link
          className="flex items-center xs:gap-1.5 rounded-lg gap-1 hover:bg-[#2d2d2d] p-1 pl-2 pr-2"
          href="/guests"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Guest Book
        </Link>
      </nav>
    </header>
  );
}
