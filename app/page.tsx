"use client";

import FloatingBar from "@/components/ui/FloatingBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NavBar from "@/components/ui/NavBar";

const Home = () => {
  return (
    <main className="h-screen bg-[#120012] flex">
      <NavBar />
      <div className="w-full overflow-y-auto mx-auto overflow-hidden">
        <div className="px-5 md:px-10 lg:px-40">
          <FloatingBar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </div>
        <Footer />
      </div>
    </main>

  );
};

export default Home;
