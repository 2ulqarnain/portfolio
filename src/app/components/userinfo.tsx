"use client";
import { TextMorph } from "@/components/ui/text-morph";
import { motion, useScroll, useTransform } from "framer-motion";
import portfolioZ from "../content/portfolios/portfolioZ";

export default function UserInfo({
  portfolio,
  togglePortfolio,
}: {
  portfolio: typeof portfolioZ;
  togglePortfolio: () => void;
}) {
  return (
    <motion.div className="md:col-span-2">
      <span className="text-4xl font-serif origin-left flex gap-2">
        <TextMorph>{portfolio?.name.split(" ")[0]}</TextMorph>
        <TextMorph>{portfolio?.name.split(" ")?.[1]}</TextMorph>
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
