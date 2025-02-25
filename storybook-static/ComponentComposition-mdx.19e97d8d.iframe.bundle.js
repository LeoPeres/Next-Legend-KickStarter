(self.webpackChunknext_legend_kickstarter = self.webpackChunknext_legend_kickstarter || []).push([
  [998],
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
    "./src/stories/docs/ComponentComposition.mdx": (
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
                { title: "Docs/Component Composition" }
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
                id: "component-composition-patterns",
                children: "Component Composition Patterns",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children:
                  "Component composition is a powerful pattern in React that allows you to build complex UIs by combining simpler components. This guide explains common composition patterns used in this project.",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: "basic-composition",
                children: "Basic Composition",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children: "The simplest form of composition is nesting components:",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _components.code,
                  {
                    className: "language-jsx",
                    children:
                      "<Card>\n  <CardHeader>\n    <CardTitle>Title</CardTitle>\n    <CardDescription>Description</CardDescription>\n  </CardHeader>\n  <CardContent>\n    <p>Content goes here</p>\n  </CardContent>\n  <CardFooter>\n    <Button>Action</Button>\n  </CardFooter>\n</Card>\n",
                  }
                ),
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: "composition-with-props",
                children: "Composition with Props",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children: "Pass components as props to create flexible compositions:",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _components.code,
                  {
                    className: "language-jsx",
                    children:
                      'function Dialog({ title, description, content, actions }) {\n  return (\n    <div className="dialog">\n      <div className="dialog-header">\n        {title}\n        {description && <div className="dialog-description">{description}</div>}\n      </div>\n      <div className="dialog-content">{content}</div>\n      {actions && <div className="dialog-actions">{actions}</div>}\n    </div>\n  );\n}\n\n// Usage\n<Dialog\n  title={<h2>Confirm Action</h2>}\n  description="Are you sure you want to continue?"\n  content={<p>This action cannot be undone.</p>}\n  actions={\n    <>\n      <Button variant="outline">Cancel</Button>\n      <Button>Confirm</Button>\n    </>\n  }\n/>;\n',
                  }
                ),
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: "composition-with-children",
                children: "Composition with Children",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
                children: [
                  "Use the ",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
                    children: "children",
                  }),
                  " prop for flexible content:",
                ],
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _components.code,
                  {
                    className: "language-jsx",
                    children:
                      'function Section({ title, children }) {\n  return (\n    <div className="section">\n      <h2 className="section-title">{title}</h2>\n      <div className="section-content">{children}</div>\n    </div>\n  );\n}\n\n// Usage\n<Section title="User Information">\n  <p>Name: John Doe</p>\n  <p>Email: john@example.com</p>\n</Section>;\n',
                  }
                ),
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: "compound-components",
                children: "Compound Components",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children: "Create related components that work together:",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _components.code,
                  {
                    className: "language-jsx",
                    children:
                      'const Tabs = ({ children, defaultValue }) => {\n  const [value, setValue] = useState(defaultValue);\n\n  return (\n    <TabsContext.Provider value={{ value, setValue }}>\n      <div className="tabs">{children}</div>\n    </TabsContext.Provider>\n  );\n};\n\nconst TabsList = ({ children }) => {\n  return <div className="tabs-list">{children}</div>;\n};\n\nconst TabsTrigger = ({ value, children }) => {\n  const { value: selectedValue, setValue } = useContext(TabsContext);\n\n  return (\n    <button\n      className={`tabs-trigger ${selectedValue === value ? "selected" : ""}`}\n      onClick={() => setValue(value)}\n    >\n      {children}\n    </button>\n  );\n};\n\nconst TabsContent = ({ value, children }) => {\n  const { value: selectedValue } = useContext(TabsContext);\n\n  if (selectedValue !== value) return null;\n\n  return <div className="tabs-content">{children}</div>;\n};\n\n// Usage\n<Tabs defaultValue="account">\n  <TabsList>\n    <TabsTrigger value="account">Account</TabsTrigger>\n    <TabsTrigger value="password">Password</TabsTrigger>\n  </TabsList>\n  <TabsContent value="account">Account settings...</TabsContent>\n  <TabsContent value="password">Password settings...</TabsContent>\n</Tabs>;\n',
                  }
                ),
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: "higher-order-components-hocs",
                children: "Higher-Order Components (HOCs)",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children: "Create components that enhance other components:",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _components.code,
                  {
                    className: "language-jsx",
                    children:
                      "function withAuth(Component) {\n  return function AuthenticatedComponent(props) {\n    const { isAuthenticated, user } = useAuth();\n\n    if (!isAuthenticated) {\n      return <LoginForm />;\n    }\n\n    return <Component user={user} {...props} />;\n  };\n}\n\n// Usage\nconst ProfilePage = withAuth(({ user }) => {\n  return <div>Welcome, {user.name}!</div>;\n});\n",
                  }
                ),
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: "render-props",
                children: "Render Props",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children: "Pass rendering logic as a function prop:",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                  _components.code,
                  {
                    className: "language-jsx",
                    children:
                      'function List({ items, renderItem }) {\n  return (\n    <ul>\n      {items.map((item, index) => (\n        <li key={index}>{renderItem(item)}</li>\n      ))}\n    </ul>\n  );\n}\n\n// Usage\n<List\n  items={["Apple", "Banana", "Cherry"]}\n  renderItem={(item) => <span className="fruit">{item}</span>}\n/>;\n',
                  }
                ),
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: "best-practices",
                children: "Best Practices",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ol, {
                children: [
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: "Keep components focused",
                      }),
                      ": Each component should do one thing well.",
                    ],
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: "Use composition over inheritance",
                      }),
                      ": Prefer composing components rather than extending them.",
                    ],
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: "Design for reusability",
                      }),
                      ": Components should be reusable in different contexts.",
                    ],
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: "Consider API consistency",
                      }),
                      ": Related components should have consistent APIs.",
                    ],
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: "Document composition patterns",
                      }),
                      ": Make it clear how components should be composed.",
                    ],
                  }),
                  "\n",
                ],
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: "examples-in-this-project",
                children: "Examples in This Project",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: "LoginForm",
                      }),
                      ": Combines Button, Input, Label, Card, and Checkbox components",
                    ],
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: "DataTable",
                      }),
                      ": Combines Table, Pagination, and Filter components",
                    ],
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: "Dashboard",
                      }),
                      ": Composes multiple feature components into a complete page",
                    ],
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
