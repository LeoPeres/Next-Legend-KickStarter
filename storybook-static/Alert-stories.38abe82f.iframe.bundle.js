/*! For license information please see Alert-stories.38abe82f.iframe.bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunknext_legend_kickstarter = self.webpackChunknext_legend_kickstarter || []).push([
  [255],
  {
    "./src/stories/ui/Alert.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          CompleteExamples: () => CompleteExamples,
          Default: () => Default,
          Destructive: () => Destructive,
          WithoutIcon: () => WithoutIcon,
          WithoutTitle: () => WithoutTitle,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Alert_stories,
        });
      var react = __webpack_require__("./node_modules/next/dist/compiled/react/index.js"),
        esm_extends = __webpack_require__(
          "./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js"
        ),
        objectWithoutProperties = __webpack_require__(
          "./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"
        ),
        dist = __webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),
        utils = __webpack_require__("./src/lib/utils.ts");
      const _excluded = ["className", "variant"],
        _excluded2 = ["className"],
        _excluded3 = ["className"];
      var __jsx = react.createElement;
      const alertVariants = (0, dist.j)(
          "relative w-full rounded-lg border p-4 [&>svg]:absolute [&>svg]:text-foreground [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:translate-y-[-3px] [&>svg~*]:pl-7",
          {
            variants: {
              variant: {
                default: "bg-background text-foreground",
                destructive:
                  "text-destructive border-destructive/50 dark:border-destructive [&>svg]:text-destructive text-destructive",
              },
            },
            defaultVariants: { variant: "default" },
          }
        ),
        Alert = react.forwardRef((_ref, ref) => {
          let { className, variant } = _ref,
            props = (0, objectWithoutProperties.Z)(_ref, _excluded);
          return __jsx(
            "div",
            (0, esm_extends.Z)(
              {
                ref,
                role: "alert",
                className: (0, utils.cn)(alertVariants({ variant }), className),
              },
              props
            )
          );
        });
      Alert.displayName = "Alert";
      const AlertTitle = react.forwardRef((_ref2, ref) => {
        let { className } = _ref2,
          props = (0, objectWithoutProperties.Z)(_ref2, _excluded2);
        return __jsx(
          "h5",
          (0, esm_extends.Z)(
            {
              ref,
              className: (0, utils.cn)("mb-1 font-medium leading-none tracking-tight", className),
            },
            props
          )
        );
      });
      AlertTitle.displayName = "AlertTitle";
      const AlertDescription = react.forwardRef((_ref3, ref) => {
        let { className } = _ref3,
          props = (0, objectWithoutProperties.Z)(_ref3, _excluded3);
        return __jsx(
          "div",
          (0, esm_extends.Z)(
            { ref, className: (0, utils.cn)("text-sm [&_p]:leading-relaxed", className) },
            props
          )
        );
      });
      (AlertDescription.displayName = "AlertDescription"),
        (Alert.__docgenInfo = { description: "", methods: [], displayName: "Alert" }),
        (AlertTitle.__docgenInfo = { description: "", methods: [], displayName: "AlertTitle" }),
        (AlertDescription.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "AlertDescription",
        });
      var createLucideIcon = __webpack_require__(
        "./node_modules/lucide-react/dist/esm/createLucideIcon.js"
      );
      const Terminal = (0, createLucideIcon.Z)("Terminal", [
          ["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }],
          ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }],
        ]),
        CircleAlert = (0, createLucideIcon.Z)("CircleAlert", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
          ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
        ]),
        Info = (0, createLucideIcon.Z)("Info", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["path", { d: "M12 16v-4", key: "1dtifu" }],
          ["path", { d: "M12 8h.01", key: "e9boi3" }],
        ]),
        CircleCheckBig = (0, createLucideIcon.Z)("CircleCheckBig", [
          ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
          ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
        ]),
        Bell = (0, createLucideIcon.Z)("Bell", [
          ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
          [
            "path",
            {
              d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
              key: "11g9vi",
            },
          ],
        ]);
      var AlertExamples_jsx = react.createElement;
      const DefaultAlert = () =>
          AlertExamples_jsx(
            Alert,
            { className: "w-full max-w-md" },
            AlertExamples_jsx(Terminal, { className: "h-4 w-4" }),
            AlertExamples_jsx(AlertTitle, null, "Heads up!"),
            AlertExamples_jsx(
              AlertDescription,
              null,
              "You can add components to your app using the CLI."
            )
          ),
        DestructiveAlert = () =>
          AlertExamples_jsx(
            Alert,
            { variant: "destructive", className: "w-full max-w-md" },
            AlertExamples_jsx(CircleAlert, { className: "h-4 w-4" }),
            AlertExamples_jsx(AlertTitle, null, "Error"),
            AlertExamples_jsx(
              AlertDescription,
              null,
              "Your session has expired. Please log in again."
            )
          ),
        InfoAlert = () =>
          AlertExamples_jsx(
            Alert,
            { className: "w-full max-w-md" },
            AlertExamples_jsx(Info, { className: "h-4 w-4" }),
            AlertExamples_jsx(AlertTitle, null, "Information"),
            AlertExamples_jsx(
              AlertDescription,
              null,
              "This feature is currently in beta and may change."
            )
          ),
        SuccessAlert = () =>
          AlertExamples_jsx(
            Alert,
            { className: "w-full max-w-md border-green-500" },
            AlertExamples_jsx(CircleCheckBig, { className: "h-4 w-4 text-green-500" }),
            AlertExamples_jsx(AlertTitle, { className: "text-green-500" }, "Success"),
            AlertExamples_jsx(AlertDescription, null, "Your changes have been saved successfully.")
          ),
        NotificationAlert = () =>
          AlertExamples_jsx(
            Alert,
            { className: "w-full max-w-md" },
            AlertExamples_jsx(Bell, { className: "h-4 w-4" }),
            AlertExamples_jsx(AlertTitle, null, "Notification"),
            AlertExamples_jsx(AlertDescription, null, "You have 3 unread messages in your inbox.")
          ),
        AlertExamples = () =>
          AlertExamples_jsx(
            "div",
            { className: "space-y-6" },
            AlertExamples_jsx(
              "div",
              null,
              AlertExamples_jsx("h3", { className: "text-lg font-medium mb-2" }, "Default Alert"),
              AlertExamples_jsx(DefaultAlert, null)
            ),
            AlertExamples_jsx(
              "div",
              null,
              AlertExamples_jsx(
                "h3",
                { className: "text-lg font-medium mb-2" },
                "Destructive Alert"
              ),
              AlertExamples_jsx(DestructiveAlert, null)
            ),
            AlertExamples_jsx(
              "div",
              null,
              AlertExamples_jsx("h3", { className: "text-lg font-medium mb-2" }, "Info Alert"),
              AlertExamples_jsx(InfoAlert, null)
            ),
            AlertExamples_jsx(
              "div",
              null,
              AlertExamples_jsx(
                "h3",
                { className: "text-lg font-medium mb-2" },
                "Success Alert (Custom Styled)"
              ),
              AlertExamples_jsx(SuccessAlert, null)
            ),
            AlertExamples_jsx(
              "div",
              null,
              AlertExamples_jsx(
                "h3",
                { className: "text-lg font-medium mb-2" },
                "Notification Alert"
              ),
              AlertExamples_jsx(NotificationAlert, null)
            )
          );
      (DefaultAlert.__docgenInfo = { description: "", methods: [], displayName: "DefaultAlert" }),
        (DestructiveAlert.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "DestructiveAlert",
        }),
        (InfoAlert.__docgenInfo = { description: "", methods: [], displayName: "InfoAlert" }),
        (SuccessAlert.__docgenInfo = { description: "", methods: [], displayName: "SuccessAlert" }),
        (NotificationAlert.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "NotificationAlert",
        }),
        (AlertExamples.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "AlertExamples",
        });
      var Alert_stories_jsx = react.createElement;
      const Alert_stories = {
          title: "UI/Alert",
          component: Alert,
          parameters: {
            layout: "centered",
            docs: {
              description: {
                component:
                  "Displays a callout for user attention with different variants for different scenarios.",
              },
            },
          },
          argTypes: {
            variant: {
              control: "select",
              options: ["default", "destructive"],
              description: "The visual style of the alert",
              table: { category: "Appearance", defaultValue: { summary: "default" } },
            },
            className: {
              control: "text",
              description: "Additional CSS classes to apply",
              table: { category: "Appearance" },
            },
          },
        },
        Default = {
          render: () =>
            Alert_stories_jsx(
              Alert,
              { className: "w-full max-w-md" },
              Alert_stories_jsx(Terminal, { className: "h-4 w-4" }),
              Alert_stories_jsx(AlertTitle, null, "Heads up!"),
              Alert_stories_jsx(
                AlertDescription,
                null,
                "You can add components to your app using the CLI."
              )
            ),
        },
        Destructive = {
          render: () =>
            Alert_stories_jsx(
              Alert,
              { variant: "destructive", className: "w-full max-w-md" },
              Alert_stories_jsx(CircleAlert, { className: "h-4 w-4" }),
              Alert_stories_jsx(AlertTitle, null, "Error"),
              Alert_stories_jsx(
                AlertDescription,
                null,
                "Your session has expired. Please log in again."
              )
            ),
        },
        WithoutIcon = {
          render: () =>
            Alert_stories_jsx(
              Alert,
              { className: "w-full max-w-md" },
              Alert_stories_jsx(AlertTitle, null, "Note"),
              Alert_stories_jsx(AlertDescription, null, "This is an alert without an icon.")
            ),
        },
        WithoutTitle = {
          render: () =>
            Alert_stories_jsx(
              Alert,
              { className: "w-full max-w-md" },
              Alert_stories_jsx(Info, { className: "h-4 w-4" }),
              Alert_stories_jsx(
                AlertDescription,
                null,
                "This is an alert with an icon but no title."
              )
            ),
        },
        CompleteExamples = {
          render: () => Alert_stories_jsx(AlertExamples, null),
          parameters: {
            layout: "padded",
            docs: {
              description: {
                story: "Complete set of alert examples showing various configurations.",
              },
            },
          },
        },
        __namedExportsOrder = [
          "Default",
          "Destructive",
          "WithoutIcon",
          "WithoutTitle",
          "CompleteExamples",
        ];
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  render: () => <Alert className="w-full max-w-md">\n      <Terminal className="h-4 w-4" />\n      <AlertTitle>Heads up!</AlertTitle>\n      <AlertDescription>You can add components to your app using the CLI.</AlertDescription>\n    </Alert>\n}',
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
                '{\n  render: () => <Alert variant="destructive" className="w-full max-w-md">\n      <AlertCircle className="h-4 w-4" />\n      <AlertTitle>Error</AlertTitle>\n      <AlertDescription>Your session has expired. Please log in again.</AlertDescription>\n    </Alert>\n}',
              ...Destructive.parameters?.docs?.source,
            },
          },
        }),
        (WithoutIcon.parameters = {
          ...WithoutIcon.parameters,
          docs: {
            ...WithoutIcon.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <Alert className="w-full max-w-md">\n      <AlertTitle>Note</AlertTitle>\n      <AlertDescription>This is an alert without an icon.</AlertDescription>\n    </Alert>\n}',
              ...WithoutIcon.parameters?.docs?.source,
            },
          },
        }),
        (WithoutTitle.parameters = {
          ...WithoutTitle.parameters,
          docs: {
            ...WithoutTitle.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <Alert className="w-full max-w-md">\n      <Info className="h-4 w-4" />\n      <AlertDescription>This is an alert with an icon but no title.</AlertDescription>\n    </Alert>\n}',
              ...WithoutTitle.parameters?.docs?.source,
            },
          },
        }),
        (CompleteExamples.parameters = {
          ...CompleteExamples.parameters,
          docs: {
            ...CompleteExamples.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <AlertExamples />,\n  parameters: {\n    layout: "padded",\n    docs: {\n      description: {\n        story: "Complete set of alert examples showing various configurations."\n      }\n    }\n  }\n}',
              ...CompleteExamples.parameters?.docs?.source,
            },
          },
        });
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
    "./node_modules/lucide-react/dist/esm/createLucideIcon.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => createLucideIcon });
      var react = __webpack_require__("./node_modules/next/dist/compiled/react/index.js");
      const mergeClasses = (...classes) =>
        classes
          .filter(
            (className, index, array) =>
              Boolean(className) && "" !== className.trim() && array.indexOf(className) === index
          )
          .join(" ")
          .trim();
      var defaultAttributes = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      };
      const Icon = (0, react.forwardRef)(
          (
            {
              color = "currentColor",
              size = 24,
              strokeWidth = 2,
              absoluteStrokeWidth,
              className = "",
              children,
              iconNode,
              ...rest
            },
            ref
          ) =>
            (0, react.createElement)(
              "svg",
              {
                ref,
                ...defaultAttributes,
                width: size,
                height: size,
                stroke: color,
                strokeWidth: absoluteStrokeWidth
                  ? (24 * Number(strokeWidth)) / Number(size)
                  : strokeWidth,
                className: mergeClasses("lucide", className),
                ...rest,
              },
              [
                ...iconNode.map(([tag, attrs]) => (0, react.createElement)(tag, attrs)),
                ...(Array.isArray(children) ? children : [children]),
              ]
            )
        ),
        createLucideIcon = (iconName, iconNode) => {
          const Component = (0, react.forwardRef)(({ className, ...props }, ref) => {
            return (0, react.createElement)(Icon, {
              ref,
              iconNode,
              className: mergeClasses(
                `lucide-${((string = iconName), string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase())}`,
                className
              ),
              ...props,
            });
            var string;
          });
          return (Component.displayName = `${iconName}`), Component;
        };
    },
  },
]);
