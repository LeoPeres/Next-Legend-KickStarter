(self.webpackChunknext_legend_kickstarter = self.webpackChunknext_legend_kickstarter || []).push([
  [410],
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
    "./src/stories/ui/Button.mdx": (
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
        _Button_stories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./src/stories/ui/Button.stories.tsx"
        );
      function _createMdxContent(props) {
        const _components = {
          a: "a",
          code: "code",
          h2: "h2",
          li: "li",
          p: "p",
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
                { of: _Button_stories__WEBPACK_IMPORTED_MODULE_2__ }
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Dx,
                {}
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.QE,
                { children: "A versatile button component with multiple variants and sizes." }
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(
                _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.dk,
                {
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                      children:
                        "The Button component is a fundamental UI element used for triggering actions or events. It\nprovides visual feedback to users and can be customized with different variants and sizes to match\nthe design requirements. ## Features - Multiple visual variants (default, destructive, outline,\nsecondary, ghost, link) - Three size options (small, default, large) - Support for disabled state",
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                      children: [
                        "\n",
                        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                          children: [
                            "Can be rendered as a child component using the ",
                            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                              _components.code,
                              { children: "asChild" }
                            ),
                            " prop - Fully accessible with keyboard\nnavigation and focus states ## Usage Guidelines - Use the default variant for primary actions -\nUse the destructive variant for potentially dangerous actions - Use the outline or ghost variants\nfor secondary actions - Use the link variant for navigation actions that should appear as links -\nChoose appropriate sizes based on the context and importance of the action",
                          ],
                        }),
                        "\n",
                      ],
                    }),
                  ],
                }
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: "basic-example",
                children: "Basic Example",
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
                id: "variants",
                children: "Variants",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,
                { of: _Button_stories__WEBPACK_IMPORTED_MODULE_2__.AllVariants }
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: "sizes",
                children: "Sizes",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,
                { of: _Button_stories__WEBPACK_IMPORTED_MODULE_2__.DifferentSizes }
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: "with-icons",
                children: "With Icons",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,
                { of: _Button_stories__WEBPACK_IMPORTED_MODULE_2__.WithIcons }
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: "states",
                children: "States",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,
                { of: _Button_stories__WEBPACK_IMPORTED_MODULE_2__.ButtonStateExamples }
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: "complete-examples",
                children: "Complete Examples",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.oG,
                { of: _Button_stories__WEBPACK_IMPORTED_MODULE_2__.CompleteExamples }
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: "all-stories",
                children: "All Stories",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.fQ,
                {}
              ),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: "accessibility-considerations",
                children: "Accessibility Considerations",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children: "The Button component is designed with accessibility in mind:",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: "It maintains a proper contrast ratio for all variants",
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: "It includes focus states for keyboard navigation",
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: "It uses appropriate ARIA attributes",
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: "It supports keyboard interaction",
                  }),
                  "\n",
                ],
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
                id: "design-tokens",
                children: "Design Tokens",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
                children: "The Button component uses the following design tokens:",
              }),
              "\n",
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
                children: [
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
                        children: "--primary",
                      }),
                      ": Background color for the default variant",
                    ],
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
                        children: "--primary-foreground",
                      }),
                      ": Text color for the default variant",
                    ],
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
                        children: "--destructive",
                      }),
                      ": Background color for the destructive variant",
                    ],
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
                        children: "--destructive-foreground",
                      }),
                      ": Text color for the destructive variant",
                    ],
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
                        children: "--secondary",
                      }),
                      ": Background color for the secondary variant",
                    ],
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
                        children: "--secondary-foreground",
                      }),
                      ": Text color for the secondary variant",
                    ],
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
                        children: "--accent",
                      }),
                      ": Background color for hover states in outline and ghost variants",
                    ],
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
                        children: "--accent-foreground",
                      }),
                      ": Text color for hover states in outline and ghost variants",
                    ],
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
                    children: [
                      (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
                        children: "--ring",
                      }),
                      ": Color for the focus ring",
                    ],
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
                      { href: "/docs/ui-iconbutton--docs", children: "IconButton" }
                    ),
                  }),
                  "\n",
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                      _components.a,
                      { href: "/docs/ui-buttongroup--docs", children: "ButtonGroup" }
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
    "./src/stories/ui/Button.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          AllVariants: () => AllVariants,
          ButtonStateExamples: () => ButtonStateExamples,
          CompleteExamples: () => CompleteExamples,
          Default: () => Default,
          Destructive: () => Destructive,
          DifferentSizes: () => DifferentSizes,
          Disabled: () => Disabled,
          Ghost: () => Ghost,
          Large: () => Large,
          Link: () => Link,
          Outline: () => Outline,
          Secondary: () => Secondary,
          Small: () => Small,
          WithIcons: () => WithIcons,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Button_stories,
        });
      var react = __webpack_require__("./node_modules/next/dist/compiled/react/index.js"),
        esm_extends = __webpack_require__(
          "./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js"
        ),
        objectWithoutProperties = __webpack_require__(
          "./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"
        ),
        dist = __webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs"),
        class_variance_authority_dist = __webpack_require__(
          "./node_modules/class-variance-authority/dist/index.mjs"
        ),
        clsx = __webpack_require__("./node_modules/clsx/dist/clsx.mjs"),
        bundle_mjs = __webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");
      function cn(...inputs) {
        return (0, bundle_mjs.m6)((0, clsx.W)(inputs));
      }
      const _excluded = ["className", "variant", "size", "asChild"];
      var __jsx = react.createElement;
      const buttonVariants = (0, class_variance_authority_dist.j)(
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
        Button = react.forwardRef((_ref, ref) => {
          let { className, variant, size, asChild = !1 } = _ref,
            props = (0, objectWithoutProperties.Z)(_ref, _excluded);
          const Comp = asChild ? dist.g7 : "button";
          return __jsx(
            Comp,
            (0, esm_extends.Z)(
              { className: cn(buttonVariants({ variant, size, className })), ref },
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
      var circle_plus = __webpack_require__(
          "./node_modules/lucide-react/dist/esm/icons/circle-plus.js"
        ),
        trash = __webpack_require__("./node_modules/lucide-react/dist/esm/icons/trash.js"),
        save = __webpack_require__("./node_modules/lucide-react/dist/esm/icons/save.js"),
        mail = __webpack_require__("./node_modules/lucide-react/dist/esm/icons/mail.js"),
        arrow_right = __webpack_require__(
          "./node_modules/lucide-react/dist/esm/icons/arrow-right.js"
        ),
        ButtonExamples_jsx = react.createElement;
      const ButtonWithIcon = () =>
          ButtonExamples_jsx(
            "div",
            { className: "flex flex-col gap-4" },
            ButtonExamples_jsx(
              "div",
              { className: "flex gap-4" },
              ButtonExamples_jsx(
                Button,
                null,
                ButtonExamples_jsx(circle_plus.Z, { className: "mr-2 h-4 w-4" }),
                "Add New"
              ),
              ButtonExamples_jsx(
                Button,
                { variant: "destructive" },
                ButtonExamples_jsx(trash.Z, { className: "mr-2 h-4 w-4" }),
                "Delete"
              ),
              ButtonExamples_jsx(
                Button,
                { variant: "outline" },
                ButtonExamples_jsx(save.Z, { className: "mr-2 h-4 w-4" }),
                "Save"
              )
            ),
            ButtonExamples_jsx(
              "div",
              { className: "flex gap-4" },
              ButtonExamples_jsx(
                Button,
                { variant: "secondary" },
                ButtonExamples_jsx(mail.Z, { className: "mr-2 h-4 w-4" }),
                "Email"
              ),
              ButtonExamples_jsx(
                Button,
                { variant: "ghost" },
                ButtonExamples_jsx(arrow_right.Z, { className: "mr-2 h-4 w-4" }),
                "Next"
              )
            )
          ),
        ButtonSizes = () =>
          ButtonExamples_jsx(
            "div",
            { className: "flex items-center gap-4" },
            ButtonExamples_jsx(Button, { size: "sm" }, "Small"),
            ButtonExamples_jsx(Button, { size: "default" }, "Default"),
            ButtonExamples_jsx(Button, { size: "lg" }, "Large")
          ),
        ButtonVariants = () =>
          ButtonExamples_jsx(
            "div",
            { className: "flex flex-col gap-4" },
            ButtonExamples_jsx(
              "div",
              { className: "flex gap-4" },
              ButtonExamples_jsx(Button, { variant: "default" }, "Default"),
              ButtonExamples_jsx(Button, { variant: "destructive" }, "Destructive"),
              ButtonExamples_jsx(Button, { variant: "outline" }, "Outline")
            ),
            ButtonExamples_jsx(
              "div",
              { className: "flex gap-4" },
              ButtonExamples_jsx(Button, { variant: "secondary" }, "Secondary"),
              ButtonExamples_jsx(Button, { variant: "ghost" }, "Ghost"),
              ButtonExamples_jsx(Button, { variant: "link" }, "Link")
            )
          ),
        ButtonStates = () =>
          ButtonExamples_jsx(
            "div",
            { className: "flex gap-4" },
            ButtonExamples_jsx(Button, null, "Enabled"),
            ButtonExamples_jsx(Button, { disabled: !0 }, "Disabled"),
            ButtonExamples_jsx(
              Button,
              { className: "opacity-50 cursor-not-allowed" },
              "Custom Disabled"
            )
          ),
        ButtonUsageExamples = () =>
          ButtonExamples_jsx(
            "div",
            { className: "space-y-8" },
            ButtonExamples_jsx(
              "div",
              null,
              ButtonExamples_jsx(
                "h3",
                { className: "text-lg font-medium mb-2" },
                "Button with Icons"
              ),
              ButtonExamples_jsx(ButtonWithIcon, null)
            ),
            ButtonExamples_jsx(
              "div",
              null,
              ButtonExamples_jsx("h3", { className: "text-lg font-medium mb-2" }, "Button Sizes"),
              ButtonExamples_jsx(ButtonSizes, null)
            ),
            ButtonExamples_jsx(
              "div",
              null,
              ButtonExamples_jsx(
                "h3",
                { className: "text-lg font-medium mb-2" },
                "Button Variants"
              ),
              ButtonExamples_jsx(ButtonVariants, null)
            ),
            ButtonExamples_jsx(
              "div",
              null,
              ButtonExamples_jsx("h3", { className: "text-lg font-medium mb-2" }, "Button States"),
              ButtonExamples_jsx(ButtonStates, null)
            )
          );
      (ButtonWithIcon.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "ButtonWithIcon",
      }),
        (ButtonSizes.__docgenInfo = { description: "", methods: [], displayName: "ButtonSizes" }),
        (ButtonVariants.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "ButtonVariants",
        }),
        (ButtonStates.__docgenInfo = { description: "", methods: [], displayName: "ButtonStates" }),
        (ButtonUsageExamples.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "ButtonUsageExamples",
        });
      var Button_stories_jsx = react.createElement;
      const Button_stories = {
          title: "UI/Button",
          component: Button,
          parameters: {
            layout: "centered",
            docs: {
              description: {
                component: "A versatile button component with multiple variants and sizes.",
              },
            },
          },
          argTypes: {
            variant: {
              control: "select",
              options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
              description: "The visual style of the button",
              table: { category: "Appearance", defaultValue: { summary: "default" } },
            },
            size: {
              control: "select",
              options: ["default", "sm", "lg"],
              description: "The size of the button",
              table: { category: "Appearance", defaultValue: { summary: "default" } },
            },
            asChild: {
              control: "boolean",
              description: "Whether to render as a child component",
              table: { category: "Behavior", defaultValue: { summary: "false" } },
            },
            disabled: {
              control: "boolean",
              description: "Whether the button is disabled",
              table: { category: "State", defaultValue: { summary: "false" } },
            },
            className: {
              control: "text",
              description: "Additional CSS classes to apply",
              table: { category: "Appearance" },
            },
            children: {
              control: "text",
              description: "The content to display inside the button",
              table: { category: "Content" },
            },
            onClick: {
              action: "clicked",
              description: "Function called when the button is clicked",
              table: { category: "Events" },
            },
          },
        },
        Default = { args: { children: "Button", variant: "default", size: "default" } },
        Destructive = { args: { children: "Destructive", variant: "destructive" } },
        Outline = { args: { children: "Outline", variant: "outline" } },
        Secondary = { args: { children: "Secondary", variant: "secondary" } },
        Ghost = { args: { children: "Ghost", variant: "ghost" } },
        Link = { args: { children: "Link", variant: "link" } },
        Small = { args: { children: "Small", size: "sm" } },
        Large = { args: { children: "Large", size: "lg" } },
        Disabled = { args: { children: "Disabled", disabled: !0 } },
        WithIcons = {
          render: () => Button_stories_jsx(ButtonWithIcon, null),
          parameters: {
            docs: {
              description: { story: "Buttons can include icons to enhance visual communication." },
            },
          },
        },
        DifferentSizes = {
          render: () => Button_stories_jsx(ButtonSizes, null),
          parameters: {
            docs: {
              description: { story: "Buttons come in three sizes: small, default, and large." },
            },
          },
        },
        AllVariants = {
          render: () => Button_stories_jsx(ButtonVariants, null),
          parameters: { docs: { description: { story: "All available button variants." } } },
        },
        ButtonStateExamples = {
          render: () => Button_stories_jsx(ButtonStates, null),
          parameters: { docs: { description: { story: "Buttons can be enabled or disabled." } } },
        },
        CompleteExamples = {
          render: () => Button_stories_jsx(ButtonUsageExamples, null),
          parameters: {
            layout: "padded",
            docs: {
              description: {
                story: "Complete set of button examples showing various configurations.",
              },
            },
          },
        },
        __namedExportsOrder = [
          "Default",
          "Destructive",
          "Outline",
          "Secondary",
          "Ghost",
          "Link",
          "Small",
          "Large",
          "Disabled",
          "WithIcons",
          "DifferentSizes",
          "AllVariants",
          "ButtonStateExamples",
          "CompleteExamples",
        ];
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    children: "Button",\n    variant: "default",\n    size: "default"\n  }\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Destructive.parameters = {
          ...Destructive.parameters,
          docs: {
            ...Destructive.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    children: "Destructive",\n    variant: "destructive"\n  }\n}',
              ...Destructive.parameters?.docs?.source,
            },
          },
        }),
        (Outline.parameters = {
          ...Outline.parameters,
          docs: {
            ...Outline.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    children: "Outline",\n    variant: "outline"\n  }\n}',
              ...Outline.parameters?.docs?.source,
            },
          },
        }),
        (Secondary.parameters = {
          ...Secondary.parameters,
          docs: {
            ...Secondary.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    children: "Secondary",\n    variant: "secondary"\n  }\n}',
              ...Secondary.parameters?.docs?.source,
            },
          },
        }),
        (Ghost.parameters = {
          ...Ghost.parameters,
          docs: {
            ...Ghost.parameters?.docs,
            source: {
              originalSource: '{\n  args: {\n    children: "Ghost",\n    variant: "ghost"\n  }\n}',
              ...Ghost.parameters?.docs?.source,
            },
          },
        }),
        (Link.parameters = {
          ...Link.parameters,
          docs: {
            ...Link.parameters?.docs,
            source: {
              originalSource: '{\n  args: {\n    children: "Link",\n    variant: "link"\n  }\n}',
              ...Link.parameters?.docs?.source,
            },
          },
        }),
        (Small.parameters = {
          ...Small.parameters,
          docs: {
            ...Small.parameters?.docs,
            source: {
              originalSource: '{\n  args: {\n    children: "Small",\n    size: "sm"\n  }\n}',
              ...Small.parameters?.docs?.source,
            },
          },
        }),
        (Large.parameters = {
          ...Large.parameters,
          docs: {
            ...Large.parameters?.docs,
            source: {
              originalSource: '{\n  args: {\n    children: "Large",\n    size: "lg"\n  }\n}',
              ...Large.parameters?.docs?.source,
            },
          },
        }),
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...Disabled.parameters?.docs,
            source: {
              originalSource: '{\n  args: {\n    children: "Disabled",\n    disabled: true\n  }\n}',
              ...Disabled.parameters?.docs?.source,
            },
          },
        }),
        (WithIcons.parameters = {
          ...WithIcons.parameters,
          docs: {
            ...WithIcons.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <ButtonWithIcon />,\n  parameters: {\n    docs: {\n      description: {\n        story: "Buttons can include icons to enhance visual communication."\n      }\n    }\n  }\n}',
              ...WithIcons.parameters?.docs?.source,
            },
          },
        }),
        (DifferentSizes.parameters = {
          ...DifferentSizes.parameters,
          docs: {
            ...DifferentSizes.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <ButtonSizes />,\n  parameters: {\n    docs: {\n      description: {\n        story: "Buttons come in three sizes: small, default, and large."\n      }\n    }\n  }\n}',
              ...DifferentSizes.parameters?.docs?.source,
            },
          },
        }),
        (AllVariants.parameters = {
          ...AllVariants.parameters,
          docs: {
            ...AllVariants.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <ButtonVariants />,\n  parameters: {\n    docs: {\n      description: {\n        story: "All available button variants."\n      }\n    }\n  }\n}',
              ...AllVariants.parameters?.docs?.source,
            },
          },
        }),
        (ButtonStateExamples.parameters = {
          ...ButtonStateExamples.parameters,
          docs: {
            ...ButtonStateExamples.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <ButtonStates />,\n  parameters: {\n    docs: {\n      description: {\n        story: "Buttons can be enabled or disabled."\n      }\n    }\n  }\n}',
              ...ButtonStateExamples.parameters?.docs?.source,
            },
          },
        }),
        (CompleteExamples.parameters = {
          ...CompleteExamples.parameters,
          docs: {
            ...CompleteExamples.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <ButtonUsageExamples />,\n  parameters: {\n    layout: "padded",\n    docs: {\n      description: {\n        story: "Complete set of button examples showing various configurations."\n      }\n    }\n  }\n}',
              ...CompleteExamples.parameters?.docs?.source,
            },
          },
        });
    },
  },
]);
