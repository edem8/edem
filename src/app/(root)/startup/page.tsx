"use client";

import { ArrowUpRight, ArrowLeft } from "lucide-react";
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
                  <ArrowUpRight className="w-5 h-5" strokeWidth={1.9} />
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
          <div className="flex items-center justify-center bg-secondary">
            <div className="w-full h-full bg-muted-foreground" />
          </div>
        </div>

        {/*  R2  */}
        <div className="grid grid-cols-2 min-h-[550px]">
          {/* Left Column */}
          <div className="flex items-center justify-center border-r border-muted-foreground bg-secondary">
            <div className="w-full h-full bg-muted-foreground" />
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-between p-8">
            {/* Top Content */}
            <div className="space-y-4">
              <Section title="LOGO">
                <p className="text-sm leading-relaxed text-foreground">
                  Headroom gives small businesses a platform to build custom
                  AI-powered software to run their workflows. The logo is made
                  of a clean square, supported by a bold and prominent base. It
                  visualizes the value proposition of Headroom—literally—giving
                  space for business owners to grow by providing them with a
                  stable ground to run their work on. It celebrates empty space
                  to reflect both peace of mind and room for growth.
                </p>
              </Section>
            </div>

            {/* Attributes  */}
            <div className="mt-8">
              <Section title="ATTRIBUTES">
                <div className="flex flex-wrap gap-3 text-gray-300 font-semibold tracking-wider text-[10px]">
                  <span>CHEAPER</span>
                  <span>CONVENIENT</span>
                  <span>COMMUNITY</span>
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
