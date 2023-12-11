import NavBar from "@/components/ui/nav/navbar";
import { Button } from "../components/ui/material_tailwind";
import Image from "next/image";
import { ThemeSwitcher } from "@/Theme/ThemeSwitcher";
import Banner from "@/components/ui/banner/Banner";
import SectionTitle from "@/components/ui/shared/SectionTitle";

export default function Home() {
  return (
    <main>
      <section id="home">
        <NavBar></NavBar>
        <Banner></Banner>
      </section>
      <section id="about">
        <SectionTitle></SectionTitle>
      </section>

      <section id="projects">
        <SectionTitle></SectionTitle>
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
