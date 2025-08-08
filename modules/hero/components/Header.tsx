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
      className={`header text-center whitespace-normal ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}
      style={{ wordBreak: 'break-word' }}
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
