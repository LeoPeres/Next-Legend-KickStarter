/*! For license information please see 873.0519f929.iframe.bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunknext_legend_kickstarter = self.webpackChunknext_legend_kickstarter || []).push([
  [873],
  {
    "./node_modules/@radix-ui/primitive/dist/index.mjs": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      function composeEventHandlers(
        originalEventHandler,
        ourEventHandler,
        { checkForDefaultPrevented = !0 } = {}
      ) {
        return function handleEvent(event) {
          if (
            (originalEventHandler?.(event),
            !1 === checkForDefaultPrevented || !event.defaultPrevented)
          )
            return ourEventHandler?.(event);
        };
      }
      __webpack_require__.d(__webpack_exports__, { M: () => composeEventHandlers });
    },
    "./node_modules/@radix-ui/react-checkbox/dist/index.mjs": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { z$: () => Indicator, fC: () => Root });
      var react = __webpack_require__("./node_modules/next/dist/compiled/react/index.js"),
        dist = __webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),
        react_context_dist = __webpack_require__(
          "./node_modules/@radix-ui/react-context/dist/index.mjs"
        ),
        primitive_dist = __webpack_require__("./node_modules/@radix-ui/primitive/dist/index.mjs"),
        react_use_controllable_state_dist = __webpack_require__(
          "./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs"
        );
      var react_use_layout_effect_dist = __webpack_require__(
        "./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs"
      );
      var react_presence_dist = __webpack_require__(
          "./node_modules/@radix-ui/react-presence/dist/index.mjs"
        ),
        react_primitive_dist = __webpack_require__(
          "./node_modules/@radix-ui/react-primitive/dist/index.mjs"
        ),
        jsx_runtime = __webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),
        [createCheckboxContext, createCheckboxScope] = (0, react_context_dist.b)("Checkbox"),
        [CheckboxProvider, useCheckboxContext] = createCheckboxContext("Checkbox"),
        Checkbox = react.forwardRef((props, forwardedRef) => {
          const {
              __scopeCheckbox,
              name,
              checked: checkedProp,
              defaultChecked,
              required,
              disabled,
              value = "on",
              onCheckedChange,
              form,
              ...checkboxProps
            } = props,
            [button, setButton] = react.useState(null),
            composedRefs = (0, dist.e)(forwardedRef, (node) => setButton(node)),
            hasConsumerStoppedPropagationRef = react.useRef(!1),
            isFormControl = !button || form || !!button.closest("form"),
            [checked = !1, setChecked] = (0, react_use_controllable_state_dist.T)({
              prop: checkedProp,
              defaultProp: defaultChecked,
              onChange: onCheckedChange,
            }),
            initialCheckedStateRef = react.useRef(checked);
          return (
            react.useEffect(() => {
              const form2 = button?.form;
              if (form2) {
                const reset = () => setChecked(initialCheckedStateRef.current);
                return (
                  form2.addEventListener("reset", reset),
                  () => form2.removeEventListener("reset", reset)
                );
              }
            }, [button, setChecked]),
            (0, jsx_runtime.jsxs)(CheckboxProvider, {
              scope: __scopeCheckbox,
              state: checked,
              disabled,
              children: [
                (0, jsx_runtime.jsx)(react_primitive_dist.WV.button, {
                  type: "button",
                  role: "checkbox",
                  "aria-checked": isIndeterminate(checked) ? "mixed" : checked,
                  "aria-required": required,
                  "data-state": getState(checked),
                  "data-disabled": disabled ? "" : void 0,
                  disabled,
                  value,
                  ...checkboxProps,
                  ref: composedRefs,
                  onKeyDown: (0, primitive_dist.M)(props.onKeyDown, (event) => {
                    "Enter" === event.key && event.preventDefault();
                  }),
                  onClick: (0, primitive_dist.M)(props.onClick, (event) => {
                    setChecked((prevChecked) => !!isIndeterminate(prevChecked) || !prevChecked),
                      isFormControl &&
                        ((hasConsumerStoppedPropagationRef.current = event.isPropagationStopped()),
                        hasConsumerStoppedPropagationRef.current || event.stopPropagation());
                  }),
                }),
                isFormControl &&
                  (0, jsx_runtime.jsx)(BubbleInput, {
                    control: button,
                    bubbles: !hasConsumerStoppedPropagationRef.current,
                    name,
                    value,
                    checked,
                    required,
                    disabled,
                    form,
                    style: { transform: "translateX(-100%)" },
                    defaultChecked: !isIndeterminate(defaultChecked) && defaultChecked,
                  }),
              ],
            })
          );
        });
      Checkbox.displayName = "Checkbox";
      var CheckboxIndicator = react.forwardRef((props, forwardedRef) => {
        const { __scopeCheckbox, forceMount, ...indicatorProps } = props,
          context = useCheckboxContext("CheckboxIndicator", __scopeCheckbox);
        return (0, jsx_runtime.jsx)(react_presence_dist.z, {
          present: forceMount || isIndeterminate(context.state) || !0 === context.state,
          children: (0, jsx_runtime.jsx)(react_primitive_dist.WV.span, {
            "data-state": getState(context.state),
            "data-disabled": context.disabled ? "" : void 0,
            ...indicatorProps,
            ref: forwardedRef,
            style: { pointerEvents: "none", ...props.style },
          }),
        });
      });
      CheckboxIndicator.displayName = "CheckboxIndicator";
      var BubbleInput = (props) => {
        const { control, checked, bubbles = !0, defaultChecked, ...inputProps } = props,
          ref = react.useRef(null),
          prevChecked = (function usePrevious(value) {
            const ref = react.useRef({ value, previous: value });
            return react.useMemo(
              () => (
                ref.current.value !== value &&
                  ((ref.current.previous = ref.current.value), (ref.current.value = value)),
                ref.current.previous
              ),
              [value]
            );
          })(checked),
          controlSize = (function useSize(element) {
            const [size, setSize] = react.useState(void 0);
            return (
              (0, react_use_layout_effect_dist.b)(() => {
                if (element) {
                  setSize({ width: element.offsetWidth, height: element.offsetHeight });
                  const resizeObserver = new ResizeObserver((entries) => {
                    if (!Array.isArray(entries)) return;
                    if (!entries.length) return;
                    const entry = entries[0];
                    let width, height;
                    if ("borderBoxSize" in entry) {
                      const borderSizeEntry = entry.borderBoxSize,
                        borderSize = Array.isArray(borderSizeEntry)
                          ? borderSizeEntry[0]
                          : borderSizeEntry;
                      (width = borderSize.inlineSize), (height = borderSize.blockSize);
                    } else (width = element.offsetWidth), (height = element.offsetHeight);
                    setSize({ width, height });
                  });
                  return (
                    resizeObserver.observe(element, { box: "border-box" }),
                    () => resizeObserver.unobserve(element)
                  );
                }
                setSize(void 0);
              }, [element]),
              size
            );
          })(control);
        react.useEffect(() => {
          const input = ref.current,
            inputProto = window.HTMLInputElement.prototype,
            setChecked = Object.getOwnPropertyDescriptor(inputProto, "checked").set;
          if (prevChecked !== checked && setChecked) {
            const event = new Event("click", { bubbles });
            (input.indeterminate = isIndeterminate(checked)),
              setChecked.call(input, !isIndeterminate(checked) && checked),
              input.dispatchEvent(event);
          }
        }, [prevChecked, checked, bubbles]);
        const defaultCheckedRef = react.useRef(!isIndeterminate(checked) && checked);
        return (0, jsx_runtime.jsx)("input", {
          type: "checkbox",
          "aria-hidden": !0,
          defaultChecked: defaultChecked ?? defaultCheckedRef.current,
          ...inputProps,
          tabIndex: -1,
          ref,
          style: {
            ...props.style,
            ...controlSize,
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0,
          },
        });
      };
      function isIndeterminate(checked) {
        return "indeterminate" === checked;
      }
      function getState(checked) {
        return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
      }
      var Root = Checkbox,
        Indicator = CheckboxIndicator;
    },
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
    "./node_modules/@radix-ui/react-context/dist/index.mjs": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { b: () => createContextScope });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js"
        );
      function createContextScope(scopeName, createContextScopeDeps = []) {
        let defaultContexts = [];
        const createScope = () => {
          const scopeContexts = defaultContexts.map((defaultContext) =>
            react__WEBPACK_IMPORTED_MODULE_0__.createContext(defaultContext)
          );
          return function useScope(scope) {
            const contexts = scope?.[scopeName] || scopeContexts;
            return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
              () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
              [scope, contexts]
            );
          };
        };
        return (
          (createScope.scopeName = scopeName),
          [
            function createContext3(rootComponentName, defaultContext) {
              const BaseContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(defaultContext),
                index = defaultContexts.length;
              defaultContexts = [...defaultContexts, defaultContext];
              const Provider = (props) => {
                const { scope, children, ...context } = props,
                  Context = scope?.[scopeName]?.[index] || BaseContext,
                  value = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
                    () => context,
                    Object.values(context)
                  );
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Context.Provider, {
                  value,
                  children,
                });
              };
              return (
                (Provider.displayName = rootComponentName + "Provider"),
                [
                  Provider,
                  function useContext2(consumerName, scope) {
                    const Context = scope?.[scopeName]?.[index] || BaseContext,
                      context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);
                    if (context) return context;
                    if (void 0 !== defaultContext) return defaultContext;
                    throw new Error(
                      `\`${consumerName}\` must be used within \`${rootComponentName}\``
                    );
                  },
                ]
              );
            },
            composeContextScopes(createScope, ...createContextScopeDeps),
          ]
        );
      }
      function composeContextScopes(...scopes) {
        const baseScope = scopes[0];
        if (1 === scopes.length) return baseScope;
        const createScope = () => {
          const scopeHooks = scopes.map((createScope2) => ({
            useScope: createScope2(),
            scopeName: createScope2.scopeName,
          }));
          return function useComposedScopes(overrideScopes) {
            const nextScopes = scopeHooks.reduce(
              (nextScopes2, { useScope, scopeName }) => ({
                ...nextScopes2,
                ...useScope(overrideScopes)[`__scope${scopeName}`],
              }),
              {}
            );
            return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
              () => ({ [`__scope${baseScope.scopeName}`]: nextScopes }),
              [nextScopes]
            );
          };
        };
        return (createScope.scopeName = baseScope.scopeName), createScope;
      }
    },
    "./node_modules/@radix-ui/react-label/dist/index.mjs": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { f: () => Root });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js"
        ),
        _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/@radix-ui/react-primitive/dist/index.mjs"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js"
        ),
        Label = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef) =>
          (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
            _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__.WV.label,
            {
              ...props,
              ref: forwardedRef,
              onMouseDown: (event) => {
                event.target.closest("button, input, select, textarea") ||
                  (props.onMouseDown?.(event),
                  !event.defaultPrevented && event.detail > 1 && event.preventDefault());
              },
            }
          )
        );
      Label.displayName = "Label";
      var Root = Label;
    },
    "./node_modules/@radix-ui/react-presence/dist/index.mjs": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { z: () => Presence });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js"
        ),
        _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"
        ),
        _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs"
        );
      var Presence = (props) => {
        const { present, children } = props,
          presence = (function usePresence(present) {
            const [node, setNode] = react__WEBPACK_IMPORTED_MODULE_0__.useState(),
              stylesRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef({}),
              prevPresentRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(present),
              prevAnimationNameRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef("none"),
              initialState = present ? "mounted" : "unmounted",
              [state, send] = (function useStateMachine(initialState, machine) {
                return react__WEBPACK_IMPORTED_MODULE_0__.useReducer(
                  (state, event) => machine[state][event] ?? state,
                  initialState
                );
              })(initialState, {
                mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
                unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
                unmounted: { MOUNT: "mounted" },
              });
            return (
              react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
                const currentAnimationName = getAnimationName(stylesRef.current);
                prevAnimationNameRef.current = "mounted" === state ? currentAnimationName : "none";
              }, [state]),
              (0, _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_2__.b)(() => {
                const styles = stylesRef.current,
                  wasPresent = prevPresentRef.current;
                if (wasPresent !== present) {
                  const prevAnimationName = prevAnimationNameRef.current,
                    currentAnimationName = getAnimationName(styles);
                  if (present) send("MOUNT");
                  else if ("none" === currentAnimationName || "none" === styles?.display)
                    send("UNMOUNT");
                  else {
                    send(
                      wasPresent && prevAnimationName !== currentAnimationName
                        ? "ANIMATION_OUT"
                        : "UNMOUNT"
                    );
                  }
                  prevPresentRef.current = present;
                }
              }, [present, send]),
              (0, _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_2__.b)(() => {
                if (node) {
                  let timeoutId;
                  const ownerWindow = node.ownerDocument.defaultView ?? window,
                    handleAnimationEnd = (event) => {
                      const isCurrentAnimation = getAnimationName(stylesRef.current).includes(
                        event.animationName
                      );
                      if (
                        event.target === node &&
                        isCurrentAnimation &&
                        (send("ANIMATION_END"), !prevPresentRef.current)
                      ) {
                        const currentFillMode = node.style.animationFillMode;
                        (node.style.animationFillMode = "forwards"),
                          (timeoutId = ownerWindow.setTimeout(() => {
                            "forwards" === node.style.animationFillMode &&
                              (node.style.animationFillMode = currentFillMode);
                          }));
                      }
                    },
                    handleAnimationStart = (event) => {
                      event.target === node &&
                        (prevAnimationNameRef.current = getAnimationName(stylesRef.current));
                    };
                  return (
                    node.addEventListener("animationstart", handleAnimationStart),
                    node.addEventListener("animationcancel", handleAnimationEnd),
                    node.addEventListener("animationend", handleAnimationEnd),
                    () => {
                      ownerWindow.clearTimeout(timeoutId),
                        node.removeEventListener("animationstart", handleAnimationStart),
                        node.removeEventListener("animationcancel", handleAnimationEnd),
                        node.removeEventListener("animationend", handleAnimationEnd);
                    }
                  );
                }
                send("ANIMATION_END");
              }, [node, send]),
              {
                isPresent: ["mounted", "unmountSuspended"].includes(state),
                ref: react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node2) => {
                  node2 && (stylesRef.current = getComputedStyle(node2)), setNode(node2);
                }, []),
              }
            );
          })(present),
          child =
            "function" == typeof children
              ? children({ present: presence.isPresent })
              : react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children),
          ref = (0, _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_1__.e)(
            presence.ref,
            (function getElementRef(element) {
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
            })(child)
          );
        return "function" == typeof children || presence.isPresent
          ? react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child, { ref })
          : null;
      };
      function getAnimationName(styles) {
        return styles?.animationName || "none";
      }
      Presence.displayName = "Presence";
    },
    "./node_modules/@radix-ui/react-primitive/dist/index.mjs": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { WV: () => Primitive });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js"
        ),
        _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__ =
          (__webpack_require__("./node_modules/next/dist/compiled/react-dom/index.js"),
          __webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs")),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js"
        ),
        Primitive = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((primitive, node) => {
          const Node = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef) => {
            const { asChild, ...primitiveProps } = props,
              Comp = asChild ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.g7 : node;
            return (
              "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Comp, {
                ...primitiveProps,
                ref: forwardedRef,
              })
            );
          });
          return (Node.displayName = `Primitive.${node}`), { ...primitive, [node]: Node };
        }, {});
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
    "./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { W: () => useCallbackRef });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "./node_modules/next/dist/compiled/react/index.js"
      );
      function useCallbackRef(callback) {
        const callbackRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(callback);
        return (
          react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
            callbackRef.current = callback;
          }),
          react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
            () =>
              (...args) =>
                callbackRef.current?.(...args),
            []
          )
        );
      }
    },
    "./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { T: () => useControllableState });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js"
        ),
        _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs"
        );
      function useControllableState({ prop, defaultProp, onChange = () => {} }) {
        const [uncontrolledProp, setUncontrolledProp] = (function useUncontrolledState({
            defaultProp,
            onChange,
          }) {
            const uncontrolledState = react__WEBPACK_IMPORTED_MODULE_0__.useState(defaultProp),
              [value] = uncontrolledState,
              prevValueRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(value),
              handleChange = (0, _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.W)(
                onChange
              );
            return (
              react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
                prevValueRef.current !== value &&
                  (handleChange(value), (prevValueRef.current = value));
              }, [value, prevValueRef, handleChange]),
              uncontrolledState
            );
          })({ defaultProp, onChange }),
          isControlled = void 0 !== prop,
          value = isControlled ? prop : uncontrolledProp,
          handleChange = (0, _radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.W)(
            onChange
          );
        return [
          value,
          react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
            (nextValue) => {
              if (isControlled) {
                const value2 = "function" == typeof nextValue ? nextValue(prop) : nextValue;
                value2 !== prop && handleChange(value2);
              } else setUncontrolledProp(nextValue);
            },
            [isControlled, prop, setUncontrolledProp, handleChange]
          ),
        ];
      }
    },
    "./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { b: () => useLayoutEffect2 });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js"
        ),
        useLayoutEffect2 = Boolean(globalThis?.document)
          ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect
          : () => {};
    },
    "./node_modules/@storybook/addon-actions/dist/index.mjs": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { aD: () => action });
      var external_STORYBOOK_MODULE_PREVIEW_API_ = __webpack_require__(
          "storybook/internal/preview-api"
        ),
        external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_ = __webpack_require__(
          "storybook/internal/preview-errors"
        ),
        external_STORYBOOK_MODULE_GLOBAL_ = __webpack_require__("@storybook/global"),
        v4 = __webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),
        console = __webpack_require__("./node_modules/console-browserify/index.js"),
        __defProp = Object.defineProperty,
        ADDON_ID = "storybook/actions",
        EVENT_ID = `${ADDON_ID}/action-event`,
        config = { depth: 10, clearOnStoryChange: !0, limit: 50 },
        findProto = (obj, callback) => {
          let proto = Object.getPrototypeOf(obj);
          return !proto || callback(proto) ? proto : findProto(proto, callback);
        },
        serializeArg = (a) => {
          if (
            "object" == typeof (e = a) &&
            e &&
            findProto(e, (proto) => /^Synthetic(?:Base)?Event$/.test(proto.constructor.name)) &&
            "function" == typeof e.persist
          ) {
            let e = Object.create(a.constructor.prototype, Object.getOwnPropertyDescriptors(a));
            e.persist();
            let viewDescriptor = Object.getOwnPropertyDescriptor(e, "view"),
              view = viewDescriptor?.value;
            return (
              "object" == typeof view &&
                "Window" === view?.constructor.name &&
                Object.defineProperty(e, "view", {
                  ...viewDescriptor,
                  value: Object.create(view.constructor.prototype),
                }),
              e
            );
          }
          var e;
          return a;
        },
        generateId = () =>
          "object" == typeof crypto && "function" == typeof crypto.getRandomValues
            ? (0, v4.Z)()
            : Date.now().toString(36) + Math.random().toString(36).substring(2);
      function action(name, options = {}) {
        let actionOptions = { ...config, ...options },
          handler = function (...args) {
            if (options.implicit) {
              let storyRenderer = (
                "__STORYBOOK_PREVIEW__" in external_STORYBOOK_MODULE_GLOBAL_.global
                  ? external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__
                  : void 0
              )?.storyRenders.find(
                (render) => "playing" === render.phase || "rendering" === render.phase
              );
              if (storyRenderer) {
                let deprecated = !globalThis?.FEATURES?.disallowImplicitActionsInRenderV8,
                  error =
                    new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering(
                      { phase: storyRenderer.phase, name, deprecated }
                    );
                if (!deprecated) throw error;
                console.warn(error);
              }
            }
            let channel = external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),
              id = generateId(),
              serializedArgs = args.map(serializeArg),
              normalizedArgs = args.length > 1 ? serializedArgs : serializedArgs[0],
              actionDisplayToEmit = {
                id,
                count: 0,
                data: { name, args: normalizedArgs },
                options: {
                  ...actionOptions,
                  maxDepth: 5 + (actionOptions.depth || 3),
                  allowFunction: actionOptions.allowFunction || !1,
                },
              };
            channel.emit(EVENT_ID, actionDisplayToEmit);
          };
        return (handler.isAction = !0), (handler.implicit = options.implicit), handler;
      }
      var preview_exports = {};
      ((target, all) => {
        for (var name in all) __defProp(target, name, { get: all[name], enumerable: !0 });
      })(preview_exports, { argsEnhancers: () => argsEnhancers, loaders: () => loaders });
      var isInInitialArgs = (name, initialArgs) =>
          typeof initialArgs[name] > "u" && !(name in initialArgs),
        argsEnhancers = [
          (context) => {
            let {
              initialArgs,
              argTypes,
              parameters: { actions: actions2 },
            } = context;
            return actions2?.disable || !argTypes
              ? {}
              : Object.entries(argTypes)
                  .filter(([name, argType]) => !!argType.action)
                  .reduce(
                    (acc, [name, argType]) => (
                      isInInitialArgs(name, initialArgs) &&
                        (acc[name] = action(
                          "string" == typeof argType.action ? argType.action : name
                        )),
                      acc
                    ),
                    {}
                  );
          },
          (context) => {
            let {
              initialArgs,
              argTypes,
              id,
              parameters: { actions: actions2 },
            } = context;
            if (!actions2 || actions2.disable || !actions2.argTypesRegex || !argTypes) return {};
            let argTypesRegex = new RegExp(actions2.argTypesRegex);
            return Object.entries(argTypes)
              .filter(([name]) => !!argTypesRegex.test(name))
              .reduce(
                (acc, [name, argType]) => (
                  isInInitialArgs(name, initialArgs) &&
                    (acc[name] = action(name, { implicit: !0, id })),
                  acc
                ),
                {}
              );
          },
        ],
        subscribed = !1,
        loaders = [
          (context) => {
            let {
              parameters: { actions: actions2 },
            } = context;
            if (
              !actions2?.disable &&
              !subscribed &&
              "__STORYBOOK_TEST_ON_MOCK_CALL__" in external_STORYBOOK_MODULE_GLOBAL_.global &&
              "function" ==
                typeof external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_TEST_ON_MOCK_CALL__
            ) {
              (0, external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_TEST_ON_MOCK_CALL__)(
                (mock, args) => {
                  let name = mock.getMockName();
                  "spy" !== name &&
                    (!/^next\/.*::/.test(name) ||
                      [
                        "next/router::useRouter()",
                        "next/navigation::useRouter()",
                        "next/navigation::redirect",
                        "next/cache::",
                        "next/headers::cookies().set",
                        "next/headers::cookies().delete",
                        "next/headers::headers().set",
                        "next/headers::headers().delete",
                      ].some((prefix) => name.startsWith(prefix))) &&
                    action(name)(args);
                }
              ),
                (subscribed = !0);
            }
          },
        ];
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
    "./node_modules/lucide-react/dist/esm/icons/check.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { Z: () => Check });
      const Check = (0,
      __webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").Z)("Check", [
        ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
      ]);
    },
  },
]);
