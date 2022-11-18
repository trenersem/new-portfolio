"use strict";
exports.id = 538;
exports.ids = [538];
exports.modules = {

/***/ 538:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8098);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1226);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__]);
framer_motion__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const FormForProject = ({
  project
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "w-full overflow-x-hidden",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "w-screen h-[50vh] relative",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: "absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
        className: "absolute z-1",
        layout: "fill",
        objectFit: "cover",
        placeholder: "blur",
        src: project.img,
        alt: "/"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h2", {
          className: "py-2",
          children: project.name
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h3", {
          children: project.tech.slice(0, 3).map((item, i) => i === 2 ? ` ${item} ` : ` ${item}  |`)
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "max-w-[1240px] mx-auto p-4 grid md:grid-cols-5 gap-8 py-8",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
        className: "col-span-4",
        variants: _animation__WEBPACK_IMPORTED_MODULE_5__/* .overviewVariants */ .zK,
        initial: "hidden",
        animate: "visible",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.h2, {
          variants: _animation__WEBPACK_IMPORTED_MODULE_5__/* .descriptionVariants */ .xm,
          className: "mb-3",
          children: "Overview"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.p, {
          variants: _animation__WEBPACK_IMPORTED_MODULE_5__/* .descriptionVariants */ .xm,
          children: project.description
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
          href: project.github,
          target: "_blank",
          rel: "noreferrer",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.button, {
            variants: _animation__WEBPACK_IMPORTED_MODULE_5__/* .descriptionVariants */ .xm,
            className: "px-8 py-2 mt-4 mr-8",
            children: "Code"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
          href: project.demo,
          target: "_blank",
          rel: "noreferrer",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.button, {
            variants: _animation__WEBPACK_IMPORTED_MODULE_5__/* .descriptionVariants */ .xm,
            className: "px-8 py-2 mt-4",
            children: "Demo"
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
        className: "col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4",
        variants: _animation__WEBPACK_IMPORTED_MODULE_5__/* .listVariants */ .hg,
        initial: "hidden",
        transition: {
          type: "tween",
          duration: 2,
          easy: "easeOut"
        },
        animate: "visible",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "p-2",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
            className: "text-center font-bold pb-2",
            children: "Technologies"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
            className: "grid grid-cols-3 md:grid-cols-1 ",
            children: project.tech.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.p, {
              className: "text-gray-600 py-2 flex items-center",
              variants: _animation__WEBPACK_IMPORTED_MODULE_5__/* .itemVariants */ .Di,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_2__.RiRadioButtonFill, {
                className: "pr-1"
              }), " ", item]
            }, item))
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: "/#projects",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
          className: "underline cursor-pointer",
          children: "Back"
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormForProject);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;