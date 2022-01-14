export const headerAnimation = {
  hidden: {
    opacity: 0,
    y: -250,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 },
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
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};

export const movieListAnimation = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      ease: "easeOut",
    },
  },
};

export const movieItemAnimation = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.75, ease: "easeOut", duration: 1 },
  },
};

export const detailAnimation = {
  hidden: {
    opacity: 0,
    y: 100,
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
    transition: {
      duration: 0.5,
    },
  },
};
