import { useState } from "react";
import Profile from "./assets/photo.jpg";
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="about">
          <Intro profileImage={Profile} />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <Footer />
      </main>
    </>
  );
}

export default App;
