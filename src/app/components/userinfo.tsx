"use client";
import { TextMorph } from "@/components/ui/text-morph";
import { motion, useScroll, useTransform } from "framer-motion";
import portfolioZ from "../content/portfolios/portfolioZ";

export default function UserInfo({
  portfolio,
  togglePortfolio,
  enableMagic,
}: {
  portfolio: typeof portfolioZ;
  togglePortfolio: () => void;
  enableMagic: boolean;
}) {
  return (
    <motion.div className="md:col-span-2">
      <span className="text-4xl font-serif origin-left flex gap-2">
        <TextMorph>
          {enableMagic ? "Z" : portfolio?.name.split(" ")[0]}
        </TextMorph>
        <TextMorph style={{ marginLeft: enableMagic ? "-5px" : "" }}>
          {enableMagic ? "A" : portfolio?.name.split(" ")?.[1]}
        </TextMorph>
        {enableMagic && <span className="">in ❤️</span>}
      </span>
      <motion.div
        initial={{
          y: 0,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          duration: 2,
        }}
        className="text-stone-500"
      >
        {portfolio.designation}
      </motion.div>
    </motion.div>
  );
}
