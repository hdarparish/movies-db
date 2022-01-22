export const headerAnimation = {
  hidden: {
    opacity: 0,
    y: -250,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  exit: {
    opacity: 0,
    y: -250,
    transition: {
      duration: 0.5,
    },
  },
};

export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: -300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    /*       y: -300, */
    transition: {
      duration: 0.5,
    },
  },
};

export const categoryAnimation = {
  hidden: { opacity: 1, scale: 0 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const categoryItemAnimation = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
  },
  exit: {
    opacity: 0,
    y: 200,
    transition: { ease: "easeOut", duration: 0.5 },
  },
};

export const movieListAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.75,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: 200,
    transition: { ease: "easeOut", duration: 0.5 },
  },
};

export const movieItemAnimation = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.75, ease: "easeOut", duration: 1 },
  },
  exit: {
    opacity: 0,
    y: 200,
    transition: { ease: "easeOut", duration: 0.5 },
  },
};

export const detailPageAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const detailAnimation = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    y: 100,
    transition: { ease: "easeOut", duration: 0.5 },
  },
};

export const detailBtnAnimation = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.75,
    },
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { ease: "easeOut", duration: 0.5 },
  },
  hover: {
    scale: 1.1,
    backgroundColor: "#00000000",
    color: "#FFFF",
  },
};
