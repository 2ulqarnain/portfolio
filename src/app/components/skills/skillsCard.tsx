type Props = {
  skill: string;
};

export default function SkillCard({ skill }: Props) {
  return (
    <button
      className={
        "bg-gradient-to-br from-violet-700 hover:rounded-xl relative dark:text-white shadow-[-5px_-5px_5px_var(--background)] dark:rounded-md hover:shadow-[-10px_-10px_10px_var(--background)] dark:hover:shadow-[0px_0px_20px_10px_var(--background)] transition-[box-shadow,transform] hover:z-10 hover:scale-110 group to-violet-300 dark:to-blue-700 rounded-lg overflow-hidden w-fit p-2 px-3 capitalize"
      }
    >
      <span className="relative">{skill}</span>
      <div className="bg-stone-300 dark:bg-transparent absolute flex justify-center items-center w-[calc(100%_-_5px)] h-[calc(100%_-_5px)] m-[2.5px] top-0 left-0 z-0 rounded-md group-hover:scale-0 duration-100 transition-transform">
        {skill}
      </div>
    </button>
  );
}
