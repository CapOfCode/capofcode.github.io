import NavBar from "@/components/ui/nav/navbar";
import { Button } from "../components/ui/material_tailwind";
import Image from "next/image";
import { ThemeSwitcher } from "@/Theme/ThemeSwitcher";
import Banner from "@/components/ui/banner/Banner";
import SectionTitle from "@/components/ui/shared/SectionTitle";
import About from "@/components/ui/about/About";
import Projects from "@/components/ui/projects/Projects";

export default function Home() {
  return (
    <main>
      <section id="home">
        <NavBar></NavBar>
        <Banner></Banner>
      </section>
      <section id="about">
        <About />
      </section>

      <section id="projects" >
        <Projects></Projects>
      </section>

      <section id="contact">
        <SectionTitle></SectionTitle>
      </section>
      <section id="footer">
        <p>Footer</p>
      </section>
    </main>
  );
}
