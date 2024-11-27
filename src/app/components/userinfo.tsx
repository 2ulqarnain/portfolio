"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function UserInfo() {
  return (
    <motion.div className="col-span-2">
      <motion.span
        initial={{ scale: 0.7 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="text-4xl font-serif origin-left"
      >
        Zulqarnain Haider
      </motion.span>
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
        React | Svelte | Next | Node
      </motion.div>
    </motion.div>
  );
}