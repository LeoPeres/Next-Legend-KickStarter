try {
  (() => {
    var dc = Object.create;
    var Aa = Object.defineProperty;
    var uc = Object.getOwnPropertyDescriptor;
    var mc = Object.getOwnPropertyNames;
    var pc = Object.getPrototypeOf,
      hc = Object.prototype.hasOwnProperty;
    var Ht = ((e) =>
      typeof require < "u"
        ? require
        : typeof Proxy < "u"
          ? new Proxy(e, { get: (t, n) => (typeof require < "u" ? require : t)[n] })
          : e)(function (e) {
      if (typeof require < "u") return require.apply(this, arguments);
      throw Error('Dynamic require of "' + e + '" is not supported');
    });
    var Fa = (e, t) => () => (e && (t = e((e = 0))), t);
    var Gr = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
      ql = (e, t) => {
        for (var n in t) Aa(e, n, { get: t[n], enumerable: !0 });
      },
      Yl = (e, t, n, r) => {
        if ((t && typeof t == "object") || typeof t == "function")
          for (let i of mc(t))
            !hc.call(e, i) &&
              i !== n &&
              Aa(e, i, { get: () => t[i], enumerable: !(r = uc(t, i)) || r.enumerable });
        return e;
      };
    var Ql = (e, t, n) => (
        (n = e != null ? dc(pc(e)) : {}),
        Yl(t || !e || !e.__esModule ? Aa(n, "default", { value: e, enumerable: !0 }) : n, e)
      ),
      fc = (e) => Yl(Aa({}, "__esModule", { value: !0 }), e);
    var ne = Fa(() => {});
    var xe,
      ae = Fa(() => {
        xe = {
          NODE_ENV: "production",
          NODE_PATH: [],
          STORYBOOK: "true",
          PUBLIC_URL: ".",
          NEXT_PUBLIC_SUPABASE_URL: "https://example.supabase.co",
          NEXT_PUBLIC_SUPABASE_ANON_KEY:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsYWNlaG9sZGVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2MTYxNjY1NTIsImV4cCI6MTkzMTc0MjU1Mn0.placeholder",
          NEXT_PUBLIC_APP_URL: "http://localhost:3000",
        };
      });
    var re = Fa(() => {});
    var Qr = {};
    ql(Qr, {
      Children: () => vc,
      Component: () => At,
      Fragment: () => yc,
      Profiler: () => Ec,
      PureComponent: () => bc,
      StrictMode: () => kc,
      Suspense: () => wc,
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => Cc,
      cloneElement: () => Sc,
      createContext: () => je,
      createElement: () => S,
      createFactory: () => xc,
      createRef: () => Nc,
      default: () => a,
      forwardRef: () => $,
      isValidElement: () => qr,
      lazy: () => _c,
      memo: () => Mc,
      startTransition: () => Tc,
      unstable_act: () => Ac,
      useCallback: () => H,
      useContext: () => Ft,
      useDebugValue: () => Fc,
      useDeferredValue: () => Oc,
      useEffect: () => K,
      useId: () => Lc,
      useImperativeHandle: () => Rc,
      useInsertionEffect: () => Ic,
      useLayoutEffect: () => Zc,
      useMemo: () => ct,
      useReducer: () => Yr,
      useRef: () => Ne,
      useState: () => _e,
      useSyncExternalStore: () => Bc,
      useTransition: () => Pc,
      version: () => Vc,
    });
    var a,
      vc,
      At,
      yc,
      Ec,
      bc,
      kc,
      wc,
      Cc,
      Sc,
      je,
      S,
      xc,
      Nc,
      $,
      qr,
      _c,
      Mc,
      Tc,
      Ac,
      H,
      Ft,
      Fc,
      Oc,
      K,
      Lc,
      Rc,
      Ic,
      Zc,
      ct,
      Yr,
      Ne,
      _e,
      Bc,
      Pc,
      Vc,
      Ln = Fa(() => {
        ne();
        ae();
        re();
        (a = __REACT__),
          ({
            Children: vc,
            Component: At,
            Fragment: yc,
            Profiler: Ec,
            PureComponent: bc,
            StrictMode: kc,
            Suspense: wc,
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Cc,
            cloneElement: Sc,
            createContext: je,
            createElement: S,
            createFactory: xc,
            createRef: Nc,
            forwardRef: $,
            isValidElement: qr,
            lazy: _c,
            memo: Mc,
            startTransition: Tc,
            unstable_act: Ac,
            useCallback: H,
            useContext: Ft,
            useDebugValue: Fc,
            useDeferredValue: Oc,
            useEffect: K,
            useId: Lc,
            useImperativeHandle: Rc,
            useInsertionEffect: Ic,
            useLayoutEffect: Zc,
            useMemo: ct,
            useReducer: Yr,
            useRef: Ne,
            useState: _e,
            useSyncExternalStore: Bc,
            useTransition: Pc,
            version: Vc,
          } = __REACT__);
      });
    var ho = Gr((La) => {
      "use strict";
      ne();
      ae();
      re();
      var m5 = (Ln(), fc(Qr)),
        p5 = Symbol.for("react.element"),
        h5 = Symbol.for("react.fragment"),
        f5 = Object.prototype.hasOwnProperty,
        g5 = m5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        v5 = { key: !0, ref: !0, __self: !0, __source: !0 };
      function po(e, t, n) {
        var r,
          i = {},
          l = null,
          o = null;
        n !== void 0 && (l = "" + n),
          t.key !== void 0 && (l = "" + t.key),
          t.ref !== void 0 && (o = t.ref);
        for (r in t) f5.call(t, r) && !v5.hasOwnProperty(r) && (i[r] = t[r]);
        if (e && e.defaultProps)
          for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
        return { $$typeof: p5, type: e, key: l, ref: o, props: i, _owner: g5.current };
      }
      La.Fragment = h5;
      La.jsx = po;
      La.jsxs = po;
    });
    var go = Gr((kv, fo) => {
      "use strict";
      ne();
      ae();
      re();
      fo.exports = ho();
    });
    var yo = Gr((xv, vo) => {
      "use strict";
      ne();
      ae();
      re();
      var Ra = {
        linear: function (e, t, n, r) {
          var i = n - t;
          return (i * e) / r + t;
        },
        easeInQuad: function (e, t, n, r) {
          var i = n - t;
          return i * (e /= r) * e + t;
        },
        easeOutQuad: function (e, t, n, r) {
          var i = n - t;
          return -i * (e /= r) * (e - 2) + t;
        },
        easeInOutQuad: function (e, t, n, r) {
          var i = n - t;
          return (e /= r / 2) < 1 ? (i / 2) * e * e + t : (-i / 2) * (--e * (e - 2) - 1) + t;
        },
        easeInCubic: function (e, t, n, r) {
          var i = n - t;
          return i * (e /= r) * e * e + t;
        },
        easeOutCubic: function (e, t, n, r) {
          var i = n - t;
          return i * ((e = e / r - 1) * e * e + 1) + t;
        },
        easeInOutCubic: function (e, t, n, r) {
          var i = n - t;
          return (e /= r / 2) < 1 ? (i / 2) * e * e * e + t : (i / 2) * ((e -= 2) * e * e + 2) + t;
        },
        easeInQuart: function (e, t, n, r) {
          var i = n - t;
          return i * (e /= r) * e * e * e + t;
        },
        easeOutQuart: function (e, t, n, r) {
          var i = n - t;
          return -i * ((e = e / r - 1) * e * e * e - 1) + t;
        },
        easeInOutQuart: function (e, t, n, r) {
          var i = n - t;
          return (e /= r / 2) < 1
            ? (i / 2) * e * e * e * e + t
            : (-i / 2) * ((e -= 2) * e * e * e - 2) + t;
        },
        easeInQuint: function (e, t, n, r) {
          var i = n - t;
          return i * (e /= r) * e * e * e * e + t;
        },
        easeOutQuint: function (e, t, n, r) {
          var i = n - t;
          return i * ((e = e / r - 1) * e * e * e * e + 1) + t;
        },
        easeInOutQuint: function (e, t, n, r) {
          var i = n - t;
          return (e /= r / 2) < 1
            ? (i / 2) * e * e * e * e * e + t
            : (i / 2) * ((e -= 2) * e * e * e * e + 2) + t;
        },
        easeInSine: function (e, t, n, r) {
          var i = n - t;
          return -i * Math.cos((e / r) * (Math.PI / 2)) + i + t;
        },
        easeOutSine: function (e, t, n, r) {
          var i = n - t;
          return i * Math.sin((e / r) * (Math.PI / 2)) + t;
        },
        easeInOutSine: function (e, t, n, r) {
          var i = n - t;
          return (-i / 2) * (Math.cos((Math.PI * e) / r) - 1) + t;
        },
        easeInExpo: function (e, t, n, r) {
          var i = n - t;
          return e == 0 ? t : i * Math.pow(2, 10 * (e / r - 1)) + t;
        },
        easeOutExpo: function (e, t, n, r) {
          var i = n - t;
          return e == r ? t + i : i * (-Math.pow(2, (-10 * e) / r) + 1) + t;
        },
        easeInOutExpo: function (e, t, n, r) {
          var i = n - t;
          return e === 0
            ? t
            : e === r
              ? t + i
              : (e /= r / 2) < 1
                ? (i / 2) * Math.pow(2, 10 * (e - 1)) + t
                : (i / 2) * (-Math.pow(2, -10 * --e) + 2) + t;
        },
        easeInCirc: function (e, t, n, r) {
          var i = n - t;
          return -i * (Math.sqrt(1 - (e /= r) * e) - 1) + t;
        },
        easeOutCirc: function (e, t, n, r) {
          var i = n - t;
          return i * Math.sqrt(1 - (e = e / r - 1) * e) + t;
        },
        easeInOutCirc: function (e, t, n, r) {
          var i = n - t;
          return (e /= r / 2) < 1
            ? (-i / 2) * (Math.sqrt(1 - e * e) - 1) + t
            : (i / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
        },
        easeInElastic: function (e, t, n, r) {
          var i = n - t,
            l,
            o,
            s;
          return (
            (s = 1.70158),
            (o = 0),
            (l = i),
            e === 0
              ? t
              : (e /= r) === 1
                ? t + i
                : (o || (o = r * 0.3),
                  l < Math.abs(i)
                    ? ((l = i), (s = o / 4))
                    : (s = (o / (2 * Math.PI)) * Math.asin(i / l)),
                  -(l * Math.pow(2, 10 * (e -= 1)) * Math.sin(((e * r - s) * (2 * Math.PI)) / o)) +
                    t)
          );
        },
        easeOutElastic: function (e, t, n, r) {
          var i = n - t,
            l,
            o,
            s;
          return (
            (s = 1.70158),
            (o = 0),
            (l = i),
            e === 0
              ? t
              : (e /= r) === 1
                ? t + i
                : (o || (o = r * 0.3),
                  l < Math.abs(i)
                    ? ((l = i), (s = o / 4))
                    : (s = (o / (2 * Math.PI)) * Math.asin(i / l)),
                  l * Math.pow(2, -10 * e) * Math.sin(((e * r - s) * (2 * Math.PI)) / o) + i + t)
          );
        },
        easeInOutElastic: function (e, t, n, r) {
          var i = n - t,
            l,
            o,
            s;
          return (
            (s = 1.70158),
            (o = 0),
            (l = i),
            e === 0
              ? t
              : (e /= r / 2) === 2
                ? t + i
                : (o || (o = r * 0.44999999999999996),
                  l < Math.abs(i)
                    ? ((l = i), (s = o / 4))
                    : (s = (o / (2 * Math.PI)) * Math.asin(i / l)),
                  e < 1
                    ? -0.5 *
                        (l *
                          Math.pow(2, 10 * (e -= 1)) *
                          Math.sin(((e * r - s) * (2 * Math.PI)) / o)) +
                      t
                    : l *
                        Math.pow(2, -10 * (e -= 1)) *
                        Math.sin(((e * r - s) * (2 * Math.PI)) / o) *
                        0.5 +
                      i +
                      t)
          );
        },
        easeInBack: function (e, t, n, r, i) {
          var l = n - t;
          return i === void 0 && (i = 1.70158), l * (e /= r) * e * ((i + 1) * e - i) + t;
        },
        easeOutBack: function (e, t, n, r, i) {
          var l = n - t;
          return (
            i === void 0 && (i = 1.70158), l * ((e = e / r - 1) * e * ((i + 1) * e + i) + 1) + t
          );
        },
        easeInOutBack: function (e, t, n, r, i) {
          var l = n - t;
          return (
            i === void 0 && (i = 1.70158),
            (e /= r / 2) < 1
              ? (l / 2) * (e * e * (((i *= 1.525) + 1) * e - i)) + t
              : (l / 2) * ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) + t
          );
        },
        easeInBounce: function (e, t, n, r) {
          var i = n - t,
            l;
          return (l = Ra.easeOutBounce(r - e, 0, i, r)), i - l + t;
        },
        easeOutBounce: function (e, t, n, r) {
          var i = n - t;
          return (e /= r) < 0.36363636363636365
            ? i * (7.5625 * e * e) + t
            : e < 0.7272727272727273
              ? i * (7.5625 * (e -= 0.5454545454545454) * e + 0.75) + t
              : e < 0.9090909090909091
                ? i * (7.5625 * (e -= 0.8181818181818182) * e + 0.9375) + t
                : i * (7.5625 * (e -= 0.9545454545454546) * e + 0.984375) + t;
        },
        easeInOutBounce: function (e, t, n, r) {
          var i = n - t,
            l;
          return e < r / 2
            ? ((l = Ra.easeInBounce(e * 2, 0, i, r)), l * 0.5 + t)
            : ((l = Ra.easeOutBounce(e * 2 - r, 0, i, r)), l * 0.5 + i * 0.5 + t);
        },
      };
      vo.exports = Ra;
    });
    ne();
    ae();
    re();
    ne();
    ae();
    re();
    ne();
    ae();
    re();
    var O8 = __STORYBOOK_API__,
      {
        ActiveTabs: L8,
        Consumer: R8,
        ManagerContext: I8,
        Provider: Z8,
        RequestResponseError: B8,
        addons: on,
        combineParameters: P8,
        controlOrMetaKey: V8,
        controlOrMetaSymbol: D8,
        eventMatchesShortcut: H8,
        eventToShortcut: j8,
        experimental_MockUniversalStore: z8,
        experimental_UniversalStore: U8,
        experimental_requestResponse: $8,
        experimental_useUniversalStore: W8,
        isMacLike: G8,
        isShortcutTaken: q8,
        keyToSymbol: Y8,
        merge: Q8,
        mockChannel: K8,
        optionOrAltSymbol: J8,
        shortcutMatchesShortcut: X8,
        shortcutToHumanString: e9,
        types: t9,
        useAddonState: Kl,
        useArgTypes: n9,
        useArgs: a9,
        useChannel: On,
        useGlobalTypes: Jl,
        useGlobals: Xl,
        useParameter: eo,
        useSharedState: r9,
        useStoryPrepared: i9,
        useStorybookApi: sn,
        useStorybookState: jt,
      } = __STORYBOOK_API__;
    ne();
    ae();
    re();
    var d9 = __STORYBOOK_TYPES__,
      { Addon_TypesEnum: Oa } = __STORYBOOK_TYPES__;
    Ln();
    Ln();
    ne();
    ae();
    re();
    var y9 = __STORYBOOK_THEMING__,
      {
        CacheProvider: E9,
        ClassNames: b9,
        Global: k9,
        ThemeProvider: w9,
        background: C9,
        color: dt,
        convert: S9,
        create: x9,
        createCache: N9,
        createGlobal: _9,
        createReset: M9,
        css: ue,
        darken: T9,
        ensure: A9,
        ignoreSsrWarning: F9,
        isPropValid: O9,
        jsx: L9,
        keyframes: Ot,
        lighten: R9,
        styled: w,
        themes: I9,
        typography: Z9,
        useTheme: zt,
        withTheme: B9,
      } = __STORYBOOK_THEMING__;
    var Kr = {};
    ql(Kr, {
      ARGTYPES_INFO_REQUEST: () => Hc,
      ARGTYPES_INFO_RESPONSE: () => jc,
      CHANNEL_CREATED: () => zc,
      CHANNEL_WS_DISCONNECT: () => Uc,
      CONFIG_ERROR: () => $c,
      CREATE_NEW_STORYFILE_REQUEST: () => Wc,
      CREATE_NEW_STORYFILE_RESPONSE: () => Gc,
      CURRENT_STORY_WAS_SET: () => qc,
      DOCS_PREPARED: () => Yc,
      DOCS_RENDERED: () => Qc,
      FILE_COMPONENT_SEARCH_REQUEST: () => Kc,
      FILE_COMPONENT_SEARCH_RESPONSE: () => Jc,
      FORCE_REMOUNT: () => Xc,
      FORCE_RE_RENDER: () => ed,
      GLOBALS_UPDATED: () => td,
      NAVIGATE_URL: () => nd,
      PLAY_FUNCTION_THREW_EXCEPTION: () => ad,
      PRELOAD_ENTRIES: () => rd,
      PREVIEW_BUILDER_PROGRESS: () => id,
      PREVIEW_KEYDOWN: () => ld,
      REGISTER_SUBSCRIPTION: () => od,
      REQUEST_WHATS_NEW_DATA: () => sd,
      RESET_STORY_ARGS: () => cd,
      RESULT_WHATS_NEW_DATA: () => dd,
      SAVE_STORY_REQUEST: () => ud,
      SAVE_STORY_RESPONSE: () => md,
      SELECT_STORY: () => pd,
      SET_CONFIG: () => hd,
      SET_CURRENT_STORY: () => fd,
      SET_FILTER: () => gd,
      SET_GLOBALS: () => vd,
      SET_INDEX: () => yd,
      SET_STORIES: () => Ed,
      SET_WHATS_NEW_CACHE: () => bd,
      SHARED_STATE_CHANGED: () => kd,
      SHARED_STATE_SET: () => wd,
      STORIES_COLLAPSE_ALL: () => Cd,
      STORIES_EXPAND_ALL: () => Sd,
      STORY_ARGS_UPDATED: () => xd,
      STORY_CHANGED: () => Nd,
      STORY_ERRORED: () => _d,
      STORY_FINISHED: () => Md,
      STORY_INDEX_INVALIDATED: () => Td,
      STORY_MISSING: () => Ad,
      STORY_PREPARED: () => Fd,
      STORY_RENDERED: () => Od,
      STORY_RENDER_PHASE_CHANGED: () => Ld,
      STORY_SPECIFIED: () => Rd,
      STORY_THREW_EXCEPTION: () => Id,
      STORY_UNCHANGED: () => Zd,
      TELEMETRY_ERROR: () => Bd,
      TESTING_MODULE_CANCEL_TEST_RUN_REQUEST: () => Pd,
      TESTING_MODULE_CANCEL_TEST_RUN_RESPONSE: () => Vd,
      TESTING_MODULE_CRASH_REPORT: () => Dd,
      TESTING_MODULE_PROGRESS_REPORT: () => Hd,
      TESTING_MODULE_RUN_ALL_REQUEST: () => jd,
      TESTING_MODULE_RUN_REQUEST: () => zd,
      TOGGLE_WHATS_NEW_NOTIFICATIONS: () => Ud,
      UNHANDLED_ERRORS_WHILE_PLAYING: () => $d,
      UPDATE_GLOBALS: () => Wd,
      UPDATE_QUERY_PARAMS: () => Gd,
      UPDATE_STORY_ARGS: () => qd,
      default: () => Dc,
    });
    ne();
    ae();
    re();
    var Dc = __STORYBOOK_CORE_EVENTS__,
      {
        ARGTYPES_INFO_REQUEST: Hc,
        ARGTYPES_INFO_RESPONSE: jc,
        CHANNEL_CREATED: zc,
        CHANNEL_WS_DISCONNECT: Uc,
        CONFIG_ERROR: $c,
        CREATE_NEW_STORYFILE_REQUEST: Wc,
        CREATE_NEW_STORYFILE_RESPONSE: Gc,
        CURRENT_STORY_WAS_SET: qc,
        DOCS_PREPARED: Yc,
        DOCS_RENDERED: Qc,
        FILE_COMPONENT_SEARCH_REQUEST: Kc,
        FILE_COMPONENT_SEARCH_RESPONSE: Jc,
        FORCE_REMOUNT: Xc,
        FORCE_RE_RENDER: ed,
        GLOBALS_UPDATED: td,
        NAVIGATE_URL: nd,
        PLAY_FUNCTION_THREW_EXCEPTION: ad,
        PRELOAD_ENTRIES: rd,
        PREVIEW_BUILDER_PROGRESS: id,
        PREVIEW_KEYDOWN: ld,
        REGISTER_SUBSCRIPTION: od,
        REQUEST_WHATS_NEW_DATA: sd,
        RESET_STORY_ARGS: cd,
        RESULT_WHATS_NEW_DATA: dd,
        SAVE_STORY_REQUEST: ud,
        SAVE_STORY_RESPONSE: md,
        SELECT_STORY: pd,
        SET_CONFIG: hd,
        SET_CURRENT_STORY: fd,
        SET_FILTER: gd,
        SET_GLOBALS: vd,
        SET_INDEX: yd,
        SET_STORIES: Ed,
        SET_WHATS_NEW_CACHE: bd,
        SHARED_STATE_CHANGED: kd,
        SHARED_STATE_SET: wd,
        STORIES_COLLAPSE_ALL: Cd,
        STORIES_EXPAND_ALL: Sd,
        STORY_ARGS_UPDATED: xd,
        STORY_CHANGED: Nd,
        STORY_ERRORED: _d,
        STORY_FINISHED: Md,
        STORY_INDEX_INVALIDATED: Td,
        STORY_MISSING: Ad,
        STORY_PREPARED: Fd,
        STORY_RENDERED: Od,
        STORY_RENDER_PHASE_CHANGED: Ld,
        STORY_SPECIFIED: Rd,
        STORY_THREW_EXCEPTION: Id,
        STORY_UNCHANGED: Zd,
        TELEMETRY_ERROR: Bd,
        TESTING_MODULE_CANCEL_TEST_RUN_REQUEST: Pd,
        TESTING_MODULE_CANCEL_TEST_RUN_RESPONSE: Vd,
        TESTING_MODULE_CRASH_REPORT: Dd,
        TESTING_MODULE_PROGRESS_REPORT: Hd,
        TESTING_MODULE_RUN_ALL_REQUEST: jd,
        TESTING_MODULE_RUN_REQUEST: zd,
        TOGGLE_WHATS_NEW_NOTIFICATIONS: Ud,
        UNHANDLED_ERRORS_WHILE_PLAYING: $d,
        UPDATE_GLOBALS: Wd,
        UPDATE_QUERY_PARAMS: Gd,
        UPDATE_STORY_ARGS: qd,
      } = __STORYBOOK_CORE_EVENTS__;
    ne();
    ae();
    re();
    var $9 = __STORYBOOK_COMPONENTS__,
      {
        A: W9,
        ActionBar: G9,
        AddonPanel: q9,
        Badge: Jr,
        Bar: Y9,
        Blockquote: Q9,
        Button: Xr,
        ClipboardCode: K9,
        Code: to,
        DL: J9,
        Div: X9,
        DocumentWrapper: eg,
        EmptyTabContent: tg,
        ErrorFormatter: ng,
        FlexBar: ag,
        Form: rg,
        H1: ig,
        H2: lg,
        H3: og,
        H4: sg,
        H5: cg,
        H6: dg,
        HR: ug,
        IconButton: no,
        IconButtonSkeleton: mg,
        Icons: pg,
        Img: hg,
        LI: fg,
        Link: Ut,
        ListItem: gg,
        Loader: ei,
        Modal: vg,
        OL: yg,
        P: Eg,
        Placeholder: bg,
        Pre: kg,
        ProgressSpinner: wg,
        ResetWrapper: Cg,
        ScrollArea: Sg,
        Separator: xg,
        Spaced: Ng,
        Span: _g,
        StorybookIcon: Mg,
        StorybookLogo: Tg,
        Symbols: Ag,
        SyntaxHighlighter: Fg,
        TT: Og,
        TabBar: Lg,
        TabButton: Rg,
        TabWrapper: Ig,
        Table: Zg,
        Tabs: Bg,
        TabsState: Pg,
        TooltipLinkList: ao,
        TooltipMessage: ro,
        TooltipNote: io,
        UL: Vg,
        WithTooltip: we,
        WithTooltipPure: Dg,
        Zoom: Hg,
        codeCommon: jg,
        components: zg,
        createCopyToClipboardFunction: Ug,
        getStoryHref: $g,
        icons: Wg,
        interleaveSeparators: Gg,
        nameSpaceClassNames: qg,
        resetComponents: Yg,
        withReset: Qg,
      } = __STORYBOOK_COMPONENTS__;
    ne();
    ae();
    re();
    var Yd = "array",
      Qd = "bit",
      lo = "bits",
      Kd = "byte",
      oo = "bytes",
      cn = "",
      Jd = "exponent",
      Xd = "function",
      so = "iec",
      e5 = "Invalid number",
      t5 = "Invalid rounding method",
      ti = "jedec",
      n5 = "object",
      co = ".",
      a5 = "round",
      r5 = "s",
      i5 = "si",
      l5 = "kbit",
      o5 = "kB",
      s5 = " ",
      c5 = "string",
      d5 = "0",
      ni = {
        symbol: {
          iec: {
            bits: ["bit", "Kibit", "Mibit", "Gibit", "Tibit", "Pibit", "Eibit", "Zibit", "Yibit"],
            bytes: ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"],
          },
          jedec: {
            bits: ["bit", "Kbit", "Mbit", "Gbit", "Tbit", "Pbit", "Ebit", "Zbit", "Ybit"],
            bytes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
          },
        },
        fullform: {
          iec: ["", "kibi", "mebi", "gibi", "tebi", "pebi", "exbi", "zebi", "yobi"],
          jedec: ["", "kilo", "mega", "giga", "tera", "peta", "exa", "zetta", "yotta"],
        },
      };
    function ai(
      e,
      {
        bits: t = !1,
        pad: n = !1,
        base: r = -1,
        round: i = 2,
        locale: l = cn,
        localeOptions: o = {},
        separator: s = cn,
        spacer: c = s5,
        symbols: d = {},
        standard: u = cn,
        output: m = c5,
        fullform: p = !1,
        fullforms: f = [],
        exponent: g = -1,
        roundingMethod: v = a5,
        precision: k = 0,
      } = {}
    ) {
      let E = g,
        h = Number(e),
        y = [],
        b = 0,
        C = cn;
      u === i5
        ? ((r = 10), (u = ti))
        : u === so || u === ti
          ? (r = 2)
          : r === 2
            ? (u = so)
            : ((r = 10), (u = ti));
      let O = r === 10 ? 1e3 : 1024,
        I = p === !0,
        U = h < 0,
        G = Math[v];
      if (typeof e != "bigint" && isNaN(e)) throw new TypeError(e5);
      if (typeof G !== Xd) throw new TypeError(t5);
      if (
        (U && (h = -h),
        (E === -1 || isNaN(E)) && ((E = Math.floor(Math.log(h) / Math.log(O))), E < 0 && (E = 0)),
        E > 8 && (k > 0 && (k += 8 - E), (E = 8)),
        m === Jd)
      )
        return E;
      if (h === 0) (y[0] = 0), (C = y[1] = ni.symbol[u][t ? lo : oo][E]);
      else {
        (b = h / (r === 2 ? Math.pow(2, E * 10) : Math.pow(1e3, E))),
          t && ((b = b * 8), b >= O && E < 8 && ((b = b / O), E++));
        let oe = Math.pow(10, E > 0 ? i : 0);
        (y[0] = G(b * oe) / oe),
          y[0] === O && E < 8 && g === -1 && ((y[0] = 1), E++),
          (C = y[1] = r === 10 && E === 1 ? (t ? l5 : o5) : ni.symbol[u][t ? lo : oo][E]);
      }
      if (
        (U && (y[0] = -y[0]),
        k > 0 && (y[0] = y[0].toPrecision(k)),
        (y[1] = d[y[1]] || y[1]),
        l === !0
          ? (y[0] = y[0].toLocaleString())
          : l.length > 0
            ? (y[0] = y[0].toLocaleString(l, o))
            : s.length > 0 && (y[0] = y[0].toString().replace(co, s)),
        n && i > 0)
      ) {
        let oe = y[0].toString(),
          ee = s || (oe.match(/(\D)/g) || []).pop() || co,
          ke = oe.toString().split(ee),
          ye = ke[1] || cn,
          pe = ye.length,
          ie = i - pe;
        y[0] = `${ke[0]}${ee}${ye.padEnd(pe + ie, d5)}`;
      }
      return (
        I && (y[1] = f[E] ? f[E] : ni.fullform[u][E] + (t ? Qd : Kd) + (y[0] === 1 ? cn : r5)),
        m === Yd ? y : m === n5 ? { value: y[0], symbol: y[1], exponent: E, unit: C } : y.join(c)
      );
    }
    ne();
    ae();
    re();
    var Rn = __REACT_DOM__,
      {
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: iv,
        createPortal: In,
        createRoot: lv,
        findDOMNode: ov,
        flushSync: sv,
        hydrate: cv,
        hydrateRoot: dv,
        render: uv,
        unmountComponentAtNode: uo,
        unstable_batchedUpdates: mv,
        unstable_renderSubtreeIntoContainer: mo,
        version: pv,
      } = __REACT_DOM__;
    ne();
    ae();
    re();
    var si = Ql(go(), 1);
    Ln();
    var Eo = Ql(yo(), 1);
    function y5(e) {
      return (e * Math.PI) / 180;
    }
    function ze(e, t) {
      return e + Math.random() * (t - e);
    }
    function E5(e, t) {
      return Math.floor(e + Math.random() * (t - e + 1));
    }
    var Zn;
    (function (e) {
      (e[(e.Circle = 0)] = "Circle"), (e[(e.Square = 1)] = "Square"), (e[(e.Strip = 2)] = "Strip");
    })(Zn || (Zn = {}));
    var Lt;
    (function (e) {
      (e[(e.Positive = 1)] = "Positive"), (e[(e.Negative = -1)] = "Negative");
    })(Lt || (Lt = {}));
    var ii = class {
        constructor(t, n, r, i) {
          this.getOptions = n;
          let { colors: l, initialVelocityX: o, initialVelocityY: s } = this.getOptions();
          (this.context = t),
            (this.x = r),
            (this.y = i),
            (this.w = ze(5, 20)),
            (this.h = ze(5, 20)),
            (this.radius = ze(5, 10)),
            (this.vx = typeof o == "number" ? ze(-o, o) : ze(o.min, o.max)),
            (this.vy = typeof s == "number" ? ze(-s, 0) : ze(s.min, s.max)),
            (this.shape = E5(0, 2)),
            (this.angle = y5(ze(0, 360))),
            (this.angularSpin = ze(-0.2, 0.2)),
            (this.color = l[Math.floor(Math.random() * l.length)]),
            (this.rotateY = ze(0, 1)),
            (this.rotationDirection = ze(0, 1) ? Lt.Positive : Lt.Negative);
        }
        update() {
          let { gravity: t, wind: n, friction: r, opacity: i, drawShape: l } = this.getOptions();
          (this.x += this.vx),
            (this.y += this.vy),
            (this.vy += t),
            (this.vx += n),
            (this.vx *= r),
            (this.vy *= r),
            this.rotateY >= 1 && this.rotationDirection === Lt.Positive
              ? (this.rotationDirection = Lt.Negative)
              : this.rotateY <= -1 &&
                this.rotationDirection === Lt.Negative &&
                (this.rotationDirection = Lt.Positive);
          let o = 0.1 * this.rotationDirection;
          if (
            ((this.rotateY += o),
            (this.angle += this.angularSpin),
            this.context.save(),
            this.context.translate(this.x, this.y),
            this.context.rotate(this.angle),
            this.context.scale(1, this.rotateY),
            this.context.rotate(this.angle),
            this.context.beginPath(),
            (this.context.fillStyle = this.color),
            (this.context.strokeStyle = this.color),
            (this.context.globalAlpha = i),
            (this.context.lineCap = "round"),
            (this.context.lineWidth = 2),
            l && typeof l == "function")
          )
            l.call(this, this.context);
          else
            switch (this.shape) {
              case Zn.Circle: {
                this.context.beginPath(),
                  this.context.arc(0, 0, this.radius, 0, 2 * Math.PI),
                  this.context.fill();
                break;
              }
              case Zn.Square: {
                this.context.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
                break;
              }
              case Zn.Strip: {
                this.context.fillRect(-this.w / 6, -this.h / 2, this.w / 3, this.h);
                break;
              }
            }
          this.context.closePath(), this.context.restore();
        }
      },
      li = class {
        constructor(t, n) {
          (this.x = 0),
            (this.y = 0),
            (this.w = 0),
            (this.h = 0),
            (this.lastNumberOfPieces = 0),
            (this.tweenInitTime = Date.now()),
            (this.particles = []),
            (this.particlesGenerated = 0),
            (this.removeParticleAt = (i) => {
              this.particles.splice(i, 1);
            }),
            (this.getParticle = () => {
              let i = ze(this.x, this.w + this.x),
                l = ze(this.y, this.h + this.y);
              return new ii(this.context, this.getOptions, i, l);
            }),
            (this.animate = () => {
              let { canvas: i, context: l, particlesGenerated: o, lastNumberOfPieces: s } = this,
                {
                  run: c,
                  recycle: d,
                  numberOfPieces: u,
                  debug: m,
                  tweenFunction: p,
                  tweenDuration: f,
                } = this.getOptions();
              if (!c) return !1;
              let g = this.particles.length,
                v = d ? g : o,
                k = Date.now();
              if (v < u) {
                s !== u && ((this.tweenInitTime = k), (this.lastNumberOfPieces = u));
                let { tweenInitTime: E } = this,
                  h = k - E > f ? f : Math.max(0, k - E),
                  y = p(h, v, u, f),
                  b = Math.round(y - v);
                for (let C = 0; C < b; C++) this.particles.push(this.getParticle());
                this.particlesGenerated += b;
              }
              return (
                m &&
                  ((l.font = "12px sans-serif"),
                  (l.fillStyle = "#333"),
                  (l.textAlign = "right"),
                  l.fillText(`Particles: ${g}`, i.width - 10, i.height - 20)),
                this.particles.forEach((E, h) => {
                  E.update(),
                    (E.y > i.height || E.y < -100 || E.x > i.width + 100 || E.x < -100) &&
                      (d && v <= u
                        ? (this.particles[h] = this.getParticle())
                        : this.removeParticleAt(h));
                }),
                g > 0 || v < u
              );
            }),
            (this.canvas = t);
          let r = this.canvas.getContext("2d");
          if (!r) throw new Error("Could not get canvas context");
          (this.context = r), (this.getOptions = n);
        }
      },
      ci = {
        width: typeof window < "u" ? window.innerWidth : 300,
        height: typeof window < "u" ? window.innerHeight : 200,
        numberOfPieces: 200,
        friction: 0.99,
        wind: 0,
        gravity: 0.1,
        initialVelocityX: 4,
        initialVelocityY: 10,
        colors: [
          "#f44336",
          "#e91e63",
          "#9c27b0",
          "#673ab7",
          "#3f51b5",
          "#2196f3",
          "#03a9f4",
          "#00bcd4",
          "#009688",
          "#4CAF50",
          "#8BC34A",
          "#CDDC39",
          "#FFEB3B",
          "#FFC107",
          "#FF9800",
          "#FF5722",
          "#795548",
        ],
        opacity: 1,
        debug: !1,
        tweenFunction: Eo.easeInOutQuad,
        tweenDuration: 5e3,
        recycle: !0,
        run: !0,
      },
      oi = class {
        constructor(t, n) {
          (this.lastFrameTime = Date.now()),
            (this.setOptionsWithDefaults = (i) => {
              let l = { confettiSource: { x: 0, y: 0, w: this.canvas.width, h: 0 } };
              (this._options = { ...l, ...ci, ...i }), Object.assign(this, i.confettiSource);
            }),
            (this.update = () => {
              let {
                options: { run: i, onConfettiComplete: l, frameRate: o },
                canvas: s,
                context: c,
              } = this;
              if (o) {
                let d = Date.now(),
                  u = d - this.lastFrameTime;
                if (u < 1e3 / o) {
                  this.rafId = requestAnimationFrame(this.update);
                  return;
                }
                this.lastFrameTime = d - (u % o);
              }
              i && ((c.fillStyle = "white"), c.clearRect(0, 0, s.width, s.height)),
                this.generator.animate()
                  ? (this.rafId = requestAnimationFrame(this.update))
                  : (l &&
                      typeof l == "function" &&
                      this.generator.particlesGenerated > 0 &&
                      l.call(this, this),
                    (this._options.run = !1));
            }),
            (this.reset = () => {
              this.generator &&
                this.generator.particlesGenerated > 0 &&
                ((this.generator.particlesGenerated = 0),
                (this.generator.particles = []),
                (this.generator.lastNumberOfPieces = 0));
            }),
            (this.stop = () => {
              (this.options = { run: !1 }),
                this.rafId && (cancelAnimationFrame(this.rafId), (this.rafId = void 0));
            }),
            (this.canvas = t);
          let r = this.canvas.getContext("2d");
          if (!r) throw new Error("Could not get canvas context");
          (this.context = r),
            (this.generator = new li(this.canvas, () => this.options)),
            (this.options = n),
            this.update();
        }
        get options() {
          return this._options;
        }
        set options(t) {
          let n = this._options?.run,
            r = this._options?.recycle;
          this.setOptionsWithDefaults(t),
            this.generator &&
              (Object.assign(this.generator, this.options.confettiSource),
              typeof t.recycle == "boolean" &&
                t.recycle &&
                r === !1 &&
                (this.generator.lastNumberOfPieces = this.generator.particles.length)),
            typeof t.run == "boolean" && t.run && n === !1 && this.update();
        }
      },
      b5 = a.createRef(),
      Bn = class extends a.Component {
        constructor(t) {
          super(t), (this.canvas = a.createRef()), (this.canvas = t.canvasRef || b5);
        }
        componentDidMount() {
          if (this.canvas.current) {
            let t = ri(this.props)[0];
            this.confetti = new oi(this.canvas.current, t);
          }
        }
        componentDidUpdate() {
          let t = ri(this.props)[0];
          this.confetti && (this.confetti.options = t);
        }
        componentWillUnmount() {
          this.confetti && this.confetti.stop(), (this.confetti = void 0);
        }
        render() {
          let [t, n] = ri(this.props),
            r = {
              zIndex: 2,
              position: "absolute",
              pointerEvents: "none",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              ...n.style,
            };
          return (0, si.jsx)("canvas", {
            width: t.width,
            height: t.height,
            ref: this.canvas,
            ...n,
            style: r,
          });
        }
      };
    Bn.defaultProps = { ...ci };
    Bn.displayName = "ReactConfetti";
    function ri(e) {
      let t = {},
        n = {},
        r = {},
        i = [...Object.keys(ci), "confettiSource", "drawShape", "onConfettiComplete", "frameRate"],
        l = ["canvasRef"];
      for (let o in e) {
        let s = e[o];
        i.includes(o) ? (t[o] = s) : l.includes(o) ? (l[o] = s) : (r[o] = s);
      }
      return [t, r, n];
    }
    var bo = a.forwardRef((e, t) => (0, si.jsx)(Bn, { canvasRef: t, ...e }));
    ne();
    ae();
    re();
    ne();
    ae();
    re();
    function di({ onlyFirst: e = !1 } = {}) {
      let n = [
        "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?(?:\\u0007|\\u001B\\u005C|\\u009C))",
        "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))",
      ].join("|");
      return new RegExp(n, e ? void 0 : "g");
    }
    var k5 = di();
    function ui(e) {
      if (typeof e != "string") throw new TypeError(`Expected a \`string\`, got \`${typeof e}\``);
      return e.replace(k5, "");
    }
    var w5 = Object.create,
      ns = Object.defineProperty,
      C5 = Object.getOwnPropertyDescriptor,
      S5 = Object.getOwnPropertyNames,
      x5 = Object.getPrototypeOf,
      N5 = Object.prototype.hasOwnProperty,
      _5 = ((e) =>
        typeof Ht < "u"
          ? Ht
          : typeof Proxy < "u"
            ? new Proxy(e, { get: (t, n) => (typeof Ht < "u" ? Ht : t)[n] })
            : e)(function (e) {
        if (typeof Ht < "u") return Ht.apply(this, arguments);
        throw new Error('Dynamic require of "' + e + '" is not supported');
      }),
      Dt = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
      M5 = (e, t, n, r) => {
        if ((t && typeof t == "object") || typeof t == "function")
          for (let i of S5(t))
            !N5.call(e, i) &&
              i !== n &&
              ns(e, i, { get: () => t[i], enumerable: !(r = C5(t, i)) || r.enumerable });
        return e;
      },
      et = (e, t, n) => (
        (n = e != null ? w5(x5(e)) : {}),
        M5(t || !e || !e.__esModule ? ns(n, "default", { value: e, enumerable: !0 }) : n, e)
      ),
      ya = Dt((e, t) => {
        (function (n, r) {
          typeof _5 == "function" && typeof e == "object" && typeof t == "object"
            ? (t.exports = r())
            : typeof define == "function" && define.amd
              ? define(function () {
                  return r();
                })
              : (n.pluralize = r());
        })(e, function () {
          var n = [],
            r = [],
            i = {},
            l = {},
            o = {};
          function s(v) {
            return typeof v == "string" ? new RegExp("^" + v + "$", "i") : v;
          }
          function c(v, k) {
            return v === k
              ? k
              : v === v.toLowerCase()
                ? k.toLowerCase()
                : v === v.toUpperCase()
                  ? k.toUpperCase()
                  : v[0] === v[0].toUpperCase()
                    ? k.charAt(0).toUpperCase() + k.substr(1).toLowerCase()
                    : k.toLowerCase();
          }
          function d(v, k) {
            return v.replace(/\$(\d{1,2})/g, function (E, h) {
              return k[h] || "";
            });
          }
          function u(v, k) {
            return v.replace(k[0], function (E, h) {
              var y = d(k[1], arguments);
              return c(E === "" ? v[h - 1] : E, y);
            });
          }
          function m(v, k, E) {
            if (!v.length || i.hasOwnProperty(v)) return k;
            for (var h = E.length; h--; ) {
              var y = E[h];
              if (y[0].test(k)) return u(k, y);
            }
            return k;
          }
          function p(v, k, E) {
            return function (h) {
              var y = h.toLowerCase();
              return k.hasOwnProperty(y) ? c(h, y) : v.hasOwnProperty(y) ? c(h, v[y]) : m(y, h, E);
            };
          }
          function f(v, k, E, h) {
            return function (y) {
              var b = y.toLowerCase();
              return k.hasOwnProperty(b) ? !0 : v.hasOwnProperty(b) ? !1 : m(b, b, E) === b;
            };
          }
          function g(v, k, E) {
            var h = k === 1 ? g.singular(v) : g.plural(v);
            return (E ? k + " " : "") + h;
          }
          return (
            (g.plural = p(o, l, n)),
            (g.isPlural = f(o, l, n)),
            (g.singular = p(l, o, r)),
            (g.isSingular = f(l, o, r)),
            (g.addPluralRule = function (v, k) {
              n.push([s(v), k]);
            }),
            (g.addSingularRule = function (v, k) {
              r.push([s(v), k]);
            }),
            (g.addUncountableRule = function (v) {
              if (typeof v == "string") {
                i[v.toLowerCase()] = !0;
                return;
              }
              g.addPluralRule(v, "$0"), g.addSingularRule(v, "$0");
            }),
            (g.addIrregularRule = function (v, k) {
              (k = k.toLowerCase()), (v = v.toLowerCase()), (o[v] = k), (l[k] = v);
            }),
            [
              ["I", "we"],
              ["me", "us"],
              ["he", "they"],
              ["she", "they"],
              ["them", "them"],
              ["myself", "ourselves"],
              ["yourself", "yourselves"],
              ["itself", "themselves"],
              ["herself", "themselves"],
              ["himself", "themselves"],
              ["themself", "themselves"],
              ["is", "are"],
              ["was", "were"],
              ["has", "have"],
              ["this", "these"],
              ["that", "those"],
              ["echo", "echoes"],
              ["dingo", "dingoes"],
              ["volcano", "volcanoes"],
              ["tornado", "tornadoes"],
              ["torpedo", "torpedoes"],
              ["genus", "genera"],
              ["viscus", "viscera"],
              ["stigma", "stigmata"],
              ["stoma", "stomata"],
              ["dogma", "dogmata"],
              ["lemma", "lemmata"],
              ["schema", "schemata"],
              ["anathema", "anathemata"],
              ["ox", "oxen"],
              ["axe", "axes"],
              ["die", "dice"],
              ["yes", "yeses"],
              ["foot", "feet"],
              ["eave", "eaves"],
              ["goose", "geese"],
              ["tooth", "teeth"],
              ["quiz", "quizzes"],
              ["human", "humans"],
              ["proof", "proofs"],
              ["carve", "carves"],
              ["valve", "valves"],
              ["looey", "looies"],
              ["thief", "thieves"],
              ["groove", "grooves"],
              ["pickaxe", "pickaxes"],
              ["passerby", "passersby"],
            ].forEach(function (v) {
              return g.addIrregularRule(v[0], v[1]);
            }),
            [
              [/s?$/i, "s"],
              [/[^\u0000-\u007F]$/i, "$0"],
              [/([^aeiou]ese)$/i, "$1"],
              [/(ax|test)is$/i, "$1es"],
              [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, "$1es"],
              [/(e[mn]u)s?$/i, "$1s"],
              [/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, "$1"],
              [
                /(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,
                "$1i",
              ],
              [/(alumn|alg|vertebr)(?:a|ae)$/i, "$1ae"],
              [/(seraph|cherub)(?:im)?$/i, "$1im"],
              [/(her|at|gr)o$/i, "$1oes"],
              [
                /(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,
                "$1a",
              ],
              [
                /(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,
                "$1a",
              ],
              [/sis$/i, "ses"],
              [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, "$1$2ves"],
              [/([^aeiouy]|qu)y$/i, "$1ies"],
              [/([^ch][ieo][ln])ey$/i, "$1ies"],
              [/(x|ch|ss|sh|zz)$/i, "$1es"],
              [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, "$1ices"],
              [/\b((?:tit)?m|l)(?:ice|ouse)$/i, "$1ice"],
              [/(pe)(?:rson|ople)$/i, "$1ople"],
              [/(child)(?:ren)?$/i, "$1ren"],
              [/eaux$/i, "$0"],
              [/m[ae]n$/i, "men"],
              ["thou", "you"],
            ].forEach(function (v) {
              return g.addPluralRule(v[0], v[1]);
            }),
            [
              [/s$/i, ""],
              [/(ss)$/i, "$1"],
              [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, "$1fe"],
              [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, "$1f"],
              [/ies$/i, "y"],
              [
                /\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,
                "$1ie",
              ],
              [/\b(mon|smil)ies$/i, "$1ey"],
              [/\b((?:tit)?m|l)ice$/i, "$1ouse"],
              [/(seraph|cherub)im$/i, "$1"],
              [
                /(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,
                "$1",
              ],
              [/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i, "$1sis"],
              [/(movie|twelve|abuse|e[mn]u)s$/i, "$1"],
              [/(test)(?:is|es)$/i, "$1is"],
              [
                /(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,
                "$1us",
              ],
              [
                /(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,
                "$1um",
              ],
              [
                /(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,
                "$1on",
              ],
              [/(alumn|alg|vertebr)ae$/i, "$1a"],
              [/(cod|mur|sil|vert|ind)ices$/i, "$1ex"],
              [/(matr|append)ices$/i, "$1ix"],
              [/(pe)(rson|ople)$/i, "$1rson"],
              [/(child)ren$/i, "$1"],
              [/(eau)x?$/i, "$1"],
              [/men$/i, "man"],
            ].forEach(function (v) {
              return g.addSingularRule(v[0], v[1]);
            }),
            [
              "adulthood",
              "advice",
              "agenda",
              "aid",
              "aircraft",
              "alcohol",
              "ammo",
              "analytics",
              "anime",
              "athletics",
              "audio",
              "bison",
              "blood",
              "bream",
              "buffalo",
              "butter",
              "carp",
              "cash",
              "chassis",
              "chess",
              "clothing",
              "cod",
              "commerce",
              "cooperation",
              "corps",
              "debris",
              "diabetes",
              "digestion",
              "elk",
              "energy",
              "equipment",
              "excretion",
              "expertise",
              "firmware",
              "flounder",
              "fun",
              "gallows",
              "garbage",
              "graffiti",
              "hardware",
              "headquarters",
              "health",
              "herpes",
              "highjinks",
              "homework",
              "housework",
              "information",
              "jeans",
              "justice",
              "kudos",
              "labour",
              "literature",
              "machinery",
              "mackerel",
              "mail",
              "media",
              "mews",
              "moose",
              "music",
              "mud",
              "manga",
              "news",
              "only",
              "personnel",
              "pike",
              "plankton",
              "pliers",
              "police",
              "pollution",
              "premises",
              "rain",
              "research",
              "rice",
              "salmon",
              "scissors",
              "series",
              "sewage",
              "shambles",
              "shrimp",
              "software",
              "species",
              "staff",
              "swine",
              "tennis",
              "traffic",
              "transportation",
              "trout",
              "tuna",
              "wealth",
              "welfare",
              "whiting",
              "wildebeest",
              "wildlife",
              "you",
              /pok[eé]mon$/i,
              /[^aeiou]ese$/i,
              /deer$/i,
              /fish$/i,
              /measles$/i,
              /o[iu]s$/i,
              /pox$/i,
              /sheep$/i,
            ].forEach(g.addUncountableRule),
            g
          );
        });
      }),
      T5 = Dt((e, t) => {
        var n = new Error("Element already at target scroll position"),
          r = new Error("Scroll cancelled"),
          i = Math.min,
          l = Date.now;
        t.exports = { left: o("scrollLeft"), top: o("scrollTop") };
        function o(d) {
          return function (u, m, p, f) {
            (p = p || {}),
              typeof p == "function" && ((f = p), (p = {})),
              typeof f != "function" && (f = c);
            var g = l(),
              v = u[d],
              k = p.ease || s,
              E = isNaN(p.duration) ? 350 : +p.duration,
              h = !1;
            return v === m ? f(n, u[d]) : requestAnimationFrame(b), y;
            function y() {
              h = !0;
            }
            function b(C) {
              if (h) return f(r, u[d]);
              var O = l(),
                I = i(1, (O - g) / E),
                U = k(I);
              (u[d] = U * (m - v) + v),
                I < 1
                  ? requestAnimationFrame(b)
                  : requestAnimationFrame(function () {
                      f(null, u[d]);
                    });
            }
          };
        }
        function s(d) {
          return 0.5 * (1 - Math.cos(Math.PI * d));
        }
        function c() {}
      }),
      A5 = Dt((e, t) => {
        (function (n, r) {
          typeof define == "function" && define.amd
            ? define([], r)
            : typeof t == "object" && t.exports
              ? (t.exports = r())
              : (n.Scrollparent = r());
        })(e, function () {
          function n(i) {
            var l = getComputedStyle(i, null).getPropertyValue("overflow");
            return l.indexOf("scroll") > -1 || l.indexOf("auto") > -1;
          }
          function r(i) {
            if (i instanceof HTMLElement || i instanceof SVGElement) {
              for (var l = i.parentNode; l.parentNode; ) {
                if (n(l)) return l;
                l = l.parentNode;
              }
              return document.scrollingElement || document.documentElement;
            }
          }
          return r;
        });
      }),
      ml = Dt((e, t) => {
        var n = function (y) {
          return r(y) && !i(y);
        };
        function r(y) {
          return !!y && typeof y == "object";
        }
        function i(y) {
          var b = Object.prototype.toString.call(y);
          return b === "[object RegExp]" || b === "[object Date]" || s(y);
        }
        var l = typeof Symbol == "function" && Symbol.for,
          o = l ? Symbol.for("react.element") : 60103;
        function s(y) {
          return y.$$typeof === o;
        }
        function c(y) {
          return Array.isArray(y) ? [] : {};
        }
        function d(y, b) {
          return b.clone !== !1 && b.isMergeableObject(y) ? E(c(y), y, b) : y;
        }
        function u(y, b, C) {
          return y.concat(b).map(function (O) {
            return d(O, C);
          });
        }
        function m(y, b) {
          if (!b.customMerge) return E;
          var C = b.customMerge(y);
          return typeof C == "function" ? C : E;
        }
        function p(y) {
          return Object.getOwnPropertySymbols
            ? Object.getOwnPropertySymbols(y).filter(function (b) {
                return Object.propertyIsEnumerable.call(y, b);
              })
            : [];
        }
        function f(y) {
          return Object.keys(y).concat(p(y));
        }
        function g(y, b) {
          try {
            return b in y;
          } catch {
            return !1;
          }
        }
        function v(y, b) {
          return (
            g(y, b) && !(Object.hasOwnProperty.call(y, b) && Object.propertyIsEnumerable.call(y, b))
          );
        }
        function k(y, b, C) {
          var O = {};
          return (
            C.isMergeableObject(y) &&
              f(y).forEach(function (I) {
                O[I] = d(y[I], C);
              }),
            f(b).forEach(function (I) {
              v(y, I) ||
                (g(y, I) && C.isMergeableObject(b[I])
                  ? (O[I] = m(I, C)(y[I], b[I], C))
                  : (O[I] = d(b[I], C)));
            }),
            O
          );
        }
        function E(y, b, C) {
          (C = C || {}),
            (C.arrayMerge = C.arrayMerge || u),
            (C.isMergeableObject = C.isMergeableObject || n),
            (C.cloneUnlessOtherwiseSpecified = d);
          var O = Array.isArray(b),
            I = Array.isArray(y),
            U = O === I;
          return U ? (O ? C.arrayMerge(y, b, C) : k(y, b, C)) : d(b, C);
        }
        E.all = function (y, b) {
          if (!Array.isArray(y)) throw new Error("first argument should be an array");
          return y.reduce(function (C, O) {
            return E(C, O, b);
          }, {});
        };
        var h = E;
        t.exports = h;
      }),
      F5 = Dt((e, t) => {
        var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        t.exports = n;
      }),
      O5 = Dt((e, t) => {
        var n = F5();
        function r() {}
        function i() {}
        (i.resetWarningCache = r),
          (t.exports = function () {
            function l(c, d, u, m, p, f) {
              if (f !== n) {
                var g = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((g.name = "Invariant Violation"), g);
              }
            }
            l.isRequired = l;
            function o() {
              return l;
            }
            var s = {
              array: l,
              bigint: l,
              bool: l,
              func: l,
              number: l,
              object: l,
              string: l,
              symbol: l,
              any: l,
              arrayOf: o,
              element: l,
              elementType: l,
              instanceOf: o,
              node: l,
              objectOf: o,
              oneOf: o,
              oneOfType: o,
              shape: o,
              exact: o,
              checkPropTypes: i,
              resetWarningCache: r,
            };
            return (s.PropTypes = s), s;
          });
      }),
      L5 = Dt((e, t) => {
        t.exports = O5()();
      }),
      R5 = Dt((e, t) => {
        var n = function (l) {
            return Object.prototype.hasOwnProperty.call(l, "props");
          },
          r = function (l, o) {
            return l + i(o);
          },
          i = function (l) {
            return l === null || typeof l == "boolean" || typeof l > "u"
              ? ""
              : typeof l == "number"
                ? l.toString()
                : typeof l == "string"
                  ? l
                  : Array.isArray(l)
                    ? l.reduce(r, "")
                    : n(l) && Object.prototype.hasOwnProperty.call(l.props, "children")
                      ? i(l.props.children)
                      : "";
          };
        (i.default = i), (t.exports = i);
      }),
      {
        CHROMATIC_INDEX_URL: I5,
        CHROMATIC_BASE_URL: Tr = I5 || "https://www.chromatic.com",
        CHROMATIC_API_URL: Z5 = `${Tr}/api`,
      } = xe,
      Z = "chromaui/addon-visual-tests",
      nn = `${Z}/panel`,
      qa = `${Z}/test-provider`,
      B5 = `${Z}/sidebarTop`,
      P5 = `${Z}/sidebarBottom`,
      Li = `${Z}/access-token/${Tr}`,
      Ar = `${Z}/configInfo`,
      ko = `${Z}/configInfoDismissed`,
      V5 = `${Z}/gitInfo`,
      pl = `${Z}/gitInfoError`,
      as = `${Z}/projectInfo`,
      hl = `${Z}/isOffline`,
      Ja = `${Z}/isOutdated`,
      D5 = `${Z}/startBuild`,
      H5 = `${Z}/stopBuild`,
      fl = `${Z}/localBuildProgress`,
      j5 = `${Z}/selectedModeName`,
      z5 = `${Z}/selectedBrowserId`,
      U5 = `${Z}/telemetry`,
      Ri = `${Z}/enableFilter`,
      rs = `${Z}/removeAddon`,
      $5 = "chromatic",
      W5 = `${Z}/ChannelFetch/aborted`,
      G5 = `${Z}ChannelFetch/request`,
      q5 = `${Z}ChannelFetch/response`,
      {
        TESTING_MODULE_CRASH_REPORT: Jv = "testingModuleCrashReport",
        TESTING_MODULE_PROGRESS_REPORT: Y5 = "testingModuleProgressReport",
        TESTING_MODULE_RUN_REQUEST: Xv = "testingModuleRunRequest",
        TESTING_MODULE_RUN_ALL_REQUEST: Q5 = "testingModuleRunAllRequest",
        TESTING_MODULE_CANCEL_TEST_RUN_REQUEST: K5 = "testingModuleCancelTestRunRequest",
        TESTING_MODULE_CANCEL_TEST_RUN_RESPONSE: ey = "testingModuleCancelTestRunResponse",
        TESTING_MODULE_WATCH_MODE_REQUEST: ty = "testingModuleWatchModeRequest",
      } = Kr,
      J5 = {
        autoAcceptChanges: !1,
        exitOnceUploaded: !1,
        exitZeroOnChanges: !0,
        forceRebuild: !0,
        fromCI: !1,
        interactive: !1,
        isLocalBuild: !0,
        skip: !1,
        skipUpdateCheck: !0,
        storybookBuildDir: void 0,
      },
      is = "https://www.chromatic.com/docs/visual-tests-addon",
      X5 = et(ya()),
      eu = (e, t) =>
        (t &&
          { positive: { color: e.color.positiveText }, warning: { color: e.color.warningText } }[
            t
          ]) ||
        {},
      Je = w(no)(
        ({ active: e, variant: t, theme: n }) => ({
          display: "inline-flex",
          alignItems: "center",
          verticalAlign: "top",
          gap: 6,
          margin: 0,
          color: e || t === "outline" ? n.color.secondary : n.color.mediumdark,
          fontWeight: "normal",
          "& > svg": { width: "auto" },
        }),
        ({ active: e, status: t, theme: n }) => !e && eu(n, t),
        ({ active: e, theme: t }) => {
          let n = t.background.content === t.color.lightest,
            r = n ? "rgb(241,248,255)" : "rgb(28,37,45)",
            i = n ? "rgb(229,243,255)" : "rgb(29,44,56)";
          return {
            "--bg-color": e ? r : t.background.content,
            "&:hover": { "--bg-color": i, color: t.color.secondary },
          };
        }
      ),
      tu = w(Jr)(({ theme: e }) => ({ padding: "4px 8px", fontSize: e.typography.size.s1 })),
      nu = w(Je)(
        ({ theme: e }) => ({
          fontSize: e.typography.size.s2,
          "&:hover [data-badge][data-status=warning], [data-badge=true][data-status=warning]": {
            background: "#E3F3FF",
            borderColor: "rgba(2, 113, 182, 0.1)",
            color: "#0271B6",
          },
          "&:hover [data-badge][data-status=critical], [data-badge=true][data-status=critical]": {
            background: e.background.negative,
            boxShadow: "inset 0 0 0 1px rgba(182, 2, 2, 0.1)",
            color: e.color.negativeText,
          },
        }),
        ({ active: e, theme: t }) =>
          !e &&
          ue({ "&:hover": { color: t.base === "light" ? t.color.defaultText : t.color.light } })
      ),
      au = w.span(({ theme: e }) => ({
        color: e.base === "light" ? e.color.defaultText : e.color.light,
      })),
      wo = ({ active: e, count: t, label: n, status: r, ...i }) =>
        a.createElement(
          nu,
          { active: e, ...i },
          a.createElement(tu, { status: r, "data-badge": e, "data-status": r }, t),
          a.createElement(au, null, (0, X5.default)(n, t))
        ),
      ru = () => !0,
      iu = ({ status: e }) => e?.[Z]?.status === "warn",
      lu = ({ status: e }) => e?.[Z]?.status === "error",
      ou = ({ status: e }) => e?.[Z]?.status === "warn" || e?.[Z]?.status === "error",
      su = (e = !1, t = !1) => (e && t ? ou : e ? iu : t ? lu : ru),
      cu = w.div({ display: "flex", gap: 5 }),
      du = ({ api: e, status: t }) => {
        let [n, r] = a.useState(!1),
          [i, l] = a.useState(!1),
          o = Object.values(t).filter((p) => p[Z]?.status === "warn"),
          s = Object.values(t).filter((p) => p[Z]?.status === "error"),
          c = o.length > 0,
          d = s.length > 0,
          u = H(() => r((p) => !p), []),
          m = H(() => l((p) => !p), []);
        return (
          K(() => {
            let p = su(c && n, d && i);
            e.experimental_setFilter(Z, p), e.emit(Ri, p);
          }, [e, c, d, n, i]),
          !c && !d
            ? null
            : a.createElement(
                cu,
                { id: "sidebar-bottom-wrapper" },
                c &&
                  a.createElement(wo, {
                    id: "warnings-found-filter",
                    active: n,
                    count: o.length,
                    label: "Change",
                    status: "warning",
                    onClick: u,
                  }),
                d &&
                  a.createElement(wo, {
                    id: "errors-found-filter",
                    active: i,
                    count: s.length,
                    label: "Error",
                    status: "critical",
                    onClick: m,
                  })
              )
        );
      },
      uu = (e) => {
        let { status: t } = jt();
        return a.createElement(du, { ...e, status: t });
      },
      mu = $(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M6.25 4.254a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm-.5 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z",
            fill: e,
          }),
          S("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M13 1.504v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h11a.5.5 0 01.5.5zM2 9.297V2.004h10v5.293L9.854 5.15a.5.5 0 00-.708 0L6.5 7.797 5.354 6.65a.5.5 0 00-.708 0L2 9.297zM9.5 6.21l2.5 2.5v3.293H2V10.71l3-3 3.146 3.146a.5.5 0 00.708-.707L7.207 8.504 9.5 6.21z",
            fill: e,
          })
        )
      ),
      ls = $(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3 3.004H.5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-2.5h2.5a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5h-10a.5.5 0 00-.5.5v2.5zm1 1v2.293l2.293-2.293H4zm-1 0v6.5a.499.499 0 00.497.5H10v2H1v-9h2zm1-1h6.5a.499.499 0 01.5.5v6.5h2v-9H4v2zm6 7V7.71l-2.293 2.293H10zm0-3.707V4.71l-5.293 5.293h1.586L10 6.297zm-.707-2.293H7.707L4 7.71v1.586l5.293-5.293z",
            fill: e,
          })
        )
      ),
      pu = $(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M4.5 4a.5.5 0 00-.5.5v5a.5.5 0 00.5.5h5a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5h-5z",
            fill: e,
          }),
          S("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
            fill: e,
          })
        )
      ),
      Bt = $(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M12.813 7.425l-9.05 5.603A.5.5 0 013 12.603V1.398a.5.5 0 01.763-.425l9.05 5.602a.5.5 0 010 .85z",
            fill: e,
          })
        )
      ),
      hu = $(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M1 1.504a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11z",
            fill: e,
          })
        )
      ),
      os = $(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M4 5.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zM4.5 7.5a.5.5 0 000 1h5a.5.5 0 000-1h-5zM4 10.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z",
            fill: e,
          }),
          S("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M1.5 0a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h11a.5.5 0 00.5-.5V3.207a.5.5 0 00-.146-.353L10.146.146A.5.5 0 009.793 0H1.5zM2 1h7.5v2a.5.5 0 00.5.5h2V13H2V1z",
            fill: e,
          })
        )
      ),
      fu = $(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M6 7a3 3 0 110-6h5.5a.5.5 0 010 1H10v10.5a.5.5 0 01-1 0V2H7v10.5a.5.5 0 01-1 0V7z",
            fill: e,
          })
        )
      ),
      gu = $(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M5.586 5.586A2 2 0 018.862 7.73a.5.5 0 10.931.365 3 3 0 10-1.697 1.697.5.5 0 10-.365-.93 2 2 0 01-2.145-3.277z",
            fill: e,
          }),
          S("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M.939 6.527c.127.128.19.297.185.464a.635.635 0 01-.185.465L0 8.395a7.099 7.099 0 001.067 2.572h1.32c.182 0 .345.076.46.197a.635.635 0 01.198.46v1.317A7.097 7.097 0 005.602 14l.94-.94a.634.634 0 01.45-.186H7.021c.163 0 .326.061.45.186l.939.938a7.098 7.098 0 002.547-1.057V11.61c0-.181.075-.344.197-.46a.634.634 0 01.46-.197h1.33c.507-.76.871-1.622 1.056-2.55l-.946-.946a.635.635 0 01-.186-.465.635.635 0 01.186-.464l.943-.944a7.099 7.099 0 00-1.044-2.522h-1.34a.635.635 0 01-.46-.197.635.635 0 01-.196-.46V1.057A7.096 7.096 0 008.413.002l-.942.942a.634.634 0 01-.45.186H6.992a.634.634 0 01-.45-.186L5.598 0a7.097 7.097 0 00-2.553 1.058v1.33c0 .182-.076.345-.197.46a.635.635 0 01-.46.198h-1.33A7.098 7.098 0 00.003 5.591l.936.936zm.707 1.636c.324-.324.482-.752.479-1.172a1.634 1.634 0 00-.48-1.171l-.538-.539c.126-.433.299-.847.513-1.235h.768c.459 0 .873-.19 1.167-.49.3-.295.49-.708.49-1.167v-.77c.39-.215.807-.388 1.243-.515l.547.547c.32.32.742.48 1.157.48l.015-.001h.014c.415 0 .836-.158 1.157-.479l.545-.544c.433.126.846.299 1.234.512v.784c0 .46.19.874.49 1.168.294.3.708.49 1.167.49h.776c.209.382.378.788.502 1.213l-.545.546a1.635 1.635 0 00-.48 1.17c-.003.421.155.849.48 1.173l.549.55c-.126.434-.3.85-.513 1.239h-.77c-.458 0-.872.19-1.166.49-.3.294-.49.708-.49 1.167v.77a6.09 6.09 0 01-1.238.514l-.54-.54a1.636 1.636 0 00-1.158-.48H6.992c-.415 0-.837.159-1.157.48l-.543.543a6.091 6.091 0 01-1.247-.516v-.756c0-.459-.19-.873-.49-1.167-.294-.3-.708-.49-1.167-.49h-.761a6.094 6.094 0 01-.523-1.262l.542-.542z",
            fill: e,
          })
        )
      ),
      vu = $(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M4 7a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM13 7a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM7 8.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",
            fill: e,
          })
        )
      ),
      yu = $(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M5.903.112a.107.107 0 01.194 0l.233.505.552.066c.091.01.128.123.06.185l-.408.377.109.546a.107.107 0 01-.158.114L6 1.634l-.485.271a.107.107 0 01-.158-.114l.108-.546-.408-.377a.107.107 0 01.06-.185L5.67.617l.233-.505zM2.194.224a.214.214 0 00-.389 0l-.466 1.01-1.104.131a.214.214 0 00-.12.37l.816.755-.217 1.091a.214.214 0 00.315.23L2 3.266l.971.543c.16.09.35-.05.315-.229l-.216-1.09.816-.756a.214.214 0 00-.12-.37L2.66 1.234 2.194.224zM12.194 8.224a.214.214 0 00-.389 0l-.466 1.01-1.104.13a.214.214 0 00-.12.371l.816.755-.217 1.091a.214.214 0 00.315.23l.97-.544.971.543c.16.09.35-.05.315-.229l-.216-1.09.816-.756a.214.214 0 00-.12-.37l-1.105-.131-.466-1.01z",
            fill: e,
          }),
          S("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2.5 12.797l-1.293-1.293 6.758-6.758L9.258 6.04 2.5 12.797zm7.465-7.465l2.828-2.828L11.5 1.211 8.672 4.04l1.293 1.293zM.147 11.857a.5.5 0 010-.707l11-11a.5.5 0 01.706 0l2 2a.5.5 0 010 .708l-11 11a.5.5 0 01-.706 0l-2-2z",
            fill: e,
          })
        )
      ),
      gl = $(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M13.854 3.354a.5.5 0 00-.708-.708L5 10.793.854 6.646a.5.5 0 10-.708.708l4.5 4.5a.5.5 0 00.708 0l8.5-8.5z",
            fill: e,
          })
        )
      ),
      Co = $(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M11.5 2a.5.5 0 000 1h2a.5.5 0 000-1h-2zM9.3 2.6a.5.5 0 01.1.7l-5.995 7.993a.505.505 0 01-.37.206.5.5 0 01-.395-.152L.146 8.854a.5.5 0 11.708-.708l2.092 2.093L8.6 2.7a.5.5 0 01.7-.1zM11 7a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2A.5.5 0 0111 7zM11.5 11a.5.5 0 000 1h2a.5.5 0 000-1h-2z",
            fill: e,
          })
        )
      ),
      Eu = $(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M7 3a.5.5 0 01.5.5v3h3a.5.5 0 010 1h-3v3a.5.5 0 01-1 0v-3h-3a.5.5 0 010-1h3v-3A.5.5 0 017 3z",
            fill: e,
          }),
          S("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z",
            fill: e,
          })
        )
      ),
      vl = $(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M9.854 4.146a.5.5 0 010 .708L7.707 7l2.147 2.146a.5.5 0 01-.708.708L7 7.707 4.854 9.854a.5.5 0 01-.708-.708L6.293 7 4.146 4.854a.5.5 0 11.708-.708L7 6.293l2.146-2.147a.5.5 0 01.708 0z",
            fill: e,
          }),
          S("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z",
            fill: e,
          })
        )
      ),
      Ii = $(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7 14A7 7 0 107 0a7 7 0 000 14zm3.854-9.354a.5.5 0 010 .708l-4.5 4.5a.5.5 0 01-.708 0l-2.5-2.5a.5.5 0 11.708-.708L6 8.793l4.146-4.147a.5.5 0 01.708 0z",
            fill: e,
          })
        )
      ),
      bu = $(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7 14A7 7 0 107 0a7 7 0 000 14zM3.5 6.5a.5.5 0 000 1h7a.5.5 0 000-1h-7z",
            fill: e,
          })
        )
      ),
      St = $(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7 14A7 7 0 107 0a7 7 0 000 14zm2.854-9.854a.5.5 0 010 .708L7.707 7l2.147 2.146a.5.5 0 01-.708.708L7 7.707 4.854 9.854a.5.5 0 01-.708-.708L6.293 7 4.146 4.854a.5.5 0 11.708-.708L7 6.293l2.146-2.147a.5.5 0 01.708 0z",
            fill: e,
          })
        )
      ),
      ss = $(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M8 8.004a1 1 0 01-.5.866v1.634a.5.5 0 01-1 0V8.87A1 1 0 118 8.004z",
            fill: e,
          }),
          S("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3 4.004a4 4 0 118 0v1h1.5a.5.5 0 01.5.5v8a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-8a.5.5 0 01.5-.5H3v-1zm7 1v-1a3 3 0 10-6 0v1h6zm2 1H2v7h10v-7z",
            fill: e,
          })
        )
      ),
      ku = $(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M7 5.5a.5.5 0 01.5.5v4a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zM7 4.5A.75.75 0 107 3a.75.75 0 000 1.5z",
            fill: e,
          }),
          S("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z",
            fill: e,
          })
        )
      ),
      cs = $(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M5.25 5.25A1.75 1.75 0 117 7a.5.5 0 00-.5.5V9a.5.5 0 001 0V7.955A2.75 2.75 0 104.25 5.25a.5.5 0 001 0zM7 11.5A.75.75 0 107 10a.75.75 0 000 1.5z",
            fill: e,
          }),
          S("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
            fill: e,
          })
        )
      ),
      wu = $(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-3.524 4.89A5.972 5.972 0 017 13a5.972 5.972 0 01-3.477-1.11l1.445-1.444C5.564 10.798 6.258 11 7 11s1.436-.202 2.032-.554l1.444 1.445zm-.03-2.858l1.445 1.444A5.972 5.972 0 0013 7c0-1.296-.41-2.496-1.11-3.477l-1.444 1.445C10.798 5.564 11 6.258 11 7s-.202 1.436-.554 2.032zM9.032 3.554l1.444-1.445A5.972 5.972 0 007 1c-1.296 0-2.496.41-3.477 1.11l1.445 1.444A3.981 3.981 0 017 3c.742 0 1.436.202 2.032.554zM3.554 4.968L2.109 3.523A5.973 5.973 0 001 7c0 1.296.41 2.496 1.11 3.476l1.444-1.444A3.981 3.981 0 013 7c0-.742.202-1.436.554-2.032zM10 7a3 3 0 11-6 0 3 3 0 016 0z",
            fill: e,
          })
        )
      ),
      Cu = $(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M7 4.5a.5.5 0 01.5.5v3.5a.5.5 0 11-1 0V5a.5.5 0 01.5-.5zM7.75 10.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0z",
            fill: e,
          }),
          S("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7.206 1.045a.498.498 0 01.23.209l6.494 10.992a.5.5 0 01-.438.754H.508a.497.497 0 01-.506-.452.498.498 0 01.072-.31l6.49-10.984a.497.497 0 01.642-.21zM7 2.483L1.376 12h11.248L7 2.483z",
            fill: e,
          })
        )
      ),
      ds = $(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M2 1.004a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1v-4.5a.5.5 0 00-1 0v4.5H2v-10h4.5a.5.5 0 000-1H2z",
            fill: e,
          }),
          S("path", {
            d: "M7.354 7.357L12 2.711v1.793a.5.5 0 001 0v-3a.5.5 0 00-.5-.5h-3a.5.5 0 100 1h1.793L6.646 6.65a.5.5 0 10.708.707z",
            fill: e,
          })
        )
      ),
      Su = $(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S(
            "g",
            { clipPath: "url(#prefix__clip0_1449_588)" },
            S("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M8.414 1.586a2 2 0 00-2.828 0l-4 4a2 2 0 000 2.828l4 4a2 2 0 002.828 0l4-4a2 2 0 000-2.828l-4-4zm.707-.707a3 3 0 00-4.242 0l-4 4a3 3 0 000 4.242l4 4a3 3 0 004.242 0l4-4a3 3 0 000-4.242l-4-4z",
              fill: e,
            })
          ),
          S(
            "defs",
            null,
            S(
              "clipPath",
              { id: "prefix__clip0_1449_588" },
              S("path", { fill: "#fff", d: "M0 0h14v14H0z" })
            )
          )
        )
      ),
      us = $(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M1.146 4.604l5.5 5.5a.5.5 0 00.708 0l5.5-5.5a.5.5 0 00-.708-.708L7 9.043 1.854 3.896a.5.5 0 10-.708.708z",
            fill: e,
          })
        )
      ),
      xu = $(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M2.76 7.096a.498.498 0 00.136.258l5.5 5.5a.5.5 0 00.707-.708L3.958 7l5.147-5.146a.5.5 0 10-.708-.708l-5.5 5.5a.5.5 0 00-.137.45z",
            fill: e,
          })
        )
      ),
      Nu = $(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M11.104 7.354l-5.5 5.5a.5.5 0 01-.708-.708L10.043 7 4.896 1.854a.5.5 0 11.708-.708l5.5 5.5a.5.5 0 010 .708z",
            fill: e,
          })
        )
      ),
      _u = $(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M7.354.146l4 4a.5.5 0 01-.708.708L7 1.207 3.354 4.854a.5.5 0 11-.708-.708l4-4a.5.5 0 01.708 0zM11.354 9.146a.5.5 0 010 .708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 11.708-.708L7 12.793l3.646-3.647a.5.5 0 01.708 0z",
            fill: e,
          })
        )
      ),
      Mu = $(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M3.354.146a.5.5 0 10-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 00-.708-.708L7 3.793 3.354.146zM6.646 9.146a.5.5 0 01.708 0l4 4a.5.5 0 01-.708.708L7 10.207l-3.646 3.647a.5.5 0 01-.708-.708l4-4z",
            fill: e,
          })
        )
      ),
      Tu = $(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M10.646 2.646a.5.5 0 01.708 0l1.5 1.5a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708-.708L11.293 5H1.5a.5.5 0 010-1h9.793l-.647-.646a.5.5 0 010-.708zM3.354 8.354L2.707 9H12.5a.5.5 0 010 1H2.707l.647.646a.5.5 0 01-.708.708l-1.5-1.5a.5.5 0 010-.708l1.5-1.5a.5.5 0 11.708.708z",
            fill: e,
          })
        )
      ),
      Au = $(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M1.146 3.854a.5.5 0 010-.708l2-2a.5.5 0 11.708.708L2.707 3h6.295A4 4 0 019 11H3a.5.5 0 010-1h6a3 3 0 100-6H2.707l1.147 1.146a.5.5 0 11-.708.708l-2-2z",
            fill: e,
          })
        )
      ),
      ms = $(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            d: "M5.5 1A.5.5 0 005 .5H2a.5.5 0 000 1h1.535a6.502 6.502 0 002.383 11.91.5.5 0 10.165-.986A5.502 5.502 0 014.5 2.1V4a.5.5 0 001 0V1.353a.5.5 0 000-.023V1zM7.507 1a.5.5 0 01.576-.41 6.502 6.502 0 012.383 11.91H12a.5.5 0 010 1H9a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v1.9A5.5 5.5 0 007.917 1.576.5.5 0 017.507 1z",
            fill: e,
          })
        )
      ),
      Fu = $(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M0 7a7 7 0 1114 0A7 7 0 010 7zm6.5 3.5v2.48A6.001 6.001 0 011.02 7.5H3.5a.5.5 0 000-1H1.02A6.001 6.001 0 016.5 1.02V3.5a.5.5 0 001 0V1.02a6.001 6.001 0 015.48 5.48H10.5a.5.5 0 000 1h2.48a6.002 6.002 0 01-5.48 5.48V10.5a.5.5 0 00-1 0z",
            fill: e,
          })
        )
      ),
      Ou = $(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", { d: "M7.5 4.5a.5.5 0 00-1 0v2.634a1 1 0 101 0V4.5z", fill: e }),
          S("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M5.5.5A.5.5 0 016 0h2a.5.5 0 010 1h-.5v1.02a5.973 5.973 0 013.374 1.398l.772-.772a.5.5 0 01.708.708l-.772.772A6 6 0 116.5 2.02V1H6a.5.5 0 01-.5-.5zM7 3a5 5 0 100 10A5 5 0 007 3z",
            fill: e,
          })
        )
      ),
      Lu = $(({ color: e = "currentColor", size: t = 14, ...n }, r) =>
        S(
          "svg",
          {
            width: t,
            height: t,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ref: r,
            ...n,
          },
          S("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M14 7A7 7 0 110 7a7 7 0 0114 0zM2.671 11.155c.696-1.006 2.602-1.816 3.194-1.91.226-.036.232-.658.232-.658s-.665-.658-.81-1.544c-.39 0-.63-.94-.241-1.272a2.578 2.578 0 00-.012-.13c-.066-.607-.28-2.606 1.965-2.606 2.246 0 2.031 2 1.966 2.606l-.012.13c.39.331.149 1.272-.24 1.272-.146.886-.81 1.544-.81 1.544s.004.622.23.658c.593.094 2.5.904 3.195 1.91a6 6 0 10-8.657 0z",
            fill: e,
          })
        )
      ),
      mi = et(ya()),
      yl = () => {},
      $e = yl;
    function it(e) {
      return { tag: 0, 0: e };
    }
    function Ea(e) {
      return { tag: 1, 0: e };
    }
    var So = () => (typeof Symbol == "function" && Symbol.asyncIterator) || "@@asyncIterator",
      Ru = (e) => e;
    function De(e) {
      return (t) => (n) => {
        var r = $e;
        t((i) => {
          i === 0 ? n(0) : i.tag === 0 ? ((r = i[0]), n(i)) : e(i[0]) ? n(i) : r(0);
        });
      };
    }
    function Zi(e) {
      return (t) => (n) =>
        t((r) => {
          r === 0 || r.tag === 0 ? n(r) : n(Ea(e(r[0])));
        });
    }
    function Xa(e) {
      return (t) => (n) => {
        var r = [],
          i = $e,
          l = !1,
          o = !1;
        t((s) => {
          o ||
            (s === 0
              ? ((o = !0), r.length || n(0))
              : s.tag === 0
                ? (i = s[0])
                : ((l = !1),
                  (function (c) {
                    var d = $e;
                    c((u) => {
                      if (u === 0) {
                        if (r.length) {
                          var m = r.indexOf(d);
                          m > -1 && (r = r.slice()).splice(m, 1),
                            r.length || (o ? n(0) : l || ((l = !0), i(0)));
                        }
                      } else u.tag === 0 ? (r.push((d = u[0])), d(0)) : r.length && (n(u), d(0));
                    });
                  })(e(s[0])),
                  l || ((l = !0), i(0))));
        }),
          n(
            it((s) => {
              if (s === 1) {
                o || ((o = !0), i(1));
                for (var c = 0, d = r, u = r.length; c < u; c++) d[c](1);
                r.length = 0;
              } else {
                !o && !l ? ((l = !0), i(0)) : (l = !1);
                for (var m = 0, p = r, f = r.length; m < f; m++) p[m](0);
              }
            })
          );
      };
    }
    function Iu(e) {
      return Xa(Ru)(e);
    }
    function ta(e) {
      return Iu(Pu(e));
    }
    function El(e) {
      return (t) => (n) => {
        var r = !1;
        t((i) => {
          if (!r)
            if (i === 0) (r = !0), n(0), e();
            else if (i.tag === 0) {
              var l = i[0];
              n(
                it((o) => {
                  o === 1 ? ((r = !0), l(1), e()) : l(o);
                })
              );
            } else n(i);
        });
      };
    }
    function er(e) {
      return (t) => (n) => {
        var r = !1;
        t((i) => {
          if (!r)
            if (i === 0) (r = !0), n(0);
            else if (i.tag === 0) {
              var l = i[0];
              n(
                it((o) => {
                  o === 1 && (r = !0), l(o);
                })
              );
            } else e(i[0]), n(i);
        });
      };
    }
    function Bi(e) {
      return (t) => (n) =>
        t((r) => {
          r === 0 ? n(0) : r.tag === 0 ? (n(r), e()) : n(r);
        });
    }
    function na(e) {
      var t = [],
        n = $e,
        r = !1;
      return (i) => {
        t.push(i),
          t.length === 1 &&
            e((l) => {
              if (l === 0) {
                for (var o = 0, s = t, c = t.length; o < c; o++) s[o](0);
                t.length = 0;
              } else if (l.tag === 0) n = l[0];
              else {
                r = !1;
                for (var d = 0, u = t, m = t.length; d < m; d++) u[d](l);
              }
            }),
          i(
            it((l) => {
              if (l === 1) {
                var o = t.indexOf(i);
                o > -1 && (t = t.slice()).splice(o, 1), t.length || n(1);
              } else r || ((r = !0), n(0));
            })
          );
      };
    }
    function xo(e) {
      return (t) => (n) => {
        var r = $e,
          i = $e,
          l = !1,
          o = !1,
          s = !1,
          c = !1;
        t((d) => {
          c ||
            (d === 0
              ? ((c = !0), s || n(0))
              : d.tag === 0
                ? (r = d[0])
                : (s && (i(1), (i = $e)),
                  l ? (l = !1) : ((l = !0), r(0)),
                  (function (u) {
                    (s = !0),
                      u((m) => {
                        s &&
                          (m === 0
                            ? ((s = !1), c ? n(0) : l || ((l = !0), r(0)))
                            : m.tag === 0
                              ? ((o = !1), (i = m[0])(0))
                              : (n(m), o ? (o = !1) : i(0)));
                      });
                  })(e(d[0]))));
        }),
          n(
            it((d) => {
              d === 1
                ? (c || ((c = !0), r(1)), s && ((s = !1), i(1)))
                : (!c && !l && ((l = !0), r(0)), s && !o && ((o = !0), i(0)));
            })
          );
      };
    }
    function Fr(e) {
      return (t) => (n) => {
        var r = $e,
          i = !1,
          l = 0;
        t((o) => {
          i ||
            (o === 0
              ? ((i = !0), n(0))
              : o.tag === 0
                ? e <= 0
                  ? ((i = !0), n(0), o[0](1))
                  : (r = o[0])
                : l++ < e
                  ? (n(o), !i && l >= e && ((i = !0), n(0), r(1)))
                  : n(o));
        }),
          n(
            it((o) => {
              o === 1 && !i ? ((i = !0), r(1)) : o === 0 && !i && l < e && r(0);
            })
          );
      };
    }
    function ps(e) {
      return (t) => (n) => {
        var r = $e,
          i = $e,
          l = !1;
        t((o) => {
          l ||
            (o === 0
              ? ((l = !0), i(1), n(0))
              : o.tag === 0
                ? ((r = o[0]),
                  e((s) => {
                    s === 0 || (s.tag === 0 ? (i = s[0])(0) : ((l = !0), i(1), r(1), n(0)));
                  }))
                : n(o));
        }),
          n(
            it((o) => {
              o === 1 && !l ? ((l = !0), r(1), i(1)) : l || r(0);
            })
          );
      };
    }
    function hs(e, t) {
      return (n) => (r) => {
        var i = $e,
          l = !1;
        n((o) => {
          l ||
            (o === 0
              ? ((l = !0), r(0))
              : o.tag === 0
                ? ((i = o[0]), r(o))
                : e(o[0])
                  ? r(o)
                  : ((l = !0), t && r(o), r(0), i(1)));
        });
      };
    }
    function Zu(e) {
      return (t) => e()(t);
    }
    function fs(e) {
      return (t) => {
        var n = (e[So()] && e[So()]()) || e,
          r = !1,
          i = !1,
          l = !1,
          o;
        t(
          it(async (s) => {
            if (s === 1) (r = !0), n.return && n.return();
            else if (i) l = !0;
            else {
              for (l = i = !0; l && !r; )
                if ((o = await n.next()).done) (r = !0), n.return && (await n.return()), t(0);
                else
                  try {
                    (l = !1), t(Ea(o.value));
                  } catch (c) {
                    if (n.throw) (r = !!(await n.throw(c)).done) && t(0);
                    else throw c;
                  }
              i = !1;
            }
          })
        );
      };
    }
    function Bu(e) {
      return e[Symbol.asyncIterator]
        ? fs(e)
        : (t) => {
            var n = e[Symbol.iterator](),
              r = !1,
              i = !1,
              l = !1,
              o;
            t(
              it((s) => {
                if (s === 1) (r = !0), n.return && n.return();
                else if (i) l = !0;
                else {
                  for (l = i = !0; l && !r; )
                    if ((o = n.next()).done) (r = !0), n.return && n.return(), t(0);
                    else
                      try {
                        (l = !1), t(Ea(o.value));
                      } catch (c) {
                        if (n.throw) (r = !!n.throw(c).done) && t(0);
                        else throw c;
                      }
                  i = !1;
                }
              })
            );
          };
    }
    var Pu = Bu;
    function Kn(e) {
      return (t) => {
        var n = !1;
        t(
          it((r) => {
            r === 1 ? (n = !0) : n || ((n = !0), t(Ea(e)), t(0));
          })
        );
      };
    }
    function gs(e) {
      return (t) => {
        var n = !1,
          r = e({
            next(i) {
              n || t(Ea(i));
            },
            complete() {
              n || ((n = !0), t(0));
            },
          });
        t(
          it((i) => {
            i === 1 && !n && ((n = !0), r());
          })
        );
      };
    }
    function Pi() {
      var e, t;
      return {
        source: na(gs((n) => ((e = n.next), (t = n.complete), yl))),
        next(n) {
          e && e(n);
        },
        complete() {
          t && t();
        },
      };
    }
    function No(e) {
      return gs(
        (t) => (
          e.then((n) => {
            Promise.resolve(n).then(() => {
              t.next(n), t.complete();
            });
          }),
          yl
        )
      );
    }
    function yn(e) {
      return (t) => {
        var n = $e,
          r = !1;
        return (
          t((i) => {
            i === 0 ? (r = !0) : i.tag === 0 ? (n = i[0])(0) : r || (e(i[0]), n(0));
          }),
          {
            unsubscribe() {
              r || ((r = !0), n(1));
            },
          }
        );
      };
    }
    function Vu(e) {
      yn((t) => {})(e);
    }
    function bl(e) {
      return new Promise((t) => {
        var n = $e,
          r;
        e((i) => {
          i === 0 ? Promise.resolve(r).then(t) : i.tag === 0 ? (n = i[0])(0) : ((r = i[0]), n(0));
        });
      });
    }
    var Du = {
        NAME: "Name",
        DOCUMENT: "Document",
        OPERATION_DEFINITION: "OperationDefinition",
        VARIABLE_DEFINITION: "VariableDefinition",
        SELECTION_SET: "SelectionSet",
        FIELD: "Field",
        ARGUMENT: "Argument",
        FRAGMENT_SPREAD: "FragmentSpread",
        INLINE_FRAGMENT: "InlineFragment",
        FRAGMENT_DEFINITION: "FragmentDefinition",
        VARIABLE: "Variable",
        INT: "IntValue",
        FLOAT: "FloatValue",
        STRING: "StringValue",
        BOOLEAN: "BooleanValue",
        NULL: "NullValue",
        ENUM: "EnumValue",
        LIST: "ListValue",
        OBJECT: "ObjectValue",
        OBJECT_FIELD: "ObjectField",
        DIRECTIVE: "Directive",
        NAMED_TYPE: "NamedType",
        LIST_TYPE: "ListType",
        NON_NULL_TYPE: "NonNullType",
      },
      Vi = class extends Error {
        constructor(e, t, n, r, i, l, o) {
          super(e),
            (this.name = "GraphQLError"),
            (this.message = e),
            i && (this.path = i),
            t && (this.nodes = Array.isArray(t) ? t : [t]),
            n && (this.source = n),
            r && (this.positions = r),
            l && (this.originalError = l);
          var s = o;
          if (!s && l) {
            var c = l.extensions;
            c && typeof c == "object" && (s = c);
          }
          this.extensions = s || {};
        }
        toJSON() {
          return { ...this, message: this.message };
        }
        toString() {
          return this.message;
        }
        get [Symbol.toStringTag]() {
          return "GraphQLError";
        }
      },
      fe,
      Y;
    function Ce(e) {
      return new Vi(`Syntax Error: Unexpected token at ${Y} in ${e}`);
    }
    function Ue(e) {
      if (((e.lastIndex = Y), e.test(fe))) return fe.slice(Y, (Y = e.lastIndex));
    }
    var Ia = / +(?=[^\s])/y;
    function Hu(e) {
      for (
        var t = e.split(`
`),
          n = "",
          r = 0,
          i = 0,
          l = t.length - 1,
          o = 0;
        o < t.length;
        o++
      )
        (Ia.lastIndex = 0),
          Ia.test(t[o]) &&
            (o && (!r || Ia.lastIndex < r) && (r = Ia.lastIndex), (i = i || o), (l = o));
      for (var s = i; s <= l; s++)
        s !== i &&
          (n += `
`),
          (n += t[s].slice(r).replace(/\\"""/g, '"""'));
      return n;
    }
    function X() {
      for (
        var e = 0 | fe.charCodeAt(Y++);
        e === 9 || e === 10 || e === 13 || e === 32 || e === 35 || e === 44 || e === 65279;
        e = 0 | fe.charCodeAt(Y++)
      )
        if (e === 35) for (; (e = fe.charCodeAt(Y++)) !== 10 && e !== 13; );
      Y--;
    }
    var vs = /[_A-Za-z]\w*/y;
    function yt() {
      var e;
      if ((e = Ue(vs))) return { kind: "Name", value: e };
    }
    var ju = /(?:null|true|false)/y,
      ys = /\$[_A-Za-z]\w*/y,
      zu = /-?\d+/y,
      Uu = /(?:\.\d+)?[eE][+-]?\d+|\.\d+/y,
      $u = /\\/g,
      Wu = /"""(?:"""|(?:[\s\S]*?[^\\])""")/y,
      Gu = /"(?:"|[^\r\n]*?[^\\]")/y;
    function tr(e) {
      var t, n;
      if ((n = Ue(ju)))
        t = n === "null" ? { kind: "NullValue" } : { kind: "BooleanValue", value: n === "true" };
      else if (!e && (n = Ue(ys)))
        t = { kind: "Variable", name: { kind: "Name", value: n.slice(1) } };
      else if ((n = Ue(zu))) {
        var r = n;
        (n = Ue(Uu))
          ? (t = { kind: "FloatValue", value: r + n })
          : (t = { kind: "IntValue", value: r });
      } else if ((n = Ue(vs))) t = { kind: "EnumValue", value: n };
      else if ((n = Ue(Wu))) t = { kind: "StringValue", value: Hu(n.slice(3, -3)), block: !0 };
      else if ((n = Ue(Gu)))
        t = { kind: "StringValue", value: $u.test(n) ? JSON.parse(n) : n.slice(1, -1), block: !1 };
      else if (
        (t =
          (function (i) {
            var l;
            if (fe.charCodeAt(Y) === 91) {
              Y++, X();
              for (var o = []; (l = tr(i)); ) o.push(l);
              if (fe.charCodeAt(Y++) !== 93) throw Ce("ListValue");
              return X(), { kind: "ListValue", values: o };
            }
          })(e) ||
          (function (i) {
            if (fe.charCodeAt(Y) === 123) {
              Y++, X();
              for (var l = [], o; (o = yt()); ) {
                if ((X(), fe.charCodeAt(Y++) !== 58)) throw Ce("ObjectField");
                X();
                var s = tr(i);
                if (!s) throw Ce("ObjectField");
                l.push({ kind: "ObjectField", name: o, value: s });
              }
              if (fe.charCodeAt(Y++) !== 125) throw Ce("ObjectValue");
              return X(), { kind: "ObjectValue", fields: l };
            }
          })(e))
      )
        return t;
      return X(), t;
    }
    function Es(e) {
      var t = [];
      if ((X(), fe.charCodeAt(Y) === 40)) {
        Y++, X();
        for (var n; (n = yt()); ) {
          if ((X(), fe.charCodeAt(Y++) !== 58)) throw Ce("Argument");
          X();
          var r = tr(e);
          if (!r) throw Ce("Argument");
          t.push({ kind: "Argument", name: n, value: r });
        }
        if (!t.length || fe.charCodeAt(Y++) !== 41) throw Ce("Argument");
        X();
      }
      return t;
    }
    function En(e) {
      var t = [];
      for (X(); fe.charCodeAt(Y) === 64; ) {
        Y++;
        var n = yt();
        if (!n) throw Ce("Directive");
        X(), t.push({ kind: "Directive", name: n, arguments: Es(e) });
      }
      return t;
    }
    function qu() {
      var e = yt();
      if (e) {
        X();
        var t;
        if (fe.charCodeAt(Y) === 58) {
          if ((Y++, X(), (t = e), !(e = yt()))) throw Ce("Field");
          X();
        }
        return {
          kind: "Field",
          alias: t,
          name: e,
          arguments: Es(!1),
          directives: En(!1),
          selectionSet: Or(),
        };
      }
    }
    function bs() {
      var e;
      if ((X(), fe.charCodeAt(Y) === 91)) {
        Y++, X();
        var t = bs();
        if (!t || fe.charCodeAt(Y++) !== 93) throw Ce("ListType");
        e = { kind: "ListType", type: t };
      } else if ((e = yt())) e = { kind: "NamedType", name: e };
      else throw Ce("NamedType");
      return X(), fe.charCodeAt(Y) === 33 ? (Y++, X(), { kind: "NonNullType", type: e }) : e;
    }
    var Yu = /on/y;
    function ks() {
      if (Ue(Yu)) {
        X();
        var e = yt();
        if (!e) throw Ce("NamedType");
        return X(), { kind: "NamedType", name: e };
      }
    }
    var Qu = /\.\.\./y;
    function Ku() {
      if (Ue(Qu)) {
        X();
        var e = Y,
          t;
        if ((t = yt()) && t.value !== "on")
          return { kind: "FragmentSpread", name: t, directives: En(!1) };
        Y = e;
        var n = ks(),
          r = En(!1),
          i = Or();
        if (!i) throw Ce("InlineFragment");
        return { kind: "InlineFragment", typeCondition: n, directives: r, selectionSet: i };
      }
    }
    function Or() {
      var e;
      if ((X(), fe.charCodeAt(Y) === 123)) {
        Y++, X();
        for (var t = []; (e = Ku() || qu()); ) t.push(e);
        if (!t.length || fe.charCodeAt(Y++) !== 125) throw Ce("SelectionSet");
        return X(), { kind: "SelectionSet", selections: t };
      }
    }
    var Ju = /fragment/y;
    function Xu() {
      if (Ue(Ju)) {
        X();
        var e = yt();
        if (!e) throw Ce("FragmentDefinition");
        X();
        var t = ks();
        if (!t) throw Ce("FragmentDefinition");
        var n = En(!1),
          r = Or();
        if (!r) throw Ce("FragmentDefinition");
        return {
          kind: "FragmentDefinition",
          name: e,
          typeCondition: t,
          directives: n,
          selectionSet: r,
        };
      }
    }
    var e2 = /(?:query|mutation|subscription)/y;
    function t2() {
      var e,
        t,
        n = [],
        r = [];
      (e = Ue(e2)) &&
        (X(),
        (t = yt()),
        (n = (function () {
          var l,
            o = [];
          if ((X(), fe.charCodeAt(Y) === 40)) {
            for (Y++, X(); (l = Ue(ys)); ) {
              if ((X(), fe.charCodeAt(Y++) !== 58)) throw Ce("VariableDefinition");
              var s = bs(),
                c = void 0;
              if (fe.charCodeAt(Y) === 61 && (Y++, X(), !(c = tr(!0))))
                throw Ce("VariableDefinition");
              X(),
                o.push({
                  kind: "VariableDefinition",
                  variable: { kind: "Variable", name: { kind: "Name", value: l.slice(1) } },
                  type: s,
                  defaultValue: c,
                  directives: En(!0),
                });
            }
            if (fe.charCodeAt(Y++) !== 41) throw Ce("VariableDefinition");
            X();
          }
          return o;
        })()),
        (r = En(!1)));
      var i = Or();
      if (i)
        return {
          kind: "OperationDefinition",
          operation: e || "query",
          name: t,
          variableDefinitions: n,
          directives: r,
          selectionSet: i,
        };
    }
    function n2(e, t) {
      return (
        (fe = typeof e.body == "string" ? e.body : e),
        (Y = 0),
        (function () {
          var n;
          X();
          for (var r = []; (n = Xu() || t2()); ) r.push(n);
          return { kind: "Document", definitions: r };
        })()
      );
    }
    function a2(e) {
      return JSON.stringify(e);
    }
    function r2(e) {
      return (
        `"""
` +
        e.replace(/"""/g, '\\"""') +
        `
"""`
      );
    }
    var qe = (e) => !(!e || !e.length),
      Te = {
        OperationDefinition(e) {
          if (e.operation === "query" && !e.name && !qe(e.variableDefinitions) && !qe(e.directives))
            return Te.SelectionSet(e.selectionSet);
          var t = e.operation;
          return (
            e.name && (t += " " + e.name.value),
            qe(e.variableDefinitions) &&
              (e.name || (t += " "),
              (t += "(" + e.variableDefinitions.map(Te.VariableDefinition).join(", ") + ")")),
            qe(e.directives) && (t += " " + e.directives.map(Te.Directive).join(" ")),
            t + " " + Te.SelectionSet(e.selectionSet)
          );
        },
        VariableDefinition(e) {
          var t = Te.Variable(e.variable) + ": " + Ye(e.type);
          return (
            e.defaultValue && (t += " = " + Ye(e.defaultValue)),
            qe(e.directives) && (t += " " + e.directives.map(Te.Directive).join(" ")),
            t
          );
        },
        Field(e) {
          var t = (e.alias ? e.alias.value + ": " : "") + e.name.value;
          if (qe(e.arguments)) {
            var n = e.arguments.map(Te.Argument),
              r = t + "(" + n.join(", ") + ")";
            t =
              r.length > 80
                ? t +
                  `(
  ` +
                  n
                    .join(
                      `
`
                    )
                    .replace(
                      /\n/g,
                      `
  `
                    ) +
                  `
)`
                : r;
          }
          return (
            qe(e.directives) && (t += " " + e.directives.map(Te.Directive).join(" ")),
            e.selectionSet ? t + " " + Te.SelectionSet(e.selectionSet) : t
          );
        },
        StringValue: (e) => (e.block ? r2(e.value) : a2(e.value)),
        BooleanValue: (e) => "" + e.value,
        NullValue: (e) => "null",
        IntValue: (e) => e.value,
        FloatValue: (e) => e.value,
        EnumValue: (e) => e.value,
        Name: (e) => e.value,
        Variable: (e) => "$" + e.name.value,
        ListValue: (e) => "[" + e.values.map(Ye).join(", ") + "]",
        ObjectValue: (e) => "{" + e.fields.map(Te.ObjectField).join(", ") + "}",
        ObjectField: (e) => e.name.value + ": " + Ye(e.value),
        Document: (e) =>
          qe(e.definitions)
            ? e.definitions.map(Ye).join(`

`)
            : "",
        SelectionSet: (e) =>
          `{
  ` +
          e.selections
            .map(Ye)
            .join(
              `
`
            )
            .replace(
              /\n/g,
              `
  `
            ) +
          `
}`,
        Argument: (e) => e.name.value + ": " + Ye(e.value),
        FragmentSpread(e) {
          var t = "..." + e.name.value;
          return qe(e.directives) && (t += " " + e.directives.map(Te.Directive).join(" ")), t;
        },
        InlineFragment(e) {
          var t = "...";
          return (
            e.typeCondition && (t += " on " + e.typeCondition.name.value),
            qe(e.directives) && (t += " " + e.directives.map(Te.Directive).join(" ")),
            t + " " + Ye(e.selectionSet)
          );
        },
        FragmentDefinition(e) {
          var t = "fragment " + e.name.value;
          return (
            (t += " on " + e.typeCondition.name.value),
            qe(e.directives) && (t += " " + e.directives.map(Te.Directive).join(" ")),
            t + " " + Ye(e.selectionSet)
          );
        },
        Directive(e) {
          var t = "@" + e.name.value;
          return qe(e.arguments) && (t += "(" + e.arguments.map(Te.Argument).join(", ") + ")"), t;
        },
        NamedType: (e) => e.name.value,
        ListType: (e) => "[" + Ye(e.type) + "]",
        NonNullType: (e) => Ye(e.type) + "!",
      };
    function Ye(e) {
      return Te[e.kind] ? Te[e.kind](e) : "";
    }
    var i2 = (e) =>
        e && e.message && (e.extensions || e.name === "GraphQLError")
          ? e
          : typeof e == "object" && e.message
            ? new Vi(e.message, e.nodes, e.source, e.positions, e.path, e, e.extensions || {})
            : new Vi(e),
      kl = class extends Error {
        constructor(e) {
          var t = (e.graphQLErrors || []).map(i2),
            n = ((r, i) => {
              var l = "";
              if (r) return `[Network] ${r.message}`;
              if (i)
                for (var o of i)
                  l &&
                    (l += `
`),
                    (l += `[GraphQL] ${o.message}`);
              return l;
            })(e.networkError, t);
          super(n),
            (this.name = "CombinedError"),
            (this.message = n),
            (this.graphQLErrors = t),
            (this.networkError = e.networkError),
            (this.response = e.response);
        }
        toString() {
          return this.message;
        }
      },
      Di = (e, t) => {
        for (var n = 0 | (t || 5381), r = 0, i = 0 | e.length; r < i; r++)
          n = (n << 5) + n + e.charCodeAt(r);
        return n;
      },
      Yt = new Set(),
      _o = new WeakMap(),
      mn = (e) => {
        if (e === null || Yt.has(e)) return "null";
        if (typeof e != "object") return JSON.stringify(e) || "";
        if (e.toJSON) return mn(e.toJSON());
        if (Array.isArray(e)) {
          var t = "[";
          for (var n of e) t.length > 1 && (t += ","), (t += mn(n) || "null");
          return (t += "]");
        } else if ((ar !== bn && e instanceof ar) || (rr !== bn && e instanceof rr)) return "null";
        var r = Object.keys(e).sort();
        if (
          !r.length &&
          e.constructor &&
          Object.getPrototypeOf(e).constructor !== Object.prototype.constructor
        ) {
          var i = _o.get(e) || Math.random().toString(36).slice(2);
          return _o.set(e, i), mn({ __key: i });
        }
        Yt.add(e);
        var l = "{";
        for (var o of r) {
          var s = mn(e[o]);
          s && (l.length > 1 && (l += ","), (l += mn(o) + ":" + s));
        }
        return Yt.delete(e), (l += "}");
      },
      Hi = (e, t, n) => {
        if (!(n == null || typeof n != "object" || n.toJSON || Yt.has(n)))
          if (Array.isArray(n)) for (var r = 0, i = n.length; r < i; r++) Hi(e, `${t}.${r}`, n[r]);
          else if (n instanceof ar || n instanceof rr) e.set(t, n);
          else {
            Yt.add(n);
            for (var l of Object.keys(n)) Hi(e, `${t}.${l}`, n[l]);
          }
      },
      nr = (e) => (Yt.clear(), mn(e)),
      bn = class {},
      ar = typeof File < "u" ? File : bn,
      rr = typeof Blob < "u" ? Blob : bn,
      l2 = /("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g,
      o2 = /(?:#[^\n\r]+)?(?:[\r\n]+|$)/g,
      s2 = (e, t) =>
        t % 2 == 0
          ? e.replace(
              o2,
              `
`
            )
          : e,
      Mo = (e) => e.split(l2).map(s2).join("").trim(),
      To = new Map(),
      Ya = new Map(),
      wl = (e) => {
        var t;
        return (
          typeof e == "string"
            ? (t = Mo(e))
            : e.loc && Ya.get(e.__key) === e
              ? (t = e.loc.source.body)
              : ((t = To.get(e) || Mo(Ye(e))), To.set(e, t)),
          typeof e != "string" &&
            !e.loc &&
            (e.loc = {
              start: 0,
              end: t.length,
              source: { body: t, name: "gql", locationOffset: { line: 1, column: 1 } },
            }),
          t
        );
      },
      Ao = (e) => {
        var t = Di(wl(e));
        if (e.definitions) {
          var n = ws(e);
          n &&
            (t = Di(
              `
# ${n}`,
              t
            ));
        }
        return t;
      },
      c2 = (e) => {
        var t, n;
        return (
          typeof e == "string"
            ? ((t = Ao(e)), (n = Ya.get(t) || n2(e)))
            : ((t = e.__key || Ao(e)), (n = Ya.get(t) || e)),
          n.loc || wl(n),
          (n.__key = t),
          Ya.set(t, n),
          n
        );
      },
      gn = (e, t, n) => {
        var r = t || {},
          i = c2(e),
          l = nr(r),
          o = i.__key;
        return l !== "{}" && (o = Di(l, o)), { key: o, query: i, variables: r, extensions: n };
      },
      ws = (e) => {
        for (var t of e.definitions)
          if (t.kind === Du.OPERATION_DEFINITION) return t.name ? t.name.value : void 0;
      },
      Fo = (e, t, n) => {
        if (!("data" in t || ("errors" in t && Array.isArray(t.errors))))
          throw new Error("No Content");
        var r = e.kind === "subscription";
        return {
          operation: e,
          data: t.data,
          error: Array.isArray(t.errors)
            ? new kl({ graphQLErrors: t.errors, response: n })
            : void 0,
          extensions: t.extensions ? { ...t.extensions } : void 0,
          hasNext: t.hasNext == null ? r : t.hasNext,
          stale: !1,
        };
      },
      ji = (e, t) => {
        if (
          typeof e == "object" &&
          e != null &&
          (!e.constructor || e.constructor === Object || Array.isArray(e))
        ) {
          e = Array.isArray(e) ? [...e] : { ...e };
          for (var n of Object.keys(t)) e[n] = ji(e[n], t[n]);
          return e;
        }
        return t;
      },
      d2 = (e, t, n, r) => {
        var i = e.error ? e.error.graphQLErrors : [],
          l = !!e.extensions || !!t.extensions,
          o = { ...e.extensions, ...t.extensions },
          s = t.incremental;
        "path" in t && (s = [t]);
        var c = { data: e.data };
        if (s) {
          var d = function (m) {
            Array.isArray(m.errors) && i.push(...m.errors),
              m.extensions && (Object.assign(o, m.extensions), (l = !0));
            var p = "data",
              f = c,
              g = [];
            if (m.path) g = m.path;
            else if (r) {
              var v = r.find((C) => C.id === m.id);
              m.subPath ? (g = [...v.path, ...m.subPath]) : (g = v.path);
            }
            for (var k = 0, E = g.length; k < E; p = g[k++])
              f = f[p] = Array.isArray(f[p]) ? [...f[p]] : { ...f[p] };
            if (m.items)
              for (var h = +p >= 0 ? p : 0, y = 0, b = m.items.length; y < b; y++)
                f[h + y] = ji(f[h + y], m.items[y]);
            else m.data !== void 0 && (f[p] = ji(f[p], m.data));
          };
          for (var u of s) d(u);
        } else (c.data = t.data || e.data), (i = t.errors || i);
        return {
          operation: e.operation,
          data: c.data,
          error: i.length ? new kl({ graphQLErrors: i, response: n }) : void 0,
          extensions: l ? o : void 0,
          hasNext: t.hasNext != null ? t.hasNext : e.hasNext,
          stale: !1,
        };
      },
      Cs = (e, t, n) => ({
        operation: e,
        data: void 0,
        error: new kl({ networkError: t, response: n }),
        extensions: void 0,
        hasNext: !1,
        stale: !1,
      });
    function u2(e) {
      return {
        query:
          e.extensions && e.extensions.persistedQuery && !e.extensions.persistedQuery.miss
            ? void 0
            : wl(e.query),
        operationName: ws(e.query),
        variables: e.variables || void 0,
        extensions: e.extensions,
      };
    }
    var m2 = (e, t) => {
        var n = e.kind === "query" && e.context.preferGetMethod;
        if (!n || !t) return e.context.url;
        var r = new URL(e.context.url);
        for (var i in t) {
          var l = t[i];
          l && r.searchParams.set(i, typeof l == "object" ? nr(l) : l);
        }
        var o = r.toString();
        return o.length > 2047 && n !== "force"
          ? ((e.context.preferGetMethod = !1), e.context.url)
          : o;
      },
      p2 = (e, t) => {
        if (t && !(e.kind === "query" && e.context.preferGetMethod)) {
          var n = nr(t),
            r = ((s) => {
              var c = new Map();
              return (ar !== bn || rr !== bn) && (Yt.clear(), Hi(c, "variables", s)), c;
            })(t.variables);
          if (r.size) {
            var i = new FormData();
            i.append("operations", n), i.append("map", nr({ ...[...r.keys()].map((s) => [s]) }));
            var l = 0;
            for (var o of r.values()) i.append("" + l++, o);
            return i;
          }
          return n;
        }
      },
      h2 = (e, t) => {
        var n = {
            accept:
              e.kind === "subscription"
                ? "text/event-stream, multipart/mixed"
                : "application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed",
          },
          r =
            (typeof e.context.fetchOptions == "function"
              ? e.context.fetchOptions()
              : e.context.fetchOptions) || {};
        if (r.headers) for (var i in r.headers) n[i.toLowerCase()] = r.headers[i];
        var l = p2(e, t);
        return (
          typeof l == "string" && !n["content-type"] && (n["content-type"] = "application/json"),
          { ...r, method: l ? "POST" : "GET", body: l, headers: n }
        );
      },
      f2 = typeof TextDecoder < "u" ? new TextDecoder() : null,
      g2 = /boundary="?([^=";]+)"?/i,
      v2 = /data: ?([^\n]+)/,
      Oo = (e) => (e.constructor.name === "Buffer" ? e.toString() : f2.decode(e));
    async function* Lo(e) {
      if (e.body[Symbol.asyncIterator]) for await (var t of e.body) yield Oo(t);
      else {
        var n = e.body.getReader(),
          r;
        try {
          for (; !(r = await n.read()).done; ) yield Oo(r.value);
        } finally {
          n.cancel();
        }
      }
    }
    async function* Ro(e, t) {
      var n = "",
        r;
      for await (var i of e)
        for (n += i; (r = n.indexOf(t)) > -1; ) yield n.slice(0, r), (n = n.slice(r + t.length));
    }
    async function* y2(e, t, n) {
      var r = !0,
        i = null,
        l;
      try {
        yield await Promise.resolve();
        var o = (l = await (e.context.fetch || fetch)(t, n)).headers.get("Content-Type") || "",
          s;
        /multipart\/mixed/i.test(o)
          ? (s = (async function* (u, m) {
              var p = u.match(g2),
                f = "--" + (p ? p[1] : "-"),
                g = !0,
                v;
              for await (var k of Ro(
                Lo(m),
                `\r
` + f
              )) {
                if (g) {
                  g = !1;
                  var E = k.indexOf(f);
                  if (E > -1) k = k.slice(E + f.length);
                  else continue;
                }
                try {
                  yield (v = JSON.parse(
                    k.slice(
                      k.indexOf(`\r
\r
`) + 4
                    )
                  ));
                } catch (h) {
                  if (!v) throw h;
                }
                if (v && v.hasNext === !1) break;
              }
              v && v.hasNext !== !1 && (yield { hasNext: !1 });
            })(o, l))
          : /text\/event-stream/i.test(o)
            ? (s = (async function* (u) {
                var m;
                for await (var p of Ro(
                  Lo(u),
                  `

`
                )) {
                  var f = p.match(v2);
                  if (f) {
                    var g = f[1];
                    try {
                      yield (m = JSON.parse(g));
                    } catch (v) {
                      if (!m) throw v;
                    }
                    if (m && m.hasNext === !1) break;
                  }
                }
                m && m.hasNext !== !1 && (yield { hasNext: !1 });
              })(l))
            : /text\//i.test(o)
              ? (s = (async function* (u) {
                  var m = await u.text();
                  try {
                    var p = JSON.parse(m);
                    yield p;
                  } catch {
                    throw new Error(m);
                  }
                })(l))
              : (s = (async function* (u) {
                  yield JSON.parse(await u.text());
                })(l));
        var c;
        for await (var d of s)
          d.pending && !i ? (c = d.pending) : d.pending && (c = [...c, ...d.pending]),
            (i = i ? d2(i, d, l, c) : Fo(e, d, l)),
            (r = !1),
            yield i,
            (r = !0);
        i || (yield (i = Fo(e, {}, l)));
      } catch (u) {
        if (!r) throw u;
        yield Cs(
          e,
          l && (l.status < 200 || l.status >= 300) && l.statusText ? new Error(l.statusText) : u,
          l
        );
      }
    }
    function E2(e, t, n) {
      var r;
      return (
        typeof AbortController < "u" && (n.signal = (r = new AbortController()).signal),
        El(() => {
          r && r.abort();
        })(De((i) => !!i)(fs(y2(e, t, n))))
      );
    }
    var zi = (e, t) => {
      if (!e || typeof e != "object") return e;
      if (Array.isArray(e)) return e.map((i) => zi(i));
      if (e && typeof e == "object" && (t || "__typename" in e)) {
        var n = {};
        for (var r in e)
          r === "__typename"
            ? Object.defineProperty(n, "__typename", { enumerable: !1, value: e.__typename })
            : (n[r] = zi(e[r]));
        return n;
      } else return e;
    };
    function Io(e) {
      var t = (n) => e(n);
      return (
        (t.toPromise = () => bl(Fr(1)(De((n) => !n.stale && !n.hasNext)(t)))),
        (t.then = (n, r) => t.toPromise().then(n, r)),
        (t.subscribe = (n) => yn(n)(t)),
        t
      );
    }
    function ir(e, t, n) {
      return { ...t, kind: e, context: t.context ? { ...t.context, ...n } : n || t.context };
    }
    var b2 = () => {},
      k2 =
        ({ forward: e, dispatchDebug: t }) =>
        (n) => {
          var r = Xa((l) => {
              var o = u2(l),
                s = m2(l, o),
                c = h2(l, o),
                d = ps(De((u) => u.kind === "teardown" && u.key === l.key)(n))(E2(l, s, c));
              return d;
            })(
              De(
                (l) =>
                  l.kind !== "teardown" &&
                  (l.kind !== "subscription" || !!l.context.fetchSubscriptions)
              )(n)
            ),
            i = e(
              De(
                (l) =>
                  l.kind === "teardown" ||
                  (l.kind === "subscription" && !l.context.fetchSubscriptions)
              )(n)
            );
          return ta([r, i]);
        },
      w2 =
        (e) =>
        ({ client: t, forward: n, dispatchDebug: r }) =>
          e.reduceRight(
            (i, l) =>
              l({
                client: t,
                forward(o) {
                  return na(i(na(o)));
                },
                dispatchDebug(o) {},
              }),
            n
          ),
      C2 =
        ({ onOperation: e, onResult: t, onError: n }) =>
        ({ forward: r }) =>
        (i) =>
          Xa((l) => {
            n && l.error && n(l.error, l.operation);
            var o = (t && t(l)) || l;
            return "then" in o ? No(o) : Kn(o);
          })(
            r(
              Xa((l) => {
                var o = (e && e(l)) || l;
                return "then" in o ? No(o) : Kn(o);
              })(i)
            )
          ),
      S2 =
        ({ dispatchDebug: e }) =>
        (t) =>
          De((n) => !1)(t),
      x2 = function e(t) {
        var n = 0,
          r = new Map(),
          i = new Map(),
          l = new Set(),
          o = [],
          s = {
            url: t.url,
            fetchSubscriptions: t.fetchSubscriptions,
            fetchOptions: t.fetchOptions,
            fetch: t.fetch,
            preferGetMethod: t.preferGetMethod,
            requestPolicy: t.requestPolicy || "cache-first",
          },
          c = Pi();
        function d(h) {
          (h.kind === "mutation" || h.kind === "teardown" || !l.has(h.key)) &&
            (h.kind === "teardown" ? l.delete(h.key) : h.kind !== "mutation" && l.add(h.key),
            c.next(h));
        }
        var u = !1;
        function m(h) {
          if ((h && d(h), !u)) {
            for (u = !0; u && (h = o.shift()); ) d(h);
            u = !1;
          }
        }
        var p = (h) => {
            var y = ps(De((b) => b.kind === "teardown" && b.key === h.key)(c.source))(
              De(
                (b) =>
                  b.operation.kind === h.kind &&
                  b.operation.key === h.key &&
                  (!b.operation.context._instance ||
                    b.operation.context._instance === h.context._instance)
              )(E)
            );
            return (
              t.maskTypename && (y = Zi((b) => ({ ...b, data: zi(b.data, !0) }))(y)),
              h.kind !== "query"
                ? (y = hs((b) => !!b.hasNext, !0)(y))
                : (y = xo((b) => {
                    var C = Kn(b);
                    return b.stale || b.hasNext
                      ? C
                      : ta([
                          C,
                          Zi(() => ((b.stale = !0), b))(
                            Fr(1)(De((O) => O.key === h.key)(c.source))
                          ),
                        ]);
                  })(y)),
              h.kind !== "mutation"
                ? (y = El(() => {
                    l.delete(h.key), r.delete(h.key), i.delete(h.key), (u = !1);
                    for (var b = o.length - 1; b >= 0; b--) o[b].key === h.key && o.splice(b, 1);
                    d(ir("teardown", h, h.context));
                  })(
                    er((b) => {
                      if (b.stale) {
                        for (var C of o)
                          if (C.key === b.operation.key) {
                            l.delete(C.key);
                            break;
                          }
                      } else b.hasNext || l.delete(h.key);
                      r.set(h.key, b);
                    })(y)
                  ))
                : (y = Bi(() => {
                    d(h);
                  })(y)),
              na(y)
            );
          },
          f = this instanceof e ? this : Object.create(e.prototype),
          g = Object.assign(f, {
            suspense: !!t.suspense,
            operations$: c.source,
            reexecuteOperation(h) {
              if (h.kind === "teardown") m(h);
              else if (h.kind === "mutation" || i.has(h.key)) {
                for (var y = !1, b = 0; b < o.length; b++) y = y || o[b].key === h.key;
                y || l.delete(h.key), o.push(h), Promise.resolve().then(m);
              }
            },
            createRequestOperation(h, y, b) {
              return (
                b || (b = {}),
                ir(h, y, {
                  _instance: h === "mutation" ? (n = (n + 1) | 0) : void 0,
                  ...s,
                  ...b,
                  requestPolicy: b.requestPolicy || s.requestPolicy,
                  suspense: b.suspense || (b.suspense !== !1 && g.suspense),
                })
              );
            },
            executeRequestOperation(h) {
              return h.kind === "mutation"
                ? Io(p(h))
                : Io(
                    Zu(() => {
                      var y = i.get(h.key);
                      y || i.set(h.key, (y = p(h))),
                        (y = Bi(() => {
                          m(h);
                        })(y));
                      var b = r.get(h.key);
                      return h.kind === "query" && b && (b.stale || b.hasNext)
                        ? xo(Kn)(ta([y, De((C) => C === r.get(h.key))(Kn(b))]))
                        : y;
                    })
                  );
            },
            executeQuery(h, y) {
              var b = g.createRequestOperation("query", h, y);
              return g.executeRequestOperation(b);
            },
            executeSubscription(h, y) {
              var b = g.createRequestOperation("subscription", h, y);
              return g.executeRequestOperation(b);
            },
            executeMutation(h, y) {
              var b = g.createRequestOperation("mutation", h, y);
              return g.executeRequestOperation(b);
            },
            readQuery(h, y, b) {
              var C = null;
              return (
                yn((O) => {
                  C = O;
                })(g.query(h, y, b)).unsubscribe(),
                C
              );
            },
            query: (h, y, b) => g.executeQuery(gn(h, y), b),
            subscription: (h, y, b) => g.executeSubscription(gn(h, y), b),
            mutation: (h, y, b) => g.executeMutation(gn(h, y), b),
          }),
          v = b2,
          k = w2(t.exchanges),
          E = na(k({ client: g, dispatchDebug: v, forward: S2({ dispatchDebug: v }) })(c.source));
        return Vu(E), g;
      },
      pi = (e, t) => ir(e.kind, e, { ...e.context, authAttempt: t });
    function N2(e) {
      return ({ client: t, forward: n }) => {
        var r = new Set(),
          i = Pi(),
          l = Pi(),
          o = new Map();
        function s() {
          d = void 0;
          var m = o;
          (o = new Map()), m.forEach(i.next);
        }
        function c(m) {
          d = void 0;
          var p = o;
          (o = new Map()),
            p.forEach((f) => {
              l.next(Cs(f, m));
            });
        }
        var d,
          u = null;
        return (m) => {
          function p() {
            d = Promise.resolve()
              .then(() =>
                e({
                  mutate(E, h, y) {
                    var b = t.createRequestOperation("mutation", gn(E, h), y);
                    return bl(
                      Fr(1)(
                        De(
                          (C) =>
                            C.operation.key === b.key &&
                            b.context._instance === C.operation.context._instance
                        )(
                          Bi(() => {
                            var C = g(b);
                            r.add(C.context._instance), i.next(C);
                          })(k)
                        )
                      )
                    );
                  },
                  appendHeaders(E, h) {
                    var y =
                      typeof E.context.fetchOptions == "function"
                        ? E.context.fetchOptions()
                        : E.context.fetchOptions || {};
                    return ir(E.kind, E, {
                      ...E.context,
                      fetchOptions: { ...y, headers: { ...y.headers, ...h } },
                    });
                  },
                })
              )
              .then((E) => {
                E && (u = E), s();
              })
              .catch((E) => {
                c(E);
              });
          }
          p();
          function f(E) {
            o.set(E.key, pi(E, !0)), u && !d && (d = u.refreshAuth().then(s).catch(c));
          }
          function g(E) {
            return u ? u.addAuthToOperation(E) : E;
          }
          var v = De(Boolean)(
              Zi((E) =>
                E.kind === "teardown"
                  ? (o.delete(E.key), E)
                  : E.context._instance && r.has(E.context._instance)
                    ? E
                    : E.context.authAttempt
                      ? g(E)
                      : d || !u
                        ? (d || p(), o.has(E.key) || o.set(E.key, pi(E, !1)), null)
                        : (function (h) {
                              return (
                                !h.context.authAttempt && u && u.willAuthError && u.willAuthError(h)
                              );
                            })(E)
                          ? (f(E), null)
                          : g(pi(E, !1))
              )(ta([i.source, m]))
            ),
            k = n(v);
          return ta([
            l.source,
            De((E) =>
              !r.has(E.operation.context._instance) &&
              E.error &&
              (function (h) {
                return u && u.didAuthError && u.didAuthError(h.error, h.operation);
              })(E) &&
              !E.operation.context.authAttempt
                ? (f(E.operation), !1)
                : (r.has(E.operation.context._instance) && r.delete(E.operation.context._instance),
                  !0)
            )(k),
          ]);
        };
      };
    }
    var _2 = {},
      Lr = je(_2),
      M2 = Lr.Provider;
    Lr.Consumer;
    Lr.displayName = "UrqlContext";
    var Cl = () => {
        var e = Ft(Lr);
        return e;
      },
      Ui = {
        fetching: !1,
        stale: !1,
        error: void 0,
        data: void 0,
        extensions: void 0,
        operation: void 0,
      },
      T2 = (e, t) => e === t || !(!e || !t || e.key !== t.key),
      hi = (e, t) => {
        var n = {
          ...e,
          ...t,
          data: t.data !== void 0 || t.error ? t.data : e.data,
          fetching: !!t.fetching,
          stale: !!t.stale,
        };
        return ((r, i) => {
          for (var l in r) if (!(l in i)) return !0;
          for (var o in i) if (o === "operation" ? !T2(r[o], i[o]) : r[o] !== i[o]) return !0;
          return !1;
        })(e, n)
          ? n
          : e;
      },
      A2 = (e, t) => {
        for (var n = 0, r = t.length; n < r; n++) if (e[n] !== t[n]) return !0;
        return !1;
      };
    function lr(e, t) {
      e(t);
    }
    function Ss(e) {
      var t = Ne(!0),
        n = Cl(),
        [r, i] = _e(Ui),
        l = H(
          (o, s) => (
            lr(i, { ...Ui, fetching: !0 }),
            bl(
              Fr(1)(
                De((c) => !c.hasNext)(
                  er((c) => {
                    t.current &&
                      lr(i, {
                        fetching: !1,
                        stale: c.stale,
                        data: c.data,
                        error: c.error,
                        extensions: c.extensions,
                        operation: c.operation,
                      });
                  })(n.executeMutation(gn(e, o), s || {}))
                )
              )
            )
          ),
          [n, e, i]
        );
      return (
        K(
          () => (
            (t.current = !0),
            () => {
              t.current = !1;
            }
          ),
          []
        ),
        [r, l]
      );
    }
    function F2(e, t) {
      var n = Ne(void 0);
      return ct(() => {
        var r = gn(e, t);
        return n.current !== void 0 && n.current.key === r.key ? n.current : ((n.current = r), r);
      }, [e, t]);
    }
    var O2 = (e) => {
        if (!e._react) {
          var t = new Set(),
            n = new Map();
          e.operations$ &&
            yn((r) => {
              r.kind === "teardown" && t.has(r.key) && (t.delete(r.key), n.delete(r.key));
            })(e.operations$),
            (e._react = {
              get: (r) => n.get(r),
              set(r, i) {
                t.delete(r), n.set(r, i);
              },
              dispose(r) {
                t.add(r);
              },
            });
        }
        return e._react;
      },
      L2 = (e, t) => (t && t.suspense !== void 0 ? !!t.suspense : e.suspense);
    function Sl(e) {
      var t = Cl(),
        n = O2(t),
        r = L2(t, e.context),
        i = F2(e.query, e.variables),
        l = ct(() => {
          if (e.pause) return null;
          var p = t.executeQuery(i, { requestPolicy: e.requestPolicy, ...e.context });
          return r
            ? er((f) => {
                n.set(i.key, f);
              })(p)
            : p;
        }, [n, t, i, r, e.pause, e.requestPolicy, e.context]),
        o = H(
          (p, f) => {
            if (!p) return { fetching: !1 };
            var g = n.get(i.key);
            if (g) {
              if (f && g != null && "then" in g) throw g;
            } else {
              var v,
                k = yn((h) => {
                  (g = h), v && v(g);
                })(hs(() => (f && !v) || !g)(p));
              if (g == null && f) {
                var E = new Promise((h) => {
                  v = h;
                });
                throw (n.set(i.key, E), E);
              } else k.unsubscribe();
            }
            return g || { fetching: !0 };
          },
          [n, i]
        ),
        s = [t, i, e.requestPolicy, e.context, e.pause],
        [c, d] = _e(() => [l, hi(Ui, o(l, r)), s]),
        u = c[1];
      l !== c[0] && A2(c[2], s) && d([l, (u = hi(c[1], o(l, r))), s]),
        K(() => {
          var p = c[0],
            f = c[2][1],
            g = !1,
            v = (E) => {
              (g = !0),
                lr(d, (h) => {
                  var y = hi(h[1], E);
                  return h[1] !== y ? [h[0], y, h[2]] : h;
                });
            };
          if (p) {
            var k = yn(v)(
              El(() => {
                v({ fetching: !1 });
              })(p)
            );
            return (
              g || v({ fetching: !0 }),
              () => {
                n.dispose(f.key), k.unsubscribe();
              }
            );
          } else v({ fetching: !1 });
        }, [n, c[0], c[2][1]]);
      var m = H(
        (p) => {
          var f = { requestPolicy: e.requestPolicy, ...e.context, ...p };
          lr(d, (g) => [
            r
              ? er((v) => {
                  n.set(i.key, v);
                })(t.executeQuery(i, f))
              : t.executeQuery(i, f),
            g[1],
            s,
          ]);
        },
        [t, n, i, r, e.requestPolicy, e.context, e.pause]
      );
      return [u, m];
    }
    var Za,
      R2 = new Uint8Array(16);
    function I2() {
      if (
        !Za &&
        ((Za =
          typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)),
        !Za)
      )
        throw new Error(
          "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
        );
      return Za(R2);
    }
    var Me = [];
    for (let e = 0; e < 256; ++e) Me.push((e + 256).toString(16).slice(1));
    function Z2(e, t = 0) {
      return (
        Me[e[t + 0]] +
        Me[e[t + 1]] +
        Me[e[t + 2]] +
        Me[e[t + 3]] +
        "-" +
        Me[e[t + 4]] +
        Me[e[t + 5]] +
        "-" +
        Me[e[t + 6]] +
        Me[e[t + 7]] +
        "-" +
        Me[e[t + 8]] +
        Me[e[t + 9]] +
        "-" +
        Me[e[t + 10]] +
        Me[e[t + 11]] +
        Me[e[t + 12]] +
        Me[e[t + 13]] +
        Me[e[t + 14]] +
        Me[e[t + 15]]
      );
    }
    var B2 = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
      Zo = { randomUUID: B2 };
    function P2(e, t, n) {
      if (Zo.randomUUID && !t && !e) return Zo.randomUUID();
      e = e || {};
      let r = e.random || (e.rng || I2)();
      if (((r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), t)) {
        n = n || 0;
        for (let i = 0; i < 16; ++i) t[n + i] = r[i];
        return t;
      }
      return Z2(r);
    }
    var V2 = P2,
      mt,
      Jn,
      or = (e) => {
        try {
          let { exp: t } = e ? JSON.parse(atob(e.split(".")[1])) : { exp: null };
          (mt = e), (Jn = t);
        } catch {
          (mt = null), (Jn = null);
        }
        mt ? localStorage.setItem(Li, mt) : localStorage.removeItem(Li);
      };
    or(localStorage.getItem(Li));
    var xl = () => {
        let [{ token: e }, t] = Kl(`${Z}/accessToken`, { token: mt }),
          n = a.useCallback(
            (r) => {
              or(r), t({ token: mt });
            },
            [t]
          );
        return [e, n];
      },
      D2 = V2(),
      xs = (e) => ({
        headers: {
          Accept: "*/*",
          ...(e && { Authorization: `Bearer ${e}` }),
          "X-Chromatic-Session-ID": D2,
        },
      }),
      Ns = (e) =>
        new x2({
          url: Z5,
          exchanges: [
            C2({
              onResult(t) {
                t.data?.viewer === null && or(null);
              },
            }),
            N2(async (t) => ({
              addAuthToOperation(n) {
                return mt ? t.appendHeaders(n, { Authorization: `Bearer ${mt}` }) : n;
              },
              didAuthError: (n) =>
                n.response?.status === 401 ||
                n.graphQLErrors.some((r) => r.message.includes("Must login")),
              async refreshAuth() {
                or(null);
              },
              willAuthError() {
                if (!mt) return !0;
                try {
                  if (!Jn) {
                    let { exp: n } = JSON.parse(atob(mt.split(".")[1]));
                    Jn = n;
                  }
                  return Date.now() / 1e3 > (Jn || 0);
                } catch {
                  return !0;
                }
              },
            })),
            k2,
          ],
          fetchOptions: xs(),
          ...e,
        }),
      H2 = ({ children: e, value: t = Ns() }) => a.createElement(M2, { value: t }, e),
      kt = (e, t) => {
        let n = Ft(e);
        if (n == null) throw new Error(`Missing context value for ${t}`);
        return n;
      },
      ba = je(null),
      j2 = ({ children: e, value: t }) => a.createElement(ba.Provider, { value: t }, e),
      We = (e, t) => {
        let n = kt(ba, "Telemetry");
        K(() => n({ location: e, screen: t }), [e, t, n]);
      },
      Pn = new Map(),
      $i = (e, t, n, r = !0) => {
        let i = () => {
            window.clearTimeout(Pn.get(e)), Pn.delete(e);
          },
          l = (...o) => {
            Pn.has(e) ? i() : r && t(...o),
              Pn.set(
                e,
                window.setTimeout(() => Pn.delete(e) && t(...o), n)
              );
          };
        return (l.cancel = i), l;
      },
      Nl = ({ localBuildProgress: e, accessToken: t }) => {
        let n = On({}),
          r = Ft(ba),
          [i, l] = _e(!1),
          [o, s] = _e(!1),
          c = e ? ["initialize", "build", "upload"].includes(e?.currentStep) : !1,
          d = e ? !["aborted", "complete", "error", "limited"].includes(e.currentStep) : i,
          u = ct(
            () =>
              $i(
                "startBuild",
                () => {
                  s(!1), l(!0), n(D5, { accessToken: t }), r?.({ action: "startBuild" });
                },
                1e3,
                !1
              ),
            [t, n, r]
          ),
          m = ct(
            () =>
              $i(
                "startBuild",
                () => {
                  c ? (l(!1), n(H5), r?.({ action: "stopBuild" })) : s(!0);
                },
                1e3,
                !1
              ),
            [c, n, r]
          );
        return (
          K(() => {
            let p = i && setTimeout(() => l(!1), 5e3);
            return () => {
              p && clearTimeout(p);
            };
          }, [i]),
          { isDisallowed: o, isRunning: d, startBuild: u, stopBuild: m }
        );
      },
      Bo = "experimental_useSharedState_getValue",
      Ba = "experimental_useSharedState_setValue",
      fi = new Map(),
      _s = class {
        constructor(e) {
          (this.channel = e),
            (this.listeners = []),
            (this.state = {}),
            this.channel.on(Ba, (t, n, r) => {
              this.state?.[t]?.index >= r || (this.state[t] = { index: r, value: n });
            }),
            this.channel.on(Bo, (t) => {
              let n = this.state[t]?.index ?? 0,
                r = this.state[t]?.value;
              this.channel.emit(Ba, t, r, n);
            });
        }
        get(e) {
          return this.state[e] || this.channel.emit(Bo, e), this.state[e]?.value;
        }
        set(e, t) {
          let n = (this.state[e]?.index ?? 0) + 1;
          (this.state[e] = { index: n, value: t }), this.channel.emit(Ba, e, t, n);
        }
        static subscribe(e, t) {
          let n = fi.get(e) || new _s(t);
          return (
            fi.has(e) ||
              (fi.set(e, n),
              n.channel.on(Ba, (r, i) => {
                r === e && n.listeners.forEach((l) => l(i));
              })),
            {
              get value() {
                return n.get(e);
              },
              set value(r) {
                n.set(e, r);
              },
              on(r, i) {
                if (r !== "change") throw new Error("unsupported event");
                n.listeners.push(i);
              },
              off(r, i) {
                if (r !== "change") throw new Error("unsupported event");
                let l = n.listeners.indexOf(i);
                l >= 0 && n.listeners.splice(l, 1);
              },
            }
          );
        }
      };
    function Ee(e) {
      let t = sn().getChannel();
      if (!t) throw new Error("Channel not available");
      let n = Ne(_s.subscribe(e, t)),
        [r, i] = _e(n.current.value);
      return (
        K(() => {
          let l = n.current;
          return l.on("change", i), () => l.off("change", i);
        }, [n]),
        [
          r,
          H((l) => {
            i(l), (n.current.value = l);
          }, []),
        ]
      );
    }
    var _l = () => {
        let [e, t] = Ee(as),
          { projectId: n, written: r, dismissed: i, configFile: l } = e || {};
        return {
          loading: !e,
          projectId: n,
          configFile: l,
          updateProject: H((o) => t({ ...e, projectId: o, dismissed: !1 }), [e, t]),
          projectUpdatingFailed: !i && r === !1,
          projectIdUpdated: !i && r === !0,
          clearProjectIdUpdated: H(() => t({ ...e, dismissed: !0 }), [e, t]),
        };
      },
      Wi = ["initialize", "build", "upload", "verify", "snapshot"],
      Ml = {
        initialize: {
          key: "initialize",
          emoji: "\u{1F680}",
          renderName: () => "Initialize build",
          renderProgress: () => "Initializing build...",
          renderComplete: () => "Initialized",
          estimateDuration: 2e3,
        },
        build: {
          key: "build",
          emoji: "\u{1F3D7}",
          renderName: () => "Build Storybook",
          renderProgress: () => "Building your Storybook...",
          renderComplete: () => "Storybook built",
          estimateDuration: 2e4,
        },
        upload: {
          key: "upload",
          emoji: "\u{1F4E1}",
          renderName: () => "Publish your Storybook",
          renderProgress: ({ stepProgress: e }) => {
            let { numerator: t, denominator: n } = e.upload;
            if (!n || !t) return "Uploading files...";
            let { value: r, exponent: i } = ai(n, { output: "object", round: 1 }),
              { value: l, symbol: o } = ai(t, { exponent: i, output: "object", round: 1 });
            return `Uploading files... ${l}/${r} ${o}`;
          },
          renderComplete: () => "Publish complete",
          estimateDuration: 2e4,
        },
        verify: {
          key: "verify",
          emoji: "\u{1F50D}",
          renderName: () => "Verify your Storybook",
          renderProgress: () => "Verifying contents...",
          renderComplete: () => "Storybook verified",
          estimateDuration: 2e4,
        },
        snapshot: {
          key: "snapshot",
          emoji: "\u{1F4F8}",
          renderName: () => "Run visual tests",
          renderProgress: ({ stepProgress: e }) => {
            let { numerator: t, denominator: n } = e.snapshot;
            return n ? `Running visual tests... ${t}/${n}` : "Running visual tests...";
          },
          renderComplete: () => "Tested your stories",
          estimateDuration: 9e4,
        },
        aborted: {
          key: "aborted",
          emoji: "\u270B",
          renderName: () => "Build canceled",
          renderProgress: () => "Build canceled",
          renderComplete: () => "Build canceled",
          estimateDuration: 0,
        },
        complete: {
          key: "complete",
          emoji: "\u{1F389}",
          renderName: () => "Visual tests completed!",
          renderProgress: () => "Visual tests completed!",
          renderComplete: () => "Visual tests completed!",
          estimateDuration: 0,
        },
        error: {
          key: "error",
          emoji: "\u{1F6A8}",
          renderName: () => "Build failed",
          renderProgress: () => "Build failed",
          renderComplete: () => "Build failed",
          estimateDuration: 0,
        },
        limited: {
          key: "error",
          emoji: "\u{1F6A8}",
          renderName: () => "Build limited",
          renderProgress: () => "Build limited",
          renderComplete: () => "Build limited",
          estimateDuration: 0,
        },
      },
      z2 = {
        buildProgressPercentage: 0,
        currentStep: Wi[0],
        stepProgress: Object.fromEntries(Wi.map((e) => [e, {}])),
      };
    JSON.stringify(z2);
    var j = w.div(
        ({ center: e, small: t, block: n, theme: r }) => ({
          display: n ? "block" : "inline-block",
          color: r.color.defaultText,
          fontSize: t ? r.typography.size.s1 : r.typography.size.s2,
          lineHeight: t ? "18px" : "20px",
          textAlign: e ? "center" : "left",
          textWrap: "balance",
        }),
        ({ muted: e, theme: t }) => e && { color: t.base === "light" ? t.color.dark : "#C9CDCF" },
        ({ theme: e }) => ({
          b: { color: e.color.defaultText },
          code: {
            fontSize: e.typography.size.s1,
            border: `1px solid ${e.appBorderColor}`,
            borderRadius: 3,
            padding: 2,
          },
          small: { fontSize: e.typography.size.s1 },
          span: { whiteSpace: "nowrap" },
          svg: { verticalAlign: "top" },
        })
      ),
      Tl = ({ localBuildProgress: e, withEmoji: t = !1, ...n }) => {
        let { emoji: r, renderProgress: i } = Ml[e.currentStep],
          l = i(e);
        return a.createElement(j, { ...n }, t && r, " ", l);
      };
    function sr() {
      return (
        (sr = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        sr.apply(this, arguments)
      );
    }
    function U2(e) {
      if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }
    function aa(e, t) {
      return (
        (aa = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (n, r) {
              return (n.__proto__ = r), n;
            }),
        aa(e, t)
      );
    }
    function $2(e, t) {
      (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), aa(e, t);
    }
    function Gi(e) {
      return (
        (Gi = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            }),
        Gi(e)
      );
    }
    function W2(e) {
      try {
        return Function.toString.call(e).indexOf("[native code]") !== -1;
      } catch {
        return typeof e == "function";
      }
    }
    function Ms() {
      try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      } catch {}
      return (Ms = function () {
        return !!e;
      })();
    }
    function G2(e, t, n) {
      if (Ms()) return Reflect.construct.apply(null, arguments);
      var r = [null];
      r.push.apply(r, t);
      var i = new (e.bind.apply(e, r))();
      return n && aa(i, n.prototype), i;
    }
    function qi(e) {
      var t = typeof Map == "function" ? new Map() : void 0;
      return (
        (qi = function (n) {
          if (n === null || !W2(n)) return n;
          if (typeof n != "function")
            throw new TypeError("Super expression must either be null or a function");
          if (typeof t < "u") {
            if (t.has(n)) return t.get(n);
            t.set(n, r);
          }
          function r() {
            return G2(n, arguments, Gi(this).constructor);
          }
          return (
            (r.prototype = Object.create(n.prototype, {
              constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 },
            })),
            aa(r, n)
          );
        }),
        qi(e)
      );
    }
    var pt = (function (e) {
      $2(t, e);
      function t(n) {
        var r;
        return (
          (r =
            e.call(
              this,
              "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" +
                n +
                " for more information."
            ) || this),
          U2(r)
        );
      }
      return t;
    })(qi(Error));
    function gi(e) {
      return Math.round(e * 255);
    }
    function q2(e, t, n) {
      return gi(e) + "," + gi(t) + "," + gi(n);
    }
    function ra(e, t, n, r) {
      if ((r === void 0 && (r = q2), t === 0)) return r(n, n, n);
      var i = (((e % 360) + 360) % 360) / 60,
        l = (1 - Math.abs(2 * n - 1)) * t,
        o = l * (1 - Math.abs((i % 2) - 1)),
        s = 0,
        c = 0,
        d = 0;
      i >= 0 && i < 1
        ? ((s = l), (c = o))
        : i >= 1 && i < 2
          ? ((s = o), (c = l))
          : i >= 2 && i < 3
            ? ((c = l), (d = o))
            : i >= 3 && i < 4
              ? ((c = o), (d = l))
              : i >= 4 && i < 5
                ? ((s = o), (d = l))
                : i >= 5 && i < 6 && ((s = l), (d = o));
      var u = n - l / 2,
        m = s + u,
        p = c + u,
        f = d + u;
      return r(m, p, f);
    }
    var Po = {
      aliceblue: "f0f8ff",
      antiquewhite: "faebd7",
      aqua: "00ffff",
      aquamarine: "7fffd4",
      azure: "f0ffff",
      beige: "f5f5dc",
      bisque: "ffe4c4",
      black: "000",
      blanchedalmond: "ffebcd",
      blue: "0000ff",
      blueviolet: "8a2be2",
      brown: "a52a2a",
      burlywood: "deb887",
      cadetblue: "5f9ea0",
      chartreuse: "7fff00",
      chocolate: "d2691e",
      coral: "ff7f50",
      cornflowerblue: "6495ed",
      cornsilk: "fff8dc",
      crimson: "dc143c",
      cyan: "00ffff",
      darkblue: "00008b",
      darkcyan: "008b8b",
      darkgoldenrod: "b8860b",
      darkgray: "a9a9a9",
      darkgreen: "006400",
      darkgrey: "a9a9a9",
      darkkhaki: "bdb76b",
      darkmagenta: "8b008b",
      darkolivegreen: "556b2f",
      darkorange: "ff8c00",
      darkorchid: "9932cc",
      darkred: "8b0000",
      darksalmon: "e9967a",
      darkseagreen: "8fbc8f",
      darkslateblue: "483d8b",
      darkslategray: "2f4f4f",
      darkslategrey: "2f4f4f",
      darkturquoise: "00ced1",
      darkviolet: "9400d3",
      deeppink: "ff1493",
      deepskyblue: "00bfff",
      dimgray: "696969",
      dimgrey: "696969",
      dodgerblue: "1e90ff",
      firebrick: "b22222",
      floralwhite: "fffaf0",
      forestgreen: "228b22",
      fuchsia: "ff00ff",
      gainsboro: "dcdcdc",
      ghostwhite: "f8f8ff",
      gold: "ffd700",
      goldenrod: "daa520",
      gray: "808080",
      green: "008000",
      greenyellow: "adff2f",
      grey: "808080",
      honeydew: "f0fff0",
      hotpink: "ff69b4",
      indianred: "cd5c5c",
      indigo: "4b0082",
      ivory: "fffff0",
      khaki: "f0e68c",
      lavender: "e6e6fa",
      lavenderblush: "fff0f5",
      lawngreen: "7cfc00",
      lemonchiffon: "fffacd",
      lightblue: "add8e6",
      lightcoral: "f08080",
      lightcyan: "e0ffff",
      lightgoldenrodyellow: "fafad2",
      lightgray: "d3d3d3",
      lightgreen: "90ee90",
      lightgrey: "d3d3d3",
      lightpink: "ffb6c1",
      lightsalmon: "ffa07a",
      lightseagreen: "20b2aa",
      lightskyblue: "87cefa",
      lightslategray: "789",
      lightslategrey: "789",
      lightsteelblue: "b0c4de",
      lightyellow: "ffffe0",
      lime: "0f0",
      limegreen: "32cd32",
      linen: "faf0e6",
      magenta: "f0f",
      maroon: "800000",
      mediumaquamarine: "66cdaa",
      mediumblue: "0000cd",
      mediumorchid: "ba55d3",
      mediumpurple: "9370db",
      mediumseagreen: "3cb371",
      mediumslateblue: "7b68ee",
      mediumspringgreen: "00fa9a",
      mediumturquoise: "48d1cc",
      mediumvioletred: "c71585",
      midnightblue: "191970",
      mintcream: "f5fffa",
      mistyrose: "ffe4e1",
      moccasin: "ffe4b5",
      navajowhite: "ffdead",
      navy: "000080",
      oldlace: "fdf5e6",
      olive: "808000",
      olivedrab: "6b8e23",
      orange: "ffa500",
      orangered: "ff4500",
      orchid: "da70d6",
      palegoldenrod: "eee8aa",
      palegreen: "98fb98",
      paleturquoise: "afeeee",
      palevioletred: "db7093",
      papayawhip: "ffefd5",
      peachpuff: "ffdab9",
      peru: "cd853f",
      pink: "ffc0cb",
      plum: "dda0dd",
      powderblue: "b0e0e6",
      purple: "800080",
      rebeccapurple: "639",
      red: "f00",
      rosybrown: "bc8f8f",
      royalblue: "4169e1",
      saddlebrown: "8b4513",
      salmon: "fa8072",
      sandybrown: "f4a460",
      seagreen: "2e8b57",
      seashell: "fff5ee",
      sienna: "a0522d",
      silver: "c0c0c0",
      skyblue: "87ceeb",
      slateblue: "6a5acd",
      slategray: "708090",
      slategrey: "708090",
      snow: "fffafa",
      springgreen: "00ff7f",
      steelblue: "4682b4",
      tan: "d2b48c",
      teal: "008080",
      thistle: "d8bfd8",
      tomato: "ff6347",
      turquoise: "40e0d0",
      violet: "ee82ee",
      wheat: "f5deb3",
      white: "fff",
      whitesmoke: "f5f5f5",
      yellow: "ff0",
      yellowgreen: "9acd32",
    };
    function Y2(e) {
      if (typeof e != "string") return e;
      var t = e.toLowerCase();
      return Po[t] ? "#" + Po[t] : e;
    }
    var Q2 = /^#[a-fA-F0-9]{6}$/,
      K2 = /^#[a-fA-F0-9]{8}$/,
      J2 = /^#[a-fA-F0-9]{3}$/,
      X2 = /^#[a-fA-F0-9]{4}$/,
      vi = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
      em =
        /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
      tm =
        /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
      nm =
        /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
    function Ts(e) {
      if (typeof e != "string") throw new pt(3);
      var t = Y2(e);
      if (t.match(Q2))
        return {
          red: parseInt("" + t[1] + t[2], 16),
          green: parseInt("" + t[3] + t[4], 16),
          blue: parseInt("" + t[5] + t[6], 16),
        };
      if (t.match(K2)) {
        var n = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
        return {
          red: parseInt("" + t[1] + t[2], 16),
          green: parseInt("" + t[3] + t[4], 16),
          blue: parseInt("" + t[5] + t[6], 16),
          alpha: n,
        };
      }
      if (t.match(J2))
        return {
          red: parseInt("" + t[1] + t[1], 16),
          green: parseInt("" + t[2] + t[2], 16),
          blue: parseInt("" + t[3] + t[3], 16),
        };
      if (t.match(X2)) {
        var r = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
        return {
          red: parseInt("" + t[1] + t[1], 16),
          green: parseInt("" + t[2] + t[2], 16),
          blue: parseInt("" + t[3] + t[3], 16),
          alpha: r,
        };
      }
      var i = vi.exec(t);
      if (i)
        return {
          red: parseInt("" + i[1], 10),
          green: parseInt("" + i[2], 10),
          blue: parseInt("" + i[3], 10),
        };
      var l = em.exec(t.substring(0, 50));
      if (l)
        return {
          red: parseInt("" + l[1], 10),
          green: parseInt("" + l[2], 10),
          blue: parseInt("" + l[3], 10),
          alpha: parseFloat("" + l[4]) > 1 ? parseFloat("" + l[4]) / 100 : parseFloat("" + l[4]),
        };
      var o = tm.exec(t);
      if (o) {
        var s = parseInt("" + o[1], 10),
          c = parseInt("" + o[2], 10) / 100,
          d = parseInt("" + o[3], 10) / 100,
          u = "rgb(" + ra(s, c, d) + ")",
          m = vi.exec(u);
        if (!m) throw new pt(4, t, u);
        return {
          red: parseInt("" + m[1], 10),
          green: parseInt("" + m[2], 10),
          blue: parseInt("" + m[3], 10),
        };
      }
      var p = nm.exec(t.substring(0, 50));
      if (p) {
        var f = parseInt("" + p[1], 10),
          g = parseInt("" + p[2], 10) / 100,
          v = parseInt("" + p[3], 10) / 100,
          k = "rgb(" + ra(f, g, v) + ")",
          E = vi.exec(k);
        if (!E) throw new pt(4, t, k);
        return {
          red: parseInt("" + E[1], 10),
          green: parseInt("" + E[2], 10),
          blue: parseInt("" + E[3], 10),
          alpha: parseFloat("" + p[4]) > 1 ? parseFloat("" + p[4]) / 100 : parseFloat("" + p[4]),
        };
      }
      throw new pt(5);
    }
    function am(e) {
      var t = e.red / 255,
        n = e.green / 255,
        r = e.blue / 255,
        i = Math.max(t, n, r),
        l = Math.min(t, n, r),
        o = (i + l) / 2;
      if (i === l)
        return e.alpha !== void 0
          ? { hue: 0, saturation: 0, lightness: o, alpha: e.alpha }
          : { hue: 0, saturation: 0, lightness: o };
      var s,
        c = i - l,
        d = o > 0.5 ? c / (2 - i - l) : c / (i + l);
      switch (i) {
        case t:
          s = (n - r) / c + (n < r ? 6 : 0);
          break;
        case n:
          s = (r - t) / c + 2;
          break;
        default:
          s = (t - n) / c + 4;
          break;
      }
      return (
        (s *= 60),
        e.alpha !== void 0
          ? { hue: s, saturation: d, lightness: o, alpha: e.alpha }
          : { hue: s, saturation: d, lightness: o }
      );
    }
    function As(e) {
      return am(Ts(e));
    }
    var rm = function (e) {
        return e.length === 7 && e[1] === e[2] && e[3] === e[4] && e[5] === e[6]
          ? "#" + e[1] + e[3] + e[5]
          : e;
      },
      Yi = rm;
    function $t(e) {
      var t = e.toString(16);
      return t.length === 1 ? "0" + t : t;
    }
    function yi(e) {
      return $t(Math.round(e * 255));
    }
    function im(e, t, n) {
      return Yi("#" + yi(e) + yi(t) + yi(n));
    }
    function cr(e, t, n) {
      return ra(e, t, n, im);
    }
    function lm(e, t, n) {
      if (typeof e == "number" && typeof t == "number" && typeof n == "number") return cr(e, t, n);
      if (typeof e == "object" && t === void 0 && n === void 0)
        return cr(e.hue, e.saturation, e.lightness);
      throw new pt(1);
    }
    function om(e, t, n, r) {
      if (
        typeof e == "number" &&
        typeof t == "number" &&
        typeof n == "number" &&
        typeof r == "number"
      )
        return r >= 1 ? cr(e, t, n) : "rgba(" + ra(e, t, n) + "," + r + ")";
      if (typeof e == "object" && t === void 0 && n === void 0 && r === void 0)
        return e.alpha >= 1
          ? cr(e.hue, e.saturation, e.lightness)
          : "rgba(" + ra(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
      throw new pt(2);
    }
    function Qi(e, t, n) {
      if (typeof e == "number" && typeof t == "number" && typeof n == "number")
        return Yi("#" + $t(e) + $t(t) + $t(n));
      if (typeof e == "object" && t === void 0 && n === void 0)
        return Yi("#" + $t(e.red) + $t(e.green) + $t(e.blue));
      throw new pt(6);
    }
    function Ki(e, t, n, r) {
      if (typeof e == "string" && typeof t == "number") {
        var i = Ts(e);
        return "rgba(" + i.red + "," + i.green + "," + i.blue + "," + t + ")";
      } else {
        if (
          typeof e == "number" &&
          typeof t == "number" &&
          typeof n == "number" &&
          typeof r == "number"
        )
          return r >= 1 ? Qi(e, t, n) : "rgba(" + e + "," + t + "," + n + "," + r + ")";
        if (typeof e == "object" && t === void 0 && n === void 0 && r === void 0)
          return e.alpha >= 1
            ? Qi(e.red, e.green, e.blue)
            : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
      }
      throw new pt(7);
    }
    var sm = function (e) {
        return (
          typeof e.red == "number" &&
          typeof e.green == "number" &&
          typeof e.blue == "number" &&
          (typeof e.alpha != "number" || typeof e.alpha > "u")
        );
      },
      cm = function (e) {
        return (
          typeof e.red == "number" &&
          typeof e.green == "number" &&
          typeof e.blue == "number" &&
          typeof e.alpha == "number"
        );
      },
      dm = function (e) {
        return (
          typeof e.hue == "number" &&
          typeof e.saturation == "number" &&
          typeof e.lightness == "number" &&
          (typeof e.alpha != "number" || typeof e.alpha > "u")
        );
      },
      um = function (e) {
        return (
          typeof e.hue == "number" &&
          typeof e.saturation == "number" &&
          typeof e.lightness == "number" &&
          typeof e.alpha == "number"
        );
      };
    function Fs(e) {
      if (typeof e != "object") throw new pt(8);
      if (cm(e)) return Ki(e);
      if (sm(e)) return Qi(e);
      if (um(e)) return om(e);
      if (dm(e)) return lm(e);
      throw new pt(8);
    }
    function Os(e, t, n) {
      return function () {
        var r = n.concat(Array.prototype.slice.call(arguments));
        return r.length >= t ? e.apply(this, r) : Os(e, t, r);
      };
    }
    function Ls(e) {
      return Os(e, e.length, []);
    }
    function Rs(e, t, n) {
      return Math.max(e, Math.min(t, n));
    }
    function mm(e, t) {
      if (t === "transparent") return t;
      var n = As(t);
      return Fs(sr({}, n, { lightness: Rs(0, 1, n.lightness - parseFloat(e)) }));
    }
    var pm = Ls(mm),
      Wt = pm;
    function hm(e, t) {
      if (t === "transparent") return t;
      var n = As(t);
      return Fs(sr({}, n, { lightness: Rs(0, 1, n.lightness + parseFloat(e)) }));
    }
    var fm = Ls(hm),
      Qa = fm,
      V = {
        primary: "#FF4785",
        secondary: "#029CFD",
        tertiary: "#E3E6E8",
        orange: "#FC521F",
        gold: "#FFAE00",
        green: "#66BF3C",
        seafoam: "#37D5D3",
        purple: "#6F2CAC",
        ultraviolet: "#2A0481",
        red: "#ff4400",
        bluelight: "#E3F3FF",
        bluelighter: "#F5FBFF",
        lightest: "#FFFFFF",
        lighter: "#F7FAFC",
        light: "#EEF3F6",
        mediumlight: "#ECF4F9",
        medium: "#D9E8F2",
        mediumdark: "#73828C",
        dark: "#5C6870",
        darker: "#454E54",
        darkest: "#2E3438",
        tr10: "rgba(0, 0, 0, 0.1)",
        tr5: "rgba(0, 0, 0, 0.05)",
        border: "hsla(203, 50%, 30%, 0.15)",
        positive: "#448028",
        negative: "#D43900",
        warning: "#A15C20",
        selected: "#0271B6",
      },
      Al = {
        padding: { small: 10, medium: 20, large: 30 },
        borderRadius: { small: 5, default: 10 },
      },
      P = {
        type: {
          primary:
            'var(--nunito-sans, "Nunito Sans"), "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
          code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
        },
        weight: { regular: "400", bold: "700", extrabold: "800" },
        size: { s1: 12, s2: 14, s3: 16, m1: 20, m2: 24, m3: 28, l1: 32, l2: 40, l3: 48, code: 90 },
      },
      Pa = 600,
      Va = 5.55555;
    ue({
      padding: `0 ${Al.padding.medium}px`,
      [`@media (min-width: ${Pa * 1}px)`]: { margin: `0 ${Va * 1}%` },
      [`@media (min-width: ${Pa * 2}px)`]: { margin: `0 ${Va * 2}%` },
      [`@media (min-width: ${Pa * 3}px)`]: { margin: `0 ${Va * 3}%` },
      [`@media (min-width: ${Pa * 4}px)`]: { margin: `0 ${Va * 4}%` },
    });
    ue({
      border: `1px solid ${V.border}`,
      borderRadius: `${Al.borderRadius.small}px`,
      transition: "background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out",
      "&:hover, &.__hover": {
        borderColor: `${Ki(V.secondary, 0.5)}`,
        transform: "translate3d(0, -3px, 0)",
        boxShadow: "rgba(0, 0, 0, 0.08) 0 3px 10px 0",
      },
      "&:active, &.__active": {
        borderColor: `${Ki(V.secondary, 1)}`,
        transform: "translate3d(0, 0, 0)",
      },
    });
    ue({ fontSize: P.size.l3, fontWeight: P.weight.bold }),
      ue({ fontSize: P.size.l2, fontWeight: P.weight.bold }),
      ue({ fontSize: P.size.l1, fontWeight: P.weight.bold }),
      ue({ fontSize: P.size.m3, fontWeight: P.weight.bold }),
      ue({ fontSize: P.size.m2, fontWeight: P.weight.bold }),
      ue({ fontSize: P.size.m1, fontWeight: P.weight.bold }),
      ue({ fontSize: P.size.s3, fontWeight: P.weight.bold }),
      ue({ fontSize: P.size.s2, fontWeight: P.weight.bold });
    ue({
      fontSize: 14,
      fontWeight: P.weight.extrabold,
      lineHeight: "18px",
      letterSpacing: "0.38em",
    }),
      ue({
        fontSize: 11,
        fontWeight: P.weight.extrabold,
        lineHeight: "16px",
        letterSpacing: "0.38em",
      });
    ue({ fontSize: 14, fontWeight: P.weight.bold, lineHeight: "18px" }),
      ue({ fontSize: 14, fontWeight: P.weight.regular, lineHeight: "18px" }),
      ue({ fontSize: P.size.s3, fontWeight: P.weight.bold, lineHeight: "24px" }),
      ue({ fontSize: P.size.s1, fontWeight: P.weight.regular, lineHeight: "18px" }),
      ue({ fontSize: P.size.s2, fontWeight: P.weight.bold, lineHeight: "20px" }),
      ue({ fontSize: P.size.s1, fontWeight: P.weight.bold, lineHeight: "18px" }),
      ue({ fontSize: P.size.s3, fontWeight: P.weight.regular, lineHeight: "24px" }),
      ue({ fontSize: P.size.s2, fontWeight: P.weight.regular, lineHeight: "20px" });
    ue({
      fontFamily: P.type.code,
      fontSize: P.size.s2,
      fontWeight: P.weight.regular,
      lineHeight: "17px",
    }),
      ue({
        fontFamily: P.type.code,
        fontSize: P.size.s1,
        fontWeight: P.weight.regular,
        lineHeight: "14px",
      });
    var Is = Ot({ from: { transform: "rotate(0deg)" }, to: { transform: "rotate(360deg)" } }),
      Zs = Ot({ "0%, 100%": { opacity: 1 }, "50%": { opacity: 0.4 } });
    Ot({
      "0%": { transform: "translateY(1px)" },
      "25%": { transform: "translateY(0px)" },
      "50%": { transform: "translateY(-3px)" },
      "100%": { transform: "translateY(1px)" },
    });
    var Bs = Ot({
      "0%, 100%": { transform: "translate3d(0,0,0)" },
      "12.5%, 62.5%": { transform: "translate3d(-4px,0,0)" },
      "37.5%, 87.5%": { transform: "translate3d(4px,0,0)" },
    });
    Ot({
      "0%": { transform: "rotate(-3deg)" },
      "1.68421%": { transform: "rotate(3deg)" },
      "2.10526%": { transform: "rotate(6deg)" },
      "3.78947%": { transform: "rotate(-6deg)" },
      "4.21053%": { transform: "rotate(-6deg)" },
      "5.89474%": { transform: "rotate(6deg)" },
      "6.31579%": { transform: "rotate(6deg)" },
      "8%": { transform: "rotate(-6deg)" },
      "8.42105%": { transform: "rotate(-6deg)" },
      "10.10526%": { transform: "rotate(6deg)" },
      "10.52632%": { transform: "rotate(6deg)" },
      "12.21053%": { transform: "rotate(-6deg)" },
      "12.63158%": { transform: "rotate(-6deg)" },
      "14.31579%": { transform: "rotate(6deg)" },
      "15.78947%": { transform: "rotate(0deg)" },
      "100%": { transform: "rotate(0deg)" },
    });
    var gm = ue({
        animation: `${Zs} 1.5s ease-in-out infinite`,
        background: V.tr5,
        color: "transparent",
        cursor: "progress",
      }),
      vm = {
        kind: "Document",
        definitions: [
          {
            kind: "FragmentDefinition",
            name: { kind: "Name", value: "StatusTestFields" },
            typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Test" } },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "result" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "story" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "Field", name: { kind: "Name", value: "storyId" } }],
                  },
                },
              ],
            },
          },
        ],
      },
      ym = {
        kind: "Document",
        definitions: [
          {
            kind: "FragmentDefinition",
            name: { kind: "Name", value: "LastBuildOnBranchTestFields" },
            typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Test" } },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "result" } },
              ],
            },
          },
        ],
      },
      Em = {
        kind: "Document",
        definitions: [
          {
            kind: "FragmentDefinition",
            name: { kind: "Name", value: "LastBuildOnBranchBuildFields" },
            typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Build" } },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "committedAt" } },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "StartedBuild" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "testsForStatus" },
                        name: { kind: "Name", value: "tests" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "first" },
                            value: { kind: "IntValue", value: "1000" },
                          },
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "statuses" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "testStatuses" },
                            },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nodes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: { kind: "Name", value: "StatusTestFields" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "testsForStory" },
                        name: { kind: "Name", value: "tests" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "storyId" },
                            value: { kind: "Variable", name: { kind: "Name", value: "storyId" } },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nodes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: { kind: "Name", value: "LastBuildOnBranchTestFields" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CompletedBuild" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "result" } },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "testsForStatus" },
                        name: { kind: "Name", value: "tests" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "first" },
                            value: { kind: "IntValue", value: "1000" },
                          },
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "statuses" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "testStatuses" },
                            },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nodes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: { kind: "Name", value: "StatusTestFields" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "testsForStory" },
                        name: { kind: "Name", value: "tests" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "storyId" },
                            value: { kind: "Variable", name: { kind: "Name", value: "storyId" } },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nodes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: { kind: "Name", value: "LastBuildOnBranchTestFields" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "FragmentDefinition",
            name: { kind: "Name", value: "StatusTestFields" },
            typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Test" } },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "result" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "story" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "Field", name: { kind: "Name", value: "storyId" } }],
                  },
                },
              ],
            },
          },
          {
            kind: "FragmentDefinition",
            name: { kind: "Name", value: "LastBuildOnBranchTestFields" },
            typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Test" } },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "result" } },
              ],
            },
          },
        ],
      },
      bm = {
        kind: "Document",
        definitions: [
          {
            kind: "FragmentDefinition",
            name: { kind: "Name", value: "StoryTestFields" },
            typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Test" } },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "result" } },
                { kind: "Field", name: { kind: "Name", value: "webUrl" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "comparisons" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "result" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "browser" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            { kind: "Field", name: { kind: "Name", value: "key" } },
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "version" } },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "captureDiff" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "diffImage" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "signed" },
                                  value: { kind: "BooleanValue", value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "imageUrl" } },
                                  { kind: "Field", name: { kind: "Name", value: "imageWidth" } },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "focusImage" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "signed" },
                                  value: { kind: "BooleanValue", value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "imageUrl" } },
                                  { kind: "Field", name: { kind: "Name", value: "imageWidth" } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "headCapture" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "captureImage" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "signed" },
                                  value: { kind: "BooleanValue", value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "backgroundColor" },
                                  },
                                  { kind: "Field", name: { kind: "Name", value: "imageUrl" } },
                                  { kind: "Field", name: { kind: "Name", value: "imageWidth" } },
                                  { kind: "Field", name: { kind: "Name", value: "imageHeight" } },
                                  { kind: "Field", name: { kind: "Name", value: "thumbnailUrl" } },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "captureError" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "kind" } },
                                  {
                                    kind: "InlineFragment",
                                    typeCondition: {
                                      kind: "NamedType",
                                      name: {
                                        kind: "Name",
                                        value: "CaptureErrorInteractionFailure",
                                      },
                                    },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        { kind: "Field", name: { kind: "Name", value: "error" } },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "InlineFragment",
                                    typeCondition: {
                                      kind: "NamedType",
                                      name: { kind: "Name", value: "CaptureErrorJSError" },
                                    },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        { kind: "Field", name: { kind: "Name", value: "error" } },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "InlineFragment",
                                    typeCondition: {
                                      kind: "NamedType",
                                      name: { kind: "Name", value: "CaptureErrorFailedJS" },
                                    },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        { kind: "Field", name: { kind: "Name", value: "error" } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "baseCapture" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "captureImage" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "signed" },
                                  value: { kind: "BooleanValue", value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "imageUrl" } },
                                  { kind: "Field", name: { kind: "Name", value: "imageWidth" } },
                                  { kind: "Field", name: { kind: "Name", value: "imageHeight" } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "mode" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "globals" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "story" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "storyId" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "component" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "Field", name: { kind: "Name", value: "name" } }],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
      km = {
        kind: "Document",
        definitions: [
          {
            kind: "FragmentDefinition",
            name: { kind: "Name", value: "SelectedBuildFields" },
            typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Build" } },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "number" } },
                { kind: "Field", name: { kind: "Name", value: "branch" } },
                { kind: "Field", name: { kind: "Name", value: "commit" } },
                { kind: "Field", name: { kind: "Name", value: "committedAt" } },
                { kind: "Field", name: { kind: "Name", value: "uncommittedHash" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "StartedBuild" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "startedAt" } },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "testsForStory" },
                        name: { kind: "Name", value: "tests" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "storyId" },
                            value: { kind: "Variable", name: { kind: "Name", value: "storyId" } },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nodes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: { kind: "Name", value: "StoryTestFields" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CompletedBuild" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "startedAt" } },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "testsForStory" },
                        name: { kind: "Name", value: "tests" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "storyId" },
                            value: { kind: "Variable", name: { kind: "Name", value: "storyId" } },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nodes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: { kind: "Name", value: "StoryTestFields" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "FragmentDefinition",
            name: { kind: "Name", value: "StoryTestFields" },
            typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Test" } },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "result" } },
                { kind: "Field", name: { kind: "Name", value: "webUrl" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "comparisons" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "result" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "browser" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            { kind: "Field", name: { kind: "Name", value: "key" } },
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "version" } },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "captureDiff" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "diffImage" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "signed" },
                                  value: { kind: "BooleanValue", value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "imageUrl" } },
                                  { kind: "Field", name: { kind: "Name", value: "imageWidth" } },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "focusImage" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "signed" },
                                  value: { kind: "BooleanValue", value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "imageUrl" } },
                                  { kind: "Field", name: { kind: "Name", value: "imageWidth" } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "headCapture" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "captureImage" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "signed" },
                                  value: { kind: "BooleanValue", value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "backgroundColor" },
                                  },
                                  { kind: "Field", name: { kind: "Name", value: "imageUrl" } },
                                  { kind: "Field", name: { kind: "Name", value: "imageWidth" } },
                                  { kind: "Field", name: { kind: "Name", value: "imageHeight" } },
                                  { kind: "Field", name: { kind: "Name", value: "thumbnailUrl" } },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "captureError" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "kind" } },
                                  {
                                    kind: "InlineFragment",
                                    typeCondition: {
                                      kind: "NamedType",
                                      name: {
                                        kind: "Name",
                                        value: "CaptureErrorInteractionFailure",
                                      },
                                    },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        { kind: "Field", name: { kind: "Name", value: "error" } },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "InlineFragment",
                                    typeCondition: {
                                      kind: "NamedType",
                                      name: { kind: "Name", value: "CaptureErrorJSError" },
                                    },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        { kind: "Field", name: { kind: "Name", value: "error" } },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "InlineFragment",
                                    typeCondition: {
                                      kind: "NamedType",
                                      name: { kind: "Name", value: "CaptureErrorFailedJS" },
                                    },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        { kind: "Field", name: { kind: "Name", value: "error" } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "baseCapture" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "captureImage" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "signed" },
                                  value: { kind: "BooleanValue", value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "imageUrl" } },
                                  { kind: "Field", name: { kind: "Name", value: "imageWidth" } },
                                  { kind: "Field", name: { kind: "Name", value: "imageHeight" } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "mode" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "globals" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "story" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "storyId" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "component" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "Field", name: { kind: "Name", value: "name" } }],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
      wm = {
        kind: "Document",
        definitions: [
          {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "VisualTestsProjectCountQuery" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "viewer" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "projectCount" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "accounts" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "newProjectUrl" } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
      Cm = {
        kind: "Document",
        definitions: [
          {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "SelectProjectsQuery" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "viewer" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "accounts" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "avatarUrl" } },
                            { kind: "Field", name: { kind: "Name", value: "newProjectUrl" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "projects" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "id" } },
                                  { kind: "Field", name: { kind: "Name", value: "name" } },
                                  { kind: "Field", name: { kind: "Name", value: "webUrl" } },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "lastBuild" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        { kind: "Field", name: { kind: "Name", value: "branch" } },
                                        { kind: "Field", name: { kind: "Name", value: "number" } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
      Sm = {
        kind: "Document",
        definitions: [
          {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "ProjectQuery" },
            variableDefinitions: [
              {
                kind: "VariableDefinition",
                variable: { kind: "Variable", name: { kind: "Name", value: "projectId" } },
                type: {
                  kind: "NonNullType",
                  type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "project" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "id" },
                      value: { kind: "Variable", name: { kind: "Name", value: "projectId" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "webUrl" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "lastBuild" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "branch" } },
                            { kind: "Field", name: { kind: "Name", value: "number" } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
      xm = {
        kind: "Document",
        definitions: [
          {
            kind: "OperationDefinition",
            operation: "mutation",
            name: { kind: "Name", value: "UpdateUserPreferences" },
            variableDefinitions: [
              {
                kind: "VariableDefinition",
                variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
                type: {
                  kind: "NonNullType",
                  type: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "UserPreferencesInput" },
                  },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "updateUserPreferences" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "input" },
                      value: { kind: "Variable", name: { kind: "Name", value: "input" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedPreferences" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "vtaOnboarding" } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
      Nm = {
        kind: "Document",
        definitions: [
          {
            kind: "OperationDefinition",
            operation: "query",
            name: { kind: "Name", value: "AddonVisualTestsBuild" },
            variableDefinitions: [
              {
                kind: "VariableDefinition",
                variable: { kind: "Variable", name: { kind: "Name", value: "projectId" } },
                type: {
                  kind: "NonNullType",
                  type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
                },
              },
              {
                kind: "VariableDefinition",
                variable: { kind: "Variable", name: { kind: "Name", value: "branch" } },
                type: {
                  kind: "NonNullType",
                  type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
                },
              },
              {
                kind: "VariableDefinition",
                variable: { kind: "Variable", name: { kind: "Name", value: "gitUserEmailHash" } },
                type: {
                  kind: "NonNullType",
                  type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
                },
              },
              {
                kind: "VariableDefinition",
                variable: {
                  kind: "Variable",
                  name: { kind: "Name", value: "repositoryOwnerName" },
                },
                type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
              },
              {
                kind: "VariableDefinition",
                variable: { kind: "Variable", name: { kind: "Name", value: "storyId" } },
                type: {
                  kind: "NonNullType",
                  type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
                },
              },
              {
                kind: "VariableDefinition",
                variable: { kind: "Variable", name: { kind: "Name", value: "testStatuses" } },
                type: {
                  kind: "NonNullType",
                  type: {
                    kind: "ListType",
                    type: {
                      kind: "NonNullType",
                      type: { kind: "NamedType", name: { kind: "Name", value: "TestStatus" } },
                    },
                  },
                },
              },
              {
                kind: "VariableDefinition",
                variable: { kind: "Variable", name: { kind: "Name", value: "selectedBuildId" } },
                type: {
                  kind: "NonNullType",
                  type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
                },
              },
              {
                kind: "VariableDefinition",
                variable: { kind: "Variable", name: { kind: "Name", value: "hasSelectedBuildId" } },
                type: {
                  kind: "NonNullType",
                  type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "project" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "id" },
                      value: { kind: "Variable", name: { kind: "Name", value: "projectId" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "manageUrl" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "account" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "billingUrl" } },
                            { kind: "Field", name: { kind: "Name", value: "suspensionReason" } },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "features" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "Field", name: { kind: "Name", value: "uiTests" } }],
                        },
                      },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "lastBuildOnBranch" },
                        name: { kind: "Name", value: "lastBuild" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "branches" },
                            value: {
                              kind: "ListValue",
                              values: [
                                { kind: "Variable", name: { kind: "Name", value: "branch" } },
                              ],
                            },
                          },
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "repositoryOwnerName" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "repositoryOwnerName" },
                            },
                          },
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "localBuilds" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "localBuildEmailHash" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "gitUserEmailHash" },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "LastBuildOnBranchBuildFields" },
                            },
                            {
                              kind: "FragmentSpread",
                              name: { kind: "Name", value: "SelectedBuildFields" },
                              directives: [
                                {
                                  kind: "Directive",
                                  name: { kind: "Name", value: "skip" },
                                  arguments: [
                                    {
                                      kind: "Argument",
                                      name: { kind: "Name", value: "if" },
                                      value: {
                                        kind: "Variable",
                                        name: { kind: "Name", value: "hasSelectedBuildId" },
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "lastBuild" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            { kind: "Field", name: { kind: "Name", value: "slug" } },
                            { kind: "Field", name: { kind: "Name", value: "branch" } },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "selectedBuild" },
                  name: { kind: "Name", value: "build" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "id" },
                      value: { kind: "Variable", name: { kind: "Name", value: "selectedBuildId" } },
                    },
                  ],
                  directives: [
                    {
                      kind: "Directive",
                      name: { kind: "Name", value: "include" },
                      arguments: [
                        {
                          kind: "Argument",
                          name: { kind: "Name", value: "if" },
                          value: {
                            kind: "Variable",
                            name: { kind: "Name", value: "hasSelectedBuildId" },
                          },
                        },
                      ],
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "SelectedBuildFields" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "viewer" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "preferences" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "vtaOnboarding" } },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "projectMembership" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "projectId" },
                            value: { kind: "Variable", name: { kind: "Name", value: "projectId" } },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              alias: { kind: "Name", value: "userCanReview" },
                              name: { kind: "Name", value: "meetsAccessLevel" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "minimumAccessLevel" },
                                  value: { kind: "EnumValue", value: "REVIEWER" },
                                },
                              ],
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "FragmentDefinition",
            name: { kind: "Name", value: "StatusTestFields" },
            typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Test" } },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "result" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "story" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "Field", name: { kind: "Name", value: "storyId" } }],
                  },
                },
              ],
            },
          },
          {
            kind: "FragmentDefinition",
            name: { kind: "Name", value: "LastBuildOnBranchTestFields" },
            typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Test" } },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "result" } },
              ],
            },
          },
          {
            kind: "FragmentDefinition",
            name: { kind: "Name", value: "StoryTestFields" },
            typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Test" } },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "result" } },
                { kind: "Field", name: { kind: "Name", value: "webUrl" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "comparisons" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "result" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "browser" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            { kind: "Field", name: { kind: "Name", value: "key" } },
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                            { kind: "Field", name: { kind: "Name", value: "version" } },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "captureDiff" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "diffImage" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "signed" },
                                  value: { kind: "BooleanValue", value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "imageUrl" } },
                                  { kind: "Field", name: { kind: "Name", value: "imageWidth" } },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "focusImage" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "signed" },
                                  value: { kind: "BooleanValue", value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "imageUrl" } },
                                  { kind: "Field", name: { kind: "Name", value: "imageWidth" } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "headCapture" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "captureImage" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "signed" },
                                  value: { kind: "BooleanValue", value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "backgroundColor" },
                                  },
                                  { kind: "Field", name: { kind: "Name", value: "imageUrl" } },
                                  { kind: "Field", name: { kind: "Name", value: "imageWidth" } },
                                  { kind: "Field", name: { kind: "Name", value: "imageHeight" } },
                                  { kind: "Field", name: { kind: "Name", value: "thumbnailUrl" } },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "captureError" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "kind" } },
                                  {
                                    kind: "InlineFragment",
                                    typeCondition: {
                                      kind: "NamedType",
                                      name: {
                                        kind: "Name",
                                        value: "CaptureErrorInteractionFailure",
                                      },
                                    },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        { kind: "Field", name: { kind: "Name", value: "error" } },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "InlineFragment",
                                    typeCondition: {
                                      kind: "NamedType",
                                      name: { kind: "Name", value: "CaptureErrorJSError" },
                                    },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        { kind: "Field", name: { kind: "Name", value: "error" } },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "InlineFragment",
                                    typeCondition: {
                                      kind: "NamedType",
                                      name: { kind: "Name", value: "CaptureErrorFailedJS" },
                                    },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        { kind: "Field", name: { kind: "Name", value: "error" } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "baseCapture" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "captureImage" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "signed" },
                                  value: { kind: "BooleanValue", value: !0 },
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "imageUrl" } },
                                  { kind: "Field", name: { kind: "Name", value: "imageWidth" } },
                                  { kind: "Field", name: { kind: "Name", value: "imageHeight" } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "mode" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "globals" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "story" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "storyId" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "component" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "Field", name: { kind: "Name", value: "name" } }],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "FragmentDefinition",
            name: { kind: "Name", value: "LastBuildOnBranchBuildFields" },
            typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Build" } },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "committedAt" } },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "StartedBuild" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "testsForStatus" },
                        name: { kind: "Name", value: "tests" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "first" },
                            value: { kind: "IntValue", value: "1000" },
                          },
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "statuses" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "testStatuses" },
                            },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nodes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: { kind: "Name", value: "StatusTestFields" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "testsForStory" },
                        name: { kind: "Name", value: "tests" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "storyId" },
                            value: { kind: "Variable", name: { kind: "Name", value: "storyId" } },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nodes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: { kind: "Name", value: "LastBuildOnBranchTestFields" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CompletedBuild" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "result" } },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "testsForStatus" },
                        name: { kind: "Name", value: "tests" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "first" },
                            value: { kind: "IntValue", value: "1000" },
                          },
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "statuses" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "testStatuses" },
                            },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nodes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: { kind: "Name", value: "StatusTestFields" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "testsForStory" },
                        name: { kind: "Name", value: "tests" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "storyId" },
                            value: { kind: "Variable", name: { kind: "Name", value: "storyId" } },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nodes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: { kind: "Name", value: "LastBuildOnBranchTestFields" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "FragmentDefinition",
            name: { kind: "Name", value: "SelectedBuildFields" },
            typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Build" } },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "number" } },
                { kind: "Field", name: { kind: "Name", value: "branch" } },
                { kind: "Field", name: { kind: "Name", value: "commit" } },
                { kind: "Field", name: { kind: "Name", value: "committedAt" } },
                { kind: "Field", name: { kind: "Name", value: "uncommittedHash" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "StartedBuild" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "startedAt" } },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "testsForStory" },
                        name: { kind: "Name", value: "tests" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "storyId" },
                            value: { kind: "Variable", name: { kind: "Name", value: "storyId" } },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nodes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: { kind: "Name", value: "StoryTestFields" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "CompletedBuild" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "startedAt" } },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "testsForStory" },
                        name: { kind: "Name", value: "tests" },
                        arguments: [
                          {
                            kind: "Argument",
                            name: { kind: "Name", value: "storyId" },
                            value: { kind: "Variable", name: { kind: "Name", value: "storyId" } },
                          },
                        ],
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nodes" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: { kind: "Name", value: "StoryTestFields" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
      _m = {
        kind: "Document",
        definitions: [
          {
            kind: "OperationDefinition",
            operation: "mutation",
            name: { kind: "Name", value: "ReviewTest" },
            variableDefinitions: [
              {
                kind: "VariableDefinition",
                variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
                type: {
                  kind: "NonNullType",
                  type: { kind: "NamedType", name: { kind: "Name", value: "ReviewTestInput" } },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "reviewTest" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "input" },
                      value: { kind: "Variable", name: { kind: "Name", value: "input" } },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedTests" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            { kind: "Field", name: { kind: "Name", value: "status" } },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "userErrors" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "InlineFragment",
                              typeCondition: {
                                kind: "NamedType",
                                name: { kind: "Name", value: "UserError" },
                              },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "__typename" } },
                                  { kind: "Field", name: { kind: "Name", value: "message" } },
                                ],
                              },
                            },
                            {
                              kind: "InlineFragment",
                              typeCondition: {
                                kind: "NamedType",
                                name: { kind: "Name", value: "BuildSupersededError" },
                              },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "build" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        { kind: "Field", name: { kind: "Name", value: "id" } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "InlineFragment",
                              typeCondition: {
                                kind: "NamedType",
                                name: { kind: "Name", value: "TestUnreviewableError" },
                              },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "test" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        { kind: "Field", name: { kind: "Name", value: "id" } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
      Ps = w.div(
        ({ status: e, theme: t }) => ({
          display: "inline-block",
          width: 6,
          height: 6,
          borderRadius: "50%",
          background:
            e &&
            {
              IN_PROGRESS: "transparent",
              PASSED: t.color.positive,
              PENDING: t.color.gold,
              ACCEPTED: t.color.positive,
              DENIED: t.color.positive,
              BROKEN: t.color.negative,
              FAILED: t.color.negative,
              EQUAL: t.color.positive,
              FIXED: t.color.positive,
              ADDED: t.color.gold,
              CHANGED: t.color.gold,
              REMOVED: t.color.gold,
              CAPTURE_ERROR: t.color.negative,
              SYSTEM_ERROR: t.color.negative,
              positive: t.color.positive,
              negative: t.color.negative,
              warning: t.color.gold,
              notification: t.color.secondary,
            }[e],
        }),
        ({ overlay: e, theme: t }) =>
          e &&
          ue({
            position: "absolute",
            top: -1,
            right: -2,
            width: 7,
            height: 7,
            border: "1px solid rgba(0, 0, 0, 0.1)",
            boxShadow: `0 0 0 2px var(--bg-color, ${t.background.bar})`,
            boxSizing: "border-box",
          })
      ),
      Vs = ({ status: e }) => a.createElement(Ps, { status: e }),
      Mm = w.div({
        position: "relative",
        display: "inline-flex",
        justifyContent: "center",
        "img, svg": { verticalAlign: "top" },
      }),
      dr = ({ status: e, children: t }) =>
        a.createElement(Mm, null, t, a.createElement(Ps, { overlay: !0, status: e })),
      Ae = w(io)(({ theme: e }) => ({ marginBottom: "-4px", marginTop: "-4px", left: -8 })),
      Tm = w.div(({ theme: e }) => ({
        width: 220,
        padding: 3,
        color: e.base === "light" ? e.color.defaultText : e.color.light,
        "& > div": { margin: 7 },
      })),
      Fl = w.div(({ theme: e }) => ({
        height: 5,
        background: e.background.hoverable,
        borderRadius: 5,
        overflow: "hidden",
      })),
      Ds = w(Fl)(({ theme: e }) => ({
        background: e.color.secondary,
        transition: "width 3s ease-out",
      })),
      Am = Ot({ "0%": { transform: "rotate(0deg)" }, "100%": { transform: "rotate(360deg)" } }),
      Ei = w.svg(
        ({ progress: e, theme: t }) => ({
          position: "absolute",
          width: "24px!important",
          height: "24px!important",
          transform: "rotate(-90deg)",
          color: t.color.secondary,
          circle: {
            r: "10",
            cx: "12",
            cy: "12",
            fill: "transparent",
            stroke: e ? "currentColor" : t.background.hoverable,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeDasharray: Math.PI * 20,
          },
        }),
        ({ spinner: e, theme: t }) =>
          e && {
            animation: `${Am} 1s linear infinite`,
            circle: { stroke: `${t.color.secondary}33` },
          }
      ),
      Fm = w.div(({ theme: e }) => ({ color: e.color.warningText, "&&": { marginTop: 10 } })),
      Vn = w(Je)(({ isDisallowed: e, theme: t }) => ({
        position: "relative",
        overflow: "visible",
        color: t.textMutedColor,
        marginTop: 0,
        zIndex: 1,
        marginRight: 4,
        ...(e && { animation: `${Bs} 700ms ease-out` }),
      })),
      Om = ({
        isDisabled: e = !1,
        isDisallowed: t = !1,
        isOutdated: n = !1,
        isRunning: r = !1,
        localBuildProgress: i,
        warning: l,
        clickWarning: o,
        startBuild: s,
        stopBuild: c,
      }) => {
        if (e)
          return l
            ? a.createElement(
                we,
                { tooltip: a.createElement(Ae, { note: l }), trigger: "hover", hasChrome: !1 },
                a.createElement(
                  Vn,
                  {
                    id: "button-run-tests",
                    "aria-label": "Visual tests locked",
                    disabled: !o,
                    onClick: o,
                  },
                  a.createElement(dr, { status: "warning" }, a.createElement(Bt, null))
                )
              )
            : a.createElement(
                Vn,
                { id: "button-run-tests", "aria-label": "Visual tests locked", disabled: !0 },
                a.createElement(Bt, null)
              );
        if (r && i) {
          let { buildProgressPercentage: d } = i;
          return a.createElement(
            we,
            {
              trigger: "hover",
              tooltip: a.createElement(
                Tm,
                null,
                a.createElement(
                  "div",
                  null,
                  a.createElement(Tl, { localBuildProgress: i, small: !0, withEmoji: !0 })
                ),
                a.createElement(
                  Fl,
                  null,
                  typeof d == "number" && a.createElement(Ds, { style: { width: `${d}%` } })
                ),
                t &&
                  a.createElement(
                    Fm,
                    null,
                    "This job has already reached the capture cloud and cannot be stopped locally."
                  )
              ),
            },
            a.createElement(
              Vn,
              { "aria-label": "Stop tests", isDisallowed: t, onClick: () => c() },
              a.createElement(hu, { style: { width: 10, margin: 2 } }),
              a.createElement(
                Ei,
                { xmlns: "http://www.w3.org/2000/svg" },
                a.createElement("circle", null)
              ),
              a.createElement(
                Ei,
                { xmlns: "http://www.w3.org/2000/svg", spinner: !0 },
                a.createElement("circle", { strokeDashoffset: Math.PI * 20 * (1 - d / 100) })
              ),
              typeof d == "number" &&
                a.createElement(
                  Ei,
                  { xmlns: "http://www.w3.org/2000/svg", progress: !0 },
                  a.createElement("circle", { strokeDashoffset: Math.PI * 20 * (1 - d / 100) })
                )
            )
          );
        }
        return n
          ? a.createElement(
              we,
              {
                tooltip: a.createElement(Ae, { note: "Code changes detected; click to run tests" }),
                trigger: "hover",
                hasChrome: !1,
              },
              a.createElement(
                Vn,
                { id: "button-run-tests", "aria-label": "Run tests", onClick: () => s() },
                a.createElement(dr, { status: "notification" }, a.createElement(Bt, null))
              )
            )
          : a.createElement(
              we,
              {
                trigger: "hover",
                hasChrome: !1,
                tooltip: a.createElement(Ae, {
                  note: "No code changes detected. Rerun tests to take new snapshots.",
                }),
              },
              a.createElement(
                Vn,
                { id: "button-run-tests", "aria-label": "Run tests", onClick: () => s() },
                a.createElement(Bt, null)
              )
            );
      },
      Lm = ({ api: e }) => {
        let {
            addNotification: t,
            clearNotification: n,
            selectStory: r,
            setOptions: i,
            togglePanel: l,
          } = e,
          o = Ft(ba),
          { projectId: s } = _l(),
          [c] = xl(),
          d = !!c,
          [u, m] = Ee(hl),
          [p] = Ee(Ja),
          [f] = Ee(fl),
          [g] = Ee(Ar),
          v = Object.keys(g?.problems || {}).length > 0,
          [k] = Ee(pl),
          E = Ne(f?.currentStep),
          { index: h, status: y, storyId: b, viewMode: C } = jt(),
          O = Object.values(y).filter((ie) => ie[Z]?.status === "warn"),
          I = H(
            (ie) => {
              if ((i({ selectedPanel: nn }), l(!0), h && C !== "story")) {
                let Ge = Object.keys(h).indexOf(b),
                  Se = Object.entries(h).slice(Ge > 0 ? Ge : 0),
                  [Mt] = Se.find(([, { type: Le }]) => Le === "story") || [];
                Mt && r(Mt);
              }
              ie && o?.({ action: "openWarning", warning: ie });
            },
            [i, l, o, h, r, b, C]
          ),
          U = H(
            ({ onDismiss: ie }) => {
              ie(), I();
            },
            [I]
          );
        K(() => {
          let ie = () => m(!0),
            Ge = () => m(!1);
          return (
            window.addEventListener("offline", ie),
            window.addEventListener("online", Ge),
            () => {
              window.removeEventListener("offline", ie), window.removeEventListener("online", Ge);
            }
          );
        }, [m]),
          K(() => {
            if (f?.currentStep !== E.current) {
              if (((E.current = f?.currentStep), f?.currentStep === "initialize")) {
                let ie = `${Z}/build-initialize/${Date.now()}`;
                t({
                  id: ie,
                  content: {
                    headline: "Build started",
                    subHeadline: "Check the visual test addon to see the progress of your build.",
                  },
                  icon: a.createElement(Ii, { color: dt.positive }),
                  duration: 8e3,
                  onClick: U,
                }),
                  setTimeout(() => n(ie), 8e3);
              }
              if (f?.currentStep === "aborted") {
                let ie = `${Z}/build-aborted/${Date.now()}`;
                t({
                  id: ie,
                  content: { headline: "Build canceled", subHeadline: "Aborted by user." },
                  icon: a.createElement(St, { color: dt.negative }),
                  duration: 8e3,
                  onClick: U,
                }),
                  setTimeout(() => n(ie), 8e3);
              }
              if (f?.currentStep === "complete") {
                let ie = `${Z}/build-complete/${Date.now()}`;
                t({
                  id: ie,
                  content: {
                    headline: "Build complete",
                    subHeadline: f.errorCount
                      ? `Encountered ${(0, mi.default)("component error", f.errorCount, !0)}`
                      : O.length
                        ? `Found ${(0, mi.default)("story", O.length, !0)} with ${(0, mi.default)("change", O.length)}`
                        : "No visual changes detected",
                  },
                  icon: a.createElement(Ii, { color: dt.positive }),
                  duration: 8e3,
                  onClick: U,
                }),
                  setTimeout(() => n(ie), 8e3);
              }
              f?.currentStep === "error" &&
                t({
                  id: `${Z}/build-error/${Date.now()}`,
                  content: {
                    headline: "Build error",
                    subHeadline:
                      "Check the Storybook process on the command line for more details.",
                  },
                  icon: a.createElement(St, { color: dt.negative }),
                  onClick: U,
                }),
                f?.currentStep === "limited" &&
                  t({
                    id: `${Z}/build-limited/${Date.now()}`,
                    content: {
                      headline: "Build limited",
                      subHeadline:
                        "Your account has insufficient snapshots remaining to run this build. Visit your billing page to find out more.",
                    },
                    icon: a.createElement(St, { color: dt.negative }),
                    onClick: U,
                  });
            }
          }, [t, n, U, f?.currentStep, f?.errorCount, f?.changeCount, O.length]);
        let {
            isDisallowed: G,
            isRunning: oe,
            startBuild: ee,
            stopBuild: ke,
          } = Nl({ localBuildProgress: f, accessToken: c }),
          ye;
        s || (ye = "Visual tests locked until a project is selected."),
          d || (ye = "Visual tests locked until you are logged in."),
          k && (ye = "Visual tests locked due to Git synchronization problem."),
          v && (ye = "Visual tests locked due to configuration problem."),
          u && (ye = "Visual tests locked while offline.");
        let pe = H(() => I(ye), [I, ye]);
        return globalThis.CONFIG_TYPE !== "DEVELOPMENT"
          ? null
          : a.createElement(Om, {
              isDisabled: !!ye,
              isDisallowed: G,
              isOutdated: p,
              isRunning: oe,
              localBuildProgress: f,
              warning: ye,
              clickWarning: pe,
              startBuild: ee,
              stopBuild: ke,
            });
      },
      Hs = je(null),
      Rm = ({ children: e, value: t }) => a.createElement(Hs.Provider, { value: t }, e),
      js = () => kt(Hs, "AuthState"),
      Im = {
        user: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0ZM2.67 11.15c.7-1 2.6-1.81 3.2-1.9.22-.04.23-.66.23-.66s-.67-.66-.81-1.55c-.4 0-.63-.94-.24-1.27l-.02-.13c-.06-.6-.28-2.6 1.97-2.6s2.03 2 1.97 2.6l-.02.13c.4.33.15 1.27-.24 1.27-.14.89-.8 1.55-.8 1.55s0 .62.22.66c.6.09 2.5.9 3.2 1.9a6 6 0 1 0-8.66 0Z",
          })
        ),
        useralt: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M7.27 13.16a11.39 11.39 0 0 0 5.18-1.23v-.25c0-1.57-3.24-3-4.1-3.13-.27-.05-.28-.79-.28-.79s.8-.78.96-1.83c.47 0 .75-1.12.29-1.52.02-.41.6-3.25-2.32-3.25S4.65 4 4.67 4.41c-.46.4-.17 1.52.29 1.52.17 1.05.96 1.83.96 1.83s0 .74-.27.79c-.86.13-4.04 1.53-4.1 3.08a11.44 11.44 0 0 0 5.72 1.53Z",
          })
        ),
        useradd: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M1.18 11.9c-.4-.17-.8-.36-1.18-.58.06-1.44 3.02-2.74 3.82-2.87.25-.04.26-.73.26-.73s-.74-.73-.9-1.7c-.43 0-.7-1.05-.27-1.42l-.01-.14c-.07-.67-.31-2.88 2.18-2.88 2.48 0 2.24 2.2 2.17 2.88l-.01.14c.43.37.16 1.41-.27 1.41-.16.98-.9 1.71-.9 1.71s.01.69.26.73c.8.13 3.82 1.46 3.82 2.91v.24a10.63 10.63 0 0 1-8.97.3ZM11.5 2.16c.28 0 .5.22.5.5v1.5h1.5a.5.5 0 0 1 0 1H12v1.5a.5.5 0 0 1-1 0v-1.5H9.5a.5.5 0 1 1 0-1H11v-1.5c0-.28.22-.5.5-.5Z",
          })
        ),
        users: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M9.21 11.62A10.59 10.59 0 0 1 0 11.07c.06-1.35 2.93-2.58 3.7-2.7.25-.03.26-.68.26-.68s-.72-.69-.87-1.6c-.42 0-.68-.99-.26-1.33 0-.03 0-.08-.02-.14-.07-.63-.3-2.71 2.12-2.71 2.41 0 2.18 2.08 2.11 2.71l-.01.14c.42.34.16 1.32-.26 1.32-.16.92-.87 1.6-.87 1.6s0 .66.25.7c.78.11 3.7 1.36 3.7 2.73v.22l-.64.3Z",
          }),
          a.createElement("path", {
            d: "M8.81 8.42a9.64 9.64 0 0 0-.74-.4 5.2 5.2 0 0 1 1.7-.76c.17-.02.17-.47.17-.47s-.49-.47-.6-1.1c-.28 0-.46-.68-.17-.91l-.01-.1c-.05-.43-.2-1.86 1.45-1.86 1.66 0 1.5 1.43 1.45 1.86v.1c.28.23.1.9-.18.9-.11.64-.6 1.11-.6 1.11s0 .45.17.47c.54.08 2.55.94 2.55 1.89v.62a10.6 10.6 0 0 1-3.3.56 2.97 2.97 0 0 0-.58-.88c-.37-.41-.85-.76-1.31-1.03Z",
          })
        ),
        profile: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M9.1 7.35a5.06 5.06 0 0 1-4.52-.28C4.6 6.4 6.02 5.77 6.4 5.7c.12-.02.12-.35.12-.35s-.35-.34-.43-.81c-.2 0-.33-.5-.12-.67l-.01-.07C5.93 3.48 5.81 2.42 7 2.42S8.07 3.48 8.04 3.8v.07c.2.17.07.67-.13.67-.08.47-.43.81-.43.81s0 .33.12.35c.38.06 1.82.7 1.82 1.4v.1c-.1.06-.2.1-.31.15Zm-5.35 3.9c0-.14.11-.25.25-.25h6a.25.25 0 1 1 0 .5H4a.25.25 0 0 1-.25-.25ZM4 9a.25.25 0 0 0 0 .5h6a.25.25 0 1 0 0-.5H4Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M1 .5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v13a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V.5ZM2 13V1h10v12H2Z",
          })
        ),
        facehappy: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M3.97 8.75a.5.5 0 0 0-.87.5 4.5 4.5 0 0 0 7.8 0 .5.5 0 1 0-.87-.5 3.5 3.5 0 0 1-6.06 0ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z",
          })
        ),
        faceneutral: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M4.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z",
          })
        ),
        facesad: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M3.97 10.25a.5.5 0 0 1-.87-.5 4.5 4.5 0 0 1 7.8 0 .5.5 0 1 1-.87.5 3.5 3.5 0 0 0-6.06 0ZM5.5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z",
          })
        ),
        accessibility: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M3.53 4.84a.5.5 0 0 1 .63-.31l2.05.68a2.5 2.5 0 0 0 1.58 0l2.05-.68a.5.5 0 0 1 .32.94L7.7 6.3a.3.3 0 0 0-.21.29v.24c0 .7.16 1.39.48 2.01l.97 1.95a.5.5 0 1 1-.9.44L7 9.12l-1.05 2.1a.5.5 0 1 1-.9-.44l.97-1.95a4.5 4.5 0 0 0 .48-2.01v-.24a.3.3 0 0 0-.2-.29l-2.46-.82a.5.5 0 0 1-.31-.63Z",
          }),
          a.createElement("path", { d: "M7 4.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z",
          })
        ),
        accessibilityalt: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14ZM8 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM3.53 4.84a.5.5 0 0 1 .63-.31l2.05.68a2.5 2.5 0 0 0 1.58 0l2.05-.68a.5.5 0 0 1 .32.94L7.7 6.3a.3.3 0 0 0-.21.29v.24c0 .7.16 1.39.48 2.01l.97 1.95a.5.5 0 1 1-.9.44L7 9.12l-1.05 2.1a.5.5 0 1 1-.9-.44l.97-1.95a4.5 4.5 0 0 0 .48-2.01v-.24a.3.3 0 0 0-.2-.29l-2.46-.82a.5.5 0 0 1-.31-.63Z",
          })
        ),
        arrowup: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "m7.35 2.9 5.5 5.5a.5.5 0 0 1-.7.7L7 3.96 1.85 9.1a.5.5 0 1 1-.7-.7l5.5-5.5c.2-.2.5-.2.7 0Z",
          })
        ),
        arrowdown: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "m1.15 5.6 5.5 5.5c.2.2.5.2.7 0l5.5-5.5a.5.5 0 0 0-.7-.7L7 10.04 1.85 4.9a.5.5 0 1 0-.7.7Z",
          })
        ),
        arrowleft: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M2.76 7.1c.02.09.06.18.14.25l5.5 5.5a.5.5 0 0 0 .7-.7L3.96 7 9.1 1.85a.5.5 0 1 0-.7-.7l-5.5 5.5a.5.5 0 0 0-.14.45Z",
          })
        ),
        arrowright: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z",
          })
        ),
        arrowupalt: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M11.85 4.65 7.35.15a.5.5 0 0 0-.7 0l-4.5 4.5a.5.5 0 1 0 .7.7L6.5 1.71V13.5a.5.5 0 0 0 1 0V1.7l3.65 3.65a.5.5 0 0 0 .7-.7Z",
          })
        ),
        arrowdownalt: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M7.5.5a.5.5 0 0 0-1 0v11.8L2.85 8.64a.5.5 0 1 0-.7.7l4.5 4.5A.5.5 0 0 0 7 14a.5.5 0 0 0 .35-.15l4.5-4.5a.5.5 0 0 0-.7-.7L7.5 12.29V.5Z",
          })
        ),
        arrowleftalt: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M5.35 2.15c.2.2.2.5 0 .7L1.71 6.5H13.5a.5.5 0 0 1 0 1H1.7l3.65 3.65a.5.5 0 0 1-.7.7l-4.5-4.5a.5.5 0 0 1 0-.7l4.5-4.5c.2-.2.5-.2.7 0Z",
          })
        ),
        arrowrightalt: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M8.65 2.15c.2-.2.5-.2.7 0l4.5 4.5c.2.2.2.5 0 .7l-4.5 4.5a.5.5 0 0 1-.7-.7l3.64-3.65H.5a.5.5 0 0 1 0-1h11.8L8.64 2.85a.5.5 0 0 1 0-.7Z",
          })
        ),
        expandalt: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "m7.35.15 4 4a.5.5 0 0 1-.7.7L7 1.21 3.35 4.85a.5.5 0 1 1-.7-.7l4-4c.2-.2.5-.2.7 0ZM11.35 9.15c.2.2.2.5 0 .7l-4 4a.5.5 0 0 1-.7 0l-4-4a.5.5 0 1 1 .7-.7L7 12.79l3.65-3.64c.2-.2.5-.2.7 0Z",
          })
        ),
        collapse: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M3.354.146a.5.5 0 1 0-.708.708l4 4a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0-.708-.708L7 3.793 3.354.146Zm3.292 9a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1-.708.708L7 10.207l-3.646 3.647a.5.5 0 0 1-.708-.708l4-4Z",
          })
        ),
        expand: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M1.5 1h2a.5.5 0 0 1 0 1h-.8l3.15 3.15a.5.5 0 1 1-.7.7L2 2.71v.79a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5ZM10 1.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0v-.8L8.85 5.86a.5.5 0 1 1-.7-.7L11.29 2h-.79a.5.5 0 0 1-.5-.5ZM12.5 10c.28 0 .5.22.5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h.8L8.14 8.85a.5.5 0 1 1 .7-.7L12 11.29v-.79c0-.28.22-.5.5-.5ZM2 11.3v-.8a.5.5 0 0 0-1 0v2c0 .28.22.5.5.5h2a.5.5 0 0 0 0-1h-.8l3.15-3.15a.5.5 0 1 0-.7-.7L2 11.29Z",
          })
        ),
        unfold: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "m6.65.15-1.5 1.5a.5.5 0 1 0 .7.7l.65-.64V5a.5.5 0 0 0 1 0V1.7l.65.65a.5.5 0 1 0 .7-.7L7.35.15a.5.5 0 0 0-.7 0Z",
          }),
          a.createElement("path", {
            d: "M1.3 4.04a.5.5 0 0 0-.16.82L3.3 7 1.15 9.15a.5.5 0 0 0 .35.85h3a.5.5 0 0 0 0-1H2.7l1.5-1.5h5.6l2.35 2.35a.5.5 0 0 0 .7-.7L10.71 7l2.14-2.15.11-.54-.1.54A.5.5 0 0 0 13 4.5a.5.5 0 0 0-.14-.35.5.5 0 0 0-.36-.15h-3a.5.5 0 0 0 0 1h1.8L9.8 6.5H4.2L2.7 5h1.8a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.2.04Z",
          }),
          a.createElement("path", {
            d: "M7 8.5c.28 0 .5.22.5.5v3.3l.65-.65a.5.5 0 0 1 .7.7l-1.5 1.5a.5.5 0 0 1-.7 0l-1.5-1.5a.5.5 0 0 1 .7-.7l.65.64V9c0-.28.22-.5.5-.5ZM9 9.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z",
          })
        ),
        transfer: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M10.65 2.65c.2-.2.5-.2.7 0l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 0 1-.7-.7l.64-.65H1.5a.5.5 0 0 1 0-1h9.8l-.65-.65a.5.5 0 0 1 0-.7ZM3.35 8.35 2.71 9h9.79a.5.5 0 0 1 0 1H2.7l.65.65a.5.5 0 0 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 1 1 .7.7Z",
          })
        ),
        redirect: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M1.5 1c.28 0 .5.22.5.5V10a2 2 0 0 0 4 0V4a3 3 0 0 1 6 0v7.8l1.15-1.15a.5.5 0 0 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 0 1 .7-.7L11 11.79V4a2 2 0 1 0-4 0v6a3 3 0 0 1-6 0V1.5c0-.28.22-.5.5-.5Z",
          })
        ),
        undo: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M1.15 3.85a.5.5 0 0 1 0-.7l2-2a.5.5 0 1 1 .7.7L2.71 3H9a4 4 0 0 1 0 8H3a.5.5 0 0 1 0-1h6a3 3 0 1 0 0-6H2.7l1.15 1.15a.5.5 0 1 1-.7.7l-2-2Z",
          })
        ),
        reply: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M4.35 2.15c.2.2.2.5 0 .7L1.71 5.5H9.5A4.5 4.5 0 0 1 14 10v1.5a.5.5 0 0 1-1 0V10a3.5 3.5 0 0 0-3.5-3.5H1.7l2.65 2.65a.5.5 0 1 1-.7.7l-3.5-3.5a.5.5 0 0 1 0-.7l3.5-3.5c.2-.2.5-.2.7 0Z",
          })
        ),
        sync: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M5.5 1A.5.5 0 0 0 5 .5H2a.5.5 0 0 0 0 1h1.53a6.5 6.5 0 0 0 2.39 11.91.5.5 0 1 0 .16-.99A5.5 5.5 0 0 1 4.5 2.1V4a.5.5 0 0 0 1 0V1ZM7.5 1a.5.5 0 0 1 .58-.41 6.5 6.5 0 0 1 2.39 11.91H12a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v1.9A5.5 5.5 0 0 0 7.92 1.58.5.5 0 0 1 7.5 1Z",
          })
        ),
        upload: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M8.65 5.85 7.5 4.71v5.79a.5.5 0 0 1-1 0V4.7L5.35 5.86a.5.5 0 1 1-.7-.7l2-2c.2-.2.5-.2.7 0l2 2a.5.5 0 1 1-.7.7Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z",
          })
        ),
        download: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M5.35 8.15 6.5 9.29V3.5a.5.5 0 0 1 1 0v5.8l1.15-1.15a.5.5 0 1 1 .7.7l-2 2a.5.5 0 0 1-.7 0l-2-2a.5.5 0 1 1 .7-.7Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7Zm1 0a6 6 0 1 1 12 0A6 6 0 0 1 1 7Z",
          })
        ),
        back: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M5.85 5.35 4.71 6.5h5.79a.5.5 0 0 1 0 1H4.7l1.15 1.15a.5.5 0 1 1-.7.7l-2-2a.5.5 0 0 1 0-.7l2-2a.5.5 0 1 1 .7.7Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M7 0a7 7 0 1 1 0 14A7 7 0 0 1 7 0Zm0 1a6 6 0 1 1 0 12A6 6 0 0 1 7 1Z",
          })
        ),
        proceed: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M3.5 6.5h5.8L8.14 5.35a.5.5 0 1 1 .7-.7l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 1 1-.7-.7L9.29 7.5H3.5a.5.5 0 0 1 0-1Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M7 14A7 7 0 1 1 7 0a7 7 0 0 1 0 14Zm0-1A6 6 0 1 1 7 1a6 6 0 0 1 0 12Z",
          })
        ),
        refresh: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M7.1.5H7a6.5 6.5 0 1 0 6.41 7.58.5.5 0 1 0-.99-.16A5.47 5.47 0 0 1 7 12.5a5.5 5.5 0 0 1 0-11 5.5 5.5 0 0 1 4.9 3H10a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-1 0v1.53A6.5 6.5 0 0 0 7.1.5Z",
          })
        ),
        globe: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M14 7A7 7 0 1 0 0 7a7 7 0 0 0 14 0Zm-6.53 5.74c-.24.23-.4.26-.47.26-.08 0-.23-.03-.47-.26-.23-.24-.5-.62-.73-1.18A11.57 11.57 0 0 1 5 7.5h4a11.57 11.57 0 0 1-.8 4.06c-.24.56-.5.94-.73 1.18ZM8.99 6.5H5.01c.05-1.62.35-3.04.79-4.06.24-.56.5-.94.73-1.18.24-.23.4-.26.47-.26.08 0 .23.03.47.26.23.24.5.62.73 1.18.44 1.02.74 2.44.8 4.06Zm1 1c-.06 2.18-.56 4.08-1.28 5.25a6 6 0 0 0 4.27-5.25H9.99Zm2.99-1H9.99c-.06-2.18-.56-4.08-1.28-5.25a6 6 0 0 1 4.27 5.25ZM4 6.5c.06-2.18.56-4.08 1.28-5.25A6 6 0 0 0 1.02 6.5h2.99Zm-2.99 1a6 6 0 0 0 4.27 5.25c-.72-1.17-1.22-3.07-1.28-5.25H1.02Z",
          })
        ),
        compass: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M10.09 3.4 5.95 5.8a.37.37 0 0 0-.11.09.38.38 0 0 0-.04.05l-2.4 4.15a.37.37 0 0 0 0 .38c.1.18.33.24.5.14l4.15-2.4a.37.37 0 0 0 .15-.15l2.4-4.15a.37.37 0 0 0-.03-.44.37.37 0 0 0-.48-.07ZM4.75 9.25 7.6 7.6 6.4 6.4 4.75 9.25Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z",
          })
        ),
        location: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7Zm6.5 3.5v2.48A6 6 0 0 1 1.02 7.5H3.5a.5.5 0 0 0 0-1H1.02A6 6 0 0 1 6.5 1.02V3.5a.5.5 0 0 0 1 0V1.02a6 6 0 0 1 5.48 5.48H10.5a.5.5 0 0 0 0 1h2.48a6 6 0 0 1-5.48 5.48V10.5a.5.5 0 0 0-1 0Z",
          })
        ),
        pin: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M9 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM8 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M12 5A5 5 0 0 0 2 5c0 2.63 2.27 6.15 4.65 8.64.2.2.5.2.7 0C9.73 11.15 12 7.64 12 5ZM7 1a4 4 0 0 1 4 4c0 1.06-.47 2.42-1.3 3.88A21.23 21.23 0 0 1 7 12.55c-1-1.1-1.97-2.39-2.7-3.67A8.46 8.46 0 0 1 3 5a4 4 0 0 1 4-4Z",
          })
        ),
        time: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M7 2c.28 0 .5.22.5.5v4H10a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5V2.5c0-.28.22-.5.5-.5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z",
          })
        ),
        dashboard: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M9.8 4.1a.5.5 0 0 1 .1.7L7.92 7.58A1 1 0 1 1 7.1 7l2-2.8a.5.5 0 0 1 .7-.12Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M2.07 12.97a7 7 0 1 1 9.86 0 12.96 12.96 0 0 0-9.86 0Zm9.58-1.18a6 6 0 1 0-9.3 0 13.98 13.98 0 0 1 9.3 0Z",
          })
        ),
        timer: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", { d: "M7.5 4.5a.5.5 0 0 0-1 0v2.63a1 1 0 1 0 1 0V4.5Z" }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M5.5.5c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-.5v1.02c1.28.1 2.45.61 3.37 1.4l.78-.77a.5.5 0 0 1 .7.7l-.77.78a6 6 0 1 1-5.08-2.1V1H6a.5.5 0 0 1-.5-.5ZM7 3a5 5 0 1 0 0 10A5 5 0 0 0 7 3Z",
          })
        ),
        home: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "m7.35 1.15 5.5 5.5a.5.5 0 0 1-.7.7L12 7.21v5.29a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V9H6v3.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V7.2l-.15.15a.5.5 0 1 1-.7-.7l1-1 4.5-4.5c.2-.2.5-.2.7 0ZM3 6.2V12h2V8.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5V12h2V6.2l-4-4-4 4Z",
          })
        ),
        admin: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M1.21 4.1a.5.5 0 0 1 .06-.04l5.48-3a.5.5 0 0 1 .5 0l5.48 3a.5.5 0 0 1 .27.39.5.5 0 0 1-.51.55H1.51a.5.5 0 0 1-.3-.9ZM3.46 4h7.08L7 2.07 3.46 4Z",
          }),
          a.createElement("path", {
            d: "M4 6a.5.5 0 1 0-1 0v5a.5.5 0 0 0 1 0V6ZM11 6a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V6ZM5.75 5.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V6c0-.28.22-.5.5-.5ZM8.75 6a.5.5 0 1 0-1 0v5a.5.5 0 0 0 1 0V6ZM1.5 12.5c0-.27.22-.5.5-.5h10a.5.5 0 0 1 0 1H2a.5.5 0 0 1-.5-.5Z",
          })
        ),
        info: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M7 5.5c.28 0 .5.22.5.5v4a.5.5 0 0 1-1 0V6c0-.28.22-.5.5-.5ZM7 4.5A.75.75 0 1 0 7 3a.75.75 0 0 0 0 1.5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z",
          })
        ),
        question: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M5.25 5.25A1.75 1.75 0 1 1 7 7a.5.5 0 0 0-.5.5V9a.5.5 0 0 0 1 0V7.95a2.75 2.75 0 1 0-3.25-2.7.5.5 0 0 0 1 0ZM7 11.5A.75.75 0 1 0 7 10a.75.75 0 0 0 0 1.5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z",
          })
        ),
        support: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-3.52 4.9a5.97 5.97 0 0 1-6.96 0l1.45-1.45a3.98 3.98 0 0 0 4.06 0l1.45 1.44Zm-.03-2.87 1.44 1.45a5.97 5.97 0 0 0 0-6.96l-1.44 1.45a3.98 3.98 0 0 1 0 4.06ZM9.03 3.55l1.45-1.44a5.97 5.97 0 0 0-6.96 0l1.45 1.44a3.98 3.98 0 0 1 4.06 0ZM3.55 4.97 2.11 3.52a5.97 5.97 0 0 0 0 6.96l1.44-1.45a3.98 3.98 0 0 1 0-4.06ZM10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
          })
        ),
        alert: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M7 4.5c.28 0 .5.22.5.5v3.5a.5.5 0 0 1-1 0V5c0-.28.22-.5.5-.5ZM7.75 10.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M7.2 1.04a.5.5 0 0 1 .24.21l6.49 11a.5.5 0 0 1-.44.75H.51a.5.5 0 0 1-.5-.45.5.5 0 0 1 .06-.31l6.5-10.99a.5.5 0 0 1 .64-.2ZM7 2.48 1.38 12h11.24L7 2.48Z",
          })
        ),
        email: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M0 2.5c0-.27.22-.5.5-.5h13c.28 0 .5.23.5.5v9a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-9Zm1 1.02V11h12V3.52L7.31 7.89a.5.5 0 0 1-.52.07.5.5 0 0 1-.1-.07L1 3.52ZM12.03 3H1.97L7 6.87 12.03 3Z",
          })
        ),
        phone: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "m7.76 8.13-.05.05a.2.2 0 0 1-.28.03A6.76 6.76 0 0 1 5.8 6.56a.21.21 0 0 1 .04-.27l.05-.05c.23-.2.54-.47.71-.96.17-.47-.02-1.04-.66-1.94-.26-.38-.72-.96-1.22-1.46-.68-.69-1.2-1-1.65-1a.98.98 0 0 0-.51.13A3.23 3.23 0 0 0 .9 3.42c-.13 1.1.26 2.37 1.17 3.78a16.68 16.68 0 0 0 4.55 4.6 6.57 6.57 0 0 0 3.53 1.32A3.2 3.2 0 0 0 13 11.46c.14-.24.24-.64-.07-1.18a7.8 7.8 0 0 0-1.73-1.8c-.64-.5-1.52-1.12-2.13-1.12a.97.97 0 0 0-.34.06c-.47.17-.74.46-.95.69l-.02.02Zm4.32 2.68a6.8 6.8 0 0 0-1.48-1.54h-.02c-.3-.25-.64-.49-.95-.67a2.7 2.7 0 0 0-.56-.24h-.01c-.23.09-.34.21-.56.45l-.02.02-.04.04a1.2 1.2 0 0 1-1.6.15 7.76 7.76 0 0 1-1.86-1.89l-.01-.01-.02-.02a1.21 1.21 0 0 1 .2-1.53l.06-.06.02-.02c.22-.2.35-.31.43-.53v-.02c0-.02 0-.06-.03-.14a3.7 3.7 0 0 0-.5-.88h-.01V3.9c-.23-.33-.65-.87-1.1-1.32H4c-.31-.32-.55-.5-.72-.6a.6.6 0 0 0-.22-.1h-.03a2.23 2.23 0 0 0-1.15 1.66c-.09.78.18 1.8 1.02 3.1a15.68 15.68 0 0 0 4.27 4.33l.02.01.02.02a5.57 5.57 0 0 0 2.97 1.11 2.2 2.2 0 0 0 1.93-1.14h.01v-.05a.57.57 0 0 0-.05-.12Z",
          })
        ),
        link: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M11.84 2.16a2.25 2.25 0 0 0-3.18 0l-2.5 2.5c-.88.88-.88 2.3 0 3.18a.5.5 0 0 1-.7.7 3.25 3.25 0 0 1 0-4.59l2.5-2.5a3.25 3.25 0 0 1 4.59 4.6L10.48 8.1c.04-.44.01-.89-.09-1.32l1.45-1.45c.88-.88.88-2.3 0-3.18Z",
          }),
          a.createElement("path", {
            d: "M3.6 7.2c-.1-.42-.12-.87-.08-1.31L1.45 7.95a3.25 3.25 0 1 0 4.6 4.6l2.5-2.5a3.25 3.25 0 0 0 0-4.6.5.5 0 0 0-.7.7c.87.89.87 2.31 0 3.2l-2.5 2.5a2.25 2.25 0 1 1-3.2-3.2l1.46-1.44Z",
          })
        ),
        unlink: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "m1.45 7.95 1.3-1.3.71.7-1.3 1.3a2.25 2.25 0 1 0 3.18 3.2l1.3-1.31.71.7-1.3 1.3a3.25 3.25 0 0 1-4.6-4.59ZM12.55 6.05l-1.3 1.3-.71-.7 1.3-1.3a2.25 2.25 0 1 0-3.18-3.2l-1.3 1.31-.71-.7 1.3-1.3a3.25 3.25 0 0 1 4.6 4.59ZM1.85 1.15a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z",
          })
        ),
        bell: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M8 1.11a1 1 0 1 0-1.99 0A4.5 4.5 0 0 0 2.5 5.5v3.88l-.94 1.89a.5.5 0 0 0-.06.3.5.5 0 0 0 .51.43h3.58a1.5 1.5 0 1 0 2.82 0H12a.5.5 0 0 0 .45-.73l-.94-1.89V5.5A4.5 4.5 0 0 0 8 1.11ZM2.8 11h8.4l-.5-1H3.3l-.5 1Zm7.7-2V5.5a3.5 3.5 0 1 0-7 0V9h7Zm-4 3.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Z",
          })
        ),
        rss: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M1.5.5c0-.28.22-.5.5-.5a12 12 0 0 1 12 12 .5.5 0 0 1-1 0A11 11 0 0 0 2 1a.5.5 0 0 1-.5-.5Z",
          }),
          a.createElement("path", {
            d: "M1.5 4.5c0-.28.22-.5.5-.5a8 8 0 0 1 8 8 .5.5 0 0 1-1 0 7 7 0 0 0-7-7 .5.5 0 0 1-.5-.5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M5 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-1 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
          })
        ),
        sharealt: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M2 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7.5a.5.5 0 0 0-1 0V12H2V2h4.5a.5.5 0 0 0 0-1H2Z",
          }),
          a.createElement("path", {
            d: "M7.35 7.36 12 2.7v1.8a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 1 0 0 1h1.8L6.64 6.64a.5.5 0 1 0 .7.7Z",
          })
        ),
        share: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M6.65.15c.2-.2.5-.2.7 0l2 2a.5.5 0 1 1-.7.7L7.5 1.72v6.8a.5.5 0 0 1-1 0V1.7L5.35 2.86a.5.5 0 1 1-.7-.71l2-2Z",
          }),
          a.createElement("path", {
            d: "M2 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H9.5a.5.5 0 1 0 0 1H12v7H2V5h2.5a.5.5 0 0 0 0-1H2Z",
          })
        ),
        circlehollow: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M7 13A6 6 0 1 0 7 1a6 6 0 0 0 0 12Zm0 1A7 7 0 1 0 7 0a7 7 0 0 0 0 14Z",
          })
        ),
        circle: a.createElement("path", { d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Z" }),
        bookmarkhollow: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M3.5 0h7c.28 0 .5.22.5.5v13a.5.5 0 0 1-.45.5.46.46 0 0 1-.38-.12L7 11.16l-3.17 2.72a.46.46 0 0 1-.38.12.5.5 0 0 1-.45-.5V.5c0-.28.22-.5.5-.5ZM4 12.41l2.66-2.28a.45.45 0 0 1 .38-.13c.1.01.2.05.29.12l2.67 2.3V1H4v11.41Z",
          })
        ),
        bookmark: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M3.5 0h7c.28 0 .5.22.5.5v13a.5.5 0 0 1-.45.5.46.46 0 0 1-.38-.12L7 11.16l-3.17 2.72a.46.46 0 0 1-.38.12.5.5 0 0 1-.45-.5V.5c0-.28.22-.5.5-.5Z",
          })
        ),
        diamond: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M8.41 1.59a2 2 0 0 0-2.82 0l-4 4a2 2 0 0 0 0 2.82l4 4a2 2 0 0 0 2.82 0l4-4a2 2 0 0 0 0-2.82l-4-4Zm.71-.71a3 3 0 0 0-4.24 0l-4 4a3 3 0 0 0 0 4.24l4 4a3 3 0 0 0 4.24 0l4-4a3 3 0 0 0 0-4.24l-4-4Z",
          })
        ),
        hearthollow: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M12.81 1.85 13 2a2.97 2.97 0 0 1 .75 1.17 4.39 4.39 0 0 1 .12 2.51 6.26 6.26 0 0 1-1.65 2.55l-4.78 4.6A.59.59 0 0 1 7 13a.67.67 0 0 1-.44-.17L1.78 8.22a7.84 7.84 0 0 1-1.25-1.6C.37 6.31.24 6 .14 5.67a4.32 4.32 0 0 1 .12-2.51 3.2 3.2 0 0 1 1.95-1.9c.47-.18 1-.27 1.57-.27.3 0 .61.04.91.14.3.09.59.21.86.36s.52.33.77.52c.24.19.47.38.68.58a7.56 7.56 0 0 1 1.46-1.1c.27-.15.55-.27.84-.36.3-.1.6-.14.9-.14.59 0 1.12.09 1.59.26.39.15.73.34 1.02.59ZM1.2 3.53A2.2 2.2 0 0 1 2.57 2.2M1.2 3.53c-.13.33-.2.72-.2 1.18 0 .22.03.45.1.68a3.97 3.97 0 0 0 .79 1.46c.19.23.38.45.59.65l4.51 4.36 4.52-4.35c.2-.2.4-.4.59-.65.18-.23.34-.47.49-.73.13-.23.23-.48.3-.73.08-.23.11-.46.11-.7 0-.45-.07-.84-.2-1.18-.12-.33-.3-.6-.51-.8v-.01c-.22-.2-.5-.38-.85-.51-.34-.13-.75-.2-1.24-.2-.2 0-.4.03-.6.09a4.95 4.95 0 0 0-1.9 1.22l-.68.67-.7-.65a9.97 9.97 0 0 0-.62-.53c-.2-.16-.42-.3-.63-.42h-.01c-.21-.12-.43-.22-.66-.29C4.2 2.03 4 2 3.77 2c-.48 0-.88.07-1.21.2",
          })
        ),
        heart: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M12.81 1.85 13 2a2.97 2.97 0 0 1 .75 1.17 4.39 4.39 0 0 1 .12 2.51 6.26 6.26 0 0 1-1.65 2.55l-4.78 4.6A.59.59 0 0 1 7 13a.67.67 0 0 1-.44-.17L1.78 8.22a7.84 7.84 0 0 1-1.25-1.6C.37 6.31.24 6 .14 5.67a4.32 4.32 0 0 1 .12-2.51 3.2 3.2 0 0 1 1.95-1.9c.47-.18 1-.27 1.57-.27.3 0 .61.04.91.14.3.09.59.21.86.36s.52.33.77.52c.24.19.47.38.68.58a7.56 7.56 0 0 1 1.46-1.1c.27-.15.55-.27.84-.36.3-.1.6-.14.9-.14.59 0 1.12.09 1.59.26.39.15.73.34 1.02.59Z",
          })
        ),
        starhollow: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M6.32.78a.75.75 0 0 1 1.36 0l1.63 3.54 3.87.46c.63.07.89.86.42 1.3l-2.86 2.64.76 3.81a.75.75 0 0 1-1.1.8L7 11.43l-3.4 1.9a.75.75 0 0 1-1.1-.8l.76-3.81L.4 6.07a.75.75 0 0 1 .42-1.3l3.87-.45L6.32.78ZM7 1.7 5.54 4.86c-.11.24-.34.4-.6.43l-3.46.42 2.56 2.37c.2.17.28.44.23.7l-.68 3.42 3.04-1.7c.23-.14.5-.14.74 0l3.04 1.7-.68-3.43a.75.75 0 0 1 .23-.7l2.56-2.36-3.47-.42a.75.75 0 0 1-.59-.43L7 1.7Z",
          })
        ),
        star: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M7.68.78a.75.75 0 0 0-1.36 0L4.69 4.32l-3.87.46a.75.75 0 0 0-.42 1.3l2.86 2.64-.76 3.81a.75.75 0 0 0 1.1.8l3.4-1.9 3.4 1.9a.75.75 0 0 0 1.1-.8l-.76-3.81 2.86-2.65a.75.75 0 0 0-.42-1.3L9.3 4.33 7.68.78Z",
          })
        ),
        certificate: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M10 7.85A4.49 4.49 0 0 0 7 0a4.5 4.5 0 0 0-3 7.85V13a.5.5 0 0 0 .5.5.5.5 0 0 0 .35-.15L7 11.21l2.15 2.14A.5.5 0 0 0 10 13V7.85ZM7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-.35 2.15c.2-.2.5-.2.7 0L9 11.79V8.53a4.48 4.48 0 0 1-4 0v3.26l1.65-1.64Z",
          })
        ),
        verified: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M6.56 13.12a1 1 0 0 1 .88 0l.98.49a1 1 0 0 0 1.31-.43l.52-.97a1 1 0 0 1 .7-.51l1.08-.2a1 1 0 0 0 .81-1.1l-.15-1.1a1 1 0 0 1 .27-.82l.76-.8a1 1 0 0 0 0-1.37l-.76-.79a1 1 0 0 1-.27-.83l.15-1.08a1 1 0 0 0-.8-1.12l-1.09-.19a1 1 0 0 1-.7-.5L9.73.81A1 1 0 0 0 8.43.4l-1 .49a1 1 0 0 1-.87 0L5.58.39a1 1 0 0 0-1.31.43l-.52.97a1 1 0 0 1-.7.51l-1.08.2a1 1 0 0 0-.81 1.1l.15 1.1a1 1 0 0 1-.27.82l-.76.8a1 1 0 0 0 0 1.37l.76.79a1 1 0 0 1 .27.83l-.15 1.08a1 1 0 0 0 .8 1.12l1.09.19a1 1 0 0 1 .7.5l.52.98a1 1 0 0 0 1.3.43l1-.49Zm4.3-8.47c.19.2.19.5 0 .7l-4.5 4.5a.5.5 0 0 1-.71 0l-2.5-2.5a.5.5 0 1 1 .7-.7L6 8.79l4.15-4.14c.2-.2.5-.2.7 0Z",
          })
        ),
        thumbsup: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M11 12.02c-.4.37-.91.56-1.56.56h-.88a5.5 5.5 0 0 1-1.3-.16c-.42-.1-.91-.25-1.47-.45-.3-.12-.63-.21-.95-.27H2.88a.84.84 0 0 1-.62-.26.84.84 0 0 1-.26-.61V6.45c0-.24.09-.45.26-.62a.84.84 0 0 1 .62-.25h1.87c.16-.11.47-.47.93-1.06.27-.35.51-.64.74-.88.1-.11.19-.3.24-.58.05-.28.12-.57.2-.87.1-.3.24-.55.43-.74a.87.87 0 0 1 .62-.25c.38 0 .72.07 1.03.22.3.15.54.38.7.7a2.94 2.94 0 0 1 .21 1.58 3 3 0 0 1-.3 1h1.2c.47 0 .88.17 1.23.52s.52.8.52 1.22c0 .29-.04.66-.34 1.12.05.15.07.3.07.47 0 .35-.09.68-.26.98.07.54-.07 1.08-.4 1.51a1.9 1.9 0 0 1-.57 1.5Zm.47-5.33a.96.96 0 0 0 .03-.25.74.74 0 0 0-.23-.51.68.68 0 0 0-.52-.23H7.93l.73-1.45a2 2 0 0 0 .21-.87c0-.44-.07-.7-.13-.82a.53.53 0 0 0-.24-.24 1.3 1.3 0 0 0-.54-.12.99.99 0 0 0-.14.28c-.08.27-.13.52-.18.76-.06.38-.2.77-.48 1.07v.01l-.02.01c-.2.2-.4.46-.67.8l-.61.76c-.15.17-.35.38-.54.51l-.26.18H5v4.13h.02c.38.08.76.18 1.12.32.53.2.98.33 1.35.42.36.09.71.13 1.07.13h.88c.43 0 .68-.11.87-.29a.9.9 0 0 0 .26-.7l-.02-.37.22-.3c.17-.23.25-.5.2-.78l-.04-.33.17-.3a.97.97 0 0 0 .13-.48c0-.09 0-.13-.02-.15l-.15-.46.26-.4c.1-.15.13-.25.15-.33ZM3.5 10.8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z",
          })
        ),
        shield: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M11.76 2.08a.5.5 0 0 1 .24.42v6a.5.5 0 0 1-.17.38l-4.5 3.99a.5.5 0 0 1-.67 0l-4.49-4A.5.5 0 0 1 2 8.5V2.5c0-.18.1-.34.24-.42l.01-.02a2.5 2.5 0 0 1 .3-.16c.22-.1.52-.24.92-.37C4.27 1.26 5.44 1 7 1c1.56 0 2.73.26 3.53.53a6.97 6.97 0 0 1 1.22.53l.01.02ZM3 2.79v5.49l1.07.94 6.59-6.58-.44-.17C9.52 2.24 8.44 2 7 2c-1.44 0-2.52.24-3.22.47-.35.12-.6.24-.78.32Zm4 9.04L4.82 9.9 11 3.71v4.57l-4 3.55Z",
          })
        ),
        basket: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", { d: "M10.35 2.85a.5.5 0 1 0-.7-.7l-3 3a.5.5 0 1 0 .7.7l3-3Z" }),
          a.createElement("path", {
            d: "M2.09 6H4.5a.5.5 0 0 0 0-1H1.8a.75.75 0 0 0-.74.87l.8 4.88A1.5 1.5 0 0 0 3.36 12h7.3a1.5 1.5 0 0 0 1.48-1.25l.81-4.88A.75.75 0 0 0 12.2 5H10a.5.5 0 0 0 0 1h1.91l-.76 4.58a.5.5 0 0 1-.5.42h-7.3a.5.5 0 0 1-.5-.42L2.1 6Z",
          }),
          a.createElement("path", {
            d: "M4.5 7c.28 0 .5.22.5.5v2a.5.5 0 0 1-1 0v-2c0-.28.22-.5.5-.5ZM10 7.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2ZM6.5 9.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0Z",
          })
        ),
        beaker: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M4.5 2h.75v3.87l-3.03 5.26c-.48.83.12 1.87 1.08 1.87h7.4c.96 0 1.57-1.04 1.08-1.87L8.75 5.87V2h.75a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1Zm1.75 4V2h1.5v4.13l.07.12 1 1.75H5.18l1.01-1.75.07-.12V6ZM4.6 9l-1.52 2.63c-.1.16.03.37.22.37h7.4c.2 0 .31-.2.22-.37L9.4 9H4.6Z",
          })
        ),
        hourglass: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", { d: "M7.5 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M3.5 1a.5.5 0 0 0-.5.5c0 1.06.14 1.9.68 2.97.34.7.86 1.5 1.6 2.53a16.53 16.53 0 0 0-1.8 2.96A6 6 0 0 0 3 12.49v.01a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 6 6 0 0 0-.48-2.54c-.34-.8-.9-1.71-1.8-2.96a19.78 19.78 0 0 0 1.6-2.53c.54-1.08.68-1.9.68-2.97a.5.5 0 0 0-.5-.5h-7Zm6.49 11a4.68 4.68 0 0 0-.39-1.65c-.27-.65-.73-1.4-1.5-2.5a133 133 0 0 1-.75 1 .5.5 0 0 1-.56.1.5.5 0 0 1-.2-.16l-.7-.94a14.36 14.36 0 0 0-1.5 2.5A4.68 4.68 0 0 0 4.02 12H10ZM6.3 6.72l.7.94a90.06 90.06 0 0 0 .7-.96c.49-.67.87-1.22 1.17-1.7H5.13A32.67 32.67 0 0 0 6.3 6.72ZM4.56 4h4.88c.36-.73.5-1.31.55-2H4c.04.69.19 1.27.55 2Z",
          })
        ),
        flag: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M11.5 1h-9a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 1 0V8h8.5a.5.5 0 0 0 .35-.85L9.21 4.5l2.64-2.65A.5.5 0 0 0 11.5 1ZM8.15 4.15 10.29 2H3v5h7.3L8.14 4.85a.5.5 0 0 1 0-.7Z",
          })
        ),
        cloudhollow: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M10 7V6a3 3 0 0 0-5.9-.74l-.18.68-.7.07A2.5 2.5 0 0 0 3.5 11h3.19l.07-.01h.08L7 11h4a2 2 0 1 0 0-4h-1ZM3.12 5.02A3.5 3.5 0 0 0 3.5 12H11a3 3 0 1 0 0-6 4 4 0 0 0-7.88-.98Z",
          })
        ),
        cloud: a.createElement("path", {
          d: "M7 2a4 4 0 0 1 4 4 3 3 0 1 1 0 6H3.5a3.5 3.5 0 0 1-.38-6.98A4 4 0 0 1 7 2Z",
        }),
        edit: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "m13.85 2.15-2-2a.5.5 0 0 0-.7 0l-1.5 1.5-9 9a.5.5 0 0 0-.14.26L0 13.39a.5.5 0 0 0 .14.46.5.5 0 0 0 .46.14l2.48-.5a.5.5 0 0 0 .27-.14l9-9 1.5-1.5a.5.5 0 0 0 0-.7ZM12 3.29l.8-.79-1.3-1.3-.8.8L12 3.3Zm-2-.58L1.7 11 3 12.3 11.3 4 10 2.7ZM1.14 12.86l.17-.85.68.68-.85.17Z",
          })
        ),
        cog: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M5.59 5.59a2 2 0 0 1 3.27 2.14.5.5 0 1 0 .93.37 3 3 0 1 0-1.7 1.7.5.5 0 1 0-.36-.94A2 2 0 0 1 5.6 5.6Z",
            fill: "#333",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M.94 6.53c.13.12.19.3.18.46 0 .17-.05.34-.18.47L0 8.39c.19.94.55 1.81 1.07 2.58h1.32c.18 0 .34.07.46.2.12.11.2.27.2.45v1.32c.76.51 1.62.88 2.55 1.06l.94-.94a.63.63 0 0 1 .45-.19h.03c.16 0 .33.07.45.19l.94.94a7.1 7.1 0 0 0 2.55-1.06v-1.33c0-.18.07-.35.2-.46.11-.12.27-.2.45-.2h1.33A7.1 7.1 0 0 0 14 8.4l-.95-.94a.64.64 0 0 1-.18-.47c0-.17.06-.34.18-.46l.95-.95a7.1 7.1 0 0 0-1.05-2.52h-1.34a.63.63 0 0 1-.46-.2.64.64 0 0 1-.2-.46V1.06A7.1 7.1 0 0 0 8.42 0l-.94.94a.63.63 0 0 1-.45.19H7a.63.63 0 0 1-.45-.19L5.6 0a7.1 7.1 0 0 0-2.56 1.06v1.33c0 .18-.07.34-.2.46a.63.63 0 0 1-.45.2H1.06A7.1 7.1 0 0 0 0 5.59l.94.94Zm.7 1.63c.33-.32.49-.75.48-1.17 0-.42-.15-.85-.47-1.17l-.54-.54c.12-.43.3-.85.51-1.23h.77c.46 0 .87-.2 1.17-.5.3-.29.48-.7.48-1.16v-.77c.4-.22.81-.39 1.25-.52l.54.55c.33.32.75.48 1.16.48h.03c.42 0 .84-.16 1.16-.48l.54-.54c.44.12.85.3 1.24.5v.8c0 .45.19.87.49 1.16.3.3.7.5 1.16.5h.78c.2.37.38.78.5 1.2l-.54.55c-.33.32-.49.75-.48 1.17 0 .42.15.85.48 1.17l.55.55c-.13.44-.3.85-.52 1.24h-.77c-.45 0-.87.2-1.16.5-.3.29-.5.7-.5 1.16v.77c-.38.21-.8.39-1.23.51l-.54-.54a1.64 1.64 0 0 0-1.16-.48H7c-.41 0-.83.16-1.16.48l-.54.55a6.1 6.1 0 0 1-1.25-.52v-.76c0-.45-.19-.87-.48-1.16-.3-.3-.71-.5-1.17-.5h-.76a6.1 6.1 0 0 1-.53-1.25l.55-.55Z",
          })
        ),
        nut: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M5.59 8.41a2 2 0 1 1 3.27-.68.5.5 0 1 0 .93.37 3 3 0 1 0-1.7 1.7.5.5 0 0 0-.36-.94 2 2 0 0 1-2.14-.45Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M6.5.29a1 1 0 0 1 1 0l5.06 2.92c.31.18.5.51.5.87v5.84a1 1 0 0 1-.5.87L7.5 13.7a1 1 0 0 1-1 0L1.44 10.8a1 1 0 0 1-.5-.87V4.08a1 1 0 0 1 .5-.87L6.5.3Zm.5.86 5.06 2.93v5.84L7 12.85 1.94 9.92V4.08L7 1.15Z",
          })
        ),
        wrench: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M10.5 1c.44 0 .56.52.25.83l-.8.81c-.2.2-.2.52 0 .72l.69.7c.2.2.52.2.72 0l.8-.81c.32-.31.84-.2.84.25a2.5 2.5 0 0 1-3.41 2.33L2.7 12.7a1 1 0 0 1-1.42-1.42l6.88-6.88A2.5 2.5 0 0 1 10.5 1ZM2 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z",
          })
        ),
        ellipsis: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M4 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM13 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM7 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
          })
        ),
        check: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M13.85 3.35a.5.5 0 0 0-.7-.7L5 10.79.85 6.65a.5.5 0 1 0-.7.7l4.5 4.5c.2.2.5.2.7 0l8.5-8.5Z",
          })
        ),
        form: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M2 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6.4a.5.5 0 0 0-1 0V12H2V2h7.5a.5.5 0 0 0 0-1H2Z",
          }),
          a.createElement("path", {
            d: "m6.35 9.86 7.5-7.5a.5.5 0 0 0-.7-.71L6 8.8 3.85 6.65a.5.5 0 1 0-.7.7l2.5 2.5c.2.2.5.2.7 0Z",
          })
        ),
        batchdeny: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M11.5 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-2.646.646a.5.5 0 0 1 0 .708L5.207 7l3.647 3.646a.5.5 0 0 1-.708.708L4.5 7.707.854 11.354a.5.5 0 0 1-.708-.708L3.793 7 .146 3.354a.5.5 0 1 1 .708-.708L4.5 6.293l3.646-3.647a.5.5 0 0 1 .708 0ZM11 7a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 11 7Zm.5 4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z",
          })
        ),
        batchaccept: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M11.5 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-2.2.6a.5.5 0 0 1 .1.7l-5.995 7.993a.505.505 0 0 1-.37.206.5.5 0 0 1-.395-.152L.146 8.854a.5.5 0 1 1 .708-.708l2.092 2.093L8.6 2.7a.5.5 0 0 1 .7-.1ZM11 7a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 11 7Zm.5 4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z",
          })
        ),
        controls: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M10.5 1c.28 0 .5.22.5.5V2h1.5a.5.5 0 0 1 0 1H11v.5a.5.5 0 0 1-1 0V3H1.5a.5.5 0 0 1 0-1H10v-.5c0-.28.22-.5.5-.5ZM1.5 11a.5.5 0 0 0 0 1H10v.5a.5.5 0 0 0 1 0V12h1.5a.5.5 0 0 0 0-1H11v-.5a.5.5 0 0 0-1 0v.5H1.5ZM1 7c0-.28.22-.5.5-.5H3V6a.5.5 0 0 1 1 0v.5h8.5a.5.5 0 0 1 0 1H4V8a.5.5 0 0 1-1 0v-.5H1.5A.5.5 0 0 1 1 7Z",
          })
        ),
        plus: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M7.5.5a.5.5 0 0 0-1 0v6h-6a.5.5 0 0 0 0 1h6v6a.5.5 0 0 0 1 0v-6h6a.5.5 0 0 0 0-1h-6v-6Z",
          })
        ),
        closeAlt: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M2.03.97A.75.75 0 0 0 .97 2.03L5.94 7 .97 11.97a.75.75 0 1 0 1.06 1.06L7 8.06l4.97 4.97a.75.75 0 1 0 1.06-1.06L8.06 7l4.97-4.97A.75.75 0 0 0 11.97.97L7 5.94 2.03.97Z",
          })
        ),
        cross: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M1.85 1.15a.5.5 0 1 0-.7.7L6.29 7l-5.14 5.15a.5.5 0 0 0 .7.7L7 7.71l5.15 5.14a.5.5 0 0 0 .7-.7L7.71 7l5.14-5.15a.5.5 0 0 0-.7-.7L7 6.29 1.85 1.15Z",
          })
        ),
        trash: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M5.5 4.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0V5c0-.28.22-.5.5-.5ZM9 5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0V5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M4.5.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5V2h3a.5.5 0 0 1 0 1H12v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3h-.5a.5.5 0 0 1 0-1h3V.5ZM3 3v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3H3Zm2.5-2h3v1h-3V1Z",
          })
        ),
        pinalt: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M13.44 4.44 9.56.56a1.5 1.5 0 0 0-2.12 0L7 1a1.41 1.41 0 0 0 0 2L5 5H3.66A4 4 0 0 0 .83 6.17l-.48.48a.5.5 0 0 0 0 .7l2.8 2.8-3 3a.5.5 0 0 0 .7.7l3-3 2.8 2.8c.2.2.5.2.7 0l.48-.48A4 4 0 0 0 9 10.34V9l2-2c.55.55 1.45.55 2 0l.44-.44a1.5 1.5 0 0 0 0-2.12ZM11 5.59l-3 3v1.75a3 3 0 0 1-.88 2.12L7 12.6 1.41 7l.13-.12A3 3 0 0 1 3.66 6H5.4l3-3-.7-.7a.41.41 0 0 1 0-.6l.44-.43c.2-.2.5-.2.7 0l3.88 3.88c.2.2.2.5 0 .7l-.44.44a.41.41 0 0 1-.58 0L11 5.6Z",
          })
        ),
        unpin: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M13.44 4.44 9.56.56a1.5 1.5 0 0 0-2.12 0L7 1a1.41 1.41 0 0 0 0 2L5.7 4.3l.71.7 2-2-.7-.7a.41.41 0 0 1 0-.6l.44-.43c.2-.2.5-.2.7 0l3.88 3.88c.2.2.2.5 0 .7l-.44.44a.41.41 0 0 1-.58 0L11 5.6l-2 2 .7.7L11 7c.55.55 1.45.55 2 0l.44-.44a1.5 1.5 0 0 0 0-2.12ZM.83 6.17A4 4 0 0 1 3.59 5l1 1h-.93a3 3 0 0 0-2.12.88L1.4 7 7 12.59l.12-.13A3 3 0 0 0 8 10.34v-.93l1 1a4 4 0 0 1-1.17 2.76l-.48.48a.5.5 0 0 1-.7 0l-2.8-2.8-3 3a.5.5 0 0 1-.7-.7l3-3-2.8-2.8a.5.5 0 0 1 0-.7l.48-.48Zm1.02-5.02a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z",
          })
        ),
        add: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M7 3c.28 0 .5.22.5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3c0-.28.22-.5.5-.5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z",
          })
        ),
        subtract: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", { d: "M3.5 6.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z" }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z",
          })
        ),
        close: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M9.85 4.15c.2.2.2.5 0 .7L7.71 7l2.14 2.15a.5.5 0 0 1-.7.7L7 7.71 4.85 9.85a.5.5 0 0 1-.7-.7L6.29 7 4.15 4.85a.5.5 0 1 1 .7-.7L7 6.29l2.15-2.14c.2-.2.5-.2.7 0Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm0-1A6 6 0 1 0 7 1a6 6 0 0 0 0 12Z",
          })
        ),
        delete: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0a6 6 0 0 1-9.87 4.58l8.45-8.45A5.98 5.98 0 0 1 13 7ZM2.42 10.87l8.45-8.45a6 6 0 0 0-8.46 8.46Z",
          })
        ),
        passed: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm3.85-9.35c.2.2.2.5 0 .7l-4.5 4.5a.5.5 0 0 1-.7 0l-2.5-2.5a.5.5 0 1 1 .7-.7L6 8.79l4.15-4.14c.2-.2.5-.2.7 0Z",
          })
        ),
        changed: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14ZM3.5 6.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z",
          })
        ),
        failed: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14Zm2.85-9.85c.2.2.2.5 0 .7L7.71 7l2.14 2.15a.5.5 0 0 1-.7.7L7 7.71 4.85 9.85a.5.5 0 0 1-.7-.7L6.29 7 4.15 4.85a.5.5 0 1 1 .7-.7L7 6.29l2.15-2.14c.2-.2.5-.2.7 0Z",
          })
        ),
        clear: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M5 2h7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-1.41-.59l-3-3a2 2 0 0 1 0-2.82l3-3A2 2 0 0 1 5 2Zm1.15 3.15c.2-.2.5-.2.7 0L8 6.29l1.15-1.14a.5.5 0 1 1 .7.7L8.71 7l1.14 1.15a.5.5 0 0 1-.7.7L8 7.71 6.85 8.85a.5.5 0 1 1-.7-.7L7.29 7 6.15 5.85a.5.5 0 0 1 0-.7Z",
          })
        ),
        comment: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M3.5 5a.5.5 0 1 0 0 1h7a.5.5 0 0 0 0-1h-7ZM3 8.5c0-.27.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M12.5 12H5.7l-1.85 1.86a.5.5 0 0 1-.35.14.5.5 0 0 1-.5-.5V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v9a.5.5 0 0 1-.5.5ZM2 11V3h10v8H2Z",
          })
        ),
        commentadd: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M7.5 5a.5.5 0 1 0-1 0v1.5H5a.5.5 0 1 0 0 1h1.5V9a.5.5 0 0 0 1 0V7.5H9a.5.5 0 0 0 0-1H7.5V5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M3.7 13.97a.5.5 0 0 1-.7-.46V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v9a.5.5 0 0 1-.5.5H5.7l-1.85 1.85a.5.5 0 0 1-.16.1ZM2 3v8h10V3H2Z",
          })
        ),
        requestchange: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M9.85 6.65c.2.2.2.51 0 .7l-2 2a.5.5 0 1 1-.7-.7L8.3 7.5H4.5a.5.5 0 0 1 0-1h3.79L7.15 5.36a.5.5 0 1 1 .7-.71l2 2Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M3.7 13.97a.5.5 0 0 1-.7-.46V12H1.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v9a.5.5 0 0 1-.5.5H5.7l-1.85 1.85a.5.5 0 0 1-.16.1ZM2 3v8h10V3H2Z",
          })
        ),
        comments: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M8.5 7a.5.5 0 0 0 0-1h-5a.5.5 0 1 0 0 1h5ZM9 8.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h5c.28 0 .5.23.5.5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M12 11.5V10h1.5a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5v8c0 .28.22.5.5.5H2v1.5a.5.5 0 0 0 .5.5.5.5 0 0 0 .35-.14L4.71 12h6.79a.5.5 0 0 0 .5-.5ZM3 3V2h10v7h-1V3.5a.5.5 0 0 0-.5-.5H3Zm-2 8V4h10v7H1Z",
          })
        ),
        lock: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M8 8a1 1 0 0 1-.5.87v1.63a.5.5 0 0 1-1 0V8.87A1 1 0 1 1 8 8Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M3 4a4 4 0 1 1 8 0v1h1.5c.28 0 .5.23.5.5v8a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-8c0-.27.22-.5.5-.5H3V4Zm7 1V4a3 3 0 1 0-6 0v1h6Zm2 1H2v7h10V6Z",
          })
        ),
        unlock: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", { d: "M6.5 8.87a1 1 0 1 1 1 0v1.63a.5.5 0 0 1-1 0V8.87Z" }),
          a.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7 1a3 3 0 0 0-3 3v1h8.5c.28 0 .5.23.5.5v8a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-8c0-.27.22-.5.5-.5H3V4a4 4 0 0 1 7.76-1.38.5.5 0 0 1-.94.34A3 3 0 0 0 7 1ZM2 6h10v7H2V6Z",
          })
        ),
        key: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", { d: "M11 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M7.5 8.53v.97a.5.5 0 0 1-.5.5H5.5v1.5a.5.5 0 0 1-.5.5H3.5v1.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .15-.36l5.12-5.11a4.5 4.5 0 1 1 2.23 2.5ZM6 4.5a3.5 3.5 0 1 1 1.5 2.87c-.29-.2-1-.37-1 .48V9H5a.5.5 0 0 0-.5.5V11H3a.5.5 0 0 0-.5.5V13H1v-1.3l5.2-5.19c.15-.16.18-.4.1-.6A3.47 3.47 0 0 1 6 4.5Z",
          })
        ),
        outbox: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M7.35.15a.5.5 0 0 0-.7 0l-2 2a.5.5 0 1 0 .7.7L6.5 1.72v6.8a.5.5 0 0 0 1 0V1.7l1.15 1.15a.5.5 0 1 0 .7-.71l-2-2Z",
          }),
          a.createElement("path", {
            d: "M2 7.5a.5.5 0 1 0-1 0v5c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-1 0V12H2V7.5Z",
          })
        ),
        credit: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", { d: "M2.5 8a.5.5 0 1 0 0 1h3a.5.5 0 0 0 0-1h-3Z" }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M0 11.5c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5v9ZM1 3v1h12V3H1Zm0 8h12V6H1v5Z",
          })
        ),
        button: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M1 3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h3.5a.5.5 0 1 0 0-1H1V4h12v5h-1a.5.5 0 0 0 0 1h1a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1Z",
          }),
          a.createElement("path", {
            d: "M6.45 7a.5.5 0 0 1 .3.08l3.48 2.02a.5.5 0 0 1 0 .87l-1.08.62.75 1.3a.75.75 0 0 1-1.3.75l-.75-1.3-1.07.62a.5.5 0 0 1-.67-.13.5.5 0 0 1-.1-.3L6 7.5a.5.5 0 0 1 .45-.5Z",
          })
        ),
        type: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M4 1.5c0-.27.22-.5.5-.5h5a.5.5 0 1 1 0 1h-2v10h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2V2h-2a.5.5 0 0 1-.5-.5Z",
          }),
          a.createElement("path", {
            d: "M0 4.5c0-.27.22-.5.5-.5h4a.5.5 0 1 1 0 1H1v4h3.5a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5v-5ZM9.5 4a.5.5 0 1 0 0 1H13v4H9.5a.5.5 0 1 0 0 1h4a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-4Z",
          })
        ),
        pointerdefault: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M5.94 12.46c.11 0 .2-.06.25-.15l1.58-3.16 2.54 2.54c.04.05.1.07.19.07a.3.3 0 0 0 .2-.07l.8-.8a.27.27 0 0 0 0-.38L8.9 7.9l3.4-1.7c.06-.03.1-.07.12-.11a.22.22 0 0 0 .04-.14.33.33 0 0 0-.06-.16.17.17 0 0 0-.09-.07h-.02L1.91 1.55a.27.27 0 0 0-.35.36l4.15 10.37c.04.09.12.16.23.17Zm-.03 1h-.02a1.28 1.28 0 0 1-1.1-.8L.62 2.29A1.27 1.27 0 0 1 2.3.63l10.35 4.15c.52.18.79.65.81 1.11.04.53-.27.98-.7 1.2l-2.17 1.08L12.2 9.8c.5.5.5 1.3 0 1.8l-.8.8v.01c-.5.46-1.3.48-1.8-.01l-1.56-1.56-.95 1.92c-.23.45-.68.7-1.15.7h-.03Z",
          })
        ),
        pointerhand: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M11.87 6v-.02c-.03-.27-.23-.48-.47-.5a.5.5 0 0 0-.53.5v1.41c0 .25-.22.47-.47.47a.48.48 0 0 1-.47-.47V5.17a.6.6 0 0 0 0-.05c-.02-.27-.23-.5-.47-.5a.5.5 0 0 0-.52.5v1.65l-.01.1a.49.49 0 0 1-.46.37.48.48 0 0 1-.47-.47V4.62a.6.6 0 0 0 0-.05c-.03-.27-.23-.48-.47-.5a.5.5 0 0 0-.53.5v2.2c0 .25-.22.47-.47.47a.49.49 0 0 1-.47-.47V1.75c-.02-.27-.22-.5-.47-.5a.5.5 0 0 0-.52.5v6.78c0 .25-.22.47-.47.47a.48.48 0 0 1-.47-.47v-.26a.78.78 0 0 0-.06-.31.65.65 0 0 0-.16-.22l-.2-.19A6.37 6.37 0 0 0 3.06 7h-.02c-.43-.34-.62-.25-.69-.2-.26.14-.29.5-.13.74l1.73 2.6v.01h-.01l-.04.02.05-.02s1.21 2.6 3.57 2.6c3.54 0 4.2-1.9 4.31-4.42.04-.6.04-1.19.03-1.78V6Zm.97 2.38c-.06 1.29-.26 2.67-1.08 3.72-.88 1.12-2.29 1.65-4.23 1.65a4.64 4.64 0 0 1-3.4-1.62 6.96 6.96 0 0 1-1.05-1.5v-.02L1.4 8.1A1.6 1.6 0 0 1 1.15 7c.05-.38.26-.8.69-1.04.2-.13.48-.23.85-.19.36.05.68.22.98.45.14.1.27.22.4.33v-4.8A1.5 1.5 0 0 1 5.63.25c.93.04 1.43.86 1.43 1.55v1.33c.17-.05.35-.07.53-.06h.02c.5.04.91.33 1.15.71a1.5 1.5 0 0 1 .74-.16c.66.03 1.12.46 1.32.97a1.5 1.5 0 0 1 .64-.1h.02c.85.06 1.39.8 1.39 1.55v.48c0 .6 0 1.24-.03 1.86Z",
          })
        ),
        browser: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h13c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5H.5Zm.5-1V4h12v8H1Zm1-9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z",
          })
        ),
        tablet: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M3.5 0C2.67 0 2 .68 2 1.5v11c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-11c0-.82-.67-1.5-1.5-1.5h-7Zm0 1h7c.28 0 .5.23.5.5V11H3V1.5c0-.27.22-.5.5-.5ZM6 12a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H6Z",
          })
        ),
        mobile: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M3 1.5C3 .68 3.67 0 4.5 0h5c.83 0 1.5.68 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 3 12.5v-11ZM4 12V2h6v10H4Z",
          })
        ),
        watch: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            key: "watch",
            fillRule: "evenodd",
            d: "M4 .5c0-.27.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 4 .5ZM9.5 3h-5a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5Zm-5-1C3.67 2 3 2.68 3 3.5v7c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-7c0-.82-.67-1.5-1.5-1.5h-5ZM7 4c.28 0 .5.23.5.5v2h1a.5.5 0 1 1 0 1H7a.5.5 0 0 1-.5-.5V4.5c0-.27.22-.5.5-.5Zm-2.5 9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z",
          })
        ),
        sidebar: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M2.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5ZM3 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1H3Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h3v10H2ZM6 2h6v10H6V2Z",
          })
        ),
        sidebaralt: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M9.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5ZM10 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1h-1Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h6v10H2ZM9 2h3v10H9V2Z",
          })
        ),
        sidebaralttoggle: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M11.5 4.5A.5.5 0 0 0 11 4h-1a.5.5 0 1 0 0 1h1a.5.5 0 0 0 .5-.5ZM11 6a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1h1Zm.5 2.5A.5.5 0 0 0 11 8h-1a.5.5 0 1 0 0 1h1a.5.5 0 0 0 .5-.5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11ZM9 12h3V2H9v10Zm-1 0H2V2h6v4.5H5.2l.66-.65a.5.5 0 1 0-.71-.7l-1.5 1.5a.5.5 0 0 0 0 .7l1.5 1.5a.5.5 0 1 0 .7-.7l-.64-.65H8V12Z",
          })
        ),
        sidebartoggle: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M2.5 4.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5ZM3 6a.5.5 0 1 0 0 1h1a.5.5 0 0 0 0-1H3Zm-.5 2.5c0-.27.22-.5.5-.5h1a.5.5 0 1 1 0 1H3a.5.5 0 0 1-.5-.5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M1.5 13a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11Zm.5-1V2h3v10H2Zm4 0V7.5h2.8l-.65.65a.5.5 0 1 0 .7.7l1.5-1.5a.5.5 0 0 0 0-.7l-1.5-1.5a.5.5 0 1 0-.7.7l.64.65H6V2h6v10H6Z",
          })
        ),
        bottombar: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M3 10.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm3.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm2.5.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 8V2h10v6H2Zm10 1v3H2V9h10Z",
          })
        ),
        bottombartoggle: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M3.5 10a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm2.5.5c0-.27.22-.5.5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm3.5-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M1 12.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5Zm1-.5V9h10v3H2Zm4.5-4H2V2h10v6H7.5V5.21l.65.65a.5.5 0 1 0 .7-.71l-1.5-1.5a.5.5 0 0 0-.7 0l-1.5 1.5a.5.5 0 1 0 .7.7l.65-.64v2.8Z",
          })
        ),
        cpu: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M5 5.5c0-.27.22-.5.5-.5h3c.28 0 .5.23.5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3ZM6 8V6h2v2H6Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M5.5 0c.28 0 .5.23.5.5V2h2V.5a.5.5 0 0 1 1 0V2h2.5c.28 0 .5.23.5.5V5h1.5a.5.5 0 0 1 0 1H12v2h1.5a.5.5 0 0 1 0 1H12v2.5a.5.5 0 0 1-.5.5H9v1.5a.5.5 0 0 1-1 0V12H6v1.5a.5.5 0 0 1-1 0V12H2.5a.5.5 0 0 1-.5-.5V9H.5a.5.5 0 0 1 0-1H2V6H.5a.5.5 0 0 1 0-1H2V2.5c0-.27.22-.5.5-.5H5V.5c0-.27.22-.5.5-.5ZM11 3H3v8h8V3Z",
          })
        ),
        database: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M12 3c0-1.1-2.24-2-5-2s-5 .9-5 2v8c0 .43.26.75.54.98.3.23.68.41 1.12.55.88.3 2.06.47 3.34.47 1.28 0 2.46-.17 3.34-.46.44-.15.83-.33 1.12-.56.28-.23.54-.55.54-.98V3Zm-1.03 0a2.45 2.45 0 0 0-.8-.49A8.88 8.88 0 0 0 7 2c-1.29 0-2.4.21-3.16.51a2.45 2.45 0 0 0-.81.49l.05.05c.13.13.37.28.76.44C4.6 3.79 5.7 4 7 4s2.4-.21 3.16-.51a2.45 2.45 0 0 0 .81-.49ZM11 5.75V4.2A8.9 8.9 0 0 1 7 5a8.98 8.98 0 0 1-4-.8v1.55l.02.04c.02.04.06.09.14.15.17.13.44.27.82.4A10 10 0 0 0 7 6.75a10 10 0 0 0 3.02-.41c.38-.13.65-.27.82-.4a.62.62 0 0 0 .14-.15.15.15 0 0 0 .02-.03v-.01ZM3 7.01c.2.1.42.2.66.28.88.29 2.06.46 3.34.46 1.28 0 2.46-.17 3.34-.46.24-.08.46-.17.66-.28V8.5l-.02.04a.62.62 0 0 1-.14.15c-.17.13-.44.27-.82.4A10 10 0 0 1 7 9.5a10 10 0 0 1-3.02-.41 2.76 2.76 0 0 1-.82-.4.62.62 0 0 1-.14-.15.15.15 0 0 1-.02-.03V7Zm0 2.75V11l.02.04c.02.04.06.09.14.15.17.13.44.27.82.4A10 10 0 0 0 7 12a10 10 0 0 0 3.02-.41c.38-.13.65-.27.82-.4a.62.62 0 0 0 .14-.15.15.15 0 0 0 .02-.03V9.76c-.2.1-.42.2-.66.28-.88.29-2.06.46-3.34.46-1.28 0-2.46-.17-3.34-.46A4.77 4.77 0 0 1 3 9.76Z",
          })
        ),
        memory: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M5 3a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0V3Zm2-.5c.28 0 .5.22.5.5v3a.5.5 0 0 1-1 0V3c0-.28.22-.5.5-.5Zm3 2a.5.5 0 1 0-1 0V6a.5.5 0 0 0 1 0V4.5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M12 3.54a.5.5 0 0 0-.15-.39l-3-3a.5.5 0 0 0-.38-.14H2.5a.5.5 0 0 0-.5.5v13c0 .27.22.5.5.5h9a.5.5 0 0 0 .5-.5V3.53ZM3 1h5.3L11 3.71v5.3H3V1Zm0 9v3h8v-3H3Z",
          })
        ),
        structure: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M8.16 3.45a1.5 1.5 0 1 0-2.33 0l-4.02 6.58A1.5 1.5 0 1 0 2.91 12h8.18a1.5 1.5 0 1 0 1.1-1.97L8.16 3.45Zm-1.47.52a1.5 1.5 0 0 0 .62 0l4.03 6.58c-.11.14-.2.29-.25.45H2.9a1.5 1.5 0 0 0-.25-.45L6.7 3.97Z",
          })
        ),
        box: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "m7.21.05 6.49 2.99a.5.5 0 0 1 .3.47v6.98a.5.5 0 0 1-.3.47l-6.47 2.98a.5.5 0 0 1-.46 0L.3 10.96a.5.5 0 0 1-.3-.47V3.5a.5.5 0 0 1 .3-.47L6.79.05a.5.5 0 0 1 .43 0ZM1 4.28v5.9l5.5 2.54v-5.9L1 4.28Zm6.5 8.44 5.5-2.54v-5.9L7.5 6.82v5.9Zm4.8-9.22L7 5.95 1.7 3.5 7 1.05l5.3 2.45Z",
          })
        ),
        power: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", { d: "M7.5.5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0v-6Z" }),
          a.createElement("path", {
            d: "M4.27 2.8a.5.5 0 0 0-.54-.83 6 6 0 1 0 6.54 0 .5.5 0 0 0-.54.84 5 5 0 1 1-5.46 0Z",
          })
        ),
        photo: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M6.25 4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M13 1.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5ZM2 9.3V2h10v5.3L9.85 5.15a.5.5 0 0 0-.7 0L6.5 7.8 5.35 6.65a.5.5 0 0 0-.7 0L2 9.3Zm7.5-3.1L12 8.7V12H2v-1.3l3-3 3.15 3.15a.5.5 0 0 0 .7-.71L7.21 8.5 9.5 6.21Z",
          })
        ),
        component: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M3.5 1A2.5 2.5 0 0 0 1 3.5v7A2.5 2.5 0 0 0 3.5 13h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 10.5 1h-7ZM12 6.5H7.5V2h3c.83 0 1.5.68 1.5 1.5v3Zm0 1v3c0 .83-.67 1.5-1.5 1.5h-3V7.5H12ZM6.5 12V7.5H2v3c0 .83.67 1.5 1.5 1.5h3ZM2 6.5h4.5V2h-3C2.67 2 2 2.68 2 3.5v3Z",
          })
        ),
        grid: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M1 1.5c0-.27.22-.5.5-.5H6c.28 0 .5.23.5.5V6a.5.5 0 0 1-.5.5H1.5A.5.5 0 0 1 1 6V1.5Zm1 4V2h3.5v3.5H2Zm5.5-4c0-.27.22-.5.5-.5h4.5c.28 0 .5.23.5.5V6a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V1.5Zm1 4V2H12v3.5H8.5Zm-7 2A.5.5 0 0 0 1 8v4.5c0 .28.22.5.5.5H6a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H1.5Zm.5 1V12h3.5V8.5H2ZM7.5 8c0-.27.22-.5.5-.5h4.5c.28 0 .5.23.5.5v4.5a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V8Zm1 4V8.5H12V12H8.5Z",
          })
        ),
        outline: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M2 2v2H1V1.5c0-.27.22-.5.5-.5H4v1H2ZM1 9V5h1v4H1Zm0 1v2.5c0 .28.22.5.5.5H4v-1H2v-2H1Zm9 3h2.5a.5.5 0 0 0 .5-.5V10h-1v2h-2v1Zm2-9h1V1.5a.5.5 0 0 0-.5-.5H10v1h2v2Zm-3 8v1H5v-1h4ZM9 1v1H5V1h4Zm4 8h-1V5h1v4ZM7 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
          })
        ),
        photodrag: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M8.25 3.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M14 7V.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5V6h1V4h2v6.5c0 .28.22.5.5.5H10v2H8v1h2.5a.5.5 0 0 0 .5-.5V11h2.5a.5.5 0 0 0 .5-.5V7ZM4 1v5.8l1.65-1.65c.2-.2.5-.2.7 0L7.5 6.3l2.65-2.65c.2-.2.5-.2.7 0L13 5.8V1H4Zm9 6.21-2.5-2.5-2.3 2.3 1.15 1.14a.5.5 0 1 1-.7.7L6 6.22l-2 2v1.8h9V7.2Z",
          }),
          a.createElement("path", {
            d: "M0 10V7h1v3H0Zm0 3.5V11h1v2h2v1H.5a.5.5 0 0 1-.5-.5Zm7 .5H4v-1h3v1Z",
          })
        ),
        search: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M9.54 10.2a5.5 5.5 0 1 1 .66-.66c.06.03.11.06.15.1l3 3a.5.5 0 0 1-.7.71l-3-3a.5.5 0 0 1-.1-.14ZM10.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z",
          })
        ),
        zoom: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M6 3.5c.28 0 .5.22.5.5v1.5H8a.5.5 0 0 1 0 1H6.5V8a.5.5 0 0 1-1 0V6.5H4a.5.5 0 0 1 0-1h1.5V4c0-.28.22-.5.5-.5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M9.54 10.2a5.5 5.5 0 1 1 .66-.66c.06.03.11.06.15.1l3 3a.5.5 0 0 1-.7.71l-3-3a.5.5 0 0 1-.1-.14ZM10.5 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z",
          })
        ),
        zoomout: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", { d: "M4 5.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H4Z" }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M6 11.5c1.35 0 2.59-.49 3.54-1.3.03.06.06.11.1.15l3 3a.5.5 0 0 0 .71-.7l-3-3a.5.5 0 0 0-.14-.1A5.5 5.5 0 1 0 6 11.5Zm0-1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z",
          })
        ),
        zoomreset: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M1.5 2.84V1.5a.5.5 0 0 0-1 0V4c0 .28.22.5.5.5h2.5a.5.5 0 0 0 0-1H2.26a4.5 4.5 0 1 1-.5 4.02.5.5 0 1 0-.94.33 5.5 5.5 0 0 0 8.72 2.36l.1.14 3 3a.5.5 0 0 0 .71-.7l-3-3a.5.5 0 0 0-.14-.1 5.5 5.5 0 1 0-8.7-6.7Z",
          })
        ),
        eye: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", { d: "M7 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "m14 7-.2.3c-.13.16-3.06 4.2-6.8 4.2C3.26 11.5.33 7.46.2 7.3L0 7l.2-.3C.34 6.55 3.27 2.5 7 2.5c3.74 0 6.67 4.04 6.8 4.2l.2.3ZM2.9 5.3A13 13 0 0 0 1.24 7 13 13 0 0 0 2.9 8.7c1.14.97 2.58 1.8 4.1 1.8 1.52 0 2.96-.83 4.1-1.8A13 13 0 0 0 12.76 7a13 13 0 0 0-1.66-1.7C9.96 4.33 8.52 3.5 7 3.5c-1.52 0-2.96.83-4.1 1.8Z",
          })
        ),
        eyeclose: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M1.85 1.15a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11ZM11.1 8.7c-.17.15-.36.3-.55.44l.72.71a13.25 13.25 0 0 0 2.52-2.56L14 7l-.2-.3c-.13-.16-3.06-4.2-6.8-4.2-.89 0-1.73.23-2.5.58l.76.76A4.86 4.86 0 0 1 7 3.5c1.52 0 2.96.83 4.1 1.8A13 13 0 0 1 12.76 7a13 13 0 0 1-1.66 1.7ZM.2 6.7c.08-.09 1.04-1.41 2.53-2.55l.72.71c-.2.14-.38.3-.55.44A13 13 0 0 0 1.24 7 13 13 0 0 0 2.9 8.7c1.14.97 2.58 1.8 4.1 1.8.6 0 1.18-.13 1.74-.34l.77.76c-.78.35-1.62.58-2.51.58C3.26 11.5.33 7.46.2 7.3L0 7l.2-.3Z",
          }),
          a.createElement("path", {
            d: "M4.5 7c0-.32.06-.63.17-.91l3.24 3.24A2.5 2.5 0 0 1 4.5 7Zm4.83.91L6.09 4.67a2.5 2.5 0 0 1 3.24 3.24Z",
          })
        ),
        lightning: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M2.52 6.6a.57.57 0 0 0-.17.54c.04.2.19.37.38.41l2.78.73-1.5 5c-.06.24.02.5.22.63a.5.5 0 0 0 .28.09.5.5 0 0 0 .35-.14L11.5 7.4c.14-.13.2-.34.15-.54a.53.53 0 0 0-.38-.4l-2.7-.7L10.79.78c.1-.23.04-.5-.15-.66a.5.5 0 0 0-.65 0L2.52 6.6Zm7.72.63-3.07-.8 1.85-4.14-5.2 4.51 2.94.77-1.27 4.28 4.75-4.62Zm-5.73 6.2.04.02Z",
          })
        ),
        lightningoff: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M10.14 8.72 11.5 7.4c.14-.13.2-.34.15-.54a.53.53 0 0 0-.38-.4l-2.7-.7L10.79.78c.1-.23.04-.5-.15-.66a.5.5 0 0 0-.65 0L5.46 4.05l.71.7L9.02 2.3 7.38 5.97l.7.7 2.16.56-.8.79.7.7ZM2.52 6.6a.57.57 0 0 0-.17.54c.04.2.19.37.38.41l2.78.73-1.5 5c-.06.24.02.5.22.63a.5.5 0 0 0 .63-.05l3.84-3.74-.7-.7-2.51 2.43 1.13-3.81-.68-.69L3.8 6.8l.85-.73-.71-.7L2.52 6.6Zm-.67-5.45a.5.5 0 1 0-.7.7l11 11a.5.5 0 0 0 .7-.7l-11-11Z",
          })
        ),
        contrast: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M3 3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h10a.5.5 0 0 0 .5-.5V11h2.5a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5V3Zm1 1v2.3L6.3 4H4ZM3 4v6.5a.5.5 0 0 0 .5.5H10v2H1V4h2Zm1-1h6.5a.5.5 0 0 1 .5.5V10h2V1H4v2Zm6 7V7.71l-2.3 2.3H10Zm0-3.7V4.7L4.7 10h1.6L10 6.3ZM9.3 4H7.7L4 7.71V9.3L9.3 4Z",
          })
        ),
        switchalt: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M3 3V.5c0-.27.22-.5.5-.5h10c.28 0 .5.23.5.5v10a.5.5 0 0 1-.5.5H11v2.5a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-10c0-.27.22-.5.5-.5H3Zm1 0V1h9v9h-2V3.5a.5.5 0 0 0-.5-.5H4Zm6 8v2H1V4h2v6.5c0 .28.22.5.5.5H10Zm0-1H4V4h6v6Z",
          })
        ),
        mirror: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 12h10V2L2 12Z",
          })
        ),
        grow: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M1.5 1a.5.5 0 1 0 0 1H12v10.5a.5.5 0 0 0 1 0V2a1 1 0 0 0-1-1H1.5Z",
          }),
          a.createElement("path", {
            d: "M1 3.5c0-.27.22-.5.5-.5H10a1 1 0 0 1 1 1v8.5a.5.5 0 0 1-1 0V4H1.5a.5.5 0 0 1-.5-.5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M1.5 5a.5.5 0 0 0-.5.5v7c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7ZM2 6v6h6V6H2Z",
          })
        ),
        paintbrush: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M11.8535.1464a.5.5 0 0 0-.7071 0L2.9827 8.3102a2.2396 2.2396 0 0 0-1.0737.599C.6772 10.141.2402 11.903.0852 12.9978 0 13.5998 0 14.0002 0 14.0002s.4004 0 1.0023-.0853c1.095-.155 2.8569-.5919 4.0887-1.8237.307-.307.5067-.6806.5992-1.0743l8.1633-8.1633a.5.5 0 0 0 0-.7071l-2-2Zm-6.253 9.546L6.543 8.75l-1.293-1.2929-.9424.9424a2.242 2.242 0 0 1 .7835.5097c.23.2302.4.4977.5095.7831ZM7.25 8.0428 12.7929 2.5 11.5 1.2071 5.957 6.75 7.25 8.0429ZM4.3839 9.6163c.4881.4882.4881 1.2796 0 1.7678-.7665.7664-1.832 1.1845-2.7791 1.403a8.6972 8.6972 0 0 1-.49.0982 8.7151 8.7151 0 0 1 .0982-.4899c.2186-.9471.6367-2.0126 1.403-2.779.4882-.4882 1.2797-.4882 1.7679 0Z",
          })
        ),
        ruler: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M1.5 1c.28 0 .5.23.5.5V2h10v-.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0V3H2v.5a.5.5 0 0 1-1 0v-2c0-.27.22-.5.5-.5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M1.5 6a.5.5 0 0 0-.5.5v6c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-11ZM2 7v5h10V7h-1v2.5a.5.5 0 0 1-1 0V7h-.75v1a.5.5 0 0 1-1 0V7H7.5v2.5a.5.5 0 0 1-1 0V7h-.75v1a.5.5 0 0 1-1 0V7H4v2.5a.5.5 0 0 1-1 0V7H2Z",
          })
        ),
        stop: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M4.5 4a.5.5 0 0 0-.5.5v5c0 .28.22.5.5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0Zm-1 0A6 6 0 1 1 1 7a6 6 0 0 1 12 0Z",
          })
        ),
        camera: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M2.5 1a.5.5 0 0 0-.5.5V2H.5a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H6v-.5a.5.5 0 0 0-.5-.5h-3ZM1 3v8h12V3H1Z",
          })
        ),
        video: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", { d: "M2.5 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M0 4c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v.5l3.19-2.4a.5.5 0 0 1 .81.4v9a.5.5 0 0 1-.8.4L10 9.5v.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm9 0v1.5a.5.5 0 0 0 .8.4L13 3.5v7L9.8 8.1a.5.5 0 0 0-.8.4V10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Z",
          })
        ),
        speaker: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M1 4.50004V9.50004C1 9.77618 1.22386 10 1.5 10H4L7.17075 12.7744C7.49404 13.0573 8 12.8277 8 12.3982V1.60192C8 1.17235 7.49404 0.942757 7.17075 1.22564L4 4.00004H1.5C1.22386 4.00004 1 4.2239 1 4.50004ZM4 9.00004V5.00004H2V9.00004H4ZM4.99804 9.54456C4.99934 9.52989 5 9.51505 5 9.50004V4.50004C5 4.48504 4.99934 4.47019 4.99804 4.45552L7 2.70381V11.2963L4.99804 9.54456Z",
          }),
          a.createElement("path", {
            d: "M10.1498 1.75202C9.88637 1.66927 9.60572 1.81577 9.52297 2.07922C9.44023 2.34267 9.58672 2.62332 9.85017 2.70607C11.6763 3.27963 13 4.98596 13 7.00014C13 9.01433 11.6763 10.7207 9.85017 11.2942C9.58672 11.377 9.44023 11.6576 9.52297 11.9211C9.60572 12.1845 9.88637 12.331 10.1498 12.2483C12.3808 11.5476 14 9.4636 14 7.00014C14 4.53669 12.3808 2.45272 10.1498 1.75202Z",
          }),
          a.createElement("path", {
            d: "M10.2504 3.96861C10.0113 3.83033 9.70547 3.91201 9.5672 4.15105C9.42893 4.39008 9.51061 4.69594 9.74964 4.83421C10.4982 5.26723 11 6.07534 11 7.00006C11 7.92479 10.4982 8.7329 9.74964 9.16591C9.51061 9.30418 9.42893 9.61005 9.5672 9.84908C9.70547 10.0881 10.0113 10.1698 10.2504 10.0315C11.2952 9.42711 12 8.29619 12 7.00006C12 5.70394 11.2952 4.57302 10.2504 3.96861Z",
          })
        ),
        play: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "m12.81 7.43-9.05 5.6A.5.5 0 0 1 3 12.6V1.4c0-.4.43-.63.76-.43l9.05 5.6a.5.5 0 0 1 0 .86Z",
          })
        ),
        playback: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M11.24 12.04 3.7 7.42a.5.5 0 0 1-.2-.23v4.05a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 1.5 0V6.8a.5.5 0 0 1 .2-.23l7.54-4.6a.5.5 0 0 1 .76.42v9.22a.5.5 0 0 1-.76.43Z",
          })
        ),
        playnext: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "m2.76 12.04 7.54-4.61a.5.5 0 0 0 .2-.23v4.05a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-1.5 0V6.8a.5.5 0 0 0-.2-.23l-7.54-4.6a.5.5 0 0 0-.76.42v9.22c0 .39.43.63.76.43Z",
          })
        ),
        rewind: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M9 2.42v2.32L13.23 2a.5.5 0 0 1 .77.42v9.16a.5.5 0 0 1-.77.42L9 9.26v2.32a.5.5 0 0 1-.77.42L1.5 7.65v3.6a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 1.5 0v3.6L8.23 2a.5.5 0 0 1 .77.42Z",
          })
        ),
        fastforward: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M5 2.42v2.32L.77 2a.5.5 0 0 0-.77.42v9.16c0 .4.44.64.77.42L5 9.26v2.32c0 .4.44.64.77.42l6.73-4.35v3.6a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-1.5 0v3.6L5.77 2a.5.5 0 0 0-.77.42Z",
          })
        ),
        stopalt: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11Z",
          })
        ),
        sidebyside: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M1 1.5c0-.27.22-.5.5-.5h11c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 12V2h5v10H2Z",
          })
        ),
        stacked: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M12.5 1c.28 0 .5.23.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.27.22-.5.5-.5h11ZM2 2h10v5H2V2Z",
          })
        ),
        sun: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", { d: "M7.5.5a.5.5 0 0 0-1 0V2a.5.5 0 0 0 1 0V.5Z" }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
          }),
          a.createElement("path", {
            d: "M7 11.5c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-1 0V12c0-.28.22-.5.5-.5ZM11.5 7c0-.28.22-.5.5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5ZM.5 6.5a.5.5 0 0 0 0 1H2a.5.5 0 0 0 0-1H.5ZM3.82 10.18c.2.2.2.51 0 .7l-1.06 1.07a.5.5 0 1 1-.71-.7l1.06-1.07c.2-.2.51-.2.7 0ZM11.95 2.76a.5.5 0 1 0-.7-.71l-1.07 1.06a.5.5 0 1 0 .7.7l1.07-1.05ZM10.18 10.18c.2-.2.51-.2.7 0l1.07 1.06a.5.5 0 1 1-.7.71l-1.07-1.06a.5.5 0 0 1 0-.7ZM2.76 2.05a.5.5 0 1 0-.71.7l1.06 1.07a.5.5 0 0 0 .7-.7L2.77 2.04Z",
          })
        ),
        moon: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M7.78.04a7.03 7.03 0 0 0-4.28.9 7 7 0 1 0 9.87 8.96c.1-.21-.14-.41-.36-.32a4.98 4.98 0 0 1-2 .42A5 5 0 0 1 8.53.65c.2-.12.19-.44-.04-.49a7.04 7.04 0 0 0-.72-.12Zm-1.27.98a6 6 0 0 0 4.98 9.96 6 6 0 1 1-4.98-9.96Z",
          })
        ),
        book: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M13 2a2 2 0 0 0-2-2H1.5a.5.5 0 0 0-.5.5v13c0 .28.22.5.5.5H11a2 2 0 0 0 2-2V2ZM3 13h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H7v6a.5.5 0 0 1-.86.36L5.5 6.7l-.65.65A.5.5 0 0 1 4 7V1H3v12ZM5 1v4.8l.15-.15a.5.5 0 0 1 .74.04l.11.1V1H5Z",
          })
        ),
        document: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M4 5.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5ZM4.5 7.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM4 10.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M1.5 0a.5.5 0 0 0-.5.5v13c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5V3.2a.5.5 0 0 0-.15-.35l-2.7-2.7A.5.5 0 0 0 9.79 0H1.5ZM2 1h7.5v2c0 .28.22.5.5.5h2V13H2V1Z",
          })
        ),
        copy: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M11.75.07A.5.5 0 0 0 11.5 0h-6a.5.5 0 0 0-.5.5V3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h8a.5.5 0 0 0 .5-.5V11h4.5a.5.5 0 0 0 .5-.5V2.51a.5.5 0 0 0-.15-.36l-2-2a.5.5 0 0 0-.1-.08ZM9 10h4V3h-1.5a.5.5 0 0 1-.5-.5V1H6v2h.5a.5.5 0 0 1 .36.15l1.99 2c.1.09.15.21.15.35v4.51ZM1 4v9h7V6H6.5a.5.5 0 0 1-.5-.5V4H1Z",
          })
        ),
        category: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M3 1.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm-1 2c0-.27.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M1 5.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v7a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-7ZM2 12V6h10v6H2Z",
          })
        ),
        folder: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M6.59 3.5 5.09 2H1v9h12V3.5H6.59Zm.41-1L5.8 1.3a1 1 0 0 0-.71-.3H.5a.5.5 0 0 0-.5.5v10c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H7Z",
          })
        ),
        print: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M4.5 8a.5.5 0 1 0 0 1h5a.5.5 0 0 0 0-1h-5Zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M2 1.5c0-.27.22-.5.5-.5h8a.5.5 0 0 1 .36.15l.99 1c.1.09.15.21.15.35v1.51h1.5c.28 0 .5.22.5.5v5a.5.5 0 0 1-.5.5H12v2.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10H.5a.5.5 0 0 1-.5-.5v-5c0-.28.22-.5.5-.5H2V1.5ZM13 9h-1V6.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5V9H1V5h12v4Zm-2-6v1H3V2h7v.5c0 .28.22.5.5.5h.5Zm-8 9h8V7H3v5Z",
          })
        ),
        graphline: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M5.15 6.15c.2-.2.5-.2.7 0L7 7.3l2.15-2.15c.2-.2.5-.2.7 0l1 1a.5.5 0 0 1-.7.7l-.65-.64-2.15 2.15a.5.5 0 0 1-.7 0L5.5 7.2 3.85 8.86a.5.5 0 1 1-.7-.71l2-2Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M1.5 1a.5.5 0 0 0-.5.5v11c0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-11ZM2 2v10h10V2H2Z",
          })
        ),
        calendar: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M3.5 0c.28 0 .5.22.5.5V1h6V.5a.5.5 0 0 1 1 0V1h1.5c.28 0 .5.22.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11c0-.28.22-.5.5-.5H3V.5c0-.28.22-.5.5-.5ZM2 4v2.3h3V4H2Zm0 5.2V6.8h3v2.4H2Zm0 .5V12h3V9.7H2Zm3.5 0V12h3V9.7h-3Zm3.5 0V12h3V9.7H9Zm3-.5H9V6.8h3v2.4Zm-3.5 0h-3V6.8h3v2.4ZM9 4v2.3h3V4H9ZM5.5 6.3h3V4h-3v2.3Z",
          })
        ),
        graphbar: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M12 2.5a.5.5 0 0 0-1 0v10a.5.5 0 0 0 1 0v-10Zm-3 2a.5.5 0 0 0-1 0v8a.5.5 0 0 0 1 0v-8ZM5.5 7c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0v-5c0-.28.22-.5.5-.5ZM3 10.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2Z",
          })
        ),
        menu: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M13 2a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h12Zm-3 3a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h9Zm1.5 3.5A.5.5 0 0 0 11 8H1a.5.5 0 0 0 0 1h10a.5.5 0 0 0 .5-.5Zm-4 2.5a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h6.5Z",
          })
        ),
        menualt: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M1 2a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H1Zm3 3a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1H4ZM2.5 8.5c0-.28.22-.5.5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5Zm4 2.5a.5.5 0 0 0 0 1H13a.5.5 0 0 0 0-1H6.5Z",
          })
        ),
        filter: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M1 2a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1H1Zm2 3a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1H3Zm1.5 3.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5Zm2 2.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z",
          })
        ),
        docchart: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M1 1.5C1 1.22386 1.22386 1 1.5 1H12.5C12.7761 1 13 1.22386 13 1.5V12.5C13 12.7761 12.7761 13 12.5 13H1.5C1.22386 13 1 12.7761 1 12.5V1.5ZM2 4V6.2998H5V4H2ZM2 9.2002V6.7998H5V9.2002H2ZM2 9.7002V12H5V9.7002H2ZM5.5 9.7002V12H8.5V9.7002H5.5ZM9 9.7002V12H12V9.7002H9ZM12 9.2002H9V6.7998H12V9.2002ZM8.5 9.2002H5.5V6.7998H8.5V9.2002ZM9 6.2998H12V4H9V6.2998ZM5.5 6.2998H8.5V4H5.5V6.2998Z",
          })
        ),
        doclist: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M3.5 6.5c0-.28.22-.5.5-.5h6a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5ZM4 9a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H4Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M1 1.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v11a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11ZM2 4v8h10V4H2Z",
          })
        ),
        markup: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M8.98 1.63a.5.5 0 0 0-.96-.26l-3 11a.5.5 0 1 0 .96.26l3-11ZM3.32 3.62a.5.5 0 0 1 .06.7L1.15 7l2.23 2.68a.5.5 0 1 1-.76.64l-2.5-3a.5.5 0 0 1 0-.64l2.5-3a.5.5 0 0 1 .7-.06Zm7.36 0a.5.5 0 0 0-.06.7L12.85 7l-2.23 2.68a.5.5 0 0 0 .76.64l2.5-3a.5.5 0 0 0 0-.64l-2.5-3a.5.5 0 0 0-.7-.06Z",
          })
        ),
        bold: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M3 2v1.5h1v7H3V12h5a3 3 0 0 0 1.8-5.4A2.74 2.74 0 0 0 8 2H3Zm5 5.5H5.5v3H8a1.5 1.5 0 1 0 0-3Zm-.25-4H5.5V6h2.25a1.25 1.25 0 1 0 0-2.5Z",
          })
        ),
        italic: a.createElement("path", { d: "M5 2h6v1H8.5l-2 8H9v1H3v-1h2.5l2-8H5V2Z" }),
        paperclip: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M10.55 2.27a1.5 1.5 0 0 0-2.12 0L2.78 7.92a2.5 2.5 0 0 0 3.53 3.54l3.54-3.54a.5.5 0 1 1 .7.71l-3.53 3.54a3.5 3.5 0 0 1-4.96-4.94v-.01l5.66-5.66h.01a2.5 2.5 0 0 1 3.53 3.53L5.6 10.76a1.5 1.5 0 0 1-2.12-2.12L7.02 5.1a.5.5 0 1 1 .7.7L4.2 9.34a.5.5 0 0 0 .7.7l5.66-5.65a1.5 1.5 0 0 0 0-2.12Z",
          })
        ),
        listordered: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M5 2.5c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM5 7c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 7Zm.5 4a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm-3-9H1v1h1v3h1V2.5a.5.5 0 0 0-.5-.5ZM3 8.5v1a.5.5 0 0 1-1 0V9h-.5a.5.5 0 0 1 0-1h1c.28 0 .5.22.5.5Zm-1 2a.5.5 0 0 0-1 0V12h2v-1H2v-.5Z",
          })
        ),
        listunordered: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M2.75 2.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM5.5 2a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Zm0 9a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7ZM2 12.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 7c0-.28.22-.5.5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 7Zm-3 .75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
          })
        ),
        paragraph: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M6 7a3 3 0 1 1 0-6h5.5a.5.5 0 0 1 0 1H10v10.5a.5.5 0 0 1-1 0V2H7v10.5a.5.5 0 0 1-1 0V7Z",
          })
        ),
        markdown: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M2 4.5h1.5L5 6.38 6.5 4.5H8v5H6.5V7L5 8.88 3.5 7v2.5H2v-5Zm7.75 0h1.5V7h1.25l-2 2.5-2-2.5h1.25V4.5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M.5 2a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H.5ZM1 3v8h12V3H1Z",
          })
        ),
        repository: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M5 2.5C5 2.77614 4.77614 3 4.5 3C4.22386 3 4 2.77614 4 2.5C4 2.22386 4.22386 2 4.5 2C4.77614 2 5 2.22386 5 2.5Z",
          }),
          a.createElement("path", {
            d: "M4.5 5C4.77614 5 5 4.77614 5 4.5C5 4.22386 4.77614 4 4.5 4C4.22386 4 4 4.22386 4 4.5C4 4.77614 4.22386 5 4.5 5Z",
          }),
          a.createElement("path", {
            d: "M5 6.5C5 6.77614 4.77614 7 4.5 7C4.22386 7 4 6.77614 4 6.5C4 6.22386 4.22386 6 4.5 6C4.77614 6 5 6.22386 5 6.5Z",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M11 0C12.1046 0 13 0.895431 13 2V12C13 13.1046 12.1046 14 11 14H1.5C1.22386 14 1 13.7761 1 13.5V0.5C1 0.223857 1.22386 0 1.5 0H11ZM11 1H3V13H11C11.5523 13 12 12.5523 12 12V2C12 1.44772 11.5523 1 11 1Z",
          })
        ),
        commit: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M3.03 7.5a4 4 0 0 0 7.94 0h2.53a.5.5 0 0 0 0-1h-2.53a4 4 0 0 0-7.94 0H.5a.5.5 0 0 0 0 1h2.53ZM7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
          })
        ),
        branch: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M6 2.5c0 .65-.42 1.2-1 1.41v4.06A3.36 3.36 0 0 1 7.5 7a2.7 2.7 0 0 0 1.81-.56c.22-.18.38-.4.48-.62a1.5 1.5 0 1 1 1.03.15c-.16.42-.43.87-.86 1.24-.57.47-1.37.79-2.46.79-1.04 0-1.64.42-2 .92-.26.37-.4.8-.47 1.18A1.5 1.5 0 1 1 4 10.09V3.9a1.5 1.5 0 1 1 2-1.4Zm-2 9a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm1-9a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm6 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z",
          })
        ),
        pullrequest: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M8.35 1.35 7.71 2h.79A2.5 2.5 0 0 1 11 4.5v5.59a1.5 1.5 0 1 1-1 0V4.5C10 3.67 9.33 3 8.5 3h-.8l.65.65a.5.5 0 1 1-.7.7l-1.5-1.5a.5.5 0 0 1 0-.7l1.5-1.5a.5.5 0 1 1 .7.7ZM11 11.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM4 3.91a1.5 1.5 0 1 0-1 0v6.18a1.5 1.5 0 1 0 1 0V3.9ZM3.5 11a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Zm0-8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z",
          })
        ),
        merge: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M4.1 3.87a1.5 1.5 0 1 0-1.1.04v6.18a1.5 1.5 0 1 0 1 0V6.4c.26.4.57.77.93 1.08A6.57 6.57 0 0 0 9.08 9a1.5 1.5 0 1 0 0-1 5.57 5.57 0 0 1-3.5-1.25 4.74 4.74 0 0 1-1.47-2.87ZM3.5 11a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1ZM4 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm7 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z",
          })
        ),
        apple: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M11.03 8.1a3.05 3.05 0 0 1-.2-1.74 2.7 2.7 0 0 1 1.4-1.94 3.13 3.13 0 0 0-2.35-1.4c-.84-.08-2.01.56-2.65.57h-.02c-.63 0-1.81-.65-2.64-.57-.42.04-1.75.32-2.55 1.6-.28.44-.5 1.01-.58 1.74a6.36 6.36 0 0 0 .02 1.74 7.5 7.5 0 0 0 1.35 3.33c.7 1.01 1.51 1.6 1.97 1.6.93.02 1.74-.6 2.41-.6l.02.01h.04c.67-.02 1.48.61 2.42.6.45-.02 1.26-.6 1.97-1.6a7.95 7.95 0 0 0 .97-1.86 2.6 2.6 0 0 1-1.58-1.48ZM8.86 2.13c.72-.85.7-2.07.63-2.12-.07-.06-1.25.16-1.99.98a2.78 2.78 0 0 0-.62 2.13c.06.05 1.27-.14 1.98-.99Z",
          })
        ),
        linux: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M7 0a3 3 0 0 1 3 3v1.24c.13.13.25.27.36.42l.52.43.2.15c.32.26.7.59 1.09.97A6.28 6.28 0 0 1 14 9.54a.5.5 0 0 1-.35.44c-.31.1-.8.18-1.34.13-.33-.03-.7-.12-1.05-.3-.04.17-.1.34-.17.51a2 2 0 1 1-2.89 2.56 5.5 5.5 0 0 1-2.4 0 2 2 0 1 1-2.9-2.56 5.56 5.56 0 0 1-.16-.51c-.35.18-.72.27-1.05.3a3.4 3.4 0 0 1-1.34-.13.5.5 0 0 1-.35-.44l.01-.14a6.28 6.28 0 0 1 1.82-3.2 13.42 13.42 0 0 1 1.3-1.11c.22-.19.4-.32.5-.43.12-.15.24-.29.37-.42V3a3 3 0 0 1 3-3Zm1 11.9a2 2 0 0 1 2.14-1.9 5.5 5.5 0 0 0 .36-2c0-.51-.1-1.07-.3-1.6l-.03-.02a4.4 4.4 0 0 0-.86-.42 6.71 6.71 0 0 0-1-.31l-.86.64c-.27.2-.63.2-.9 0l-.85-.64a6.72 6.72 0 0 0-1.87.73l-.03.02A4.6 4.6 0 0 0 3.5 8c0 .68.11 1.39.36 2H4a2 2 0 0 1 2 1.9 4.49 4.49 0 0 0 2 0ZM5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6.1 4.3a1.5 1.5 0 0 1 1.8 0l.27.2L7 5.38 5.83 4.5l.27-.2ZM8.5 2c.28 0 .5.22.5.5V3a.5.5 0 0 1-1 0v-.5c0-.28.22-.5.5-.5ZM6 2.5a.5.5 0 0 0-1 0V3a.5.5 0 0 0 1 0v-.5Z",
          })
        ),
        ubuntu: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M12.26 2.07c0 1.14-.89 2.06-1.99 2.06s-1.99-.92-1.99-2.06c0-1.14.9-2.07 2-2.07s1.98.93 1.98 2.07ZM3.98 6.6c0 1.14-.9 2.07-2 2.07C.9 8.67 0 7.74 0 6.6c0-1.14.9-2.07 1.99-2.07 1.1 0 1.99.93 1.99 2.07ZM6.47 11.92a4.76 4.76 0 0 1-3.3-2.62c-.53.25-1.12.33-1.7.22a6.72 6.72 0 0 0 1.84 2.63 6.38 6.38 0 0 0 4.24 1.58c-.37-.5-.57-1.1-.59-1.73a4.77 4.77 0 0 1-.49-.08ZM11.81 11.93c0 1.14-.89 2.07-1.99 2.07s-1.98-.93-1.98-2.07c0-1.14.89-2.06 1.98-2.06 1.1 0 2 .92 2 2.06ZM12.6 11.17a6.93 6.93 0 0 0 .32-7.93A2.95 2.95 0 0 1 11.8 4.6a5.23 5.23 0 0 1-.16 5.03c.47.4.8.94.95 1.54ZM1.99 3.63h-.15A6.48 6.48 0 0 1 8 .24a3.07 3.07 0 0 0-.6 1.68 4.7 4.7 0 0 0-3.9 2.17c-.46-.3-.98-.45-1.51-.45Z",
          })
        ),
        windows: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M6.5 1H1v5.5h5.5V1ZM13 1H7.5v5.5H13V1ZM7.5 7.5H13V13H7.5V7.5ZM6.5 7.5H1V13h5.5V7.5Z",
          })
        ),
        storybook: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M2.04.62a.7.7 0 0 0-.66.72l.44 11.56c.01.37.3.66.67.68l9.4.42h.02a.7.7 0 0 0 .7-.7V.66a.7.7 0 0 0-.74-.66l-.77.05.05 1.62a.1.1 0 0 1-.17.08l-.52-.4-.61.46a.1.1 0 0 1-.17-.09L9.75.13l-7.7.49Zm8 4.74c-.24.2-2.09.33-2.09.05.04-1.04-.43-1.09-.69-1.09-.24 0-.66.08-.66.64 0 .57.6.89 1.32 1.27 1.02.53 2.24 1.18 2.24 2.82 0 1.57-1.27 2.43-2.9 2.43-1.67 0-3.14-.68-2.97-3.03.06-.27 2.2-.2 2.2 0-.03.97.19 1.26.75 1.26.43 0 .62-.24.62-.64 0-.6-.63-.95-1.36-1.36-.99-.56-2.15-1.2-2.15-2.7 0-1.5 1.03-2.5 2.86-2.5 1.83 0 2.84.99 2.84 2.85Z",
          })
        ),
        azuredevops: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "m0 5.18 1.31-1.73 4.9-2V.01l4.3 3.15-8.78 1.7v4.8L0 9.16V5.18Zm14-2.6v8.55l-3.36 2.86-5.42-1.79V14L1.73 9.66l8.78 1.05V3.16L14 2.58Z",
          })
        ),
        bitbucket: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M1 1.52A.41.41 0 0 0 .59 2l1.74 10.6c.05.26.28.46.55.46h8.37c.2 0 .38-.14.42-.34l1.01-6.25H8.81l-.46 2.71H5.68L4.95 5.4h7.91L13.4 2a.41.41 0 0 0-.41-.48H1Z",
          })
        ),
        chrome: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M13.02 3.43a.11.11 0 0 1-.1.17H7a3.4 3.4 0 0 0-3.3 2.55.11.11 0 0 1-.21.03L1.52 2.76a.11.11 0 0 1 0-.12 6.97 6.97 0 0 1 9-1.7c1.03.6 1.9 1.47 2.5 2.5ZM7 9.62a2.62 2.62 0 1 1 0-5.24 2.62 2.62 0 0 1 0 5.24Zm1.03.7a.11.11 0 0 0-.12-.04 3.4 3.4 0 0 1-4-1.84L1.1 3.57a.11.11 0 0 0-.2 0 7 7 0 0 0 5.07 10.35c.04 0 .08-.02.1-.05l1.97-3.42a.11.11 0 0 0 0-.13Zm1.43-5.95h3.95c.05 0 .1.03.1.07a6.97 6.97 0 0 1-1.53 7.48A6.96 6.96 0 0 1 7.08 14a.11.11 0 0 1-.1-.17l2.81-4.88h.01a3.38 3.38 0 0 0-.42-4.38.11.11 0 0 1 .08-.2Z",
          })
        ),
        chromatic: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M0 7a7 7 0 1 0 14 0A7 7 0 0 0 0 7Zm5.22-3.87a1.97 1.97 0 0 1 3.75.83v1.29L5.61 3.32a2.49 2.49 0 0 0-.4-.19ZM8.7 5.71 5.35 3.78a1.97 1.97 0 0 0-2.6 2.83c.12-.1.24-.18.37-.26l1.51-.87a.27.27 0 0 1 .27 0L7 6.69l1.7-.98Zm-.32 4.97-1.52-.87a.27.27 0 0 1-.13-.23V7.15l-1.7-.97v3.86a1.97 1.97 0 0 0 3.75.83 2.5 2.5 0 0 1-.4-.19Zm.26-.46a1.97 1.97 0 0 0 2.6-2.83c-.11.1-.23.18-.36.26L7.53 9.58l1.11.64Zm-4.1.26h-.17a1.97 1.97 0 0 1-1.9-2.47 2 2 0 0 1 .92-1.2l1.11-.63v3.86c0 .14.01.29.04.44Zm6.79-5.98a1.97 1.97 0 0 0-1.87-.97c.03.14.04.29.04.43v1.75c0 .1-.05.19-.14.23l-2.1 1.22V9.1l3.35-1.93a1.97 1.97 0 0 0 .72-2.68Z",
          })
        ),
        componentdriven: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M10.85 2.18 8.87.2a.69.69 0 0 0-.97 0L3.09 5.01a.69.69 0 0 0 0 .97l2.46 2.46-2.4 2.4a.69.69 0 0 0 0 .98l1.98 1.98c.27.27.7.27.97 0l4.8-4.81a.69.69 0 0 0 0-.97L8.45 5.56l2.4-2.4a.69.69 0 0 0 0-.98Z",
          })
        ),
        discord: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M11.85 2.88C10.95 2.48 10 2.18 9 2a7.05 7.05 0 0 0-.4.75 10.66 10.66 0 0 0-3.2 0c-.1-.23-.24-.5-.36-.73A.04.04 0 0 0 4.99 2a11.51 11.51 0 0 0-2.86.9 11.82 11.82 0 0 0-2.05 8 11.6 11.6 0 0 0 3.5 1.77c.01 0 .03 0 .04-.02.27-.36.51-.75.72-1.16a.04.04 0 0 0-.03-.06 7.66 7.66 0 0 1-1.09-.52.04.04 0 0 1 0-.08 5.96 5.96 0 0 0 .26-.17 8.28 8.28 0 0 0 7.08 0l.22.17c.02.02.02.06 0 .08-.36.2-.72.37-1.1.52a.04.04 0 0 0-.02.06c.2.4.45.8.71 1.16.01.02.03.02.05.02a11.57 11.57 0 0 0 3.52-1.8 11.74 11.74 0 0 0-2.09-7.99Zm-7.17 6.4c-.7 0-1.26-.63-1.26-1.41 0-.78.56-1.41 1.26-1.41s1.27.64 1.26 1.4c0 .79-.56 1.42-1.26 1.42Zm4.65 0c-.69 0-1.26-.63-1.26-1.41 0-.78.56-1.41 1.26-1.41s1.27.64 1.26 1.4c0 .79-.55 1.42-1.26 1.42Z",
          })
        ),
        facebook: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M7.4 14H5.06V7H3.5V4.59h1.56V3.17C5.06 1.2 5.53 0 7.6 0h1.72v2.41H8.25c-.8 0-.85.34-.85.97v1.2h1.93L9.11 7H7.4l-.01 7Z",
          })
        ),
        figma: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            fillRule: "evenodd",
            d: "M9.2 0H4.8a2.6 2.6 0 0 0-1.4 4.8 2.6 2.6 0 0 0 0 4.4 2.6 2.6 0 1 0 4 2.2V8.89a2.6 2.6 0 1 0 3.2-4.09A2.6 2.6 0 0 0 9.2 0ZM7.4 7A1.8 1.8 0 1 0 11 7a1.8 1.8 0 0 0-3.6 0Zm-.8 2.6H4.8a1.8 1.8 0 1 0 1.8 1.8V9.6ZM4.8 4.4h1.8V.8H4.8a1.8 1.8 0 0 0 0 3.59Zm0 .8a1.8 1.8 0 0 0 0 3.6h1.8V5.2H4.8Zm4.4-.8H7.4V.8h1.8a1.8 1.8 0 1 1 0 3.59Z",
          })
        ),
        gdrive: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M6.37 8.77 4.33 12.3h6.75l2.04-3.54H6.38Zm6.18-1-3.5-6.08h-4.1l3.51 6.08h4.09ZM4.38 2.7.88 8.77l2.04 3.54 3.5-6.07L4.38 2.7Z",
          })
        ),
        github: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M7 0a7 7 0 0 0-2.21 13.64c.35.06.48-.15.48-.33L5.26 12c-1.76.32-2.21-.43-2.35-.83-.08-.2-.43-.82-.72-.99-.25-.13-.6-.45-.01-.46.55 0 .94.5 1.07.72.63 1.06 1.64.76 2.04.58.07-.46.25-.77.45-.94-1.56-.18-3.19-.78-3.19-3.46 0-.76.28-1.39.72-1.88-.07-.17-.31-.9.07-1.85 0 0 .59-.19 1.93.71a6.5 6.5 0 0 1 3.5 0c1.34-.9 1.92-.71 1.92-.71.39.96.14 1.68.07 1.85.45.5.72 1.11.72 1.88 0 2.69-1.64 3.28-3.2 3.46.26.22.48.64.48 1.3l-.01 1.92c0 .18.13.4.48.33A7.01 7.01 0 0 0 7 0Z",
          })
        ),
        gitlab: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M4.53 5.58H1.07l1.49-4.55a.26.26 0 0 1 .48 0l1.49 4.55ZM7 13.15 1.07 5.58l-.75 2.3a.5.5 0 0 0 .18.57l6.5 4.7Zm0 0 6.5-4.7a.5.5 0 0 0 .18-.57l-.75-2.3L7 13.15l2.47-7.57H4.53L7 13.15Zm2.47-7.57h3.46l-1.49-4.55a.26.26 0 0 0-.48 0L9.47 5.58Z",
          })
        ),
        google: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M10.92 1.1H7.26c-1.64 0-3.19 1.24-3.19 2.68 0 1.47 1.12 2.66 2.8 2.66l.33-.01c-.1.2-.18.44-.18.68 0 .41.22.75.5 1.02h-.64c-2.03 0-3.6 1.3-3.6 2.64 0 1.32 1.72 2.15 3.75 2.15 2.32 0 3.6-1.31 3.6-2.64 0-1.06-.31-1.7-1.28-2.38-.33-.23-.96-.8-.96-1.14 0-.39.1-.58.7-1.04a2.46 2.46 0 0 0 1.03-1.92c0-.92-.4-1.82-1.18-2.11h1.17l.81-.6ZM9.6 10.04c.03.13.05.25.05.38 0 1.07-.7 1.9-2.67 1.9-1.4 0-2.42-.88-2.42-1.95 0-1.05 1.26-1.92 2.66-1.9a3 3 0 0 1 .92.14c.76.53 1.3.83 1.46 1.43ZM7.34 6.07c-.94-.03-1.84-1.06-2-2.3-.17-1.24.47-2.19 1.41-2.16.94.03 1.84 1.03 2 2.26.17 1.24-.47 2.23-1.41 2.2Z",
          })
        ),
        graphql: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M7.87 11.6a1.17 1.17 0 0 0-1.7-.02l-2.71-1.56.01-.04h7.07l.02.07-2.69 1.56Zm-1.7-9.18.03.03-3.54 6.12h-.04V5.43a1.17 1.17 0 0 0 .84-1.46l2.7-1.56Zm4.38 1.56a1.17 1.17 0 0 0 .84 1.46v3.12l-.04.01-3.54-6.12c.02 0 .03-.02.04-.03l2.7 1.56ZM3.47 9.42a1.17 1.17 0 0 0-.32-.57l3.53-6.12a1.17 1.17 0 0 0 .65 0l3.54 6.12a1.17 1.17 0 0 0-.33.57H3.47Zm8.8-.74c-.1-.05-.21-.1-.32-.12V5.44a1.17 1.17 0 1 0-1.12-1.94l-2.7-1.56a1.17 1.17 0 1 0-2.24 0L3.19 3.5a1.17 1.17 0 1 0-1.13 1.94v3.12a1.17 1.17 0 1 0 1.12 1.94l2.7 1.56a1.17 1.17 0 1 0 2.24-.03l2.69-1.55a1.17 1.17 0 1 0 1.45-1.8Z",
          })
        ),
        medium: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M0 0v14h14V0H0Zm11.63 3.32-.75.72a.22.22 0 0 0-.08.2v5.33c0 .07.03.14.08.18l.73.72v.16H7.92v-.16l.76-.74c.08-.07.08-.1.08-.21V5.24l-2.11 5.37h-.29L3.9 5.24v3.67c0 .13.05.25.14.34l.99 1.2v.16h-2.8v-.16l.98-1.2a.48.48 0 0 0 .13-.41V4.65c0-.11-.04-.2-.12-.27l-.88-1.06v-.16h2.73l2.1 4.62 1.86-4.62h2.6v.16Z",
          })
        ),
        redux: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M4.06 9.69c.02.49.42.88.91.88H5a.91.91 0 0 0-.03-1.83h-.03c-.03 0-.08 0-.11.02a5.97 5.97 0 0 1-.85-3.62c.06-.98.39-1.82.96-2.52.47-.6 1.39-.9 2-.92 1.73-.03 2.47 2.12 2.51 2.99.22.04.57.16.82.24-.2-2.64-1.83-4-3.4-4-1.46 0-2.81 1.05-3.35 2.61a6.67 6.67 0 0 0 .65 5.68.74.74 0 0 0-.11.47Zm8.28-2.3a6.62 6.62 0 0 0-5.15-2.25h-.26a.9.9 0 0 0-.8-.49H6.1a.91.91 0 0 0 .03 1.83h.03a.92.92 0 0 0 .8-.56h.3c1.23 0 2.4.36 3.47 1.06.81.54 1.4 1.24 1.72 2.09.28.68.26 1.35-.03 1.92a2.4 2.4 0 0 1-2.23 1.34c-.65 0-1.27-.2-1.6-.34-.18.16-.5.42-.73.58.7.33 1.41.5 2.1.5 1.56 0 2.72-.85 3.16-1.72.47-.94.44-2.57-.78-3.96ZM4.9 12.9a4 4 0 0 1-.98.11c-1.2 0-2.3-.5-2.84-1.32C.38 10.6.13 8.3 2.5 6.58c.05.26.15.62.22.83-.31.23-.8.68-1.11 1.3a2.4 2.4 0 0 0 .13 2.53c.36.54.93.86 1.66.96.9.11 1.8-.05 2.66-.5a5.83 5.83 0 0 0 2.67-2.56.91.91 0 0 1 .62-1.55h.03a.92.92 0 0 1 .1 1.82 6.26 6.26 0 0 1-4.56 3.49Z",
          })
        ),
        twitter: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M14 2.55c-.51.23-1.07.39-1.65.46.6-.36 1.05-.94 1.26-1.63-.55.34-1.17.58-1.82.72a2.84 2.84 0 0 0-2.1-.93 2.9 2.9 0 0 0-2.8 3.61 8.09 8.09 0 0 1-5.9-3.07 2.99 2.99 0 0 0 .88 3.93 2.8 2.8 0 0 1-1.3-.37v.04c0 1.42 1 2.61 2.3 2.89a2.82 2.82 0 0 1-1.3.05 2.89 2.89 0 0 0 2.7 2.04A5.67 5.67 0 0 1 0 11.51a7.98 7.98 0 0 0 4.4 1.32c5.29 0 8.17-4.48 8.17-8.38v-.38A5.93 5.93 0 0 0 14 2.55Z",
          })
        ),
        youtube: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M13.99 8.17V5.83a14.95 14.95 0 0 0-.23-2.22c-.09-.38-.27-.7-.55-.96s-.6-.41-.97-.45A51.3 51.3 0 0 0 7 2c-2.34 0-4.09.07-5.24.2A1.78 1.78 0 0 0 .25 3.61 15.26 15.26 0 0 0 0 7v1.16a15.24 15.24 0 0 0 .24 2.22c.09.38.27.7.55.96.27.26.6.41.97.45 1.15.13 2.9.2 5.24.2 2.34 0 4.08-.06 5.24-.2.37-.04.7-.19.97-.45s.45-.58.54-.96a15.26 15.26 0 0 0 .24-2.22Zm-4.23-1.6c.16.1.24.24.24.43 0 .2-.08.33-.24.42l-4 2.5a.44.44 0 0 1-.26.08.54.54 0 0 1-.24-.06A.46.46 0 0 1 5 9.5v-5c0-.2.08-.34.26-.44.17-.1.34-.09.5.02l4 2.5Z",
          })
        ),
        linkedin: a.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M11.6667 13H2.33333C1.59695 13 1 12.403 1 11.6667V2.33333C1 1.59695 1.59695 1 2.33333 1H11.6667C12.403 1 13 1.59695 13 2.33333V11.6667C13 12.403 12.403 13 11.6667 13ZM9.55293 11.3333H11.3337V7.67516C11.3337 6.12737 10.4563 5.379 9.23075 5.379C8.00467 5.379 7.48867 6.33378 7.48867 6.33378V5.55552H5.77255V11.3333H7.48867V8.30031C7.48867 7.48764 7.86276 7.00405 8.57878 7.00405C9.23696 7.00405 9.55293 7.46875 9.55293 8.30031V11.3333ZM2.66699 3.73279C2.66699 4.32157 3.14067 4.79896 3.72522 4.79896C4.30977 4.79896 4.78316 4.32157 4.78316 3.73279C4.78316 3.14402 4.30977 2.66663 3.72522 2.66663C3.14067 2.66663 2.66699 3.14402 2.66699 3.73279ZM4.62856 11.3333H2.83908V5.55552H4.62856V11.3333Z",
          fill: "#1EA7FD",
        }),
        vscode: a.createElement(
          a.Fragment,
          null,
          a.createElement("path", {
            d: "M10.24.04c.13 0 .26.03.38.09L13.5 1.5a.87.87 0 0 1 .5.8v.03-.01 9.39c0 .33-.2.63-.5.78l-2.88 1.38a.87.87 0 0 1-1-.17l-5.5-5.03-2.4 1.83a.58.58 0 0 1-.75-.04l-.77-.7a.58.58 0 0 1 0-.86L2.27 7 .2 5.1a.58.58 0 0 1 0-.86l.77-.7c.21-.2.52-.2.75-.04l2.4 1.83L9.63.3a.87.87 0 0 1 .61-.26Zm.26 3.78L6.32 7l4.18 3.18V3.82Z",
          })
        ),
      },
      Zm = w.svg({
        display: "inline-block",
        shapeRendering: "inherit",
        transform: "translate3d(0, 0, 0)",
        verticalAlign: "middle",
        path: { fill: "currentColor" },
      }),
      Ol = ({ icon: e, ...t }) =>
        a.createElement(
          Zm,
          { viewBox: "0 0 14 14", width: "14px", height: "14px", ...t },
          a.createElement(a.Fragment, null, Im[e])
        ),
      Gt = { large: 40, medium: 28, small: 20, tiny: 16 },
      Bm = w.div(
        {
          background: "transparent",
          display: "inline-block",
          verticalAlign: "top",
          overflow: "hidden",
          textTransform: "uppercase",
          img: { width: "100%", height: "auto", display: "block" },
        },
        (e) => ({
          borderRadius: e.type === "user" ? "50%" : 5,
          height: `${Gt[e.size || "medium"]}px`,
          width: `${Gt[e.size || "medium"]}px`,
          lineHeight: `${Gt[e.size || "medium"]}px`,
          ...(e.isLoading && { background: V.light, filter: "grayscale(1)" }),
          ...(!e.src && !e.isLoading && { background: "#37D5D3" }),
        })
      ),
      Pm = w(Ol)(
        {
          position: "relative",
          margin: "0 auto",
          display: "block",
          verticalAlign: "top",
          path: { fill: V.medium, animation: `${Zs} 1.5s ease-in-out infinite` },
        },
        (e) => ({
          bottom: `${e.type === "user" ? -2 : -4}px`,
          height: `${e.type === "user" ? 100 : 70}%`,
          width: `${e.type === "user" ? 100 : 70}%`,
        })
      ),
      Vm = w.div(
        { color: V.lightest, textAlign: "center" },
        (e) =>
          ({
            tiny: { fontSize: `${P.size.s1 - 2}px`, lineHeight: `${Gt.tiny}px` },
            small: { fontSize: `${P.size.s1}px`, lineHeight: `${Gt.small}px` },
            medium: { fontSize: `${P.size.s2}px`, lineHeight: `${Gt.medium}px` },
            large: { fontSize: `${P.size.s3}px`, lineHeight: `${Gt.large}px` },
          })[e.size || "medium"]
      ),
      Dm = ({
        isLoading: e = !1,
        username: t = "loading",
        src: n = void 0,
        size: r = "medium",
        type: i = "user",
        ...l
      }) => {
        let o = a.createElement(Pm, { icon: i === "user" ? "useralt" : "repository", type: i }),
          s = {};
        return (
          e
            ? ((s["aria-busy"] = !0), (s["aria-label"] = "Loading avatar ..."))
            : n
              ? (o = a.createElement("img", { src: n, alt: t }))
              : ((s["aria-label"] = t),
                (o = a.createElement(Vm, { size: r, "aria-hidden": "true" }, t.substring(0, 1)))),
          a.createElement(Bm, { size: r, isLoading: e, src: n, type: i, ...s, ...l }, o)
        );
      },
      Hm = w.span(
        (e) =>
          e.withArrow && {
            "> svg:last-of-type": {
              height: "0.65em",
              width: "0.65em",
              marginRight: 0,
              marginLeft: "0.25em",
              bottom: "auto",
              verticalAlign: "inherit",
            },
          }
      ),
      jm = w.a(
        {
          display: "inline-block",
          transition: "transform 150ms ease-out, color 150ms ease-out",
          textDecoration: "none",
          color: V.secondary,
          "&:hover, &:focus-visible": {
            cursor: "pointer",
            transform: "translateY(-1px)",
            color: Wt(0.07, V.secondary),
          },
          "&:active": { transform: "translateY(0)", color: Wt(0.1, V.secondary) },
          svg: {
            display: "inline-block",
            height: "1em",
            width: "1em",
            verticalAlign: "text-top",
            position: "relative",
            bottom: "-0.125em",
            marginRight: "0.4em",
          },
        },
        (e) => ({
          ...(e.secondary && {
            color: e.theme.base === "light" ? V.mediumdark : V.medium,
            "&:hover": { color: e.theme.base === "light" ? V.dark : V.light },
            "&:active": { color: e.theme.base === "light" ? V.darker : V.lighter },
          }),
          ...(e.tertiary && {
            color: V.dark,
            "&:hover": { color: V.darkest },
            "&:active": { color: V.mediumdark },
          }),
          ...(e.nochrome && {
            color: "inherit",
            "&:hover, &:active": { color: "inherit", textDecoration: "underline" },
          }),
          ...(e.inverse && {
            color: V.lightest,
            "&:hover": { color: V.lighter },
            "&:active": { color: V.light },
          }),
        })
      ),
      zm = w.a({}),
      Um = w.button({
        background: "none",
        border: "none",
        padding: "0",
        font: "inherit",
        cursor: "pointer",
      }),
      zs = $(
        (
          { inverse: e, isButton: t, LinkWrapper: n, nochrome: r, secondary: i, tertiary: l, ...o },
          s
        ) =>
          t
            ? a.createElement(Um, { ...o, ref: s })
            : n
              ? a.createElement(n, { ...o, ref: s })
              : a.createElement(zm, { ...o, ref: s })
      );
    zs.displayName = "LinkComponentPicker";
    var Be = $(({ children: e, withArrow: t, ...n }, r) => {
      let i = a.createElement(
        a.Fragment,
        null,
        a.createElement(Hm, { withArrow: !!t }, e, t && a.createElement(Ol, { icon: "arrowright" }))
      );
      return a.createElement(jm, { as: zs, ref: r, ...n }, i);
    });
    Be.displayName = "Link";
    Be.defaultProps = {
      withArrow: !1,
      isButton: !1,
      secondary: !1,
      tertiary: !1,
      nochrome: !1,
      inverse: !1,
    };
    var $m = w.label((e) => ({
        ...(e.appearance !== "code" && { fontWeight: P.weight.bold }),
        ...(e.appearance === "code"
          ? { fontFamily: P.type.code, fontSize: `${P.size.s1 - 1}px`, lineHeight: "16px" }
          : { fontSize: `${P.size.s2}px`, lineHeight: "20px" }),
      })),
      Wm = w.div([
        { marginBottom: 8 },
        (e) =>
          e.hideLabel && {
            border: "0px !important",
            clip: "rect(0 0 0 0) !important",
            WebkitClipPath: "inset(100%) !important",
            clipPath: "inset(100%) !important",
            height: "1px !important",
            overflow: "hidden !important",
            padding: "0px !important",
            position: "absolute !important",
            whiteSpace: "nowrap !important",
            width: "1px !important",
          },
      ]),
      Gm = w.input({
        "&::placeholder": { color: V.mediumdark },
        appearance: "none",
        border: "none",
        boxSizing: "border-box",
        display: "block",
        outline: "none",
        width: "100%",
        margin: "0",
        "&[disabled]": { cursor: "not-allowed", opacity: 0.5 },
        "&:-webkit-autofill": { WebkitBoxShadow: `0 0 0 3em ${V.lightest} inset` },
      }),
      qm = (e) => {
        let t = { position: "relative", ...(e.error && { zIndex: 1 }), "&:focus": { zIndex: 2 } };
        switch (e.stackLevel) {
          case "top":
            return {
              borderTopLeftRadius: "4px",
              borderTopRightRadius: "4px",
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              ...t,
            };
          case "middle":
            return { borderRadius: 0, marginTop: -1, ...t };
          case "bottom":
            return {
              borderBottomLeftRadius: "4px",
              borderBottomRightRadius: "4px",
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              marginTop: -1,
              ...t,
            };
          default:
            return { borderRadius: "4px" };
        }
      },
      Ym = w.div((e) => ({
        display: "inline-block",
        position: "relative",
        verticalAlign: "top",
        width: "100%",
        ".sbds-input-el": {
          position: "relative",
          ...qm(e),
          background: V.lightest,
          color: V.darkest,
          fontSize: `${P.size.s2}px`,
          lineHeight: "20px",
          padding: "10px 15px",
          boxShadow: `${V.border} 0 0 0 1px inset`,
          "&:focus": { boxShadow: `${V.secondary} 0 0 0 1px inset` },
          ...(e.appearance === "pill" && {
            fontSize: `${P.size.s1}px`,
            lineHeight: "16px",
            padding: "6px 12px",
            borderRadius: "3em",
            background: "transparent",
          }),
          ...(e.appearance === "code" && {
            fontSize: `${P.size.s1 - 1}px`,
            lineHeight: "16px",
            fontFamily: P.type.code,
            borderRadius: `${Al.borderRadius.small}px`,
            background: V.lightest,
            padding: "8px 10px",
          }),
          ...(e.startingType === "password" && { paddingRight: 52 }),
          ...(e.icon && {
            paddingLeft: 40,
            ...((e.appearance === "pill" || e.appearance === "code") && { paddingLeft: 30 }),
            "&:focus + svg path": { fill: V.darker },
          }),
          ...(e.error && {
            boxShadow: `${V.red} 0 0 0 1px inset`,
            "&:focus": { boxShadow: `${V.red} 0 0 0 1px inset !important` },
          }),
        },
        "> svg": {
          ...(e.icon && {
            transition: "all 150ms ease-out",
            position: "absolute",
            top: "50%",
            zIndex: 3,
            background: "transparent",
            ...(e.appearance === "pill" || e.appearance === "code"
              ? { fontSize: `${P.size.s1}px`, height: 12, marginTop: -6, width: 12, left: 10 }
              : {
                  fontSize: `${P.size.s2}px`,
                  height: 14,
                  marginTop: -7,
                  width: 14,
                  left: e.appearance === "tertiary" ? 0 : 15,
                }),
            path: { transition: "all 150ms ease-out", fill: V.mediumdark },
          }),
          ...(e.error && { animation: `${Bs} 700ms ease-out`, path: { fill: V.red } }),
        },
      })),
      Qm = w.div(
        (e) =>
          e.orientation === "horizontal" && {
            display: "table-row",
            ".sbds-input-label-wrapper, .sbds-input-input-wrapper": { display: "table-cell" },
            ".sbds-input-label-wrapper": { width: 1, paddingRight: 20, verticalAlign: "middle" },
            ".sbds-input-input-wrapper": { width: "auto" },
          }
      ),
      Km = w(we)({ width: "100%" }),
      Jm = w(ro)({ width: 170 }),
      Xm = w.div({
        position: "absolute",
        right: "0",
        minWidth: 45,
        top: "50%",
        transform: "translateY(-50%)",
        fontWeight: "bold",
        fontSize: 11,
        zIndex: 2,
      }),
      Vo = ({ error: e, value: t, lastErrorValue: n }) => {
        let r = typeof e == "function" ? e(t) : e;
        return n && t !== n && (r = null), r;
      },
      Us = $(
        (
          {
            id: e,
            appearance: t = "default",
            className: n = void 0,
            error: r = null,
            errorTooltipPlacement: i = "right",
            hideLabel: l = !1,
            icon: o = void 0,
            label: s,
            lastErrorValue: c = void 0,
            onActionClick: d = void 0,
            orientation: u = "vertical",
            stackLevel: m = void 0,
            startingType: p = "text",
            suppressErrorMessage: f = !1,
            type: g = "text",
            value: v = "",
            ...k
          },
          E
        ) => {
          let [h, y] = _e(Vo({ error: r, value: v, lastErrorValue: c })),
            b = `${e}-error`;
          K(() => {
            y(Vo({ error: r, value: v, lastErrorValue: c }));
          }, [v, r, c]);
          let C = a.createElement(Gm, {
            className: "sbds-input-el",
            id: e,
            ref: E,
            value: v,
            type: g,
            "aria-describedby": b,
            "aria-invalid": !!r,
            ...k,
          });
          return a.createElement(
            Qm,
            { orientation: u, className: n },
            a.createElement(
              Wm,
              { className: "sbds-input-label-wrapper", hideLabel: l },
              a.createElement($m, { htmlFor: e, appearance: t }, s)
            ),
            a.createElement(
              Ym,
              {
                className: "sbds-input-input-wrapper",
                error: h,
                "data-error": h,
                icon: o,
                appearance: t,
                stackLevel: m,
                startingType: p,
              },
              o && a.createElement(Ol, { icon: o, "aria-hidden": !0 }),
              a.createElement(
                Km,
                {
                  tabIndex: -1,
                  placement: i,
                  startOpen: !0,
                  hasChrome: !!h && !f,
                  tooltip: h && !f && a.createElement(Jm, { desc: h }),
                  role: "none",
                },
                C
              ),
              p === "password" &&
                a.createElement(
                  Xm,
                  null,
                  a.createElement(
                    Be,
                    { isButton: !0, tertiary: !0, onClick: d, type: "button" },
                    g === "password" ? "Show" : "Hide"
                  )
                )
            )
          );
        }
      );
    Us.displayName = "PureInput";
    var $s = $(({ type: e, startFocused: t, ...n }, r) => {
      let [i, l] = _e(e),
        o = H(
          (u) => {
            if ((u.preventDefault(), u.stopPropagation(), i === "password")) {
              l("text");
              return;
            }
            l("password");
          },
          [i, l]
        ),
        s = Ne(),
        c = r || s,
        d = Ne(!1);
      return (
        K(() => {
          c.current && t && !d.current && (c.current.focus(), (d.current = !0));
        }, [c, t, d]),
        a.createElement(Us, { ref: c, startingType: e, type: i, onActionClick: o, ...n })
      );
    });
    $s.displayName = "Input";
    var e4 = w.div(
        {
          borderRadius: "3em",
          cursor: "progress",
          display: "inline-block",
          overflow: "hidden",
          position: ["relative", "absolute"],
          transition: "all 200ms ease-out",
          verticalAlign: "top",
          top: "50%",
          left: "50%",
          marginTop: -16,
          marginLeft: -16,
          height: 32,
          width: 32,
          animation: `${Is} 0.7s linear infinite`,
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: "rgba(0, 0, 0, 0.03)",
          borderTopColor: "rgba(0, 0, 0, 0.15)",
        },
        (e) => ({
          ...(e.inverse && {
            borderColor: "rgba(255, 255, 255, 0.2)",
            borderTopColor: "rgba(255, 255, 255, 0.4)",
          }),
          ...(e.inForm && {
            marginTop: -6,
            marginLeft: -6,
            height: 12,
            width: 12,
            border: `1px solid ${V.secondary}`,
            borderBottomColor: "transparent",
          }),
          ...(e.inline && {
            position: "relative",
            top: "initial",
            left: "initial",
            marginTop: "initial",
            marginLeft: "initial",
            verticalAlign: "middle",
            height: 8,
            width: 8,
            border: "1px solid",
            borderTopColor: V.secondary,
            borderLeftColor: V.secondary,
            borderRightColor: V.secondary,
            borderBottomColor: "transparent",
            ...(e.positive && {
              borderTopColor: V.positive,
              borderLeftColor: V.positive,
              borderRightColor: V.positive,
            }),
            ...(e.negative && {
              borderTopColor: V.red,
              borderLeftColor: V.red,
              borderRightColor: V.red,
            }),
            ...(e.neutral && {
              borderTopColor: V.dark,
              borderLeftColor: V.dark,
              borderRightColor: V.dark,
            }),
            ...(e.inverse && {
              borderTopColor: V.lightest,
              borderLeftColor: V.lightest,
              borderRightColor: V.lightest,
            }),
          }),
        })
      ),
      Ji = (e) =>
        a.createElement(e4, {
          "aria-label": "Content is loading ...",
          "aria-live": "polite",
          role: "status",
          ...e,
        }),
      t4 = function (e) {
        var t = new WeakMap();
        return function (n) {
          if (t.has(n)) return t.get(n);
          var r = e(n);
          return t.set(n, r), r;
        };
      },
      n4 = w.span({}),
      a4 = w.span(({ theme: e }) => ({
        fontWeight: e.typography.weight.bold,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      })),
      r4 = w.span({}),
      i4 = w.span({}),
      Do = w.li(({ theme: e }) => ({
        listStyle: "none",
        "&:not(:first-of-type)": { borderTop: `1px solid ${e.appBorderColor}` },
      })),
      l4 = w.span({
        lineHeight: "18px",
        padding: "7px 15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        ".sbds-list-item-title": { display: "block", flex: "0 1 auto", marginRight: "auto" },
        ".sbds-list-item-left, .sbds-list-item-center, .sbds-list-item-right": {
          display: "inline-flex",
        },
        ".sbds-list-item-center": { flex: "0 1 auto", marginLeft: "auto", marginRight: "auto" },
        ".sbds-list-item-left, .sbds-list-item-right": { flex: "0 1 auto" },
        ".sbds-list-item-right": { flex: "none", textAlign: "right", marginLeft: 10 },
      }),
      Ll = ({ active: e, activeColor: t, disabled: n, isLoading: r, theme: i }) => ({
        fontSize: `${i.typography.size.s1}px`,
        transition: "all 150ms ease-out",
        color: i.color.mediumdark,
        textDecoration: "none",
        display: "block",
        ".sbds-list-item-title": { color: i.base === "light" ? i.color.darker : i.color.lighter },
        ".sbds-list-item-right svg": {
          transition: "all 200ms ease-out",
          opacity: 0,
          height: 12,
          width: 12,
          margin: "3px 0",
          verticalAlign: "top",
          path: { fill: i.color.mediumdark },
        },
        "&:hover": {
          background: i.background.hoverable,
          cursor: "pointer",
          ".sbds-list-item-right svg": { opacity: 1 },
        },
        ...(e && {
          ".sbds-list-item-title": { fontWeight: i.typography.weight.bold },
          ".sbds-list-item-title, .sbds-list-item-center": { color: t },
          ".sbds-list-item-right svg": { opacity: 1, path: { fill: t } },
        }),
        ...(r && { ".sbds-list-item-title": { ...gm, flex: "0 1 auto", display: "inline-block" } }),
        ...(n && {
          cursor: "not-allowed !important",
          ".sbds-list-item-title, .sbds-list-item-center": { color: i.color.mediumdark },
        }),
      }),
      o4 = w(({ active: e, activeColor: t, isLoading: n, ...r }) => a.createElement("a", { ...r }))(
        Ll
      ),
      s4 = w.span(Ll),
      c4 = t4((e) =>
        w(({ active: t, isLoading: n, activeColor: r, ...i }) => a.createElement(e, { ...i }))(Ll)
      ),
      tt = ({
        appearance: e = "primary",
        left: t,
        title: n = a.createElement("span", null, "Loading"),
        center: r,
        right: i,
        onClick: l,
        LinkWrapper: o,
        isLink: s = !0,
        ...c
      }) => {
        let d = zt().color[e],
          u = a.createElement(
            l4,
            { onClick: l, role: "presentation" },
            t && a.createElement(n4, { className: "sbds-list-item-left" }, t),
            n && a.createElement(a4, { className: "sbds-list-item-title" }, n),
            r && a.createElement(r4, { className: "sbds-list-item-center" }, r),
            i && a.createElement(i4, { className: "sbds-list-item-right" }, i)
          );
        if (o) {
          let m = c4(o);
          return a.createElement(Do, null, a.createElement(m, { activeColor: d, ...c }, u));
        }
        return a.createElement(Do, null, a.createElement(s ? o4 : s4, { activeColor: d, ...c }, u));
      };
    function Yn(e) {
      function t(O, I) {
        return (O >>> I) | (O << (32 - I));
      }
      for (
        var n,
          r,
          i = Math.pow,
          l = i(2, 32),
          o = "",
          s = [],
          c = 8 * e.length,
          d = (Yn.h = Yn.h || []),
          u = (Yn.k = Yn.k || []),
          m = u.length,
          p = {},
          f = 2;
        m < 64;
        f++
      )
        if (!p[f]) {
          for (n = 0; n < 313; n += f) p[n] = f;
          (d[m] = (i(f, 0.5) * l) | 0), (u[m++] = (i(f, 1 / 3) * l) | 0);
        }
      for (e += "\x80"; (e.length % 64) - 56; ) e += "\0";
      for (n = 0; n < e.length; n++) {
        if ((r = e.charCodeAt(n)) >> 8) return;
        s[n >> 2] |= r << (((3 - n) % 4) * 8);
      }
      for (s[s.length] = (c / l) | 0, s[s.length] = c, r = 0; r < s.length; ) {
        var g = s.slice(r, (r += 16)),
          v = d;
        for (d = d.slice(0, 8), n = 0; n < 64; n++) {
          var k = g[n - 15],
            E = g[n - 2],
            h = d[0],
            y = d[4],
            b =
              d[7] +
              (t(y, 6) ^ t(y, 11) ^ t(y, 25)) +
              ((y & d[5]) ^ (~y & d[6])) +
              u[n] +
              (g[n] =
                n < 16
                  ? g[n]
                  : (g[n - 16] +
                      (t(k, 7) ^ t(k, 18) ^ (k >>> 3)) +
                      g[n - 7] +
                      (t(E, 17) ^ t(E, 19) ^ (E >>> 10))) |
                    0);
          (d = [
            (b + ((t(h, 2) ^ t(h, 13) ^ t(h, 22)) + ((h & d[1]) ^ (h & d[2]) ^ (d[1] & d[2])))) | 0,
          ].concat(d))[4] = (d[4] + b) | 0;
        }
        for (n = 0; n < 8; n++) d[n] = (d[n] + v[n]) | 0;
      }
      for (n = 0; n < 8; n++)
        for (r = 3; r + 1; r--) {
          var C = (d[n] >> (8 * r)) & 255;
          o += (C < 16 ? 0 : "") + C.toString(16);
        }
      return o;
    }
    var d4 = (e) => new Uint8Array(e).reduce((t, n) => t + String.fromCharCode(n), ""),
      u4 = (e) => window.btoa(Array.isArray(e) ? d4(e) : e),
      Ho = (e) => u4(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, ""),
      m4 = (e) => Array.from(e.match(/.{1,2}/g) ?? [], (t) => parseInt(t, 16)),
      p4 = () =>
        Math.random().toString(36).slice(2, 10) +
        Math.random().toString(36).slice(2, 10) +
        Math.random().toString(36).slice(2, 10) +
        Math.random().toString(36).slice(2, 10),
      Ws = (e) =>
        Object.entries(e)
          .map(([t, n]) => `${encodeURIComponent(t)}=${encodeURIComponent(n)}`)
          .join("&"),
      h4 = ({ error: e }) => e === "authorization_pending",
      f4 = ({ error_description: e }) => e === "Not OAuth beta user",
      g4 = async (e) => {
        let t = Ho(p4()),
          n = Ho(m4(Yn(t))),
          r = await fetch(`${Tr}/authorize`, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
            body: Ws({ client_id: "chromaui:addon-visual-tests", code_challenge: n }),
          }),
          {
            device_code: i,
            user_code: l,
            verification_uri_complete: o,
            expires_in: s,
            interval: c,
          } = await r.json(),
          d = e ? o.replace("https://www", `https://${e}`) : o;
        return {
          expires: Date.now() + s * 1e3,
          interval: c * 1e3,
          user_code: l,
          device_code: i,
          verifier: t,
          verificationUrl: d,
        };
      },
      v4 = async ({ expires: e, device_code: t, verifier: n }) => {
        if (Date.now() >= e) throw new Error("Token exchange expired, please restart sign in.");
        try {
          let r = await (
            await fetch(`${Tr}/token`, {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
              body: Ws({
                client_id: "chromaui:addon-visual-tests",
                grant_type: "urn:ietf:params:oauth:grant-type:device_code",
                device_code: t,
                code_verifier: n,
                scope: "user:read account:read project:read project:write",
              }),
            })
          ).json();
          if (h4(r))
            throw new Error(
              "You have not authorized the Visual Tests addon for Chromatic, please try again"
            );
          if (r.access_token) return r.access_token;
          if (f4(r)) return alert("You must be a beta user to use this addon at this time."), null;
          throw new Error();
        } catch (r) {
          throw (console.warn(r), r);
        }
      };
    function Gs() {
      let e = sn(),
        { addNotification: t, setOptions: n, togglePanel: r } = e,
        i = H(
          ({ onDismiss: l }) => {
            l(), n({ selectedPanel: nn }), r(!0);
          },
          [n, r]
        );
      return H(
        (l, o) => {
          t({
            id: `${Z}/error/${Date.now()}`,
            content: { headline: l, subHeadline: o.toString() },
            icon: a.createElement(St, { color: dt.negative }),
            onClick: i,
          });
        },
        [t, i]
      );
    }
    function Qe(e, t) {
      let n = H(() => {
          try {
            let s = sessionStorage.getItem(`${Z}/state/${e}`);
            if (s != null) return JSON.parse(s);
          } catch {}
          return typeof t == "function" ? t() : t;
        }, [e, t]),
        [r, i] = _e(n),
        l = ct(
          () =>
            $i(
              e,
              (s) => {
                let c = new Set(sessionStorage.getItem(`${Z}/state`)?.split(";"));
                s == null
                  ? (sessionStorage.removeItem(`${Z}/state/${e}`), c.delete(e))
                  : (sessionStorage.setItem(`${Z}/state/${e}`, JSON.stringify(s)), c.add(e)),
                  sessionStorage.setItem(`${Z}/state`, Array.from(c).join(";")),
                  window.dispatchEvent(new StorageEvent("session-storage", { key: e }));
              },
              1e3
            ),
          [e]
        );
      K(() => l.cancel, [l]);
      let o = H(
        (s) => {
          let c = s;
          (!c.key || c.key === e) && i(n());
        },
        [e, n]
      );
      return (
        K(
          () => (
            window.addEventListener("storage", o),
            window.addEventListener("session-storage", o),
            () => {
              window.removeEventListener("storage", o),
                window.removeEventListener("session-storage", o);
            }
          ),
          [o]
        ),
        [
          r,
          H(
            (s) =>
              i((c) => {
                let d = typeof s == "function" ? s(c) : s;
                return l(d), d;
              }),
            [l]
          ),
        ]
      );
    }
    function y4(...e) {
      let t = sessionStorage.getItem(`${Z}/state`)?.split(";") || [];
      e.length
        ? (e.forEach((n) => sessionStorage.removeItem(`${Z}/state/${n}`)),
          sessionStorage.setItem(`${Z}/state`, t.filter((n) => !e.includes(n)).join(";")))
        : (t.forEach((n) => sessionStorage.removeItem(`${Z}/state/${n}`)),
          sessionStorage.removeItem(`${Z}/state`));
    }
    var qs = je(void 0),
      E4 = ({ children: e, addonUninstalled: t, setAddonUninstalled: n }) => {
        let r = sn().getChannel();
        if (!r) throw new Error("Channel not available");
        let i = () => {
          r.emit(rs), n(!0);
        };
        return a.createElement(
          qs.Provider,
          { value: { addonUninstalled: t, uninstallAddon: i } },
          e
        );
      },
      Rl = () => kt(qs, "Uninstall Addon"),
      he = w.div({
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
      }),
      me = w.h1(({ theme: e }) => ({
        marginTop: 0,
        marginBottom: 4,
        fontSize: "1em",
        fontWeight: "bold",
        color: e.base === "light" ? e.color.defaultText : e.color.lightest,
      })),
      Ys = (e) =>
        a.createElement(
          "svg",
          {
            width: "58",
            height: "53",
            viewBox: "0 0 58 53",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          a.createElement(
            "g",
            { filter: "url(#filter0_dd_304_317890)" },
            a.createElement("rect", {
              x: "6",
              y: "2",
              width: "40",
              height: "40",
              rx: "8",
              fill: "#FF4785",
              shapeRendering: "crispEdges",
            }),
            a.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M17.5005 11.0555C16.8471 11.0963 16.3455 11.6508 16.37 12.3051L17.1135 32.1151C17.137 32.7426 17.6379 33.2471 18.2651 33.2753L34.3716 33.9987C34.3896 33.9995 34.4077 33.9999 34.4257 33.9999C35.0921 33.9999 35.6324 33.4597 35.6324 32.7932V11.2067C35.6324 11.1816 35.6316 11.1565 35.63 11.1314C35.5885 10.4663 35.0156 9.96082 34.3505 10.0024L33.0259 10.0853L33.1227 12.8548C33.1261 12.9541 33.0484 13.0375 32.949 13.041C32.9065 13.0424 32.8648 13.0288 32.8314 13.0025L31.939 12.2995L30.8825 13.1009C30.8033 13.161 30.6904 13.1455 30.6303 13.0663C30.605 13.033 30.5921 12.9919 30.5939 12.9501L30.707 10.2302L17.5005 11.0555ZM31.221 19.1936C30.7965 19.5234 27.6343 19.7484 27.6343 19.2789C27.7011 17.4876 26.8991 17.409 26.4536 17.409C26.0303 17.409 25.3174 17.537 25.3174 18.4966C25.3174 19.4746 26.3592 20.0267 27.582 20.6747C29.3191 21.5952 31.4215 22.7093 31.4215 25.5128C31.4215 28.1998 29.2383 29.6842 26.4536 29.6842C23.5797 29.6842 21.0683 28.5215 21.352 24.4904C21.4633 24.0171 25.1169 24.1296 25.1169 24.4904C25.0723 26.1538 25.4511 26.6431 26.409 26.6431C27.1442 26.6431 27.4783 26.2379 27.4783 25.5554C27.4783 24.5227 26.3929 23.9133 25.1442 23.2122C23.4534 22.2629 21.4633 21.1456 21.4633 18.5819C21.4633 16.0229 23.2233 14.3168 26.3645 14.3168C29.5056 14.3168 31.221 15.9967 31.221 19.1936Z",
              fill: "white",
            })
          ),
          a.createElement("circle", {
            cx: "46",
            cy: "22",
            r: "2.5",
            fill: "white",
            stroke: "#FF4785",
          }),
          a.createElement("path", {
            d: "M57.8536 22.3536C58.0488 22.1583 58.0488 21.8417 57.8536 21.6464L54.6716 18.4645C54.4763 18.2692 54.1597 18.2692 53.9645 18.4645C53.7692 18.6597 53.7692 18.9763 53.9645 19.1716L56.7929 22L53.9645 24.8284C53.7692 25.0237 53.7692 25.3403 53.9645 25.5355C54.1597 25.7308 54.4763 25.7308 54.6716 25.5355L57.8536 22.3536ZM48.5 22.5H57.5V21.5H48.5V22.5Z",
            fill: "#FF4785",
          }),
          a.createElement(
            "defs",
            null,
            a.createElement(
              "filter",
              {
                id: "filter0_dd_304_317890",
                x: "0",
                y: "0",
                width: "52",
                height: "53",
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB",
              },
              a.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
              a.createElement("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha",
              }),
              a.createElement("feOffset", { dy: "5" }),
              a.createElement("feGaussianBlur", { stdDeviation: "3" }),
              a.createElement("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0",
              }),
              a.createElement("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_304_317890",
              }),
              a.createElement("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha",
              }),
              a.createElement("feOffset", { dy: "1" }),
              a.createElement("feGaussianBlur", { stdDeviation: "1.5" }),
              a.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
              a.createElement("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0",
              }),
              a.createElement("feBlend", {
                mode: "normal",
                in2: "effect1_dropShadow_304_317890",
                result: "effect2_dropShadow_304_317890",
              }),
              a.createElement("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect2_dropShadow_304_317890",
                result: "shape",
              })
            )
          )
        ),
      an = (e) =>
        a.createElement(
          "svg",
          {
            width: "52",
            height: "53",
            viewBox: "0 0 52 53",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          a.createElement(
            "g",
            { filter: "url(#filter0_dd_304_317945)" },
            a.createElement(
              "g",
              { clipPath: "url(#clip0_304_317945)" },
              a.createElement("rect", {
                x: "6",
                y: "2",
                width: "40",
                height: "40",
                rx: "8",
                fill: "#288041",
              }),
              a.createElement(
                "g",
                { clipPath: "url(#clip1_304_317945)" },
                a.createElement("rect", {
                  x: "14.75",
                  y: "10.75",
                  width: "22.5",
                  height: "22.5",
                  rx: "2",
                  fill: "#215D31",
                }),
                a.createElement("rect", {
                  x: "20.6104",
                  y: "20.1591",
                  width: "20.1485",
                  height: "20.1485",
                  transform: "rotate(45 20.6104 20.1591)",
                  fill: "#93D4A5",
                }),
                a.createElement("rect", {
                  x: "30.9502",
                  y: "16.59",
                  width: "20.1485",
                  height: "20.1485",
                  transform: "rotate(45 30.9502 16.59)",
                  fill: "#93D4A5",
                }),
                a.createElement("circle", {
                  cx: "20.435",
                  cy: "16.2246",
                  r: "2.45455",
                  fill: "#93D4A5",
                })
              ),
              a.createElement("rect", {
                x: "7.05469",
                y: "3",
                width: "53.75",
                height: "32.25",
                transform: "rotate(45 7.05469 3)",
                fill: "#67B47C",
              }),
              a.createElement(
                "g",
                { clipPath: "url(#clip2_304_317945)" },
                a.createElement(
                  "g",
                  { clipPath: "url(#clip3_304_317945)" },
                  a.createElement("rect", {
                    x: "14.75",
                    y: "10.75",
                    width: "22.5",
                    height: "22.5",
                    rx: "2",
                    fill: "#2B733F",
                  }),
                  a.createElement("rect", {
                    x: "21.3604",
                    y: "21.6592",
                    width: "20.1485",
                    height: "20.1485",
                    transform: "rotate(45 21.3604 21.6592)",
                    fill: "#A9E0B8",
                  }),
                  a.createElement("rect", {
                    x: "32.2012",
                    y: "18.5908",
                    width: "20.1485",
                    height: "20.1485",
                    transform: "rotate(45 32.2012 18.5908)",
                    fill: "#A9E0B8",
                  }),
                  a.createElement("circle", {
                    cx: "21.685",
                    cy: "17.9746",
                    r: "2.45455",
                    fill: "#A9E0B8",
                  })
                )
              )
            )
          ),
          a.createElement(
            "defs",
            null,
            a.createElement(
              "filter",
              {
                id: "filter0_dd_304_317945",
                x: "0",
                y: "0",
                width: "52",
                height: "53",
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB",
              },
              a.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
              a.createElement("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha",
              }),
              a.createElement("feOffset", { dy: "5" }),
              a.createElement("feGaussianBlur", { stdDeviation: "3" }),
              a.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
              a.createElement("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0",
              }),
              a.createElement("feBlend", {
                mode: "normal",
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow_304_317945",
              }),
              a.createElement("feColorMatrix", {
                in: "SourceAlpha",
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                result: "hardAlpha",
              }),
              a.createElement("feOffset", { dy: "1" }),
              a.createElement("feGaussianBlur", { stdDeviation: "1.5" }),
              a.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
              a.createElement("feColorMatrix", {
                type: "matrix",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0",
              }),
              a.createElement("feBlend", {
                mode: "normal",
                in2: "effect1_dropShadow_304_317945",
                result: "effect2_dropShadow_304_317945",
              }),
              a.createElement("feBlend", {
                mode: "normal",
                in: "SourceGraphic",
                in2: "effect2_dropShadow_304_317945",
                result: "shape",
              })
            ),
            a.createElement(
              "clipPath",
              { id: "clip0_304_317945" },
              a.createElement("rect", {
                x: "6",
                y: "2",
                width: "40",
                height: "40",
                rx: "8",
                fill: "white",
              })
            ),
            a.createElement(
              "clipPath",
              { id: "clip1_304_317945" },
              a.createElement("rect", {
                x: "14.75",
                y: "10.75",
                width: "22.5",
                height: "22.5",
                rx: "2",
                fill: "white",
              })
            ),
            a.createElement(
              "clipPath",
              { id: "clip2_304_317945" },
              a.createElement("rect", {
                width: "60.7428",
                height: "29.9046",
                fill: "white",
                transform: "translate(7.20801 3.17212) rotate(45)",
              })
            ),
            a.createElement(
              "clipPath",
              { id: "clip3_304_317945" },
              a.createElement("rect", {
                x: "14.75",
                y: "10.75",
                width: "22.5",
                height: "22.5",
                rx: "2",
                fill: "white",
              })
            )
          )
        ),
      b4 = et(ya()),
      Qs = w.div({ display: "flex", flexDirection: "column" }),
      Xi = w.div(({ theme: e }) => ({
        padding: 15,
        lineHeight: "18px",
        borderBottom: `1px solid ${e.appBorderColor}`,
        p: { margin: "10px 0", "&:last-of-type": { marginBottom: 0 } },
        dl: { display: "grid", gridTemplateColumns: "auto 1fr", gap: 10, margin: "10px 0 0 0" },
        dt: { color: e.color.mediumdark, fontWeight: 700 },
        dd: { marginLeft: 0 },
        "button + button": { marginLeft: 10 },
      })),
      ur = w.div({ display: "flex", fontWeight: "bold", marginBottom: 15 }),
      jo = w(ku)(({ theme: e }) => ({
        width: 12,
        height: 12,
        margin: "3px 6px",
        verticalAlign: "top",
        color: e.color.mediumdark,
      })),
      Rr = { width: 14, height: 14, margin: "2px 6px 2px 0", verticalAlign: "top" },
      k4 = w(Ou)(Rr),
      w4 = w(pu)(Rr),
      C4 = w(ls)(Rr),
      S4 = w(fu)(Rr),
      Il = w(vl)({ marginLeft: "auto" }),
      Zl = w(Je)({ margin: -5, marginLeft: "auto" }),
      ce = w(Xr)(
        {
          "&&": {
            display: "inline-flex",
            borderRadius: 4,
            fontSize: 13,
            lineHeight: "14px",
            padding: "9px 12px",
            alignItems: "center",
            "@container (min-width: 800px)": { padding: "8px 10px" },
          },
        },
        ({ link: e, theme: t }) =>
          e &&
          ue({
            "&&": {
              background: "none",
              boxShadow: "none",
              padding: 2,
              fontWeight: "normal",
              color: t.base === "light" ? t.color.dark : "#C9CDCF",
              opacity: 0.8,
              transition: "opacity 150ms ease-out",
              "&:hover, &:focus": { opacity: 1 },
              "&:focus:not(:active)": { outline: `1px solid ${t.color.secondary}` },
            },
          }),
        ({ tertiary: e }) => e && ue({ "&&:hover": { boxShadow: "none" } }),
        ({ belowText: e }) => e && { marginTop: 7 }
      ),
      Oe = w(to)(({ theme: e }) => ({
        color: e.base === "light" ? e.color.darker : e.color.lighter,
        border: `1px solid ${e.appBorderColor}`,
        fontSize: "12px",
        padding: "2px 3px",
      })),
      x4 = {
        autoAcceptChanges: {
          description: "Automatically accept visual changes - usually for a specific branch name.",
          type: "true or branch name",
        },
        buildScriptName: {
          description: "The package.json script that builds your Storybook.",
          type: "string",
        },
        cypress: {
          description: "Run build against `@chromatic-com/cypress` test archives.",
          type: "boolean",
        },
        debug: { description: "Output verbose logs and debug information.", type: "boolean" },
        diagnosticsFile: {
          description: "Write process information to a JSON file.",
          type: "string or boolean",
        },
        exitOnceUploaded: {
          description: "Exit the process as soon as your Storybook is published.",
          type: "string or boolean",
        },
        exitZeroOnChanges: {
          description: "Exit the process succesfully even when visual changes are found.",
          type: "string or boolean",
        },
        externals: {
          description:
            "Disable TurboSnap when any of these files have changed since the baseline build.",
          type: "string: ['public/**']",
        },
        fileHashing: {
          description: "Apply file hashing to skip uploading unchanged files - default: true",
          type: "boolean",
        },
        ignoreLastBuildOnBranch: {
          description:
            "Do not use the last build on this branch as a baseline if it is no longer in history (i.e. branch was rebased).",
          type: "string",
        },
        junitReport: {
          description: "Write build results to a JUnit XML file.",
          type: "string or boolean",
        },
        logFile: { description: "Write Chromatic CLI logs to a file.", type: "string or boolean" },
        onlyChanged: {
          description:
            "Enables TurboSnap to only run stories affected by files changed since the baseline build.",
          type: "true or string (branch name)",
          glob: !0,
        },
        onlyStoryFiles: {
          description: "Only run a single story or a subset of stories by their filename(s).",
          type: "string[]",
        },
        onlyStoryNames: {
          description: "Only run a single story or a subset of stories by their name(s).",
          type: "string[]",
        },
        outputDir: {
          description:
            "Relative path to target directory for building your Storybook, in case you want to preserve it.",
          type: "string",
        },
        playwright: {
          description: "Run build against `@chromatic-com/playwright` test archives.",
          type: "boolean",
        },
        projectId: { description: "Unique identifier for your project. ", type: "string" },
        projectToken: {
          description:
            "Secret token for your project. Preferably configured through CHROMATIC_PROJECT_TOKEN.",
          type: "string",
        },
        skip: {
          description:
            "Skip Chromatic tests, but mark the commit as passing. Avoids blocking PRs due to required merge checks.",
          type: "string or boolean",
        },
        storybookBaseDir: {
          description: "Relative path from repository root to Storybook project root.",
          type: "string",
        },
        storybookBuildDir: {
          description: "Path to the directory of an already built Storybook.",
          type: "string",
        },
        storybookConfigDir: {
          description:
            "Relative path from where you run Chromatic to your Storybook config directory.",
          type: "string",
        },
        storybookLogFile: {
          description: "Write Storybook build logs to a file.",
          type: "string or boolean",
        },
        untraced: {
          description:
            "Disregard these files and their dependencies when tracing dependent stories for TurboSnap.",
          type: "string[]",
        },
        uploadMetadata: {
          description: "Upload Chromatic metadata files as part of the published Storybook.",
          type: "boolean",
        },
        zip: {
          description:
            "Publish your Storybook to Chromatic as a single zip file instead of individual content files.",
          type: "boolean",
        },
      },
      N4 = w(Zl)({ position: "absolute", right: 16, top: 10 }),
      _4 = w.div(({ theme: e }) => ({
        backgroundColor: e.background.content,
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
        overflowY: "auto",
        padding: 20,
        position: "relative",
      })),
      M4 = w.div({ margin: "0 auto", maxWidth: 600, width: "100%" }),
      zo = w.div(({ theme: e }) => ({
        borderBottom: `1px solid ${e.appBorderColor}`,
        marginBottom: 20,
        paddingBottom: 20,
        code: { fontSize: "90%" },
      })),
      T4 = w(ur)({ marginBottom: 10 }),
      A4 = w.div({ display: "flex", flexDirection: "column", gap: 20 }),
      Uo = w.div(({ theme: e }) => ({
        alignItems: "center",
        borderRadius: e.appBorderRadius,
        display: "flex",
        flexWrap: "wrap",
        "> div": { width: "100%" },
      })),
      $o = w.div(({ theme: e }) => ({
        display: "flex",
        flexGrow: 1,
        flexWrap: "wrap",
        gap: "5px 10px",
      })),
      Wo = w.div(({ theme: e }) => ({
        fontWeight: e.typography.weight.bold,
        div: { marginLeft: 5, position: "relative", top: 2 },
      })),
      Go = w.div({ marginTop: 10 }),
      F4 = w.div(({ hideBorderRadius: e, theme: t }) => ({
        background: t.base === "dark" ? t.color.darkest : t.color.lighter,
        border: `1px solid ${t.appBorderColor}`,
        borderRadius: t.appBorderRadius,
        borderBottomLeftRadius: e ? 0 : t.appBorderRadius,
        borderBottomRightRadius: e ? 0 : t.appBorderRadius,
        color: t.base === "dark" ? t.color.medium : t.color.dark,
        fontFamily: t.typography.fonts.mono,
        fontSize: 13,
        lineHeight: "20px",
        padding: "5px 10px",
        wordWrap: "break-word",
      })),
      O4 = w.div(({ theme: e }) => ({ color: e.color.warningText })),
      qo = w.div(({ theme: e }) => ({
        color: e.base === "dark" ? e.color.medium : e.color.dark,
        marginTop: 2,
      })),
      Yo = w.div(({ warning: e, theme: t }) => ({
        alignItems: "center",
        display: "flex",
        backgroundColor: e
          ? t.base === "dark"
            ? "#342E1A"
            : t.background.warning
          : t.background.hoverable,
        border: `1px solid ${t.appBorderColor}`,
        borderRadius: 3,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderTop: 0,
        fontSize: t.typography.size.s1,
        gap: 5,
        lineHeight: "20px",
        padding: 5,
        svg: {
          color: e
            ? t.base === "dark"
              ? t.color.warning
              : t.color.warningText
            : t.color.secondary,
          flexShrink: 0,
        },
        code: { fontSize: "85%" },
      })),
      L4 = w.div(({ theme: e }) => ({
        "&:nth-last-of-type(2)": {
          borderBottom: `1px solid ${e.appBorderColor}`,
          paddingBottom: 30,
        },
      })),
      Ks = { height: 12, margin: 2, verticalAlign: "top", width: 12 },
      R4 = w(Cu)(Ks),
      I4 = w(yu)(Ks),
      Z4 = ({ onClose: e }) => {
        let { uninstallAddon: t } = Rl(),
          [n] = Ee(Ar),
          { configuration: r = {}, problems: i = {}, suggestions: l = {} } = n || {},
          { configFile: o, ...s } = r,
          c = Object.keys({ ...s, ...i, ...l })
            .sort()
            .map((d) => ({
              key: d,
              value: d in s ? s[d] : void 0,
              problem: i[d],
              suggestion: l[d],
            }));
        return a.createElement(
          _4,
          null,
          a.createElement(
            N4,
            { onClick: e, style: { marginRight: -8 } },
            a.createElement(Il, { "aria-label": "Close" })
          ),
          a.createElement(
            M4,
            null,
            a.createElement(T4, null, "Configuration"),
            o
              ? a.createElement(
                  zo,
                  null,
                  "This is a read-only representation of the Chromatic configuration options found in",
                  " ",
                  a.createElement(Oe, null, o),
                  ". Changes to the config file will be reflected here.",
                  " ",
                  a.createElement(
                    Ut,
                    {
                      href: "https://www.chromatic.com/docs/configure/",
                      target: "_blank",
                      withArrow: !0,
                    },
                    "Learn more"
                  )
                )
              : a.createElement(
                  zo,
                  null,
                  "To configure this addon, create ",
                  a.createElement(Oe, null, "chromatic.config.json"),
                  " in your project's root directory.",
                  " ",
                  a.createElement(
                    Ut,
                    {
                      href: "https://www.chromatic.com/docs/cli#chromatic-config-file",
                      target: "_blank",
                      withArrow: !0,
                    },
                    "Learn more"
                  )
                ),
            c &&
              a.createElement(
                A4,
                null,
                c.map(({ key: d, value: u, problem: m, suggestion: p }) =>
                  a.createElement(
                    L4,
                    { key: d, id: `${d}-option` },
                    a.createElement(
                      Uo,
                      null,
                      a.createElement(
                        $o,
                        null,
                        a.createElement(Wo, null, d, " "),
                        d in J5 && a.createElement(O4, null, "*Disabled for local builds")
                      ),
                      a.createElement(qo, null, x4[d]?.description),
                      a.createElement(
                        Go,
                        null,
                        a.createElement(
                          F4,
                          { hideBorderRadius: !!(m || p) },
                          u === void 0 ? "undefined" : JSON.stringify(u)
                        )
                      )
                    ),
                    m !== void 0 &&
                      a.createElement(
                        Yo,
                        { warning: !0 },
                        a.createElement(R4, null),
                        m === null
                          ? a.createElement(
                              "span",
                              null,
                              a.createElement("strong", null, "Warning: "),
                              "This should be removed."
                            )
                          : a.createElement(
                              "span",
                              null,
                              a.createElement("strong", null, "Warning: "),
                              "This should be: ",
                              a.createElement(Oe, null, JSON.stringify(m))
                            )
                      ),
                    p !== void 0 &&
                      a.createElement(
                        Yo,
                        null,
                        a.createElement(I4, null),
                        a.createElement(
                          "span",
                          null,
                          a.createElement("strong", null, "Hint: "),
                          "Try setting as ",
                          a.createElement(Oe, null, JSON.stringify(p))
                        )
                      )
                  )
                ),
                a.createElement(
                  "div",
                  null,
                  a.createElement(
                    Uo,
                    null,
                    a.createElement($o, null, a.createElement(Wo, null, "Uninstall addon")),
                    a.createElement(
                      qo,
                      null,
                      "Removing the addon updates your Storybook configuration and uninstalls the dependency."
                    ),
                    a.createElement(Go, null, a.createElement(ce, { onClick: t }, "Uninstall"))
                  )
                )
              )
          )
        );
      },
      Js = {
        configVisible: !1,
        settingsVisible: !1,
        warningsVisible: !1,
        baselineImageVisible: !1,
        focusVisible: !1,
        diffVisible: !1,
      },
      dn = (e) => (t, n) => ({ ...t, [e]: typeof n == "boolean" ? n : !t[e] }),
      B4 = {
        toggleDiff: dn("diffVisible"),
        toggleFocus: dn("focusVisible"),
        toggleConfig: dn("configVisible"),
        toggleSettings: dn("settingsVisible"),
        toggleWarnings: dn("warningsVisible"),
        toggleBaselineImage: dn("baselineImageVisible"),
      },
      P4 = (e, t) => B4[t.type](e, t.payload),
      Xs = je(Js),
      e0 = je(() => {}),
      Ir = () => kt(Xs, "Controls"),
      Mn = () => {
        let e = kt(e0, "ControlsDispatch");
        return ct(
          () => ({
            toggleDiff: (t) => e({ type: "toggleDiff", payload: t }),
            toggleFocus: (t) => e({ type: "toggleFocus", payload: t }),
            toggleConfig: (t) => e({ type: "toggleConfig", payload: t }),
            toggleSettings: (t) => e({ type: "toggleSettings", payload: t }),
            toggleWarnings: (t) => e({ type: "toggleWarnings", payload: t }),
            toggleBaselineImage: (t) => e({ type: "toggleBaselineImage", payload: t }),
          }),
          [e]
        );
      },
      V4 = ({ children: e, initialState: t = Js }) => {
        let [n, r] = Yr(P4, t);
        return a.createElement(
          Xs.Provider,
          { value: n },
          a.createElement(e0.Provider, { value: r }, e)
        );
      },
      D4 = w.div({ "& > div": { minWidth: 120 } }),
      ia = ({ children: e, links: t, note: n, ...r }) => {
        let [i, l] = a.useState(!1),
          o = a.createElement(
            we,
            {
              closeOnOutsideClick: !0,
              closeOnTriggerHidden: !0,
              onVisibleChange: (s) => l(s),
              tooltip: ({ onHide: s }) =>
                a.createElement(
                  D4,
                  null,
                  a.createElement(ao, {
                    links: t.map((c) => ({ ...c, onClick: (...d) => (s(), c.onClick?.(...d)) })),
                  })
                ),
              trigger: "click",
              ...r,
            },
            typeof e == "function" ? e(i) : a.createElement(Je, { active: i }, e)
          );
        return n
          ? a.createElement(
              we,
              { tooltip: a.createElement(Ae, { note: n }), trigger: "hover", hasChrome: !1 },
              o
            )
          : o;
      },
      Zr = () => {
        let { accessToken: e, setAccessToken: t } = js(),
          { toggleConfig: n } = Mn(),
          [r] = Ee(as),
          { projectId: i } = r || {},
          l = [
            {
              id: "learn",
              title: "About this addon",
              icon: a.createElement(cs, { "aria-hidden": !0 }),
              href: "https://www.chromatic.com/docs/visual-testing-addon",
              target: "_blank",
            },
            {
              id: "configuration",
              title: "Configuration",
              icon: a.createElement(gu, { "aria-hidden": !0 }),
              onClick: () => n(),
            },
            ...(i
              ? [
                  {
                    id: "visit",
                    title: "View project on Chromatic",
                    icon: a.createElement(ds, { "aria-hidden": !0 }),
                    href: i
                      ? `https://www.chromatic.com/builds?appId=${i?.split(":")[1]}`
                      : "https://www.chromatic.com/start",
                    target: "_blank",
                  },
                ]
              : []),
            ...(e
              ? [
                  {
                    id: "logout",
                    title: "Log out",
                    icon: a.createElement(Lu, { "aria-hidden": !0 }),
                    onClick: () => t(null),
                  },
                ]
              : []),
          ];
        return a.createElement(ia, { placement: "top", links: l }, a.createElement(vu, null));
      };
    w.div(({ hidden: e, theme: t }) => ({
      background: t.background.app,
      containerType: "size",
      display: e ? "none" : "flex",
      flexDirection: "column",
      height: "100%",
    }));
    var H4 = w.div(
        { display: "flex", flexDirection: "column", flexGrow: 1 },
        ({ hidden: e }) => e && { display: "none" }
      ),
      Xn = w.div(({ grow: e }) => e && { flexGrow: e ? 1 : "auto" }),
      Qn = w.div(
        { display: "flex", flexDirection: "row", margin: 15 },
        ({ header: e, theme: t }) =>
          e && {
            margin: 0,
            padding: 15,
            borderBottom: `1px solid ${t.appBorderColor}`,
            "@container (min-width: 800px)": {
              height: 40,
              alignItems: "center",
              justifyContent: "space-between",
              padding: "5px 15px",
            },
          }
      ),
      j4 = w(Qn)({ alignItems: "center", height: 40, margin: "0 10px" }),
      Xe = w.div(
        { display: "flex", flexDirection: "column", alignItems: "center" },
        ({ push: e }) => e && { marginLeft: "auto" }
      ),
      Qo = w.div(({ theme: e }) => ({
        borderBottom: `1px solid ${e.appBorderColor}`,
        display: "flex",
        alignItems: "center",
        minHeight: 40,
        lineHeight: "20px",
        padding: "5px 15px",
      })),
      z4 = w(Xn)(({ theme: e }) => ({
        background: e.background.warning,
        color: e.color.warningText,
      })),
      U4 = w(Xn)(({ theme: e }) => ({
        background: e.background.hoverable,
        color: e.color.defaultText,
      })),
      $4 = ({ hidden: e, ignoreConfig: t, ignoreSuggestions: n, onOpen: r }) => {
        let [i] = Ee(Ar),
          l = Object.keys(i?.problems || {}),
          o = Object.keys(i?.suggestions || {}),
          [s, c] = _e(() => !!localStorage.getItem(ko)),
          d = H(() => {
            c(!0), localStorage.setItem(ko, "true");
          }, []),
          u = a.createElement(
            Be,
            { isButton: !0, onClick: () => r(l[0] || o[0]), withArrow: !0 },
            "Show details"
          );
        return l.length > 0 && !t
          ? a.createElement(
              z4,
              { hidden: e },
              a.createElement(
                Qo,
                null,
                a.createElement(
                  Xe,
                  null,
                  a.createElement(
                    "span",
                    null,
                    "Visual tests locked due to configuration ",
                    (0, b4.default)("problem", l.length),
                    ".",
                    " ",
                    u
                  )
                )
              )
            )
          : o.length > 0 && !s && !t && !n
            ? a.createElement(
                U4,
                { hidden: e },
                a.createElement(
                  Qo,
                  null,
                  a.createElement(
                    Xe,
                    null,
                    a.createElement("span", null, "Configuration could be improved. ", u)
                  ),
                  a.createElement(
                    Xe,
                    { push: !0 },
                    a.createElement(Je, { onClick: d }, a.createElement(vl, null))
                  )
                )
              )
            : null;
      },
      W4 = w.div({ display: "flex", flexDirection: "column", height: "100%" }),
      Ko = w.div(({ hidden: e, theme: t }) => ({
        background: t.background.app,
        display: e ? "none" : "flex",
        flexDirection: "column",
        flexGrow: 1,
        height: "100%",
        overflowY: "auto",
      })),
      Br = w.div(({ theme: e }) => ({
        background: e.background.bar,
        borderTop: `1px solid ${e.appBorderColor}`,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: 39,
        flexShrink: 0,
        padding: "0 10px",
      })),
      ve = ({
        children: e,
        footer: t = a.createElement(
          Br,
          null,
          a.createElement(Xe, { push: !0 }),
          a.createElement(Xe, null, a.createElement(Zr, null))
        ),
        ignoreConfig: n = !1,
        ignoreSuggestions: r = !t,
      }) => {
        let { configVisible: i } = Ir(),
          { toggleConfig: l } = Mn(),
          o = H(
            (s) => {
              l(!0),
                s &&
                  setTimeout(() => {
                    document
                      .getElementById(`${s}-option`)
                      ?.scrollIntoView({ behavior: "smooth", inline: "nearest" });
                  }, 200);
            },
            [l]
          );
        return a.createElement(
          W4,
          null,
          a.createElement($4, { onOpen: o, hidden: i, ignoreConfig: n, ignoreSuggestions: r }),
          a.createElement(Ko, { hidden: i }, e),
          a.createElement(Ko, { hidden: !i }, a.createElement(Z4, { onClose: () => l(!1) })),
          t
        );
      },
      G4 = w.div(({ theme: e }) => ({
        position: "relative",
        "&& input": {
          color: e.input.color || "inherit",
          background: e.input.background,
          boxShadow: `${e.input.border} 0 0 0 1px inset`,
          fontSize: e.typography.size.s2,
          lineHeight: "20px",
        },
      })),
      q4 = w.div(({ theme: e }) => ({
        pointerEvents: "none",
        position: "absolute",
        top: 0,
        left: 40,
        right: 0,
        zIndex: 2,
        overflow: "hidden",
        height: 40,
        display: "flex",
        alignItems: "center",
        lineHeight: "20px",
        color: e.input.color || "inherit",
        fontSize: e.typography.size.s2,
        span: { opacity: 0 },
      })),
      Y4 = ({ value: e, placeholder: t, suffix: n }) =>
        a.createElement(
          q4,
          null,
          a.createElement("span", null, e || t),
          a.createElement("b", null, n)
        ),
      Q4 = ({ id: e, value: t, placeholder: n, suffix: r, ...i }) =>
        a.createElement(
          G4,
          null,
          a.createElement($s, {
            id: e,
            hideLabel: !0,
            label: "",
            value: t,
            placeholder: n,
            crossOrigin: void 0,
            enterKeyHint: void 0,
            ...i,
          }),
          a.createElement(Y4, { value: t, placeholder: n, suffix: r })
        ),
      Jo = w(Je)(({ theme: e }) => ({
        color: e.base === "light" ? "currentColor" : e.color.medium,
        fontSize: e.typography.size.s2,
        fontWeight: e.typography.weight.bold,
      })),
      Pr = ({ onBack: e }) =>
        a.createElement(
          j4,
          null,
          e &&
            a.createElement(
              Xe,
              null,
              a.createElement(Jo, { onClick: e }, a.createElement(xu, null), "Back")
            ),
          a.createElement(
            Xe,
            { push: !0 },
            a.createElement(
              we,
              {
                as: "div",
                hasChrome: !1,
                trigger: "hover",
                tooltip: a.createElement(Ae, { note: "Learn about visual tests" }),
              },
              a.createElement(
                Jo,
                {
                  as: "a",
                  href: "https://www.chromatic.com/features/visual-test",
                  target: "_blank",
                },
                a.createElement(cs, null)
              )
            )
          )
        ),
      K4 = w.form({
        position: "relative",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: 300,
        margin: 10,
      }),
      J4 = w(Xr)({
        "&&": {
          fontSize: 13,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4,
        },
      }),
      X4 = ({ onBack: e, onSignIn: t }) => {
        let [n, r] = _e(""),
          [i, l] = _e(null),
          o = H((c) => {
            let d = c.target.value.replace(/[^a-z0-9-]/g, "");
            r(d), l(null);
          }, []),
          s = H(
            (c) => {
              c.preventDefault(), n ? t(n) : l("Please enter a subdomain");
            },
            [n, t]
          );
        return a.createElement(
          ve,
          { footer: null, ignoreConfig: !0 },
          a.createElement(Pr, { onBack: e }),
          a.createElement(
            he,
            null,
            a.createElement("div", null, a.createElement(Ys, null), a.createElement(an, null)),
            a.createElement(me, null, "Sign in with SSO"),
            a.createElement(j, { muted: !0 }, "Enter your team's Chromatic URL."),
            a.createElement(
              K4,
              { onSubmit: s },
              a.createElement(Q4, {
                autoFocus: !0,
                icon: "users",
                value: n,
                placeholder: "yourteam",
                suffix: ".chromatic.com",
                onChange: o,
                id: "subdomain-input",
                stackLevel: "top",
                error: i,
                errorTooltipPlacement: "top",
              }),
              a.createElement(J4, { type: "submit", variant: "solid", size: "medium" }, "Continue")
            )
          )
        );
      },
      Et = w.div(() => ({
        display: "flex",
        flexDirection: "column",
        gap: 5,
        alignItems: "center",
        textAlign: "center",
      })),
      se = w.div((e) => ({
        display: "flex",
        flexDirection: "column",
        gap: 15,
        alignItems: e.alignItems ?? "center",
        textAlign: e.textAlign ?? "center",
      })),
      ep = ({ onBack: e, onSignIn: t, onSignInWithSSO: n }) =>
        a.createElement(
          ve,
          { footer: null, ignoreConfig: !0 },
          a.createElement(Pr, { onBack: e }),
          a.createElement(
            he,
            null,
            a.createElement(
              se,
              { alignItems: "center", textAlign: "center" },
              a.createElement(
                "div",
                null,
                a.createElement(Ys, null),
                a.createElement(an, null),
                a.createElement(me, null, "Sign in to begin visual testing"),
                a.createElement(
                  j,
                  { center: !0, muted: !0 },
                  "Pinpoint bugs instantly by connecting with cloud browsers that run visual tests in parallel."
                )
              ),
              a.createElement(
                Et,
                null,
                a.createElement(
                  ce,
                  { variant: "solid", size: "medium", onClick: () => t() },
                  "Sign in with Chromatic"
                ),
                a.createElement(ce, { link: !0, onClick: () => n() }, "Sign in with SSO")
              )
            )
          )
        );
    function vn(e, t) {
      return t;
    }
    var tp = {
      "\n  query VisualTestsProjectCountQuery {\n    viewer {\n      projectCount\n      accounts {\n        newProjectUrl\n      }\n    }\n  }\n":
        wm,
      "\n  query SelectProjectsQuery {\n    viewer {\n      accounts {\n        id\n        name\n        avatarUrl\n        newProjectUrl\n        projects {\n          id\n          name\n          webUrl\n          lastBuild {\n            branch\n            number\n          }\n        }\n      }\n    }\n  }\n":
        Cm,
      "\n  query ProjectQuery($projectId: ID!) {\n    project(id: $projectId) {\n      id\n      name\n      webUrl\n      lastBuild {\n        branch\n        number\n      }\n    }\n  }\n":
        Sm,
      "\n  mutation UpdateUserPreferences($input: UserPreferencesInput!) {\n    updateUserPreferences(input: $input) {\n      updatedPreferences {\n        vtaOnboarding\n      }\n    }\n  }\n":
        xm,
      "\n  query AddonVisualTestsBuild(\n    $projectId: ID!\n    $branch: String!\n    $gitUserEmailHash: String!\n    $repositoryOwnerName: String\n    $storyId: String!\n    $testStatuses: [TestStatus!]!\n    $selectedBuildId: ID!\n    $hasSelectedBuildId: Boolean!\n  ) {\n    project(id: $projectId) {\n      name\n      manageUrl\n      account {\n        billingUrl\n        suspensionReason\n      }\n      features {\n        uiTests\n      }\n      lastBuildOnBranch: lastBuild(\n        branches: [$branch]\n        repositoryOwnerName: $repositoryOwnerName\n        localBuilds: { localBuildEmailHash: $gitUserEmailHash }\n      ) {\n        ...LastBuildOnBranchBuildFields\n        ...SelectedBuildFields @skip(if: $hasSelectedBuildId)\n      }\n      lastBuild {\n        id\n        slug\n        branch\n      }\n    }\n    selectedBuild: build(id: $selectedBuildId) @include(if: $hasSelectedBuildId) {\n      ...SelectedBuildFields\n    }\n    viewer {\n      preferences {\n        vtaOnboarding\n      }\n      projectMembership(projectId: $projectId) {\n        userCanReview: meetsAccessLevel(minimumAccessLevel: REVIEWER)\n      }\n    }\n  }\n":
        Nm,
      "\n  fragment LastBuildOnBranchBuildFields on Build {\n    __typename\n    id\n    status\n    committedAt\n    ... on StartedBuild {\n      testsForStatus: tests(first: 1000, statuses: $testStatuses) {\n        nodes {\n          ...StatusTestFields\n        }\n      }\n      testsForStory: tests(storyId: $storyId) {\n        nodes {\n          ...LastBuildOnBranchTestFields\n        }\n      }\n    }\n    ... on CompletedBuild {\n      result\n      testsForStatus: tests(first: 1000, statuses: $testStatuses) {\n        nodes {\n          ...StatusTestFields\n        }\n      }\n      testsForStory: tests(storyId: $storyId) {\n        nodes {\n          ...LastBuildOnBranchTestFields\n        }\n      }\n    }\n  }\n":
        Em,
      "\n  fragment SelectedBuildFields on Build {\n    __typename\n    id\n    number\n    branch\n    commit\n    committedAt\n    uncommittedHash\n    status\n    ... on StartedBuild {\n      startedAt\n      testsForStory: tests(storyId: $storyId) {\n        nodes {\n          ...StoryTestFields\n        }\n      }\n    }\n    ... on CompletedBuild {\n      startedAt\n      testsForStory: tests(storyId: $storyId) {\n        nodes {\n          ...StoryTestFields\n        }\n      }\n    }\n  }\n":
        km,
      "\n  fragment StatusTestFields on Test {\n    id\n    status\n    result\n    story {\n      storyId\n    }\n  }\n":
        vm,
      "\n  fragment LastBuildOnBranchTestFields on Test {\n    status\n    result\n  }\n": ym,
      "\n  fragment StoryTestFields on Test {\n    id\n    status\n    result\n    webUrl\n    comparisons {\n      id\n      result\n      browser {\n        id\n        key\n        name\n        version\n      }\n      captureDiff {\n        diffImage(signed: true) {\n          imageUrl\n          imageWidth\n        }\n        focusImage(signed: true) {\n          imageUrl\n          imageWidth\n        }\n      }\n      headCapture {\n        captureImage(signed: true) {\n          backgroundColor\n          imageUrl\n          imageWidth\n          imageHeight\n          thumbnailUrl\n        }\n        captureError {\n          kind\n          ... on CaptureErrorInteractionFailure {\n            error\n          }\n          ... on CaptureErrorJSError {\n            error\n          }\n          ... on CaptureErrorFailedJS {\n            error\n          }\n        }\n      }\n      baseCapture {\n        captureImage(signed: true) {\n          imageUrl\n          imageWidth\n          imageHeight\n        }\n      }\n    }\n    mode {\n      name\n      globals\n    }\n    story {\n      storyId\n      name\n      component {\n        name\n      }\n    }\n  }\n":
        bm,
      "\n  mutation ReviewTest($input: ReviewTestInput!) {\n    reviewTest(input: $input) {\n      updatedTests {\n        id\n        status\n      }\n      userErrors {\n        ... on UserError {\n          __typename\n          message\n        }\n        ... on BuildSupersededError {\n          build {\n            id\n          }\n        }\n        ... on TestUnreviewableError {\n          test {\n            id\n          }\n        }\n      }\n    }\n  }\n":
        _m,
    };
    function lt(e) {
      return tp[e] ?? {};
    }
    var le;
    (function (e) {
      e.assertEqual = (i) => i;
      function t(i) {}
      e.assertIs = t;
      function n(i) {
        throw new Error();
      }
      (e.assertNever = n),
        (e.arrayToEnum = (i) => {
          let l = {};
          for (let o of i) l[o] = o;
          return l;
        }),
        (e.getValidEnumValues = (i) => {
          let l = e.objectKeys(i).filter((s) => typeof i[i[s]] != "number"),
            o = {};
          for (let s of l) o[s] = i[s];
          return e.objectValues(o);
        }),
        (e.objectValues = (i) =>
          e.objectKeys(i).map(function (l) {
            return i[l];
          })),
        (e.objectKeys =
          typeof Object.keys == "function"
            ? (i) => Object.keys(i)
            : (i) => {
                let l = [];
                for (let o in i) Object.prototype.hasOwnProperty.call(i, o) && l.push(o);
                return l;
              }),
        (e.find = (i, l) => {
          for (let o of i) if (l(o)) return o;
        }),
        (e.isInteger =
          typeof Number.isInteger == "function"
            ? (i) => Number.isInteger(i)
            : (i) => typeof i == "number" && isFinite(i) && Math.floor(i) === i);
      function r(i, l = " | ") {
        return i.map((o) => (typeof o == "string" ? `'${o}'` : o)).join(l);
      }
      (e.joinValues = r),
        (e.jsonStringifyReplacer = (i, l) => (typeof l == "bigint" ? l.toString() : l));
    })(le || (le = {}));
    var el;
    (function (e) {
      e.mergeShapes = (t, n) => ({ ...t, ...n });
    })(el || (el = {}));
    var _ = le.arrayToEnum([
        "string",
        "nan",
        "number",
        "integer",
        "float",
        "boolean",
        "date",
        "bigint",
        "symbol",
        "function",
        "undefined",
        "null",
        "array",
        "object",
        "unknown",
        "promise",
        "void",
        "never",
        "map",
        "set",
      ]),
      Rt = (e) => {
        switch (typeof e) {
          case "undefined":
            return _.undefined;
          case "string":
            return _.string;
          case "number":
            return isNaN(e) ? _.nan : _.number;
          case "boolean":
            return _.boolean;
          case "function":
            return _.function;
          case "bigint":
            return _.bigint;
          case "symbol":
            return _.symbol;
          case "object":
            return Array.isArray(e)
              ? _.array
              : e === null
                ? _.null
                : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function"
                  ? _.promise
                  : typeof Map < "u" && e instanceof Map
                    ? _.map
                    : typeof Set < "u" && e instanceof Set
                      ? _.set
                      : typeof Date < "u" && e instanceof Date
                        ? _.date
                        : _.object;
          default:
            return _.unknown;
        }
      },
      x = le.arrayToEnum([
        "invalid_type",
        "invalid_literal",
        "custom",
        "invalid_union",
        "invalid_union_discriminator",
        "invalid_enum_value",
        "unrecognized_keys",
        "invalid_arguments",
        "invalid_return_type",
        "invalid_date",
        "invalid_string",
        "too_small",
        "too_big",
        "invalid_intersection_types",
        "not_multiple_of",
        "not_finite",
      ]),
      np = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:"),
      at = class extends Error {
        constructor(e) {
          super(),
            (this.issues = []),
            (this.addIssue = (n) => {
              this.issues = [...this.issues, n];
            }),
            (this.addIssues = (n = []) => {
              this.issues = [...this.issues, ...n];
            });
          let t = new.target.prototype;
          Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : (this.__proto__ = t),
            (this.name = "ZodError"),
            (this.issues = e);
        }
        get errors() {
          return this.issues;
        }
        format(e) {
          let t =
              e ||
              function (i) {
                return i.message;
              },
            n = { _errors: [] },
            r = (i) => {
              for (let l of i.issues)
                if (l.code === "invalid_union") l.unionErrors.map(r);
                else if (l.code === "invalid_return_type") r(l.returnTypeError);
                else if (l.code === "invalid_arguments") r(l.argumentsError);
                else if (l.path.length === 0) n._errors.push(t(l));
                else {
                  let o = n,
                    s = 0;
                  for (; s < l.path.length; ) {
                    let c = l.path[s];
                    s === l.path.length - 1
                      ? ((o[c] = o[c] || { _errors: [] }), o[c]._errors.push(t(l)))
                      : (o[c] = o[c] || { _errors: [] }),
                      (o = o[c]),
                      s++;
                  }
                }
            };
          return r(this), n;
        }
        toString() {
          return this.message;
        }
        get message() {
          return JSON.stringify(this.issues, le.jsonStringifyReplacer, 2);
        }
        get isEmpty() {
          return this.issues.length === 0;
        }
        flatten(e = (t) => t.message) {
          let t = {},
            n = [];
          for (let r of this.issues)
            r.path.length > 0
              ? ((t[r.path[0]] = t[r.path[0]] || []), t[r.path[0]].push(e(r)))
              : n.push(e(r));
          return { formErrors: n, fieldErrors: t };
        }
        get formErrors() {
          return this.flatten();
        }
      };
    at.create = (e) => new at(e);
    var la = (e, t) => {
        let n;
        switch (e.code) {
          case x.invalid_type:
            e.received === _.undefined
              ? (n = "Required")
              : (n = `Expected ${e.expected}, received ${e.received}`);
            break;
          case x.invalid_literal:
            n = `Invalid literal value, expected ${JSON.stringify(e.expected, le.jsonStringifyReplacer)}`;
            break;
          case x.unrecognized_keys:
            n = `Unrecognized key(s) in object: ${le.joinValues(e.keys, ", ")}`;
            break;
          case x.invalid_union:
            n = "Invalid input";
            break;
          case x.invalid_union_discriminator:
            n = `Invalid discriminator value. Expected ${le.joinValues(e.options)}`;
            break;
          case x.invalid_enum_value:
            n = `Invalid enum value. Expected ${le.joinValues(e.options)}, received '${e.received}'`;
            break;
          case x.invalid_arguments:
            n = "Invalid function arguments";
            break;
          case x.invalid_return_type:
            n = "Invalid function return type";
            break;
          case x.invalid_date:
            n = "Invalid date";
            break;
          case x.invalid_string:
            typeof e.validation == "object"
              ? "includes" in e.validation
                ? ((n = `Invalid input: must include "${e.validation.includes}"`),
                  typeof e.validation.position == "number" &&
                    (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`))
                : "startsWith" in e.validation
                  ? (n = `Invalid input: must start with "${e.validation.startsWith}"`)
                  : "endsWith" in e.validation
                    ? (n = `Invalid input: must end with "${e.validation.endsWith}"`)
                    : le.assertNever(e.validation)
              : e.validation !== "regex"
                ? (n = `Invalid ${e.validation}`)
                : (n = "Invalid");
            break;
          case x.too_small:
            e.type === "array"
              ? (n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)`)
              : e.type === "string"
                ? (n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)`)
                : e.type === "number"
                  ? (n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}`)
                  : e.type === "date"
                    ? (n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}`)
                    : (n = "Invalid input");
            break;
          case x.too_big:
            e.type === "array"
              ? (n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)`)
              : e.type === "string"
                ? (n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)`)
                : e.type === "number"
                  ? (n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}`)
                  : e.type === "bigint"
                    ? (n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}`)
                    : e.type === "date"
                      ? (n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}`)
                      : (n = "Invalid input");
            break;
          case x.custom:
            n = "Invalid input";
            break;
          case x.invalid_intersection_types:
            n = "Intersection results could not be merged";
            break;
          case x.not_multiple_of:
            n = `Number must be a multiple of ${e.multipleOf}`;
            break;
          case x.not_finite:
            n = "Number must be finite";
            break;
          default:
            (n = t.defaultError), le.assertNever(e);
        }
        return { message: n };
      },
      t0 = la;
    function ap(e) {
      t0 = e;
    }
    function mr() {
      return t0;
    }
    var pr = (e) => {
        let { data: t, path: n, errorMaps: r, issueData: i } = e,
          l = [...n, ...(i.path || [])],
          o = { ...i, path: l },
          s = "",
          c = r
            .filter((d) => !!d)
            .slice()
            .reverse();
        for (let d of c) s = d(o, { data: t, defaultError: s }).message;
        return { ...i, path: l, message: i.message || s };
      },
      rp = [];
    function A(e, t) {
      let n = pr({
        issueData: t,
        data: e.data,
        path: e.path,
        errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, mr(), la].filter((r) => !!r),
      });
      e.common.issues.push(n);
    }
    var Pe = class {
        constructor() {
          this.value = "valid";
        }
        dirty() {
          this.value === "valid" && (this.value = "dirty");
        }
        abort() {
          this.value !== "aborted" && (this.value = "aborted");
        }
        static mergeArray(e, t) {
          let n = [];
          for (let r of t) {
            if (r.status === "aborted") return z;
            r.status === "dirty" && e.dirty(), n.push(r.value);
          }
          return { status: e.value, value: n };
        }
        static async mergeObjectAsync(e, t) {
          let n = [];
          for (let r of t) n.push({ key: await r.key, value: await r.value });
          return Pe.mergeObjectSync(e, n);
        }
        static mergeObjectSync(e, t) {
          let n = {};
          for (let r of t) {
            let { key: i, value: l } = r;
            if (i.status === "aborted" || l.status === "aborted") return z;
            i.status === "dirty" && e.dirty(),
              l.status === "dirty" && e.dirty(),
              i.value !== "__proto__" &&
                (typeof l.value < "u" || r.alwaysSet) &&
                (n[i.value] = l.value);
          }
          return { status: e.value, value: n };
        }
      },
      z = Object.freeze({ status: "aborted" }),
      n0 = (e) => ({ status: "dirty", value: e }),
      Ve = (e) => ({ status: "valid", value: e }),
      tl = (e) => e.status === "aborted",
      nl = (e) => e.status === "dirty",
      oa = (e) => e.status === "valid",
      hr = (e) => typeof Promise < "u" && e instanceof Promise,
      B;
    (function (e) {
      (e.errToObj = (t) => (typeof t == "string" ? { message: t } : t || {})),
        (e.toString = (t) => (typeof t == "string" ? t : t?.message));
    })(B || (B = {}));
    var bt = class {
        constructor(e, t, n, r) {
          (this._cachedPath = []),
            (this.parent = e),
            (this.data = t),
            (this._path = n),
            (this._key = r);
        }
        get path() {
          return (
            this._cachedPath.length ||
              (this._key instanceof Array
                ? this._cachedPath.push(...this._path, ...this._key)
                : this._cachedPath.push(...this._path, this._key)),
            this._cachedPath
          );
        }
      },
      Xo = (e, t) => {
        if (oa(t)) return { success: !0, data: t.value };
        if (!e.common.issues.length) throw new Error("Validation failed but no issues detected.");
        return {
          success: !1,
          get error() {
            if (this._error) return this._error;
            let n = new at(e.common.issues);
            return (this._error = n), this._error;
          },
        };
      };
    function W(e) {
      if (!e) return {};
      let { errorMap: t, invalid_type_error: n, required_error: r, description: i } = e;
      if (t && (n || r))
        throw new Error(
          `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`
        );
      return t
        ? { errorMap: t, description: i }
        : {
            errorMap: (l, o) =>
              l.code !== "invalid_type"
                ? { message: o.defaultError }
                : typeof o.data > "u"
                  ? { message: r ?? o.defaultError }
                  : { message: n ?? o.defaultError },
            description: i,
          };
    }
    var Q = class {
        constructor(e) {
          (this.spa = this.safeParseAsync),
            (this._def = e),
            (this.parse = this.parse.bind(this)),
            (this.safeParse = this.safeParse.bind(this)),
            (this.parseAsync = this.parseAsync.bind(this)),
            (this.safeParseAsync = this.safeParseAsync.bind(this)),
            (this.spa = this.spa.bind(this)),
            (this.refine = this.refine.bind(this)),
            (this.refinement = this.refinement.bind(this)),
            (this.superRefine = this.superRefine.bind(this)),
            (this.optional = this.optional.bind(this)),
            (this.nullable = this.nullable.bind(this)),
            (this.nullish = this.nullish.bind(this)),
            (this.array = this.array.bind(this)),
            (this.promise = this.promise.bind(this)),
            (this.or = this.or.bind(this)),
            (this.and = this.and.bind(this)),
            (this.transform = this.transform.bind(this)),
            (this.brand = this.brand.bind(this)),
            (this.default = this.default.bind(this)),
            (this.catch = this.catch.bind(this)),
            (this.describe = this.describe.bind(this)),
            (this.pipe = this.pipe.bind(this)),
            (this.readonly = this.readonly.bind(this)),
            (this.isNullable = this.isNullable.bind(this)),
            (this.isOptional = this.isOptional.bind(this));
        }
        get description() {
          return this._def.description;
        }
        _getType(e) {
          return Rt(e.data);
        }
        _getOrReturnCtx(e, t) {
          return (
            t || {
              common: e.parent.common,
              data: e.data,
              parsedType: Rt(e.data),
              schemaErrorMap: this._def.errorMap,
              path: e.path,
              parent: e.parent,
            }
          );
        }
        _processInputParams(e) {
          return {
            status: new Pe(),
            ctx: {
              common: e.parent.common,
              data: e.data,
              parsedType: Rt(e.data),
              schemaErrorMap: this._def.errorMap,
              path: e.path,
              parent: e.parent,
            },
          };
        }
        _parseSync(e) {
          let t = this._parse(e);
          if (hr(t)) throw new Error("Synchronous parse encountered promise.");
          return t;
        }
        _parseAsync(e) {
          let t = this._parse(e);
          return Promise.resolve(t);
        }
        parse(e, t) {
          let n = this.safeParse(e, t);
          if (n.success) return n.data;
          throw n.error;
        }
        safeParse(e, t) {
          var n;
          let r = {
              common: {
                issues: [],
                async: (n = t?.async) !== null && n !== void 0 ? n : !1,
                contextualErrorMap: t?.errorMap,
              },
              path: t?.path || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: e,
              parsedType: Rt(e),
            },
            i = this._parseSync({ data: e, path: r.path, parent: r });
          return Xo(r, i);
        }
        async parseAsync(e, t) {
          let n = await this.safeParseAsync(e, t);
          if (n.success) return n.data;
          throw n.error;
        }
        async safeParseAsync(e, t) {
          let n = {
              common: { issues: [], contextualErrorMap: t?.errorMap, async: !0 },
              path: t?.path || [],
              schemaErrorMap: this._def.errorMap,
              parent: null,
              data: e,
              parsedType: Rt(e),
            },
            r = this._parse({ data: e, path: n.path, parent: n }),
            i = await (hr(r) ? r : Promise.resolve(r));
          return Xo(n, i);
        }
        refine(e, t) {
          let n = (r) =>
            typeof t == "string" || typeof t > "u"
              ? { message: t }
              : typeof t == "function"
                ? t(r)
                : t;
          return this._refinement((r, i) => {
            let l = e(r),
              o = () => i.addIssue({ code: x.custom, ...n(r) });
            return typeof Promise < "u" && l instanceof Promise
              ? l.then((s) => (s ? !0 : (o(), !1)))
              : l
                ? !0
                : (o(), !1);
          });
        }
        refinement(e, t) {
          return this._refinement((n, r) =>
            e(n) ? !0 : (r.addIssue(typeof t == "function" ? t(n, r) : t), !1)
          );
        }
        _refinement(e) {
          return new rt({
            schema: this,
            typeName: D.ZodEffects,
            effect: { type: "refinement", refinement: e },
          });
        }
        superRefine(e) {
          return this._refinement(e);
        }
        optional() {
          return xt.create(this, this._def);
        }
        nullable() {
          return en.create(this, this._def);
        }
        nullish() {
          return this.nullable().optional();
        }
        array() {
          return vt.create(this, this._def);
        }
        promise() {
          return Sn.create(this, this._def);
        }
        or(e) {
          return ua.create([this, e], this._def);
        }
        and(e) {
          return ma.create(this, e, this._def);
        }
        transform(e) {
          return new rt({
            ...W(this._def),
            schema: this,
            typeName: D.ZodEffects,
            effect: { type: "transform", transform: e },
          });
        }
        default(e) {
          let t = typeof e == "function" ? e : () => e;
          return new ga({
            ...W(this._def),
            innerType: this,
            defaultValue: t,
            typeName: D.ZodDefault,
          });
        }
        brand() {
          return new r0({ typeName: D.ZodBranded, type: this, ...W(this._def) });
        }
        catch(e) {
          let t = typeof e == "function" ? e : () => e;
          return new Er({ ...W(this._def), innerType: this, catchValue: t, typeName: D.ZodCatch });
        }
        describe(e) {
          let t = this.constructor;
          return new t({ ...this._def, description: e });
        }
        pipe(e) {
          return Vr.create(this, e);
        }
        readonly() {
          return kr.create(this);
        }
        isOptional() {
          return this.safeParse(void 0).success;
        }
        isNullable() {
          return this.safeParse(null).success;
        }
      },
      ip = /^c[^\s-]{8,}$/i,
      lp = /^[a-z][a-z0-9]*$/,
      op = /^[0-9A-HJKMNP-TV-Z]{26}$/,
      sp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
      cp = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
      dp = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
      bi,
      up =
        /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
      mp =
        /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
      pp = (e) =>
        e.precision
          ? e.offset
            ? new RegExp(
                `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`
              )
            : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`)
          : e.precision === 0
            ? e.offset
              ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$")
              : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$")
            : e.offset
              ? new RegExp(
                  "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"
                )
              : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
    function hp(e, t) {
      return !!(((t === "v4" || !t) && up.test(e)) || ((t === "v6" || !t) && mp.test(e)));
    }
    var ht = class extends Q {
      _parse(e) {
        if ((this._def.coerce && (e.data = String(e.data)), this._getType(e) !== _.string)) {
          let r = this._getOrReturnCtx(e);
          return A(r, { code: x.invalid_type, expected: _.string, received: r.parsedType }), z;
        }
        let t = new Pe(),
          n;
        for (let r of this._def.checks)
          if (r.kind === "min")
            e.data.length < r.value &&
              ((n = this._getOrReturnCtx(e, n)),
              A(n, {
                code: x.too_small,
                minimum: r.value,
                type: "string",
                inclusive: !0,
                exact: !1,
                message: r.message,
              }),
              t.dirty());
          else if (r.kind === "max")
            e.data.length > r.value &&
              ((n = this._getOrReturnCtx(e, n)),
              A(n, {
                code: x.too_big,
                maximum: r.value,
                type: "string",
                inclusive: !0,
                exact: !1,
                message: r.message,
              }),
              t.dirty());
          else if (r.kind === "length") {
            let i = e.data.length > r.value,
              l = e.data.length < r.value;
            (i || l) &&
              ((n = this._getOrReturnCtx(e, n)),
              i
                ? A(n, {
                    code: x.too_big,
                    maximum: r.value,
                    type: "string",
                    inclusive: !0,
                    exact: !0,
                    message: r.message,
                  })
                : l &&
                  A(n, {
                    code: x.too_small,
                    minimum: r.value,
                    type: "string",
                    inclusive: !0,
                    exact: !0,
                    message: r.message,
                  }),
              t.dirty());
          } else if (r.kind === "email")
            cp.test(e.data) ||
              ((n = this._getOrReturnCtx(e, n)),
              A(n, { validation: "email", code: x.invalid_string, message: r.message }),
              t.dirty());
          else if (r.kind === "emoji")
            bi || (bi = new RegExp(dp, "u")),
              bi.test(e.data) ||
                ((n = this._getOrReturnCtx(e, n)),
                A(n, { validation: "emoji", code: x.invalid_string, message: r.message }),
                t.dirty());
          else if (r.kind === "uuid")
            sp.test(e.data) ||
              ((n = this._getOrReturnCtx(e, n)),
              A(n, { validation: "uuid", code: x.invalid_string, message: r.message }),
              t.dirty());
          else if (r.kind === "cuid")
            ip.test(e.data) ||
              ((n = this._getOrReturnCtx(e, n)),
              A(n, { validation: "cuid", code: x.invalid_string, message: r.message }),
              t.dirty());
          else if (r.kind === "cuid2")
            lp.test(e.data) ||
              ((n = this._getOrReturnCtx(e, n)),
              A(n, { validation: "cuid2", code: x.invalid_string, message: r.message }),
              t.dirty());
          else if (r.kind === "ulid")
            op.test(e.data) ||
              ((n = this._getOrReturnCtx(e, n)),
              A(n, { validation: "ulid", code: x.invalid_string, message: r.message }),
              t.dirty());
          else if (r.kind === "url")
            try {
              new URL(e.data);
            } catch {
              (n = this._getOrReturnCtx(e, n)),
                A(n, { validation: "url", code: x.invalid_string, message: r.message }),
                t.dirty();
            }
          else
            r.kind === "regex"
              ? ((r.regex.lastIndex = 0),
                r.regex.test(e.data) ||
                  ((n = this._getOrReturnCtx(e, n)),
                  A(n, { validation: "regex", code: x.invalid_string, message: r.message }),
                  t.dirty()))
              : r.kind === "trim"
                ? (e.data = e.data.trim())
                : r.kind === "includes"
                  ? e.data.includes(r.value, r.position) ||
                    ((n = this._getOrReturnCtx(e, n)),
                    A(n, {
                      code: x.invalid_string,
                      validation: { includes: r.value, position: r.position },
                      message: r.message,
                    }),
                    t.dirty())
                  : r.kind === "toLowerCase"
                    ? (e.data = e.data.toLowerCase())
                    : r.kind === "toUpperCase"
                      ? (e.data = e.data.toUpperCase())
                      : r.kind === "startsWith"
                        ? e.data.startsWith(r.value) ||
                          ((n = this._getOrReturnCtx(e, n)),
                          A(n, {
                            code: x.invalid_string,
                            validation: { startsWith: r.value },
                            message: r.message,
                          }),
                          t.dirty())
                        : r.kind === "endsWith"
                          ? e.data.endsWith(r.value) ||
                            ((n = this._getOrReturnCtx(e, n)),
                            A(n, {
                              code: x.invalid_string,
                              validation: { endsWith: r.value },
                              message: r.message,
                            }),
                            t.dirty())
                          : r.kind === "datetime"
                            ? pp(r).test(e.data) ||
                              ((n = this._getOrReturnCtx(e, n)),
                              A(n, {
                                code: x.invalid_string,
                                validation: "datetime",
                                message: r.message,
                              }),
                              t.dirty())
                            : r.kind === "ip"
                              ? hp(e.data, r.version) ||
                                ((n = this._getOrReturnCtx(e, n)),
                                A(n, {
                                  validation: "ip",
                                  code: x.invalid_string,
                                  message: r.message,
                                }),
                                t.dirty())
                              : le.assertNever(r);
        return { status: t.value, value: e.data };
      }
      _regex(e, t, n) {
        return this.refinement((r) => e.test(r), {
          validation: t,
          code: x.invalid_string,
          ...B.errToObj(n),
        });
      }
      _addCheck(e) {
        return new ht({ ...this._def, checks: [...this._def.checks, e] });
      }
      email(e) {
        return this._addCheck({ kind: "email", ...B.errToObj(e) });
      }
      url(e) {
        return this._addCheck({ kind: "url", ...B.errToObj(e) });
      }
      emoji(e) {
        return this._addCheck({ kind: "emoji", ...B.errToObj(e) });
      }
      uuid(e) {
        return this._addCheck({ kind: "uuid", ...B.errToObj(e) });
      }
      cuid(e) {
        return this._addCheck({ kind: "cuid", ...B.errToObj(e) });
      }
      cuid2(e) {
        return this._addCheck({ kind: "cuid2", ...B.errToObj(e) });
      }
      ulid(e) {
        return this._addCheck({ kind: "ulid", ...B.errToObj(e) });
      }
      ip(e) {
        return this._addCheck({ kind: "ip", ...B.errToObj(e) });
      }
      datetime(e) {
        var t;
        return typeof e == "string"
          ? this._addCheck({ kind: "datetime", precision: null, offset: !1, message: e })
          : this._addCheck({
              kind: "datetime",
              precision: typeof e?.precision > "u" ? null : e?.precision,
              offset: (t = e?.offset) !== null && t !== void 0 ? t : !1,
              ...B.errToObj(e?.message),
            });
      }
      regex(e, t) {
        return this._addCheck({ kind: "regex", regex: e, ...B.errToObj(t) });
      }
      includes(e, t) {
        return this._addCheck({
          kind: "includes",
          value: e,
          position: t?.position,
          ...B.errToObj(t?.message),
        });
      }
      startsWith(e, t) {
        return this._addCheck({ kind: "startsWith", value: e, ...B.errToObj(t) });
      }
      endsWith(e, t) {
        return this._addCheck({ kind: "endsWith", value: e, ...B.errToObj(t) });
      }
      min(e, t) {
        return this._addCheck({ kind: "min", value: e, ...B.errToObj(t) });
      }
      max(e, t) {
        return this._addCheck({ kind: "max", value: e, ...B.errToObj(t) });
      }
      length(e, t) {
        return this._addCheck({ kind: "length", value: e, ...B.errToObj(t) });
      }
      nonempty(e) {
        return this.min(1, B.errToObj(e));
      }
      trim() {
        return new ht({ ...this._def, checks: [...this._def.checks, { kind: "trim" }] });
      }
      toLowerCase() {
        return new ht({ ...this._def, checks: [...this._def.checks, { kind: "toLowerCase" }] });
      }
      toUpperCase() {
        return new ht({ ...this._def, checks: [...this._def.checks, { kind: "toUpperCase" }] });
      }
      get isDatetime() {
        return !!this._def.checks.find((e) => e.kind === "datetime");
      }
      get isEmail() {
        return !!this._def.checks.find((e) => e.kind === "email");
      }
      get isURL() {
        return !!this._def.checks.find((e) => e.kind === "url");
      }
      get isEmoji() {
        return !!this._def.checks.find((e) => e.kind === "emoji");
      }
      get isUUID() {
        return !!this._def.checks.find((e) => e.kind === "uuid");
      }
      get isCUID() {
        return !!this._def.checks.find((e) => e.kind === "cuid");
      }
      get isCUID2() {
        return !!this._def.checks.find((e) => e.kind === "cuid2");
      }
      get isULID() {
        return !!this._def.checks.find((e) => e.kind === "ulid");
      }
      get isIP() {
        return !!this._def.checks.find((e) => e.kind === "ip");
      }
      get minLength() {
        let e = null;
        for (let t of this._def.checks)
          t.kind === "min" && (e === null || t.value > e) && (e = t.value);
        return e;
      }
      get maxLength() {
        let e = null;
        for (let t of this._def.checks)
          t.kind === "max" && (e === null || t.value < e) && (e = t.value);
        return e;
      }
    };
    ht.create = (e) => {
      var t;
      return new ht({
        checks: [],
        typeName: D.ZodString,
        coerce: (t = e?.coerce) !== null && t !== void 0 ? t : !1,
        ...W(e),
      });
    };
    function fp(e, t) {
      let n = (e.toString().split(".")[1] || "").length,
        r = (t.toString().split(".")[1] || "").length,
        i = n > r ? n : r,
        l = parseInt(e.toFixed(i).replace(".", "")),
        o = parseInt(t.toFixed(i).replace(".", ""));
      return (l % o) / Math.pow(10, i);
    }
    var Kt = class extends Q {
      constructor() {
        super(...arguments),
          (this.min = this.gte),
          (this.max = this.lte),
          (this.step = this.multipleOf);
      }
      _parse(e) {
        if ((this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== _.number)) {
          let r = this._getOrReturnCtx(e);
          return A(r, { code: x.invalid_type, expected: _.number, received: r.parsedType }), z;
        }
        let t,
          n = new Pe();
        for (let r of this._def.checks)
          r.kind === "int"
            ? le.isInteger(e.data) ||
              ((t = this._getOrReturnCtx(e, t)),
              A(t, {
                code: x.invalid_type,
                expected: "integer",
                received: "float",
                message: r.message,
              }),
              n.dirty())
            : r.kind === "min"
              ? (r.inclusive ? e.data < r.value : e.data <= r.value) &&
                ((t = this._getOrReturnCtx(e, t)),
                A(t, {
                  code: x.too_small,
                  minimum: r.value,
                  type: "number",
                  inclusive: r.inclusive,
                  exact: !1,
                  message: r.message,
                }),
                n.dirty())
              : r.kind === "max"
                ? (r.inclusive ? e.data > r.value : e.data >= r.value) &&
                  ((t = this._getOrReturnCtx(e, t)),
                  A(t, {
                    code: x.too_big,
                    maximum: r.value,
                    type: "number",
                    inclusive: r.inclusive,
                    exact: !1,
                    message: r.message,
                  }),
                  n.dirty())
                : r.kind === "multipleOf"
                  ? fp(e.data, r.value) !== 0 &&
                    ((t = this._getOrReturnCtx(e, t)),
                    A(t, { code: x.not_multiple_of, multipleOf: r.value, message: r.message }),
                    n.dirty())
                  : r.kind === "finite"
                    ? Number.isFinite(e.data) ||
                      ((t = this._getOrReturnCtx(e, t)),
                      A(t, { code: x.not_finite, message: r.message }),
                      n.dirty())
                    : le.assertNever(r);
        return { status: n.value, value: e.data };
      }
      gte(e, t) {
        return this.setLimit("min", e, !0, B.toString(t));
      }
      gt(e, t) {
        return this.setLimit("min", e, !1, B.toString(t));
      }
      lte(e, t) {
        return this.setLimit("max", e, !0, B.toString(t));
      }
      lt(e, t) {
        return this.setLimit("max", e, !1, B.toString(t));
      }
      setLimit(e, t, n, r) {
        return new Kt({
          ...this._def,
          checks: [
            ...this._def.checks,
            { kind: e, value: t, inclusive: n, message: B.toString(r) },
          ],
        });
      }
      _addCheck(e) {
        return new Kt({ ...this._def, checks: [...this._def.checks, e] });
      }
      int(e) {
        return this._addCheck({ kind: "int", message: B.toString(e) });
      }
      positive(e) {
        return this._addCheck({ kind: "min", value: 0, inclusive: !1, message: B.toString(e) });
      }
      negative(e) {
        return this._addCheck({ kind: "max", value: 0, inclusive: !1, message: B.toString(e) });
      }
      nonpositive(e) {
        return this._addCheck({ kind: "max", value: 0, inclusive: !0, message: B.toString(e) });
      }
      nonnegative(e) {
        return this._addCheck({ kind: "min", value: 0, inclusive: !0, message: B.toString(e) });
      }
      multipleOf(e, t) {
        return this._addCheck({ kind: "multipleOf", value: e, message: B.toString(t) });
      }
      finite(e) {
        return this._addCheck({ kind: "finite", message: B.toString(e) });
      }
      safe(e) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: B.toString(e),
        })._addCheck({
          kind: "max",
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: B.toString(e),
        });
      }
      get minValue() {
        let e = null;
        for (let t of this._def.checks)
          t.kind === "min" && (e === null || t.value > e) && (e = t.value);
        return e;
      }
      get maxValue() {
        let e = null;
        for (let t of this._def.checks)
          t.kind === "max" && (e === null || t.value < e) && (e = t.value);
        return e;
      }
      get isInt() {
        return !!this._def.checks.find(
          (e) => e.kind === "int" || (e.kind === "multipleOf" && le.isInteger(e.value))
        );
      }
      get isFinite() {
        let e = null,
          t = null;
        for (let n of this._def.checks) {
          if (n.kind === "finite" || n.kind === "int" || n.kind === "multipleOf") return !0;
          n.kind === "min"
            ? (t === null || n.value > t) && (t = n.value)
            : n.kind === "max" && (e === null || n.value < e) && (e = n.value);
        }
        return Number.isFinite(t) && Number.isFinite(e);
      }
    };
    Kt.create = (e) =>
      new Kt({ checks: [], typeName: D.ZodNumber, coerce: e?.coerce || !1, ...W(e) });
    var Jt = class extends Q {
      constructor() {
        super(...arguments), (this.min = this.gte), (this.max = this.lte);
      }
      _parse(e) {
        if ((this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== _.bigint)) {
          let r = this._getOrReturnCtx(e);
          return A(r, { code: x.invalid_type, expected: _.bigint, received: r.parsedType }), z;
        }
        let t,
          n = new Pe();
        for (let r of this._def.checks)
          r.kind === "min"
            ? (r.inclusive ? e.data < r.value : e.data <= r.value) &&
              ((t = this._getOrReturnCtx(e, t)),
              A(t, {
                code: x.too_small,
                type: "bigint",
                minimum: r.value,
                inclusive: r.inclusive,
                message: r.message,
              }),
              n.dirty())
            : r.kind === "max"
              ? (r.inclusive ? e.data > r.value : e.data >= r.value) &&
                ((t = this._getOrReturnCtx(e, t)),
                A(t, {
                  code: x.too_big,
                  type: "bigint",
                  maximum: r.value,
                  inclusive: r.inclusive,
                  message: r.message,
                }),
                n.dirty())
              : r.kind === "multipleOf"
                ? e.data % r.value !== BigInt(0) &&
                  ((t = this._getOrReturnCtx(e, t)),
                  A(t, { code: x.not_multiple_of, multipleOf: r.value, message: r.message }),
                  n.dirty())
                : le.assertNever(r);
        return { status: n.value, value: e.data };
      }
      gte(e, t) {
        return this.setLimit("min", e, !0, B.toString(t));
      }
      gt(e, t) {
        return this.setLimit("min", e, !1, B.toString(t));
      }
      lte(e, t) {
        return this.setLimit("max", e, !0, B.toString(t));
      }
      lt(e, t) {
        return this.setLimit("max", e, !1, B.toString(t));
      }
      setLimit(e, t, n, r) {
        return new Jt({
          ...this._def,
          checks: [
            ...this._def.checks,
            { kind: e, value: t, inclusive: n, message: B.toString(r) },
          ],
        });
      }
      _addCheck(e) {
        return new Jt({ ...this._def, checks: [...this._def.checks, e] });
      }
      positive(e) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !1,
          message: B.toString(e),
        });
      }
      negative(e) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !1,
          message: B.toString(e),
        });
      }
      nonpositive(e) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !0,
          message: B.toString(e),
        });
      }
      nonnegative(e) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !0,
          message: B.toString(e),
        });
      }
      multipleOf(e, t) {
        return this._addCheck({ kind: "multipleOf", value: e, message: B.toString(t) });
      }
      get minValue() {
        let e = null;
        for (let t of this._def.checks)
          t.kind === "min" && (e === null || t.value > e) && (e = t.value);
        return e;
      }
      get maxValue() {
        let e = null;
        for (let t of this._def.checks)
          t.kind === "max" && (e === null || t.value < e) && (e = t.value);
        return e;
      }
    };
    Jt.create = (e) => {
      var t;
      return new Jt({
        checks: [],
        typeName: D.ZodBigInt,
        coerce: (t = e?.coerce) !== null && t !== void 0 ? t : !1,
        ...W(e),
      });
    };
    var sa = class extends Q {
      _parse(e) {
        if ((this._def.coerce && (e.data = !!e.data), this._getType(e) !== _.boolean)) {
          let t = this._getOrReturnCtx(e);
          return A(t, { code: x.invalid_type, expected: _.boolean, received: t.parsedType }), z;
        }
        return Ve(e.data);
      }
    };
    sa.create = (e) => new sa({ typeName: D.ZodBoolean, coerce: e?.coerce || !1, ...W(e) });
    var kn = class extends Q {
      _parse(e) {
        if ((this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== _.date)) {
          let r = this._getOrReturnCtx(e);
          return A(r, { code: x.invalid_type, expected: _.date, received: r.parsedType }), z;
        }
        if (isNaN(e.data.getTime())) {
          let r = this._getOrReturnCtx(e);
          return A(r, { code: x.invalid_date }), z;
        }
        let t = new Pe(),
          n;
        for (let r of this._def.checks)
          r.kind === "min"
            ? e.data.getTime() < r.value &&
              ((n = this._getOrReturnCtx(e, n)),
              A(n, {
                code: x.too_small,
                message: r.message,
                inclusive: !0,
                exact: !1,
                minimum: r.value,
                type: "date",
              }),
              t.dirty())
            : r.kind === "max"
              ? e.data.getTime() > r.value &&
                ((n = this._getOrReturnCtx(e, n)),
                A(n, {
                  code: x.too_big,
                  message: r.message,
                  inclusive: !0,
                  exact: !1,
                  maximum: r.value,
                  type: "date",
                }),
                t.dirty())
              : le.assertNever(r);
        return { status: t.value, value: new Date(e.data.getTime()) };
      }
      _addCheck(e) {
        return new kn({ ...this._def, checks: [...this._def.checks, e] });
      }
      min(e, t) {
        return this._addCheck({ kind: "min", value: e.getTime(), message: B.toString(t) });
      }
      max(e, t) {
        return this._addCheck({ kind: "max", value: e.getTime(), message: B.toString(t) });
      }
      get minDate() {
        let e = null;
        for (let t of this._def.checks)
          t.kind === "min" && (e === null || t.value > e) && (e = t.value);
        return e != null ? new Date(e) : null;
      }
      get maxDate() {
        let e = null;
        for (let t of this._def.checks)
          t.kind === "max" && (e === null || t.value < e) && (e = t.value);
        return e != null ? new Date(e) : null;
      }
    };
    kn.create = (e) =>
      new kn({ checks: [], coerce: e?.coerce || !1, typeName: D.ZodDate, ...W(e) });
    var fr = class extends Q {
      _parse(e) {
        if (this._getType(e) !== _.symbol) {
          let t = this._getOrReturnCtx(e);
          return A(t, { code: x.invalid_type, expected: _.symbol, received: t.parsedType }), z;
        }
        return Ve(e.data);
      }
    };
    fr.create = (e) => new fr({ typeName: D.ZodSymbol, ...W(e) });
    var ca = class extends Q {
      _parse(e) {
        if (this._getType(e) !== _.undefined) {
          let t = this._getOrReturnCtx(e);
          return A(t, { code: x.invalid_type, expected: _.undefined, received: t.parsedType }), z;
        }
        return Ve(e.data);
      }
    };
    ca.create = (e) => new ca({ typeName: D.ZodUndefined, ...W(e) });
    var da = class extends Q {
      _parse(e) {
        if (this._getType(e) !== _.null) {
          let t = this._getOrReturnCtx(e);
          return A(t, { code: x.invalid_type, expected: _.null, received: t.parsedType }), z;
        }
        return Ve(e.data);
      }
    };
    da.create = (e) => new da({ typeName: D.ZodNull, ...W(e) });
    var wn = class extends Q {
      constructor() {
        super(...arguments), (this._any = !0);
      }
      _parse(e) {
        return Ve(e.data);
      }
    };
    wn.create = (e) => new wn({ typeName: D.ZodAny, ...W(e) });
    var Qt = class extends Q {
      constructor() {
        super(...arguments), (this._unknown = !0);
      }
      _parse(e) {
        return Ve(e.data);
      }
    };
    Qt.create = (e) => new Qt({ typeName: D.ZodUnknown, ...W(e) });
    var Nt = class extends Q {
      _parse(e) {
        let t = this._getOrReturnCtx(e);
        return A(t, { code: x.invalid_type, expected: _.never, received: t.parsedType }), z;
      }
    };
    Nt.create = (e) => new Nt({ typeName: D.ZodNever, ...W(e) });
    var gr = class extends Q {
      _parse(e) {
        if (this._getType(e) !== _.undefined) {
          let t = this._getOrReturnCtx(e);
          return A(t, { code: x.invalid_type, expected: _.void, received: t.parsedType }), z;
        }
        return Ve(e.data);
      }
    };
    gr.create = (e) => new gr({ typeName: D.ZodVoid, ...W(e) });
    var vt = class extends Q {
      _parse(e) {
        let { ctx: t, status: n } = this._processInputParams(e),
          r = this._def;
        if (t.parsedType !== _.array)
          return A(t, { code: x.invalid_type, expected: _.array, received: t.parsedType }), z;
        if (r.exactLength !== null) {
          let l = t.data.length > r.exactLength.value,
            o = t.data.length < r.exactLength.value;
          (l || o) &&
            (A(t, {
              code: l ? x.too_big : x.too_small,
              minimum: o ? r.exactLength.value : void 0,
              maximum: l ? r.exactLength.value : void 0,
              type: "array",
              inclusive: !0,
              exact: !0,
              message: r.exactLength.message,
            }),
            n.dirty());
        }
        if (
          (r.minLength !== null &&
            t.data.length < r.minLength.value &&
            (A(t, {
              code: x.too_small,
              minimum: r.minLength.value,
              type: "array",
              inclusive: !0,
              exact: !1,
              message: r.minLength.message,
            }),
            n.dirty()),
          r.maxLength !== null &&
            t.data.length > r.maxLength.value &&
            (A(t, {
              code: x.too_big,
              maximum: r.maxLength.value,
              type: "array",
              inclusive: !0,
              exact: !1,
              message: r.maxLength.message,
            }),
            n.dirty()),
          t.common.async)
        )
          return Promise.all(
            [...t.data].map((l, o) => r.type._parseAsync(new bt(t, l, t.path, o)))
          ).then((l) => Pe.mergeArray(n, l));
        let i = [...t.data].map((l, o) => r.type._parseSync(new bt(t, l, t.path, o)));
        return Pe.mergeArray(n, i);
      }
      get element() {
        return this._def.type;
      }
      min(e, t) {
        return new vt({ ...this._def, minLength: { value: e, message: B.toString(t) } });
      }
      max(e, t) {
        return new vt({ ...this._def, maxLength: { value: e, message: B.toString(t) } });
      }
      length(e, t) {
        return new vt({ ...this._def, exactLength: { value: e, message: B.toString(t) } });
      }
      nonempty(e) {
        return this.min(1, e);
      }
    };
    vt.create = (e, t) =>
      new vt({
        type: e,
        minLength: null,
        maxLength: null,
        exactLength: null,
        typeName: D.ZodArray,
        ...W(t),
      });
    function pn(e) {
      if (e instanceof be) {
        let t = {};
        for (let n in e.shape) {
          let r = e.shape[n];
          t[n] = xt.create(pn(r));
        }
        return new be({ ...e._def, shape: () => t });
      } else
        return e instanceof vt
          ? new vt({ ...e._def, type: pn(e.element) })
          : e instanceof xt
            ? xt.create(pn(e.unwrap()))
            : e instanceof en
              ? en.create(pn(e.unwrap()))
              : e instanceof _t
                ? _t.create(e.items.map((t) => pn(t)))
                : e;
    }
    var be = class extends Q {
      constructor() {
        super(...arguments),
          (this._cached = null),
          (this.nonstrict = this.passthrough),
          (this.augment = this.extend);
      }
      _getCached() {
        if (this._cached !== null) return this._cached;
        let e = this._def.shape(),
          t = le.objectKeys(e);
        return (this._cached = { shape: e, keys: t });
      }
      _parse(e) {
        if (this._getType(e) !== _.object) {
          let s = this._getOrReturnCtx(e);
          return A(s, { code: x.invalid_type, expected: _.object, received: s.parsedType }), z;
        }
        let { status: t, ctx: n } = this._processInputParams(e),
          { shape: r, keys: i } = this._getCached(),
          l = [];
        if (!(this._def.catchall instanceof Nt && this._def.unknownKeys === "strip"))
          for (let s in n.data) i.includes(s) || l.push(s);
        let o = [];
        for (let s of i) {
          let c = r[s],
            d = n.data[s];
          o.push({
            key: { status: "valid", value: s },
            value: c._parse(new bt(n, d, n.path, s)),
            alwaysSet: s in n.data,
          });
        }
        if (this._def.catchall instanceof Nt) {
          let s = this._def.unknownKeys;
          if (s === "passthrough")
            for (let c of l)
              o.push({
                key: { status: "valid", value: c },
                value: { status: "valid", value: n.data[c] },
              });
          else if (s === "strict")
            l.length > 0 && (A(n, { code: x.unrecognized_keys, keys: l }), t.dirty());
          else if (s !== "strip")
            throw new Error("Internal ZodObject error: invalid unknownKeys value.");
        } else {
          let s = this._def.catchall;
          for (let c of l) {
            let d = n.data[c];
            o.push({
              key: { status: "valid", value: c },
              value: s._parse(new bt(n, d, n.path, c)),
              alwaysSet: c in n.data,
            });
          }
        }
        return n.common.async
          ? Promise.resolve()
              .then(async () => {
                let s = [];
                for (let c of o) {
                  let d = await c.key;
                  s.push({ key: d, value: await c.value, alwaysSet: c.alwaysSet });
                }
                return s;
              })
              .then((s) => Pe.mergeObjectSync(t, s))
          : Pe.mergeObjectSync(t, o);
      }
      get shape() {
        return this._def.shape();
      }
      strict(e) {
        return (
          B.errToObj,
          new be({
            ...this._def,
            unknownKeys: "strict",
            ...(e !== void 0
              ? {
                  errorMap: (t, n) => {
                    var r, i, l, o;
                    let s =
                      (l =
                        (i = (r = this._def).errorMap) === null || i === void 0
                          ? void 0
                          : i.call(r, t, n).message) !== null && l !== void 0
                        ? l
                        : n.defaultError;
                    return t.code === "unrecognized_keys"
                      ? { message: (o = B.errToObj(e).message) !== null && o !== void 0 ? o : s }
                      : { message: s };
                  },
                }
              : {}),
          })
        );
      }
      strip() {
        return new be({ ...this._def, unknownKeys: "strip" });
      }
      passthrough() {
        return new be({ ...this._def, unknownKeys: "passthrough" });
      }
      extend(e) {
        return new be({ ...this._def, shape: () => ({ ...this._def.shape(), ...e }) });
      }
      merge(e) {
        return new be({
          unknownKeys: e._def.unknownKeys,
          catchall: e._def.catchall,
          shape: () => ({ ...this._def.shape(), ...e._def.shape() }),
          typeName: D.ZodObject,
        });
      }
      setKey(e, t) {
        return this.augment({ [e]: t });
      }
      catchall(e) {
        return new be({ ...this._def, catchall: e });
      }
      pick(e) {
        let t = {};
        return (
          le.objectKeys(e).forEach((n) => {
            e[n] && this.shape[n] && (t[n] = this.shape[n]);
          }),
          new be({ ...this._def, shape: () => t })
        );
      }
      omit(e) {
        let t = {};
        return (
          le.objectKeys(this.shape).forEach((n) => {
            e[n] || (t[n] = this.shape[n]);
          }),
          new be({ ...this._def, shape: () => t })
        );
      }
      deepPartial() {
        return pn(this);
      }
      partial(e) {
        let t = {};
        return (
          le.objectKeys(this.shape).forEach((n) => {
            let r = this.shape[n];
            e && !e[n] ? (t[n] = r) : (t[n] = r.optional());
          }),
          new be({ ...this._def, shape: () => t })
        );
      }
      required(e) {
        let t = {};
        return (
          le.objectKeys(this.shape).forEach((n) => {
            if (e && !e[n]) t[n] = this.shape[n];
            else {
              let r = this.shape[n];
              for (; r instanceof xt; ) r = r._def.innerType;
              t[n] = r;
            }
          }),
          new be({ ...this._def, shape: () => t })
        );
      }
      keyof() {
        return a0(le.objectKeys(this.shape));
      }
    };
    be.create = (e, t) =>
      new be({
        shape: () => e,
        unknownKeys: "strip",
        catchall: Nt.create(),
        typeName: D.ZodObject,
        ...W(t),
      });
    be.strictCreate = (e, t) =>
      new be({
        shape: () => e,
        unknownKeys: "strict",
        catchall: Nt.create(),
        typeName: D.ZodObject,
        ...W(t),
      });
    be.lazycreate = (e, t) =>
      new be({
        shape: e,
        unknownKeys: "strip",
        catchall: Nt.create(),
        typeName: D.ZodObject,
        ...W(t),
      });
    var ua = class extends Q {
      _parse(e) {
        let { ctx: t } = this._processInputParams(e),
          n = this._def.options;
        function r(i) {
          for (let o of i) if (o.result.status === "valid") return o.result;
          for (let o of i)
            if (o.result.status === "dirty")
              return t.common.issues.push(...o.ctx.common.issues), o.result;
          let l = i.map((o) => new at(o.ctx.common.issues));
          return A(t, { code: x.invalid_union, unionErrors: l }), z;
        }
        if (t.common.async)
          return Promise.all(
            n.map(async (i) => {
              let l = { ...t, common: { ...t.common, issues: [] }, parent: null };
              return {
                result: await i._parseAsync({ data: t.data, path: t.path, parent: l }),
                ctx: l,
              };
            })
          ).then(r);
        {
          let i,
            l = [];
          for (let s of n) {
            let c = { ...t, common: { ...t.common, issues: [] }, parent: null },
              d = s._parseSync({ data: t.data, path: t.path, parent: c });
            if (d.status === "valid") return d;
            d.status === "dirty" && !i && (i = { result: d, ctx: c }),
              c.common.issues.length && l.push(c.common.issues);
          }
          if (i) return t.common.issues.push(...i.ctx.common.issues), i.result;
          let o = l.map((s) => new at(s));
          return A(t, { code: x.invalid_union, unionErrors: o }), z;
        }
      }
      get options() {
        return this._def.options;
      }
    };
    ua.create = (e, t) => new ua({ options: e, typeName: D.ZodUnion, ...W(t) });
    var Ka = (e) =>
        e instanceof pa
          ? Ka(e.schema)
          : e instanceof rt
            ? Ka(e.innerType())
            : e instanceof ha
              ? [e.value]
              : e instanceof Xt
                ? e.options
                : e instanceof fa
                  ? Object.keys(e.enum)
                  : e instanceof ga
                    ? Ka(e._def.innerType)
                    : e instanceof ca
                      ? [void 0]
                      : e instanceof da
                        ? [null]
                        : null,
      Bl = class extends Q {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== _.object)
            return A(t, { code: x.invalid_type, expected: _.object, received: t.parsedType }), z;
          let n = this.discriminator,
            r = t.data[n],
            i = this.optionsMap.get(r);
          return i
            ? t.common.async
              ? i._parseAsync({ data: t.data, path: t.path, parent: t })
              : i._parseSync({ data: t.data, path: t.path, parent: t })
            : (A(t, {
                code: x.invalid_union_discriminator,
                options: Array.from(this.optionsMap.keys()),
                path: [n],
              }),
              z);
        }
        get discriminator() {
          return this._def.discriminator;
        }
        get options() {
          return this._def.options;
        }
        get optionsMap() {
          return this._def.optionsMap;
        }
        static create(e, t, n) {
          let r = new Map();
          for (let i of t) {
            let l = Ka(i.shape[e]);
            if (!l)
              throw new Error(
                `A discriminator value for key \`${e}\` could not be extracted from all schema options`
              );
            for (let o of l) {
              if (r.has(o))
                throw new Error(
                  `Discriminator property ${String(e)} has duplicate value ${String(o)}`
                );
              r.set(o, i);
            }
          }
          return new Bl({
            typeName: D.ZodDiscriminatedUnion,
            discriminator: e,
            options: t,
            optionsMap: r,
            ...W(n),
          });
        }
      };
    function al(e, t) {
      let n = Rt(e),
        r = Rt(t);
      if (e === t) return { valid: !0, data: e };
      if (n === _.object && r === _.object) {
        let i = le.objectKeys(t),
          l = le.objectKeys(e).filter((s) => i.indexOf(s) !== -1),
          o = { ...e, ...t };
        for (let s of l) {
          let c = al(e[s], t[s]);
          if (!c.valid) return { valid: !1 };
          o[s] = c.data;
        }
        return { valid: !0, data: o };
      } else if (n === _.array && r === _.array) {
        if (e.length !== t.length) return { valid: !1 };
        let i = [];
        for (let l = 0; l < e.length; l++) {
          let o = e[l],
            s = t[l],
            c = al(o, s);
          if (!c.valid) return { valid: !1 };
          i.push(c.data);
        }
        return { valid: !0, data: i };
      } else
        return n === _.date && r === _.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
    }
    var ma = class extends Q {
      _parse(e) {
        let { status: t, ctx: n } = this._processInputParams(e),
          r = (i, l) => {
            if (tl(i) || tl(l)) return z;
            let o = al(i.value, l.value);
            return o.valid
              ? ((nl(i) || nl(l)) && t.dirty(), { status: t.value, value: o.data })
              : (A(n, { code: x.invalid_intersection_types }), z);
          };
        return n.common.async
          ? Promise.all([
              this._def.left._parseAsync({ data: n.data, path: n.path, parent: n }),
              this._def.right._parseAsync({ data: n.data, path: n.path, parent: n }),
            ]).then(([i, l]) => r(i, l))
          : r(
              this._def.left._parseSync({ data: n.data, path: n.path, parent: n }),
              this._def.right._parseSync({ data: n.data, path: n.path, parent: n })
            );
      }
    };
    ma.create = (e, t, n) => new ma({ left: e, right: t, typeName: D.ZodIntersection, ...W(n) });
    var _t = class extends Q {
      _parse(e) {
        let { status: t, ctx: n } = this._processInputParams(e);
        if (n.parsedType !== _.array)
          return A(n, { code: x.invalid_type, expected: _.array, received: n.parsedType }), z;
        if (n.data.length < this._def.items.length)
          return (
            A(n, {
              code: x.too_small,
              minimum: this._def.items.length,
              inclusive: !0,
              exact: !1,
              type: "array",
            }),
            z
          );
        !this._def.rest &&
          n.data.length > this._def.items.length &&
          (A(n, {
            code: x.too_big,
            maximum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: "array",
          }),
          t.dirty());
        let r = [...n.data]
          .map((i, l) => {
            let o = this._def.items[l] || this._def.rest;
            return o ? o._parse(new bt(n, i, n.path, l)) : null;
          })
          .filter((i) => !!i);
        return n.common.async
          ? Promise.all(r).then((i) => Pe.mergeArray(t, i))
          : Pe.mergeArray(t, r);
      }
      get items() {
        return this._def.items;
      }
      rest(e) {
        return new _t({ ...this._def, rest: e });
      }
    };
    _t.create = (e, t) => {
      if (!Array.isArray(e))
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new _t({ items: e, typeName: D.ZodTuple, rest: null, ...W(t) });
    };
    var vr = class extends Q {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(e) {
          let { status: t, ctx: n } = this._processInputParams(e);
          if (n.parsedType !== _.object)
            return A(n, { code: x.invalid_type, expected: _.object, received: n.parsedType }), z;
          let r = [],
            i = this._def.keyType,
            l = this._def.valueType;
          for (let o in n.data)
            r.push({
              key: i._parse(new bt(n, o, n.path, o)),
              value: l._parse(new bt(n, n.data[o], n.path, o)),
            });
          return n.common.async ? Pe.mergeObjectAsync(t, r) : Pe.mergeObjectSync(t, r);
        }
        get element() {
          return this._def.valueType;
        }
        static create(e, t, n) {
          return t instanceof Q
            ? new vr({ keyType: e, valueType: t, typeName: D.ZodRecord, ...W(n) })
            : new vr({ keyType: ht.create(), valueType: e, typeName: D.ZodRecord, ...W(t) });
        }
      },
      yr = class extends Q {
        get keySchema() {
          return this._def.keyType;
        }
        get valueSchema() {
          return this._def.valueType;
        }
        _parse(e) {
          let { status: t, ctx: n } = this._processInputParams(e);
          if (n.parsedType !== _.map)
            return A(n, { code: x.invalid_type, expected: _.map, received: n.parsedType }), z;
          let r = this._def.keyType,
            i = this._def.valueType,
            l = [...n.data.entries()].map(([o, s], c) => ({
              key: r._parse(new bt(n, o, n.path, [c, "key"])),
              value: i._parse(new bt(n, s, n.path, [c, "value"])),
            }));
          if (n.common.async) {
            let o = new Map();
            return Promise.resolve().then(async () => {
              for (let s of l) {
                let c = await s.key,
                  d = await s.value;
                if (c.status === "aborted" || d.status === "aborted") return z;
                (c.status === "dirty" || d.status === "dirty") && t.dirty(),
                  o.set(c.value, d.value);
              }
              return { status: t.value, value: o };
            });
          } else {
            let o = new Map();
            for (let s of l) {
              let c = s.key,
                d = s.value;
              if (c.status === "aborted" || d.status === "aborted") return z;
              (c.status === "dirty" || d.status === "dirty") && t.dirty(), o.set(c.value, d.value);
            }
            return { status: t.value, value: o };
          }
        }
      };
    yr.create = (e, t, n) => new yr({ valueType: t, keyType: e, typeName: D.ZodMap, ...W(n) });
    var Cn = class extends Q {
      _parse(e) {
        let { status: t, ctx: n } = this._processInputParams(e);
        if (n.parsedType !== _.set)
          return A(n, { code: x.invalid_type, expected: _.set, received: n.parsedType }), z;
        let r = this._def;
        r.minSize !== null &&
          n.data.size < r.minSize.value &&
          (A(n, {
            code: x.too_small,
            minimum: r.minSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: r.minSize.message,
          }),
          t.dirty()),
          r.maxSize !== null &&
            n.data.size > r.maxSize.value &&
            (A(n, {
              code: x.too_big,
              maximum: r.maxSize.value,
              type: "set",
              inclusive: !0,
              exact: !1,
              message: r.maxSize.message,
            }),
            t.dirty());
        let i = this._def.valueType;
        function l(s) {
          let c = new Set();
          for (let d of s) {
            if (d.status === "aborted") return z;
            d.status === "dirty" && t.dirty(), c.add(d.value);
          }
          return { status: t.value, value: c };
        }
        let o = [...n.data.values()].map((s, c) => i._parse(new bt(n, s, n.path, c)));
        return n.common.async ? Promise.all(o).then((s) => l(s)) : l(o);
      }
      min(e, t) {
        return new Cn({ ...this._def, minSize: { value: e, message: B.toString(t) } });
      }
      max(e, t) {
        return new Cn({ ...this._def, maxSize: { value: e, message: B.toString(t) } });
      }
      size(e, t) {
        return this.min(e, t).max(e, t);
      }
      nonempty(e) {
        return this.min(1, e);
      }
    };
    Cn.create = (e, t) =>
      new Cn({ valueType: e, minSize: null, maxSize: null, typeName: D.ZodSet, ...W(t) });
    var ea = class extends Q {
        constructor() {
          super(...arguments), (this.validate = this.implement);
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          if (t.parsedType !== _.function)
            return A(t, { code: x.invalid_type, expected: _.function, received: t.parsedType }), z;
          function n(o, s) {
            return pr({
              data: o,
              path: t.path,
              errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, mr(), la].filter(
                (c) => !!c
              ),
              issueData: { code: x.invalid_arguments, argumentsError: s },
            });
          }
          function r(o, s) {
            return pr({
              data: o,
              path: t.path,
              errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, mr(), la].filter(
                (c) => !!c
              ),
              issueData: { code: x.invalid_return_type, returnTypeError: s },
            });
          }
          let i = { errorMap: t.common.contextualErrorMap },
            l = t.data;
          if (this._def.returns instanceof Sn) {
            let o = this;
            return Ve(async function (...s) {
              let c = new at([]),
                d = await o._def.args.parseAsync(s, i).catch((m) => {
                  throw (c.addIssue(n(s, m)), c);
                }),
                u = await Reflect.apply(l, this, d);
              return await o._def.returns._def.type.parseAsync(u, i).catch((m) => {
                throw (c.addIssue(r(u, m)), c);
              });
            });
          } else {
            let o = this;
            return Ve(function (...s) {
              let c = o._def.args.safeParse(s, i);
              if (!c.success) throw new at([n(s, c.error)]);
              let d = Reflect.apply(l, this, c.data),
                u = o._def.returns.safeParse(d, i);
              if (!u.success) throw new at([r(d, u.error)]);
              return u.data;
            });
          }
        }
        parameters() {
          return this._def.args;
        }
        returnType() {
          return this._def.returns;
        }
        args(...e) {
          return new ea({ ...this._def, args: _t.create(e).rest(Qt.create()) });
        }
        returns(e) {
          return new ea({ ...this._def, returns: e });
        }
        implement(e) {
          return this.parse(e);
        }
        strictImplement(e) {
          return this.parse(e);
        }
        static create(e, t, n) {
          return new ea({
            args: e || _t.create([]).rest(Qt.create()),
            returns: t || Qt.create(),
            typeName: D.ZodFunction,
            ...W(n),
          });
        }
      },
      pa = class extends Q {
        get schema() {
          return this._def.getter();
        }
        _parse(e) {
          let { ctx: t } = this._processInputParams(e);
          return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
        }
      };
    pa.create = (e, t) => new pa({ getter: e, typeName: D.ZodLazy, ...W(t) });
    var ha = class extends Q {
      _parse(e) {
        if (e.data !== this._def.value) {
          let t = this._getOrReturnCtx(e);
          return A(t, { received: t.data, code: x.invalid_literal, expected: this._def.value }), z;
        }
        return { status: "valid", value: e.data };
      }
      get value() {
        return this._def.value;
      }
    };
    ha.create = (e, t) => new ha({ value: e, typeName: D.ZodLiteral, ...W(t) });
    function a0(e, t) {
      return new Xt({ values: e, typeName: D.ZodEnum, ...W(t) });
    }
    var Xt = class extends Q {
      _parse(e) {
        if (typeof e.data != "string") {
          let t = this._getOrReturnCtx(e),
            n = this._def.values;
          return (
            A(t, { expected: le.joinValues(n), received: t.parsedType, code: x.invalid_type }), z
          );
        }
        if (this._def.values.indexOf(e.data) === -1) {
          let t = this._getOrReturnCtx(e),
            n = this._def.values;
          return A(t, { received: t.data, code: x.invalid_enum_value, options: n }), z;
        }
        return Ve(e.data);
      }
      get options() {
        return this._def.values;
      }
      get enum() {
        let e = {};
        for (let t of this._def.values) e[t] = t;
        return e;
      }
      get Values() {
        let e = {};
        for (let t of this._def.values) e[t] = t;
        return e;
      }
      get Enum() {
        let e = {};
        for (let t of this._def.values) e[t] = t;
        return e;
      }
      extract(e) {
        return Xt.create(e);
      }
      exclude(e) {
        return Xt.create(this.options.filter((t) => !e.includes(t)));
      }
    };
    Xt.create = a0;
    var fa = class extends Q {
      _parse(e) {
        let t = le.getValidEnumValues(this._def.values),
          n = this._getOrReturnCtx(e);
        if (n.parsedType !== _.string && n.parsedType !== _.number) {
          let r = le.objectValues(t);
          return (
            A(n, { expected: le.joinValues(r), received: n.parsedType, code: x.invalid_type }), z
          );
        }
        if (t.indexOf(e.data) === -1) {
          let r = le.objectValues(t);
          return A(n, { received: n.data, code: x.invalid_enum_value, options: r }), z;
        }
        return Ve(e.data);
      }
      get enum() {
        return this._def.values;
      }
    };
    fa.create = (e, t) => new fa({ values: e, typeName: D.ZodNativeEnum, ...W(t) });
    var Sn = class extends Q {
      unwrap() {
        return this._def.type;
      }
      _parse(e) {
        let { ctx: t } = this._processInputParams(e);
        if (t.parsedType !== _.promise && t.common.async === !1)
          return A(t, { code: x.invalid_type, expected: _.promise, received: t.parsedType }), z;
        let n = t.parsedType === _.promise ? t.data : Promise.resolve(t.data);
        return Ve(
          n.then((r) =>
            this._def.type.parseAsync(r, { path: t.path, errorMap: t.common.contextualErrorMap })
          )
        );
      }
    };
    Sn.create = (e, t) => new Sn({ type: e, typeName: D.ZodPromise, ...W(t) });
    var rt = class extends Q {
      innerType() {
        return this._def.schema;
      }
      sourceType() {
        return this._def.schema._def.typeName === D.ZodEffects
          ? this._def.schema.sourceType()
          : this._def.schema;
      }
      _parse(e) {
        let { status: t, ctx: n } = this._processInputParams(e),
          r = this._def.effect || null,
          i = {
            addIssue: (l) => {
              A(n, l), l.fatal ? t.abort() : t.dirty();
            },
            get path() {
              return n.path;
            },
          };
        if (((i.addIssue = i.addIssue.bind(i)), r.type === "preprocess")) {
          let l = r.transform(n.data, i);
          return n.common.issues.length
            ? { status: "dirty", value: n.data }
            : n.common.async
              ? Promise.resolve(l).then((o) =>
                  this._def.schema._parseAsync({ data: o, path: n.path, parent: n })
                )
              : this._def.schema._parseSync({ data: l, path: n.path, parent: n });
        }
        if (r.type === "refinement") {
          let l = (o) => {
            let s = r.refinement(o, i);
            if (n.common.async) return Promise.resolve(s);
            if (s instanceof Promise)
              throw new Error(
                "Async refinement encountered during synchronous parse operation. Use .parseAsync instead."
              );
            return o;
          };
          if (n.common.async === !1) {
            let o = this._def.schema._parseSync({ data: n.data, path: n.path, parent: n });
            return o.status === "aborted"
              ? z
              : (o.status === "dirty" && t.dirty(),
                l(o.value),
                { status: t.value, value: o.value });
          } else
            return this._def.schema
              ._parseAsync({ data: n.data, path: n.path, parent: n })
              .then((o) =>
                o.status === "aborted"
                  ? z
                  : (o.status === "dirty" && t.dirty(),
                    l(o.value).then(() => ({ status: t.value, value: o.value })))
              );
        }
        if (r.type === "transform")
          if (n.common.async === !1) {
            let l = this._def.schema._parseSync({ data: n.data, path: n.path, parent: n });
            if (!oa(l)) return l;
            let o = r.transform(l.value, i);
            if (o instanceof Promise)
              throw new Error(
                "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead."
              );
            return { status: t.value, value: o };
          } else
            return this._def.schema
              ._parseAsync({ data: n.data, path: n.path, parent: n })
              .then((l) =>
                oa(l)
                  ? Promise.resolve(r.transform(l.value, i)).then((o) => ({
                      status: t.value,
                      value: o,
                    }))
                  : l
              );
        le.assertNever(r);
      }
    };
    rt.create = (e, t, n) => new rt({ schema: e, typeName: D.ZodEffects, effect: t, ...W(n) });
    rt.createWithPreprocess = (e, t, n) =>
      new rt({
        schema: t,
        effect: { type: "preprocess", transform: e },
        typeName: D.ZodEffects,
        ...W(n),
      });
    var xt = class extends Q {
      _parse(e) {
        return this._getType(e) === _.undefined ? Ve(void 0) : this._def.innerType._parse(e);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    xt.create = (e, t) => new xt({ innerType: e, typeName: D.ZodOptional, ...W(t) });
    var en = class extends Q {
      _parse(e) {
        return this._getType(e) === _.null ? Ve(null) : this._def.innerType._parse(e);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    en.create = (e, t) => new en({ innerType: e, typeName: D.ZodNullable, ...W(t) });
    var ga = class extends Q {
      _parse(e) {
        let { ctx: t } = this._processInputParams(e),
          n = t.data;
        return (
          t.parsedType === _.undefined && (n = this._def.defaultValue()),
          this._def.innerType._parse({ data: n, path: t.path, parent: t })
        );
      }
      removeDefault() {
        return this._def.innerType;
      }
    };
    ga.create = (e, t) =>
      new ga({
        innerType: e,
        typeName: D.ZodDefault,
        defaultValue: typeof t.default == "function" ? t.default : () => t.default,
        ...W(t),
      });
    var Er = class extends Q {
      _parse(e) {
        let { ctx: t } = this._processInputParams(e),
          n = { ...t, common: { ...t.common, issues: [] } },
          r = this._def.innerType._parse({ data: n.data, path: n.path, parent: { ...n } });
        return hr(r)
          ? r.then((i) => ({
              status: "valid",
              value:
                i.status === "valid"
                  ? i.value
                  : this._def.catchValue({
                      get error() {
                        return new at(n.common.issues);
                      },
                      input: n.data,
                    }),
            }))
          : {
              status: "valid",
              value:
                r.status === "valid"
                  ? r.value
                  : this._def.catchValue({
                      get error() {
                        return new at(n.common.issues);
                      },
                      input: n.data,
                    }),
            };
      }
      removeCatch() {
        return this._def.innerType;
      }
    };
    Er.create = (e, t) =>
      new Er({
        innerType: e,
        typeName: D.ZodCatch,
        catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
        ...W(t),
      });
    var br = class extends Q {
      _parse(e) {
        if (this._getType(e) !== _.nan) {
          let t = this._getOrReturnCtx(e);
          return A(t, { code: x.invalid_type, expected: _.nan, received: t.parsedType }), z;
        }
        return { status: "valid", value: e.data };
      }
    };
    br.create = (e) => new br({ typeName: D.ZodNaN, ...W(e) });
    var gp = Symbol("zod_brand"),
      r0 = class extends Q {
        _parse(e) {
          let { ctx: t } = this._processInputParams(e),
            n = t.data;
          return this._def.type._parse({ data: n, path: t.path, parent: t });
        }
        unwrap() {
          return this._def.type;
        }
      },
      Vr = class extends Q {
        _parse(e) {
          let { status: t, ctx: n } = this._processInputParams(e);
          if (n.common.async)
            return (async () => {
              let r = await this._def.in._parseAsync({ data: n.data, path: n.path, parent: n });
              return r.status === "aborted"
                ? z
                : r.status === "dirty"
                  ? (t.dirty(), n0(r.value))
                  : this._def.out._parseAsync({ data: r.value, path: n.path, parent: n });
            })();
          {
            let r = this._def.in._parseSync({ data: n.data, path: n.path, parent: n });
            return r.status === "aborted"
              ? z
              : r.status === "dirty"
                ? (t.dirty(), { status: "dirty", value: r.value })
                : this._def.out._parseSync({ data: r.value, path: n.path, parent: n });
          }
        }
        static create(e, t) {
          return new Vr({ in: e, out: t, typeName: D.ZodPipeline });
        }
      },
      kr = class extends Q {
        _parse(e) {
          let t = this._def.innerType._parse(e);
          return oa(t) && (t.value = Object.freeze(t.value)), t;
        }
      };
    kr.create = (e, t) => new kr({ innerType: e, typeName: D.ZodReadonly, ...W(t) });
    var i0 = (e, t = {}, n) =>
        e
          ? wn.create().superRefine((r, i) => {
              var l, o;
              if (!e(r)) {
                let s = typeof t == "function" ? t(r) : typeof t == "string" ? { message: t } : t,
                  c =
                    (o = (l = s.fatal) !== null && l !== void 0 ? l : n) !== null && o !== void 0
                      ? o
                      : !0,
                  d = typeof s == "string" ? { message: s } : s;
                i.addIssue({ code: "custom", ...d, fatal: c });
              }
            })
          : wn.create(),
      vp = { object: be.lazycreate },
      D;
    (function (e) {
      (e.ZodString = "ZodString"),
        (e.ZodNumber = "ZodNumber"),
        (e.ZodNaN = "ZodNaN"),
        (e.ZodBigInt = "ZodBigInt"),
        (e.ZodBoolean = "ZodBoolean"),
        (e.ZodDate = "ZodDate"),
        (e.ZodSymbol = "ZodSymbol"),
        (e.ZodUndefined = "ZodUndefined"),
        (e.ZodNull = "ZodNull"),
        (e.ZodAny = "ZodAny"),
        (e.ZodUnknown = "ZodUnknown"),
        (e.ZodNever = "ZodNever"),
        (e.ZodVoid = "ZodVoid"),
        (e.ZodArray = "ZodArray"),
        (e.ZodObject = "ZodObject"),
        (e.ZodUnion = "ZodUnion"),
        (e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
        (e.ZodIntersection = "ZodIntersection"),
        (e.ZodTuple = "ZodTuple"),
        (e.ZodRecord = "ZodRecord"),
        (e.ZodMap = "ZodMap"),
        (e.ZodSet = "ZodSet"),
        (e.ZodFunction = "ZodFunction"),
        (e.ZodLazy = "ZodLazy"),
        (e.ZodLiteral = "ZodLiteral"),
        (e.ZodEnum = "ZodEnum"),
        (e.ZodEffects = "ZodEffects"),
        (e.ZodNativeEnum = "ZodNativeEnum"),
        (e.ZodOptional = "ZodOptional"),
        (e.ZodNullable = "ZodNullable"),
        (e.ZodDefault = "ZodDefault"),
        (e.ZodCatch = "ZodCatch"),
        (e.ZodPromise = "ZodPromise"),
        (e.ZodBranded = "ZodBranded"),
        (e.ZodPipeline = "ZodPipeline"),
        (e.ZodReadonly = "ZodReadonly");
    })(D || (D = {}));
    var yp = (e, t = { message: `Input not instance of ${e.name}` }) =>
        i0((n) => n instanceof e, t),
      l0 = ht.create,
      o0 = Kt.create,
      Ep = br.create,
      bp = Jt.create,
      s0 = sa.create,
      kp = kn.create,
      wp = fr.create,
      Cp = ca.create,
      Sp = da.create,
      xp = wn.create,
      Np = Qt.create,
      _p = Nt.create,
      Mp = gr.create,
      Tp = vt.create,
      Ap = be.create,
      Fp = be.strictCreate,
      Op = ua.create,
      Lp = Bl.create,
      Rp = ma.create,
      Ip = _t.create,
      Zp = vr.create,
      Bp = yr.create,
      Pp = Cn.create,
      Vp = ea.create,
      Dp = pa.create,
      Hp = ha.create,
      jp = Xt.create,
      zp = fa.create,
      Up = Sn.create,
      e1 = rt.create,
      $p = xt.create,
      Wp = en.create,
      Gp = rt.createWithPreprocess,
      qp = Vr.create,
      Yp = () => l0().optional(),
      Qp = () => o0().optional(),
      Kp = () => s0().optional(),
      Jp = {
        string: (e) => ht.create({ ...e, coerce: !0 }),
        number: (e) => Kt.create({ ...e, coerce: !0 }),
        boolean: (e) => sa.create({ ...e, coerce: !0 }),
        bigint: (e) => Jt.create({ ...e, coerce: !0 }),
        date: (e) => kn.create({ ...e, coerce: !0 }),
      },
      Xp = z,
      wt = Object.freeze({
        __proto__: null,
        defaultErrorMap: la,
        setErrorMap: ap,
        getErrorMap: mr,
        makeIssue: pr,
        EMPTY_PATH: rp,
        addIssueToContext: A,
        ParseStatus: Pe,
        INVALID: z,
        DIRTY: n0,
        OK: Ve,
        isAborted: tl,
        isDirty: nl,
        isValid: oa,
        isAsync: hr,
        get util() {
          return le;
        },
        get objectUtil() {
          return el;
        },
        ZodParsedType: _,
        getParsedType: Rt,
        ZodType: Q,
        ZodString: ht,
        ZodNumber: Kt,
        ZodBigInt: Jt,
        ZodBoolean: sa,
        ZodDate: kn,
        ZodSymbol: fr,
        ZodUndefined: ca,
        ZodNull: da,
        ZodAny: wn,
        ZodUnknown: Qt,
        ZodNever: Nt,
        ZodVoid: gr,
        ZodArray: vt,
        ZodObject: be,
        ZodUnion: ua,
        ZodDiscriminatedUnion: Bl,
        ZodIntersection: ma,
        ZodTuple: _t,
        ZodRecord: vr,
        ZodMap: yr,
        ZodSet: Cn,
        ZodFunction: ea,
        ZodLazy: pa,
        ZodLiteral: ha,
        ZodEnum: Xt,
        ZodNativeEnum: fa,
        ZodPromise: Sn,
        ZodEffects: rt,
        ZodTransformer: rt,
        ZodOptional: xt,
        ZodNullable: en,
        ZodDefault: ga,
        ZodCatch: Er,
        ZodNaN: br,
        BRAND: gp,
        ZodBranded: r0,
        ZodPipeline: Vr,
        ZodReadonly: kr,
        custom: i0,
        Schema: Q,
        ZodSchema: Q,
        late: vp,
        get ZodFirstPartyTypeKind() {
          return D;
        },
        coerce: Jp,
        any: xp,
        array: Tp,
        bigint: bp,
        boolean: s0,
        date: kp,
        discriminatedUnion: Lp,
        effect: e1,
        enum: jp,
        function: Vp,
        instanceof: yp,
        intersection: Rp,
        lazy: Dp,
        literal: Hp,
        map: Bp,
        nan: Ep,
        nativeEnum: zp,
        never: _p,
        null: Sp,
        nullable: Wp,
        number: o0,
        object: Ap,
        oboolean: Kp,
        onumber: Qp,
        optional: $p,
        ostring: Yp,
        pipeline: qp,
        preprocess: Gp,
        promise: Up,
        record: Zp,
        set: Pp,
        strictObject: Fp,
        string: l0,
        symbol: wp,
        transformer: e1,
        tuple: Ip,
        undefined: Cp,
        union: Op,
        unknown: Np,
        void: Mp,
        NEVER: Xp,
        ZodIssueCode: x,
        quotelessJson: np,
        ZodError: at,
      }),
      e3 = wt.union([
        wt.object({ message: wt.literal("login") }),
        wt.object({ message: wt.literal("grant"), denied: wt.boolean() }),
        wt.object({ message: wt.literal("createdProject"), projectId: wt.string() }),
      ]),
      c0 = (e) => {
        let t = Ne(),
          n = Ne();
        return (
          K(() => {
            let r = ({ origin: i, data: l }) => {
              if (i === n.current) {
                let o;
                try {
                  o = e3.parse(l);
                } catch {
                  return;
                }
                e?.(o);
              }
            };
            return (
              window.addEventListener("message", r), () => window.removeEventListener("message", r)
            );
          }, [e]),
          [
            H((r) => {
              if (window.innerWidth > 800 && window.innerHeight > 800) {
                let l = (window.innerWidth - 800) / 2 + window.screenLeft,
                  o = `scrollbars=yes,width=800,height=800,top=${(window.innerHeight - 800) / 2 + window.screenTop},left=${l}`;
                (t.current = window.open(r, "chromatic-dialog", o)), t.current?.focus();
              } else t.current = window.open(r, "_blank");
              let { origin: i } = new URL(r);
              n.current = i;
            }, []),
            H(() => t.current?.close(), []),
          ]
        );
      },
      t3 = w.ol(({ theme: e }) => ({
        display: "inline-flex",
        listStyle: "none",
        marginTop: 15,
        marginBottom: 5,
        padding: 0,
        gap: 5,
        "li:not(:empty)": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: `1px dashed ${e.input.border}`,
          borderRadius: 4,
          width: 28,
          height: 32,
        },
      })),
      n3 = lt(`
  query VisualTestsProjectCountQuery {
    viewer {
      projectCount
      accounts {
        newProjectUrl
      }
    }
  }
`),
      a3 = ({
        onBack: e,
        hasProjectId: t,
        setAccessToken: n,
        setCreatedProjectId: r,
        exchangeParameters: i,
      }) => {
        let l = Cl(),
          o = Gs(),
          { user_code: s, verificationUrl: c } = i,
          d = Ne(),
          u = Ne(),
          m = Ne(),
          p = H(
            async (v) => {
              if ((v.message === "login" && u.current?.(c), v.message === "grant"))
                try {
                  let k = await v4(i);
                  if (!k) throw new Error("Failed to fetch an access token");
                  d.current = k;
                  let E = xs(k),
                    { data: h } = await l.query(n3, {}, { fetchOptions: E });
                  if (!h?.viewer) throw new Error("Failed to fetch initial project list");
                  if (h.viewer.projectCount > 0 || t) n(d.current), m.current?.();
                  else {
                    if (!h.viewer.accounts[0]) throw new Error("User has no accounts!");
                    if (!h.viewer.accounts[0].newProjectUrl)
                      throw new Error("Unexpected missing project URL");
                    u.current?.(h.viewer.accounts[0].newProjectUrl);
                  }
                } catch (k) {
                  o("Login Error", k);
                }
              v.message === "createdProject" &&
                (d.current
                  ? (n(d.current), r(`Project:${v.projectId}`), m.current?.())
                  : o("Unexpected missing access token", new Error()));
            },
            [c, i, l, t, n, o, r]
          ),
          [f, g] = c0(p);
        return (
          (u.current = f),
          (m.current = g),
          a.createElement(
            ve,
            { footer: null, ignoreConfig: !0 },
            a.createElement(Pr, { onBack: e }),
            a.createElement(
              he,
              null,
              a.createElement(
                se,
                null,
                a.createElement(
                  "div",
                  null,
                  a.createElement(me, null, "Verify your account"),
                  a.createElement(
                    "div",
                    null,
                    a.createElement(
                      j,
                      { center: !0, muted: !0 },
                      "Check this verification code on Chromatic to grant access to your published Storybooks."
                    )
                  ),
                  a.createElement(
                    t3,
                    null,
                    s
                      ?.split("")
                      .map((v, k) =>
                        a.createElement("li", { key: `${k}-${v}` }, v.replace(/[^A-Z0-9]/, ""))
                      )
                  )
                ),
                a.createElement(
                  ce,
                  { variant: "solid", size: "medium", onClick: () => f(c) },
                  "Go to Chromatic"
                )
              )
            )
          )
        );
      },
      r3 = ({ onNext: e, onUninstall: t }) =>
        a.createElement(
          ve,
          { footer: null, ignoreConfig: !0 },
          a.createElement(Pr, null),
          a.createElement(
            he,
            null,
            a.createElement(
              se,
              null,
              a.createElement(
                "div",
                null,
                a.createElement(an, null),
                a.createElement(me, null, "Visual tests"),
                a.createElement(
                  j,
                  { center: !0, muted: !0 },
                  "Catch bugs in UI appearance automatically. Compare image snapshots to detect visual changes."
                )
              ),
              a.createElement(
                Et,
                null,
                a.createElement(ce, { variant: "solid", size: "medium", onClick: e }, "Enable"),
                a.createElement(ce, { link: !0, onClick: () => t() }, "Uninstall")
              )
            )
          )
        ),
      i3 = ({ setAccessToken: e, setCreatedProjectId: t, hasProjectId: n }) => {
        let [r, i] = Qe("authenticationScreen", n ? "signin" : "welcome"),
          [l, o] = Qe("exchangeParameters"),
          s = Gs(),
          { uninstallAddon: c } = Rl();
        We("Authentication", r.charAt(0).toUpperCase() + r.slice(1));
        let d = H(
          async (u) => {
            try {
              o(await g4(u)), i("verify");
            } catch (m) {
              s("Sign in Error", m);
            }
          },
          [s, o, i]
        );
        if (r === "welcome" && !n)
          return a.createElement(r3, { onNext: () => i("signin"), onUninstall: c });
        if (r === "signin" || (r === "welcome" && n))
          return a.createElement(ep, {
            ...(n ? {} : { onBack: () => i("welcome") }),
            onSignIn: d,
            onSignInWithSSO: () => i("subdomain"),
          });
        if (r === "subdomain")
          return a.createElement(X4, { onBack: () => i("signin"), onSignIn: d });
        if (r === "verify") {
          if (!l) throw new Error("Expected to have a `exchangeParameters` if at `verify` step");
          return a.createElement(a3, {
            onBack: () => i("signin"),
            hasProjectId: n,
            setAccessToken: e,
            setCreatedProjectId: t,
            exchangeParameters: l,
          });
        }
        return null;
      },
      d0 = w.div(
        ({ theme: e }) => ({
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          borderRadius: e.appBorderRadius,
          background: e.base === "light" ? e.color.lightest : e.color.darkest,
          border: `1px solid ${e.appBorderColor}`,
          padding: 15,
          flex: 1,
          gap: 14,
          maxWidth: "500px",
          width: "100%",
        }),
        ({ theme: e, warning: t }) =>
          t && { background: e.base === "dark" ? "#342e1a" : e.background.warning }
      ),
      l3 = w.b(() => ({ display: "block", marginBottom: 2 })),
      o3 = () => {
        We("Errors", "GitNotFound");
        let { uninstallAddon: e } = Rl();
        return a.createElement(
          ve,
          { footer: null },
          a.createElement(
            he,
            null,
            a.createElement(
              se,
              null,
              a.createElement(
                "div",
                null,
                a.createElement(an, null),
                a.createElement(me, null, "Visual tests"),
                a.createElement(
                  j,
                  { center: !0, muted: !0 },
                  "Catch bugs in UI appearance automatically. Compare image snapshots to detect visual changes."
                )
              ),
              a.createElement(
                d0,
                null,
                a.createElement(ss, { style: { flexShrink: 0 } }),
                a.createElement(
                  j,
                  null,
                  a.createElement(l3, null, "Git not detected"),
                  "This addon requires Git to associate test results with commits and branches. Run",
                  " ",
                  a.createElement(Oe, null, "git init"),
                  " and make your first commit",
                  a.createElement(Oe, null, "git commit -m"),
                  " to get started!"
                )
              ),
              a.createElement(
                Be,
                {
                  target: "_blank",
                  href: "https://www.chromatic.com/docs/visual-tests-addon#git-addon",
                  withArrow: !0,
                  secondary: !0,
                },
                "Visual tests requirements"
              ),
              a.createElement(Be, { withArrow: !0, onClick: () => e() }, "Uninstall")
            )
          )
        );
      },
      s3 = w(gl)(({ theme: e }) => ({
        width: 40,
        height: 40,
        padding: 10,
        background: e.color.positive,
        borderRadius: "100%",
        color: "white",
      })),
      c3 = w(Be)(() => ({ marginTop: 5 })),
      d3 = lt(`
  query ProjectQuery($projectId: ID!) {
    project(id: $projectId) {
      id
      name
      webUrl
      lastBuild {
        branch
        number
      }
    }
  }
`),
      u3 = ({ projectId: e, configFile: t, goToNext: n }) => {
        We("LinkProject", "LinkedProject");
        let [{ data: r, fetching: i, error: l }] = Sl({ query: d3, variables: { projectId: e } });
        return a.createElement(
          ve,
          {
            footer: a.createElement(
              Br,
              null,
              a.createElement(
                Xe,
                null,
                r?.project?.lastBuild &&
                  a.createElement(
                    j,
                    { style: { marginLeft: 5 } },
                    "Last build: ",
                    r.project.lastBuild.number,
                    " on branch",
                    " ",
                    r.project.lastBuild.branch
                  )
              ),
              a.createElement(Xe, { push: !0 }, a.createElement(Zr, null))
            ),
          },
          a.createElement(
            he,
            null,
            a.createElement(
              se,
              null,
              i && a.createElement("p", null, "Loading..."),
              l && a.createElement("p", null, l.message),
              r?.project &&
                a.createElement(
                  a.Fragment,
                  null,
                  a.createElement(s3, null),
                  a.createElement(
                    "div",
                    null,
                    a.createElement(me, null, "Project linked!"),
                    a.createElement(
                      j,
                      { center: !0, muted: !0, style: { maxWidth: 500 } },
                      "The ",
                      a.createElement(Oe, null, "projectId"),
                      " for ",
                      a.createElement("strong", null, r.project.name),
                      " was added in",
                      " ",
                      a.createElement(Oe, null, t),
                      " to sync tests with Chromatic. Please commit this change to continue using this addon."
                    )
                  ),
                  a.createElement(
                    Et,
                    null,
                    a.createElement(
                      ce,
                      { variant: "solid", size: "medium", onClick: () => n() },
                      "Catch a UI change"
                    ),
                    a.createElement(
                      c3,
                      {
                        href: "https://www.chromatic.com/docs/cli",
                        target: "_blank",
                        withArrow: !0,
                        secondary: !0,
                      },
                      "What's a project ID?"
                    )
                  )
                )
            )
          )
        );
      };
    function m3(e) {
      for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      var r = Array.from(typeof e == "string" ? [e] : e);
      r[r.length - 1] = r[r.length - 1].replace(/\r?\n([\t ]*)$/, "");
      var i = r.reduce(function (s, c) {
        var d = c.match(/\n([\t ]+|(?!\s).)/g);
        return d
          ? s.concat(
              d.map(function (u) {
                var m, p;
                return (p =
                  (m = u.match(/[\t ]/g)) === null || m === void 0 ? void 0 : m.length) !== null &&
                  p !== void 0
                  ? p
                  : 0;
              })
            )
          : s;
      }, []);
      if (i.length) {
        var l = new RegExp(
          `
[	 ]{` +
            Math.min.apply(Math, i) +
            "}",
          "g"
        );
        r = r.map(function (s) {
          return s.replace(
            l,
            `
`
          );
        });
      }
      r[0] = r[0].replace(/^\r?\n/, "");
      var o = r[0];
      return (
        t.forEach(function (s, c) {
          var d = o.match(/(?:^|\n)( *)$/),
            u = d ? d[1] : "",
            m = s;
          typeof s == "string" &&
            s.includes(`
`) &&
            (m = String(s)
              .split(
                `
`
              )
              .map(function (p, f) {
                return f === 0 ? p : "" + u + p;
              }).join(`
`)),
            (o += m + r[c + 1]);
        }),
        o
      );
    }
    var p3 = w.div(({ theme: e }) => ({
        "&& > *": { margin: 0 },
        "&& pre": {
          color: e.base === "light" ? e.color.darker : e.color.lighter,
          background: e.base === "light" ? e.color.lightest : e.color.darkest,
          fontSize: "12px",
          lineHeight: "16px",
          textAlign: "left",
          padding: "15px !important",
        },
      })),
      h3 = "https://www.chromatic.com/docs/visual-tests-addon/#configure";
    function f3({ projectId: e, configFile: t }) {
      return (
        We("LinkProject", "LinkingProjectFailed"),
        a.createElement(
          ve,
          null,
          a.createElement(
            he,
            null,
            a.createElement(
              se,
              null,
              a.createElement(
                "div",
                null,
                a.createElement(me, null, "Add the project ID to your Chromatic config"),
                a.createElement(
                  j,
                  { center: !0, muted: !0 },
                  "The ",
                  a.createElement(Oe, null, "projectId"),
                  " will be used to sync tests with Chromatic. Please commit this change to continue using the addon. The file should be saved at",
                  " ",
                  a.createElement(Oe, null, t),
                  "."
                )
              ),
              a.createElement(
                p3,
                null,
                a.createElement(
                  Oe,
                  null,
                  m3`
                {
                  "projectId": "${e}",
                }
              `
                )
              ),
              a.createElement(
                Be,
                { secondary: !0, withArrow: !0, target: "_blank", href: h3 },
                "What's this for?"
              )
            )
          )
        )
      );
    }
    var g3 = lt(`
  query SelectProjectsQuery {
    viewer {
      accounts {
        id
        name
        avatarUrl
        newProjectUrl
        projects {
          id
          name
          webUrl
          lastBuild {
            branch
            number
          }
        }
      }
    }
  }
`),
      v3 = ({ createdProjectId: e, setCreatedProjectId: t, onUpdateProject: n }) => {
        let r = a.useCallback(
          async (i) => {
            await n(i);
          },
          [n]
        );
        return a.createElement(b3, {
          createdProjectId: e,
          setCreatedProjectId: t,
          onSelectProjectId: r,
        });
      },
      Da = w.div(({ theme: e }) => ({
        fontSize: `${e.typography.size.s1 - 1}px`,
        fontWeight: e.typography.weight.bold,
        color: e.base === "light" ? e.color.dark : e.color.light,
        backgroundColor: "inherit",
        padding: "7px 15px",
        borderBottom: `1px solid ${e.appBorderColor}`,
        lineHeight: "18px",
        letterSpacing: "0.38em",
        textTransform: "uppercase",
      })),
      t1 = w.div(({ theme: e }) => ({})),
      n1 = w.div(({ theme: e }) => ({
        background: e.base === "light" ? e.color.lighter : e.color.darker,
      })),
      a1 = w.div(({ theme: e }) => ({
        background: e.base === "light" ? e.color.lightest : e.color.darkest,
        borderRadius: 5,
        border: `1px solid ${e.appBorderColor}`,
        height: 260,
        maxWidth: 420,
        minWidth: 260,
        width: "100%",
        overflow: "hidden",
        textAlign: "left",
        position: "relative",
        display: "flex",
        "> *": { flex: 1, display: "flex", flexDirection: "column", width: "50%" },
      })),
      Ha = w.div({ height: "100%", overflowY: "auto" }),
      y3 = w(se)({ width: "100%" }),
      E3 = w(Dm)({ marginRight: 10 });
    function b3({ createdProjectId: e, setCreatedProjectId: t, onSelectProjectId: n }) {
      let [{ data: r, fetching: i, error: l }, o] = Sl({ query: g3 });
      K(() => {
        let h = setInterval(o, 5e3);
        return () => clearInterval(h);
      }, [o]);
      let [s, c] = Qe("selectedAccountId"),
        d = r?.viewer?.accounts.find((h) => h.id === s),
        u = H((h) => c(h.id), [c]);
      K(() => {
        !s && r?.viewer?.accounts && u(r.viewer.accounts[0]);
      }, [r, s, u]);
      let [m, p] = Qe("isSelectingProject", !1),
        f = H(
          (h) => {
            p(!0), n(h.id);
            let y = setTimeout(() => {
              p(!1);
            }, 1e3);
            return () => clearTimeout(y);
          },
          [n, p]
        ),
        g = H(
          async (h) => {
            h.message === "createdProject" && (o(), t(h.projectId));
          },
          [o, t]
        ),
        [v, k] = c0(g),
        E = e && d?.projects?.find((h) => h?.id.endsWith(e));
      return (
        K(() => {
          E && (k(), f(E));
        }, [E, f, k]),
        We("LinkProject", "LinkProject"),
        a.createElement(
          ve,
          null,
          a.createElement(
            he,
            null,
            a.createElement(
              y3,
              null,
              a.createElement(
                "div",
                null,
                a.createElement(me, null, "Select a project"),
                a.createElement(j, { muted: !0 }, "Your tests will sync with this project.")
              ),
              l && a.createElement("p", null, l.message),
              !r &&
                i &&
                a.createElement(
                  a1,
                  null,
                  a.createElement(
                    t1,
                    null,
                    a.createElement(Da, null, "Accounts"),
                    a.createElement(
                      Ha,
                      null,
                      a.createElement(tt, { appearance: "secondary", isLoading: !0 }),
                      a.createElement(tt, { appearance: "secondary", isLoading: !0 }),
                      a.createElement(tt, { appearance: "secondary", isLoading: !0 }),
                      a.createElement(tt, { appearance: "secondary", isLoading: !0 }),
                      a.createElement(tt, { appearance: "secondary", isLoading: !0 })
                    )
                  ),
                  a.createElement(
                    n1,
                    null,
                    a.createElement(Da, null, "Projects"),
                    a.createElement(
                      Ha,
                      { "data-testid": "right-list" },
                      a.createElement(tt, { appearance: "secondary", isLoading: !0 }),
                      a.createElement(tt, { appearance: "secondary", isLoading: !0 }),
                      a.createElement(tt, { appearance: "secondary", isLoading: !0 })
                    )
                  )
                ),
              r?.viewer?.accounts &&
                a.createElement(
                  a1,
                  null,
                  a.createElement(
                    t1,
                    null,
                    a.createElement(Da, null, "Accounts"),
                    a.createElement(
                      Ha,
                      { "data-testid": "left-list" },
                      r.viewer.accounts?.map((h) =>
                        a.createElement(tt, {
                          key: h.id,
                          title: h.name,
                          appearance: "secondary",
                          left: a.createElement(E3, { src: h.avatarUrl ?? void 0, size: "tiny" }),
                          onClick: () => u(h),
                          active: s === h.id,
                        })
                      )
                    )
                  ),
                  a.createElement(
                    n1,
                    null,
                    a.createElement(Da, null, "Projects"),
                    a.createElement(
                      Ha,
                      { "data-testid": "right-list" },
                      d &&
                        a.createElement(tt, {
                          isLink: !1,
                          onClick: () => {
                            if (!d?.newProjectUrl)
                              throw new Error("Unexpected missing `newProjectUrl` on account");
                            v(d.newProjectUrl);
                          },
                          title: a.createElement(
                            Be,
                            { isButton: !0, withArrow: !0 },
                            "Create new project"
                          ),
                        }),
                      d?.projects?.map(
                        (h) =>
                          h &&
                          a.createElement(tt, {
                            appearance: "secondary",
                            key: h.id,
                            title: h.name,
                            right: a.createElement(Eu, { "aria-label": h.name }),
                            onClick: () => f(h),
                            disabled: m,
                          })
                      )
                    )
                  )
                )
            )
          )
        )
      );
    }
    var k3 = () =>
        a.createElement(
          ve,
          { footer: null },
          a.createElement(
            he,
            null,
            a.createElement(
              se,
              null,
              a.createElement(
                "div",
                null,
                a.createElement(an, null),
                a.createElement(me, null, "Visual tests"),
                a.createElement(
                  j,
                  { center: !0, muted: !0 },
                  "Visual tests only runs locally. To test this Storybook, clone it to your machine and run ",
                  a.createElement(Oe, null, "npx storybook dev"),
                  "."
                )
              )
            )
          )
        ),
      w3 = ({ offline: e = !1 }) =>
        a.createElement(
          ve,
          { footer: null },
          a.createElement(
            he,
            null,
            a.createElement(
              se,
              null,
              a.createElement(
                "div",
                null,
                a.createElement(me, null, "Can't connect to Chromatic"),
                a.createElement(
                  j,
                  { center: !0, muted: !0 },
                  e
                    ? "You're offline. Double check your internet connection."
                    : "We're having trouble connecting to the Chromatic API."
                )
              ),
              !e &&
                a.createElement(
                  Be,
                  {
                    href: "https://status.chromatic.com",
                    target: "_blank",
                    rel: "noreferrer",
                    withArrow: !0,
                  },
                  "Chromatic API status"
                )
            )
          )
        ),
      C3 = () => (
        We("Uninstalled", "uninstalled"),
        a.createElement(
          ve,
          { footer: !1 },
          a.createElement(
            he,
            null,
            a.createElement(
              se,
              null,
              a.createElement(
                "div",
                null,
                a.createElement(an, null),
                a.createElement(me, null, "Uninstall complete"),
                a.createElement(
                  j,
                  { center: !0, muted: !0 },
                  "Visual tests will vanish the next time you restart your Storybook."
                )
              )
            )
          )
        )
      ),
      u0 = { isRunning: !1, startBuild: () => {}, stopBuild: () => {} },
      m0 = je(u0),
      ka = () => kt(m0, "RunBuild"),
      S3 = ({ children: e, watchState: t = u0 }) => a.createElement(m0.Provider, { value: t }, e),
      p0 = { PENDING: "warn", FAILED: "error", DENIED: "error", BROKEN: "error" },
      ki = [null, "unknown", "pending", "success", "warn", "error"];
    function x3(e, t) {
      return ki[Math.max(ki.indexOf(e), ki.indexOf(t))];
    }
    function N3(e, t) {
      let n = {};
      t.forEach((i) => {
        !i.story ||
          !i.status ||
          (n[i.story.storyId] = x3(p0[i.status] || null, n[i.story.storyId]));
      });
      let r = () => {
        e.setSelectedPanel(nn), e.togglePanel(!0);
      };
      return Object.fromEntries(
        Object.entries(n).map(([i, l]) => [
          i,
          l && {
            status: l,
            title: "Visual tests",
            description: "Chromatic Visual Tests",
            onClick: r,
          },
        ])
      );
    }
    function _3(e, { shouldSwitchToLastBuildOnBranch: t, lastBuildOnBranchId: n, storyId: r }) {
      if (!t) return e ? { ...e, storyId: r } : void 0;
      if (!n) throw new Error("Impossible state");
      return { buildId: n, storyId: r };
    }
    var r1 = {
        EXCEEDED_THRESHOLD: {
          heading: "Snapshot limit reached",
          message:
            "Your account has reached its monthly snapshot limit. Visual testing is disabled. Upgrade your plan to increase your quota.",
          action: "Upgrade plan",
        },
        PAYMENT_REQUIRED: {
          heading: "Payment required",
          message:
            "Your subscription payment is past due. Review or replace your payment method to continue using Chromatic.",
          action: "Review billing details",
        },
        OTHER: {
          heading: "Account suspended",
          message: "Your account has been suspended. Contact customer support for details.",
          action: "Billing details",
        },
      },
      h0 = ({ children: e, billingUrl: t, suspensionReason: n = "OTHER" }) => {
        We("Errors", "AccountSuspended");
        let { heading: r, message: i, action: l } = r1[n] || r1.OTHER;
        return a.createElement(
          ve,
          { footer: null },
          a.createElement(
            he,
            null,
            a.createElement(
              se,
              null,
              a.createElement(
                "div",
                null,
                a.createElement(me, null, r),
                a.createElement(j, { center: !0, muted: !0 }, i)
              ),
              t &&
                a.createElement(
                  ce,
                  { asChild: !0, size: "medium", variant: "solid" },
                  a.createElement("a", { href: t, target: "_new" }, l)
                ),
              e
            )
          )
        );
      },
      M3 = ({ children: e, manageUrl: t }) => (
        We("Errors", "VisualTestsDisabled"),
        a.createElement(
          ve,
          { footer: null },
          a.createElement(
            he,
            null,
            a.createElement(
              se,
              null,
              a.createElement(
                "div",
                null,
                a.createElement(me, null, "Visual tests disabled for your project"),
                a.createElement(
                  j,
                  { center: !0, muted: !0 },
                  "Update your project settings to enable visual testing."
                )
              ),
              a.createElement(
                ce,
                { asChild: !0, size: "medium", variant: "solid" },
                a.createElement("a", { href: t, target: "_new" }, "Manage project settings")
              ),
              e
            )
          )
        )
      );
    function f0(e) {
      return (t) => typeof t === e;
    }
    var T3 = f0("function"),
      A3 = (e) => e === null,
      i1 = (e) => Object.prototype.toString.call(e).slice(8, -1) === "RegExp",
      l1 = (e) => !F3(e) && !A3(e) && (T3(e) || typeof e == "object"),
      F3 = f0("undefined");
    function O3(e, t) {
      let { length: n } = e;
      if (n !== t.length) return !1;
      for (let r = n; r-- !== 0; ) if (!Ze(e[r], t[r])) return !1;
      return !0;
    }
    function L3(e, t) {
      if (e.byteLength !== t.byteLength) return !1;
      let n = new DataView(e.buffer),
        r = new DataView(t.buffer),
        i = e.byteLength;
      for (; i--; ) if (n.getUint8(i) !== r.getUint8(i)) return !1;
      return !0;
    }
    function R3(e, t) {
      if (e.size !== t.size) return !1;
      for (let n of e.entries()) if (!t.has(n[0])) return !1;
      for (let n of e.entries()) if (!Ze(n[1], t.get(n[0]))) return !1;
      return !0;
    }
    function I3(e, t) {
      if (e.size !== t.size) return !1;
      for (let n of e.entries()) if (!t.has(n[0])) return !1;
      return !0;
    }
    function Ze(e, t) {
      if (e === t) return !0;
      if (e && l1(e) && t && l1(t)) {
        if (e.constructor !== t.constructor) return !1;
        if (Array.isArray(e) && Array.isArray(t)) return O3(e, t);
        if (e instanceof Map && t instanceof Map) return R3(e, t);
        if (e instanceof Set && t instanceof Set) return I3(e, t);
        if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) return L3(e, t);
        if (i1(e) && i1(t)) return e.source === t.source && e.flags === t.flags;
        if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf();
        if (e.toString !== Object.prototype.toString) return e.toString() === t.toString();
        let n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (let i = n.length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(t, n[i])) return !1;
        for (let i = n.length; i-- !== 0; ) {
          let l = n[i];
          if (!(l === "_owner" && e.$$typeof) && !Ze(e[l], t[l])) return !1;
        }
        return !0;
      }
      return Number.isNaN(e) && Number.isNaN(t) ? !0 : e === t;
    }
    var Z3 = [
        "Array",
        "ArrayBuffer",
        "AsyncFunction",
        "AsyncGenerator",
        "AsyncGeneratorFunction",
        "Date",
        "Error",
        "Function",
        "Generator",
        "GeneratorFunction",
        "HTMLElement",
        "Map",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "WeakMap",
        "WeakSet",
      ],
      B3 = ["bigint", "boolean", "null", "number", "string", "symbol", "undefined"];
    function Dr(e) {
      let t = Object.prototype.toString.call(e).slice(8, -1);
      if (/HTML\w+Element/.test(t)) return "HTMLElement";
      if (P3(t)) return t;
    }
    function ot(e) {
      return (t) => Dr(t) === e;
    }
    function P3(e) {
      return Z3.includes(e);
    }
    function Tn(e) {
      return (t) => typeof t === e;
    }
    function V3(e) {
      return B3.includes(e);
    }
    var D3 = ["innerHTML", "ownerDocument", "style", "attributes", "nodeValue"];
    function M(e) {
      if (e === null) return "null";
      switch (typeof e) {
        case "bigint":
          return "bigint";
        case "boolean":
          return "boolean";
        case "number":
          return "number";
        case "string":
          return "string";
        case "symbol":
          return "symbol";
        case "undefined":
          return "undefined";
      }
      return M.array(e) ? "Array" : M.plainFunction(e) ? "Function" : Dr(e) || "Object";
    }
    M.array = Array.isArray;
    M.arrayOf = (e, t) => (!M.array(e) && !M.function(t) ? !1 : e.every((n) => t(n)));
    M.asyncGeneratorFunction = (e) => Dr(e) === "AsyncGeneratorFunction";
    M.asyncFunction = ot("AsyncFunction");
    M.bigint = Tn("bigint");
    M.boolean = (e) => e === !0 || e === !1;
    M.date = ot("Date");
    M.defined = (e) => !M.undefined(e);
    M.domElement = (e) =>
      M.object(e) &&
      !M.plainObject(e) &&
      e.nodeType === 1 &&
      M.string(e.nodeName) &&
      D3.every((t) => t in e);
    M.empty = (e) =>
      (M.string(e) && e.length === 0) ||
      (M.array(e) && e.length === 0) ||
      (M.object(e) && !M.map(e) && !M.set(e) && Object.keys(e).length === 0) ||
      (M.set(e) && e.size === 0) ||
      (M.map(e) && e.size === 0);
    M.error = ot("Error");
    M.function = Tn("function");
    M.generator = (e) => M.iterable(e) && M.function(e.next) && M.function(e.throw);
    M.generatorFunction = ot("GeneratorFunction");
    M.instanceOf = (e, t) => (!e || !t ? !1 : Object.getPrototypeOf(e) === t.prototype);
    M.iterable = (e) => !M.nullOrUndefined(e) && M.function(e[Symbol.iterator]);
    M.map = ot("Map");
    M.nan = (e) => Number.isNaN(e);
    M.null = (e) => e === null;
    M.nullOrUndefined = (e) => M.null(e) || M.undefined(e);
    M.number = (e) => Tn("number")(e) && !M.nan(e);
    M.numericString = (e) => M.string(e) && e.length > 0 && !Number.isNaN(Number(e));
    M.object = (e) => !M.nullOrUndefined(e) && (M.function(e) || typeof e == "object");
    M.oneOf = (e, t) => (M.array(e) ? e.indexOf(t) > -1 : !1);
    M.plainFunction = ot("Function");
    M.plainObject = (e) => {
      if (Dr(e) !== "Object") return !1;
      let t = Object.getPrototypeOf(e);
      return t === null || t === Object.getPrototypeOf({});
    };
    M.primitive = (e) => M.null(e) || V3(typeof e);
    M.promise = ot("Promise");
    M.propertyOf = (e, t, n) => {
      if (!M.object(e) || !t) return !1;
      let r = e[t];
      return M.function(n) ? n(r) : M.defined(r);
    };
    M.regexp = ot("RegExp");
    M.set = ot("Set");
    M.string = Tn("string");
    M.symbol = Tn("symbol");
    M.undefined = Tn("undefined");
    M.weakMap = ot("WeakMap");
    M.weakSet = ot("WeakSet");
    var F = M;
    function H3(...e) {
      return e.every((t) => F.string(t) || F.array(t) || F.plainObject(t));
    }
    function j3(e, t, n) {
      return g0(e, t)
        ? [e, t].every(F.array)
          ? !e.some(u1(n)) && t.some(u1(n))
          : [e, t].every(F.plainObject)
            ? !Object.entries(e).some(d1(n)) && Object.entries(t).some(d1(n))
            : t === n
        : !1;
    }
    function o1(e, t, n) {
      let { actual: r, key: i, previous: l, type: o } = n,
        s = ft(e, i),
        c = ft(t, i),
        d = [s, c].every(F.number) && (o === "increased" ? s < c : s > c);
      return F.undefined(r) || (d = d && c === r), F.undefined(l) || (d = d && s === l), d;
    }
    function s1(e, t, n) {
      let { key: r, type: i, value: l } = n,
        o = ft(e, r),
        s = ft(t, r),
        c = i === "added" ? o : s,
        d = i === "added" ? s : o;
      if (!F.nullOrUndefined(l)) {
        if (F.defined(c)) {
          if (F.array(c) || F.plainObject(c)) return j3(c, d, l);
        } else return Ze(d, l);
        return !1;
      }
      return [o, s].every(F.array)
        ? !d.every(Pl(c))
        : [o, s].every(F.plainObject)
          ? z3(Object.keys(c), Object.keys(d))
          : ![o, s].every((u) => F.primitive(u) && F.defined(u)) &&
            (i === "added" ? !F.defined(o) && F.defined(s) : F.defined(o) && !F.defined(s));
    }
    function c1(e, t, { key: n } = {}) {
      let r = ft(e, n),
        i = ft(t, n);
      if (!g0(r, i)) throw new TypeError("Inputs have different types");
      if (!H3(r, i)) throw new TypeError("Inputs don't have length");
      return [r, i].every(F.plainObject) && ((r = Object.keys(r)), (i = Object.keys(i))), [r, i];
    }
    function d1(e) {
      return ([t, n]) =>
        F.array(e)
          ? Ze(e, n) || e.some((r) => Ze(r, n) || (F.array(n) && Pl(n)(r)))
          : F.plainObject(e) && e[t]
            ? !!e[t] && Ze(e[t], n)
            : Ze(e, n);
    }
    function z3(e, t) {
      return t.some((n) => !e.includes(n));
    }
    function u1(e) {
      return (t) => (F.array(e) ? e.some((n) => Ze(n, t) || (F.array(t) && Pl(t)(n))) : Ze(e, t));
    }
    function Dn(e, t) {
      return F.array(e) ? e.some((n) => Ze(n, t)) : Ze(e, t);
    }
    function Pl(e) {
      return (t) => e.some((n) => Ze(n, t));
    }
    function g0(...e) {
      return e.every(F.array) || e.every(F.number) || e.every(F.plainObject) || e.every(F.string);
    }
    function ft(e, t) {
      return F.plainObject(e) || F.array(e)
        ? F.string(t)
          ? t.split(".").reduce((n, r) => n && n[r], e)
          : F.number(t)
            ? e[t]
            : e
        : e;
    }
    function wr(e, t) {
      if ([e, t].some(F.nullOrUndefined)) throw new Error("Missing required parameters");
      if (![e, t].every((n) => F.plainObject(n) || F.array(n)))
        throw new Error("Expected plain objects or array");
      return {
        added: (n, r) => {
          try {
            return s1(e, t, { key: n, type: "added", value: r });
          } catch {
            return !1;
          }
        },
        changed: (n, r, i) => {
          try {
            let l = ft(e, n),
              o = ft(t, n),
              s = F.defined(r),
              c = F.defined(i);
            if (s || c) {
              let d = c ? Dn(i, l) : !Dn(r, l),
                u = Dn(r, o);
              return d && u;
            }
            return [l, o].every(F.array) || [l, o].every(F.plainObject) ? !Ze(l, o) : l !== o;
          } catch {
            return !1;
          }
        },
        changedFrom: (n, r, i) => {
          if (!F.defined(n)) return !1;
          try {
            let l = ft(e, n),
              o = ft(t, n),
              s = F.defined(i);
            return Dn(r, l) && (s ? Dn(i, o) : !s);
          } catch {
            return !1;
          }
        },
        decreased: (n, r, i) => {
          if (!F.defined(n)) return !1;
          try {
            return o1(e, t, { key: n, actual: r, previous: i, type: "decreased" });
          } catch {
            return !1;
          }
        },
        emptied: (n) => {
          try {
            let [r, i] = c1(e, t, { key: n });
            return !!r.length && !i.length;
          } catch {
            return !1;
          }
        },
        filled: (n) => {
          try {
            let [r, i] = c1(e, t, { key: n });
            return !r.length && !!i.length;
          } catch {
            return !1;
          }
        },
        increased: (n, r, i) => {
          if (!F.defined(n)) return !1;
          try {
            return o1(e, t, { key: n, actual: r, previous: i, type: "increased" });
          } catch {
            return !1;
          }
        },
        removed: (n, r) => {
          try {
            return s1(e, t, { key: n, type: "removed", value: r });
          } catch {
            return !1;
          }
        },
      };
    }
    var U3 = et(T5(), 1),
      v0 = et(A5(), 1);
    function $3(e, ...t) {
      if (!F.plainObject(e)) throw new TypeError("Expected an object");
      let n = {};
      for (let r in e) ({}).hasOwnProperty.call(e, r) && (t.includes(r) || (n[r] = e[r]));
      return n;
    }
    function W3(e, ...t) {
      if (!F.plainObject(e)) throw new TypeError("Expected an object");
      if (!t.length) return e;
      let n = {};
      for (let r in e) ({}).hasOwnProperty.call(e, r) && t.includes(r) && (n[r] = e[r]);
      return n;
    }
    var ja = et(ml(), 1),
      wi = et(ml(), 1),
      N = et(L5()),
      wa = typeof window < "u" && typeof document < "u" && typeof navigator < "u",
      G3 = (function () {
        for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
          if (wa && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
        return 0;
      })();
    function q3(e) {
      var t = !1;
      return function () {
        t ||
          ((t = !0),
          window.Promise.resolve().then(function () {
            (t = !1), e();
          }));
      };
    }
    function Y3(e) {
      var t = !1;
      return function () {
        t ||
          ((t = !0),
          setTimeout(function () {
            (t = !1), e();
          }, G3));
      };
    }
    var Q3 = wa && window.Promise,
      K3 = Q3 ? q3 : Y3;
    function y0(e) {
      var t = {};
      return e && t.toString.call(e) === "[object Function]";
    }
    function rn(e, t) {
      if (e.nodeType !== 1) return [];
      var n = e.ownerDocument.defaultView,
        r = n.getComputedStyle(e, null);
      return t ? r[t] : r;
    }
    function Vl(e) {
      return e.nodeName === "HTML" ? e : e.parentNode || e.host;
    }
    function Ca(e) {
      if (!e) return document.body;
      switch (e.nodeName) {
        case "HTML":
        case "BODY":
          return e.ownerDocument.body;
        case "#document":
          return e.body;
      }
      var t = rn(e),
        n = t.overflow,
        r = t.overflowX,
        i = t.overflowY;
      return /(auto|scroll|overlay)/.test(n + i + r) ? e : Ca(Vl(e));
    }
    function E0(e) {
      return e && e.referenceNode ? e.referenceNode : e;
    }
    var m1 = wa && !!(window.MSInputMethodContext && document.documentMode),
      p1 = wa && /MSIE 10/.test(navigator.userAgent);
    function An(e) {
      return e === 11 ? m1 : e === 10 ? p1 : m1 || p1;
    }
    function xn(e) {
      if (!e) return document.documentElement;
      for (
        var t = An(10) ? document.body : null, n = e.offsetParent || null;
        n === t && e.nextElementSibling;

      )
        n = (e = e.nextElementSibling).offsetParent;
      var r = n && n.nodeName;
      return !r || r === "BODY" || r === "HTML"
        ? e
          ? e.ownerDocument.documentElement
          : document.documentElement
        : ["TH", "TD", "TABLE"].indexOf(n.nodeName) !== -1 && rn(n, "position") === "static"
          ? xn(n)
          : n;
    }
    function J3(e) {
      var t = e.nodeName;
      return t === "BODY" ? !1 : t === "HTML" || xn(e.firstElementChild) === e;
    }
    function rl(e) {
      return e.parentNode !== null ? rl(e.parentNode) : e;
    }
    function Cr(e, t) {
      if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
      var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        r = n ? e : t,
        i = n ? t : e,
        l = document.createRange();
      l.setStart(r, 0), l.setEnd(i, 0);
      var o = l.commonAncestorContainer;
      if ((e !== o && t !== o) || r.contains(i)) return J3(o) ? o : xn(o);
      var s = rl(e);
      return s.host ? Cr(s.host, t) : Cr(e, rl(t).host);
    }
    function Nn(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "top",
        n = t === "top" ? "scrollTop" : "scrollLeft",
        r = e.nodeName;
      if (r === "BODY" || r === "HTML") {
        var i = e.ownerDocument.documentElement,
          l = e.ownerDocument.scrollingElement || i;
        return l[n];
      }
      return e[n];
    }
    function X3(e, t) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
        r = Nn(t, "top"),
        i = Nn(t, "left"),
        l = n ? -1 : 1;
      return (e.top += r * l), (e.bottom += r * l), (e.left += i * l), (e.right += i * l), e;
    }
    function h1(e, t) {
      var n = t === "x" ? "Left" : "Top",
        r = n === "Left" ? "Right" : "Bottom";
      return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + r + "Width"]);
    }
    function f1(e, t, n, r) {
      return Math.max(
        t["offset" + e],
        t["scroll" + e],
        n["client" + e],
        n["offset" + e],
        n["scroll" + e],
        An(10)
          ? parseInt(n["offset" + e]) +
              parseInt(r["margin" + (e === "Height" ? "Top" : "Left")]) +
              parseInt(r["margin" + (e === "Height" ? "Bottom" : "Right")])
          : 0
      );
    }
    function b0(e) {
      var t = e.body,
        n = e.documentElement,
        r = An(10) && getComputedStyle(n);
      return { height: f1("Height", t, n, r), width: f1("Width", t, n, r) };
    }
    var eh = function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      },
      th = (function () {
        function e(t, n) {
          for (var r = 0; r < n.length; r++) {
            var i = n[r];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      _n = function (e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      },
      Ke =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        };
    function Vt(e) {
      return Ke({}, e, { right: e.left + e.width, bottom: e.top + e.height });
    }
    function il(e) {
      var t = {};
      try {
        if (An(10)) {
          t = e.getBoundingClientRect();
          var n = Nn(e, "top"),
            r = Nn(e, "left");
          (t.top += n), (t.left += r), (t.bottom += n), (t.right += r);
        } else t = e.getBoundingClientRect();
      } catch {}
      var i = { left: t.left, top: t.top, width: t.right - t.left, height: t.bottom - t.top },
        l = e.nodeName === "HTML" ? b0(e.ownerDocument) : {},
        o = l.width || e.clientWidth || i.width,
        s = l.height || e.clientHeight || i.height,
        c = e.offsetWidth - o,
        d = e.offsetHeight - s;
      if (c || d) {
        var u = rn(e);
        (c -= h1(u, "x")), (d -= h1(u, "y")), (i.width -= c), (i.height -= d);
      }
      return Vt(i);
    }
    function Dl(e, t) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
        r = An(10),
        i = t.nodeName === "HTML",
        l = il(e),
        o = il(t),
        s = Ca(e),
        c = rn(t),
        d = parseFloat(c.borderTopWidth),
        u = parseFloat(c.borderLeftWidth);
      n && i && ((o.top = Math.max(o.top, 0)), (o.left = Math.max(o.left, 0)));
      var m = Vt({
        top: l.top - o.top - d,
        left: l.left - o.left - u,
        width: l.width,
        height: l.height,
      });
      if (((m.marginTop = 0), (m.marginLeft = 0), !r && i)) {
        var p = parseFloat(c.marginTop),
          f = parseFloat(c.marginLeft);
        (m.top -= d - p),
          (m.bottom -= d - p),
          (m.left -= u - f),
          (m.right -= u - f),
          (m.marginTop = p),
          (m.marginLeft = f);
      }
      return (r && !n ? t.contains(s) : t === s && s.nodeName !== "BODY") && (m = X3(m, t)), m;
    }
    function nh(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        n = e.ownerDocument.documentElement,
        r = Dl(e, n),
        i = Math.max(n.clientWidth, window.innerWidth || 0),
        l = Math.max(n.clientHeight, window.innerHeight || 0),
        o = t ? 0 : Nn(n),
        s = t ? 0 : Nn(n, "left"),
        c = { top: o - r.top + r.marginTop, left: s - r.left + r.marginLeft, width: i, height: l };
      return Vt(c);
    }
    function k0(e) {
      var t = e.nodeName;
      if (t === "BODY" || t === "HTML") return !1;
      if (rn(e, "position") === "fixed") return !0;
      var n = Vl(e);
      return n ? k0(n) : !1;
    }
    function w0(e) {
      if (!e || !e.parentElement || An()) return document.documentElement;
      for (var t = e.parentElement; t && rn(t, "transform") === "none"; ) t = t.parentElement;
      return t || document.documentElement;
    }
    function Hl(e, t, n, r) {
      var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1,
        l = { top: 0, left: 0 },
        o = i ? w0(e) : Cr(e, E0(t));
      if (r === "viewport") l = nh(o, i);
      else {
        var s = void 0;
        r === "scrollParent"
          ? ((s = Ca(Vl(t))), s.nodeName === "BODY" && (s = e.ownerDocument.documentElement))
          : r === "window"
            ? (s = e.ownerDocument.documentElement)
            : (s = r);
        var c = Dl(s, o, i);
        if (s.nodeName === "HTML" && !k0(o)) {
          var d = b0(e.ownerDocument),
            u = d.height,
            m = d.width;
          (l.top += c.top - c.marginTop),
            (l.bottom = u + c.top),
            (l.left += c.left - c.marginLeft),
            (l.right = m + c.left);
        } else l = c;
      }
      n = n || 0;
      var p = typeof n == "number";
      return (
        (l.left += p ? n : n.left || 0),
        (l.top += p ? n : n.top || 0),
        (l.right -= p ? n : n.right || 0),
        (l.bottom -= p ? n : n.bottom || 0),
        l
      );
    }
    function ah(e) {
      var t = e.width,
        n = e.height;
      return t * n;
    }
    function C0(e, t, n, r, i) {
      var l = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
      if (e.indexOf("auto") === -1) return e;
      var o = Hl(n, r, l, i),
        s = {
          top: { width: o.width, height: t.top - o.top },
          right: { width: o.right - t.right, height: o.height },
          bottom: { width: o.width, height: o.bottom - t.bottom },
          left: { width: t.left - o.left, height: o.height },
        },
        c = Object.keys(s)
          .map(function (p) {
            return Ke({ key: p }, s[p], { area: ah(s[p]) });
          })
          .sort(function (p, f) {
            return f.area - p.area;
          }),
        d = c.filter(function (p) {
          var f = p.width,
            g = p.height;
          return f >= n.clientWidth && g >= n.clientHeight;
        }),
        u = d.length > 0 ? d[0].key : c[0].key,
        m = e.split("-")[1];
      return u + (m ? "-" + m : "");
    }
    function S0(e, t, n) {
      var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null,
        i = r ? w0(t) : Cr(t, E0(n));
      return Dl(n, i, r);
    }
    function x0(e) {
      var t = e.ownerDocument.defaultView,
        n = t.getComputedStyle(e),
        r = parseFloat(n.marginTop || 0) + parseFloat(n.marginBottom || 0),
        i = parseFloat(n.marginLeft || 0) + parseFloat(n.marginRight || 0),
        l = { width: e.offsetWidth + i, height: e.offsetHeight + r };
      return l;
    }
    function Sr(e) {
      var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
      return e.replace(/left|right|bottom|top/g, function (n) {
        return t[n];
      });
    }
    function N0(e, t, n) {
      n = n.split("-")[0];
      var r = x0(e),
        i = { width: r.width, height: r.height },
        l = ["right", "left"].indexOf(n) !== -1,
        o = l ? "top" : "left",
        s = l ? "left" : "top",
        c = l ? "height" : "width",
        d = l ? "width" : "height";
      return (
        (i[o] = t[o] + t[c] / 2 - r[c] / 2), n === s ? (i[s] = t[s] - r[d]) : (i[s] = t[Sr(s)]), i
      );
    }
    function Sa(e, t) {
      return Array.prototype.find ? e.find(t) : e.filter(t)[0];
    }
    function rh(e, t, n) {
      if (Array.prototype.findIndex)
        return e.findIndex(function (i) {
          return i[t] === n;
        });
      var r = Sa(e, function (i) {
        return i[t] === n;
      });
      return e.indexOf(r);
    }
    function _0(e, t, n) {
      var r = n === void 0 ? e : e.slice(0, rh(e, "name", n));
      return (
        r.forEach(function (i) {
          i.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
          var l = i.function || i.fn;
          i.enabled &&
            y0(l) &&
            ((t.offsets.popper = Vt(t.offsets.popper)),
            (t.offsets.reference = Vt(t.offsets.reference)),
            (t = l(t, i)));
        }),
        t
      );
    }
    function ih() {
      if (!this.state.isDestroyed) {
        var e = {
          instance: this,
          styles: {},
          arrowStyles: {},
          attributes: {},
          flipped: !1,
          offsets: {},
        };
        (e.offsets.reference = S0(
          this.state,
          this.popper,
          this.reference,
          this.options.positionFixed
        )),
          (e.placement = C0(
            this.options.placement,
            e.offsets.reference,
            this.popper,
            this.reference,
            this.options.modifiers.flip.boundariesElement,
            this.options.modifiers.flip.padding
          )),
          (e.originalPlacement = e.placement),
          (e.positionFixed = this.options.positionFixed),
          (e.offsets.popper = N0(this.popper, e.offsets.reference, e.placement)),
          (e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute"),
          (e = _0(this.modifiers, e)),
          this.state.isCreated
            ? this.options.onUpdate(e)
            : ((this.state.isCreated = !0), this.options.onCreate(e));
      }
    }
    function M0(e, t) {
      return e.some(function (n) {
        var r = n.name,
          i = n.enabled;
        return i && r === t;
      });
    }
    function jl(e) {
      for (
        var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), r = 0;
        r < t.length;
        r++
      ) {
        var i = t[r],
          l = i ? "" + i + n : e;
        if (typeof document.body.style[l] < "u") return l;
      }
      return null;
    }
    function lh() {
      return (
        (this.state.isDestroyed = !0),
        M0(this.modifiers, "applyStyle") &&
          (this.popper.removeAttribute("x-placement"),
          (this.popper.style.position = ""),
          (this.popper.style.top = ""),
          (this.popper.style.left = ""),
          (this.popper.style.right = ""),
          (this.popper.style.bottom = ""),
          (this.popper.style.willChange = ""),
          (this.popper.style[jl("transform")] = "")),
        this.disableEventListeners(),
        this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
        this
      );
    }
    function T0(e) {
      var t = e.ownerDocument;
      return t ? t.defaultView : window;
    }
    function A0(e, t, n, r) {
      var i = e.nodeName === "BODY",
        l = i ? e.ownerDocument.defaultView : e;
      l.addEventListener(t, n, { passive: !0 }), i || A0(Ca(l.parentNode), t, n, r), r.push(l);
    }
    function oh(e, t, n, r) {
      (n.updateBound = r), T0(e).addEventListener("resize", n.updateBound, { passive: !0 });
      var i = Ca(e);
      return (
        A0(i, "scroll", n.updateBound, n.scrollParents),
        (n.scrollElement = i),
        (n.eventsEnabled = !0),
        n
      );
    }
    function sh() {
      this.state.eventsEnabled ||
        (this.state = oh(this.reference, this.options, this.state, this.scheduleUpdate));
    }
    function ch(e, t) {
      return (
        T0(e).removeEventListener("resize", t.updateBound),
        t.scrollParents.forEach(function (n) {
          n.removeEventListener("scroll", t.updateBound);
        }),
        (t.updateBound = null),
        (t.scrollParents = []),
        (t.scrollElement = null),
        (t.eventsEnabled = !1),
        t
      );
    }
    function dh() {
      this.state.eventsEnabled &&
        (cancelAnimationFrame(this.scheduleUpdate), (this.state = ch(this.reference, this.state)));
    }
    function zl(e) {
      return e !== "" && !isNaN(parseFloat(e)) && isFinite(e);
    }
    function ll(e, t) {
      Object.keys(t).forEach(function (n) {
        var r = "";
        ["width", "height", "top", "right", "bottom", "left"].indexOf(n) !== -1 &&
          zl(t[n]) &&
          (r = "px"),
          (e.style[n] = t[n] + r);
      });
    }
    function uh(e, t) {
      Object.keys(t).forEach(function (n) {
        var r = t[n];
        r !== !1 ? e.setAttribute(n, t[n]) : e.removeAttribute(n);
      });
    }
    function mh(e) {
      return (
        ll(e.instance.popper, e.styles),
        uh(e.instance.popper, e.attributes),
        e.arrowElement && Object.keys(e.arrowStyles).length && ll(e.arrowElement, e.arrowStyles),
        e
      );
    }
    function ph(e, t, n, r, i) {
      var l = S0(i, t, e, n.positionFixed),
        o = C0(n.placement, l, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
      return (
        t.setAttribute("x-placement", o),
        ll(t, { position: n.positionFixed ? "fixed" : "absolute" }),
        n
      );
    }
    function hh(e, t) {
      var n = e.offsets,
        r = n.popper,
        i = n.reference,
        l = Math.round,
        o = Math.floor,
        s = function (k) {
          return k;
        },
        c = l(i.width),
        d = l(r.width),
        u = ["left", "right"].indexOf(e.placement) !== -1,
        m = e.placement.indexOf("-") !== -1,
        p = c % 2 === d % 2,
        f = c % 2 === 1 && d % 2 === 1,
        g = t ? (u || m || p ? l : o) : s,
        v = t ? l : s;
      return {
        left: g(f && !m && t ? r.left - 1 : r.left),
        top: v(r.top),
        bottom: v(r.bottom),
        right: g(r.right),
      };
    }
    var fh = wa && /Firefox/i.test(navigator.userAgent);
    function gh(e, t) {
      var n = t.x,
        r = t.y,
        i = e.offsets.popper,
        l = Sa(e.instance.modifiers, function (y) {
          return y.name === "applyStyle";
        }).gpuAcceleration;
      l !== void 0 &&
        console.warn(
          "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
        );
      var o = l !== void 0 ? l : t.gpuAcceleration,
        s = xn(e.instance.popper),
        c = il(s),
        d = { position: i.position },
        u = hh(e, window.devicePixelRatio < 2 || !fh),
        m = n === "bottom" ? "top" : "bottom",
        p = r === "right" ? "left" : "right",
        f = jl("transform"),
        g = void 0,
        v = void 0;
      if (
        (m === "bottom"
          ? s.nodeName === "HTML"
            ? (v = -s.clientHeight + u.bottom)
            : (v = -c.height + u.bottom)
          : (v = u.top),
        p === "right"
          ? s.nodeName === "HTML"
            ? (g = -s.clientWidth + u.right)
            : (g = -c.width + u.right)
          : (g = u.left),
        o && f)
      )
        (d[f] = "translate3d(" + g + "px, " + v + "px, 0)"),
          (d[m] = 0),
          (d[p] = 0),
          (d.willChange = "transform");
      else {
        var k = m === "bottom" ? -1 : 1,
          E = p === "right" ? -1 : 1;
        (d[m] = v * k), (d[p] = g * E), (d.willChange = m + ", " + p);
      }
      var h = { "x-placement": e.placement };
      return (
        (e.attributes = Ke({}, h, e.attributes)),
        (e.styles = Ke({}, d, e.styles)),
        (e.arrowStyles = Ke({}, e.offsets.arrow, e.arrowStyles)),
        e
      );
    }
    function F0(e, t, n) {
      var r = Sa(e, function (s) {
          var c = s.name;
          return c === t;
        }),
        i =
          !!r &&
          e.some(function (s) {
            return s.name === n && s.enabled && s.order < r.order;
          });
      if (!i) {
        var l = "`" + t + "`",
          o = "`" + n + "`";
        console.warn(
          o +
            " modifier is required by " +
            l +
            " modifier in order to work, be sure to include it before " +
            l +
            "!"
        );
      }
      return i;
    }
    function vh(e, t) {
      var n;
      if (!F0(e.instance.modifiers, "arrow", "keepTogether")) return e;
      var r = t.element;
      if (typeof r == "string") {
        if (((r = e.instance.popper.querySelector(r)), !r)) return e;
      } else if (!e.instance.popper.contains(r))
        return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
      var i = e.placement.split("-")[0],
        l = e.offsets,
        o = l.popper,
        s = l.reference,
        c = ["left", "right"].indexOf(i) !== -1,
        d = c ? "height" : "width",
        u = c ? "Top" : "Left",
        m = u.toLowerCase(),
        p = c ? "left" : "top",
        f = c ? "bottom" : "right",
        g = x0(r)[d];
      s[f] - g < o[m] && (e.offsets.popper[m] -= o[m] - (s[f] - g)),
        s[m] + g > o[f] && (e.offsets.popper[m] += s[m] + g - o[f]),
        (e.offsets.popper = Vt(e.offsets.popper));
      var v = s[m] + s[d] / 2 - g / 2,
        k = rn(e.instance.popper),
        E = parseFloat(k["margin" + u]),
        h = parseFloat(k["border" + u + "Width"]),
        y = v - e.offsets.popper[m] - E - h;
      return (
        (y = Math.max(Math.min(o[d] - g, y), 0)),
        (e.arrowElement = r),
        (e.offsets.arrow = ((n = {}), _n(n, m, Math.round(y)), _n(n, p, ""), n)),
        e
      );
    }
    function yh(e) {
      return e === "end" ? "start" : e === "start" ? "end" : e;
    }
    var O0 = [
        "auto-start",
        "auto",
        "auto-end",
        "top-start",
        "top",
        "top-end",
        "right-start",
        "right",
        "right-end",
        "bottom-end",
        "bottom",
        "bottom-start",
        "left-end",
        "left",
        "left-start",
      ],
      Ci = O0.slice(3);
    function g1(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        n = Ci.indexOf(e),
        r = Ci.slice(n + 1).concat(Ci.slice(0, n));
      return t ? r.reverse() : r;
    }
    var Si = { FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise" };
    function Eh(e, t) {
      if (M0(e.instance.modifiers, "inner") || (e.flipped && e.placement === e.originalPlacement))
        return e;
      var n = Hl(
          e.instance.popper,
          e.instance.reference,
          t.padding,
          t.boundariesElement,
          e.positionFixed
        ),
        r = e.placement.split("-")[0],
        i = Sr(r),
        l = e.placement.split("-")[1] || "",
        o = [];
      switch (t.behavior) {
        case Si.FLIP:
          o = [r, i];
          break;
        case Si.CLOCKWISE:
          o = g1(r);
          break;
        case Si.COUNTERCLOCKWISE:
          o = g1(r, !0);
          break;
        default:
          o = t.behavior;
      }
      return (
        o.forEach(function (s, c) {
          if (r !== s || o.length === c + 1) return e;
          (r = e.placement.split("-")[0]), (i = Sr(r));
          var d = e.offsets.popper,
            u = e.offsets.reference,
            m = Math.floor,
            p =
              (r === "left" && m(d.right) > m(u.left)) ||
              (r === "right" && m(d.left) < m(u.right)) ||
              (r === "top" && m(d.bottom) > m(u.top)) ||
              (r === "bottom" && m(d.top) < m(u.bottom)),
            f = m(d.left) < m(n.left),
            g = m(d.right) > m(n.right),
            v = m(d.top) < m(n.top),
            k = m(d.bottom) > m(n.bottom),
            E =
              (r === "left" && f) ||
              (r === "right" && g) ||
              (r === "top" && v) ||
              (r === "bottom" && k),
            h = ["top", "bottom"].indexOf(r) !== -1,
            y =
              !!t.flipVariations &&
              ((h && l === "start" && f) ||
                (h && l === "end" && g) ||
                (!h && l === "start" && v) ||
                (!h && l === "end" && k)),
            b =
              !!t.flipVariationsByContent &&
              ((h && l === "start" && g) ||
                (h && l === "end" && f) ||
                (!h && l === "start" && k) ||
                (!h && l === "end" && v)),
            C = y || b;
          (p || E || C) &&
            ((e.flipped = !0),
            (p || E) && (r = o[c + 1]),
            C && (l = yh(l)),
            (e.placement = r + (l ? "-" + l : "")),
            (e.offsets.popper = Ke(
              {},
              e.offsets.popper,
              N0(e.instance.popper, e.offsets.reference, e.placement)
            )),
            (e = _0(e.instance.modifiers, e, "flip")));
        }),
        e
      );
    }
    function bh(e) {
      var t = e.offsets,
        n = t.popper,
        r = t.reference,
        i = e.placement.split("-")[0],
        l = Math.floor,
        o = ["top", "bottom"].indexOf(i) !== -1,
        s = o ? "right" : "bottom",
        c = o ? "left" : "top",
        d = o ? "width" : "height";
      return (
        n[s] < l(r[c]) && (e.offsets.popper[c] = l(r[c]) - n[d]),
        n[c] > l(r[s]) && (e.offsets.popper[c] = l(r[s])),
        e
      );
    }
    function kh(e, t, n, r) {
      var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
        l = +i[1],
        o = i[2];
      if (!l) return e;
      if (o.indexOf("%") === 0) {
        var s = void 0;
        switch (o) {
          case "%p":
            s = n;
            break;
          case "%":
          case "%r":
          default:
            s = r;
        }
        var c = Vt(s);
        return (c[t] / 100) * l;
      } else if (o === "vh" || o === "vw") {
        var d = void 0;
        return (
          o === "vh"
            ? (d = Math.max(document.documentElement.clientHeight, window.innerHeight || 0))
            : (d = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)),
          (d / 100) * l
        );
      } else return l;
    }
    function wh(e, t, n, r) {
      var i = [0, 0],
        l = ["right", "left"].indexOf(r) !== -1,
        o = e.split(/(\+|\-)/).map(function (u) {
          return u.trim();
        }),
        s = o.indexOf(
          Sa(o, function (u) {
            return u.search(/,|\s/) !== -1;
          })
        );
      o[s] &&
        o[s].indexOf(",") === -1 &&
        console.warn(
          "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
        );
      var c = /\s*,\s*|\s+/,
        d =
          s !== -1
            ? [o.slice(0, s).concat([o[s].split(c)[0]]), [o[s].split(c)[1]].concat(o.slice(s + 1))]
            : [o];
      return (
        (d = d.map(function (u, m) {
          var p = (m === 1 ? !l : l) ? "height" : "width",
            f = !1;
          return u
            .reduce(function (g, v) {
              return g[g.length - 1] === "" && ["+", "-"].indexOf(v) !== -1
                ? ((g[g.length - 1] = v), (f = !0), g)
                : f
                  ? ((g[g.length - 1] += v), (f = !1), g)
                  : g.concat(v);
            }, [])
            .map(function (g) {
              return kh(g, p, t, n);
            });
        })),
        d.forEach(function (u, m) {
          u.forEach(function (p, f) {
            zl(p) && (i[m] += p * (u[f - 1] === "-" ? -1 : 1));
          });
        }),
        i
      );
    }
    function Ch(e, t) {
      var n = t.offset,
        r = e.placement,
        i = e.offsets,
        l = i.popper,
        o = i.reference,
        s = r.split("-")[0],
        c = void 0;
      return (
        zl(+n) ? (c = [+n, 0]) : (c = wh(n, l, o, s)),
        s === "left"
          ? ((l.top += c[0]), (l.left -= c[1]))
          : s === "right"
            ? ((l.top += c[0]), (l.left += c[1]))
            : s === "top"
              ? ((l.left += c[0]), (l.top -= c[1]))
              : s === "bottom" && ((l.left += c[0]), (l.top += c[1])),
        (e.popper = l),
        e
      );
    }
    function Sh(e, t) {
      var n = t.boundariesElement || xn(e.instance.popper);
      e.instance.reference === n && (n = xn(n));
      var r = jl("transform"),
        i = e.instance.popper.style,
        l = i.top,
        o = i.left,
        s = i[r];
      (i.top = ""), (i.left = ""), (i[r] = "");
      var c = Hl(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
      (i.top = l), (i.left = o), (i[r] = s), (t.boundaries = c);
      var d = t.priority,
        u = e.offsets.popper,
        m = {
          primary: function (p) {
            var f = u[p];
            return (
              u[p] < c[p] && !t.escapeWithReference && (f = Math.max(u[p], c[p])), _n({}, p, f)
            );
          },
          secondary: function (p) {
            var f = p === "right" ? "left" : "top",
              g = u[f];
            return (
              u[p] > c[p] &&
                !t.escapeWithReference &&
                (g = Math.min(u[f], c[p] - (p === "right" ? u.width : u.height))),
              _n({}, f, g)
            );
          },
        };
      return (
        d.forEach(function (p) {
          var f = ["left", "top"].indexOf(p) !== -1 ? "primary" : "secondary";
          u = Ke({}, u, m[f](p));
        }),
        (e.offsets.popper = u),
        e
      );
    }
    function xh(e) {
      var t = e.placement,
        n = t.split("-")[0],
        r = t.split("-")[1];
      if (r) {
        var i = e.offsets,
          l = i.reference,
          o = i.popper,
          s = ["bottom", "top"].indexOf(n) !== -1,
          c = s ? "left" : "top",
          d = s ? "width" : "height",
          u = { start: _n({}, c, l[c]), end: _n({}, c, l[c] + l[d] - o[d]) };
        e.offsets.popper = Ke({}, o, u[r]);
      }
      return e;
    }
    function Nh(e) {
      if (!F0(e.instance.modifiers, "hide", "preventOverflow")) return e;
      var t = e.offsets.reference,
        n = Sa(e.instance.modifiers, function (r) {
          return r.name === "preventOverflow";
        }).boundaries;
      if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
        if (e.hide === !0) return e;
        (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
      } else {
        if (e.hide === !1) return e;
        (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
      }
      return e;
    }
    function _h(e) {
      var t = e.placement,
        n = t.split("-")[0],
        r = e.offsets,
        i = r.popper,
        l = r.reference,
        o = ["left", "right"].indexOf(n) !== -1,
        s = ["top", "left"].indexOf(n) === -1;
      return (
        (i[o ? "left" : "top"] = l[n] - (s ? i[o ? "width" : "height"] : 0)),
        (e.placement = Sr(t)),
        (e.offsets.popper = Vt(i)),
        e
      );
    }
    var Mh = {
        shift: { order: 100, enabled: !0, fn: xh },
        offset: { order: 200, enabled: !0, fn: Ch, offset: 0 },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn: Sh,
          priority: ["left", "right", "top", "bottom"],
          padding: 5,
          boundariesElement: "scrollParent",
        },
        keepTogether: { order: 400, enabled: !0, fn: bh },
        arrow: { order: 500, enabled: !0, fn: vh, element: "[x-arrow]" },
        flip: {
          order: 600,
          enabled: !0,
          fn: Eh,
          behavior: "flip",
          padding: 5,
          boundariesElement: "viewport",
          flipVariations: !1,
          flipVariationsByContent: !1,
        },
        inner: { order: 700, enabled: !1, fn: _h },
        hide: { order: 800, enabled: !0, fn: Nh },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn: gh,
          gpuAcceleration: !0,
          x: "bottom",
          y: "right",
        },
        applyStyle: { order: 900, enabled: !0, fn: mh, onLoad: ph, gpuAcceleration: void 0 },
      },
      Th = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function () {},
        onUpdate: function () {},
        modifiers: Mh,
      },
      Hr = (function () {
        function e(t, n) {
          var r = this,
            i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          eh(this, e),
            (this.scheduleUpdate = function () {
              return requestAnimationFrame(r.update);
            }),
            (this.update = K3(this.update.bind(this))),
            (this.options = Ke({}, e.Defaults, i)),
            (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
            (this.reference = t && t.jquery ? t[0] : t),
            (this.popper = n && n.jquery ? n[0] : n),
            (this.options.modifiers = {}),
            Object.keys(Ke({}, e.Defaults.modifiers, i.modifiers)).forEach(function (o) {
              r.options.modifiers[o] = Ke(
                {},
                e.Defaults.modifiers[o] || {},
                i.modifiers ? i.modifiers[o] : {}
              );
            }),
            (this.modifiers = Object.keys(this.options.modifiers)
              .map(function (o) {
                return Ke({ name: o }, r.options.modifiers[o]);
              })
              .sort(function (o, s) {
                return o.order - s.order;
              })),
            this.modifiers.forEach(function (o) {
              o.enabled && y0(o.onLoad) && o.onLoad(r.reference, r.popper, r.options, o, r.state);
            }),
            this.update();
          var l = this.options.eventsEnabled;
          l && this.enableEventListeners(), (this.state.eventsEnabled = l);
        }
        return (
          th(e, [
            {
              key: "update",
              value: function () {
                return ih.call(this);
              },
            },
            {
              key: "destroy",
              value: function () {
                return lh.call(this);
              },
            },
            {
              key: "enableEventListeners",
              value: function () {
                return sh.call(this);
              },
            },
            {
              key: "disableEventListeners",
              value: function () {
                return dh.call(this);
              },
            },
          ]),
          e
        );
      })();
    Hr.Utils = window.PopperUtils;
    Hr.placements = O0;
    Hr.Defaults = Th;
    var v1 = Hr,
      ol = et(ml()),
      Ah = ["innerHTML", "ownerDocument", "style", "attributes", "nodeValue"],
      Fh = [
        "Array",
        "ArrayBuffer",
        "AsyncFunction",
        "AsyncGenerator",
        "AsyncGeneratorFunction",
        "Date",
        "Error",
        "Function",
        "Generator",
        "GeneratorFunction",
        "HTMLElement",
        "Map",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "WeakMap",
        "WeakSet",
      ],
      Oh = ["bigint", "boolean", "null", "number", "string", "symbol", "undefined"];
    function jr(e) {
      var t = Object.prototype.toString.call(e).slice(8, -1);
      if (/HTML\w+Element/.test(t)) return "HTMLElement";
      if (Lh(t)) return t;
    }
    function st(e) {
      return function (t) {
        return jr(t) === e;
      };
    }
    function Lh(e) {
      return Fh.includes(e);
    }
    function Fn(e) {
      return function (t) {
        return typeof t === e;
      };
    }
    function Rh(e) {
      return Oh.includes(e);
    }
    function T(e) {
      if (e === null) return "null";
      switch (typeof e) {
        case "bigint":
          return "bigint";
        case "boolean":
          return "boolean";
        case "number":
          return "number";
        case "string":
          return "string";
        case "symbol":
          return "symbol";
        case "undefined":
          return "undefined";
      }
      if (T.array(e)) return "Array";
      if (T.plainFunction(e)) return "Function";
      var t = jr(e);
      return t || "Object";
    }
    T.array = Array.isArray;
    T.arrayOf = function (e, t) {
      return !T.array(e) && !T.function(t)
        ? !1
        : e.every(function (n) {
            return t(n);
          });
    };
    T.asyncGeneratorFunction = function (e) {
      return jr(e) === "AsyncGeneratorFunction";
    };
    T.asyncFunction = st("AsyncFunction");
    T.bigint = Fn("bigint");
    T.boolean = function (e) {
      return e === !0 || e === !1;
    };
    T.date = st("Date");
    T.defined = function (e) {
      return !T.undefined(e);
    };
    T.domElement = function (e) {
      return (
        T.object(e) &&
        !T.plainObject(e) &&
        e.nodeType === 1 &&
        T.string(e.nodeName) &&
        Ah.every(function (t) {
          return t in e;
        })
      );
    };
    T.empty = function (e) {
      return (
        (T.string(e) && e.length === 0) ||
        (T.array(e) && e.length === 0) ||
        (T.object(e) && !T.map(e) && !T.set(e) && Object.keys(e).length === 0) ||
        (T.set(e) && e.size === 0) ||
        (T.map(e) && e.size === 0)
      );
    };
    T.error = st("Error");
    T.function = Fn("function");
    T.generator = function (e) {
      return T.iterable(e) && T.function(e.next) && T.function(e.throw);
    };
    T.generatorFunction = st("GeneratorFunction");
    T.instanceOf = function (e, t) {
      return !e || !t ? !1 : Object.getPrototypeOf(e) === t.prototype;
    };
    T.iterable = function (e) {
      return !T.nullOrUndefined(e) && T.function(e[Symbol.iterator]);
    };
    T.map = st("Map");
    T.nan = function (e) {
      return Number.isNaN(e);
    };
    T.null = function (e) {
      return e === null;
    };
    T.nullOrUndefined = function (e) {
      return T.null(e) || T.undefined(e);
    };
    T.number = function (e) {
      return Fn("number")(e) && !T.nan(e);
    };
    T.numericString = function (e) {
      return T.string(e) && e.length > 0 && !Number.isNaN(Number(e));
    };
    T.object = function (e) {
      return !T.nullOrUndefined(e) && (T.function(e) || typeof e == "object");
    };
    T.oneOf = function (e, t) {
      return T.array(e) ? e.indexOf(t) > -1 : !1;
    };
    T.plainFunction = st("Function");
    T.plainObject = function (e) {
      if (jr(e) !== "Object") return !1;
      var t = Object.getPrototypeOf(e);
      return t === null || t === Object.getPrototypeOf({});
    };
    T.primitive = function (e) {
      return T.null(e) || Rh(typeof e);
    };
    T.promise = st("Promise");
    T.propertyOf = function (e, t, n) {
      if (!T.object(e) || !t) return !1;
      var r = e[t];
      return T.function(n) ? n(r) : T.defined(r);
    };
    T.regexp = st("RegExp");
    T.set = st("Set");
    T.string = Fn("string");
    T.symbol = Fn("symbol");
    T.undefined = Fn("undefined");
    T.weakMap = st("WeakMap");
    T.weakSet = st("WeakSet");
    var R = T;
    function L0(e) {
      return function (t) {
        return typeof t === e;
      };
    }
    var Ih = L0("function"),
      Zh = function (e) {
        return e === null;
      },
      y1 = function (e) {
        return Object.prototype.toString.call(e).slice(8, -1) === "RegExp";
      },
      E1 = function (e) {
        return !Bh(e) && !Zh(e) && (Ih(e) || typeof e == "object");
      },
      Bh = L0("undefined"),
      sl = function (e) {
        var t = typeof Symbol == "function" && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && typeof e.length == "number")
          return {
            next: function () {
              return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
            },
          };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
    function Ph(e, t) {
      var n = e.length;
      if (n !== t.length) return !1;
      for (var r = n; r-- !== 0; ) if (!He(e[r], t[r])) return !1;
      return !0;
    }
    function Vh(e, t) {
      if (e.byteLength !== t.byteLength) return !1;
      for (var n = new DataView(e.buffer), r = new DataView(t.buffer), i = e.byteLength; i--; )
        if (n.getUint8(i) !== r.getUint8(i)) return !1;
      return !0;
    }
    function Dh(e, t) {
      var n, r, i, l;
      if (e.size !== t.size) return !1;
      try {
        for (var o = sl(e.entries()), s = o.next(); !s.done; s = o.next()) {
          var c = s.value;
          if (!t.has(c[0])) return !1;
        }
      } catch (m) {
        n = { error: m };
      } finally {
        try {
          s && !s.done && (r = o.return) && r.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var d = sl(e.entries()), u = d.next(); !u.done; u = d.next()) {
          var c = u.value;
          if (!He(c[1], t.get(c[0]))) return !1;
        }
      } catch (m) {
        i = { error: m };
      } finally {
        try {
          u && !u.done && (l = d.return) && l.call(d);
        } finally {
          if (i) throw i.error;
        }
      }
      return !0;
    }
    function Hh(e, t) {
      var n, r;
      if (e.size !== t.size) return !1;
      try {
        for (var i = sl(e.entries()), l = i.next(); !l.done; l = i.next()) {
          var o = l.value;
          if (!t.has(o[0])) return !1;
        }
      } catch (s) {
        n = { error: s };
      } finally {
        try {
          l && !l.done && (r = i.return) && r.call(i);
        } finally {
          if (n) throw n.error;
        }
      }
      return !0;
    }
    function He(e, t) {
      if (e === t) return !0;
      if (e && E1(e) && t && E1(t)) {
        if (e.constructor !== t.constructor) return !1;
        if (Array.isArray(e) && Array.isArray(t)) return Ph(e, t);
        if (e instanceof Map && t instanceof Map) return Dh(e, t);
        if (e instanceof Set && t instanceof Set) return Hh(e, t);
        if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) return Vh(e, t);
        if (y1(e) && y1(t)) return e.source === t.source && e.flags === t.flags;
        if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf();
        if (e.toString !== Object.prototype.toString) return e.toString() === t.toString();
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (var i = n.length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(t, n[i])) return !1;
        for (var i = n.length; i-- !== 0; ) {
          var l = n[i];
          if (!(l === "_owner" && e.$$typeof) && !He(e[l], t[l])) return !1;
        }
        return !0;
      }
      return Number.isNaN(e) && Number.isNaN(t) ? !0 : e === t;
    }
    function jh() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return e.every(function (n) {
        return R.string(n) || R.array(n) || R.plainObject(n);
      });
    }
    function zh(e, t, n) {
      return R0(e, t)
        ? [e, t].every(R.array)
          ? !e.some(S1(n)) && t.some(S1(n))
          : [e, t].every(R.plainObject)
            ? !Object.entries(e).some(C1(n)) && Object.entries(t).some(C1(n))
            : t === n
        : !1;
    }
    function b1(e, t, n) {
      var r = n.actual,
        i = n.key,
        l = n.previous,
        o = n.type,
        s = gt(e, i),
        c = gt(t, i),
        d = [s, c].every(R.number) && (o === "increased" ? s < c : s > c);
      return R.undefined(r) || (d = d && c === r), R.undefined(l) || (d = d && s === l), d;
    }
    function k1(e, t, n) {
      var r = n.key,
        i = n.type,
        l = n.value,
        o = gt(e, r),
        s = gt(t, r),
        c = i === "added" ? o : s,
        d = i === "added" ? s : o;
      if (!R.nullOrUndefined(l)) {
        if (R.defined(c)) {
          if (R.array(c) || R.plainObject(c)) return zh(c, d, l);
        } else return He(d, l);
        return !1;
      }
      return [o, s].every(R.array)
        ? !d.every(Ul(c))
        : [o, s].every(R.plainObject)
          ? Uh(Object.keys(c), Object.keys(d))
          : ![o, s].every(function (u) {
              return R.primitive(u) && R.defined(u);
            }) && (i === "added" ? !R.defined(o) && R.defined(s) : R.defined(o) && !R.defined(s));
    }
    function w1(e, t, n) {
      var r = n === void 0 ? {} : n,
        i = r.key,
        l = gt(e, i),
        o = gt(t, i);
      if (!R0(l, o)) throw new TypeError("Inputs have different types");
      if (!jh(l, o)) throw new TypeError("Inputs don't have length");
      return [l, o].every(R.plainObject) && ((l = Object.keys(l)), (o = Object.keys(o))), [l, o];
    }
    function C1(e) {
      return function (t) {
        var n = t[0],
          r = t[1];
        return R.array(e)
          ? He(e, r) ||
              e.some(function (i) {
                return He(i, r) || (R.array(r) && Ul(r)(i));
              })
          : R.plainObject(e) && e[n]
            ? !!e[n] && He(e[n], r)
            : He(e, r);
      };
    }
    function Uh(e, t) {
      return t.some(function (n) {
        return !e.includes(n);
      });
    }
    function S1(e) {
      return function (t) {
        return R.array(e)
          ? e.some(function (n) {
              return He(n, t) || (R.array(t) && Ul(t)(n));
            })
          : He(e, t);
      };
    }
    function Hn(e, t) {
      return R.array(e)
        ? e.some(function (n) {
            return He(n, t);
          })
        : He(e, t);
    }
    function Ul(e) {
      return function (t) {
        return e.some(function (n) {
          return He(n, t);
        });
      };
    }
    function R0() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return e.every(R.array) || e.every(R.number) || e.every(R.plainObject) || e.every(R.string);
    }
    function gt(e, t) {
      if (R.plainObject(e) || R.array(e)) {
        if (R.string(t)) {
          var n = t.split(".");
          return n.reduce(function (r, i) {
            return r && r[i];
          }, e);
        }
        return R.number(t) ? e[t] : e;
      }
      return e;
    }
    function $h(e, t) {
      if ([e, t].some(R.nullOrUndefined)) throw new Error("Missing required parameters");
      if (
        ![e, t].every(function (m) {
          return R.plainObject(m) || R.array(m);
        })
      )
        throw new Error("Expected plain objects or array");
      var n = function (m, p) {
          try {
            return k1(e, t, { key: m, type: "added", value: p });
          } catch {
            return !1;
          }
        },
        r = function (m, p, f) {
          try {
            var g = gt(e, m),
              v = gt(t, m),
              k = R.defined(p),
              E = R.defined(f);
            if (k || E) {
              var h = E ? Hn(f, g) : !Hn(p, g),
                y = Hn(p, v);
              return h && y;
            }
            return [g, v].every(R.array) || [g, v].every(R.plainObject) ? !He(g, v) : g !== v;
          } catch {
            return !1;
          }
        },
        i = function (m, p, f) {
          if (!R.defined(m)) return !1;
          try {
            var g = gt(e, m),
              v = gt(t, m),
              k = R.defined(f);
            return Hn(p, g) && (k ? Hn(f, v) : !k);
          } catch {
            return !1;
          }
        },
        l = function (m, p) {
          return R.defined(m) ? r(m, p) : !1;
        },
        o = function (m, p, f) {
          if (!R.defined(m)) return !1;
          try {
            return b1(e, t, { key: m, actual: p, previous: f, type: "decreased" });
          } catch {
            return !1;
          }
        },
        s = function (m) {
          try {
            var p = w1(e, t, { key: m }),
              f = p[0],
              g = p[1];
            return !!f.length && !g.length;
          } catch {
            return !1;
          }
        },
        c = function (m) {
          try {
            var p = w1(e, t, { key: m }),
              f = p[0],
              g = p[1];
            return !f.length && !!g.length;
          } catch {
            return !1;
          }
        },
        d = function (m, p, f) {
          if (!R.defined(m)) return !1;
          try {
            return b1(e, t, { key: m, actual: p, previous: f, type: "increased" });
          } catch {
            return !1;
          }
        },
        u = function (m, p) {
          try {
            return k1(e, t, { key: m, type: "removed", value: p });
          } catch {
            return !1;
          }
        };
      return {
        added: n,
        changed: r,
        changedFrom: i,
        changedTo: l,
        decreased: o,
        emptied: s,
        filled: c,
        increased: d,
        removed: u,
      };
    }
    function x1(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function ge(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2
          ? x1(Object(n), !0).forEach(function (r) {
              Fe(e, r, n[r]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : x1(Object(n)).forEach(function (r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
              });
      }
      return e;
    }
    function xa(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function N1(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, Z0(r.key), r);
      }
    }
    function Na(e, t, n) {
      return (
        t && N1(e.prototype, t),
        n && N1(e, n),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
      );
    }
    function Fe(e, t, n) {
      return (
        (t = Z0(t)),
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function _a(e, t) {
      if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function");
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t && cl(e, t);
    }
    function xr(e) {
      return (
        (xr = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            }),
        xr(e)
      );
    }
    function cl(e, t) {
      return (
        (cl = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (n, r) {
              return (n.__proto__ = r), n;
            }),
        cl(e, t)
      );
    }
    function Wh() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
      if (typeof Proxy == "function") return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
      } catch {
        return !1;
      }
    }
    function Gh(e, t) {
      if (e == null) return {};
      var n = {},
        r = Object.keys(e),
        i,
        l;
      for (l = 0; l < r.length; l++) (i = r[l]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
      return n;
    }
    function I0(e, t) {
      if (e == null) return {};
      var n = Gh(e, t),
        r,
        i;
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (i = 0; i < l.length; i++)
          (r = l[i]),
            !(t.indexOf(r) >= 0) &&
              Object.prototype.propertyIsEnumerable.call(e, r) &&
              (n[r] = e[r]);
      }
      return n;
    }
    function Ct(e) {
      if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }
    function qh(e, t) {
      if (t && (typeof t == "object" || typeof t == "function")) return t;
      if (t !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return Ct(e);
    }
    function Ma(e) {
      var t = Wh();
      return function () {
        var n = xr(e),
          r;
        if (t) {
          var i = xr(this).constructor;
          r = Reflect.construct(n, arguments, i);
        } else r = n.apply(this, arguments);
        return qh(this, r);
      };
    }
    function Yh(e, t) {
      if (typeof e != "object" || e === null) return e;
      var n = e[Symbol.toPrimitive];
      if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }
    function Z0(e) {
      var t = Yh(e, "string");
      return typeof t == "symbol" ? t : String(t);
    }
    var Qh = { flip: { padding: 20 }, preventOverflow: { padding: 10 } },
      Kh =
        "The typeValidator argument must be a function with the signature function(props, propName, componentName).",
      Jh = "The error message is optional, but must be a string if provided.";
    function Xh(e, t, n, r) {
      return typeof e == "boolean" ? e : typeof e == "function" ? e(t, n, r) : e ? !!e : !1;
    }
    function e7(e, t) {
      return Object.hasOwnProperty.call(e, t);
    }
    function t7(e, t, n, r) {
      return r
        ? new Error(r)
        : new Error(
            "Required ".concat(e[t], " `").concat(t, "` was not specified in `").concat(n, "`.")
          );
    }
    function n7(e, t) {
      if (typeof e != "function") throw new TypeError(Kh);
      if (t && typeof t != "string") throw new TypeError(Jh);
    }
    function _1(e, t, n) {
      return (
        n7(e, n),
        function (r, i, l) {
          for (var o = arguments.length, s = new Array(o > 3 ? o - 3 : 0), c = 3; c < o; c++)
            s[c - 3] = arguments[c];
          return Xh(t, r, i, l)
            ? e7(r, i)
              ? e.apply(void 0, [r, i, l].concat(s))
              : t7(r, i, l, n)
            : e.apply(void 0, [r, i, l].concat(s));
        }
      );
    }
    var te = {
        INIT: "init",
        IDLE: "idle",
        OPENING: "opening",
        OPEN: "open",
        CLOSING: "closing",
        ERROR: "error",
      },
      jn = Rn.createPortal !== void 0;
    function ut() {
      return !!(typeof window < "u" && window.document && window.document.createElement);
    }
    function xi() {
      return "ontouchstart" in window && /Mobi/.test(navigator.userAgent);
    }
    function za(e) {
      var t = e.title,
        n = e.data,
        r = e.warn,
        i = r === void 0 ? !1 : r,
        l = e.debug,
        o = l === void 0 ? !1 : l,
        s = i ? console.warn || console.error : console.log;
      o &&
        t &&
        n &&
        (console.groupCollapsed(
          "%creact-floater: ".concat(t),
          "color: #9b00ff; font-weight: bold; font-size: 12px;"
        ),
        Array.isArray(n)
          ? n.forEach(function (c) {
              R.plainObject(c) && c.key
                ? s.apply(console, [c.key, c.value])
                : s.apply(console, [c]);
            })
          : s.apply(console, [n]),
        console.groupEnd());
    }
    function a7(e, t, n) {
      var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      e.addEventListener(t, n, r);
    }
    function r7(e, t, n) {
      var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      e.removeEventListener(t, n, r);
    }
    function i7(e, t, n) {
      var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1,
        i;
      (i = function (l) {
        n(l), r7(e, t, i);
      }),
        a7(e, t, i, r);
    }
    function M1() {}
    var B0 = (function (e) {
      _a(n, e);
      var t = Ma(n);
      function n() {
        return xa(this, n), t.apply(this, arguments);
      }
      return (
        Na(n, [
          {
            key: "componentDidMount",
            value: function () {
              ut() && (this.node || this.appendNode(), jn || this.renderPortal());
            },
          },
          {
            key: "componentDidUpdate",
            value: function () {
              ut() && (jn || this.renderPortal());
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              !ut() ||
                !this.node ||
                (jn || Rn.unmountComponentAtNode(this.node),
                this.node &&
                  this.node.parentNode === document.body &&
                  (document.body.removeChild(this.node), (this.node = void 0)));
            },
          },
          {
            key: "appendNode",
            value: function () {
              var r = this.props,
                i = r.id,
                l = r.zIndex;
              this.node ||
                ((this.node = document.createElement("div")),
                i && (this.node.id = i),
                l && (this.node.style.zIndex = l),
                document.body.appendChild(this.node));
            },
          },
          {
            key: "renderPortal",
            value: function () {
              if (!ut()) return null;
              var r = this.props,
                i = r.children,
                l = r.setRef;
              if ((this.node || this.appendNode(), jn)) return Rn.createPortal(i, this.node);
              var o = Rn.unstable_renderSubtreeIntoContainer(
                this,
                i.length > 1 ? a.createElement("div", null, i) : i[0],
                this.node
              );
              return l(o), null;
            },
          },
          {
            key: "renderReact16",
            value: function () {
              var r = this.props,
                i = r.hasChildren,
                l = r.placement,
                o = r.target;
              return i ? this.renderPortal() : o || l === "center" ? this.renderPortal() : null;
            },
          },
          {
            key: "render",
            value: function () {
              return jn ? this.renderReact16() : null;
            },
          },
        ]),
        n
      );
    })(a.Component);
    Fe(B0, "propTypes", {
      children: N.default.oneOfType([N.default.element, N.default.array]),
      hasChildren: N.default.bool,
      id: N.default.oneOfType([N.default.string, N.default.number]),
      placement: N.default.string,
      setRef: N.default.func.isRequired,
      target: N.default.oneOfType([N.default.object, N.default.string]),
      zIndex: N.default.number,
    });
    var P0 = (function (e) {
      _a(n, e);
      var t = Ma(n);
      function n() {
        return xa(this, n), t.apply(this, arguments);
      }
      return (
        Na(n, [
          {
            key: "parentStyle",
            get: function () {
              var r = this.props,
                i = r.placement,
                l = r.styles,
                o = l.arrow.length,
                s = { pointerEvents: "none", position: "absolute", width: "100%" };
              return (
                i.startsWith("top")
                  ? ((s.bottom = 0), (s.left = 0), (s.right = 0), (s.height = o))
                  : i.startsWith("bottom")
                    ? ((s.left = 0), (s.right = 0), (s.top = 0), (s.height = o))
                    : i.startsWith("left")
                      ? ((s.right = 0), (s.top = 0), (s.bottom = 0))
                      : i.startsWith("right") && ((s.left = 0), (s.top = 0)),
                s
              );
            },
          },
          {
            key: "render",
            value: function () {
              var r = this.props,
                i = r.placement,
                l = r.setArrowRef,
                o = r.styles,
                s = o.arrow,
                c = s.color,
                d = s.display,
                u = s.length,
                m = s.margin,
                p = s.position,
                f = s.spread,
                g = { display: d, position: p },
                v,
                k = f,
                E = u;
              return (
                i.startsWith("top")
                  ? ((v = "0,0 "
                      .concat(k / 2, ",")
                      .concat(E, " ")
                      .concat(k, ",0")),
                    (g.bottom = 0),
                    (g.marginLeft = m),
                    (g.marginRight = m))
                  : i.startsWith("bottom")
                    ? ((v = ""
                        .concat(k, ",")
                        .concat(E, " ")
                        .concat(k / 2, ",0 0,")
                        .concat(E)),
                      (g.top = 0),
                      (g.marginLeft = m),
                      (g.marginRight = m))
                    : i.startsWith("left")
                      ? ((E = f),
                        (k = u),
                        (v = "0,0 "
                          .concat(k, ",")
                          .concat(E / 2, " 0,")
                          .concat(E)),
                        (g.right = 0),
                        (g.marginTop = m),
                        (g.marginBottom = m))
                      : i.startsWith("right") &&
                        ((E = f),
                        (k = u),
                        (v = ""
                          .concat(k, ",")
                          .concat(E, " ")
                          .concat(k, ",0 0,")
                          .concat(E / 2)),
                        (g.left = 0),
                        (g.marginTop = m),
                        (g.marginBottom = m)),
                a.createElement(
                  "div",
                  { className: "__floater__arrow", style: this.parentStyle },
                  a.createElement(
                    "span",
                    { ref: l, style: g },
                    a.createElement(
                      "svg",
                      { width: k, height: E, version: "1.1", xmlns: "http://www.w3.org/2000/svg" },
                      a.createElement("polygon", { points: v, fill: c })
                    )
                  )
                )
              );
            },
          },
        ]),
        n
      );
    })(a.Component);
    Fe(P0, "propTypes", {
      placement: N.default.string.isRequired,
      setArrowRef: N.default.func.isRequired,
      styles: N.default.object.isRequired,
    });
    var l7 = ["color", "height", "width"];
    function V0(e) {
      var t = e.handleClick,
        n = e.styles,
        r = n.color,
        i = n.height,
        l = n.width,
        o = I0(n, l7);
      return a.createElement(
        "button",
        { "aria-label": "close", onClick: t, style: o, type: "button" },
        a.createElement(
          "svg",
          {
            width: "".concat(l, "px"),
            height: "".concat(i, "px"),
            viewBox: "0 0 18 18",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            preserveAspectRatio: "xMidYMid",
          },
          a.createElement(
            "g",
            null,
            a.createElement("path", {
              d: "M8.13911129,9.00268191 L0.171521827,17.0258467 C-0.0498027049,17.248715 -0.0498027049,17.6098394 0.171521827,17.8327545 C0.28204354,17.9443526 0.427188206,17.9998706 0.572051765,17.9998706 C0.71714958,17.9998706 0.862013139,17.9443526 0.972581703,17.8327545 L9.0000937,9.74924618 L17.0276057,17.8327545 C17.1384085,17.9443526 17.2832721,17.9998706 17.4281356,17.9998706 C17.5729992,17.9998706 17.718097,17.9443526 17.8286656,17.8327545 C18.0499901,17.6098862 18.0499901,17.2487618 17.8286656,17.0258467 L9.86135722,9.00268191 L17.8340066,0.973848225 C18.0553311,0.750979934 18.0553311,0.389855532 17.8340066,0.16694039 C17.6126821,-0.0556467968 17.254037,-0.0556467968 17.0329467,0.16694039 L9.00042166,8.25611765 L0.967006424,0.167268345 C0.745681892,-0.0553188426 0.387317931,-0.0553188426 0.165993399,0.167268345 C-0.0553311331,0.390136635 -0.0553311331,0.751261038 0.165993399,0.974176179 L8.13920499,9.00268191 L8.13911129,9.00268191 Z",
              fill: r,
            })
          )
        )
      );
    }
    V0.propTypes = { handleClick: N.default.func.isRequired, styles: N.default.object.isRequired };
    function D0(e) {
      var t = e.content,
        n = e.footer,
        r = e.handleClick,
        i = e.open,
        l = e.positionWrapper,
        o = e.showCloseButton,
        s = e.title,
        c = e.styles,
        d = {
          content: a.isValidElement(t)
            ? t
            : a.createElement("div", { className: "__floater__content", style: c.content }, t),
        };
      return (
        s &&
          (d.title = a.isValidElement(s)
            ? s
            : a.createElement("div", { className: "__floater__title", style: c.title }, s)),
        n &&
          (d.footer = a.isValidElement(n)
            ? n
            : a.createElement("div", { className: "__floater__footer", style: c.footer }, n)),
        (o || l) &&
          !R.boolean(i) &&
          (d.close = a.createElement(V0, { styles: c.close, handleClick: r })),
        a.createElement(
          "div",
          { className: "__floater__container", style: c.container },
          d.close,
          d.title,
          d.content,
          d.footer
        )
      );
    }
    D0.propTypes = {
      content: N.default.node.isRequired,
      footer: N.default.node,
      handleClick: N.default.func.isRequired,
      open: N.default.bool,
      positionWrapper: N.default.bool.isRequired,
      showCloseButton: N.default.bool.isRequired,
      styles: N.default.object.isRequired,
      title: N.default.node,
    };
    var H0 = (function (e) {
      _a(n, e);
      var t = Ma(n);
      function n() {
        return xa(this, n), t.apply(this, arguments);
      }
      return (
        Na(n, [
          {
            key: "style",
            get: function () {
              var r = this.props,
                i = r.disableAnimation,
                l = r.component,
                o = r.placement,
                s = r.hideArrow,
                c = r.status,
                d = r.styles,
                u = d.arrow.length,
                m = d.floater,
                p = d.floaterCentered,
                f = d.floaterClosing,
                g = d.floaterOpening,
                v = d.floaterWithAnimation,
                k = d.floaterWithComponent,
                E = {};
              return (
                s ||
                  (o.startsWith("top")
                    ? (E.padding = "0 0 ".concat(u, "px"))
                    : o.startsWith("bottom")
                      ? (E.padding = "".concat(u, "px 0 0"))
                      : o.startsWith("left")
                        ? (E.padding = "0 ".concat(u, "px 0 0"))
                        : o.startsWith("right") && (E.padding = "0 0 0 ".concat(u, "px"))),
                [te.OPENING, te.OPEN].indexOf(c) !== -1 && (E = ge(ge({}, E), g)),
                c === te.CLOSING && (E = ge(ge({}, E), f)),
                c === te.OPEN && !i && (E = ge(ge({}, E), v)),
                o === "center" && (E = ge(ge({}, E), p)),
                l && (E = ge(ge({}, E), k)),
                ge(ge({}, m), E)
              );
            },
          },
          {
            key: "render",
            value: function () {
              var r = this.props,
                i = r.component,
                l = r.handleClick,
                o = r.hideArrow,
                s = r.setFloaterRef,
                c = r.status,
                d = {},
                u = ["__floater"];
              return (
                i
                  ? a.isValidElement(i)
                    ? (d.content = a.cloneElement(i, { closeFn: l }))
                    : (d.content = i({ closeFn: l }))
                  : (d.content = a.createElement(D0, this.props)),
                c === te.OPEN && u.push("__floater__open"),
                o || (d.arrow = a.createElement(P0, this.props)),
                a.createElement(
                  "div",
                  { ref: s, className: u.join(" "), style: this.style },
                  a.createElement("div", { className: "__floater__body" }, d.content, d.arrow)
                )
              );
            },
          },
        ]),
        n
      );
    })(a.Component);
    Fe(H0, "propTypes", {
      component: N.default.oneOfType([N.default.func, N.default.element]),
      content: N.default.node,
      disableAnimation: N.default.bool.isRequired,
      footer: N.default.node,
      handleClick: N.default.func.isRequired,
      hideArrow: N.default.bool.isRequired,
      open: N.default.bool,
      placement: N.default.string.isRequired,
      positionWrapper: N.default.bool.isRequired,
      setArrowRef: N.default.func.isRequired,
      setFloaterRef: N.default.func.isRequired,
      showCloseButton: N.default.bool,
      status: N.default.string.isRequired,
      styles: N.default.object.isRequired,
      title: N.default.node,
    });
    var j0 = (function (e) {
      _a(n, e);
      var t = Ma(n);
      function n() {
        return xa(this, n), t.apply(this, arguments);
      }
      return (
        Na(n, [
          {
            key: "render",
            value: function () {
              var r = this.props,
                i = r.children,
                l = r.handleClick,
                o = r.handleMouseEnter,
                s = r.handleMouseLeave,
                c = r.setChildRef,
                d = r.setWrapperRef,
                u = r.style,
                m = r.styles,
                p;
              if (i)
                if (a.Children.count(i) === 1)
                  if (!a.isValidElement(i)) p = a.createElement("span", null, i);
                  else {
                    var f = R.function(i.type) ? "innerRef" : "ref";
                    p = a.cloneElement(a.Children.only(i), Fe({}, f, c));
                  }
                else p = i;
              return p
                ? a.createElement(
                    "span",
                    {
                      ref: d,
                      style: ge(ge({}, m), u),
                      onClick: l,
                      onMouseEnter: o,
                      onMouseLeave: s,
                    },
                    p
                  )
                : null;
            },
          },
        ]),
        n
      );
    })(a.Component);
    Fe(j0, "propTypes", {
      children: N.default.node,
      handleClick: N.default.func.isRequired,
      handleMouseEnter: N.default.func.isRequired,
      handleMouseLeave: N.default.func.isRequired,
      setChildRef: N.default.func.isRequired,
      setWrapperRef: N.default.func.isRequired,
      style: N.default.object,
      styles: N.default.object.isRequired,
    });
    var o7 = { zIndex: 100 };
    function s7(e) {
      var t = (0, ol.default)(o7, e.options || {});
      return {
        wrapper: {
          cursor: "help",
          display: "inline-flex",
          flexDirection: "column",
          zIndex: t.zIndex,
        },
        wrapperPosition: { left: -1e3, position: "absolute", top: -1e3, visibility: "hidden" },
        floater: {
          display: "inline-block",
          filter: "drop-shadow(0 0 3px rgba(0, 0, 0, 0.3))",
          maxWidth: 300,
          opacity: 0,
          position: "relative",
          transition: "opacity 0.3s",
          visibility: "hidden",
          zIndex: t.zIndex,
        },
        floaterOpening: { opacity: 1, visibility: "visible" },
        floaterWithAnimation: {
          opacity: 1,
          transition: "opacity 0.3s, transform 0.2s",
          visibility: "visible",
        },
        floaterWithComponent: { maxWidth: "100%" },
        floaterClosing: { opacity: 0, visibility: "visible" },
        floaterCentered: {
          left: "50%",
          position: "fixed",
          top: "50%",
          transform: "translate(-50%, -50%)",
        },
        container: {
          backgroundColor: "#fff",
          color: "#666",
          minHeight: 60,
          minWidth: 200,
          padding: 20,
          position: "relative",
          zIndex: 10,
        },
        title: {
          borderBottom: "1px solid #555",
          color: "#555",
          fontSize: 18,
          marginBottom: 5,
          paddingBottom: 6,
          paddingRight: 18,
        },
        content: { fontSize: 15 },
        close: {
          backgroundColor: "transparent",
          border: 0,
          borderRadius: 0,
          color: "#555",
          fontSize: 0,
          height: 15,
          outline: "none",
          padding: 10,
          position: "absolute",
          right: 0,
          top: 0,
          width: 15,
          WebkitAppearance: "none",
        },
        footer: { borderTop: "1px solid #ccc", fontSize: 13, marginTop: 10, paddingTop: 5 },
        arrow: {
          color: "#fff",
          display: "inline-flex",
          length: 16,
          margin: 8,
          position: "absolute",
          spread: 32,
        },
        options: t,
      };
    }
    var c7 = ["arrow", "flip", "offset"],
      d7 = ["position", "top", "right", "bottom", "left"],
      $l = (function (e) {
        _a(n, e);
        var t = Ma(n);
        function n(r) {
          var i;
          return (
            xa(this, n),
            (i = t.call(this, r)),
            Fe(Ct(i), "setArrowRef", function (l) {
              i.arrowRef = l;
            }),
            Fe(Ct(i), "setChildRef", function (l) {
              i.childRef = l;
            }),
            Fe(Ct(i), "setFloaterRef", function (l) {
              i.floaterRef = l;
            }),
            Fe(Ct(i), "setWrapperRef", function (l) {
              i.wrapperRef = l;
            }),
            Fe(Ct(i), "handleTransitionEnd", function () {
              var l = i.state.status,
                o = i.props.callback;
              i.wrapperPopper && i.wrapperPopper.instance.update(),
                i.setState({ status: l === te.OPENING ? te.OPEN : te.IDLE }, function () {
                  var s = i.state.status;
                  o(s === te.OPEN ? "open" : "close", i.props);
                });
            }),
            Fe(Ct(i), "handleClick", function () {
              var l = i.props,
                o = l.event,
                s = l.open;
              if (!R.boolean(s)) {
                var c = i.state,
                  d = c.positionWrapper,
                  u = c.status;
                (i.event === "click" || (i.event === "hover" && d)) &&
                  (za({
                    title: "click",
                    data: [{ event: o, status: u === te.OPEN ? "closing" : "opening" }],
                    debug: i.debug,
                  }),
                  i.toggle());
              }
            }),
            Fe(Ct(i), "handleMouseEnter", function () {
              var l = i.props,
                o = l.event,
                s = l.open;
              if (!(R.boolean(s) || xi())) {
                var c = i.state.status;
                i.event === "hover" &&
                  c === te.IDLE &&
                  (za({
                    title: "mouseEnter",
                    data: [{ key: "originalEvent", value: o }],
                    debug: i.debug,
                  }),
                  clearTimeout(i.eventDelayTimeout),
                  i.toggle());
              }
            }),
            Fe(Ct(i), "handleMouseLeave", function () {
              var l = i.props,
                o = l.event,
                s = l.eventDelay,
                c = l.open;
              if (!(R.boolean(c) || xi())) {
                var d = i.state,
                  u = d.status,
                  m = d.positionWrapper;
                i.event === "hover" &&
                  (za({
                    title: "mouseLeave",
                    data: [{ key: "originalEvent", value: o }],
                    debug: i.debug,
                  }),
                  s
                    ? [te.OPENING, te.OPEN].indexOf(u) !== -1 &&
                      !m &&
                      !i.eventDelayTimeout &&
                      (i.eventDelayTimeout = setTimeout(function () {
                        delete i.eventDelayTimeout, i.toggle();
                      }, s * 1e3))
                    : i.toggle(te.IDLE));
              }
            }),
            (i.state = {
              currentPlacement: r.placement,
              needsUpdate: !1,
              positionWrapper: r.wrapperOptions.position && !!r.target,
              status: te.INIT,
              statusWrapper: te.INIT,
            }),
            (i._isMounted = !1),
            (i.hasMounted = !1),
            ut() &&
              window.addEventListener("load", function () {
                i.popper && i.popper.instance.update(),
                  i.wrapperPopper && i.wrapperPopper.instance.update();
              }),
            i
          );
        }
        return (
          Na(n, [
            {
              key: "componentDidMount",
              value: function () {
                if (ut()) {
                  var r = this.state.positionWrapper,
                    i = this.props,
                    l = i.children,
                    o = i.open,
                    s = i.target;
                  (this._isMounted = !0),
                    za({
                      title: "init",
                      data: {
                        hasChildren: !!l,
                        hasTarget: !!s,
                        isControlled: R.boolean(o),
                        positionWrapper: r,
                        target: this.target,
                        floater: this.floaterRef,
                      },
                      debug: this.debug,
                    }),
                    this.hasMounted || (this.initPopper(), (this.hasMounted = !0)),
                    !l && s && R.boolean(o);
                }
              },
            },
            {
              key: "componentDidUpdate",
              value: function (r, i) {
                if (ut()) {
                  var l = this.props,
                    o = l.autoOpen,
                    s = l.open,
                    c = l.target,
                    d = l.wrapperOptions,
                    u = $h(i, this.state),
                    m = u.changedFrom,
                    p = u.changed;
                  if (r.open !== s) {
                    var f;
                    R.boolean(s) && (f = s ? te.OPENING : te.CLOSING), this.toggle(f);
                  }
                  (r.wrapperOptions.position !== d.position || r.target !== c) &&
                    this.changeWrapperPosition(this.props),
                    p("status", te.IDLE) && s
                      ? this.toggle(te.OPEN)
                      : m("status", te.INIT, te.IDLE) && o && this.toggle(te.OPEN),
                    this.popper && p("status", te.OPENING) && this.popper.instance.update(),
                    this.floaterRef &&
                      (p("status", te.OPENING) || p("status", te.CLOSING)) &&
                      i7(this.floaterRef, "transitionend", this.handleTransitionEnd),
                    p("needsUpdate", !0) && this.rebuildPopper();
                }
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                ut() &&
                  ((this._isMounted = !1),
                  this.popper && this.popper.instance.destroy(),
                  this.wrapperPopper && this.wrapperPopper.instance.destroy());
              },
            },
            {
              key: "initPopper",
              value: function () {
                var r = this,
                  i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.target,
                  l = this.state.positionWrapper,
                  o = this.props,
                  s = o.disableFlip,
                  c = o.getPopper,
                  d = o.hideArrow,
                  u = o.offset,
                  m = o.placement,
                  p = o.wrapperOptions,
                  f =
                    m === "top" || m === "bottom"
                      ? "flip"
                      : ["right", "bottom-end", "top-end", "left", "top-start", "bottom-start"];
                if (m === "center") this.setState({ status: te.IDLE });
                else if (i && this.floaterRef) {
                  var g = this.options,
                    v = g.arrow,
                    k = g.flip,
                    E = g.offset,
                    h = I0(g, c7);
                  new v1(i, this.floaterRef, {
                    placement: m,
                    modifiers: ge(
                      {
                        arrow: ge({ enabled: !d, element: this.arrowRef }, v),
                        flip: ge({ enabled: !s, behavior: f }, k),
                        offset: ge({ offset: "0, ".concat(u, "px") }, E),
                      },
                      h
                    ),
                    onCreate: function (b) {
                      var C;
                      if (
                        ((r.popper = b),
                        !((C = r.floaterRef) !== null && C !== void 0 && C.isConnected))
                      ) {
                        r.setState({ needsUpdate: !0 });
                        return;
                      }
                      c(b, "floater"),
                        r._isMounted &&
                          r.setState({ currentPlacement: b.placement, status: te.IDLE }),
                        m !== b.placement &&
                          setTimeout(function () {
                            b.instance.update();
                          }, 1);
                    },
                    onUpdate: function (b) {
                      r.popper = b;
                      var C = r.state.currentPlacement;
                      r._isMounted &&
                        b.placement !== C &&
                        r.setState({ currentPlacement: b.placement });
                    },
                  });
                }
                if (l) {
                  var y = R.undefined(p.offset) ? 0 : p.offset;
                  new v1(this.target, this.wrapperRef, {
                    placement: p.placement || m,
                    modifiers: {
                      arrow: { enabled: !1 },
                      offset: { offset: "0, ".concat(y, "px") },
                      flip: { enabled: !1 },
                    },
                    onCreate: function (b) {
                      (r.wrapperPopper = b),
                        r._isMounted && r.setState({ statusWrapper: te.IDLE }),
                        c(b, "wrapper"),
                        m !== b.placement &&
                          setTimeout(function () {
                            b.instance.update();
                          }, 1);
                    },
                  });
                }
              },
            },
            {
              key: "rebuildPopper",
              value: function () {
                var r = this;
                this.floaterRefInterval = setInterval(function () {
                  var i;
                  (i = r.floaterRef) !== null &&
                    i !== void 0 &&
                    i.isConnected &&
                    (clearInterval(r.floaterRefInterval),
                    r.setState({ needsUpdate: !1 }),
                    r.initPopper());
                }, 50);
              },
            },
            {
              key: "changeWrapperPosition",
              value: function (r) {
                var i = r.target,
                  l = r.wrapperOptions;
                this.setState({ positionWrapper: l.position && !!i });
              },
            },
            {
              key: "toggle",
              value: function (r) {
                var i = this.state.status,
                  l = i === te.OPEN ? te.CLOSING : te.OPENING;
                R.undefined(r) || (l = r), this.setState({ status: l });
              },
            },
            {
              key: "debug",
              get: function () {
                var r = this.props.debug;
                return r || (ut() && "ReactFloaterDebug" in window && !!window.ReactFloaterDebug);
              },
            },
            {
              key: "event",
              get: function () {
                var r = this.props,
                  i = r.disableHoverToClick,
                  l = r.event;
                return l === "hover" && xi() && !i ? "click" : l;
              },
            },
            {
              key: "options",
              get: function () {
                var r = this.props.options;
                return (0, ol.default)(Qh, r || {});
              },
            },
            {
              key: "styles",
              get: function () {
                var r = this,
                  i = this.state,
                  l = i.status,
                  o = i.positionWrapper,
                  s = i.statusWrapper,
                  c = this.props.styles,
                  d = (0, ol.default)(s7(c), c);
                if (o) {
                  var u;
                  [te.IDLE].indexOf(l) === -1 || [te.IDLE].indexOf(s) === -1
                    ? (u = d.wrapperPosition)
                    : (u = this.wrapperPopper.styles),
                    (d.wrapper = ge(ge({}, d.wrapper), u));
                }
                if (this.target) {
                  var m = window.getComputedStyle(this.target);
                  this.wrapperStyles
                    ? (d.wrapper = ge(ge({}, d.wrapper), this.wrapperStyles))
                    : ["relative", "static"].indexOf(m.position) === -1 &&
                      ((this.wrapperStyles = {}),
                      o ||
                        (d7.forEach(function (p) {
                          r.wrapperStyles[p] = m[p];
                        }),
                        (d.wrapper = ge(ge({}, d.wrapper), this.wrapperStyles)),
                        (this.target.style.position = "relative"),
                        (this.target.style.top = "auto"),
                        (this.target.style.right = "auto"),
                        (this.target.style.bottom = "auto"),
                        (this.target.style.left = "auto")));
                }
                return d;
              },
            },
            {
              key: "target",
              get: function () {
                if (!ut()) return null;
                var r = this.props.target;
                return r
                  ? R.domElement(r)
                    ? r
                    : document.querySelector(r)
                  : this.childRef || this.wrapperRef;
              },
            },
            {
              key: "render",
              value: function () {
                var r = this.state,
                  i = r.currentPlacement,
                  l = r.positionWrapper,
                  o = r.status,
                  s = this.props,
                  c = s.children,
                  d = s.component,
                  u = s.content,
                  m = s.disableAnimation,
                  p = s.footer,
                  f = s.hideArrow,
                  g = s.id,
                  v = s.open,
                  k = s.showCloseButton,
                  E = s.style,
                  h = s.target,
                  y = s.title,
                  b = a.createElement(
                    j0,
                    {
                      handleClick: this.handleClick,
                      handleMouseEnter: this.handleMouseEnter,
                      handleMouseLeave: this.handleMouseLeave,
                      setChildRef: this.setChildRef,
                      setWrapperRef: this.setWrapperRef,
                      style: E,
                      styles: this.styles.wrapper,
                    },
                    c
                  ),
                  C = {};
                return (
                  l ? (C.wrapperInPortal = b) : (C.wrapperAsChildren = b),
                  a.createElement(
                    "span",
                    null,
                    a.createElement(
                      B0,
                      {
                        hasChildren: !!c,
                        id: g,
                        placement: i,
                        setRef: this.setFloaterRef,
                        target: h,
                        zIndex: this.styles.options.zIndex,
                      },
                      a.createElement(H0, {
                        component: d,
                        content: u,
                        disableAnimation: m,
                        footer: p,
                        handleClick: this.handleClick,
                        hideArrow: f || i === "center",
                        open: v,
                        placement: i,
                        positionWrapper: l,
                        setArrowRef: this.setArrowRef,
                        setFloaterRef: this.setFloaterRef,
                        showCloseButton: k,
                        status: o,
                        styles: this.styles,
                        title: y,
                      }),
                      C.wrapperInPortal
                    ),
                    C.wrapperAsChildren
                  )
                );
              },
            },
          ]),
          n
        );
      })(a.Component);
    Fe($l, "propTypes", {
      autoOpen: N.default.bool,
      callback: N.default.func,
      children: N.default.node,
      component: _1(N.default.oneOfType([N.default.func, N.default.element]), function (e) {
        return !e.content;
      }),
      content: _1(N.default.node, function (e) {
        return !e.component;
      }),
      debug: N.default.bool,
      disableAnimation: N.default.bool,
      disableFlip: N.default.bool,
      disableHoverToClick: N.default.bool,
      event: N.default.oneOf(["hover", "click"]),
      eventDelay: N.default.number,
      footer: N.default.node,
      getPopper: N.default.func,
      hideArrow: N.default.bool,
      id: N.default.oneOfType([N.default.string, N.default.number]),
      offset: N.default.number,
      open: N.default.bool,
      options: N.default.object,
      placement: N.default.oneOf([
        "top",
        "top-start",
        "top-end",
        "bottom",
        "bottom-start",
        "bottom-end",
        "left",
        "left-start",
        "left-end",
        "right",
        "right-start",
        "right-end",
        "auto",
        "center",
      ]),
      showCloseButton: N.default.bool,
      style: N.default.object,
      styles: N.default.object,
      target: N.default.oneOfType([N.default.object, N.default.string]),
      title: N.default.node,
      wrapperOptions: N.default.shape({
        offset: N.default.number,
        placement: N.default.oneOf([
          "top",
          "top-start",
          "top-end",
          "bottom",
          "bottom-start",
          "bottom-end",
          "left",
          "left-start",
          "left-end",
          "right",
          "right-start",
          "right-end",
          "auto",
        ]),
        position: N.default.bool,
      }),
    });
    Fe($l, "defaultProps", {
      autoOpen: !1,
      callback: M1,
      debug: !1,
      disableAnimation: !1,
      disableFlip: !1,
      disableHoverToClick: !1,
      event: "click",
      eventDelay: 0.4,
      getPopper: M1,
      hideArrow: !1,
      offset: 15,
      placement: "bottom",
      showCloseButton: !1,
      styles: {},
      target: null,
      wrapperOptions: { position: !1 },
    });
    var u7 = et(R5(), 1),
      m7 = Object.defineProperty,
      p7 = (e, t, n) =>
        t in e
          ? m7(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
          : (e[t] = n),
      L = (e, t, n) => (p7(e, typeof t != "symbol" ? t + "" : t, n), n),
      de = {
        INIT: "init",
        START: "start",
        STOP: "stop",
        RESET: "reset",
        PREV: "prev",
        NEXT: "next",
        GO: "go",
        CLOSE: "close",
        SKIP: "skip",
        UPDATE: "update",
      },
      nt = {
        TOUR_START: "tour:start",
        STEP_BEFORE: "step:before",
        BEACON: "beacon",
        TOOLTIP: "tooltip",
        STEP_AFTER: "step:after",
        TOUR_END: "tour:end",
        TOUR_STATUS: "tour:status",
        TARGET_NOT_FOUND: "error:target_not_found",
        ERROR: "error",
      },
      q = {
        INIT: "init",
        READY: "ready",
        BEACON: "beacon",
        TOOLTIP: "tooltip",
        COMPLETE: "complete",
        ERROR: "error",
      },
      J = {
        IDLE: "idle",
        READY: "ready",
        WAITING: "waiting",
        RUNNING: "running",
        PAUSED: "paused",
        SKIPPED: "skipped",
        FINISHED: "finished",
        ERROR: "error",
      };
    function It() {
      return !!(typeof window < "u" && window.document && window.document.createElement);
    }
    function z0(e) {
      return e ? e.getBoundingClientRect() : null;
    }
    function h7() {
      let { body: e, documentElement: t } = document;
      return !e || !t
        ? 0
        : Math.max(e.scrollHeight, e.offsetHeight, t.clientHeight, t.scrollHeight, t.offsetHeight);
    }
    function Pt(e) {
      return typeof e == "string" ? document.querySelector(e) : e;
    }
    function f7(e) {
      return !e || e.nodeType !== 1 ? null : getComputedStyle(e);
    }
    function zr(e, t, n) {
      if (!e) return qt();
      let r = (0, v0.default)(e);
      if (r) {
        if (r.isSameNode(qt())) return n ? document : qt();
        if (!(r.scrollHeight > r.offsetHeight) && !t) return (r.style.overflow = "initial"), qt();
      }
      return r;
    }
    function Ur(e, t) {
      if (!e) return !1;
      let n = zr(e, t);
      return n ? !n.isSameNode(qt()) : !1;
    }
    function g7(e) {
      return e.offsetParent !== document.body;
    }
    function va(e, t = "fixed") {
      if (!e || !(e instanceof HTMLElement)) return !1;
      let { nodeName: n } = e,
        r = f7(e);
      return n === "BODY" || n === "HTML"
        ? !1
        : r && r.position === t
          ? !0
          : e.parentNode
            ? va(e.parentNode, t)
            : !1;
    }
    function v7(e) {
      var t;
      if (!e) return !1;
      let n = e;
      for (; n && n !== document.body; ) {
        if (n instanceof HTMLElement) {
          let { display: r, visibility: i } = getComputedStyle(n);
          if (r === "none" || i === "hidden") return !1;
        }
        n = (t = n.parentElement) != null ? t : null;
      }
      return !0;
    }
    function y7(e, t, n) {
      var r;
      let i = z0(e),
        l = zr(e, n),
        o = Ur(e, n),
        s = 0,
        c = (r = i?.top) != null ? r : 0;
      return (
        l instanceof HTMLElement &&
          ((s = l.scrollTop),
          !o && !va(e) && (c += s),
          l.isSameNode(qt()) || (c += qt().scrollTop)),
        Math.floor(c - t)
      );
    }
    function E7(e, t, n) {
      var r;
      if (!e) return 0;
      let { offsetTop: i = 0, scrollTop: l = 0 } = (r = (0, v0.default)(e)) != null ? r : {},
        o = e.getBoundingClientRect().top + l;
      i && (Ur(e, n) || g7(e)) && (o -= i);
      let s = Math.floor(o - t);
      return s < 0 ? 0 : s;
    }
    function qt() {
      var e;
      return (e = document.scrollingElement) != null ? e : document.documentElement;
    }
    function b7(e, t) {
      let { duration: n, element: r } = t;
      return new Promise((i, l) => {
        let { scrollTop: o } = r,
          s = e > o ? e - o : o - e;
        U3.default.top(r, e, { duration: s < 100 ? 50 : n }, (c) =>
          c && c.message !== "Element already at target scroll position" ? l(c) : i()
        );
      });
    }
    var zn = In !== void 0;
    function U0(e = navigator.userAgent) {
      let t = e;
      return (
        typeof window > "u"
          ? (t = "node")
          : document.documentMode
            ? (t = "ie")
            : /Edge/.test(e)
              ? (t = "edge")
              : window.opera || e.includes(" OPR/")
                ? (t = "opera")
                : typeof window.InstallTrigger < "u"
                  ? (t = "firefox")
                  : window.chrome
                    ? (t = "chrome")
                    : /(Version\/([\d._]+).*Safari|CriOS|FxiOS| Mobile\/)/.test(e) &&
                      (t = "safari"),
        t
      );
    }
    function Zt(e) {
      let t = [],
        n = (r) => {
          if (typeof r == "string" || typeof r == "number") t.push(r);
          else if (Array.isArray(r)) r.forEach((i) => n(i));
          else if (qr(r)) {
            let { children: i } = r.props;
            Array.isArray(i) ? i.forEach((l) => n(l)) : n(i);
          }
        };
      return n(e), t.join(" ").trim();
    }
    function k7(e, t) {
      return !F.plainObject(e) || !F.array(t) ? !1 : Object.keys(e).every((n) => t.includes(n));
    }
    function w7(e) {
      let t = /^#?([\da-f])([\da-f])([\da-f])$/i,
        n = e.replace(t, (i, l, o, s) => l + l + o + o + s + s),
        r = /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(n);
      return r ? [parseInt(r[1], 16), parseInt(r[2], 16), parseInt(r[3], 16)] : [];
    }
    function T1(e) {
      return e.disableBeacon || e.placement === "center";
    }
    function A1() {
      return !["chrome", "safari", "firefox", "opera"].includes(U0());
    }
    function tn({ data: e, debug: t = !1, title: n, warn: r = !1 }) {
      let i = r ? console.warn || console.error : console.log;
      t &&
        (n && e
          ? (console.groupCollapsed(
              `%creact-joyride: ${n}`,
              "color: #ff0044; font-weight: bold; font-size: 12px;"
            ),
            Array.isArray(e)
              ? e.forEach((l) => {
                  F.plainObject(l) && l.key
                    ? i.apply(console, [l.key, l.value])
                    : i.apply(console, [l]);
                })
              : i.apply(console, [e]),
            console.groupEnd())
          : console.error("Missing title or data props"));
    }
    function C7(e) {
      let {
        isFirstStep: t,
        lifecycle: n,
        previousLifecycle: r,
        scrollToFirstStep: i,
        step: l,
        target: o,
      } = e;
      return (
        !l.disableScrolling &&
        (!t || i || n === q.TOOLTIP) &&
        l.placement !== "center" &&
        (!l.isFixed || !va(o)) &&
        r !== n &&
        [q.BEACON, q.TOOLTIP].includes(n)
      );
    }
    var S7 = {
        options: { preventOverflow: { boundariesElement: "scrollParent" } },
        wrapperOptions: { offset: -18, position: !0 },
      },
      $0 = {
        back: "Back",
        close: "Close",
        last: "Last",
        next: "Next",
        open: "Open the dialog",
        skip: "Skip",
      },
      x7 = {
        event: "click",
        placement: "bottom",
        offset: 10,
        disableBeacon: !1,
        disableCloseOnEsc: !1,
        disableOverlay: !1,
        disableOverlayClose: !1,
        disableScrollParentFix: !1,
        disableScrolling: !1,
        hideBackButton: !1,
        hideCloseButton: !1,
        hideFooter: !1,
        isFixed: !1,
        locale: $0,
        showProgress: !1,
        showSkipButton: !1,
        spotlightClicks: !1,
        spotlightPadding: 10,
      },
      N7 = {
        continuous: !1,
        debug: !1,
        disableCloseOnEsc: !1,
        disableOverlay: !1,
        disableOverlayClose: !1,
        disableScrolling: !1,
        disableScrollParentFix: !1,
        getHelpers: void 0,
        hideBackButton: !1,
        run: !0,
        scrollOffset: 20,
        scrollDuration: 300,
        scrollToFirstStep: !1,
        showSkipButton: !1,
        showProgress: !1,
        spotlightClicks: !1,
        spotlightPadding: 10,
        steps: [],
      },
      _7 = {
        arrowColor: "#fff",
        backgroundColor: "#fff",
        beaconSize: 36,
        overlayColor: "rgba(0, 0, 0, 0.5)",
        primaryColor: "#f04",
        spotlightShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
        textColor: "#333",
        width: 380,
        zIndex: 100,
      },
      Un = {
        backgroundColor: "transparent",
        border: 0,
        borderRadius: 0,
        color: "#555",
        cursor: "pointer",
        fontSize: 16,
        lineHeight: 1,
        padding: 8,
        WebkitAppearance: "none",
      },
      F1 = { borderRadius: 4, position: "absolute" };
    function M7(e, t) {
      let n = (0, wi.default)(e ?? {}, t ?? {}),
        r = (0, wi.default)(_7, n.options || {}),
        { width: i } = r;
      window.innerWidth > 480 && (i = 380),
        "width" in r &&
          (i =
            typeof r.width == "number" && window.innerWidth < r.width
              ? window.innerWidth - 30
              : r.width);
      let l = {
          bottom: 0,
          left: 0,
          overflow: "hidden",
          position: "absolute",
          right: 0,
          top: 0,
          zIndex: r.zIndex,
        },
        o = {
          beacon: {
            ...Un,
            display: "inline-block",
            height: r.beaconSize,
            position: "relative",
            width: r.beaconSize,
            zIndex: r.zIndex,
          },
          beaconInner: {
            animation: "joyride-beacon-inner 1.2s infinite ease-in-out",
            backgroundColor: r.primaryColor,
            borderRadius: "50%",
            display: "block",
            height: "50%",
            left: "50%",
            opacity: 0.7,
            position: "absolute",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "50%",
          },
          beaconOuter: {
            animation: "joyride-beacon-outer 1.2s infinite ease-in-out",
            backgroundColor: `rgba(${w7(r.primaryColor).join(",")}, 0.2)`,
            border: `2px solid ${r.primaryColor}`,
            borderRadius: "50%",
            boxSizing: "border-box",
            display: "block",
            height: "100%",
            left: 0,
            opacity: 0.9,
            position: "absolute",
            top: 0,
            transformOrigin: "center",
            width: "100%",
          },
          tooltip: {
            backgroundColor: r.backgroundColor,
            borderRadius: 5,
            boxSizing: "border-box",
            color: r.textColor,
            fontSize: 16,
            maxWidth: "100%",
            padding: 15,
            position: "relative",
            width: i,
          },
          tooltipContainer: { lineHeight: 1.4, textAlign: "center" },
          tooltipTitle: { fontSize: 18, margin: 0 },
          tooltipContent: { padding: "20px 10px" },
          tooltipFooter: {
            alignItems: "center",
            display: "flex",
            justifyContent: "flex-end",
            marginTop: 15,
          },
          tooltipFooterSpacer: { flex: 1 },
          buttonNext: { ...Un, backgroundColor: r.primaryColor, borderRadius: 4, color: "#fff" },
          buttonBack: { ...Un, color: r.primaryColor, marginLeft: "auto", marginRight: 5 },
          buttonClose: {
            ...Un,
            color: r.textColor,
            height: 14,
            padding: 15,
            position: "absolute",
            right: 0,
            top: 0,
            width: 14,
          },
          buttonSkip: { ...Un, color: r.textColor, fontSize: 14 },
          overlay: { ...l, backgroundColor: r.overlayColor, mixBlendMode: "hard-light" },
          overlayLegacy: { ...l },
          overlayLegacyCenter: { ...l, backgroundColor: r.overlayColor },
          spotlight: { ...F1, backgroundColor: "gray" },
          spotlightLegacy: {
            ...F1,
            boxShadow: `0 0 0 9999px ${r.overlayColor}, ${r.spotlightShadow}`,
          },
          floaterStyles: { arrow: { color: r.arrowColor }, options: { zIndex: r.zIndex + 100 } },
          options: r,
        };
      return (0, wi.default)(o, n);
    }
    function T7(e) {
      return W3(
        e,
        "beaconComponent",
        "disableCloseOnEsc",
        "disableOverlay",
        "disableOverlayClose",
        "disableScrolling",
        "disableScrollParentFix",
        "floaterProps",
        "hideBackButton",
        "hideCloseButton",
        "locale",
        "showProgress",
        "showSkipButton",
        "spotlightClicks",
        "spotlightPadding",
        "styles",
        "tooltipComponent"
      );
    }
    function $n(e, t) {
      var n, r, i, l, o, s;
      let c = e ?? {},
        d = ja.default.all([x7, T7(t), c], { isMergeableObject: F.plainObject }),
        u = M7(t.styles, d.styles),
        m = Ur(Pt(d.target), d.disableScrollParentFix),
        p = ja.default.all([
          S7,
          (n = t.floaterProps) != null ? n : {},
          (r = d.floaterProps) != null ? r : {},
        ]);
      return (
        (p.offset = d.offset),
        (p.styles = (0, ja.default)((i = p.styles) != null ? i : {}, u.floaterStyles)),
        (p.offset +=
          (o = (l = t.spotlightPadding) != null ? l : d.spotlightPadding) != null ? o : 0),
        d.placementBeacon && p.wrapperOptions && (p.wrapperOptions.placement = d.placementBeacon),
        m && p.options.preventOverflow && (p.options.preventOverflow.boundariesElement = "window"),
        {
          ...d,
          locale: ja.default.all([$0, (s = t.locale) != null ? s : {}, d.locale || {}]),
          floaterProps: p,
          styles: $3(u, "floaterStyles"),
        }
      );
    }
    function W0(e, t = !1) {
      return F.plainObject(e)
        ? e.target
          ? !0
          : (tn({
              title: "validateStep",
              data: "target is missing from the step",
              warn: !0,
              debug: t,
            }),
            !1)
        : (tn({ title: "validateStep", data: "step must be an object", warn: !0, debug: t }), !1);
    }
    function O1(e, t = !1) {
      return F.array(e)
        ? e.every((n) => W0(n, t))
        : (tn({ title: "validateSteps", data: "steps must be an array", warn: !0, debug: t }), !1);
    }
    var A7 = {
        action: "init",
        controlled: !1,
        index: 0,
        lifecycle: q.INIT,
        size: 0,
        status: J.IDLE,
      },
      L1 = ["action", "index", "lifecycle", "status"],
      F7 = class {
        constructor(e) {
          L(this, "beaconPopper"),
            L(this, "tooltipPopper"),
            L(this, "data", new Map()),
            L(this, "listener"),
            L(this, "store", new Map()),
            L(this, "addListener", (i) => {
              this.listener = i;
            }),
            L(this, "setSteps", (i) => {
              let { size: l, status: o } = this.getState(),
                s = { size: i.length, status: o };
              this.data.set("steps", i),
                o === J.WAITING && !l && i.length && (s.status = J.RUNNING),
                this.setState(s);
            }),
            L(this, "getPopper", (i) => (i === "beacon" ? this.beaconPopper : this.tooltipPopper)),
            L(this, "setPopper", (i, l) => {
              i === "beacon" ? (this.beaconPopper = l) : (this.tooltipPopper = l);
            }),
            L(this, "cleanupPoppers", () => {
              (this.beaconPopper = null), (this.tooltipPopper = null);
            }),
            L(this, "close", () => {
              let { index: i, status: l } = this.getState();
              l === J.RUNNING &&
                this.setState({ ...this.getNextState({ action: de.CLOSE, index: i + 1 }) });
            }),
            L(this, "go", (i) => {
              let { controlled: l, status: o } = this.getState();
              if (l || o !== J.RUNNING) return;
              let s = this.getSteps()[i];
              this.setState({
                ...this.getNextState({ action: de.GO, index: i }),
                status: s ? o : J.FINISHED,
              });
            }),
            L(this, "info", () => this.getState()),
            L(this, "next", () => {
              let { index: i, status: l } = this.getState();
              l === J.RUNNING &&
                this.setState(this.getNextState({ action: de.NEXT, index: i + 1 }));
            }),
            L(this, "open", () => {
              let { status: i } = this.getState();
              i === J.RUNNING &&
                this.setState({
                  ...this.getNextState({ action: de.UPDATE, lifecycle: q.TOOLTIP }),
                });
            }),
            L(this, "prev", () => {
              let { index: i, status: l } = this.getState();
              l === J.RUNNING &&
                this.setState({ ...this.getNextState({ action: de.PREV, index: i - 1 }) });
            }),
            L(this, "reset", (i = !1) => {
              let { controlled: l } = this.getState();
              l ||
                this.setState({
                  ...this.getNextState({ action: de.RESET, index: 0 }),
                  status: i ? J.RUNNING : J.READY,
                });
            }),
            L(this, "skip", () => {
              let { status: i } = this.getState();
              i === J.RUNNING &&
                this.setState({ action: de.SKIP, lifecycle: q.INIT, status: J.SKIPPED });
            }),
            L(this, "start", (i) => {
              let { index: l, size: o } = this.getState();
              this.setState({
                ...this.getNextState({ action: de.START, index: F.number(i) ? i : l }, !0),
                status: o ? J.RUNNING : J.WAITING,
              });
            }),
            L(this, "stop", (i = !1) => {
              let { index: l, status: o } = this.getState();
              [J.FINISHED, J.SKIPPED].includes(o) ||
                this.setState({
                  ...this.getNextState({ action: de.STOP, index: l + (i ? 1 : 0) }),
                  status: J.PAUSED,
                });
            }),
            L(this, "update", (i) => {
              var l;
              if (!k7(i, L1)) throw new Error(`State is not valid. Valid keys: ${L1.join(", ")}`);
              this.setState({
                ...this.getNextState(
                  { ...this.getState(), ...i, action: (l = i.action) != null ? l : de.UPDATE },
                  !0
                ),
              });
            });
          let { continuous: t = !1, stepIndex: n, steps: r = [] } = e ?? {};
          this.setState(
            {
              action: de.INIT,
              controlled: F.number(n),
              continuous: t,
              index: F.number(n) ? n : 0,
              lifecycle: q.INIT,
              status: r.length ? J.READY : J.IDLE,
            },
            !0
          ),
            (this.beaconPopper = null),
            (this.tooltipPopper = null),
            (this.listener = null),
            this.setSteps(r);
        }
        getState() {
          return this.store.size
            ? {
                action: this.store.get("action") || "",
                controlled: this.store.get("controlled") || !1,
                index: parseInt(this.store.get("index"), 10),
                lifecycle: this.store.get("lifecycle") || "",
                size: this.store.get("size") || 0,
                status: this.store.get("status") || "",
              }
            : { ...A7 };
        }
        getNextState(e, t = !1) {
          var n, r, i, l;
          let { action: o, controlled: s, index: c, size: d, status: u } = this.getState(),
            m = F.number(e.index) ? e.index : c,
            p = s && !t ? c : Math.min(Math.max(m, 0), d);
          return {
            action: (n = e.action) != null ? n : o,
            controlled: s,
            index: p,
            lifecycle: (r = e.lifecycle) != null ? r : q.INIT,
            size: (i = e.size) != null ? i : d,
            status: p === d ? J.FINISHED : (l = e.status) != null ? l : u,
          };
        }
        getSteps() {
          let e = this.data.get("steps");
          return Array.isArray(e) ? e : [];
        }
        hasUpdatedState(e) {
          let t = JSON.stringify(e),
            n = JSON.stringify(this.getState());
          return t !== n;
        }
        setState(e, t = !1) {
          let n = this.getState(),
            { action: r, index: i, lifecycle: l, size: o, status: s } = { ...n, ...e };
          this.store.set("action", r),
            this.store.set("index", i),
            this.store.set("lifecycle", l),
            this.store.set("size", o),
            this.store.set("status", s),
            t &&
              (this.store.set("controlled", e.controlled),
              this.store.set("continuous", e.continuous)),
            this.listener && this.hasUpdatedState(n) && this.listener(this.getState());
        }
        getHelpers() {
          return {
            close: this.close,
            go: this.go,
            info: this.info,
            next: this.next,
            open: this.open,
            prev: this.prev,
            reset: this.reset,
            skip: this.skip,
          };
        }
      };
    function O7(e) {
      return new F7(e);
    }
    var L7 = class {
        constructor(e, t) {
          if (
            (L(this, "element"),
            L(this, "options"),
            L(this, "canBeTabbed", (n) => {
              let { tabIndex: r } = n;
              return r === null || r < 0 ? !1 : this.canHaveFocus(n);
            }),
            L(this, "canHaveFocus", (n) => {
              let r = /input|select|textarea|button|object/,
                i = n.nodeName.toLowerCase();
              return (
                ((r.test(i) && !n.getAttribute("disabled")) ||
                  (i === "a" && !!n.getAttribute("href"))) &&
                this.isVisible(n)
              );
            }),
            L(this, "findValidTabElements", () =>
              [].slice.call(this.element.querySelectorAll("*"), 0).filter(this.canBeTabbed)
            ),
            L(this, "handleKeyDown", (n) => {
              let { code: r = "Tab" } = this.options;
              n.code === r && this.interceptTab(n);
            }),
            L(this, "interceptTab", (n) => {
              n.preventDefault();
              let r = this.findValidTabElements(),
                { shiftKey: i } = n;
              if (!r.length) return;
              let l = document.activeElement ? r.indexOf(document.activeElement) : 0;
              l === -1 || (!i && l + 1 === r.length)
                ? (l = 0)
                : i && l === 0
                  ? (l = r.length - 1)
                  : (l += i ? -1 : 1),
                r[l].focus();
            }),
            L(this, "isHidden", (n) => {
              let r = n.offsetWidth <= 0 && n.offsetHeight <= 0,
                i = window.getComputedStyle(n);
              return r && !n.innerHTML
                ? !0
                : (r && i.getPropertyValue("overflow") !== "visible") ||
                    i.getPropertyValue("display") === "none";
            }),
            L(this, "isVisible", (n) => {
              let r = n;
              for (; r; )
                if (r instanceof HTMLElement) {
                  if (r === document.body) break;
                  if (this.isHidden(r)) return !1;
                  r = r.parentNode;
                }
              return !0;
            }),
            L(this, "removeScope", () => {
              window.removeEventListener("keydown", this.handleKeyDown);
            }),
            L(this, "checkFocus", (n) => {
              document.activeElement !== n &&
                (n.focus(), window.requestAnimationFrame(() => this.checkFocus(n)));
            }),
            L(this, "setFocus", () => {
              let { selector: n } = this.options;
              if (!n) return;
              let r = this.element.querySelector(n);
              r && window.requestAnimationFrame(() => this.checkFocus(r));
            }),
            !(e instanceof HTMLElement))
          )
            throw new TypeError("Invalid parameter: element must be an HTMLElement");
          (this.element = e),
            (this.options = t),
            window.addEventListener("keydown", this.handleKeyDown, !1),
            this.setFocus();
        }
      },
      R7 = class extends At {
        constructor(e) {
          if (
            (super(e),
            L(this, "beacon", null),
            L(this, "setBeaconRef", (i) => {
              this.beacon = i;
            }),
            e.beaconComponent)
          )
            return;
          let t = document.head || document.getElementsByTagName("head")[0],
            n = document.createElement("style");
          (n.id = "joyride-beacon-animation"),
            e.nonce && n.setAttribute("nonce", e.nonce),
            n.appendChild(
              document.createTextNode(`
        @keyframes joyride-beacon-inner {
          20% {
            opacity: 0.9;
          }
        
          90% {
            opacity: 0.7;
          }
        }
        
        @keyframes joyride-beacon-outer {
          0% {
            transform: scale(1);
          }
        
          45% {
            opacity: 0.7;
            transform: scale(0.75);
          }
        
          100% {
            opacity: 0.9;
            transform: scale(1);
          }
        }
      `)
            ),
            t.appendChild(n);
        }
        componentDidMount() {
          let { shouldFocus: e } = this.props;
          setTimeout(() => {
            F.domElement(this.beacon) && e && this.beacon.focus();
          }, 0);
        }
        componentWillUnmount() {
          let e = document.getElementById("joyride-beacon-animation");
          e?.parentNode && e.parentNode.removeChild(e);
        }
        render() {
          let {
              beaconComponent: e,
              continuous: t,
              index: n,
              isLastStep: r,
              locale: i,
              onClickOrHover: l,
              size: o,
              step: s,
              styles: c,
            } = this.props,
            d = F.string(i.open) ? i.open : (0, u7.default)(i.open),
            u = { "aria-label": d, onClick: l, onMouseEnter: l, ref: this.setBeaconRef, title: d },
            m;
          return (
            e
              ? (m = S(e, { continuous: t, index: n, isLastStep: r, size: o, step: s, ...u }))
              : (m = S(
                  "button",
                  {
                    key: "JoyrideBeacon",
                    className: "react-joyride__beacon",
                    "data-test-id": "button-beacon",
                    style: c.beacon,
                    type: "button",
                    ...u,
                  },
                  S("span", { style: c.beaconInner }),
                  S("span", { style: c.beaconOuter })
                )),
            m
          );
        }
      };
    function I7({ styles: e }) {
      return S("div", {
        key: "JoyrideSpotlight",
        className: "react-joyride__spotlight",
        "data-test-id": "spotlight",
        style: e,
      });
    }
    var Z7 = I7,
      B7 = class extends At {
        constructor() {
          super(...arguments),
            L(this, "isActive", !1),
            L(this, "resizeTimeout"),
            L(this, "scrollTimeout"),
            L(this, "scrollParent"),
            L(this, "state", { isScrolling: !1, mouseOverSpotlight: !1, showSpotlight: !0 }),
            L(this, "handleMouseMove", (e) => {
              let { mouseOverSpotlight: t } = this.state,
                { height: n, left: r, position: i, top: l, width: o } = this.spotlightStyles,
                s = i === "fixed" ? e.clientY : e.pageY,
                c = i === "fixed" ? e.clientX : e.pageX,
                d = s >= l && s <= l + n,
                u = c >= r && c <= r + o && d;
              u !== t && this.updateState({ mouseOverSpotlight: u });
            }),
            L(this, "handleScroll", () => {
              let { target: e } = this.props,
                t = Pt(e);
              if (this.scrollParent !== document) {
                let { isScrolling: n } = this.state;
                n || this.updateState({ isScrolling: !0, showSpotlight: !1 }),
                  clearTimeout(this.scrollTimeout),
                  (this.scrollTimeout = window.setTimeout(() => {
                    this.updateState({ isScrolling: !1, showSpotlight: !0 });
                  }, 50));
              } else va(t, "sticky") && this.updateState({});
            }),
            L(this, "handleResize", () => {
              clearTimeout(this.resizeTimeout),
                (this.resizeTimeout = window.setTimeout(() => {
                  this.isActive && this.forceUpdate();
                }, 100));
            });
        }
        componentDidMount() {
          let {
              debug: e,
              disableScrolling: t,
              disableScrollParentFix: n = !1,
              target: r,
            } = this.props,
            i = Pt(r);
          (this.scrollParent = zr(i ?? document.body, n, !0)),
            (this.isActive = !0),
            window.addEventListener("resize", this.handleResize);
        }
        componentDidUpdate(e) {
          var t;
          let { lifecycle: n, spotlightClicks: r } = this.props,
            { changed: i } = wr(e, this.props);
          i("lifecycle", q.TOOLTIP) &&
            ((t = this.scrollParent) == null ||
              t.addEventListener("scroll", this.handleScroll, { passive: !0 }),
            setTimeout(() => {
              let { isScrolling: l } = this.state;
              l || this.updateState({ showSpotlight: !0 });
            }, 100)),
            (i("spotlightClicks") || i("disableOverlay") || i("lifecycle")) &&
              (r && n === q.TOOLTIP
                ? window.addEventListener("mousemove", this.handleMouseMove, !1)
                : n !== q.TOOLTIP && window.removeEventListener("mousemove", this.handleMouseMove));
        }
        componentWillUnmount() {
          var e;
          (this.isActive = !1),
            window.removeEventListener("mousemove", this.handleMouseMove),
            window.removeEventListener("resize", this.handleResize),
            clearTimeout(this.resizeTimeout),
            clearTimeout(this.scrollTimeout),
            (e = this.scrollParent) == null || e.removeEventListener("scroll", this.handleScroll);
        }
        get spotlightStyles() {
          var e, t, n;
          let { showSpotlight: r } = this.state,
            {
              disableScrollParentFix: i = !1,
              spotlightClicks: l,
              spotlightPadding: o = 0,
              styles: s,
              target: c,
            } = this.props,
            d = Pt(c),
            u = z0(d),
            m = va(d),
            p = y7(d, o, i);
          return {
            ...(A1() ? s.spotlightLegacy : s.spotlight),
            height: Math.round(((e = u?.height) != null ? e : 0) + o * 2),
            left: Math.round(((t = u?.left) != null ? t : 0) - o),
            opacity: r ? 1 : 0,
            pointerEvents: l ? "none" : "auto",
            position: m ? "fixed" : "absolute",
            top: p,
            transition: "opacity 0.2s",
            width: Math.round(((n = u?.width) != null ? n : 0) + o * 2),
          };
        }
        updateState(e) {
          this.isActive && this.setState((t) => ({ ...t, ...e }));
        }
        render() {
          let { mouseOverSpotlight: e, showSpotlight: t } = this.state,
            {
              disableOverlay: n,
              disableOverlayClose: r,
              lifecycle: i,
              onClickOverlay: l,
              placement: o,
              styles: s,
            } = this.props;
          if (n || i !== q.TOOLTIP) return null;
          let c = s.overlay;
          A1() && (c = o === "center" ? s.overlayLegacyCenter : s.overlayLegacy);
          let d = {
              cursor: r ? "default" : "pointer",
              height: h7(),
              pointerEvents: e ? "none" : "auto",
              ...c,
            },
            u = o !== "center" && t && S(Z7, { styles: this.spotlightStyles });
          if (U0() === "safari") {
            let { mixBlendMode: m, zIndex: p, ...f } = d;
            (u = S("div", { style: { ...f } }, u)), delete d.backgroundColor;
          }
          return S(
            "div",
            {
              className: "react-joyride__overlay",
              "data-test-id": "overlay",
              onClick: l,
              role: "presentation",
              style: d,
            },
            u
          );
        }
      },
      P7 = class extends At {
        constructor() {
          super(...arguments), L(this, "node", null);
        }
        componentDidMount() {
          let { id: e } = this.props;
          It() &&
            ((this.node = document.createElement("div")),
            (this.node.id = e),
            document.body.appendChild(this.node),
            zn || this.renderReact15());
        }
        componentDidUpdate() {
          It() && (zn || this.renderReact15());
        }
        componentWillUnmount() {
          !It() ||
            !this.node ||
            (zn || uo(this.node),
            this.node.parentNode === document.body &&
              (document.body.removeChild(this.node), (this.node = null)));
        }
        renderReact15() {
          if (!It()) return;
          let { children: e } = this.props;
          this.node && mo(this, e, this.node);
        }
        renderReact16() {
          if (!It() || !zn) return null;
          let { children: e } = this.props;
          return this.node ? In(e, this.node) : null;
        }
        render() {
          return zn ? this.renderReact16() : null;
        }
      };
    function V7({ styles: e, ...t }) {
      let { color: n, height: r, width: i, ...l } = e;
      return a.createElement(
        "button",
        { style: l, type: "button", ...t },
        a.createElement(
          "svg",
          {
            height: typeof r == "number" ? `${r}px` : r,
            preserveAspectRatio: "xMidYMid",
            version: "1.1",
            viewBox: "0 0 18 18",
            width: typeof i == "number" ? `${i}px` : i,
            xmlns: "http://www.w3.org/2000/svg",
          },
          a.createElement(
            "g",
            null,
            a.createElement("path", {
              d: "M8.13911129,9.00268191 L0.171521827,17.0258467 C-0.0498027049,17.248715 -0.0498027049,17.6098394 0.171521827,17.8327545 C0.28204354,17.9443526 0.427188206,17.9998706 0.572051765,17.9998706 C0.71714958,17.9998706 0.862013139,17.9443526 0.972581703,17.8327545 L9.0000937,9.74924618 L17.0276057,17.8327545 C17.1384085,17.9443526 17.2832721,17.9998706 17.4281356,17.9998706 C17.5729992,17.9998706 17.718097,17.9443526 17.8286656,17.8327545 C18.0499901,17.6098862 18.0499901,17.2487618 17.8286656,17.0258467 L9.86135722,9.00268191 L17.8340066,0.973848225 C18.0553311,0.750979934 18.0553311,0.389855532 17.8340066,0.16694039 C17.6126821,-0.0556467968 17.254037,-0.0556467968 17.0329467,0.16694039 L9.00042166,8.25611765 L0.967006424,0.167268345 C0.745681892,-0.0553188426 0.387317931,-0.0553188426 0.165993399,0.167268345 C-0.0553311331,0.390136635 -0.0553311331,0.751261038 0.165993399,0.974176179 L8.13920499,9.00268191 L8.13911129,9.00268191 Z",
              fill: n,
            })
          )
        )
      );
    }
    var D7 = V7;
    function H7(e) {
      let {
          backProps: t,
          closeProps: n,
          continuous: r,
          index: i,
          isLastStep: l,
          primaryProps: o,
          size: s,
          skipProps: c,
          step: d,
          tooltipProps: u,
        } = e,
        {
          content: m,
          hideBackButton: p,
          hideCloseButton: f,
          hideFooter: g,
          locale: v,
          showProgress: k,
          showSkipButton: E,
          styles: h,
          title: y,
        } = d,
        { back: b, close: C, last: O, next: I, skip: U } = v,
        G = { primary: C };
      return (
        r &&
          ((G.primary = l ? O : I),
          k && (G.primary = S("span", null, G.primary, " (", i + 1, "/", s, ")"))),
        E &&
          !l &&
          (G.skip = S(
            "button",
            {
              "aria-live": "off",
              "data-test-id": "button-skip",
              style: h.buttonSkip,
              type: "button",
              ...c,
            },
            U
          )),
        !p &&
          i > 0 &&
          (G.back = S(
            "button",
            { "data-test-id": "button-back", style: h.buttonBack, type: "button", ...t },
            b
          )),
        (G.close = !f && S(D7, { "data-test-id": "button-close", styles: h.buttonClose, ...n })),
        S(
          "div",
          {
            key: "JoyrideTooltip",
            "aria-label": Zt(y) || Zt(m),
            className: "react-joyride__tooltip",
            style: h.tooltip,
            ...u,
          },
          S(
            "div",
            { style: h.tooltipContainer },
            y && S("h1", { "aria-label": Zt(y), style: h.tooltipTitle }, y),
            S("div", { style: h.tooltipContent }, m)
          ),
          !g &&
            S(
              "div",
              { style: h.tooltipFooter },
              S("div", { style: h.tooltipFooterSpacer }, G.skip),
              G.back,
              S(
                "button",
                { "data-test-id": "button-primary", style: h.buttonNext, type: "button", ...o },
                G.primary
              )
            ),
          G.close
        )
      );
    }
    var j7 = H7,
      z7 = class extends At {
        constructor() {
          super(...arguments),
            L(this, "handleClickBack", (e) => {
              e.preventDefault();
              let { helpers: t } = this.props;
              t.prev();
            }),
            L(this, "handleClickClose", (e) => {
              e.preventDefault();
              let { helpers: t } = this.props;
              t.close();
            }),
            L(this, "handleClickPrimary", (e) => {
              e.preventDefault();
              let { continuous: t, helpers: n } = this.props;
              if (!t) {
                n.close();
                return;
              }
              n.next();
            }),
            L(this, "handleClickSkip", (e) => {
              e.preventDefault();
              let { helpers: t } = this.props;
              t.skip();
            }),
            L(this, "getElementsProps", () => {
              let { continuous: e, isLastStep: t, setTooltipRef: n, step: r } = this.props,
                i = Zt(r.locale.back),
                l = Zt(r.locale.close),
                o = Zt(r.locale.last),
                s = Zt(r.locale.next),
                c = Zt(r.locale.skip),
                d = e ? s : l;
              return (
                t && (d = o),
                {
                  backProps: {
                    "aria-label": i,
                    "data-action": "back",
                    onClick: this.handleClickBack,
                    role: "button",
                    title: i,
                  },
                  closeProps: {
                    "aria-label": l,
                    "data-action": "close",
                    onClick: this.handleClickClose,
                    role: "button",
                    title: l,
                  },
                  primaryProps: {
                    "aria-label": d,
                    "data-action": "primary",
                    onClick: this.handleClickPrimary,
                    role: "button",
                    title: d,
                  },
                  skipProps: {
                    "aria-label": c,
                    "data-action": "skip",
                    onClick: this.handleClickSkip,
                    role: "button",
                    title: c,
                  },
                  tooltipProps: { "aria-modal": !0, ref: n, role: "alertdialog" },
                }
              );
            });
        }
        render() {
          let {
              continuous: e,
              index: t,
              isLastStep: n,
              setTooltipRef: r,
              size: i,
              step: l,
            } = this.props,
            { beaconComponent: o, tooltipComponent: s, ...c } = l,
            d;
          if (s) {
            let u = {
              ...this.getElementsProps(),
              continuous: e,
              index: t,
              isLastStep: n,
              size: i,
              step: c,
              setTooltipRef: r,
            };
            d = S(s, { ...u });
          } else
            d = S(j7, {
              ...this.getElementsProps(),
              continuous: e,
              index: t,
              isLastStep: n,
              size: i,
              step: l,
            });
          return d;
        }
      },
      U7 = class extends At {
        constructor() {
          super(...arguments),
            L(this, "scope", null),
            L(this, "tooltip", null),
            L(this, "handleClickHoverBeacon", (e) => {
              let { step: t, store: n } = this.props;
              (e.type === "mouseenter" && t.event !== "hover") ||
                n.update({ lifecycle: q.TOOLTIP });
            }),
            L(this, "handleClickOverlay", () => {
              let { helpers: e, step: t } = this.props;
              t.disableOverlayClose || e.close();
            }),
            L(this, "setTooltipRef", (e) => {
              this.tooltip = e;
            }),
            L(this, "setPopper", (e, t) => {
              var n;
              let { action: r, step: i, store: l } = this.props;
              t === "wrapper" ? l.setPopper("beacon", e) : l.setPopper("tooltip", e),
                l.getPopper("beacon") &&
                  l.getPopper("tooltip") &&
                  l.update({ action: r, lifecycle: q.READY }),
                (n = i.floaterProps) != null && n.getPopper && i.floaterProps.getPopper(e, t);
            }),
            L(this, "renderTooltip", (e) => {
              let { continuous: t, helpers: n, index: r, size: i, step: l } = this.props;
              return S(z7, {
                continuous: t,
                helpers: n,
                index: r,
                isLastStep: r + 1 === i,
                setTooltipRef: this.setTooltipRef,
                size: i,
                step: l,
                ...e,
              });
            });
        }
        componentDidMount() {
          let { debug: e, index: t } = this.props;
          tn({ title: `step:${t}`, data: [{ key: "props", value: this.props }], debug: e });
        }
        componentDidUpdate(e) {
          var t;
          let {
              action: n,
              callback: r,
              continuous: i,
              controlled: l,
              debug: o,
              index: s,
              lifecycle: c,
              size: d,
              status: u,
              step: m,
              store: p,
            } = this.props,
            { changed: f, changedFrom: g } = wr(e, this.props),
            v = { action: n, controlled: l, index: s, lifecycle: c, size: d, status: u },
            k = i && n !== de.CLOSE && (s > 0 || n === de.PREV),
            E = f("action") || f("index") || f("lifecycle") || f("status"),
            h = g("lifecycle", [q.TOOLTIP, q.INIT], q.INIT),
            y = f("action", [de.NEXT, de.PREV, de.SKIP, de.CLOSE]),
            b = l && s === e.index;
          if (
            (y &&
              (h || b) &&
              r({ ...v, index: e.index, lifecycle: q.COMPLETE, step: e.step, type: nt.STEP_AFTER }),
            m.placement === "center" &&
              u === J.RUNNING &&
              f("index") &&
              n !== de.START &&
              c === q.INIT &&
              p.update({ lifecycle: q.READY }),
            E)
          ) {
            let C = Pt(m.target),
              O = !!C;
            O && v7(C)
              ? (g("status", J.READY, J.RUNNING) || g("lifecycle", q.INIT, q.READY)) &&
                r({ ...v, step: m, type: nt.STEP_BEFORE })
              : (console.warn(O ? "Target not visible" : "Target not mounted", m),
                r({ ...v, type: nt.TARGET_NOT_FOUND, step: m }),
                l || p.update({ index: s + (n === de.PREV ? -1 : 1) }));
          }
          g("lifecycle", q.INIT, q.READY) &&
            p.update({ lifecycle: T1(m) || k ? q.TOOLTIP : q.BEACON }),
            f("index") &&
              tn({ title: `step:${c}`, data: [{ key: "props", value: this.props }], debug: o }),
            f("lifecycle", q.BEACON) && r({ ...v, step: m, type: nt.BEACON }),
            f("lifecycle", q.TOOLTIP) &&
              (r({ ...v, step: m, type: nt.TOOLTIP }),
              this.tooltip &&
                ((this.scope = new L7(this.tooltip, { selector: "[data-action=primary]" })),
                this.scope.setFocus())),
            g("lifecycle", [q.TOOLTIP, q.INIT], q.INIT) &&
              ((t = this.scope) == null || t.removeScope(), p.cleanupPoppers());
        }
        componentWillUnmount() {
          var e;
          (e = this.scope) == null || e.removeScope();
        }
        get open() {
          let { lifecycle: e, step: t } = this.props;
          return T1(t) || e === q.TOOLTIP;
        }
        render() {
          let {
              continuous: e,
              debug: t,
              index: n,
              lifecycle: r,
              nonce: i,
              shouldScroll: l,
              size: o,
              step: s,
            } = this.props,
            c = Pt(s.target);
          return !W0(s) || !F.domElement(c)
            ? null
            : S(
                "div",
                { key: `JoyrideStep-${n}`, className: "react-joyride__step" },
                S(
                  P7,
                  { id: "react-joyride-portal" },
                  S(B7, { ...s, debug: t, lifecycle: r, onClickOverlay: this.handleClickOverlay })
                ),
                S(
                  $l,
                  {
                    ...s.floaterProps,
                    component: this.renderTooltip,
                    debug: t,
                    getPopper: this.setPopper,
                    id: `react-joyride-step-${n}`,
                    open: this.open,
                    placement: s.placement,
                    target: s.target,
                  },
                  S(R7, {
                    beaconComponent: s.beaconComponent,
                    continuous: e,
                    index: n,
                    isLastStep: n + 1 === o,
                    locale: s.locale,
                    nonce: i,
                    onClickOrHover: this.handleClickHoverBeacon,
                    shouldFocus: l,
                    size: o,
                    step: s,
                    styles: s.styles,
                  })
                )
              );
        }
      },
      G0 = class extends At {
        constructor(e) {
          super(e),
            L(this, "helpers"),
            L(this, "store"),
            L(this, "callback", (o) => {
              let { callback: s } = this.props;
              F.function(s) && s(o);
            }),
            L(this, "handleKeyboard", (o) => {
              let { index: s, lifecycle: c } = this.state,
                { steps: d } = this.props,
                u = d[s];
              c === q.TOOLTIP &&
                o.code === "Escape" &&
                u &&
                !u.disableCloseOnEsc &&
                this.store.close();
            }),
            L(this, "syncState", (o) => {
              this.setState(o);
            });
          let { debug: t, getHelpers: n, run: r, stepIndex: i } = e;
          (this.store = O7({ ...e, controlled: r && F.number(i) })),
            (this.helpers = this.store.getHelpers());
          let { addListener: l } = this.store;
          tn({
            title: "init",
            data: [
              { key: "props", value: this.props },
              { key: "state", value: this.state },
            ],
            debug: t,
          }),
            l(this.syncState),
            n && n(this.helpers),
            (this.state = this.store.getState());
        }
        componentDidMount() {
          if (!It()) return;
          let { debug: e, disableCloseOnEsc: t, run: n, steps: r } = this.props,
            { start: i } = this.store;
          O1(r, e) && n && i(),
            t || document.body.addEventListener("keydown", this.handleKeyboard, { passive: !0 });
        }
        componentDidUpdate(e, t) {
          if (!It()) return;
          let { action: n, controlled: r, index: i, lifecycle: l, status: o } = this.state,
            { debug: s, run: c, stepIndex: d, steps: u } = this.props,
            { stepIndex: m, steps: p } = e,
            { reset: f, setSteps: g, start: v, stop: k, update: E } = this.store,
            { changed: h } = wr(e, this.props),
            { changed: y, changedFrom: b } = wr(t, this.state),
            C = $n(u[i], this.props),
            O = !Ze(p, u),
            I = F.number(d) && h("stepIndex"),
            U = Pt(C.target);
          if (
            (O && (O1(u, s) ? g(u) : console.warn("Steps are not valid", u)),
            h("run") && (c ? v(d) : k()),
            I)
          ) {
            let oe = F.number(m) && m < d ? de.NEXT : de.PREV;
            n === de.STOP && (oe = de.START),
              [J.FINISHED, J.SKIPPED].includes(o) ||
                E({ action: n === de.CLOSE ? de.CLOSE : oe, index: d, lifecycle: q.INIT });
          }
          !r &&
            o === J.RUNNING &&
            i === 0 &&
            !U &&
            (this.store.update({ index: i + 1 }),
            this.callback({ ...this.state, type: nt.TARGET_NOT_FOUND, step: C }));
          let G = { ...this.state, index: i, step: C };
          if (y("action", [de.NEXT, de.PREV, de.SKIP, de.CLOSE]) && y("status", J.PAUSED)) {
            let oe = $n(u[t.index], this.props);
            this.callback({
              ...G,
              index: t.index,
              lifecycle: q.COMPLETE,
              step: oe,
              type: nt.STEP_AFTER,
            });
          }
          if (y("status", [J.FINISHED, J.SKIPPED])) {
            let oe = $n(u[t.index], this.props);
            r ||
              this.callback({
                ...G,
                index: t.index,
                lifecycle: q.COMPLETE,
                step: oe,
                type: nt.STEP_AFTER,
              }),
              this.callback({ ...G, type: nt.TOUR_END, step: oe, index: t.index }),
              f();
          } else
            b("status", [J.IDLE, J.READY], J.RUNNING)
              ? this.callback({ ...G, type: nt.TOUR_START })
              : (y("status") || y("action", de.RESET)) &&
                this.callback({ ...G, type: nt.TOUR_STATUS });
          this.scrollToStep(t),
            C.placement === "center" &&
              o === J.RUNNING &&
              l === q.INIT &&
              this.store.update({ lifecycle: q.READY });
        }
        componentWillUnmount() {
          let { disableCloseOnEsc: e } = this.props;
          e || document.body.removeEventListener("keydown", this.handleKeyboard);
        }
        scrollToStep(e) {
          let { index: t, lifecycle: n, status: r } = this.state,
            {
              debug: i,
              disableScrollParentFix: l = !1,
              scrollDuration: o,
              scrollOffset: s = 20,
              scrollToFirstStep: c = !1,
              steps: d,
            } = this.props,
            u = $n(d[t], this.props),
            m = Pt(u.target),
            p = C7({
              isFirstStep: t === 0,
              lifecycle: n,
              previousLifecycle: e.lifecycle,
              scrollToFirstStep: c,
              step: u,
              target: m,
            });
          if (r === J.RUNNING && p) {
            let f = Ur(m, l),
              g = zr(m, l),
              v = Math.floor(E7(m, s, l)) || 0;
            tn({
              title: "scrollToStep",
              data: [
                { key: "index", value: t },
                { key: "lifecycle", value: n },
                { key: "status", value: r },
              ],
              debug: i,
            });
            let k = this.store.getPopper("beacon"),
              E = this.store.getPopper("tooltip");
            if (n === q.BEACON && k) {
              let { offsets: h, placement: y } = k;
              !["bottom"].includes(y) && !f && (v = Math.floor(h.popper.top - s));
            } else if (n === q.TOOLTIP && E) {
              let { flipped: h, offsets: y, placement: b } = E;
              ["top", "right", "left"].includes(b) && !h && !f
                ? (v = Math.floor(y.popper.top - s))
                : (v -= u.spotlightPadding);
            }
            (v = v >= 0 ? v : 0),
              r === J.RUNNING &&
                b7(v, { element: g, duration: o }).then(() => {
                  setTimeout(() => {
                    var h;
                    (h = this.store.getPopper("tooltip")) == null || h.instance.update();
                  }, 10);
                });
          }
        }
        render() {
          if (!It()) return null;
          let { index: e, status: t } = this.state,
            {
              continuous: n = !1,
              debug: r = !1,
              nonce: i,
              scrollToFirstStep: l = !1,
              steps: o,
            } = this.props,
            s;
          if (t === J.RUNNING && o[e]) {
            let c = $n(o[e], this.props);
            s = S(U7, {
              ...this.state,
              callback: this.callback,
              continuous: n,
              debug: r,
              helpers: this.helpers,
              nonce: i,
              shouldScroll: !c.disableScrolling && (e !== 0 || l),
              step: c,
              store: this.store,
            });
          }
          return S("div", { className: "react-joyride" }, s);
        }
      };
    L(G0, "defaultProps", N7);
    var $7 = G0,
      R1 = [
        void 0,
        "EQUAL",
        "FIXED",
        "ADDED",
        "CHANGED",
        "REMOVED",
        "CAPTURE_ERROR",
        "SYSTEM_ERROR",
      ],
      Nr = ([e, ...t]) => t.reduce((n, r) => (R1.indexOf(r) > R1.indexOf(n) ? r : n), e);
    function W7(e) {
      return (e.FAILED ?? 0) > 0
        ? "FAILED"
        : (e.IN_PROGRESS ?? 0) > 0
          ? "IN_PROGRESS"
          : (e.BROKEN ?? 0) > 0
            ? "BROKEN"
            : (e.DENIED ?? 0) > 0
              ? "DENIED"
              : (e.PENDING ?? 0) > 0
                ? "PENDING"
                : (e.ACCEPTED ?? 0) > 0
                  ? "ACCEPTED"
                  : "PASSED";
    }
    function Wl(e) {
      let {
          statusCounts: t,
          isInProgress: n,
          changeCount: r,
          brokenCount: i,
          resultsByBrowser: l,
          resultsByMode: o,
          modesByName: s,
        } = e.reduce(
          (m, p) => (
            (m.statusCounts[p.status] = (m.statusCounts[p.status] || 0) + 1),
            p.status === "IN_PROGRESS" && (m.isInProgress = !0),
            p.result && ["CHANGED", "ADDED"].includes(p.result) && (m.changeCount += 1),
            p.result &&
              ["CAPTURE_ERROR", "SYSTEM_ERROR"].includes(p.result) &&
              (m.brokenCount += 1),
            p.comparisons?.forEach(({ browser: f, result: g }) => {
              m.resultsByBrowser[f.id] = Nr([g ?? void 0, m.resultsByBrowser[f.id]]);
            }),
            p.comparisons?.forEach(({ result: f }) => {
              m.resultsByMode[p.mode.name] = Nr([f ?? void 0, m.resultsByMode[p.mode.name]]);
            }),
            (m.modesByName[p.mode.name] = p.mode),
            m
          ),
          {
            statusCounts: {},
            isInProgress: !1,
            changeCount: 0,
            brokenCount: 0,
            resultsByBrowser: {},
            resultsByMode: {},
            modesByName: {},
          }
        ),
        c = e.length
          ? Object.fromEntries(e[0].comparisons.map((m) => [m.browser.id, m.browser]))
          : {},
        d = Object.entries(l).map(([m, p]) => ({ browser: c[m], result: p })),
        u = Object.entries(o).map(([m, p]) => ({ mode: s[m], result: p }));
      return {
        status: W7(t),
        isInProgress: n,
        changeCount: r,
        brokenCount: i,
        browserResults: d,
        modeResults: u,
      };
    }
    var G7 = (e) => {
        try {
          return [Xl()[0][e], Jl()[e]];
        } catch {
          return [null, null];
        }
      },
      q0 = ({ result: e }) => e !== "EQUAL" && e !== "FIXED",
      q7 = (e, t) => {
        let n = e.filter((i) => i.comparisons.some(q0)),
          r = n.length ? n : e;
        return r.find((i) => i.mode.name === t) || r[0];
      },
      Y7 = (e, t) => {
        let n = e.filter(q0),
          r = n.length ? n : e;
        return r.find((i) => i.browser.id === t) || r[0];
      };
    function Q7(e) {
      let [t, n] = _e(!0),
        r = G7("theme")[1],
        [i, l] = Ee(j5),
        [o, s] = Ee(z5),
        c,
        d;
      return (
        e.length &&
          ((c = t ? q7(e, i) : e.find(({ mode: u }) => u.name === i) || e[0]),
          (d = t
            ? Y7(c.comparisons, o)
            : c?.comparisons.find(({ browser: u }) => u.id === o) || c?.comparisons[0]),
          t &&
            (i !== c?.mode.name && l(c?.mode.name),
            o !== d?.browser.id && s(d?.browser.id),
            n(!1))),
        {
          modeOrder: r?.toolbar?.items?.map((u) => u.title),
          selectedTest: c,
          selectedComparison: d,
          onSelectBrowser: H((u) => s(u.id), [s]),
          onSelectMode: H((u) => l(u.name), [l]),
        }
      );
    }
    var K7 = lt(`
  query AddonVisualTestsBuild(
    $projectId: ID!
    $branch: String!
    $gitUserEmailHash: String!
    $repositoryOwnerName: String
    $storyId: String!
    $testStatuses: [TestStatus!]!
    $selectedBuildId: ID!
    $hasSelectedBuildId: Boolean!
  ) {
    project(id: $projectId) {
      name
      manageUrl
      account {
        billingUrl
        suspensionReason
      }
      features {
        uiTests
      }
      lastBuildOnBranch: lastBuild(
        branches: [$branch]
        repositoryOwnerName: $repositoryOwnerName
        localBuilds: { localBuildEmailHash: $gitUserEmailHash }
      ) {
        ...LastBuildOnBranchBuildFields
        ...SelectedBuildFields @skip(if: $hasSelectedBuildId)
      }
      lastBuild {
        id
        slug
        branch
      }
    }
    selectedBuild: build(id: $selectedBuildId) @include(if: $hasSelectedBuildId) {
      ...SelectedBuildFields
    }
    viewer {
      preferences {
        vtaOnboarding
      }
      projectMembership(projectId: $projectId) {
        userCanReview: meetsAccessLevel(minimumAccessLevel: REVIEWER)
      }
    }
  }
`),
      J7 = lt(`
  fragment LastBuildOnBranchBuildFields on Build {
    __typename
    id
    status
    committedAt
    ... on StartedBuild {
      testsForStatus: tests(first: 1000, statuses: $testStatuses) {
        nodes {
          ...StatusTestFields
        }
      }
      testsForStory: tests(storyId: $storyId) {
        nodes {
          ...LastBuildOnBranchTestFields
        }
      }
    }
    ... on CompletedBuild {
      result
      testsForStatus: tests(first: 1000, statuses: $testStatuses) {
        nodes {
          ...StatusTestFields
        }
      }
      testsForStory: tests(storyId: $storyId) {
        nodes {
          ...LastBuildOnBranchTestFields
        }
      }
    }
  }
`),
      X7 = lt(`
  fragment SelectedBuildFields on Build {
    __typename
    id
    number
    branch
    commit
    committedAt
    uncommittedHash
    status
    ... on StartedBuild {
      startedAt
      testsForStory: tests(storyId: $storyId) {
        nodes {
          ...StoryTestFields
        }
      }
    }
    ... on CompletedBuild {
      startedAt
      testsForStory: tests(storyId: $storyId) {
        nodes {
          ...StoryTestFields
        }
      }
    }
  }
`),
      Y0 = lt(`
  fragment StatusTestFields on Test {
    id
    status
    result
    story {
      storyId
    }
  }
`),
      e6 = lt(`
  fragment LastBuildOnBranchTestFields on Test {
    status
    result
  }
`),
      t6 = lt(`
  fragment StoryTestFields on Test {
    id
    status
    result
    webUrl
    comparisons {
      id
      result
      browser {
        id
        key
        name
        version
      }
      captureDiff {
        diffImage(signed: true) {
          imageUrl
          imageWidth
        }
        focusImage(signed: true) {
          imageUrl
          imageWidth
        }
      }
      headCapture {
        captureImage(signed: true) {
          backgroundColor
          imageUrl
          imageWidth
          imageHeight
          thumbnailUrl
        }
        captureError {
          kind
          ... on CaptureErrorInteractionFailure {
            error
          }
          ... on CaptureErrorJSError {
            error
          }
          ... on CaptureErrorFailedJS {
            error
          }
        }
      }
      baseCapture {
        captureImage(signed: true) {
          imageUrl
          imageWidth
          imageHeight
        }
      }
    }
    mode {
      name
      globals
    }
    story {
      storyId
      name
      component {
        name
      }
    }
  }
`),
      n6 = lt(`
  mutation ReviewTest($input: ReviewTestInput!) {
    reviewTest(input: $input) {
      updatedTests {
        id
        status
      }
      userErrors {
        ... on UserError {
          __typename
          message
        }
        ... on BuildSupersededError {
          build {
            id
          }
        }
        ... on TestUnreviewableError {
          test {
            id
          }
        }
      }
    }
  }
`),
      a6 = ({ projectId: e, storyId: t, gitInfo: n, selectedBuildInfo: r }) => {
        let [{ data: i, error: l, operation: o }, s] = Sl({
          query: K7,
          variables: {
            projectId: e,
            storyId: t,
            testStatuses: Object.keys(p0),
            branch: n.branch || "",
            ...(n.slug ? { repositoryOwnerName: n.slug.split("/", 1)[0] } : {}),
            gitUserEmailHash: n.userEmailHash,
            selectedBuildId: r?.buildId || "",
            hasSelectedBuildId: !!r,
          },
        });
        K(() => {
          let v = setInterval(s, 5e3);
          return () => clearInterval(v);
        }, [s]);
        let c = o && t && o.variables.storyId !== t,
          d = vn(J7, i?.project?.lastBuildOnBranch),
          u = [
            ...vn(e6, d && "testsForStory" in d && d.testsForStory ? d.testsForStory.nodes : []),
          ],
          m = d?.committedAt > n.committedAt,
          p = !!d && !m,
          f = !!d && u.every((v) => v.status !== "IN_PROGRESS"),
          g = vn(X7, i?.selectedBuild ?? (f ? i?.project?.lastBuildOnBranch : void 0));
        return {
          account: i?.project?.account,
          features: i?.project?.features,
          manageUrl: i?.project?.manageUrl,
          hasData: !!i && !c,
          hasProject: !!i?.project,
          hasSelectedBuild: g?.branch.split(":").at(-1) === n.branch,
          lastBuildOnBranch: d,
          lastBuildOnBranchIsNewer: m,
          lastBuildOnBranchIsReady: f,
          lastBuildOnBranchIsSelectable: p,
          selectedBuild: g,
          selectedBuildMatchesGit:
            g?.branch.split(":").at(-1) === n.branch &&
            g?.commit === n.commit &&
            g?.uncommittedHash === n.uncommittedHash,
          rerunQuery: s,
          queryError: l,
          userCanReview: !!i?.viewer?.projectMembership?.userCanReview,
          vtaOnboarding: i?.viewer?.preferences?.vtaOnboarding,
        };
      },
      Gl = je(null),
      Q0 = je(null),
      r6 = () => kt(Gl, "Build"),
      K0 = () => {
        let { selectedBuild: e } = kt(Gl, "Build");
        if (!e) throw new Error("No selectedBuild on Build context");
        return e;
      },
      ln = () => kt(Q0, "Story"),
      Ni = ({ children: e, watchState: t }) => {
        let n = !!t?.selectedBuild && "testsForStory" in t.selectedBuild,
          r =
            t?.selectedBuild &&
            "testsForStory" in t.selectedBuild &&
            t.selectedBuild.testsForStory?.nodes,
          i = [...vn(t6, r || [])],
          l = Wl(i),
          { toggleDiff: o } = Mn();
        return (
          K(() => o(l.changeCount > 0), [o, l.changeCount]),
          a.createElement(
            Gl.Provider,
            { value: ct(() => t, [JSON.stringify(t?.selectedBuild)]) },
            a.createElement(
              Q0.Provider,
              { value: { hasTests: n, tests: i, summary: l, ...Q7(i) } },
              e
            )
          )
        );
      },
      i6 = w.div(({ width: e, height: t, left: n, top: r }) => ({
        width: `${e}px`,
        height: `${t}px`,
        left: `${n}px`,
        top: `${r}px`,
        position: "relative",
        overflow: "hidden",
      }));
    function l6({
      top: e = 0,
      left: t = 0,
      width: n = window.innerWidth,
      height: r = window.innerHeight,
      colors: i = ["#CA90FF", "#FC521F", "#66BF3C", "#FF4785", "#FFAE00", "#1EA7FD"],
      ...l
    }) {
      let [o] = _e(() => {
        let s = document.createElement("div");
        return (
          s.setAttribute("id", "confetti-container"),
          s.setAttribute(
            "style",
            "position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 9999;"
          ),
          s
        );
      });
      return (
        K(
          () => (
            document.body.appendChild(o),
            () => {
              document.body.removeChild(o);
            }
          ),
          [o]
        ),
        In(
          a.createElement(
            i6,
            { top: e, left: t, width: n, height: r },
            a.createElement(bo, { colors: i, drawShape: s6, ...l })
          ),
          o
        )
      );
    }
    function o6(e, t) {
      return Math.floor(Math.random() * (t - e)) + e;
    }
    function s6(e) {
      let t = this;
      switch (((t.shape = t.shape || o6(1, 6)), t.shape)) {
        case 2: {
          let n = t.w / 2,
            r = t.h / 2;
          e.moveTo(-n + 2, -r),
            e.lineTo(n - 2, -r),
            e.arcTo(n, -r, n, -r + 2, 2),
            e.lineTo(n, r - 2),
            e.arcTo(n, r, n - 2, r, 2),
            e.lineTo(-n + 2, r),
            e.arcTo(-n, r, -n, r - 2, 2),
            e.lineTo(-n, -r + 2),
            e.arcTo(-n, -r, -n + 2, -r, 2);
          break;
        }
        case 3: {
          e.rect(-4, -4, 8, 16), e.rect(-12, -4, 24, 8);
          break;
        }
        case 4: {
          e.rect(-4, -4, 8, 16), e.rect(-4, -4, 24, 8);
          break;
        }
        case 1: {
          e.arc(0, 0, t.radius, 0, 2 * Math.PI);
          break;
        }
        case 5: {
          e.moveTo(16, 4), e.lineTo(4, 24), e.lineTo(24, 24);
          break;
        }
        case 6: {
          e.arc(4, -4, 4, -Math.PI / 2, 0), e.lineTo(4, 0);
          break;
        }
      }
      e.closePath(), e.fill();
    }
    var c6 = w.div(({ theme: e }) => ({
        background: e.base === "light" ? e.color.lightest : "#292A2C",
        width: 260,
        padding: 15,
        borderRadius: 5,
        boxShadow: "0px 0px 32px 0px #00000029",
      })),
      d6 = w.div({ display: "flex", flexDirection: "column", alignItems: "flex-start" }),
      u6 = w.div(({ theme: e }) => ({
        fontSize: 13,
        lineHeight: "18px",
        fontWeight: 700,
        color: e.color.defaultText,
      })),
      m6 = w.div(({ theme: e }) => ({
        fontSize: 13,
        lineHeight: "18px",
        textAlign: "start",
        color: e.color.defaultText,
        margin: 0,
        marginTop: 5,
      })),
      p6 = w.div({ display: "flex", justifyContent: "flex-end", marginTop: 15 }),
      h6 = ({ isLastStep: e, step: t, primaryProps: n, tooltipProps: r }) =>
        a.createElement(
          c6,
          { ...r },
          a.createElement(
            d6,
            null,
            t.title && a.createElement(u6, null, t.title),
            a.createElement(m6, null, t.content)
          ),
          (t.hideNextButton || t.hideBackButton) &&
            a.createElement(
              p6,
              { id: "buttonSkip" },
              !t.hideSkipButton &&
                !e &&
                a.createElement(
                  ce,
                  {
                    size: "medium",
                    onClick: t.onSkipWalkthroughButtonClick,
                    link: !0,
                    style: { paddingRight: 12, paddingLeft: 12, marginRight: 8 },
                  },
                  "Skip"
                ),
              !t.hideNextButton &&
                a.createElement(
                  ce,
                  {
                    ...n,
                    onClick: n.onClick,
                    variant: "solid",
                    ...(t.onNextButtonClick ? { onClick: t.onNextButtonClick } : {}),
                  },
                  t.nextButtonText || "Next"
                )
            )
        ),
      I1 = "setFilter",
      f6 = ({ managerApi: e, skipWalkthrough: t, startWalkthrough: n, completeWalkthrough: r }) => {
        let i = zt(),
          l = ln(),
          o = l?.selectedTest?.result === "CHANGED",
          s = l?.selectedTest?.status !== "ACCEPTED",
          c = JSON.stringify(jt().layout),
          d = Ne(c);
        d.current !== c && (window.dispatchEvent(new Event("resize")), (d.current = c)),
          K(() => {
            n();
          }),
          K(() => {
            e.getCurrentStoryData()?.type !== "story" && e.jumpToStory(1),
              e.togglePanel(!0),
              e.togglePanelPosition("right"),
              e.setSelectedPanel(nn);
          }, [e]);
        let [u, m] = Qe("showConfetti", !1),
          [p, f] = Qe("stepIndex", 0),
          g = () => f((v = 0) => v + 1);
        return (
          K(() => {
            let v = document.getElementById("storybook-explorer-tree"),
              k = Array.from(v instanceof HTMLElement ? v.children : [])
                .filter((E) => E instanceof HTMLElement)
                .slice(1);
            return (
              k.forEach((E) => (E.style.display = "none")),
              () => k.forEach((E) => (E.style.display = ""))
            );
          }, []),
          K(() => {
            let v = () => {
              f(1),
                setTimeout(() => {
                  window.dispatchEvent(new Event("resize"));
                }, 100);
            };
            return (
              e.on(Ri, v),
              e.on(I1, v),
              () => {
                e.off(Ri, v), e.off(I1, v);
              }
            );
          }, [e, f]),
          K(() => {
            l?.selectedTest?.status === "ACCEPTED" && p === 5 && (m(!0), f(6));
          }, [l?.selectedTest?.status, u, m, p, f]),
          a.createElement(
            a.Fragment,
            null,
            u &&
              a.createElement(l6, {
                numberOfPieces: 800,
                recycle: !1,
                tweenDuration: 2e4,
                onConfettiComplete: (v) => {
                  v?.reset(), m(!1);
                },
              }),
            a.createElement($7, {
              steps: [
                {
                  target: "#sidebar-bottom-wrapper",
                  title: "Changes found",
                  content: a.createElement(
                    a.Fragment,
                    null,
                    "The visual tests addon will detect changes in all of your stories and allow you to review them before opening a pull request.",
                    a.createElement("br", null),
                    a.createElement("br", null),
                    "Click the number at the bottom-right to only show stories with visual changes."
                  ),
                  floaterProps: {
                    target: "#warnings-found-filter",
                    options: { preventOverflow: { boundariesElement: "window" } },
                  },
                  placement: "top",
                  disableBeacon: !0,
                  hideNextButton: !0,
                  spotlightClicks: !0,
                  onSkipWalkthroughButtonClick: t,
                },
                o && s
                  ? {
                      target: "#storybook-explorer-tree > div",
                      title: "Stories with changes",
                      content: a.createElement(
                        a.Fragment,
                        null,
                        "Here you have a filtered list of only stories with changes."
                      ),
                      placement: "right",
                      disableBeacon: !0,
                      spotlightClicks: !0,
                      onNextButtonClick: g,
                      onSkipWalkthroughButtonClick: t,
                    }
                  : {
                      target: "#storybook-explorer-tree > div",
                      title: "Stories with changes",
                      content: a.createElement(
                        a.Fragment,
                        null,
                        "Here you have a list of all stories in your Storybook.",
                        a.createElement("br", null),
                        a.createElement("br", null),
                        "Select a story with changes to see the exact pixels that changed."
                      ),
                      placement: "right",
                      disableBeacon: !0,
                      spotlightClicks: !0,
                      hideNextButton: !0,
                      onSkipWalkthroughButtonClick: t,
                    },
                {
                  target: "#panel-tab-content",
                  title: "Inspect changes",
                  content: a.createElement(
                    a.Fragment,
                    null,
                    "The results of the changes are shown here. The pixels that changed are highlighted in green."
                  ),
                  disableBeacon: !0,
                  placement: "left",
                  onNextButtonClick: g,
                  onSkipWalkthroughButtonClick: t,
                },
                {
                  target: "#button-diff-visible",
                  title: "Toggle the diff",
                  content: a.createElement(
                    a.Fragment,
                    null,
                    "This button shows or hides the visual diff. Use it to make the visual changes in your stories obvious. Try it out."
                  ),
                  onNextButtonClick: g,
                  onSkipWalkthroughButtonClick: t,
                  spotlightClicks: !0,
                  disableBeacon: !0,
                  placement: "bottom",
                  disableOverlay: !0,
                },
                {
                  target: "#button-toggle-snapshot",
                  title: "This is the Switch button",
                  content: a.createElement(
                    a.Fragment,
                    null,
                    "Switch between the baseline snapshot (old) and the latest snapshot. The info bar will let you know which version you're looking at."
                  ),
                  onNextButtonClick: g,
                  onSkipWalkthroughButtonClick: t,
                  spotlightClicks: !0,
                  disableBeacon: !0,
                  placement: "bottom",
                  disableOverlay: !0,
                },
                {
                  target: "#button-toggle-accept-story",
                  title: "Accept changes",
                  content: a.createElement(
                    a.Fragment,
                    null,
                    "If the visual changes are intentional, accept them to update the test baselines. The next time you run visual tests, future changes will be compared to these new baselines. This can be undone."
                  ),
                  disableBeacon: !0,
                  spotlightClicks: !0,
                  onNextButtonClick: g,
                  hideNextButton: !0,
                  placement: "bottom",
                  disableOverlay: !0,
                  onSkipWalkthroughButtonClick: t,
                },
                {
                  target: "#button-toggle-accept-story",
                  title: "Perfection!",
                  placement: "bottom",
                  disableOverlay: !0,
                  content: a.createElement(
                    a.Fragment,
                    null,
                    "You've got the basics down! You can always unaccept if you're not happy with the changes."
                  ),
                  onNextButtonClick: g,
                  onSkipWalkthroughButtonClick: t,
                },
                {
                  target: "#button-run-tests",
                  title: "You are ready to test",
                  placement: "bottom",
                  disableOverlay: !0,
                  content: a.createElement(
                    a.Fragment,
                    null,
                    "Any time you want to run tests, tap this button in the sidebar to see exactly what changed across your Storybook."
                  ),
                  disableBeacon: !0,
                  nextButtonText: "Done",
                  onNextButtonClick: r,
                },
              ],
              continuous: !0,
              stepIndex: p,
              spotlightPadding: 0,
              hideBackButton: !0,
              disableCloseOnEsc: !0,
              disableOverlayClose: !0,
              disableScrolling: !0,
              hideCloseButton: !0,
              showSkipButton: !0,
              floaterProps: {
                options: { offset: { offset: "0, 6" } },
                styles: {
                  floater: {
                    padding: 0,
                    paddingLeft: 8,
                    paddingTop: 8,
                    filter:
                      i.base === "light"
                        ? "drop-shadow(0px 5px 5px rgba(0,0,0,0.05)) drop-shadow(0 1px 3px rgba(0,0,0,0.1))"
                        : "drop-shadow(#fff5 0px 0px 0.5px) drop-shadow(#fff5 0px 0px 0.5px)",
                  },
                },
              },
              tooltipComponent: h6,
              styles: {
                overlay: { mixBlendMode: "unset", backgroundColor: "none" },
                spotlight: {
                  backgroundColor: "none",
                  border: `solid 2px ${i.color.secondary}`,
                  boxShadow: "0px 0px 0px 9999px rgba(0,0,0,0.4)",
                },
                options: {
                  zIndex: 1e4,
                  primaryColor: i.color.secondary,
                  arrowColor: i.base === "light" ? i.color.lightest : "#292A2C",
                },
              },
            })
          )
        );
      },
      g6 = ({ content: e }) => {
        let t = e.split(/\r?\n/);
        return a.createElement(
          a.Fragment,
          null,
          t.reduce((n, r, i) => n.concat([i && a.createElement("br", null), r].filter(Boolean)), [])
        );
      },
      J0 = ({ localBuildProgress: e, title: t }) =>
        a.createElement(
          d0,
          { warning: !0 },
          a.createElement(
            j,
            null,
            a.createElement(
              "span",
              null,
              t && a.createElement("b", null, t, ": "),
              a.createElement(g6, {
                content: ui(
                  Array.isArray(e.originalError)
                    ? e.originalError[0]?.message
                    : e.originalError?.message || "Unknown error"
                ),
              })
            ),
            " ",
            a.createElement(
              Be,
              {
                target: "_blank",
                href: e.errorDetailsUrl || `${is}#troubleshooting`,
                withArrow: !0,
              },
              e.errorDetailsUrl ? "Details" : "Troubleshoot"
            )
          )
        ),
      v6 = ({ children: e, localBuildProgress: t }) => (
        We("Errors", "BuildError"),
        a.createElement(
          ve,
          { footer: null },
          a.createElement(
            he,
            null,
            a.createElement(
              se,
              null,
              a.createElement(
                "div",
                null,
                a.createElement(me, null, "Build failed"),
                a.createElement(
                  j,
                  { center: !0, muted: !0 },
                  "Check the Storybook process on the command line for more details."
                )
              ),
              a.createElement(J0, { localBuildProgress: t }),
              e
            )
          )
        )
      ),
      y6 = w(j)({ display: "flex", flexDirection: "column", gap: 10, width: 200, marginTop: 15 });
    function $r({ localBuildProgress: e }) {
      return a.createElement(
        y6,
        { center: !0, small: !0 },
        a.createElement(
          Fl,
          null,
          typeof e.buildProgressPercentage == "number" &&
            a.createElement(Ds, { style: { width: `${e.buildProgressPercentage}%` } })
        ),
        a.createElement(Tl, { center: !0, muted: !0, small: !0, localBuildProgress: e })
      );
    }
    var E6 =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHUSURBVHgB7ZfPTupAFMa/mbb0XkAk6r2516jRnXHlxr0+ib4J+iTqm7Bx5YaVcWPQECUoGiJCpX/mOKcxRo2DILa44Jc0Taad+b45mZkzR+CZaq2+CcsqAWIdoCKSowyFw5WFvwcvLRf1m1Kt0SSv51OkFCVJx+sRa1W1JmuLav16x5Zyf/7PDKQQSAM9RVzd3CH0aUsKEtsz0/nUxBnWmisWAItKkkCbWddF2mQcm1/rEmPiOeJF2/TD+f0pKo0jBKqHUcg5U1ib28ByYfXD78YInDSPRxZnOkE7nogJ2a/jd9FvImNbAz/GgHERZp08pjJ8OA3uMVIh2kELXvAwcB/j6HmnOJQ4Y0kbBW16GGS/wb7CsKYni9AYZ9f6haydhzCEVFGEbtiFH3kYBWMEfts5o3jcUVjIaYOjIvsJfIb4hhQ+WYQTAz/XgDXALuCz4D2ckN7Dt6KhDfzLLcGxMsaORApe2MFbQyrOhq9xpIu12Q3jOMaTcNqdjZ+k0REQLS4UxoXUZ1nFD0KkTffR51dZUhTuNVttpBkF1rq717cmFR3GDdXLxm6tcUudxx4lCRe+XACz1pnWZO2XbMJFKteJXKohMYTeIlRBFO2tLP4vc8sThEpu8pkDBW8AAAAASUVORK5CYII=",
      b6 =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN0SURBVHgBvVdLTxNRFP7uUDpSC7Q8rFSLqWJEExOfC1/xHWPiQuPShS50Y/wP6F9wq1HZuTAxMXFlNGzUhWIQDWICLYhSC4XWlj5m2pnjvS20NNDhltB+i870zpnzffece8/cw7CI4FToDBoa+gB2ACAXaocBmOj3b9/yrDgyGZrtmwpHKK3pZJgm1RLJtEaCK8g5BTcLhmZu2RTlqbezDQpjqAf4FDE9O4+cTmcVRuxmW6uzbuQCgqvD1QI0UJ9CoDMOVUW9YW+0icsBG9YDLQNMjIAS0fxf1u4FvH5A3STtYjHiruoEcGL6/Bb07X3ZMImfZjfYnkNgR86jGsgL4LM1Xz3OXys9F+KQiIGdvQ5ZKLKGBefRte1+DoKG30MWcgKmg9zxF8iCBt8W1slGCaDgCKqCIA8FpEzlIjAXQrWgiNw70mugVpDaBczF9/nXvzy03NxmAo4sqEUrN2rls3YUPLIUkOnoQpOEb0sBWVPDp5l3SOqjuDjeVi5KzYG2x0E9KZi7eCVYVoNEXXgY2YpdvOaf38bgtlfmqJiCZDaO15P9CMS/I9xtILzDKDfg0WD7LwHnzpWRC3w0TiBGbgxGgEejhKiO6gW8+f0cC9l/JadXNCRdVDI42QtcPQrFcwHMubM4HCIv3hmlahjlmXoRIFQlQMx6ObnAQivhzY10SQQnLzrxFAh/GHvxJHsbGSoPSSABjFSoYauugV8LY6saCxEv76bgne5Ec5MCj65DIxMxeDBE9xDIeVEJIh373JICotoMrDDevQlz8fIIpRu5d4tch9IicivPHOuqA8Ts2CisKsBpa7F8yWbMrxgzcw2W77jtTF6Ax+GDFexmFIyyZeQ5zToqhzsgL6DXfQR2xfp006oPF++zKYelrShE/mbIC7ArKo51XYYVnLw6qkaYz1xFJu60tL3SzauhWoUAAd/mHpzedg3Oxsrr4ZQaxUGbu+JzMfM7vWzV7bcEy2+BEOHz9+QL01RiDLqZyadms70FPudueJoKa+V4J/AhzM8t6RJxF8/K4XZepdf43LHg9Gy0e2u7q559wRImQrP8dAwM6dkc6o1UJl+1BhQycg8isUS+XaoXBNd8fIHfGP35geCf8P2p8BwlMxrVEqLxFQ2w4BrnnIK7mHjRpIo+UbRqqBlYjBfyIRjGA7+va0CM/AdEDxpHNfo8owAAAABJRU5ErkJggg==",
      k6 =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMJSURBVHgB7VfNblJBFD5z+5e0poXGNqnFRFxoUly0K+vCpG7aFyhrTRofwBcQ6974AIZo1/QFyorEBezsQkhqYqkBSoBaAcWW3+N8dxh+hFJI+Nn0S264d+65c77znXNmGEFVhCPxDRobcxGJVSK20ODgowrt2W2Ln2ojP+IpVyRxxhf5ApcrFR4kchd5hq+w9AnfIhxPvhg3jI93FubJEIKGARkinabOqVTgZ4Zg8Xx+7tbQnAPwddsySzTGLoOJN6anpmjYmJwYx8+qQSNCVXHLyAho3BAY78bo5WemFau6D/0i+vC0fx1zLYFQmmjTJshpV8+BpLrWF6kvuDYFB1GuOQfg+CDG1C90lQIgKKWH8EiFbZooWySanWi18yeRJjbfA7DZkgraZqh3Aoh+a1nl21uNesUqzAk9YaadB/VagMP3X5W9876okYvmVMoyxWZ7jY4pCKSoVnyNQDTZQvOY51g5QIq8kjjIvP2iSG8jhawKuGsCYL5iUYyhxJNFYV6IBkCEWmYAxYpv3EfwJejVI0Gv15RSAFQLprl7AoEknNYnR2S4/Ek1CWTWk5vPdkXWYVV23phKydxk55a9sgYiMprtGRWlzi8Qy9UVaJQUaYENfh0WVXTrUrHoH+qdACK2zYiaI9da+ygQtV4T3N+Y3j0WJlnUQzCtbPDssoreCCDnyCGwL2WO5JrfO+SEm8vKMaJGznW3uI/YJKbbTivXEwENFFVGRqDJaMBJtlhvNbzVXYGxjLyfnVRKOKyda6ClCHXFAyhEHVkjMKnOP2whc6ha4TsPhVknnmNl126xakSLAvsnaD82VzQosG1v/QjSY4PyV1sSZKAS5DadyujniqpjMIe2w73zv/lE+DTJ95YWqF8AGSiCGrhq+dU4iae63wu6RbuVsxNu/hFJAiKNg8LICMgmOywUSzRs/L00Fw6fweXS7ln6Nw1TBfg6z8pNolLeMwfCscSbSOIn5y7zPEjg4IsDMHx9lz7hu7bM4ZCKcyKOajQwCLlF8SGVy7v2u0s+jPwDEeUTfjDhTd4AAAAASUVORK5CYII=",
      w6 =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALVSURBVHgBxZfLbtNAFIb/8TgJCbm2adNUIOiuYpUN+7JiySPAm5Q+CfQBeIcuWYDaVYWEUIQqCLmQpEmaJq7Hw5y4dpOOadwEh0+yZnx8OWfm/HNjuKZ6VtsD5/sAqwAyj+g4goPDnUeb733L91pz/6zekpdjSwrHkVFycTmW5KuqfJJvVq013piG8W57Yw0GY1gFqon42WzDtuQLg0n2ei2XXplzgnwV81mAy31DQu6lEgmsmnjMpKJi4D9x3eN58/YDabdUkmrAuboMDqTXgV4DSOWgkuZei9iEElzyCRDbmvGnBYDmZ6C4rWIr39i8ejy1uI0aN/gKVpgNQE9BtoDIeJDUTHoP2GPVAvfFL708jrtlCMmxCClu4Vm2gd1s1zUM2kBybgCWXz3tbSJtmlicxKQBfgCkiVvoKUiv+dWhiGNZZnpv1Nee683rNWcFeM2lfQzH/oi++IUcL6LvdJAziuiIunsvOsjwAobSQT7+Ui0ruwiD3gOp4HVI2J9UtBIFXlIf8Ylzwr9XQVCZZjE0Rx8C/4EH6RABkAgDGDkNhKXA/zKSSITzA7ACv02yhwgLpSWQ+4pwmgvZQ1i89GgEiFAPgEQYQIaFn6D6Tjv0u6FF2JdDhCXJy8EPlhHheuKVGmISV9LCQA1BKs+dltpdiUlJUO6lGium+TzwH0EivHMmnIbGdSHpjm2vHV7pza5bmMN9RWgygWVJ8aubm/vOhJV8Ta0HJTUlx7AIJnPUP+p3v6NZpkRIi4i/kPwLaGNyCz0FSmiR0dFnU60HWPwpZPdUaSHjqpaE4+WOhtEiNkdpKbMJtl6ZHwDiJbCNklv35D29iVjGFoBKAes6UXb7HAy1OT6xrmysmuFoMt8cGVLYB61uH6vsBfLV7g1IG4cTQ/VH/e1Z/be8GI1llNDBlw7A5Oub8km+/QMhHVLpnEhHNUQGU5OKPIEQBzuPy0dk+QPy8+sGXJtnqwAAAABJRU5ErkJggg==",
      C6 = w.div(({ theme: e }) => ({
        border: `1px solid ${e.appBorderColor}`,
        borderRadius: e.appBorderRadius,
        padding: "6px 10px",
        fontSize: 13,
        lineHeight: "18px",
      })),
      S6 = w.div(({ theme: e }) => ({
        lineHeight: "18px",
        position: "relative",
        borderRadius: 5,
        display: "block",
        minWidth: "80%",
        color: e.color.warningText,
        background: e.background.warning,
        border: `1px solid ${Qa(0.5, e.color.warningText)}`,
        padding: 15,
        margin: 0,
      })),
      x6 = w(j)(({ theme: e }) => ({ color: e.color.darkest })),
      N6 = ({ onSkip: e, runningSecondBuild: t }) =>
        a.createElement(
          ve,
          { footer: null },
          a.createElement(
            he,
            null,
            a.createElement(
              se,
              null,
              a.createElement(
                "div",
                null,
                a.createElement(me, null, "Make a change to this story"),
                a.createElement(
                  j,
                  { center: !0, muted: !0, block: !0 },
                  "In your code, adjust the markup, styling, or assets to see how visual testing works. Don't worry, you can undo it later. Here are a few ideas to get you started."
                )
              ),
              a.createElement(
                se,
                {
                  style: {
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "8px",
                    margin: "10px 0",
                  },
                },
                a.createElement(
                  Qn,
                  { style: { margin: 0, alignItems: "center", gap: "10px" } },
                  a.createElement("img", {
                    src: b6,
                    alt: "Color Palette",
                    style: { width: 32, height: 32 },
                  }),
                  "Shift the color palette"
                ),
                a.createElement(
                  Qn,
                  { style: { margin: 0, alignItems: "center", gap: "10px" } },
                  a.createElement("img", {
                    src: k6,
                    alt: "Embiggen",
                    style: { width: 32, height: 32 },
                  }),
                  " ",
                  "Embiggen the type"
                ),
                a.createElement(
                  Qn,
                  { style: { margin: 0, alignItems: "center", gap: "10px" } },
                  a.createElement("img", {
                    src: w6,
                    alt: "Layout",
                    style: { width: 32, height: 32 },
                  }),
                  "Change the layout"
                ),
                a.createElement(
                  Qn,
                  { style: { margin: 0, alignItems: "center", gap: "10px" } },
                  a.createElement("img", {
                    src: E6,
                    alt: "Adjust",
                    style: { width: 32, height: 32 },
                  }),
                  "Adjust the size or scale"
                )
              ),
              a.createElement(
                Et,
                null,
                t
                  ? a.createElement(
                      S6,
                      null,
                      a.createElement(
                        x6,
                        null,
                        "No changes found in the Storybook you published. Make a UI tweak and try again to continue."
                      )
                    )
                  : a.createElement(C6, null, "Awaiting changes..."),
                a.createElement(ce, { link: !0, onClick: e }, "Skip walkthrough")
              )
            )
          )
        ),
      _6 = ({
        isRunning: e,
        setRunningSecondBuild: t,
        startBuild: n,
        setInitialGitHash: r,
        uncommittedHash: i,
      }) =>
        a.createElement(
          ve,
          { footer: null },
          a.createElement(
            he,
            null,
            a.createElement(
              se,
              null,
              a.createElement(
                "div",
                null,
                a.createElement(me, null, "Changes detected"),
                a.createElement(
                  j,
                  { center: !0, muted: !0 },
                  "Time to run your first visual tests to pinpoint the exact changes made to this story."
                )
              ),
              a.createElement(
                ce,
                {
                  variant: "solid",
                  size: "medium",
                  disabled: e,
                  onClick: () => {
                    t(!0),
                      n(),
                      setTimeout(() => {
                        r(i);
                      }, 1e4);
                  },
                },
                a.createElement(Bt, null),
                "Run visual tests"
              )
            )
          )
        ),
      M6 = ({ localBuildProgress: e }) =>
        a.createElement(
          ve,
          { footer: null },
          a.createElement(
            he,
            null,
            a.createElement(
              se,
              null,
              a.createElement(
                "div",
                null,
                a.createElement(me, null, "Running your first test"),
                a.createElement(
                  j,
                  { center: !0, muted: !0 },
                  "A new snapshot is being created in a standardized cloud browser. Once complete, you'll be able to pinpoint exactly what changed."
                )
              ),
              a.createElement($r, { localBuildProgress: e })
            )
          )
        ),
      T6 = ({ isUnchanged: e, localBuildProgress: t, ...n }) => (
        We("Onboarding", "CatchAChange"),
        n.isRunning && t
          ? a.createElement(M6, { localBuildProgress: t })
          : e
            ? a.createElement(N6, { ...n })
            : a.createElement(_6, { ...n })
      ),
      A6 = w.div(({ status: e, theme: t }) => ({
        position: "relative",
        display: "inline-flex",
        border: `1px solid ${e === "positive" ? t.color.green : t.appBorderColor}`,
        borderRadius: 5,
        margin: "15px 15px 0",
        minHeight: 200,
        minWidth: 200,
        maxWidth: 500,
        img: { display: "block", maxWidth: "100%" },
        svg: {
          position: "absolute",
          top: -12,
          left: -12,
          width: 24,
          height: 24,
          padding: 5,
          color: t.color.lightest,
          borderRadius: "50%",
          backgroundColor: t.color.green,
        },
      })),
      F6 = w.div({
        width: "100%",
        margin: 2,
        background: "white",
        borderRadius: 3,
        overflow: "hidden",
        div: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        },
      }),
      dl = ({ backgroundColor: e, status: t, thumbnailUrl: n }) =>
        a.createElement(
          A6,
          { status: t },
          a.createElement(
            F6,
            null,
            a.createElement(
              "div",
              { style: e ? { backgroundColor: e } : {} },
              a.createElement("img", { alt: "Snapshot thumbnail", src: n })
            )
          ),
          t === "positive" && a.createElement(gl, null)
        ),
      Z1 = w(j)({ marginBottom: 5 }),
      B1 = ({ onComplete: e, onSkip: t, ranSecondBuild: n = !1 }) => {
        We("Onboarding", "CatchAChangeComplete");
        let r = ln();
        return a.createElement(
          ve,
          { footer: null },
          a.createElement(
            he,
            { style: { overflowY: "auto" } },
            n
              ? a.createElement(
                  se,
                  null,
                  a.createElement(
                    "div",
                    null,
                    a.createElement(me, null, "Nice. Your stories were saved as test baselines."),
                    a.createElement(
                      j,
                      { center: !0, muted: !0, block: !0 },
                      "This story was indexed and snapshotted in a standardized cloud browser."
                    ),
                    r.selectedComparison?.headCapture?.captureImage &&
                      a.createElement(dl, {
                        ...r.selectedComparison?.headCapture?.captureImage,
                        status: "positive",
                      })
                  ),
                  a.createElement(
                    Et,
                    null,
                    a.createElement(Z1, null, "You're ready to start testing!"),
                    a.createElement(ce, { variant: "solid", size: "medium", onClick: e }, "Done"),
                    a.createElement(ce, { link: !0, onClick: t }, "Skip walkthrough")
                  )
                )
              : a.createElement(
                  se,
                  null,
                  a.createElement(
                    "div",
                    null,
                    a.createElement(me, null, "Nice. You ran your first tests!"),
                    a.createElement(
                      j,
                      { center: !0, muted: !0, block: !0 },
                      "This story was indexed and snapshotted in a standardized cloud browser and changes were found."
                    ),
                    r.selectedComparison?.headCapture?.captureImage &&
                      a.createElement(dl, {
                        ...r.selectedComparison?.headCapture?.captureImage,
                        status: "positive",
                      })
                  ),
                  a.createElement(
                    Et,
                    null,
                    a.createElement(Z1, null, "It's time to review changes!"),
                    a.createElement(
                      ce,
                      { variant: "solid", size: "medium", onClick: e },
                      "Take a tour"
                    ),
                    a.createElement(ce, { link: !0, onClick: t }, "Skip walkthrough")
                  )
                )
          )
        );
      },
      P1 = () =>
        a.createElement(
          "div",
          null,
          a.createElement(an, null),
          a.createElement(me, null, "Get started with visual testing"),
          a.createElement(
            j,
            { center: !0, muted: !0 },
            'Take an image snapshot of your stories to save their "last known good state" as test baselines.'
          )
        ),
      O6 = ({ isRunning: e, localBuildProgress: t, startBuild: n, onSkip: r }) => (
        We("Onboarding", "InitialBuild"),
        a.createElement(
          ve,
          { footer: null },
          a.createElement(
            he,
            null,
            t
              ? a.createElement(
                  se,
                  null,
                  a.createElement(P1, null),
                  a.createElement($r, { localBuildProgress: t })
                )
              : a.createElement(
                  se,
                  null,
                  a.createElement(P1, null),
                  a.createElement(
                    Et,
                    null,
                    a.createElement(
                      ce,
                      { disabled: e, size: "medium", variant: "solid", onClick: n },
                      "Take snapshots"
                    ),
                    a.createElement(ce, { onClick: r, link: !0 }, "Skip walkthrough")
                  )
                )
          )
        )
      ),
      L6 = w(j)({ marginBottom: 5 }),
      R6 = ({ onCatchAChange: e, onSkip: t }) => {
        We("Onboarding", "InitialBuildComplete");
        let n = ln();
        return a.createElement(
          ve,
          { footer: null },
          a.createElement(
            he,
            null,
            a.createElement(
              se,
              null,
              a.createElement(
                "div",
                null,
                a.createElement(me, null, "Nice. Your stories were saved as test baselines."),
                a.createElement(
                  j,
                  { center: !0, muted: !0, block: !0 },
                  "This story was indexed and snapshotted in a standardized cloud browser."
                ),
                n?.selectedComparison?.headCapture?.captureImage &&
                  a.createElement(dl, {
                    ...n?.selectedComparison?.headCapture.captureImage,
                    status: "positive",
                  })
              ),
              a.createElement(
                Et,
                null,
                a.createElement(
                  L6,
                  { muted: !0 },
                  "Let's see the superpower of catching visual changes."
                ),
                a.createElement(
                  ce,
                  { variant: "solid", size: "medium", onClick: e },
                  "Catch a UI change"
                ),
                a.createElement(ce, { link: !0, onClick: t }, "Skip walkthrough")
              )
            )
          )
        );
      },
      I6 = ({
        dismissBuildError: e,
        localBuildProgress: t,
        showInitialBuildScreen: n,
        gitInfo: r,
        lastBuildHasChangesForStory: i,
        onComplete: l,
        onSkip: o,
      }) => {
        let { isRunning: s, startBuild: c } = ka(),
          [d, u] = Qe("showInitialBuild", n);
        K(() => {
          n && u(!0);
        }, [n, u]);
        let [m, p] = Qe("showCatchAChange", !d),
          [f, g] = Qe("initialGitHash", r.uncommittedHash),
          v = () => {
            g(r.uncommittedHash), p(!0);
          },
          [k, E] = Qe("runningSecondBuild", !1);
        return t?.currentStep === "error"
          ? a.createElement(
              v6,
              { localBuildProgress: t },
              a.createElement(
                Et,
                null,
                a.createElement(ce, { variant: "solid", size: "medium", onClick: c }, "Try again"),
                a.createElement(ce, { link: !0, onClick: o }, "Skip walkthrough")
              )
            )
          : t?.currentStep === "limited"
            ? a.createElement(
                h0,
                { billingUrl: t.errorDetailsUrl, suspensionReason: "EXCEEDED_THRESHOLD" },
                a.createElement(ce, { link: !0, onClick: e }, "Continue")
              )
            : d && (!t || (t && s))
              ? a.createElement(O6, {
                  isRunning: s,
                  localBuildProgress: t,
                  startBuild: c,
                  onSkip: o,
                })
              : t?.currentStep === "complete" && !m && !k
                ? i
                  ? a.createElement(B1, { onComplete: l, onSkip: o })
                  : a.createElement(R6, { onCatchAChange: v, onSkip: o })
                : m && !i
                  ? a.createElement(T6, {
                      isRunning: s,
                      isUnchanged: f === r.uncommittedHash,
                      localBuildProgress: t,
                      onSkip: o,
                      runningSecondBuild: k,
                      setInitialGitHash: g,
                      setRunningSecondBuild: E,
                      startBuild: c,
                      uncommittedHash: r.uncommittedHash,
                    })
                  : i
                    ? a.createElement(B1, { onComplete: l, onSkip: o, ranSecondBuild: m && k })
                    : null;
      },
      Z6 = w.div(({ theme: e }) => ({
        background: e.background.app,
        padding: "10px 15px",
        lineHeight: "20px",
        color: e.color.defaultText,
        borderBottom: `1px solid ${e.appBorderColor}`,
      })),
      B6 = Ot({ from: { transform: "rotate(0deg)" }, to: { transform: "rotate(359deg)" } }),
      P6 = w(ms)({ animation: `${B6} 1s linear infinite` }),
      Ua = { width: 10, marginRight: 8 },
      V1 = w.button(({ isWarning: e, onClick: t, theme: n }) => {
        let r = n.base === "light" ? n.background.warning : "#2e271a";
        return {
          position: "relative",
          display: "flex",
          width: "100%",
          lineHeight: "20px",
          padding: "5px 7px 5px 15px",
          justifyContent: "space-between",
          alignItems: "center",
          background: e ? r : n.background.app,
          border: "none",
          borderBottom: `1px solid ${n.appBorderColor}`,
          color: n.color.defaultText,
          cursor: t ? "pointer" : "default",
          textAlign: "left",
          "& > *": { zIndex: 1 },
          code: { fontFamily: n.typography.fonts.mono, fontSize: "12px" },
        };
      }),
      D1 = w.div(({ isWarning: e, percentage: t, theme: n }) => {
        let r = n.base === "light" ? "#FFE6B1" : "#43361f";
        return {
          display: "block",
          position: "absolute",
          top: "0",
          height: "100%",
          left: "0",
          width: `${t}%`,
          transition: "width 3s ease-out",
          backgroundColor: e ? r : n.background.hoverable,
          pointerEvents: "none",
          zIndex: 0,
        };
      }),
      $a = w.div({ padding: "5px 0" }),
      V6 = w.div(({ expanded: e, theme: t }) => ({
        display: "grid",
        gridTemplateRows: e ? "1fr" : "0fr",
        background: t.background.app,
        borderBottom: e ? `1px solid ${t.appBorderColor}` : "none",
        transition: "grid-template-rows 150ms ease-out",
      })),
      D6 = w.div(({ theme: e }) => ({
        whiteSpace: "nowrap",
        overflow: "hidden",
        color: e.base === "light" ? e.color.dark : e.color.lightest,
      })),
      H6 = w.div(({ isCurrent: e, isFailed: t, isPending: n, theme: r }) => ({
        display: "flex",
        flexDirection: "row",
        gap: 8,
        opacity: n ? 0.7 : 1,
        color: t ? r.color.negativeText : "inherit",
        fontWeight: e || t ? "bold" : "normal",
        fontFamily: "Menlo, monospace",
        fontSize: 12,
        lineHeight: "24px",
        margin: "0 15px",
        "&:first-of-type": { marginTop: 10 },
        "&:last-of-type": { marginBottom: 10 },
        "& > div": { display: "flex", alignItems: "center" },
      })),
      j6 = ({ localBuildProgress: e, expanded: t = !1 }) => {
        let n = Ne({});
        K(() => {
          n.current[e.currentStep] = { ...e };
        }, [e]);
        let r = ["aborted", "error"].includes(e.currentStep),
          i = Wi.map((l) => {
            let { startedAt: o, completedAt: s } = e.stepProgress[l],
              c = !!o && !s,
              d = c && r,
              u = !o,
              m = { ...Ml[l], isCurrent: c, isFailed: d, isPending: u };
            return d
              ? { ...m, icon: a.createElement(St, { style: Ua }), renderLabel: m.renderProgress }
              : c
                ? { ...m, icon: a.createElement(P6, { style: Ua }), renderLabel: m.renderProgress }
                : u
                  ? { ...m, icon: a.createElement(Nu, { style: Ua }), renderLabel: m.renderName }
                  : {
                      ...m,
                      icon: a.createElement(gl, { style: Ua }),
                      renderLabel: m.renderComplete,
                    };
          });
        return a.createElement(
          V6,
          { expanded: t },
          a.createElement(
            D6,
            null,
            i.map(({ icon: l, isCurrent: o, isFailed: s, isPending: c, key: d, renderLabel: u }) =>
              a.createElement(
                H6,
                { isCurrent: o, isFailed: s, isPending: c, key: d },
                a.createElement("div", null, l, u(n.current[d] || e))
              )
            )
          )
        );
      },
      z6 = ({
        branch: e,
        dismissBuildError: t,
        localBuildProgress: n,
        lastBuildOnBranchInProgress: r,
        switchToLastBuildOnBranch: i,
      }) => {
        let [l, o] = a.useState(!1),
          s = () => {
            o(!l);
          };
        if (n) {
          let d = n.currentStep === "aborted",
            u = n.currentStep === "error",
            m = d || u;
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(
              V1,
              { as: u ? "div" : "button", onClick: u ? void 0 : s, isWarning: m },
              a.createElement(D1, { percentage: n.buildProgressPercentage, isWarning: m }),
              a.createElement(
                $a,
                null,
                a.createElement(Tl, { localBuildProgress: n, withEmoji: !0 })
              ),
              u
                ? a.createElement(
                    Je,
                    { onClick: t },
                    a.createElement(vl, { "aria-label": "Dismiss" })
                  )
                : a.createElement(
                    Je,
                    { as: "div" },
                    l ? a.createElement(Mu, null) : a.createElement(_u, null)
                  )
            ),
            a.createElement(j6, { localBuildProgress: n, expanded: l || u })
          );
        }
        function c() {
          return i
            ? r
              ? a.createElement(
                  $a,
                  null,
                  "Reviewing is disabled because there's a newer build in progress on",
                  " ",
                  a.createElement(Oe, null, e),
                  ". This can happen when a build runs in CI."
                )
              : a.createElement(
                  $a,
                  null,
                  "There's a newer snapshot with changes.",
                  " ",
                  a.createElement(Ut, { withArrow: !0, onClick: i }, "Switch to newer snapshot")
                )
            : a.createElement(
                $a,
                null,
                "Reviewing is disabled because there's a newer build on ",
                a.createElement(Oe, null, e),
                "."
              );
        }
        return a.createElement(V1, { onClick: i }, a.createElement(D1, { percentage: 100 }), c());
      },
      U6 = ({ onClose: e }) =>
        a.createElement(
          Qs,
          null,
          a.createElement(
            Xi,
            null,
            a.createElement(
              ur,
              null,
              "Render settings",
              a.createElement(jo, null),
              a.createElement(Zl, { onClick: e }, a.createElement(Il, { "aria-label": "Close" }))
            ),
            a.createElement("p", null, a.createElement(k4, null), "Delay: 300ms"),
            a.createElement("p", null, a.createElement(w4, null), "Animation pause: Ends"),
            a.createElement("p", null, a.createElement(C4, null), "Threshold: 0.2"),
            a.createElement("p", null, a.createElement(S4, null), "Anti-alias: Included")
          ),
          a.createElement(
            Xi,
            null,
            a.createElement(ur, null, "Bounding box", a.createElement(jo, null)),
            a.createElement(
              "dl",
              null,
              a.createElement("dt", null, "Width:"),
              a.createElement("dd", null, "Fill viewport"),
              a.createElement("dt", null, "Height:"),
              a.createElement("dd", null, "Hug contents")
            )
          )
        ),
      X0 = {
        isReviewing: !1,
        userCanReview: !1,
        buildIsReviewable: !1,
        acceptTest: (e, t = "SPEC") => Promise.resolve(),
        unacceptTest: (e, t = "SPEC") => Promise.resolve(),
      },
      ec = je(X0),
      tc = () => kt(ec, "ReviewTest"),
      $6 = ({ children: e, watchState: t = X0 }) => a.createElement(ec.Provider, { value: t }, e),
      W6 = w.div(
        ({ theme: e }) => ({
          position: "relative",
          display: "flex",
          background: "transparent",
          overflow: "hidden",
          margin: 2,
          maxWidth: "calc(100% - 4px)",
          "& > div": {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            p: { maxWidth: 380, textAlign: "center" },
            svg: { width: 24, height: 24 },
          },
          "& > svg": {
            position: "absolute",
            left: "calc(50% - 14px)",
            top: "calc(50% - 14px)",
            width: 20,
            height: 20,
            color: e.color.lightest,
            opacity: 0,
            transition: "opacity 0.1s ease-in-out",
            pointerEvents: "none",
          },
        }),
        ({ href: e }) =>
          e && {
            display: "inline-flex",
            cursor: "pointer",
            "&:hover": { "& > svg": { opacity: 1 }, img: { filter: "brightness(85%)" } },
          }
      ),
      H1 = w.div(({ isVisible: e }) => ({
        position: e ? "static" : "absolute",
        visibility: e ? "visible" : "hidden",
        maxWidth: "100%",
        minHeight: 100,
      })),
      Wa = w.img({
        display: "block",
        width: "100%",
        height: "auto",
        transition: "filter 0.1s ease-in-out, opacity 0.1s ease-in-out",
        "&[data-overlay]": {
          position: "absolute",
          opacity: 0.7,
          pointerEvents: "none",
          transition: "opacity 0.1s ease-in-out",
        },
      }),
      G6 = w(se)({ margin: "30px 15px" }),
      q6 = ({ comparisonImageLoaded: e, focusImageLoaded: t, showDiff: n, showFocus: r }) =>
        n && r ? e && t : n ? e : r ? t : !0,
      Y6 = ({
        componentName: e,
        storyName: t,
        testUrl: n,
        comparisonResult: r,
        latestImage: i,
        baselineImage: l,
        baselineImageVisible: o,
        diffImage: s,
        focusImage: c,
        diffVisible: d,
        focusVisible: u,
        ...m
      }) => {
        let p = zt(),
          f = !!i && !!s && r === "CHANGED",
          g = r === "CAPTURE_ERROR",
          v = f && !!c,
          k = f ? { as: "a", href: n, target: "_blank", title: "View on Chromatic.com" } : {},
          E = f && d,
          h = v && u,
          [y, b] = a.useState(!1),
          [C, O] = a.useState(!1),
          [I, U] = a.useState(!1),
          [G, oe] = a.useState(!1),
          ee = o ? C : y,
          ke = q6({ comparisonImageLoaded: I, focusImageLoaded: G, showDiff: E, showFocus: h });
        return a.createElement(
          W6,
          { ...m, ...k },
          i &&
            a.createElement(
              H1,
              {
                isVisible: !l || !o,
                style: { aspectRatio: `${i.imageWidth} / ${i.imageHeight}`, width: i.imageWidth },
              },
              (!y || !ke) && a.createElement(Ji, null),
              a.createElement(Wa, {
                alt: `Latest snapshot for the '${t}' story of the '${e}' component`,
                src: i.imageUrl,
                style: { opacity: y ? 1 : 0 },
                onLoad: () => b(!0),
              })
            ),
          l &&
            a.createElement(
              H1,
              {
                isVisible: o,
                style: { aspectRatio: `${l.imageWidth} / ${l.imageHeight}`, width: l.imageWidth },
              },
              (!C || !ke) && a.createElement(Ji, null),
              a.createElement(Wa, {
                alt: `Baseline snapshot for the '${t}' story of the '${e}' component`,
                src: l.imageUrl,
                style: { opacity: C ? 1 : 0 },
                onLoad: () => O(!0),
              })
            ),
          f &&
            ee &&
            a.createElement(Wa, {
              alt: "",
              "data-overlay": "diff",
              src: s.imageUrl,
              style: {
                width: s.imageWidth,
                maxWidth: `${(s.imageWidth / i.imageWidth) * 100}%`,
                opacity: E && I ? 0.7 : 0,
              },
              onLoad: () => U(!0),
            }),
          v &&
            ee &&
            a.createElement(Wa, {
              alt: "",
              "data-overlay": "focus",
              src: c.imageUrl,
              style: {
                width: c.imageWidth,
                maxWidth: `${(c.imageWidth / i.imageWidth) * 100}%`,
                opacity: h && G ? 0.7 : 0,
                filter: h ? "blur(2px)" : "none",
              },
              onLoad: () => oe(!0),
            }),
          f && a.createElement(ds, null),
          g &&
            !i &&
            a.createElement(
              G6,
              null,
              a.createElement(mu, { color: p.base === "light" ? "currentColor" : p.color.medium }),
              a.createElement(
                j,
                { center: !0, muted: !0 },
                "A snapshot couldn't be captured. This often occurs when a story has a code error. Confirm that this story successfully renders in your local Storybook and run the build again."
              )
            )
        );
      },
      Q6 = (e) =>
        a.createElement(
          "svg",
          {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          a.createElement("path", {
            d: "M5.06982 9.68493L7.99484 4.63927L14.5786 4.62406C14.5252 4.52043 14.4696 4.41742 14.4109 4.31532C12.372 0.768556 7.84405 -0.453864 4.29726 1.58495C3.24614 2.1892 2.39921 3.01211 1.78076 3.96327L5.06982 9.68493Z",
            fill: "#DB4437",
          }),
          a.createElement("path", {
            d: "M10.9276 9.68457L5.09539 9.6743L1.79036 3.98022C1.72727 4.07822 1.66591 4.17795 1.60682 4.27985C-0.445348 7.81892 0.759985 12.3515 4.29905 14.4037C5.34791 15.0118 6.48403 15.3338 7.617 15.3939L10.9276 9.68457Z",
            fill: "#0F9D58",
          }),
          a.createElement("path", {
            d: "M7.98649 4.61194L10.9032 9.66241L7.63525 15.3778C7.75167 15.3833 7.86871 15.3863 7.98649 15.3863C12.0775 15.3863 15.3939 12.0699 15.3939 7.97893C15.3939 6.76648 15.1025 5.62211 14.5861 4.61194L7.98649 4.61194Z",
            fill: "#FFCD40",
          }),
          a.createElement("path", {
            d: "M8.01367 4.6366V6.40005L14.613 4.6366H8.01367Z",
            fill: "url(#paint0_radial_466_21161)",
          }),
          a.createElement("path", {
            d: "M1.78198 4.00098L6.60102 8.8192L5.09764 9.687L1.78198 4.00098Z",
            fill: "url(#paint1_radial_466_21161)",
          }),
          a.createElement("path", {
            d: "M7.6626 15.4017L9.42689 8.81921L10.9303 9.68702L7.6626 15.4017Z",
            fill: "url(#paint2_radial_466_21161)",
          }),
          a.createElement("ellipse", {
            cx: "8.01347",
            cy: "8.00358",
            rx: "3.36699",
            ry: "3.36699",
            fill: "#F1F1F1",
          }),
          a.createElement("ellipse", {
            cx: "8.01367",
            cy: "8.00354",
            rx: "2.69361",
            ry: "2.6936",
            fill: "#4285F4",
          }),
          a.createElement(
            "defs",
            null,
            a.createElement(
              "radialGradient",
              {
                id: "paint0_radial_466_21161",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(7.69229 4.63226) scale(7.07721 1.89116)",
              },
              a.createElement("stop", { stopColor: "#3E2723", stopOpacity: "0.2" }),
              a.createElement("stop", { offset: "1", stopColor: "#3E2723", stopOpacity: "0.01" })
            ),
            a.createElement(
              "radialGradient",
              {
                id: "paint1_radial_466_21161",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(1.77445 4.00677) scale(6.56938 7.75127)",
              },
              a.createElement("stop", { stopColor: "#3E2723", stopOpacity: "0.2" }),
              a.createElement("stop", { offset: "1", stopColor: "#3E2723", stopOpacity: "0.01" })
            ),
            a.createElement(
              "radialGradient",
              {
                id: "paint2_radial_466_21161",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(8.00025 8.01489) scale(7.39644 14.8995)",
              },
              a.createElement("stop", { stopColor: "#263238", stopOpacity: "0.2" }),
              a.createElement("stop", { offset: "1", stopColor: "#263238", stopOpacity: "0.01" })
            )
          )
        ),
      K6 = (e) =>
        a.createElement(
          "svg",
          {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          a.createElement("circle", {
            cx: "8.00009",
            cy: "7.99997",
            r: "7.7037",
            fill: "url(#paint0_linear_466_21186)",
          }),
          a.createElement("ellipse", {
            cx: "8.00094",
            cy: "8.00094",
            rx: "7.06173",
            ry: "7.06173",
            fill: "url(#paint1_radial_466_21186)",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8.07134 1.36353C8.03043 1.36353 7.99727 1.39669 7.99727 1.4376V2.56469C7.99727 2.6056 8.03043 2.63877 8.07134 2.63877C8.11225 2.63877 8.14542 2.6056 8.14542 2.56469V1.4376C8.14542 1.39669 8.11225 1.36353 8.07134 1.36353ZM8.07134 14.7792C8.11225 14.7792 8.14542 14.746 8.14542 14.7051V13.578C8.14542 13.5371 8.11225 13.5039 8.07134 13.5039C8.03043 13.5039 7.99727 13.5371 7.99727 13.578V14.7051C7.99727 14.746 8.03043 14.7792 8.07134 14.7792ZM8.64883 1.46214C8.65292 1.42143 8.68923 1.39175 8.72994 1.39584C8.77064 1.39993 8.80032 1.43625 8.79623 1.47695L8.74793 1.95766C8.74384 1.99836 8.70752 2.02804 8.66682 2.02395C8.62612 2.01986 8.59643 1.98355 8.60052 1.94284L8.64883 1.46214ZM7.41372 14.7468C7.45442 14.7509 7.49074 14.7213 7.49483 14.6806L7.54313 14.1998C7.54722 14.1591 7.51754 14.1228 7.47683 14.1187C7.43613 14.1146 7.39982 14.1443 7.39573 14.185L7.34742 14.6657C7.34333 14.7064 7.37301 14.7428 7.41372 14.7468ZM14.7051 7.99727C14.746 7.99727 14.7792 8.03043 14.7792 8.07134C14.7792 8.11225 14.746 8.14542 14.7051 8.14542H13.578C13.5371 8.14542 13.5039 8.11225 13.5039 8.07134C13.5039 8.03043 13.5371 7.99727 13.578 7.99727H14.7051ZM1.36353 8.07134C1.36353 8.11225 1.39669 8.14542 1.4376 8.14542H2.56469C2.6056 8.14542 2.63877 8.11225 2.63877 8.07134C2.63877 8.03043 2.6056 7.99727 2.56469 7.99727H1.4376C1.39669 7.99727 1.36353 8.03043 1.36353 8.07134ZM14.6806 8.64883C14.7213 8.65292 14.7509 8.68923 14.7468 8.72994C14.7428 8.77064 14.7064 8.80032 14.6657 8.79623L14.185 8.74793C14.1443 8.74384 14.1146 8.70752 14.1187 8.66682C14.1228 8.62612 14.1591 8.59643 14.1998 8.60052L14.6806 8.64883ZM1.39584 7.41372C1.39175 7.45442 1.42143 7.49074 1.46214 7.49483L1.94284 7.54313C1.98355 7.54722 2.01986 7.51754 2.02395 7.47683C2.02804 7.43613 1.99836 7.39982 1.95766 7.39573L1.47695 7.34742C1.43625 7.34333 1.39993 7.37301 1.39584 7.41372ZM12.7097 3.3282C12.7387 3.29927 12.7856 3.29927 12.8145 3.3282C12.8434 3.35713 12.8434 3.40403 12.8145 3.43296L12.0175 4.22994C11.9886 4.25887 11.9417 4.25887 11.9127 4.22994C11.8838 4.20101 11.8838 4.15411 11.9127 4.12518L12.7097 3.3282ZM3.3282 12.8145C3.35713 12.8434 3.40403 12.8434 3.43296 12.8145L4.22994 12.0175C4.25887 11.9886 4.25887 11.9417 4.22994 11.9127C4.20101 11.8838 4.15411 11.8838 4.12518 11.9127L3.3282 12.7097C3.29927 12.7387 3.29927 12.7856 3.3282 12.8145ZM13.1523 3.80568C13.1839 3.77973 13.2306 3.78433 13.2566 3.81595C13.2825 3.84757 13.2779 3.89425 13.2463 3.9202L12.8729 4.22664C12.8413 4.2526 12.7946 4.248 12.7686 4.21638C12.7427 4.18475 12.7473 4.13808 12.7789 4.11212L13.1523 3.80568ZM2.88614 12.3267C2.91209 12.3584 2.95876 12.363 2.99039 12.337L3.36378 12.0306C3.3954 12.0046 3.4 11.9579 3.37404 11.9263C3.34809 11.8947 3.30142 11.8901 3.26979 11.916L2.8964 12.2225C2.86478 12.2484 2.86018 12.2951 2.88614 12.3267ZM12.8145 12.7097C12.8434 12.7387 12.8434 12.7856 12.8145 12.8145C12.7856 12.8434 12.7387 12.8434 12.7097 12.8145L11.9127 12.0175C11.8838 11.9886 11.8838 11.9417 11.9127 11.9127C11.9417 11.8838 11.9886 11.8838 12.0175 11.9127L12.8145 12.7097ZM3.3282 3.3282C3.29927 3.35713 3.29927 3.40403 3.3282 3.43296L4.12518 4.22994C4.15411 4.25887 4.20101 4.25887 4.22994 4.22994C4.25887 4.20101 4.25887 4.15411 4.22994 4.12518L3.43296 3.3282C3.40403 3.29927 3.35713 3.29927 3.3282 3.3282ZM12.337 13.1523C12.363 13.1839 12.3584 13.2306 12.3267 13.2566C12.2951 13.2825 12.2484 13.2779 12.2225 13.2463L11.916 12.8729C11.8901 12.8413 11.8947 12.7946 11.9263 12.7686C11.9579 12.7427 12.0046 12.7473 12.0306 12.7789L12.337 13.1523ZM3.81595 2.88614C3.78433 2.91209 3.77973 2.95876 3.80568 2.99039L4.11212 3.36378C4.13808 3.3954 4.18475 3.4 4.21638 3.37404C4.248 3.34809 4.2526 3.30142 4.22664 3.26979L3.9202 2.8964C3.89425 2.86478 3.84757 2.86018 3.81595 2.88614ZM10.5415 1.91422C10.5572 1.87643 10.6005 1.85848 10.6383 1.87413C10.6761 1.88979 10.6941 1.93312 10.6784 1.97092L10.2471 3.01221C10.2314 3.05 10.1881 3.06795 10.1503 3.05229C10.1125 3.03664 10.0946 2.99331 10.1102 2.95551L10.5415 1.91422ZM5.50437 14.2686C5.54216 14.2842 5.58549 14.2663 5.60115 14.2285L6.03247 13.1872C6.04813 13.1494 6.03018 13.1061 5.99238 13.0904C5.95459 13.0747 5.91126 13.0927 5.8956 13.1305L5.46428 14.1718C5.44862 14.2096 5.46657 14.2529 5.50437 14.2686ZM11.1332 2.18598C11.1524 2.1499 11.1973 2.13628 11.2334 2.15557C11.2695 2.17486 11.2831 2.21974 11.2638 2.25582L11.0361 2.68183C11.0168 2.7179 10.9719 2.73152 10.9358 2.71223C10.8998 2.69295 10.8861 2.64806 10.9054 2.61199L11.1332 2.18598ZM4.90931 13.9871C4.94539 14.0064 4.99027 13.9928 5.00955 13.9567L5.23726 13.5307C5.25654 13.4946 5.24293 13.4497 5.20685 13.4305C5.17077 13.4112 5.12589 13.4248 5.1066 13.4609L4.8789 13.8869C4.85961 13.923 4.87323 13.9678 4.90931 13.9871ZM14.2285 10.5415C14.2663 10.5572 14.2842 10.6005 14.2686 10.6383C14.2529 10.6761 14.2096 10.6941 14.1718 10.6784L13.1305 10.2471C13.0927 10.2314 13.0747 10.1881 13.0904 10.1503C13.1061 10.1125 13.1494 10.0946 13.1872 10.1102L14.2285 10.5415ZM1.87412 5.50437C1.85846 5.54216 1.87641 5.58549 1.91421 5.60115L2.95551 6.03247C2.99331 6.04813 3.03664 6.03018 3.05229 5.99238C3.06795 5.95459 3.05 5.91126 3.0122 5.8956L1.9709 5.46428C1.9331 5.44862 1.88977 5.46657 1.87412 5.50437ZM13.9567 11.1332C13.9928 11.1524 14.0064 11.1973 13.9871 11.2334C13.9678 11.2695 13.923 11.2831 13.8869 11.2638L13.4609 11.0361C13.4248 11.0168 13.4112 10.9719 13.4305 10.9358C13.4497 10.8998 13.4946 10.8861 13.5307 10.9054L13.9567 11.1332ZM2.15557 4.90929C2.13628 4.94537 2.1499 4.99025 2.18598 5.00954L2.61199 5.23726C2.64806 5.25654 2.69295 5.24293 2.71223 5.20685C2.73152 5.17077 2.7179 5.12589 2.68183 5.1066L2.25582 4.87888C2.21974 4.8596 2.17486 4.87321 2.15557 4.90929ZM14.1718 5.46428C14.2096 5.44862 14.2529 5.46657 14.2686 5.50437C14.2842 5.54216 14.2663 5.58549 14.2285 5.60115L13.1872 6.03247C13.1494 6.04813 13.1061 6.03018 13.0904 5.99238C13.0747 5.95459 13.0927 5.91126 13.1305 5.8956L14.1718 5.46428ZM1.87413 10.6383C1.88979 10.6761 1.93312 10.6941 1.97092 10.6784L3.01221 10.2471C3.05 10.2314 3.06795 10.1881 3.05229 10.1503C3.03664 10.1125 2.99331 10.0946 2.95551 10.1102L1.91422 10.5415C1.87643 10.5572 1.85848 10.6005 1.87413 10.6383ZM14.3979 6.07477C14.4371 6.0629 14.4785 6.08501 14.4903 6.12416C14.5022 6.1633 14.4801 6.20467 14.441 6.21654L13.9787 6.35677C13.9396 6.36864 13.8982 6.34654 13.8863 6.30739C13.8744 6.26824 13.8965 6.22688 13.9357 6.215L14.3979 6.07477ZM1.65237 10.0185C1.66425 10.0577 1.70561 10.0798 1.74476 10.0679L2.20699 9.92769C2.24614 9.91581 2.26825 9.87445 2.25637 9.8353C2.2445 9.79615 2.20313 9.77404 2.16399 9.78592L1.70175 9.92615C1.6626 9.93802 1.64049 9.97939 1.65237 10.0185ZM10.6383 14.2686C10.6005 14.2842 10.5572 14.2663 10.5415 14.2285L10.1102 13.1872C10.0946 13.1494 10.1125 13.1061 10.1503 13.0904C10.1881 13.0747 10.2314 13.0927 10.2471 13.1305L10.6784 14.1718C10.6941 14.2096 10.6761 14.2529 10.6383 14.2686ZM5.50437 1.87413C5.46657 1.88979 5.44862 1.93312 5.46428 1.97092L5.8956 3.01221C5.91126 3.05 5.95459 3.06795 5.99238 3.05229C6.03018 3.03664 6.04813 2.99331 6.03247 2.95551L5.60115 1.91422C5.58549 1.87643 5.54216 1.85848 5.50437 1.87413ZM10.0679 14.3979C10.0798 14.4371 10.0577 14.4785 10.0185 14.4903C9.97939 14.5022 9.93802 14.4801 9.92615 14.441L9.78592 13.9787C9.77404 13.9396 9.79615 13.8982 9.8353 13.8863C9.87445 13.8744 9.91581 13.8965 9.92769 13.9357L10.0679 14.3979ZM6.12417 1.65237C6.08502 1.66424 6.06291 1.70561 6.07479 1.74475L6.215 2.20699C6.22688 2.24614 6.26824 2.26825 6.30739 2.25637C6.34654 2.2445 6.36864 2.20314 6.35677 2.16399L6.21656 1.70175C6.20468 1.6626 6.16332 1.64049 6.12417 1.65237ZM9.29287 1.55062C9.30085 1.5105 9.33985 1.48444 9.37997 1.49242C9.4201 1.5004 9.44615 1.5394 9.43817 1.57952L9.21829 2.68496C9.21031 2.72508 9.17131 2.75114 9.13119 2.74316C9.09107 2.73518 9.06501 2.69618 9.07299 2.65606L9.29287 1.55062ZM6.76272 14.6503C6.80284 14.6583 6.84184 14.6322 6.84982 14.5921L7.0697 13.4866C7.07768 13.4465 7.05162 13.4075 7.0115 13.3995C6.97137 13.3916 6.93238 13.4176 6.9244 13.4577L6.70452 14.5632C6.69654 14.6033 6.72259 14.6423 6.76272 14.6503ZM9.92615 1.70175C9.93802 1.6626 9.97939 1.64049 10.0185 1.65237C10.0577 1.66425 10.0798 1.70561 10.0679 1.74476L9.92769 2.20699C9.91581 2.24614 9.87445 2.26825 9.8353 2.25637C9.79615 2.2445 9.77404 2.20313 9.78592 2.16399L9.92615 1.70175ZM6.12417 14.4903C6.16332 14.5022 6.20469 14.4801 6.21656 14.441L6.35677 13.9787C6.36864 13.9396 6.34653 13.8982 6.30739 13.8863C6.26824 13.8744 6.22687 13.8965 6.215 13.9357L6.07479 14.398C6.06291 14.4371 6.08502 14.4785 6.12417 14.4903ZM14.5921 9.29287C14.6322 9.30085 14.6583 9.33985 14.6503 9.37997C14.6423 9.4201 14.6033 9.44615 14.5632 9.43817L13.4577 9.21829C13.4176 9.21031 13.3916 9.17131 13.3995 9.13119C13.4075 9.09107 13.4465 9.06501 13.4866 9.07299L14.5921 9.29287ZM1.49242 6.76272C1.48444 6.80284 1.5105 6.84184 1.55062 6.84982L2.65606 7.0697C2.69618 7.07768 2.73518 7.05162 2.74316 7.0115C2.75114 6.97137 2.72508 6.93238 2.68496 6.9244L1.57952 6.70452C1.5394 6.69654 1.5004 6.72259 1.49242 6.76272ZM14.441 9.92615C14.4801 9.93802 14.5022 9.97939 14.4903 10.0185C14.4785 10.0577 14.4371 10.0798 14.3979 10.0679L13.9357 9.92769C13.8965 9.91581 13.8744 9.87445 13.8863 9.8353C13.8982 9.79615 13.9396 9.77404 13.9787 9.78592L14.441 9.92615ZM1.65237 6.12415C1.64049 6.1633 1.6626 6.20467 1.70175 6.21654L2.16399 6.35677C2.20313 6.36864 2.2445 6.34654 2.25637 6.30739C2.26825 6.26824 2.24614 6.22688 2.20699 6.215L1.74476 6.07477C1.70561 6.0629 1.66425 6.08501 1.65237 6.12415ZM13.5459 4.32424C13.58 4.30151 13.626 4.31066 13.6487 4.34468C13.6714 4.37869 13.6623 4.42469 13.6282 4.44742L12.6911 5.0736C12.6571 5.09633 12.6111 5.08718 12.5884 5.05317C12.5656 5.01915 12.5748 4.97315 12.6088 4.95042L13.5459 4.32424ZM2.494 11.798C2.51673 11.832 2.56273 11.8412 2.59675 11.8184L3.53389 11.1923C3.56791 11.1695 3.57706 11.1235 3.55433 11.0895C3.5316 11.0555 3.4856 11.0464 3.45159 11.0691L2.51444 11.6953C2.48043 11.718 2.47128 11.764 2.494 11.798ZM13.8869 4.87888C13.923 4.8596 13.9678 4.87321 13.9871 4.90929C14.0064 4.94537 13.9928 4.99025 13.9567 5.00954L13.5307 5.23726C13.4946 5.25654 13.4497 5.24293 13.4305 5.20685C13.4112 5.17077 13.4248 5.12589 13.4609 5.1066L13.8869 4.87888ZM2.15557 11.2334C2.17486 11.2695 2.21974 11.2831 2.25582 11.2638L2.68183 11.0361C2.7179 11.0168 2.73152 10.9719 2.71223 10.9358C2.69295 10.8998 2.64806 10.8861 2.61199 10.9054L2.18598 11.1332C2.1499 11.1524 2.13628 11.1973 2.15557 11.2334ZM11.8184 13.5459C11.8412 13.58 11.832 13.626 11.798 13.6487C11.764 13.6714 11.718 13.6623 11.6953 13.6282L11.0691 12.6911C11.0464 12.6571 11.0555 12.6111 11.0895 12.5884C11.1235 12.5656 11.1695 12.5748 11.1923 12.6088L11.8184 13.5459ZM4.34468 2.494C4.31066 2.51673 4.30151 2.56273 4.32424 2.59675L4.95042 3.53389C4.97315 3.56791 5.01915 3.57706 5.05317 3.55433C5.08718 3.5316 5.09633 3.4856 5.0736 3.45159L4.44742 2.51444C4.42469 2.48043 4.37869 2.47128 4.34468 2.494ZM11.2638 13.8869C11.2831 13.923 11.2695 13.9678 11.2334 13.9871C11.1973 14.0064 11.1524 13.9928 11.1331 13.9567L10.9054 13.5307C10.8861 13.4946 10.8998 13.4497 10.9358 13.4305C10.9719 13.4112 11.0168 13.4248 11.0361 13.4609L11.2638 13.8869ZM4.90931 2.15557C4.87323 2.17485 4.85961 2.21974 4.8789 2.25581L5.1066 2.68182C5.12589 2.7179 5.17077 2.73152 5.20685 2.71223C5.24293 2.69295 5.25654 2.64807 5.23726 2.61199L5.00955 2.18598C4.99027 2.1499 4.94539 2.13628 4.90931 2.15557ZM11.6953 2.51444C11.718 2.48043 11.764 2.47128 11.798 2.494C11.832 2.51673 11.8412 2.56273 11.8184 2.59675L11.1923 3.53389C11.1695 3.56791 11.1235 3.57706 11.0895 3.55433C11.0555 3.5316 11.0464 3.4856 11.0691 3.45159L11.6953 2.51444ZM4.34468 13.6487C4.37869 13.6714 4.42469 13.6623 4.44742 13.6282L5.0736 12.6911C5.09633 12.6571 5.08718 12.6111 5.05317 12.5884C5.01915 12.5656 4.97315 12.5748 4.95042 12.6088L4.32424 13.5459C4.30151 13.58 4.31066 13.626 4.34468 13.6487ZM12.2225 2.8964C12.2484 2.86478 12.2951 2.86018 12.3267 2.88614C12.3584 2.91209 12.363 2.95876 12.337 2.99039L12.0306 3.36378C12.0046 3.3954 11.9579 3.4 11.9263 3.37404C11.8947 3.34809 11.8901 3.30142 11.916 3.26979L12.2225 2.8964ZM3.81595 13.2566C3.84757 13.2825 3.89425 13.2779 3.9202 13.2463L4.22664 12.8729C4.2526 12.8413 4.248 12.7946 4.21638 12.7686C4.18475 12.7427 4.13808 12.7473 4.11212 12.7789L3.80568 13.1523C3.77973 13.1839 3.78433 13.2306 3.81595 13.2566ZM13.6282 11.6953C13.6623 11.718 13.6714 11.764 13.6487 11.798C13.626 11.832 13.58 11.8412 13.5459 11.8184L12.6088 11.1923C12.5748 11.1695 12.5656 11.1235 12.5884 11.0895C12.6111 11.0555 12.6571 11.0464 12.6911 11.0691L13.6282 11.6953ZM2.494 4.34468C2.47128 4.37869 2.48043 4.42469 2.51444 4.44742L3.45159 5.0736C3.4856 5.09633 3.5316 5.08718 3.55433 5.05317C3.57706 5.01915 3.56791 4.97315 3.53389 4.95042L2.59675 4.32424C2.56273 4.30151 2.51673 4.31066 2.494 4.34468ZM13.2463 12.2225C13.2779 12.2484 13.2825 12.2951 13.2566 12.3267C13.2306 12.3584 13.1839 12.363 13.1523 12.337L12.7789 12.0306C12.7473 12.0046 12.7427 11.9579 12.7686 11.9263C12.7946 11.8947 12.8413 11.8901 12.8729 11.916L13.2463 12.2225ZM2.88614 3.81595C2.86018 3.84757 2.86478 3.89425 2.8964 3.9202L3.26979 4.22664C3.30142 4.2526 3.34809 4.248 3.37404 4.21638C3.4 4.18475 3.3954 4.13808 3.36378 4.11212L2.99039 3.80568C2.95876 3.77973 2.91209 3.78433 2.88614 3.81595ZM14.5632 6.70452C14.6033 6.69654 14.6423 6.72259 14.6503 6.76272C14.6583 6.80284 14.6322 6.84184 14.5921 6.84982L13.4866 7.0697C13.4465 7.07768 13.4075 7.05162 13.3995 7.0115C13.3916 6.97137 13.4176 6.93238 13.4577 6.9244L14.5632 6.70452ZM1.49242 9.37997C1.5004 9.4201 1.5394 9.44615 1.57952 9.43817L2.68496 9.21829C2.72508 9.21031 2.75114 9.17131 2.74316 9.13119C2.73518 9.09107 2.69618 9.06501 2.65606 9.07299L1.55062 9.29287C1.5105 9.30085 1.48444 9.33985 1.49242 9.37997ZM14.6657 7.34742C14.7064 7.34333 14.7428 7.37301 14.7468 7.41372C14.7509 7.45442 14.7213 7.49074 14.6806 7.49483L14.1998 7.54313C14.1591 7.54722 14.1228 7.51754 14.1187 7.47683C14.1146 7.43613 14.1443 7.39982 14.185 7.39573L14.6657 7.34742ZM1.39584 8.72994C1.39993 8.77064 1.43625 8.80032 1.47695 8.79623L1.95766 8.74793C1.99836 8.74384 2.02804 8.70752 2.02395 8.66682C2.01986 8.62612 1.98355 8.59643 1.94284 8.60052L1.46214 8.64883C1.42143 8.65292 1.39175 8.68923 1.39584 8.72994ZM9.43817 14.5632C9.44615 14.6033 9.4201 14.6423 9.37997 14.6503C9.33985 14.6583 9.30085 14.6322 9.29287 14.5921L9.07299 13.4866C9.06501 13.4465 9.09107 13.4075 9.13119 13.3995C9.17131 13.3916 9.21031 13.4176 9.21829 13.4577L9.43817 14.5632ZM6.76272 1.49242C6.72259 1.5004 6.69654 1.5394 6.70452 1.57952L6.9244 2.68496C6.93238 2.72508 6.97137 2.75114 7.0115 2.74316C7.05162 2.73518 7.07768 2.69618 7.0697 2.65606L6.84982 1.55062C6.84184 1.5105 6.80284 1.48444 6.76272 1.49242ZM8.79623 14.6657C8.80032 14.7064 8.77064 14.7428 8.72994 14.7468C8.68923 14.7509 8.65292 14.7213 8.64883 14.6806L8.60052 14.1998C8.59643 14.1591 8.62612 14.1228 8.66682 14.1187C8.70752 14.1146 8.74384 14.1443 8.74793 14.185L8.79623 14.6657ZM7.41372 1.39584C7.37301 1.39993 7.34333 1.43625 7.34742 1.47695L7.39573 1.95766C7.39982 1.99836 7.43613 2.02804 7.47683 2.02395C7.51754 2.01986 7.54722 1.98355 7.54313 1.94284L7.49483 1.46214C7.49074 1.42143 7.45442 1.39175 7.41372 1.39584Z",
            fill: "#DDDDDD",
          }),
          a.createElement("path", {
            d: "M3.14941 12.8505L7.29562 7.28674L7.99989 7.99218L3.14941 12.8505Z",
            fill: "#DDDDDD",
          }),
          a.createElement("path", {
            d: "M7.28662 7.29574L12.8504 3.14954L7.99204 8.00002L7.28662 7.29574Z",
            fill: "#EE4444",
          }),
          a.createElement("path", {
            d: "M12.8505 3.14954L8.70427 8.71332L8 8.00789L12.8505 3.14954Z",
            fill: "#CC0000",
          }),
          a.createElement("path", {
            d: "M3.14941 12.8505L8.7132 8.70427L8.00777 8L3.14941 12.8505Z",
            fill: "#AAAAAA",
          }),
          a.createElement(
            "defs",
            null,
            a.createElement(
              "linearGradient",
              {
                id: "paint0_linear_466_21186",
                x1: "0.300303",
                y1: "0.300951",
                x2: "0.300303",
                y2: "15.7084",
                gradientUnits: "userSpaceOnUse",
              },
              a.createElement("stop", { stopColor: "#F8F8F8" }),
              a.createElement("stop", { offset: "1", stopColor: "#CCCCCC" })
            ),
            a.createElement(
              "radialGradient",
              {
                id: "paint1_radial_466_21186",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(8.00216 8.0046) scale(7.06173)",
              },
              a.createElement("stop", { stopColor: "#00F0FF" }),
              a.createElement("stop", { offset: "1", stopColor: "#0070E0" })
            )
          )
        ),
      J6 = (e) =>
        a.createElement(
          "svg",
          {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          a.createElement("path", {
            d: "M14.9596 5.19849C14.6332 4.41337 13.9721 3.56574 13.453 3.29783C13.8755 4.12612 14.12 4.95699 14.2134 5.57708C14.2134 5.5783 14.2139 5.58133 14.2149 5.58958C13.3657 3.47293 11.9257 2.61943 10.7499 0.761053C10.6905 0.667084 10.631 0.572865 10.573 0.473553C10.5434 0.422834 10.5159 0.371004 10.4903 0.318178C10.4414 0.223861 10.4038 0.124166 10.378 0.0211155C10.3782 0.0162369 10.3765 0.0114673 10.3734 0.00774353C10.3702 0.0040198 10.3658 0.00161108 10.3609 0.000990505C10.3563 -0.000330168 10.3515 -0.000330168 10.3468 0.000990505C10.3458 0.0013655 10.3442 0.00258425 10.3431 0.00302175C10.3414 0.003678 10.3393 0.005178 10.3376 0.00614675C10.3384 0.00502175 10.3402 0.0024905 10.3407 0.00189675C8.45416 1.10677 7.81416 3.15068 7.75535 4.17327C7.00199 4.22506 6.28171 4.50262 5.68841 4.96977C5.62629 4.9173 5.56135 4.86827 5.49388 4.8229C5.3227 4.22402 5.31543 3.59017 5.47282 2.98752C4.70132 3.3388 4.10126 3.89408 3.66501 4.3844H3.66154C3.36382 4.0073 3.38482 2.76337 3.40179 2.50365C3.39822 2.48755 3.17969 2.61708 3.15107 2.63662C2.88835 2.82414 2.64275 3.03454 2.41713 3.26537C2.16039 3.52573 1.92581 3.80705 1.71582 4.1064C1.71582 4.10677 1.7156 4.10721 1.71547 4.10758C1.71547 4.10718 1.71569 4.10677 1.71582 4.1064C1.23289 4.79075 0.890387 5.56404 0.7081 6.38155C0.704506 6.39783 0.701475 6.41471 0.697975 6.43112C0.68385 6.49724 0.632975 6.82799 0.624068 6.89987C0.623381 6.9054 0.623068 6.91071 0.622412 6.91624C0.556638 7.2582 0.515905 7.60451 0.500537 7.9524C0.500537 7.96521 0.499756 7.9779 0.499756 7.99074C0.499881 12.138 3.86238 15.5 8.01001 15.5C11.7245 15.5 14.8088 12.8035 15.4126 9.26152C15.4253 9.1654 15.4355 9.06877 15.4467 8.9718C15.596 7.68399 15.4301 6.3304 14.9596 5.19849ZM6.30351 11.0764C6.33863 11.0932 6.37163 11.1116 6.40769 11.1276C6.40919 11.1287 6.41126 11.1298 6.41279 11.1308C6.37608 11.1132 6.33965 11.0951 6.30351 11.0764ZM14.2155 5.59143L14.2145 5.58415C14.2149 5.5868 14.2153 5.58958 14.2158 5.59224L14.2155 5.59143Z",
            fill: "url(#paint0_linear_466_21172)",
          }),
          a.createElement("path", {
            d: "M14.9598 5.19851C14.6334 4.41338 13.9723 3.56576 13.4532 3.29785C13.8757 4.12613 14.1202 4.95701 14.2136 5.5771C14.2136 5.57529 14.214 5.5786 14.2148 5.58416C14.2151 5.58682 14.2156 5.5896 14.216 5.59226C14.9246 7.5132 14.5386 9.46657 13.9823 10.6602C13.1217 12.5071 11.0381 14.3999 7.77678 14.3076C4.25319 14.2078 1.149 11.5934 0.569531 8.16904C0.463937 7.62904 0.569531 7.35485 0.622656 6.91641C0.557938 7.25441 0.533281 7.35204 0.500781 7.95257C0.500781 7.96538 0.5 7.97807 0.5 7.99091C0.500063 12.138 3.86256 15.5 8.01019 15.5C11.7247 15.5 14.8089 12.8035 15.4128 9.26154C15.4255 9.16541 15.4357 9.06879 15.4469 8.97182C15.5962 7.68401 15.4303 6.33041 14.9598 5.19851Z",
            fill: "url(#paint1_radial_466_21172)",
          }),
          a.createElement("path", {
            d: "M14.9598 5.19851C14.6334 4.41338 13.9723 3.56576 13.4532 3.29785C13.8757 4.12613 14.1202 4.95701 14.2136 5.5771C14.2136 5.57529 14.214 5.5786 14.2148 5.58416C14.2151 5.58682 14.2156 5.5896 14.216 5.59226C14.9246 7.5132 14.5386 9.46657 13.9823 10.6602C13.1217 12.5071 11.0381 14.3999 7.77678 14.3076C4.25319 14.2078 1.149 11.5934 0.569531 8.16904C0.463937 7.62904 0.569531 7.35485 0.622656 6.91641C0.557938 7.25441 0.533281 7.35204 0.500781 7.95257C0.500781 7.96538 0.5 7.97807 0.5 7.99091C0.500063 12.138 3.86256 15.5 8.01019 15.5C11.7247 15.5 14.8089 12.8035 15.4128 9.26154C15.4255 9.16541 15.4357 9.06879 15.4469 8.97182C15.5962 7.68401 15.4303 6.33041 14.9598 5.19851Z",
            fill: "url(#paint2_radial_466_21172)",
          }),
          a.createElement("path", {
            d: "M11.3101 6.08127C11.3265 6.09277 11.3413 6.10421 11.3567 6.11564C11.1683 5.78113 10.9336 5.47487 10.6596 5.20589C8.32502 2.87164 10.0474 0.144581 10.3379 0.00608106C10.3387 0.00495606 10.3405 0.0024248 10.341 0.00183105C8.45443 1.10671 7.81443 3.15061 7.75562 4.17321C7.84312 4.16714 7.93037 4.1598 8.01943 4.1598C9.42727 4.1598 10.6535 4.93386 11.3101 6.08127Z",
            fill: "url(#paint3_radial_466_21172)",
          }),
          a.createElement("path", {
            d: "M8.02405 6.54735C8.01177 6.73417 7.35173 7.37838 7.12092 7.37838C4.98533 7.37838 4.63867 8.6701 4.63867 8.6701C4.73327 9.75792 5.49058 10.6537 6.40777 11.1277C6.44961 11.1493 6.49195 11.1689 6.53433 11.1882C6.60698 11.2203 6.68054 11.2504 6.75492 11.2784C7.0694 11.3897 7.39881 11.4532 7.73214 11.4668C11.4753 11.6424 12.2005 6.99201 9.49917 5.64157C10.191 5.52126 10.909 5.79948 11.31 6.08117C10.6534 4.93385 9.4272 4.15979 8.01939 4.15979C7.93033 4.15979 7.84311 4.16713 7.75558 4.1732C7.00222 4.22499 6.28194 4.50255 5.68864 4.9697C5.80314 5.06657 5.93239 5.19607 6.2047 5.46432C6.71414 5.96642 8.02127 6.48635 8.02405 6.54735Z",
            fill: "url(#paint4_radial_466_21172)",
          }),
          a.createElement("path", {
            d: "M8.02405 6.54735C8.01177 6.73417 7.35173 7.37838 7.12092 7.37838C4.98533 7.37838 4.63867 8.6701 4.63867 8.6701C4.73327 9.75792 5.49058 10.6537 6.40777 11.1277C6.44961 11.1493 6.49195 11.1689 6.53433 11.1882C6.60698 11.2203 6.68054 11.2504 6.75492 11.2784C7.0694 11.3897 7.39881 11.4532 7.73214 11.4668C11.4753 11.6424 12.2005 6.99201 9.49917 5.64157C10.191 5.52126 10.909 5.79948 11.31 6.08117C10.6534 4.93385 9.4272 4.15979 8.01939 4.15979C7.93033 4.15979 7.84311 4.16713 7.75558 4.1732C7.00222 4.22499 6.28194 4.50255 5.68864 4.9697C5.80314 5.06657 5.93239 5.19607 6.2047 5.46432C6.71414 5.96642 8.02127 6.48635 8.02405 6.54735Z",
            fill: "url(#paint5_radial_466_21172)",
          }),
          a.createElement("path", {
            d: "M5.3385 4.71992C5.39081 4.75366 5.4427 4.78804 5.49416 4.82305C5.32298 4.22417 5.31571 3.59032 5.4731 2.98767C4.7016 3.33895 4.10153 3.89423 3.66528 4.38455C3.70138 4.38351 4.79072 4.36392 5.3385 4.71992Z",
            fill: "url(#paint6_radial_466_21172)",
          }),
          a.createElement("path", {
            d: "M0.569399 8.16902C1.14887 11.5933 4.25305 14.2078 7.77665 14.3076C11.0379 14.3999 13.1216 12.507 13.9821 10.6602C14.5384 9.46646 14.9245 7.51333 14.2159 5.59224L14.2156 5.59142L14.2146 5.58414C14.2138 5.57858 14.2134 5.57527 14.2135 5.57708C14.2135 5.5783 14.214 5.58133 14.215 5.58958C14.4813 7.32899 13.5965 9.01408 12.2134 10.1535L12.2092 10.1632C9.51406 12.3577 6.93502 11.4872 6.41284 11.1309C6.37613 11.1133 6.33967 11.0951 6.30346 11.0765C4.73215 10.3255 4.08302 8.89402 4.22221 7.66633C2.89543 7.66633 2.44302 6.5473 2.44302 6.5473C2.44302 6.5473 3.63424 5.69796 5.20421 6.43664C6.65827 7.1208 8.02384 6.54736 8.02399 6.5473C8.02121 6.4863 6.71409 5.96636 6.20452 5.4643C5.93224 5.19605 5.80296 5.06671 5.68846 4.96967C5.62634 4.91721 5.5614 4.86817 5.49393 4.8228C5.44241 4.78788 5.39052 4.7535 5.33827 4.71967C4.79052 4.36367 3.70115 4.38327 3.66505 4.38421H3.66159C3.36387 4.00711 3.38487 2.76317 3.40184 2.50346C3.39827 2.48736 3.17974 2.61689 3.15112 2.63642C2.8884 2.82395 2.6428 3.03435 2.41718 3.26517C2.16043 3.5256 1.92585 3.80698 1.71587 4.10639C1.71587 4.10677 1.71565 4.10721 1.71552 4.10758C1.71552 4.10717 1.71574 4.10677 1.71587 4.10639C1.23294 4.79075 0.890436 5.56403 0.708149 6.38155C0.704555 6.39783 0.437836 7.56411 0.569399 8.16902Z",
            fill: "url(#paint7_radial_466_21172)",
          }),
          a.createElement("path", {
            d: "M10.6595 5.2058C10.9335 5.47478 11.1682 5.78104 11.3566 6.11555C11.398 6.14662 11.4366 6.17759 11.4694 6.2078C13.172 7.77655 12.2799 9.9953 12.2134 10.1534C13.5965 9.01405 14.4813 7.32896 14.215 5.58955C13.3657 3.47293 11.9258 2.61943 10.7499 0.761053C10.6905 0.667084 10.631 0.572866 10.573 0.473553C10.5435 0.422834 10.5159 0.371004 10.4903 0.318178C10.4415 0.223861 10.4038 0.124166 10.3781 0.0211155C10.3782 0.0162369 10.3766 0.0114673 10.3734 0.00774353C10.3703 0.0040198 10.3658 0.00161108 10.361 0.000990505C10.3564 -0.000330168 10.3515 -0.000330168 10.3469 0.000990505C10.3458 0.0013655 10.3443 0.00258425 10.3431 0.00302176C10.3415 0.003678 10.3394 0.00517801 10.3376 0.00614676C10.0473 0.144522 8.32493 2.87158 10.6595 5.2058Z",
            fill: "url(#paint8_radial_466_21172)",
          }),
          a.createElement("path", {
            d: "M11.4694 6.20779C11.4366 6.17757 11.398 6.1466 11.3566 6.11554C11.3413 6.10404 11.3263 6.0926 11.31 6.08117C10.909 5.79948 10.1909 5.52126 9.49912 5.64157C12.2004 6.99201 11.4752 11.6424 7.73209 11.4668C7.39876 11.4532 7.06935 11.3897 6.75487 11.2784C6.6805 11.2504 6.60694 11.2203 6.53428 11.1882C6.4919 11.1689 6.44956 11.1493 6.40771 11.1277C6.40921 11.1287 6.41128 11.1299 6.41281 11.1308C6.935 11.4871 9.51403 12.3576 12.2092 10.1631L12.2133 10.1534C12.2799 9.99542 13.1719 7.77657 11.4694 6.20779Z",
            fill: "url(#paint9_radial_466_21172)",
          }),
          a.createElement("path", {
            d: "M4.63871 8.67006C4.63871 8.67006 4.98537 7.37834 7.12096 7.37834C7.35183 7.37834 8.01187 6.73412 8.02408 6.54731C8.0363 6.36049 6.65846 7.12081 5.2043 6.43665C3.63433 5.69796 2.44312 6.54731 2.44312 6.54731C2.44312 6.54731 2.89552 7.66634 4.2223 7.66634C4.08315 8.89402 4.73227 10.3257 6.30355 11.0765C6.33868 11.0932 6.37168 11.1116 6.40774 11.1277C5.49062 10.6537 4.7333 9.75787 4.63871 8.67006Z",
            fill: "url(#paint10_radial_466_21172)",
          }),
          a.createElement("path", {
            d: "M14.9597 5.19849C14.6333 4.41337 13.9722 3.56574 13.4531 3.29783C13.8756 4.12612 14.1201 4.95699 14.2136 5.57708C14.2136 5.5783 14.214 5.58133 14.215 5.58958C13.3658 3.47293 11.9258 2.61943 10.75 0.761053C10.6906 0.667084 10.6311 0.572865 10.5731 0.473553C10.5436 0.422834 10.516 0.371004 10.4904 0.318178C10.4416 0.223861 10.4039 0.124166 10.3781 0.0211155C10.3783 0.0162369 10.3767 0.0114673 10.3735 0.00774353C10.3703 0.0040198 10.3659 0.00161108 10.3611 0.000990505C10.3565 -0.000330168 10.3516 -0.000330168 10.347 0.000990505C10.3459 0.0013655 10.3443 0.00258425 10.3432 0.00302175C10.3416 0.003678 10.3395 0.005178 10.3377 0.00614675C10.3386 0.00502175 10.3403 0.0024905 10.3408 0.00189675C8.45428 1.10677 7.81428 3.15068 7.75547 4.17327C7.84297 4.16721 7.93022 4.15987 8.01928 4.15987C9.42719 4.15987 10.6534 4.93393 11.3099 6.08124C10.9089 5.79955 10.1908 5.52133 9.49906 5.64165C12.2003 6.99208 11.4752 11.6425 7.73203 11.4669C7.3987 11.4533 7.06929 11.3898 6.75481 11.2784C6.68044 11.2505 6.60688 11.2204 6.53422 11.1882C6.49184 11.1689 6.4495 11.1494 6.40766 11.1278C6.40916 11.1288 6.41122 11.13 6.41275 11.1309C6.37605 11.1132 6.33958 11.0951 6.30337 11.0764C6.3385 11.0932 6.3715 11.1116 6.40756 11.1276C5.49038 10.6536 4.73306 9.75786 4.63847 8.67005C4.63847 8.67005 4.98513 7.37833 7.12072 7.37833C7.35159 7.37833 8.01162 6.73412 8.02384 6.5473C8.02106 6.4863 6.71394 5.96637 6.20437 5.4643C5.93209 5.19605 5.80281 5.06671 5.68831 4.96968C5.62619 4.91721 5.56125 4.86818 5.49378 4.8228C5.3226 4.22393 5.31533 3.59008 5.47272 2.98743C4.70122 3.33871 4.10116 3.89399 3.66491 4.3843H3.66144C3.36372 4.00721 3.38472 2.76327 3.40169 2.50355C3.39812 2.48746 3.17959 2.61699 3.15097 2.63652C2.88825 2.82404 2.64265 3.03445 2.41703 3.26527C2.16036 3.52567 1.92585 3.80702 1.71594 4.1064C1.71594 4.10677 1.71572 4.10721 1.71559 4.10758C1.71559 4.10718 1.71581 4.10677 1.71594 4.1064C1.23301 4.79075 0.890506 5.56404 0.708219 6.38155C0.704625 6.39783 0.701594 6.41471 0.698094 6.43112C0.683969 6.49724 0.620406 6.83277 0.611531 6.90474C0.610844 6.91027 0.612187 6.89924 0.611531 6.90474C0.553567 7.25147 0.516583 7.60137 0.500781 7.95255C0.500781 7.96537 0.5 7.97805 0.5 7.9909C0.5 12.138 3.8625 15.5 8.01012 15.5C11.7247 15.5 14.8089 12.8035 15.4127 9.26152C15.4254 9.1654 15.4356 9.06877 15.4468 8.9718C15.5961 7.68399 15.4302 6.3304 14.9597 5.19849ZM14.2147 5.58415C14.2151 5.5868 14.2155 5.58958 14.2159 5.59224L14.2157 5.59143L14.2147 5.58415Z",
            fill: "url(#paint11_linear_466_21172)",
          }),
          a.createElement(
            "defs",
            null,
            a.createElement(
              "linearGradient",
              {
                id: "paint0_linear_466_21172",
                x1: "13.5874",
                y1: "2.40249",
                x2: "1.52839",
                y2: "14.0351",
                gradientUnits: "userSpaceOnUse",
              },
              a.createElement("stop", { offset: "0.05", stopColor: "#FFF44F" }),
              a.createElement("stop", { offset: "0.37", stopColor: "#FF980E" }),
              a.createElement("stop", { offset: "0.53", stopColor: "#FF3647" }),
              a.createElement("stop", { offset: "0.7", stopColor: "#E31587" })
            ),
            a.createElement(
              "radialGradient",
              {
                id: "paint1_radial_466_21172",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(10.8936 1.72781) scale(15.3601 15.6187)",
              },
              a.createElement("stop", { offset: "0.13", stopColor: "#FFBD4F" }),
              a.createElement("stop", { offset: "0.28", stopColor: "#FF980E" }),
              a.createElement("stop", { offset: "0.47", stopColor: "#FF3750" }),
              a.createElement("stop", { offset: "0.78", stopColor: "#EB0878" }),
              a.createElement("stop", { offset: "0.86", stopColor: "#E50080" })
            ),
            a.createElement(
              "radialGradient",
              {
                id: "paint2_radial_466_21172",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(6.43979 8.1787) scale(15.7441 15.6187)",
              },
              a.createElement("stop", { offset: "0.3", stopColor: "#960E18" }),
              a.createElement("stop", {
                offset: "0.35",
                stopColor: "#B11927",
                stopOpacity: "0.74",
              }),
              a.createElement("stop", {
                offset: "0.43",
                stopColor: "#DB293D",
                stopOpacity: "0.34",
              }),
              a.createElement("stop", { offset: "0.5", stopColor: "#F5334B", stopOpacity: "0.09" }),
              a.createElement("stop", { offset: "0.53", stopColor: "#FF3750", stopOpacity: "0" })
            ),
            a.createElement(
              "radialGradient",
              {
                id: "paint3_radial_466_21172",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(9.48415 -0.731827) scale(5.04157 8.55934)",
              },
              a.createElement("stop", { offset: "0.13", stopColor: "#FFF44F" }),
              a.createElement("stop", { offset: "0.53", stopColor: "#FF980E" })
            ),
            a.createElement(
              "radialGradient",
              {
                id: "paint4_radial_466_21172",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(6.15707 12.2109) scale(6.67134 7.31187)",
              },
              a.createElement("stop", { offset: "0.35", stopColor: "#3A8EE6" }),
              a.createElement("stop", { offset: "0.67", stopColor: "#9059FF" }),
              a.createElement("stop", { offset: "1", stopColor: "#C139E6" })
            ),
            a.createElement(
              "radialGradient",
              {
                id: "paint5_radial_466_21172",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(7.29699 6.57271) scale(3.54248 4.314)",
              },
              a.createElement("stop", { offset: "0.21", stopColor: "#9059FF", stopOpacity: "0" }),
              a.createElement("stop", { offset: "0.97", stopColor: "#6E008B", stopOpacity: "0.6" })
            ),
            a.createElement(
              "radialGradient",
              {
                id: "paint6_radial_466_21172",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(7.50592 1.1523) scale(5.30374 5.32259)",
              },
              a.createElement("stop", { offset: "0.1", stopColor: "#FFE226" }),
              a.createElement("stop", { offset: "0.79", stopColor: "#FF7139" })
            ),
            a.createElement(
              "radialGradient",
              {
                id: "paint7_radial_466_21172",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(12.3495 -2.33951) scale(25.3212 21.2557)",
              },
              a.createElement("stop", { offset: "0.11", stopColor: "#FFF44F" }),
              a.createElement("stop", { offset: "0.46", stopColor: "#FF980E" }),
              a.createElement("stop", { offset: "0.72", stopColor: "#FF3647" }),
              a.createElement("stop", { offset: "0.9", stopColor: "#E31587" })
            ),
            a.createElement(
              "radialGradient",
              {
                id: "paint8_radial_466_21172",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform:
                  "translate(2.94576 4.67997) rotate(77.3946) scale(8.03354 34.7519)",
              },
              a.createElement("stop", { stopColor: "#FFF44F" }),
              a.createElement("stop", { offset: "0.3", stopColor: "#FF980E" }),
              a.createElement("stop", { offset: "0.57", stopColor: "#FF3647" }),
              a.createElement("stop", { offset: "0.74", stopColor: "#E31587" })
            ),
            a.createElement(
              "radialGradient",
              {
                id: "paint9_radial_466_21172",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(7.56027 3.06659) scale(14.5381 14.2827)",
              },
              a.createElement("stop", { offset: "0.14", stopColor: "#FFF44F" }),
              a.createElement("stop", { offset: "0.48", stopColor: "#FF980E" }),
              a.createElement("stop", { offset: "0.66", stopColor: "#FF3647" }),
              a.createElement("stop", { offset: "0.9", stopColor: "#E31587" })
            ),
            a.createElement(
              "radialGradient",
              {
                id: "paint10_radial_466_21172",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(11.3337 3.90193) scale(17.4743 15.6328)",
              },
              a.createElement("stop", { offset: "0.09", stopColor: "#FFF44F" }),
              a.createElement("stop", { offset: "0.63", stopColor: "#FF980E" })
            ),
            a.createElement(
              "linearGradient",
              {
                id: "paint11_linear_466_21172",
                x1: "12.5",
                y1: "2.16999",
                x2: "2.85701",
                y2: "12.7061",
                gradientUnits: "userSpaceOnUse",
              },
              a.createElement("stop", { offset: "0.17", stopColor: "#FFF44F", stopOpacity: "0.8" }),
              a.createElement("stop", { offset: "0.6", stopColor: "#FFF44F", stopOpacity: "0" })
            )
          )
        ),
      X6 = (e) =>
        a.createElement(
          "svg",
          {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
          },
          a.createElement("circle", {
            cx: "8.00009",
            cy: "7.99997",
            r: "7.7037",
            fill: "url(#paint0_linear_466_21186)",
          }),
          a.createElement("ellipse", {
            cx: "8.00094",
            cy: "8.00094",
            rx: "7.06173",
            ry: "7.06173",
            fill: "url(#paint1_radial_466_21186)",
          }),
          a.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8.07134 1.36353C8.03043 1.36353 7.99727 1.39669 7.99727 1.4376V2.56469C7.99727 2.6056 8.03043 2.63877 8.07134 2.63877C8.11225 2.63877 8.14542 2.6056 8.14542 2.56469V1.4376C8.14542 1.39669 8.11225 1.36353 8.07134 1.36353ZM8.07134 14.7792C8.11225 14.7792 8.14542 14.746 8.14542 14.7051V13.578C8.14542 13.5371 8.11225 13.5039 8.07134 13.5039C8.03043 13.5039 7.99727 13.5371 7.99727 13.578V14.7051C7.99727 14.746 8.03043 14.7792 8.07134 14.7792ZM8.64883 1.46214C8.65292 1.42143 8.68923 1.39175 8.72994 1.39584C8.77064 1.39993 8.80032 1.43625 8.79623 1.47695L8.74793 1.95766C8.74384 1.99836 8.70752 2.02804 8.66682 2.02395C8.62612 2.01986 8.59643 1.98355 8.60052 1.94284L8.64883 1.46214ZM7.41372 14.7468C7.45442 14.7509 7.49074 14.7213 7.49483 14.6806L7.54313 14.1998C7.54722 14.1591 7.51754 14.1228 7.47683 14.1187C7.43613 14.1146 7.39982 14.1443 7.39573 14.185L7.34742 14.6657C7.34333 14.7064 7.37301 14.7428 7.41372 14.7468ZM14.7051 7.99727C14.746 7.99727 14.7792 8.03043 14.7792 8.07134C14.7792 8.11225 14.746 8.14542 14.7051 8.14542H13.578C13.5371 8.14542 13.5039 8.11225 13.5039 8.07134C13.5039 8.03043 13.5371 7.99727 13.578 7.99727H14.7051ZM1.36353 8.07134C1.36353 8.11225 1.39669 8.14542 1.4376 8.14542H2.56469C2.6056 8.14542 2.63877 8.11225 2.63877 8.07134C2.63877 8.03043 2.6056 7.99727 2.56469 7.99727H1.4376C1.39669 7.99727 1.36353 8.03043 1.36353 8.07134ZM14.6806 8.64883C14.7213 8.65292 14.7509 8.68923 14.7468 8.72994C14.7428 8.77064 14.7064 8.80032 14.6657 8.79623L14.185 8.74793C14.1443 8.74384 14.1146 8.70752 14.1187 8.66682C14.1228 8.62612 14.1591 8.59643 14.1998 8.60052L14.6806 8.64883ZM1.39584 7.41372C1.39175 7.45442 1.42143 7.49074 1.46214 7.49483L1.94284 7.54313C1.98355 7.54722 2.01986 7.51754 2.02395 7.47683C2.02804 7.43613 1.99836 7.39982 1.95766 7.39573L1.47695 7.34742C1.43625 7.34333 1.39993 7.37301 1.39584 7.41372ZM12.7097 3.3282C12.7387 3.29927 12.7856 3.29927 12.8145 3.3282C12.8434 3.35713 12.8434 3.40403 12.8145 3.43296L12.0175 4.22994C11.9886 4.25887 11.9417 4.25887 11.9127 4.22994C11.8838 4.20101 11.8838 4.15411 11.9127 4.12518L12.7097 3.3282ZM3.3282 12.8145C3.35713 12.8434 3.40403 12.8434 3.43296 12.8145L4.22994 12.0175C4.25887 11.9886 4.25887 11.9417 4.22994 11.9127C4.20101 11.8838 4.15411 11.8838 4.12518 11.9127L3.3282 12.7097C3.29927 12.7387 3.29927 12.7856 3.3282 12.8145ZM13.1523 3.80568C13.1839 3.77973 13.2306 3.78433 13.2566 3.81595C13.2825 3.84757 13.2779 3.89425 13.2463 3.9202L12.8729 4.22664C12.8413 4.2526 12.7946 4.248 12.7686 4.21638C12.7427 4.18475 12.7473 4.13808 12.7789 4.11212L13.1523 3.80568ZM2.88614 12.3267C2.91209 12.3584 2.95876 12.363 2.99039 12.337L3.36378 12.0306C3.3954 12.0046 3.4 11.9579 3.37404 11.9263C3.34809 11.8947 3.30142 11.8901 3.26979 11.916L2.8964 12.2225C2.86478 12.2484 2.86018 12.2951 2.88614 12.3267ZM12.8145 12.7097C12.8434 12.7387 12.8434 12.7856 12.8145 12.8145C12.7856 12.8434 12.7387 12.8434 12.7097 12.8145L11.9127 12.0175C11.8838 11.9886 11.8838 11.9417 11.9127 11.9127C11.9417 11.8838 11.9886 11.8838 12.0175 11.9127L12.8145 12.7097ZM3.3282 3.3282C3.29927 3.35713 3.29927 3.40403 3.3282 3.43296L4.12518 4.22994C4.15411 4.25887 4.20101 4.25887 4.22994 4.22994C4.25887 4.20101 4.25887 4.15411 4.22994 4.12518L3.43296 3.3282C3.40403 3.29927 3.35713 3.29927 3.3282 3.3282ZM12.337 13.1523C12.363 13.1839 12.3584 13.2306 12.3267 13.2566C12.2951 13.2825 12.2484 13.2779 12.2225 13.2463L11.916 12.8729C11.8901 12.8413 11.8947 12.7946 11.9263 12.7686C11.9579 12.7427 12.0046 12.7473 12.0306 12.7789L12.337 13.1523ZM3.81595 2.88614C3.78433 2.91209 3.77973 2.95876 3.80568 2.99039L4.11212 3.36378C4.13808 3.3954 4.18475 3.4 4.21638 3.37404C4.248 3.34809 4.2526 3.30142 4.22664 3.26979L3.9202 2.8964C3.89425 2.86478 3.84757 2.86018 3.81595 2.88614ZM10.5415 1.91422C10.5572 1.87643 10.6005 1.85848 10.6383 1.87413C10.6761 1.88979 10.6941 1.93312 10.6784 1.97092L10.2471 3.01221C10.2314 3.05 10.1881 3.06795 10.1503 3.05229C10.1125 3.03664 10.0946 2.99331 10.1102 2.95551L10.5415 1.91422ZM5.50437 14.2686C5.54216 14.2842 5.58549 14.2663 5.60115 14.2285L6.03247 13.1872C6.04813 13.1494 6.03018 13.1061 5.99238 13.0904C5.95459 13.0747 5.91126 13.0927 5.8956 13.1305L5.46428 14.1718C5.44862 14.2096 5.46657 14.2529 5.50437 14.2686ZM11.1332 2.18598C11.1524 2.1499 11.1973 2.13628 11.2334 2.15557C11.2695 2.17486 11.2831 2.21974 11.2638 2.25582L11.0361 2.68183C11.0168 2.7179 10.9719 2.73152 10.9358 2.71223C10.8998 2.69295 10.8861 2.64806 10.9054 2.61199L11.1332 2.18598ZM4.90931 13.9871C4.94539 14.0064 4.99027 13.9928 5.00955 13.9567L5.23726 13.5307C5.25654 13.4946 5.24293 13.4497 5.20685 13.4305C5.17077 13.4112 5.12589 13.4248 5.1066 13.4609L4.8789 13.8869C4.85961 13.923 4.87323 13.9678 4.90931 13.9871ZM14.2285 10.5415C14.2663 10.5572 14.2842 10.6005 14.2686 10.6383C14.2529 10.6761 14.2096 10.6941 14.1718 10.6784L13.1305 10.2471C13.0927 10.2314 13.0747 10.1881 13.0904 10.1503C13.1061 10.1125 13.1494 10.0946 13.1872 10.1102L14.2285 10.5415ZM1.87412 5.50437C1.85846 5.54216 1.87641 5.58549 1.91421 5.60115L2.95551 6.03247C2.99331 6.04813 3.03664 6.03018 3.05229 5.99238C3.06795 5.95459 3.05 5.91126 3.0122 5.8956L1.9709 5.46428C1.9331 5.44862 1.88977 5.46657 1.87412 5.50437ZM13.9567 11.1332C13.9928 11.1524 14.0064 11.1973 13.9871 11.2334C13.9678 11.2695 13.923 11.2831 13.8869 11.2638L13.4609 11.0361C13.4248 11.0168 13.4112 10.9719 13.4305 10.9358C13.4497 10.8998 13.4946 10.8861 13.5307 10.9054L13.9567 11.1332ZM2.15557 4.90929C2.13628 4.94537 2.1499 4.99025 2.18598 5.00954L2.61199 5.23726C2.64806 5.25654 2.69295 5.24293 2.71223 5.20685C2.73152 5.17077 2.7179 5.12589 2.68183 5.1066L2.25582 4.87888C2.21974 4.8596 2.17486 4.87321 2.15557 4.90929ZM14.1718 5.46428C14.2096 5.44862 14.2529 5.46657 14.2686 5.50437C14.2842 5.54216 14.2663 5.58549 14.2285 5.60115L13.1872 6.03247C13.1494 6.04813 13.1061 6.03018 13.0904 5.99238C13.0747 5.95459 13.0927 5.91126 13.1305 5.8956L14.1718 5.46428ZM1.87413 10.6383C1.88979 10.6761 1.93312 10.6941 1.97092 10.6784L3.01221 10.2471C3.05 10.2314 3.06795 10.1881 3.05229 10.1503C3.03664 10.1125 2.99331 10.0946 2.95551 10.1102L1.91422 10.5415C1.87643 10.5572 1.85848 10.6005 1.87413 10.6383ZM14.3979 6.07477C14.4371 6.0629 14.4785 6.08501 14.4903 6.12416C14.5022 6.1633 14.4801 6.20467 14.441 6.21654L13.9787 6.35677C13.9396 6.36864 13.8982 6.34654 13.8863 6.30739C13.8744 6.26824 13.8965 6.22688 13.9357 6.215L14.3979 6.07477ZM1.65237 10.0185C1.66425 10.0577 1.70561 10.0798 1.74476 10.0679L2.20699 9.92769C2.24614 9.91581 2.26825 9.87445 2.25637 9.8353C2.2445 9.79615 2.20313 9.77404 2.16399 9.78592L1.70175 9.92615C1.6626 9.93802 1.64049 9.97939 1.65237 10.0185ZM10.6383 14.2686C10.6005 14.2842 10.5572 14.2663 10.5415 14.2285L10.1102 13.1872C10.0946 13.1494 10.1125 13.1061 10.1503 13.0904C10.1881 13.0747 10.2314 13.0927 10.2471 13.1305L10.6784 14.1718C10.6941 14.2096 10.6761 14.2529 10.6383 14.2686ZM5.50437 1.87413C5.46657 1.88979 5.44862 1.93312 5.46428 1.97092L5.8956 3.01221C5.91126 3.05 5.95459 3.06795 5.99238 3.05229C6.03018 3.03664 6.04813 2.99331 6.03247 2.95551L5.60115 1.91422C5.58549 1.87643 5.54216 1.85848 5.50437 1.87413ZM10.0679 14.3979C10.0798 14.4371 10.0577 14.4785 10.0185 14.4903C9.97939 14.5022 9.93802 14.4801 9.92615 14.441L9.78592 13.9787C9.77404 13.9396 9.79615 13.8982 9.8353 13.8863C9.87445 13.8744 9.91581 13.8965 9.92769 13.9357L10.0679 14.3979ZM6.12417 1.65237C6.08502 1.66424 6.06291 1.70561 6.07479 1.74475L6.215 2.20699C6.22688 2.24614 6.26824 2.26825 6.30739 2.25637C6.34654 2.2445 6.36864 2.20314 6.35677 2.16399L6.21656 1.70175C6.20468 1.6626 6.16332 1.64049 6.12417 1.65237ZM9.29287 1.55062C9.30085 1.5105 9.33985 1.48444 9.37997 1.49242C9.4201 1.5004 9.44615 1.5394 9.43817 1.57952L9.21829 2.68496C9.21031 2.72508 9.17131 2.75114 9.13119 2.74316C9.09107 2.73518 9.06501 2.69618 9.07299 2.65606L9.29287 1.55062ZM6.76272 14.6503C6.80284 14.6583 6.84184 14.6322 6.84982 14.5921L7.0697 13.4866C7.07768 13.4465 7.05162 13.4075 7.0115 13.3995C6.97137 13.3916 6.93238 13.4176 6.9244 13.4577L6.70452 14.5632C6.69654 14.6033 6.72259 14.6423 6.76272 14.6503ZM9.92615 1.70175C9.93802 1.6626 9.97939 1.64049 10.0185 1.65237C10.0577 1.66425 10.0798 1.70561 10.0679 1.74476L9.92769 2.20699C9.91581 2.24614 9.87445 2.26825 9.8353 2.25637C9.79615 2.2445 9.77404 2.20313 9.78592 2.16399L9.92615 1.70175ZM6.12417 14.4903C6.16332 14.5022 6.20469 14.4801 6.21656 14.441L6.35677 13.9787C6.36864 13.9396 6.34653 13.8982 6.30739 13.8863C6.26824 13.8744 6.22687 13.8965 6.215 13.9357L6.07479 14.398C6.06291 14.4371 6.08502 14.4785 6.12417 14.4903ZM14.5921 9.29287C14.6322 9.30085 14.6583 9.33985 14.6503 9.37997C14.6423 9.4201 14.6033 9.44615 14.5632 9.43817L13.4577 9.21829C13.4176 9.21031 13.3916 9.17131 13.3995 9.13119C13.4075 9.09107 13.4465 9.06501 13.4866 9.07299L14.5921 9.29287ZM1.49242 6.76272C1.48444 6.80284 1.5105 6.84184 1.55062 6.84982L2.65606 7.0697C2.69618 7.07768 2.73518 7.05162 2.74316 7.0115C2.75114 6.97137 2.72508 6.93238 2.68496 6.9244L1.57952 6.70452C1.5394 6.69654 1.5004 6.72259 1.49242 6.76272ZM14.441 9.92615C14.4801 9.93802 14.5022 9.97939 14.4903 10.0185C14.4785 10.0577 14.4371 10.0798 14.3979 10.0679L13.9357 9.92769C13.8965 9.91581 13.8744 9.87445 13.8863 9.8353C13.8982 9.79615 13.9396 9.77404 13.9787 9.78592L14.441 9.92615ZM1.65237 6.12415C1.64049 6.1633 1.6626 6.20467 1.70175 6.21654L2.16399 6.35677C2.20313 6.36864 2.2445 6.34654 2.25637 6.30739C2.26825 6.26824 2.24614 6.22688 2.20699 6.215L1.74476 6.07477C1.70561 6.0629 1.66425 6.08501 1.65237 6.12415ZM13.5459 4.32424C13.58 4.30151 13.626 4.31066 13.6487 4.34468C13.6714 4.37869 13.6623 4.42469 13.6282 4.44742L12.6911 5.0736C12.6571 5.09633 12.6111 5.08718 12.5884 5.05317C12.5656 5.01915 12.5748 4.97315 12.6088 4.95042L13.5459 4.32424ZM2.494 11.798C2.51673 11.832 2.56273 11.8412 2.59675 11.8184L3.53389 11.1923C3.56791 11.1695 3.57706 11.1235 3.55433 11.0895C3.5316 11.0555 3.4856 11.0464 3.45159 11.0691L2.51444 11.6953C2.48043 11.718 2.47128 11.764 2.494 11.798ZM13.8869 4.87888C13.923 4.8596 13.9678 4.87321 13.9871 4.90929C14.0064 4.94537 13.9928 4.99025 13.9567 5.00954L13.5307 5.23726C13.4946 5.25654 13.4497 5.24293 13.4305 5.20685C13.4112 5.17077 13.4248 5.12589 13.4609 5.1066L13.8869 4.87888ZM2.15557 11.2334C2.17486 11.2695 2.21974 11.2831 2.25582 11.2638L2.68183 11.0361C2.7179 11.0168 2.73152 10.9719 2.71223 10.9358C2.69295 10.8998 2.64806 10.8861 2.61199 10.9054L2.18598 11.1332C2.1499 11.1524 2.13628 11.1973 2.15557 11.2334ZM11.8184 13.5459C11.8412 13.58 11.832 13.626 11.798 13.6487C11.764 13.6714 11.718 13.6623 11.6953 13.6282L11.0691 12.6911C11.0464 12.6571 11.0555 12.6111 11.0895 12.5884C11.1235 12.5656 11.1695 12.5748 11.1923 12.6088L11.8184 13.5459ZM4.34468 2.494C4.31066 2.51673 4.30151 2.56273 4.32424 2.59675L4.95042 3.53389C4.97315 3.56791 5.01915 3.57706 5.05317 3.55433C5.08718 3.5316 5.09633 3.4856 5.0736 3.45159L4.44742 2.51444C4.42469 2.48043 4.37869 2.47128 4.34468 2.494ZM11.2638 13.8869C11.2831 13.923 11.2695 13.9678 11.2334 13.9871C11.1973 14.0064 11.1524 13.9928 11.1331 13.9567L10.9054 13.5307C10.8861 13.4946 10.8998 13.4497 10.9358 13.4305C10.9719 13.4112 11.0168 13.4248 11.0361 13.4609L11.2638 13.8869ZM4.90931 2.15557C4.87323 2.17485 4.85961 2.21974 4.8789 2.25581L5.1066 2.68182C5.12589 2.7179 5.17077 2.73152 5.20685 2.71223C5.24293 2.69295 5.25654 2.64807 5.23726 2.61199L5.00955 2.18598C4.99027 2.1499 4.94539 2.13628 4.90931 2.15557ZM11.6953 2.51444C11.718 2.48043 11.764 2.47128 11.798 2.494C11.832 2.51673 11.8412 2.56273 11.8184 2.59675L11.1923 3.53389C11.1695 3.56791 11.1235 3.57706 11.0895 3.55433C11.0555 3.5316 11.0464 3.4856 11.0691 3.45159L11.6953 2.51444ZM4.34468 13.6487C4.37869 13.6714 4.42469 13.6623 4.44742 13.6282L5.0736 12.6911C5.09633 12.6571 5.08718 12.6111 5.05317 12.5884C5.01915 12.5656 4.97315 12.5748 4.95042 12.6088L4.32424 13.5459C4.30151 13.58 4.31066 13.626 4.34468 13.6487ZM12.2225 2.8964C12.2484 2.86478 12.2951 2.86018 12.3267 2.88614C12.3584 2.91209 12.363 2.95876 12.337 2.99039L12.0306 3.36378C12.0046 3.3954 11.9579 3.4 11.9263 3.37404C11.8947 3.34809 11.8901 3.30142 11.916 3.26979L12.2225 2.8964ZM3.81595 13.2566C3.84757 13.2825 3.89425 13.2779 3.9202 13.2463L4.22664 12.8729C4.2526 12.8413 4.248 12.7946 4.21638 12.7686C4.18475 12.7427 4.13808 12.7473 4.11212 12.7789L3.80568 13.1523C3.77973 13.1839 3.78433 13.2306 3.81595 13.2566ZM13.6282 11.6953C13.6623 11.718 13.6714 11.764 13.6487 11.798C13.626 11.832 13.58 11.8412 13.5459 11.8184L12.6088 11.1923C12.5748 11.1695 12.5656 11.1235 12.5884 11.0895C12.6111 11.0555 12.6571 11.0464 12.6911 11.0691L13.6282 11.6953ZM2.494 4.34468C2.47128 4.37869 2.48043 4.42469 2.51444 4.44742L3.45159 5.0736C3.4856 5.09633 3.5316 5.08718 3.55433 5.05317C3.57706 5.01915 3.56791 4.97315 3.53389 4.95042L2.59675 4.32424C2.56273 4.30151 2.51673 4.31066 2.494 4.34468ZM13.2463 12.2225C13.2779 12.2484 13.2825 12.2951 13.2566 12.3267C13.2306 12.3584 13.1839 12.363 13.1523 12.337L12.7789 12.0306C12.7473 12.0046 12.7427 11.9579 12.7686 11.9263C12.7946 11.8947 12.8413 11.8901 12.8729 11.916L13.2463 12.2225ZM2.88614 3.81595C2.86018 3.84757 2.86478 3.89425 2.8964 3.9202L3.26979 4.22664C3.30142 4.2526 3.34809 4.248 3.37404 4.21638C3.4 4.18475 3.3954 4.13808 3.36378 4.11212L2.99039 3.80568C2.95876 3.77973 2.91209 3.78433 2.88614 3.81595ZM14.5632 6.70452C14.6033 6.69654 14.6423 6.72259 14.6503 6.76272C14.6583 6.80284 14.6322 6.84184 14.5921 6.84982L13.4866 7.0697C13.4465 7.07768 13.4075 7.05162 13.3995 7.0115C13.3916 6.97137 13.4176 6.93238 13.4577 6.9244L14.5632 6.70452ZM1.49242 9.37997C1.5004 9.4201 1.5394 9.44615 1.57952 9.43817L2.68496 9.21829C2.72508 9.21031 2.75114 9.17131 2.74316 9.13119C2.73518 9.09107 2.69618 9.06501 2.65606 9.07299L1.55062 9.29287C1.5105 9.30085 1.48444 9.33985 1.49242 9.37997ZM14.6657 7.34742C14.7064 7.34333 14.7428 7.37301 14.7468 7.41372C14.7509 7.45442 14.7213 7.49074 14.6806 7.49483L14.1998 7.54313C14.1591 7.54722 14.1228 7.51754 14.1187 7.47683C14.1146 7.43613 14.1443 7.39982 14.185 7.39573L14.6657 7.34742ZM1.39584 8.72994C1.39993 8.77064 1.43625 8.80032 1.47695 8.79623L1.95766 8.74793C1.99836 8.74384 2.02804 8.70752 2.02395 8.66682C2.01986 8.62612 1.98355 8.59643 1.94284 8.60052L1.46214 8.64883C1.42143 8.65292 1.39175 8.68923 1.39584 8.72994ZM9.43817 14.5632C9.44615 14.6033 9.4201 14.6423 9.37997 14.6503C9.33985 14.6583 9.30085 14.6322 9.29287 14.5921L9.07299 13.4866C9.06501 13.4465 9.09107 13.4075 9.13119 13.3995C9.17131 13.3916 9.21031 13.4176 9.21829 13.4577L9.43817 14.5632ZM6.76272 1.49242C6.72259 1.5004 6.69654 1.5394 6.70452 1.57952L6.9244 2.68496C6.93238 2.72508 6.97137 2.75114 7.0115 2.74316C7.05162 2.73518 7.07768 2.69618 7.0697 2.65606L6.84982 1.55062C6.84184 1.5105 6.80284 1.48444 6.76272 1.49242ZM8.79623 14.6657C8.80032 14.7064 8.77064 14.7428 8.72994 14.7468C8.68923 14.7509 8.65292 14.7213 8.64883 14.6806L8.60052 14.1998C8.59643 14.1591 8.62612 14.1228 8.66682 14.1187C8.70752 14.1146 8.74384 14.1443 8.74793 14.185L8.79623 14.6657ZM7.41372 1.39584C7.37301 1.39993 7.34333 1.43625 7.34742 1.47695L7.39573 1.95766C7.39982 1.99836 7.43613 2.02804 7.47683 2.02395C7.51754 2.01986 7.54722 1.98355 7.54313 1.94284L7.49483 1.46214C7.49074 1.42143 7.45442 1.39175 7.41372 1.39584Z",
            fill: "#DDDDDD",
          }),
          a.createElement("path", {
            d: "M3.14941 12.8505L7.29562 7.28674L7.99989 7.99218L3.14941 12.8505Z",
            fill: "#DDDDDD",
          }),
          a.createElement("path", {
            d: "M7.28662 7.29574L12.8504 3.14954L7.99204 8.00002L7.28662 7.29574Z",
            fill: "#EE4444",
          }),
          a.createElement("path", {
            d: "M12.8505 3.14954L8.70427 8.71332L8 8.00789L12.8505 3.14954Z",
            fill: "#CC0000",
          }),
          a.createElement("path", {
            d: "M3.14941 12.8505L8.7132 8.70427L8.00777 8L3.14941 12.8505Z",
            fill: "#AAAAAA",
          }),
          a.createElement(
            "defs",
            null,
            a.createElement(
              "linearGradient",
              {
                id: "paint0_linear_466_21186",
                x1: "0.300303",
                y1: "0.300951",
                x2: "0.300303",
                y2: "15.7084",
                gradientUnits: "userSpaceOnUse",
              },
              a.createElement("stop", { stopColor: "#F8F8F8" }),
              a.createElement("stop", { offset: "1", stopColor: "#CCCCCC" })
            ),
            a.createElement(
              "radialGradient",
              {
                id: "paint1_radial_466_21186",
                cx: "0",
                cy: "0",
                r: "1",
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "translate(8.00216 8.0046) scale(7.06173)",
              },
              a.createElement("stop", { stopColor: "#00F0FF" }),
              a.createElement("stop", { offset: "1", stopColor: "#0070E0" })
            )
          )
        ),
      j1 = {
        CHROME: a.createElement(Q6, { alt: "Chrome" }),
        FIREFOX: a.createElement(J6, { alt: "Firefox" }),
        SAFARI: a.createElement(X6, { alt: "Safari" }),
        EDGE: a.createElement(K6, { alt: "Edge" }),
      },
      ef = w.div(({ theme: e }) => ({
        alignItems: "center",
        color: e.base === "light" ? e.color.dark : e.color.light,
        display: "inline-flex",
        gap: 6,
        height: 16,
        margin: "6px 7px",
        svg: { verticalAlign: "top" },
      })),
      z1 = w.span(({ theme: e }) => ({
        color: e.base === "light" ? e.color.dark : e.color.light,
        display: "none",
        fontSize: e.typography.size.s1,
        fontWeight: e.typography.weight.bold,
        "@container (min-width: 300px)": { display: "inline-block" },
        "+ svg": { color: e.base === "light" ? e.color.dark : e.color.light },
        "button:hover > &, button:hover > & + svg": { color: e.color.secondary },
      })),
      tf = ({ isAccepted: e, selectedBrowser: t, browserResults: n, onSelectBrowser: r }) => {
        zt();
        let i = Nr(n.map(({ result: s }) => s));
        if (!i) return null;
        let l = j1[t.key];
        !e && i !== "EQUAL" && n.length >= 2 && (l = a.createElement(dr, { status: i }, l));
        let o =
          n.length > 1 &&
          n.map(({ browser: s, result: c }) => ({
            active: t === s,
            id: s.id,
            onClick: () => r(s),
            right: !e && c !== "EQUAL" && a.createElement(Vs, { status: c }),
            icon: j1[s.key],
            title: s.name,
          }));
        return a.createElement(
          we,
          {
            key: t.key,
            hasChrome: !1,
            placement: "top",
            trigger: "hover",
            tooltip: a.createElement(Ae, {
              note: o ? "Switch browser" : `Tested in ${n[0].browser.name}`,
            }),
          },
          o
            ? a.createElement(
                ia,
                { placement: "bottom", links: o },
                l,
                a.createElement(z1, null, t.name),
                a.createElement(us, { size: 10 })
              )
            : a.createElement(ef, null, l, a.createElement(z1, null, t.name))
        );
      },
      nf = w.div(({ theme: e }) => ({
        alignItems: "center",
        color: e.base === "light" ? e.color.darkest : e.color.light,
        display: "inline-flex",
        gap: 6,
        height: 14,
        margin: "7px 7px",
        svg: {
          verticalAlign: "top",
          path: { fill: e.base === "light" ? e.color.dark : e.color.light },
        },
      })),
      af = w(ia)(({ theme: e }) => ({
        button: {
          svg: {
            verticalAlign: "top",
            path: { fill: e.base === "light" ? e.color.dark : e.color.light },
          },
          "&:hover": { svg: { path: { fill: e.color.secondary } } },
        },
      })),
      U1 = w.span(({ theme: e }) => ({
        color: e.base === "light" ? e.color.dark : e.color.light,
        display: "none",
        fontSize: e.typography.size.s1,
        fontWeight: e.typography.weight.bold,
        "@container (min-width: 300px)": { display: "inline-block" },
        "button:hover > &": { color: e.color.secondary },
      })),
      rf = ({ isAccepted: e, modeOrder: t, modeResults: n, onSelectMode: r, selectedMode: i }) => {
        zt();
        let l = Nr(n.map(({ result: c }) => c));
        if (!l) return null;
        let o = a.createElement(Su, null);
        !e && l !== "EQUAL" && n.length >= 2 && (o = a.createElement(dr, { status: l }, o));
        let s =
          n.length > 1 &&
          n
            .map(({ mode: c, result: d }) => ({
              id: c.name,
              title: c.name,
              right: !e && d !== "EQUAL" && a.createElement(Vs, { status: d }),
              onClick: () => r(c),
              active: i.name === c.name,
            }))
            .sort((c, d) => {
              if (!t) return 0;
              let u = t.indexOf(c.title),
                m = t.indexOf(d.title);
              return u !== -1 && m !== -1 ? u - m : 0;
            });
        return a.createElement(
          we,
          {
            key: i.name,
            hasChrome: !1,
            placement: "top",
            trigger: "hover",
            tooltip: a.createElement(Ae, {
              note: s ? "Switch mode" : `View mode: ${n[0].mode.name}`,
            }),
          },
          s
            ? a.createElement(
                af,
                { placement: "bottom", links: s },
                o,
                a.createElement(U1, null, i.name),
                a.createElement(us, { size: 10 })
              )
            : a.createElement(nf, null, o, a.createElement(U1, null, i.name))
        );
      },
      $1 = () => {
        let e = ln(),
          { browserResults: t, modeResults: n } = e.summary;
        return a.createElement(
          Br,
          null,
          n.length > 0 &&
            e.selectedTest &&
            a.createElement(rf, {
              isAccepted: e.summary.status === "ACCEPTED",
              modeOrder: e.modeOrder,
              selectedMode: e.selectedTest.mode,
              modeResults: n,
              onSelectMode: e.onSelectMode,
            }),
          t.length > 0 &&
            e.selectedComparison &&
            a.createElement(tf, {
              isAccepted: e.summary.status === "ACCEPTED",
              selectedBrowser: e.selectedComparison.browser,
              browserResults: t,
              onSelectBrowser: e.onSelectBrowser,
            }),
          a.createElement(Xe, { push: !0 }, a.createElement(Zr, null))
        );
      },
      lf = ({ theme: e, status: t, variant: n }) =>
        n === "outline"
          ? {
              color: e.base === "light" ? e.color.dark : e.color.medium,
              backgroundColor: e.background.app,
              borderColor: e.base === "light" ? e.color.medium : e.color.darker,
              "&:hover": {
                color: e.base === "light" ? e.color.darkest : e.color.lighter,
                backgroundColor: Wt(0.03, e.background.app),
              },
            }
          : t === "positive"
            ? {
                color: e.color.positiveText,
                backgroundColor: e.background.positive,
                borderColor: Qa(0.5, e.color.positiveText),
                "&:hover": {
                  color: e.color.positiveText,
                  backgroundColor: Wt(0.05, e.background.positive),
                },
              }
            : t === "warning"
              ? {
                  color: e.color.warningText,
                  backgroundColor: e.background.warning,
                  borderColor: Qa(0.5, e.color.warningText),
                  "&:hover": {
                    color: e.color.warningText,
                    backgroundColor: Wt(0.05, e.background.warning),
                  },
                }
              : {
                  color: e.color.lightest,
                  backgroundColor: e.color.secondary,
                  borderWidth: 0,
                  borderColor:
                    e.base === "light" ? Qa(0.2, e.color.secondary) : Wt(0.1, e.color.secondary),
                  "&:hover": {
                    color: e.color.lightest,
                    backgroundColor: Wt(0.05, e.color.secondary),
                  },
                },
      hn = w(Je)(
        ({ square: e }) => ({
          border: "1px solid transparent",
          boxShadow: "none",
          fontSize: 12,
          fontWeight: 700,
          height: 28,
          padding: e ? "8px 6px" : 8,
          transition: "background-color 150ms ease-out",
          "@container (min-width: 300px)": {
            height: 32,
            width: e ? 32 : "auto",
            padding: e ? "9px 8px" : 9,
          },
          "@container (min-width: 800px)": {
            height: 28,
            fontSize: 12,
            width: e ? 28 : "auto",
            padding: e ? "8px 6px" : 8,
          },
        }),
        lf,
        ({ side: e }) => ({
          ...(e === "left" && {
            borderRightWidth: 1,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          }),
          ...(e === "right" && {
            borderLeftWidth: 0,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          }),
        })
      ),
      W1 = w.div({ display: "flex", flexDirection: "row" }),
      _r = w.div(
        ({ theme: e }) => ({
          width: 12,
          height: 12,
          margin: "3px 6px",
          verticalAlign: "top",
          display: "inline-block",
          animation: `${Is} 0.7s linear infinite`,
          border: "2px solid transparent",
          borderLeftColor: e.base === "light" ? "#00aaff" : "#58faf9",
          borderBottomColor: "#25ccfd",
          borderRightColor: e.base === "light" ? "#58faf9" : "#00aaff",
          borderRadius: "100%",
          transform: "translate3d(0, 0, 0)",
        }),
        ({ parentComponent: e }) =>
          e &&
          ue({
            margin: e === "IconButton" ? 1 : 0,
            borderWidth: 1,
            borderLeftColor: "currentcolor",
            borderBottomColor: "currentcolor",
            borderRightColor: "currentcolor",
          })
      ),
      _i = w.div(
        ({ theme: e, width: t = 14, height: n = 14, marginLeft: r = 7, marginRight: i = 8 }) => ({
          display: "inline-block",
          backgroundColor: e.appBorderColor,
          borderRadius: 3,
          animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
          height: n,
          width: t,
          margin: 7,
          marginLeft: r,
          marginRight: i,
        })
      ),
      of = w.div(({ theme: e }) => ({
        gridArea: "label",
        margin: "8px 15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 6,
        span: { display: "none", "@container (min-width: 300px)": { display: "initial" } },
        "@container (min-width: 800px)": {
          borderLeft: `1px solid ${e.appBorderColor}`,
          paddingLeft: 10,
          marginLeft: 0,
        },
      })),
      G1 = w.div({
        gridArea: "controls",
        margin: "6px 15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 6,
        "@container (min-width: 800px)": { margin: 8 },
      }),
      sf = w.div(({ theme: e }) => ({
        padding: 9,
        "> svg": { display: "block" },
        path: { fill: e.color.mediumdark },
      })),
      cf = w.div(({ theme: e, showDivider: t }) => ({
        gridArea: "actions",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        margin: "0px 15px",
        gap: 6,
        "@container (min-width: 300px)": { alignItems: "flex-start", margin: "15px 15px 15px 0px" },
        "@container (min-width: 800px)": {
          alignItems: "center",
          borderLeft: t ? `1px solid ${e.appBorderColor}` : "none",
          margin: "8px 15px 8px 0px",
          paddingLeft: 8,
        },
      })),
      df = ({ isOutdated: e }) => {
        let { baselineImageVisible: t, diffVisible: n, focusVisible: r } = Ir(),
          { toggleBaselineImage: i, toggleDiff: l, toggleFocus: o } = Mn(),
          { isRunning: s, startBuild: c } = ka(),
          { selectedTest: d, selectedComparison: u, summary: m } = ln(),
          { changeCount: p, isInProgress: f } = m,
          {
            isReviewing: g,
            buildIsReviewable: v,
            userCanReview: k,
            acceptTest: E,
            unacceptTest: h,
          } = tc();
        if (f)
          return a.createElement(
            G1,
            null,
            a.createElement(_i, null),
            a.createElement(_i, null),
            a.createElement(_i, null)
          );
        let y = p > 0 && d?.status !== "ACCEPTED",
          b = p > 0 && d?.status === "ACCEPTED",
          C = u?.result === "CHANGED";
        return a.createElement(
          a.Fragment,
          null,
          C &&
            a.createElement(
              of,
              null,
              a.createElement(
                j,
                null,
                a.createElement(
                  "b",
                  null,
                  t ? "Baseline" : "Latest",
                  a.createElement("span", null, " snapshot")
                )
              )
            ),
          C &&
            a.createElement(
              G1,
              null,
              a.createElement(
                we,
                {
                  tooltip: a.createElement(Ae, {
                    note: t ? "Show latest snapshot" : "Show baseline snapshot",
                  }),
                  trigger: "hover",
                  hasChrome: !1,
                },
                a.createElement(
                  Je,
                  {
                    id: "button-toggle-snapshot",
                    "aria-label": t ? "Show latest snapshot" : "Show baseline snapshot",
                    onClick: () => i(),
                  },
                  a.createElement(Tu, null)
                )
              ),
              a.createElement(
                we,
                {
                  tooltip: a.createElement(Ae, { note: r ? "Hide spotlight" : "Show spotlight" }),
                  trigger: "hover",
                  hasChrome: !1,
                },
                a.createElement(
                  Je,
                  {
                    id: "button-toggle-spotlight",
                    active: r,
                    "aria-label": r ? "Hide spotlight" : "Show spotlight",
                    onClick: () => o(!r),
                  },
                  a.createElement(Fu, null)
                )
              ),
              a.createElement(
                we,
                {
                  tooltip: a.createElement(Ae, { note: n ? "Hide diff" : "Show diff" }),
                  trigger: "hover",
                  hasChrome: !1,
                },
                a.createElement(
                  Je,
                  {
                    id: "button-diff-visible",
                    active: n,
                    "aria-label": n ? "Hide diff" : "Show diff",
                    onClick: () => l(!n),
                  },
                  a.createElement(ls, null)
                )
              )
            ),
          (y || b) &&
            a.createElement(
              cf,
              { showDivider: C },
              k &&
                v &&
                y &&
                d &&
                a.createElement(
                  W1,
                  null,
                  a.createElement(
                    we,
                    {
                      tooltip: a.createElement(Ae, { note: "Accept this story" }),
                      trigger: "hover",
                      hasChrome: !1,
                    },
                    a.createElement(
                      hn,
                      {
                        id: "button-toggle-accept-story",
                        disabled: g,
                        "aria-label": "Accept this story",
                        onClick: () => E(d.id, "SPEC"),
                        side: "left",
                      },
                      "Accept"
                    )
                  ),
                  a.createElement(
                    we,
                    {
                      tooltip: a.createElement(Ae, { note: "Batch accept options" }),
                      trigger: "hover",
                      hasChrome: !1,
                    },
                    a.createElement(
                      ia,
                      {
                        placement: "bottom",
                        links: [
                          {
                            id: "acceptComponent",
                            title: "Accept component",
                            center: "Accept all unreviewed changes for this component",
                            onClick: () => E(d.id, "COMPONENT"),
                            disabled: g,
                            loading: g,
                          },
                          {
                            id: "acceptBuild",
                            title: "Accept entire build",
                            center:
                              "Accept all unreviewed changes for every story in the Storybook",
                            onClick: () => E(d.id, "BUILD"),
                            disabled: g,
                            loading: g,
                          },
                        ],
                      },
                      (O) =>
                        a.createElement(
                          hn,
                          {
                            square: !0,
                            active: O,
                            disabled: g,
                            "aria-label": "Batch accept options",
                            side: "right",
                          },
                          g
                            ? a.createElement(_r, { parentComponent: "IconButton" })
                            : a.createElement(Co, null)
                        )
                    )
                  )
                ),
              k &&
                v &&
                b &&
                a.createElement(
                  W1,
                  null,
                  a.createElement(
                    we,
                    {
                      tooltip: a.createElement(Ae, { note: "Unaccept this story" }),
                      trigger: "hover",
                      hasChrome: !1,
                    },
                    a.createElement(
                      hn,
                      {
                        id: "button-toggle-accept-story",
                        disabled: g,
                        "aria-label": "Unaccept this story",
                        onClick: () => h(d.id, "SPEC"),
                        side: "left",
                        status: "positive",
                      },
                      a.createElement(Au, null),
                      "Unaccept"
                    )
                  ),
                  a.createElement(
                    we,
                    {
                      tooltip: a.createElement(Ae, { note: "Batch unaccept options" }),
                      trigger: "hover",
                      hasChrome: !1,
                    },
                    a.createElement(
                      ia,
                      {
                        placement: "bottom",
                        links: [
                          {
                            id: "unacceptComponent",
                            title: "Unaccept component",
                            center: "Unaccept all unreviewed changes for this component",
                            onClick: () => h(d.id, "COMPONENT"),
                            disabled: g,
                            loading: g,
                          },
                          {
                            id: "unacceptBuild",
                            title: "Unaccept entire build",
                            center:
                              "Unaccept all unreviewed changes for every story in the Storybook",
                            onClick: () => h(d.id, "BUILD"),
                            disabled: g,
                            loading: g,
                          },
                        ],
                      },
                      (O) =>
                        a.createElement(
                          hn,
                          {
                            square: !0,
                            active: O,
                            disabled: g,
                            "aria-label": "Batch unaccept options",
                            side: "right",
                            status: "positive",
                          },
                          g
                            ? a.createElement(_r, { parentComponent: "IconButton" })
                            : a.createElement(Co, null)
                        )
                    )
                  )
                ),
              !(k && v) &&
                a.createElement(
                  we,
                  {
                    tooltip: a.createElement(Ae, { note: "Reviewing disabled" }),
                    trigger: "hover",
                    hasChrome: !1,
                  },
                  a.createElement(sf, null, a.createElement(ss, null))
                ),
              a.createElement(
                we,
                {
                  tooltip: a.createElement(Ae, { note: e ? "Run new tests" : "Rerun tests" }),
                  trigger: "hover",
                  hasChrome: !1,
                },
                a.createElement(
                  hn,
                  {
                    square: !0,
                    "aria-label": e ? "Run new tests" : "Rerun tests",
                    onClick: c,
                    disabled: s,
                    variant: "outline",
                  },
                  e ? a.createElement(Bt, null) : a.createElement(ms, null)
                )
              )
            )
        );
      },
      Ga = et(ya()),
      uf = (e) =>
        a.createElement(
          "svg",
          {
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            style: { margin: "3px 6px", verticalAlign: "top" },
            ...e,
          },
          a.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM5.57143 6.85714C5.57143 7.09384 5.76331 7.28571 6 7.28571C6.23669 7.28571 6.42857 7.09384 6.42857 6.85714L6.42857 3.42857C6.42857 3.19188 6.23669 3 6 3C5.76331 3 5.57143 3.19188 5.57143 3.42857V6.85714ZM5.35714 8.78572C5.35714 8.43067 5.64496 8.14286 6 8.14286C6.35504 8.14286 6.64286 8.43067 6.64286 8.78571C6.64286 9.14075 6.35504 9.42857 6 9.42857C5.64496 9.42857 5.35714 9.14075 5.35714 8.78572Z",
            fill: "#73828C",
          })
        ),
      Mi = { width: 12, height: 12, margin: "3px 3px 3px 6px", verticalAlign: "top" },
      mf = ({ icon: e }) => {
        let { color: t } = zt();
        return {
          passed: a.createElement(Ii, { style: { ...Mi, color: t.positive } }),
          changed: a.createElement(bu, { style: { ...Mi, color: t.warning } }),
          failed: a.createElement(St, { style: { ...Mi, color: t.negative } }),
        }[e];
      };
    function ul(e) {
      "@babel/helpers - typeof";
      return (
        (ul =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        ul(e)
      );
    }
    function Wr(e, t) {
      if (t.length < e)
        throw new TypeError(
          e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present"
        );
    }
    function fn(e) {
      Wr(1, arguments);
      var t = Object.prototype.toString.call(e);
      return e instanceof Date || (ul(e) === "object" && t === "[object Date]")
        ? new Date(e.getTime())
        : typeof e == "number" || t === "[object Number]"
          ? new Date(e)
          : ((typeof e == "string" || t === "[object String]") &&
              typeof console < "u" &&
              (console.warn(
                "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"
              ),
              console.warn(new Error().stack)),
            new Date(NaN));
    }
    var pf = {};
    function hf() {
      return pf;
    }
    function q1(e) {
      var t = new Date(
        Date.UTC(
          e.getFullYear(),
          e.getMonth(),
          e.getDate(),
          e.getHours(),
          e.getMinutes(),
          e.getSeconds(),
          e.getMilliseconds()
        )
      );
      return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
    }
    function ff(e, t) {
      Wr(2, arguments);
      var n = fn(e),
        r = fn(t),
        i = n.getTime() - r.getTime();
      return i < 0 ? -1 : i > 0 ? 1 : i;
    }
    var gf = {
        lessThanXSeconds: { one: "less than a second", other: "less than {{count}} seconds" },
        xSeconds: { one: "1 second", other: "{{count}} seconds" },
        halfAMinute: "half a minute",
        lessThanXMinutes: { one: "less than a minute", other: "less than {{count}} minutes" },
        xMinutes: { one: "1 minute", other: "{{count}} minutes" },
        aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
        xHours: { one: "1 hour", other: "{{count}} hours" },
        xDays: { one: "1 day", other: "{{count}} days" },
        aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
        xWeeks: { one: "1 week", other: "{{count}} weeks" },
        aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
        xMonths: { one: "1 month", other: "{{count}} months" },
        aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
        xYears: { one: "1 year", other: "{{count}} years" },
        overXYears: { one: "over 1 year", other: "over {{count}} years" },
        almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
      },
      vf = function (e, t, n) {
        var r,
          i = gf[e];
        return (
          typeof i == "string"
            ? (r = i)
            : t === 1
              ? (r = i.one)
              : (r = i.other.replace("{{count}}", t.toString())),
          n != null && n.addSuffix ? (n.comparison && n.comparison > 0 ? "in " + r : r + " ago") : r
        );
      },
      yf = vf;
    function Ti(e) {
      return function () {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          n = t.width ? String(t.width) : e.defaultWidth,
          r = e.formats[n] || e.formats[e.defaultWidth];
        return r;
      };
    }
    var Ef = {
        full: "EEEE, MMMM do, y",
        long: "MMMM do, y",
        medium: "MMM d, y",
        short: "MM/dd/yyyy",
      },
      bf = { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" },
      kf = {
        full: "{{date}} 'at' {{time}}",
        long: "{{date}} 'at' {{time}}",
        medium: "{{date}}, {{time}}",
        short: "{{date}}, {{time}}",
      },
      wf = {
        date: Ti({ formats: Ef, defaultWidth: "full" }),
        time: Ti({ formats: bf, defaultWidth: "full" }),
        dateTime: Ti({ formats: kf, defaultWidth: "full" }),
      },
      Cf = wf,
      Sf = {
        lastWeek: "'last' eeee 'at' p",
        yesterday: "'yesterday at' p",
        today: "'today at' p",
        tomorrow: "'tomorrow at' p",
        nextWeek: "eeee 'at' p",
        other: "P",
      },
      xf = function (e, t, n, r) {
        return Sf[e];
      },
      Nf = xf;
    function Wn(e) {
      return function (t, n) {
        var r = n != null && n.context ? String(n.context) : "standalone",
          i;
        if (r === "formatting" && e.formattingValues) {
          var l = e.defaultFormattingWidth || e.defaultWidth,
            o = n != null && n.width ? String(n.width) : l;
          i = e.formattingValues[o] || e.formattingValues[l];
        } else {
          var s = e.defaultWidth,
            c = n != null && n.width ? String(n.width) : e.defaultWidth;
          i = e.values[c] || e.values[s];
        }
        var d = e.argumentCallback ? e.argumentCallback(t) : t;
        return i[d];
      };
    }
    var _f = {
        narrow: ["B", "A"],
        abbreviated: ["BC", "AD"],
        wide: ["Before Christ", "Anno Domini"],
      },
      Mf = {
        narrow: ["1", "2", "3", "4"],
        abbreviated: ["Q1", "Q2", "Q3", "Q4"],
        wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
      },
      Tf = {
        narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
        abbreviated: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        wide: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
      },
      Af = {
        narrow: ["S", "M", "T", "W", "T", "F", "S"],
        short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      },
      Ff = {
        narrow: {
          am: "a",
          pm: "p",
          midnight: "mi",
          noon: "n",
          morning: "morning",
          afternoon: "afternoon",
          evening: "evening",
          night: "night",
        },
        abbreviated: {
          am: "AM",
          pm: "PM",
          midnight: "midnight",
          noon: "noon",
          morning: "morning",
          afternoon: "afternoon",
          evening: "evening",
          night: "night",
        },
        wide: {
          am: "a.m.",
          pm: "p.m.",
          midnight: "midnight",
          noon: "noon",
          morning: "morning",
          afternoon: "afternoon",
          evening: "evening",
          night: "night",
        },
      },
      Of = {
        narrow: {
          am: "a",
          pm: "p",
          midnight: "mi",
          noon: "n",
          morning: "in the morning",
          afternoon: "in the afternoon",
          evening: "in the evening",
          night: "at night",
        },
        abbreviated: {
          am: "AM",
          pm: "PM",
          midnight: "midnight",
          noon: "noon",
          morning: "in the morning",
          afternoon: "in the afternoon",
          evening: "in the evening",
          night: "at night",
        },
        wide: {
          am: "a.m.",
          pm: "p.m.",
          midnight: "midnight",
          noon: "noon",
          morning: "in the morning",
          afternoon: "in the afternoon",
          evening: "in the evening",
          night: "at night",
        },
      },
      Lf = function (e, t) {
        var n = Number(e),
          r = n % 100;
        if (r > 20 || r < 10)
          switch (r % 10) {
            case 1:
              return n + "st";
            case 2:
              return n + "nd";
            case 3:
              return n + "rd";
          }
        return n + "th";
      },
      Rf = {
        ordinalNumber: Lf,
        era: Wn({ values: _f, defaultWidth: "wide" }),
        quarter: Wn({
          values: Mf,
          defaultWidth: "wide",
          argumentCallback: function (e) {
            return e - 1;
          },
        }),
        month: Wn({ values: Tf, defaultWidth: "wide" }),
        day: Wn({ values: Af, defaultWidth: "wide" }),
        dayPeriod: Wn({
          values: Ff,
          defaultWidth: "wide",
          formattingValues: Of,
          defaultFormattingWidth: "wide",
        }),
      },
      If = Rf;
    function Gn(e) {
      return function (t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = n.width,
          i = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
          l = t.match(i);
        if (!l) return null;
        var o = l[0],
          s = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
          c = Array.isArray(s)
            ? Bf(s, function (m) {
                return m.test(o);
              })
            : Zf(s, function (m) {
                return m.test(o);
              }),
          d;
        (d = e.valueCallback ? e.valueCallback(c) : c),
          (d = n.valueCallback ? n.valueCallback(d) : d);
        var u = t.slice(o.length);
        return { value: d, rest: u };
      };
    }
    function Zf(e, t) {
      for (var n in e) if (e.hasOwnProperty(n) && t(e[n])) return n;
    }
    function Bf(e, t) {
      for (var n = 0; n < e.length; n++) if (t(e[n])) return n;
    }
    function Pf(e) {
      return function (t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          r = t.match(e.matchPattern);
        if (!r) return null;
        var i = r[0],
          l = t.match(e.parsePattern);
        if (!l) return null;
        var o = e.valueCallback ? e.valueCallback(l[0]) : l[0];
        o = n.valueCallback ? n.valueCallback(o) : o;
        var s = t.slice(i.length);
        return { value: o, rest: s };
      };
    }
    var Vf = /^(\d+)(th|st|nd|rd)?/i,
      Df = /\d+/i,
      Hf = {
        narrow: /^(b|a)/i,
        abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
        wide: /^(before christ|before common era|anno domini|common era)/i,
      },
      jf = { any: [/^b/i, /^(a|c)/i] },
      zf = { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](th|st|nd|rd)? quarter/i },
      Uf = { any: [/1/i, /2/i, /3/i, /4/i] },
      $f = {
        narrow: /^[jfmasond]/i,
        abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
        wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
      },
      Wf = {
        narrow: [
          /^j/i,
          /^f/i,
          /^m/i,
          /^a/i,
          /^m/i,
          /^j/i,
          /^j/i,
          /^a/i,
          /^s/i,
          /^o/i,
          /^n/i,
          /^d/i,
        ],
        any: [
          /^ja/i,
          /^f/i,
          /^mar/i,
          /^ap/i,
          /^may/i,
          /^jun/i,
          /^jul/i,
          /^au/i,
          /^s/i,
          /^o/i,
          /^n/i,
          /^d/i,
        ],
      },
      Gf = {
        narrow: /^[smtwf]/i,
        short: /^(su|mo|tu|we|th|fr|sa)/i,
        abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
        wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
      },
      qf = {
        narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
        any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
      },
      Yf = {
        narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
        any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
      },
      Qf = {
        any: {
          am: /^a/i,
          pm: /^p/i,
          midnight: /^mi/i,
          noon: /^no/i,
          morning: /morning/i,
          afternoon: /afternoon/i,
          evening: /evening/i,
          night: /night/i,
        },
      },
      Kf = {
        ordinalNumber: Pf({
          matchPattern: Vf,
          parsePattern: Df,
          valueCallback: function (e) {
            return parseInt(e, 10);
          },
        }),
        era: Gn({
          matchPatterns: Hf,
          defaultMatchWidth: "wide",
          parsePatterns: jf,
          defaultParseWidth: "any",
        }),
        quarter: Gn({
          matchPatterns: zf,
          defaultMatchWidth: "wide",
          parsePatterns: Uf,
          defaultParseWidth: "any",
          valueCallback: function (e) {
            return e + 1;
          },
        }),
        month: Gn({
          matchPatterns: $f,
          defaultMatchWidth: "wide",
          parsePatterns: Wf,
          defaultParseWidth: "any",
        }),
        day: Gn({
          matchPatterns: Gf,
          defaultMatchWidth: "wide",
          parsePatterns: qf,
          defaultParseWidth: "any",
        }),
        dayPeriod: Gn({
          matchPatterns: Yf,
          defaultMatchWidth: "any",
          parsePatterns: Qf,
          defaultParseWidth: "any",
        }),
      },
      Jf = Kf,
      Xf = {
        code: "en-US",
        formatDistance: yf,
        formatLong: Cf,
        formatRelative: Nf,
        localize: If,
        match: Jf,
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
      },
      nc = Xf,
      e8 = nc;
    function ac(e, t) {
      if (e == null)
        throw new TypeError("assign requires that input parameter not be null or undefined");
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      return e;
    }
    function t8(e) {
      return ac({}, e);
    }
    var Y1 = 1e3 * 60,
      Mr = 60 * 24,
      Q1 = Mr * 30,
      K1 = Mr * 365;
    function n8(e, t, n) {
      var r, i, l;
      Wr(2, arguments);
      var o = hf(),
        s =
          (r = (i = n?.locale) !== null && i !== void 0 ? i : o.locale) !== null && r !== void 0
            ? r
            : e8;
      if (!s.formatDistance)
        throw new RangeError("locale must contain localize.formatDistance property");
      var c = ff(e, t);
      if (isNaN(c)) throw new RangeError("Invalid time value");
      var d = ac(t8(n), { addSuffix: !!n?.addSuffix, comparison: c }),
        u,
        m;
      c > 0 ? ((u = fn(t)), (m = fn(e))) : ((u = fn(e)), (m = fn(t)));
      var p = String((l = n?.roundingMethod) !== null && l !== void 0 ? l : "round"),
        f;
      if (p === "floor") f = Math.floor;
      else if (p === "ceil") f = Math.ceil;
      else if (p === "round") f = Math.round;
      else throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
      var g = m.getTime() - u.getTime(),
        v = g / Y1,
        k = q1(m) - q1(u),
        E = (g - k) / Y1,
        h = n?.unit,
        y;
      if (
        (h
          ? (y = String(h))
          : v < 1
            ? (y = "second")
            : v < 60
              ? (y = "minute")
              : v < Mr
                ? (y = "hour")
                : E < Q1
                  ? (y = "day")
                  : E < K1
                    ? (y = "month")
                    : (y = "year"),
        y === "second")
      ) {
        var b = f(g / 1e3);
        return s.formatDistance("xSeconds", b, d);
      } else if (y === "minute") {
        var C = f(v);
        return s.formatDistance("xMinutes", C, d);
      } else if (y === "hour") {
        var O = f(v / 60);
        return s.formatDistance("xHours", O, d);
      } else if (y === "day") {
        var I = f(E / Mr);
        return s.formatDistance("xDays", I, d);
      } else if (y === "month") {
        var U = f(E / Q1);
        return U === 12 && h !== "month"
          ? s.formatDistance("xYears", 1, d)
          : s.formatDistance("xMonths", U, d);
      } else if (y === "year") {
        var G = f(E / K1);
        return s.formatDistance("xYears", G, d);
      }
      throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
    }
    function a8(e, t) {
      return Wr(1, arguments), n8(e, Date.now(), t);
    }
    var r8 = {
      lessThanXSeconds: "just now",
      xSeconds: "just now",
      halfAMinute: "just now",
      lessThanXMinutes: "{{count}}m",
      xMinutes: "{{count}}m",
      aboutXHours: "{{count}}h",
      xHours: "{{count}}h",
      xDays: "{{count}}d",
      aboutXWeeks: "{{count}}w",
      xWeeks: "{{count}}w",
      aboutXMonths: "{{count}}mo",
      xMonths: "{{count}}mo",
      aboutXYears: "{{count}}y",
      xYears: "{{count}}y",
      overXYears: "{{count}}y",
      almostXYears: "{{count}}y",
    };
    function i8(e, t, n = { addSuffix: !1, comparison: 0 }) {
      let r = r8[e].replace("{{count}}", t);
      return ["lessThanXSeconds", "xSeconds", "halfAMinute"].includes(e)
        ? `${r}`
        : n.addSuffix
          ? n.comparison > 0
            ? `in ${r}`
            : `${r} ago`
          : r;
    }
    var l8 = (e) => a8(e, { addSuffix: !0, locale: { ...nc, formatDistance: i8 } }),
      qn = w.div(({ theme: e }) => ({
        gridArea: "info",
        display: "flex",
        justifySelf: "start",
        justifyContent: "center",
        flexDirection: "column",
        margin: 15,
        lineHeight: "18px",
        color: e.base === "light" ? `${e.color.defaultText}99` : `${e.color.light}99`,
        b: { color: e.base === "light" ? `${e.color.defaultText}` : `${e.color.light}` },
        small: { fontSize: e.typography.size.s1 },
        "@container (min-width: 800px)": {
          margin: "6px 10px 6px 15px",
          alignItems: "center",
          flexDirection: "row",
          small: { fontSize: "inherit" },
          "[data-hidden-large]": { display: "none" },
          "& > span:first-of-type": {
            display: "inline-flex",
            alignItems: "center",
            height: 24,
            marginRight: 6,
          },
        },
      })),
      o8 = w.div({
        gridArea: "actions",
        display: "flex",
        justifySelf: "end",
        justifyContent: "center",
        alignItems: "start",
        margin: 15,
        "@container (min-width: 800px)": { margin: "6px 15px 0 0" },
      }),
      s8 = ({
        isStarting: e,
        tests: t,
        startedAt: n,
        isBuildFailed: r,
        isOutdated: i,
        shouldSwitchToLastBuildOnBranch: l,
        switchToLastBuildOnBranch: o,
      }) => {
        let { isRunning: s, startBuild: c } = ka(),
          {
            status: d,
            isInProgress: u,
            changeCount: m,
            brokenCount: p,
            modeResults: f,
            browserResults: g,
          } = Wl(t ?? []),
          v = !e && n && l8(new Date(n).getTime()),
          k = e || u,
          E = r || d === "FAILED",
          h = E || d === "BROKEN",
          y = (h || i) && !k && !m,
          b;
        return (
          i
            ? (b = a.createElement(
                qn,
                null,
                a.createElement("span", null, a.createElement("b", null, "Code edits detected")),
                a.createElement(
                  "small",
                  null,
                  a.createElement("span", null, "Run tests to see what changed")
                )
              ))
            : E
              ? (b = a.createElement(
                  qn,
                  null,
                  a.createElement(
                    "span",
                    null,
                    a.createElement("b", null, "Build failed"),
                    a.createElement(uf, null)
                  ),
                  a.createElement(
                    "small",
                    null,
                    a.createElement("span", null, "An infrastructure error occured")
                  )
                ))
              : k
                ? (b = a.createElement(
                    qn,
                    null,
                    a.createElement(
                      "span",
                      null,
                      a.createElement("b", null, "Running tests..."),
                      a.createElement(_r, null)
                    ),
                    a.createElement(
                      "small",
                      null,
                      a.createElement("span", null, "Test in progress...")
                    )
                  ))
                : l
                  ? (b = a.createElement(
                      qn,
                      null,
                      a.createElement(
                        "span",
                        null,
                        a.createElement(
                          "b",
                          null,
                          a.createElement(Ut, { isButton: !0, onClick: o }, "View latest snapshot")
                        )
                      ),
                      a.createElement(
                        "span",
                        null,
                        "Newer test results are available for this story"
                      )
                    ))
                  : (b = a.createElement(
                      qn,
                      null,
                      a.createElement(
                        "span",
                        null,
                        a.createElement(
                          "b",
                          null,
                          p
                            ? null
                            : m
                              ? `${(0, Ga.default)("change", m, !0)}${d === "ACCEPTED" ? " accepted" : ""}`
                              : "No changes",
                          p ? (0, Ga.default)("error", p, !0) : null
                        ),
                        a.createElement(mf, {
                          icon: p ? "failed" : d === "PENDING" ? "changed" : "passed",
                        })
                      ),
                      a.createElement(
                        "small",
                        null,
                        f.length > 0 &&
                          a.createElement(
                            "span",
                            { "data-hidden-large": !0 },
                            (0, Ga.default)("mode", f.length, !0),
                            ", ",
                            (0, Ga.default)("browser", g.length, !0)
                          ),
                        f.length > 0 &&
                          a.createElement("span", { "data-hidden-large": !0 }, " \u2022 "),
                        u && a.createElement("span", null, "Test in progress..."),
                        !u &&
                          n &&
                          a.createElement("span", { title: new Date(n).toUTCString() }, "Ran ", v)
                      )
                    )),
          a.createElement(
            a.Fragment,
            null,
            b,
            y &&
              a.createElement(
                o8,
                null,
                a.createElement(
                  hn,
                  { onClick: c, disabled: s },
                  s
                    ? a.createElement(_r, { parentComponent: "Button" })
                    : a.createElement(Bt, null),
                  h ? "Rerun tests" : "Run tests"
                )
              )
          )
        );
      },
      J1 = w.div(({ theme: e }) => ({
        display: "grid",
        gridTemplateAreas: `
    "info info"
    "actions actions"
    "label controls"
  `,
        gridTemplateColumns: "1fr fit-content(50%)",
        gridTemplateRows: "auto auto auto",
        borderBottom: `1px solid ${e.appBorderColor}`,
        "@container (min-width: 300px)": {
          gridTemplateAreas: `
      "info actions"
      "label controls"
    `,
          gridTemplateColumns: "1fr auto",
          gridTemplateRows: "auto auto",
        },
        "@container (min-width: 800px)": {
          gridTemplateAreas: '"info label controls actions"',
          gridTemplateColumns: "auto 1fr auto auto",
          gridTemplateRows: 40,
        },
      })),
      X1 = w.div(({ theme: e }) => ({
        display: "grid",
        gridTemplateAreas: `
    "header"
    "main"
    "footer"
  `,
        gridTemplateColumns: "1fr",
        gridTemplateRows: "auto 1fr auto",
        height: "100%",
        "&[hidden]": { display: "none" },
      })),
      es = w.div(({ theme: e }) => ({
        gridArea: "header",
        position: "sticky",
        zIndex: 1,
        top: 0,
        background: e.background.content,
        "@container (min-width: 800px)": { background: e.background.app },
      })),
      c8 = w.div(({ theme: e }) => ({
        gridArea: "main",
        overflowY: "auto",
        maxHeight: "100%",
        background: e.background.content,
      })),
      ts = w.div(({ theme: e }) => ({
        gridArea: "footer",
        position: "sticky",
        zIndex: 1,
        bottom: 0,
      })),
      d8 = w.div(({ children: e, theme: t }) => ({
        display: "flex",
        alignItems: "center",
        border: `0px solid ${t.appBorderColor}`,
        borderTopWidth: 1,
        borderBottomWidth: e ? 1 : 0,
        height: e ? 40 : 0,
        padding: e ? "0 15px" : 0,
      })),
      u8 = w.div(({ theme: e }) => ({
        fontFamily: e.typography.fonts.mono,
        fontSize: e.typography.size.s1,
        color: e.color.defaultText,
        lineHeight: "18px",
        padding: 15,
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
      })),
      Ai = w.div(({ theme: e }) => ({
        background: e.background.hoverable,
        padding: "10px 15px",
        lineHeight: "18px",
        position: "relative",
        borderBottom: `1px solid ${e.appBorderColor}`,
      })),
      m8 = ({
        isOutdated: e,
        isStarting: t,
        isBuildFailed: n,
        shouldSwitchToLastBuildOnBranch: r,
        switchToLastBuildOnBranch: i,
        hidden: l,
        storyId: o,
      }) => {
        let { baselineImageVisible: s, diffVisible: c, focusVisible: d } = Ir(),
          { toggleBaselineImage: u, toggleSettings: m, toggleWarnings: p } = Mn(),
          f = K0(),
          g = "startedAt" in f && f.startedAt,
          v = ln(),
          { tests: k } = v,
          E = a.useRef(o),
          h = a.useRef(v.selectedComparison?.id),
          y = a.useRef(f.id),
          { selectedTest: b, selectedComparison: C } = v,
          O = k.every(({ result: ye, status: pe }) => ye === "ADDED" && pe !== "ACCEPTED"),
          I = !O && b?.result === "ADDED" && b?.status !== "ACCEPTED",
          U = !O && C?.result === "ADDED" && b?.result !== "ADDED" && b?.status !== "ACCEPTED";
        K(() => {
          (E.current !== o ||
            h.current !== v.selectedComparison?.id ||
            y.current !== f.id ||
            O ||
            I ||
            U) &&
            (u(!1), m(!1), p(!1)),
            (h.current = v.selectedComparison?.id),
            (E.current = o),
            (y.current = f.id);
        }, [f.id, o, v, u, m, p, O, I, U]);
        let G = a.createElement(s8, {
          tests: k,
          startedAt: g,
          isStarting: t,
          isBuildFailed: n,
          isOutdated: e,
          shouldSwitchToLastBuildOnBranch: r,
          switchToLastBuildOnBranch: i,
        });
        if (t || !k.length)
          return a.createElement(
            X1,
            { hidden: l },
            a.createElement(es, null, a.createElement(J1, null, G)),
            a.createElement(ts, null, a.createElement($1, null))
          );
        let oe = Wl(k),
          { isInProgress: ee } = oe,
          ke =
            C?.headCapture?.captureError &&
            "error" in C?.headCapture?.captureError &&
            C?.headCapture?.captureError?.error;
        return a.createElement(
          X1,
          { hidden: l },
          a.createElement(
            es,
            null,
            a.createElement(J1, null, G, a.createElement(df, { isOutdated: e }))
          ),
          a.createElement(
            c8,
            null,
            ee && a.createElement(ei, null),
            !ee &&
              O &&
              a.createElement(
                Ai,
                null,
                a.createElement(
                  j,
                  null,
                  "New story found. Accept this snapshot as a test baseline.",
                  " ",
                  a.createElement(
                    Be,
                    {
                      withArrow: !0,
                      href: "https://www.chromatic.com/docs/branching-and-baselines",
                      target: "_blank",
                    },
                    "Learn more"
                  )
                )
              ),
            !ee &&
              I &&
              a.createElement(
                Ai,
                null,
                a.createElement(
                  j,
                  null,
                  "New mode found. Accept this snapshot as a test baseline.",
                  " ",
                  a.createElement(
                    Be,
                    {
                      withArrow: !0,
                      href: "https://www.chromatic.com/docs/branching-and-baselines",
                      target: "_blank",
                    },
                    "Learn more"
                  )
                )
              ),
            !ee &&
              U &&
              a.createElement(
                Ai,
                null,
                a.createElement(
                  j,
                  null,
                  "New browser found. Accept this snapshot as a test baseline.",
                  " ",
                  a.createElement(
                    Be,
                    {
                      withArrow: !0,
                      href: "https://www.chromatic.com/docs/branching-and-baselines",
                      target: "_blank",
                    },
                    "Learn more"
                  )
                )
              ),
            !ee &&
              C &&
              a.createElement(Y6, {
                key: C.id,
                componentName: b?.story?.component?.name,
                storyName: b?.story?.name,
                testUrl: b?.webUrl,
                comparisonResult: C.result ?? void 0,
                latestImage: C.headCapture?.captureImage ?? void 0,
                baselineImage: C.baseCapture?.captureImage ?? void 0,
                baselineImageVisible: s,
                diffImage: C.captureDiff?.diffImage ?? void 0,
                focusImage: C.captureDiff?.focusImage ?? void 0,
                diffVisible: c,
                focusVisible: d,
              }),
            !ee &&
              ke &&
              a.createElement(
                a.Fragment,
                null,
                a.createElement(d8, null, a.createElement("b", null, "Error stack trace")),
                a.createElement(u8, null, ke.stack || ke.message)
              )
          ),
          a.createElement(ts, null, a.createElement($1, null))
        );
      },
      p8 = w(Jr)({ padding: "4px 8px", margin: "0 6px" }),
      h8 = ({ onClose: e }) =>
        a.createElement(
          Qs,
          null,
          a.createElement(
            Xi,
            null,
            a.createElement(
              ur,
              null,
              "Warnings",
              a.createElement(p8, { status: "warning" }, "2"),
              a.createElement(Zl, { onClick: e }, a.createElement(Il, { "aria-label": "Close" }))
            ),
            a.createElement(
              "p",
              null,
              "It's essential that your components and stories render in a consistent fashion to prevent false positives. Two issues detected in this story may cause false positives."
            ),
            a.createElement(
              "p",
              null,
              a.createElement(ce, { variant: "outline" }, a.createElement(os, null), "Docs"),
              a.createElement(ce, { variant: "outline" }, a.createElement(wu, null), "Get support")
            )
          )
        );
    w.div(({ theme: e }) => ({
      color: e.color.warning,
      background: e.background.warning,
      padding: 10,
      lineHeight: "18px",
      position: "relative",
    }));
    var f8 = ({
        branch: e,
        dismissBuildError: t,
        isOutdated: n,
        localBuildProgress: r,
        switchToLastBuildOnBranch: i,
        storyId: l,
      }) => {
        let { settingsVisible: o, warningsVisible: s } = Ir(),
          { toggleSettings: c, toggleWarnings: d } = Mn(),
          { isRunning: u, startBuild: m, stopBuild: p } = ka(),
          {
            lastBuildOnBranch: f,
            lastBuildOnBranchIsReady: g,
            lastBuildOnBranchIsSelectable: v,
          } = r6(),
          k = K0(),
          E = ln(),
          { buildIsReviewable: h, userCanReview: y } = tc(),
          b = !!(!h && g && v && i),
          C = f?.status === "IN_PROGRESS",
          O = u || (!h && !b),
          I = r && r?.buildId === f?.id,
          U =
            O &&
            a.createElement(z6, {
              branch: e,
              dismissBuildError: t,
              localBuildProgress: I || u ? r : void 0,
              lastBuildOnBranchInProgress: C,
              switchToLastBuildOnBranch: i,
            }),
          G = E?.hasTests && E?.tests.length === 0,
          oe = k.id !== `Build:${r?.buildId}`;
        if (G)
          return a.createElement(
            ve,
            null,
            a.createElement(
              he,
              null,
              r && oe
                ? a.createElement(
                    se,
                    null,
                    a.createElement(
                      "div",
                      null,
                      a.createElement(me, null, "Snapshotting new story"),
                      a.createElement(
                        j,
                        { center: !0, muted: !0 },
                        'A new snapshot is being created in a standardized cloud browser to save its "last known good state" as a test baseline.'
                      )
                    ),
                    a.createElement($r, { localBuildProgress: r })
                  )
                : a.createElement(
                    se,
                    null,
                    a.createElement(
                      "div",
                      null,
                      a.createElement(me, null, "New story found"),
                      a.createElement(
                        j,
                        { center: !0, muted: !0 },
                        'Take an image snapshot of this story to save its "last known good state" as a test baseline. This unlocks visual regression testing so you can see exactly what has changed down to the pixel.'
                      )
                    ),
                    a.createElement(
                      ce,
                      { belowText: !0, size: "medium", variant: "solid", onClick: u ? p : m },
                      u ? "Cancel build" : "Create visual test"
                    )
                  )
            )
          );
        if (E?.tests?.find((ie) => ie.result === "SKIPPED"))
          return a.createElement(
            ve,
            null,
            U,
            a.createElement(
              he,
              null,
              a.createElement(
                se,
                null,
                a.createElement(
                  "div",
                  null,
                  a.createElement(me, null, "This story was skipped"),
                  a.createElement(
                    j,
                    { center: !0, muted: !0 },
                    "If you would like to resume testing it, comment out or remove",
                    a.createElement(Oe, null, "disableSnapshot = true"),
                    " from the CSF file."
                  )
                ),
                a.createElement(
                  ce,
                  { asChild: !0, size: "medium", variant: "outline" },
                  a.createElement(
                    "a",
                    {
                      href: "https://www.chromatic.com/docs/ignoring-elements#with-storybook",
                      target: "_new",
                    },
                    a.createElement(os, null),
                    "View docs"
                  )
                )
              )
            )
          );
        let { status: ee } = k,
          ke = ["ANNOUNCED", "PUBLISHED", "PREPARED"].includes(ee),
          ye = ee === "FAILED",
          pe = ee === "PENDING" && (!y || !h);
        return a.createElement(
          ve,
          { footer: null },
          a.createElement(
            H4,
            null,
            U,
            !U &&
              pe &&
              a.createElement(
                Z6,
                null,
                y
                  ? a.createElement(
                      a.Fragment,
                      null,
                      "Reviewing is disabled because there's a newer build on ",
                      a.createElement(Oe, null, e),
                      "."
                    )
                  : a.createElement(
                      a.Fragment,
                      null,
                      "You don't have permission to accept changes.",
                      " ",
                      a.createElement(
                        Ut,
                        {
                          href: "https://www.chromatic.com/docs/collaborators#roles",
                          target: "_blank",
                          withArrow: !0,
                        },
                        "Learn about roles"
                      )
                    )
              ),
            a.createElement(
              Xn,
              { grow: !0, hidden: o || s },
              a.createElement(m8, {
                hidden: o || s,
                isOutdated: n,
                isStarting: ke,
                isBuildFailed: ye,
                shouldSwitchToLastBuildOnBranch: b,
                switchToLastBuildOnBranch: i,
                selectedBuild: k,
                storyId: l,
              })
            ),
            a.createElement(
              Xn,
              { grow: !0, hidden: !o },
              a.createElement(U6, { onClose: () => c(!1) })
            ),
            a.createElement(
              Xn,
              { grow: !0, hidden: !s },
              a.createElement(h8, { onClose: () => d(!1) })
            )
          )
        );
      },
      Fi = w(Be)(() => ({ marginTop: 5 })),
      g8 = ({
        queryError: e,
        hasData: t,
        hasProject: n,
        hasSelectedBuild: r,
        localBuildProgress: i,
        branch: l,
      }) => {
        let { setAccessToken: o } = js(),
          { isRunning: s, startBuild: c } = ka(),
          { disable: d, disableSnapshot: u, docsOnly: m } = eo("chromatic", {}),
          p = () => {
            let f = a.createElement(
              ce,
              { disabled: s, size: "medium", variant: "solid", onClick: c },
              a.createElement(Bt, null),
              "Take snapshots"
            );
            return i
              ? i.currentStep === "error"
                ? a.createElement(
                    a.Fragment,
                    null,
                    a.createElement(J0, { localBuildProgress: i, title: "Build failed" }),
                    f
                  )
                : a.createElement($r, { localBuildProgress: i })
              : f;
          };
        return a.createElement(
          ve,
          {
            footer: a.createElement(
              Br,
              null,
              a.createElement(
                Xe,
                null,
                t &&
                  !e &&
                  n &&
                  a.createElement(
                    j,
                    { muted: !0, style: { marginLeft: 5 } },
                    "Waiting for build on ",
                    l
                  )
              ),
              a.createElement(Xe, { push: !0 }, a.createElement(Zr, null))
            ),
          },
          e?.networkError
            ? a.createElement(
                he,
                null,
                a.createElement(
                  se,
                  null,
                  a.createElement(
                    "div",
                    null,
                    a.createElement(me, null, "Network error"),
                    a.createElement(j, null, e.networkError.message)
                  ),
                  a.createElement(
                    ce,
                    { size: "medium", variant: "solid", onClick: () => o(null) },
                    "Log out"
                  )
                )
              )
            : e?.graphQLErrors?.length
              ? a.createElement(
                  he,
                  null,
                  a.createElement(
                    se,
                    null,
                    a.createElement(
                      "div",
                      null,
                      a.createElement(me, null, e.graphQLErrors[0].message),
                      a.createElement(
                        j,
                        { center: !0, muted: !0 },
                        e.graphQLErrors[0].extensions.code === "FORBIDDEN"
                          ? "You may have insufficient permissions. Try logging out and back in again."
                          : "Try logging out or clear your browser's local storage."
                      )
                    ),
                    a.createElement(
                      Et,
                      null,
                      a.createElement(
                        ce,
                        { size: "medium", variant: "solid", onClick: () => o(null) },
                        "Log out"
                      ),
                      a.createElement(
                        Fi,
                        { withArrow: !0, href: `${is}#troubleshooting`, target: "_blank" },
                        "Troubleshoot"
                      )
                    )
                  )
                )
              : t
                ? n
                  ? d || u || m
                    ? a.createElement(
                        he,
                        null,
                        a.createElement(
                          se,
                          null,
                          a.createElement(
                            "div",
                            null,
                            a.createElement(me, null, "Visual tests disabled for this story"),
                            a.createElement(
                              j,
                              { center: !0, muted: !0 },
                              "Update ",
                              a.createElement(
                                "code",
                                null,
                                "parameters.chromatic.",
                                d ? "disable" : u ? "disableSnapshot" : "docsOnly"
                              ),
                              " to enable snapshots for this story."
                            )
                          ),
                          a.createElement(
                            Fi,
                            {
                              withArrow: !0,
                              href: "https://www.chromatic.com/docs/ignoring-elements#with-storybook",
                              target: "_blank",
                            },
                            "Read more"
                          )
                        )
                      )
                    : r
                      ? null
                      : a.createElement(
                          he,
                          null,
                          a.createElement(
                            se,
                            null,
                            a.createElement(
                              "div",
                              null,
                              a.createElement(me, null, "Create a test baseline"),
                              a.createElement(
                                j,
                                { center: !0, muted: !0 },
                                'Take an image snapshot of your stories to save their "last known good state" as test baselines.'
                              )
                            ),
                            p()
                          )
                        )
                  : a.createElement(
                      he,
                      null,
                      a.createElement(
                        se,
                        null,
                        a.createElement(
                          "div",
                          null,
                          a.createElement(me, null, "Project not found"),
                          a.createElement(
                            j,
                            { center: !0, muted: !0 },
                            "You may not have access to this project or it may not exist."
                          )
                        ),
                        a.createElement(
                          Fi,
                          { isButton: !0, onClick: () => o(null), withArrow: !0 },
                          "Switch account"
                        )
                      )
                    )
                : a.createElement(ei, null)
        );
      },
      v8 = (e) => Object.fromEntries(Object.entries(e).map(([t]) => [t, null])),
      y8 = ({ buildIsReviewable: e, userCanReview: t, onReviewSuccess: n, onReviewError: r }) => {
        let [{ fetching: i }, l] = Ss(n6),
          o = H(
            async (d) => {
              try {
                if (!e) throw new Error("Build is not reviewable");
                if (!t) throw new Error("No permission to review tests");
                let { error: u } = await l({ input: d });
                if (u) throw u;
                n?.(d);
              } catch (u) {
                r?.(u, d);
              }
            },
            [n, r, l, e, t]
          ),
          s = H((d, u = "SPEC") => o({ status: "ACCEPTED", testId: d, batch: u }), [o]),
          c = H((d, u = "SPEC") => o({ status: "PENDING", testId: d, batch: u }), [o]);
        return {
          isReviewing: i,
          acceptTest: s,
          unacceptTest: c,
          buildIsReviewable: e,
          userCanReview: t,
        };
      },
      E8 = lt(`
  mutation UpdateUserPreferences($input: UserPreferencesInput!) {
    updateUserPreferences(input: $input) {
      updatedPreferences {
        vtaOnboarding
      }
    }
  }
`),
      b8 = ({ lastBuildOnBranch: e, vtaOnboarding: t }) => {
        let n = sn(),
          { notifications: r, storyId: i } = jt(),
          [l, o] = a.useState(!1),
          s = a.useCallback(() => {
            o(!0), r.forEach(({ id: h }) => n.clearNotification(h));
          }, [n, r]),
          [c, d] = a.useState(!1),
          u = a.useCallback(() => d(!0), []),
          [m, p] = a.useState(!0);
        a.useEffect(() => {
          if (n?.getUrlState?.().queryParams.vtaOnboarding === "true") {
            p(!1);
            return;
          }
          t && p(t === "COMPLETED" || t === "DISMISSED");
        }, [n, t]);
        let [{ fetching: f }, g] = Ss(E8),
          v = a.useCallback(
            async (h) => {
              await g({ input: { vtaOnboarding: h ? "COMPLETED" : "DISMISSED" } }), p(!0), d(!1);
              let b = new URL(window.location.href);
              b.searchParams.has("vtaOnboarding") &&
                (b.searchParams.delete("vtaOnboarding"),
                window.history.replaceState({}, "", b.href));
            },
            [g]
          ),
          k = a.useMemo(
            () =>
              (
                (e &&
                  "testsForStatus" in e &&
                  e.testsForStatus?.nodes &&
                  vn(Y0, e.testsForStatus.nodes)) ||
                []
              ).some(
                (h) => h?.status === "PENDING" && h?.result === "CHANGED" && h?.story?.storyId === i
              ),
            [e, i]
          ),
          E = !l && !m && !c;
        return {
          showOnboarding: E,
          showGuidedTour: !E && !m,
          completeOnboarding: s,
          skipOnboarding: a.useCallback(() => v(!1), [v]),
          completeWalkthrough: a.useCallback(() => v(!0), [v]),
          skipWalkthrough: a.useCallback(() => v(!1), [v]),
          startWalkthrough: u,
          lastBuildHasChangesForStory: k,
          isUpdating: f,
        };
      },
      k8 = ({
        isOutdated: e,
        selectedBuildInfo: t,
        setSelectedBuildInfo: n,
        dismissBuildError: r,
        localBuildProgress: i,
        setOutdated: l,
        updateBuildStatus: o,
        projectId: s,
        gitInfo: c,
        storyId: d,
      }) => {
        let u = sn(),
          { addNotification: m, setOptions: p, togglePanel: f } = u,
          g = a6({ projectId: s, storyId: d, gitInfo: c, selectedBuildInfo: t }),
          {
            account: v,
            features: k,
            manageUrl: E,
            hasData: h,
            hasProject: y,
            hasSelectedBuild: b,
            lastBuildOnBranch: C,
            lastBuildOnBranchIsReady: O,
            lastBuildOnBranchIsSelectable: I,
            selectedBuild: U,
            selectedBuildMatchesGit: G,
            queryError: oe,
            rerunQuery: ee,
            userCanReview: ke,
          } = g,
          ye = H(
            ({ onDismiss: Tt }) => {
              Tt(), p({ selectedPanel: nn }), f(!0);
            },
            [p, f]
          ),
          pe = y8({
            buildIsReviewable: !!U && U.id === C?.id,
            userCanReview: ke,
            onReviewSuccess: ee,
            onReviewError: (Tt, cc) => {
              Tt instanceof Error &&
                m({
                  id: `${Z}/errorAccepting/${Date.now()}`,
                  content: {
                    headline: `Failed to ${cc.status === "ACCEPTED" ? "accept" : "unaccept"} changes`,
                    subHeadline: Tt.message,
                  },
                  icon: a.createElement(St, { color: dt.negative }),
                  duration: 8e3,
                  onClick: ye,
                });
            },
          });
        K(() => l(!G), [G, l]);
        let ie =
            C && "testsForStatus" in C && C.testsForStatus?.nodes && vn(Y0, C.testsForStatus.nodes),
          Ge = I && N3(u, ie || []);
        K(() => {
          o((Tt) => ({ ...v8(Tt), ...Ge }));
        }, [JSON.stringify(Ge), o]),
          K(() => {
            n((Tt) =>
              _3(Tt, {
                shouldSwitchToLastBuildOnBranch: I && O,
                lastBuildOnBranchId: C?.id,
                storyId: d,
              })
            );
          }, [I, O, C?.id, n, d]);
        let Se = H(() => C?.id && I && n({ buildId: C.id, storyId: d }), [n, I, C?.id, d]),
          {
            showOnboarding: Mt,
            showGuidedTour: Le,
            completeOnboarding: Ta,
            completeWalkthrough: rc,
            skipOnboarding: ic,
            skipWalkthrough: lc,
            startWalkthrough: oc,
            lastBuildHasChangesForStory: sc,
          } = b8(g);
        return k && !k.uiTests
          ? a.createElement(M3, { manageUrl: E })
          : v?.suspensionReason
            ? a.createElement(h0, {
                billingUrl: v.billingUrl,
                suspensionReason: v.suspensionReason,
              })
            : Mt && y
              ? a.createElement(
                  a.Fragment,
                  null,
                  !h || oe
                    ? a.createElement(a.Fragment, null)
                    : a.createElement(
                        Ni,
                        { watchState: g },
                        a.createElement(I6, {
                          gitInfo: c,
                          projectId: s,
                          updateBuildStatus: o,
                          dismissBuildError: r,
                          localBuildProgress: i,
                          showInitialBuildScreen: !U,
                          onComplete: Ta,
                          onSkip: ic,
                          lastBuildHasChangesForStory: sc,
                        })
                      )
                )
              : a.createElement(
                  a.Fragment,
                  null,
                  !U || !b || !h || oe
                    ? a.createElement(g8, {
                        queryError: oe,
                        hasData: h,
                        hasProject: y,
                        hasSelectedBuild: b,
                        branch: c.branch,
                        dismissBuildError: r,
                        isOutdated: e,
                        localBuildProgress: i,
                        ...(I && { switchToLastBuildOnBranch: Se }),
                      })
                    : a.createElement(
                        $6,
                        { watchState: pe },
                        a.createElement(
                          Ni,
                          { watchState: g },
                          a.createElement(f8, {
                            branch: c.branch,
                            dismissBuildError: r,
                            isOutdated: e,
                            localBuildProgress: i,
                            ...(C && { lastBuildOnBranch: C }),
                            ...(I && { switchToLastBuildOnBranch: Se }),
                            userCanReview: ke,
                            storyId: d,
                          })
                        )
                      ),
                  Le &&
                    a.createElement(
                      Ni,
                      { watchState: { selectedBuild: U } },
                      a.createElement(f6, {
                        managerApi: u,
                        skipWalkthrough: lc,
                        startWalkthrough: oc,
                        completeWalkthrough: rc,
                      })
                    )
                );
      },
      w8 = (e) => {
        let [t, n] = Qe("selectedBuildInfo");
        return a.createElement(k8, { selectedBuildInfo: t, setSelectedBuildInfo: n, ...e });
      },
      un = new Map(),
      C8 = () => {
        let e = On({
          [q5]: (t) => {
            let n = un.get(t.requestId);
            if (n)
              if ((un.delete(t.requestId), "error" in t)) n.reject(new Error(t.error));
              else {
                let { body: r, headers: i, status: l, statusText: o } = t.response,
                  s = new Response(r, { headers: i, status: l, statusText: o });
                n.resolve(s);
              }
          },
        });
        return async (t, { signal: n, ...r } = {}) => {
          if (n?.aborted) return Promise.reject(n.reason);
          let i = Math.random().toString(36).slice(2);
          return (
            n?.addEventListener("abort", () => {
              e(W5, { requestId: i }), un.get(i)?.reject(n.reason), un.delete(i);
            }),
            e(G5, { requestId: i, input: t, init: r }),
            new Promise((l, o) => {
              un.set(i, { resolve: l, reject: o }),
                setTimeout(() => {
                  o(new Error("Request timed out")), un.delete(i);
                }, 3e4);
            })
          );
        };
      },
      S8 = ({ active: e, api: t }) => {
        let [n, r] = xl(),
          i = H(
            (Le) => {
              r(Le), Le || y4("authenticationScreen", "exchangeParameters");
            },
            [r]
          ),
          { storyId: l } = jt(),
          [o, s] = _e(window.navigator.onLine);
        K(() => {
          let Le = () => s(!0),
            Ta = () => s(!1);
          return (
            window.addEventListener("online", Le),
            window.addEventListener("offline", Ta),
            () => {
              window.removeEventListener("online", Le), window.removeEventListener("offline", Ta);
            }
          );
        }, []);
        let [c] = Ee(V5),
          [d] = Ee(pl),
          [u] = Ee(hl),
          [m] = Ee(Ja),
          [p, f] = Ee(fl),
          [, g] = Ee(Ja),
          v = On({}),
          k = H((Le) => t.experimental_updateStatus(Z, Le), [t]),
          {
            loading: E,
            projectId: h,
            configFile: y,
            updateProject: b,
            projectUpdatingFailed: C,
            projectIdUpdated: O,
            clearProjectIdUpdated: I,
          } = _l(),
          [U, G] = Qe("createdProjectId"),
          [oe, ee] = Ee(rs),
          ke = H((Le) => v(U5, Le), [v]),
          {
            isRunning: ye,
            startBuild: pe,
            stopBuild: ie,
          } = Nl({ localBuildProgress: p, accessToken: n }),
          Ge = C8(),
          Se = (Le) =>
            a.createElement(
              H2,
              { value: Ns({ fetch: Ge }) },
              a.createElement(
                j2,
                { value: ke },
                a.createElement(
                  Rm,
                  { value: { accessToken: n, setAccessToken: i } },
                  a.createElement(
                    E4,
                    { addonUninstalled: oe, setAddonUninstalled: ee },
                    a.createElement(
                      V4,
                      null,
                      a.createElement(
                        S3,
                        { watchState: { isRunning: ye, startBuild: pe, stopBuild: ie } },
                        a.createElement(
                          "div",
                          { hidden: !e, style: { containerType: "size", height: "100%" } },
                          Le
                        )
                      )
                    )
                  )
                )
              )
            );
        if (!e) return Se(null);
        if (globalThis.CONFIG_TYPE !== "DEVELOPMENT") return Se(a.createElement(k3, null));
        if (oe) return Se(a.createElement(C3, null));
        if (u) return Se(a.createElement(w3, { offline: u }));
        if (!n)
          return Se(
            a.createElement(i3, { setAccessToken: i, setCreatedProjectId: G, hasProjectId: !!h })
          );
        if (E) return e ? a.createElement(Ji, null) : null;
        if (!h)
          return Se(
            a.createElement(v3, { createdProjectId: U, setCreatedProjectId: G, onUpdateProject: b })
          );
        if (d || !c) return console.error(d), Se(a.createElement(o3, null));
        if (C) {
          if (!y) throw new Error("Missing config file after configuration failure");
          return Se(a.createElement(f3, { projectId: h, configFile: y }));
        }
        if (O) {
          if (!y) throw new Error("Missing config file after configuration success");
          return Se(a.createElement(u3, { projectId: h, configFile: y, goToNext: I }));
        }
        let Mt = c.branch === p?.branch;
        return Se(
          a.createElement(w8, {
            dismissBuildError: () => f(void 0),
            isOutdated: !!m,
            localBuildProgress: Mt ? p : void 0,
            setOutdated: g,
            updateBuildStatus: k,
            projectId: h,
            gitInfo: c,
            storyId: l,
          })
        );
      },
      Oi = et(ya()),
      x8 = ({ api: e, running: t }) => {
        let { addNotification: n, selectStory: r, setOptions: i, togglePanel: l } = e,
          o = Ft(ba),
          { projectId: s } = _l(),
          [c] = xl(),
          d = !!c,
          [u, m] = Ee(hl),
          [p] = Ee(Ja),
          [f] = Ee(fl),
          [g] = Ee(Ar),
          v = Object.keys(g?.problems || {}).length > 0,
          [k] = Ee(pl),
          E = Ne(f?.currentStep),
          { index: h, status: y, storyId: b, viewMode: C } = jt(),
          O = Object.values(y).filter((pe) => pe[Z]?.status === "warn"),
          I = H(
            (pe) => {
              if ((i({ selectedPanel: nn }), l(!0), h && C !== "story")) {
                let ie = Object.keys(h).indexOf(b),
                  Ge = Object.entries(h).slice(ie > 0 ? ie : 0),
                  [Se] = Ge.find(([, { type: Mt }]) => Mt === "story") || [];
                Se && r(Se);
              }
              pe && o?.({ action: "openWarning", warning: pe });
            },
            [i, l, o, h, r, b, C]
          ),
          U = H(
            ({ onDismiss: pe }) => {
              pe(), I();
            },
            [I]
          );
        K(() => {
          let pe = () => m(!0),
            ie = () => m(!1);
          return (
            window.addEventListener("offline", pe),
            window.addEventListener("online", ie),
            () => {
              window.removeEventListener("offline", pe), window.removeEventListener("online", ie);
            }
          );
        }, [m]),
          K(() => {
            f?.currentStep !== E.current &&
              ((E.current = f?.currentStep),
              f?.currentStep === "error" &&
                n({
                  id: `${Z}/build-error/${Date.now()}`,
                  content: {
                    headline: "Build error",
                    subHeadline:
                      "Check the Storybook process on the command line for more details.",
                  },
                  icon: a.createElement(St, { color: dt.negative }),
                  onClick: U,
                }),
              f?.currentStep === "limited" &&
                n({
                  id: `${Z}/build-limited/${Date.now()}`,
                  content: {
                    headline: "Build limited",
                    subHeadline:
                      "Your account has insufficient snapshots remaining to run this build. Visit your billing page to find out more.",
                  },
                  icon: a.createElement(St, { color: dt.negative }),
                  onClick: U,
                }));
          }, [n, U, f?.currentStep]);
        let { startBuild: G, stopBuild: oe } = Nl({ localBuildProgress: f, accessToken: c }),
          ee;
        s || (ee = "Select a project"),
          d || (ee = "Login required"),
          k && (ee = "Git synchronization problem"),
          v && (ee = "Configuration problem"),
          u && (ee = "Not available while offline");
        let ke = H(() => I(ee), [I, ee]),
          ye = On(
            {
              [Q5]: ({ providerId: pe }) => {
                pe === qa && G();
              },
              [K5]: ({ providerId: pe }) => {
                pe === qa && oe();
              },
            },
            [G, oe]
          );
        if (
          (K(() => {
            ye(Y5, { providerId: qa, runnable: !ee });
          }, [ye, ee]),
          ee)
        )
          return a.createElement(Ut, { onClick: ke }, ee);
        if (t) {
          if (f) {
            let { renderProgress: pe } = Ml[f.currentStep];
            return a.createElement(a.Fragment, null, pe(f));
          }
          return a.createElement(a.Fragment, null, "Starting...");
        }
        return p
          ? a.createElement(a.Fragment, null, "Test results outdated")
          : f?.currentStep === "aborted"
            ? a.createElement(a.Fragment, null, "Aborted by user")
            : f?.currentStep === "complete"
              ? f.errorCount
                ? a.createElement(
                    a.Fragment,
                    null,
                    "Encountered ",
                    (0, Oi.default)("component error", f.errorCount, !0)
                  )
                : O.length
                  ? a.createElement(
                      a.Fragment,
                      null,
                      "Found ",
                      (0, Oi.default)("story", O.length, !0),
                      " with",
                      (0, Oi.default)("change", O.length)
                    )
                  : a.createElement(a.Fragment, null, "No visual changes detected")
              : a.createElement(a.Fragment, null, "Not run");
      };
    on.register(Z, (e) => {
      on.add(nn, {
        type: Oa.PANEL,
        title: "Visual tests",
        paramKey: $5,
        match: ({ viewMode: t }) => t === "story",
        render: ({ active: t }) => a.createElement(S8, { active: !!t, api: e }),
      }),
        globalThis.CONFIG_TYPE === "DEVELOPMENT" &&
          (Oa.experimental_TEST_PROVIDER
            ? on.add(qa, {
                type: Oa.experimental_TEST_PROVIDER,
                runnable: !0,
                name: "Visual tests",
                title: ({ failed: t }) => (t ? "Visual tests didn't complete" : "Visual tests"),
                description: (t) => a.createElement(x8, { ...t, api: e }),
              })
            : (on.add(B5, { type: "sidebar-top", render: () => a.createElement(Lm, { api: e }) }),
              on.add(P5, {
                type: "sidebar-bottom",
                render: () => a.createElement(uu, { api: e }),
              })));
    });
  })();
} catch (e) {
  console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e);
}
