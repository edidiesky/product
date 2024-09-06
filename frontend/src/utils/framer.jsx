export const slideup = {
  initial: {
    opacity: 0,
    y: "100%",
  },
  animate: (i) => ({
    opacity: 1,
    y: "0",
    transition: { duration: 0.4, delay: i * 0.03 },
  }),
  exit: {
    opacity: 0,
    y: "100%",
    transition: { duration: 0.5 },
  },
};


export const clipPathRight = {
  initial: {
    opacity: 0,
    // clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
  },
  animate: (i) => ({
    opacity: 1,
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transition: { duration: 1.2 },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
    // clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
  },
};
export const clipPathLeft2 = {
  initial: {
    opacity: 0,
    clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    // clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
  },
  animate: (i) => ({
    opacity: 1,
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    transition: { duration: 0.7, delay: i * 0.4 },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
    clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    // clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
  },
};



export const slideLeft = {
  initial: {
    right: "100%",
  },
  enter: {
    right: "0",
    transition: {
      duration: 1,
      ease: [0.77, 0, 0.175, 1],
    },
  },
  exit: {
    right: "100%",
    transition: {
      duration: 1,
      ease: [0.77, 0, 0.175, 1],
    },
  },
};


export const ModalVariants = {
  initial: {
    opacity: 0,
    y: "100vh",
  },
  enter: {
    opacity: 1,
    y: "0",
    transition: { duration: 1, ease: [0.77, 0, 0.175, 1] },
  },
  exit: {
    opacity: 1,
    y: "100vh",

    transition: { duration: 1, ease: [0.77, 0, 0.175, 1] },
  },
};
