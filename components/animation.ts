import { Variants } from "framer-motion";

export const listVariants: Variants = {
  hidden: { scale: 0, opcity: 0},
  visible: {
    scale: 1,
		opcity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 2.7,
    },
  },
};
export const overviewVariants: Variants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.4,
      duration: 1,
    },
  },
};
export const itemVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

export const descriptionVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

export const skillsListVariants: Variants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};