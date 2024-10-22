"use client";

import SeperatorSVG from "@/../public/emerald_seperator.svg";
import Image from "next/image";
import Section from "./components/section";
import UserInfo from "./components/userinfo";
import UserDescription from "./components/userdescription";
import SectionPlaceholder from "./components/sectionPlaceholder";
import { motion, useScroll, useTransform } from "framer-motion";

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

  const { scrollYProgress, scrollY } = useScroll();
  const fadeOut = useTransform(scrollYProgress, [1, 0], [0, 1]);
  const blur = useTransform(scrollYProgress, [0, 1], [0, 20]);

  return (
    <main className="pr-24 gap-y-5 relative bg-stone-300 h-[200vh] grid grid-cols-[10rem,auto,10rem,1fr] auto-rows-min items-center">
      <Image
        src={SeperatorSVG}
        alt="seperator"
        className="w-fit h-[90vh] row-span-full mx-auto sticky top-10 col-start-3"
      />
      <Section label="About Me">
        <UserInfo />
        <UserDescription />
      </Section>
      <Section label="Skills">
        <SectionPlaceholder>Skills</SectionPlaceholder>
      </Section>
      <Section label="Education">
        <SectionPlaceholder>Education Here </SectionPlaceholder>
      </Section>
      <Section label="Experience">
        <SectionPlaceholder>Experience Here</SectionPlaceholder>
      </Section>
    </main>
  );
}
