"use client";

import { createElement } from "react";
import background from "@/components/background";
import hero from "@/components/hero";
import about from "@/components/about";
import skills from "@/components/skills";
import freelance from "@/components/freelance";

export default function page() {
  return (
    <main className="min-h-screen relative text-white selection:bg-[#00ffff]/30 selection:text-[#00ffff]">
      {createElement(background)}
      
      <div className="flex flex-col gap-24 md:gap-32 w-full">
        {createElement(hero)}
        {createElement(about)}
        {createElement(skills)}
        {createElement(freelance)}
      </div>
    </main>
  );
}
