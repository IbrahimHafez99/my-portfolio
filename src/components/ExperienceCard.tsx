import React from "react";
import { motion } from "framer-motion";

const ExperienceCard = () => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 md:w-[600px] xl:w-[700px] snap-center bg-[#292929] p-10 md:opacity-40 hover:opacity-100 transition-opacity cursor-pointer duration-200">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="http://www.nextinuous.com/static/media/Group%2033.e8ae0ab80228d92fc3d8.png"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">React Developer</h4>
        <p className="font-bold text-2xl mt-1">Nextinuous</p>
        <div className="flex space-x-2 my-2">{/* TECH  */}</div>
        <p className="uppercase py-5 text-gray-300">Started work... end</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
