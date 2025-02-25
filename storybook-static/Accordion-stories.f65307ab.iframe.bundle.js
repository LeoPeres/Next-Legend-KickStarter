/*! For license information please see Accordion-stories.f65307ab.iframe.bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunknext_legend_kickstarter = self.webpackChunknext_legend_kickstarter || []).push([
  [982, 463],
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
    "./src/stories/ui/Accordion.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          CompleteExamples: () => CompleteExamples,
          Default: () => Default,
          Multiple: () => Multiple,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Accordion_stories,
        });
      var react = __webpack_require__("./node_modules/next/dist/compiled/react/index.js"),
        react_namespaceObject = __webpack_require__.t(react, 2),
        esm_extends = __webpack_require__(
          "./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js"
        ),
        objectWithoutProperties = __webpack_require__(
          "./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"
        ),
        dist = __webpack_require__("./node_modules/@radix-ui/react-context/dist/index.mjs"),
        react_compose_refs_dist = __webpack_require__(
          "./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"
        ),
        react_slot_dist = __webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs"),
        jsx_runtime = __webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");
      var primitive_dist = __webpack_require__("./node_modules/@radix-ui/primitive/dist/index.mjs"),
        react_use_controllable_state_dist = __webpack_require__(
          "./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs"
        ),
        react_primitive_dist = __webpack_require__(
          "./node_modules/@radix-ui/react-primitive/dist/index.mjs"
        ),
        react_use_layout_effect_dist = __webpack_require__(
          "./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs"
        ),
        react_presence_dist = __webpack_require__(
          "./node_modules/@radix-ui/react-presence/dist/index.mjs"
        ),
        useReactId = react_namespaceObject["useId".toString()] || (() => {}),
        count = 0;
      function useId(deterministicId) {
        const [id, setId] = react.useState(useReactId());
        return (
          (0, react_use_layout_effect_dist.b)(() => {
            deterministicId || setId((reactId) => reactId ?? String(count++));
          }, [deterministicId]),
          deterministicId || (id ? `radix-${id}` : "")
        );
      }
      var [createCollapsibleContext, createCollapsibleScope] = (0, dist.b)("Collapsible"),
        [CollapsibleProvider, useCollapsibleContext] = createCollapsibleContext("Collapsible"),
        Collapsible = react.forwardRef((props, forwardedRef) => {
          const {
              __scopeCollapsible,
              open: openProp,
              defaultOpen,
              disabled,
              onOpenChange,
              ...collapsibleProps
            } = props,
            [open = !1, setOpen] = (0, react_use_controllable_state_dist.T)({
              prop: openProp,
              defaultProp: defaultOpen,
              onChange: onOpenChange,
            });
          return (0, jsx_runtime.jsx)(CollapsibleProvider, {
            scope: __scopeCollapsible,
            disabled,
            contentId: useId(),
            open,
            onOpenToggle: react.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
            children: (0, jsx_runtime.jsx)(react_primitive_dist.WV.div, {
              "data-state": getState(open),
              "data-disabled": disabled ? "" : void 0,
              ...collapsibleProps,
              ref: forwardedRef,
            }),
          });
        });
      Collapsible.displayName = "Collapsible";
      var CollapsibleTrigger = react.forwardRef((props, forwardedRef) => {
        const { __scopeCollapsible, ...triggerProps } = props,
          context = useCollapsibleContext("CollapsibleTrigger", __scopeCollapsible);
        return (0, jsx_runtime.jsx)(react_primitive_dist.WV.button, {
          type: "button",
          "aria-controls": context.contentId,
          "aria-expanded": context.open || !1,
          "data-state": getState(context.open),
          "data-disabled": context.disabled ? "" : void 0,
          disabled: context.disabled,
          ...triggerProps,
          ref: forwardedRef,
          onClick: (0, primitive_dist.M)(props.onClick, context.onOpenToggle),
        });
      });
      CollapsibleTrigger.displayName = "CollapsibleTrigger";
      var CollapsibleContent = react.forwardRef((props, forwardedRef) => {
        const { forceMount, ...contentProps } = props,
          context = useCollapsibleContext("CollapsibleContent", props.__scopeCollapsible);
        return (0, jsx_runtime.jsx)(react_presence_dist.z, {
          present: forceMount || context.open,
          children: ({ present }) =>
            (0, jsx_runtime.jsx)(CollapsibleContentImpl, {
              ...contentProps,
              ref: forwardedRef,
              present,
            }),
        });
      });
      CollapsibleContent.displayName = "CollapsibleContent";
      var CollapsibleContentImpl = react.forwardRef((props, forwardedRef) => {
        const { __scopeCollapsible, present, children, ...contentProps } = props,
          context = useCollapsibleContext("CollapsibleContent", __scopeCollapsible),
          [isPresent, setIsPresent] = react.useState(present),
          ref = react.useRef(null),
          composedRefs = (0, react_compose_refs_dist.e)(forwardedRef, ref),
          heightRef = react.useRef(0),
          height = heightRef.current,
          widthRef = react.useRef(0),
          width = widthRef.current,
          isOpen = context.open || isPresent,
          isMountAnimationPreventedRef = react.useRef(isOpen),
          originalStylesRef = react.useRef(void 0);
        return (
          react.useEffect(() => {
            const rAF = requestAnimationFrame(() => (isMountAnimationPreventedRef.current = !1));
            return () => cancelAnimationFrame(rAF);
          }, []),
          (0, react_use_layout_effect_dist.b)(() => {
            const node = ref.current;
            if (node) {
              (originalStylesRef.current = originalStylesRef.current || {
                transitionDuration: node.style.transitionDuration,
                animationName: node.style.animationName,
              }),
                (node.style.transitionDuration = "0s"),
                (node.style.animationName = "none");
              const rect = node.getBoundingClientRect();
              (heightRef.current = rect.height),
                (widthRef.current = rect.width),
                isMountAnimationPreventedRef.current ||
                  ((node.style.transitionDuration = originalStylesRef.current.transitionDuration),
                  (node.style.animationName = originalStylesRef.current.animationName)),
                setIsPresent(present);
            }
          }, [context.open, present]),
          (0, jsx_runtime.jsx)(react_primitive_dist.WV.div, {
            "data-state": getState(context.open),
            "data-disabled": context.disabled ? "" : void 0,
            id: context.contentId,
            hidden: !isOpen,
            ...contentProps,
            ref: composedRefs,
            style: {
              "--radix-collapsible-content-height": height ? `${height}px` : void 0,
              "--radix-collapsible-content-width": width ? `${width}px` : void 0,
              ...props.style,
            },
            children: isOpen && children,
          })
        );
      });
      function getState(open) {
        return open ? "open" : "closed";
      }
      var Root = Collapsible,
        Trigger = CollapsibleTrigger,
        Content = CollapsibleContent,
        DirectionContext = react.createContext(void 0);
      var ACCORDION_KEYS = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [Collection, useCollection, createCollectionScope] = (function createCollection(name) {
          const PROVIDER_NAME = name + "CollectionProvider",
            [createCollectionContext, createCollectionScope] = (0, dist.b)(PROVIDER_NAME),
            [CollectionProviderImpl, useCollectionContext] = createCollectionContext(
              PROVIDER_NAME,
              { collectionRef: { current: null }, itemMap: new Map() }
            ),
            CollectionProvider = (props) => {
              const { scope, children } = props,
                ref = react.useRef(null),
                itemMap = react.useRef(new Map()).current;
              return (0, jsx_runtime.jsx)(CollectionProviderImpl, {
                scope,
                itemMap,
                collectionRef: ref,
                children,
              });
            };
          CollectionProvider.displayName = PROVIDER_NAME;
          const COLLECTION_SLOT_NAME = name + "CollectionSlot",
            CollectionSlot = react.forwardRef((props, forwardedRef) => {
              const { scope, children } = props,
                context = useCollectionContext(COLLECTION_SLOT_NAME, scope),
                composedRefs = (0, react_compose_refs_dist.e)(forwardedRef, context.collectionRef);
              return (0, jsx_runtime.jsx)(react_slot_dist.g7, { ref: composedRefs, children });
            });
          CollectionSlot.displayName = COLLECTION_SLOT_NAME;
          const ITEM_SLOT_NAME = name + "CollectionItemSlot",
            ITEM_DATA_ATTR = "data-radix-collection-item",
            CollectionItemSlot = react.forwardRef((props, forwardedRef) => {
              const { scope, children, ...itemData } = props,
                ref = react.useRef(null),
                composedRefs = (0, react_compose_refs_dist.e)(forwardedRef, ref),
                context = useCollectionContext(ITEM_SLOT_NAME, scope);
              return (
                react.useEffect(
                  () => (
                    context.itemMap.set(ref, { ref, ...itemData }),
                    () => {
                      context.itemMap.delete(ref);
                    }
                  )
                ),
                (0, jsx_runtime.jsx)(react_slot_dist.g7, {
                  [ITEM_DATA_ATTR]: "",
                  ref: composedRefs,
                  children,
                })
              );
            });
          return (
            (CollectionItemSlot.displayName = ITEM_SLOT_NAME),
            [
              { Provider: CollectionProvider, Slot: CollectionSlot, ItemSlot: CollectionItemSlot },
              function useCollection(scope) {
                const context = useCollectionContext(name + "CollectionConsumer", scope);
                return react.useCallback(() => {
                  const collectionNode = context.collectionRef.current;
                  if (!collectionNode) return [];
                  const orderedNodes = Array.from(
                    collectionNode.querySelectorAll("[data-radix-collection-item]")
                  );
                  return Array.from(context.itemMap.values()).sort(
                    (a, b) =>
                      orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current)
                  );
                }, [context.collectionRef, context.itemMap]);
              },
              createCollectionScope,
            ]
          );
        })("Accordion"),
        [createAccordionContext, createAccordionScope] = (0, dist.b)("Accordion", [
          createCollectionScope,
          createCollapsibleScope,
        ]),
        useCollapsibleScope = createCollapsibleScope(),
        Accordion = react.forwardRef((props, forwardedRef) => {
          const { type, ...accordionProps } = props,
            singleProps = accordionProps,
            multipleProps = accordionProps;
          return (0, jsx_runtime.jsx)(Collection.Provider, {
            scope: props.__scopeAccordion,
            children:
              "multiple" === type
                ? (0, jsx_runtime.jsx)(AccordionImplMultiple, {
                    ...multipleProps,
                    ref: forwardedRef,
                  })
                : (0, jsx_runtime.jsx)(AccordionImplSingle, { ...singleProps, ref: forwardedRef }),
          });
        });
      Accordion.displayName = "Accordion";
      var [AccordionValueProvider, useAccordionValueContext] = createAccordionContext("Accordion"),
        [AccordionCollapsibleProvider, useAccordionCollapsibleContext] = createAccordionContext(
          "Accordion",
          { collapsible: !1 }
        ),
        AccordionImplSingle = react.forwardRef((props, forwardedRef) => {
          const {
              value: valueProp,
              defaultValue,
              onValueChange = () => {},
              collapsible = !1,
              ...accordionSingleProps
            } = props,
            [value, setValue] = (0, react_use_controllable_state_dist.T)({
              prop: valueProp,
              defaultProp: defaultValue,
              onChange: onValueChange,
            });
          return (0, jsx_runtime.jsx)(AccordionValueProvider, {
            scope: props.__scopeAccordion,
            value: value ? [value] : [],
            onItemOpen: setValue,
            onItemClose: react.useCallback(
              () => collapsible && setValue(""),
              [collapsible, setValue]
            ),
            children: (0, jsx_runtime.jsx)(AccordionCollapsibleProvider, {
              scope: props.__scopeAccordion,
              collapsible,
              children: (0, jsx_runtime.jsx)(AccordionImpl, {
                ...accordionSingleProps,
                ref: forwardedRef,
              }),
            }),
          });
        }),
        AccordionImplMultiple = react.forwardRef((props, forwardedRef) => {
          const {
              value: valueProp,
              defaultValue,
              onValueChange = () => {},
              ...accordionMultipleProps
            } = props,
            [value = [], setValue] = (0, react_use_controllable_state_dist.T)({
              prop: valueProp,
              defaultProp: defaultValue,
              onChange: onValueChange,
            }),
            handleItemOpen = react.useCallback(
              (itemValue) => setValue((prevValue = []) => [...prevValue, itemValue]),
              [setValue]
            ),
            handleItemClose = react.useCallback(
              (itemValue) =>
                setValue((prevValue = []) => prevValue.filter((value2) => value2 !== itemValue)),
              [setValue]
            );
          return (0, jsx_runtime.jsx)(AccordionValueProvider, {
            scope: props.__scopeAccordion,
            value,
            onItemOpen: handleItemOpen,
            onItemClose: handleItemClose,
            children: (0, jsx_runtime.jsx)(AccordionCollapsibleProvider, {
              scope: props.__scopeAccordion,
              collapsible: !0,
              children: (0, jsx_runtime.jsx)(AccordionImpl, {
                ...accordionMultipleProps,
                ref: forwardedRef,
              }),
            }),
          });
        }),
        [AccordionImplProvider, useAccordionContext] = createAccordionContext("Accordion"),
        AccordionImpl = react.forwardRef((props, forwardedRef) => {
          const {
              __scopeAccordion,
              disabled,
              dir,
              orientation = "vertical",
              ...accordionProps
            } = props,
            accordionRef = react.useRef(null),
            composedRefs = (0, react_compose_refs_dist.e)(accordionRef, forwardedRef),
            getItems = useCollection(__scopeAccordion),
            isDirectionLTR =
              "ltr" ===
              (function useDirection(localDir) {
                const globalDir = react.useContext(DirectionContext);
                return localDir || globalDir || "ltr";
              })(dir),
            handleKeyDown = (0, primitive_dist.M)(props.onKeyDown, (event) => {
              if (!ACCORDION_KEYS.includes(event.key)) return;
              const target = event.target,
                triggerCollection = getItems().filter((item) => !item.ref.current?.disabled),
                triggerIndex = triggerCollection.findIndex((item) => item.ref.current === target),
                triggerCount = triggerCollection.length;
              if (-1 === triggerIndex) return;
              event.preventDefault();
              let nextIndex = triggerIndex;
              const endIndex = triggerCount - 1,
                moveNext = () => {
                  (nextIndex = triggerIndex + 1), nextIndex > endIndex && (nextIndex = 0);
                },
                movePrev = () => {
                  (nextIndex = triggerIndex - 1), nextIndex < 0 && (nextIndex = endIndex);
                };
              switch (event.key) {
                case "Home":
                  nextIndex = 0;
                  break;
                case "End":
                  nextIndex = endIndex;
                  break;
                case "ArrowRight":
                  "horizontal" === orientation && (isDirectionLTR ? moveNext() : movePrev());
                  break;
                case "ArrowDown":
                  "vertical" === orientation && moveNext();
                  break;
                case "ArrowLeft":
                  "horizontal" === orientation && (isDirectionLTR ? movePrev() : moveNext());
                  break;
                case "ArrowUp":
                  "vertical" === orientation && movePrev();
              }
              const clampedIndex = nextIndex % triggerCount;
              triggerCollection[clampedIndex].ref.current?.focus();
            });
          return (0, jsx_runtime.jsx)(AccordionImplProvider, {
            scope: __scopeAccordion,
            disabled,
            direction: dir,
            orientation,
            children: (0, jsx_runtime.jsx)(Collection.Slot, {
              scope: __scopeAccordion,
              children: (0, jsx_runtime.jsx)(react_primitive_dist.WV.div, {
                ...accordionProps,
                "data-orientation": orientation,
                ref: composedRefs,
                onKeyDown: disabled ? void 0 : handleKeyDown,
              }),
            }),
          });
        }),
        [AccordionItemProvider, useAccordionItemContext] = createAccordionContext("AccordionItem"),
        AccordionItem = react.forwardRef((props, forwardedRef) => {
          const { __scopeAccordion, value, ...accordionItemProps } = props,
            accordionContext = useAccordionContext("AccordionItem", __scopeAccordion),
            valueContext = useAccordionValueContext("AccordionItem", __scopeAccordion),
            collapsibleScope = useCollapsibleScope(__scopeAccordion),
            triggerId = useId(),
            open = (value && valueContext.value.includes(value)) || !1,
            disabled = accordionContext.disabled || props.disabled;
          return (0, jsx_runtime.jsx)(AccordionItemProvider, {
            scope: __scopeAccordion,
            open,
            disabled,
            triggerId,
            children: (0, jsx_runtime.jsx)(Root, {
              "data-orientation": accordionContext.orientation,
              "data-state": dist_getState(open),
              ...collapsibleScope,
              ...accordionItemProps,
              ref: forwardedRef,
              disabled,
              open,
              onOpenChange: (open2) => {
                open2 ? valueContext.onItemOpen(value) : valueContext.onItemClose(value);
              },
            }),
          });
        });
      AccordionItem.displayName = "AccordionItem";
      var AccordionHeader = react.forwardRef((props, forwardedRef) => {
        const { __scopeAccordion, ...headerProps } = props,
          accordionContext = useAccordionContext("Accordion", __scopeAccordion),
          itemContext = useAccordionItemContext("AccordionHeader", __scopeAccordion);
        return (0, jsx_runtime.jsx)(react_primitive_dist.WV.h3, {
          "data-orientation": accordionContext.orientation,
          "data-state": dist_getState(itemContext.open),
          "data-disabled": itemContext.disabled ? "" : void 0,
          ...headerProps,
          ref: forwardedRef,
        });
      });
      AccordionHeader.displayName = "AccordionHeader";
      var AccordionTrigger = react.forwardRef((props, forwardedRef) => {
        const { __scopeAccordion, ...triggerProps } = props,
          accordionContext = useAccordionContext("Accordion", __scopeAccordion),
          itemContext = useAccordionItemContext("AccordionTrigger", __scopeAccordion),
          collapsibleContext = useAccordionCollapsibleContext("AccordionTrigger", __scopeAccordion),
          collapsibleScope = useCollapsibleScope(__scopeAccordion);
        return (0, jsx_runtime.jsx)(Collection.ItemSlot, {
          scope: __scopeAccordion,
          children: (0, jsx_runtime.jsx)(Trigger, {
            "aria-disabled": (itemContext.open && !collapsibleContext.collapsible) || void 0,
            "data-orientation": accordionContext.orientation,
            id: itemContext.triggerId,
            ...collapsibleScope,
            ...triggerProps,
            ref: forwardedRef,
          }),
        });
      });
      AccordionTrigger.displayName = "AccordionTrigger";
      var AccordionContent = react.forwardRef((props, forwardedRef) => {
        const { __scopeAccordion, ...contentProps } = props,
          accordionContext = useAccordionContext("Accordion", __scopeAccordion),
          itemContext = useAccordionItemContext("AccordionContent", __scopeAccordion),
          collapsibleScope = useCollapsibleScope(__scopeAccordion);
        return (0, jsx_runtime.jsx)(Content, {
          role: "region",
          "aria-labelledby": itemContext.triggerId,
          "data-orientation": accordionContext.orientation,
          ...collapsibleScope,
          ...contentProps,
          ref: forwardedRef,
          style: {
            "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
            "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
            ...props.style,
          },
        });
      });
      function dist_getState(open) {
        return open ? "open" : "closed";
      }
      AccordionContent.displayName = "AccordionContent";
      var Root2 = Accordion,
        Item = AccordionItem,
        Header = AccordionHeader,
        Trigger2 = AccordionTrigger,
        Content2 = AccordionContent;
      const ChevronDown = (0,
      __webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").Z)(
        "ChevronDown",
        [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]
      );
      var utils = __webpack_require__("./src/lib/utils.ts");
      const _excluded = ["className"],
        _excluded2 = ["className", "children"],
        _excluded3 = ["className", "children"];
      var __jsx = react.createElement;
      const accordion_Accordion = Root2,
        accordion_AccordionItem = react.forwardRef((_ref, ref) => {
          let { className } = _ref,
            props = (0, objectWithoutProperties.Z)(_ref, _excluded);
          return __jsx(
            Item,
            (0, esm_extends.Z)({ ref, className: (0, utils.cn)("border-b", className) }, props)
          );
        });
      accordion_AccordionItem.displayName = "AccordionItem";
      const accordion_AccordionTrigger = react.forwardRef((_ref2, ref) => {
        let { className, children } = _ref2,
          props = (0, objectWithoutProperties.Z)(_ref2, _excluded2);
        return __jsx(
          Header,
          { className: "flex" },
          __jsx(
            Trigger2,
            (0, esm_extends.Z)(
              {
                ref,
                className: (0, utils.cn)(
                  "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
                  className
                ),
              },
              props
            ),
            children,
            __jsx(ChevronDown, { className: "h-4 w-4 transition-transform duration-200" })
          )
        );
      });
      accordion_AccordionTrigger.displayName = Trigger2.displayName;
      const accordion_AccordionContent = react.forwardRef((_ref3, ref) => {
        let { className, children } = _ref3,
          props = (0, objectWithoutProperties.Z)(_ref3, _excluded3);
        return __jsx(
          Content2,
          (0, esm_extends.Z)(
            {
              ref,
              className: (0, utils.cn)(
                "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
                className
              ),
            },
            props
          ),
          __jsx("div", { className: "pb-4 pt-0" }, children)
        );
      });
      (accordion_AccordionContent.displayName = Content2.displayName),
        (accordion_AccordionItem.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "AccordionItem",
        }),
        (accordion_AccordionTrigger.__docgenInfo = { description: "", methods: [] }),
        (accordion_AccordionContent.__docgenInfo = { description: "", methods: [] });
      var AccordionExamples_jsx = react.createElement;
      const SingleAccordion = () =>
          AccordionExamples_jsx(
            accordion_Accordion,
            { type: "single", collapsible: !0, className: "w-full max-w-md" },
            AccordionExamples_jsx(
              accordion_AccordionItem,
              { value: "item-1" },
              AccordionExamples_jsx(accordion_AccordionTrigger, null, "Is it accessible?"),
              AccordionExamples_jsx(
                accordion_AccordionContent,
                null,
                "Yes. It adheres to the WAI-ARIA design pattern."
              )
            ),
            AccordionExamples_jsx(
              accordion_AccordionItem,
              { value: "item-2" },
              AccordionExamples_jsx(accordion_AccordionTrigger, null, "Is it styled?"),
              AccordionExamples_jsx(
                accordion_AccordionContent,
                null,
                "Yes. It comes with default styles that match the other components' aesthetic."
              )
            ),
            AccordionExamples_jsx(
              accordion_AccordionItem,
              { value: "item-3" },
              AccordionExamples_jsx(accordion_AccordionTrigger, null, "Is it animated?"),
              AccordionExamples_jsx(
                accordion_AccordionContent,
                null,
                "Yes. It's animated by default, but you can disable it if you prefer."
              )
            )
          ),
        MultipleAccordion = () =>
          AccordionExamples_jsx(
            accordion_Accordion,
            { type: "multiple", className: "w-full max-w-md" },
            AccordionExamples_jsx(
              accordion_AccordionItem,
              { value: "item-1" },
              AccordionExamples_jsx(accordion_AccordionTrigger, null, "First section"),
              AccordionExamples_jsx(
                accordion_AccordionContent,
                null,
                "This is the first section content."
              )
            ),
            AccordionExamples_jsx(
              accordion_AccordionItem,
              { value: "item-2" },
              AccordionExamples_jsx(accordion_AccordionTrigger, null, "Second section"),
              AccordionExamples_jsx(
                accordion_AccordionContent,
                null,
                "This is the second section content."
              )
            ),
            AccordionExamples_jsx(
              accordion_AccordionItem,
              { value: "item-3" },
              AccordionExamples_jsx(accordion_AccordionTrigger, null, "Third section"),
              AccordionExamples_jsx(
                accordion_AccordionContent,
                null,
                "This is the third section content."
              )
            )
          ),
        CustomStyledAccordion = () =>
          AccordionExamples_jsx(
            accordion_Accordion,
            { type: "single", collapsible: !0, className: "w-full max-w-md border rounded-lg" },
            AccordionExamples_jsx(
              accordion_AccordionItem,
              { value: "item-1", className: "border-b-0 px-4" },
              AccordionExamples_jsx(
                accordion_AccordionTrigger,
                { className: "py-6 text-blue-600" },
                "Custom styled trigger"
              ),
              AccordionExamples_jsx(
                accordion_AccordionContent,
                { className: "text-gray-600" },
                "This accordion has custom styling applied to it."
              )
            ),
            AccordionExamples_jsx(
              accordion_AccordionItem,
              { value: "item-2", className: "border-b-0 px-4" },
              AccordionExamples_jsx(
                accordion_AccordionTrigger,
                { className: "py-6 text-blue-600" },
                "Another custom section"
              ),
              AccordionExamples_jsx(
                accordion_AccordionContent,
                { className: "text-gray-600" },
                "You can customize the appearance of the accordion to match your design system."
              )
            )
          ),
        AccordionExamples = () =>
          AccordionExamples_jsx(
            "div",
            { className: "space-y-8" },
            AccordionExamples_jsx(
              "div",
              null,
              AccordionExamples_jsx(
                "h3",
                { className: "text-lg font-medium mb-2" },
                "Single Accordion (Collapsible)"
              ),
              AccordionExamples_jsx(SingleAccordion, null)
            ),
            AccordionExamples_jsx(
              "div",
              null,
              AccordionExamples_jsx(
                "h3",
                { className: "text-lg font-medium mb-2" },
                "Multiple Accordion"
              ),
              AccordionExamples_jsx(MultipleAccordion, null)
            ),
            AccordionExamples_jsx(
              "div",
              null,
              AccordionExamples_jsx(
                "h3",
                { className: "text-lg font-medium mb-2" },
                "Custom Styled Accordion"
              ),
              AccordionExamples_jsx(CustomStyledAccordion, null)
            )
          );
      (SingleAccordion.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "SingleAccordion",
      }),
        (MultipleAccordion.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "MultipleAccordion",
        }),
        (CustomStyledAccordion.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "CustomStyledAccordion",
        }),
        (AccordionExamples.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "AccordionExamples",
        });
      var Accordion_stories_jsx = react.createElement;
      const Accordion_stories = {
          title: "UI/Accordion",
          component: accordion_Accordion,
          parameters: {
            layout: "centered",
            docs: {
              description: {
                component:
                  "A vertically stacked set of interactive headings that each reveal a section of content.",
              },
            },
          },
          argTypes: {
            type: {
              control: "select",
              options: ["single", "multiple"],
              description:
                "Determines whether one or multiple items can be opened at the same time",
              table: { category: "Behavior", defaultValue: { summary: "single" } },
            },
            collapsible: {
              control: "boolean",
              description:
                "When type is 'single', allows closing content when clicking the trigger for an open item",
              table: { category: "Behavior", defaultValue: { summary: "false" } },
            },
            defaultValue: {
              control: "text",
              description: "The value of the item to expand by default (controlled)",
              table: { category: "State" },
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
            Accordion_stories_jsx(
              accordion_Accordion,
              { type: "single", collapsible: !0, className: "w-full max-w-md" },
              Accordion_stories_jsx(
                accordion_AccordionItem,
                { value: "item-1" },
                Accordion_stories_jsx(accordion_AccordionTrigger, null, "Is it accessible?"),
                Accordion_stories_jsx(
                  accordion_AccordionContent,
                  null,
                  "Yes. It adheres to the WAI-ARIA design pattern."
                )
              ),
              Accordion_stories_jsx(
                accordion_AccordionItem,
                { value: "item-2" },
                Accordion_stories_jsx(accordion_AccordionTrigger, null, "Is it styled?"),
                Accordion_stories_jsx(
                  accordion_AccordionContent,
                  null,
                  "Yes. It comes with default styles that match the other components' aesthetic."
                )
              ),
              Accordion_stories_jsx(
                accordion_AccordionItem,
                { value: "item-3" },
                Accordion_stories_jsx(accordion_AccordionTrigger, null, "Is it animated?"),
                Accordion_stories_jsx(
                  accordion_AccordionContent,
                  null,
                  "Yes. It's animated by default, but you can disable it if you prefer."
                )
              )
            ),
        },
        Multiple = {
          render: () =>
            Accordion_stories_jsx(
              accordion_Accordion,
              { type: "multiple", className: "w-full max-w-md" },
              Accordion_stories_jsx(
                accordion_AccordionItem,
                { value: "item-1" },
                Accordion_stories_jsx(accordion_AccordionTrigger, null, "First section"),
                Accordion_stories_jsx(
                  accordion_AccordionContent,
                  null,
                  "This is the first section content."
                )
              ),
              Accordion_stories_jsx(
                accordion_AccordionItem,
                { value: "item-2" },
                Accordion_stories_jsx(accordion_AccordionTrigger, null, "Second section"),
                Accordion_stories_jsx(
                  accordion_AccordionContent,
                  null,
                  "This is the second section content."
                )
              ),
              Accordion_stories_jsx(
                accordion_AccordionItem,
                { value: "item-3" },
                Accordion_stories_jsx(accordion_AccordionTrigger, null, "Third section"),
                Accordion_stories_jsx(
                  accordion_AccordionContent,
                  null,
                  "This is the third section content."
                )
              )
            ),
        },
        CompleteExamples = {
          render: () => Accordion_stories_jsx(AccordionExamples, null),
          parameters: {
            layout: "padded",
            docs: {
              description: {
                story: "Complete set of accordion examples showing various configurations.",
              },
            },
          },
        },
        __namedExportsOrder = ["Default", "Multiple", "CompleteExamples"];
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  render: () => <Accordion type="single" collapsible className="w-full max-w-md">\n      <AccordionItem value="item-1">\n        <AccordionTrigger>Is it accessible?</AccordionTrigger>\n        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>\n      </AccordionItem>\n      <AccordionItem value="item-2">\n        <AccordionTrigger>Is it styled?</AccordionTrigger>\n        <AccordionContent>\n          Yes. It comes with default styles that match the other components\' aesthetic.\n        </AccordionContent>\n      </AccordionItem>\n      <AccordionItem value="item-3">\n        <AccordionTrigger>Is it animated?</AccordionTrigger>\n        <AccordionContent>\n          Yes. It\'s animated by default, but you can disable it if you prefer.\n        </AccordionContent>\n      </AccordionItem>\n    </Accordion>\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (Multiple.parameters = {
          ...Multiple.parameters,
          docs: {
            ...Multiple.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <Accordion type="multiple" className="w-full max-w-md">\n      <AccordionItem value="item-1">\n        <AccordionTrigger>First section</AccordionTrigger>\n        <AccordionContent>This is the first section content.</AccordionContent>\n      </AccordionItem>\n      <AccordionItem value="item-2">\n        <AccordionTrigger>Second section</AccordionTrigger>\n        <AccordionContent>This is the second section content.</AccordionContent>\n      </AccordionItem>\n      <AccordionItem value="item-3">\n        <AccordionTrigger>Third section</AccordionTrigger>\n        <AccordionContent>This is the third section content.</AccordionContent>\n      </AccordionItem>\n    </Accordion>\n}',
              ...Multiple.parameters?.docs?.source,
            },
          },
        }),
        (CompleteExamples.parameters = {
          ...CompleteExamples.parameters,
          docs: {
            ...CompleteExamples.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <AccordionExamples />,\n  parameters: {\n    layout: "padded",\n    docs: {\n      description: {\n        story: "Complete set of accordion examples showing various configurations."\n      }\n    }\n  }\n}',
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
