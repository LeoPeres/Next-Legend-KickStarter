/*! For license information please see Avatar-stories.af89506b.iframe.bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunknext_legend_kickstarter = self.webpackChunknext_legend_kickstarter || []).push([
  [387, 463],
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
    "./src/stories/ui/Avatar.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          CompleteExamples: () => CompleteExamples,
          CustomFallbackColor: () => CustomFallbackColor,
          CustomSize: () => CustomSize,
          Default: () => Default,
          WithFallback: () => WithFallback,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => Avatar_stories,
        });
      var react = __webpack_require__("./node_modules/next/dist/compiled/react/index.js"),
        esm_extends = __webpack_require__(
          "./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/extends.js"
        ),
        objectWithoutProperties = __webpack_require__(
          "./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/objectWithoutProperties.js"
        ),
        dist = __webpack_require__("./node_modules/@radix-ui/react-context/dist/index.mjs"),
        react_use_callback_ref_dist = __webpack_require__(
          "./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs"
        ),
        react_use_layout_effect_dist = __webpack_require__(
          "./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs"
        ),
        react_primitive_dist = __webpack_require__(
          "./node_modules/@radix-ui/react-primitive/dist/index.mjs"
        ),
        jsx_runtime = __webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),
        [createAvatarContext, createAvatarScope] = (0, dist.b)("Avatar"),
        [AvatarProvider, useAvatarContext] = createAvatarContext("Avatar"),
        Avatar = react.forwardRef((props, forwardedRef) => {
          const { __scopeAvatar, ...avatarProps } = props,
            [imageLoadingStatus, setImageLoadingStatus] = react.useState("idle");
          return (0, jsx_runtime.jsx)(AvatarProvider, {
            scope: __scopeAvatar,
            imageLoadingStatus,
            onImageLoadingStatusChange: setImageLoadingStatus,
            children: (0, jsx_runtime.jsx)(react_primitive_dist.WV.span, {
              ...avatarProps,
              ref: forwardedRef,
            }),
          });
        });
      Avatar.displayName = "Avatar";
      var AvatarImage = react.forwardRef((props, forwardedRef) => {
        const { __scopeAvatar, src, onLoadingStatusChange = () => {}, ...imageProps } = props,
          context = useAvatarContext("AvatarImage", __scopeAvatar),
          imageLoadingStatus = (function useImageLoadingStatus(src, referrerPolicy) {
            const [loadingStatus, setLoadingStatus] = react.useState("idle");
            return (
              (0, react_use_layout_effect_dist.b)(() => {
                if (!src) return void setLoadingStatus("error");
                let isMounted = !0;
                const image = new window.Image(),
                  updateStatus = (status) => () => {
                    isMounted && setLoadingStatus(status);
                  };
                return (
                  setLoadingStatus("loading"),
                  (image.onload = updateStatus("loaded")),
                  (image.onerror = updateStatus("error")),
                  (image.src = src),
                  referrerPolicy && (image.referrerPolicy = referrerPolicy),
                  () => {
                    isMounted = !1;
                  }
                );
              }, [src, referrerPolicy]),
              loadingStatus
            );
          })(src, imageProps.referrerPolicy),
          handleLoadingStatusChange = (0, react_use_callback_ref_dist.W)((status) => {
            onLoadingStatusChange(status), context.onImageLoadingStatusChange(status);
          });
        return (
          (0, react_use_layout_effect_dist.b)(() => {
            "idle" !== imageLoadingStatus && handleLoadingStatusChange(imageLoadingStatus);
          }, [imageLoadingStatus, handleLoadingStatusChange]),
          "loaded" === imageLoadingStatus
            ? (0, jsx_runtime.jsx)(react_primitive_dist.WV.img, {
                ...imageProps,
                ref: forwardedRef,
                src,
              })
            : null
        );
      });
      AvatarImage.displayName = "AvatarImage";
      var AvatarFallback = react.forwardRef((props, forwardedRef) => {
        const { __scopeAvatar, delayMs, ...fallbackProps } = props,
          context = useAvatarContext("AvatarFallback", __scopeAvatar),
          [canRender, setCanRender] = react.useState(void 0 === delayMs);
        return (
          react.useEffect(() => {
            if (void 0 !== delayMs) {
              const timerId = window.setTimeout(() => setCanRender(!0), delayMs);
              return () => window.clearTimeout(timerId);
            }
          }, [delayMs]),
          canRender && "loaded" !== context.imageLoadingStatus
            ? (0, jsx_runtime.jsx)(react_primitive_dist.WV.span, {
                ...fallbackProps,
                ref: forwardedRef,
              })
            : null
        );
      });
      AvatarFallback.displayName = "AvatarFallback";
      var Root = Avatar,
        Image = AvatarImage,
        Fallback = AvatarFallback,
        utils = __webpack_require__("./src/lib/utils.ts");
      const _excluded = ["className"],
        _excluded2 = ["className"],
        _excluded3 = ["className"];
      var __jsx = react.createElement;
      const avatar_Avatar = react.forwardRef((_ref, ref) => {
        let { className } = _ref,
          props = (0, objectWithoutProperties.Z)(_ref, _excluded);
        return __jsx(
          Root,
          (0, esm_extends.Z)(
            {
              ref,
              className: (0, utils.cn)(
                "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
                className
              ),
            },
            props
          )
        );
      });
      avatar_Avatar.displayName = Root.displayName;
      const avatar_AvatarImage = react.forwardRef((_ref2, ref) => {
        let { className } = _ref2,
          props = (0, objectWithoutProperties.Z)(_ref2, _excluded2);
        return __jsx(
          Image,
          (0, esm_extends.Z)(
            { ref, className: (0, utils.cn)("aspect-square h-full w-full", className) },
            props
          )
        );
      });
      avatar_AvatarImage.displayName = Image.displayName;
      const avatar_AvatarFallback = react.forwardRef((_ref3, ref) => {
        let { className } = _ref3,
          props = (0, objectWithoutProperties.Z)(_ref3, _excluded3);
        return __jsx(
          Fallback,
          (0, esm_extends.Z)(
            {
              ref,
              className: (0, utils.cn)(
                "flex h-full w-full items-center justify-center rounded-full bg-muted",
                className
              ),
            },
            props
          )
        );
      });
      (avatar_AvatarFallback.displayName = Fallback.displayName),
        (avatar_Avatar.__docgenInfo = { description: "", methods: [] }),
        (avatar_AvatarImage.__docgenInfo = { description: "", methods: [] }),
        (avatar_AvatarFallback.__docgenInfo = { description: "", methods: [] });
      var AvatarExamples_jsx = react.createElement;
      const DefaultAvatar = () =>
          AvatarExamples_jsx(
            avatar_Avatar,
            null,
            AvatarExamples_jsx(avatar_AvatarImage, {
              src: "https://github.com/shadcn.png",
              alt: "@shadcn",
            }),
            AvatarExamples_jsx(avatar_AvatarFallback, null, "CN")
          ),
        FallbackAvatar = () =>
          AvatarExamples_jsx(
            avatar_Avatar,
            null,
            AvatarExamples_jsx(avatar_AvatarImage, { src: "/broken-image.jpg", alt: "@user" }),
            AvatarExamples_jsx(avatar_AvatarFallback, null, "JD")
          ),
        AvatarSizes = () =>
          AvatarExamples_jsx(
            "div",
            { className: "flex items-center gap-4" },
            AvatarExamples_jsx(
              avatar_Avatar,
              { className: "h-8 w-8" },
              AvatarExamples_jsx(avatar_AvatarImage, {
                src: "https://github.com/shadcn.png",
                alt: "@shadcn",
              }),
              AvatarExamples_jsx(avatar_AvatarFallback, null, "CN")
            ),
            AvatarExamples_jsx(
              avatar_Avatar,
              null,
              AvatarExamples_jsx(avatar_AvatarImage, {
                src: "https://github.com/shadcn.png",
                alt: "@shadcn",
              }),
              AvatarExamples_jsx(avatar_AvatarFallback, null, "CN")
            ),
            AvatarExamples_jsx(
              avatar_Avatar,
              { className: "h-14 w-14" },
              AvatarExamples_jsx(avatar_AvatarImage, {
                src: "https://github.com/shadcn.png",
                alt: "@shadcn",
              }),
              AvatarExamples_jsx(avatar_AvatarFallback, null, "CN")
            ),
            AvatarExamples_jsx(
              avatar_Avatar,
              { className: "h-20 w-20" },
              AvatarExamples_jsx(avatar_AvatarImage, {
                src: "https://github.com/shadcn.png",
                alt: "@shadcn",
              }),
              AvatarExamples_jsx(avatar_AvatarFallback, null, "CN")
            )
          ),
        CustomFallbacks = () =>
          AvatarExamples_jsx(
            "div",
            { className: "flex items-center gap-4" },
            AvatarExamples_jsx(
              avatar_Avatar,
              null,
              AvatarExamples_jsx(avatar_AvatarImage, { src: "/broken-image.jpg", alt: "@user" }),
              AvatarExamples_jsx(
                avatar_AvatarFallback,
                { className: "bg-red-500 text-white" },
                "JD"
              )
            ),
            AvatarExamples_jsx(
              avatar_Avatar,
              null,
              AvatarExamples_jsx(avatar_AvatarImage, { src: "/broken-image.jpg", alt: "@user" }),
              AvatarExamples_jsx(
                avatar_AvatarFallback,
                { className: "bg-blue-500 text-white" },
                "AB"
              )
            ),
            AvatarExamples_jsx(
              avatar_Avatar,
              null,
              AvatarExamples_jsx(avatar_AvatarImage, { src: "/broken-image.jpg", alt: "@user" }),
              AvatarExamples_jsx(
                avatar_AvatarFallback,
                { className: "bg-green-500 text-white" },
                "CD"
              )
            ),
            AvatarExamples_jsx(
              avatar_Avatar,
              null,
              AvatarExamples_jsx(avatar_AvatarImage, { src: "/broken-image.jpg", alt: "@user" }),
              AvatarExamples_jsx(
                avatar_AvatarFallback,
                { className: "bg-purple-500 text-white" },
                "EF"
              )
            )
          ),
        AvatarGroup = () =>
          AvatarExamples_jsx(
            "div",
            { className: "flex items-center -space-x-4" },
            AvatarExamples_jsx(
              avatar_Avatar,
              { className: "border-2 border-background" },
              AvatarExamples_jsx(avatar_AvatarImage, {
                src: "https://github.com/shadcn.png",
                alt: "@shadcn",
              }),
              AvatarExamples_jsx(avatar_AvatarFallback, null, "CN")
            ),
            AvatarExamples_jsx(
              avatar_Avatar,
              { className: "border-2 border-background" },
              AvatarExamples_jsx(avatar_AvatarImage, {
                src: "https://github.com/shadcn.png",
                alt: "@shadcn",
              }),
              AvatarExamples_jsx(avatar_AvatarFallback, null, "CN")
            ),
            AvatarExamples_jsx(
              avatar_Avatar,
              { className: "border-2 border-background" },
              AvatarExamples_jsx(avatar_AvatarImage, {
                src: "https://github.com/shadcn.png",
                alt: "@shadcn",
              }),
              AvatarExamples_jsx(avatar_AvatarFallback, null, "CN")
            ),
            AvatarExamples_jsx(
              avatar_Avatar,
              { className: "border-2 border-background bg-muted" },
              AvatarExamples_jsx(avatar_AvatarFallback, null, "+3")
            )
          ),
        AvatarExamples = () =>
          AvatarExamples_jsx(
            "div",
            { className: "space-y-8" },
            AvatarExamples_jsx(
              "div",
              null,
              AvatarExamples_jsx("h3", { className: "text-lg font-medium mb-2" }, "Default Avatar"),
              AvatarExamples_jsx(DefaultAvatar, null)
            ),
            AvatarExamples_jsx(
              "div",
              null,
              AvatarExamples_jsx(
                "h3",
                { className: "text-lg font-medium mb-2" },
                "Fallback Avatar"
              ),
              AvatarExamples_jsx(FallbackAvatar, null)
            ),
            AvatarExamples_jsx(
              "div",
              null,
              AvatarExamples_jsx("h3", { className: "text-lg font-medium mb-2" }, "Avatar Sizes"),
              AvatarExamples_jsx(AvatarSizes, null)
            ),
            AvatarExamples_jsx(
              "div",
              null,
              AvatarExamples_jsx(
                "h3",
                { className: "text-lg font-medium mb-2" },
                "Custom Fallback Colors"
              ),
              AvatarExamples_jsx(CustomFallbacks, null)
            ),
            AvatarExamples_jsx(
              "div",
              null,
              AvatarExamples_jsx("h3", { className: "text-lg font-medium mb-2" }, "Avatar Group"),
              AvatarExamples_jsx(AvatarGroup, null)
            )
          );
      (DefaultAvatar.__docgenInfo = { description: "", methods: [], displayName: "DefaultAvatar" }),
        (FallbackAvatar.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "FallbackAvatar",
        }),
        (AvatarSizes.__docgenInfo = { description: "", methods: [], displayName: "AvatarSizes" }),
        (CustomFallbacks.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "CustomFallbacks",
        }),
        (AvatarGroup.__docgenInfo = { description: "", methods: [], displayName: "AvatarGroup" }),
        (AvatarExamples.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "AvatarExamples",
        });
      var Avatar_stories_jsx = react.createElement;
      const Avatar_stories = {
          title: "UI/Avatar",
          component: avatar_Avatar,
          parameters: {
            layout: "centered",
            docs: {
              description: {
                component: "An image element with a fallback for representing the user.",
              },
            },
          },
          argTypes: {
            className: {
              control: "text",
              description: "Additional CSS classes to apply to the avatar",
              table: { category: "Appearance" },
            },
          },
        },
        Default = {
          render: () =>
            Avatar_stories_jsx(
              avatar_Avatar,
              null,
              Avatar_stories_jsx(avatar_AvatarImage, {
                src: "https://github.com/shadcn.png",
                alt: "@shadcn",
              }),
              Avatar_stories_jsx(avatar_AvatarFallback, null, "CN")
            ),
        },
        WithFallback = {
          render: () =>
            Avatar_stories_jsx(
              avatar_Avatar,
              null,
              Avatar_stories_jsx(avatar_AvatarImage, { src: "/broken-image.jpg", alt: "@user" }),
              Avatar_stories_jsx(avatar_AvatarFallback, null, "JD")
            ),
        },
        CustomSize = {
          render: () =>
            Avatar_stories_jsx(
              avatar_Avatar,
              { className: "h-16 w-16" },
              Avatar_stories_jsx(avatar_AvatarImage, {
                src: "https://github.com/shadcn.png",
                alt: "@shadcn",
              }),
              Avatar_stories_jsx(avatar_AvatarFallback, null, "CN")
            ),
        },
        CustomFallbackColor = {
          render: () =>
            Avatar_stories_jsx(
              avatar_Avatar,
              null,
              Avatar_stories_jsx(avatar_AvatarImage, { src: "/broken-image.jpg", alt: "@user" }),
              Avatar_stories_jsx(
                avatar_AvatarFallback,
                { className: "bg-blue-500 text-white" },
                "JD"
              )
            ),
        },
        CompleteExamples = {
          render: () => Avatar_stories_jsx(AvatarExamples, null),
          parameters: {
            layout: "padded",
            docs: {
              description: {
                story: "Complete set of avatar examples showing various configurations.",
              },
            },
          },
        },
        __namedExportsOrder = [
          "Default",
          "WithFallback",
          "CustomSize",
          "CustomFallbackColor",
          "CompleteExamples",
        ];
      (Default.parameters = {
        ...Default.parameters,
        docs: {
          ...Default.parameters?.docs,
          source: {
            originalSource:
              '{\n  render: () => <Avatar>\n      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />\n      <AvatarFallback>CN</AvatarFallback>\n    </Avatar>\n}',
            ...Default.parameters?.docs?.source,
          },
        },
      }),
        (WithFallback.parameters = {
          ...WithFallback.parameters,
          docs: {
            ...WithFallback.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <Avatar>\n      <AvatarImage src="/broken-image.jpg" alt="@user" />\n      <AvatarFallback>JD</AvatarFallback>\n    </Avatar>\n}',
              ...WithFallback.parameters?.docs?.source,
            },
          },
        }),
        (CustomSize.parameters = {
          ...CustomSize.parameters,
          docs: {
            ...CustomSize.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <Avatar className="h-16 w-16">\n      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />\n      <AvatarFallback>CN</AvatarFallback>\n    </Avatar>\n}',
              ...CustomSize.parameters?.docs?.source,
            },
          },
        }),
        (CustomFallbackColor.parameters = {
          ...CustomFallbackColor.parameters,
          docs: {
            ...CustomFallbackColor.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <Avatar>\n      <AvatarImage src="/broken-image.jpg" alt="@user" />\n      <AvatarFallback className="bg-blue-500 text-white">JD</AvatarFallback>\n    </Avatar>\n}',
              ...CustomFallbackColor.parameters?.docs?.source,
            },
          },
        }),
        (CompleteExamples.parameters = {
          ...CompleteExamples.parameters,
          docs: {
            ...CompleteExamples.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <AvatarExamples />,\n  parameters: {\n    layout: "padded",\n    docs: {\n      description: {\n        story: "Complete set of avatar examples showing various configurations."\n      }\n    }\n  }\n}',
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
