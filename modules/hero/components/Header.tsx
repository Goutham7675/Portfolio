import { useContext } from "react";
import { motion } from "framer-motion";

import { useMouseVariant } from "@/modules/customMouse";

import { wordAnimation } from "../animations/headerAnimation";
import { ThemeContext } from "@/modules/themeContext";

const Header = () => {
  const { setMouseVariant } = useMouseVariant();
  const { theme } = useContext(ThemeContext);

  return (
    <motion.div className="flex w-full flex-col items-center justify-center px-2 sm:px-4">
      <motion.h1
        className={`xs:text-2xl mx-auto w-full max-w-[98vw] break-words text-center text-[2rem] font-bold leading-tight sm:max-w-3xl sm:text-4xl md:max-w-5xl md:text-5xl lg:max-w-6xl lg:text-6xl xl:text-7xl ${
          theme === "dark" ? "text-gray-100" : "text-gray-900"
        }`}
        style={{ wordBreak: "break-word", hyphens: "auto" }}
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
