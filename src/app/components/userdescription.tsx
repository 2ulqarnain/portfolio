import { motion } from "framer-motion";
import portfolioZ from "../content/portfolios/portfolioZ";

export default function UserDescription({
  portfolio,
  enableMagic,
}: {
  portfolio: typeof portfolioZ;
  enableMagic: boolean;
}) {
  return (
    <motion.p
      initial={{
        background: `linear-gradient(90deg, #fff0 0%, #a78bfa -200%, var(--foreground) 0%)`,
        color: "transparent",
        backgroundClip: "text",
      }}
      animate={{
        background: [
          `linear-gradient(90deg, var(--foreground) 0%, #a78bfa -200%, var(--foreground) 0%)`,
          `linear-gradient(90deg, var(--foreground) 0%, #a78bfa 0%, var(--foreground) 150%)`,
          `linear-gradient(90deg, var(--foreground) 0%, #a78bfa 50%, var(--foreground) 150%)`,
          `linear-gradient(90deg, var(--foreground) 0%, #a78bfa 100%, var(--foreground) 200%)`,
          `linear-gradient(90deg, var(--foreground) 50%,  #a78bfa 200%, var(--foreground) 200%)`,
          "var(--foreground)",
        ],
      }}
      transition={{
        duration: 2,
      }}
      className="text-sm mb-3"
    >
      {!enableMagic
        ? portfolio.description
        : portfolio.description
            .split("")
            .map((char, index) =>
              char === "a" ? (
                <span
                  key={`${char}${index}`}
                  className="text-purple-500 before:content-['A']"
                ></span>
              ) : (
                char
              )
            )}
    </motion.p>
  );
}
