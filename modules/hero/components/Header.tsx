import { useContext } from 'react';
import { motion } from 'framer-motion';

import { useMouseVariant } from '@/modules/customMouse';

import { wordAnimation } from '../animations/headerAnimation';
import { ThemeContext } from '@/modules/themeContext';

const Header = () => {
  const { setMouseVariant } = useMouseVariant();
  const { theme } = useContext(ThemeContext);

  return (
    <motion.h1
      className={`font-bold text-white text-center leading-[1.05] whitespace-nowrap lg:whitespace-normal break-words 
        text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[6vw] 2xl:text-[5vw] 
        max-w-full overflow-x-auto px-2`}
      onMouseEnter={setMouseVariant.text}
      onMouseLeave={setMouseVariant.default}
      initial="hidden"
      animate="visible"
      transition={{
        staggerChildren: 0.05,
      }}
    >
      <motion.span variants={wordAnimation}>Dev</motion.span>{' '}
      <motion.span variants={wordAnimation}>by choice.</motion.span>{' '}
      <motion.span variants={wordAnimation}>Engineer</motion.span>{' '}
      <br className="block md:hidden" />
      <motion.span variants={wordAnimation}>by mindset</motion.span>{' '}
      <br className="hidden md:block" />
      <motion.span variants={wordAnimation} className="text-gradient">
        Building
      </motion.span>{' '}
      <br className="block md:hidden" />
      <motion.span variants={wordAnimation}>software</motion.span>{' '}
      <motion.span variants={wordAnimation}>that</motion.span>{' '}
      <motion.span variants={wordAnimation}>matters.</motion.span>
    </motion.h1>
  );
};

export default Header;
