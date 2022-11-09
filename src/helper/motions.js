// export const motions = {
//   initial: { opacity: 0, y: '-10vh' },
//   animate: {
//     opacity: 1,
//     y: '0vh',
//     transition: { duration: 1 },
//   },
// };

const motions = {
  fadein: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.6 },
    },
  },
  greetings: {
    initial: { opacity: 0, y: '4vh' },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  },
  spring__im: {
    initial: { opacity: 0, y: '-10vh' },
    animate: {
      opacity: 1,
      y: '0vh',
      transition: { duration: 0.5 },
    },
  },
  p1: {
    initial: { opacity: 0, y: '4vh' },
    animate: {
      opacity: 1,
      y: '0vh',
      transition: { duration: 0.8 },
    },
  },
  p2: {
    initial: { opacity: 0, y: '6vh' },
    animate: {
      opacity: 1,
      y: '0vh',
      transition: { duration: 1 },
    },
  },
  letter0: {
    initial: { opacity: 0, y: '-15vh' },
    animate: {
      opacity: 1,
      y: '0vh',
      transition: { type: 'spring' },
    },
  },
  letter1: {
    initial: { opacity: 0, y: '-15vh' },
    animate: {
      opacity: 1,
      y: '0vh',
      transition: { type: 'spring', delay: 0.4 },
    },
  },
  letter2: {
    initial: { opacity: 0, y: '-15vh' },
    animate: {
      opacity: 1,
      y: '0vh',
      transition: { type: 'spring', delay: 0.6 },
    },
  },
  letter3: {
    initial: { opacity: 0, y: '-15vh' },
    animate: {
      opacity: 1,
      y: '0vh',
      transition: { type: 'spring', delay: 0.8 },
    },
  },
  letter4: {
    initial: { opacity: 0, y: '-15vh' },
    animate: {
      opacity: 1,
      y: '0vh',
      transition: { type: 'spring', delay: 1 },
    },
  },
  letter5: {
    initial: { opacity: 0, y: '-15vh' },
    animate: {
      opacity: 1,
      y: '0vh',
      transition: { type: 'spring', delay: 1.2 },
    },
  },
  letter6: {
    initial: { opacity: 0, y: '-15vh' },
    animate: {
      opacity: 1,
      y: '0vh',
      transition: { type: 'spring', delay: 1.4 },
    },
  },
  letter7: {
    initial: { opacity: 0, y: '-15vh' },
    animate: {
      opacity: 1,
      y: '0vh',
      transition: { type: 'spring', delay: 1.6 },
    },
  },
  letter8: {
    initial: { opacity: 0, y: '-15vh' },
    animate: {
      opacity: 1,
      y: '0vh',
      transition: { type: 'spring', delay: 1.8 },
    },
  },
};

export default motions;
