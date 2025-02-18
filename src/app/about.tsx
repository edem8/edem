import PG from "@/components/ui/PG";
import React from "react";
import "../styles/pg.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col sm:gap-6 gap-5 lg:w-3/4 w-full row-start-2 font-semibold pt-10 sm:pt-12">
      <div className="tracking-wider text-sm space-y-2">
        <p>
          <span className="text-green-500 bg-[#232D27] pt-1 pb-1 pl-4 pr-4 border rounded-2xl  font-semibold border-green-500">
            Ayekoo!
          </span>
        </p>
        <p className="sm:text-base">いらっしゃいませ</p>
      </div>

      <div className="text-xs sm:text-base">
        <p>
          Hi I'm Edem. I am a creative{" "}
          <span className=" p-1 text-orange-500 bg-[#251A17] rounded">
            frontend developer
          </span>{" "}
          trying stuff
        </p>
        <p>that spikes my interest. 3D, code, writing, music, teaching?</p>
      </div>

      <div className="text-xs sm:text-base">
        <p>On this site, you'll find a few things I want you to Know about</p>
        <p>
          me or{" "}
          <span className=" text-blue-500 bg-[#282c36] p-1 rounded">
            stuff I'm working on.
          </span>{" "}
          Follow my socials to know more
        </p>
        <p>about me and my jornuey </p>
      </div>

      <PG />

      <div className="mt-6">
        <p className="flex gap-1 tracking-wide text-sm sm:text-base">
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Featured
        </p>

        <div className="flex gap-4">
          <Card>
            <CardHeader>
              <CardTitle>
                <sup className="bg-gray-700 p-1 rounded">1</sup> Headstarter
              </CardTitle>
              <CardDescription>
                This is a fellowship that mentors devs to become top 1% software
                engineers. And yours truly is chapter lead for the university of
                Ghana
              </CardDescription>
              <CardContent>
                <Link
                  className="text-sm underline justify-start"
                  href={"https://headstarter.co/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  headstarter.co
                </Link>
              </CardContent>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}
