import About from "@/components/about/About";
import Banner from "@/components/banner/Banner";
import Contact from "@/components/contact/Contact";
import Experiance from "@/components/experiance/Experiance";
import Projects from "@/components/projects/Projects";
import Menu from "@/components/shared/Menu";
import CanvasCursor from "@/components/shared/CanvasCursor";
import Skills from "@/components/skills/Skills";
export default function Home() {
  return (
   <div>
    <CanvasCursor/>
    <Menu/>
    <Banner/>
    <About/>
    <Projects/>
    <Skills/>
    <Experiance/>
    <Contact/>
    {/* <MouseTrail/> */}
   </div>
  );
}
