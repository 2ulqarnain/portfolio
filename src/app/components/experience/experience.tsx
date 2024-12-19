import { cn } from "@/app/utils";
import ExperienceCard from "./experienceCard";

interface props {
  className?: string;
}

export default function Experience({ className }: props) {
  return (
    <div className={cn("p-2 col-span-2 col-start-2 h-64 flex", className)}>
      <ExperienceCard />
    </div>
  );
}
