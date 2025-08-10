import { useContext } from "react";
import { motion } from "framer-motion";

import { useMouseVariant } from "@/modules/customMouse";

import { wordAnimation } from "../animations/headerAnimation";
import { ThemeContext } from "@/modules/themeContext";

const Header = () => {
  const { setMouseVariant } = useMouseVariant();
  const { theme } = useContext(ThemeContext);

  return (
    <motion.div
      className={`flex w-full flex-col items-center justify-center px-2 sm:px-4`}
    >
      <motion.h1
        className={`mx-auto max-w-6xl text-center text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl ${
          theme === "dark" ? "text-gray-100" : "text-gray-900"
        }`}
        onMouseEnter={setMouseVariant.text}
        onMouseLeave={setMouseVariant.default}
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.05 }}
      >
        <span>
          <motion.span variants={wordAnimation}>
            Dev by choice. Engineer by mindset
          </motion.span>
        </span>
        <br />
        <span>
          <motion.span variants={wordAnimation} className="text-gradient">
            Building
          </motion.span>{" "}
          <motion.span variants={wordAnimation}>
            software that matters.
          </motion.span>
        </span>
      </motion.h1>
    </motion.div>
  );
};

export default Header;
