import Image from "next/image";
import ZhLogo from "../../public/zh-logo.svg";
import DarkModeToggle from "./components/darkModeToggle";

export default function Home() {
  return (
    <main className="grid grid-cols-[1rem,auto,1rem] transition-[background-color] duration-300 bg-[#d9d9d9] dark:bg-[#222] lg:grid-cols-[10rem,auto,10rem] grid-flow-col [&>*]:col-start-2 grid-rows-[1fr,auto,auto,auto,auto,1fr] h-full">
      <DarkModeToggle/>
      <div></div>
      <p className="text-5xl uppercase font-bold w-fit gradient-text gradient-primary">
        Zulqarnain
        <code className="text-zinc-500 text-3xl normal-case">.online</code>
      </p>
      <p className="text-5xl uppercase font-bold w-fit gradient-text gradient-secondary">
        Haider
      </p>
      <p className="text-zinc-500">
        Full Stack Web Developer | Expertise in NextJs & Svelte-Kit
      </p>
      <ContactMeButton/>
      <InitialsBgGraphic/>
    </main>
  );
}

function ContactMeButton(){
  return (
    <a
      href="mailto:itsme@zulqarnain.online"
      className="bg-zinc-200 border transition-[background-color] duration-300 dark:bg-zinc-800 dark:border-zinc-700 dark:hover:bg-zinc-700 hover:border-zinc-400 hover:text-zinc-500 hover:bg-zinc-300 text-zinc-600 border-zinc-600 w-fit p-1 px-3 rounded-full mt-5"
    >
      <span className="gradient-text gradient-primary">Contact Me</span>{" "}
      <span className="text-inherit">{"->"}</span>
    </a>
  )
}

function InitialsBgGraphic(){
  return (
    <div className="absolute right-0 bottom-0">
        <Image
          src={ZhLogo}
          alt="Zulqarnain Haider"
          className="max-md:w-[200px]"
        />
      </div>
  )
}
