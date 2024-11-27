import { motion } from "framer-motion";

export default function UserDescription() {
  return (
    <motion.p
        initial={{
            background:"linear-gradient(90deg, #22200 0%, #a78bfa -200%, #222 0%)",
            color:"transparent",
            backgroundClip:"text"
        }}
        animate={{
            background:[
                "linear-gradient(90deg, #22200 0%, #a78bfa -200%, #222 0%)",
                "linear-gradient(90deg, #222 0%, #a78bfa 0%, #222 150%)",
                "linear-gradient(90deg, #222 0%, #a78bfa 50%, #222 150%)",
                "linear-gradient(90deg, #222 0%, #a78bfa 100%, #222 200%)",
                "linear-gradient(90deg, #222 50%,  #a78bfa 200%, #22200 200%)",
                "#222",
            ]
        }}
        transition={{
            duration:2
        }}
        className="text-stone-600 text-sm mb-3">
      I&apos;m Zulqarnain Haider, a{" "}
      <b className="text-violet-900">Full Stack Developer</b> with 2+ years of
      experience creating fast, scalable, and user-friendly applications. I have
      a strong focus on building efficient systems, delivering seamless user
      experiences, and optimizing performance. From developing complex tools
      like a high-performance stock screener to handling integrations and cloud
      services, I&apos;m passionate about crafting innovative solutions that
      push the boundaries of web development.
    </motion.p>
  );
}