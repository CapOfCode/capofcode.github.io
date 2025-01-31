import About from "@/components/about/About";
import Banner from "@/components/banner/Banner";
import Contact from "@/components/contact/Contact";
import Experiance from "@/components/experiance/Experiance";
import Projects from "@/components/projects/Projects";
import Menu from "@/components/shared/Menu";
import Skills from "@/components/skills/Skills";
import Preloader from "@/components/shared/Preloader";
import FluidCursor from "@/components/shared/FluidCursor";
export default function Home() {
  return (
   <div>
    <Preloader/>
    <FluidCursor/>
    <Menu/>
    <Banner/>
    <About/>
    <Projects/>
    <Skills/>
    <Experiance/>
    <Contact/>
   </div>
  );
}
