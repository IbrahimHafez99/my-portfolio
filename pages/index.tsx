import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Experience from "@/src/components/Experience";
import Head from "next/head";
import Skills from "@/src/components/Skills";
import Projects from "@/src/components/Projects";
import ContactMe from "@/src/components/ContactMe";
import Link from "next/link";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";
export default function Home() {
  return (
    <div className="relative snap-mandatory snap-y overflow-auto bg-[rgb(36,36,36)] text-white h-screen overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Ibrahim Dev</title>
      </Head>

      <Header />

      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky cursor-pointer bottom-5 left-5 w-fit">
          <ChevronDoubleUpIcon className="w-12 md:w-14 bg-gray-500 p-2 rounded-full hover:bg-gray-700 transition-colors duration-400" />
        </footer>
      </Link>
    </div>
  );
}
