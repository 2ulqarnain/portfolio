import portfolioZ from "@/app/content/portfolios/portfolioZ";
import SkillCard from "./skillsCard";

interface Props {
  portfolio: typeof portfolioZ;
}
export default function Skills({ portfolio }: Props) {
  return (
    <div
      id="skills-container"
      className="flex md:col-start-2 gap-1 flex-wrap justify-start items-end"
    >
      {portfolio.skills.map((skill) => (
        <SkillCard key={skill} {...{ skill }} />
      ))}
    </div>
  );
}
