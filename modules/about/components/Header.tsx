import { motion } from "framer-motion";

import ScrollOpacity from "@/common/components/ScrollOpacity";
import { useMouseVariant } from "@/modules/customMouse";

import { Delayed } from "./Delayed";
import Type from "./Type";

const AboutHeader = () => {
  const { setMouseVariant } = useMouseVariant();

  return (
    <ScrollOpacity>
      <div className="flex h-[60vh] flex-col items-center justify-center">
        <motion.h1
          className="header px-5 text-center"
          onMouseEnter={setMouseVariant.text}
          onMouseLeave={setMouseVariant.default}
        >
          <br /> <br />
          I&apos;m S.S. Goutham Reddy, <br />
          a Software <span className="text-gradient">Developer</span> <br />
          who{" "}
          <Delayed waitBeforeShow={2000}>
            <Type />
          </Delayed>
        </motion.h1>
      </div>
    </ScrollOpacity>
  );
};

export default AboutHeader;
