export default function Projects(){

  const projects=[
    "w3work.com",
    "Attendance MS",
    "stockstelegraph.com",
    "w3work.com",
    "Attendance MS",
    "stockstelegraph.com",
    "w3work.com",
    "Attendance MS",
    "stockstelegraph.com",
  ]
  
    return (
    <div className="w-screen h-screen bg-yoru grid grid-cols-[auto,1fr] relative z-20">
        <h2 className="text-blue-600 text-9xl leading-[0.7] p-5 h-fit font-staat z-10 sticky top-0 [writing-mode:vertical-lr]">Projects</h2>
        <div className="grid grid-cols-3 grid-rows-3 p-5 gap-5 relative z-20">
          {projects.map(project=><ProjectCard key={project} name={project}/>)}
        </div>
      </div>
    )
}

function ProjectCard({name}:{name:string}){
  return (
    <div className="bg-gekko text-bat rounded-lg shadow-[0px_0px_100px_black] grid grid-cols-3 grid-rows-[auto,1fr] overflow-hidden">
      <h3 className="text-4xl font-staat col-span-full p-1 px-4">{name}</h3>
      <div className="bg-bat col-span-full"></div>
    </div>
  )
}