"use client";

import Sphere3d from "@/app/components/3dSphere";
import UserInfo from "@/app/components/userinfo";
import UserDescription from "@/app/components/userdescription";
import SkillCard from "@/app/components/skillsCard";

export default function Home() {
    const skills = [
        "react",
        "tailwind",
        "HTML",
        "CSS",
        "javascript",
        "next",
        "sveltekit",
        "SEO",
        "Stocks",
    ];

    return (
        <main className="py-12 relative bg-stone-300 h-full grid grid-cols-[auto,1fr,1fr] auto-rows-min gap-y-2">
            <div className="row-span-3 col-start-1 flex justify-center px-12">
                <Sphere3d/>
            </div>
            <UserInfo/>
            <UserDescription/>
            <div className="flex col-start-2 gap-1 flex-wrap items-end w-1/2">
                {skills.map(skill=><SkillCard {...{skill}}/>)}
            </div>
        </main>
    );
}