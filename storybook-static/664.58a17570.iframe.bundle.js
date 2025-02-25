/*! For license information please see 664.58a17570.iframe.bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunknext_legend_kickstarter = self.webpackChunknext_legend_kickstarter || []).push([
  [664],
  {
    "./node_modules/@radix-ui/react-compose-refs/dist/index.mjs": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        F: () => composeRefs,
        e: () => useComposedRefs,
      });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "./node_modules/next/dist/compiled/react/index.js"
      );
      function setRef(ref, value) {
        if ("function" == typeof ref) return ref(value);
        null != ref && (ref.current = value);
      }
      function composeRefs(...refs) {
        return (node) => {
          let hasCleanup = !1;
          const cleanups = refs.map((ref) => {
            const cleanup = setRef(ref, node);
            return hasCleanup || "function" != typeof cleanup || (hasCleanup = !0), cleanup;
          });
          if (hasCleanup)
            return () => {
              for (let i = 0; i < cleanups.length; i++) {
                const cleanup = cleanups[i];
                "function" == typeof cleanup ? cleanup() : setRef(refs[i], null);
              }
            };
        };
      }
      function useComposedRefs(...refs) {
        return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(composeRefs(...refs), refs);
      }
    },
    "./node_modules/@radix-ui/react-slot/dist/index.mjs": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { g7: () => Slot });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js"
        ),
        _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js"
        ),
        Slot = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef) => {
          const { children, ...slotProps } = props,
            childrenArray = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children),
            slottable = childrenArray.find(isSlottable);
          if (slottable) {
            const newElement = slottable.props.children,
              newChildren = childrenArray.map((child) =>
                child === slottable
                  ? react__WEBPACK_IMPORTED_MODULE_0__.Children.count(newElement) > 1
                    ? react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null)
                    : react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(newElement)
                      ? newElement.props.children
                      : null
                  : child
              );
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SlotClone, {
              ...slotProps,
              ref: forwardedRef,
              children: react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(newElement)
                ? react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(newElement, void 0, newChildren)
                : null,
            });
          }
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SlotClone, {
            ...slotProps,
            ref: forwardedRef,
            children,
          });
        });
      Slot.displayName = "Slot";
      var SlotClone = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef) => {
        const { children, ...slotProps } = props;
        if (react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children)) {
          const childrenRef = (function getElementRef(element) {
              let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get,
                mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
              if (mayWarn) return element.ref;
              if (
                ((getter = Object.getOwnPropertyDescriptor(element, "ref")?.get),
                (mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning),
                mayWarn)
              )
                return element.props.ref;
              return element.props.ref || element.ref;
            })(children),
            props2 = (function mergeProps(slotProps, childProps) {
              const overrideProps = { ...childProps };
              for (const propName in childProps) {
                const slotPropValue = slotProps[propName],
                  childPropValue = childProps[propName];
                /^on[A-Z]/.test(propName)
                  ? slotPropValue && childPropValue
                    ? (overrideProps[propName] = (...args) => {
                        childPropValue(...args), slotPropValue(...args);
                      })
                    : slotPropValue && (overrideProps[propName] = slotPropValue)
                  : "style" === propName
                    ? (overrideProps[propName] = { ...slotPropValue, ...childPropValue })
                    : "className" === propName &&
                      (overrideProps[propName] = [slotPropValue, childPropValue]
                        .filter(Boolean)
                        .join(" "));
              }
              return { ...slotProps, ...overrideProps };
            })(slotProps, children.props);
          return (
            children.type !== react__WEBPACK_IMPORTED_MODULE_0__.Fragment &&
              (props2.ref = forwardedRef
                ? (0, _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.F)(
                    forwardedRef,
                    childrenRef
                  )
                : childrenRef),
            react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, props2)
          );
        }
        return react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children) > 1
          ? react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null)
          : null;
      });
      SlotClone.displayName = "SlotClone";
      var Slottable = ({ children }) =>
        (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,
          { children }
        );
      function isSlottable(child) {
        return react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child) && child.type === Slottable;
      }
    },
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
        ui_button = __webpack_require__("./components/ui/button.tsx"),
        createLucideIcon = __webpack_require__(
          "./node_modules/lucide-react/dist/esm/createLucideIcon.js"
        );
      const CirclePlus = (0, createLucideIcon.Z)("CirclePlus", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["path", { d: "M8 12h8", key: "1wcyev" }],
          ["path", { d: "M12 8v8", key: "napkw2" }],
        ]),
        Trash = (0, createLucideIcon.Z)("Trash", [
          ["path", { d: "M3 6h18", key: "d0wm0j" }],
          ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
          ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
        ]),
        Save = (0, createLucideIcon.Z)("Save", [
          [
            "path",
            {
              d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
              key: "1c8476",
            },
          ],
          ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
          ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }],
        ]),
        Mail = (0, createLucideIcon.Z)("Mail", [
          ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
          ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
        ]),
        ArrowRight = (0, createLucideIcon.Z)("ArrowRight", [
          ["path", { d: "M5 12h14", key: "1ays0h" }],
          ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
        ]);
      var __jsx = react.createElement;
      const ButtonWithIcon = () =>
          __jsx(
            "div",
            { className: "flex flex-col gap-4" },
            __jsx(
              "div",
              { className: "flex gap-4" },
              __jsx(ui_button.z, null, __jsx(CirclePlus, { className: "mr-2 h-4 w-4" }), "Add New"),
              __jsx(
                ui_button.z,
                { variant: "destructive" },
                __jsx(Trash, { className: "mr-2 h-4 w-4" }),
                "Delete"
              ),
              __jsx(
                ui_button.z,
                { variant: "outline" },
                __jsx(Save, { className: "mr-2 h-4 w-4" }),
                "Save"
              )
            ),
            __jsx(
              "div",
              { className: "flex gap-4" },
              __jsx(
                ui_button.z,
                { variant: "secondary" },
                __jsx(Mail, { className: "mr-2 h-4 w-4" }),
                "Email"
              ),
              __jsx(
                ui_button.z,
                { variant: "ghost" },
                __jsx(ArrowRight, { className: "mr-2 h-4 w-4" }),
                "Next"
              )
            )
          ),
        ButtonSizes = () =>
          __jsx(
            "div",
            { className: "flex items-center gap-4" },
            __jsx(ui_button.z, { size: "sm" }, "Small"),
            __jsx(ui_button.z, { size: "default" }, "Default"),
            __jsx(ui_button.z, { size: "lg" }, "Large")
          ),
        ButtonVariants = () =>
          __jsx(
            "div",
            { className: "flex flex-col gap-4" },
            __jsx(
              "div",
              { className: "flex gap-4" },
              __jsx(ui_button.z, { variant: "default" }, "Default"),
              __jsx(ui_button.z, { variant: "destructive" }, "Destructive"),
              __jsx(ui_button.z, { variant: "outline" }, "Outline")
            ),
            __jsx(
              "div",
              { className: "flex gap-4" },
              __jsx(ui_button.z, { variant: "secondary" }, "Secondary"),
              __jsx(ui_button.z, { variant: "ghost" }, "Ghost"),
              __jsx(ui_button.z, { variant: "link" }, "Link")
            )
          ),
        ButtonStates = () =>
          __jsx(
            "div",
            { className: "flex gap-4" },
            __jsx(ui_button.z, null, "Enabled"),
            __jsx(ui_button.z, { disabled: !0 }, "Disabled"),
            __jsx(ui_button.z, { className: "opacity-50 cursor-not-allowed" }, "Custom Disabled")
          ),
        ButtonUsageExamples = () =>
          __jsx(
            "div",
            { className: "space-y-8" },
            __jsx(
              "div",
              null,
              __jsx("h3", { className: "text-lg font-medium mb-2" }, "Button with Icons"),
              __jsx(ButtonWithIcon, null)
            ),
            __jsx(
              "div",
              null,
              __jsx("h3", { className: "text-lg font-medium mb-2" }, "Button Sizes"),
              __jsx(ButtonSizes, null)
            ),
            __jsx(
              "div",
              null,
              __jsx("h3", { className: "text-lg font-medium mb-2" }, "Button Variants"),
              __jsx(ButtonVariants, null)
            ),
            __jsx(
              "div",
              null,
              __jsx("h3", { className: "text-lg font-medium mb-2" }, "Button States"),
              __jsx(ButtonStates, null)
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
          component: ui_button.z,
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
    "./components/ui/button.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
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
