import React from "react";
import BackgroundCircles from "./BackgroundCircles";
import { Typewriter } from "react-simple-typewriter";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-8 overflow-hidden text-center">
      <BackgroundCircles />
      <img
        className="w-32 h-32 rounded-full object-cover object-top"
        src="/me.JPG"
        alt="me"
      />
      <div>
        <Typewriter
          words={[
            "Talks About",
            "Javascript",
            "React",
            "Next.js",
            "Typescript",
            "Node.js",
          ]}
          loop={0}
          cursor
          cursorStyle="/"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </div>
    </div>
  );
};

export default Hero;
