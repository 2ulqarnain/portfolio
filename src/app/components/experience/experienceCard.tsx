import { Experience } from "@/app/types";

interface Props {
  experience: Experience;
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <div className="flex items-center gap-x-2">
      <div className="grow h-0.5 rounded-xl bg-gradient-to-r from-violet-700 to-blue-700"></div>
      <span>{experience.title}</span>
    </div>
  );
}
