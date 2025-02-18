import PG from "@/components/ui/PG";
import React from "react";

export default function loading() {
  return (
    <div className="items-center justify-items-center flex flex-col sm:gap-6 gap-5 lg:w-3/4 w-full row-start-2 font-semibold pt-10 sm:pt-12">
      <PG />
    </div>
  );
}
