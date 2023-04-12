import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex flex-col relative min-h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src="/about.jpg"
        className="mt-20 md:mt-0 -mb-20 md:mb-0 object-cover object-top flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className="mt-10 md:mt-0 px-0 md:px-10">
        <h4 className="mb-10 text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p>
        Ibrahim Hafez is a software engineer and web developer with expertise in React, Next.js, Node.js, and JavaScript. He has experience developing user-facing features, building reusable front-end libraries, and optimizing components for maximum performance. Ibrahim has a Bachelor&apos;s degree in Software Engineering and has completed courses in database systems, computer networks, and operating systems. He is skilled in using Redux Toolkit, Axios, Tailwindcss, and Node.js. Additionally, Ibrahim has completed several personal projects, including a crowdfunding Dapp and an e-commerce application. He has participated in competitive programming contests and has solved over 200 problems on Codeforces. Ibrahim is fluent in English and Arabic and has interests in competitive programming, math, and web architecture.
        </p>
      </div>
    </div>
  );
};

export default About;
