import { cn } from "@/app/utils";
import ExperienceCard from "./experienceCard";
import portfolioZ from "@/app/content/portfolios/portfolioZ";

interface props {
  className?: string;
  portfolio: typeof portfolioZ;
}

export default function Experience({ className, portfolio }: props) {
  return (
    <div className={cn(" md:col-start-2 grid grid-cols-1", className)}>
      {portfolio.experiences?.map((experience) => (
        <ExperienceCard key={experience.title} {...{ experience }} />
      ))}
    </div>
  );
}
