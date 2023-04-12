import React from "react";
import BackgroundCircles from "./BackgroundCircles";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-8 overflow-hidden text-center">
      <BackgroundCircles />
      <img
        className="relative w-32 h-32 rounded-full object-cover object-top"
        src="/me.JPG"
        alt="me"
      />
      <div>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="relative z-40 text-5xl lg:text-6xl font-semibold px-10">
          <Typewriter
            words={[
              "Talks About",
              "<Javascript />",
              "<React />",
              "<Next.js />",
              "<Typescript />",
              "<Node.js />",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <nav className="pt-5">
          <Link href="#about">
            <button className="hero-button">About</button>
          </Link>
          <Link href="#experience">
            <button className="hero-button">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="hero-button">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="hero-button">Projects</button>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Hero;
