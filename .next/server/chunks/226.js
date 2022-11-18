"use strict";
exports.id = 226;
exports.ids = [226];
exports.modules = {

/***/ 1226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Di": () => (/* binding */ itemVariants),
/* harmony export */   "f7": () => (/* binding */ skillsListVariants),
/* harmony export */   "hg": () => (/* binding */ listVariants),
/* harmony export */   "xm": () => (/* binding */ descriptionVariants),
/* harmony export */   "zK": () => (/* binding */ overviewVariants)
/* harmony export */ });
const listVariants = {
  hidden: {
    scale: 0,
    opcity: 0
  },
  visible: {
    scale: 1,
    opcity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 2.7
    }
  }
};
const overviewVariants = {
  hidden: {
    scale: 0
  },
  visible: {
    scale: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.4,
      duration: 1
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    x: 100
  },
  visible: {
    opacity: 1,
    x: 0
  }
};
const descriptionVariants = {
  hidden: {
    opacity: 0,
    x: 100
  },
  visible: {
    opacity: 1,
    x: 0
  }
};
const skillsListVariants = {
  hidden: {
    scale: 0
  },
  visible: {
    scale: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3
    }
  }
};

/***/ })

};
;