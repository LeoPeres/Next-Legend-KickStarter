try {
  (() => {
    var De = ((t) =>
      typeof require < "u"
        ? require
        : typeof Proxy < "u"
          ? new Proxy(t, { get: (e, r) => (typeof require < "u" ? require : e)[r] })
          : t)(function (t) {
      if (typeof require < "u") return require.apply(this, arguments);
      throw Error('Dynamic require of "' + t + '" is not supported');
    });
    var S = __REACT__,
      {
        Children: Vc,
        Component: $c,
        Fragment: Qe,
        Profiler: zc,
        PureComponent: kr,
        StrictMode: Wc,
        Suspense: Yc,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Kc,
        cloneElement: Ze,
        createContext: Nr,
        createElement: U,
        createFactory: Xc,
        createRef: Lr,
        forwardRef: Jc,
        isValidElement: jr,
        lazy: Qc,
        memo: Zc,
        startTransition: ed,
        unstable_act: td,
        useCallback: ie,
        useContext: Mr,
        useDebugValue: rd,
        useDeferredValue: od,
        useEffect: et,
        useId: nd,
        useImperativeHandle: ad,
        useInsertionEffect: id,
        useLayoutEffect: qr,
        useMemo: Te,
        useReducer: sd,
        useRef: tt,
        useState: Re,
        useSyncExternalStore: ud,
        useTransition: ld,
        version: cd,
      } = __REACT__;
    var fd = __STORYBOOK_COMPONENTS__,
      {
        A: gd,
        ActionBar: xt,
        AddonPanel: yd,
        Badge: It,
        Bar: md,
        Blockquote: Ed,
        Button: bd,
        ClipboardCode: Ad,
        Code: Sd,
        DL: vd,
        Div: wd,
        DocumentWrapper: Cd,
        EmptyTabContent: Ur,
        ErrorFormatter: Dd,
        FlexBar: Td,
        Form: Rd,
        H1: xd,
        H2: Id,
        H3: Od,
        H4: Fd,
        H5: _d,
        H6: Bd,
        HR: Pd,
        IconButton: Gr,
        IconButtonSkeleton: kd,
        Icons: Nd,
        Img: Ld,
        LI: jd,
        Link: Hr,
        ListItem: Md,
        Loader: qd,
        Modal: Ud,
        OL: Gd,
        P: Hd,
        Placeholder: Vd,
        Pre: $d,
        ProgressSpinner: zd,
        ResetWrapper: Wd,
        ScrollArea: Vr,
        Separator: Yd,
        Spaced: $r,
        Span: Kd,
        StorybookIcon: Xd,
        StorybookLogo: Jd,
        Symbols: Qd,
        SyntaxHighlighter: Zd,
        TT: eh,
        TabBar: th,
        TabButton: rh,
        TabWrapper: oh,
        Table: nh,
        Tabs: ah,
        TabsState: ih,
        TooltipLinkList: zr,
        TooltipMessage: sh,
        TooltipNote: uh,
        UL: lh,
        WithTooltip: Wr,
        WithTooltipPure: ch,
        Zoom: dh,
        codeCommon: hh,
        components: ph,
        createCopyToClipboardFunction: fh,
        getStoryHref: gh,
        icons: yh,
        interleaveSeparators: mh,
        nameSpaceClassNames: Eh,
        resetComponents: bh,
        withReset: Ah,
      } = __STORYBOOK_COMPONENTS__;
    var Dh = __STORYBOOK_API__,
      {
        ActiveTabs: Th,
        Consumer: Rh,
        ManagerContext: xh,
        Provider: Ih,
        RequestResponseError: Oh,
        addons: rt,
        combineParameters: Fh,
        controlOrMetaKey: _h,
        controlOrMetaSymbol: Bh,
        eventMatchesShortcut: Ph,
        eventToShortcut: kh,
        experimental_MockUniversalStore: Nh,
        experimental_UniversalStore: Lh,
        experimental_requestResponse: jh,
        experimental_useUniversalStore: Mh,
        isMacLike: qh,
        isShortcutTaken: Uh,
        keyToSymbol: Gh,
        merge: Hh,
        mockChannel: Vh,
        optionOrAltSymbol: $h,
        shortcutMatchesShortcut: zh,
        shortcutToHumanString: Wh,
        types: Ot,
        useAddonState: Ft,
        useArgTypes: Yh,
        useArgs: Kh,
        useChannel: Yr,
        useGlobalTypes: Xh,
        useGlobals: Kr,
        useParameter: Xr,
        useSharedState: Jh,
        useStoryPrepared: Qh,
        useStorybookApi: _t,
        useStorybookState: Jr,
      } = __STORYBOOK_API__;
    var op = __STORYBOOK_THEMING__,
      {
        CacheProvider: np,
        ClassNames: ap,
        Global: Qr,
        ThemeProvider: ip,
        background: sp,
        color: up,
        convert: ot,
        create: lp,
        createCache: cp,
        createGlobal: dp,
        createReset: hp,
        css: pp,
        darken: fp,
        ensure: gp,
        ignoreSsrWarning: yp,
        isPropValid: mp,
        jsx: Ep,
        keyframes: bp,
        lighten: Ap,
        styled: L,
        themes: nt,
        typography: Sp,
        useTheme: vp,
        withTheme: wp,
      } = __STORYBOOK_THEMING__;
    var xp = __STORYBOOK_ICONS__,
      {
        AccessibilityAltIcon: Ip,
        AccessibilityIcon: Zr,
        AddIcon: Op,
        AdminIcon: Fp,
        AlertAltIcon: _p,
        AlertIcon: Bp,
        AlignLeftIcon: Pp,
        AlignRightIcon: kp,
        AppleIcon: Np,
        ArrowBottomLeftIcon: Lp,
        ArrowBottomRightIcon: jp,
        ArrowDownIcon: Mp,
        ArrowLeftIcon: qp,
        ArrowRightIcon: Up,
        ArrowSolidDownIcon: Gp,
        ArrowSolidLeftIcon: Hp,
        ArrowSolidRightIcon: Vp,
        ArrowSolidUpIcon: $p,
        ArrowTopLeftIcon: zp,
        ArrowTopRightIcon: Wp,
        ArrowUpIcon: Yp,
        AzureDevOpsIcon: Kp,
        BackIcon: Xp,
        BasketIcon: Jp,
        BatchAcceptIcon: Qp,
        BatchDenyIcon: Zp,
        BeakerIcon: e2,
        BellIcon: t2,
        BitbucketIcon: r2,
        BoldIcon: o2,
        BookIcon: n2,
        BookmarkHollowIcon: a2,
        BookmarkIcon: i2,
        BottomBarIcon: s2,
        BottomBarToggleIcon: u2,
        BoxIcon: l2,
        BranchIcon: c2,
        BrowserIcon: d2,
        ButtonIcon: h2,
        CPUIcon: p2,
        CalendarIcon: f2,
        CameraIcon: g2,
        CategoryIcon: y2,
        CertificateIcon: m2,
        ChangedIcon: E2,
        ChatIcon: b2,
        CheckIcon: eo,
        ChevronDownIcon: A2,
        ChevronLeftIcon: S2,
        ChevronRightIcon: v2,
        ChevronSmallDownIcon: to,
        ChevronSmallLeftIcon: w2,
        ChevronSmallRightIcon: C2,
        ChevronSmallUpIcon: D2,
        ChevronUpIcon: T2,
        ChromaticIcon: R2,
        ChromeIcon: x2,
        CircleHollowIcon: I2,
        CircleIcon: O2,
        ClearIcon: F2,
        CloseAltIcon: _2,
        CloseIcon: B2,
        CloudHollowIcon: P2,
        CloudIcon: k2,
        CogIcon: N2,
        CollapseIcon: L2,
        CommandIcon: j2,
        CommentAddIcon: M2,
        CommentIcon: q2,
        CommentsIcon: U2,
        CommitIcon: G2,
        CompassIcon: H2,
        ComponentDrivenIcon: V2,
        ComponentIcon: $2,
        ContrastIcon: z2,
        ControlsIcon: W2,
        CopyIcon: Y2,
        CreditIcon: K2,
        CrossIcon: X2,
        DashboardIcon: J2,
        DatabaseIcon: Q2,
        DeleteIcon: Z2,
        DiamondIcon: ef,
        DirectionIcon: tf,
        DiscordIcon: rf,
        DocChartIcon: of,
        DocListIcon: nf,
        DocumentIcon: af,
        DownloadIcon: sf,
        DragIcon: uf,
        EditIcon: lf,
        EllipsisIcon: cf,
        EmailIcon: df,
        ExpandAltIcon: hf,
        ExpandIcon: pf,
        EyeCloseIcon: ff,
        EyeIcon: gf,
        FaceHappyIcon: yf,
        FaceNeutralIcon: mf,
        FaceSadIcon: Ef,
        FacebookIcon: bf,
        FailedIcon: Af,
        FastForwardIcon: Sf,
        FigmaIcon: vf,
        FilterIcon: wf,
        FlagIcon: Cf,
        FolderIcon: Df,
        FormIcon: Tf,
        GDriveIcon: Rf,
        GithubIcon: xf,
        GitlabIcon: If,
        GlobeIcon: Of,
        GoogleIcon: Ff,
        GraphBarIcon: _f,
        GraphLineIcon: Bf,
        GraphqlIcon: Pf,
        GridAltIcon: kf,
        GridIcon: Nf,
        GrowIcon: Lf,
        HeartHollowIcon: jf,
        HeartIcon: Mf,
        HomeIcon: qf,
        HourglassIcon: Uf,
        InfoIcon: Gf,
        ItalicIcon: Hf,
        JumpToIcon: Vf,
        KeyIcon: $f,
        LightningIcon: zf,
        LightningOffIcon: Wf,
        LinkBrokenIcon: Yf,
        LinkIcon: Kf,
        LinkedinIcon: Xf,
        LinuxIcon: Jf,
        ListOrderedIcon: Qf,
        ListUnorderedIcon: Zf,
        LocationIcon: eg,
        LockIcon: tg,
        MarkdownIcon: rg,
        MarkupIcon: og,
        MediumIcon: ng,
        MemoryIcon: ag,
        MenuIcon: ig,
        MergeIcon: sg,
        MirrorIcon: ug,
        MobileIcon: lg,
        MoonIcon: cg,
        NutIcon: dg,
        OutboxIcon: hg,
        OutlineIcon: pg,
        PaintBrushIcon: fg,
        PaperClipIcon: gg,
        ParagraphIcon: yg,
        PassedIcon: mg,
        PhoneIcon: Eg,
        PhotoDragIcon: bg,
        PhotoIcon: Ag,
        PinAltIcon: Sg,
        PinIcon: vg,
        PlayAllHollowIcon: wg,
        PlayBackIcon: Cg,
        PlayHollowIcon: Dg,
        PlayIcon: Tg,
        PlayNextIcon: Rg,
        PlusIcon: xg,
        PointerDefaultIcon: Ig,
        PointerHandIcon: Og,
        PowerIcon: Fg,
        PrintIcon: _g,
        ProceedIcon: Bg,
        ProfileIcon: Pg,
        PullRequestIcon: kg,
        QuestionIcon: Ng,
        RSSIcon: Lg,
        RedirectIcon: jg,
        ReduxIcon: Mg,
        RefreshIcon: qg,
        ReplyIcon: Ug,
        RepoIcon: Gg,
        RequestChangeIcon: Hg,
        RewindIcon: Vg,
        RulerIcon: $g,
        SaveIcon: zg,
        SearchIcon: Wg,
        ShareAltIcon: Yg,
        ShareIcon: Kg,
        ShieldIcon: Xg,
        SideBySideIcon: Jg,
        SidebarAltIcon: Qg,
        SidebarAltToggleIcon: Zg,
        SidebarIcon: ey,
        SidebarToggleIcon: ty,
        SpeakerIcon: ry,
        StackedIcon: oy,
        StarHollowIcon: ny,
        StarIcon: ay,
        StatusFailIcon: iy,
        StatusPassIcon: sy,
        StatusWarnIcon: uy,
        StickerIcon: ly,
        StopAltHollowIcon: cy,
        StopAltIcon: dy,
        StopIcon: hy,
        StorybookIcon: py,
        StructureIcon: fy,
        SubtractIcon: gy,
        SunIcon: yy,
        SupportIcon: my,
        SwitchAltIcon: Ey,
        SyncIcon: ro,
        TabletIcon: by,
        ThumbsUpIcon: Ay,
        TimeIcon: Sy,
        TimerIcon: vy,
        TransferIcon: wy,
        TrashIcon: Cy,
        TwitterIcon: Dy,
        TypeIcon: Ty,
        UbuntuIcon: Ry,
        UndoIcon: xy,
        UnfoldIcon: Iy,
        UnlockIcon: Oy,
        UnpinIcon: Fy,
        UploadIcon: _y,
        UserAddIcon: By,
        UserAltIcon: Py,
        UserIcon: ky,
        UsersIcon: Ny,
        VSCodeIcon: Ly,
        VerifiedIcon: jy,
        VideoIcon: My,
        WandIcon: qy,
        WatchIcon: Uy,
        WindowsIcon: Gy,
        WrenchIcon: Hy,
        XIcon: Vy,
        YoutubeIcon: $y,
        ZoomIcon: zy,
        ZoomOutIcon: Wy,
        ZoomResetIcon: Yy,
        iconList: Ky,
      } = __STORYBOOK_ICONS__;
    var em = __STORYBOOK_CORE_EVENTS__,
      {
        ARGTYPES_INFO_REQUEST: oo,
        ARGTYPES_INFO_RESPONSE: Bt,
        CHANNEL_CREATED: tm,
        CHANNEL_WS_DISCONNECT: rm,
        CONFIG_ERROR: no,
        CREATE_NEW_STORYFILE_REQUEST: om,
        CREATE_NEW_STORYFILE_RESPONSE: nm,
        CURRENT_STORY_WAS_SET: Pt,
        DOCS_PREPARED: ao,
        DOCS_RENDERED: at,
        FILE_COMPONENT_SEARCH_REQUEST: am,
        FILE_COMPONENT_SEARCH_RESPONSE: im,
        FORCE_REMOUNT: io,
        FORCE_RE_RENDER: it,
        GLOBALS_UPDATED: ke,
        NAVIGATE_URL: sm,
        PLAY_FUNCTION_THREW_EXCEPTION: so,
        PRELOAD_ENTRIES: uo,
        PREVIEW_BUILDER_PROGRESS: um,
        PREVIEW_KEYDOWN: lo,
        REGISTER_SUBSCRIPTION: lm,
        REQUEST_WHATS_NEW_DATA: cm,
        RESET_STORY_ARGS: st,
        RESULT_WHATS_NEW_DATA: dm,
        SAVE_STORY_REQUEST: hm,
        SAVE_STORY_RESPONSE: pm,
        SELECT_STORY: fm,
        SET_CONFIG: gm,
        SET_CURRENT_STORY: co,
        SET_FILTER: ym,
        SET_GLOBALS: ho,
        SET_INDEX: mm,
        SET_STORIES: Em,
        SET_WHATS_NEW_CACHE: bm,
        SHARED_STATE_CHANGED: Am,
        SHARED_STATE_SET: Sm,
        STORIES_COLLAPSE_ALL: vm,
        STORIES_EXPAND_ALL: wm,
        STORY_ARGS_UPDATED: po,
        STORY_CHANGED: ut,
        STORY_ERRORED: fo,
        STORY_FINISHED: Ve,
        STORY_INDEX_INVALIDATED: go,
        STORY_MISSING: kt,
        STORY_PREPARED: yo,
        STORY_RENDERED: $e,
        STORY_RENDER_PHASE_CHANGED: be,
        STORY_SPECIFIED: mo,
        STORY_THREW_EXCEPTION: Eo,
        STORY_UNCHANGED: bo,
        TELEMETRY_ERROR: Cm,
        TESTING_MODULE_CANCEL_TEST_RUN_REQUEST: Dm,
        TESTING_MODULE_CANCEL_TEST_RUN_RESPONSE: Tm,
        TESTING_MODULE_CRASH_REPORT: Rm,
        TESTING_MODULE_PROGRESS_REPORT: xm,
        TESTING_MODULE_RUN_ALL_REQUEST: Im,
        TESTING_MODULE_RUN_REQUEST: Om,
        TOGGLE_WHATS_NEW_NOTIFICATIONS: Fm,
        UNHANDLED_ERRORS_WHILE_PLAYING: Ao,
        UPDATE_GLOBALS: lt,
        UPDATE_QUERY_PARAMS: So,
        UPDATE_STORY_ARGS: ct,
      } = __STORYBOOK_CORE_EVENTS__;
    var Um = __STORYBOOK_CHANNELS__,
      {
        Channel: dt,
        HEARTBEAT_INTERVAL: Gm,
        HEARTBEAT_MAX_LATENCY: Hm,
        PostMessageTransport: Vm,
        WebsocketTransport: $m,
        createBrowserChannel: zm,
      } = __STORYBOOK_CHANNELS__;
    var Jm = __STORYBOOK_CLIENT_LOGGER__,
      { deprecate: he, logger: j, once: Ae, pretty: Qm } = __STORYBOOK_CLIENT_LOGGER__;
    var oi = Object.defineProperty,
      H = (t, e) => oi(t, "name", { value: e, configurable: !0 });
    function Y(t) {
      for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
      var o = Array.from(typeof t == "string" ? [t] : t);
      o[o.length - 1] = o[o.length - 1].replace(/\r?\n([\t ]*)$/, "");
      var n = o.reduce(function (u, l) {
        var c = l.match(/\n([\t ]+|(?!\s).)/g);
        return c
          ? u.concat(
              c.map(function (h) {
                var p, d;
                return (d =
                  (p = h.match(/[\t ]/g)) === null || p === void 0 ? void 0 : p.length) !== null &&
                  d !== void 0
                  ? d
                  : 0;
              })
            )
          : u;
      }, []);
      if (n.length) {
        var a = new RegExp(
          `
[	 ]{` +
            Math.min.apply(Math, n) +
            "}",
          "g"
        );
        o = o.map(function (u) {
          return u.replace(
            a,
            `
`
          );
        });
      }
      o[0] = o[0].replace(/^\r?\n/, "");
      var s = o[0];
      return (
        e.forEach(function (u, l) {
          var c = s.match(/(?:^|\n)( *)$/),
            h = c ? c[1] : "",
            p = u;
          typeof u == "string" &&
            u.includes(`
`) &&
            (p = String(u)
              .split(
                `
`
              )
              .map(function (d, b) {
                return b === 0 ? d : "" + h + d;
              }).join(`
`)),
            (s += p + o[l + 1]);
        }),
        s
      );
    }
    H(Y, "dedent");
    function Nt({ code: t, category: e }) {
      let r = String(t).padStart(4, "0");
      return `SB_${e}_${r}`;
    }
    H(Nt, "parseErrorCode");
    var vo = class wo extends Error {
      constructor(e) {
        super(wo.getFullMessage(e)),
          (this.data = {}),
          (this.fromStorybook = !0),
          (this.category = e.category),
          (this.documentation = e.documentation ?? !1),
          (this.code = e.code);
      }
      get fullErrorCode() {
        return Nt({ code: this.code, category: this.category });
      }
      get name() {
        let e = this.constructor.name;
        return `${this.fullErrorCode} (${e})`;
      }
      static getFullMessage({ documentation: e, code: r, category: o, message: n }) {
        let a;
        return (
          e === !0
            ? (a = `https://storybook.js.org/error/${Nt({ code: r, category: o })}`)
            : typeof e == "string"
              ? (a = e)
              : Array.isArray(e) &&
                (a = `
${e.map((s) => `	- ${s}`).join(`
`)}`),
          `${n}${
            a != null
              ? `

More info: ${a}
`
              : ""
          }`
        );
      }
    };
    H(vo, "StorybookError");
    var J = vo,
      ni = ((t) => (
        (t.BLOCKS = "BLOCKS"),
        (t.DOCS_TOOLS = "DOCS-TOOLS"),
        (t.PREVIEW_CLIENT_LOGGER = "PREVIEW_CLIENT-LOGGER"),
        (t.PREVIEW_CHANNELS = "PREVIEW_CHANNELS"),
        (t.PREVIEW_CORE_EVENTS = "PREVIEW_CORE-EVENTS"),
        (t.PREVIEW_INSTRUMENTER = "PREVIEW_INSTRUMENTER"),
        (t.PREVIEW_API = "PREVIEW_API"),
        (t.PREVIEW_REACT_DOM_SHIM = "PREVIEW_REACT-DOM-SHIM"),
        (t.PREVIEW_ROUTER = "PREVIEW_ROUTER"),
        (t.PREVIEW_THEMING = "PREVIEW_THEMING"),
        (t.RENDERER_HTML = "RENDERER_HTML"),
        (t.RENDERER_PREACT = "RENDERER_PREACT"),
        (t.RENDERER_REACT = "RENDERER_REACT"),
        (t.RENDERER_SERVER = "RENDERER_SERVER"),
        (t.RENDERER_SVELTE = "RENDERER_SVELTE"),
        (t.RENDERER_VUE = "RENDERER_VUE"),
        (t.RENDERER_VUE3 = "RENDERER_VUE3"),
        (t.RENDERER_WEB_COMPONENTS = "RENDERER_WEB-COMPONENTS"),
        (t.FRAMEWORK_NEXTJS = "FRAMEWORK_NEXTJS"),
        (t.ADDON_VITEST = "ADDON_VITEST"),
        t
      ))(ni || {}),
      Co = class extends J {
        constructor(e) {
          super({
            category: "PREVIEW_API",
            code: 1,
            message: Y`
        Couldn't find story matching id '${e.storyId}' after HMR.
        - Did you just rename a story?
        - Did you remove it from your CSF file?
        - Are you sure a story with the id '${e.storyId}' exists?
        - Please check the values in the stories field of your main.js config and see if they would match your CSF File.
        - Also check the browser console and terminal for potential error messages.`,
          }),
            (this.data = e);
        }
      };
    H(Co, "MissingStoryAfterHmrError");
    var Do = Co,
      ai = class extends J {
        constructor(e) {
          super({
            category: "PREVIEW_API",
            code: 2,
            documentation:
              "https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#using-implicit-actions-during-rendering-is-deprecated-for-example-in-the-play-function",
            message: Y`
        We detected that you use an implicit action arg while ${e.phase} of your story.  
        ${
          e.deprecated
            ? `
This is deprecated and won't work in Storybook 8 anymore.
`
            : ""
        }
        Please provide an explicit spy to your args like this:
          import { fn } from '@storybook/test';
          ... 
          args: {
           ${e.name}: fn()
          }`,
          }),
            (this.data = e);
        }
      };
    H(ai, "ImplicitActionsDuringRendering");
    var To = class extends J {
      constructor() {
        super({
          category: "PREVIEW_API",
          code: 3,
          message: Y`
        Cannot call \`storyStore.extract()\` without calling \`storyStore.cacheAllCsfFiles()\` first.

        You probably meant to call \`await preview.extract()\` which does the above for you.`,
        });
      }
    };
    H(To, "CalledExtractOnStoreError");
    var Ro = To,
      xo = class extends J {
        constructor() {
          super({
            category: "PREVIEW_API",
            code: 4,
            message: Y`
        Expected your framework's preset to export a \`renderToCanvas\` field.

        Perhaps it needs to be upgraded for Storybook 7.0?`,
            documentation:
              "https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#mainjs-framework-field",
          });
        }
      };
    H(xo, "MissingRenderToCanvasError");
    var Io = xo,
      Oo = class extends J {
        constructor(e) {
          super({
            category: "PREVIEW_API",
            code: 5,
            message: Y`
        Called \`Preview.${e.methodName}()\` before initialization.
        
        The preview needs to load the story index before most methods can be called. If you want
        to call \`${e.methodName}\`, try \`await preview.initializationPromise;\` first.
        
        If you didn't call the above code, then likely it was called by an addon that needs to
        do the above.`,
          }),
            (this.data = e);
        }
      };
    H(Oo, "CalledPreviewMethodBeforeInitializationError");
    var ne = Oo,
      Fo = class extends J {
        constructor(e) {
          super({
            category: "PREVIEW_API",
            code: 6,
            message: Y`
        Error fetching \`/index.json\`:
        
        ${e.text}

        If you are in development, this likely indicates a problem with your Storybook process,
        check the terminal for errors.

        If you are in a deployed Storybook, there may have been an issue deploying the full Storybook
        build.`,
          }),
            (this.data = e);
        }
      };
    H(Fo, "StoryIndexFetchError");
    var _o = Fo,
      Bo = class extends J {
        constructor(e) {
          super({
            category: "PREVIEW_API",
            code: 7,
            message: Y`
        Tried to render docs entry ${e.storyId} but it is a MDX file that has no CSF
        references, or autodocs for a CSF file that some doesn't refer to itself.
        
        This likely is an internal error in Storybook's indexing, or you've attached the
        \`attached-mdx\` tag to an MDX file that is not attached.`,
          }),
            (this.data = e);
        }
      };
    H(Bo, "MdxFileWithNoCsfReferencesError");
    var Po = Bo,
      ko = class extends J {
        constructor() {
          super({
            category: "PREVIEW_API",
            code: 8,
            message: Y`
        Couldn't find any stories in your Storybook.

        - Please check your stories field of your main.js config: does it match correctly?
        - Also check the browser console and terminal for error messages.`,
          });
        }
      };
    H(ko, "EmptyIndexError");
    var No = ko,
      Lo = class extends J {
        constructor(e) {
          super({
            category: "PREVIEW_API",
            code: 9,
            message: Y`
        Couldn't find story matching '${e.storySpecifier}'.

        - Are you sure a story with that id exists?
        - Please check your stories field of your main.js config.
        - Also check the browser console and terminal for error messages.`,
          }),
            (this.data = e);
        }
      };
    H(Lo, "NoStoryMatchError");
    var jo = Lo,
      Mo = class extends J {
        constructor(e) {
          super({
            category: "PREVIEW_API",
            code: 10,
            message: Y`
        Couldn't find story matching id '${e.storyId}' after importing a CSF file.

        The file was indexed as if the story was there, but then after importing the file in the browser
        we didn't find the story. Possible reasons:
        - You are using a custom story indexer that is misbehaving.
        - You have a custom file loader that is removing or renaming exports.

        Please check your browser console and terminal for errors that may explain the issue.`,
          }),
            (this.data = e);
        }
      };
    H(Mo, "MissingStoryFromCsfFileError");
    var qo = Mo,
      Uo = class extends J {
        constructor() {
          super({
            category: "PREVIEW_API",
            code: 11,
            message: Y`
        Cannot access the Story Store until the index is ready.

        It is not recommended to use methods directly on the Story Store anyway, in Storybook 9 we will
        remove access to the store entirely`,
          });
        }
      };
    H(Uo, "StoryStoreAccessedBeforeInitializationError");
    var Go = Uo,
      Ho = class extends J {
        constructor(e) {
          super({
            category: "PREVIEW_API",
            code: 12,
            message: Y`
      Incorrect use of mount in the play function.
      
      To use mount in the play function, you must satisfy the following two requirements: 
      
      1. You *must* destructure the mount property from the \`context\` (the argument passed to your play function). 
         This makes sure that Storybook does not start rendering the story before the play function begins.
      
      2. Your Storybook framework or builder must be configured to transpile to ES2017 or newer. 
         This is because destructuring statements and async/await usages are otherwise transpiled away, 
         which prevents Storybook from recognizing your usage of \`mount\`.
      
      Note that Angular is not supported. As async/await is transpiled to support the zone.js polyfill. 
      
      More info: https://storybook.js.org/docs/writing-tests/interaction-testing#run-code-before-the-component-gets-rendered
      
      Received the following play function:
      ${e.playFunction}`,
          }),
            (this.data = e);
        }
      };
    H(Ho, "MountMustBeDestructuredError");
    var ht = Ho,
      Vo = class extends J {
        constructor(e) {
          super({
            category: "PREVIEW_API",
            code: 14,
            message: Y`
        No render function available for storyId '${e.id}'
      `,
          }),
            (this.data = e);
        }
      };
    H(Vo, "NoRenderFunctionError");
    var $o = Vo,
      zo = class extends J {
        constructor() {
          super({
            category: "PREVIEW_API",
            code: 15,
            message: Y`
        No component is mounted in your story.
        
        This usually occurs when you destructure mount in the play function, but forget to call it.
        
        For example:

        async play({ mount, canvasElement }) {
          // 👈 mount should be called: await mount(); 
          const canvas = within(canvasElement);
          const button = await canvas.findByRole('button');
          await userEvent.click(button);
        };

        Make sure to either remove it or call mount in your play function.
      `,
          });
        }
      };
    H(zo, "NoStoryMountedError");
    var Wo = zo,
      ii = class extends J {
        constructor() {
          super({
            category: "FRAMEWORK_NEXTJS",
            code: 1,
            documentation: "https://storybook.js.org/docs/get-started/nextjs#faq",
            message: Y`
      You are importing avif images, but you don't have sharp installed.

      You have to install sharp in order to use image optimization features in Next.js.
      `,
          });
        }
      };
    H(ii, "NextJsSharpError");
    var si = class extends J {
      constructor(e) {
        super({
          category: "FRAMEWORK_NEXTJS",
          code: 2,
          message: Y`
        Tried to access router mocks from "${e.importType}" but they were not created yet. You might be running code in an unsupported environment.
      `,
        }),
          (this.data = e);
      }
    };
    H(si, "NextjsRouterMocksNotAvailable");
    var ui = class extends J {
      constructor(e) {
        super({
          category: "DOCS-TOOLS",
          code: 1,
          documentation: "https://github.com/storybookjs/storybook/issues/26606",
          message: Y`
        There was a failure when generating detailed ArgTypes in ${e.language} for:
        ${JSON.stringify(e.type, null, 2)} 
        
        Storybook will fall back to use a generic type description instead.

        This type is either not supported or it is a bug in the docgen generation in Storybook.
        If you think this is a bug, please detail it as much as possible in the Github issue.
      `,
        }),
          (this.data = e);
      }
    };
    H(ui, "UnknownArgTypesError");
    var li = class extends J {
      constructor(e) {
        super({
          category: "ADDON_VITEST",
          code: 1,
          message: Y`
        Encountered an unsupported value "${e.value}" when setting the viewport ${e.dimension} dimension.
        
        The Storybook plugin only supports values in the following units:
        - px, vh, vw, em, rem and %.
        
        You can either change the viewport for this story to use one of the supported units or skip the test by adding '!test' to the story's tags per https://storybook.js.org/docs/writing-stories/tags
      `,
        }),
          (this.data = e);
      }
    };
    H(li, "UnsupportedViewportDimensionError");
    var ci = Object.create,
      jt = Object.defineProperty,
      di = Object.getOwnPropertyDescriptor,
      hi = Object.getOwnPropertyNames,
      pi = Object.getPrototypeOf,
      fi = Object.prototype.hasOwnProperty,
      K = (t, e) => jt(t, "name", { value: e, configurable: !0 }),
      gi = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports),
      yi = (t, e, r, o) => {
        if ((e && typeof e == "object") || typeof e == "function")
          for (let n of hi(e))
            !fi.call(t, n) &&
              n !== r &&
              jt(t, n, { get: () => e[n], enumerable: !(o = di(e, n)) || o.enumerable });
        return t;
      },
      mi = (t, e, r) => (
        (r = t != null ? ci(pi(t)) : {}),
        yi(e || !t || !t.__esModule ? jt(r, "default", { value: t, enumerable: !0 }) : r, t)
      ),
      Ei = gi((t) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isEqual = (function () {
            var e = Object.prototype.toString,
              r = Object.getPrototypeOf,
              o = Object.getOwnPropertySymbols
                ? function (n) {
                    return Object.keys(n).concat(Object.getOwnPropertySymbols(n));
                  }
                : Object.keys;
            return function (n, a) {
              return K(function s(u, l, c) {
                var h,
                  p,
                  d,
                  b = e.call(u),
                  v = e.call(l);
                if (u === l) return !0;
                if (u == null || l == null) return !1;
                if (c.indexOf(u) > -1 && c.indexOf(l) > -1) return !0;
                if (
                  (c.push(u, l),
                  b != v ||
                    ((h = o(u)),
                    (p = o(l)),
                    h.length != p.length ||
                      h.some(function (T) {
                        return !s(u[T], l[T], c);
                      })))
                )
                  return !1;
                switch (b.slice(8, -1)) {
                  case "Symbol":
                    return u.valueOf() == l.valueOf();
                  case "Date":
                  case "Number":
                    return +u == +l || (+u != +u && +l != +l);
                  case "RegExp":
                  case "Function":
                  case "String":
                  case "Boolean":
                    return "" + u == "" + l;
                  case "Set":
                  case "Map":
                    (h = u.entries()), (p = l.entries());
                    do if (!s((d = h.next()).value, p.next().value, c)) return !1;
                    while (!d.done);
                    return !0;
                  case "ArrayBuffer":
                    (u = new Uint8Array(u)), (l = new Uint8Array(l));
                  case "DataView":
                    (u = new Uint8Array(u.buffer)), (l = new Uint8Array(l.buffer));
                  case "Float32Array":
                  case "Float64Array":
                  case "Int8Array":
                  case "Int16Array":
                  case "Int32Array":
                  case "Uint8Array":
                  case "Uint16Array":
                  case "Uint32Array":
                  case "Uint8ClampedArray":
                  case "Arguments":
                  case "Array":
                    if (u.length != l.length) return !1;
                    for (d = 0; d < u.length; d++)
                      if ((d in u || d in l) && (d in u != d in l || !s(u[d], l[d], c))) return !1;
                    return !0;
                  case "Object":
                    return s(r(u), r(l), c);
                  default:
                    return !1;
                }
              }, "n")(n, a, []);
            };
          })());
      });
    function Xo(t) {
      return t
        .replace(/_/g, " ")
        .replace(/-/g, " ")
        .replace(/\./g, " ")
        .replace(/([^\n])([A-Z])([a-z])/g, (e, r, o, n) => `${r} ${o}${n}`)
        .replace(/([a-z])([A-Z])/g, (e, r, o) => `${r} ${o}`)
        .replace(/([a-z])([0-9])/gi, (e, r, o) => `${r} ${o}`)
        .replace(/([0-9])([a-z])/gi, (e, r, o) => `${r} ${o}`)
        .replace(/(\s|^)(\w)/g, (e, r, o) => `${r}${o.toUpperCase()}`)
        .replace(/ +/g, " ")
        .trim();
    }
    K(Xo, "toStartCaseStr");
    var Yo = mi(Ei(), 1),
      Jo = K((t) => t.map((e) => typeof e < "u").filter(Boolean).length, "count"),
      bi = K((t, e) => {
        let { exists: r, eq: o, neq: n, truthy: a } = t;
        if (Jo([r, o, n, a]) > 1)
          throw new Error(
            `Invalid conditional test ${JSON.stringify({ exists: r, eq: o, neq: n })}`
          );
        if (typeof o < "u") return (0, Yo.isEqual)(e, o);
        if (typeof n < "u") return !(0, Yo.isEqual)(e, n);
        if (typeof r < "u") {
          let s = typeof e < "u";
          return r ? s : !s;
        }
        return typeof a > "u" || a ? !!e : !e;
      }, "testValue"),
      Qo = K((t, e, r) => {
        if (!t.if) return !0;
        let { arg: o, global: n } = t.if;
        if (Jo([o, n]) !== 1)
          throw new Error(`Invalid conditional value ${JSON.stringify({ arg: o, global: n })}`);
        let a = o ? e[o] : r[n];
        return bi(t.if, a);
      }, "includeConditionalArg");
    function Ai(t) {
      let e,
        r = {
          _tag: "Preview",
          input: t,
          get composed() {
            if (e) return e;
            let { addons: o, ...n } = t;
            return (e = Le(Ie([...(o ?? []), n]))), e;
          },
          meta(o) {
            return Zo(o, this);
          },
        };
      return (globalThis.globalProjectAnnotations = r.composed), r;
    }
    K(Ai, "definePreview");
    function Si(t) {
      return t != null && typeof t == "object" && "_tag" in t && t?._tag === "Preview";
    }
    K(Si, "isPreview");
    function vi(t) {
      return t != null && typeof t == "object" && "_tag" in t && t?._tag === "Meta";
    }
    K(vi, "isMeta");
    function Zo(t, e) {
      return {
        _tag: "Meta",
        input: t,
        preview: e,
        get composed() {
          throw new Error("Not implemented");
        },
        story(r) {
          return en(r, this);
        },
      };
    }
    K(Zo, "defineMeta");
    function en(t, e) {
      return {
        _tag: "Story",
        input: t,
        meta: e,
        get composed() {
          throw new Error("Not implemented");
        },
      };
    }
    K(en, "defineStory");
    function xe(t) {
      return t != null && typeof t == "object" && "_tag" in t && t?._tag === "Story";
    }
    K(xe, "isStory");
    var Mt = K(
        (t) =>
          t
            .toLowerCase()
            .replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "-")
            .replace(/-+/g, "-")
            .replace(/^-+/, "")
            .replace(/-+$/, ""),
        "sanitize"
      ),
      Ko = K((t, e) => {
        let r = Mt(t);
        if (r === "") throw new Error(`Invalid ${e} '${t}', must include alphanumeric characters`);
        return r;
      }, "sanitizeSafe"),
      tn = K((t, e) => `${Ko(t, "kind")}${e ? `--${Ko(e, "name")}` : ""}`, "toId"),
      rn = K((t) => Xo(t), "storyNameFromExport");
    function Lt(t, e) {
      return Array.isArray(e) ? e.includes(t) : t.match(e);
    }
    K(Lt, "matches");
    function Ne(t, { includeStories: e, excludeStories: r }) {
      return t !== "__esModule" && (!e || Lt(t, e)) && (!r || !Lt(t, r));
    }
    K(Ne, "isExportStory");
    var T0 = K((t, { rootSeparator: e, groupSeparator: r }) => {
        let [o, n] = t.split(e, 2),
          a = (n || t).split(r).filter((s) => !!s);
        return { root: n ? o : null, groups: a };
      }, "parseKind"),
      on = K((...t) => {
        let e = t.reduce(
          (r, o) => (o.startsWith("!") ? r.delete(o.slice(1)) : r.add(o), r),
          new Set()
        );
        return Array.from(e);
      }, "combineTags");
    var wi = Object.create,
      sr = Object.defineProperty,
      Ci = Object.getOwnPropertyDescriptor,
      Di = Object.getOwnPropertyNames,
      Ti = Object.getPrototypeOf,
      Ri = Object.prototype.hasOwnProperty,
      i = (t, e) => sr(t, "name", { value: e, configurable: !0 }),
      pt = ((t) =>
        typeof De < "u"
          ? De
          : typeof Proxy < "u"
            ? new Proxy(t, { get: (e, r) => (typeof De < "u" ? De : e)[r] })
            : t)(function (t) {
        if (typeof De < "u") return De.apply(this, arguments);
        throw Error('Dynamic require of "' + t + '" is not supported');
      }),
      re = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports),
      xi = (t, e, r, o) => {
        if ((e && typeof e == "object") || typeof e == "function")
          for (let n of Di(e))
            !Ri.call(t, n) &&
              n !== r &&
              sr(t, n, { get: () => e[n], enumerable: !(o = Ci(e, n)) || o.enumerable });
        return t;
      },
      Ue = (t, e, r) => (
        (r = t != null ? wi(Ti(t)) : {}),
        xi(e || !t || !t.__esModule ? sr(r, "default", { value: t, enumerable: !0 }) : r, t)
      ),
      An = re((t, e) => {
        (function (r) {
          if (typeof t == "object" && typeof e < "u") e.exports = r();
          else if (typeof define == "function" && define.amd) define([], r);
          else {
            var o;
            typeof window < "u" || typeof window < "u"
              ? (o = window)
              : typeof self < "u"
                ? (o = self)
                : (o = this),
              (o.memoizerific = r());
          }
        })(function () {
          var r, o, n;
          return i(function a(s, u, l) {
            function c(d, b) {
              if (!u[d]) {
                if (!s[d]) {
                  var v = typeof pt == "function" && pt;
                  if (!b && v) return v(d, !0);
                  if (h) return h(d, !0);
                  var T = new Error("Cannot find module '" + d + "'");
                  throw ((T.code = "MODULE_NOT_FOUND"), T);
                }
                var m = (u[d] = { exports: {} });
                s[d][0].call(
                  m.exports,
                  function (E) {
                    var y = s[d][1][E];
                    return c(y || E);
                  },
                  m,
                  m.exports,
                  a,
                  s,
                  u,
                  l
                );
              }
              return u[d].exports;
            }
            i(c, "s");
            for (var h = typeof pt == "function" && pt, p = 0; p < l.length; p++) c(l[p]);
            return c;
          }, "e")(
            {
              1: [
                function (a, s, u) {
                  s.exports = function (l) {
                    if (typeof Map != "function" || l) {
                      var c = a("./similar");
                      return new c();
                    } else return new Map();
                  };
                },
                { "./similar": 2 },
              ],
              2: [
                function (a, s, u) {
                  function l() {
                    return (this.list = []), (this.lastItem = void 0), (this.size = 0), this;
                  }
                  i(l, "Similar"),
                    (l.prototype.get = function (c) {
                      var h;
                      if (this.lastItem && this.isEqual(this.lastItem.key, c))
                        return this.lastItem.val;
                      if (((h = this.indexOf(c)), h >= 0))
                        return (this.lastItem = this.list[h]), this.list[h].val;
                    }),
                    (l.prototype.set = function (c, h) {
                      var p;
                      return this.lastItem && this.isEqual(this.lastItem.key, c)
                        ? ((this.lastItem.val = h), this)
                        : ((p = this.indexOf(c)),
                          p >= 0
                            ? ((this.lastItem = this.list[p]), (this.list[p].val = h), this)
                            : ((this.lastItem = { key: c, val: h }),
                              this.list.push(this.lastItem),
                              this.size++,
                              this));
                    }),
                    (l.prototype.delete = function (c) {
                      var h;
                      if (
                        (this.lastItem &&
                          this.isEqual(this.lastItem.key, c) &&
                          (this.lastItem = void 0),
                        (h = this.indexOf(c)),
                        h >= 0)
                      )
                        return this.size--, this.list.splice(h, 1)[0];
                    }),
                    (l.prototype.has = function (c) {
                      var h;
                      return this.lastItem && this.isEqual(this.lastItem.key, c)
                        ? !0
                        : ((h = this.indexOf(c)),
                          h >= 0 ? ((this.lastItem = this.list[h]), !0) : !1);
                    }),
                    (l.prototype.forEach = function (c, h) {
                      var p;
                      for (p = 0; p < this.size; p++)
                        c.call(h || this, this.list[p].val, this.list[p].key, this);
                    }),
                    (l.prototype.indexOf = function (c) {
                      var h;
                      for (h = 0; h < this.size; h++)
                        if (this.isEqual(this.list[h].key, c)) return h;
                      return -1;
                    }),
                    (l.prototype.isEqual = function (c, h) {
                      return c === h || (c !== c && h !== h);
                    }),
                    (s.exports = l);
                },
                {},
              ],
              3: [
                function (a, s, u) {
                  var l = a("map-or-similar");
                  s.exports = function (d) {
                    var b = new l(!1),
                      v = [];
                    return function (T) {
                      var m = i(function () {
                        var E = b,
                          y,
                          w,
                          O = arguments.length - 1,
                          F = Array(O + 1),
                          C = !0,
                          R;
                        if ((m.numArgs || m.numArgs === 0) && m.numArgs !== O + 1)
                          throw new Error(
                            "Memoizerific functions should always be called with the same number of arguments"
                          );
                        for (R = 0; R < O; R++) {
                          if (((F[R] = { cacheItem: E, arg: arguments[R] }), E.has(arguments[R]))) {
                            E = E.get(arguments[R]);
                            continue;
                          }
                          (C = !1), (y = new l(!1)), E.set(arguments[R], y), (E = y);
                        }
                        return (
                          C && (E.has(arguments[O]) ? (w = E.get(arguments[O])) : (C = !1)),
                          C || ((w = T.apply(null, arguments)), E.set(arguments[O], w)),
                          d > 0 &&
                            ((F[O] = { cacheItem: E, arg: arguments[O] }),
                            C ? c(v, F) : v.push(F),
                            v.length > d && h(v.shift())),
                          (m.wasMemoized = C),
                          (m.numArgs = O + 1),
                          w
                        );
                      }, "memoizerific");
                      return (m.limit = d), (m.wasMemoized = !1), (m.cache = b), (m.lru = v), m;
                    };
                  };
                  function c(d, b) {
                    var v = d.length,
                      T = b.length,
                      m,
                      E,
                      y;
                    for (E = 0; E < v; E++) {
                      for (m = !0, y = 0; y < T; y++)
                        if (!p(d[E][y].arg, b[y].arg)) {
                          m = !1;
                          break;
                        }
                      if (m) break;
                    }
                    d.push(d.splice(E, 1)[0]);
                  }
                  i(c, "moveToMostRecentLru");
                  function h(d) {
                    var b = d.length,
                      v = d[b - 1],
                      T,
                      m;
                    for (
                      v.cacheItem.delete(v.arg), m = b - 2;
                      m >= 0 && ((v = d[m]), (T = v.cacheItem.get(v.arg)), !T || !T.size);
                      m--
                    )
                      v.cacheItem.delete(v.arg);
                  }
                  i(h, "removeCachedResult");
                  function p(d, b) {
                    return d === b || (d !== d && b !== b);
                  }
                  i(p, "isEqual");
                },
                { "map-or-similar": 1 },
              ],
            },
            {},
            [3]
          )(3);
        });
      }),
      Sn = re((t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.encodeString = o);
        var e = Array.from(
            { length: 256 },
            (n, a) => "%" + ((a < 16 ? "0" : "") + a.toString(16)).toUpperCase()
          ),
          r = new Int8Array([
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0,
          ]);
        function o(n) {
          let a = n.length;
          if (a === 0) return "";
          let s = "",
            u = 0,
            l = 0;
          e: for (; l < a; l++) {
            let c = n.charCodeAt(l);
            for (; c < 128; ) {
              if (
                (r[c] !== 1 && (u < l && (s += n.slice(u, l)), (u = l + 1), (s += e[c])), ++l === a)
              )
                break e;
              c = n.charCodeAt(l);
            }
            if ((u < l && (s += n.slice(u, l)), c < 2048)) {
              (u = l + 1), (s += e[192 | (c >> 6)] + e[128 | (c & 63)]);
              continue;
            }
            if (c < 55296 || c >= 57344) {
              (u = l + 1), (s += e[224 | (c >> 12)] + e[128 | ((c >> 6) & 63)] + e[128 | (c & 63)]);
              continue;
            }
            if ((++l, l >= a)) throw new Error("URI malformed");
            let h = n.charCodeAt(l) & 1023;
            (u = l + 1),
              (c = 65536 + (((c & 1023) << 10) | h)),
              (s +=
                e[240 | (c >> 18)] +
                e[128 | ((c >> 12) & 63)] +
                e[128 | ((c >> 6) & 63)] +
                e[128 | (c & 63)]);
          }
          return u === 0 ? n : u < a ? s + n.slice(u) : s;
        }
        i(o, "encodeString");
      }),
      ur = re((t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.defaultOptions = t.defaultShouldSerializeObject = t.defaultValueSerializer = void 0);
        var e = Sn(),
          r = i((a) => {
            switch (typeof a) {
              case "string":
                return (0, e.encodeString)(a);
              case "bigint":
              case "boolean":
                return "" + a;
              case "number":
                if (Number.isFinite(a)) return a < 1e21 ? "" + a : (0, e.encodeString)("" + a);
                break;
            }
            return a instanceof Date ? (0, e.encodeString)(a.toISOString()) : "";
          }, "defaultValueSerializer");
        t.defaultValueSerializer = r;
        var o = i((a) => a instanceof Date, "defaultShouldSerializeObject");
        t.defaultShouldSerializeObject = o;
        var n = i((a) => a, "identityFunc");
        t.defaultOptions = {
          nesting: !0,
          nestingSyntax: "dot",
          arrayRepeat: !1,
          arrayRepeatSyntax: "repeat",
          delimiter: 38,
          valueDeserializer: n,
          valueSerializer: t.defaultValueSerializer,
          keyDeserializer: n,
          shouldSerializeObject: t.defaultShouldSerializeObject,
        };
      }),
      vn = re((t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.getDeepObject = n),
          (t.stringifyObject = h);
        var e = ur(),
          r = Sn();
        function o(p) {
          return p === "__proto__" || p === "constructor" || p === "prototype";
        }
        i(o, "isPrototypeKey");
        function n(p, d, b, v, T) {
          if (o(d)) return p;
          let m = p[d];
          return typeof m == "object" && m !== null
            ? m
            : !v &&
                (T ||
                  typeof b == "number" ||
                  (typeof b == "string" && b * 0 === 0 && b.indexOf(".") === -1))
              ? (p[d] = [])
              : (p[d] = {});
        }
        i(n, "getDeepObject");
        var a = 20,
          s = "[]",
          u = "[",
          l = "]",
          c = ".";
        function h(p, d, b = 0, v, T) {
          let {
              nestingSyntax: m = e.defaultOptions.nestingSyntax,
              arrayRepeat: E = e.defaultOptions.arrayRepeat,
              arrayRepeatSyntax: y = e.defaultOptions.arrayRepeatSyntax,
              nesting: w = e.defaultOptions.nesting,
              delimiter: O = e.defaultOptions.delimiter,
              valueSerializer: F = e.defaultOptions.valueSerializer,
              shouldSerializeObject: C = e.defaultOptions.shouldSerializeObject,
            } = d,
            R = typeof O == "number" ? String.fromCharCode(O) : O,
            I = T === !0 && E,
            B = m === "dot" || (m === "js" && !T);
          if (b > a) return "";
          let k = "",
            M = !0,
            D = !1;
          for (let N in p) {
            let f = p[N],
              g;
            v
              ? ((g = v),
                I
                  ? y === "bracket" && (g += s)
                  : B
                    ? ((g += c), (g += N))
                    : ((g += u), (g += N), (g += l)))
              : (g = N),
              M || (k += R),
              typeof f == "object" && f !== null && !C(f)
                ? ((D = f.pop !== void 0), (w || (E && D)) && (k += h(f, d, b + 1, g, D)))
                : ((k += (0, r.encodeString)(g)), (k += "="), (k += F(f, N))),
              M && (M = !1);
          }
          return k;
        }
        i(h, "stringifyObject");
      }),
      Ii = re((t, e) => {
        "use strict";
        var r = 12,
          o = 0,
          n = [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,
            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 7, 7, 7, 7, 7, 7, 7,
            7, 7, 7, 7, 7, 8, 7, 7, 10, 9, 9, 9, 11, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 24, 36, 48, 60, 72, 84, 96, 0, 12, 12, 12, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 24, 24, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 48, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            48, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 127, 63, 63, 63, 0,
            31, 15, 15, 15, 7, 7, 7,
          ];
        function a(l) {
          var c = l.indexOf("%");
          if (c === -1) return l;
          for (var h = l.length, p = "", d = 0, b = 0, v = c, T = r; c > -1 && c < h; ) {
            var m = u(l[c + 1], 4),
              E = u(l[c + 2], 0),
              y = m | E,
              w = n[y];
            if (((T = n[256 + T + w]), (b = (b << 6) | (y & n[364 + w])), T === r))
              (p += l.slice(d, v)),
                (p +=
                  b <= 65535
                    ? String.fromCharCode(b)
                    : String.fromCharCode(55232 + (b >> 10), 56320 + (b & 1023))),
                (b = 0),
                (d = c + 3),
                (c = v = l.indexOf("%", d));
            else {
              if (T === o) return null;
              if (((c += 3), c < h && l.charCodeAt(c) === 37)) continue;
              return null;
            }
          }
          return p + l.slice(d);
        }
        i(a, "decodeURIComponent");
        var s = {
          0: 0,
          1: 1,
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6,
          7: 7,
          8: 8,
          9: 9,
          a: 10,
          A: 10,
          b: 11,
          B: 11,
          c: 12,
          C: 12,
          d: 13,
          D: 13,
          e: 14,
          E: 14,
          f: 15,
          F: 15,
        };
        function u(l, c) {
          var h = s[l];
          return h === void 0 ? 255 : h << c;
        }
        i(u, "hexCodeToInt"), (e.exports = a);
      }),
      Oi = re((t) => {
        "use strict";
        var e =
          (t && t.__importDefault) ||
          function (p) {
            return p && p.__esModule ? p : { default: p };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.numberValueDeserializer = t.numberKeyDeserializer = void 0),
          (t.parse = h);
        var r = vn(),
          o = ur(),
          n = e(Ii()),
          a = i((p) => {
            let d = Number(p);
            return Number.isNaN(d) ? p : d;
          }, "numberKeyDeserializer");
        t.numberKeyDeserializer = a;
        var s = i((p) => {
          let d = Number(p);
          return Number.isNaN(d) ? p : d;
        }, "numberValueDeserializer");
        t.numberValueDeserializer = s;
        var u = /\+/g,
          l = i(function () {}, "Empty");
        l.prototype = Object.create(null);
        function c(p, d, b, v, T) {
          let m = p.substring(d, b);
          return v && (m = m.replace(u, " ")), T && (m = (0, n.default)(m) || m), m;
        }
        i(c, "computeKeySlice");
        function h(p, d) {
          let {
              valueDeserializer: b = o.defaultOptions.valueDeserializer,
              keyDeserializer: v = o.defaultOptions.keyDeserializer,
              arrayRepeatSyntax: T = o.defaultOptions.arrayRepeatSyntax,
              nesting: m = o.defaultOptions.nesting,
              arrayRepeat: E = o.defaultOptions.arrayRepeat,
              nestingSyntax: y = o.defaultOptions.nestingSyntax,
              delimiter: w = o.defaultOptions.delimiter,
            } = d ?? {},
            O = typeof w == "string" ? w.charCodeAt(0) : w,
            F = y === "js",
            C = new l();
          if (typeof p != "string") return C;
          let R = p.length,
            I = "",
            B = -1,
            k = -1,
            M = -1,
            D = C,
            N,
            f = "",
            g = "",
            A = !1,
            x = !1,
            P = !1,
            q = !1,
            $ = !1,
            z = !1,
            W = !1,
            ae = 0,
            ye = -1,
            me = -1,
            Ge = -1;
          for (let V = 0; V < R + 1; V++) {
            if (((ae = V !== R ? p.charCodeAt(V) : O), ae === O)) {
              if (
                ((W = k > B),
                W || (k = V),
                M !== k - 1 &&
                  ((g = c(p, M + 1, ye > -1 ? ye : k, P, A)),
                  (f = v(g)),
                  N !== void 0 && (D = (0, r.getDeepObject)(D, N, f, F && $, F && z))),
                W || f !== "")
              ) {
                W &&
                  ((I = p.slice(k + 1, V)),
                  q && (I = I.replace(u, " ")),
                  x && (I = (0, n.default)(I) || I));
                let Ee = b(I, f);
                if (E) {
                  let Pe = D[f];
                  Pe === void 0
                    ? ye > -1
                      ? (D[f] = [Ee])
                      : (D[f] = Ee)
                    : Pe.pop
                      ? Pe.push(Ee)
                      : (D[f] = [Pe, Ee]);
                } else D[f] = Ee;
              }
              (I = ""),
                (B = V),
                (k = V),
                (A = !1),
                (x = !1),
                (P = !1),
                (q = !1),
                ($ = !1),
                (z = !1),
                (ye = -1),
                (M = V),
                (D = C),
                (N = void 0),
                (f = "");
            } else
              ae === 93
                ? (E && T === "bracket" && Ge === 91 && (ye = me),
                  m &&
                    (y === "index" || F) &&
                    k <= B &&
                    (M !== me &&
                      ((g = c(p, M + 1, V, P, A)),
                      (f = v(g)),
                      N !== void 0 && (D = (0, r.getDeepObject)(D, N, f, void 0, F)),
                      (N = f),
                      (P = !1),
                      (A = !1)),
                    (M = V),
                    (z = !0),
                    ($ = !1)))
                : ae === 46
                  ? m &&
                    (y === "dot" || F) &&
                    k <= B &&
                    (M !== me &&
                      ((g = c(p, M + 1, V, P, A)),
                      (f = v(g)),
                      N !== void 0 && (D = (0, r.getDeepObject)(D, N, f, F)),
                      (N = f),
                      (P = !1),
                      (A = !1)),
                    ($ = !0),
                    (z = !1),
                    (M = V))
                  : ae === 91
                    ? m &&
                      (y === "index" || F) &&
                      k <= B &&
                      (M !== me &&
                        ((g = c(p, M + 1, V, P, A)),
                        (f = v(g)),
                        F && N !== void 0 && (D = (0, r.getDeepObject)(D, N, f, F)),
                        (N = f),
                        (P = !1),
                        (A = !1),
                        ($ = !1),
                        (z = !0)),
                      (M = V))
                    : ae === 61
                      ? k <= B
                        ? (k = V)
                        : (x = !0)
                      : ae === 43
                        ? k > B
                          ? (q = !0)
                          : (P = !0)
                        : ae === 37 && (k > B ? (x = !0) : (A = !0));
            (me = V), (Ge = ae);
          }
          return C;
        }
        i(h, "parse");
      }),
      Fi = re((t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.stringify = r);
        var e = vn();
        function r(o, n) {
          if (o === null || typeof o != "object") return "";
          let a = n ?? {};
          return (0, e.stringifyObject)(o, a);
        }
        i(r, "stringify");
      }),
      lr = re((t) => {
        "use strict";
        var e =
            (t && t.__createBinding) ||
            (Object.create
              ? function (a, s, u, l) {
                  l === void 0 && (l = u);
                  var c = Object.getOwnPropertyDescriptor(s, u);
                  (!c || ("get" in c ? !s.__esModule : c.writable || c.configurable)) &&
                    (c = {
                      enumerable: !0,
                      get: i(function () {
                        return s[u];
                      }, "get"),
                    }),
                    Object.defineProperty(a, l, c);
                }
              : function (a, s, u, l) {
                  l === void 0 && (l = u), (a[l] = s[u]);
                }),
          r =
            (t && t.__exportStar) ||
            function (a, s) {
              for (var u in a)
                u !== "default" && !Object.prototype.hasOwnProperty.call(s, u) && e(s, a, u);
            };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.stringify = t.parse = void 0);
        var o = Oi();
        Object.defineProperty(t, "parse", {
          enumerable: !0,
          get: i(function () {
            return o.parse;
          }, "get"),
        });
        var n = Fi();
        Object.defineProperty(t, "stringify", {
          enumerable: !0,
          get: i(function () {
            return n.stringify;
          }, "get"),
        }),
          r(ur(), t);
      }),
      wn = re((t, e) => {
        e.exports = {
          Aacute: "\xC1",
          aacute: "\xE1",
          Abreve: "\u0102",
          abreve: "\u0103",
          ac: "\u223E",
          acd: "\u223F",
          acE: "\u223E\u0333",
          Acirc: "\xC2",
          acirc: "\xE2",
          acute: "\xB4",
          Acy: "\u0410",
          acy: "\u0430",
          AElig: "\xC6",
          aelig: "\xE6",
          af: "\u2061",
          Afr: "\u{1D504}",
          afr: "\u{1D51E}",
          Agrave: "\xC0",
          agrave: "\xE0",
          alefsym: "\u2135",
          aleph: "\u2135",
          Alpha: "\u0391",
          alpha: "\u03B1",
          Amacr: "\u0100",
          amacr: "\u0101",
          amalg: "\u2A3F",
          amp: "&",
          AMP: "&",
          andand: "\u2A55",
          And: "\u2A53",
          and: "\u2227",
          andd: "\u2A5C",
          andslope: "\u2A58",
          andv: "\u2A5A",
          ang: "\u2220",
          ange: "\u29A4",
          angle: "\u2220",
          angmsdaa: "\u29A8",
          angmsdab: "\u29A9",
          angmsdac: "\u29AA",
          angmsdad: "\u29AB",
          angmsdae: "\u29AC",
          angmsdaf: "\u29AD",
          angmsdag: "\u29AE",
          angmsdah: "\u29AF",
          angmsd: "\u2221",
          angrt: "\u221F",
          angrtvb: "\u22BE",
          angrtvbd: "\u299D",
          angsph: "\u2222",
          angst: "\xC5",
          angzarr: "\u237C",
          Aogon: "\u0104",
          aogon: "\u0105",
          Aopf: "\u{1D538}",
          aopf: "\u{1D552}",
          apacir: "\u2A6F",
          ap: "\u2248",
          apE: "\u2A70",
          ape: "\u224A",
          apid: "\u224B",
          apos: "'",
          ApplyFunction: "\u2061",
          approx: "\u2248",
          approxeq: "\u224A",
          Aring: "\xC5",
          aring: "\xE5",
          Ascr: "\u{1D49C}",
          ascr: "\u{1D4B6}",
          Assign: "\u2254",
          ast: "*",
          asymp: "\u2248",
          asympeq: "\u224D",
          Atilde: "\xC3",
          atilde: "\xE3",
          Auml: "\xC4",
          auml: "\xE4",
          awconint: "\u2233",
          awint: "\u2A11",
          backcong: "\u224C",
          backepsilon: "\u03F6",
          backprime: "\u2035",
          backsim: "\u223D",
          backsimeq: "\u22CD",
          Backslash: "\u2216",
          Barv: "\u2AE7",
          barvee: "\u22BD",
          barwed: "\u2305",
          Barwed: "\u2306",
          barwedge: "\u2305",
          bbrk: "\u23B5",
          bbrktbrk: "\u23B6",
          bcong: "\u224C",
          Bcy: "\u0411",
          bcy: "\u0431",
          bdquo: "\u201E",
          becaus: "\u2235",
          because: "\u2235",
          Because: "\u2235",
          bemptyv: "\u29B0",
          bepsi: "\u03F6",
          bernou: "\u212C",
          Bernoullis: "\u212C",
          Beta: "\u0392",
          beta: "\u03B2",
          beth: "\u2136",
          between: "\u226C",
          Bfr: "\u{1D505}",
          bfr: "\u{1D51F}",
          bigcap: "\u22C2",
          bigcirc: "\u25EF",
          bigcup: "\u22C3",
          bigodot: "\u2A00",
          bigoplus: "\u2A01",
          bigotimes: "\u2A02",
          bigsqcup: "\u2A06",
          bigstar: "\u2605",
          bigtriangledown: "\u25BD",
          bigtriangleup: "\u25B3",
          biguplus: "\u2A04",
          bigvee: "\u22C1",
          bigwedge: "\u22C0",
          bkarow: "\u290D",
          blacklozenge: "\u29EB",
          blacksquare: "\u25AA",
          blacktriangle: "\u25B4",
          blacktriangledown: "\u25BE",
          blacktriangleleft: "\u25C2",
          blacktriangleright: "\u25B8",
          blank: "\u2423",
          blk12: "\u2592",
          blk14: "\u2591",
          blk34: "\u2593",
          block: "\u2588",
          bne: "=\u20E5",
          bnequiv: "\u2261\u20E5",
          bNot: "\u2AED",
          bnot: "\u2310",
          Bopf: "\u{1D539}",
          bopf: "\u{1D553}",
          bot: "\u22A5",
          bottom: "\u22A5",
          bowtie: "\u22C8",
          boxbox: "\u29C9",
          boxdl: "\u2510",
          boxdL: "\u2555",
          boxDl: "\u2556",
          boxDL: "\u2557",
          boxdr: "\u250C",
          boxdR: "\u2552",
          boxDr: "\u2553",
          boxDR: "\u2554",
          boxh: "\u2500",
          boxH: "\u2550",
          boxhd: "\u252C",
          boxHd: "\u2564",
          boxhD: "\u2565",
          boxHD: "\u2566",
          boxhu: "\u2534",
          boxHu: "\u2567",
          boxhU: "\u2568",
          boxHU: "\u2569",
          boxminus: "\u229F",
          boxplus: "\u229E",
          boxtimes: "\u22A0",
          boxul: "\u2518",
          boxuL: "\u255B",
          boxUl: "\u255C",
          boxUL: "\u255D",
          boxur: "\u2514",
          boxuR: "\u2558",
          boxUr: "\u2559",
          boxUR: "\u255A",
          boxv: "\u2502",
          boxV: "\u2551",
          boxvh: "\u253C",
          boxvH: "\u256A",
          boxVh: "\u256B",
          boxVH: "\u256C",
          boxvl: "\u2524",
          boxvL: "\u2561",
          boxVl: "\u2562",
          boxVL: "\u2563",
          boxvr: "\u251C",
          boxvR: "\u255E",
          boxVr: "\u255F",
          boxVR: "\u2560",
          bprime: "\u2035",
          breve: "\u02D8",
          Breve: "\u02D8",
          brvbar: "\xA6",
          bscr: "\u{1D4B7}",
          Bscr: "\u212C",
          bsemi: "\u204F",
          bsim: "\u223D",
          bsime: "\u22CD",
          bsolb: "\u29C5",
          bsol: "\\",
          bsolhsub: "\u27C8",
          bull: "\u2022",
          bullet: "\u2022",
          bump: "\u224E",
          bumpE: "\u2AAE",
          bumpe: "\u224F",
          Bumpeq: "\u224E",
          bumpeq: "\u224F",
          Cacute: "\u0106",
          cacute: "\u0107",
          capand: "\u2A44",
          capbrcup: "\u2A49",
          capcap: "\u2A4B",
          cap: "\u2229",
          Cap: "\u22D2",
          capcup: "\u2A47",
          capdot: "\u2A40",
          CapitalDifferentialD: "\u2145",
          caps: "\u2229\uFE00",
          caret: "\u2041",
          caron: "\u02C7",
          Cayleys: "\u212D",
          ccaps: "\u2A4D",
          Ccaron: "\u010C",
          ccaron: "\u010D",
          Ccedil: "\xC7",
          ccedil: "\xE7",
          Ccirc: "\u0108",
          ccirc: "\u0109",
          Cconint: "\u2230",
          ccups: "\u2A4C",
          ccupssm: "\u2A50",
          Cdot: "\u010A",
          cdot: "\u010B",
          cedil: "\xB8",
          Cedilla: "\xB8",
          cemptyv: "\u29B2",
          cent: "\xA2",
          centerdot: "\xB7",
          CenterDot: "\xB7",
          cfr: "\u{1D520}",
          Cfr: "\u212D",
          CHcy: "\u0427",
          chcy: "\u0447",
          check: "\u2713",
          checkmark: "\u2713",
          Chi: "\u03A7",
          chi: "\u03C7",
          circ: "\u02C6",
          circeq: "\u2257",
          circlearrowleft: "\u21BA",
          circlearrowright: "\u21BB",
          circledast: "\u229B",
          circledcirc: "\u229A",
          circleddash: "\u229D",
          CircleDot: "\u2299",
          circledR: "\xAE",
          circledS: "\u24C8",
          CircleMinus: "\u2296",
          CirclePlus: "\u2295",
          CircleTimes: "\u2297",
          cir: "\u25CB",
          cirE: "\u29C3",
          cire: "\u2257",
          cirfnint: "\u2A10",
          cirmid: "\u2AEF",
          cirscir: "\u29C2",
          ClockwiseContourIntegral: "\u2232",
          CloseCurlyDoubleQuote: "\u201D",
          CloseCurlyQuote: "\u2019",
          clubs: "\u2663",
          clubsuit: "\u2663",
          colon: ":",
          Colon: "\u2237",
          Colone: "\u2A74",
          colone: "\u2254",
          coloneq: "\u2254",
          comma: ",",
          commat: "@",
          comp: "\u2201",
          compfn: "\u2218",
          complement: "\u2201",
          complexes: "\u2102",
          cong: "\u2245",
          congdot: "\u2A6D",
          Congruent: "\u2261",
          conint: "\u222E",
          Conint: "\u222F",
          ContourIntegral: "\u222E",
          copf: "\u{1D554}",
          Copf: "\u2102",
          coprod: "\u2210",
          Coproduct: "\u2210",
          copy: "\xA9",
          COPY: "\xA9",
          copysr: "\u2117",
          CounterClockwiseContourIntegral: "\u2233",
          crarr: "\u21B5",
          cross: "\u2717",
          Cross: "\u2A2F",
          Cscr: "\u{1D49E}",
          cscr: "\u{1D4B8}",
          csub: "\u2ACF",
          csube: "\u2AD1",
          csup: "\u2AD0",
          csupe: "\u2AD2",
          ctdot: "\u22EF",
          cudarrl: "\u2938",
          cudarrr: "\u2935",
          cuepr: "\u22DE",
          cuesc: "\u22DF",
          cularr: "\u21B6",
          cularrp: "\u293D",
          cupbrcap: "\u2A48",
          cupcap: "\u2A46",
          CupCap: "\u224D",
          cup: "\u222A",
          Cup: "\u22D3",
          cupcup: "\u2A4A",
          cupdot: "\u228D",
          cupor: "\u2A45",
          cups: "\u222A\uFE00",
          curarr: "\u21B7",
          curarrm: "\u293C",
          curlyeqprec: "\u22DE",
          curlyeqsucc: "\u22DF",
          curlyvee: "\u22CE",
          curlywedge: "\u22CF",
          curren: "\xA4",
          curvearrowleft: "\u21B6",
          curvearrowright: "\u21B7",
          cuvee: "\u22CE",
          cuwed: "\u22CF",
          cwconint: "\u2232",
          cwint: "\u2231",
          cylcty: "\u232D",
          dagger: "\u2020",
          Dagger: "\u2021",
          daleth: "\u2138",
          darr: "\u2193",
          Darr: "\u21A1",
          dArr: "\u21D3",
          dash: "\u2010",
          Dashv: "\u2AE4",
          dashv: "\u22A3",
          dbkarow: "\u290F",
          dblac: "\u02DD",
          Dcaron: "\u010E",
          dcaron: "\u010F",
          Dcy: "\u0414",
          dcy: "\u0434",
          ddagger: "\u2021",
          ddarr: "\u21CA",
          DD: "\u2145",
          dd: "\u2146",
          DDotrahd: "\u2911",
          ddotseq: "\u2A77",
          deg: "\xB0",
          Del: "\u2207",
          Delta: "\u0394",
          delta: "\u03B4",
          demptyv: "\u29B1",
          dfisht: "\u297F",
          Dfr: "\u{1D507}",
          dfr: "\u{1D521}",
          dHar: "\u2965",
          dharl: "\u21C3",
          dharr: "\u21C2",
          DiacriticalAcute: "\xB4",
          DiacriticalDot: "\u02D9",
          DiacriticalDoubleAcute: "\u02DD",
          DiacriticalGrave: "`",
          DiacriticalTilde: "\u02DC",
          diam: "\u22C4",
          diamond: "\u22C4",
          Diamond: "\u22C4",
          diamondsuit: "\u2666",
          diams: "\u2666",
          die: "\xA8",
          DifferentialD: "\u2146",
          digamma: "\u03DD",
          disin: "\u22F2",
          div: "\xF7",
          divide: "\xF7",
          divideontimes: "\u22C7",
          divonx: "\u22C7",
          DJcy: "\u0402",
          djcy: "\u0452",
          dlcorn: "\u231E",
          dlcrop: "\u230D",
          dollar: "$",
          Dopf: "\u{1D53B}",
          dopf: "\u{1D555}",
          Dot: "\xA8",
          dot: "\u02D9",
          DotDot: "\u20DC",
          doteq: "\u2250",
          doteqdot: "\u2251",
          DotEqual: "\u2250",
          dotminus: "\u2238",
          dotplus: "\u2214",
          dotsquare: "\u22A1",
          doublebarwedge: "\u2306",
          DoubleContourIntegral: "\u222F",
          DoubleDot: "\xA8",
          DoubleDownArrow: "\u21D3",
          DoubleLeftArrow: "\u21D0",
          DoubleLeftRightArrow: "\u21D4",
          DoubleLeftTee: "\u2AE4",
          DoubleLongLeftArrow: "\u27F8",
          DoubleLongLeftRightArrow: "\u27FA",
          DoubleLongRightArrow: "\u27F9",
          DoubleRightArrow: "\u21D2",
          DoubleRightTee: "\u22A8",
          DoubleUpArrow: "\u21D1",
          DoubleUpDownArrow: "\u21D5",
          DoubleVerticalBar: "\u2225",
          DownArrowBar: "\u2913",
          downarrow: "\u2193",
          DownArrow: "\u2193",
          Downarrow: "\u21D3",
          DownArrowUpArrow: "\u21F5",
          DownBreve: "\u0311",
          downdownarrows: "\u21CA",
          downharpoonleft: "\u21C3",
          downharpoonright: "\u21C2",
          DownLeftRightVector: "\u2950",
          DownLeftTeeVector: "\u295E",
          DownLeftVectorBar: "\u2956",
          DownLeftVector: "\u21BD",
          DownRightTeeVector: "\u295F",
          DownRightVectorBar: "\u2957",
          DownRightVector: "\u21C1",
          DownTeeArrow: "\u21A7",
          DownTee: "\u22A4",
          drbkarow: "\u2910",
          drcorn: "\u231F",
          drcrop: "\u230C",
          Dscr: "\u{1D49F}",
          dscr: "\u{1D4B9}",
          DScy: "\u0405",
          dscy: "\u0455",
          dsol: "\u29F6",
          Dstrok: "\u0110",
          dstrok: "\u0111",
          dtdot: "\u22F1",
          dtri: "\u25BF",
          dtrif: "\u25BE",
          duarr: "\u21F5",
          duhar: "\u296F",
          dwangle: "\u29A6",
          DZcy: "\u040F",
          dzcy: "\u045F",
          dzigrarr: "\u27FF",
          Eacute: "\xC9",
          eacute: "\xE9",
          easter: "\u2A6E",
          Ecaron: "\u011A",
          ecaron: "\u011B",
          Ecirc: "\xCA",
          ecirc: "\xEA",
          ecir: "\u2256",
          ecolon: "\u2255",
          Ecy: "\u042D",
          ecy: "\u044D",
          eDDot: "\u2A77",
          Edot: "\u0116",
          edot: "\u0117",
          eDot: "\u2251",
          ee: "\u2147",
          efDot: "\u2252",
          Efr: "\u{1D508}",
          efr: "\u{1D522}",
          eg: "\u2A9A",
          Egrave: "\xC8",
          egrave: "\xE8",
          egs: "\u2A96",
          egsdot: "\u2A98",
          el: "\u2A99",
          Element: "\u2208",
          elinters: "\u23E7",
          ell: "\u2113",
          els: "\u2A95",
          elsdot: "\u2A97",
          Emacr: "\u0112",
          emacr: "\u0113",
          empty: "\u2205",
          emptyset: "\u2205",
          EmptySmallSquare: "\u25FB",
          emptyv: "\u2205",
          EmptyVerySmallSquare: "\u25AB",
          emsp13: "\u2004",
          emsp14: "\u2005",
          emsp: "\u2003",
          ENG: "\u014A",
          eng: "\u014B",
          ensp: "\u2002",
          Eogon: "\u0118",
          eogon: "\u0119",
          Eopf: "\u{1D53C}",
          eopf: "\u{1D556}",
          epar: "\u22D5",
          eparsl: "\u29E3",
          eplus: "\u2A71",
          epsi: "\u03B5",
          Epsilon: "\u0395",
          epsilon: "\u03B5",
          epsiv: "\u03F5",
          eqcirc: "\u2256",
          eqcolon: "\u2255",
          eqsim: "\u2242",
          eqslantgtr: "\u2A96",
          eqslantless: "\u2A95",
          Equal: "\u2A75",
          equals: "=",
          EqualTilde: "\u2242",
          equest: "\u225F",
          Equilibrium: "\u21CC",
          equiv: "\u2261",
          equivDD: "\u2A78",
          eqvparsl: "\u29E5",
          erarr: "\u2971",
          erDot: "\u2253",
          escr: "\u212F",
          Escr: "\u2130",
          esdot: "\u2250",
          Esim: "\u2A73",
          esim: "\u2242",
          Eta: "\u0397",
          eta: "\u03B7",
          ETH: "\xD0",
          eth: "\xF0",
          Euml: "\xCB",
          euml: "\xEB",
          euro: "\u20AC",
          excl: "!",
          exist: "\u2203",
          Exists: "\u2203",
          expectation: "\u2130",
          exponentiale: "\u2147",
          ExponentialE: "\u2147",
          fallingdotseq: "\u2252",
          Fcy: "\u0424",
          fcy: "\u0444",
          female: "\u2640",
          ffilig: "\uFB03",
          fflig: "\uFB00",
          ffllig: "\uFB04",
          Ffr: "\u{1D509}",
          ffr: "\u{1D523}",
          filig: "\uFB01",
          FilledSmallSquare: "\u25FC",
          FilledVerySmallSquare: "\u25AA",
          fjlig: "fj",
          flat: "\u266D",
          fllig: "\uFB02",
          fltns: "\u25B1",
          fnof: "\u0192",
          Fopf: "\u{1D53D}",
          fopf: "\u{1D557}",
          forall: "\u2200",
          ForAll: "\u2200",
          fork: "\u22D4",
          forkv: "\u2AD9",
          Fouriertrf: "\u2131",
          fpartint: "\u2A0D",
          frac12: "\xBD",
          frac13: "\u2153",
          frac14: "\xBC",
          frac15: "\u2155",
          frac16: "\u2159",
          frac18: "\u215B",
          frac23: "\u2154",
          frac25: "\u2156",
          frac34: "\xBE",
          frac35: "\u2157",
          frac38: "\u215C",
          frac45: "\u2158",
          frac56: "\u215A",
          frac58: "\u215D",
          frac78: "\u215E",
          frasl: "\u2044",
          frown: "\u2322",
          fscr: "\u{1D4BB}",
          Fscr: "\u2131",
          gacute: "\u01F5",
          Gamma: "\u0393",
          gamma: "\u03B3",
          Gammad: "\u03DC",
          gammad: "\u03DD",
          gap: "\u2A86",
          Gbreve: "\u011E",
          gbreve: "\u011F",
          Gcedil: "\u0122",
          Gcirc: "\u011C",
          gcirc: "\u011D",
          Gcy: "\u0413",
          gcy: "\u0433",
          Gdot: "\u0120",
          gdot: "\u0121",
          ge: "\u2265",
          gE: "\u2267",
          gEl: "\u2A8C",
          gel: "\u22DB",
          geq: "\u2265",
          geqq: "\u2267",
          geqslant: "\u2A7E",
          gescc: "\u2AA9",
          ges: "\u2A7E",
          gesdot: "\u2A80",
          gesdoto: "\u2A82",
          gesdotol: "\u2A84",
          gesl: "\u22DB\uFE00",
          gesles: "\u2A94",
          Gfr: "\u{1D50A}",
          gfr: "\u{1D524}",
          gg: "\u226B",
          Gg: "\u22D9",
          ggg: "\u22D9",
          gimel: "\u2137",
          GJcy: "\u0403",
          gjcy: "\u0453",
          gla: "\u2AA5",
          gl: "\u2277",
          glE: "\u2A92",
          glj: "\u2AA4",
          gnap: "\u2A8A",
          gnapprox: "\u2A8A",
          gne: "\u2A88",
          gnE: "\u2269",
          gneq: "\u2A88",
          gneqq: "\u2269",
          gnsim: "\u22E7",
          Gopf: "\u{1D53E}",
          gopf: "\u{1D558}",
          grave: "`",
          GreaterEqual: "\u2265",
          GreaterEqualLess: "\u22DB",
          GreaterFullEqual: "\u2267",
          GreaterGreater: "\u2AA2",
          GreaterLess: "\u2277",
          GreaterSlantEqual: "\u2A7E",
          GreaterTilde: "\u2273",
          Gscr: "\u{1D4A2}",
          gscr: "\u210A",
          gsim: "\u2273",
          gsime: "\u2A8E",
          gsiml: "\u2A90",
          gtcc: "\u2AA7",
          gtcir: "\u2A7A",
          gt: ">",
          GT: ">",
          Gt: "\u226B",
          gtdot: "\u22D7",
          gtlPar: "\u2995",
          gtquest: "\u2A7C",
          gtrapprox: "\u2A86",
          gtrarr: "\u2978",
          gtrdot: "\u22D7",
          gtreqless: "\u22DB",
          gtreqqless: "\u2A8C",
          gtrless: "\u2277",
          gtrsim: "\u2273",
          gvertneqq: "\u2269\uFE00",
          gvnE: "\u2269\uFE00",
          Hacek: "\u02C7",
          hairsp: "\u200A",
          half: "\xBD",
          hamilt: "\u210B",
          HARDcy: "\u042A",
          hardcy: "\u044A",
          harrcir: "\u2948",
          harr: "\u2194",
          hArr: "\u21D4",
          harrw: "\u21AD",
          Hat: "^",
          hbar: "\u210F",
          Hcirc: "\u0124",
          hcirc: "\u0125",
          hearts: "\u2665",
          heartsuit: "\u2665",
          hellip: "\u2026",
          hercon: "\u22B9",
          hfr: "\u{1D525}",
          Hfr: "\u210C",
          HilbertSpace: "\u210B",
          hksearow: "\u2925",
          hkswarow: "\u2926",
          hoarr: "\u21FF",
          homtht: "\u223B",
          hookleftarrow: "\u21A9",
          hookrightarrow: "\u21AA",
          hopf: "\u{1D559}",
          Hopf: "\u210D",
          horbar: "\u2015",
          HorizontalLine: "\u2500",
          hscr: "\u{1D4BD}",
          Hscr: "\u210B",
          hslash: "\u210F",
          Hstrok: "\u0126",
          hstrok: "\u0127",
          HumpDownHump: "\u224E",
          HumpEqual: "\u224F",
          hybull: "\u2043",
          hyphen: "\u2010",
          Iacute: "\xCD",
          iacute: "\xED",
          ic: "\u2063",
          Icirc: "\xCE",
          icirc: "\xEE",
          Icy: "\u0418",
          icy: "\u0438",
          Idot: "\u0130",
          IEcy: "\u0415",
          iecy: "\u0435",
          iexcl: "\xA1",
          iff: "\u21D4",
          ifr: "\u{1D526}",
          Ifr: "\u2111",
          Igrave: "\xCC",
          igrave: "\xEC",
          ii: "\u2148",
          iiiint: "\u2A0C",
          iiint: "\u222D",
          iinfin: "\u29DC",
          iiota: "\u2129",
          IJlig: "\u0132",
          ijlig: "\u0133",
          Imacr: "\u012A",
          imacr: "\u012B",
          image: "\u2111",
          ImaginaryI: "\u2148",
          imagline: "\u2110",
          imagpart: "\u2111",
          imath: "\u0131",
          Im: "\u2111",
          imof: "\u22B7",
          imped: "\u01B5",
          Implies: "\u21D2",
          incare: "\u2105",
          in: "\u2208",
          infin: "\u221E",
          infintie: "\u29DD",
          inodot: "\u0131",
          intcal: "\u22BA",
          int: "\u222B",
          Int: "\u222C",
          integers: "\u2124",
          Integral: "\u222B",
          intercal: "\u22BA",
          Intersection: "\u22C2",
          intlarhk: "\u2A17",
          intprod: "\u2A3C",
          InvisibleComma: "\u2063",
          InvisibleTimes: "\u2062",
          IOcy: "\u0401",
          iocy: "\u0451",
          Iogon: "\u012E",
          iogon: "\u012F",
          Iopf: "\u{1D540}",
          iopf: "\u{1D55A}",
          Iota: "\u0399",
          iota: "\u03B9",
          iprod: "\u2A3C",
          iquest: "\xBF",
          iscr: "\u{1D4BE}",
          Iscr: "\u2110",
          isin: "\u2208",
          isindot: "\u22F5",
          isinE: "\u22F9",
          isins: "\u22F4",
          isinsv: "\u22F3",
          isinv: "\u2208",
          it: "\u2062",
          Itilde: "\u0128",
          itilde: "\u0129",
          Iukcy: "\u0406",
          iukcy: "\u0456",
          Iuml: "\xCF",
          iuml: "\xEF",
          Jcirc: "\u0134",
          jcirc: "\u0135",
          Jcy: "\u0419",
          jcy: "\u0439",
          Jfr: "\u{1D50D}",
          jfr: "\u{1D527}",
          jmath: "\u0237",
          Jopf: "\u{1D541}",
          jopf: "\u{1D55B}",
          Jscr: "\u{1D4A5}",
          jscr: "\u{1D4BF}",
          Jsercy: "\u0408",
          jsercy: "\u0458",
          Jukcy: "\u0404",
          jukcy: "\u0454",
          Kappa: "\u039A",
          kappa: "\u03BA",
          kappav: "\u03F0",
          Kcedil: "\u0136",
          kcedil: "\u0137",
          Kcy: "\u041A",
          kcy: "\u043A",
          Kfr: "\u{1D50E}",
          kfr: "\u{1D528}",
          kgreen: "\u0138",
          KHcy: "\u0425",
          khcy: "\u0445",
          KJcy: "\u040C",
          kjcy: "\u045C",
          Kopf: "\u{1D542}",
          kopf: "\u{1D55C}",
          Kscr: "\u{1D4A6}",
          kscr: "\u{1D4C0}",
          lAarr: "\u21DA",
          Lacute: "\u0139",
          lacute: "\u013A",
          laemptyv: "\u29B4",
          lagran: "\u2112",
          Lambda: "\u039B",
          lambda: "\u03BB",
          lang: "\u27E8",
          Lang: "\u27EA",
          langd: "\u2991",
          langle: "\u27E8",
          lap: "\u2A85",
          Laplacetrf: "\u2112",
          laquo: "\xAB",
          larrb: "\u21E4",
          larrbfs: "\u291F",
          larr: "\u2190",
          Larr: "\u219E",
          lArr: "\u21D0",
          larrfs: "\u291D",
          larrhk: "\u21A9",
          larrlp: "\u21AB",
          larrpl: "\u2939",
          larrsim: "\u2973",
          larrtl: "\u21A2",
          latail: "\u2919",
          lAtail: "\u291B",
          lat: "\u2AAB",
          late: "\u2AAD",
          lates: "\u2AAD\uFE00",
          lbarr: "\u290C",
          lBarr: "\u290E",
          lbbrk: "\u2772",
          lbrace: "{",
          lbrack: "[",
          lbrke: "\u298B",
          lbrksld: "\u298F",
          lbrkslu: "\u298D",
          Lcaron: "\u013D",
          lcaron: "\u013E",
          Lcedil: "\u013B",
          lcedil: "\u013C",
          lceil: "\u2308",
          lcub: "{",
          Lcy: "\u041B",
          lcy: "\u043B",
          ldca: "\u2936",
          ldquo: "\u201C",
          ldquor: "\u201E",
          ldrdhar: "\u2967",
          ldrushar: "\u294B",
          ldsh: "\u21B2",
          le: "\u2264",
          lE: "\u2266",
          LeftAngleBracket: "\u27E8",
          LeftArrowBar: "\u21E4",
          leftarrow: "\u2190",
          LeftArrow: "\u2190",
          Leftarrow: "\u21D0",
          LeftArrowRightArrow: "\u21C6",
          leftarrowtail: "\u21A2",
          LeftCeiling: "\u2308",
          LeftDoubleBracket: "\u27E6",
          LeftDownTeeVector: "\u2961",
          LeftDownVectorBar: "\u2959",
          LeftDownVector: "\u21C3",
          LeftFloor: "\u230A",
          leftharpoondown: "\u21BD",
          leftharpoonup: "\u21BC",
          leftleftarrows: "\u21C7",
          leftrightarrow: "\u2194",
          LeftRightArrow: "\u2194",
          Leftrightarrow: "\u21D4",
          leftrightarrows: "\u21C6",
          leftrightharpoons: "\u21CB",
          leftrightsquigarrow: "\u21AD",
          LeftRightVector: "\u294E",
          LeftTeeArrow: "\u21A4",
          LeftTee: "\u22A3",
          LeftTeeVector: "\u295A",
          leftthreetimes: "\u22CB",
          LeftTriangleBar: "\u29CF",
          LeftTriangle: "\u22B2",
          LeftTriangleEqual: "\u22B4",
          LeftUpDownVector: "\u2951",
          LeftUpTeeVector: "\u2960",
          LeftUpVectorBar: "\u2958",
          LeftUpVector: "\u21BF",
          LeftVectorBar: "\u2952",
          LeftVector: "\u21BC",
          lEg: "\u2A8B",
          leg: "\u22DA",
          leq: "\u2264",
          leqq: "\u2266",
          leqslant: "\u2A7D",
          lescc: "\u2AA8",
          les: "\u2A7D",
          lesdot: "\u2A7F",
          lesdoto: "\u2A81",
          lesdotor: "\u2A83",
          lesg: "\u22DA\uFE00",
          lesges: "\u2A93",
          lessapprox: "\u2A85",
          lessdot: "\u22D6",
          lesseqgtr: "\u22DA",
          lesseqqgtr: "\u2A8B",
          LessEqualGreater: "\u22DA",
          LessFullEqual: "\u2266",
          LessGreater: "\u2276",
          lessgtr: "\u2276",
          LessLess: "\u2AA1",
          lesssim: "\u2272",
          LessSlantEqual: "\u2A7D",
          LessTilde: "\u2272",
          lfisht: "\u297C",
          lfloor: "\u230A",
          Lfr: "\u{1D50F}",
          lfr: "\u{1D529}",
          lg: "\u2276",
          lgE: "\u2A91",
          lHar: "\u2962",
          lhard: "\u21BD",
          lharu: "\u21BC",
          lharul: "\u296A",
          lhblk: "\u2584",
          LJcy: "\u0409",
          ljcy: "\u0459",
          llarr: "\u21C7",
          ll: "\u226A",
          Ll: "\u22D8",
          llcorner: "\u231E",
          Lleftarrow: "\u21DA",
          llhard: "\u296B",
          lltri: "\u25FA",
          Lmidot: "\u013F",
          lmidot: "\u0140",
          lmoustache: "\u23B0",
          lmoust: "\u23B0",
          lnap: "\u2A89",
          lnapprox: "\u2A89",
          lne: "\u2A87",
          lnE: "\u2268",
          lneq: "\u2A87",
          lneqq: "\u2268",
          lnsim: "\u22E6",
          loang: "\u27EC",
          loarr: "\u21FD",
          lobrk: "\u27E6",
          longleftarrow: "\u27F5",
          LongLeftArrow: "\u27F5",
          Longleftarrow: "\u27F8",
          longleftrightarrow: "\u27F7",
          LongLeftRightArrow: "\u27F7",
          Longleftrightarrow: "\u27FA",
          longmapsto: "\u27FC",
          longrightarrow: "\u27F6",
          LongRightArrow: "\u27F6",
          Longrightarrow: "\u27F9",
          looparrowleft: "\u21AB",
          looparrowright: "\u21AC",
          lopar: "\u2985",
          Lopf: "\u{1D543}",
          lopf: "\u{1D55D}",
          loplus: "\u2A2D",
          lotimes: "\u2A34",
          lowast: "\u2217",
          lowbar: "_",
          LowerLeftArrow: "\u2199",
          LowerRightArrow: "\u2198",
          loz: "\u25CA",
          lozenge: "\u25CA",
          lozf: "\u29EB",
          lpar: "(",
          lparlt: "\u2993",
          lrarr: "\u21C6",
          lrcorner: "\u231F",
          lrhar: "\u21CB",
          lrhard: "\u296D",
          lrm: "\u200E",
          lrtri: "\u22BF",
          lsaquo: "\u2039",
          lscr: "\u{1D4C1}",
          Lscr: "\u2112",
          lsh: "\u21B0",
          Lsh: "\u21B0",
          lsim: "\u2272",
          lsime: "\u2A8D",
          lsimg: "\u2A8F",
          lsqb: "[",
          lsquo: "\u2018",
          lsquor: "\u201A",
          Lstrok: "\u0141",
          lstrok: "\u0142",
          ltcc: "\u2AA6",
          ltcir: "\u2A79",
          lt: "<",
          LT: "<",
          Lt: "\u226A",
          ltdot: "\u22D6",
          lthree: "\u22CB",
          ltimes: "\u22C9",
          ltlarr: "\u2976",
          ltquest: "\u2A7B",
          ltri: "\u25C3",
          ltrie: "\u22B4",
          ltrif: "\u25C2",
          ltrPar: "\u2996",
          lurdshar: "\u294A",
          luruhar: "\u2966",
          lvertneqq: "\u2268\uFE00",
          lvnE: "\u2268\uFE00",
          macr: "\xAF",
          male: "\u2642",
          malt: "\u2720",
          maltese: "\u2720",
          Map: "\u2905",
          map: "\u21A6",
          mapsto: "\u21A6",
          mapstodown: "\u21A7",
          mapstoleft: "\u21A4",
          mapstoup: "\u21A5",
          marker: "\u25AE",
          mcomma: "\u2A29",
          Mcy: "\u041C",
          mcy: "\u043C",
          mdash: "\u2014",
          mDDot: "\u223A",
          measuredangle: "\u2221",
          MediumSpace: "\u205F",
          Mellintrf: "\u2133",
          Mfr: "\u{1D510}",
          mfr: "\u{1D52A}",
          mho: "\u2127",
          micro: "\xB5",
          midast: "*",
          midcir: "\u2AF0",
          mid: "\u2223",
          middot: "\xB7",
          minusb: "\u229F",
          minus: "\u2212",
          minusd: "\u2238",
          minusdu: "\u2A2A",
          MinusPlus: "\u2213",
          mlcp: "\u2ADB",
          mldr: "\u2026",
          mnplus: "\u2213",
          models: "\u22A7",
          Mopf: "\u{1D544}",
          mopf: "\u{1D55E}",
          mp: "\u2213",
          mscr: "\u{1D4C2}",
          Mscr: "\u2133",
          mstpos: "\u223E",
          Mu: "\u039C",
          mu: "\u03BC",
          multimap: "\u22B8",
          mumap: "\u22B8",
          nabla: "\u2207",
          Nacute: "\u0143",
          nacute: "\u0144",
          nang: "\u2220\u20D2",
          nap: "\u2249",
          napE: "\u2A70\u0338",
          napid: "\u224B\u0338",
          napos: "\u0149",
          napprox: "\u2249",
          natural: "\u266E",
          naturals: "\u2115",
          natur: "\u266E",
          nbsp: "\xA0",
          nbump: "\u224E\u0338",
          nbumpe: "\u224F\u0338",
          ncap: "\u2A43",
          Ncaron: "\u0147",
          ncaron: "\u0148",
          Ncedil: "\u0145",
          ncedil: "\u0146",
          ncong: "\u2247",
          ncongdot: "\u2A6D\u0338",
          ncup: "\u2A42",
          Ncy: "\u041D",
          ncy: "\u043D",
          ndash: "\u2013",
          nearhk: "\u2924",
          nearr: "\u2197",
          neArr: "\u21D7",
          nearrow: "\u2197",
          ne: "\u2260",
          nedot: "\u2250\u0338",
          NegativeMediumSpace: "\u200B",
          NegativeThickSpace: "\u200B",
          NegativeThinSpace: "\u200B",
          NegativeVeryThinSpace: "\u200B",
          nequiv: "\u2262",
          nesear: "\u2928",
          nesim: "\u2242\u0338",
          NestedGreaterGreater: "\u226B",
          NestedLessLess: "\u226A",
          NewLine: `
`,
          nexist: "\u2204",
          nexists: "\u2204",
          Nfr: "\u{1D511}",
          nfr: "\u{1D52B}",
          ngE: "\u2267\u0338",
          nge: "\u2271",
          ngeq: "\u2271",
          ngeqq: "\u2267\u0338",
          ngeqslant: "\u2A7E\u0338",
          nges: "\u2A7E\u0338",
          nGg: "\u22D9\u0338",
          ngsim: "\u2275",
          nGt: "\u226B\u20D2",
          ngt: "\u226F",
          ngtr: "\u226F",
          nGtv: "\u226B\u0338",
          nharr: "\u21AE",
          nhArr: "\u21CE",
          nhpar: "\u2AF2",
          ni: "\u220B",
          nis: "\u22FC",
          nisd: "\u22FA",
          niv: "\u220B",
          NJcy: "\u040A",
          njcy: "\u045A",
          nlarr: "\u219A",
          nlArr: "\u21CD",
          nldr: "\u2025",
          nlE: "\u2266\u0338",
          nle: "\u2270",
          nleftarrow: "\u219A",
          nLeftarrow: "\u21CD",
          nleftrightarrow: "\u21AE",
          nLeftrightarrow: "\u21CE",
          nleq: "\u2270",
          nleqq: "\u2266\u0338",
          nleqslant: "\u2A7D\u0338",
          nles: "\u2A7D\u0338",
          nless: "\u226E",
          nLl: "\u22D8\u0338",
          nlsim: "\u2274",
          nLt: "\u226A\u20D2",
          nlt: "\u226E",
          nltri: "\u22EA",
          nltrie: "\u22EC",
          nLtv: "\u226A\u0338",
          nmid: "\u2224",
          NoBreak: "\u2060",
          NonBreakingSpace: "\xA0",
          nopf: "\u{1D55F}",
          Nopf: "\u2115",
          Not: "\u2AEC",
          not: "\xAC",
          NotCongruent: "\u2262",
          NotCupCap: "\u226D",
          NotDoubleVerticalBar: "\u2226",
          NotElement: "\u2209",
          NotEqual: "\u2260",
          NotEqualTilde: "\u2242\u0338",
          NotExists: "\u2204",
          NotGreater: "\u226F",
          NotGreaterEqual: "\u2271",
          NotGreaterFullEqual: "\u2267\u0338",
          NotGreaterGreater: "\u226B\u0338",
          NotGreaterLess: "\u2279",
          NotGreaterSlantEqual: "\u2A7E\u0338",
          NotGreaterTilde: "\u2275",
          NotHumpDownHump: "\u224E\u0338",
          NotHumpEqual: "\u224F\u0338",
          notin: "\u2209",
          notindot: "\u22F5\u0338",
          notinE: "\u22F9\u0338",
          notinva: "\u2209",
          notinvb: "\u22F7",
          notinvc: "\u22F6",
          NotLeftTriangleBar: "\u29CF\u0338",
          NotLeftTriangle: "\u22EA",
          NotLeftTriangleEqual: "\u22EC",
          NotLess: "\u226E",
          NotLessEqual: "\u2270",
          NotLessGreater: "\u2278",
          NotLessLess: "\u226A\u0338",
          NotLessSlantEqual: "\u2A7D\u0338",
          NotLessTilde: "\u2274",
          NotNestedGreaterGreater: "\u2AA2\u0338",
          NotNestedLessLess: "\u2AA1\u0338",
          notni: "\u220C",
          notniva: "\u220C",
          notnivb: "\u22FE",
          notnivc: "\u22FD",
          NotPrecedes: "\u2280",
          NotPrecedesEqual: "\u2AAF\u0338",
          NotPrecedesSlantEqual: "\u22E0",
          NotReverseElement: "\u220C",
          NotRightTriangleBar: "\u29D0\u0338",
          NotRightTriangle: "\u22EB",
          NotRightTriangleEqual: "\u22ED",
          NotSquareSubset: "\u228F\u0338",
          NotSquareSubsetEqual: "\u22E2",
          NotSquareSuperset: "\u2290\u0338",
          NotSquareSupersetEqual: "\u22E3",
          NotSubset: "\u2282\u20D2",
          NotSubsetEqual: "\u2288",
          NotSucceeds: "\u2281",
          NotSucceedsEqual: "\u2AB0\u0338",
          NotSucceedsSlantEqual: "\u22E1",
          NotSucceedsTilde: "\u227F\u0338",
          NotSuperset: "\u2283\u20D2",
          NotSupersetEqual: "\u2289",
          NotTilde: "\u2241",
          NotTildeEqual: "\u2244",
          NotTildeFullEqual: "\u2247",
          NotTildeTilde: "\u2249",
          NotVerticalBar: "\u2224",
          nparallel: "\u2226",
          npar: "\u2226",
          nparsl: "\u2AFD\u20E5",
          npart: "\u2202\u0338",
          npolint: "\u2A14",
          npr: "\u2280",
          nprcue: "\u22E0",
          nprec: "\u2280",
          npreceq: "\u2AAF\u0338",
          npre: "\u2AAF\u0338",
          nrarrc: "\u2933\u0338",
          nrarr: "\u219B",
          nrArr: "\u21CF",
          nrarrw: "\u219D\u0338",
          nrightarrow: "\u219B",
          nRightarrow: "\u21CF",
          nrtri: "\u22EB",
          nrtrie: "\u22ED",
          nsc: "\u2281",
          nsccue: "\u22E1",
          nsce: "\u2AB0\u0338",
          Nscr: "\u{1D4A9}",
          nscr: "\u{1D4C3}",
          nshortmid: "\u2224",
          nshortparallel: "\u2226",
          nsim: "\u2241",
          nsime: "\u2244",
          nsimeq: "\u2244",
          nsmid: "\u2224",
          nspar: "\u2226",
          nsqsube: "\u22E2",
          nsqsupe: "\u22E3",
          nsub: "\u2284",
          nsubE: "\u2AC5\u0338",
          nsube: "\u2288",
          nsubset: "\u2282\u20D2",
          nsubseteq: "\u2288",
          nsubseteqq: "\u2AC5\u0338",
          nsucc: "\u2281",
          nsucceq: "\u2AB0\u0338",
          nsup: "\u2285",
          nsupE: "\u2AC6\u0338",
          nsupe: "\u2289",
          nsupset: "\u2283\u20D2",
          nsupseteq: "\u2289",
          nsupseteqq: "\u2AC6\u0338",
          ntgl: "\u2279",
          Ntilde: "\xD1",
          ntilde: "\xF1",
          ntlg: "\u2278",
          ntriangleleft: "\u22EA",
          ntrianglelefteq: "\u22EC",
          ntriangleright: "\u22EB",
          ntrianglerighteq: "\u22ED",
          Nu: "\u039D",
          nu: "\u03BD",
          num: "#",
          numero: "\u2116",
          numsp: "\u2007",
          nvap: "\u224D\u20D2",
          nvdash: "\u22AC",
          nvDash: "\u22AD",
          nVdash: "\u22AE",
          nVDash: "\u22AF",
          nvge: "\u2265\u20D2",
          nvgt: ">\u20D2",
          nvHarr: "\u2904",
          nvinfin: "\u29DE",
          nvlArr: "\u2902",
          nvle: "\u2264\u20D2",
          nvlt: "<\u20D2",
          nvltrie: "\u22B4\u20D2",
          nvrArr: "\u2903",
          nvrtrie: "\u22B5\u20D2",
          nvsim: "\u223C\u20D2",
          nwarhk: "\u2923",
          nwarr: "\u2196",
          nwArr: "\u21D6",
          nwarrow: "\u2196",
          nwnear: "\u2927",
          Oacute: "\xD3",
          oacute: "\xF3",
          oast: "\u229B",
          Ocirc: "\xD4",
          ocirc: "\xF4",
          ocir: "\u229A",
          Ocy: "\u041E",
          ocy: "\u043E",
          odash: "\u229D",
          Odblac: "\u0150",
          odblac: "\u0151",
          odiv: "\u2A38",
          odot: "\u2299",
          odsold: "\u29BC",
          OElig: "\u0152",
          oelig: "\u0153",
          ofcir: "\u29BF",
          Ofr: "\u{1D512}",
          ofr: "\u{1D52C}",
          ogon: "\u02DB",
          Ograve: "\xD2",
          ograve: "\xF2",
          ogt: "\u29C1",
          ohbar: "\u29B5",
          ohm: "\u03A9",
          oint: "\u222E",
          olarr: "\u21BA",
          olcir: "\u29BE",
          olcross: "\u29BB",
          oline: "\u203E",
          olt: "\u29C0",
          Omacr: "\u014C",
          omacr: "\u014D",
          Omega: "\u03A9",
          omega: "\u03C9",
          Omicron: "\u039F",
          omicron: "\u03BF",
          omid: "\u29B6",
          ominus: "\u2296",
          Oopf: "\u{1D546}",
          oopf: "\u{1D560}",
          opar: "\u29B7",
          OpenCurlyDoubleQuote: "\u201C",
          OpenCurlyQuote: "\u2018",
          operp: "\u29B9",
          oplus: "\u2295",
          orarr: "\u21BB",
          Or: "\u2A54",
          or: "\u2228",
          ord: "\u2A5D",
          order: "\u2134",
          orderof: "\u2134",
          ordf: "\xAA",
          ordm: "\xBA",
          origof: "\u22B6",
          oror: "\u2A56",
          orslope: "\u2A57",
          orv: "\u2A5B",
          oS: "\u24C8",
          Oscr: "\u{1D4AA}",
          oscr: "\u2134",
          Oslash: "\xD8",
          oslash: "\xF8",
          osol: "\u2298",
          Otilde: "\xD5",
          otilde: "\xF5",
          otimesas: "\u2A36",
          Otimes: "\u2A37",
          otimes: "\u2297",
          Ouml: "\xD6",
          ouml: "\xF6",
          ovbar: "\u233D",
          OverBar: "\u203E",
          OverBrace: "\u23DE",
          OverBracket: "\u23B4",
          OverParenthesis: "\u23DC",
          para: "\xB6",
          parallel: "\u2225",
          par: "\u2225",
          parsim: "\u2AF3",
          parsl: "\u2AFD",
          part: "\u2202",
          PartialD: "\u2202",
          Pcy: "\u041F",
          pcy: "\u043F",
          percnt: "%",
          period: ".",
          permil: "\u2030",
          perp: "\u22A5",
          pertenk: "\u2031",
          Pfr: "\u{1D513}",
          pfr: "\u{1D52D}",
          Phi: "\u03A6",
          phi: "\u03C6",
          phiv: "\u03D5",
          phmmat: "\u2133",
          phone: "\u260E",
          Pi: "\u03A0",
          pi: "\u03C0",
          pitchfork: "\u22D4",
          piv: "\u03D6",
          planck: "\u210F",
          planckh: "\u210E",
          plankv: "\u210F",
          plusacir: "\u2A23",
          plusb: "\u229E",
          pluscir: "\u2A22",
          plus: "+",
          plusdo: "\u2214",
          plusdu: "\u2A25",
          pluse: "\u2A72",
          PlusMinus: "\xB1",
          plusmn: "\xB1",
          plussim: "\u2A26",
          plustwo: "\u2A27",
          pm: "\xB1",
          Poincareplane: "\u210C",
          pointint: "\u2A15",
          popf: "\u{1D561}",
          Popf: "\u2119",
          pound: "\xA3",
          prap: "\u2AB7",
          Pr: "\u2ABB",
          pr: "\u227A",
          prcue: "\u227C",
          precapprox: "\u2AB7",
          prec: "\u227A",
          preccurlyeq: "\u227C",
          Precedes: "\u227A",
          PrecedesEqual: "\u2AAF",
          PrecedesSlantEqual: "\u227C",
          PrecedesTilde: "\u227E",
          preceq: "\u2AAF",
          precnapprox: "\u2AB9",
          precneqq: "\u2AB5",
          precnsim: "\u22E8",
          pre: "\u2AAF",
          prE: "\u2AB3",
          precsim: "\u227E",
          prime: "\u2032",
          Prime: "\u2033",
          primes: "\u2119",
          prnap: "\u2AB9",
          prnE: "\u2AB5",
          prnsim: "\u22E8",
          prod: "\u220F",
          Product: "\u220F",
          profalar: "\u232E",
          profline: "\u2312",
          profsurf: "\u2313",
          prop: "\u221D",
          Proportional: "\u221D",
          Proportion: "\u2237",
          propto: "\u221D",
          prsim: "\u227E",
          prurel: "\u22B0",
          Pscr: "\u{1D4AB}",
          pscr: "\u{1D4C5}",
          Psi: "\u03A8",
          psi: "\u03C8",
          puncsp: "\u2008",
          Qfr: "\u{1D514}",
          qfr: "\u{1D52E}",
          qint: "\u2A0C",
          qopf: "\u{1D562}",
          Qopf: "\u211A",
          qprime: "\u2057",
          Qscr: "\u{1D4AC}",
          qscr: "\u{1D4C6}",
          quaternions: "\u210D",
          quatint: "\u2A16",
          quest: "?",
          questeq: "\u225F",
          quot: '"',
          QUOT: '"',
          rAarr: "\u21DB",
          race: "\u223D\u0331",
          Racute: "\u0154",
          racute: "\u0155",
          radic: "\u221A",
          raemptyv: "\u29B3",
          rang: "\u27E9",
          Rang: "\u27EB",
          rangd: "\u2992",
          range: "\u29A5",
          rangle: "\u27E9",
          raquo: "\xBB",
          rarrap: "\u2975",
          rarrb: "\u21E5",
          rarrbfs: "\u2920",
          rarrc: "\u2933",
          rarr: "\u2192",
          Rarr: "\u21A0",
          rArr: "\u21D2",
          rarrfs: "\u291E",
          rarrhk: "\u21AA",
          rarrlp: "\u21AC",
          rarrpl: "\u2945",
          rarrsim: "\u2974",
          Rarrtl: "\u2916",
          rarrtl: "\u21A3",
          rarrw: "\u219D",
          ratail: "\u291A",
          rAtail: "\u291C",
          ratio: "\u2236",
          rationals: "\u211A",
          rbarr: "\u290D",
          rBarr: "\u290F",
          RBarr: "\u2910",
          rbbrk: "\u2773",
          rbrace: "}",
          rbrack: "]",
          rbrke: "\u298C",
          rbrksld: "\u298E",
          rbrkslu: "\u2990",
          Rcaron: "\u0158",
          rcaron: "\u0159",
          Rcedil: "\u0156",
          rcedil: "\u0157",
          rceil: "\u2309",
          rcub: "}",
          Rcy: "\u0420",
          rcy: "\u0440",
          rdca: "\u2937",
          rdldhar: "\u2969",
          rdquo: "\u201D",
          rdquor: "\u201D",
          rdsh: "\u21B3",
          real: "\u211C",
          realine: "\u211B",
          realpart: "\u211C",
          reals: "\u211D",
          Re: "\u211C",
          rect: "\u25AD",
          reg: "\xAE",
          REG: "\xAE",
          ReverseElement: "\u220B",
          ReverseEquilibrium: "\u21CB",
          ReverseUpEquilibrium: "\u296F",
          rfisht: "\u297D",
          rfloor: "\u230B",
          rfr: "\u{1D52F}",
          Rfr: "\u211C",
          rHar: "\u2964",
          rhard: "\u21C1",
          rharu: "\u21C0",
          rharul: "\u296C",
          Rho: "\u03A1",
          rho: "\u03C1",
          rhov: "\u03F1",
          RightAngleBracket: "\u27E9",
          RightArrowBar: "\u21E5",
          rightarrow: "\u2192",
          RightArrow: "\u2192",
          Rightarrow: "\u21D2",
          RightArrowLeftArrow: "\u21C4",
          rightarrowtail: "\u21A3",
          RightCeiling: "\u2309",
          RightDoubleBracket: "\u27E7",
          RightDownTeeVector: "\u295D",
          RightDownVectorBar: "\u2955",
          RightDownVector: "\u21C2",
          RightFloor: "\u230B",
          rightharpoondown: "\u21C1",
          rightharpoonup: "\u21C0",
          rightleftarrows: "\u21C4",
          rightleftharpoons: "\u21CC",
          rightrightarrows: "\u21C9",
          rightsquigarrow: "\u219D",
          RightTeeArrow: "\u21A6",
          RightTee: "\u22A2",
          RightTeeVector: "\u295B",
          rightthreetimes: "\u22CC",
          RightTriangleBar: "\u29D0",
          RightTriangle: "\u22B3",
          RightTriangleEqual: "\u22B5",
          RightUpDownVector: "\u294F",
          RightUpTeeVector: "\u295C",
          RightUpVectorBar: "\u2954",
          RightUpVector: "\u21BE",
          RightVectorBar: "\u2953",
          RightVector: "\u21C0",
          ring: "\u02DA",
          risingdotseq: "\u2253",
          rlarr: "\u21C4",
          rlhar: "\u21CC",
          rlm: "\u200F",
          rmoustache: "\u23B1",
          rmoust: "\u23B1",
          rnmid: "\u2AEE",
          roang: "\u27ED",
          roarr: "\u21FE",
          robrk: "\u27E7",
          ropar: "\u2986",
          ropf: "\u{1D563}",
          Ropf: "\u211D",
          roplus: "\u2A2E",
          rotimes: "\u2A35",
          RoundImplies: "\u2970",
          rpar: ")",
          rpargt: "\u2994",
          rppolint: "\u2A12",
          rrarr: "\u21C9",
          Rrightarrow: "\u21DB",
          rsaquo: "\u203A",
          rscr: "\u{1D4C7}",
          Rscr: "\u211B",
          rsh: "\u21B1",
          Rsh: "\u21B1",
          rsqb: "]",
          rsquo: "\u2019",
          rsquor: "\u2019",
          rthree: "\u22CC",
          rtimes: "\u22CA",
          rtri: "\u25B9",
          rtrie: "\u22B5",
          rtrif: "\u25B8",
          rtriltri: "\u29CE",
          RuleDelayed: "\u29F4",
          ruluhar: "\u2968",
          rx: "\u211E",
          Sacute: "\u015A",
          sacute: "\u015B",
          sbquo: "\u201A",
          scap: "\u2AB8",
          Scaron: "\u0160",
          scaron: "\u0161",
          Sc: "\u2ABC",
          sc: "\u227B",
          sccue: "\u227D",
          sce: "\u2AB0",
          scE: "\u2AB4",
          Scedil: "\u015E",
          scedil: "\u015F",
          Scirc: "\u015C",
          scirc: "\u015D",
          scnap: "\u2ABA",
          scnE: "\u2AB6",
          scnsim: "\u22E9",
          scpolint: "\u2A13",
          scsim: "\u227F",
          Scy: "\u0421",
          scy: "\u0441",
          sdotb: "\u22A1",
          sdot: "\u22C5",
          sdote: "\u2A66",
          searhk: "\u2925",
          searr: "\u2198",
          seArr: "\u21D8",
          searrow: "\u2198",
          sect: "\xA7",
          semi: ";",
          seswar: "\u2929",
          setminus: "\u2216",
          setmn: "\u2216",
          sext: "\u2736",
          Sfr: "\u{1D516}",
          sfr: "\u{1D530}",
          sfrown: "\u2322",
          sharp: "\u266F",
          SHCHcy: "\u0429",
          shchcy: "\u0449",
          SHcy: "\u0428",
          shcy: "\u0448",
          ShortDownArrow: "\u2193",
          ShortLeftArrow: "\u2190",
          shortmid: "\u2223",
          shortparallel: "\u2225",
          ShortRightArrow: "\u2192",
          ShortUpArrow: "\u2191",
          shy: "\xAD",
          Sigma: "\u03A3",
          sigma: "\u03C3",
          sigmaf: "\u03C2",
          sigmav: "\u03C2",
          sim: "\u223C",
          simdot: "\u2A6A",
          sime: "\u2243",
          simeq: "\u2243",
          simg: "\u2A9E",
          simgE: "\u2AA0",
          siml: "\u2A9D",
          simlE: "\u2A9F",
          simne: "\u2246",
          simplus: "\u2A24",
          simrarr: "\u2972",
          slarr: "\u2190",
          SmallCircle: "\u2218",
          smallsetminus: "\u2216",
          smashp: "\u2A33",
          smeparsl: "\u29E4",
          smid: "\u2223",
          smile: "\u2323",
          smt: "\u2AAA",
          smte: "\u2AAC",
          smtes: "\u2AAC\uFE00",
          SOFTcy: "\u042C",
          softcy: "\u044C",
          solbar: "\u233F",
          solb: "\u29C4",
          sol: "/",
          Sopf: "\u{1D54A}",
          sopf: "\u{1D564}",
          spades: "\u2660",
          spadesuit: "\u2660",
          spar: "\u2225",
          sqcap: "\u2293",
          sqcaps: "\u2293\uFE00",
          sqcup: "\u2294",
          sqcups: "\u2294\uFE00",
          Sqrt: "\u221A",
          sqsub: "\u228F",
          sqsube: "\u2291",
          sqsubset: "\u228F",
          sqsubseteq: "\u2291",
          sqsup: "\u2290",
          sqsupe: "\u2292",
          sqsupset: "\u2290",
          sqsupseteq: "\u2292",
          square: "\u25A1",
          Square: "\u25A1",
          SquareIntersection: "\u2293",
          SquareSubset: "\u228F",
          SquareSubsetEqual: "\u2291",
          SquareSuperset: "\u2290",
          SquareSupersetEqual: "\u2292",
          SquareUnion: "\u2294",
          squarf: "\u25AA",
          squ: "\u25A1",
          squf: "\u25AA",
          srarr: "\u2192",
          Sscr: "\u{1D4AE}",
          sscr: "\u{1D4C8}",
          ssetmn: "\u2216",
          ssmile: "\u2323",
          sstarf: "\u22C6",
          Star: "\u22C6",
          star: "\u2606",
          starf: "\u2605",
          straightepsilon: "\u03F5",
          straightphi: "\u03D5",
          strns: "\xAF",
          sub: "\u2282",
          Sub: "\u22D0",
          subdot: "\u2ABD",
          subE: "\u2AC5",
          sube: "\u2286",
          subedot: "\u2AC3",
          submult: "\u2AC1",
          subnE: "\u2ACB",
          subne: "\u228A",
          subplus: "\u2ABF",
          subrarr: "\u2979",
          subset: "\u2282",
          Subset: "\u22D0",
          subseteq: "\u2286",
          subseteqq: "\u2AC5",
          SubsetEqual: "\u2286",
          subsetneq: "\u228A",
          subsetneqq: "\u2ACB",
          subsim: "\u2AC7",
          subsub: "\u2AD5",
          subsup: "\u2AD3",
          succapprox: "\u2AB8",
          succ: "\u227B",
          succcurlyeq: "\u227D",
          Succeeds: "\u227B",
          SucceedsEqual: "\u2AB0",
          SucceedsSlantEqual: "\u227D",
          SucceedsTilde: "\u227F",
          succeq: "\u2AB0",
          succnapprox: "\u2ABA",
          succneqq: "\u2AB6",
          succnsim: "\u22E9",
          succsim: "\u227F",
          SuchThat: "\u220B",
          sum: "\u2211",
          Sum: "\u2211",
          sung: "\u266A",
          sup1: "\xB9",
          sup2: "\xB2",
          sup3: "\xB3",
          sup: "\u2283",
          Sup: "\u22D1",
          supdot: "\u2ABE",
          supdsub: "\u2AD8",
          supE: "\u2AC6",
          supe: "\u2287",
          supedot: "\u2AC4",
          Superset: "\u2283",
          SupersetEqual: "\u2287",
          suphsol: "\u27C9",
          suphsub: "\u2AD7",
          suplarr: "\u297B",
          supmult: "\u2AC2",
          supnE: "\u2ACC",
          supne: "\u228B",
          supplus: "\u2AC0",
          supset: "\u2283",
          Supset: "\u22D1",
          supseteq: "\u2287",
          supseteqq: "\u2AC6",
          supsetneq: "\u228B",
          supsetneqq: "\u2ACC",
          supsim: "\u2AC8",
          supsub: "\u2AD4",
          supsup: "\u2AD6",
          swarhk: "\u2926",
          swarr: "\u2199",
          swArr: "\u21D9",
          swarrow: "\u2199",
          swnwar: "\u292A",
          szlig: "\xDF",
          Tab: "	",
          target: "\u2316",
          Tau: "\u03A4",
          tau: "\u03C4",
          tbrk: "\u23B4",
          Tcaron: "\u0164",
          tcaron: "\u0165",
          Tcedil: "\u0162",
          tcedil: "\u0163",
          Tcy: "\u0422",
          tcy: "\u0442",
          tdot: "\u20DB",
          telrec: "\u2315",
          Tfr: "\u{1D517}",
          tfr: "\u{1D531}",
          there4: "\u2234",
          therefore: "\u2234",
          Therefore: "\u2234",
          Theta: "\u0398",
          theta: "\u03B8",
          thetasym: "\u03D1",
          thetav: "\u03D1",
          thickapprox: "\u2248",
          thicksim: "\u223C",
          ThickSpace: "\u205F\u200A",
          ThinSpace: "\u2009",
          thinsp: "\u2009",
          thkap: "\u2248",
          thksim: "\u223C",
          THORN: "\xDE",
          thorn: "\xFE",
          tilde: "\u02DC",
          Tilde: "\u223C",
          TildeEqual: "\u2243",
          TildeFullEqual: "\u2245",
          TildeTilde: "\u2248",
          timesbar: "\u2A31",
          timesb: "\u22A0",
          times: "\xD7",
          timesd: "\u2A30",
          tint: "\u222D",
          toea: "\u2928",
          topbot: "\u2336",
          topcir: "\u2AF1",
          top: "\u22A4",
          Topf: "\u{1D54B}",
          topf: "\u{1D565}",
          topfork: "\u2ADA",
          tosa: "\u2929",
          tprime: "\u2034",
          trade: "\u2122",
          TRADE: "\u2122",
          triangle: "\u25B5",
          triangledown: "\u25BF",
          triangleleft: "\u25C3",
          trianglelefteq: "\u22B4",
          triangleq: "\u225C",
          triangleright: "\u25B9",
          trianglerighteq: "\u22B5",
          tridot: "\u25EC",
          trie: "\u225C",
          triminus: "\u2A3A",
          TripleDot: "\u20DB",
          triplus: "\u2A39",
          trisb: "\u29CD",
          tritime: "\u2A3B",
          trpezium: "\u23E2",
          Tscr: "\u{1D4AF}",
          tscr: "\u{1D4C9}",
          TScy: "\u0426",
          tscy: "\u0446",
          TSHcy: "\u040B",
          tshcy: "\u045B",
          Tstrok: "\u0166",
          tstrok: "\u0167",
          twixt: "\u226C",
          twoheadleftarrow: "\u219E",
          twoheadrightarrow: "\u21A0",
          Uacute: "\xDA",
          uacute: "\xFA",
          uarr: "\u2191",
          Uarr: "\u219F",
          uArr: "\u21D1",
          Uarrocir: "\u2949",
          Ubrcy: "\u040E",
          ubrcy: "\u045E",
          Ubreve: "\u016C",
          ubreve: "\u016D",
          Ucirc: "\xDB",
          ucirc: "\xFB",
          Ucy: "\u0423",
          ucy: "\u0443",
          udarr: "\u21C5",
          Udblac: "\u0170",
          udblac: "\u0171",
          udhar: "\u296E",
          ufisht: "\u297E",
          Ufr: "\u{1D518}",
          ufr: "\u{1D532}",
          Ugrave: "\xD9",
          ugrave: "\xF9",
          uHar: "\u2963",
          uharl: "\u21BF",
          uharr: "\u21BE",
          uhblk: "\u2580",
          ulcorn: "\u231C",
          ulcorner: "\u231C",
          ulcrop: "\u230F",
          ultri: "\u25F8",
          Umacr: "\u016A",
          umacr: "\u016B",
          uml: "\xA8",
          UnderBar: "_",
          UnderBrace: "\u23DF",
          UnderBracket: "\u23B5",
          UnderParenthesis: "\u23DD",
          Union: "\u22C3",
          UnionPlus: "\u228E",
          Uogon: "\u0172",
          uogon: "\u0173",
          Uopf: "\u{1D54C}",
          uopf: "\u{1D566}",
          UpArrowBar: "\u2912",
          uparrow: "\u2191",
          UpArrow: "\u2191",
          Uparrow: "\u21D1",
          UpArrowDownArrow: "\u21C5",
          updownarrow: "\u2195",
          UpDownArrow: "\u2195",
          Updownarrow: "\u21D5",
          UpEquilibrium: "\u296E",
          upharpoonleft: "\u21BF",
          upharpoonright: "\u21BE",
          uplus: "\u228E",
          UpperLeftArrow: "\u2196",
          UpperRightArrow: "\u2197",
          upsi: "\u03C5",
          Upsi: "\u03D2",
          upsih: "\u03D2",
          Upsilon: "\u03A5",
          upsilon: "\u03C5",
          UpTeeArrow: "\u21A5",
          UpTee: "\u22A5",
          upuparrows: "\u21C8",
          urcorn: "\u231D",
          urcorner: "\u231D",
          urcrop: "\u230E",
          Uring: "\u016E",
          uring: "\u016F",
          urtri: "\u25F9",
          Uscr: "\u{1D4B0}",
          uscr: "\u{1D4CA}",
          utdot: "\u22F0",
          Utilde: "\u0168",
          utilde: "\u0169",
          utri: "\u25B5",
          utrif: "\u25B4",
          uuarr: "\u21C8",
          Uuml: "\xDC",
          uuml: "\xFC",
          uwangle: "\u29A7",
          vangrt: "\u299C",
          varepsilon: "\u03F5",
          varkappa: "\u03F0",
          varnothing: "\u2205",
          varphi: "\u03D5",
          varpi: "\u03D6",
          varpropto: "\u221D",
          varr: "\u2195",
          vArr: "\u21D5",
          varrho: "\u03F1",
          varsigma: "\u03C2",
          varsubsetneq: "\u228A\uFE00",
          varsubsetneqq: "\u2ACB\uFE00",
          varsupsetneq: "\u228B\uFE00",
          varsupsetneqq: "\u2ACC\uFE00",
          vartheta: "\u03D1",
          vartriangleleft: "\u22B2",
          vartriangleright: "\u22B3",
          vBar: "\u2AE8",
          Vbar: "\u2AEB",
          vBarv: "\u2AE9",
          Vcy: "\u0412",
          vcy: "\u0432",
          vdash: "\u22A2",
          vDash: "\u22A8",
          Vdash: "\u22A9",
          VDash: "\u22AB",
          Vdashl: "\u2AE6",
          veebar: "\u22BB",
          vee: "\u2228",
          Vee: "\u22C1",
          veeeq: "\u225A",
          vellip: "\u22EE",
          verbar: "|",
          Verbar: "\u2016",
          vert: "|",
          Vert: "\u2016",
          VerticalBar: "\u2223",
          VerticalLine: "|",
          VerticalSeparator: "\u2758",
          VerticalTilde: "\u2240",
          VeryThinSpace: "\u200A",
          Vfr: "\u{1D519}",
          vfr: "\u{1D533}",
          vltri: "\u22B2",
          vnsub: "\u2282\u20D2",
          vnsup: "\u2283\u20D2",
          Vopf: "\u{1D54D}",
          vopf: "\u{1D567}",
          vprop: "\u221D",
          vrtri: "\u22B3",
          Vscr: "\u{1D4B1}",
          vscr: "\u{1D4CB}",
          vsubnE: "\u2ACB\uFE00",
          vsubne: "\u228A\uFE00",
          vsupnE: "\u2ACC\uFE00",
          vsupne: "\u228B\uFE00",
          Vvdash: "\u22AA",
          vzigzag: "\u299A",
          Wcirc: "\u0174",
          wcirc: "\u0175",
          wedbar: "\u2A5F",
          wedge: "\u2227",
          Wedge: "\u22C0",
          wedgeq: "\u2259",
          weierp: "\u2118",
          Wfr: "\u{1D51A}",
          wfr: "\u{1D534}",
          Wopf: "\u{1D54E}",
          wopf: "\u{1D568}",
          wp: "\u2118",
          wr: "\u2240",
          wreath: "\u2240",
          Wscr: "\u{1D4B2}",
          wscr: "\u{1D4CC}",
          xcap: "\u22C2",
          xcirc: "\u25EF",
          xcup: "\u22C3",
          xdtri: "\u25BD",
          Xfr: "\u{1D51B}",
          xfr: "\u{1D535}",
          xharr: "\u27F7",
          xhArr: "\u27FA",
          Xi: "\u039E",
          xi: "\u03BE",
          xlarr: "\u27F5",
          xlArr: "\u27F8",
          xmap: "\u27FC",
          xnis: "\u22FB",
          xodot: "\u2A00",
          Xopf: "\u{1D54F}",
          xopf: "\u{1D569}",
          xoplus: "\u2A01",
          xotime: "\u2A02",
          xrarr: "\u27F6",
          xrArr: "\u27F9",
          Xscr: "\u{1D4B3}",
          xscr: "\u{1D4CD}",
          xsqcup: "\u2A06",
          xuplus: "\u2A04",
          xutri: "\u25B3",
          xvee: "\u22C1",
          xwedge: "\u22C0",
          Yacute: "\xDD",
          yacute: "\xFD",
          YAcy: "\u042F",
          yacy: "\u044F",
          Ycirc: "\u0176",
          ycirc: "\u0177",
          Ycy: "\u042B",
          ycy: "\u044B",
          yen: "\xA5",
          Yfr: "\u{1D51C}",
          yfr: "\u{1D536}",
          YIcy: "\u0407",
          yicy: "\u0457",
          Yopf: "\u{1D550}",
          yopf: "\u{1D56A}",
          Yscr: "\u{1D4B4}",
          yscr: "\u{1D4CE}",
          YUcy: "\u042E",
          yucy: "\u044E",
          yuml: "\xFF",
          Yuml: "\u0178",
          Zacute: "\u0179",
          zacute: "\u017A",
          Zcaron: "\u017D",
          zcaron: "\u017E",
          Zcy: "\u0417",
          zcy: "\u0437",
          Zdot: "\u017B",
          zdot: "\u017C",
          zeetrf: "\u2128",
          ZeroWidthSpace: "\u200B",
          Zeta: "\u0396",
          zeta: "\u03B6",
          zfr: "\u{1D537}",
          Zfr: "\u2128",
          ZHcy: "\u0416",
          zhcy: "\u0436",
          zigrarr: "\u21DD",
          zopf: "\u{1D56B}",
          Zopf: "\u2124",
          Zscr: "\u{1D4B5}",
          zscr: "\u{1D4CF}",
          zwj: "\u200D",
          zwnj: "\u200C",
        };
      }),
      _i = re((t, e) => {
        e.exports = {
          Aacute: "\xC1",
          aacute: "\xE1",
          Acirc: "\xC2",
          acirc: "\xE2",
          acute: "\xB4",
          AElig: "\xC6",
          aelig: "\xE6",
          Agrave: "\xC0",
          agrave: "\xE0",
          amp: "&",
          AMP: "&",
          Aring: "\xC5",
          aring: "\xE5",
          Atilde: "\xC3",
          atilde: "\xE3",
          Auml: "\xC4",
          auml: "\xE4",
          brvbar: "\xA6",
          Ccedil: "\xC7",
          ccedil: "\xE7",
          cedil: "\xB8",
          cent: "\xA2",
          copy: "\xA9",
          COPY: "\xA9",
          curren: "\xA4",
          deg: "\xB0",
          divide: "\xF7",
          Eacute: "\xC9",
          eacute: "\xE9",
          Ecirc: "\xCA",
          ecirc: "\xEA",
          Egrave: "\xC8",
          egrave: "\xE8",
          ETH: "\xD0",
          eth: "\xF0",
          Euml: "\xCB",
          euml: "\xEB",
          frac12: "\xBD",
          frac14: "\xBC",
          frac34: "\xBE",
          gt: ">",
          GT: ">",
          Iacute: "\xCD",
          iacute: "\xED",
          Icirc: "\xCE",
          icirc: "\xEE",
          iexcl: "\xA1",
          Igrave: "\xCC",
          igrave: "\xEC",
          iquest: "\xBF",
          Iuml: "\xCF",
          iuml: "\xEF",
          laquo: "\xAB",
          lt: "<",
          LT: "<",
          macr: "\xAF",
          micro: "\xB5",
          middot: "\xB7",
          nbsp: "\xA0",
          not: "\xAC",
          Ntilde: "\xD1",
          ntilde: "\xF1",
          Oacute: "\xD3",
          oacute: "\xF3",
          Ocirc: "\xD4",
          ocirc: "\xF4",
          Ograve: "\xD2",
          ograve: "\xF2",
          ordf: "\xAA",
          ordm: "\xBA",
          Oslash: "\xD8",
          oslash: "\xF8",
          Otilde: "\xD5",
          otilde: "\xF5",
          Ouml: "\xD6",
          ouml: "\xF6",
          para: "\xB6",
          plusmn: "\xB1",
          pound: "\xA3",
          quot: '"',
          QUOT: '"',
          raquo: "\xBB",
          reg: "\xAE",
          REG: "\xAE",
          sect: "\xA7",
          shy: "\xAD",
          sup1: "\xB9",
          sup2: "\xB2",
          sup3: "\xB3",
          szlig: "\xDF",
          THORN: "\xDE",
          thorn: "\xFE",
          times: "\xD7",
          Uacute: "\xDA",
          uacute: "\xFA",
          Ucirc: "\xDB",
          ucirc: "\xFB",
          Ugrave: "\xD9",
          ugrave: "\xF9",
          uml: "\xA8",
          Uuml: "\xDC",
          uuml: "\xFC",
          Yacute: "\xDD",
          yacute: "\xFD",
          yen: "\xA5",
          yuml: "\xFF",
        };
      }),
      Cn = re((t, e) => {
        e.exports = { amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' };
      }),
      Bi = re((t, e) => {
        e.exports = {
          0: 65533,
          128: 8364,
          130: 8218,
          131: 402,
          132: 8222,
          133: 8230,
          134: 8224,
          135: 8225,
          136: 710,
          137: 8240,
          138: 352,
          139: 8249,
          140: 338,
          142: 381,
          145: 8216,
          146: 8217,
          147: 8220,
          148: 8221,
          149: 8226,
          150: 8211,
          151: 8212,
          152: 732,
          153: 8482,
          154: 353,
          155: 8250,
          156: 339,
          158: 382,
          159: 376,
        };
      }),
      Pi = re((t) => {
        "use strict";
        var e =
          (t && t.__importDefault) ||
          function (a) {
            return a && a.__esModule ? a : { default: a };
          };
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = e(Bi()),
          o =
            String.fromCodePoint ||
            function (a) {
              var s = "";
              return (
                a > 65535 &&
                  ((a -= 65536),
                  (s += String.fromCharCode(((a >>> 10) & 1023) | 55296)),
                  (a = 56320 | (a & 1023))),
                (s += String.fromCharCode(a)),
                s
              );
            };
        function n(a) {
          return (a >= 55296 && a <= 57343) || a > 1114111
            ? "\uFFFD"
            : (a in r.default && (a = r.default[a]), o(a));
        }
        i(n, "decodeCodePoint"), (t.default = n);
      }),
      nn = re((t) => {
        "use strict";
        var e =
          (t && t.__importDefault) ||
          function (h) {
            return h && h.__esModule ? h : { default: h };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.decodeHTML = t.decodeHTMLStrict = t.decodeXML = void 0);
        var r = e(wn()),
          o = e(_i()),
          n = e(Cn()),
          a = e(Pi()),
          s = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
        (t.decodeXML = u(n.default)), (t.decodeHTMLStrict = u(r.default));
        function u(h) {
          var p = c(h);
          return function (d) {
            return String(d).replace(s, p);
          };
        }
        i(u, "getStrictDecoder");
        var l = i(function (h, p) {
          return h < p ? 1 : -1;
        }, "sorter");
        t.decodeHTML = (function () {
          for (
            var h = Object.keys(o.default).sort(l),
              p = Object.keys(r.default).sort(l),
              d = 0,
              b = 0;
            d < p.length;
            d++
          )
            h[b] === p[d] ? ((p[d] += ";?"), b++) : (p[d] += ";");
          var v = new RegExp("&(?:" + p.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"),
            T = c(r.default);
          function m(E) {
            return E.substr(-1) !== ";" && (E += ";"), T(E);
          }
          return (
            i(m, "replacer"),
            function (E) {
              return String(E).replace(v, m);
            }
          );
        })();
        function c(h) {
          return i(function (p) {
            if (p.charAt(1) === "#") {
              var d = p.charAt(2);
              return d === "X" || d === "x"
                ? a.default(parseInt(p.substr(3), 16))
                : a.default(parseInt(p.substr(2), 10));
            }
            return h[p.slice(1, -1)] || p;
          }, "replace");
        }
        i(c, "getReplacer");
      }),
      an = re((t) => {
        "use strict";
        var e =
          (t && t.__importDefault) ||
          function (y) {
            return y && y.__esModule ? y : { default: y };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.escapeUTF8 = t.escape = t.encodeNonAsciiHTML = t.encodeHTML = t.encodeXML = void 0);
        var r = e(Cn()),
          o = l(r.default),
          n = c(o);
        t.encodeXML = E(o);
        var a = e(wn()),
          s = l(a.default),
          u = c(s);
        (t.encodeHTML = b(s, u)), (t.encodeNonAsciiHTML = E(s));
        function l(y) {
          return Object.keys(y)
            .sort()
            .reduce(function (w, O) {
              return (w[y[O]] = "&" + O + ";"), w;
            }, {});
        }
        i(l, "getInverseObj");
        function c(y) {
          for (var w = [], O = [], F = 0, C = Object.keys(y); F < C.length; F++) {
            var R = C[F];
            R.length === 1 ? w.push("\\" + R) : O.push(R);
          }
          w.sort();
          for (var I = 0; I < w.length - 1; I++) {
            for (var B = I; B < w.length - 1 && w[B].charCodeAt(1) + 1 === w[B + 1].charCodeAt(1); )
              B += 1;
            var k = 1 + B - I;
            k < 3 || w.splice(I, k, w[I] + "-" + w[B]);
          }
          return O.unshift("[" + w.join("") + "]"), new RegExp(O.join("|"), "g");
        }
        i(c, "getInverseReplacer");
        var h =
            /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
          p =
            String.prototype.codePointAt != null
              ? function (y) {
                  return y.codePointAt(0);
                }
              : function (y) {
                  return (y.charCodeAt(0) - 55296) * 1024 + y.charCodeAt(1) - 56320 + 65536;
                };
        function d(y) {
          return "&#x" + (y.length > 1 ? p(y) : y.charCodeAt(0)).toString(16).toUpperCase() + ";";
        }
        i(d, "singleCharReplacer");
        function b(y, w) {
          return function (O) {
            return O.replace(w, function (F) {
              return y[F];
            }).replace(h, d);
          };
        }
        i(b, "getInverse");
        var v = new RegExp(n.source + "|" + h.source, "g");
        function T(y) {
          return y.replace(v, d);
        }
        i(T, "escape"), (t.escape = T);
        function m(y) {
          return y.replace(n, d);
        }
        i(m, "escapeUTF8"), (t.escapeUTF8 = m);
        function E(y) {
          return function (w) {
            return w.replace(v, function (O) {
              return y[O] || d(O);
            });
          };
        }
        i(E, "getASCIIEncoder");
      }),
      ki = re((t) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.decodeXMLStrict =
            t.decodeHTML5Strict =
            t.decodeHTML4Strict =
            t.decodeHTML5 =
            t.decodeHTML4 =
            t.decodeHTMLStrict =
            t.decodeHTML =
            t.decodeXML =
            t.encodeHTML5 =
            t.encodeHTML4 =
            t.escapeUTF8 =
            t.escape =
            t.encodeNonAsciiHTML =
            t.encodeHTML =
            t.encodeXML =
            t.encode =
            t.decodeStrict =
            t.decode =
              void 0);
        var e = nn(),
          r = an();
        function o(l, c) {
          return (!c || c <= 0 ? e.decodeXML : e.decodeHTML)(l);
        }
        i(o, "decode"), (t.decode = o);
        function n(l, c) {
          return (!c || c <= 0 ? e.decodeXML : e.decodeHTMLStrict)(l);
        }
        i(n, "decodeStrict"), (t.decodeStrict = n);
        function a(l, c) {
          return (!c || c <= 0 ? r.encodeXML : r.encodeHTML)(l);
        }
        i(a, "encode"), (t.encode = a);
        var s = an();
        Object.defineProperty(t, "encodeXML", {
          enumerable: !0,
          get: i(function () {
            return s.encodeXML;
          }, "get"),
        }),
          Object.defineProperty(t, "encodeHTML", {
            enumerable: !0,
            get: i(function () {
              return s.encodeHTML;
            }, "get"),
          }),
          Object.defineProperty(t, "encodeNonAsciiHTML", {
            enumerable: !0,
            get: i(function () {
              return s.encodeNonAsciiHTML;
            }, "get"),
          }),
          Object.defineProperty(t, "escape", {
            enumerable: !0,
            get: i(function () {
              return s.escape;
            }, "get"),
          }),
          Object.defineProperty(t, "escapeUTF8", {
            enumerable: !0,
            get: i(function () {
              return s.escapeUTF8;
            }, "get"),
          }),
          Object.defineProperty(t, "encodeHTML4", {
            enumerable: !0,
            get: i(function () {
              return s.encodeHTML;
            }, "get"),
          }),
          Object.defineProperty(t, "encodeHTML5", {
            enumerable: !0,
            get: i(function () {
              return s.encodeHTML;
            }, "get"),
          });
        var u = nn();
        Object.defineProperty(t, "decodeXML", {
          enumerable: !0,
          get: i(function () {
            return u.decodeXML;
          }, "get"),
        }),
          Object.defineProperty(t, "decodeHTML", {
            enumerable: !0,
            get: i(function () {
              return u.decodeHTML;
            }, "get"),
          }),
          Object.defineProperty(t, "decodeHTMLStrict", {
            enumerable: !0,
            get: i(function () {
              return u.decodeHTMLStrict;
            }, "get"),
          }),
          Object.defineProperty(t, "decodeHTML4", {
            enumerable: !0,
            get: i(function () {
              return u.decodeHTML;
            }, "get"),
          }),
          Object.defineProperty(t, "decodeHTML5", {
            enumerable: !0,
            get: i(function () {
              return u.decodeHTML;
            }, "get"),
          }),
          Object.defineProperty(t, "decodeHTML4Strict", {
            enumerable: !0,
            get: i(function () {
              return u.decodeHTMLStrict;
            }, "get"),
          }),
          Object.defineProperty(t, "decodeHTML5Strict", {
            enumerable: !0,
            get: i(function () {
              return u.decodeHTMLStrict;
            }, "get"),
          }),
          Object.defineProperty(t, "decodeXMLStrict", {
            enumerable: !0,
            get: i(function () {
              return u.decodeXML;
            }, "get"),
          });
      }),
      Ni = re((t, e) => {
        "use strict";
        function r(f, g) {
          if (!(f instanceof g)) throw new TypeError("Cannot call a class as a function");
        }
        i(r, "_classCallCheck");
        function o(f, g) {
          for (var A = 0; A < g.length; A++) {
            var x = g[A];
            (x.enumerable = x.enumerable || !1),
              (x.configurable = !0),
              "value" in x && (x.writable = !0),
              Object.defineProperty(f, x.key, x);
          }
        }
        i(o, "_defineProperties");
        function n(f, g, A) {
          return g && o(f.prototype, g), A && o(f, A), f;
        }
        i(n, "_createClass");
        function a(f, g) {
          var A = (typeof Symbol < "u" && f[Symbol.iterator]) || f["@@iterator"];
          if (!A) {
            if (Array.isArray(f) || (A = s(f)) || (g && f && typeof f.length == "number")) {
              A && (f = A);
              var x = 0,
                P = i(function () {}, "F");
              return {
                s: P,
                n: i(function () {
                  return x >= f.length ? { done: !0 } : { done: !1, value: f[x++] };
                }, "n"),
                e: i(function (W) {
                  throw W;
                }, "e"),
                f: P,
              };
            }
            throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
          }
          var q = !0,
            $ = !1,
            z;
          return {
            s: i(function () {
              A = A.call(f);
            }, "s"),
            n: i(function () {
              var W = A.next();
              return (q = W.done), W;
            }, "n"),
            e: i(function (W) {
              ($ = !0), (z = W);
            }, "e"),
            f: i(function () {
              try {
                !q && A.return != null && A.return();
              } finally {
                if ($) throw z;
              }
            }, "f"),
          };
        }
        i(a, "_createForOfIteratorHelper");
        function s(f, g) {
          if (f) {
            if (typeof f == "string") return u(f, g);
            var A = Object.prototype.toString.call(f).slice(8, -1);
            if (
              (A === "Object" && f.constructor && (A = f.constructor.name),
              A === "Map" || A === "Set")
            )
              return Array.from(f);
            if (A === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A))
              return u(f, g);
          }
        }
        i(s, "_unsupportedIterableToArray");
        function u(f, g) {
          (g == null || g > f.length) && (g = f.length);
          for (var A = 0, x = new Array(g); A < g; A++) x[A] = f[A];
          return x;
        }
        i(u, "_arrayLikeToArray");
        var l = ki(),
          c = { fg: "#FFF", bg: "#000", newline: !1, escapeXML: !1, stream: !1, colors: h() };
        function h() {
          var f = {
            0: "#000",
            1: "#A00",
            2: "#0A0",
            3: "#A50",
            4: "#00A",
            5: "#A0A",
            6: "#0AA",
            7: "#AAA",
            8: "#555",
            9: "#F55",
            10: "#5F5",
            11: "#FF5",
            12: "#55F",
            13: "#F5F",
            14: "#5FF",
            15: "#FFF",
          };
          return (
            y(0, 5).forEach(function (g) {
              y(0, 5).forEach(function (A) {
                y(0, 5).forEach(function (x) {
                  return p(g, A, x, f);
                });
              });
            }),
            y(0, 23).forEach(function (g) {
              var A = g + 232,
                x = d(g * 10 + 8);
              f[A] = "#" + x + x + x;
            }),
            f
          );
        }
        i(h, "getDefaultColors");
        function p(f, g, A, x) {
          var P = 16 + f * 36 + g * 6 + A,
            q = f > 0 ? f * 40 + 55 : 0,
            $ = g > 0 ? g * 40 + 55 : 0,
            z = A > 0 ? A * 40 + 55 : 0;
          x[P] = b([q, $, z]);
        }
        i(p, "setStyleColor");
        function d(f) {
          for (var g = f.toString(16); g.length < 2; ) g = "0" + g;
          return g;
        }
        i(d, "toHexString");
        function b(f) {
          var g = [],
            A = a(f),
            x;
          try {
            for (A.s(); !(x = A.n()).done; ) {
              var P = x.value;
              g.push(d(P));
            }
          } catch (q) {
            A.e(q);
          } finally {
            A.f();
          }
          return "#" + g.join("");
        }
        i(b, "toColorHexString");
        function v(f, g, A, x) {
          var P;
          return (
            g === "text"
              ? (P = F(A, x))
              : g === "display"
                ? (P = m(f, A, x))
                : g === "xterm256Foreground"
                  ? (P = I(f, x.colors[A]))
                  : g === "xterm256Background"
                    ? (P = B(f, x.colors[A]))
                    : g === "rgb" && (P = T(f, A)),
            P
          );
        }
        i(v, "generateOutput");
        function T(f, g) {
          g = g.substring(2).slice(0, -1);
          var A = +g.substr(0, 2),
            x = g.substring(5).split(";"),
            P = x
              .map(function (q) {
                return ("0" + Number(q).toString(16)).substr(-2);
              })
              .join("");
          return R(f, (A === 38 ? "color:#" : "background-color:#") + P);
        }
        i(T, "handleRgb");
        function m(f, g, A) {
          g = parseInt(g, 10);
          var x = {
              "-1": i(function () {
                return "<br/>";
              }, "_"),
              0: i(function () {
                return f.length && E(f);
              }, "_"),
              1: i(function () {
                return C(f, "b");
              }, "_"),
              3: i(function () {
                return C(f, "i");
              }, "_"),
              4: i(function () {
                return C(f, "u");
              }, "_"),
              8: i(function () {
                return R(f, "display:none");
              }, "_"),
              9: i(function () {
                return C(f, "strike");
              }, "_"),
              22: i(function () {
                return R(f, "font-weight:normal;text-decoration:none;font-style:normal");
              }, "_"),
              23: i(function () {
                return k(f, "i");
              }, "_"),
              24: i(function () {
                return k(f, "u");
              }, "_"),
              39: i(function () {
                return I(f, A.fg);
              }, "_"),
              49: i(function () {
                return B(f, A.bg);
              }, "_"),
              53: i(function () {
                return R(f, "text-decoration:overline");
              }, "_"),
            },
            P;
          return (
            x[g]
              ? (P = x[g]())
              : 4 < g && g < 7
                ? (P = C(f, "blink"))
                : 29 < g && g < 38
                  ? (P = I(f, A.colors[g - 30]))
                  : 39 < g && g < 48
                    ? (P = B(f, A.colors[g - 40]))
                    : 89 < g && g < 98
                      ? (P = I(f, A.colors[8 + (g - 90)]))
                      : 99 < g && g < 108 && (P = B(f, A.colors[8 + (g - 100)])),
            P
          );
        }
        i(m, "handleDisplay");
        function E(f) {
          var g = f.slice(0);
          return (
            (f.length = 0),
            g
              .reverse()
              .map(function (A) {
                return "</" + A + ">";
              })
              .join("")
          );
        }
        i(E, "resetStyles");
        function y(f, g) {
          for (var A = [], x = f; x <= g; x++) A.push(x);
          return A;
        }
        i(y, "range");
        function w(f) {
          return function (g) {
            return (f === null || g.category !== f) && f !== "all";
          };
        }
        i(w, "notCategory");
        function O(f) {
          f = parseInt(f, 10);
          var g = null;
          return (
            f === 0
              ? (g = "all")
              : f === 1
                ? (g = "bold")
                : 2 < f && f < 5
                  ? (g = "underline")
                  : 4 < f && f < 7
                    ? (g = "blink")
                    : f === 8
                      ? (g = "hide")
                      : f === 9
                        ? (g = "strike")
                        : (29 < f && f < 38) || f === 39 || (89 < f && f < 98)
                          ? (g = "foreground-color")
                          : ((39 < f && f < 48) || f === 49 || (99 < f && f < 108)) &&
                            (g = "background-color"),
            g
          );
        }
        i(O, "categoryForCode");
        function F(f, g) {
          return g.escapeXML ? l.encodeXML(f) : f;
        }
        i(F, "pushText");
        function C(f, g, A) {
          return (
            A || (A = ""), f.push(g), "<".concat(g).concat(A ? ' style="'.concat(A, '"') : "", ">")
          );
        }
        i(C, "pushTag");
        function R(f, g) {
          return C(f, "span", g);
        }
        i(R, "pushStyle");
        function I(f, g) {
          return C(f, "span", "color:" + g);
        }
        i(I, "pushForegroundColor");
        function B(f, g) {
          return C(f, "span", "background-color:" + g);
        }
        i(B, "pushBackgroundColor");
        function k(f, g) {
          var A;
          if ((f.slice(-1)[0] === g && (A = f.pop()), A)) return "</" + g + ">";
        }
        i(k, "closeTag");
        function M(f, g, A) {
          var x = !1,
            P = 3;
          function q() {
            return "";
          }
          i(q, "remove");
          function $(ue, le) {
            return A("xterm256Foreground", le), "";
          }
          i($, "removeXterm256Foreground");
          function z(ue, le) {
            return A("xterm256Background", le), "";
          }
          i(z, "removeXterm256Background");
          function W(ue) {
            return g.newline ? A("display", -1) : A("text", ue), "";
          }
          i(W, "newline");
          function ae(ue, le) {
            (x = !0), le.trim().length === 0 && (le = "0"), (le = le.trimRight(";").split(";"));
            var Je = a(le),
              Pr;
            try {
              for (Je.s(); !(Pr = Je.n()).done; ) {
                var ei = Pr.value;
                A("display", ei);
              }
            } catch (ti) {
              Je.e(ti);
            } finally {
              Je.f();
            }
            return "";
          }
          i(ae, "ansiMess");
          function ye(ue) {
            return A("text", ue), "";
          }
          i(ye, "realText");
          function me(ue) {
            return A("rgb", ue), "";
          }
          i(me, "rgb");
          var Ge = [
            { pattern: /^\x08+/, sub: q },
            { pattern: /^\x1b\[[012]?K/, sub: q },
            { pattern: /^\x1b\[\(B/, sub: q },
            { pattern: /^\x1b\[[34]8;2;\d+;\d+;\d+m/, sub: me },
            { pattern: /^\x1b\[38;5;(\d+)m/, sub: $ },
            { pattern: /^\x1b\[48;5;(\d+)m/, sub: z },
            { pattern: /^\n/, sub: W },
            { pattern: /^\r+\n/, sub: W },
            { pattern: /^\r/, sub: W },
            { pattern: /^\x1b\[((?:\d{1,3};?)+|)m/, sub: ae },
            { pattern: /^\x1b\[\d?J/, sub: q },
            { pattern: /^\x1b\[\d{0,3};\d{0,3}f/, sub: q },
            { pattern: /^\x1b\[?[\d;]{0,3}/, sub: q },
            { pattern: /^(([^\x1b\x08\r\n])+)/, sub: ye },
          ];
          function V(ue, le) {
            (le > P && x) || ((x = !1), (f = f.replace(ue.pattern, ue.sub)));
          }
          i(V, "process");
          var Ee = [],
            Pe = f,
            He = Pe.length;
          e: for (; He > 0; ) {
            for (var Rt = 0, Br = 0, Qa = Ge.length; Br < Qa; Rt = ++Br) {
              var Za = Ge[Rt];
              if ((V(Za, Rt), f.length !== He)) {
                He = f.length;
                continue e;
              }
            }
            if (f.length === He) break;
            Ee.push(0), (He = f.length);
          }
          return Ee;
        }
        i(M, "tokenize");
        function D(f, g, A) {
          return (
            g !== "text" &&
              ((f = f.filter(w(O(A)))), f.push({ token: g, data: A, category: O(A) })),
            f
          );
        }
        i(D, "updateStickyStack");
        var N = (function () {
          function f(g) {
            r(this, f),
              (g = g || {}),
              g.colors && (g.colors = Object.assign({}, c.colors, g.colors)),
              (this.options = Object.assign({}, c, g)),
              (this.stack = []),
              (this.stickyStack = []);
          }
          return (
            i(f, "Filter"),
            n(f, [
              {
                key: "toHtml",
                value: i(function (g) {
                  var A = this;
                  g = typeof g == "string" ? [g] : g;
                  var x = this.stack,
                    P = this.options,
                    q = [];
                  return (
                    this.stickyStack.forEach(function ($) {
                      var z = v(x, $.token, $.data, P);
                      z && q.push(z);
                    }),
                    M(g.join(""), P, function ($, z) {
                      var W = v(x, $, z, P);
                      W && q.push(W), P.stream && (A.stickyStack = D(A.stickyStack, $, z));
                    }),
                    x.length && q.push(E(x)),
                    q.join("")
                  );
                }, "toHtml"),
              },
            ]),
            f
          );
        })();
        e.exports = N;
      }),
      Q = (() => {
        let t;
        return (
          typeof window < "u"
            ? (t = window)
            : typeof globalThis < "u"
              ? (t = globalThis)
              : typeof window < "u"
                ? (t = window)
                : typeof self < "u"
                  ? (t = self)
                  : (t = {}),
          t
        );
      })();
    function Dn() {
      let t = { setHandler: i(() => {}, "setHandler"), send: i(() => {}, "send") };
      return new dt({ transport: t });
    }
    i(Dn, "mockChannel");
    var Tn = class {
      constructor() {
        (this.getChannel = i(() => {
          if (!this.channel) {
            let e = Dn();
            return this.setChannel(e), e;
          }
          return this.channel;
        }, "getChannel")),
          (this.ready = i(() => this.promise, "ready")),
          (this.hasChannel = i(() => !!this.channel, "hasChannel")),
          (this.setChannel = i((e) => {
            (this.channel = e), this.resolve();
          }, "setChannel")),
          (this.promise = new Promise((e) => {
            this.resolve = () => e(this.getChannel());
          }));
      }
    };
    i(Tn, "AddonStore");
    var Li = Tn,
      qt = "__STORYBOOK_ADDONS_PREVIEW";
    function Rn() {
      return Q[qt] || (Q[qt] = new Li()), Q[qt];
    }
    i(Rn, "getAddonsStore");
    var fe = Rn();
    function xn(t) {
      return t;
    }
    i(xn, "definePreview");
    var In = class {
      constructor() {
        (this.hookListsMap = void 0),
          (this.mountedDecorators = void 0),
          (this.prevMountedDecorators = void 0),
          (this.currentHooks = void 0),
          (this.nextHookIndex = void 0),
          (this.currentPhase = void 0),
          (this.currentEffects = void 0),
          (this.prevEffects = void 0),
          (this.currentDecoratorName = void 0),
          (this.hasUpdates = void 0),
          (this.currentContext = void 0),
          (this.renderListener = i((e) => {
            e === this.currentContext?.id &&
              (this.triggerEffects(), (this.currentContext = null), this.removeRenderListeners());
          }, "renderListener")),
          this.init();
      }
      init() {
        (this.hookListsMap = new WeakMap()),
          (this.mountedDecorators = new Set()),
          (this.prevMountedDecorators = new Set()),
          (this.currentHooks = []),
          (this.nextHookIndex = 0),
          (this.currentPhase = "NONE"),
          (this.currentEffects = []),
          (this.prevEffects = []),
          (this.currentDecoratorName = null),
          (this.hasUpdates = !1),
          (this.currentContext = null);
      }
      clean() {
        this.prevEffects.forEach((e) => {
          e.destroy && e.destroy();
        }),
          this.init(),
          this.removeRenderListeners();
      }
      getNextHook() {
        let e = this.currentHooks[this.nextHookIndex];
        return (this.nextHookIndex += 1), e;
      }
      triggerEffects() {
        this.prevEffects.forEach((e) => {
          !this.currentEffects.includes(e) && e.destroy && e.destroy();
        }),
          this.currentEffects.forEach((e) => {
            this.prevEffects.includes(e) || (e.destroy = e.create());
          }),
          (this.prevEffects = this.currentEffects),
          (this.currentEffects = []);
      }
      addRenderListeners() {
        this.removeRenderListeners(), fe.getChannel().on($e, this.renderListener);
      }
      removeRenderListeners() {
        fe.getChannel().removeListener($e, this.renderListener);
      }
    };
    i(In, "HooksContext");
    var On = In;
    function Wt(t) {
      let e = i((...r) => {
        let { hooks: o } = typeof r[0] == "function" ? r[1] : r[0],
          n = o.currentPhase,
          a = o.currentHooks,
          s = o.nextHookIndex,
          u = o.currentDecoratorName;
        (o.currentDecoratorName = t.name),
          o.prevMountedDecorators.has(t)
            ? ((o.currentPhase = "UPDATE"), (o.currentHooks = o.hookListsMap.get(t) || []))
            : ((o.currentPhase = "MOUNT"),
              (o.currentHooks = []),
              o.hookListsMap.set(t, o.currentHooks),
              o.prevMountedDecorators.add(t)),
          (o.nextHookIndex = 0);
        let l = Q.STORYBOOK_HOOKS_CONTEXT;
        Q.STORYBOOK_HOOKS_CONTEXT = o;
        let c = t(...r);
        if (
          ((Q.STORYBOOK_HOOKS_CONTEXT = l), o.currentPhase === "UPDATE" && o.getNextHook() != null)
        )
          throw new Error(
            "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
          );
        return (
          (o.currentPhase = n),
          (o.currentHooks = a),
          (o.nextHookIndex = s),
          (o.currentDecoratorName = u),
          c
        );
      }, "hookified");
      return (e.originalFn = t), e;
    }
    i(Wt, "hookify");
    var Ut = 0,
      ji = 25,
      Mi = i(
        (t) => (e, r) => {
          let o = t(
            Wt(e),
            r.map((n) => Wt(n))
          );
          return (n) => {
            let { hooks: a } = n;
            (a.prevMountedDecorators ??= new Set()),
              (a.mountedDecorators = new Set([e, ...r])),
              (a.currentContext = n),
              (a.hasUpdates = !1);
            let s = o(n);
            for (Ut = 1; a.hasUpdates; )
              if (((a.hasUpdates = !1), (a.currentEffects = []), (s = o(n)), (Ut += 1), Ut > ji))
                throw new Error(
                  "Too many re-renders. Storybook limits the number of renders to prevent an infinite loop."
                );
            return a.addRenderListeners(), s;
          };
        },
        "applyHooks"
      ),
      qi = i((t, e) => t.length === e.length && t.every((r, o) => r === e[o]), "areDepsEqual"),
      cr = i(
        () =>
          new Error(
            "Storybook preview hooks can only be called inside decorators and story functions."
          ),
        "invalidHooksError"
      );
    function dr() {
      return Q.STORYBOOK_HOOKS_CONTEXT || null;
    }
    i(dr, "getHooksContextOrNull");
    function vt() {
      let t = dr();
      if (t == null) throw cr();
      return t;
    }
    i(vt, "getHooksContextOrThrow");
    function Fn(t, e, r) {
      let o = vt();
      if (o.currentPhase === "MOUNT") {
        r != null &&
          !Array.isArray(r) &&
          j.warn(
            `${t} received a final argument that is not an array (instead, received ${r}). When specified, the final argument must be an array.`
          );
        let n = { name: t, deps: r };
        return o.currentHooks.push(n), e(n), n;
      }
      if (o.currentPhase === "UPDATE") {
        let n = o.getNextHook();
        if (n == null) throw new Error("Rendered more hooks than during the previous render.");
        return (
          n.name !== t &&
            j.warn(
              `Storybook has detected a change in the order of Hooks${o.currentDecoratorName ? ` called by ${o.currentDecoratorName}` : ""}. This will lead to bugs and errors if not fixed.`
            ),
          r != null &&
            n.deps == null &&
            j.warn(
              `${t} received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.`
            ),
          r != null &&
            n.deps != null &&
            r.length !== n.deps.length &&
            j.warn(`The final argument passed to ${t} changed size between renders. The order and size of this array must remain constant.
Previous: ${n.deps}
Incoming: ${r}`),
          (r == null || n.deps == null || !qi(r, n.deps)) && (e(n), (n.deps = r)),
          n
        );
      }
      throw cr();
    }
    i(Fn, "useHook");
    function Ke(t, e, r) {
      let { memoizedState: o } = Fn(
        t,
        (n) => {
          n.memoizedState = e();
        },
        r
      );
      return o;
    }
    i(Ke, "useMemoLike");
    function Ui(t, e) {
      return Ke("useMemo", t, e);
    }
    i(Ui, "useMemo");
    function Ye(t, e) {
      return Ke("useCallback", () => t, e);
    }
    i(Ye, "useCallback");
    function hr(t, e) {
      return Ke(t, () => ({ current: e }), []);
    }
    i(hr, "useRefLike");
    function Gi(t) {
      return hr("useRef", t);
    }
    i(Gi, "useRef");
    function _n() {
      let t = dr();
      if (t != null && t.currentPhase !== "NONE") t.hasUpdates = !0;
      else
        try {
          fe.getChannel().emit(it);
        } catch {
          j.warn("State updates of Storybook preview hooks work only in browser");
        }
    }
    i(_n, "triggerUpdate");
    function pr(t, e) {
      let r = hr(t, typeof e == "function" ? e() : e),
        o = i((n) => {
          (r.current = typeof n == "function" ? n(r.current) : n), _n();
        }, "setState");
      return [r.current, o];
    }
    i(pr, "useStateLike");
    function fr(t) {
      return pr("useState", t);
    }
    i(fr, "useState");
    function Hi(t, e, r) {
      let o = r != null ? () => r(e) : e,
        [n, a] = pr("useReducer", o);
      return [n, i((s) => a((u) => t(u, s)), "dispatch")];
    }
    i(Hi, "useReducer");
    function wt(t, e) {
      let r = vt(),
        o = Ke("useEffect", () => ({ create: t }), e);
      r.currentEffects.includes(o) || r.currentEffects.push(o);
    }
    i(wt, "useEffect");
    function Vi(t, e = []) {
      let r = fe.getChannel();
      return (
        wt(
          () => (
            Object.entries(t).forEach(([o, n]) => r.on(o, n)),
            () => {
              Object.entries(t).forEach(([o, n]) => r.removeListener(o, n));
            }
          ),
          [...Object.keys(t), ...e]
        ),
        Ye(r.emit.bind(r), [r])
      );
    }
    i(Vi, "useChannel");
    function Ct() {
      let { currentContext: t } = vt();
      if (t == null) throw cr();
      return t;
    }
    i(Ct, "useStoryContext");
    function $i(t, e) {
      let { parameters: r } = Ct();
      if (t) return r[t] ?? e;
    }
    i($i, "useParameter");
    function zi() {
      let t = fe.getChannel(),
        { id: e, args: r } = Ct(),
        o = Ye((a) => t.emit(ct, { storyId: e, updatedArgs: a }), [t, e]),
        n = Ye((a) => t.emit(st, { storyId: e, argNames: a }), [t, e]);
      return [r, o, n];
    }
    i(zi, "useArgs");
    function Wi() {
      let t = fe.getChannel(),
        { globals: e } = Ct(),
        r = Ye((o) => t.emit(lt, { globals: o }), [t]);
      return [e, r];
    }
    i(Wi, "useGlobals");
    var N0 = i(({ name: t, parameterName: e, wrapper: r, skipIfNoParametersOrOptions: o = !1 }) => {
      let n = i(
        (a) => (s, u) => {
          let l = u.parameters && u.parameters[e];
          return (l && l.disable) || (o && !a && !l)
            ? s(u)
            : r(s, u, { options: a, parameters: l });
        },
        "decorator"
      );
      return (...a) =>
        typeof a[0] == "function"
          ? n()(...a)
          : (...s) => {
              if (s.length > 1) return a.length > 1 ? n(a)(...s) : n(...a)(...s);
              throw new Error(`Passing stories directly into ${t}() is not allowed,
        instead use addDecorator(${t}) and pass options with the '${e}' parameter`);
            };
    }, "makeDecorator");
    function X(t) {
      for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
      var o = Array.from(typeof t == "string" ? [t] : t);
      o[o.length - 1] = o[o.length - 1].replace(/\r?\n([\t ]*)$/, "");
      var n = o.reduce(function (u, l) {
        var c = l.match(/\n([\t ]+|(?!\s).)/g);
        return c
          ? u.concat(
              c.map(function (h) {
                var p, d;
                return (d =
                  (p = h.match(/[\t ]/g)) === null || p === void 0 ? void 0 : p.length) !== null &&
                  d !== void 0
                  ? d
                  : 0;
              })
            )
          : u;
      }, []);
      if (n.length) {
        var a = new RegExp(
          `
[	 ]{` +
            Math.min.apply(Math, n) +
            "}",
          "g"
        );
        o = o.map(function (u) {
          return u.replace(
            a,
            `
`
          );
        });
      }
      o[0] = o[0].replace(/^\r?\n/, "");
      var s = o[0];
      return (
        e.forEach(function (u, l) {
          var c = s.match(/(?:^|\n)( *)$/),
            h = c ? c[1] : "",
            p = u;
          typeof u == "string" &&
            u.includes(`
`) &&
            (p = String(u)
              .split(
                `
`
              )
              .map(function (d, b) {
                return b === 0 ? d : "" + h + d;
              }).join(`
`)),
            (s += p + o[l + 1]);
        }),
        s
      );
    }
    i(X, "dedent");
    var Yi = X,
      sn = new Map(),
      Ki = "UNIVERSAL_STORE:",
      se = { PENDING: "PENDING", RESOLVED: "RESOLVED", REJECTED: "REJECTED" },
      Se = class _ {
        constructor(e, r) {
          if (
            ((this.debugging = !1),
            (this.listeners = new Map([["*", new Set()]])),
            (this.getState = i(
              () => (this.debug("getState", { state: this.state }), this.state),
              "getState"
            )),
            (this.subscribe = i((o, n) => {
              let a = typeof o == "function",
                s = a ? "*" : o,
                u = a ? o : n;
              if ((this.debug("subscribe", { eventType: s, listener: u }), !u))
                throw new TypeError(
                  `Missing first subscribe argument, or second if first is the event type, when subscribing to a UniversalStore with id '${this.id}'`
                );
              return (
                this.listeners.has(s) || this.listeners.set(s, new Set()),
                this.listeners.get(s).add(u),
                () => {
                  this.debug("unsubscribe", { eventType: s, listener: u }),
                    this.listeners.has(s) &&
                      (this.listeners.get(s).delete(u),
                      this.listeners.get(s)?.size === 0 && this.listeners.delete(s));
                }
              );
            }, "subscribe")),
            (this.send = i((o) => {
              if ((this.debug("send", { event: o }), this.status !== _.Status.READY))
                throw new TypeError(X`Cannot send event before store is ready. You can get the current status with store.status,
        or await store.readyPromise to wait for the store to be ready before sending events.
        ${JSON.stringify({ event: o, id: this.id, actor: this.actor, environment: this.environment }, null, 2)}`);
              this.emitToListeners(o, { actor: this.actor }),
                this.emitToChannel(o, { actor: this.actor });
            }, "send")),
            (this.debugging = e.debug ?? !1),
            !_.isInternalConstructing)
          )
            throw new TypeError(
              "UniversalStore is not constructable - use UniversalStore.create() instead"
            );
          if (
            ((_.isInternalConstructing = !1),
            (this.id = e.id),
            (this.actorId = globalThis.crypto
              ? globalThis.crypto.randomUUID()
              : Date.now().toString(36) + Math.random().toString(36).substring(2)),
            (this.actorType = e.leader ? _.ActorType.LEADER : _.ActorType.FOLLOWER),
            (this.state = e.initialState),
            (this.channelEventName = `${Ki}${this.id}`),
            this.debug("constructor", {
              options: e,
              environmentOverrides: r,
              channelEventName: this.channelEventName,
            }),
            this.actor.type === _.ActorType.LEADER)
          )
            this.syncing = { state: se.RESOLVED, promise: Promise.resolve() };
          else {
            let o,
              n,
              a = new Promise((s, u) => {
                (o = i(() => {
                  this.syncing.state === se.PENDING && ((this.syncing.state = se.RESOLVED), s());
                }, "syncingResolve")),
                  (n = i((l) => {
                    this.syncing.state === se.PENDING && ((this.syncing.state = se.REJECTED), u(l));
                  }, "syncingReject"));
              });
            this.syncing = { state: se.PENDING, promise: a, resolve: o, reject: n };
          }
          (this.getState = this.getState.bind(this)),
            (this.setState = this.setState.bind(this)),
            (this.subscribe = this.subscribe.bind(this)),
            (this.onStateChange = this.onStateChange.bind(this)),
            (this.send = this.send.bind(this)),
            (this.emitToChannel = this.emitToChannel.bind(this)),
            (this.prepareThis = this.prepareThis.bind(this)),
            (this.emitToListeners = this.emitToListeners.bind(this)),
            (this.handleChannelEvents = this.handleChannelEvents.bind(this)),
            (this.debug = this.debug.bind(this)),
            (this.channel = r?.channel ?? _.preparation.channel),
            (this.environment = r?.environment ?? _.preparation.environment),
            this.channel && this.environment
              ? this.prepareThis({ channel: this.channel, environment: this.environment })
              : _.preparation.promise.then(this.prepareThis);
        }
        static setupPreparationPromise() {
          let e,
            r,
            o = new Promise((n, a) => {
              (e = i((s) => {
                n(s);
              }, "resolveRef")),
                (r = i((...s) => {
                  a(s);
                }, "rejectRef"));
            });
          _.preparation = { resolve: e, reject: r, promise: o };
        }
        get actor() {
          return Object.freeze({
            id: this.actorId,
            type: this.actorType,
            environment: this.environment ?? _.Environment.UNKNOWN,
          });
        }
        get status() {
          if (!this.channel || !this.environment) return _.Status.UNPREPARED;
          switch (this.syncing?.state) {
            case se.PENDING:
            case void 0:
              return _.Status.SYNCING;
            case se.REJECTED:
              return _.Status.ERROR;
            case se.RESOLVED:
            default:
              return _.Status.READY;
          }
        }
        untilReady() {
          return Promise.all([_.preparation.promise, this.syncing?.promise]);
        }
        static create(e) {
          if (!e || typeof e?.id != "string")
            throw new TypeError(
              "id is required and must be a string, when creating a UniversalStore"
            );
          e.debug &&
            console.debug(
              X`[UniversalStore]
        create`,
              { options: e }
            );
          let r = sn.get(e.id);
          if (r)
            return (
              console.warn(X`UniversalStore with id "${e.id}" already exists in this environment, re-using existing.
        You should reuse the existing instance instead of trying to create a new one.`),
              r
            );
          _.isInternalConstructing = !0;
          let o = new _(e);
          return sn.set(e.id, o), o;
        }
        static __prepare(e, r) {
          (_.preparation.channel = e),
            (_.preparation.environment = r),
            _.preparation.resolve({ channel: e, environment: r });
        }
        setState(e) {
          let r = this.state,
            o = typeof e == "function" ? e(r) : e;
          if (
            (this.debug("setState", { newState: o, previousState: r, updater: e }),
            this.status !== _.Status.READY)
          )
            throw new TypeError(X`Cannot set state before store is ready. You can get the current status with store.status,
        or await store.readyPromise to wait for the store to be ready before sending events.
        ${JSON.stringify({ newState: o, id: this.id, actor: this.actor, environment: this.environment }, null, 2)}`);
          this.state = o;
          let n = { type: _.InternalEventType.SET_STATE, payload: { state: o, previousState: r } };
          this.emitToChannel(n, { actor: this.actor }),
            this.emitToListeners(n, { actor: this.actor });
        }
        onStateChange(e) {
          return (
            this.debug("onStateChange", { listener: e }),
            this.subscribe(_.InternalEventType.SET_STATE, ({ payload: r }, o) => {
              e(r.state, r.previousState, o);
            })
          );
        }
        emitToChannel(e, r) {
          this.debug("emitToChannel", { event: e, eventInfo: r, channel: this.channel }),
            this.channel?.emit(this.channelEventName, { event: e, eventInfo: r });
        }
        prepareThis({ channel: e, environment: r }) {
          (this.channel = e),
            (this.environment = r),
            this.debug("prepared", { channel: e, environment: r }),
            this.channel.on(this.channelEventName, this.handleChannelEvents),
            this.actor.type === _.ActorType.LEADER
              ? this.emitToChannel(
                  { type: _.InternalEventType.LEADER_CREATED },
                  { actor: this.actor }
                )
              : (this.emitToChannel(
                  { type: _.InternalEventType.FOLLOWER_CREATED },
                  { actor: this.actor }
                ),
                this.emitToChannel(
                  { type: _.InternalEventType.EXISTING_STATE_REQUEST },
                  { actor: this.actor }
                ),
                setTimeout(() => {
                  this.syncing.reject(
                    new TypeError(
                      `No existing state found for follower with id: '${this.id}'. Make sure a leader with the same id exists before creating a follower.`
                    )
                  );
                }, 1e3));
        }
        emitToListeners(e, r) {
          let o = this.listeners.get(e.type),
            n = this.listeners.get("*");
          this.debug("emitToListeners", {
            event: e,
            eventInfo: r,
            eventTypeListeners: o,
            everythingListeners: n,
          }),
            [...(o ?? []), ...(n ?? [])].forEach((a) => a(e, r));
        }
        handleChannelEvents(e) {
          let { event: r, eventInfo: o } = e;
          if ([o.actor.id, o.forwardingActor?.id].includes(this.actor.id)) {
            this.debug("handleChannelEvents: Ignoring event from self", { channelEvent: e });
            return;
          } else if (
            this.syncing?.state === se.PENDING &&
            r.type !== _.InternalEventType.EXISTING_STATE_RESPONSE
          ) {
            this.debug("handleChannelEvents: Ignoring event while syncing", { channelEvent: e });
            return;
          }
          if (
            (this.debug("handleChannelEvents", { channelEvent: e }),
            this.actor.type === _.ActorType.LEADER)
          ) {
            let n = !0;
            switch (r.type) {
              case _.InternalEventType.EXISTING_STATE_REQUEST:
                n = !1;
                let a = { type: _.InternalEventType.EXISTING_STATE_RESPONSE, payload: this.state };
                this.debug("handleChannelEvents: responding to existing state request", {
                  responseEvent: a,
                }),
                  this.emitToChannel(a, { actor: this.actor });
                break;
              case _.InternalEventType.LEADER_CREATED:
                (n = !1),
                  (this.syncing.state = se.REJECTED),
                  this.debug("handleChannelEvents: erroring due to second leader being created", {
                    event: r,
                  }),
                  console.error(X`Detected multiple UniversalStore leaders created with the same id "${this.id}".
            Only one leader can exists at a time, your stores are now in an invalid state.
            Leaders detected:
            this: ${JSON.stringify(this.actor, null, 2)}
            other: ${JSON.stringify(o.actor, null, 2)}`);
                break;
            }
            n &&
              (this.debug("handleChannelEvents: forwarding event", { channelEvent: e }),
              this.emitToChannel(r, { actor: o.actor, forwardingActor: this.actor }));
          }
          if (this.actor.type === _.ActorType.FOLLOWER)
            switch (r.type) {
              case _.InternalEventType.EXISTING_STATE_RESPONSE:
                if (
                  (this.debug(
                    "handleChannelEvents: Setting state from leader's existing state response",
                    { event: r }
                  ),
                  this.syncing?.state !== se.PENDING)
                )
                  break;
                this.syncing.resolve?.();
                let n = {
                  type: _.InternalEventType.SET_STATE,
                  payload: { state: r.payload, previousState: this.state },
                };
                (this.state = r.payload), this.emitToListeners(n, o);
                break;
            }
          switch (r.type) {
            case _.InternalEventType.SET_STATE:
              this.debug("handleChannelEvents: Setting state", { event: r }),
                (this.state = r.payload.state);
              break;
          }
          this.emitToListeners(r, { actor: o.actor });
        }
        debug(e, r) {
          this.debugging &&
            console.debug(
              X`[UniversalStore::${this.id}::${this.environment ?? _.Environment.UNKNOWN}]
        ${e}`,
              JSON.stringify(
                { data: r, actor: this.actor, state: this.state, status: this.status },
                null,
                2
              )
            );
        }
        static __reset() {
          _.preparation.reject(new Error("reset")),
            _.setupPreparationPromise(),
            (_.isInternalConstructing = !1);
        }
      };
    i(Se, "UniversalStore"),
      (Se.ActorType = { LEADER: "LEADER", FOLLOWER: "FOLLOWER" }),
      (Se.Environment = {
        SERVER: "SERVER",
        MANAGER: "MANAGER",
        PREVIEW: "PREVIEW",
        UNKNOWN: "UNKNOWN",
        MOCK: "MOCK",
      }),
      (Se.InternalEventType = {
        EXISTING_STATE_REQUEST: "__EXISTING_STATE_REQUEST",
        EXISTING_STATE_RESPONSE: "__EXISTING_STATE_RESPONSE",
        SET_STATE: "__SET_STATE",
        LEADER_CREATED: "__LEADER_CREATED",
        FOLLOWER_CREATED: "__FOLLOWER_CREATED",
      }),
      (Se.Status = {
        UNPREPARED: "UNPREPARED",
        SYNCING: "SYNCING",
        READY: "READY",
        ERROR: "ERROR",
      }),
      (Se.isInternalConstructing = !1),
      Se.setupPreparationPromise();
    var ft = Se;
    function Bn(t, e) {
      let r = {},
        o = Object.entries(t);
      for (let n = 0; n < o.length; n++) {
        let [a, s] = o[n];
        e(s, a) || (r[a] = s);
      }
      return r;
    }
    i(Bn, "omitBy");
    function Pn(t, e) {
      let r = {};
      for (let o = 0; o < e.length; o++) {
        let n = e[o];
        Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
      }
      return r;
    }
    i(Pn, "pick");
    function kn(t, e) {
      let r = {},
        o = Object.entries(t);
      for (let n = 0; n < o.length; n++) {
        let [a, s] = o[n];
        e(s, a) && (r[a] = s);
      }
      return r;
    }
    i(kn, "pickBy");
    function ce(t) {
      if (typeof t != "object" || t == null) return !1;
      if (Object.getPrototypeOf(t) === null) return !0;
      if (t.toString() !== "[object Object]") return !1;
      let e = t;
      for (; Object.getPrototypeOf(e) !== null; ) e = Object.getPrototypeOf(e);
      return Object.getPrototypeOf(t) === e;
    }
    i(ce, "isPlainObject");
    function _e(t, e) {
      let r = {},
        o = Object.keys(t);
      for (let n = 0; n < o.length; n++) {
        let a = o[n],
          s = t[a];
        r[a] = e(s, a, t);
      }
      return r;
    }
    i(_e, "mapValues");
    var Xi = "[object RegExp]",
      Ji = "[object String]",
      Qi = "[object Number]",
      Zi = "[object Boolean]",
      un = "[object Arguments]",
      es = "[object Symbol]",
      ts = "[object Date]",
      rs = "[object Map]",
      os = "[object Set]",
      ns = "[object Array]",
      as = "[object Function]",
      is = "[object ArrayBuffer]",
      Gt = "[object Object]",
      ss = "[object Error]",
      us = "[object DataView]",
      ls = "[object Uint8Array]",
      cs = "[object Uint8ClampedArray]",
      ds = "[object Uint16Array]",
      hs = "[object Uint32Array]",
      ps = "[object BigUint64Array]",
      fs = "[object Int8Array]",
      gs = "[object Int16Array]",
      ys = "[object Int32Array]",
      ms = "[object BigInt64Array]",
      Es = "[object Float32Array]",
      bs = "[object Float64Array]";
    function Yt(t) {
      return Object.getOwnPropertySymbols(t).filter((e) =>
        Object.prototype.propertyIsEnumerable.call(t, e)
      );
    }
    i(Yt, "getSymbols");
    function Kt(t) {
      return t == null
        ? t === void 0
          ? "[object Undefined]"
          : "[object Null]"
        : Object.prototype.toString.call(t);
    }
    i(Kt, "getTag");
    function gr(t, e) {
      if (typeof t == typeof e)
        switch (typeof t) {
          case "bigint":
          case "string":
          case "boolean":
          case "symbol":
          case "undefined":
            return t === e;
          case "number":
            return t === e || Object.is(t, e);
          case "function":
            return t === e;
          case "object":
            return de(t, e);
        }
      return de(t, e);
    }
    i(gr, "isEqual");
    function de(t, e, r) {
      if (Object.is(t, e)) return !0;
      let o = Kt(t),
        n = Kt(e);
      if ((o === un && (o = Gt), n === un && (n = Gt), o !== n)) return !1;
      switch (o) {
        case Ji:
          return t.toString() === e.toString();
        case Qi: {
          let u = t.valueOf(),
            l = e.valueOf();
          return u === l || (Number.isNaN(u) && Number.isNaN(l));
        }
        case Zi:
        case ts:
        case es:
          return Object.is(t.valueOf(), e.valueOf());
        case Xi:
          return t.source === e.source && t.flags === e.flags;
        case as:
          return t === e;
      }
      r = r ?? new Map();
      let a = r.get(t),
        s = r.get(e);
      if (a != null && s != null) return a === e;
      r.set(t, e), r.set(e, t);
      try {
        switch (o) {
          case rs: {
            if (t.size !== e.size) return !1;
            for (let [u, l] of t.entries()) if (!e.has(u) || !de(l, e.get(u), r)) return !1;
            return !0;
          }
          case os: {
            if (t.size !== e.size) return !1;
            let u = Array.from(t.values()),
              l = Array.from(e.values());
            for (let c = 0; c < u.length; c++) {
              let h = u[c],
                p = l.findIndex((d) => de(h, d, r));
              if (p === -1) return !1;
              l.splice(p, 1);
            }
            return !0;
          }
          case ns:
          case ls:
          case cs:
          case ds:
          case hs:
          case ps:
          case fs:
          case gs:
          case ys:
          case ms:
          case Es:
          case bs: {
            if (
              (typeof Buffer < "u" && Buffer.isBuffer(t) !== Buffer.isBuffer(e)) ||
              t.length !== e.length
            )
              return !1;
            for (let u = 0; u < t.length; u++) if (!de(t[u], e[u], r)) return !1;
            return !0;
          }
          case is:
            return t.byteLength !== e.byteLength ? !1 : de(new Uint8Array(t), new Uint8Array(e), r);
          case us:
            return t.byteLength !== e.byteLength || t.byteOffset !== e.byteOffset
              ? !1
              : de(t.buffer, e.buffer, r);
          case ss:
            return t.name === e.name && t.message === e.message;
          case Gt: {
            if (!(de(t.constructor, e.constructor, r) || (ce(t) && ce(e)))) return !1;
            let u = [...Object.keys(t), ...Yt(t)],
              l = [...Object.keys(e), ...Yt(e)];
            if (u.length !== l.length) return !1;
            for (let c = 0; c < u.length; c++) {
              let h = u[c],
                p = t[h];
              if (!Object.prototype.hasOwnProperty.call(e, h)) return !1;
              let d = e[h];
              if (!de(p, d, r)) return !1;
            }
            return !0;
          }
          default:
            return !1;
        }
      } finally {
        r.delete(t), r.delete(e);
      }
    }
    i(de, "areObjectsEqual");
    var j0 = i((t, e) => {
        let [r, o] = fr(e ? e(t.getState()) : t.getState());
        return (
          wt(
            () =>
              t.onStateChange((n, a) => {
                if (!e) {
                  o(n);
                  return;
                }
                let s = e(n),
                  u = e(a);
                !gr(s, u) && o(s);
              }),
            [t, o, e]
          ),
          [r, t.setState]
        );
      }, "useUniversalStore"),
      As = class Nn extends ft {
        constructor(e, r) {
          (ft.isInternalConstructing = !0),
            super({ ...e, leader: !0 }, { channel: new dt({}), environment: ft.Environment.MOCK }),
            (ft.isInternalConstructing = !1),
            typeof r?.fn == "function" &&
              ((this.testUtils = r),
              (this.getState = r.fn(this.getState)),
              (this.setState = r.fn(this.setState)),
              (this.subscribe = r.fn(this.subscribe)),
              (this.onStateChange = r.fn(this.onStateChange)),
              (this.send = r.fn(this.send)));
        }
        static create(e, r) {
          return new Nn(e, r);
        }
        unsubscribeAll() {
          if (!this.testUtils)
            throw new Error(Yi`Cannot call unsubscribeAll on a store that does not have testUtils.
        Please provide testUtils as the second argument when creating the store.`);
          let e = i((r) => {
            try {
              r.value();
            } catch {}
          }, "callReturnedUnsubscribeFn");
          this.subscribe.mock?.results.forEach(e), this.onStateChange.mock?.results.forEach(e);
        }
      };
    i(As, "MockUniversalStore");
    var Ht = Ue(An(), 1),
      je = Symbol("incompatible"),
      Xt = i((t, e) => {
        let r = e.type;
        if (t == null || !r || e.mapping) return t;
        switch (r.name) {
          case "string":
            return String(t);
          case "enum":
            return t;
          case "number":
            return Number(t);
          case "boolean":
            return String(t) === "true";
          case "array":
            return !r.value || !Array.isArray(t)
              ? je
              : t.reduce((o, n, a) => {
                  let s = Xt(n, { type: r.value });
                  return s !== je && (o[a] = s), o;
                }, new Array(t.length));
          case "object":
            return typeof t == "string" || typeof t == "number"
              ? t
              : !r.value || typeof t != "object"
                ? je
                : Object.entries(t).reduce((o, [n, a]) => {
                    let s = Xt(a, { type: r.value[n] });
                    return s === je ? o : Object.assign(o, { [n]: s });
                  }, {});
          default:
            return je;
        }
      }, "map"),
      Ss = i(
        (t, e) =>
          Object.entries(t).reduce((r, [o, n]) => {
            if (!e[o]) return r;
            let a = Xt(n, e[o]);
            return a === je ? r : Object.assign(r, { [o]: a });
          }, {}),
        "mapArgsToTypes"
      ),
      Jt = i(
        (t, e) =>
          Array.isArray(t) && Array.isArray(e)
            ? e
                .reduce((r, o, n) => ((r[n] = Jt(t[n], e[n])), r), [...t])
                .filter((r) => r !== void 0)
            : !ce(t) || !ce(e)
              ? e
              : Object.keys({ ...t, ...e }).reduce((r, o) => {
                  if (o in e) {
                    let n = Jt(t[o], e[o]);
                    n !== void 0 && (r[o] = n);
                  } else r[o] = t[o];
                  return r;
                }, {}),
        "combineArgs"
      ),
      vs = i(
        (t, e) =>
          Object.entries(e).reduce((r, [o, { options: n }]) => {
            function a() {
              return o in t && (r[o] = t[o]), r;
            }
            if ((i(a, "allowArg"), !n)) return a();
            if (!Array.isArray(n))
              return (
                Ae.error(X`
        Invalid argType: '${o}.options' should be an array.

        More info: https://storybook.js.org/docs/api/arg-types
      `),
                a()
              );
            if (n.some((p) => p && ["object", "function"].includes(typeof p)))
              return (
                Ae.error(X`
        Invalid argType: '${o}.options' should only contain primitives. Use a 'mapping' for complex values.

        More info: https://storybook.js.org/docs/writing-stories/args#mapping-to-complex-arg-values
      `),
                a()
              );
            let s = Array.isArray(t[o]),
              u = s && t[o].findIndex((p) => !n.includes(p)),
              l = s && u === -1;
            if (t[o] === void 0 || n.includes(t[o]) || l) return a();
            let c = s ? `${o}[${u}]` : o,
              h = n.map((p) => (typeof p == "string" ? `'${p}'` : String(p))).join(", ");
            return Ae.warn(`Received illegal value for '${c}'. Supported options: ${h}`), r;
          }, {}),
        "validateOptions"
      ),
      ze = Symbol("Deeply equal"),
      Et = i((t, e) => {
        if (typeof t != typeof e) return e;
        if (gr(t, e)) return ze;
        if (Array.isArray(t) && Array.isArray(e)) {
          let r = e.reduce((o, n, a) => {
            let s = Et(t[a], n);
            return s !== ze && (o[a] = s), o;
          }, new Array(e.length));
          return e.length >= t.length ? r : r.concat(new Array(t.length - e.length).fill(void 0));
        }
        return ce(t) && ce(e)
          ? Object.keys({ ...t, ...e }).reduce((r, o) => {
              let n = Et(t?.[o], e?.[o]);
              return n === ze ? r : Object.assign(r, { [o]: n });
            }, {})
          : e;
      }, "deepDiff"),
      Ln = "UNTARGETED";
    function jn({ args: t, argTypes: e }) {
      let r = {};
      return (
        Object.entries(t).forEach(([o, n]) => {
          let { target: a = Ln } = e[o] || {};
          (r[a] = r[a] || {}), (r[a][o] = n);
        }),
        r
      );
    }
    i(jn, "groupArgsByTarget");
    function Mn(t) {
      return Object.keys(t).forEach((e) => t[e] === void 0 && delete t[e]), t;
    }
    i(Mn, "deleteUndefined");
    var qn = class {
      constructor() {
        (this.initialArgsByStoryId = {}), (this.argsByStoryId = {});
      }
      get(e) {
        if (!(e in this.argsByStoryId))
          throw new Error(`No args known for ${e} -- has it been rendered yet?`);
        return this.argsByStoryId[e];
      }
      setInitial(e) {
        if (!this.initialArgsByStoryId[e.id])
          (this.initialArgsByStoryId[e.id] = e.initialArgs),
            (this.argsByStoryId[e.id] = e.initialArgs);
        else if (this.initialArgsByStoryId[e.id] !== e.initialArgs) {
          let r = Et(this.initialArgsByStoryId[e.id], this.argsByStoryId[e.id]);
          (this.initialArgsByStoryId[e.id] = e.initialArgs),
            (this.argsByStoryId[e.id] = e.initialArgs),
            r !== ze && this.updateFromDelta(e, r);
        }
      }
      updateFromDelta(e, r) {
        let o = vs(r, e.argTypes);
        this.argsByStoryId[e.id] = Jt(this.argsByStoryId[e.id], o);
      }
      updateFromPersisted(e, r) {
        let o = Ss(r, e.argTypes);
        return this.updateFromDelta(e, o);
      }
      update(e, r) {
        if (!(e in this.argsByStoryId))
          throw new Error(`No args known for ${e} -- has it been rendered yet?`);
        this.argsByStoryId[e] = Mn({ ...this.argsByStoryId[e], ...r });
      }
    };
    i(qn, "ArgsStore");
    var ws = qn,
      Un = i(
        (t = {}) =>
          Object.entries(t).reduce(
            (e, [r, { defaultValue: o }]) => (typeof o < "u" && (e[r] = o), e),
            {}
          ),
        "getValuesFromArgTypes"
      ),
      Gn = class {
        constructor({ globals: e = {}, globalTypes: r = {} }) {
          this.set({ globals: e, globalTypes: r });
        }
        set({ globals: e = {}, globalTypes: r = {} }) {
          let o = this.initialGlobals && Et(this.initialGlobals, this.globals);
          this.allowedGlobalNames = new Set([...Object.keys(e), ...Object.keys(r)]);
          let n = Un(r);
          (this.initialGlobals = { ...n, ...e }),
            (this.globals = this.initialGlobals),
            o && o !== ze && this.updateFromPersisted(o);
        }
        filterAllowedGlobals(e) {
          return Object.entries(e).reduce(
            (r, [o, n]) => (
              this.allowedGlobalNames.has(o)
                ? (r[o] = n)
                : j.warn(
                    `Attempted to set a global (${o}) that is not defined in initial globals or globalTypes`
                  ),
              r
            ),
            {}
          );
        }
        updateFromPersisted(e) {
          let r = this.filterAllowedGlobals(e);
          this.globals = { ...this.globals, ...r };
        }
        get() {
          return this.globals;
        }
        update(e) {
          this.globals = { ...this.globals, ...this.filterAllowedGlobals(e) };
        }
      };
    i(Gn, "GlobalsStore");
    var Cs = Gn,
      Ds = Ue(An(), 1),
      Ts = (0, Ds.default)(1)((t) =>
        Object.values(t).reduce((e, r) => ((e[r.importPath] = e[r.importPath] || r), e), {})
      ),
      Hn = class {
        constructor({ entries: e } = { v: 5, entries: {} }) {
          this.entries = e;
        }
        entryFromSpecifier(e) {
          let r = Object.values(this.entries);
          if (e === "*") return r[0];
          if (typeof e == "string")
            return this.entries[e] ? this.entries[e] : r.find((a) => a.id.startsWith(e));
          let { name: o, title: n } = e;
          return r.find((a) => a.name === o && a.title === n);
        }
        storyIdToEntry(e) {
          let r = this.entries[e];
          if (!r) throw new Do({ storyId: e });
          return r;
        }
        importPathToEntry(e) {
          return Ts(this.entries)[e];
        }
      };
    i(Hn, "StoryIndexStore");
    var Rs = Hn,
      xs = i((t) => (typeof t == "string" ? { name: t } : t), "normalizeType"),
      Is = i((t) => (typeof t == "string" ? { type: t } : t), "normalizeControl"),
      Os = i((t, e) => {
        let { type: r, control: o, ...n } = t,
          a = { name: e, ...n };
        return (
          r && (a.type = xs(r)),
          o ? (a.control = Is(o)) : o === !1 && (a.control = { disable: !0 }),
          a
        );
      }, "normalizeInputType"),
      bt = i((t) => _e(t, Os), "normalizeInputTypes"),
      G = i((t) => (Array.isArray(t) ? t : t ? [t] : []), "normalizeArrays"),
      Fs = X`
CSF .story annotations deprecated; annotate story functions directly:
- StoryFn.story.name => StoryFn.storyName
- StoryFn.story.(parameters|decorators) => StoryFn.(parameters|decorators)
See https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#hoisted-csf-annotations for details and codemod.
`;
    function At(t, e, r) {
      let o = e,
        n = typeof e == "function" ? e : null,
        { story: a } = o;
      a && (j.debug("deprecated story", a), he(Fs));
      let s = rn(t),
        u = (typeof o != "function" && o.name) || o.storyName || a?.name || s,
        l = [...G(o.decorators), ...G(a?.decorators)],
        c = { ...a?.parameters, ...o.parameters },
        h = { ...a?.args, ...o.args },
        p = { ...a?.argTypes, ...o.argTypes },
        d = [...G(o.loaders), ...G(a?.loaders)],
        b = [...G(o.beforeEach), ...G(a?.beforeEach)],
        v = [...G(o.experimental_afterEach), ...G(a?.experimental_afterEach)],
        { render: T, play: m, tags: E = [], globals: y = {} } = o,
        w = c.__id || tn(r.id, s);
      return {
        moduleExport: e,
        id: w,
        name: u,
        tags: E,
        decorators: l,
        parameters: c,
        args: h,
        argTypes: bt(p),
        loaders: d,
        beforeEach: b,
        experimental_afterEach: v,
        globals: y,
        ...(T && { render: T }),
        ...(n && { userStoryFn: n }),
        ...(m && { play: m }),
      };
    }
    i(At, "normalizeStory");
    function St(t, e = t.title, r) {
      let { id: o, argTypes: n } = t;
      return {
        id: Mt(o || e),
        ...t,
        title: e,
        ...(n && { argTypes: bt(n) }),
        parameters: { fileName: r, ...t.parameters },
      };
    }
    i(St, "normalizeComponentAnnotations");
    var _s = i((t) => {
        let { globals: e, globalTypes: r } = t;
        (e || r) &&
          j.error(
            "Global args/argTypes can only be set globally",
            JSON.stringify({ globals: e, globalTypes: r })
          );
      }, "checkGlobals"),
      Bs = i((t) => {
        let { options: e } = t;
        e?.storySort && j.error("The storySort option parameter can only be set globally");
      }, "checkStorySort"),
      gt = i((t) => {
        t && (_s(t), Bs(t));
      }, "checkDisallowedParameters");
    function Vn(t, e, r) {
      let { default: o, __namedExportsOrder: n, ...a } = t,
        s = Object.values(a)[0];
      if (xe(s)) {
        let c = St(s.meta.input, r, e);
        gt(c.parameters);
        let h = { meta: c, stories: {}, moduleExports: t };
        return (
          Object.keys(a).forEach((p) => {
            if (Ne(p, c)) {
              let d = At(p, a[p].input, c);
              gt(d.parameters), (h.stories[d.id] = d);
            }
          }),
          (h.projectAnnotations = s.meta.preview.composed),
          h
        );
      }
      let u = St(o, r, e);
      gt(u.parameters);
      let l = { meta: u, stories: {}, moduleExports: t };
      return (
        Object.keys(a).forEach((c) => {
          if (Ne(c, u)) {
            let h = At(c, a[c], u);
            gt(h.parameters), (l.stories[h.id] = h);
          }
        }),
        l
      );
    }
    i(Vn, "processCSFFile");
    function $n(t) {
      return t != null && zn(t).includes("mount");
    }
    i($n, "mountDestructured");
    function zn(t) {
      let e = t.toString().match(/[^(]*\(([^)]*)/);
      if (!e) return [];
      let r = Qt(e[1]);
      if (!r.length) return [];
      let o = r[0];
      return o.startsWith("{") && o.endsWith("}")
        ? Qt(o.slice(1, -1).replace(/\s/g, "")).map((n) => n.replace(/:.*|=.*/g, ""))
        : [];
    }
    i(zn, "getUsedProps");
    function Qt(t) {
      let e = [],
        r = [],
        o = 0;
      for (let a = 0; a < t.length; a++)
        if (t[a] === "{" || t[a] === "[") r.push(t[a] === "{" ? "}" : "]");
        else if (t[a] === r[r.length - 1]) r.pop();
        else if (!r.length && t[a] === ",") {
          let s = t.substring(o, a).trim();
          s && e.push(s), (o = a + 1);
        }
      let n = t.substring(o).trim();
      return n && e.push(n), e;
    }
    i(Qt, "splitByComma");
    function Wn(t, e, r) {
      let o = r(t);
      return (n) => e(o, n);
    }
    i(Wn, "decorateStory");
    function Yn({
      componentId: t,
      title: e,
      kind: r,
      id: o,
      name: n,
      story: a,
      parameters: s,
      initialArgs: u,
      argTypes: l,
      ...c
    } = {}) {
      return c;
    }
    i(Yn, "sanitizeStoryContextUpdate");
    function Kn(t, e) {
      let r = {},
        o = i(
          (a) => (s) => {
            if (!r.value) throw new Error("Decorated function called without init");
            return (r.value = { ...r.value, ...Yn(s) }), a(r.value);
          },
          "bindWithContext"
        ),
        n = e.reduce((a, s) => Wn(a, s, o), t);
      return (a) => ((r.value = a), n(a));
    }
    i(Kn, "defaultDecorateStory");
    var Be = i((...t) => {
      let e = {},
        r = t.filter(Boolean),
        o = r.reduce(
          (n, a) => (
            Object.entries(a).forEach(([s, u]) => {
              let l = n[s];
              Array.isArray(u) || typeof l > "u"
                ? (n[s] = u)
                : ce(u) && ce(l)
                  ? (e[s] = !0)
                  : typeof u < "u" && (n[s] = u);
            }),
            n
          ),
          {}
        );
      return (
        Object.keys(e).forEach((n) => {
          let a = r
            .filter(Boolean)
            .map((s) => s[n])
            .filter((s) => typeof s < "u");
          a.every((s) => ce(s)) ? (o[n] = Be(...a)) : (o[n] = a[a.length - 1]);
        }),
        o
      );
    }, "combineParameters");
    function yr(t, e, r) {
      let { moduleExport: o, id: n, name: a } = t || {},
        s = mr(t, e, r),
        u = i(async (C) => {
          let R = {};
          for (let I of [
            ...("__STORYBOOK_TEST_LOADERS__" in Q && Array.isArray(Q.__STORYBOOK_TEST_LOADERS__)
              ? [Q.__STORYBOOK_TEST_LOADERS__]
              : []),
            G(r.loaders),
            G(e.loaders),
            G(t.loaders),
          ]) {
            if (C.abortSignal.aborted) return R;
            let B = await Promise.all(I.map((k) => k(C)));
            Object.assign(R, ...B);
          }
          return R;
        }, "applyLoaders"),
        l = i(async (C) => {
          let R = new Array();
          for (let I of [...G(r.beforeEach), ...G(e.beforeEach), ...G(t.beforeEach)]) {
            if (C.abortSignal.aborted) return R;
            let B = await I(C);
            B && R.push(B);
          }
          return R;
        }, "applyBeforeEach"),
        c = i(async (C) => {
          let R = [
            ...G(r.experimental_afterEach),
            ...G(e.experimental_afterEach),
            ...G(t.experimental_afterEach),
          ].reverse();
          for (let I of R) {
            if (C.abortSignal.aborted) return;
            await I(C);
          }
        }, "applyAfterEach"),
        h = i((C) => C.originalStoryFn(C.args, C), "undecoratedStoryFn"),
        { applyDecorators: p = Kn, runStep: d } = r,
        b = [...G(t?.decorators), ...G(e?.decorators), ...G(r?.decorators)],
        v = t?.userStoryFn || t?.render || e.render || r.render,
        T = Mi(p)(h, b),
        m = i((C) => T(C), "unboundStoryFn"),
        E = t?.play ?? e?.play,
        y = $n(E);
      if (!v && !y) throw new $o({ id: n });
      let w = i((C) => async () => (await C.renderToCanvas(), C.canvas), "defaultMount"),
        O = t.mount ?? e.mount ?? r.mount ?? w,
        F = r.testingLibraryRender;
      return {
        storyGlobals: {},
        ...s,
        moduleExport: o,
        id: n,
        name: a,
        story: a,
        originalStoryFn: v,
        undecoratedStoryFn: h,
        unboundStoryFn: m,
        applyLoaders: u,
        applyBeforeEach: l,
        applyAfterEach: c,
        playFunction: E,
        runStep: d,
        mount: O,
        testingLibraryRender: F,
        renderToCanvas: r.renderToCanvas,
        usesMount: y,
      };
    }
    i(yr, "prepareStory");
    function Xn(t, e, r) {
      return { ...mr(void 0, t, e), moduleExport: r };
    }
    i(Xn, "prepareMeta");
    function mr(t, e, r) {
      let o = ["dev", "test"],
        n = Q.DOCS_OPTIONS?.autodocs === !0 ? ["autodocs"] : [],
        a = on(...o, ...n, ...(r.tags ?? []), ...(e.tags ?? []), ...(t?.tags ?? [])),
        s = Be(r.parameters, e.parameters, t?.parameters),
        { argTypesEnhancers: u = [], argsEnhancers: l = [] } = r,
        c = Be(r.argTypes, e.argTypes, t?.argTypes);
      if (t) {
        let E = t?.userStoryFn || t?.render || e.render || r.render;
        s.__isArgsStory = E && E.length > 0;
      }
      let h = { ...r.args, ...e.args, ...t?.args },
        p = { ...e.globals, ...t?.globals },
        d = {
          componentId: e.id,
          title: e.title,
          kind: e.title,
          id: t?.id || e.id,
          name: t?.name || "__meta",
          story: t?.name || "__meta",
          component: e.component,
          subcomponents: e.subcomponents,
          tags: a,
          parameters: s,
          initialArgs: h,
          argTypes: c,
          storyGlobals: p,
        };
      d.argTypes = u.reduce((E, y) => y({ ...d, argTypes: E }), d.argTypes);
      let b = { ...h };
      d.initialArgs = l.reduce((E, y) => ({ ...E, ...y({ ...d, initialArgs: E }) }), b);
      let { name: v, story: T, ...m } = d;
      return m;
    }
    i(mr, "preparePartialAnnotations");
    function Er(t) {
      let { args: e } = t,
        r = { ...t, allArgs: void 0, argsByTarget: void 0 };
      if (Q.FEATURES?.argTypeTargetsV7) {
        let a = jn(t);
        r = { ...t, allArgs: t.args, argsByTarget: a, args: a[Ln] || {} };
      }
      let o = Object.entries(r.args).reduce((a, [s, u]) => {
          if (!r.argTypes[s]?.mapping) return (a[s] = u), a;
          let l = i((c) => {
            let h = r.argTypes[s].mapping;
            return h && c in h ? h[c] : c;
          }, "mappingFn");
          return (a[s] = Array.isArray(u) ? u.map(l) : l(u)), a;
        }, {}),
        n = Object.entries(o).reduce((a, [s, u]) => {
          let l = r.argTypes[s] || {};
          return Qo(l, o, r.globals) && (a[s] = u), a;
        }, {});
      return { ...r, unmappedArgs: e, args: n };
    }
    i(Er, "prepareContext");
    var Zt = i((t, e, r) => {
        let o = typeof t;
        switch (o) {
          case "boolean":
          case "string":
          case "number":
          case "function":
          case "symbol":
            return { name: o };
          default:
            break;
        }
        return t
          ? r.has(t)
            ? (j.warn(X`
        We've detected a cycle in arg '${e}'. Args should be JSON-serializable.

        Consider using the mapping feature or fully custom args:
        - Mapping: https://storybook.js.org/docs/writing-stories/args#mapping-to-complex-arg-values
        - Custom args: https://storybook.js.org/docs/essentials/controls#fully-custom-args
      `),
              { name: "other", value: "cyclic object" })
            : (r.add(t),
              Array.isArray(t)
                ? {
                    name: "array",
                    value:
                      t.length > 0 ? Zt(t[0], e, new Set(r)) : { name: "other", value: "unknown" },
                  }
                : { name: "object", value: _e(t, (n) => Zt(n, e, new Set(r))) })
          : { name: "object", value: {} };
      }, "inferType"),
      Jn = i((t) => {
        let { id: e, argTypes: r = {}, initialArgs: o = {} } = t,
          n = _e(o, (s, u) => ({ name: u, type: Zt(s, `${e}.${u}`, new Set()) })),
          a = _e(r, (s, u) => ({ name: u }));
        return Be(n, a, r);
      }, "inferArgTypes");
    Jn.secondPass = !0;
    var ln = i((t, e) => (Array.isArray(e) ? e.includes(t) : t.match(e)), "matches"),
      Ps = i(
        (t, e, r) =>
          !e && !r
            ? t
            : t &&
              kn(t, (o, n) => {
                let a = o.name || n.toString();
                return !!(!e || ln(a, e)) && (!r || !ln(a, r));
              }),
        "filterArgTypes"
      ),
      ks = i((t, e, r) => {
        let { type: o, options: n } = t;
        if (o) {
          if (r.color && r.color.test(e)) {
            let a = o.name;
            if (a === "string") return { control: { type: "color" } };
            a !== "enum" &&
              j.warn(
                `Addon controls: Control of type color only supports string, received "${a}" instead`
              );
          }
          if (r.date && r.date.test(e)) return { control: { type: "date" } };
          switch (o.name) {
            case "array":
              return { control: { type: "object" } };
            case "boolean":
              return { control: { type: "boolean" } };
            case "string":
              return { control: { type: "text" } };
            case "number":
              return { control: { type: "number" } };
            case "enum": {
              let { value: a } = o;
              return { control: { type: a?.length <= 5 ? "radio" : "select" }, options: a };
            }
            case "function":
            case "symbol":
              return null;
            default:
              return { control: { type: n ? "select" : "object" } };
          }
        }
      }, "inferControl"),
      Qn = i((t) => {
        let {
          argTypes: e,
          parameters: {
            __isArgsStory: r,
            controls: { include: o = null, exclude: n = null, matchers: a = {} } = {},
          },
        } = t;
        if (!r) return e;
        let s = Ps(e, o, n),
          u = _e(s, (l, c) => l?.type && ks(l, c.toString(), a));
        return Be(u, s);
      }, "inferControls");
    Qn.secondPass = !0;
    function Le({
      argTypes: t,
      globalTypes: e,
      argTypesEnhancers: r,
      decorators: o,
      loaders: n,
      beforeEach: a,
      experimental_afterEach: s,
      globals: u,
      initialGlobals: l,
      ...c
    }) {
      return (
        u &&
          Object.keys(u).length > 0 &&
          he(X`
      The preview.js 'globals' field is deprecated and will be removed in Storybook 9.0.
      Please use 'initialGlobals' instead. Learn more:

      https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#previewjs-globals-renamed-to-initialglobals
    `),
        {
          ...(t && { argTypes: bt(t) }),
          ...(e && { globalTypes: bt(e) }),
          decorators: G(o),
          loaders: G(n),
          beforeEach: G(a),
          experimental_afterEach: G(s),
          argTypesEnhancers: [...(r || []), Jn, Qn],
          initialGlobals: Be(l, u),
          ...c,
        }
      );
    }
    i(Le, "normalizeProjectAnnotations");
    var Ns = i(
      (t) => async () => {
        let e = [];
        for (let r of t) {
          let o = await r();
          o && e.unshift(o);
        }
        return async () => {
          for (let r of e) await r();
        };
      },
      "composeBeforeAllHooks"
    );
    function Zn(t) {
      return async (e, r, o) => {
        await t.reduceRight(
          (n, a) => async () => a(e, n, o),
          async () => r(o)
        )();
      };
    }
    i(Zn, "composeStepRunners");
    function qe(t, e) {
      return t.map((r) => r.default?.[e] ?? r[e]).filter(Boolean);
    }
    i(qe, "getField");
    function pe(t, e, r = {}) {
      return qe(t, e).reduce((o, n) => {
        let a = G(n);
        return r.reverseFileOrder ? [...a, ...o] : [...o, ...a];
      }, []);
    }
    i(pe, "getArrayField");
    function Me(t, e) {
      return Object.assign({}, ...qe(t, e));
    }
    i(Me, "getObjectField");
    function Oe(t, e) {
      return qe(t, e).pop();
    }
    i(Oe, "getSingletonField");
    function Ie(t) {
      let e = pe(t, "argTypesEnhancers"),
        r = qe(t, "runStep"),
        o = pe(t, "beforeAll");
      return {
        parameters: Be(...qe(t, "parameters")),
        decorators: pe(t, "decorators", {
          reverseFileOrder: !(Q.FEATURES?.legacyDecoratorFileOrder ?? !1),
        }),
        args: Me(t, "args"),
        argsEnhancers: pe(t, "argsEnhancers"),
        argTypes: Me(t, "argTypes"),
        argTypesEnhancers: [...e.filter((n) => !n.secondPass), ...e.filter((n) => n.secondPass)],
        globals: Me(t, "globals"),
        initialGlobals: Me(t, "initialGlobals"),
        globalTypes: Me(t, "globalTypes"),
        loaders: pe(t, "loaders"),
        beforeAll: Ns(o),
        beforeEach: pe(t, "beforeEach"),
        experimental_afterEach: pe(t, "experimental_afterEach"),
        render: Oe(t, "render"),
        renderToCanvas: Oe(t, "renderToCanvas"),
        renderToDOM: Oe(t, "renderToDOM"),
        applyDecorators: Oe(t, "applyDecorators"),
        runStep: Zn(r),
        tags: pe(t, "tags"),
        mount: Oe(t, "mount"),
        testingLibraryRender: Oe(t, "testingLibraryRender"),
      };
    }
    i(Ie, "composeConfigs");
    var ea = class {
      constructor() {
        this.reports = [];
      }
      async addReport(e) {
        this.reports.push(e);
      }
    };
    i(ea, "ReporterAPI");
    var ta = ea;
    function ra(t, e, r) {
      return xe(t)
        ? { story: t.input, meta: t.meta.input, preview: t.meta.preview.composed }
        : { story: t, meta: e, preview: r };
    }
    i(ra, "getCsfFactoryAnnotations");
    function Ls(t) {
      globalThis.defaultProjectAnnotations = t;
    }
    i(Ls, "setDefaultProjectAnnotations");
    var js = "ComposedStory",
      Ms = "Unnamed Story";
    function oa(t) {
      return t ? Ie([t]) : {};
    }
    i(oa, "extractAnnotation");
    function qs(t) {
      let e = Array.isArray(t) ? t : [t];
      return (
        (globalThis.globalProjectAnnotations = Ie([
          globalThis.defaultProjectAnnotations ?? {},
          Ie(e.map(oa)),
        ])),
        globalThis.globalProjectAnnotations ?? {}
      );
    }
    i(qs, "setProjectAnnotations");
    var ve = [];
    function na(t, e, r, o, n) {
      if (t === void 0) throw new Error("Expected a story but received undefined.");
      e.title = e.title ?? js;
      let a = St(e),
        s = n || t.storyName || t.story?.name || t.name || Ms,
        u = At(s, t, a),
        l = Le(Ie([o ?? globalThis.globalProjectAnnotations ?? {}, r ?? {}])),
        c = yr(u, a, l),
        h = { ...Un(l.globalTypes), ...l.initialGlobals, ...c.storyGlobals },
        p = new ta(),
        d = i(() => {
          let E = Er({
            hooks: new On(),
            globals: h,
            args: { ...c.initialArgs },
            viewMode: "story",
            reporting: p,
            loaded: {},
            abortSignal: new AbortController().signal,
            step: i((y, w) => c.runStep(y, w, E), "step"),
            canvasElement: null,
            canvas: {},
            globalTypes: l.globalTypes,
            ...c,
            context: null,
            mount: null,
          });
          return (
            (E.parameters.__isPortableStory = !0),
            (E.context = E),
            c.renderToCanvas &&
              (E.renderToCanvas = async () => {
                let y = await c.renderToCanvas?.(
                  {
                    componentId: c.componentId,
                    title: c.title,
                    id: c.id,
                    name: c.name,
                    tags: c.tags,
                    showMain: i(() => {}, "showMain"),
                    showError: i((w) => {
                      throw new Error(`${w.title}
${w.description}`);
                    }, "showError"),
                    showException: i((w) => {
                      throw w;
                    }, "showException"),
                    forceRemount: !0,
                    storyContext: E,
                    storyFn: i(() => c.unboundStoryFn(E), "storyFn"),
                    unboundStoryFn: c.unboundStoryFn,
                  },
                  E.canvasElement
                );
                y && ve.push(y);
              }),
            (E.mount = c.mount(E)),
            E
          );
        }, "initializeContext"),
        b,
        v = i(async (E) => {
          let y = d();
          return (
            (y.canvasElement ??= globalThis?.document?.body),
            b && (y.loaded = b.loaded),
            Object.assign(y, E),
            c.playFunction(y)
          );
        }, "play"),
        T = i((E) => {
          let y = d();
          return Object.assign(y, E), aa(c, y);
        }, "run"),
        m = c.playFunction ? v : void 0;
      return Object.assign(
        i(function (E) {
          let y = d();
          return (
            b && (y.loaded = b.loaded), (y.args = { ...y.initialArgs, ...E }), c.unboundStoryFn(y)
          );
        }, "storyFn"),
        {
          id: c.id,
          storyName: s,
          load: i(async () => {
            for (let y of [...ve].reverse()) await y();
            ve.length = 0;
            let E = d();
            (E.loaded = await c.applyLoaders(E)),
              ve.push(...(await c.applyBeforeEach(E)).filter(Boolean)),
              (b = E);
          }, "load"),
          globals: h,
          args: c.initialArgs,
          parameters: c.parameters,
          argTypes: c.argTypes,
          play: m,
          run: T,
          reporting: p,
          tags: c.tags,
        }
      );
    }
    i(na, "composeStory");
    var Us = i((t, e, r, o) => na(t, e, r, {}, o), "defaultComposeStory");
    function Gs(t, e, r = Us) {
      let { default: o, __esModule: n, __namedExportsOrder: a, ...s } = t,
        u = o;
      return Object.entries(s).reduce((l, [c, h]) => {
        let { story: p, meta: d } = ra(h);
        return !u && d && (u = d), Ne(c, u) ? Object.assign(l, { [c]: r(p, u, e, c) }) : l;
      }, {});
    }
    i(Gs, "composeStories");
    function Hs(t) {
      return t.extend({
        mount: i(async ({ mount: e, page: r }, o) => {
          await o(async (n, ...a) => {
            if (!("__pw_type" in n) || ("__pw_type" in n && n.__pw_type !== "jsx"))
              throw new Error(X`
              Portable stories in Playwright CT only work when referencing JSX elements.
              Please use JSX format for your components such as:

              instead of:
              await mount(MyComponent, { props: { foo: 'bar' } })

              do:
              await mount(<MyComponent foo="bar"/>)

              More info: https://storybook.js.org/docs/api/portable-stories-playwright
            `);
            await r.evaluate(async (u) => {
              let l = await globalThis.__pwUnwrapObject?.(u);
              return ("__pw_type" in l ? l.type : l)?.load?.();
            }, n);
            let s = await e(n, ...a);
            return (
              await r.evaluate(async (u) => {
                let l = await globalThis.__pwUnwrapObject?.(u),
                  c = "__pw_type" in l ? l.type : l,
                  h = document.querySelector("#root");
                return c?.play?.({ canvasElement: h });
              }, n),
              s
            );
          });
        }, "mount"),
      });
    }
    i(Hs, "createPlaywrightTest");
    async function aa(t, e) {
      for (let n of [...ve].reverse()) await n();
      if (((ve.length = 0), !e.canvasElement)) {
        let n = document.createElement("div");
        globalThis?.document?.body?.appendChild(n),
          (e.canvasElement = n),
          ve.push(() => {
            globalThis?.document?.body?.contains(n) && globalThis?.document?.body?.removeChild(n);
          });
      }
      if (((e.loaded = await t.applyLoaders(e)), e.abortSignal.aborted)) return;
      ve.push(...(await t.applyBeforeEach(e)).filter(Boolean));
      let r = t.playFunction,
        o = t.usesMount;
      o || (await e.mount()),
        !e.abortSignal.aborted &&
          (r &&
            (o ||
              (e.mount = async () => {
                throw new ht({ playFunction: r.toString() });
              }),
            await r(e)),
          await t.applyAfterEach(e));
    }
    i(aa, "runStory");
    function er(t, e) {
      return Bn(Pn(t, e), (r) => r === void 0);
    }
    i(er, "picky");
    var cn = 1e3,
      Vs = 1e4,
      ia = class {
        constructor(e, r, o) {
          (this.importFn = r),
            (this.getStoriesJsonData = i(() => {
              let s = this.getSetStoriesPayload(),
                u = ["fileName", "docsOnly", "framework", "__id", "__isArgsStory"];
              return {
                v: 3,
                stories: _e(s.stories, (l) => {
                  let { importPath: c } = this.storyIndex.entries[l.id];
                  return {
                    ...er(l, ["id", "name", "title"]),
                    importPath: c,
                    kind: l.title,
                    story: l.name,
                    parameters: { ...er(l.parameters, u), fileName: c },
                  };
                }),
              };
            }, "getStoriesJsonData")),
            (this.storyIndex = new Rs(e)),
            (this.projectAnnotations = Le(o));
          let { initialGlobals: n, globalTypes: a } = this.projectAnnotations;
          (this.args = new ws()),
            (this.userGlobals = new Cs({ globals: n, globalTypes: a })),
            (this.hooks = {}),
            (this.cleanupCallbacks = {}),
            (this.processCSFFileWithCache = (0, Ht.default)(cn)(Vn)),
            (this.prepareMetaWithCache = (0, Ht.default)(cn)(Xn)),
            (this.prepareStoryWithCache = (0, Ht.default)(Vs)(yr));
        }
        setProjectAnnotations(e) {
          this.projectAnnotations = Le(e);
          let { initialGlobals: r, globalTypes: o } = e;
          this.userGlobals.set({ globals: r, globalTypes: o });
        }
        async onStoriesChanged({ importFn: e, storyIndex: r }) {
          e && (this.importFn = e),
            r && (this.storyIndex.entries = r.entries),
            this.cachedCSFFiles && (await this.cacheAllCSFFiles());
        }
        async storyIdToEntry(e) {
          return this.storyIndex.storyIdToEntry(e);
        }
        async loadCSFFileByStoryId(e) {
          let { importPath: r, title: o } = this.storyIndex.storyIdToEntry(e),
            n = await this.importFn(r);
          return this.processCSFFileWithCache(n, r, o);
        }
        async loadAllCSFFiles() {
          let e = {};
          return (
            Object.entries(this.storyIndex.entries).forEach(([r, { importPath: o }]) => {
              e[o] = r;
            }),
            (
              await Promise.all(
                Object.entries(e).map(async ([r, o]) => ({
                  importPath: r,
                  csfFile: await this.loadCSFFileByStoryId(o),
                }))
              )
            ).reduce((r, { importPath: o, csfFile: n }) => ((r[o] = n), r), {})
          );
        }
        async cacheAllCSFFiles() {
          this.cachedCSFFiles = await this.loadAllCSFFiles();
        }
        preparedMetaFromCSFFile({ csfFile: e }) {
          let r = e.meta;
          return this.prepareMetaWithCache(r, this.projectAnnotations, e.moduleExports.default);
        }
        async loadStory({ storyId: e }) {
          let r = await this.loadCSFFileByStoryId(e);
          return this.storyFromCSFFile({ storyId: e, csfFile: r });
        }
        storyFromCSFFile({ storyId: e, csfFile: r }) {
          let o = r.stories[e];
          if (!o) throw new qo({ storyId: e });
          let n = r.meta,
            a = this.prepareStoryWithCache(o, n, r.projectAnnotations ?? this.projectAnnotations);
          return this.args.setInitial(a), (this.hooks[a.id] = this.hooks[a.id] || new On()), a;
        }
        componentStoriesFromCSFFile({ csfFile: e }) {
          return Object.keys(this.storyIndex.entries)
            .filter((r) => !!e.stories[r])
            .map((r) => this.storyFromCSFFile({ storyId: r, csfFile: e }));
        }
        async loadEntry(e) {
          let r = await this.storyIdToEntry(e),
            o = r.type === "docs" ? r.storiesImports : [],
            [n, ...a] = await Promise.all([
              this.importFn(r.importPath),
              ...o.map((s) => {
                let u = this.storyIndex.importPathToEntry(s);
                return this.loadCSFFileByStoryId(u.id);
              }),
            ]);
          return { entryExports: n, csfFiles: a };
        }
        getStoryContext(e, { forceInitialArgs: r = !1 } = {}) {
          let o = this.userGlobals.get(),
            { initialGlobals: n } = this.userGlobals,
            a = new ta();
          return Er({
            ...e,
            args: r ? e.initialArgs : this.args.get(e.id),
            initialGlobals: n,
            globalTypes: this.projectAnnotations.globalTypes,
            userGlobals: o,
            reporting: a,
            globals: { ...o, ...e.storyGlobals },
            hooks: this.hooks[e.id],
          });
        }
        addCleanupCallbacks(e, r) {
          this.cleanupCallbacks[e.id] = r;
        }
        async cleanupStory(e) {
          this.hooks[e.id].clean();
          let r = this.cleanupCallbacks[e.id];
          if (r) for (let o of [...r].reverse()) await o();
          delete this.cleanupCallbacks[e.id];
        }
        extract(e = { includeDocsOnly: !1 }) {
          let { cachedCSFFiles: r } = this;
          if (!r) throw new Ro();
          return Object.entries(this.storyIndex.entries).reduce(
            (o, [n, { type: a, importPath: s }]) => {
              if (a === "docs") return o;
              let u = r[s],
                l = this.storyFromCSFFile({ storyId: n, csfFile: u });
              return (
                (!e.includeDocsOnly && l.parameters.docsOnly) ||
                  (o[n] = Object.entries(l).reduce(
                    (c, [h, p]) =>
                      h === "moduleExport" || typeof p == "function"
                        ? c
                        : Array.isArray(p)
                          ? Object.assign(c, { [h]: p.slice().sort() })
                          : Object.assign(c, { [h]: p }),
                    {
                      args: l.initialArgs,
                      globals: {
                        ...this.userGlobals.initialGlobals,
                        ...this.userGlobals.globals,
                        ...l.storyGlobals,
                      },
                    }
                  )),
                o
              );
            },
            {}
          );
        }
        getSetStoriesPayload() {
          let e = this.extract({ includeDocsOnly: !0 }),
            r = Object.values(e).reduce((o, { title: n }) => ((o[n] = {}), o), {});
          return {
            v: 2,
            globals: this.userGlobals.get(),
            globalParameters: {},
            kindParameters: r,
            stories: e,
          };
        }
        raw() {
          return (
            he(
              "StoryStore.raw() is deprecated and will be removed in 9.0, please use extract() instead"
            ),
            Object.values(this.extract())
              .map(({ id: e }) => this.fromId(e))
              .filter(Boolean)
          );
        }
        fromId(e) {
          if (
            (he(
              "StoryStore.fromId() is deprecated and will be removed in 9.0, please use loadStory() instead"
            ),
            !this.cachedCSFFiles)
          )
            throw new Error("Cannot call fromId/raw() unless you call cacheAllCSFFiles() first.");
          let r;
          try {
            ({ importPath: r } = this.storyIndex.storyIdToEntry(e));
          } catch {
            return null;
          }
          let o = this.cachedCSFFiles[r],
            n = this.storyFromCSFFile({ storyId: e, csfFile: o });
          return {
            ...n,
            storyFn: i((a) => {
              let s = {
                ...this.getStoryContext(n),
                abortSignal: new AbortController().signal,
                canvasElement: null,
                loaded: {},
                step: i((u, l) => n.runStep(u, l, s), "step"),
                context: null,
                mount: null,
                canvas: {},
                viewMode: "story",
              };
              return n.unboundStoryFn({ ...s, ...a });
            }, "storyFn"),
          };
        }
      };
    i(ia, "StoryStore");
    var $s = ia;
    function sa(t) {
      return t.startsWith("\\\\?\\") ? t : t.replace(/\\/g, "/");
    }
    i(sa, "slash");
    var zs = i((t) => {
      if (t.length === 0) return t;
      let e = t[t.length - 1],
        r = e?.replace(/(?:[.](?:story|stories))?([.][^.]+)$/i, "");
      if (t.length === 1) return [r];
      let o = t[t.length - 2];
      return r && o && r.toLowerCase() === o.toLowerCase()
        ? [...t.slice(0, -2), r]
        : r && (/^(story|stories)([.][^.]+)$/i.test(e) || /^index$/i.test(r))
          ? t.slice(0, -1)
          : [...t.slice(0, -1), r];
    }, "sanitize");
    function tr(t) {
      return t
        .flatMap((e) => e.split("/"))
        .filter(Boolean)
        .join("/");
    }
    i(tr, "pathJoin");
    var Ws = i((t, e, r) => {
        let { directory: o, importPathMatcher: n, titlePrefix: a = "" } = e || {};
        typeof t == "number" &&
          Ae.warn(X`
      CSF Auto-title received a numeric fileName. This typically happens when
      webpack is mis-configured in production mode. To force webpack to produce
      filenames, set optimization.moduleIds = "named" in your webpack config.
    `);
        let s = sa(String(t));
        if (n.exec(s)) {
          if (!r) {
            let u = s.replace(o, ""),
              l = tr([a, u]).split("/");
            return (l = zs(l)), l.join("/");
          }
          return a ? tr([a, r]) : r;
        }
      }, "userOrAutoTitleFromSpecifier"),
      cE = i((t, e, r) => {
        for (let o = 0; o < e.length; o += 1) {
          let n = Ws(t, e[o], r);
          if (n) return n;
        }
        return r || void 0;
      }, "userOrAutoTitle"),
      dn = /\s*\/\s*/,
      Ys = i(
        (t = {}) =>
          (e, r) => {
            if (e.title === r.title && !t.includeNames) return 0;
            let o = t.method || "configure",
              n = t.order || [],
              a = e.title.trim().split(dn),
              s = r.title.trim().split(dn);
            t.includeNames && (a.push(e.name), s.push(r.name));
            let u = 0;
            for (; a[u] || s[u]; ) {
              if (!a[u]) return -1;
              if (!s[u]) return 1;
              let l = a[u],
                c = s[u];
              if (l !== c) {
                let p = n.indexOf(l),
                  d = n.indexOf(c),
                  b = n.indexOf("*");
                return p !== -1 || d !== -1
                  ? (p === -1 && (b !== -1 ? (p = b) : (p = n.length)),
                    d === -1 && (b !== -1 ? (d = b) : (d = n.length)),
                    p - d)
                  : o === "configure"
                    ? 0
                    : l.localeCompare(c, t.locales ? t.locales : void 0, {
                        numeric: !0,
                        sensitivity: "accent",
                      });
              }
              let h = n.indexOf(l);
              h === -1 && (h = n.indexOf("*")),
                (n = h !== -1 && Array.isArray(n[h + 1]) ? n[h + 1] : []),
                (u += 1);
            }
            return 0;
          },
        "storySort"
      ),
      Ks = i((t, e, r) => {
        if (e) {
          let o;
          typeof e == "function" ? (o = e) : (o = Ys(e)), t.sort(o);
        } else t.sort((o, n) => r.indexOf(o.importPath) - r.indexOf(n.importPath));
        return t;
      }, "sortStoriesCommon"),
      dE = i((t, e, r) => {
        try {
          return Ks(t, e, r);
        } catch (o) {
          throw new Error(X`
    Error sorting stories with sort parameter ${e}:

    > ${o.message}
    
    Are you using a V6-style sort function in V7 mode?

    More info: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#v7-style-story-sort
  `);
        }
      }, "sortStoriesV7"),
      Dt = new Error("prepareAborted"),
      { AbortController: hn } = globalThis;
    function rr(t) {
      try {
        let { name: e = "Error", message: r = String(t), stack: o } = t;
        return { name: e, message: r, stack: o };
      } catch {
        return { name: "Error", message: String(t) };
      }
    }
    i(rr, "serializeError");
    var ua = class {
      constructor(e, r, o, n, a, s, u = { autoplay: !0, forceInitialArgs: !1 }, l) {
        (this.channel = e),
          (this.store = r),
          (this.renderToScreen = o),
          (this.callbacks = n),
          (this.id = a),
          (this.viewMode = s),
          (this.renderOptions = u),
          (this.type = "story"),
          (this.notYetRendered = !0),
          (this.rerenderEnqueued = !1),
          (this.disableKeyListeners = !1),
          (this.teardownRender = i(() => {}, "teardownRender")),
          (this.torndown = !1),
          (this.abortController = new hn()),
          l && ((this.story = l), (this.phase = "preparing"));
      }
      async runPhase(e, r, o) {
        (this.phase = r),
          this.channel.emit(be, { newPhase: this.phase, storyId: this.id }),
          o && (await o(), this.checkIfAborted(e));
      }
      checkIfAborted(e) {
        return e.aborted
          ? ((this.phase = "aborted"),
            this.channel.emit(be, { newPhase: this.phase, storyId: this.id }),
            !0)
          : !1;
      }
      async prepare() {
        if (
          (await this.runPhase(this.abortController.signal, "preparing", async () => {
            this.story = await this.store.loadStory({ storyId: this.id });
          }),
          this.abortController.signal.aborted)
        )
          throw (await this.store.cleanupStory(this.story), Dt);
      }
      isEqual(e) {
        return !!(this.id === e.id && this.story && this.story === e.story);
      }
      isPreparing() {
        return ["preparing"].includes(this.phase);
      }
      isPending() {
        return ["loading", "beforeEach", "rendering", "playing", "afterEach"].includes(this.phase);
      }
      async renderToElement(e) {
        return (this.canvasElement = e), this.render({ initial: !0, forceRemount: !0 });
      }
      storyContext() {
        if (!this.story) throw new Error("Cannot call storyContext before preparing");
        let { forceInitialArgs: e } = this.renderOptions;
        return this.store.getStoryContext(this.story, { forceInitialArgs: e });
      }
      async render({ initial: e = !1, forceRemount: r = !1 } = {}) {
        let { canvasElement: o } = this;
        if (!this.story) throw new Error("cannot render when not prepared");
        let n = this.story;
        if (!o) throw new Error("cannot render when canvasElement is unset");
        let {
          id: a,
          componentId: s,
          title: u,
          name: l,
          tags: c,
          applyLoaders: h,
          applyBeforeEach: p,
          applyAfterEach: d,
          unboundStoryFn: b,
          playFunction: v,
          runStep: T,
        } = n;
        r && !e && (this.cancelRender(), (this.abortController = new hn()));
        let m = this.abortController.signal,
          E = !1,
          y = n.usesMount;
        try {
          let w = {
            ...this.storyContext(),
            viewMode: this.viewMode,
            abortSignal: m,
            canvasElement: o,
            loaded: {},
            step: i((D, N) => T(D, N, w), "step"),
            context: null,
            canvas: {},
            renderToCanvas: i(async () => {
              let D = await this.renderToScreen(O, o);
              (this.teardownRender = D || (() => {})), (E = !0);
            }, "renderToCanvas"),
            mount: i(async (...D) => {
              this.callbacks.showStoryDuringRender?.();
              let N = null;
              return (
                await this.runPhase(m, "rendering", async () => {
                  N = await n.mount(w)(...D);
                }),
                y && (await this.runPhase(m, "playing")),
                N
              );
            }, "mount"),
          };
          w.context = w;
          let O = {
            componentId: s,
            title: u,
            kind: u,
            id: a,
            name: l,
            story: l,
            tags: c,
            ...this.callbacks,
            showError: i(
              (D) => ((this.phase = "errored"), this.callbacks.showError(D)),
              "showError"
            ),
            showException: i(
              (D) => ((this.phase = "errored"), this.callbacks.showException(D)),
              "showException"
            ),
            forceRemount: r || this.notYetRendered,
            storyContext: w,
            storyFn: i(() => b(w), "storyFn"),
            unboundStoryFn: b,
          };
          if (
            (await this.runPhase(m, "loading", async () => {
              w.loaded = await h(w);
            }),
            m.aborted)
          )
            return;
          let F = await p(w);
          if (
            (this.store.addCleanupCallbacks(n, F),
            this.checkIfAborted(m) ||
              (!E && !y && (await w.mount()), (this.notYetRendered = !1), m.aborted))
          )
            return;
          let C = this.story.parameters?.test?.dangerouslyIgnoreUnhandledErrors === !0,
            R = new Set(),
            I = i((D) => R.add("error" in D ? D.error : D.reason), "onError");
          if (this.renderOptions.autoplay && r && v && this.phase !== "errored") {
            window.addEventListener("error", I),
              window.addEventListener("unhandledrejection", I),
              (this.disableKeyListeners = !0);
            try {
              if (
                (y
                  ? await v(w)
                  : ((w.mount = async () => {
                      throw new ht({ playFunction: v.toString() });
                    }),
                    await this.runPhase(m, "playing", async () => v(w))),
                !E)
              )
                throw new Wo();
              this.checkIfAborted(m),
                !C && R.size > 0
                  ? await this.runPhase(m, "errored")
                  : await this.runPhase(m, "played");
            } catch (D) {
              if (
                (this.callbacks.showStoryDuringRender?.(),
                await this.runPhase(m, "errored", async () => {
                  this.channel.emit(so, rr(D));
                }),
                this.story.parameters.throwPlayFunctionExceptions !== !1)
              )
                throw D;
              console.error(D);
            }
            if (
              (!C && R.size > 0 && this.channel.emit(Ao, Array.from(R).map(rr)),
              (this.disableKeyListeners = !1),
              window.removeEventListener("unhandledrejection", I),
              window.removeEventListener("error", I),
              m.aborted)
            )
              return;
          }
          await this.runPhase(m, "completed", async () => this.channel.emit($e, a)),
            this.phase !== "errored" &&
              (await this.runPhase(m, "afterEach", async () => {
                await d(w);
              }));
          let B = !C && R.size > 0,
            k = w.reporting.reports.some((D) => D.status === "failed"),
            M = B || k;
          await this.runPhase(m, "finished", async () =>
            this.channel.emit(Ve, {
              storyId: a,
              status: M ? "error" : "success",
              reporters: w.reporting.reports,
            })
          );
        } catch (w) {
          (this.phase = "errored"),
            this.callbacks.showException(w),
            await this.runPhase(m, "finished", async () =>
              this.channel.emit(Ve, { storyId: a, status: "error", reporters: [] })
            );
        }
        this.rerenderEnqueued && ((this.rerenderEnqueued = !1), this.render());
      }
      async rerender() {
        if (this.isPending() && this.phase !== "playing") this.rerenderEnqueued = !0;
        else return this.render();
      }
      async remount() {
        return await this.teardown(), this.render({ forceRemount: !0 });
      }
      cancelRender() {
        this.abortController?.abort();
      }
      async teardown() {
        (this.torndown = !0),
          this.cancelRender(),
          this.story && (await this.store.cleanupStory(this.story));
        for (let e = 0; e < 3; e += 1) {
          if (!this.isPending()) {
            await this.teardownRender();
            return;
          }
          await new Promise((r) => setTimeout(r, 0));
        }
        window.location.reload(), await new Promise(() => {});
      }
    };
    i(ua, "StoryRender");
    var or = ua,
      { fetch: Xs } = Q,
      Js = "./index.json",
      la = class {
        constructor(e, r, o = fe.getChannel(), n = !0) {
          (this.importFn = e),
            (this.getProjectAnnotations = r),
            (this.channel = o),
            (this.storyRenders = []),
            (this.storeInitializationPromise = new Promise((a, s) => {
              (this.resolveStoreInitializationPromise = a),
                (this.rejectStoreInitializationPromise = s);
            })),
            n && this.initialize();
        }
        get storyStore() {
          return new Proxy(
            {},
            {
              get: i((e, r) => {
                if (this.storyStoreValue)
                  return (
                    he("Accessing the Story Store is deprecated and will be removed in 9.0"),
                    this.storyStoreValue[r]
                  );
                throw new Go();
              }, "get"),
            }
          );
        }
        async initialize() {
          this.setupListeners();
          try {
            let e = await this.getProjectAnnotationsOrRenderError();
            await this.runBeforeAllHook(e), await this.initializeWithProjectAnnotations(e);
          } catch (e) {
            this.rejectStoreInitializationPromise(e);
          }
        }
        ready() {
          return this.storeInitializationPromise;
        }
        setupListeners() {
          this.channel.on(go, this.onStoryIndexChanged.bind(this)),
            this.channel.on(lt, this.onUpdateGlobals.bind(this)),
            this.channel.on(ct, this.onUpdateArgs.bind(this)),
            this.channel.on(oo, this.onRequestArgTypesInfo.bind(this)),
            this.channel.on(st, this.onResetArgs.bind(this)),
            this.channel.on(it, this.onForceReRender.bind(this)),
            this.channel.on(io, this.onForceRemount.bind(this));
        }
        async getProjectAnnotationsOrRenderError() {
          try {
            let e = await this.getProjectAnnotations();
            if (((this.renderToCanvas = e.renderToCanvas), !this.renderToCanvas)) throw new Io();
            return e;
          } catch (e) {
            throw (this.renderPreviewEntryError("Error reading preview.js:", e), e);
          }
        }
        async initializeWithProjectAnnotations(e) {
          this.projectAnnotationsBeforeInitialization = e;
          try {
            let r = await this.getStoryIndexFromServer();
            return this.initializeWithStoryIndex(r);
          } catch (r) {
            throw (this.renderPreviewEntryError("Error loading story index:", r), r);
          }
        }
        async runBeforeAllHook(e) {
          try {
            await this.beforeAllCleanup?.(), (this.beforeAllCleanup = await e.beforeAll?.());
          } catch (r) {
            throw (this.renderPreviewEntryError("Error in beforeAll hook:", r), r);
          }
        }
        async getStoryIndexFromServer() {
          let e = await Xs(Js);
          if (e.status === 200) return e.json();
          throw new _o({ text: await e.text() });
        }
        initializeWithStoryIndex(e) {
          if (!this.projectAnnotationsBeforeInitialization)
            throw new Error(
              "Cannot call initializeWithStoryIndex until project annotations resolve"
            );
          (this.storyStoreValue = new $s(
            e,
            this.importFn,
            this.projectAnnotationsBeforeInitialization
          )),
            delete this.projectAnnotationsBeforeInitialization,
            this.setInitialGlobals(),
            this.resolveStoreInitializationPromise();
        }
        async setInitialGlobals() {
          this.emitGlobals();
        }
        emitGlobals() {
          if (!this.storyStoreValue) throw new ne({ methodName: "emitGlobals" });
          let e = {
            globals: this.storyStoreValue.userGlobals.get() || {},
            globalTypes: this.storyStoreValue.projectAnnotations.globalTypes || {},
          };
          this.channel.emit(ho, e);
        }
        async onGetProjectAnnotationsChanged({ getProjectAnnotations: e }) {
          delete this.previewEntryError, (this.getProjectAnnotations = e);
          let r = await this.getProjectAnnotationsOrRenderError();
          if ((await this.runBeforeAllHook(r), !this.storyStoreValue)) {
            await this.initializeWithProjectAnnotations(r);
            return;
          }
          this.storyStoreValue.setProjectAnnotations(r), this.emitGlobals();
        }
        async onStoryIndexChanged() {
          if (
            (delete this.previewEntryError,
            !(!this.storyStoreValue && !this.projectAnnotationsBeforeInitialization))
          )
            try {
              let e = await this.getStoryIndexFromServer();
              if (this.projectAnnotationsBeforeInitialization) {
                this.initializeWithStoryIndex(e);
                return;
              }
              await this.onStoriesChanged({ storyIndex: e });
            } catch (e) {
              throw (this.renderPreviewEntryError("Error loading story index:", e), e);
            }
        }
        async onStoriesChanged({ importFn: e, storyIndex: r }) {
          if (!this.storyStoreValue) throw new ne({ methodName: "onStoriesChanged" });
          await this.storyStoreValue.onStoriesChanged({ importFn: e, storyIndex: r });
        }
        async onUpdateGlobals({ globals: e, currentStory: r }) {
          if (
            (this.storyStoreValue || (await this.storeInitializationPromise), !this.storyStoreValue)
          )
            throw new ne({ methodName: "onUpdateGlobals" });
          if ((this.storyStoreValue.userGlobals.update(e), r)) {
            let {
              initialGlobals: o,
              storyGlobals: n,
              userGlobals: a,
              globals: s,
            } = this.storyStoreValue.getStoryContext(r);
            this.channel.emit(ke, {
              initialGlobals: o,
              userGlobals: a,
              storyGlobals: n,
              globals: s,
            });
          } else {
            let { initialGlobals: o, globals: n } = this.storyStoreValue.userGlobals;
            this.channel.emit(ke, {
              initialGlobals: o,
              userGlobals: n,
              storyGlobals: {},
              globals: n,
            });
          }
          await Promise.all(this.storyRenders.map((o) => o.rerender()));
        }
        async onUpdateArgs({ storyId: e, updatedArgs: r }) {
          if (!this.storyStoreValue) throw new ne({ methodName: "onUpdateArgs" });
          this.storyStoreValue.args.update(e, r),
            await Promise.all(
              this.storyRenders
                .filter((o) => o.id === e && !o.renderOptions.forceInitialArgs)
                .map((o) => (o.story && o.story.usesMount ? o.remount() : o.rerender()))
            ),
            this.channel.emit(po, { storyId: e, args: this.storyStoreValue.args.get(e) });
        }
        async onRequestArgTypesInfo({ id: e, payload: r }) {
          try {
            await this.storeInitializationPromise;
            let o = await this.storyStoreValue?.loadStory(r);
            this.channel.emit(Bt, {
              id: e,
              success: !0,
              payload: { argTypes: o?.argTypes || {} },
              error: null,
            });
          } catch (o) {
            this.channel.emit(Bt, { id: e, success: !1, error: o?.message });
          }
        }
        async onResetArgs({ storyId: e, argNames: r }) {
          if (!this.storyStoreValue) throw new ne({ methodName: "onResetArgs" });
          let o =
              this.storyRenders.find((a) => a.id === e)?.story ||
              (await this.storyStoreValue.loadStory({ storyId: e })),
            n = (
              r || [
                ...new Set([
                  ...Object.keys(o.initialArgs),
                  ...Object.keys(this.storyStoreValue.args.get(e)),
                ]),
              ]
            ).reduce((a, s) => ((a[s] = o.initialArgs[s]), a), {});
          await this.onUpdateArgs({ storyId: e, updatedArgs: n });
        }
        async onForceReRender() {
          await Promise.all(this.storyRenders.map((e) => e.rerender()));
        }
        async onForceRemount({ storyId: e }) {
          await Promise.all(this.storyRenders.filter((r) => r.id === e).map((r) => r.remount()));
        }
        renderStoryToElement(e, r, o, n) {
          if (!this.renderToCanvas || !this.storyStoreValue)
            throw new ne({ methodName: "renderStoryToElement" });
          let a = new or(
            this.channel,
            this.storyStoreValue,
            this.renderToCanvas,
            o,
            e.id,
            "docs",
            n,
            e
          );
          return (
            a.renderToElement(r),
            this.storyRenders.push(a),
            async () => {
              await this.teardownRender(a);
            }
          );
        }
        async teardownRender(e, { viewModeChanged: r } = {}) {
          (this.storyRenders = this.storyRenders.filter((o) => o !== e)),
            await e?.teardown?.({ viewModeChanged: r });
        }
        async loadStory({ storyId: e }) {
          if (!this.storyStoreValue) throw new ne({ methodName: "loadStory" });
          return this.storyStoreValue.loadStory({ storyId: e });
        }
        getStoryContext(e, { forceInitialArgs: r = !1 } = {}) {
          if (!this.storyStoreValue) throw new ne({ methodName: "getStoryContext" });
          return this.storyStoreValue.getStoryContext(e, { forceInitialArgs: r });
        }
        async extract(e) {
          if (!this.storyStoreValue) throw new ne({ methodName: "extract" });
          if (this.previewEntryError) throw this.previewEntryError;
          return await this.storyStoreValue.cacheAllCSFFiles(), this.storyStoreValue.extract(e);
        }
        renderPreviewEntryError(e, r) {
          (this.previewEntryError = r), j.error(e), j.error(r), this.channel.emit(no, r);
        }
      };
    i(la, "Preview");
    var Qs = la,
      Zs = !1,
      Vt = "Invariant failed";
    function yt(t, e) {
      if (!t) {
        if (Zs) throw new Error(Vt);
        var r = typeof e == "function" ? e() : e,
          o = r ? "".concat(Vt, ": ").concat(r) : Vt;
        throw new Error(o);
      }
    }
    i(yt, "invariant");
    var ca = class {
      constructor(e, r, o, n) {
        (this.channel = e),
          (this.store = r),
          (this.renderStoryToElement = o),
          (this.storyIdByName = i((a) => {
            let s = this.nameToStoryId.get(a);
            if (s) return s;
            throw new Error(`No story found with that name: ${a}`);
          }, "storyIdByName")),
          (this.componentStories = i(() => this.componentStoriesValue, "componentStories")),
          (this.componentStoriesFromCSFFile = i(
            (a) => this.store.componentStoriesFromCSFFile({ csfFile: a }),
            "componentStoriesFromCSFFile"
          )),
          (this.storyById = i((a) => {
            if (!a) {
              if (!this.primaryStory)
                throw new Error(
                  "No primary story defined for docs entry. Did you forget to use `<Meta>`?"
                );
              return this.primaryStory;
            }
            let s = this.storyIdToCSFFile.get(a);
            if (!s) throw new Error(`Called \`storyById\` for story that was never loaded: ${a}`);
            return this.store.storyFromCSFFile({ storyId: a, csfFile: s });
          }, "storyById")),
          (this.getStoryContext = i(
            (a) => ({ ...this.store.getStoryContext(a), loaded: {}, viewMode: "docs" }),
            "getStoryContext"
          )),
          (this.loadStory = i((a) => this.store.loadStory({ storyId: a }), "loadStory")),
          (this.componentStoriesValue = []),
          (this.storyIdToCSFFile = new Map()),
          (this.exportToStory = new Map()),
          (this.exportsToCSFFile = new Map()),
          (this.nameToStoryId = new Map()),
          (this.attachedCSFFiles = new Set()),
          n.forEach((a, s) => {
            this.referenceCSFFile(a);
          });
      }
      referenceCSFFile(e) {
        this.exportsToCSFFile.set(e.moduleExports, e),
          this.exportsToCSFFile.set(e.moduleExports.default, e),
          this.store.componentStoriesFromCSFFile({ csfFile: e }).forEach((r) => {
            let o = e.stories[r.id];
            this.storyIdToCSFFile.set(o.id, e), this.exportToStory.set(o.moduleExport, r);
          });
      }
      attachCSFFile(e) {
        if (!this.exportsToCSFFile.has(e.moduleExports))
          throw new Error("Cannot attach a CSF file that has not been referenced");
        this.attachedCSFFiles.has(e) ||
          (this.attachedCSFFiles.add(e),
          this.store.componentStoriesFromCSFFile({ csfFile: e }).forEach((r) => {
            this.nameToStoryId.set(r.name, r.id),
              this.componentStoriesValue.push(r),
              this.primaryStory || (this.primaryStory = r);
          }));
      }
      referenceMeta(e, r) {
        let o = this.resolveModuleExport(e);
        if (o.type !== "meta")
          throw new Error(
            "<Meta of={} /> must reference a CSF file module export or meta export. Did you mistakenly reference your component instead of your CSF file?"
          );
        r && this.attachCSFFile(o.csfFile);
      }
      get projectAnnotations() {
        let { projectAnnotations: e } = this.store;
        if (!e)
          throw new Error(
            "Can't get projectAnnotations from DocsContext before they are initialized"
          );
        return e;
      }
      resolveAttachedModuleExportType(e) {
        if (e === "story") {
          if (!this.primaryStory)
            throw new Error(
              "No primary story attached to this docs file, did you forget to use <Meta of={} />?"
            );
          return { type: "story", story: this.primaryStory };
        }
        if (this.attachedCSFFiles.size === 0)
          throw new Error(
            "No CSF file attached to this docs file, did you forget to use <Meta of={} />?"
          );
        let r = Array.from(this.attachedCSFFiles)[0];
        if (e === "meta") return { type: "meta", csfFile: r };
        let { component: o } = r.meta;
        if (!o)
          throw new Error(
            "Attached CSF file does not defined a component, did you forget to export one?"
          );
        return { type: "component", component: o };
      }
      resolveModuleExport(e) {
        let r = this.exportsToCSFFile.get(e);
        if (r) return { type: "meta", csfFile: r };
        let o = this.exportToStory.get(xe(e) ? e.input : e);
        return o ? { type: "story", story: o } : { type: "component", component: e };
      }
      resolveOf(e, r = []) {
        let o;
        if (["component", "meta", "story"].includes(e)) {
          let n = e;
          o = this.resolveAttachedModuleExportType(n);
        } else o = this.resolveModuleExport(e);
        if (r.length && !r.includes(o.type)) {
          let n = o.type === "component" ? "component or unknown" : o.type;
          throw new Error(X`Invalid value passed to the 'of' prop. The value was resolved to a '${n}' type but the only types for this block are: ${r.join(", ")}.
        - Did you pass a component to the 'of' prop when the block only supports a story or a meta?
        - ... or vice versa?
        - Did you pass a story, CSF file or meta to the 'of' prop that is not indexed, ie. is not targeted by the 'stories' globs in the main configuration?`);
        }
        switch (o.type) {
          case "component":
            return { ...o, projectAnnotations: this.projectAnnotations };
          case "meta":
            return {
              ...o,
              preparedMeta: this.store.preparedMetaFromCSFFile({ csfFile: o.csfFile }),
            };
          case "story":
          default:
            return o;
        }
      }
    };
    i(ca, "DocsContext");
    var da = ca,
      ha = class {
        constructor(e, r, o, n) {
          (this.channel = e),
            (this.store = r),
            (this.entry = o),
            (this.callbacks = n),
            (this.type = "docs"),
            (this.subtype = "csf"),
            (this.torndown = !1),
            (this.disableKeyListeners = !1),
            (this.preparing = !1),
            (this.id = o.id);
        }
        isPreparing() {
          return this.preparing;
        }
        async prepare() {
          this.preparing = !0;
          let { entryExports: e, csfFiles: r = [] } = await this.store.loadEntry(this.id);
          if (this.torndown) throw Dt;
          let { importPath: o, title: n } = this.entry,
            a = this.store.processCSFFileWithCache(e, o, n),
            s = Object.keys(a.stories)[0];
          (this.story = this.store.storyFromCSFFile({ storyId: s, csfFile: a })),
            (this.csfFiles = [a, ...r]),
            (this.preparing = !1);
        }
        isEqual(e) {
          return !!(this.id === e.id && this.story && this.story === e.story);
        }
        docsContext(e) {
          if (!this.csfFiles) throw new Error("Cannot render docs before preparing");
          let r = new da(this.channel, this.store, e, this.csfFiles);
          return this.csfFiles.forEach((o) => r.attachCSFFile(o)), r;
        }
        async renderToElement(e, r) {
          if (!this.story || !this.csfFiles) throw new Error("Cannot render docs before preparing");
          let o = this.docsContext(r),
            { docs: n } = this.story.parameters || {};
          if (!n)
            throw new Error(
              "Cannot render a story in viewMode=docs if `@storybook/addon-docs` is not installed"
            );
          let a = await n.renderer(),
            { render: s } = a,
            u = i(async () => {
              try {
                await s(o, n, e), this.channel.emit(at, this.id);
              } catch (l) {
                this.callbacks.showException(l);
              }
            }, "renderDocs");
          return (
            (this.rerender = async () => u()),
            (this.teardownRender = async ({ viewModeChanged: l }) => {
              !l || !e || a.unmount(e);
            }),
            u()
          );
        }
        async teardown({ viewModeChanged: e } = {}) {
          this.teardownRender?.({ viewModeChanged: e }), (this.torndown = !0);
        }
      };
    i(ha, "CsfDocsRender");
    var pn = ha,
      pa = class {
        constructor(e, r, o, n) {
          (this.channel = e),
            (this.store = r),
            (this.entry = o),
            (this.callbacks = n),
            (this.type = "docs"),
            (this.subtype = "mdx"),
            (this.torndown = !1),
            (this.disableKeyListeners = !1),
            (this.preparing = !1),
            (this.id = o.id);
        }
        isPreparing() {
          return this.preparing;
        }
        async prepare() {
          this.preparing = !0;
          let { entryExports: e, csfFiles: r = [] } = await this.store.loadEntry(this.id);
          if (this.torndown) throw Dt;
          (this.csfFiles = r), (this.exports = e), (this.preparing = !1);
        }
        isEqual(e) {
          return !!(this.id === e.id && this.exports && this.exports === e.exports);
        }
        docsContext(e) {
          if (!this.csfFiles) throw new Error("Cannot render docs before preparing");
          return new da(this.channel, this.store, e, this.csfFiles);
        }
        async renderToElement(e, r) {
          if (!this.exports || !this.csfFiles || !this.store.projectAnnotations)
            throw new Error("Cannot render docs before preparing");
          let o = this.docsContext(r),
            { docs: n } = this.store.projectAnnotations.parameters || {};
          if (!n)
            throw new Error(
              "Cannot render a story in viewMode=docs if `@storybook/addon-docs` is not installed"
            );
          let a = { ...n, page: this.exports.default },
            s = await n.renderer(),
            { render: u } = s,
            l = i(async () => {
              try {
                await u(o, a, e), this.channel.emit(at, this.id);
              } catch (c) {
                this.callbacks.showException(c);
              }
            }, "renderDocs");
          return (
            (this.rerender = async () => l()),
            (this.teardownRender = async ({ viewModeChanged: c } = {}) => {
              !c || !e || (s.unmount(e), (this.torndown = !0));
            }),
            l()
          );
        }
        async teardown({ viewModeChanged: e } = {}) {
          this.teardownRender?.({ viewModeChanged: e }), (this.torndown = !0);
        }
      };
    i(pa, "MdxDocsRender");
    var fn = pa,
      eu = globalThis;
    function fa(t) {
      let e = (t.composedPath && t.composedPath()[0]) || t.target;
      return /input|textarea/i.test(e.tagName) || e.getAttribute("contenteditable") !== null;
    }
    i(fa, "focusInInput");
    var ga = "attached-mdx",
      tu = "unattached-mdx";
    function ya({ tags: t }) {
      return t?.includes(tu) || t?.includes(ga);
    }
    i(ya, "isMdxEntry");
    function mt(t) {
      return t.type === "story";
    }
    i(mt, "isStoryRender");
    function ma(t) {
      return t.type === "docs";
    }
    i(ma, "isDocsRender");
    function Ea(t) {
      return ma(t) && t.subtype === "csf";
    }
    i(Ea, "isCsfDocsRender");
    var ba = class extends Qs {
      constructor(e, r, o, n) {
        super(e, r, void 0, !1),
          (this.importFn = e),
          (this.getProjectAnnotations = r),
          (this.selectionStore = o),
          (this.view = n),
          this.initialize();
      }
      setupListeners() {
        super.setupListeners(),
          (eu.onkeydown = this.onKeydown.bind(this)),
          this.channel.on(co, this.onSetCurrentStory.bind(this)),
          this.channel.on(So, this.onUpdateQueryParams.bind(this)),
          this.channel.on(uo, this.onPreloadStories.bind(this));
      }
      async setInitialGlobals() {
        if (!this.storyStoreValue) throw new ne({ methodName: "setInitialGlobals" });
        let { globals: e } = this.selectionStore.selectionSpecifier || {};
        e && this.storyStoreValue.userGlobals.updateFromPersisted(e), this.emitGlobals();
      }
      async initializeWithStoryIndex(e) {
        return await super.initializeWithStoryIndex(e), this.selectSpecifiedStory();
      }
      async selectSpecifiedStory() {
        if (!this.storyStoreValue) throw new ne({ methodName: "selectSpecifiedStory" });
        if (this.selectionStore.selection) {
          await this.renderSelection();
          return;
        }
        if (!this.selectionStore.selectionSpecifier) {
          this.renderMissingStory();
          return;
        }
        let { storySpecifier: e, args: r } = this.selectionStore.selectionSpecifier,
          o = this.storyStoreValue.storyIndex.entryFromSpecifier(e);
        if (!o) {
          e === "*"
            ? this.renderStoryLoadingException(e, new No())
            : this.renderStoryLoadingException(e, new jo({ storySpecifier: e.toString() }));
          return;
        }
        let { id: n, type: a } = o;
        this.selectionStore.setSelection({ storyId: n, viewMode: a }),
          this.channel.emit(mo, this.selectionStore.selection),
          this.channel.emit(Pt, this.selectionStore.selection),
          await this.renderSelection({ persistedArgs: r });
      }
      async onGetProjectAnnotationsChanged({ getProjectAnnotations: e }) {
        await super.onGetProjectAnnotationsChanged({ getProjectAnnotations: e }),
          this.selectionStore.selection && this.renderSelection();
      }
      async onStoriesChanged({ importFn: e, storyIndex: r }) {
        await super.onStoriesChanged({ importFn: e, storyIndex: r }),
          this.selectionStore.selection
            ? await this.renderSelection()
            : await this.selectSpecifiedStory();
      }
      onKeydown(e) {
        if (!this.storyRenders.find((r) => r.disableKeyListeners) && !fa(e)) {
          let { altKey: r, ctrlKey: o, metaKey: n, shiftKey: a, key: s, code: u, keyCode: l } = e;
          this.channel.emit(lo, {
            event: { altKey: r, ctrlKey: o, metaKey: n, shiftKey: a, key: s, code: u, keyCode: l },
          });
        }
      }
      async onSetCurrentStory(e) {
        this.selectionStore.setSelection({ viewMode: "story", ...e }),
          await this.storeInitializationPromise,
          this.channel.emit(Pt, this.selectionStore.selection),
          this.renderSelection();
      }
      onUpdateQueryParams(e) {
        this.selectionStore.setQueryParams(e);
      }
      async onUpdateGlobals({ globals: e }) {
        let r = (this.currentRender instanceof or && this.currentRender.story) || void 0;
        super.onUpdateGlobals({ globals: e, currentStory: r }),
          (this.currentRender instanceof fn || this.currentRender instanceof pn) &&
            (await this.currentRender.rerender?.());
      }
      async onUpdateArgs({ storyId: e, updatedArgs: r }) {
        super.onUpdateArgs({ storyId: e, updatedArgs: r });
      }
      async onPreloadStories({ ids: e }) {
        await this.storeInitializationPromise,
          this.storyStoreValue &&
            (await Promise.allSettled(e.map((r) => this.storyStoreValue?.loadEntry(r))));
      }
      async renderSelection({ persistedArgs: e } = {}) {
        let { renderToCanvas: r } = this;
        if (!this.storyStoreValue || !r) throw new ne({ methodName: "renderSelection" });
        let { selection: o } = this.selectionStore;
        if (!o) throw new Error("Cannot call renderSelection as no selection was made");
        let { storyId: n } = o,
          a;
        try {
          a = await this.storyStoreValue.storyIdToEntry(n);
        } catch (d) {
          this.currentRender && (await this.teardownRender(this.currentRender)),
            this.renderStoryLoadingException(n, d);
          return;
        }
        let s = this.currentSelection?.storyId !== n,
          u = this.currentRender?.type !== a.type;
        a.type === "story"
          ? this.view.showPreparingStory({ immediate: u })
          : this.view.showPreparingDocs({ immediate: u }),
          this.currentRender?.isPreparing() && (await this.teardownRender(this.currentRender));
        let l;
        a.type === "story"
          ? (l = new or(
              this.channel,
              this.storyStoreValue,
              r,
              this.mainStoryCallbacks(n),
              n,
              "story"
            ))
          : ya(a)
            ? (l = new fn(this.channel, this.storyStoreValue, a, this.mainStoryCallbacks(n)))
            : (l = new pn(this.channel, this.storyStoreValue, a, this.mainStoryCallbacks(n)));
        let c = this.currentSelection;
        this.currentSelection = o;
        let h = this.currentRender;
        this.currentRender = l;
        try {
          await l.prepare();
        } catch (d) {
          h && (await this.teardownRender(h)), d !== Dt && this.renderStoryLoadingException(n, d);
          return;
        }
        let p = !s && h && !l.isEqual(h);
        if (
          (e && mt(l) && (yt(!!l.story), this.storyStoreValue.args.updateFromPersisted(l.story, e)),
          h && !h.torndown && !s && !p && !u)
        ) {
          (this.currentRender = h), this.channel.emit(bo, n), this.view.showMain();
          return;
        }
        if (
          (h && (await this.teardownRender(h, { viewModeChanged: u })),
          c && (s || u) && this.channel.emit(ut, n),
          mt(l))
        ) {
          yt(!!l.story);
          let {
            parameters: d,
            initialArgs: b,
            argTypes: v,
            unmappedArgs: T,
            initialGlobals: m,
            userGlobals: E,
            storyGlobals: y,
            globals: w,
          } = this.storyStoreValue.getStoryContext(l.story);
          this.channel.emit(yo, { id: n, parameters: d, initialArgs: b, argTypes: v, args: T }),
            this.channel.emit(ke, {
              userGlobals: E,
              storyGlobals: y,
              globals: w,
              initialGlobals: m,
            });
        } else {
          let { parameters: d } = this.storyStoreValue.projectAnnotations,
            { initialGlobals: b, globals: v } = this.storyStoreValue.userGlobals;
          if (
            (this.channel.emit(ke, {
              globals: v,
              initialGlobals: b,
              storyGlobals: {},
              userGlobals: v,
            }),
            Ea(l) || l.entry.tags?.includes(ga))
          ) {
            if (!l.csfFiles) throw new Po({ storyId: n });
            ({ parameters: d } = this.storyStoreValue.preparedMetaFromCSFFile({
              csfFile: l.csfFiles[0],
            }));
          }
          this.channel.emit(ao, { id: n, parameters: d });
        }
        mt(l)
          ? (yt(!!l.story),
            this.storyRenders.push(l),
            this.currentRender.renderToElement(this.view.prepareForStory(l.story)))
          : this.currentRender.renderToElement(
              this.view.prepareForDocs(),
              this.renderStoryToElement.bind(this)
            );
      }
      async teardownRender(e, { viewModeChanged: r = !1 } = {}) {
        (this.storyRenders = this.storyRenders.filter((o) => o !== e)),
          await e?.teardown?.({ viewModeChanged: r });
      }
      mainStoryCallbacks(e) {
        return {
          showStoryDuringRender: i(
            () => this.view.showStoryDuringRender(),
            "showStoryDuringRender"
          ),
          showMain: i(() => this.view.showMain(), "showMain"),
          showError: i((r) => this.renderError(e, r), "showError"),
          showException: i((r) => this.renderException(e, r), "showException"),
        };
      }
      renderPreviewEntryError(e, r) {
        super.renderPreviewEntryError(e, r), this.view.showErrorDisplay(r);
      }
      renderMissingStory() {
        this.view.showNoPreview(), this.channel.emit(kt);
      }
      renderStoryLoadingException(e, r) {
        j.error(r), this.view.showErrorDisplay(r), this.channel.emit(kt, e);
      }
      renderException(e, r) {
        let { name: o = "Error", message: n = String(r), stack: a } = r;
        this.channel.emit(Eo, { name: o, message: n, stack: a }),
          this.channel.emit(be, { newPhase: "errored", storyId: e }),
          this.view.showErrorDisplay(r),
          j.error(`Error rendering story '${e}':`),
          j.error(r);
      }
      renderError(e, { title: r, description: o }) {
        j.error(`Error rendering story ${r}: ${o}`),
          this.channel.emit(fo, { title: r, description: o }),
          this.channel.emit(be, { newPhase: "errored", storyId: e }),
          this.view.showErrorDisplay({ message: r, stack: o });
      }
    };
    i(ba, "PreviewWithSelection");
    var ru = ba,
      nr = Ue(lr(), 1),
      ou = Ue(lr(), 1),
      gn = /^[a-zA-Z0-9 _-]*$/,
      Aa = /^-?[0-9]+(\.[0-9]+)?$/,
      nu = /^#([a-f0-9]{3,4}|[a-f0-9]{6}|[a-f0-9]{8})$/i,
      Sa =
        /^(rgba?|hsla?)\(([0-9]{1,3}),\s?([0-9]{1,3})%?,\s?([0-9]{1,3})%?,?\s?([0-9](\.[0-9]{1,2})?)?\)$/i,
      ar = i(
        (t = "", e) =>
          t === null || t === "" || !gn.test(t)
            ? !1
            : e == null || e instanceof Date || typeof e == "number" || typeof e == "boolean"
              ? !0
              : typeof e == "string"
                ? gn.test(e) || Aa.test(e) || nu.test(e) || Sa.test(e)
                : Array.isArray(e)
                  ? e.every((r) => ar(t, r))
                  : ce(e)
                    ? Object.entries(e).every(([r, o]) => ar(r, o))
                    : !1,
        "validateArgs"
      ),
      au = {
        delimiter: ";",
        nesting: !0,
        arrayRepeat: !0,
        arrayRepeatSyntax: "bracket",
        nestingSyntax: "js",
        valueDeserializer(t) {
          if (t.startsWith("!")) {
            if (t === "!undefined") return;
            if (t === "!null") return null;
            if (t === "!true") return !0;
            if (t === "!false") return !1;
            if (t.startsWith("!date(") && t.endsWith(")"))
              return new Date(t.replaceAll(" ", "+").slice(6, -1));
            if (t.startsWith("!hex(") && t.endsWith(")")) return `#${t.slice(5, -1)}`;
            let e = t.slice(1).match(Sa);
            if (e)
              return t.startsWith("!rgba") || t.startsWith("!RGBA")
                ? `${e[1]}(${e[2]}, ${e[3]}, ${e[4]}, ${e[5]})`
                : t.startsWith("!hsla") || t.startsWith("!HSLA")
                  ? `${e[1]}(${e[2]}, ${e[3]}%, ${e[4]}%, ${e[5]})`
                  : t.startsWith("!rgb") || t.startsWith("!RGB")
                    ? `${e[1]}(${e[2]}, ${e[3]}, ${e[4]})`
                    : `${e[1]}(${e[2]}, ${e[3]}%, ${e[4]}%)`;
          }
          return Aa.test(t) ? Number(t) : t;
        },
      },
      yn = i((t) => {
        let e = t.split(";").map((r) => r.replace("=", "~").replace(":", "="));
        return Object.entries((0, ou.parse)(e.join(";"), au)).reduce(
          (r, [o, n]) =>
            ar(o, n)
              ? Object.assign(r, { [o]: n })
              : (Ae.warn(X`
      Omitted potentially unsafe URL args.

      More info: https://storybook.js.org/docs/writing-stories/args#setting-args-through-the-url
    `),
                r),
          {}
        );
      }, "parseArgsParam"),
      { history: va, document: we } = Q;
    function wa(t) {
      let e = (t || "").match(/^\/story\/(.+)/);
      if (!e) throw new Error(`Invalid path '${t}',  must start with '/story/'`);
      return e[1];
    }
    i(wa, "pathToId");
    var Ca = i(({ selection: t, extraParams: e }) => {
        let r = we?.location.search.slice(1),
          { path: o, selectedKind: n, selectedStory: a, ...s } = (0, nr.parse)(r);
        return `?${(0, nr.stringify)({ ...s, ...e, ...(t && { id: t.storyId, viewMode: t.viewMode }) })}`;
      }, "getQueryString"),
      iu = i((t) => {
        if (!t) return;
        let e = Ca({ selection: t }),
          { hash: r = "" } = we.location;
        (we.title = t.storyId), va.replaceState({}, "", `${we.location.pathname}${e}${r}`);
      }, "setPath"),
      su = i((t) => t != null && typeof t == "object" && Array.isArray(t) === !1, "isObject"),
      We = i((t) => {
        if (t !== void 0) {
          if (typeof t == "string") return t;
          if (Array.isArray(t)) return We(t[0]);
          if (su(t)) return We(Object.values(t).filter(Boolean));
        }
      }, "getFirstString"),
      uu = i(() => {
        if (typeof we < "u") {
          let t = we.location.search.slice(1),
            e = (0, nr.parse)(t),
            r = typeof e.args == "string" ? yn(e.args) : void 0,
            o = typeof e.globals == "string" ? yn(e.globals) : void 0,
            n = We(e.viewMode);
          (typeof n != "string" || !n.match(/docs|story/)) && (n = "story");
          let a = We(e.path),
            s = a ? wa(a) : We(e.id);
          if (s) return { storySpecifier: s, args: r, globals: o, viewMode: n };
        }
        return null;
      }, "getSelectionSpecifierFromPath"),
      Da = class {
        constructor() {
          this.selectionSpecifier = uu();
        }
        setSelection(e) {
          (this.selection = e), iu(this.selection);
        }
        setQueryParams(e) {
          let r = Ca({ extraParams: e }),
            { hash: o = "" } = we.location;
          va.replaceState({}, "", `${we.location.pathname}${r}${o}`);
        }
      };
    i(Da, "UrlStore");
    var lu = Da,
      cu = Ue(Ni(), 1),
      du = Ue(lr(), 1),
      { document: oe } = Q,
      mn = 100,
      Ta = ((t) => (
        (t.MAIN = "MAIN"),
        (t.NOPREVIEW = "NOPREVIEW"),
        (t.PREPARING_STORY = "PREPARING_STORY"),
        (t.PREPARING_DOCS = "PREPARING_DOCS"),
        (t.ERROR = "ERROR"),
        t
      ))(Ta || {}),
      $t = {
        PREPARING_STORY: "sb-show-preparing-story",
        PREPARING_DOCS: "sb-show-preparing-docs",
        MAIN: "sb-show-main",
        NOPREVIEW: "sb-show-nopreview",
        ERROR: "sb-show-errordisplay",
      },
      zt = {
        centered: "sb-main-centered",
        fullscreen: "sb-main-fullscreen",
        padded: "sb-main-padded",
      },
      En = new cu.default({ escapeXML: !0 }),
      Ra = class {
        constructor() {
          if (((this.testing = !1), typeof oe < "u")) {
            let { __SPECIAL_TEST_PARAMETER__: e } = (0, du.parse)(oe.location.search.slice(1));
            switch (e) {
              case "preparing-story": {
                this.showPreparingStory(), (this.testing = !0);
                break;
              }
              case "preparing-docs": {
                this.showPreparingDocs(), (this.testing = !0);
                break;
              }
              default:
            }
          }
        }
        prepareForStory(e) {
          return (
            this.showStory(),
            this.applyLayout(e.parameters.layout),
            (oe.documentElement.scrollTop = 0),
            (oe.documentElement.scrollLeft = 0),
            this.storyRoot()
          );
        }
        storyRoot() {
          return oe.getElementById("storybook-root");
        }
        prepareForDocs() {
          return (
            this.showMain(),
            this.showDocs(),
            this.applyLayout("fullscreen"),
            (oe.documentElement.scrollTop = 0),
            (oe.documentElement.scrollLeft = 0),
            this.docsRoot()
          );
        }
        docsRoot() {
          return oe.getElementById("storybook-docs");
        }
        applyLayout(e = "padded") {
          if (e === "none") {
            oe.body.classList.remove(this.currentLayoutClass), (this.currentLayoutClass = null);
            return;
          }
          this.checkIfLayoutExists(e);
          let r = zt[e];
          oe.body.classList.remove(this.currentLayoutClass),
            oe.body.classList.add(r),
            (this.currentLayoutClass = r);
        }
        checkIfLayoutExists(e) {
          zt[e] ||
            j.warn(X`
          The desired layout: ${e} is not a valid option.
          The possible options are: ${Object.keys(zt).join(", ")}, none.
        `);
        }
        showMode(e) {
          clearTimeout(this.preparingTimeout),
            Object.keys(Ta).forEach((r) => {
              r === e ? oe.body.classList.add($t[r]) : oe.body.classList.remove($t[r]);
            });
        }
        showErrorDisplay({ message: e = "", stack: r = "" }) {
          let o = e,
            n = r,
            a = e.split(`
`);
          a.length > 1 &&
            (([o] = a),
            (n = a
              .slice(1)
              .join(
                `
`
              )
              .replace(/^\n/, ""))),
            (oe.getElementById("error-message").innerHTML = En.toHtml(o)),
            (oe.getElementById("error-stack").innerHTML = En.toHtml(n)),
            this.showMode("ERROR");
        }
        showNoPreview() {
          this.testing ||
            (this.showMode("NOPREVIEW"),
            this.storyRoot()?.setAttribute("hidden", "true"),
            this.docsRoot()?.setAttribute("hidden", "true"));
        }
        showPreparingStory({ immediate: e = !1 } = {}) {
          clearTimeout(this.preparingTimeout),
            e
              ? this.showMode("PREPARING_STORY")
              : (this.preparingTimeout = setTimeout(() => this.showMode("PREPARING_STORY"), mn));
        }
        showPreparingDocs({ immediate: e = !1 } = {}) {
          clearTimeout(this.preparingTimeout),
            e
              ? this.showMode("PREPARING_DOCS")
              : (this.preparingTimeout = setTimeout(() => this.showMode("PREPARING_DOCS"), mn));
        }
        showMain() {
          this.showMode("MAIN");
        }
        showDocs() {
          this.storyRoot().setAttribute("hidden", "true"),
            this.docsRoot().removeAttribute("hidden");
        }
        showStory() {
          this.docsRoot().setAttribute("hidden", "true"),
            this.storyRoot().removeAttribute("hidden");
        }
        showStoryDuringRender() {
          oe.body.classList.add($t.MAIN);
        }
      };
    i(Ra, "WebView");
    var hu = Ra,
      pu = class extends ru {
        constructor(e, r) {
          super(e, r, new lu(), new hu()),
            (this.importFn = e),
            (this.getProjectAnnotations = r),
            (Q.__STORYBOOK_PREVIEW__ = this);
        }
      };
    i(pu, "PreviewWeb");
    var { document: Fe } = Q,
      fu = [
        "application/javascript",
        "application/ecmascript",
        "application/x-ecmascript",
        "application/x-javascript",
        "text/ecmascript",
        "text/javascript",
        "text/javascript1.0",
        "text/javascript1.1",
        "text/javascript1.2",
        "text/javascript1.3",
        "text/javascript1.4",
        "text/javascript1.5",
        "text/jscript",
        "text/livescript",
        "text/x-ecmascript",
        "text/x-javascript",
        "module",
      ],
      gu = "script",
      bn = "scripts-root";
    function ir() {
      let t = Fe.createEvent("Event");
      t.initEvent("DOMContentLoaded", !0, !0), Fe.dispatchEvent(t);
    }
    i(ir, "simulateDOMContentLoaded");
    function xa(t, e, r) {
      let o = Fe.createElement("script");
      (o.type = t.type === "module" ? "module" : "text/javascript"),
        t.src ? ((o.onload = e), (o.onerror = e), (o.src = t.src)) : (o.textContent = t.innerText),
        r ? r.appendChild(o) : Fe.head.appendChild(o),
        t.parentNode.removeChild(t),
        t.src || e();
    }
    i(xa, "insertScript");
    function br(t, e, r = 0) {
      t[r](() => {
        r++, r === t.length ? e() : br(t, e, r);
      });
    }
    i(br, "insertScriptsSequentially");
    function yu(t) {
      let e = Fe.getElementById(bn);
      e ? (e.innerHTML = "") : ((e = Fe.createElement("div")), (e.id = bn), Fe.body.appendChild(e));
      let r = Array.from(t.querySelectorAll(gu));
      if (r.length) {
        let o = [];
        r.forEach((n) => {
          let a = n.getAttribute("type");
          (!a || fu.includes(a)) && o.push((s) => xa(n, s, e));
        }),
          o.length && br(o, ir, void 0);
      } else ir();
    }
    i(yu, "simulatePageLoad");
    var Ia = (() => {
      let t;
      return (
        typeof window < "u"
          ? (t = window)
          : typeof globalThis < "u"
            ? (t = globalThis)
            : typeof window < "u"
              ? (t = window)
              : typeof self < "u"
                ? (t = self)
                : (t = {}),
        t
      );
    })();
    var Oa = "storybook/highlight",
      Fa = "storybookHighlight",
      Sr = `${Oa}/add`,
      mu = `${Oa}/reset`,
      { document: Ar } = Ia,
      Eu = (t = "#FF4785", e = "dashed") => `
  outline: 2px ${e} ${t};
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);
`,
      vr = fe.getChannel(),
      bu = (t) => {
        let e = Fa;
        wr();
        let r = Array.from(new Set(t.elements)),
          o = Ar.createElement("style");
        o.setAttribute("id", e),
          (o.innerHTML = r
            .map(
              (n) => `${n}{
          ${Eu(t.color, t.style)}
         }`
            )
            .join(" ")),
          Ar.head.appendChild(o);
      },
      wr = () => {
        let t = Fa,
          e = Ar.getElementById(t);
        e && e.parentNode?.removeChild(e);
      };
    vr.on(ut, wr);
    vr.on(mu, wr);
    vr.on(Sr, bu);
    var tb = __REACT_DOM__,
      {
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: rb,
        createPortal: ob,
        createRoot: nb,
        findDOMNode: _a,
        flushSync: ab,
        hydrate: ib,
        hydrateRoot: sb,
        render: ub,
        unmountComponentAtNode: lb,
        unstable_batchedUpdates: cb,
        unstable_renderSubtreeIntoContainer: db,
        version: hb,
      } = __REACT_DOM__;
    var ge = "storybook/a11y",
      Ba = `${ge}/panel`,
      Au = "a11y",
      Su = `${ge}/result`,
      vu = `${ge}/request`,
      wu = `${ge}/running`,
      Cu = `${ge}/error`,
      Du = `${ge}/manual`,
      Tu = "writing-tests/accessibility-testing",
      Ru = `${Tu}#why-are-my-tests-failing-in-different-environments`,
      xu = "storybook/addon-a11y/test-provider",
      Cr = { RESULT: Su, REQUEST: vu, RUNNING: wu, ERROR: Cu, MANUAL: Du },
      Iu = [ot(nt.light).color.negative, ot(nt.light).color.positive, ot(nt.light).color.warning],
      Ha = Nr({
        results: { passes: [], incomplete: [], violations: [] },
        highlighted: [],
        toggleHighlight: () => {},
        clearHighlights: () => {},
        tab: 0,
        setTab: () => {},
        setStatus: () => {},
        status: "initial",
        error: void 0,
        handleManual: () => {},
        discrepancy: null,
      }),
      Pa = { passes: [], incomplete: [], violations: [] },
      Ou = (t) => {
        let e = Xr("a11y", { manual: !1 }),
          [r] = Kr() ?? [],
          o = ie((D = !1) => (D ? "manual" : "initial"), []),
          n = Te(() => r?.a11y?.manual ?? e.manual ?? !1, [r?.a11y?.manual, e.manual]),
          a = _t(),
          [s, u] = Ft(ge, Pa),
          [l, c] = Re(0),
          [h, p] = S.useState(void 0),
          [d, b] = Re(o(n)),
          [v, T] = Re([]),
          { storyId: m } = Jr(),
          E = a.getCurrentStoryStatus(),
          y = ie((D, N) => {
            T((f) => (N ? [...f, ...D] : f.filter((g) => !D.includes(g))));
          }, []),
          w = ie(() => T([]), []),
          O = ie(
            (D) => {
              w(), c(D);
            },
            [w]
          ),
          F = ie((D) => {
            b("error"), p(D);
          }, []),
          C = ie(
            (D, N) => {
              m === N &&
                (b("ran"),
                u(D),
                setTimeout(() => {
                  d === "ran" && b("ready");
                }, 900));
            },
            [u, d, m]
          ),
          R = ie(
            ({ reporters: D }) => {
              let N = D.find((f) => f.type === "a11y");
              N && ("error" in N.result ? F(N.result.error) : C(N.result, m));
            },
            [F, C, m]
          ),
          I = ie(
            ({ newPhase: D }) => {
              D === "loading" && (u(Pa), b(n ? "manual" : "running"));
            },
            [n, u]
          ),
          B = Yr({ [Cr.RESULT]: C, [Cr.ERROR]: F, [be]: I, [Ve]: R }, [I, R, I, F, C]),
          k = ie(() => {
            b("running"), B(Cr.MANUAL, m, e);
          }, [B, e, m]);
        et(() => {
          b(o(n));
        }, [o, n]),
          et(() => {
            B(Sr, { elements: v, color: Iu[l] });
          }, [B, v, l]);
        let M = Te(() => {
          let D = E?.[xu]?.status;
          if (D) {
            if (D === "success" && s.violations.length > 0) return "cliPassedBrowserFailed";
            if (D === "error" && s.violations.length === 0) {
              if (d === "ready" || d === "ran") return "browserPassedCliFailed";
              if (d === "manual") return "cliFailedButModeManual";
            }
          }
          return null;
        }, [s.violations.length, d, E]);
        return S.createElement(Ha.Provider, {
          value: {
            results: s,
            highlighted: v,
            toggleHighlight: y,
            clearHighlights: w,
            tab: l,
            setTab: O,
            status: d,
            setStatus: b,
            error: h,
            handleManual: k,
            discrepancy: M,
          },
          ...t,
        });
      },
      Or = () => Mr(Ha),
      Fu = L.input(({ disabled: t }) => ({ cursor: t ? "not-allowed" : "pointer" }));
    function ka(t, e) {
      let r = t.filter((o) => e.includes(o.target[0])).length;
      return r === 0 ? 1 : r === t.length ? 0 : 2;
    }
    var _u = ({ toggleId: t, elementsToHighlight: e = [] }) => {
        let { toggleHighlight: r, highlighted: o } = Or(),
          n = S.useRef(null),
          [a, s] = S.useState(ka(e, o));
        S.useEffect(() => {
          let l = ka(e, o);
          n.current && (n.current.indeterminate = l === 2), s(l);
        }, [e, o]);
        let u = S.useCallback(() => {
          r(
            e.map((l) => l.target[0]),
            a !== 0
          );
        }, [e, a, r]);
        return S.createElement(Fu, {
          ref: n,
          id: t,
          type: "checkbox",
          "aria-label": "Highlight result",
          disabled: !e.length,
          onChange: u,
          checked: a === 0,
        });
      },
      Fr = _u,
      Rr = function (t, e) {
        return (
          (Rr =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (r, o) {
                r.__proto__ = o;
              }) ||
            function (r, o) {
              for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (r[n] = o[n]);
            }),
          Rr(t, e)
        );
      };
    function Bu(t, e) {
      if (typeof e != "function" && e !== null)
        throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
      Rr(t, e);
      function r() {
        this.constructor = t;
      }
      t.prototype = e === null ? Object.create(e) : ((r.prototype = e.prototype), new r());
    }
    var xr = function () {
      return (
        (xr =
          Object.assign ||
          function (t) {
            for (var e, r = 1, o = arguments.length; r < o; r++) {
              e = arguments[r];
              for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            }
            return t;
          }),
        xr.apply(this, arguments)
      );
    };
    function Pu(t, e) {
      var r = {};
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && e.indexOf(o) < 0 && (r[o] = t[o]);
      if (t != null && typeof Object.getOwnPropertySymbols == "function")
        for (var n = 0, o = Object.getOwnPropertySymbols(t); n < o.length; n++)
          e.indexOf(o[n]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(t, o[n]) &&
            (r[o[n]] = t[o[n]]);
      return r;
    }
    var Tt =
      typeof globalThis < "u"
        ? globalThis
        : typeof window < "u" || typeof window < "u"
          ? window
          : typeof self < "u"
            ? self
            : {};
    function ku(t) {
      var e = typeof t;
      return t != null && (e == "object" || e == "function");
    }
    var _r = ku,
      Nu = typeof Tt == "object" && Tt && Tt.Object === Object && Tt,
      Lu = Nu,
      ju = Lu,
      Mu = typeof self == "object" && self && self.Object === Object && self,
      qu = ju || Mu || Function("return this")(),
      Va = qu,
      Uu = Va,
      Gu = function () {
        return Uu.Date.now();
      },
      Hu = Gu,
      Vu = /\s/;
    function $u(t) {
      for (var e = t.length; e-- && Vu.test(t.charAt(e)); );
      return e;
    }
    var zu = $u,
      Wu = zu,
      Yu = /^\s+/;
    function Ku(t) {
      return t && t.slice(0, Wu(t) + 1).replace(Yu, "");
    }
    var Xu = Ku,
      Ju = Va,
      Qu = Ju.Symbol,
      $a = Qu,
      Na = $a,
      za = Object.prototype,
      Zu = za.hasOwnProperty,
      el = za.toString,
      Xe = Na ? Na.toStringTag : void 0;
    function tl(t) {
      var e = Zu.call(t, Xe),
        r = t[Xe];
      try {
        t[Xe] = void 0;
        var o = !0;
      } catch {}
      var n = el.call(t);
      return o && (e ? (t[Xe] = r) : delete t[Xe]), n;
    }
    var rl = tl,
      ol = Object.prototype,
      nl = ol.toString;
    function al(t) {
      return nl.call(t);
    }
    var il = al,
      La = $a,
      sl = rl,
      ul = il,
      ll = "[object Null]",
      cl = "[object Undefined]",
      ja = La ? La.toStringTag : void 0;
    function dl(t) {
      return t == null ? (t === void 0 ? cl : ll) : ja && ja in Object(t) ? sl(t) : ul(t);
    }
    var hl = dl;
    function pl(t) {
      return t != null && typeof t == "object";
    }
    var fl = pl,
      gl = hl,
      yl = fl,
      ml = "[object Symbol]";
    function El(t) {
      return typeof t == "symbol" || (yl(t) && gl(t) == ml);
    }
    var bl = El,
      Al = Xu,
      Ma = _r,
      Sl = bl,
      qa = NaN,
      vl = /^[-+]0x[0-9a-f]+$/i,
      wl = /^0b[01]+$/i,
      Cl = /^0o[0-7]+$/i,
      Dl = parseInt;
    function Tl(t) {
      if (typeof t == "number") return t;
      if (Sl(t)) return qa;
      if (Ma(t)) {
        var e = typeof t.valueOf == "function" ? t.valueOf() : t;
        t = Ma(e) ? e + "" : e;
      }
      if (typeof t != "string") return t === 0 ? t : +t;
      t = Al(t);
      var r = wl.test(t);
      return r || Cl.test(t) ? Dl(t.slice(2), r ? 2 : 8) : vl.test(t) ? qa : +t;
    }
    var Rl = Tl,
      xl = _r,
      Dr = Hu,
      Ua = Rl,
      Il = "Expected a function",
      Ol = Math.max,
      Fl = Math.min;
    function _l(t, e, r) {
      var o,
        n,
        a,
        s,
        u,
        l,
        c = 0,
        h = !1,
        p = !1,
        d = !0;
      if (typeof t != "function") throw new TypeError(Il);
      (e = Ua(e) || 0),
        xl(r) &&
          ((h = !!r.leading),
          (p = "maxWait" in r),
          (a = p ? Ol(Ua(r.maxWait) || 0, e) : a),
          (d = "trailing" in r ? !!r.trailing : d));
      function b(C) {
        var R = o,
          I = n;
        return (o = n = void 0), (c = C), (s = t.apply(I, R)), s;
      }
      function v(C) {
        return (c = C), (u = setTimeout(E, e)), h ? b(C) : s;
      }
      function T(C) {
        var R = C - l,
          I = C - c,
          B = e - R;
        return p ? Fl(B, a - I) : B;
      }
      function m(C) {
        var R = C - l,
          I = C - c;
        return l === void 0 || R >= e || R < 0 || (p && I >= a);
      }
      function E() {
        var C = Dr();
        if (m(C)) return y(C);
        u = setTimeout(E, T(C));
      }
      function y(C) {
        return (u = void 0), d && o ? b(C) : ((o = n = void 0), s);
      }
      function w() {
        u !== void 0 && clearTimeout(u), (c = 0), (o = l = n = u = void 0);
      }
      function O() {
        return u === void 0 ? s : y(Dr());
      }
      function F() {
        var C = Dr(),
          R = m(C);
        if (((o = arguments), (n = this), (l = C), R)) {
          if (u === void 0) return v(l);
          if (p) return clearTimeout(u), (u = setTimeout(E, e)), b(l);
        }
        return u === void 0 && (u = setTimeout(E, e)), s;
      }
      return (F.cancel = w), (F.flush = O), F;
    }
    var Wa = _l,
      Bl = Wa,
      Pl = _r,
      kl = "Expected a function";
    function Nl(t, e, r) {
      var o = !0,
        n = !0;
      if (typeof t != "function") throw new TypeError(kl);
      return (
        Pl(r) && ((o = "leading" in r ? !!r.leading : o), (n = "trailing" in r ? !!r.trailing : n)),
        Bl(t, e, { leading: o, maxWait: e, trailing: n })
      );
    }
    var Ll = Nl,
      Ya = function (t, e, r, o) {
        switch (e) {
          case "debounce":
            return Wa(t, r, o);
          case "throttle":
            return Ll(t, r, o);
          default:
            return t;
        }
      },
      Ir = function (t) {
        return typeof t == "function";
      },
      Ce = function () {
        return typeof window > "u";
      },
      Ga = function (t) {
        return t instanceof Element || t instanceof HTMLDocument;
      },
      Ka = function (t, e, r, o) {
        return function (n) {
          var a = n.width,
            s = n.height;
          e(function (u) {
            return (u.width === a && u.height === s) ||
              (u.width === a && !o) ||
              (u.height === s && !r)
              ? u
              : (t && Ir(t) && t(a, s), { width: a, height: s });
          });
        };
      };
    (function (t) {
      Bu(e, t);
      function e(r) {
        var o = t.call(this, r) || this;
        (o.cancelHandler = function () {
          o.resizeHandler &&
            o.resizeHandler.cancel &&
            (o.resizeHandler.cancel(), (o.resizeHandler = null));
        }),
          (o.attachObserver = function () {
            var c = o.props,
              h = c.targetRef,
              p = c.observerOptions;
            if (!Ce()) {
              h && h.current && (o.targetRef.current = h.current);
              var d = o.getElement();
              d &&
                ((o.observableElement && o.observableElement === d) ||
                  ((o.observableElement = d), o.resizeObserver.observe(d, p)));
            }
          }),
          (o.getElement = function () {
            var c = o.props,
              h = c.querySelector,
              p = c.targetDomEl;
            if (Ce()) return null;
            if (h) return document.querySelector(h);
            if (p && Ga(p)) return p;
            if (o.targetRef && Ga(o.targetRef.current)) return o.targetRef.current;
            var d = _a(o);
            if (!d) return null;
            var b = o.getRenderType();
            switch (b) {
              case "renderProp":
                return d;
              case "childFunction":
                return d;
              case "child":
                return d;
              case "childArray":
                return d;
              default:
                return d.parentElement;
            }
          }),
          (o.createResizeHandler = function (c) {
            var h = o.props,
              p = h.handleWidth,
              d = p === void 0 ? !0 : p,
              b = h.handleHeight,
              v = b === void 0 ? !0 : b,
              T = h.onResize;
            if (!(!d && !v)) {
              var m = Ka(T, o.setState.bind(o), d, v);
              c.forEach(function (E) {
                var y = (E && E.contentRect) || {},
                  w = y.width,
                  O = y.height,
                  F = !o.skipOnMount && !Ce();
                F && m({ width: w, height: O }), (o.skipOnMount = !1);
              });
            }
          }),
          (o.getRenderType = function () {
            var c = o.props,
              h = c.render,
              p = c.children;
            return Ir(h)
              ? "renderProp"
              : Ir(p)
                ? "childFunction"
                : jr(p)
                  ? "child"
                  : Array.isArray(p)
                    ? "childArray"
                    : "parent";
          });
        var n = r.skipOnMount,
          a = r.refreshMode,
          s = r.refreshRate,
          u = s === void 0 ? 1e3 : s,
          l = r.refreshOptions;
        return (
          (o.state = { width: void 0, height: void 0 }),
          (o.skipOnMount = n),
          (o.targetRef = Lr()),
          (o.observableElement = null),
          Ce() ||
            ((o.resizeHandler = Ya(o.createResizeHandler, a, u, l)),
            (o.resizeObserver = new window.ResizeObserver(o.resizeHandler))),
          o
        );
      }
      return (
        (e.prototype.componentDidMount = function () {
          this.attachObserver();
        }),
        (e.prototype.componentDidUpdate = function () {
          this.attachObserver();
        }),
        (e.prototype.componentWillUnmount = function () {
          Ce() ||
            ((this.observableElement = null),
            this.resizeObserver.disconnect(),
            this.cancelHandler());
        }),
        (e.prototype.render = function () {
          var r = this.props,
            o = r.render,
            n = r.children,
            a = r.nodeType,
            s = a === void 0 ? "div" : a,
            u = this.state,
            l = u.width,
            c = u.height,
            h = { width: l, height: c, targetRef: this.targetRef },
            p = this.getRenderType(),
            d;
          switch (p) {
            case "renderProp":
              return o && o(h);
            case "childFunction":
              return (d = n), d(h);
            case "child":
              if (((d = n), d.type && typeof d.type == "string")) {
                h.targetRef;
                var b = Pu(h, ["targetRef"]);
                return Ze(d, b);
              }
              return Ze(d, h);
            case "childArray":
              return (
                (d = n),
                d.map(function (v) {
                  return !!v && Ze(v, h);
                })
              );
            default:
              return U(s, null);
          }
        }),
        e
      );
    })(kr);
    var jl = Ce() ? et : qr;
    function Xa(t) {
      t === void 0 && (t = {});
      var e = t.skipOnMount,
        r = e === void 0 ? !1 : e,
        o = t.refreshMode,
        n = t.refreshRate,
        a = n === void 0 ? 1e3 : n,
        s = t.refreshOptions,
        u = t.handleWidth,
        l = u === void 0 ? !0 : u,
        c = t.handleHeight,
        h = c === void 0 ? !0 : c,
        p = t.targetRef,
        d = t.observerOptions,
        b = t.onResize,
        v = tt(r),
        T = tt(null),
        m = p ?? T,
        E = tt(),
        y = Re({ width: void 0, height: void 0 }),
        w = y[0],
        O = y[1];
      return (
        jl(
          function () {
            if (!Ce()) {
              var F = Ka(b, O, l, h),
                C = function (I) {
                  (!l && !h) ||
                    I.forEach(function (B) {
                      var k = (B && B.contentRect) || {},
                        M = k.width,
                        D = k.height,
                        N = !v.current && !Ce();
                      N && F({ width: M, height: D }), (v.current = !1);
                    });
                };
              E.current = Ya(C, o, a, s);
              var R = new window.ResizeObserver(E.current);
              return (
                m.current && R.observe(m.current, d),
                function () {
                  R.disconnect();
                  var I = E.current;
                  I && I.cancel && I.cancel();
                }
              );
            }
          },
          [o, a, s, l, h, b, d, m.current]
        ),
        xr({ ref: m }, w)
      );
    }
    var Ml = L.div({
        display: "flex",
        flexDirection: "column",
        paddingBottom: 4,
        paddingRight: 4,
        paddingTop: 4,
        fontWeight: 400,
      }),
      ql = L.div(({ elementWidth: t }) => ({
        flexDirection: t > 407 ? "row" : "inherit",
        marginBottom: t > 407 ? 6 : 12,
        display: t > 407 ? "flex" : "block",
      })),
      Ul = L(It)({
        padding: "2px 8px",
        marginBottom: 3,
        minWidth: 65,
        maxWidth: "fit-content",
        width: "100%",
        textAlign: "center",
      }),
      Gl = L.div({ paddingLeft: 6, paddingRight: 23 }),
      Hl = (t) => t.charAt(0).toUpperCase().concat(t.slice(1)),
      Vl = ({ rule: t }) => {
        let { ref: e, width: r } = Xa({
            refreshMode: "debounce",
            handleHeight: !1,
            handleWidth: !0,
          }),
          o = null;
        switch (t.impact) {
          case "critical":
            o = "critical";
            break;
          case "serious":
            o = "negative";
            break;
          case "moderate":
            o = "warning";
            break;
          case "minor":
            o = "neutral";
            break;
        }
        return S.createElement(
          ql,
          { ref: e, elementWidth: r || 0 },
          S.createElement(Ul, { status: o }, Hl(t.impact)),
          S.createElement(Gl, null, t.message)
        );
      },
      $l = ({ rules: t }) =>
        S.createElement(
          Ml,
          null,
          t.map((e, r) => S.createElement(Vl, { rule: e, key: r }))
        ),
      zl = L.li({ fontWeight: 600 }),
      Wl = L.span(({ theme: t }) => ({
        borderBottom: `1px solid ${t.appBorderColor}`,
        width: "100%",
        display: "flex",
        paddingBottom: 6,
        marginBottom: 6,
        justifyContent: "space-between",
      })),
      Yl = L.span({
        fontWeight: "normal",
        alignSelf: "center",
        paddingRight: 15,
        input: { margin: 0, display: "block" },
      }),
      Kl = ({ element: t, type: e }) => {
        let { any: r, all: o, none: n } = t,
          a = [...r, ...o, ...n],
          s = `${e}-${t.target[0]}`;
        return S.createElement(
          zl,
          null,
          S.createElement(
            Wl,
            null,
            t.target[0],
            S.createElement(
              Yl,
              null,
              S.createElement(Fr, { toggleId: s, elementsToHighlight: [t] })
            )
          ),
          S.createElement($l, { rules: a })
        );
      },
      Xl = ({ elements: t, type: e }) =>
        S.createElement(
          "ol",
          null,
          t.map((r, o) => S.createElement(Kl, { element: r, key: o, type: e }))
        ),
      Jl = L.div({ padding: 12, marginBottom: 10 }),
      Ql = L.p({ margin: "0 0 12px" }),
      Zl = L.a({ marginTop: 12, textDecoration: "underline", color: "inherit", display: "block" }),
      ec = ({ item: t }) =>
        S.createElement(
          Jl,
          null,
          S.createElement(Ql, null, t.description),
          S.createElement(Zl, { href: t.helpUrl, target: "_blank" }, "More info...")
        ),
      tc = L.div({ display: "flex", flexWrap: "wrap", margin: "12px 0" }),
      rc = L.div(({ theme: t }) => ({
        margin: "0 6px",
        padding: 5,
        border: `1px solid ${t.appBorderColor}`,
        borderRadius: t.appBorderRadius,
      })),
      oc = ({ tags: t }) =>
        S.createElement(
          tc,
          null,
          t.map((e) => S.createElement(rc, { key: e }, e))
        ),
      nc = L.div(({ theme: t }) => ({
        display: "flex",
        width: "100%",
        borderBottom: `1px solid ${t.appBorderColor}`,
        "&:hover": { background: t.background.hoverable },
      })),
      ac = L(to)({
        marginRight: 10,
        transition: "transform 0.1s ease-in-out",
        verticalAlign: "inherit",
      }),
      ic = L.div(({ theme: t }) => ({
        padding: t.layoutMargin,
        paddingLeft: t.layoutMargin - 3,
        lineHeight: "20px",
        background: "none",
        color: "inherit",
        textAlign: "left",
        cursor: "pointer",
        borderLeft: "3px solid transparent",
        width: "100%",
        "&:focus": { outline: "0 none", borderLeft: `3px solid ${t.color.secondary}` },
      })),
      sc = L.span({
        fontWeight: "normal",
        float: "right",
        marginRight: 15,
        alignSelf: "center",
        input: { margin: 0, display: "block" },
      }),
      uc = (t) => {
        let [e, r] = Re(!1),
          { item: o, type: n } = t,
          a = `${n}-${o.id}`;
        return S.createElement(
          Qe,
          null,
          S.createElement(
            nc,
            null,
            S.createElement(
              ic,
              { onClick: () => r(!e), role: "button" },
              S.createElement(ac, { style: { transform: `rotate(${e ? 0 : -90}deg)` } }),
              o.help
            ),
            S.createElement(
              sc,
              null,
              S.createElement(Fr, { toggleId: a, elementsToHighlight: o.nodes })
            )
          ),
          e
            ? S.createElement(
                Qe,
                null,
                S.createElement(ec, { item: o, key: "info" }),
                S.createElement(Xl, { elements: o.nodes, type: n, key: "elements" }),
                S.createElement(oc, { tags: o.tags, key: "tags" })
              )
            : null
        );
      },
      Tr = ({ items: t, empty: e, type: r }) =>
        S.createElement(
          Qe,
          null,
          t && t.length
            ? t.map((o) => S.createElement(uc, { item: o, key: `${r}:${o.id}`, type: r }))
            : S.createElement(Ur, { title: e })
        ),
      lc = L.div({ width: "100%", position: "relative", minHeight: "100%" }),
      cc = L.label(({ theme: t }) => ({
        cursor: "pointer",
        userSelect: "none",
        color: t.color.dark,
      })),
      dc = L.div(() => ({
        alignItems: "center",
        cursor: "pointer",
        display: "flex",
        fontSize: 13,
        height: 40,
        padding: "0 15px",
        input: { marginBottom: 0, marginLeft: 10, marginRight: 0, marginTop: -1 },
      })),
      hc = L.button(
        ({ theme: t }) => ({
          textDecoration: "none",
          padding: "10px 15px",
          cursor: "pointer",
          fontWeight: t.typography.weight.bold,
          fontSize: t.typography.size.s2 - 1,
          lineHeight: 1,
          height: 40,
          border: "none",
          borderTop: "3px solid transparent",
          borderBottom: "3px solid transparent",
          background: "transparent",
          "&:focus": { outline: "0 none", borderBottom: `3px solid ${t.color.secondary}` },
        }),
        ({ active: t, theme: e }) =>
          t ? { opacity: 1, borderBottom: `3px solid ${e.color.secondary}` } : {}
      ),
      pc = L.div({}),
      fc = L.div(({ theme: t }) => ({
        boxShadow: `${t.appBorderColor} 0 -1px 0 0 inset`,
        background: t.background.app,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        whiteSpace: "nowrap",
      }));
    function gc(t) {
      return t.reduce((e, r) => e.concat(r.nodes), []);
    }
    var yc = ({ tabs: t }) => {
        let { ref: e, width: r } = Xa({
            refreshMode: "debounce",
            handleHeight: !1,
            handleWidth: !0,
          }),
          { tab: o, setTab: n } = Or(),
          a = ie(
            (u) => {
              n(parseInt(u.currentTarget.getAttribute("data-index") || "", 10));
            },
            [n]
          ),
          s = `${t[o].type}-global-checkbox`;
        return U(
          lc,
          { ref: e },
          U(
            fc,
            null,
            U(
              pc,
              null,
              t.map((u, l) =>
                U(hc, { key: l, "data-index": l, active: o === l, onClick: a }, u.label)
              )
            ),
            t[o].items.length > 0
              ? U(
                  dc,
                  null,
                  U(cc, { htmlFor: s }, "Highlight results"),
                  U(Fr, { toggleId: s, elementsToHighlight: gc(t[o].items) })
                )
              : null
          ),
          t[o].panel
        );
      },
      mc = L.div(({ theme: { color: t, typography: e, background: r } }) => ({
        textAlign: "start",
        padding: "11px 15px",
        fontSize: `${e.size.s2}px`,
        fontWeight: e.weight.regular,
        lineHeight: "1rem",
        background: r.app,
        borderBottom: `1px solid ${t.border}`,
        color: t.defaultText,
        backgroundClip: "padding-box",
        position: "relative",
        code: {
          fontSize: `${e.size.s1 - 1}px`,
          color: "inherit",
          margin: "0 0.2em",
          padding: "0 0.2em",
          background: "rgba(255, 255, 255, 0.8)",
          borderRadius: "2px",
          boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.1)",
        },
      })),
      Ec = ({ discrepancy: t }) => {
        let e = _t().getDocsUrl({ subpath: Ru, versioned: !0, renderer: !0 }),
          r = Te(() => {
            switch (t) {
              case "browserPassedCliFailed":
                return "Accessibility checks passed in this browser but failed in the CLI.";
              case "cliPassedBrowserFailed":
                return "Accessibility checks passed in the CLI but failed in this browser.";
              case "cliFailedButModeManual":
                return "Accessibility checks failed in the CLI. Run the tests manually to see the results.";
              default:
                return null;
            }
          }, [t]);
        return r
          ? S.createElement(
              mc,
              null,
              r,
              " ",
              S.createElement(
                Hr,
                { href: e, target: "_blank", withArrow: !0 },
                "Learn what could cause this"
              )
            )
          : null;
      },
      bc = L(ro)({ marginRight: 4 }),
      Ac = L(bc)(({ theme: t }) => ({ animation: `${t.animation.rotate360} 1s linear infinite;` })),
      Sc = L.span(({ theme: t }) => ({ color: t.color.positiveText })),
      vc = L.span(({ theme: t }) => ({ color: t.color.negativeText })),
      wc = L.span(({ theme: t }) => ({ color: t.color.warningText })),
      Cc = L.span({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }),
      Dc = () => {
        let { results: t, status: e, handleManual: r, error: o, discrepancy: n } = Or(),
          a = Te(() => [{ title: "Run test", onClick: r }], [r]),
          s = Te(
            () => [
              {
                title:
                  e === "ready"
                    ? "Rerun tests"
                    : S.createElement(
                        S.Fragment,
                        null,
                        S.createElement(eo, { style: { marginRight: "0.4em" } }),
                        "Tests completed"
                      ),
                onClick: r,
              },
            ],
            [e, r]
          ),
          u = Te(() => {
            let { passes: l, incomplete: c, violations: h } = t;
            return [
              {
                label: S.createElement(vc, null, h.length, " Violations"),
                panel: S.createElement(Tr, {
                  items: h,
                  type: 0,
                  empty: "No accessibility violations found.",
                }),
                items: h,
                type: 0,
              },
              {
                label: S.createElement(Sc, null, l.length, " Passes"),
                panel: S.createElement(Tr, {
                  items: l,
                  type: 1,
                  empty: "No accessibility checks passed.",
                }),
                items: l,
                type: 1,
              },
              {
                label: S.createElement(wc, null, c.length, " Incomplete"),
                panel: S.createElement(Tr, {
                  items: c,
                  type: 2,
                  empty: "No accessibility checks incomplete.",
                }),
                items: c,
                type: 2,
              },
            ];
          }, [t]);
        return S.createElement(
          S.Fragment,
          null,
          n && S.createElement(Ec, { discrepancy: n }),
          e === "ready" || e === "ran"
            ? S.createElement(
                S.Fragment,
                null,
                S.createElement(
                  Vr,
                  { vertical: !0, horizontal: !0 },
                  S.createElement(yc, { key: "tabs", tabs: u })
                ),
                S.createElement(xt, { key: "actionbar", actionItems: s })
              )
            : S.createElement(
                Cc,
                { style: { marginTop: n ? "1em" : 0 } },
                e === "initial" && "Initializing...",
                e === "manual" &&
                  S.createElement(
                    S.Fragment,
                    null,
                    S.createElement(S.Fragment, null, "Manually run the accessibility scan."),
                    S.createElement(xt, { key: "actionbar", actionItems: a })
                  ),
                e === "running" &&
                  S.createElement(
                    S.Fragment,
                    null,
                    S.createElement(Ac, { size: 12 }),
                    " Please wait while the accessibility scan is running ..."
                  ),
                e === "error" &&
                  S.createElement(
                    S.Fragment,
                    null,
                    "The accessibility scan encountered an error.",
                    S.createElement("br", null),
                    typeof o == "string" ? o : o instanceof Error ? o.toString() : JSON.stringify(o)
                  )
              )
        );
      },
      Tc = (t) =>
        U(
          "svg",
          { ...t },
          U(
            "defs",
            null,
            U(
              "filter",
              { id: "protanopia" },
              U("feColorMatrix", {
                in: "SourceGraphic",
                type: "matrix",
                values:
                  "0.567, 0.433, 0, 0, 0 0.558, 0.442, 0, 0, 0 0, 0.242, 0.758, 0, 0 0, 0, 0, 1, 0",
              })
            ),
            U(
              "filter",
              { id: "protanomaly" },
              U("feColorMatrix", {
                in: "SourceGraphic",
                type: "matrix",
                values:
                  "0.817, 0.183, 0, 0, 0 0.333, 0.667, 0, 0, 0 0, 0.125, 0.875, 0, 0 0, 0, 0, 1, 0",
              })
            ),
            U(
              "filter",
              { id: "deuteranopia" },
              U("feColorMatrix", {
                in: "SourceGraphic",
                type: "matrix",
                values: "0.625, 0.375, 0, 0, 0 0.7, 0.3, 0, 0, 0 0, 0.3, 0.7, 0, 0 0, 0, 0, 1, 0",
              })
            ),
            U(
              "filter",
              { id: "deuteranomaly" },
              U("feColorMatrix", {
                in: "SourceGraphic",
                type: "matrix",
                values:
                  "0.8, 0.2, 0, 0, 0 0.258, 0.742, 0, 0, 0 0, 0.142, 0.858, 0, 0 0, 0, 0, 1, 0",
              })
            ),
            U(
              "filter",
              { id: "tritanopia" },
              U("feColorMatrix", {
                in: "SourceGraphic",
                type: "matrix",
                values:
                  "0.95, 0.05,  0, 0, 0 0,  0.433, 0.567, 0, 0 0,  0.475, 0.525, 0, 0 0,  0, 0, 1, 0",
              })
            ),
            U(
              "filter",
              { id: "tritanomaly" },
              U("feColorMatrix", {
                in: "SourceGraphic",
                type: "matrix",
                values:
                  "0.967, 0.033, 0, 0, 0 0, 0.733, 0.267, 0, 0 0, 0.183, 0.817, 0, 0 0, 0, 0, 1, 0",
              })
            ),
            U(
              "filter",
              { id: "achromatopsia" },
              U("feColorMatrix", {
                in: "SourceGraphic",
                type: "matrix",
                values:
                  "0.299, 0.587, 0.114, 0, 0 0.299, 0.587, 0.114, 0, 0 0.299, 0.587, 0.114, 0, 0 0, 0, 0, 1, 0",
              })
            )
          )
        ),
      Rc = "storybook-preview-iframe",
      xc = [
        { name: "blurred vision", percentage: 22.9 },
        { name: "deuteranomaly", percentage: 2.7 },
        { name: "deuteranopia", percentage: 0.56 },
        { name: "protanomaly", percentage: 0.66 },
        { name: "protanopia", percentage: 0.59 },
        { name: "tritanomaly", percentage: 0.01 },
        { name: "tritanopia", percentage: 0.016 },
        { name: "achromatopsia", percentage: 1e-4 },
        { name: "grayscale" },
      ],
      Ja = (t) =>
        t
          ? t === "blurred vision"
            ? "blur(2px)"
            : t === "grayscale"
              ? "grayscale(100%)"
              : `url('#${t}')`
          : "none",
      Ic = L.div({ "&, & svg": { position: "absolute", width: 0, height: 0 } }),
      Oc = L.span(
        {
          background:
            "linear-gradient(to right, #F44336, #FF9800, #FFEB3B, #8BC34A, #2196F3, #9C27B0)",
          borderRadius: "1rem",
          display: "block",
          height: "1rem",
          width: "1rem",
        },
        ({ filter: t }) => ({ filter: Ja(t) }),
        ({ theme: t }) => ({ boxShadow: `${t.appBorderColor} 0 0 0 1px inset` })
      ),
      Fc = L.span({ display: "flex", flexDirection: "column" }),
      _c = L.span({ textTransform: "capitalize" }),
      Bc = L.span(({ theme: t }) => ({ fontSize: 11, color: t.textMutedColor })),
      Pc = (t, e) => [
        ...(t !== null
          ? [
              {
                id: "reset",
                title: "Reset color filter",
                onClick: () => {
                  e(null);
                },
                right: void 0,
                active: !1,
              },
            ]
          : []),
        ...xc.map((r) => {
          let o = r.percentage !== void 0 ? `${r.percentage}% of users` : void 0;
          return {
            id: r.name,
            title: S.createElement(
              Fc,
              null,
              S.createElement(_c, null, r.name),
              o && S.createElement(Bc, null, o)
            ),
            onClick: () => {
              e(r);
            },
            right: S.createElement(Oc, { filter: r.name }),
            active: t === r,
          };
        }),
      ],
      kc = () => {
        let [t, e] = Re(null);
        return S.createElement(
          S.Fragment,
          null,
          t && S.createElement(Qr, { styles: { [`#${Rc}`]: { filter: Ja(t.name) } } }),
          S.createElement(
            Wr,
            {
              placement: "top",
              tooltip: ({ onHide: r }) => {
                let o = Pc(t, (n) => {
                  e(n), r();
                });
                return S.createElement(zr, { links: o });
              },
              closeOnOutsideClick: !0,
              onDoubleClick: () => e(null),
            },
            S.createElement(
              Gr,
              { key: "filter", active: !!t, title: "Vision simulator" },
              S.createElement(Zr, null)
            )
          ),
          S.createElement(Ic, null, S.createElement(Tc, null))
        );
      },
      Nc = () => {
        let [t] = Ft(ge),
          e = t?.violations?.length || 0,
          r = t?.incomplete?.length || 0,
          o = e + r;
        return S.createElement(
          "div",
          null,
          S.createElement(
            $r,
            { col: 1 },
            S.createElement(
              "span",
              { style: { display: "inline-block", verticalAlign: "middle" } },
              "Accessibility"
            ),
            o === 0 ? "" : S.createElement(It, { status: "neutral" }, o)
          )
        );
      };
    rt.register(ge, (t) => {
      rt.add(Ba, {
        title: "",
        type: Ot.TOOL,
        match: ({ viewMode: e, tabId: r }) => e === "story" && !r,
        render: () => S.createElement(kc, null),
      }),
        rt.add(Ba, {
          title: Nc,
          type: Ot.PANEL,
          render: ({ active: e = !0 }) =>
            S.createElement(Ou, null, e ? S.createElement(Dc, null) : null),
          paramKey: Au,
        });
    });
  })();
} catch (e) {
  console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e);
}
