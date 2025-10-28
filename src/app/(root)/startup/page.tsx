"use client";

import { ArrowUpRight, ArrowLeft, RectangleGoggles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StartUp() {
  return (
    <div className="flex flex-col flex-1 overflow-hidden px-20 text-[11px] tracking-wider">
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto space-y-0 mt-8">
        <section className="py-12  border-muted-foreground max-w-lg mb-8">
          <p className="text-[13px] leading-relaxed text-foreground tracking-wider">
            I’ve chased ideas, turned some into products, and let others go.
            Building a startup is never a straight line. I’ve iterated,
            scrapped, and started again — this is what remains: the work that
            found its form or that i simply love
          </p>
        </section>

        {/*  R1 */}
        <div className="grid grid-cols-2 border-b border-muted-foreground min-h-[550px]  ">
          {/* Left Column */}
          <div className="flex flex-col justify-between p-8  border-r border-muted-foreground">
            <div className="space-y-6">
              <Section title="BRAND">
                <p className="text-xs font-semibold tracking-widest text-foreground">
                  MOVE
                </p>
              </Section>

              <Section title="ABOUT">
                <p className="text-sm leading-relaxed text-foreground">
                  Ondemand delivery service for a lot less
                </p>
              </Section>

              <Section title="WEBSITE">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 p-2 text-xs rounded bg-background text-foreground hover:text-primary transition-colors"
                >
                  <ArrowUpRight className="w-5 h-5" strokeWidth={1.6} />
                  move.com
                </a>
              </Section>

              <Section title="CHANNELS">
                <div className="flex gap-2">
                  {["LinkedIn", "Instagram", "X (Twitter)"].map((ch) => (
                    <Button
                      key={ch}
                      variant="outline"
                      size="sm"
                      className="bg-background hover:bg-background/80 border-none rounded"
                    >
                      {ch}
                    </Button>
                  ))}
                </div>
              </Section>

              <Section title="YEAR">
                <p className="text-sm text-foreground">2025</p>
              </Section>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex items-center justify-center bg-white">
            <div className="flex items-center gap-0.5 ">
              <RectangleGoggles
                className="w-[100px]  h-[100px]"
                fill="#1424EA"
                stroke="white"
              />
              <span className=" bg-[#1424EA] rounded-full p-2.5 translate-y-2"></span>
            </div>
          </div>
        </div>

        {/*  R2  */}
        <div className="grid grid-cols-2 min-h-[550px]">
          {/* Left Column */}
          <div className="flex items-center justify-center  bg-[#1424EA]">
            <div className="flex items-center gap-0.5 ">
              <RectangleGoggles
                className="w-[100px]  h-[100px]"
                fill="white"
                stroke="#1424EA"
              />
              <span className=" bg-white rounded-full p-2.5 translate-y-2"></span>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-between p-8">
            {/* Top Content */}
            <div className="space-y-4">
              <Section title="LOGO">
                <p className="text-sm leading-relaxed text-foreground">
                  Move is a frustration become code — watching delivery get
                  faster but more expensive. Somewhere along the way,
                  convenience became a premium. Move is my way of rethinking
                  that: an on-demand delivery app built on one idea — speed
                  should be simple, and it should cost less.
                </p>
              </Section>
            </div>

            {/* Attributes  */}
            <div className="mt-8">
              <Section title="ATTRIBUTES">
                <div className="flex flex-wrap gap-3 text-gray-300 font-semibold tracking-wider text-[11.5px]">
                  <span>Cheaper</span>
                  <span>Convinient</span>
                  <span>Community</span>
                </div>
              </Section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="mb-2 text-[11px] font-semibold tracking-widest text-muted-foreground">
        {title}
      </p>
      {children}
    </div>
  );
}
