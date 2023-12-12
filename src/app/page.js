import NavBar from "@/components/ui/nav/navbar";
import Banner from "@/components/ui/banner/Banner";
import About from "@/components/ui/about/About";
import Projects from "@/components/ui/projects/Projects";
import Contact from "@/components/ui/contact/Contact";


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
      <Contact></Contact>
      </section>
      <section id="footer">
        <p>Footer</p>
      </section>
    </main>
  );
}
