try {
  (() => {
    var t = __REACT__,
      {
        Children: O,
        Component: f,
        Fragment: R,
        Profiler: P,
        PureComponent: w,
        StrictMode: L,
        Suspense: E,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: D,
        cloneElement: M,
        createContext: v,
        createElement: x,
        createFactory: H,
        createRef: U,
        forwardRef: F,
        isValidElement: N,
        lazy: G,
        memo: W,
        startTransition: K,
        unstable_act: Y,
        useCallback: u,
        useContext: q,
        useDebugValue: V,
        useDeferredValue: Z,
        useEffect: d,
        useId: z,
        useImperativeHandle: J,
        useInsertionEffect: Q,
        useLayoutEffect: X,
        useMemo: $,
        useReducer: j,
        useRef: oo,
        useState: no,
        useSyncExternalStore: eo,
        useTransition: co,
        version: to,
      } = __REACT__;
    var io = __STORYBOOK_API__,
      {
        ActiveTabs: so,
        Consumer: uo,
        ManagerContext: mo,
        Provider: po,
        RequestResponseError: So,
        addons: l,
        combineParameters: Co,
        controlOrMetaKey: ho,
        controlOrMetaSymbol: Ao,
        eventMatchesShortcut: _o,
        eventToShortcut: bo,
        experimental_MockUniversalStore: To,
        experimental_UniversalStore: go,
        experimental_requestResponse: yo,
        experimental_useUniversalStore: Bo,
        isMacLike: ko,
        isShortcutTaken: Oo,
        keyToSymbol: fo,
        merge: Ro,
        mockChannel: Po,
        optionOrAltSymbol: wo,
        shortcutMatchesShortcut: Lo,
        shortcutToHumanString: Eo,
        types: m,
        useAddonState: Do,
        useArgTypes: Mo,
        useArgs: vo,
        useChannel: xo,
        useGlobalTypes: Ho,
        useGlobals: p,
        useParameter: Uo,
        useSharedState: Fo,
        useStoryPrepared: No,
        useStorybookApi: S,
        useStorybookState: Go,
      } = __STORYBOOK_API__;
    var Vo = __STORYBOOK_COMPONENTS__,
      {
        A: Zo,
        ActionBar: zo,
        AddonPanel: Jo,
        Badge: Qo,
        Bar: Xo,
        Blockquote: $o,
        Button: jo,
        ClipboardCode: on,
        Code: nn,
        DL: en,
        Div: cn,
        DocumentWrapper: tn,
        EmptyTabContent: rn,
        ErrorFormatter: In,
        FlexBar: an,
        Form: ln,
        H1: sn,
        H2: un,
        H3: dn,
        H4: mn,
        H5: pn,
        H6: Sn,
        HR: Cn,
        IconButton: C,
        IconButtonSkeleton: hn,
        Icons: An,
        Img: _n,
        LI: bn,
        Link: Tn,
        ListItem: gn,
        Loader: yn,
        Modal: Bn,
        OL: kn,
        P: On,
        Placeholder: fn,
        Pre: Rn,
        ProgressSpinner: Pn,
        ResetWrapper: wn,
        ScrollArea: Ln,
        Separator: En,
        Spaced: Dn,
        Span: Mn,
        StorybookIcon: vn,
        StorybookLogo: xn,
        Symbols: Hn,
        SyntaxHighlighter: Un,
        TT: Fn,
        TabBar: Nn,
        TabButton: Gn,
        TabWrapper: Wn,
        Table: Kn,
        Tabs: Yn,
        TabsState: qn,
        TooltipLinkList: Vn,
        TooltipMessage: Zn,
        TooltipNote: zn,
        UL: Jn,
        WithTooltip: Qn,
        WithTooltipPure: Xn,
        Zoom: $n,
        codeCommon: jn,
        components: oe,
        createCopyToClipboardFunction: ne,
        getStoryHref: ee,
        icons: ce,
        interleaveSeparators: te,
        nameSpaceClassNames: re,
        resetComponents: Ie,
        withReset: ae,
      } = __STORYBOOK_COMPONENTS__;
    var de = __STORYBOOK_ICONS__,
      {
        AccessibilityAltIcon: me,
        AccessibilityIcon: pe,
        AddIcon: Se,
        AdminIcon: Ce,
        AlertAltIcon: he,
        AlertIcon: Ae,
        AlignLeftIcon: _e,
        AlignRightIcon: be,
        AppleIcon: Te,
        ArrowBottomLeftIcon: ge,
        ArrowBottomRightIcon: ye,
        ArrowDownIcon: Be,
        ArrowLeftIcon: ke,
        ArrowRightIcon: Oe,
        ArrowSolidDownIcon: fe,
        ArrowSolidLeftIcon: Re,
        ArrowSolidRightIcon: Pe,
        ArrowSolidUpIcon: we,
        ArrowTopLeftIcon: Le,
        ArrowTopRightIcon: Ee,
        ArrowUpIcon: De,
        AzureDevOpsIcon: Me,
        BackIcon: ve,
        BasketIcon: xe,
        BatchAcceptIcon: He,
        BatchDenyIcon: Ue,
        BeakerIcon: Fe,
        BellIcon: Ne,
        BitbucketIcon: Ge,
        BoldIcon: We,
        BookIcon: Ke,
        BookmarkHollowIcon: Ye,
        BookmarkIcon: qe,
        BottomBarIcon: Ve,
        BottomBarToggleIcon: Ze,
        BoxIcon: ze,
        BranchIcon: Je,
        BrowserIcon: Qe,
        ButtonIcon: Xe,
        CPUIcon: $e,
        CalendarIcon: je,
        CameraIcon: oc,
        CategoryIcon: nc,
        CertificateIcon: ec,
        ChangedIcon: cc,
        ChatIcon: tc,
        CheckIcon: rc,
        ChevronDownIcon: Ic,
        ChevronLeftIcon: ac,
        ChevronRightIcon: lc,
        ChevronSmallDownIcon: ic,
        ChevronSmallLeftIcon: sc,
        ChevronSmallRightIcon: uc,
        ChevronSmallUpIcon: dc,
        ChevronUpIcon: mc,
        ChromaticIcon: pc,
        ChromeIcon: Sc,
        CircleHollowIcon: Cc,
        CircleIcon: hc,
        ClearIcon: Ac,
        CloseAltIcon: _c,
        CloseIcon: bc,
        CloudHollowIcon: Tc,
        CloudIcon: gc,
        CogIcon: yc,
        CollapseIcon: Bc,
        CommandIcon: kc,
        CommentAddIcon: Oc,
        CommentIcon: fc,
        CommentsIcon: Rc,
        CommitIcon: Pc,
        CompassIcon: wc,
        ComponentDrivenIcon: Lc,
        ComponentIcon: Ec,
        ContrastIcon: Dc,
        ControlsIcon: Mc,
        CopyIcon: vc,
        CreditIcon: xc,
        CrossIcon: Hc,
        DashboardIcon: Uc,
        DatabaseIcon: Fc,
        DeleteIcon: Nc,
        DiamondIcon: Gc,
        DirectionIcon: Wc,
        DiscordIcon: Kc,
        DocChartIcon: Yc,
        DocListIcon: qc,
        DocumentIcon: Vc,
        DownloadIcon: Zc,
        DragIcon: zc,
        EditIcon: Jc,
        EllipsisIcon: Qc,
        EmailIcon: Xc,
        ExpandAltIcon: $c,
        ExpandIcon: jc,
        EyeCloseIcon: ot,
        EyeIcon: nt,
        FaceHappyIcon: et,
        FaceNeutralIcon: ct,
        FaceSadIcon: tt,
        FacebookIcon: rt,
        FailedIcon: It,
        FastForwardIcon: at,
        FigmaIcon: lt,
        FilterIcon: it,
        FlagIcon: st,
        FolderIcon: ut,
        FormIcon: dt,
        GDriveIcon: mt,
        GithubIcon: pt,
        GitlabIcon: St,
        GlobeIcon: Ct,
        GoogleIcon: ht,
        GraphBarIcon: At,
        GraphLineIcon: _t,
        GraphqlIcon: bt,
        GridAltIcon: Tt,
        GridIcon: gt,
        GrowIcon: yt,
        HeartHollowIcon: Bt,
        HeartIcon: kt,
        HomeIcon: Ot,
        HourglassIcon: ft,
        InfoIcon: Rt,
        ItalicIcon: Pt,
        JumpToIcon: wt,
        KeyIcon: Lt,
        LightningIcon: Et,
        LightningOffIcon: Dt,
        LinkBrokenIcon: Mt,
        LinkIcon: vt,
        LinkedinIcon: xt,
        LinuxIcon: Ht,
        ListOrderedIcon: Ut,
        ListUnorderedIcon: Ft,
        LocationIcon: Nt,
        LockIcon: Gt,
        MarkdownIcon: Wt,
        MarkupIcon: Kt,
        MediumIcon: Yt,
        MemoryIcon: qt,
        MenuIcon: Vt,
        MergeIcon: Zt,
        MirrorIcon: zt,
        MobileIcon: Jt,
        MoonIcon: Qt,
        NutIcon: Xt,
        OutboxIcon: $t,
        OutlineIcon: jt,
        PaintBrushIcon: or,
        PaperClipIcon: nr,
        ParagraphIcon: er,
        PassedIcon: cr,
        PhoneIcon: tr,
        PhotoDragIcon: rr,
        PhotoIcon: Ir,
        PinAltIcon: ar,
        PinIcon: lr,
        PlayAllHollowIcon: ir,
        PlayBackIcon: sr,
        PlayHollowIcon: ur,
        PlayIcon: dr,
        PlayNextIcon: mr,
        PlusIcon: pr,
        PointerDefaultIcon: Sr,
        PointerHandIcon: Cr,
        PowerIcon: hr,
        PrintIcon: Ar,
        ProceedIcon: _r,
        ProfileIcon: br,
        PullRequestIcon: Tr,
        QuestionIcon: gr,
        RSSIcon: yr,
        RedirectIcon: Br,
        ReduxIcon: kr,
        RefreshIcon: Or,
        ReplyIcon: fr,
        RepoIcon: Rr,
        RequestChangeIcon: Pr,
        RewindIcon: wr,
        RulerIcon: h,
        SaveIcon: Lr,
        SearchIcon: Er,
        ShareAltIcon: Dr,
        ShareIcon: Mr,
        ShieldIcon: vr,
        SideBySideIcon: xr,
        SidebarAltIcon: Hr,
        SidebarAltToggleIcon: Ur,
        SidebarIcon: Fr,
        SidebarToggleIcon: Nr,
        SpeakerIcon: Gr,
        StackedIcon: Wr,
        StarHollowIcon: Kr,
        StarIcon: Yr,
        StatusFailIcon: qr,
        StatusPassIcon: Vr,
        StatusWarnIcon: Zr,
        StickerIcon: zr,
        StopAltHollowIcon: Jr,
        StopAltIcon: Qr,
        StopIcon: Xr,
        StorybookIcon: $r,
        StructureIcon: jr,
        SubtractIcon: oI,
        SunIcon: nI,
        SupportIcon: eI,
        SwitchAltIcon: cI,
        SyncIcon: tI,
        TabletIcon: rI,
        ThumbsUpIcon: II,
        TimeIcon: aI,
        TimerIcon: lI,
        TransferIcon: iI,
        TrashIcon: sI,
        TwitterIcon: uI,
        TypeIcon: dI,
        UbuntuIcon: mI,
        UndoIcon: pI,
        UnfoldIcon: SI,
        UnlockIcon: CI,
        UnpinIcon: hI,
        UploadIcon: AI,
        UserAddIcon: _I,
        UserAltIcon: bI,
        UserIcon: TI,
        UsersIcon: gI,
        VSCodeIcon: yI,
        VerifiedIcon: BI,
        VideoIcon: kI,
        WandIcon: OI,
        WatchIcon: fI,
        WindowsIcon: RI,
        WrenchIcon: PI,
        XIcon: wI,
        YoutubeIcon: LI,
        ZoomIcon: EI,
        ZoomOutIcon: DI,
        ZoomResetIcon: MI,
        iconList: vI,
      } = __STORYBOOK_ICONS__;
    var i = "storybook/measure-addon",
      A = `${i}/tool`,
      _ = () => {
        let [r, c] = p(),
          { measureEnabled: I } = r,
          s = S(),
          a = u(() => c({ measureEnabled: !I }), [c, I]);
        return (
          d(() => {
            s.setAddonShortcut(i, {
              label: "Toggle Measure [M]",
              defaultShortcut: ["M"],
              actionName: "measure",
              showInMenu: !1,
              action: a,
            });
          }, [a, s]),
          t.createElement(
            C,
            { key: A, active: I, title: "Enable measure", onClick: a },
            t.createElement(h, null)
          )
        );
      };
    l.register(i, () => {
      l.add(A, {
        type: m.TOOL,
        title: "Measure",
        match: ({ viewMode: r, tabId: c }) => r === "story" && !c,
        render: () => t.createElement(_, null),
      });
    });
  })();
} catch (e) {
  console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e);
}
