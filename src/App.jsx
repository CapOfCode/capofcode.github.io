import React from "react";

import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Project";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Home />
      <Nav />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
