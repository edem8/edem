"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FolderKanban, Glasses, Shell, Users } from "lucide-react";

export default function Header() {
  const pathname = usePathname();

  const getLinkClasses = (path: string) =>
    pathname === path
      ? "border-zinc-600 bg-[#404040] border text-white"
      : "hover:bg-[#262626]";

  return (
    <header className="flex flex-col gap-2 pb-1 sm:pb-3 sm:pt-3 pt-10 lg:w-3/4 w-full row-start-1 ">
      <nav className=" flex flex-col xxs:flex-row xs:gap-2 gap-0  items-start justify-start sm:text-base text-xs  font-semibold">
        <Link
          className={`flex items-center xs:gap-1.5 gap-1   rounded-lg p-1 pl-2 pr-2  ${getLinkClasses(
            "/"
          )} `}
          href="/"
        >
          <Shell color="#985133" />
          Home
        </Link>
        <Link
          className={`flex items-center xs:gap-1.5 gap-1   rounded-lg p-1 pl-2 pr-2  ${getLinkClasses(
            "/projects"
          )} `}
          href={"/projects"}
        >
          <FolderKanban color="#967d20" />
          Projects
        </Link>
        <Link
          className={`flex items-center xs:gap-1.5 gap-1   rounded-lg p-1 pl-2 pr-2  ${getLinkClasses(
            "/blogs"
          )} `}
          href={"/blogs"}
        >
          <Glasses color="pink" />
          Blog
        </Link>
        <Link
          className={`flex items-center xs:gap-1.5 gap-1   rounded-lg p-1 pl-2 pr-2  ${getLinkClasses(
            "/guests"
          )} `}
          href="/guests"
        >
          <Users color="#776d5a" />
          Guest
        </Link>
      </nav>
    </header>
  );
}
