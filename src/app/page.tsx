"use client";

import Sphere3d from "@/app/components/3dSphere";
import UserInfo from "@/app/components/userinfo";
import UserDescription from "@/app/components/userdescription";
import Skills from "./components/skills/skillsSection";
import Experience from "./components/experience/experience";
import FeatherBgDecor from "./components/decors/featherBg";

export default function Home() {
  return (
    <main className="py-12 pr-12 relative bg-stone-300 h-full grid grid-cols-[auto,1fr,1fr] auto-rows-min gap-y-2">
      <div className="row-span-3 col-start-1 flex justify-center px-12">
        <Sphere3d />
      </div>
      <UserInfo />
      <UserDescription />
      <Skills />
      <Experience />
    </main>
  );
}
