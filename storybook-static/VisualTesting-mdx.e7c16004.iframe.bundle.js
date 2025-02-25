(self.webpackChunknext_legend_kickstarter = self.webpackChunknext_legend_kickstarter || []).push([
  [850],
  {
    "./node_modules/@mdx-js/react/lib/index.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, {
        Z: () => MDXProvider,
        a: () => useMDXComponents,
      });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "./node_modules/next/dist/compiled/react/index.js"
      );
      const emptyComponents = {},
        MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);
      function useMDXComponents(components) {
        const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);
        return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
          function () {
            return "function" == typeof components
              ? components(contextComponents)
              : { ...contextComponents, ...components };
          },
          [contextComponents, components]
        );
      }
      function MDXProvider(properties) {
        let allComponents;
        return (
          (allComponents = properties.disableParentContext
            ? "function" == typeof properties.components
              ? properties.components(emptyComponents)
              : properties.components || emptyComponents
            : useMDXComponents(properties.components)),
          react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            MDXContext.Provider,
            { value: allComponents },
            properties.children
          )
        );
      }
    },
    "./src/stories/docs/VisualTesting.mdx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, { default: () => MDXContent });
      __webpack_require__("./node_modules/next/dist/compiled/react/index.js");
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js"
        ),
        _Users_leonardoperes_Projects_Next_Legend_KickStarter_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),
        _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./node_modules/@storybook/blocks/dist/index.mjs"
        );
      function _createMdxContent(props) {
        const _components = {
          a: "a",
          code: "code",
          h1: "h1",
          h2: "h2",
          li: "li",
          ol: "ol",
          p: "p",
          pre: "pre",
          ul: "ul",
          ...(0,
          _Users_leonardoperes_Projects_Next_Legend_KickStarter_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.a)(),
          ...props.components,
        };
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,
          {
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__.h_,
                { title: "Docs/Visual Testing" }
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
                id: "visual-regression-testing-with-chromatic",
                children: "Visual Regression Testing with Chromatic",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
                children: [
                  "This project uses ",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
                    href: "https://www.chromatic.com/",
                    rel: "nofollow",
                    children: "Chromatic",
                  }),
                  " for visual regression testing. Chromatic captures screenshots of your Storybook stories and compares them against previous versions to detect visual changes.",
                ],
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: "how-it-works",
                children: "How It Works",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol, {
                children: [
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children:
                      "When you push changes to GitHub or create a pull request, a GitHub Actions workflow automatically runs Chromatic.",
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children:
                      "Chromatic builds your Storybook and captures screenshots of all your stories.",
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children:
                      "It compares these screenshots against the baseline (previous version) to detect visual changes.",
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children:
                      "If changes are detected, you can review and approve or reject them in the Chromatic UI.",
                  }),
                  "\n",
                ],
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: "setting-up-chromatic",
                children: "Setting Up Chromatic",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children: "To set up Chromatic for your own development:",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol, {
                children: [
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      "Sign up for a Chromatic account at ",
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
                        href: "https://www.chromatic.com/",
                        rel: "nofollow",
                        children: "chromatic.com",
                      }),
                      ".",
                    ],
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: "Link your GitHub repository to Chromatic.",
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: "Get your project token from Chromatic.",
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      "Add the token as a secret in your GitHub repository settings:",
                      "\n",
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                        children: [
                          "\n",
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                            children: "Go to your repository on GitHub",
                          }),
                          "\n",
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                            children: 'Click on "Settings" > "Secrets" > "New repository secret"',
                          }),
                          "\n",
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                            children: [
                              "Name: ",
                              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                                _components.code,
                                { children: "CHROMATIC_PROJECT_TOKEN" }
                              ),
                            ],
                          }),
                          "\n",
                          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                            children: "Value: Your Chromatic project token",
                          }),
                          "\n",
                        ],
                      }),
                      "\n",
                    ],
                  }),
                  "\n",
                ],
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: "running-chromatic-locally",
                children: "Running Chromatic Locally",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children: "You can run Chromatic locally to test your changes before pushing:",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _components.code,
                  { className: "language-bash", children: "npm run chromatic\n" }
                ),
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children: "This will build your Storybook and upload it to Chromatic for testing.",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: "reviewing-changes",
                children: "Reviewing Changes",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children: "When Chromatic detects visual changes:",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol, {
                children: [
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: "You'll receive a notification with a link to review the changes.",
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children:
                      "In the Chromatic UI, you can see before/after comparisons of each story.",
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: "You can approve or reject each change.",
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: "Approved changes become the new baseline for future comparisons.",
                  }),
                  "\n",
                ],
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: "best-practices",
                children: "Best Practices",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children:
                      "Run Chromatic locally before pushing to catch visual regressions early.",
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: "Review all visual changes carefully before approving.",
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: "Use Chromatic's UI to document why you're approving changes.",
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      "Consider adding ",
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
                        href: "https://storybook.js.org/docs/writing-tests/interaction-testing",
                        rel: "nofollow",
                        children: "component-specific tests",
                      }),
                      " for critical UI components.",
                    ],
                  }),
                  "\n",
                ],
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: "resources",
                children: "Resources",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components.a,
                      {
                        href: "https://www.chromatic.com/docs/",
                        rel: "nofollow",
                        children: "Chromatic Documentation",
                      }
                    ),
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components.a,
                      {
                        href: "https://storybook.js.org/docs/writing-tests/introduction",
                        rel: "nofollow",
                        children: "Storybook Testing Documentation",
                      }
                    ),
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components.a,
                      {
                        href: "https://storybook.js.org/tutorials/visual-testing-handbook/",
                        rel: "nofollow",
                        children: "Visual Testing Handbook",
                      }
                    ),
                  }),
                  "\n",
                ],
              }),
            ],
          }
        );
      }
      function MDXContent(props = {}) {
        const { wrapper: MDXLayout } = {
          ...(0,
          _Users_leonardoperes_Projects_Next_Legend_KickStarter_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__.a)(),
          ...props.components,
        };
        return MDXLayout
          ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, {
              ...props,
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, {
                ...props,
              }),
            })
          : _createMdxContent(props);
      }
    },
    "./node_modules/@storybook/blocks/dist sync recursive": (module) => {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'");
        throw ((e.code = "MODULE_NOT_FOUND"), e);
      }
      (webpackEmptyContext.keys = () => []),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (webpackEmptyContext.id = "./node_modules/@storybook/blocks/dist sync recursive"),
        (module.exports = webpackEmptyContext);
    },
    "./node_modules/@storybook/core/dist/components sync recursive": (module) => {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'");
        throw ((e.code = "MODULE_NOT_FOUND"), e);
      }
      (webpackEmptyContext.keys = () => []),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (webpackEmptyContext.id = "./node_modules/@storybook/core/dist/components sync recursive"),
        (module.exports = webpackEmptyContext);
    },
    "./node_modules/@storybook/core/dist/theming sync recursive": (module) => {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'");
        throw ((e.code = "MODULE_NOT_FOUND"), e);
      }
      (webpackEmptyContext.keys = () => []),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (webpackEmptyContext.id = "./node_modules/@storybook/core/dist/theming sync recursive"),
        (module.exports = webpackEmptyContext);
    },
  },
]);
