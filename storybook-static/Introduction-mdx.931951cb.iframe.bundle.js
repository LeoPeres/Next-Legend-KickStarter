(self.webpackChunknext_legend_kickstarter = self.webpackChunknext_legend_kickstarter || []).push([
  [281],
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
    "./src/stories/Introduction.mdx": (
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
          strong: "strong",
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
                { title: "Introduction" }
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
                id: "next-legend-kickstarter-component-library",
                children: "Next Legend Kickstarter Component Library",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children:
                  "Welcome to the Next Legend Kickstarter component library. This Storybook contains all the components, patterns, and guidelines for building applications with our design system.",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: "component-organization",
                children: "Component Organization",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children: "Our components are organized into the following categories:",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: "UI Components",
                      }),
                      ": Basic UI elements like buttons, inputs, cards, etc.",
                    ],
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: "Layout Components",
                      }),
                      ": Components for page layout like containers, grids, etc.",
                    ],
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: "Form Components",
                      }),
                      ": Components for building forms like inputs, selects, etc.",
                    ],
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: "Features",
                      }),
                      ": Higher-level components that implement specific features.",
                    ],
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: "Pages",
                      }),
                      ": Complete page templates and examples.",
                    ],
                  }),
                  "\n",
                ],
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: "getting-started",
                children: "Getting Started",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children: "To use these components in your application:",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol, {
                children: [
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: "Import the component from its respective location:",
                  }),
                  "\n",
                ],
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _components.code,
                  {
                    className: "language-jsx",
                    children: 'import { Button } from "@/components/ui/button";\n',
                  }
                ),
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol, {
                start: "2",
                children: [
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: "Use the component in your JSX:",
                  }),
                  "\n",
                ],
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _components.code,
                  {
                    className: "language-jsx",
                    children: '<Button variant="default">Click Me</Button>\n',
                  }
                ),
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: "design-principles",
                children: "Design Principles",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children: "Our design system follows these core principles:",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol, {
                children: [
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: "Consistency",
                      }),
                      ": Components should look and behave consistently across the application.",
                    ],
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: "Accessibility",
                      }),
                      ": All components should be accessible to all users.",
                    ],
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: "Flexibility",
                      }),
                      ": Components should be flexible enough to adapt to different use cases.",
                    ],
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: "Performance",
                      }),
                      ": Components should be optimized for performance.",
                    ],
                  }),
                  "\n",
                ],
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: "contributing",
                children: "Contributing",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children: "To contribute to this component library:",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol, {
                children: [
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: "Create a new component in the appropriate directory.",
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: "Create a story file for the component.",
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: "Document the component using MDX.",
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: "Submit a pull request for review.",
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
                        href: "https://nextjs.org/docs",
                        rel: "nofollow",
                        children: "Next.js Documentation",
                      }
                    ),
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components.a,
                      {
                        href: "https://tailwindcss.com/docs",
                        rel: "nofollow",
                        children: "Tailwind CSS Documentation",
                      }
                    ),
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components.a,
                      {
                        href: "https://www.radix-ui.com/docs/primitives/overview/introduction",
                        rel: "nofollow",
                        children: "Radix UI Documentation",
                      }
                    ),
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components.a,
                      {
                        href: "https://storybook.js.org/docs",
                        rel: "nofollow",
                        children: "Storybook Documentation",
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
