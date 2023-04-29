import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Experience from "@/src/components/Experience";
import Head from "next/head";
import Skills from "@/src/components/Skills";
import Projects from "@/src/components/Projects";
export default function Home() {
  return (
    <div className="snap-mandatory snap-y overflow-auto bg-[rgb(36,36,36)] text-white h-screen">
      <Head>
        <title>Ibrahim Dev</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-start">
        <About />
      </section>
      <section id="experience" className="snap-start">
        <Experience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
    </div>
  );
}
