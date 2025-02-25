(self.webpackChunknext_legend_kickstarter = self.webpackChunknext_legend_kickstarter || []).push([
  [797],
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
    "./src/stories/composition/LoginForm.mdx": (
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
        _Users_leonardoperes_Projects_Next_Legend_KickStarter_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),
        _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./node_modules/@storybook/blocks/dist/index.mjs"
        ),
        _LoginForm_stories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./src/stories/composition/LoginForm.stories.tsx"
        );
      function _createMdxContent(props) {
        const _components = {
          a: "a",
          h2: "h2",
          li: "li",
          p: "p",
          strong: "strong",
          ul: "ul",
          ...(0,
          _Users_leonardoperes_Projects_Next_Legend_KickStarter_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.a)(),
          ...props.components,
        };
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,
          {
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,
                { of: _LoginForm_stories__WEBPACK_IMPORTED_MODULE_2__ }
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Dx,
                {}
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.QE,
                {
                  children:
                    "A complete login form composed of multiple UI components working together.",
                }
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.dk,
                {
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                    children:
                      "The LoginForm component demonstrates how to compose multiple UI components to create a complete\nfeature. It combines Button, Input, Label, Card, and Checkbox components to create a cohesive\nlogin experience. ## Component Composition This example shows how to: - Combine multiple UI\ncomponents into a cohesive feature - Manage state across components - Handle form submission -\nCreate a consistent design language ## Usage Guidelines - Use this component for user\nauthentication flows - Customize the form fields and validation as needed - Implement proper error\nhandling for failed login attempts - Consider adding social login options for a complete\nauthentication experience",
                  }),
                }
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: "example",
                children: "Example",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.sq,
                {}
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: "properties",
                children: "Properties",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,
                {}
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: "loading-state",
                children: "Loading State",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children:
                  "The login form can display a loading state to indicate that the form is being processed:",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,
                { of: _LoginForm_stories__WEBPACK_IMPORTED_MODULE_2__.Loading }
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: "with-pre-filled-email",
                children: "With Pre-filled Email",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children: "This example demonstrates how to pre-fill the email field:",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,
                { of: _LoginForm_stories__WEBPACK_IMPORTED_MODULE_2__.WithPrefilledEmail }
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: "component-breakdown",
                children: "Component Breakdown",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children: "The LoginForm component is composed of the following UI components:",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: "Card",
                      }),
                      ": Provides the container and styling for the form",
                    ],
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: "Label",
                      }),
                      ": Provides accessible labels for form inputs",
                    ],
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: "Input",
                      }),
                      ": Captures user input for email and password",
                    ],
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: "Checkbox",
                      }),
                      ': Allows users to toggle the "Remember me" option',
                    ],
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
                        children: "Button",
                      }),
                      ": Submits the form and shows loading state",
                    ],
                  }),
                  "\n",
                ],
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: "accessibility-considerations",
                children: "Accessibility Considerations",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children: "The LoginForm component is designed with accessibility in mind:",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: "All form fields have proper labels",
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: "The form can be navigated using keyboard",
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: "Loading states are properly communicated",
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children:
                      "Error states (not shown in this example) should be properly announced to screen readers",
                  }),
                  "\n",
                ],
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: "related-components",
                children: "Related Components",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components.a,
                      { href: "/docs/ui-input--docs", children: "Input" }
                    ),
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components.a,
                      { href: "/docs/ui-button--docs", children: "Button" }
                    ),
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components.a,
                      { href: "/docs/ui-card--docs", children: "Card" }
                    ),
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components.a,
                      { href: "/docs/ui-checkbox--docs", children: "Checkbox" }
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
          _Users_leonardoperes_Projects_Next_Legend_KickStarter_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.a)(),
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
    "./src/stories/composition/LoginForm.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default: () => Default,
          Loading: () => Loading,
          WithPrefilledEmail: () => WithPrefilledEmail,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => LoginForm_stories,
        });
      var react = __webpack_require__("./node_modules/next/dist/compiled/react/index.js"),
        ui_button = __webpack_require__("./components/ui/button.tsx"),
        esm_extends = __webpack_require__(
          "./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js"
        ),
        objectWithoutProperties = __webpack_require__(
          "./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"
        ),
        utils = __webpack_require__("./src/lib/utils.ts");
      const _excluded = ["className", "type"];
      var __jsx = react.createElement;
      const Input = react.forwardRef((_ref, ref) => {
        let { className, type } = _ref,
          props = (0, objectWithoutProperties.Z)(_ref, _excluded);
        return __jsx(
          "input",
          (0, esm_extends.Z)(
            {
              type,
              className: (0, utils.cn)(
                "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                className
              ),
              ref,
            },
            props
          )
        );
      });
      (Input.displayName = "Input"),
        (Input.__docgenInfo = { description: "", methods: [], displayName: "Input" });
      var dist = __webpack_require__("./node_modules/@radix-ui/react-label/dist/index.mjs"),
        class_variance_authority_dist = __webpack_require__(
          "./node_modules/class-variance-authority/dist/index.mjs"
        );
      const label_excluded = ["className"];
      var label_jsx = react.createElement;
      const labelVariants = (0, class_variance_authority_dist.j)(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        ),
        Label = react.forwardRef((_ref, ref) => {
          let { className } = _ref,
            props = (0, objectWithoutProperties.Z)(_ref, label_excluded);
          return label_jsx(
            dist.f,
            (0, esm_extends.Z)({ ref, className: (0, utils.cn)(labelVariants(), className) }, props)
          );
        });
      (Label.displayName = dist.f.displayName),
        (Label.__docgenInfo = { description: "", methods: [] });
      const card_excluded = ["className"],
        _excluded2 = ["className"],
        _excluded3 = ["className"],
        _excluded4 = ["className"],
        _excluded5 = ["className"],
        _excluded6 = ["className"];
      var card_jsx = react.createElement;
      const Card = react.forwardRef((_ref, ref) => {
        let { className } = _ref,
          props = (0, objectWithoutProperties.Z)(_ref, card_excluded);
        return card_jsx(
          "div",
          (0, esm_extends.Z)(
            {
              ref,
              className: (0, utils.cn)(
                "rounded-lg border bg-card text-card-foreground shadow-sm",
                className
              ),
            },
            props
          )
        );
      });
      Card.displayName = "Card";
      const CardHeader = react.forwardRef((_ref2, ref) => {
        let { className } = _ref2,
          props = (0, objectWithoutProperties.Z)(_ref2, _excluded2);
        return card_jsx(
          "div",
          (0, esm_extends.Z)(
            { ref, className: (0, utils.cn)("flex flex-col space-y-1.5 p-6", className) },
            props
          )
        );
      });
      CardHeader.displayName = "CardHeader";
      const CardTitle = react.forwardRef((_ref3, ref) => {
        let { className } = _ref3,
          props = (0, objectWithoutProperties.Z)(_ref3, _excluded3);
        return card_jsx(
          "h3",
          (0, esm_extends.Z)(
            {
              ref,
              className: (0, utils.cn)(
                "text-lg font-semibold leading-none tracking-tight",
                className
              ),
            },
            props
          )
        );
      });
      CardTitle.displayName = "CardTitle";
      const CardDescription = react.forwardRef((_ref4, ref) => {
        let { className } = _ref4,
          props = (0, objectWithoutProperties.Z)(_ref4, _excluded4);
        return card_jsx(
          "p",
          (0, esm_extends.Z)(
            { ref, className: (0, utils.cn)("text-sm text-muted-foreground", className) },
            props
          )
        );
      });
      CardDescription.displayName = "CardDescription";
      const CardContent = react.forwardRef((_ref5, ref) => {
        let { className } = _ref5,
          props = (0, objectWithoutProperties.Z)(_ref5, _excluded5);
        return card_jsx(
          "div",
          (0, esm_extends.Z)({ ref, className: (0, utils.cn)("p-6 pt-0", className) }, props)
        );
      });
      CardContent.displayName = "CardContent";
      const CardFooter = react.forwardRef((_ref6, ref) => {
        let { className } = _ref6,
          props = (0, objectWithoutProperties.Z)(_ref6, _excluded6);
        return card_jsx(
          "div",
          (0, esm_extends.Z)(
            { ref, className: (0, utils.cn)(" flex items-center p-6 pt-0", className) },
            props
          )
        );
      });
      (CardFooter.displayName = "CardFooter"),
        (Card.__docgenInfo = { description: "", methods: [], displayName: "Card" }),
        (CardHeader.__docgenInfo = { description: "", methods: [], displayName: "CardHeader" }),
        (CardFooter.__docgenInfo = { description: "", methods: [], displayName: "CardFooter" }),
        (CardTitle.__docgenInfo = { description: "", methods: [], displayName: "CardTitle" }),
        (CardDescription.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "CardDescription",
        }),
        (CardContent.__docgenInfo = { description: "", methods: [], displayName: "CardContent" });
      var react_checkbox_dist = __webpack_require__(
          "./node_modules/@radix-ui/react-checkbox/dist/index.mjs"
        ),
        check = __webpack_require__("./node_modules/lucide-react/dist/esm/icons/check.js");
      const checkbox_excluded = ["className"];
      var checkbox_jsx = react.createElement;
      const Checkbox = react.forwardRef((_ref, ref) => {
        let { className } = _ref,
          props = (0, objectWithoutProperties.Z)(_ref, checkbox_excluded);
        return checkbox_jsx(
          react_checkbox_dist.fC,
          (0, esm_extends.Z)(
            {
              ref,
              className: (0, utils.cn)(
                "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
                className
              ),
            },
            props
          ),
          checkbox_jsx(
            react_checkbox_dist.z$,
            { className: (0, utils.cn)("flex items-center justify-center text-current") },
            checkbox_jsx(check.Z, { className: "h-4 w-4" })
          )
        );
      });
      (Checkbox.displayName = react_checkbox_dist.fC.displayName),
        (Checkbox.__docgenInfo = { description: "", methods: [] });
      var LoginForm_jsx = react.createElement;
      const LoginForm = ({ onSubmit, isLoading = !1 }) => {
        const [email, setEmail] = react.useState(""),
          [password, setPassword] = react.useState(""),
          [rememberMe, setRememberMe] = react.useState(!1);
        return LoginForm_jsx(
          Card,
          { className: "w-full max-w-md mx-auto" },
          LoginForm_jsx(
            "div",
            { className: "p-6" },
            LoginForm_jsx("h2", { className: "text-2xl font-bold mb-6 text-center" }, "Log In"),
            LoginForm_jsx(
              "form",
              {
                onSubmit: (e) => {
                  e.preventDefault(), onSubmit && onSubmit({ email, password, rememberMe });
                },
                className: "space-y-4",
              },
              LoginForm_jsx(
                "div",
                { className: "space-y-2" },
                LoginForm_jsx(Label, { htmlFor: "email" }, "Email"),
                LoginForm_jsx(Input, {
                  id: "email",
                  type: "email",
                  placeholder: "Enter your email",
                  value: email,
                  onChange: (e) => setEmail(e.target.value),
                  required: !0,
                })
              ),
              LoginForm_jsx(
                "div",
                { className: "space-y-2" },
                LoginForm_jsx(Label, { htmlFor: "password" }, "Password"),
                LoginForm_jsx(Input, {
                  id: "password",
                  type: "password",
                  placeholder: "Enter your password",
                  value: password,
                  onChange: (e) => setPassword(e.target.value),
                  required: !0,
                })
              ),
              LoginForm_jsx(
                "div",
                { className: "flex items-center space-x-2" },
                LoginForm_jsx(Checkbox, {
                  id: "remember-me",
                  checked: rememberMe,
                  onCheckedChange: (checked) => setRememberMe(!0 === checked),
                }),
                LoginForm_jsx(
                  Label,
                  { htmlFor: "remember-me", className: "text-sm font-normal" },
                  "Remember me"
                )
              ),
              LoginForm_jsx(
                ui_button.z,
                { type: "submit", className: "w-full", disabled: isLoading },
                isLoading ? "Logging in..." : "Log In"
              )
            ),
            LoginForm_jsx(
              "div",
              { className: "mt-4 text-center text-sm" },
              LoginForm_jsx(
                "a",
                { href: "#", className: "text-blue-600 hover:underline" },
                "Forgot password?"
              )
            )
          )
        );
      };
      LoginForm.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "LoginForm",
        props: {
          onSubmit: {
            required: !1,
            tsType: {
              name: "signature",
              type: "function",
              raw: "(data: { email: string; password: string; rememberMe: boolean }) => void",
              signature: {
                arguments: [
                  {
                    type: {
                      name: "signature",
                      type: "object",
                      raw: "{ email: string; password: string; rememberMe: boolean }",
                      signature: {
                        properties: [
                          { key: "email", value: { name: "string", required: !0 } },
                          { key: "password", value: { name: "string", required: !0 } },
                          { key: "rememberMe", value: { name: "boolean", required: !0 } },
                        ],
                      },
                    },
                    name: "data",
                  },
                ],
                return: { name: "void" },
              },
            },
            description: "",
          },
          isLoading: {
            required: !1,
            tsType: { name: "boolean" },
            description: "",
            defaultValue: { value: "false", computed: !1 },
          },
        },
      };
      var addon_actions_dist = __webpack_require__(
          "./node_modules/@storybook/addon-actions/dist/index.mjs"
        ),
        LoginForm_stories_jsx = react.createElement;
      const LoginForm_stories = {
          title: "Composition/LoginForm",
          component: LoginForm,
          parameters: {
            layout: "centered",
            docs: {
              description: {
                component: "A login form composed of multiple UI components working together.",
              },
            },
          },
          argTypes: {
            onSubmit: { action: "submitted" },
            isLoading: {
              control: "boolean",
              description: "Whether the form is in a loading state",
            },
          },
        },
        Default = {
          args: { isLoading: !1, onSubmit: (0, addon_actions_dist.aD)("form submitted") },
        },
        Loading = {
          args: { isLoading: !0, onSubmit: (0, addon_actions_dist.aD)("form submitted") },
        },
        WithPrefilledEmail = {
          render: (args) =>
            LoginForm_stories_jsx(
              "div",
              { className: "space-y-4" },
              LoginForm_stories_jsx(
                "p",
                { className: "text-sm text-gray-500" },
                "This example shows a pre-filled email address."
              ),
              LoginForm_stories_jsx(LoginForm, args)
            ),
          args: { isLoading: !1, onSubmit: (0, addon_actions_dist.aD)("form submitted") },
          play: async ({ canvasElement }) => {
            const emailInput = canvasElement.querySelector("#email");
            emailInput &&
              ((emailInput.value = "user@example.com"),
              emailInput.dispatchEvent(new Event("input", { bubbles: !0 })));
          },
        },
        __namedExportsOrder = ["Default", "Loading", "WithPrefilledEmail"];
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    isLoading: false,\n    onSubmit: action("form submitted")\n  }\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Loading.parameters = {
          ...Loading.parameters,
          docs: {
            ...Loading.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    isLoading: true,\n    onSubmit: action("form submitted")\n  }\n}',
              ...Loading.parameters?.docs?.source,
            },
          },
        }),
        (WithPrefilledEmail.parameters = {
          ...WithPrefilledEmail.parameters,
          docs: {
            ...WithPrefilledEmail.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: args => {\n    // This demonstrates how to customize the component for a specific story\n    return <div className="space-y-4">\n        <p className="text-sm text-gray-500">This example shows a pre-filled email address.</p>\n        <LoginForm {...args} />\n      </div>;\n  },\n  args: {\n    isLoading: false,\n    onSubmit: action("form submitted")\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    // This is an example of using the play function to interact with the component\n    const emailInput = canvasElement.querySelector("#email") as HTMLInputElement;\n    if (emailInput) {\n      emailInput.value = "user@example.com";\n      emailInput.dispatchEvent(new Event("input", {\n        bubbles: true\n      }));\n    }\n  }\n}',
              ...WithPrefilledEmail.parameters?.docs?.source,
            },
          },
        });
    },
    "./components/ui/button.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, { z: () => Button });
      var _Users_leonardoperes_Projects_Next_Legend_KickStarter_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            "./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js"
          ),
        _Users_leonardoperes_Projects_Next_Legend_KickStarter_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            "./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"
          ),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js"
        ),
        _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./node_modules/@radix-ui/react-slot/dist/index.mjs"
        ),
        class_variance_authority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/class-variance-authority/dist/index.mjs"
        ),
        _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/lib/utils.ts");
      const _excluded = ["className", "variant", "size", "asChild"];
      var __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement;
      const buttonVariants = (0, class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.j)(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
          {
            variants: {
              variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline: "border border-input hover:bg-accent hover:text-accent-foreground",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "underline-offset-4 hover:underline text-primary",
              },
              size: {
                default: "h-10 py-2 px-4",
                sm: "h-9 px-3 rounded-md",
                lg: "h-11 px-8 rounded-md",
              },
            },
            defaultVariants: { variant: "default", size: "default" },
          }
        ),
        Button = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((_ref, ref) => {
          let { className, variant, size, asChild = !1 } = _ref,
            props = (0,
            _Users_leonardoperes_Projects_Next_Legend_KickStarter_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
              _ref,
              _excluded
            );
          const Comp = asChild ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__.g7 : "button";
          return __jsx(
            Comp,
            (0,
            _Users_leonardoperes_Projects_Next_Legend_KickStarter_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__.Z)(
              {
                className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(
                  buttonVariants({ variant, size, className })
                ),
                ref,
              },
              props
            )
          );
        });
      (Button.displayName = "Button"),
        (Button.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Button",
          props: {
            asChild: {
              required: !1,
              tsType: { name: "boolean" },
              description: "",
              defaultValue: { value: "false", computed: !1 },
            },
          },
          composes: ["VariantProps"],
        });
    },
    "./src/lib/utils.ts": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, { cn: () => cn });
      var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/clsx/dist/clsx.mjs"
        ),
        tailwind_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/tailwind-merge/dist/bundle-mjs.mjs"
        );
      function cn(...inputs) {
        return (0, tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.m6)(
          (0, clsx__WEBPACK_IMPORTED_MODULE_1__.W)(inputs)
        );
      }
    },
  },
]);
