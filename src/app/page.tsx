"use client";

import UserInfo from "@/app/components/userinfo";
import UserDescription from "@/app/components/userdescription";
import Skills from "./components/skills/skillsSection";
import Experience from "./components/experience/experience";
import { useState } from "react";
import portfolioZ from "./content/portfolios/portfolioZ";
import portfolioA from "./content/portfolios/portfolioA";

export default function Home() {
  const [portfolio, setPortfolio] = useState(portfolioZ);
  return (
    <main
      id="landing-page"
      className="p-12 md:pl-0 relative bg-stone-300 dark:bg-zinc-900 h-full grid grid-cols-1 md:grid-cols-[auto,1fr,1fr] auto-rows-min gap-y-5"
    >
      <div className="row-span-3 col-start-1 flex justify-center px-12"></div>
      <UserInfo
        portfolio={portfolio}
        togglePortfolio={() =>
          setPortfolio((prev) => (prev.id === 0 ? portfolioA : portfolioZ))
        }
      />
      <UserDescription {...{ portfolio }} />
      <Skills portfolio={portfolio} />
      <Experience portfolio={portfolio} />
    </main>
  );
}
