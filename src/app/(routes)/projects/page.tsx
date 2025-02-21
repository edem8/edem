import { FolderUp } from "lucide-react";
import React from "react";

export default function Projects() {
  return (
    <div className="flex flex-col sm:gap-6 gap-5 lg:w-3/4 w-full row-start-2  pt-10 sm:pt-10 px-1">
      <h1 className="font-bold text-xl tracking-wide">Projects</h1>
      <p className="sm:w-2/4">
        I've tried many and a lot of things. These are the ones I could collect
        and showcase; or just proud of them.
      </p>
      <div className="mt-5">
        <div className="text-sm">
          <div className="flex gap-1  items-center text-gray-700 font-bold">
            <FolderUp size={20} />
            APPS
          </div>
        </div>
      </div>
    </div>
  );
}
