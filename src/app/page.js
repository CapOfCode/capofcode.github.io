import Banner from "@/components/ui/banner/Banner";
import About from "@/components/ui/about/About";
import Projects from "@/components/ui/projects/Projects";
import Contact from "@/components/ui/contact/Contact";
import Footer from "@/components/ui/footer/Footer";
import NavBar from "@/components/ui/nav/NavBar";

export default function Home() {
  return (
    <main>
      <div className="sticky z-50 top-0">
        <NavBar></NavBar>
      </div>
      <section id="home">
        <Banner></Banner>
      </section>
      <section id="about">
        <About />
      </section>

      <section id="projects" className="bg-darkLighter">
        <Projects></Projects>
      </section>

      <section id="contact">
        <Contact></Contact>
      </section>
      <section id="footer">
        <Footer></Footer>
      </section>
    </main>
  );
}
