/*! For license information please see Card-stories.b38c42cf.iframe.bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunknext_legend_kickstarter = self.webpackChunknext_legend_kickstarter || []).push([
  [478, 463],
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
    "./src/stories/ui/Card.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          CompleteExamples: () => CompleteExamples,
          Default: () => Default,
          NoFooter: () => NoFooter,
          NoHeader: () => NoHeader,
          WithActions: () => WithActions,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Card_stories,
        });
      var react = __webpack_require__("./node_modules/next/dist/compiled/react/index.js"),
        card = __webpack_require__("./components/ui/card.tsx"),
        ui_button = __webpack_require__("./components/ui/button.tsx"),
        badge = __webpack_require__("./components/ui/badge.tsx"),
        __jsx = react.createElement;
      const BasicCard = () =>
          __jsx(
            card.Zb,
            { className: "w-[350px]" },
            __jsx(
              card.Ol,
              null,
              __jsx(card.ll, null, "Card Title"),
              __jsx(card.SZ, null, "Card Description")
            ),
            __jsx(card.aY, null, __jsx("p", null, "Card Content")),
            __jsx(card.eW, null, __jsx("p", null, "Card Footer"))
          ),
        ProjectCard = () =>
          __jsx(
            card.Zb,
            { className: "w-[350px]" },
            __jsx(
              card.Ol,
              null,
              __jsx(card.ll, null, "Create project"),
              __jsx(card.SZ, null, "Deploy your new project in one-click.")
            ),
            __jsx(
              card.aY,
              null,
              __jsx(
                "form",
                null,
                __jsx(
                  "div",
                  { className: "grid w-full items-center gap-4" },
                  __jsx(
                    "div",
                    { className: "flex flex-col space-y-1.5" },
                    __jsx(
                      "label",
                      { htmlFor: "name", className: "text-sm font-medium leading-none" },
                      "Name"
                    ),
                    __jsx("input", {
                      id: "name",
                      placeholder: "Name of your project",
                      className:
                        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
                    })
                  ),
                  __jsx(
                    "div",
                    { className: "flex flex-col space-y-1.5" },
                    __jsx(
                      "label",
                      { htmlFor: "framework", className: "text-sm font-medium leading-none" },
                      "Framework"
                    ),
                    __jsx(
                      "select",
                      {
                        id: "framework",
                        className:
                          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
                      },
                      __jsx("option", { value: "next" }, "Next.js"),
                      __jsx("option", { value: "sveltekit" }, "SvelteKit"),
                      __jsx("option", { value: "astro" }, "Astro"),
                      __jsx("option", { value: "nuxt" }, "Nuxt.js")
                    )
                  )
                )
              )
            ),
            __jsx(
              card.eW,
              { className: "flex justify-between" },
              __jsx(ui_button.z, { variant: "outline" }, "Cancel"),
              __jsx(ui_button.z, null, "Deploy")
            )
          ),
        ProductCard = () =>
          __jsx(
            card.Zb,
            { className: "w-[350px] overflow-hidden" },
            __jsx(
              "div",
              { className: "aspect-video w-full bg-muted relative" },
              __jsx("div", { className: "absolute top-2 right-2" }, __jsx(badge.C, null, "New"))
            ),
            __jsx(
              card.Ol,
              null,
              __jsx(card.ll, null, "Product Name"),
              __jsx(card.SZ, null, "Product category")
            ),
            __jsx(
              card.aY,
              null,
              __jsx(
                "p",
                { className: "text-sm text-muted-foreground" },
                "This is a brief description of the product. It highlights the key features and benefits."
              ),
              __jsx("p", { className: "text-lg font-bold mt-2" }, "$99.99")
            ),
            __jsx(card.eW, null, __jsx(ui_button.z, { className: "w-full" }, "Add to Cart"))
          ),
        ProfileCard = () =>
          __jsx(
            card.Zb,
            { className: "w-[350px]" },
            __jsx(
              card.Ol,
              { className: "flex flex-row items-center gap-4" },
              __jsx(
                "div",
                {
                  className:
                    "h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold",
                },
                "JP"
              ),
              __jsx(
                "div",
                null,
                __jsx(card.ll, null, "John Doe"),
                __jsx(card.SZ, null, "Software Engineer")
              )
            ),
            __jsx(
              card.aY,
              null,
              __jsx(
                "div",
                { className: "flex flex-col gap-2" },
                __jsx(
                  "div",
                  { className: "flex justify-between" },
                  __jsx("span", { className: "text-sm text-muted-foreground" }, "Email:"),
                  __jsx("span", { className: "text-sm" }, "john.doe@example.com")
                ),
                __jsx(
                  "div",
                  { className: "flex justify-between" },
                  __jsx("span", { className: "text-sm text-muted-foreground" }, "Location:"),
                  __jsx("span", { className: "text-sm" }, "San Francisco, CA")
                ),
                __jsx(
                  "div",
                  { className: "flex justify-between" },
                  __jsx("span", { className: "text-sm text-muted-foreground" }, "Joined:"),
                  __jsx("span", { className: "text-sm" }, "January 2023")
                )
              )
            ),
            __jsx(
              card.eW,
              { className: "flex justify-between" },
              __jsx(ui_button.z, { variant: "outline", size: "sm" }, "Message"),
              __jsx(ui_button.z, { size: "sm" }, "View Profile")
            )
          ),
        CardExamples = () =>
          __jsx(
            "div",
            { className: "grid grid-cols-1 md:grid-cols-2 gap-6" },
            __jsx(
              "div",
              null,
              __jsx("h3", { className: "text-lg font-medium mb-2" }, "Basic Card"),
              __jsx(BasicCard, null)
            ),
            __jsx(
              "div",
              null,
              __jsx("h3", { className: "text-lg font-medium mb-2" }, "Project Card"),
              __jsx(ProjectCard, null)
            ),
            __jsx(
              "div",
              null,
              __jsx("h3", { className: "text-lg font-medium mb-2" }, "Product Card"),
              __jsx(ProductCard, null)
            ),
            __jsx(
              "div",
              null,
              __jsx("h3", { className: "text-lg font-medium mb-2" }, "Profile Card"),
              __jsx(ProfileCard, null)
            )
          );
      (BasicCard.__docgenInfo = { description: "", methods: [], displayName: "BasicCard" }),
        (ProjectCard.__docgenInfo = { description: "", methods: [], displayName: "ProjectCard" }),
        (ProductCard.__docgenInfo = { description: "", methods: [], displayName: "ProductCard" }),
        (ProfileCard.__docgenInfo = { description: "", methods: [], displayName: "ProfileCard" }),
        (CardExamples.__docgenInfo = { description: "", methods: [], displayName: "CardExamples" });
      var Card_stories_jsx = react.createElement;
      const Card_stories = {
          title: "UI/Card",
          component: card.Zb,
          parameters: {
            layout: "centered",
            docs: {
              description: { component: "A container that groups related content and actions." },
            },
          },
          argTypes: {
            className: {
              control: "text",
              description: "Additional CSS classes to apply to the card",
              table: { category: "Appearance" },
            },
          },
        },
        Default = {
          render: () =>
            Card_stories_jsx(
              card.Zb,
              { className: "w-[350px]" },
              Card_stories_jsx(
                card.Ol,
                null,
                Card_stories_jsx(card.ll, null, "Card Title"),
                Card_stories_jsx(card.SZ, null, "Card Description")
              ),
              Card_stories_jsx(card.aY, null, Card_stories_jsx("p", null, "Card Content")),
              Card_stories_jsx(card.eW, null, Card_stories_jsx("p", null, "Card Footer"))
            ),
        },
        WithActions = {
          render: () =>
            Card_stories_jsx(
              card.Zb,
              { className: "w-[350px]" },
              Card_stories_jsx(
                card.Ol,
                null,
                Card_stories_jsx(card.ll, null, "Create project"),
                Card_stories_jsx(card.SZ, null, "Deploy your new project in one-click.")
              ),
              Card_stories_jsx(
                card.aY,
                null,
                Card_stories_jsx("p", null, "This is where your form or content would go.")
              ),
              Card_stories_jsx(
                card.eW,
                { className: "flex justify-between" },
                Card_stories_jsx(ui_button.z, { variant: "outline" }, "Cancel"),
                Card_stories_jsx(ui_button.z, null, "Deploy")
              )
            ),
        },
        NoHeader = {
          render: () =>
            Card_stories_jsx(
              card.Zb,
              { className: "w-[350px]" },
              Card_stories_jsx(
                card.aY,
                { className: "pt-6" },
                Card_stories_jsx("p", null, "This card has no header, just content.")
              ),
              Card_stories_jsx(
                card.eW,
                null,
                Card_stories_jsx(ui_button.z, { className: "w-full" }, "Action")
              )
            ),
        },
        NoFooter = {
          render: () =>
            Card_stories_jsx(
              card.Zb,
              { className: "w-[350px]" },
              Card_stories_jsx(
                card.Ol,
                null,
                Card_stories_jsx(card.ll, null, "Notification"),
                Card_stories_jsx(card.SZ, null, "You have a new message.")
              ),
              Card_stories_jsx(
                card.aY,
                null,
                Card_stories_jsx("p", null, "This card has no footer, just a header and content.")
              )
            ),
        },
        CompleteExamples = {
          render: () => Card_stories_jsx(CardExamples, null),
          parameters: {
            layout: "padded",
            docs: {
              description: {
                story: "Complete set of card examples showing various configurations.",
              },
            },
          },
        },
        __namedExportsOrder = [
          "Default",
          "WithActions",
          "NoHeader",
          "NoFooter",
          "CompleteExamples",
        ];
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  render: () => <Card className="w-[350px]">\n      <CardHeader>\n        <CardTitle>Card Title</CardTitle>\n        <CardDescription>Card Description</CardDescription>\n      </CardHeader>\n      <CardContent>\n        <p>Card Content</p>\n      </CardContent>\n      <CardFooter>\n        <p>Card Footer</p>\n      </CardFooter>\n    </Card>\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (WithActions.parameters = {
          ...WithActions.parameters,
          docs: {
            ...WithActions.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <Card className="w-[350px]">\n      <CardHeader>\n        <CardTitle>Create project</CardTitle>\n        <CardDescription>Deploy your new project in one-click.</CardDescription>\n      </CardHeader>\n      <CardContent>\n        <p>This is where your form or content would go.</p>\n      </CardContent>\n      <CardFooter className="flex justify-between">\n        <Button variant="outline">Cancel</Button>\n        <Button>Deploy</Button>\n      </CardFooter>\n    </Card>\n}',
              ...WithActions.parameters?.docs?.source,
            },
          },
        }),
        (NoHeader.parameters = {
          ...NoHeader.parameters,
          docs: {
            ...NoHeader.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <Card className="w-[350px]">\n      <CardContent className="pt-6">\n        <p>This card has no header, just content.</p>\n      </CardContent>\n      <CardFooter>\n        <Button className="w-full">Action</Button>\n      </CardFooter>\n    </Card>\n}',
              ...NoHeader.parameters?.docs?.source,
            },
          },
        }),
        (NoFooter.parameters = {
          ...NoFooter.parameters,
          docs: {
            ...NoFooter.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <Card className="w-[350px]">\n      <CardHeader>\n        <CardTitle>Notification</CardTitle>\n        <CardDescription>You have a new message.</CardDescription>\n      </CardHeader>\n      <CardContent>\n        <p>This card has no footer, just a header and content.</p>\n      </CardContent>\n    </Card>\n}',
              ...NoFooter.parameters?.docs?.source,
            },
          },
        }),
        (CompleteExamples.parameters = {
          ...CompleteExamples.parameters,
          docs: {
            ...CompleteExamples.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <CardExamples />,\n  parameters: {\n    layout: "padded",\n    docs: {\n      description: {\n        story: "Complete set of card examples showing various configurations."\n      }\n    }\n  }\n}',
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
    "./components/ui/card.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        Ol: () => CardHeader,
        SZ: () => CardDescription,
        Zb: () => Card,
        aY: () => CardContent,
        eW: () => CardFooter,
        ll: () => CardTitle,
      });
      var _Users_leonardoperes_Projects_Next_Legend_KickStarter_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            "./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js"
          ),
        _Users_leonardoperes_Projects_Next_Legend_KickStarter_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            "./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"
          ),
        react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js"
        ),
        _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/lib/utils.ts");
      const _excluded = ["className"],
        _excluded2 = ["className"],
        _excluded3 = ["className"],
        _excluded4 = ["className"],
        _excluded5 = ["className"],
        _excluded6 = ["className"];
      var __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement;
      const Card = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((_ref, ref) => {
        let { className } = _ref,
          props = (0,
          _Users_leonardoperes_Projects_Next_Legend_KickStarter_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            _ref,
            _excluded
          );
        return __jsx(
          "div",
          (0,
          _Users_leonardoperes_Projects_Next_Legend_KickStarter_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {
              ref,
              className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(
                "rounded-lg border bg-card text-card-foreground shadow-sm",
                className
              ),
            },
            props
          )
        );
      });
      Card.displayName = "Card";
      const CardHeader = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((_ref2, ref) => {
        let { className } = _ref2,
          props = (0,
          _Users_leonardoperes_Projects_Next_Legend_KickStarter_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            _ref2,
            _excluded2
          );
        return __jsx(
          "div",
          (0,
          _Users_leonardoperes_Projects_Next_Legend_KickStarter_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {
              ref,
              className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(
                "flex flex-col space-y-1.5 p-6",
                className
              ),
            },
            props
          )
        );
      });
      CardHeader.displayName = "CardHeader";
      const CardTitle = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((_ref3, ref) => {
        let { className } = _ref3,
          props = (0,
          _Users_leonardoperes_Projects_Next_Legend_KickStarter_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            _ref3,
            _excluded3
          );
        return __jsx(
          "h3",
          (0,
          _Users_leonardoperes_Projects_Next_Legend_KickStarter_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {
              ref,
              className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(
                "text-lg font-semibold leading-none tracking-tight",
                className
              ),
            },
            props
          )
        );
      });
      CardTitle.displayName = "CardTitle";
      const CardDescription = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((_ref4, ref) => {
        let { className } = _ref4,
          props = (0,
          _Users_leonardoperes_Projects_Next_Legend_KickStarter_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            _ref4,
            _excluded4
          );
        return __jsx(
          "p",
          (0,
          _Users_leonardoperes_Projects_Next_Legend_KickStarter_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {
              ref,
              className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(
                "text-sm text-muted-foreground",
                className
              ),
            },
            props
          )
        );
      });
      CardDescription.displayName = "CardDescription";
      const CardContent = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((_ref5, ref) => {
        let { className } = _ref5,
          props = (0,
          _Users_leonardoperes_Projects_Next_Legend_KickStarter_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            _ref5,
            _excluded5
          );
        return __jsx(
          "div",
          (0,
          _Users_leonardoperes_Projects_Next_Legend_KickStarter_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {
              ref,
              className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("p-6 pt-0", className),
            },
            props
          )
        );
      });
      CardContent.displayName = "CardContent";
      const CardFooter = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((_ref6, ref) => {
        let { className } = _ref6,
          props = (0,
          _Users_leonardoperes_Projects_Next_Legend_KickStarter_node_modules_next_dist_compiled_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            _ref6,
            _excluded6
          );
        return __jsx(
          "div",
          (0,
          _Users_leonardoperes_Projects_Next_Legend_KickStarter_node_modules_next_dist_compiled_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)(
            {
              ref,
              className: (0, _lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(
                " flex items-center p-6 pt-0",
                className
              ),
            },
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
