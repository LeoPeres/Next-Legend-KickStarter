"use strict";
(self.webpackChunknext_legend_kickstarter = self.webpackChunknext_legend_kickstarter || []).push([
  [46],
  {
    "./src/stories/ui/Badge.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          CompleteExamples: () => CompleteExamples,
          Default: () => Default,
          Destructive: () => Destructive,
          Outline: () => Outline,
          Secondary: () => Secondary,
          WithCustomClass: () => WithCustomClass,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Badge_stories,
        });
      var react = __webpack_require__("./node_modules/next/dist/compiled/react/index.js"),
        badge = __webpack_require__("./components/ui/badge.tsx"),
        __jsx = react.createElement;
      const BadgeVariants = () =>
          __jsx(
            "div",
            { className: "flex flex-wrap gap-2" },
            __jsx(badge.C, { variant: "default" }, "Default"),
            __jsx(badge.C, { variant: "secondary" }, "Secondary"),
            __jsx(badge.C, { variant: "destructive" }, "Destructive"),
            __jsx(badge.C, { variant: "outline" }, "Outline")
          ),
        BadgeWithIcons = () =>
          __jsx(
            "div",
            { className: "flex flex-wrap gap-2" },
            __jsx(
              badge.C,
              { className: "gap-1" },
              __jsx(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "12",
                  height: "12",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                },
                __jsx("circle", { cx: "12", cy: "12", r: "10" }),
                __jsx("path", { d: "m9 12 2 2 4-4" })
              ),
              "Verified"
            ),
            __jsx(
              badge.C,
              { variant: "secondary", className: "gap-1" },
              __jsx(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "12",
                  height: "12",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                },
                __jsx("path", { d: "M12 2v20" }),
                __jsx("path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" })
              ),
              "Paid"
            ),
            __jsx(
              badge.C,
              { variant: "destructive", className: "gap-1" },
              __jsx(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "12",
                  height: "12",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                },
                __jsx("path", { d: "M18 6 6 18" }),
                __jsx("path", { d: "m6 6 12 12" })
              ),
              "Rejected"
            )
          ),
        CustomBadges = () =>
          __jsx(
            "div",
            { className: "flex flex-wrap gap-2" },
            __jsx(badge.C, { className: "bg-blue-500 hover:bg-blue-700 text-white" }, "Blue"),
            __jsx(badge.C, { className: "bg-green-500 hover:bg-green-700 text-white" }, "Green"),
            __jsx(badge.C, { className: "bg-purple-500 hover:bg-purple-700 text-white" }, "Purple"),
            __jsx(badge.C, { className: "bg-amber-500 hover:bg-amber-700 text-white" }, "Amber"),
            __jsx(badge.C, { className: "bg-pink-500 hover:bg-pink-700 text-white" }, "Pink")
          ),
        BadgeUseCases = () =>
          __jsx(
            "div",
            { className: "flex flex-col gap-4" },
            __jsx(
              "div",
              { className: "flex items-center gap-2" },
              __jsx("span", null, "Status:"),
              __jsx(
                badge.C,
                {
                  variant: "outline",
                  className: "bg-green-100 text-green-800 hover:bg-green-200 border-green-500",
                },
                "Active"
              )
            ),
            __jsx(
              "div",
              { className: "flex items-center gap-2" },
              __jsx("span", null, "Category:"),
              __jsx(badge.C, { variant: "secondary" }, "Technology")
            ),
            __jsx(
              "div",
              { className: "flex items-center gap-2" },
              __jsx("span", null, "Notifications:"),
              __jsx(badge.C, { variant: "destructive" }, "12")
            ),
            __jsx(
              "div",
              { className: "flex items-center gap-2" },
              __jsx("span", null, "Version:"),
              __jsx(badge.C, { variant: "outline" }, "v1.0.0")
            )
          ),
        BadgeExamples = () =>
          __jsx(
            "div",
            { className: "space-y-8" },
            __jsx(
              "div",
              null,
              __jsx("h3", { className: "text-lg font-medium mb-2" }, "Badge Variants"),
              __jsx(BadgeVariants, null)
            ),
            __jsx(
              "div",
              null,
              __jsx("h3", { className: "text-lg font-medium mb-2" }, "Badges with Icons"),
              __jsx(BadgeWithIcons, null)
            ),
            __jsx(
              "div",
              null,
              __jsx("h3", { className: "text-lg font-medium mb-2" }, "Custom Colored Badges"),
              __jsx(CustomBadges, null)
            ),
            __jsx(
              "div",
              null,
              __jsx("h3", { className: "text-lg font-medium mb-2" }, "Badge Use Cases"),
              __jsx(BadgeUseCases, null)
            )
          );
      (BadgeVariants.__docgenInfo = { description: "", methods: [], displayName: "BadgeVariants" }),
        (BadgeWithIcons.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "BadgeWithIcons",
        }),
        (CustomBadges.__docgenInfo = { description: "", methods: [], displayName: "CustomBadges" }),
        (BadgeUseCases.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "BadgeUseCases",
        }),
        (BadgeExamples.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "BadgeExamples",
        });
      var Badge_stories_jsx = react.createElement;
      const Badge_stories = {
          title: "UI/Badge",
          component: badge.C,
          parameters: {
            layout: "centered",
            docs: {
              description: {
                component:
                  "A small visual indicator used to highlight status, categories, or counts.",
              },
            },
          },
          argTypes: {
            variant: {
              control: "select",
              options: ["default", "secondary", "destructive", "outline"],
              description: "The visual style of the badge",
              table: { category: "Appearance", defaultValue: { summary: "default" } },
            },
            className: {
              control: "text",
              description: "Additional CSS classes to apply",
              table: { category: "Appearance" },
            },
          },
        },
        Default = { args: { children: "Badge" } },
        Secondary = { args: { variant: "secondary", children: "Secondary" } },
        Destructive = { args: { variant: "destructive", children: "Destructive" } },
        Outline = { args: { variant: "outline", children: "Outline" } },
        WithCustomClass = {
          args: { children: "Custom", className: "bg-blue-500 hover:bg-blue-700 text-white" },
        },
        CompleteExamples = {
          render: () => Badge_stories_jsx(BadgeExamples, null),
          parameters: {
            layout: "padded",
            docs: {
              description: {
                story: "Complete set of badge examples showing various configurations.",
              },
            },
          },
        },
        __namedExportsOrder = [
          "Default",
          "Secondary",
          "Destructive",
          "Outline",
          "WithCustomClass",
          "CompleteExamples",
        ];
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource: '{\n  args: {\n    children: "Badge"\n  }\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Secondary.parameters = {
          ...Secondary.parameters,
          docs: {
            ...Secondary.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    variant: "secondary",\n    children: "Secondary"\n  }\n}',
              ...Secondary.parameters?.docs?.source,
            },
          },
        }),
        (Destructive.parameters = {
          ...Destructive.parameters,
          docs: {
            ...Destructive.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    variant: "destructive",\n    children: "Destructive"\n  }\n}',
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
                '{\n  args: {\n    variant: "outline",\n    children: "Outline"\n  }\n}',
              ...Outline.parameters?.docs?.source,
            },
          },
        }),
        (WithCustomClass.parameters = {
          ...WithCustomClass.parameters,
          docs: {
            ...WithCustomClass.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    children: "Custom",\n    className: "bg-blue-500 hover:bg-blue-700 text-white"\n  }\n}',
              ...WithCustomClass.parameters?.docs?.source,
            },
          },
        }),
        (CompleteExamples.parameters = {
          ...CompleteExamples.parameters,
          docs: {
            ...CompleteExamples.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <BadgeExamples />,\n  parameters: {\n    layout: "padded",\n    docs: {\n      description: {\n        story: "Complete set of badge examples showing various configurations."\n      }\n    }\n  }\n}',
              ...CompleteExamples.parameters?.docs?.source,
            },
          },
        });
    },
    "./components/ui/badge.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { C: () => Badge });
      var _Users_leonardoperes_Projects_Next_Legend_KickStarter_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__ =
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
        class_variance_authority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/class-variance-authority/dist/index.mjs"
        ),
        _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/lib/utils.ts");
      const _excluded = ["className", "variant"];
      var __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement;
      const badgeVariants = (0, class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.j)(
        "inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          variants: {
            variant: {
              default: "bg-primary hover:bg-primary/80 border-transparent text-primary-foreground",
              secondary:
                "bg-secondary hover:bg-secondary/80 border-transparent text-secondary-foreground",
              destructive:
                "bg-destructive hover:bg-destructive/80 border-transparent text-destructive-foreground",
              outline: "text-foreground",
            },
          },
          defaultVariants: { variant: "default" },
        }
      );
      function Badge(_ref) {
        let { className, variant } = _ref,
          props = (0,
          _Users_leonardoperes_Projects_Next_Legend_KickStarter_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            _ref,
            _excluded
          );
        return __jsx(
          "div",
          (0,
          _Users_leonardoperes_Projects_Next_Legend_KickStarter_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)(
            {
              className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(
                badgeVariants({ variant }),
                className
              ),
            },
            props
          )
        );
      }
      Badge.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "Badge",
        composes: ["VariantProps"],
      };
    },
    "./src/lib/utils.ts": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
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
    "./node_modules/class-variance-authority/dist/index.mjs": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { j: () => cva });
      var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "./node_modules/clsx/dist/clsx.mjs"
      );
      const falsyToString = (value) =>
          "boolean" == typeof value ? `${value}` : 0 === value ? "0" : value,
        cx = clsx__WEBPACK_IMPORTED_MODULE_0__.W,
        cva = (base, config) => (props) => {
          var _config_compoundVariants;
          if (null == (null == config ? void 0 : config.variants))
            return cx(
              base,
              null == props ? void 0 : props.class,
              null == props ? void 0 : props.className
            );
          const { variants, defaultVariants } = config,
            getVariantClassNames = Object.keys(variants).map((variant) => {
              const variantProp = null == props ? void 0 : props[variant],
                defaultVariantProp = null == defaultVariants ? void 0 : defaultVariants[variant];
              if (null === variantProp) return null;
              const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
              return variants[variant][variantKey];
            }),
            propsWithoutUndefined =
              props &&
              Object.entries(props).reduce((acc, param) => {
                let [key, value] = param;
                return void 0 === value || (acc[key] = value), acc;
              }, {}),
            getCompoundVariantClassNames =
              null == config ||
              null === (_config_compoundVariants = config.compoundVariants) ||
              void 0 === _config_compoundVariants
                ? void 0
                : _config_compoundVariants.reduce((acc, param) => {
                    let {
                      class: cvClass,
                      className: cvClassName,
                      ...compoundVariantOptions
                    } = param;
                    return Object.entries(compoundVariantOptions).every((param) => {
                      let [key, value] = param;
                      return Array.isArray(value)
                        ? value.includes({ ...defaultVariants, ...propsWithoutUndefined }[key])
                        : { ...defaultVariants, ...propsWithoutUndefined }[key] === value;
                    })
                      ? [...acc, cvClass, cvClassName]
                      : acc;
                  }, []);
          return cx(
            base,
            getVariantClassNames,
            getCompoundVariantClassNames,
            null == props ? void 0 : props.class,
            null == props ? void 0 : props.className
          );
        };
    },
  },
]);
