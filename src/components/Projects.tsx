import React from "react";
import { motion } from "framer-motion";
type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen relative flex flex-col overflow-hidden max-w-full justify-evenly mx-auto items-center z-0 md:px-10"
    >
      <h3 className="tracking-[20px] text-gray-500 text-2xl pt-[90px]">
        Projects
      </h3>
      <div className="w-full flex overflow-x-scroll snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, key) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-2 md:space-y-5 items-center justify-center p-10"
            key={key}
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 0.75 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://images.unsplash.com/photo-1682131502504-6c0f96a5f157?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="project"
              className="relative z-20 md:w-1/2"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-3xl md:text-4xl font-semibold">
                <span className="underline decoration-[#F7AB0A]/50 ">
                  Case Study {key + 1} of {projects.length}:
                </span>{" "}
                UPS Clone
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Sapiente quidem atque blanditiis aperiam, culpa corrupti
                laudantium nostrum dolorem cupiditate. Laudantium, error.
                Architecto in animi veniam aspernatur molestiae ea, sequi
                blanditiis?
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7Ab0a]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
