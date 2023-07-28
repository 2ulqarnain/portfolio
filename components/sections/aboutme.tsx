export default function AboutMe(){


  const skills=[
    "web developer",
    "designer",
    "gamer"
  ]
    
    return (
    <div className=" text-blue-500 col-span-full w-screen relative z-10 h-screen flex text-9xl font-staat bg-gekko">
        <h2 className="text-lime-400 text-9xl leading-[0.7] p-5 h-fit font-staat sticky top-0 [writing-mode:vertical-lr]">About Me</h2>
        <div className="my-auto">
          <p className=" leading-[0.75] first-letter:text-yoru mt-auto relative">zulqarn<span className="text-yoru">ain</span>haider</p>
          <ul className="text-4xl flex text-yoru sticky top-5 mb-auto">{skills.map(skill=><li key="skill"><p className="before:content-['['] after:content-[']'] after:text-bat before:text-bat">{skill}</p></li>)}</ul>
        </div>
      </div>
    )
}