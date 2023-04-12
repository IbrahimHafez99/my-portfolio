import About from "@/src/components/About";
import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white min-h-screen snap-y snap-mandatory z-0">
      <Head>
        <title>Ibrahim Dev</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
    </div>
  );
}
