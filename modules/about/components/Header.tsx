import { motion } from "framer-motion";

import ScrollOpacity from "@/common/components/ScrollOpacity";
import { useMouseVariant } from "@/modules/customMouse";

import { Delayed } from "./Delayed";
import Type from "./Type";

const AboutHeader = () => {
  const { setMouseVariant } = useMouseVariant();

  return (
    <ScrollOpacity>
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <motion.h1
          className="font-bold text-center text-white leading-tight whitespace-normal break-words text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl max-w-4xl mx-auto px-4"
          onMouseEnter={setMouseVariant.text}
          onMouseLeave={setMouseVariant.default}
        >
          I&apos;m S.S. Goutham Reddy,<br />a Software{' '}
          <span className="text-gradient">Developer</span><br />
          who{' '}
          <Delayed waitBeforeShow={2000}>
            <Type />
          </Delayed>
        </motion.h1>
        <div className="flex flex-col items-center justify-center mt-12">
          <a
            href="/pdf/Goutham Reddy Resume.pdf"
            download
            className="inline-block rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-lg font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:from-blue-600 hover:to-purple-700"
          >
            Download Resume
          </a>
        </div>
      </div>
    </ScrollOpacity>
  );
};

export default AboutHeader;
