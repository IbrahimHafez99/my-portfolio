import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen relative text-center max-w-[2000px] xl:px-10 xl:space-y-0 mx-auto"
    >
      <h3 className="top-0 uppercase tracking-[20px] text-gray-500 text-2xl pt-[90px]">
        Skills
      </h3>
      <h3 className="top-36 uppercase tracking-[3px] text-gray-500 text-sm py-10">
        Hover over a skill for currency profieciency
      </h3>
      <div className="flex justify-center items-center flex-col text-center">
        <div className="grid grid-cols-3 mdgrid-cols-4: gap-5 ">
          <Skill directionLeft={true} />
          <Skill directionLeft={false} />
          <Skill directionLeft={true} />
          <Skill directionLeft={false} />
          <Skill directionLeft={true} />
          <Skill directionLeft={false} />
          <Skill directionLeft={true} />
          <Skill directionLeft={false} />
          <Skill directionLeft={true} />
          <Skill directionLeft={false} />
          <Skill directionLeft={true} />
          <Skill directionLeft={false} />
          <Skill directionLeft={true} />
          <Skill directionLeft={false} />
          <Skill directionLeft={true} />
          <Skill directionLeft={false} />
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
