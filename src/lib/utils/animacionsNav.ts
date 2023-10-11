export const animacioNav = {
  visible: {
    opacity: 0.8,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.15,
    },
  },
  hidden: {
    opacity: 0,
  },
};

export const animacioElementNav = {
  visible: {
    opacity: 1,
    x: 0,
  },
  hidden: { opacity: 0, x: -100 },
};
