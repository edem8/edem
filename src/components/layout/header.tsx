"use client";
import {
  BookOpen,
  Hammer,
  Home,
  Instagram,
  Linkedin,
  Origami,
  Youtube,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import React from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  { name: "HOME", href: "/", icon: Home },
  { name: "BLOGS", href: "/blog", icon: BookOpen },
  { name: "BUILDS", href: "/builds", icon: Hammer },
  { name: "STARTUP", href: "/startup", icon: Origami },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <div className="  w-full flex flex-col bg-transparent space-y-8 sm:space-y-9 xl:space-y-10 tracking-wider  backdrop-blur py-4 mb-6 ">
      <div className=" flex items-center justify-between  ">
        <div className="flex items-center space-x-0 text-[11px] font-medium px-2"></div>

        <div className="flex items-center gap-1">
          <Button
            size="icon"
            variant="ghost"
            className="w-8 h-8 border-1.5 border-primary hover:bg-gray-50 rounded-full"
          >
            <FaXTwitter size={20} />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="w-8 h-8 border-1.5 border-primary hover:bg-gray-50 rounded-full"
          >
            <Instagram size={20} strokeWidth={2.3} />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="w-8 h-8 border-1.5 border-primary hover:bg-gray-50 rounded-full"
          >
            <Linkedin size={20} strokeWidth={2.3} />
          </Button>

          <Button
            size="icon"
            variant="ghost"
            className="w-8 h-8 border-1.5 border-primary hover:bg-gray-50 rounded-full"
          >
            <Youtube size={20} strokeWidth={2.3} />
          </Button>
        </div>
      </div>

      <div className="flex items-center space-x-6 text-[11.5px] font-medium px-2">
        {navItems.map(({ name, href, icon: Icon }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={name}
              href={href}
              className={`flex items-center gap-1 cursor-pointer transition-colors ${
                isActive
                  ? "text-primary-foreground "
                  : "text-gray-500 font-semibold hover:text-gray-400"
              }`}
            >
              {isActive && <Icon size={14} strokeWidth={2.5} />}
              <span>{name}</span>
              {name == "BUILDS" && (
                <sup className="relative inline-block w-2 h-2 mb-2 rounded-full bg-orange-400 overflow-hidden shadow-[0_0_6px_rgba(249,115,22,0.6)]">
                  <span
                    className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.3)_40%,transparent_70%)]
                 bg-[length:200%_100%] animate-shimmer"
                    aria-hidden="true"
                  />
                </sup>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
