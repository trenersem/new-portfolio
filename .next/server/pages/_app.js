(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
;// CONCATENATED MODULE: ./public/assets/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.f571353d.png","height":660,"width":890,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAkklEQVR42jWMPQrCUBCEczILD6Pn0BP401mLlRcIBgQRJbyQQAzGwkIQje+97G7cRWs3QooZmBm+CTwxvMVC87D4qul6u9eNaBmokD/TuRmN12G0y/IzybcdgOXppN/bDIaLaLs/msQCKdQSlZPlqpjMwkN8Muml8t1VUWKWk0kxTkC9KP+EClkcsgVW1wgsnuQHvo57XUEls28AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":6});
// EXTERNAL MODULE: ./components/constants.js + 11 modules
var constants = __webpack_require__(3595);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Navbar.jsx












const Navbar = () => {
  const {
    0: nav,
    1: setNav
  } = (0,external_react_.useState)(false);
  const {
    0: shadow,
    1: setShadow
  } = (0,external_react_.useState)(false);
  const {
    0: navBg,
    1: setNavBg
  } = (0,external_react_.useState)("#ecf0f3");
  const {
    0: linkColor,
    1: setLinkColor
  } = (0,external_react_.useState)("#1f2937");
  const {
    0: position,
    1: setPosition
  } = (0,external_react_.useState)("fixed");
  const router = (0,router_namespaceObject.useRouter)();
  (0,external_react_.useEffect)(() => {
    if (constants/* projects.find */.q.find(project => project.url === router.asPath) // router.asPath === "/property" ||
    // router.asPath === "/crypto" ||
    // router.asPath === "/netflix" ||
    // router.asPath === "/twitch"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  (0,external_react_.useEffect)(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleShadow);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    style: {
      backgroundColor: `${navBg}`
    },
    className: shadow ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300" : "fixed w-full h-20 z-[100]",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex justify-between items-center w-full h-full px-2 2xl:px-16",
      children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
        href: "/",
        children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
          src: logo,
          width: "55",
          height: "35",
          alt: "/",
          className: " rounded-xl"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("ul", {
          style: {
            color: `${linkColor}`
          },
          className: "hidden md:flex",
          children: constants/* navbarItems.map */.os.map(item => /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: item.url,
              className: "ml-10 text-sm uppercase hover:border-b",
              children: item.title
            })
          }, item.title))
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          style: {
            color: `${linkColor}`
          },
          onClick: handleNav,
          className: "md:hidden",
          children: /*#__PURE__*/jsx_runtime_.jsx(ai_.AiOutlineMenu, {
            size: 25
          })
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : "",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: nav ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500" : "fixed left-[-100%] top-0 p-10 ease-in duration-500",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex w-full items-center justify-between",
            children: [/*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              href: "/",
              children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
                src: logo,
                width: "87",
                height: "35",
                alt: "/"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              onClick: handleNav,
              className: "rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer",
              children: /*#__PURE__*/jsx_runtime_.jsx(ai_.AiOutlineClose, {})
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "border-b border-gray-300 my-4",
            children: /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "w-[85%] md:w-[90%] py-4",
              children: "Let's build something legendary together"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "py-4 flex flex-col",
          children: [/*#__PURE__*/jsx_runtime_.jsx("ul", {
            className: "uppercase",
            children: constants/* navbarItems.map */.os.map(item => /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
              onClick: () => setNav(false),
              href: item.url,
              className: "py-4 text-sm",
              children: /*#__PURE__*/jsx_runtime_.jsx("li", {
                className: "py-4 text-sm",
                children: item.title
              })
            }, item.title))
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "pt-40",
            children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "uppercase tracking-widest text-[#5651e5]",
              children: "Let's Connect"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "flex items-center justify-between my-4 w-full sm:w-[80%]",
              children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "https://www.linkedin.com/in/clint-briley-50056920a/",
                target: "_blank",
                rel: "noreferrer",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300",
                  children: /*#__PURE__*/jsx_runtime_.jsx(fa_.FaLinkedinIn, {})
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "https://github.com/fireclint",
                target: "_blank",
                rel: "noreferrer",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300",
                  children: /*#__PURE__*/jsx_runtime_.jsx(fa_.FaGithub, {})
                })
              }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                href: "/#contact",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  onClick: () => setNav(!nav),
                  className: "rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300",
                  children: /*#__PURE__*/jsx_runtime_.jsx(ai_.AiOutlineMail, {})
                })
              }), /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
                href: "/resume",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  onClick: () => setNav(!nav),
                  className: "rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300",
                  children: /*#__PURE__*/jsx_runtime_.jsx(bs_.BsFillPersonLinesFill, {})
                })
              })]
            })]
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ const components_Navbar = (Navbar);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_Navbar, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 9847:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ai");

/***/ }),

/***/ 567:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/bs");

/***/ }),

/***/ 6290:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,61,595], () => (__webpack_exec__(6683)));
module.exports = __webpack_exports__;

})();