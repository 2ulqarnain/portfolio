import AboutMe from "@/components/sections/aboutme";
import Projects from "@/components/sections/projects";

export default function Home() {

  
  return (
    <main className="w-screen h-screen grid grid-flow-row">
      <AboutMe/>
      <Projects/>
      <AboutMe/>
    </main>
  )
}
