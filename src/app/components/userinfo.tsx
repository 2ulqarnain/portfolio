"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function UserInfo() {
  const { scrollYProgress } = useScroll();
  const scrollYThreshold = 0.4;
  const opacity = useTransform(scrollYProgress, [scrollYThreshold, 0], [0, 1]);
  return (
    <motion.div
      style={{ opacity }}
      className="flex relative w-fit whitespace-nowrap flex-col justify-between gap-2"
    >
      <motion.div
        initial={{ scale: 0.4 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
        className="size-16 bg-emerald-800 origin-left rounded-full bg-[url(https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-center bg-cover"
      ></motion.div>
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
          y: 20,
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
