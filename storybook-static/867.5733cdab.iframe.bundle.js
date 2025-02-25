"use strict";
(self.webpackChunknext_legend_kickstarter = self.webpackChunknext_legend_kickstarter || []).push([
  [867],
  {
    "./node_modules/@storybook/addon-a11y/dist/matchers-57EZJSQE.mjs": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { toHaveNoViolations: () => toHaveNoViolations });
      var console = __webpack_require__("./node_modules/console-browserify/index.js"),
        wrapAnsi16 =
          (offset = 0) =>
          (code) =>
            `[${code + offset}m`,
        wrapAnsi256 =
          (offset = 0) =>
          (code) =>
            `[${38 + offset};5;${code}m`,
        wrapAnsi16m =
          (offset = 0) =>
          (red, green, blue) =>
            `[${38 + offset};2;${red};${green};${blue}m`,
        styles = {
          modifier: {
            reset: [0, 0],
            bold: [1, 22],
            dim: [2, 22],
            italic: [3, 23],
            underline: [4, 24],
            overline: [53, 55],
            inverse: [7, 27],
            hidden: [8, 28],
            strikethrough: [9, 29],
          },
          color: {
            black: [30, 39],
            red: [31, 39],
            green: [32, 39],
            yellow: [33, 39],
            blue: [34, 39],
            magenta: [35, 39],
            cyan: [36, 39],
            white: [37, 39],
            blackBright: [90, 39],
            gray: [90, 39],
            grey: [90, 39],
            redBright: [91, 39],
            greenBright: [92, 39],
            yellowBright: [93, 39],
            blueBright: [94, 39],
            magentaBright: [95, 39],
            cyanBright: [96, 39],
            whiteBright: [97, 39],
          },
          bgColor: {
            bgBlack: [40, 49],
            bgRed: [41, 49],
            bgGreen: [42, 49],
            bgYellow: [43, 49],
            bgBlue: [44, 49],
            bgMagenta: [45, 49],
            bgCyan: [46, 49],
            bgWhite: [47, 49],
            bgBlackBright: [100, 49],
            bgGray: [100, 49],
            bgGrey: [100, 49],
            bgRedBright: [101, 49],
            bgGreenBright: [102, 49],
            bgYellowBright: [103, 49],
            bgBlueBright: [104, 49],
            bgMagentaBright: [105, 49],
            bgCyanBright: [106, 49],
            bgWhiteBright: [107, 49],
          },
        };
      Object.keys(styles.modifier);
      Object.keys(styles.color), Object.keys(styles.bgColor);
      var ansi_styles_default = (function assembleStyles() {
          let codes = new Map();
          for (let [groupName, group] of Object.entries(styles)) {
            for (let [styleName, style] of Object.entries(group))
              (styles[styleName] = { open: `[${style[0]}m`, close: `[${style[1]}m` }),
                (group[styleName] = styles[styleName]),
                codes.set(style[0], style[1]);
            Object.defineProperty(styles, groupName, { value: group, enumerable: !1 });
          }
          return (
            Object.defineProperty(styles, "codes", { value: codes, enumerable: !1 }),
            (styles.color.close = "[39m"),
            (styles.bgColor.close = "[49m"),
            (styles.color.ansi = wrapAnsi16()),
            (styles.color.ansi256 = wrapAnsi256()),
            (styles.color.ansi16m = wrapAnsi16m()),
            (styles.bgColor.ansi = wrapAnsi16(10)),
            (styles.bgColor.ansi256 = wrapAnsi256(10)),
            (styles.bgColor.ansi16m = wrapAnsi16m(10)),
            Object.defineProperties(styles, {
              rgbToAnsi256: {
                value: (red, green, blue) =>
                  red === green && green === blue
                    ? red < 8
                      ? 16
                      : red > 248
                        ? 231
                        : Math.round(((red - 8) / 247) * 24) + 232
                    : 16 +
                      36 * Math.round((red / 255) * 5) +
                      6 * Math.round((green / 255) * 5) +
                      Math.round((blue / 255) * 5),
                enumerable: !1,
              },
              hexToRgb: {
                value(hex) {
                  let matches = /[a-f\d]{6}|[a-f\d]{3}/i.exec(hex.toString(16));
                  if (!matches) return [0, 0, 0];
                  let [colorString] = matches;
                  3 === colorString.length &&
                    (colorString = [...colorString]
                      .map((character) => character + character)
                      .join(""));
                  let integer = Number.parseInt(colorString, 16);
                  return [(integer >> 16) & 255, (integer >> 8) & 255, 255 & integer];
                },
                enumerable: !1,
              },
              hexToAnsi256: {
                value: (hex) => styles.rgbToAnsi256(...styles.hexToRgb(hex)),
                enumerable: !1,
              },
              ansi256ToAnsi: {
                value(code) {
                  if (code < 8) return 30 + code;
                  if (code < 16) return code - 8 + 90;
                  let red, green, blue;
                  if (code >= 232)
                    (red = (10 * (code - 232) + 8) / 255), (green = red), (blue = red);
                  else {
                    let remainder = (code -= 16) % 36;
                    (red = Math.floor(code / 36) / 5),
                      (green = Math.floor(remainder / 6) / 5),
                      (blue = (remainder % 6) / 5);
                  }
                  let value = 2 * Math.max(red, green, blue);
                  if (0 === value) return 30;
                  let result =
                    30 + ((Math.round(blue) << 2) | (Math.round(green) << 1) | Math.round(red));
                  return 2 === value && (result += 60), result;
                },
                enumerable: !1,
              },
              rgbToAnsi: {
                value: (red, green, blue) =>
                  styles.ansi256ToAnsi(styles.rgbToAnsi256(red, green, blue)),
                enumerable: !1,
              },
              hexToAnsi: {
                value: (hex) => styles.ansi256ToAnsi(styles.hexToAnsi256(hex)),
                enumerable: !1,
              },
            }),
            styles
          );
        })(),
        level = (() => {
          if (navigator.userAgentData) {
            let brand = navigator.userAgentData.brands.find(
              ({ brand: brand2 }) => "Chromium" === brand2
            );
            if (brand && brand.version > 93) return 3;
          }
          return /\b(Chrome|Chromium)\//.test(navigator.userAgent) ? 1 : 0;
        })(),
        colorSupport = 0 !== level && {
          level,
          hasBasic: !0,
          has256: level >= 2,
          has16m: level >= 3,
        },
        browser_default = { stdout: colorSupport, stderr: colorSupport };
      function stringReplaceAll(string, substring, replacer) {
        let index = string.indexOf(substring);
        if (-1 === index) return string;
        let substringLength = substring.length,
          endIndex = 0,
          returnValue = "";
        do {
          (returnValue += string.slice(endIndex, index) + substring + replacer),
            (endIndex = index + substringLength),
            (index = string.indexOf(substring, endIndex));
        } while (-1 !== index);
        return (returnValue += string.slice(endIndex)), returnValue;
      }
      var { stdout: stdoutColor, stderr: stderrColor } = browser_default,
        GENERATOR = Symbol("GENERATOR"),
        STYLER = Symbol("STYLER"),
        IS_EMPTY = Symbol("IS_EMPTY"),
        levelMapping = ["ansi", "ansi", "ansi256", "ansi16m"],
        styles2 = Object.create(null),
        chalkFactory = (options) => {
          let chalk2 = (...strings) => strings.join(" ");
          return (
            ((object, options = {}) => {
              if (
                options.level &&
                !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)
              )
                throw new Error("The `level` option should be an integer from 0 to 3");
              let colorLevel = stdoutColor ? stdoutColor.level : 0;
              object.level = void 0 === options.level ? colorLevel : options.level;
            })(chalk2, options),
            Object.setPrototypeOf(chalk2, createChalk.prototype),
            chalk2
          );
        };
      function createChalk(options) {
        return chalkFactory(options);
      }
      Object.setPrototypeOf(createChalk.prototype, Function.prototype);
      for (let [styleName, style] of Object.entries(ansi_styles_default))
        styles2[styleName] = {
          get() {
            let builder = createBuilder(
              this,
              createStyler(style.open, style.close, this[STYLER]),
              this[IS_EMPTY]
            );
            return Object.defineProperty(this, styleName, { value: builder }), builder;
          },
        };
      styles2.visible = {
        get() {
          let builder = createBuilder(this, this[STYLER], !0);
          return Object.defineProperty(this, "visible", { value: builder }), builder;
        },
      };
      var getModelAnsi = (model, level2, type, ...arguments_) =>
        "rgb" === model
          ? "ansi16m" === level2
            ? ansi_styles_default[type].ansi16m(...arguments_)
            : "ansi256" === level2
              ? ansi_styles_default[type].ansi256(ansi_styles_default.rgbToAnsi256(...arguments_))
              : ansi_styles_default[type].ansi(ansi_styles_default.rgbToAnsi(...arguments_))
          : "hex" === model
            ? getModelAnsi("rgb", level2, type, ...ansi_styles_default.hexToRgb(...arguments_))
            : ansi_styles_default[type][model](...arguments_);
      for (let model of ["rgb", "hex", "ansi256"]) {
        (styles2[model] = {
          get() {
            let { level: level2 } = this;
            return function (...arguments_) {
              let styler = createStyler(
                getModelAnsi(model, levelMapping[level2], "color", ...arguments_),
                ansi_styles_default.color.close,
                this[STYLER]
              );
              return createBuilder(this, styler, this[IS_EMPTY]);
            };
          },
        }),
          (styles2["bg" + model[0].toUpperCase() + model.slice(1)] = {
            get() {
              let { level: level2 } = this;
              return function (...arguments_) {
                let styler = createStyler(
                  getModelAnsi(model, levelMapping[level2], "bgColor", ...arguments_),
                  ansi_styles_default.bgColor.close,
                  this[STYLER]
                );
                return createBuilder(this, styler, this[IS_EMPTY]);
              };
            },
          });
      }
      var proto = Object.defineProperties(() => {}, {
          ...styles2,
          level: {
            enumerable: !0,
            get() {
              return this[GENERATOR].level;
            },
            set(level2) {
              this[GENERATOR].level = level2;
            },
          },
        }),
        createStyler = (open, close, parent) => {
          let openAll, closeAll;
          return (
            void 0 === parent
              ? ((openAll = open), (closeAll = close))
              : ((openAll = parent.openAll + open), (closeAll = close + parent.closeAll)),
            { open, close, openAll, closeAll, parent }
          );
        },
        createBuilder = (self, _styler, _isEmpty) => {
          let builder = (...arguments_) =>
            applyStyle(
              builder,
              1 === arguments_.length ? "" + arguments_[0] : arguments_.join(" ")
            );
          return (
            Object.setPrototypeOf(builder, proto),
            (builder[GENERATOR] = self),
            (builder[STYLER] = _styler),
            (builder[IS_EMPTY] = _isEmpty),
            builder
          );
        },
        applyStyle = (self, string) => {
          if (self.level <= 0 || !string) return self[IS_EMPTY] ? "" : string;
          let styler = self[STYLER];
          if (void 0 === styler) return string;
          let { openAll, closeAll } = styler;
          if (string.includes(""))
            for (; void 0 !== styler; )
              (string = stringReplaceAll(string, styler.close, styler.open)),
                (styler = styler.parent);
          let lfIndex = string.indexOf("\n");
          return (
            -1 !== lfIndex &&
              (string = (function stringEncaseCRLFWithFirstIndex(string, prefix, postfix, index) {
                let endIndex = 0,
                  returnValue = "";
                do {
                  let gotCR = "\r" === string[index - 1];
                  (returnValue +=
                    string.slice(endIndex, gotCR ? index - 1 : index) +
                    prefix +
                    (gotCR ? "\r\n" : "\n") +
                    postfix),
                    (endIndex = index + 1),
                    (index = string.indexOf("\n", endIndex));
                } while (-1 !== index);
                return (returnValue += string.slice(endIndex)), returnValue;
              })(string, closeAll, openAll, lfIndex)),
            openAll + string + closeAll
          );
        };
      Object.defineProperties(createChalk.prototype, styles2);
      var chalk = createChalk();
      createChalk({ level: stderrColor ? stderrColor.level : 0 });
      var mod,
        isNodeMode,
        target,
        source_default = chalk,
        __create = Object.create,
        __defProp = Object.defineProperty,
        __getOwnPropDesc = Object.getOwnPropertyDescriptor,
        __getOwnPropNames = Object.getOwnPropertyNames,
        __getProtoOf = Object.getPrototypeOf,
        __hasOwnProp = Object.prototype.hasOwnProperty,
        __commonJS = (cb, mod) =>
          function () {
            return (
              mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod),
              mod.exports
            );
          },
        require_ansi_styles = __commonJS({
          "node_modules/pretty-format/node_modules/ansi-styles/index.js"(exports, module) {
            var wrapAnsi2562 =
                (offset = 0) =>
                (code) =>
                  `[${38 + offset};5;${code}m`,
              wrapAnsi16m2 =
                (offset = 0) =>
                (red, green, blue) =>
                  `[${38 + offset};2;${red};${green};${blue}m`;
            Object.defineProperty(module, "exports", {
              enumerable: !0,
              get: function assembleStyles2() {
                let codes = new Map(),
                  styles3 = {
                    modifier: {
                      reset: [0, 0],
                      bold: [1, 22],
                      dim: [2, 22],
                      italic: [3, 23],
                      underline: [4, 24],
                      overline: [53, 55],
                      inverse: [7, 27],
                      hidden: [8, 28],
                      strikethrough: [9, 29],
                    },
                    color: {
                      black: [30, 39],
                      red: [31, 39],
                      green: [32, 39],
                      yellow: [33, 39],
                      blue: [34, 39],
                      magenta: [35, 39],
                      cyan: [36, 39],
                      white: [37, 39],
                      blackBright: [90, 39],
                      redBright: [91, 39],
                      greenBright: [92, 39],
                      yellowBright: [93, 39],
                      blueBright: [94, 39],
                      magentaBright: [95, 39],
                      cyanBright: [96, 39],
                      whiteBright: [97, 39],
                    },
                    bgColor: {
                      bgBlack: [40, 49],
                      bgRed: [41, 49],
                      bgGreen: [42, 49],
                      bgYellow: [43, 49],
                      bgBlue: [44, 49],
                      bgMagenta: [45, 49],
                      bgCyan: [46, 49],
                      bgWhite: [47, 49],
                      bgBlackBright: [100, 49],
                      bgRedBright: [101, 49],
                      bgGreenBright: [102, 49],
                      bgYellowBright: [103, 49],
                      bgBlueBright: [104, 49],
                      bgMagentaBright: [105, 49],
                      bgCyanBright: [106, 49],
                      bgWhiteBright: [107, 49],
                    },
                  };
                (styles3.color.gray = styles3.color.blackBright),
                  (styles3.bgColor.bgGray = styles3.bgColor.bgBlackBright),
                  (styles3.color.grey = styles3.color.blackBright),
                  (styles3.bgColor.bgGrey = styles3.bgColor.bgBlackBright);
                for (let [groupName, group] of Object.entries(styles3)) {
                  for (let [styleName, style] of Object.entries(group))
                    (styles3[styleName] = { open: `[${style[0]}m`, close: `[${style[1]}m` }),
                      (group[styleName] = styles3[styleName]),
                      codes.set(style[0], style[1]);
                  Object.defineProperty(styles3, groupName, { value: group, enumerable: !1 });
                }
                return (
                  Object.defineProperty(styles3, "codes", { value: codes, enumerable: !1 }),
                  (styles3.color.close = "[39m"),
                  (styles3.bgColor.close = "[49m"),
                  (styles3.color.ansi256 = wrapAnsi2562()),
                  (styles3.color.ansi16m = wrapAnsi16m2()),
                  (styles3.bgColor.ansi256 = wrapAnsi2562(10)),
                  (styles3.bgColor.ansi16m = wrapAnsi16m2(10)),
                  Object.defineProperties(styles3, {
                    rgbToAnsi256: {
                      value: (red, green, blue) =>
                        red === green && green === blue
                          ? red < 8
                            ? 16
                            : red > 248
                              ? 231
                              : Math.round(((red - 8) / 247) * 24) + 232
                          : 16 +
                            36 * Math.round((red / 255) * 5) +
                            6 * Math.round((green / 255) * 5) +
                            Math.round((blue / 255) * 5),
                      enumerable: !1,
                    },
                    hexToRgb: {
                      value: (hex) => {
                        let matches = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(
                          hex.toString(16)
                        );
                        if (!matches) return [0, 0, 0];
                        let { colorString } = matches.groups;
                        3 === colorString.length &&
                          (colorString = colorString
                            .split("")
                            .map((character) => character + character)
                            .join(""));
                        let integer = Number.parseInt(colorString, 16);
                        return [(integer >> 16) & 255, (integer >> 8) & 255, 255 & integer];
                      },
                      enumerable: !1,
                    },
                    hexToAnsi256: {
                      value: (hex) => styles3.rgbToAnsi256(...styles3.hexToRgb(hex)),
                      enumerable: !1,
                    },
                  }),
                  styles3
                );
              },
            });
          },
        }),
        require_collections = __commonJS({
          "node_modules/pretty-format/build/collections.js"(exports) {
            Object.defineProperty(exports, "__esModule", { value: !0 }),
              (exports.printIteratorEntries = function printIteratorEntries(
                iterator,
                config,
                indentation,
                depth,
                refs,
                printer,
                separator = ": "
              ) {
                let result = "",
                  width = 0,
                  current = iterator.next();
                if (!current.done) {
                  result += config.spacingOuter;
                  let indentationNext = indentation + config.indent;
                  for (; !current.done; ) {
                    if (((result += indentationNext), width++ === config.maxWidth)) {
                      result += "…";
                      break;
                    }
                    (result +=
                      printer(current.value[0], config, indentationNext, depth, refs) +
                      separator +
                      printer(current.value[1], config, indentationNext, depth, refs)),
                      (current = iterator.next()),
                      current.done
                        ? config.min || (result += ",")
                        : (result += `,${config.spacingInner}`);
                  }
                  result += config.spacingOuter + indentation;
                }
                return result;
              }),
              (exports.printIteratorValues = function printIteratorValues(
                iterator,
                config,
                indentation,
                depth,
                refs,
                printer
              ) {
                let result = "",
                  width = 0,
                  current = iterator.next();
                if (!current.done) {
                  result += config.spacingOuter;
                  let indentationNext = indentation + config.indent;
                  for (; !current.done; ) {
                    if (((result += indentationNext), width++ === config.maxWidth)) {
                      result += "…";
                      break;
                    }
                    (result += printer(current.value, config, indentationNext, depth, refs)),
                      (current = iterator.next()),
                      current.done
                        ? config.min || (result += ",")
                        : (result += `,${config.spacingInner}`);
                  }
                  result += config.spacingOuter + indentation;
                }
                return result;
              }),
              (exports.printListItems = function printListItems(
                list,
                config,
                indentation,
                depth,
                refs,
                printer
              ) {
                let result = "";
                if (list.length) {
                  result += config.spacingOuter;
                  let indentationNext = indentation + config.indent;
                  for (let i = 0; i < list.length; i++) {
                    if (((result += indentationNext), i === config.maxWidth)) {
                      result += "…";
                      break;
                    }
                    i in list && (result += printer(list[i], config, indentationNext, depth, refs)),
                      i < list.length - 1
                        ? (result += `,${config.spacingInner}`)
                        : config.min || (result += ",");
                  }
                  result += config.spacingOuter + indentation;
                }
                return result;
              }),
              (exports.printObjectProperties = function printObjectProperties(
                val,
                config,
                indentation,
                depth,
                refs,
                printer
              ) {
                let result = "",
                  keys = ((object, compareKeys) => {
                    let keys = Object.keys(object).sort(compareKeys);
                    return (
                      Object.getOwnPropertySymbols &&
                        Object.getOwnPropertySymbols(object).forEach((symbol) => {
                          Object.getOwnPropertyDescriptor(object, symbol).enumerable &&
                            keys.push(symbol);
                        }),
                      keys
                    );
                  })(val, config.compareKeys);
                if (keys.length) {
                  result += config.spacingOuter;
                  let indentationNext = indentation + config.indent;
                  for (let i = 0; i < keys.length; i++) {
                    let key = keys[i];
                    (result += `${indentationNext + printer(key, config, indentationNext, depth, refs)}: ${printer(val[key], config, indentationNext, depth, refs)}`),
                      i < keys.length - 1
                        ? (result += `,${config.spacingInner}`)
                        : config.min || (result += ",");
                  }
                  result += config.spacingOuter + indentation;
                }
                return result;
              });
          },
        }),
        require_AsymmetricMatcher = __commonJS({
          "node_modules/pretty-format/build/plugins/AsymmetricMatcher.js"(exports) {
            Object.defineProperty(exports, "__esModule", { value: !0 }),
              (exports.test = exports.serialize = exports.default = void 0);
            var _collections = require_collections(),
              Symbol2 = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol,
              asymmetricMatcher =
                "function" == typeof Symbol2 && Symbol2.for
                  ? Symbol2.for("jest.asymmetricMatcher")
                  : 1267621,
              serialize = (val, config, indentation, depth, refs, printer) => {
                let stringedValue = val.toString();
                if ("ArrayContaining" === stringedValue || "ArrayNotContaining" === stringedValue)
                  return ++depth > config.maxDepth
                    ? `[${stringedValue}]`
                    : `${stringedValue + " "}[${(0, _collections.printListItems)(val.sample, config, indentation, depth, refs, printer)}]`;
                if ("ObjectContaining" === stringedValue || "ObjectNotContaining" === stringedValue)
                  return ++depth > config.maxDepth
                    ? `[${stringedValue}]`
                    : `${stringedValue + " "}{${(0, _collections.printObjectProperties)(val.sample, config, indentation, depth, refs, printer)}}`;
                if (
                  "StringMatching" === stringedValue ||
                  "StringNotMatching" === stringedValue ||
                  "StringContaining" === stringedValue ||
                  "StringNotContaining" === stringedValue
                )
                  return (
                    stringedValue + " " + printer(val.sample, config, indentation, depth, refs)
                  );
                if ("function" != typeof val.toAsymmetricMatcher)
                  throw new Error(
                    `Asymmetric matcher ${val.constructor.name} does not implement toAsymmetricMatcher()`
                  );
                return val.toAsymmetricMatcher();
              };
            exports.serialize = serialize;
            var test = (val) => val && val.$$typeof === asymmetricMatcher;
            exports.test = test;
            var _default = { serialize, test };
            exports.default = _default;
          },
        }),
        require_ansi_regex = __commonJS({
          "node_modules/ansi-regex/index.js"(exports, module) {
            module.exports = ({ onlyFirst = !1 } = {}) => {
              let pattern = [
                "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
                "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))",
              ].join("|");
              return new RegExp(pattern, onlyFirst ? void 0 : "g");
            };
          },
        }),
        require_ConvertAnsi = __commonJS({
          "node_modules/pretty-format/build/plugins/ConvertAnsi.js"(exports) {
            Object.defineProperty(exports, "__esModule", { value: !0 }),
              (exports.test = exports.serialize = exports.default = void 0);
            var _ansiRegex = _interopRequireDefault(require_ansi_regex()),
              _ansiStyles = _interopRequireDefault(require_ansi_styles());
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            var test = (val) => "string" == typeof val && !!val.match((0, _ansiRegex.default)());
            exports.test = test;
            var serialize = (val, config, indentation, depth, refs, printer) =>
              printer(
                val.replace((0, _ansiRegex.default)(), (match) => {
                  switch (match) {
                    case _ansiStyles.default.red.close:
                    case _ansiStyles.default.green.close:
                    case _ansiStyles.default.cyan.close:
                    case _ansiStyles.default.gray.close:
                    case _ansiStyles.default.white.close:
                    case _ansiStyles.default.yellow.close:
                    case _ansiStyles.default.bgRed.close:
                    case _ansiStyles.default.bgGreen.close:
                    case _ansiStyles.default.bgYellow.close:
                    case _ansiStyles.default.inverse.close:
                    case _ansiStyles.default.dim.close:
                    case _ansiStyles.default.bold.close:
                    case _ansiStyles.default.reset.open:
                    case _ansiStyles.default.reset.close:
                      return "</>";
                    case _ansiStyles.default.red.open:
                      return "<red>";
                    case _ansiStyles.default.green.open:
                      return "<green>";
                    case _ansiStyles.default.cyan.open:
                      return "<cyan>";
                    case _ansiStyles.default.gray.open:
                      return "<gray>";
                    case _ansiStyles.default.white.open:
                      return "<white>";
                    case _ansiStyles.default.yellow.open:
                      return "<yellow>";
                    case _ansiStyles.default.bgRed.open:
                      return "<bgRed>";
                    case _ansiStyles.default.bgGreen.open:
                      return "<bgGreen>";
                    case _ansiStyles.default.bgYellow.open:
                      return "<bgYellow>";
                    case _ansiStyles.default.inverse.open:
                      return "<inverse>";
                    case _ansiStyles.default.dim.open:
                      return "<dim>";
                    case _ansiStyles.default.bold.open:
                      return "<bold>";
                    default:
                      return "";
                  }
                }),
                config,
                indentation,
                depth,
                refs
              );
            exports.serialize = serialize;
            var _default = { serialize, test };
            exports.default = _default;
          },
        }),
        require_DOMCollection = __commonJS({
          "node_modules/pretty-format/build/plugins/DOMCollection.js"(exports) {
            Object.defineProperty(exports, "__esModule", { value: !0 }),
              (exports.test = exports.serialize = exports.default = void 0);
            var _collections = require_collections(),
              OBJECT_NAMES = ["DOMStringMap", "NamedNodeMap"],
              ARRAY_REGEXP = /^(HTML\w*Collection|NodeList)$/,
              test = (val) => {
                return (
                  val &&
                  val.constructor &&
                  !!val.constructor.name &&
                  ((name = val.constructor.name),
                  -1 !== OBJECT_NAMES.indexOf(name) || ARRAY_REGEXP.test(name))
                );
                var name;
              };
            exports.test = test;
            var serialize = (collection, config, indentation, depth, refs, printer) => {
              let name = collection.constructor.name;
              return ++depth > config.maxDepth
                ? `[${name}]`
                : (config.min ? "" : name + " ") +
                    (-1 !== OBJECT_NAMES.indexOf(name)
                      ? `{${(0, _collections.printObjectProperties)(((collection) => "NamedNodeMap" === collection.constructor.name)(collection) ? Array.from(collection).reduce((props, attribute) => ((props[attribute.name] = attribute.value), props), {}) : { ...collection }, config, indentation, depth, refs, printer)}}`
                      : `[${(0, _collections.printListItems)(Array.from(collection), config, indentation, depth, refs, printer)}]`);
            };
            exports.serialize = serialize;
            var _default = { serialize, test };
            exports.default = _default;
          },
        }),
        require_escapeHTML = __commonJS({
          "node_modules/pretty-format/build/plugins/lib/escapeHTML.js"(exports) {
            Object.defineProperty(exports, "__esModule", { value: !0 }),
              (exports.default = function escapeHTML(str) {
                return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
              });
          },
        }),
        require_markup = __commonJS({
          "node_modules/pretty-format/build/plugins/lib/markup.js"(exports) {
            Object.defineProperty(exports, "__esModule", { value: !0 }),
              (exports.printText =
                exports.printProps =
                exports.printElementAsLeaf =
                exports.printElement =
                exports.printComment =
                exports.printChildren =
                  void 0);
            var _escapeHTML = (function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            })(require_escapeHTML());
            exports.printProps = (keys, props, config, indentation, depth, refs, printer) => {
              let indentationNext = indentation + config.indent,
                colors = config.colors;
              return keys
                .map((key) => {
                  let value = props[key],
                    printed = printer(value, config, indentationNext, depth, refs);
                  return (
                    "string" != typeof value &&
                      (-1 !== printed.indexOf("\n") &&
                        (printed =
                          config.spacingOuter +
                          indentationNext +
                          printed +
                          config.spacingOuter +
                          indentation),
                      (printed = `{${printed}}`)),
                    `${config.spacingInner + indentation + colors.prop.open + key + colors.prop.close}=${colors.value.open}${printed}${colors.value.close}`
                  );
                })
                .join("");
            };
            exports.printChildren = (children, config, indentation, depth, refs, printer) =>
              children
                .map(
                  (child) =>
                    config.spacingOuter +
                    indentation +
                    ("string" == typeof child
                      ? printText(child, config)
                      : printer(child, config, indentation, depth, refs))
                )
                .join("");
            var printText = (text, config) => {
              let contentColor = config.colors.content;
              return contentColor.open + (0, _escapeHTML.default)(text) + contentColor.close;
            };
            exports.printText = printText;
            exports.printComment = (comment, config) => {
              let commentColor = config.colors.comment;
              return `${commentColor.open}\x3c!--${(0, _escapeHTML.default)(comment)}--\x3e${commentColor.close}`;
            };
            exports.printElement = (type, printedProps, printedChildren, config, indentation) => {
              let tagColor = config.colors.tag;
              return `${tagColor.open}<${type}${printedProps && tagColor.close + printedProps + config.spacingOuter + indentation + tagColor.open}${printedChildren ? `>${tagColor.close}${printedChildren}${config.spacingOuter}${indentation}${tagColor.open}</${type}` : (printedProps && !config.min ? "" : " ") + "/"}>${tagColor.close}`;
            };
            exports.printElementAsLeaf = (type, config) => {
              let tagColor = config.colors.tag;
              return `${tagColor.open}<${type}${tagColor.close} …${tagColor.open} />${tagColor.close}`;
            };
          },
        }),
        require_DOMElement = __commonJS({
          "node_modules/pretty-format/build/plugins/DOMElement.js"(exports) {
            Object.defineProperty(exports, "__esModule", { value: !0 }),
              (exports.test = exports.serialize = exports.default = void 0);
            var _markup = require_markup(),
              ELEMENT_REGEXP = /^((HTML|SVG)\w*)?Element$/,
              test = (val) => {
                var _val$constructor;
                return (
                  (null == val ||
                  null === (_val$constructor = val.constructor) ||
                  void 0 === _val$constructor
                    ? void 0
                    : _val$constructor.name) &&
                  ((val) => {
                    let constructorName = val.constructor.name,
                      { nodeType, tagName } = val,
                      isCustomElement =
                        ("string" == typeof tagName && tagName.includes("-")) ||
                        ((val) => {
                          try {
                            return "function" == typeof val.hasAttribute && val.hasAttribute("is");
                          } catch {
                            return !1;
                          }
                        })(val);
                    return (
                      (1 === nodeType &&
                        (ELEMENT_REGEXP.test(constructorName) || isCustomElement)) ||
                      (3 === nodeType && "Text" === constructorName) ||
                      (8 === nodeType && "Comment" === constructorName) ||
                      (11 === nodeType && "DocumentFragment" === constructorName)
                    );
                  })(val)
                );
              };
            function nodeIsFragment(node) {
              return 11 === node.nodeType;
            }
            exports.test = test;
            var serialize = (node, config, indentation, depth, refs, printer) => {
              if (
                (function nodeIsText(node) {
                  return 3 === node.nodeType;
                })(node)
              )
                return (0, _markup.printText)(node.data, config);
              if (
                (function nodeIsComment(node) {
                  return 8 === node.nodeType;
                })(node)
              )
                return (0, _markup.printComment)(node.data, config);
              let type = nodeIsFragment(node) ? "DocumentFragment" : node.tagName.toLowerCase();
              return ++depth > config.maxDepth
                ? (0, _markup.printElementAsLeaf)(type, config)
                : (0, _markup.printElement)(
                    type,
                    (0, _markup.printProps)(
                      nodeIsFragment(node)
                        ? []
                        : Array.from(node.attributes)
                            .map((attr) => attr.name)
                            .sort(),
                      nodeIsFragment(node)
                        ? {}
                        : Array.from(node.attributes).reduce(
                            (props, attribute) => (
                              (props[attribute.name] = attribute.value), props
                            ),
                            {}
                          ),
                      config,
                      indentation + config.indent,
                      depth,
                      refs,
                      printer
                    ),
                    (0, _markup.printChildren)(
                      Array.prototype.slice.call(node.childNodes || node.children),
                      config,
                      indentation + config.indent,
                      depth,
                      refs,
                      printer
                    ),
                    config,
                    indentation
                  );
            };
            exports.serialize = serialize;
            var _default = { serialize, test };
            exports.default = _default;
          },
        }),
        require_Immutable = __commonJS({
          "node_modules/pretty-format/build/plugins/Immutable.js"(exports) {
            Object.defineProperty(exports, "__esModule", { value: !0 }),
              (exports.test = exports.serialize = exports.default = void 0);
            var _collections = require_collections(),
              getImmutableName = (name) => `Immutable.${name}`,
              printAsLeaf = (name) => `[${name}]`;
            var printImmutableValues = (val, config, indentation, depth, refs, printer, type) =>
                ++depth > config.maxDepth
                  ? printAsLeaf(getImmutableName(type))
                  : `${getImmutableName(type) + " "}[${(0, _collections.printIteratorValues)(val.values(), config, indentation, depth, refs, printer)}]`,
              serialize = (val, config, indentation, depth, refs, printer) =>
                val["@@__IMMUTABLE_MAP__@@"]
                  ? ((val, config, indentation, depth, refs, printer, type) =>
                      ++depth > config.maxDepth
                        ? printAsLeaf(getImmutableName(type))
                        : `${getImmutableName(type) + " "}{${(0, _collections.printIteratorEntries)(val.entries(), config, indentation, depth, refs, printer)}}`)(
                      val,
                      config,
                      indentation,
                      depth,
                      refs,
                      printer,
                      val["@@__IMMUTABLE_ORDERED__@@"] ? "OrderedMap" : "Map"
                    )
                  : val["@@__IMMUTABLE_LIST__@@"]
                    ? printImmutableValues(val, config, indentation, depth, refs, printer, "List")
                    : val["@@__IMMUTABLE_SET__@@"]
                      ? printImmutableValues(
                          val,
                          config,
                          indentation,
                          depth,
                          refs,
                          printer,
                          val["@@__IMMUTABLE_ORDERED__@@"] ? "OrderedSet" : "Set"
                        )
                      : val["@@__IMMUTABLE_STACK__@@"]
                        ? printImmutableValues(
                            val,
                            config,
                            indentation,
                            depth,
                            refs,
                            printer,
                            "Stack"
                          )
                        : val["@@__IMMUTABLE_SEQ__@@"]
                          ? ((val, config, indentation, depth, refs, printer) => {
                              let name = getImmutableName("Seq");
                              return ++depth > config.maxDepth
                                ? printAsLeaf(name)
                                : val["@@__IMMUTABLE_KEYED__@@"]
                                  ? `${name + " "}{${val._iter || val._object ? (0, _collections.printIteratorEntries)(val.entries(), config, indentation, depth, refs, printer) : "…"}}`
                                  : `${name + " "}[${val._iter || val._array || val._collection || val._iterable ? (0, _collections.printIteratorValues)(val.values(), config, indentation, depth, refs, printer) : "…"}]`;
                            })(val, config, indentation, depth, refs, printer)
                          : ((val, config, indentation, depth, refs, printer) => {
                              let name = getImmutableName(val._name || "Record");
                              return ++depth > config.maxDepth
                                ? printAsLeaf(name)
                                : `${name + " "}{${(0, _collections.printIteratorEntries)(
                                    (function getRecordEntries(val) {
                                      let i = 0;
                                      return {
                                        next() {
                                          if (i < val._keys.length) {
                                            let key = val._keys[i++];
                                            return { done: !1, value: [key, val.get(key)] };
                                          }
                                          return { done: !0, value: void 0 };
                                        },
                                      };
                                    })(val),
                                    config,
                                    indentation,
                                    depth,
                                    refs,
                                    printer
                                  )}}`;
                            })(val, config, indentation, depth, refs, printer);
            exports.serialize = serialize;
            var test = (val) =>
              val &&
              (!0 === val["@@__IMMUTABLE_ITERABLE__@@"] || !0 === val["@@__IMMUTABLE_RECORD__@@"]);
            exports.test = test;
            var _default = { serialize, test };
            exports.default = _default;
          },
        }),
        require_react_is_development = __commonJS({
          "node_modules/react-is/cjs/react-is.development.js"(exports) {
            !(function () {
              var REACT_MODULE_REFERENCE,
                REACT_ELEMENT_TYPE = Symbol.for("react.element"),
                REACT_PORTAL_TYPE = Symbol.for("react.portal"),
                REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
                REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
                REACT_PROFILER_TYPE = Symbol.for("react.profiler"),
                REACT_PROVIDER_TYPE = Symbol.for("react.provider"),
                REACT_CONTEXT_TYPE = Symbol.for("react.context"),
                REACT_SERVER_CONTEXT_TYPE = Symbol.for("react.server_context"),
                REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
                REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
                REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
                REACT_MEMO_TYPE = Symbol.for("react.memo"),
                REACT_LAZY_TYPE = Symbol.for("react.lazy"),
                REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
              function typeOf(object) {
                if ("object" == typeof object && null !== object) {
                  var $$typeof = object.$$typeof;
                  switch ($$typeof) {
                    case REACT_ELEMENT_TYPE:
                      var type = object.type;
                      switch (type) {
                        case REACT_FRAGMENT_TYPE:
                        case REACT_PROFILER_TYPE:
                        case REACT_STRICT_MODE_TYPE:
                        case REACT_SUSPENSE_TYPE:
                        case REACT_SUSPENSE_LIST_TYPE:
                          return type;
                        default:
                          var $$typeofType = type && type.$$typeof;
                          switch ($$typeofType) {
                            case REACT_SERVER_CONTEXT_TYPE:
                            case REACT_CONTEXT_TYPE:
                            case REACT_FORWARD_REF_TYPE:
                            case REACT_LAZY_TYPE:
                            case REACT_MEMO_TYPE:
                            case REACT_PROVIDER_TYPE:
                              return $$typeofType;
                            default:
                              return $$typeof;
                          }
                      }
                    case REACT_PORTAL_TYPE:
                      return $$typeof;
                  }
                }
              }
              REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
              var ContextConsumer = REACT_CONTEXT_TYPE,
                ContextProvider = REACT_PROVIDER_TYPE,
                Element = REACT_ELEMENT_TYPE,
                ForwardRef = REACT_FORWARD_REF_TYPE,
                Fragment = REACT_FRAGMENT_TYPE,
                Lazy = REACT_LAZY_TYPE,
                Memo = REACT_MEMO_TYPE,
                Portal = REACT_PORTAL_TYPE,
                Profiler = REACT_PROFILER_TYPE,
                StrictMode = REACT_STRICT_MODE_TYPE,
                Suspense = REACT_SUSPENSE_TYPE,
                SuspenseList = REACT_SUSPENSE_LIST_TYPE,
                hasWarnedAboutDeprecatedIsAsyncMode = !1,
                hasWarnedAboutDeprecatedIsConcurrentMode = !1;
              (exports.ContextConsumer = ContextConsumer),
                (exports.ContextProvider = ContextProvider),
                (exports.Element = Element),
                (exports.ForwardRef = ForwardRef),
                (exports.Fragment = Fragment),
                (exports.Lazy = Lazy),
                (exports.Memo = Memo),
                (exports.Portal = Portal),
                (exports.Profiler = Profiler),
                (exports.StrictMode = StrictMode),
                (exports.Suspense = Suspense),
                (exports.SuspenseList = SuspenseList),
                (exports.isAsyncMode = function isAsyncMode(object) {
                  return (
                    hasWarnedAboutDeprecatedIsAsyncMode ||
                      ((hasWarnedAboutDeprecatedIsAsyncMode = !0),
                      console.warn(
                        "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+."
                      )),
                    !1
                  );
                }),
                (exports.isConcurrentMode = function isConcurrentMode(object) {
                  return (
                    hasWarnedAboutDeprecatedIsConcurrentMode ||
                      ((hasWarnedAboutDeprecatedIsConcurrentMode = !0),
                      console.warn(
                        "The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+."
                      )),
                    !1
                  );
                }),
                (exports.isContextConsumer = function isContextConsumer(object) {
                  return typeOf(object) === REACT_CONTEXT_TYPE;
                }),
                (exports.isContextProvider = function isContextProvider(object) {
                  return typeOf(object) === REACT_PROVIDER_TYPE;
                }),
                (exports.isElement = function isElement(object) {
                  return (
                    "object" == typeof object &&
                    null !== object &&
                    object.$$typeof === REACT_ELEMENT_TYPE
                  );
                }),
                (exports.isForwardRef = function isForwardRef(object) {
                  return typeOf(object) === REACT_FORWARD_REF_TYPE;
                }),
                (exports.isFragment = function isFragment(object) {
                  return typeOf(object) === REACT_FRAGMENT_TYPE;
                }),
                (exports.isLazy = function isLazy(object) {
                  return typeOf(object) === REACT_LAZY_TYPE;
                }),
                (exports.isMemo = function isMemo(object) {
                  return typeOf(object) === REACT_MEMO_TYPE;
                }),
                (exports.isPortal = function isPortal(object) {
                  return typeOf(object) === REACT_PORTAL_TYPE;
                }),
                (exports.isProfiler = function isProfiler(object) {
                  return typeOf(object) === REACT_PROFILER_TYPE;
                }),
                (exports.isStrictMode = function isStrictMode(object) {
                  return typeOf(object) === REACT_STRICT_MODE_TYPE;
                }),
                (exports.isSuspense = function isSuspense(object) {
                  return typeOf(object) === REACT_SUSPENSE_TYPE;
                }),
                (exports.isSuspenseList = function isSuspenseList(object) {
                  return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
                }),
                (exports.isValidElementType = function isValidElementType(type) {
                  return !(
                    "string" != typeof type &&
                    "function" != typeof type &&
                    type !== REACT_FRAGMENT_TYPE &&
                    type !== REACT_PROFILER_TYPE &&
                    type !== REACT_STRICT_MODE_TYPE &&
                    type !== REACT_SUSPENSE_TYPE &&
                    type !== REACT_SUSPENSE_LIST_TYPE &&
                    type !== REACT_OFFSCREEN_TYPE &&
                    ("object" != typeof type ||
                      null === type ||
                      (type.$$typeof !== REACT_LAZY_TYPE &&
                        type.$$typeof !== REACT_MEMO_TYPE &&
                        type.$$typeof !== REACT_PROVIDER_TYPE &&
                        type.$$typeof !== REACT_CONTEXT_TYPE &&
                        type.$$typeof !== REACT_FORWARD_REF_TYPE &&
                        type.$$typeof !== REACT_MODULE_REFERENCE &&
                        void 0 === type.getModuleId))
                  );
                }),
                (exports.typeOf = typeOf);
            })();
          },
        }),
        require_react_is = __commonJS({
          "node_modules/react-is/index.js"(exports, module) {
            module.exports = require_react_is_development();
          },
        }),
        require_ReactElement = __commonJS({
          "node_modules/pretty-format/build/plugins/ReactElement.js"(exports) {
            Object.defineProperty(exports, "__esModule", { value: !0 }),
              (exports.test = exports.serialize = exports.default = void 0);
            var ReactIs = (function _interopRequireWildcard(obj, nodeInterop) {
                if (!nodeInterop && obj && obj.__esModule) return obj;
                if (null === obj || ("object" != typeof obj && "function" != typeof obj))
                  return { default: obj };
                var cache = _getRequireWildcardCache(nodeInterop);
                if (cache && cache.has(obj)) return cache.get(obj);
                var newObj = {},
                  hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var key in obj)
                  if ("default" !== key && Object.prototype.hasOwnProperty.call(obj, key)) {
                    var desc = hasPropertyDescriptor
                      ? Object.getOwnPropertyDescriptor(obj, key)
                      : null;
                    desc && (desc.get || desc.set)
                      ? Object.defineProperty(newObj, key, desc)
                      : (newObj[key] = obj[key]);
                  }
                return (newObj.default = obj), cache && cache.set(obj, newObj), newObj;
              })(require_react_is()),
              _markup = require_markup();
            function _getRequireWildcardCache(nodeInterop) {
              if ("function" != typeof WeakMap) return null;
              var cacheBabelInterop = new WeakMap(),
                cacheNodeInterop = new WeakMap();
              return (_getRequireWildcardCache = function (nodeInterop2) {
                return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
              })(nodeInterop);
            }
            var getChildren = (arg, children = []) => (
                Array.isArray(arg)
                  ? arg.forEach((item) => {
                      getChildren(item, children);
                    })
                  : null != arg && !1 !== arg && children.push(arg),
                children
              ),
              getType = (element) => {
                let type = element.type;
                if ("string" == typeof type) return type;
                if ("function" == typeof type) return type.displayName || type.name || "Unknown";
                if (ReactIs.isFragment(element)) return "React.Fragment";
                if (ReactIs.isSuspense(element)) return "React.Suspense";
                if ("object" == typeof type && null !== type) {
                  if (ReactIs.isContextProvider(element)) return "Context.Provider";
                  if (ReactIs.isContextConsumer(element)) return "Context.Consumer";
                  if (ReactIs.isForwardRef(element)) {
                    if (type.displayName) return type.displayName;
                    let functionName = type.render.displayName || type.render.name || "";
                    return "" !== functionName ? `ForwardRef(${functionName})` : "ForwardRef";
                  }
                  if (ReactIs.isMemo(element)) {
                    let functionName =
                      type.displayName || type.type.displayName || type.type.name || "";
                    return "" !== functionName ? `Memo(${functionName})` : "Memo";
                  }
                }
                return "UNDEFINED";
              },
              serialize = (element, config, indentation, depth, refs, printer) =>
                ++depth > config.maxDepth
                  ? (0, _markup.printElementAsLeaf)(getType(element), config)
                  : (0, _markup.printElement)(
                      getType(element),
                      (0, _markup.printProps)(
                        ((element) => {
                          let { props } = element;
                          return Object.keys(props)
                            .filter((key) => "children" !== key && void 0 !== props[key])
                            .sort();
                        })(element),
                        element.props,
                        config,
                        indentation + config.indent,
                        depth,
                        refs,
                        printer
                      ),
                      (0, _markup.printChildren)(
                        getChildren(element.props.children),
                        config,
                        indentation + config.indent,
                        depth,
                        refs,
                        printer
                      ),
                      config,
                      indentation
                    );
            exports.serialize = serialize;
            var test = (val) => null != val && ReactIs.isElement(val);
            exports.test = test;
            var _default = { serialize, test };
            exports.default = _default;
          },
        }),
        require_ReactTestComponent = __commonJS({
          "node_modules/pretty-format/build/plugins/ReactTestComponent.js"(exports) {
            Object.defineProperty(exports, "__esModule", { value: !0 }),
              (exports.test = exports.serialize = exports.default = void 0);
            var _markup = require_markup(),
              Symbol2 = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol,
              testSymbol =
                "function" == typeof Symbol2 && Symbol2.for
                  ? Symbol2.for("react.test.json")
                  : 245830487,
              serialize = (object, config, indentation, depth, refs, printer) =>
                ++depth > config.maxDepth
                  ? (0, _markup.printElementAsLeaf)(object.type, config)
                  : (0, _markup.printElement)(
                      object.type,
                      object.props
                        ? (0, _markup.printProps)(
                            ((object) => {
                              let { props } = object;
                              return props
                                ? Object.keys(props)
                                    .filter((key) => void 0 !== props[key])
                                    .sort()
                                : [];
                            })(object),
                            object.props,
                            config,
                            indentation + config.indent,
                            depth,
                            refs,
                            printer
                          )
                        : "",
                      object.children
                        ? (0, _markup.printChildren)(
                            object.children,
                            config,
                            indentation + config.indent,
                            depth,
                            refs,
                            printer
                          )
                        : "",
                      config,
                      indentation
                    );
            exports.serialize = serialize;
            var test = (val) => val && val.$$typeof === testSymbol;
            exports.test = test;
            var _default = { serialize, test };
            exports.default = _default;
          },
        }),
        require_build = __commonJS({
          "node_modules/pretty-format/build/index.js"(exports) {
            Object.defineProperty(exports, "__esModule", { value: !0 }),
              (exports.default = exports.DEFAULT_OPTIONS = void 0),
              (exports.format = format),
              (exports.plugins = void 0);
            var _ansiStyles = _interopRequireDefault(require_ansi_styles()),
              _collections = require_collections(),
              _AsymmetricMatcher = _interopRequireDefault(require_AsymmetricMatcher()),
              _ConvertAnsi = _interopRequireDefault(require_ConvertAnsi()),
              _DOMCollection = _interopRequireDefault(require_DOMCollection()),
              _DOMElement = _interopRequireDefault(require_DOMElement()),
              _Immutable = _interopRequireDefault(require_Immutable()),
              _ReactElement = _interopRequireDefault(require_ReactElement()),
              _ReactTestComponent = _interopRequireDefault(require_ReactTestComponent());
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            var toString = Object.prototype.toString,
              toISOString = Date.prototype.toISOString,
              errorToString = Error.prototype.toString,
              regExpToString = RegExp.prototype.toString,
              getConstructorName = (val) =>
                ("function" == typeof val.constructor && val.constructor.name) || "Object",
              SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/,
              NEWLINE_REGEXP = /\n/gi,
              PrettyFormatPluginError = class extends Error {
                constructor(message, stack) {
                  super(message), (this.stack = stack), (this.name = this.constructor.name);
                }
              };
            function printFunction(val, printFunctionName) {
              return printFunctionName ? `[Function ${val.name || "anonymous"}]` : "[Function]";
            }
            function printSymbol(val) {
              return String(val).replace(SYMBOL_REGEXP, "Symbol($1)");
            }
            function printError(val) {
              return `[${errorToString.call(val)}]`;
            }
            function printBasicValue(val, printFunctionName, escapeRegex, escapeString) {
              if (!0 === val || !1 === val) return `${val}`;
              if (void 0 === val) return "undefined";
              if (null === val) return "null";
              let typeOf = typeof val;
              if ("number" === typeOf)
                return (function printNumber(val) {
                  return Object.is(val, -0) ? "-0" : String(val);
                })(val);
              if ("bigint" === typeOf)
                return (function printBigInt(val) {
                  return `${val}n`;
                })(val);
              if ("string" === typeOf)
                return escapeString ? `"${val.replace(/"|\\/g, "\\$&")}"` : `"${val}"`;
              if ("function" === typeOf) return printFunction(val, printFunctionName);
              if ("symbol" === typeOf) return printSymbol(val);
              let toStringed = toString.call(val);
              return "[object WeakMap]" === toStringed
                ? "WeakMap {}"
                : "[object WeakSet]" === toStringed
                  ? "WeakSet {}"
                  : "[object Function]" === toStringed ||
                      "[object GeneratorFunction]" === toStringed
                    ? printFunction(val, printFunctionName)
                    : "[object Symbol]" === toStringed
                      ? printSymbol(val)
                      : "[object Date]" === toStringed
                        ? isNaN(+val)
                          ? "Date { NaN }"
                          : toISOString.call(val)
                        : "[object Error]" === toStringed
                          ? printError(val)
                          : "[object RegExp]" === toStringed
                            ? escapeRegex
                              ? regExpToString.call(val).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&")
                              : regExpToString.call(val)
                            : val instanceof Error
                              ? printError(val)
                              : null;
            }
            function printComplexValue(val, config, indentation, depth, refs, hasCalledToJSON) {
              if (-1 !== refs.indexOf(val)) return "[Circular]";
              (refs = refs.slice()).push(val);
              let hitMaxDepth = ++depth > config.maxDepth,
                min = config.min;
              if (
                config.callToJSON &&
                !hitMaxDepth &&
                val.toJSON &&
                "function" == typeof val.toJSON &&
                !hasCalledToJSON
              )
                return printer(val.toJSON(), config, indentation, depth, refs, !0);
              let toStringed = toString.call(val);
              return "[object Arguments]" === toStringed
                ? hitMaxDepth
                  ? "[Arguments]"
                  : `${min ? "" : "Arguments "}[${(0, _collections.printListItems)(val, config, indentation, depth, refs, printer)}]`
                : (function isToStringedArrayType(toStringed) {
                      return (
                        "[object Array]" === toStringed ||
                        "[object ArrayBuffer]" === toStringed ||
                        "[object DataView]" === toStringed ||
                        "[object Float32Array]" === toStringed ||
                        "[object Float64Array]" === toStringed ||
                        "[object Int8Array]" === toStringed ||
                        "[object Int16Array]" === toStringed ||
                        "[object Int32Array]" === toStringed ||
                        "[object Uint8Array]" === toStringed ||
                        "[object Uint8ClampedArray]" === toStringed ||
                        "[object Uint16Array]" === toStringed ||
                        "[object Uint32Array]" === toStringed
                      );
                    })(toStringed)
                  ? hitMaxDepth
                    ? `[${val.constructor.name}]`
                    : `${min || (!config.printBasicPrototype && "Array" === val.constructor.name) ? "" : `${val.constructor.name} `}[${(0, _collections.printListItems)(val, config, indentation, depth, refs, printer)}]`
                  : "[object Map]" === toStringed
                    ? hitMaxDepth
                      ? "[Map]"
                      : `Map {${(0, _collections.printIteratorEntries)(val.entries(), config, indentation, depth, refs, printer, " => ")}}`
                    : "[object Set]" === toStringed
                      ? hitMaxDepth
                        ? "[Set]"
                        : `Set {${(0, _collections.printIteratorValues)(val.values(), config, indentation, depth, refs, printer)}}`
                      : hitMaxDepth || ((val) => typeof window < "u" && val === window)(val)
                        ? `[${getConstructorName(val)}]`
                        : `${min || (!config.printBasicPrototype && "Object" === getConstructorName(val)) ? "" : `${getConstructorName(val)} `}{${(0, _collections.printObjectProperties)(val, config, indentation, depth, refs, printer)}}`;
            }
            function printPlugin(plugin, val, config, indentation, depth, refs) {
              let printed;
              try {
                printed = (function isNewPlugin(plugin) {
                  return null != plugin.serialize;
                })(plugin)
                  ? plugin.serialize(val, config, indentation, depth, refs, printer)
                  : plugin.print(
                      val,
                      (valChild) => printer(valChild, config, indentation, depth, refs),
                      (str) => {
                        let indentationNext = indentation + config.indent;
                        return (
                          indentationNext + str.replace(NEWLINE_REGEXP, `\n${indentationNext}`)
                        );
                      },
                      {
                        edgeSpacing: config.spacingOuter,
                        min: config.min,
                        spacing: config.spacingInner,
                      },
                      config.colors
                    );
              } catch (error) {
                throw new PrettyFormatPluginError(error.message, error.stack);
              }
              if ("string" != typeof printed)
                throw new Error(
                  `pretty-format: Plugin must return type "string" but instead returned "${typeof printed}".`
                );
              return printed;
            }
            function findPlugin(plugins2, val) {
              for (let p = 0; p < plugins2.length; p++)
                try {
                  if (plugins2[p].test(val)) return plugins2[p];
                } catch (error) {
                  throw new PrettyFormatPluginError(error.message, error.stack);
                }
              return null;
            }
            function printer(val, config, indentation, depth, refs, hasCalledToJSON) {
              let plugin = findPlugin(config.plugins, val);
              if (null !== plugin)
                return printPlugin(plugin, val, config, indentation, depth, refs);
              let basicResult = printBasicValue(
                val,
                config.printFunctionName,
                config.escapeRegex,
                config.escapeString
              );
              return null !== basicResult
                ? basicResult
                : printComplexValue(val, config, indentation, depth, refs, hasCalledToJSON);
            }
            var DEFAULT_THEME = {
                comment: "gray",
                content: "reset",
                prop: "yellow",
                tag: "cyan",
                value: "green",
              },
              DEFAULT_THEME_KEYS = Object.keys(DEFAULT_THEME),
              DEFAULT_OPTIONS = {
                callToJSON: !0,
                compareKeys: void 0,
                escapeRegex: !1,
                escapeString: !0,
                highlight: !1,
                indent: 2,
                maxDepth: 1 / 0,
                maxWidth: 1 / 0,
                min: !1,
                plugins: [],
                printBasicPrototype: !0,
                printFunctionName: !0,
                theme: DEFAULT_THEME,
              };
            exports.DEFAULT_OPTIONS = DEFAULT_OPTIONS;
            var getColorsHighlight = (options) =>
                DEFAULT_THEME_KEYS.reduce((colors, key) => {
                  let value =
                      options.theme && void 0 !== options.theme[key]
                        ? options.theme[key]
                        : DEFAULT_THEME[key],
                    color = value && _ansiStyles.default[value];
                  if (!color || "string" != typeof color.close || "string" != typeof color.open)
                    throw new Error(
                      `pretty-format: Option "theme" has a key "${key}" whose value "${value}" is undefined in ansi-styles.`
                    );
                  return (colors[key] = color), colors;
                }, Object.create(null)),
              getPrintFunctionName = (options) => {
                var _options$printFunctio;
                return null !== (_options$printFunctio = options?.printFunctionName) &&
                  void 0 !== _options$printFunctio
                  ? _options$printFunctio
                  : DEFAULT_OPTIONS.printFunctionName;
              },
              getEscapeRegex = (options) => {
                var _options$escapeRegex;
                return null !== (_options$escapeRegex = options?.escapeRegex) &&
                  void 0 !== _options$escapeRegex
                  ? _options$escapeRegex
                  : DEFAULT_OPTIONS.escapeRegex;
              },
              getEscapeString = (options) => {
                var _options$escapeString;
                return null !== (_options$escapeString = options?.escapeString) &&
                  void 0 !== _options$escapeString
                  ? _options$escapeString
                  : DEFAULT_OPTIONS.escapeString;
              },
              getConfig = (options) => {
                var _options$callToJSON,
                  _options$indent,
                  _options$maxDepth,
                  _options$maxWidth,
                  _options$min,
                  _options$plugins,
                  _options$printBasicPr,
                  indent;
                return {
                  callToJSON:
                    null !== (_options$callToJSON = options?.callToJSON) &&
                    void 0 !== _options$callToJSON
                      ? _options$callToJSON
                      : DEFAULT_OPTIONS.callToJSON,
                  colors:
                    null != options && options.highlight
                      ? getColorsHighlight(options)
                      : DEFAULT_THEME_KEYS.reduce(
                          (colors, key) => ((colors[key] = { close: "", open: "" }), colors),
                          Object.create(null)
                        ),
                  compareKeys:
                    "function" == typeof options?.compareKeys
                      ? options.compareKeys
                      : DEFAULT_OPTIONS.compareKeys,
                  escapeRegex: getEscapeRegex(options),
                  escapeString: getEscapeString(options),
                  indent:
                    null != options && options.min
                      ? ""
                      : ((indent =
                          null !== (_options$indent = options?.indent) && void 0 !== _options$indent
                            ? _options$indent
                            : DEFAULT_OPTIONS.indent),
                        new Array(indent + 1).join(" ")),
                  maxDepth:
                    null !== (_options$maxDepth = options?.maxDepth) && void 0 !== _options$maxDepth
                      ? _options$maxDepth
                      : DEFAULT_OPTIONS.maxDepth,
                  maxWidth:
                    null !== (_options$maxWidth = options?.maxWidth) && void 0 !== _options$maxWidth
                      ? _options$maxWidth
                      : DEFAULT_OPTIONS.maxWidth,
                  min:
                    null !== (_options$min = options?.min) && void 0 !== _options$min
                      ? _options$min
                      : DEFAULT_OPTIONS.min,
                  plugins:
                    null !== (_options$plugins = options?.plugins) && void 0 !== _options$plugins
                      ? _options$plugins
                      : DEFAULT_OPTIONS.plugins,
                  printBasicPrototype:
                    null === (_options$printBasicPr = options?.printBasicPrototype) ||
                    void 0 === _options$printBasicPr ||
                    _options$printBasicPr,
                  printFunctionName: getPrintFunctionName(options),
                  spacingInner: null != options && options.min ? " " : "\n",
                  spacingOuter: null != options && options.min ? "" : "\n",
                };
              };
            function format(val, options) {
              if (
                options &&
                ((function validateOptions(options) {
                  if (
                    (Object.keys(options).forEach((key) => {
                      if (!Object.prototype.hasOwnProperty.call(DEFAULT_OPTIONS, key))
                        throw new Error(`pretty-format: Unknown option "${key}".`);
                    }),
                    options.min && void 0 !== options.indent && 0 !== options.indent)
                  )
                    throw new Error(
                      'pretty-format: Options "min" and "indent" cannot be used together.'
                    );
                  if (void 0 !== options.theme) {
                    if (null === options.theme)
                      throw new Error('pretty-format: Option "theme" must not be null.');
                    if ("object" != typeof options.theme)
                      throw new Error(
                        `pretty-format: Option "theme" must be of type "object" but instead received "${typeof options.theme}".`
                      );
                  }
                })(options),
                options.plugins)
              ) {
                let plugin = findPlugin(options.plugins, val);
                if (null !== plugin) return printPlugin(plugin, val, getConfig(options), "", 0, []);
              }
              let basicResult = printBasicValue(
                val,
                getPrintFunctionName(options),
                getEscapeRegex(options),
                getEscapeString(options)
              );
              return null !== basicResult
                ? basicResult
                : printComplexValue(val, getConfig(options), "", 0, []);
            }
            var plugins = {
              AsymmetricMatcher: _AsymmetricMatcher.default,
              ConvertAnsi: _ConvertAnsi.default,
              DOMCollection: _DOMCollection.default,
              DOMElement: _DOMElement.default,
              Immutable: _Immutable.default,
              ReactElement: _ReactElement.default,
              ReactTestComponent: _ReactTestComponent.default,
            };
            exports.plugins = plugins;
            var _default = format;
            exports.default = _default;
          },
        }),
        import_pretty_format =
          ((mod = require_build()),
          (isNodeMode = 1),
          (target = null != mod ? __create(__getProtoOf(mod)) : {}),
          ((to, from, except, desc) => {
            if ((from && "object" == typeof from) || "function" == typeof from)
              for (let key of __getOwnPropNames(from))
                !__hasOwnProp.call(to, key) &&
                  key !== except &&
                  __defProp(to, key, {
                    get: () => from[key],
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
                  });
            return to;
          })(
            !isNodeMode && mod && mod.__esModule
              ? target
              : __defProp(target, "default", { value: mod, enumerable: !0 }),
            mod
          )),
        {
          AsymmetricMatcher,
          DOMCollection,
          DOMElement,
          Immutable,
          ReactElement,
          ReactTestComponent,
        } = import_pretty_format.plugins,
        PLUGINS = [
          ReactTestComponent,
          ReactElement,
          DOMElement,
          DOMCollection,
          Immutable,
          AsymmetricMatcher,
        ],
        DIM_COLOR = source_default.dim,
        EXPECTED_COLOR = source_default.green,
        RECEIVED_COLOR = source_default.red,
        SPACE_SYMBOL = "·";
      function stringify(object, maxDepth = 10, maxWidth = 10) {
        let result;
        try {
          result = (0, import_pretty_format.format)(object, {
            maxDepth,
            maxWidth,
            min: !0,
            plugins: PLUGINS,
          });
        } catch {
          result = (0, import_pretty_format.format)(object, {
            callToJSON: !1,
            maxDepth,
            maxWidth,
            min: !0,
            plugins: PLUGINS,
          });
        }
        return result.length >= 1e4 && maxDepth > 1
          ? stringify(object, Math.floor(maxDepth / 2), maxWidth)
          : result.length >= 1e4 && maxWidth > 1
            ? stringify(object, maxDepth, Math.floor(maxWidth / 2))
            : result;
      }
      function printReceived(object) {
        return RECEIVED_COLOR(
          (function replaceTrailingSpaces(text) {
            return text.replace(/\s+$/gm, (spaces) => SPACE_SYMBOL.repeat(spaces.length));
          })(stringify(object))
        );
      }
      function toHaveNoViolations(results) {
        if (typeof results.violations > "u")
          throw new Error("No violations found in aXe results object");
        let violations = (function filterViolations(violations, impactLevels) {
          return impactLevels && impactLevels.length > 0
            ? violations.filter((v) => impactLevels.includes(v.impact))
            : violations;
        })(results.violations, results.toolOptions ? results.toolOptions.impactLevels : []);
        let formatedViolations = (function reporter(violations2) {
            return 0 === violations2.length
              ? []
              : violations2
                  .map((violation) =>
                    violation.nodes
                      .map(
                        (node) =>
                          `Expected the HTML found at $('${node.target.join(", ")}') to have no violations:\n\n` +
                          source_default.grey(node.html) +
                          "\n\nReceived:\n\n" +
                          printReceived(`${violation.help} (${violation.id})`) +
                          "\n\n" +
                          source_default.yellow(node.failureSummary) +
                          "\n\n" +
                          (violation.helpUrl
                            ? `You can find more information on this issue here: \n${source_default.blue(violation.helpUrl)}`
                            : "")
                      )
                      .join("\n\n")
                  )
                  .join("\n\n────────\n\n");
          })(violations),
          pass = 0 === formatedViolations.length;
        return {
          actual: violations,
          message: function message() {
            if (!pass)
              return (
                (function matcherHint(
                  matcherName,
                  received = "received",
                  expected = "expected",
                  options = {}
                ) {
                  let {
                      comment = "",
                      expectedColor = EXPECTED_COLOR,
                      isDirectExpectCall = !1,
                      isNot = !1,
                      promise = "",
                      receivedColor = RECEIVED_COLOR,
                      secondArgument = "",
                      secondArgumentColor = EXPECTED_COLOR,
                    } = options,
                    hint = "",
                    dimString = "expect";
                  return (
                    !isDirectExpectCall &&
                      "" !== received &&
                      ((hint += DIM_COLOR(`${dimString}(`) + receivedColor(received)),
                      (dimString = ")")),
                    "" !== promise &&
                      ((hint += DIM_COLOR(`${dimString}.`) + promise), (dimString = "")),
                    isNot && ((hint += `${DIM_COLOR(`${dimString}.`)}not`), (dimString = "")),
                    matcherName.includes(".")
                      ? (dimString += matcherName)
                      : ((hint += DIM_COLOR(`${dimString}.`) + matcherName), (dimString = "")),
                    "" === expected
                      ? (dimString += "()")
                      : ((hint += DIM_COLOR(`${dimString}(`) + expectedColor(expected)),
                        secondArgument &&
                          (hint += DIM_COLOR(", ") + secondArgumentColor(secondArgument)),
                        (dimString = ")")),
                    "" !== comment && (dimString += ` // ${comment}`),
                    "" !== dimString && (hint += DIM_COLOR(dimString)),
                    hint
                  );
                })(".toHaveNoViolations") + `\n\n${formatedViolations}`
              );
          },
          pass,
        };
      }
    },
  },
]);
