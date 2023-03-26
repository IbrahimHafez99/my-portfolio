import { motion } from "framer-motion";
type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div
        className="border border-[#333333] rounded-full w-[200px] h-[200px] animate-ping absolute mt-52
      "
      />
      <div
        className="border border-[#333333] rounded-full w-[300px] h-[300px] absolute mt-52
      "
      />
      <div
        className="border border-[#333333] rounded-full w-[500px] h-[500px] absolute mt-52
      "
      />
      <div
        className="border border-[#f8ab0a] rounded-full w-[650px] h-[650px] opacity-20 mt-52 animate-pulse absolute
      "
      />
    </motion.div>
  );
};

export default BackgroundCircles;
