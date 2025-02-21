type Props = {
  skill: string;
};

export default function SkillCard({ skill }: Props) {
  return (
    <button className="p-1 px-4 gap-1 rounded-full group hover:bg-blue-800 text-zinc-200 transition-transform bg-violet-800 hover:relative">
      <span className="relative">{skill}</span>
    </button>
  );
}
