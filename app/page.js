import About from "@/components/about/About";
import Banner from "@/components/banner/Banner";
import Contact from "@/components/contact/Contact";
import Experiance from "@/components/experiance/Experiance";
import Projects from "@/components/projects/Projects";
import Menu from "@/components/shared/Menu";
import Skills from "@/components/skills/Skills";
import Preloader from "@/components/shared/Preloader";
import FluidCursor from "@/components/shared/FluidCursor";
import MobileMenu from "@/components/shared/MobileMenu";
import MenuToggleButton from "@/components/shared/MenuToggleButton";
export default function Home() {
  return (
   <div>
    <MenuToggleButton/>
    <Preloader/>
    <FluidCursor/>
    <Menu/>
    <Banner/>
    <About/>
    <Skills/>
    <Projects/>
    <Experiance/>
    <Contact/>
    <MobileMenu/>

   </div>
  );
}
