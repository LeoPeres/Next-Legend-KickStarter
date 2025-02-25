/*! For license information please see stories-ui-Button-stories.e058aaca.iframe.bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunknext_legend_kickstarter = self.webpackChunknext_legend_kickstarter || []).push([
  [447],
  {
    "./src/stories/ui/Button.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
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
    "./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js": (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      var f = __webpack_require__("./node_modules/next/dist/compiled/react/index.js"),
        k = Symbol.for("react.element"),
        l = Symbol.for("react.fragment"),
        m = Object.prototype.hasOwnProperty,
        n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        p = { key: !0, ref: !0, __self: !0, __source: !0 };
      function q(c, a, g) {
        var b,
          d = {},
          e = null,
          h = null;
        for (b in (void 0 !== g && (e = "" + g),
        void 0 !== a.key && (e = "" + a.key),
        void 0 !== a.ref && (h = a.ref),
        a))
          m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
        if (c && c.defaultProps) for (b in (a = c.defaultProps)) void 0 === d[b] && (d[b] = a[b]);
        return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
      }
      (exports.Fragment = l), (exports.jsx = q), (exports.jsxs = q);
    },
    "./node_modules/next/dist/compiled/react/jsx-runtime.js": (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      module.exports = __webpack_require__(
        "./node_modules/next/dist/compiled/react/cjs/react-jsx-runtime.production.min.js"
      );
    },
  },
]);
