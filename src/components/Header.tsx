import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
type Props = {};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 p-5 flex justify-between items-center max-w-7xl mx-auto z-50 hover:">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.7,
        }}
        className="flex item-center justify-between"
      >
        <SocialIcon
          url="https://www.linkedin.com/in/ibrahim-hafez-00838619b/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com/ibrahim.hafez.s/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/IbrahimHafez99"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://gitlab.com/IbrahimAmerHafez"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          network="whatsapp"
          url="https://wa.me/+96892806306"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <Link href="#contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
          }}
          className="flex items-center space-x-2"
        >
          <EnvelopeIcon
            // network="email"
            // // url="ibrahim.hafez99@Hotmail.com"
            // fgColor="gray"
            // bgColor="transparent"
            className="text-gray-500 w-9"
          />

          <p className="uppercase cursor-pointer hidden md:inline-flex text-sm text-gray-400">
            Get in touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
};

export default Header;
