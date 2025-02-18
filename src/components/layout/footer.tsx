import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 pt-5 border-t lg:w-3/4 border-grey w-full row-start-3">
      <div className="text-grey text-xs font-semibold tracking-wider space-y-1 ">
        <p>©2025 Edem Kwaku. All rights reserved.</p>
        <p>
          version{" "}
          <span className=" p-1 rounded text-[#E94898] bg-[#45353d]">2025</span>
          .2.16/1
        </p>
        <p>Shadcn + Next + Github Pages</p>
        <p>
          Source code:{" "}
          <a
            href="https://github.com/edem8/"
            target="_blank"
            rel="nooepener noreferrer"
          >
            github.com/edem8/me
          </a>
        </p>
      </div>
      <div className=" flex flex-col xs:flex-row sm:gap-6 gap-4 flex-wrap items-start justify-start sm:text-sm text-xs font-semibold">
        <a
          className="flex items-center gap-1 hover:underline hover:underline-offset-4"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Cool stuff
        </a>
        <a
          className="flex items-center gap-1 hover:underline hover:underline-offset-4"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Guest book
        </a>
        <a
          className="flex items-center gap-1 hover:underline hover:underline-offset-4"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Cool People
        </a>
      </div>
    </footer>
  );
}
