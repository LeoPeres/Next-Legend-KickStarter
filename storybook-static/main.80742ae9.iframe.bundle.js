(self.webpackChunknext_legend_kickstarter = self.webpackChunknext_legend_kickstarter || []).push([
  [179],
  {
    "./node_modules/@storybook/instrumenter/dist sync recursive": (module) => {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'");
        throw ((e.code = "MODULE_NOT_FOUND"), e);
      }
      (webpackEmptyContext.keys = () => []),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (webpackEmptyContext.id = "./node_modules/@storybook/instrumenter/dist sync recursive"),
        (module.exports = webpackEmptyContext);
    },
    "./node_modules/@storybook/nextjs/dist sync recursive": (module) => {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'");
        throw ((e.code = "MODULE_NOT_FOUND"), e);
      }
      (webpackEmptyContext.keys = () => []),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (webpackEmptyContext.id = "./node_modules/@storybook/nextjs/dist sync recursive"),
        (module.exports = webpackEmptyContext);
    },
    "./storybook-config-entry.js": (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      var external_STORYBOOK_MODULE_CHANNELS_ = __webpack_require__("storybook/internal/channels"),
        csf = __webpack_require__("./node_modules/@storybook/core/dist/csf/index.js"),
        external_STORYBOOK_MODULE_PREVIEW_API_ = __webpack_require__(
          "storybook/internal/preview-api"
        ),
        external_STORYBOOK_MODULE_GLOBAL_ = __webpack_require__("@storybook/global");
      const importers = [
        async (path) => {
          if (!/^\.[\\/](?:src\/stories\/Introduction\.mdx)$/.exec(path)) return;
          const pathRemainder = path.substring(14);
          return __webpack_require__(
            "./src/stories lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src\\/stories\\/Introduction\\.mdx)$"
          )("./" + pathRemainder);
        },
        async (path) => {
          if (
            !/^\.[\\/](?:src\/stories\/ui(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.mdx)$/.exec(
              path
            )
          )
            return;
          const pathRemainder = path.substring(17);
          return __webpack_require__(
            "./src/stories/ui lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src\\/stories\\/ui(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$"
          )("./" + pathRemainder);
        },
        async (path) => {
          if (
            !/^\.[\\/](?:src\/stories\/ui(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|mjs|ts|tsx))$/.exec(
              path
            )
          )
            return;
          const pathRemainder = path.substring(17);
          return __webpack_require__(
            "./src/stories/ui lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src\\/stories\\/ui(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$"
          )("./" + pathRemainder);
        },
        async (path) => {
          if (
            !/^\.[\\/](?:src\/stories\/composition(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.mdx)$/.exec(
              path
            )
          )
            return;
          const pathRemainder = path.substring(26);
          return __webpack_require__(
            "./src/stories/composition lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src\\/stories\\/composition(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$"
          )("./" + pathRemainder);
        },
        async (path) => {
          if (
            !/^\.[\\/](?:src\/stories\/composition(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|mjs|ts|tsx))$/.exec(
              path
            )
          )
            return;
          const pathRemainder = path.substring(26);
          return __webpack_require__(
            "./src/stories/composition lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src\\/stories\\/composition(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$"
          )("./" + pathRemainder);
        },
        async (path) => {
          if (
            !/^\.[\\/](?:src\/stories\/docs(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.mdx)$/.exec(
              path
            )
          )
            return;
          const pathRemainder = path.substring(19);
          return __webpack_require__(
            "./src/stories/docs lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src\\/stories\\/docs(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$"
          )("./" + pathRemainder);
        },
      ];
      const channel = (0, external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({
        page: "preview",
      });
      external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),
        "DEVELOPMENT" === external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE &&
          (window.__STORYBOOK_SERVER_CHANNEL__ = channel);
      const preview = new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb(
        async function importFn(path) {
          for (let i = 0; i < importers.length; i++) {
            const moduleExports = await ((x = () => importers[i](path)), x());
            if (moduleExports) return moduleExports;
          }
          var x;
        },
        () => {
          const previewAnnotations = [
              __webpack_require__("./node_modules/@storybook/react/dist/entry-preview.mjs"),
              __webpack_require__("./node_modules/@storybook/react/dist/entry-preview-docs.mjs"),
              __webpack_require__("./node_modules/@storybook/nextjs/dist/preview.mjs"),
              __webpack_require__(
                "./node_modules/@storybook/addon-essentials/dist/actions/preview.mjs"
              ),
              __webpack_require__(
                "./node_modules/@storybook/addon-essentials/dist/docs/preview.mjs"
              ),
              __webpack_require__(
                "./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs"
              ),
              __webpack_require__(
                "./node_modules/@storybook/addon-essentials/dist/viewport/preview.mjs"
              ),
              __webpack_require__(
                "./node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"
              ),
              __webpack_require__(
                "./node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"
              ),
              __webpack_require__(
                "./node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"
              ),
              __webpack_require__(
                "./node_modules/@storybook/experimental-addon-test/dist/preview.mjs"
              ),
              __webpack_require__("./node_modules/@storybook/addon-a11y/dist/preview.mjs"),
              __webpack_require__("./.storybook/preview.ts"),
            ],
            userPreview = previewAnnotations[previewAnnotations.length - 1]?.default;
          return (0, csf.JF)(userPreview)
            ? userPreview.composed
            : (0, external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)(previewAnnotations);
        }
      );
      (window.__STORYBOOK_PREVIEW__ = preview),
        (window.__STORYBOOK_STORY_STORE__ = preview.storyStore),
        (window.__STORYBOOK_ADDONS_CHANNEL__ = channel);
    },
    "./node_modules/@storybook/test/dist sync recursive": (module) => {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'");
        throw ((e.code = "MODULE_NOT_FOUND"), e);
      }
      (webpackEmptyContext.keys = () => []),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (webpackEmptyContext.id = "./node_modules/@storybook/test/dist sync recursive"),
        (module.exports = webpackEmptyContext);
    },
    "./.storybook/preview.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, { default: () => _storybook_preview });
      var injectStylesIntoStyleTag = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(injectStylesIntoStyleTag),
        styleDomAPI = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/insertBySelector.js"
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes
        ),
        insertStyleElement = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        globals = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/app/globals.css"
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default());
      injectStylesIntoStyleTag_default()(globals.Z, options);
      globals.Z && globals.Z.locals && globals.Z.locals;
      const _storybook_preview = {
        parameters: {
          actions: { argTypesRegex: "^on[A-Z].*" },
          controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
          docs: { source: { state: "open" } },
          a11y: { element: "#storybook-root", manual: !1 },
        },
      };
    },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/app/globals.css":
      (module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
            ),
          _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_postcss_loader_dist_cjs_js_styles_global_styles_css__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/styles/global-styles.css"
            ),
          ___CSS_LOADER_EXPORT___ =
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
            );
        ___CSS_LOADER_EXPORT___.i(
          _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_postcss_loader_dist_cjs_js_styles_global_styles_css__WEBPACK_IMPORTED_MODULE_2__.Z
        ),
          ___CSS_LOADER_EXPORT___.push([
            module.id,
            '*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}/*\n! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n5. Use the user\'s configured `sans` font-feature-settings by default.\n6. Use the user\'s configured `sans` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  tab-size: 4; /* 3 */\n  font-family: var(--font-sans), system-ui, sans-serif; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font-family by default.\n2. Use the user\'s configured `mono` font-feature-settings by default.\n3. Use the user\'s configured `mono` font-variation-settings by default.\n4. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: var(--font-mono), monospace; /* 1 */\n  font-feature-settings: normal; /* 2 */\n  font-variation-settings: normal; /* 3 */\n  font-size: 1em; /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  letter-spacing: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\ninput:where([type=\'button\']),\ninput:where([type=\'reset\']),\ninput:where([type=\'submit\']) {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden]:where(:not([hidden="until-found"])) {\n  display: none;\n}\n  :root {\n    --background: 0 0% 100%;\n    --foreground: 0 0% 3.9%;\n    --card: 0 0% 100%;\n    --card-foreground: 0 0% 3.9%;\n    --popover: 0 0% 100%;\n    --popover-foreground: 0 0% 3.9%;\n\n    /* Primary color: Blue */\n    --primary: 221 83% 53%;\n    --primary-foreground: 0 0% 98%;\n    --primary-50: 214 100% 97%;\n    --primary-100: 214 95% 93%;\n    --primary-200: 213 97% 87%;\n    --primary-300: 212 96% 78%;\n    --primary-400: 213 94% 68%;\n    --primary-500: 217 91% 60%;\n    --primary-600: 221 83% 53%;\n    --primary-700: 224 76% 48%;\n    --primary-800: 226 71% 40%;\n    --primary-900: 224 64% 33%;\n    --primary-950: 226 57% 21%;\n\n    /* Secondary color: Gray */\n    --secondary: 220 14% 96%;\n    --secondary-foreground: 222 47% 11%;\n    --secondary-50: 210 20% 98%;\n    --secondary-100: 220 14% 96%;\n    --secondary-200: 220 13% 91%;\n    --secondary-300: 216 12% 84%;\n    --secondary-400: 218 11% 65%;\n    --secondary-500: 220 9% 46%;\n    --secondary-600: 215 14% 34%;\n    --secondary-700: 217 19% 27%;\n    --secondary-800: 215 28% 17%;\n    --secondary-900: 221 39% 11%;\n    --secondary-950: 224 71% 4%;\n\n    --muted: 220 14% 96%;\n    --muted-foreground: 220 9% 46%;\n    --accent: 210 40% 96%;\n    --accent-foreground: 222 47% 11%;\n    --destructive: 0 84% 60%;\n    --destructive-foreground: 0 0% 98%;\n    --border: 220 13% 91%;\n    --input: 220 13% 91%;\n    --ring: 221 83% 53%;\n\n    --chart-1: 12 76% 61%;\n    --chart-2: 173 58% 39%;\n    --chart-3: 197 37% 24%;\n    --chart-4: 43 74% 66%;\n    --chart-5: 27 87% 67%;\n\n    --radius: 0.5rem;\n\n    /* Typography */\n    --font-sans:\n      "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",\n      Arial, sans-serif;\n    --font-heading:\n      "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",\n      Arial, sans-serif;\n    --font-mono:\n      "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",\n      "Courier New", monospace;\n  }\n\n  .dark {\n    --background: 224 71% 4%;\n    --foreground: 0 0% 98%;\n    --card: 224 71% 4%;\n    --card-foreground: 0 0% 98%;\n    --popover: 224 71% 4%;\n    --popover-foreground: 0 0% 98%;\n\n    /* Primary color: Blue (dark mode) */\n    --primary: 217 91% 60%;\n    --primary-foreground: 0 0% 98%;\n    --primary-50: 226 57% 21%;\n    --primary-100: 224 64% 33%;\n    --primary-200: 226 71% 40%;\n    --primary-300: 224 76% 48%;\n    --primary-400: 221 83% 53%;\n    --primary-500: 217 91% 60%;\n    --primary-600: 213 94% 68%;\n    --primary-700: 212 96% 78%;\n    --primary-800: 213 97% 87%;\n    --primary-900: 214 95% 93%;\n    --primary-950: 214 100% 97%;\n\n    /* Secondary color: Gray (dark mode) */\n    --secondary: 215 28% 17%;\n    --secondary-foreground: 210 20% 98%;\n    --secondary-50: 224 71% 4%;\n    --secondary-100: 221 39% 11%;\n    --secondary-200: 215 28% 17%;\n    --secondary-300: 217 19% 27%;\n    --secondary-400: 215 14% 34%;\n    --secondary-500: 220 9% 46%;\n    --secondary-600: 218 11% 65%;\n    --secondary-700: 216 12% 84%;\n    --secondary-800: 220 13% 91%;\n    --secondary-900: 220 14% 96%;\n    --secondary-950: 210 20% 98%;\n\n    --muted: 215 28% 17%;\n    --muted-foreground: 218 11% 65%;\n    --accent: 217 19% 27%;\n    --accent-foreground: 210 20% 98%;\n    --destructive: 0 62% 30%;\n    --destructive-foreground: 0 0% 98%;\n    --border: 217 19% 27%;\n    --input: 217 19% 27%;\n    --ring: 224 76% 48%;\n\n    --chart-1: 220 70% 50%;\n    --chart-2: 160 60% 45%;\n    --chart-3: 30 80% 55%;\n    --chart-4: 280 65% 60%;\n    --chart-5: 340 75% 55%;\n  }\n  * {\n  border-color: hsl(var(--border));\n  outline-color: hsl(var(--ring) / 0.5);\n}\n  body {\n  background-color: hsl(var(--background));\n  color: hsl(var(--foreground));\n    font-feature-settings:\n      "rlig" 1,\n      "calt" 1;\n}\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n  font-family: var(--font-heading), var(--font-sans), system-ui, sans-serif;\n  font-weight: 600;\n  letter-spacing: -0.025em;\n}\n  h1 {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n  @media (min-width: 1024px) {\n\n  h1 {\n    font-size: 3rem;\n    line-height: 1;\n  }\n}\n  h2 {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n  @media (min-width: 1024px) {\n\n  h2 {\n    font-size: 2.25rem;\n    line-height: 2.5rem;\n  }\n}\n  h3 {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n  @media (min-width: 1024px) {\n\n  h3 {\n    font-size: 1.875rem;\n    line-height: 2.25rem;\n  }\n}\n  h4 {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n  @media (min-width: 1024px) {\n\n  h4 {\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n}\n  h5 {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n  @media (min-width: 1024px) {\n\n  h5 {\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n}\n  h6 {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n  @media (min-width: 1024px) {\n\n  h6 {\n    font-size: 1.125rem;\n    line-height: 1.75rem;\n  }\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 480px) {\n\n  .container {\n    max-width: 480px;\n  }\n}\n@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n.fixed {\n  position: fixed;\n}\n.absolute {\n  position: absolute;\n}\n.sticky {\n  position: sticky;\n}\n.inset-0 {\n  inset: 0px;\n}\n.bottom-4 {\n  bottom: 1rem;\n}\n.left-\\[50\\%\\] {\n  left: 50%;\n}\n.right-4 {\n  right: 1rem;\n}\n.top-0 {\n  top: 0px;\n}\n.top-4 {\n  top: 1rem;\n}\n.top-\\[50\\%\\] {\n  top: 50%;\n}\n.z-50 {\n  z-index: 50;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.mb-1 {\n  margin-bottom: 0.25rem;\n}\n.mb-12 {\n  margin-bottom: 3rem;\n}\n.mb-4 {\n  margin-bottom: 1rem;\n}\n.mb-8 {\n  margin-bottom: 2rem;\n}\n.ml-1 {\n  margin-left: 0.25rem;\n}\n.mt-1 {\n  margin-top: 0.25rem;\n}\n.mt-3 {\n  margin-top: 0.75rem;\n}\n.mt-4 {\n  margin-top: 1rem;\n}\n.mt-8 {\n  margin-top: 2rem;\n}\n.inline-block {\n  display: inline-block;\n}\n.flex {\n  display: flex;\n}\n.inline-flex {\n  display: inline-flex;\n}\n.grid {\n  display: grid;\n}\n.hidden {\n  display: none;\n}\n.h-10 {\n  height: 2.5rem;\n}\n.h-11 {\n  height: 2.75rem;\n}\n.h-16 {\n  height: 4rem;\n}\n.h-4 {\n  height: 1rem;\n}\n.h-5 {\n  height: 1.25rem;\n}\n.h-6 {\n  height: 1.5rem;\n}\n.h-8 {\n  height: 2rem;\n}\n.h-9 {\n  height: 2.25rem;\n}\n.min-h-screen {\n  min-height: 100vh;\n}\n.w-4 {\n  width: 1rem;\n}\n.w-5 {\n  width: 1.25rem;\n}\n.w-6 {\n  width: 1.5rem;\n}\n.w-8 {\n  width: 2rem;\n}\n.w-full {\n  width: 100%;\n}\n.max-w-\\[600px\\] {\n  max-width: 600px;\n}\n.max-w-\\[700px\\] {\n  max-width: 700px;\n}\n.max-w-lg {\n  max-width: 32rem;\n}\n.max-w-md {\n  max-width: 28rem;\n}\n.flex-1 {\n  flex: 1 1 0%;\n}\n.translate-x-\\[-50\\%\\] {\n  --tw-translate-x: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.translate-y-\\[-50\\%\\] {\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n@keyframes spin {\n\n  to {\n    transform: rotate(360deg);\n  }\n}\n.animate-spin {\n  animation: spin 1s linear infinite;\n}\n.list-disc {\n  list-style-type: disc;\n}\n.grid-cols-1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n.flex-col {\n  flex-direction: column;\n}\n.flex-col-reverse {\n  flex-direction: column-reverse;\n}\n.items-start {\n  align-items: flex-start;\n}\n.items-center {\n  align-items: center;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.gap-16 {\n  gap: 4rem;\n}\n.gap-2 {\n  gap: 0.5rem;\n}\n.gap-4 {\n  gap: 1rem;\n}\n.gap-6 {\n  gap: 1.5rem;\n}\n.gap-8 {\n  gap: 2rem;\n}\n.space-y-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));\n}\n.space-y-1\\.5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.375rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.375rem * var(--tw-space-y-reverse));\n}\n.space-y-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));\n}\n.space-y-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1rem * var(--tw-space-y-reverse));\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.rounded-lg {\n  border-radius: var(--radius);\n}\n.rounded-md {\n  border-radius: calc(var(--radius) - 2px);\n}\n.rounded-sm {\n  border-radius: calc(var(--radius) - 4px);\n}\n.border-2 {\n  border-width: 2px;\n}\n.border-b {\n  border-bottom-width: 1px;\n}\n.border-t {\n  border-top-width: 1px;\n}\n.border-solid {\n  border-style: solid;\n}\n.border-border {\n  border-color: hsl(var(--border));\n}\n.border-current {\n  border-color: currentColor;\n}\n.border-r-transparent {\n  border-right-color: transparent;\n}\n.bg-background {\n  background-color: hsl(var(--background));\n}\n.bg-background\\/95 {\n  background-color: hsl(var(--background) / 0.95);\n}\n.bg-black\\/80 {\n  background-color: rgb(0 0 0 / 0.8);\n}\n.bg-destructive {\n  background-color: hsl(var(--destructive));\n}\n.bg-muted {\n  background-color: hsl(var(--muted));\n}\n.p-4 {\n  padding: 1rem;\n}\n.p-6 {\n  padding: 1.5rem;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.px-8 {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n.py-16 {\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.py-8 {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\n.pl-5 {\n  padding-left: 1.25rem;\n}\n.pt-0 {\n  padding-top: 0px;\n}\n.pt-8 {\n  padding-top: 2rem;\n}\n.text-center {\n  text-align: center;\n}\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-medium {\n  font-weight: 500;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.leading-none {\n  line-height: 1;\n}\n.tracking-tight {\n  letter-spacing: -0.025em;\n}\n.text-destructive {\n  color: hsl(var(--destructive));\n}\n.text-destructive-foreground {\n  color: hsl(var(--destructive-foreground));\n}\n.text-muted-foreground {\n  color: hsl(var(--muted-foreground));\n}\n.text-primary {\n  color: hsl(var(--primary));\n}\n.underline {\n  text-decoration-line: underline;\n}\n.antialiased {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.opacity-70 {\n  opacity: 0.7;\n}\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-sm {\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.outline {\n  outline-style: solid;\n}\n.ring-offset-background {\n  --tw-ring-offset-color: hsl(var(--background));\n}\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.backdrop-blur {\n  --tw-backdrop-blur: blur(8px);\n  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n.transition-colors {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-opacity {\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.duration-200 {\n  transition-duration: 200ms;\n}\n@keyframes enter {\n\n  from {\n    opacity: var(--tw-enter-opacity, 1);\n    transform: translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0));\n  }\n}\n@keyframes exit {\n\n  to {\n    opacity: var(--tw-exit-opacity, 1);\n    transform: translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0));\n  }\n}\n.duration-200 {\n  animation-duration: 200ms;\n}\n\n/* Import global styles */\n.file\\:border-0::file-selector-button {\n  border-width: 0px;\n}\n.file\\:bg-transparent::file-selector-button {\n  background-color: transparent;\n}\n.file\\:text-sm::file-selector-button {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.file\\:font-medium::file-selector-button {\n  font-weight: 500;\n}\n.placeholder\\:text-muted-foreground::placeholder {\n  color: hsl(var(--muted-foreground));\n}\n.hover\\:text-foreground:hover {\n  color: hsl(var(--foreground));\n}\n.hover\\:text-primary:hover {\n  color: hsl(var(--primary));\n}\n.hover\\:opacity-100:hover {\n  opacity: 1;\n}\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.focus\\:ring-2:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.focus\\:ring-ring:focus {\n  --tw-ring-color: hsl(var(--ring));\n}\n.focus\\:ring-offset-2:focus {\n  --tw-ring-offset-width: 2px;\n}\n.focus-visible\\:outline-none:focus-visible {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.focus-visible\\:ring-2:focus-visible {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.focus-visible\\:ring-ring:focus-visible {\n  --tw-ring-color: hsl(var(--ring));\n}\n.focus-visible\\:ring-offset-2:focus-visible {\n  --tw-ring-offset-width: 2px;\n}\n.disabled\\:pointer-events-none:disabled {\n  pointer-events: none;\n}\n.disabled\\:cursor-not-allowed:disabled {\n  cursor: not-allowed;\n}\n.disabled\\:opacity-50:disabled {\n  opacity: 0.5;\n}\n.peer:disabled ~ .peer-disabled\\:cursor-not-allowed {\n  cursor: not-allowed;\n}\n.peer:disabled ~ .peer-disabled\\:opacity-70 {\n  opacity: 0.7;\n}\n.data-\\[state\\=open\\]\\:bg-accent[data-state="open"] {\n  background-color: hsl(var(--accent));\n}\n.data-\\[state\\=open\\]\\:text-muted-foreground[data-state="open"] {\n  color: hsl(var(--muted-foreground));\n}\n.data-\\[state\\=open\\]\\:animate-in[data-state="open"] {\n  animation-name: enter;\n  animation-duration: 150ms;\n  --tw-enter-opacity: initial;\n  --tw-enter-scale: initial;\n  --tw-enter-rotate: initial;\n  --tw-enter-translate-x: initial;\n  --tw-enter-translate-y: initial;\n}\n.data-\\[state\\=closed\\]\\:animate-out[data-state="closed"] {\n  animation-name: exit;\n  animation-duration: 150ms;\n  --tw-exit-opacity: initial;\n  --tw-exit-scale: initial;\n  --tw-exit-rotate: initial;\n  --tw-exit-translate-x: initial;\n  --tw-exit-translate-y: initial;\n}\n.data-\\[state\\=closed\\]\\:fade-out-0[data-state="closed"] {\n  --tw-exit-opacity: 0;\n}\n.data-\\[state\\=open\\]\\:fade-in-0[data-state="open"] {\n  --tw-enter-opacity: 0;\n}\n.data-\\[state\\=closed\\]\\:zoom-out-95[data-state="closed"] {\n  --tw-exit-scale: .95;\n}\n.data-\\[state\\=open\\]\\:zoom-in-95[data-state="open"] {\n  --tw-enter-scale: .95;\n}\n.data-\\[state\\=closed\\]\\:slide-out-to-left-1\\/2[data-state="closed"] {\n  --tw-exit-translate-x: -50%;\n}\n.data-\\[state\\=closed\\]\\:slide-out-to-top-\\[48\\%\\][data-state="closed"] {\n  --tw-exit-translate-y: -48%;\n}\n.data-\\[state\\=open\\]\\:slide-in-from-left-1\\/2[data-state="open"] {\n  --tw-enter-translate-x: -50%;\n}\n.data-\\[state\\=open\\]\\:slide-in-from-top-\\[48\\%\\][data-state="open"] {\n  --tw-enter-translate-y: -48%;\n}\n@media (min-width: 640px) {\n\n  .sm\\:flex-row {\n    flex-direction: row;\n  }\n\n  .sm\\:justify-end {\n    justify-content: flex-end;\n  }\n\n  .sm\\:space-x-2 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-x-reverse: 0;\n    margin-right: calc(0.5rem * var(--tw-space-x-reverse));\n    margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n  }\n\n  .sm\\:rounded-lg {\n    border-radius: var(--radius);\n  }\n\n  .sm\\:text-left {\n    text-align: left;\n  }\n}\n@media (min-width: 768px) {\n\n  .md\\:mt-0 {\n    margin-top: 0px;\n  }\n\n  .md\\:flex {\n    display: flex;\n  }\n\n  .md\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n\n  .md\\:grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n\n  .md\\:flex-row {\n    flex-direction: row;\n  }\n\n  .md\\:px-6 {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n\n  .md\\:py-12 {\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n  }\n\n  .md\\:py-16 {\n    padding-top: 4rem;\n    padding-bottom: 4rem;\n  }\n\n  .md\\:text-6xl {\n    font-size: 3.75rem;\n    line-height: 1;\n  }\n}\n',
            "",
            {
              version: 3,
              sources: ["webpack://./src/app/globals.css"],
              names: [],
              mappings:
                "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",
              sourcesContent: [
                '@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n/* Import global styles */\n@import "../styles/global-styles.css";\n\n@layer base {\n  :root {\n    --background: 0 0% 100%;\n    --foreground: 0 0% 3.9%;\n    --card: 0 0% 100%;\n    --card-foreground: 0 0% 3.9%;\n    --popover: 0 0% 100%;\n    --popover-foreground: 0 0% 3.9%;\n\n    /* Primary color: Blue */\n    --primary: 221 83% 53%;\n    --primary-foreground: 0 0% 98%;\n    --primary-50: 214 100% 97%;\n    --primary-100: 214 95% 93%;\n    --primary-200: 213 97% 87%;\n    --primary-300: 212 96% 78%;\n    --primary-400: 213 94% 68%;\n    --primary-500: 217 91% 60%;\n    --primary-600: 221 83% 53%;\n    --primary-700: 224 76% 48%;\n    --primary-800: 226 71% 40%;\n    --primary-900: 224 64% 33%;\n    --primary-950: 226 57% 21%;\n\n    /* Secondary color: Gray */\n    --secondary: 220 14% 96%;\n    --secondary-foreground: 222 47% 11%;\n    --secondary-50: 210 20% 98%;\n    --secondary-100: 220 14% 96%;\n    --secondary-200: 220 13% 91%;\n    --secondary-300: 216 12% 84%;\n    --secondary-400: 218 11% 65%;\n    --secondary-500: 220 9% 46%;\n    --secondary-600: 215 14% 34%;\n    --secondary-700: 217 19% 27%;\n    --secondary-800: 215 28% 17%;\n    --secondary-900: 221 39% 11%;\n    --secondary-950: 224 71% 4%;\n\n    --muted: 220 14% 96%;\n    --muted-foreground: 220 9% 46%;\n    --accent: 210 40% 96%;\n    --accent-foreground: 222 47% 11%;\n    --destructive: 0 84% 60%;\n    --destructive-foreground: 0 0% 98%;\n    --border: 220 13% 91%;\n    --input: 220 13% 91%;\n    --ring: 221 83% 53%;\n\n    --chart-1: 12 76% 61%;\n    --chart-2: 173 58% 39%;\n    --chart-3: 197 37% 24%;\n    --chart-4: 43 74% 66%;\n    --chart-5: 27 87% 67%;\n\n    --radius: 0.5rem;\n\n    /* Typography */\n    --font-sans:\n      "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",\n      Arial, sans-serif;\n    --font-heading:\n      "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",\n      Arial, sans-serif;\n    --font-mono:\n      "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",\n      "Courier New", monospace;\n  }\n\n  .dark {\n    --background: 224 71% 4%;\n    --foreground: 0 0% 98%;\n    --card: 224 71% 4%;\n    --card-foreground: 0 0% 98%;\n    --popover: 224 71% 4%;\n    --popover-foreground: 0 0% 98%;\n\n    /* Primary color: Blue (dark mode) */\n    --primary: 217 91% 60%;\n    --primary-foreground: 0 0% 98%;\n    --primary-50: 226 57% 21%;\n    --primary-100: 224 64% 33%;\n    --primary-200: 226 71% 40%;\n    --primary-300: 224 76% 48%;\n    --primary-400: 221 83% 53%;\n    --primary-500: 217 91% 60%;\n    --primary-600: 213 94% 68%;\n    --primary-700: 212 96% 78%;\n    --primary-800: 213 97% 87%;\n    --primary-900: 214 95% 93%;\n    --primary-950: 214 100% 97%;\n\n    /* Secondary color: Gray (dark mode) */\n    --secondary: 215 28% 17%;\n    --secondary-foreground: 210 20% 98%;\n    --secondary-50: 224 71% 4%;\n    --secondary-100: 221 39% 11%;\n    --secondary-200: 215 28% 17%;\n    --secondary-300: 217 19% 27%;\n    --secondary-400: 215 14% 34%;\n    --secondary-500: 220 9% 46%;\n    --secondary-600: 218 11% 65%;\n    --secondary-700: 216 12% 84%;\n    --secondary-800: 220 13% 91%;\n    --secondary-900: 220 14% 96%;\n    --secondary-950: 210 20% 98%;\n\n    --muted: 215 28% 17%;\n    --muted-foreground: 218 11% 65%;\n    --accent: 217 19% 27%;\n    --accent-foreground: 210 20% 98%;\n    --destructive: 0 62% 30%;\n    --destructive-foreground: 0 0% 98%;\n    --border: 217 19% 27%;\n    --input: 217 19% 27%;\n    --ring: 224 76% 48%;\n\n    --chart-1: 220 70% 50%;\n    --chart-2: 160 60% 45%;\n    --chart-3: 30 80% 55%;\n    --chart-4: 280 65% 60%;\n    --chart-5: 340 75% 55%;\n  }\n}\n\n@layer base {\n  * {\n    @apply border-border outline-ring/50;\n  }\n  body {\n    @apply bg-background text-foreground;\n    font-feature-settings:\n      "rlig" 1,\n      "calt" 1;\n  }\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    @apply font-heading font-semibold tracking-tight;\n  }\n  h1 {\n    @apply text-4xl lg:text-5xl;\n  }\n  h2 {\n    @apply text-3xl lg:text-4xl;\n  }\n  h3 {\n    @apply text-2xl lg:text-3xl;\n  }\n  h4 {\n    @apply text-xl lg:text-2xl;\n  }\n  h5 {\n    @apply text-lg lg:text-xl;\n  }\n  h6 {\n    @apply text-base lg:text-lg;\n  }\n}\n\n@layer utilities {\n  .text-balance {\n    text-wrap: balance;\n  }\n\n  .text-pretty {\n    text-wrap: pretty;\n  }\n\n  .flex-center {\n    @apply flex items-center justify-center;\n  }\n\n  .flex-between {\n    @apply flex items-center justify-between;\n  }\n\n  .absolute-center {\n    @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2;\n  }\n\n  .truncate-1 {\n    @apply truncate;\n  }\n\n  .truncate-2 {\n    @apply line-clamp-2;\n  }\n\n  .truncate-3 {\n    @apply line-clamp-3;\n  }\n}\n',
              ],
              sourceRoot: "",
            },
          ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/styles/global-styles.css":
      (module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          "/**\n * Global Styles and CSS Variables\n * \n * This file contains additional global styles and CSS variables\n * that extend the base Tailwind configuration.\n */\n\n/* Additional CSS variables for the design system */\n:root {\n  /* Transitions */\n  --transition-fast: 150ms;\n  --transition-normal: 200ms;\n  --transition-slow: 300ms;\n  --transition-timing-default: cubic-bezier(0.4, 0, 0.2, 1);\n  --transition-timing-in: cubic-bezier(0.4, 0, 1, 1);\n  --transition-timing-out: cubic-bezier(0, 0, 0.2, 1);\n\n  /* Focus styles */\n  --focus-ring-color: hsl(var(--ring));\n  --focus-ring-width: 2px;\n  --focus-ring-offset: 2px;\n\n  /* Scrollbar */\n  --scrollbar-size: 10px;\n  --scrollbar-track: hsl(var(--secondary-100));\n  --scrollbar-thumb: hsl(var(--secondary-300));\n\n  /* Layout */\n  --header-height: 64px;\n  --sidebar-width: 256px;\n  --sidebar-collapsed-width: 80px;\n  --content-max-width: 1280px;\n\n  /* Misc */\n  --default-border-radius: 0.5rem;\n  --card-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  --hover-overlay: rgba(0, 0, 0, 0.05);\n  --hover-overlay-dark: rgba(255, 255, 255, 0.05);\n}\n\n.dark {\n  /* Dark mode specific variables */\n  --scrollbar-track: hsl(var(--secondary-900));\n  --scrollbar-thumb: hsl(var(--secondary-700));\n  --hover-overlay: rgba(255, 255, 255, 0.05);\n  --hover-overlay-dark: rgba(0, 0, 0, 0.2);\n}\n\n/* Custom scrollbar styling */\n::-webkit-scrollbar {\n  width: var(--scrollbar-size);\n  height: var(--scrollbar-size);\n}\n\n::-webkit-scrollbar-track {\n  background: var(--scrollbar-track);\n}\n\n::-webkit-scrollbar-thumb {\n  background: var(--scrollbar-thumb);\n  border-radius: 5px;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: hsl(var(--secondary-400));\n}\n\n.dark ::-webkit-scrollbar-thumb:hover {\n  background: hsl(var(--secondary-600));\n}\n\n/* Focus styles */\n.focus-ring {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  --tw-ring-offset-color: hsl(var(--background));\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.focus-ring:focus-visible {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n  --tw-ring-color: hsl(var(--ring));\n  --tw-ring-offset-width: 2px;\n}\n\n/* Common layout patterns */\n.page-container {\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  max-width: var(--content-max-width);\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n@media (min-width: 640px) {\n  .page-container {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n}\n@media (min-width: 1024px) {\n  .page-container {\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n}\n\n.page-section {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\n\n@media (min-width: 768px) {\n  .page-section {\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n  }\n}\n\n@media (min-width: 1024px) {\n  .page-section {\n    padding-top: 4rem;\n    padding-bottom: 4rem;\n  }\n}\n\n.page-header {\n  margin-bottom: 1.5rem;\n}\n\n@media (min-width: 768px) {\n  .page-header {\n    margin-bottom: 2rem;\n  }\n}\n\n@media (min-width: 1024px) {\n  .page-header {\n    margin-bottom: 3rem;\n  }\n}\n\n/* Hover effects */\n.hover-effect {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 200ms;\n  animation-duration: 200ms;\n}\n\n.hover-effect:hover {\n  background-color: var(--hover-overlay);\n}\n\n.dark .hover-effect:hover {\n  background-color: var(--hover-overlay-dark);\n}\n\n/* Responsive media */\n.responsive-media {\n  position: relative;\n  height: 0px;\n  overflow: hidden;\n  padding-bottom: 56.25%; /* 16:9 aspect ratio */\n}\n\n.responsive-media > * {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n}\n\n/* Utility classes for common patterns */\n.visually-hidden {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.truncate-multiline {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.truncate-multiline-3 {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n/* Animations */\n@keyframes scale-in {\n  from {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n\n@keyframes scale-out {\n  from {\n    opacity: 1;\n    transform: scale(1);\n  }\n  to {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n}\n\n.animate-scale-in {\n  animation: scale-in 0.2s ease-out;\n}\n\n.animate-scale-out {\n  animation: scale-out 0.2s ease-in forwards;\n}\n",
          "",
          {
            version: 3,
            sources: ["webpack://./src/styles/global-styles.css"],
            names: [],
            mappings:
              "AAAA;;;;;EAKE;;AAEF,mDAAmD;AACnD;EACE,gBAAgB;EAChB,wBAAwB;EACxB,0BAA0B;EAC1B,wBAAwB;EACxB,yDAAyD;EACzD,kDAAkD;EAClD,mDAAmD;;EAEnD,iBAAiB;EACjB,oCAAoC;EACpC,uBAAuB;EACvB,wBAAwB;;EAExB,cAAc;EACd,sBAAsB;EACtB,4CAA4C;EAC5C,4CAA4C;;EAE5C,WAAW;EACX,qBAAqB;EACrB,sBAAsB;EACtB,+BAA+B;EAC/B,2BAA2B;;EAE3B,SAAS;EACT,+BAA+B;EAC/B,kFAAkF;EAClF,oCAAoC;EACpC,+CAA+C;AACjD;;AAEA;EACE,iCAAiC;EACjC,4CAA4C;EAC5C,4CAA4C;EAC5C,0CAA0C;EAC1C,wCAAwC;AAC1C;;AAEA,6BAA6B;AAC7B;EACE,4BAA4B;EAC5B,6BAA6B;AAC/B;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,kCAAkC;EAClC,kBAAkB;AACpB;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,qCAAqC;AACvC;;AAEA,iBAAiB;AAEf;EAAA,8BAAyD;EAAzD,mBAAyD;EAAzD,8CAAyD;EAAzD,wBAAyD;EAAzD,wDAAyD;EAAzD;AAAyD;;AAIzD;EAAA,2GAAqC;EAArC,yGAAqC;EAArC,4FAAqC;EAArC,iCAAqC;EAArC;AAAqC;;AAGvC,2BAA2B;AAEzB;EAAA,iBAA2E;EAA3E,kBAA2E;EAA3E,WAA2E;EAA3E,mCAA2E;EAA3E,kBAA2E;EAA3E;AAA2E;AAA3E;EAAA;IAAA,oBAA2E;IAA3E;EAA2E;AAAA;AAA3E;EAAA;IAAA,kBAA2E;IAA3E;EAA2E;AAAA;;AAI3E;EAAA,iBAA6B;EAA7B;AAA6B;;AAA7B;EAAA;IAAA,iBAA6B;IAA7B;EAA6B;AAAA;;AAA7B;EAAA;IAAA,iBAA6B;IAA7B;EAA6B;AAAA;;AAI7B;EAAA;AAA4B;;AAA5B;EAAA;IAAA;EAA4B;AAAA;;AAA5B;EAAA;IAAA;EAA4B;AAAA;;AAG9B,kBAAkB;AAEhB;EAAA,+FAAqC;EAArC,wDAAqC;EAArC,0BAAqC;EAArC;AAAqC;;AAGvC;EACE,sCAAsC;AACxC;;AAEA;EACE,2CAA2C;AAC7C;;AAEA,qBAAqB;AAEnB;EAAA,kBAAmC;EAAnC,WAAmC;EAAnC,gBAAmC;EACnC,sBAAsB,EAAE,sBAAsB;AADX;;AAKnC;EAAA,kBAAuD;EAAvD,QAAuD;EAAvD,SAAuD;EAAvD,YAAuD;EAAvD,WAAuD;EAAvD;AAAuD;;AAGzD,wCAAwC;AAEtC;EAAA,kBAAc;EAAd,UAAc;EAAd,WAAc;EAAd,UAAc;EAAd,YAAc;EAAd,gBAAc;EAAd,sBAAc;EAAd,mBAAc;EAAd;AAAc;;AAGhB;EACE,oBAAoB;EACpB,qBAAqB;EACrB,4BAA4B;EAC5B,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;EACpB,qBAAqB;EACrB,4BAA4B;EAC5B,gBAAgB;AAClB;;AAEA,eAAe;AACf;EACE;IACE,UAAU;IACV,sBAAsB;EACxB;EACA;IACE,UAAU;IACV,mBAAmB;EACrB;AACF;;AAEA;EACE;IACE,UAAU;IACV,mBAAmB;EACrB;EACA;IACE,UAAU;IACV,sBAAsB;EACxB;AACF;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,0CAA0C;AAC5C",
            sourcesContent: [
              "/**\n * Global Styles and CSS Variables\n * \n * This file contains additional global styles and CSS variables\n * that extend the base Tailwind configuration.\n */\n\n/* Additional CSS variables for the design system */\n:root {\n  /* Transitions */\n  --transition-fast: 150ms;\n  --transition-normal: 200ms;\n  --transition-slow: 300ms;\n  --transition-timing-default: cubic-bezier(0.4, 0, 0.2, 1);\n  --transition-timing-in: cubic-bezier(0.4, 0, 1, 1);\n  --transition-timing-out: cubic-bezier(0, 0, 0.2, 1);\n\n  /* Focus styles */\n  --focus-ring-color: hsl(var(--ring));\n  --focus-ring-width: 2px;\n  --focus-ring-offset: 2px;\n\n  /* Scrollbar */\n  --scrollbar-size: 10px;\n  --scrollbar-track: hsl(var(--secondary-100));\n  --scrollbar-thumb: hsl(var(--secondary-300));\n\n  /* Layout */\n  --header-height: 64px;\n  --sidebar-width: 256px;\n  --sidebar-collapsed-width: 80px;\n  --content-max-width: 1280px;\n\n  /* Misc */\n  --default-border-radius: 0.5rem;\n  --card-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  --hover-overlay: rgba(0, 0, 0, 0.05);\n  --hover-overlay-dark: rgba(255, 255, 255, 0.05);\n}\n\n.dark {\n  /* Dark mode specific variables */\n  --scrollbar-track: hsl(var(--secondary-900));\n  --scrollbar-thumb: hsl(var(--secondary-700));\n  --hover-overlay: rgba(255, 255, 255, 0.05);\n  --hover-overlay-dark: rgba(0, 0, 0, 0.2);\n}\n\n/* Custom scrollbar styling */\n::-webkit-scrollbar {\n  width: var(--scrollbar-size);\n  height: var(--scrollbar-size);\n}\n\n::-webkit-scrollbar-track {\n  background: var(--scrollbar-track);\n}\n\n::-webkit-scrollbar-thumb {\n  background: var(--scrollbar-thumb);\n  border-radius: 5px;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: hsl(var(--secondary-400));\n}\n\n.dark ::-webkit-scrollbar-thumb:hover {\n  background: hsl(var(--secondary-600));\n}\n\n/* Focus styles */\n.focus-ring {\n  @apply outline-none ring-offset-background transition-all;\n}\n\n.focus-ring:focus-visible {\n  @apply ring-2 ring-ring ring-offset-2;\n}\n\n/* Common layout patterns */\n.page-container {\n  @apply mx-auto w-full max-w-[var(--content-max-width)] px-4 sm:px-6 lg:px-8;\n}\n\n.page-section {\n  @apply py-8 md:py-12 lg:py-16;\n}\n\n.page-header {\n  @apply mb-6 md:mb-8 lg:mb-12;\n}\n\n/* Hover effects */\n.hover-effect {\n  @apply transition-colors duration-200;\n}\n\n.hover-effect:hover {\n  background-color: var(--hover-overlay);\n}\n\n.dark .hover-effect:hover {\n  background-color: var(--hover-overlay-dark);\n}\n\n/* Responsive media */\n.responsive-media {\n  @apply relative h-0 overflow-hidden;\n  padding-bottom: 56.25%; /* 16:9 aspect ratio */\n}\n\n.responsive-media > * {\n  @apply absolute top-0 left-0 h-full w-full object-cover;\n}\n\n/* Utility classes for common patterns */\n.visually-hidden {\n  @apply sr-only;\n}\n\n.truncate-multiline {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.truncate-multiline-3 {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n/* Animations */\n@keyframes scale-in {\n  from {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n\n@keyframes scale-out {\n  from {\n    opacity: 1;\n    transform: scale(1);\n  }\n  to {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n}\n\n.animate-scale-in {\n  animation: scale-in 0.2s ease-out;\n}\n\n.animate-scale-out {\n  animation: scale-out 0.2s ease-in forwards;\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./src/stories/composition lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src\\/stories\\/composition(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$":
      (module, __unused_webpack_exports, __webpack_require__) => {
        var map = {
          "./LoginForm.mdx": ["./src/stories/composition/LoginForm.mdx", 656, 47, 873, 797],
        };
        function webpackAsyncContext(req) {
          if (!__webpack_require__.o(map, req))
            return Promise.resolve().then(() => {
              var e = new Error("Cannot find module '" + req + "'");
              throw ((e.code = "MODULE_NOT_FOUND"), e);
            });
          var ids = map[req],
            id = ids[0];
          return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() =>
            __webpack_require__(id)
          );
        }
        (webpackAsyncContext.keys = () => Object.keys(map)),
          (webpackAsyncContext.id =
            "./src/stories/composition lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src\\/stories\\/composition(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$"),
          (module.exports = webpackAsyncContext);
      },
    "./src/stories/composition lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src\\/stories\\/composition(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$":
      (module, __unused_webpack_exports, __webpack_require__) => {
        var map = {
          "./LoginForm.stories": ["./src/stories/composition/LoginForm.stories.tsx", 656, 873, 385],
          "./LoginForm.stories.tsx": [
            "./src/stories/composition/LoginForm.stories.tsx",
            656,
            873,
            385,
          ],
        };
        function webpackAsyncContext(req) {
          if (!__webpack_require__.o(map, req))
            return Promise.resolve().then(() => {
              var e = new Error("Cannot find module '" + req + "'");
              throw ((e.code = "MODULE_NOT_FOUND"), e);
            });
          var ids = map[req],
            id = ids[0];
          return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() =>
            __webpack_require__(id)
          );
        }
        (webpackAsyncContext.keys = () => Object.keys(map)),
          (webpackAsyncContext.id =
            "./src/stories/composition lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src\\/stories\\/composition(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$"),
          (module.exports = webpackAsyncContext);
      },
    "./src/stories/docs lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src\\/stories\\/docs(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$":
      (module, __unused_webpack_exports, __webpack_require__) => {
        var map = {
          "./ComponentComposition.mdx": ["./src/stories/docs/ComponentComposition.mdx", 47, 998],
          "./VisualTesting.mdx": ["./src/stories/docs/VisualTesting.mdx", 47, 850],
        };
        function webpackAsyncContext(req) {
          if (!__webpack_require__.o(map, req))
            return Promise.resolve().then(() => {
              var e = new Error("Cannot find module '" + req + "'");
              throw ((e.code = "MODULE_NOT_FOUND"), e);
            });
          var ids = map[req],
            id = ids[0];
          return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() =>
            __webpack_require__(id)
          );
        }
        (webpackAsyncContext.keys = () => Object.keys(map)),
          (webpackAsyncContext.id =
            "./src/stories/docs lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src\\/stories\\/docs(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$"),
          (module.exports = webpackAsyncContext);
      },
    "./src/stories/ui lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src\\/stories\\/ui(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$":
      (module, __unused_webpack_exports, __webpack_require__) => {
        var map = { "./Button.mdx": ["./src/stories/ui/Button.mdx", 656, 47, 664, 821] };
        function webpackAsyncContext(req) {
          if (!__webpack_require__.o(map, req))
            return Promise.resolve().then(() => {
              var e = new Error("Cannot find module '" + req + "'");
              throw ((e.code = "MODULE_NOT_FOUND"), e);
            });
          var ids = map[req],
            id = ids[0];
          return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() =>
            __webpack_require__(id)
          );
        }
        (webpackAsyncContext.keys = () => Object.keys(map)),
          (webpackAsyncContext.id =
            "./src/stories/ui lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src\\/stories\\/ui(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$"),
          (module.exports = webpackAsyncContext);
      },
    "./src/stories/ui lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src\\/stories\\/ui(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$":
      (module, __unused_webpack_exports, __webpack_require__) => {
        var map = {
          "./Accordion.stories": ["./src/stories/ui/Accordion.stories.tsx", 656, 982],
          "./Accordion.stories.tsx": ["./src/stories/ui/Accordion.stories.tsx", 656, 982],
          "./Alert.stories": ["./src/stories/ui/Alert.stories.tsx", 656, 255],
          "./Alert.stories.tsx": ["./src/stories/ui/Alert.stories.tsx", 656, 255],
          "./Avatar.stories": ["./src/stories/ui/Avatar.stories.tsx", 656, 387],
          "./Avatar.stories.tsx": ["./src/stories/ui/Avatar.stories.tsx", 656, 387],
          "./Badge.stories": ["./src/stories/ui/Badge.stories.tsx", 656, 46],
          "./Badge.stories.tsx": ["./src/stories/ui/Badge.stories.tsx", 656, 46],
          "./Button.stories": ["./src/stories/ui/Button.stories.tsx", 656, 664, 463],
          "./Button.stories.tsx": ["./src/stories/ui/Button.stories.tsx", 656, 664, 463],
          "./Card.stories": ["./src/stories/ui/Card.stories.tsx", 656, 478],
          "./Card.stories.tsx": ["./src/stories/ui/Card.stories.tsx", 656, 478],
        };
        function webpackAsyncContext(req) {
          if (!__webpack_require__.o(map, req))
            return Promise.resolve().then(() => {
              var e = new Error("Cannot find module '" + req + "'");
              throw ((e.code = "MODULE_NOT_FOUND"), e);
            });
          var ids = map[req],
            id = ids[0];
          return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() =>
            __webpack_require__(id)
          );
        }
        (webpackAsyncContext.keys = () => Object.keys(map)),
          (webpackAsyncContext.id =
            "./src/stories/ui lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src\\/stories\\/ui(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$"),
          (module.exports = webpackAsyncContext);
      },
    "./src/stories lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src\\/stories\\/Introduction\\.mdx)$":
      (module, __unused_webpack_exports, __webpack_require__) => {
        var map = { "./Introduction.mdx": ["./src/stories/Introduction.mdx", 47, 281] };
        function webpackAsyncContext(req) {
          if (!__webpack_require__.o(map, req))
            return Promise.resolve().then(() => {
              var e = new Error("Cannot find module '" + req + "'");
              throw ((e.code = "MODULE_NOT_FOUND"), e);
            });
          var ids = map[req],
            id = ids[0];
          return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() =>
            __webpack_require__(id)
          );
        }
        (webpackAsyncContext.keys = () => Object.keys(map)),
          (webpackAsyncContext.id =
            "./src/stories lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src\\/stories\\/Introduction\\.mdx)$"),
          (module.exports = webpackAsyncContext);
      },
    "storybook/internal/channels": (module) => {
      "use strict";
      module.exports = __STORYBOOK_MODULE_CHANNELS__;
    },
    "storybook/internal/client-logger": (module) => {
      "use strict";
      module.exports = __STORYBOOK_MODULE_CLIENT_LOGGER__;
    },
    "storybook/internal/preview-errors": (module) => {
      "use strict";
      module.exports = __STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;
    },
    "storybook/internal/core-events": (module) => {
      "use strict";
      module.exports = __STORYBOOK_MODULE_CORE_EVENTS__;
    },
    "@storybook/global": (module) => {
      "use strict";
      module.exports = __STORYBOOK_MODULE_GLOBAL__;
    },
    "storybook/internal/preview-api": (module) => {
      "use strict";
      module.exports = __STORYBOOK_MODULE_PREVIEW_API__;
    },
    "?c969": () => {},
    "?ed1b": () => {},
    "?d17e": () => {},
  },
  (__webpack_require__) => {
    __webpack_require__.O(0, [666], () => {
      return (
        (moduleId = "./storybook-config-entry.js"),
        __webpack_require__((__webpack_require__.s = moduleId))
      );
      var moduleId;
    });
    __webpack_require__.O();
  },
]);
