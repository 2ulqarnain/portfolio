import SkillCard from "./skillsCard";

export default function Skills() {
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

  return (
    <div className="flex col-start-2 gap-1 flex-wrap items-end w-1/2">
      {skills.map((skill) => (
        <SkillCard key={skill} {...{ skill }} />
      ))}
    </div>
  );
}
