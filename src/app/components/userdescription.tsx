import { motion, useScroll, useTransform } from "framer-motion";

export default function UserDescription() {
  const { scrollYProgress } = useScroll();
  const scrollYThreshold = 0.4;
  const opacity = useTransform(scrollYProgress, [scrollYThreshold, 0], [0, 1]);
  const x = useTransform(scrollYProgress, [scrollYThreshold, 0], [500, 0]);

  return (
    <motion.p style={{ opacity }} className="text-zinc-700">
      I&apos;m Zulqarnain Haider, a full-stack developer with over 2 years of
      experience creating fast, scalable, and user-friendly applications. I have
      a strong focus on building efficient systems, delivering seamless user
      experiences, and optimizing performance. From developing complex tools
      like a high-performance stock screener to handling integrations and cloud
      services, I&apos;m passionate about crafting innovative solutions that
      push the boundaries of web development.
    </motion.p>
  );
}
