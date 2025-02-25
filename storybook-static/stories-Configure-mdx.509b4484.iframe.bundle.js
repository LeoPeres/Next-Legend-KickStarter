(self.webpackChunknext_legend_kickstarter = self.webpackChunknext_legend_kickstarter || []).push([
  [769],
  {
    "./src/stories/Configure.mdx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          RightArrow: () => RightArrow,
          default: () => MDXContent,
        });
      __webpack_require__("./node_modules/next/dist/compiled/react/index.js");
      var jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js"
        ),
        lib = __webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),
        dist = __webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),
        next_image = __webpack_require__(
          "./node_modules/@storybook/nextjs/dist/images/next-image.mjs"
        );
      const github = {
          src: "static/media/github.bf1215e7.svg",
          height: 32,
          width: 32,
          blurDataURL: "static/media/github.bf1215e7.svg",
        },
        discord = {
          src: "static/media/discord.c13ab8cc.svg",
          height: 32,
          width: 33,
          blurDataURL: "static/media/discord.c13ab8cc.svg",
        },
        youtube = {
          src: "static/media/youtube.0220385a.svg",
          height: 32,
          width: 32,
          blurDataURL: "static/media/youtube.0220385a.svg",
        },
        tutorials = {
          src: "static/media/tutorials.f9b22f92.svg",
          height: 32,
          width: 33,
          blurDataURL: "static/media/tutorials.f9b22f92.svg",
        },
        styling = {
          src: "static/media/styling.6ea0e96c.png",
          height: 260,
          width: 580,
          blurDataURL: "static/media/styling.6ea0e96c.png",
        },
        context = {
          src: "static/media/context.0aaeed46.png",
          height: 260,
          width: 580,
          blurDataURL: "static/media/context.0aaeed46.png",
        },
        assets = {
          src: "static/media/assets.74434bfb.png",
          height: 260,
          width: 580,
          blurDataURL: "static/media/assets.74434bfb.png",
        },
        docs = {
          src: "static/media/docs.78ff2c00.png",
          height: 520,
          width: 890,
          blurDataURL: "static/media/docs.78ff2c00.png",
        },
        share = {
          src: "static/media/share.b661f220.png",
          height: 520,
          width: 890,
          blurDataURL: "static/media/share.b661f220.png",
        },
        figma_plugin = {
          src: "static/media/figma-plugin.92feae99.png",
          height: 520,
          width: 890,
          blurDataURL: "static/media/figma-plugin.92feae99.png",
        },
        testing = {
          src: "static/media/testing.6f11ce8b.png",
          height: 520,
          width: 890,
          blurDataURL: "static/media/testing.6f11ce8b.png",
        },
        accessibility = {
          src: "static/media/accessibility.b812909c.png",
          height: 520,
          width: 890,
          blurDataURL: "static/media/accessibility.b812909c.png",
        },
        theming = {
          src: "static/media/theming.3ca117fd.png",
          height: 520,
          width: 890,
          blurDataURL: "static/media/theming.3ca117fd.png",
        },
        addon_library = {
          src: "static/media/addon-library.7d60eaf1.png",
          height: 2520,
          width: 4720,
          blurDataURL: "static/media/addon-library.7d60eaf1.png",
        },
        RightArrow = () => {
          const _components = { path: "path", svg: "svg", ...(0, lib.a)() };
          return (0, jsx_runtime.jsx)(_components.svg, {
            viewBox: "0 0 14 14",
            width: "8px",
            height: "14px",
            style: {
              marginLeft: "4px",
              display: "inline-block",
              shapeRendering: "inherit",
              verticalAlign: "middle",
              fill: "currentColor",
              "path fill": "currentColor",
            },
            children: (0, jsx_runtime.jsx)(_components.path, {
              d: "m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z",
            }),
          });
        };
      function _createMdxContent(props) {
        const _components = {
          code: "code",
          h1: "h1",
          p: "p",
          ...(0, lib.a)(),
          ...props.components,
        };
        return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [
            (0, jsx_runtime.jsx)(dist.h_, { title: "Configure your project" }),
            "\n",
            (0, jsx_runtime.jsxs)("div", {
              className: "sb-container",
              children: [
                (0, jsx_runtime.jsxs)("div", {
                  className: "sb-section-title",
                  children: [
                    (0, jsx_runtime.jsx)(_components.h1, {
                      id: "configure-your-project",
                      children: "Configure your project",
                    }),
                    (0, jsx_runtime.jsx)(_components.p, {
                      children:
                        "Because Storybook works separately from your app, you'll need to configure it for your specific stack and setup. Below, explore guides for configuring Storybook with popular frameworks and tools. If you get stuck, learn how you can ask for help from our community.",
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)("div", {
                  className: "sb-section",
                  children: [
                    (0, jsx_runtime.jsxs)("div", {
                      className: "sb-section-item",
                      children: [
                        (0, jsx_runtime.jsx)(next_image.Z, {
                          src: styling,
                          alt: "A wall of logos representing different styling technologies",
                          width: 0,
                          height: 0,
                          style: { width: "100%", height: "auto" },
                        }),
                        (0, jsx_runtime.jsx)("h4", {
                          className: "sb-section-item-heading",
                          children: "Add styling and CSS",
                        }),
                        (0, jsx_runtime.jsx)("p", {
                          className: "sb-section-item-paragraph",
                          children:
                            "Like with web applications, there are many ways to include CSS within Storybook. Learn more about setting up styling within Storybook.",
                        }),
                        (0, jsx_runtime.jsxs)("a", {
                          href: "https://storybook.js.org/docs/configure/styling-and-css/?renderer=react",
                          target: "_blank",
                          children: ["Learn more", (0, jsx_runtime.jsx)(RightArrow, {})],
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsxs)("div", {
                      className: "sb-section-item",
                      children: [
                        (0, jsx_runtime.jsx)(next_image.Z, {
                          width: 0,
                          height: 0,
                          style: { width: "100%", height: "auto" },
                          src: context,
                          alt: "An abstraction representing the composition of data for a component",
                        }),
                        (0, jsx_runtime.jsx)("h4", {
                          className: "sb-section-item-heading",
                          children: "Provide context and mocking",
                        }),
                        (0, jsx_runtime.jsx)("p", {
                          className: "sb-section-item-paragraph",
                          children:
                            "Often when a story doesn't render, it's because your component is expecting a specific environment or context (like a theme provider) to be available.",
                        }),
                        (0, jsx_runtime.jsxs)("a", {
                          href: "https://storybook.js.org/docs/writing-stories/decorators/?renderer=react#context-for-mocking",
                          target: "_blank",
                          children: ["Learn more", (0, jsx_runtime.jsx)(RightArrow, {})],
                        }),
                      ],
                    }),
                    (0, jsx_runtime.jsxs)("div", {
                      className: "sb-section-item",
                      children: [
                        (0, jsx_runtime.jsx)(next_image.Z, {
                          width: 0,
                          height: 0,
                          style: { width: "100%", height: "auto" },
                          src: assets,
                          alt: "A representation of typography and image assets",
                        }),
                        (0, jsx_runtime.jsxs)("div", {
                          children: [
                            (0, jsx_runtime.jsx)("h4", {
                              className: "sb-section-item-heading",
                              children: "Load assets and resources",
                            }),
                            (0, jsx_runtime.jsxs)("p", {
                              className: "sb-section-item-paragraph",
                              children: [
                                "To link static files (like fonts) to your projects and stories, use the\n",
                                (0, jsx_runtime.jsx)(_components.code, { children: "staticDirs" }),
                                " configuration option to specify folders to load when\nstarting Storybook.",
                              ],
                            }),
                            (0, jsx_runtime.jsxs)("a", {
                              href: "https://storybook.js.org/docs/configure/images-and-assets/?renderer=react",
                              target: "_blank",
                              children: ["Learn more", (0, jsx_runtime.jsx)(RightArrow, {})],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            "\n",
            (0, jsx_runtime.jsxs)("div", {
              className: "sb-container",
              children: [
                (0, jsx_runtime.jsxs)("div", {
                  className: "sb-section-title",
                  children: [
                    (0, jsx_runtime.jsx)(_components.h1, {
                      id: "do-more-with-storybook",
                      children: "Do more with Storybook",
                    }),
                    (0, jsx_runtime.jsx)(_components.p, {
                      children:
                        "Now that you know the basics, let's explore other parts of Storybook that will improve your experience. This list is just to get you started. You can customise Storybook in many ways to fit your needs.",
                    }),
                  ],
                }),
                (0, jsx_runtime.jsx)("div", {
                  className: "sb-section",
                  children: (0, jsx_runtime.jsxs)("div", {
                    className: "sb-features-grid",
                    children: [
                      (0, jsx_runtime.jsxs)("div", {
                        className: "sb-grid-item",
                        children: [
                          (0, jsx_runtime.jsx)(next_image.Z, {
                            width: 0,
                            height: 0,
                            style: { width: "100%", height: "auto" },
                            src: docs,
                            alt: "A screenshot showing the autodocs tag being set, pointing a docs page being generated",
                          }),
                          (0, jsx_runtime.jsx)("h4", {
                            className: "sb-section-item-heading",
                            children: "Autodocs",
                          }),
                          (0, jsx_runtime.jsx)("p", {
                            className: "sb-section-item-paragraph",
                            children:
                              "Auto-generate living,\ninteractive reference documentation from your components and stories.",
                          }),
                          (0, jsx_runtime.jsxs)("a", {
                            href: "https://storybook.js.org/docs/writing-docs/autodocs/?renderer=react",
                            target: "_blank",
                            children: ["Learn more", (0, jsx_runtime.jsx)(RightArrow, {})],
                          }),
                        ],
                      }),
                      (0, jsx_runtime.jsxs)("div", {
                        className: "sb-grid-item",
                        children: [
                          (0, jsx_runtime.jsx)(next_image.Z, {
                            width: 0,
                            height: 0,
                            style: { width: "100%", height: "auto" },
                            src: share,
                            alt: "A browser window showing a Storybook being published to a chromatic.com URL",
                          }),
                          (0, jsx_runtime.jsx)("h4", {
                            className: "sb-section-item-heading",
                            children: "Publish to Chromatic",
                          }),
                          (0, jsx_runtime.jsx)("p", {
                            className: "sb-section-item-paragraph",
                            children:
                              "Publish your Storybook to review and collaborate with your entire team.",
                          }),
                          (0, jsx_runtime.jsxs)("a", {
                            href: "https://storybook.js.org/docs/sharing/publish-storybook/?renderer=react#publish-storybook-with-chromatic",
                            target: "_blank",
                            children: ["Learn more", (0, jsx_runtime.jsx)(RightArrow, {})],
                          }),
                        ],
                      }),
                      (0, jsx_runtime.jsxs)("div", {
                        className: "sb-grid-item",
                        children: [
                          (0, jsx_runtime.jsx)(next_image.Z, {
                            width: 0,
                            height: 0,
                            style: { width: "100%", height: "auto" },
                            src: figma_plugin,
                            alt: "Windows showing the Storybook plugin in Figma",
                          }),
                          (0, jsx_runtime.jsx)("h4", {
                            className: "sb-section-item-heading",
                            children: "Figma Plugin",
                          }),
                          (0, jsx_runtime.jsx)("p", {
                            className: "sb-section-item-paragraph",
                            children:
                              "Embed your stories into Figma to cross-reference the design and live\nimplementation in one place.",
                          }),
                          (0, jsx_runtime.jsxs)("a", {
                            href: "https://storybook.js.org/docs/sharing/design-integrations/?renderer=react#embed-storybook-in-figma-with-the-plugin",
                            target: "_blank",
                            children: ["Learn more", (0, jsx_runtime.jsx)(RightArrow, {})],
                          }),
                        ],
                      }),
                      (0, jsx_runtime.jsxs)("div", {
                        className: "sb-grid-item",
                        children: [
                          (0, jsx_runtime.jsx)(next_image.Z, {
                            width: 0,
                            height: 0,
                            style: { width: "100%", height: "auto" },
                            src: testing,
                            alt: "Screenshot of tests passing and failing",
                          }),
                          (0, jsx_runtime.jsx)("h4", {
                            className: "sb-section-item-heading",
                            children: "Testing",
                          }),
                          (0, jsx_runtime.jsx)("p", {
                            className: "sb-section-item-paragraph",
                            children:
                              "Use stories to test a component in all its variations, no matter how\ncomplex.",
                          }),
                          (0, jsx_runtime.jsxs)("a", {
                            href: "https://storybook.js.org/docs/writing-tests/?renderer=react",
                            target: "_blank",
                            children: ["Learn more", (0, jsx_runtime.jsx)(RightArrow, {})],
                          }),
                        ],
                      }),
                      (0, jsx_runtime.jsxs)("div", {
                        className: "sb-grid-item",
                        children: [
                          (0, jsx_runtime.jsx)(next_image.Z, {
                            width: 0,
                            height: 0,
                            style: { width: "100%", height: "auto" },
                            src: accessibility,
                            alt: "Screenshot of accessibility tests passing and failing",
                          }),
                          (0, jsx_runtime.jsx)("h4", {
                            className: "sb-section-item-heading",
                            children: "Accessibility",
                          }),
                          (0, jsx_runtime.jsx)("p", {
                            className: "sb-section-item-paragraph",
                            children:
                              "Automatically test your components for a11y issues as you develop.",
                          }),
                          (0, jsx_runtime.jsxs)("a", {
                            href: "https://storybook.js.org/docs/writing-tests/accessibility-testing/?renderer=react",
                            target: "_blank",
                            children: ["Learn more", (0, jsx_runtime.jsx)(RightArrow, {})],
                          }),
                        ],
                      }),
                      (0, jsx_runtime.jsxs)("div", {
                        className: "sb-grid-item",
                        children: [
                          (0, jsx_runtime.jsx)(next_image.Z, {
                            width: 0,
                            height: 0,
                            style: { width: "100%", height: "auto" },
                            src: theming,
                            alt: "Screenshot of Storybook in light and dark mode",
                          }),
                          (0, jsx_runtime.jsx)("h4", {
                            className: "sb-section-item-heading",
                            children: "Theming",
                          }),
                          (0, jsx_runtime.jsx)("p", {
                            className: "sb-section-item-paragraph",
                            children: "Theme Storybook's UI to personalize it to your project.",
                          }),
                          (0, jsx_runtime.jsxs)("a", {
                            href: "https://storybook.js.org/docs/configure/theming/?renderer=react",
                            target: "_blank",
                            children: ["Learn more", (0, jsx_runtime.jsx)(RightArrow, {})],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            "\n",
            (0, jsx_runtime.jsxs)("div", {
              className: "sb-addon",
              children: [
                (0, jsx_runtime.jsxs)("div", {
                  className: "sb-addon-text",
                  children: [
                    (0, jsx_runtime.jsx)("h4", { children: "Addons" }),
                    (0, jsx_runtime.jsx)("p", {
                      className: "sb-section-item-paragraph",
                      children: "Integrate your tools with Storybook to connect workflows.",
                    }),
                    (0, jsx_runtime.jsxs)("a", {
                      href: "https://storybook.js.org/addons/",
                      target: "_blank",
                      children: ["Discover all addons", (0, jsx_runtime.jsx)(RightArrow, {})],
                    }),
                  ],
                }),
                (0, jsx_runtime.jsx)("div", {
                  className: "sb-addon-img",
                  children: (0, jsx_runtime.jsx)(next_image.Z, {
                    width: 650,
                    height: 347,
                    src: addon_library,
                    alt: "Integrate your tools with Storybook to connect workflows.",
                  }),
                }),
              ],
            }),
            "\n",
            (0, jsx_runtime.jsxs)("div", {
              className: "sb-section sb-socials",
              children: [
                (0, jsx_runtime.jsxs)("div", {
                  className: "sb-section-item",
                  children: [
                    (0, jsx_runtime.jsx)(next_image.Z, {
                      width: 32,
                      height: 32,
                      layout: "fixed",
                      src: github,
                      alt: "Github logo",
                      className: "sb-explore-image",
                    }),
                    (0, jsx_runtime.jsx)(_components.p, {
                      children: "Join our contributors building the future of UI development.",
                    }),
                    (0, jsx_runtime.jsxs)("a", {
                      href: "https://github.com/storybookjs/storybook",
                      target: "_blank",
                      children: ["Star on GitHub", (0, jsx_runtime.jsx)(RightArrow, {})],
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)("div", {
                  className: "sb-section-item",
                  children: [
                    (0, jsx_runtime.jsx)(next_image.Z, {
                      width: 33,
                      height: 32,
                      layout: "fixed",
                      src: discord,
                      alt: "Discord logo",
                      className: "sb-explore-image",
                    }),
                    (0, jsx_runtime.jsxs)("div", {
                      children: [
                        (0, jsx_runtime.jsx)(_components.p, {
                          children: "Get support and chat with frontend developers.",
                        }),
                        (0, jsx_runtime.jsxs)("a", {
                          href: "https://discord.gg/storybook",
                          target: "_blank",
                          children: ["Join Discord server", (0, jsx_runtime.jsx)(RightArrow, {})],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)("div", {
                  className: "sb-section-item",
                  children: [
                    (0, jsx_runtime.jsx)(next_image.Z, {
                      width: 32,
                      height: 32,
                      layout: "fixed",
                      src: youtube,
                      alt: "Youtube logo",
                      className: "sb-explore-image",
                    }),
                    (0, jsx_runtime.jsxs)("div", {
                      children: [
                        (0, jsx_runtime.jsx)(_components.p, {
                          children: "Watch tutorials, feature previews and interviews.",
                        }),
                        (0, jsx_runtime.jsxs)("a", {
                          href: "https://www.youtube.com/@chromaticui",
                          target: "_blank",
                          children: ["Watch on YouTube", (0, jsx_runtime.jsx)(RightArrow, {})],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, jsx_runtime.jsxs)("div", {
                  className: "sb-section-item",
                  children: [
                    (0, jsx_runtime.jsx)(next_image.Z, {
                      width: 33,
                      height: 32,
                      layout: "fixed",
                      src: tutorials,
                      alt: "A book",
                      className: "sb-explore-image",
                    }),
                    (0, jsx_runtime.jsx)("p", {
                      children: "Follow guided walkthroughs on for key workflows.",
                    }),
                    (0, jsx_runtime.jsxs)("a", {
                      href: "https://storybook.js.org/tutorials/",
                      target: "_blank",
                      children: ["Discover tutorials", (0, jsx_runtime.jsx)(RightArrow, {})],
                    }),
                  ],
                }),
              ],
            }),
            "\n",
            (0, jsx_runtime.jsx)("style", {
              children:
                "\n  .sb-container {\n    margin-bottom: 48px;\n  }\n\n  .sb-section {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n  }\n\n  img {\n    object-fit: cover;\n  }\n\n  .sb-section-title {\n    margin-bottom: 32px;\n  }\n\n  .sb-section a:not(h1 a, h2 a, h3 a) {\n    font-size: 14px;\n  }\n\n  .sb-section-item, .sb-grid-item {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n  }\n\n  .sb-section-item-heading {\n    padding-top: 20px !important;\n    padding-bottom: 5px !important;\n    margin: 0 !important;\n  }\n  .sb-section-item-paragraph {\n    margin: 0;\n    padding-bottom: 10px;\n  }\n\n  .sb-chevron {\n    margin-left: 5px;\n  }\n\n  .sb-features-grid {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: 32px 20px;\n  }\n\n  .sb-socials {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n  }\n\n  .sb-socials p {\n    margin-bottom: 10px;\n  }\n\n  .sb-explore-image {\n    max-height: 32px;\n    align-self: flex-start;\n  }\n\n  .sb-addon {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    position: relative;\n    background-color: #EEF3F8;\n    border-radius: 5px;\n    border: 1px solid rgba(0, 0, 0, 0.05);\n    background: #EEF3F8;\n    height: 180px;\n    margin-bottom: 48px;\n    overflow: hidden;\n  }\n\n  .sb-addon-text {\n    padding-left: 48px;\n    max-width: 240px;\n  }\n\n  .sb-addon-text h4 {\n    padding-top: 0px;\n  }\n\n  .sb-addon-img {\n    position: absolute;\n    left: 345px;\n    top: 0;\n    height: 100%;\n    width: 200%;\n    overflow: hidden;\n  }\n\n  .sb-addon-img img {\n    width: 650px;\n    transform: rotate(-15deg);\n    margin-left: 40px;\n    margin-top: -72px;\n    box-shadow: 0 0 1px rgba(255, 255, 255, 0);\n    backface-visibility: hidden;\n  }\n\n  @media screen and (max-width: 800px) {\n    .sb-addon-img {\n      left: 300px;\n    }\n  }\n\n  @media screen and (max-width: 600px) {\n    .sb-section {\n      flex-direction: column;\n    }\n\n    .sb-features-grid {\n      grid-template-columns: repeat(1, 1fr);\n    }\n\n    .sb-socials {\n      grid-template-columns: repeat(2, 1fr);\n    }\n\n    .sb-addon {\n      height: 280px;\n      align-items: flex-start;\n      padding-top: 32px;\n      overflow: hidden;\n    }\n\n    .sb-addon-text {\n      padding-left: 24px;\n    }\n\n    .sb-addon-img {\n      right: 0;\n      left: 0;\n      top: 130px;\n      bottom: 0;\n      overflow: hidden;\n      height: auto;\n      width: 124%;\n    }\n\n    .sb-addon-img img {\n      width: 1200px;\n      transform: rotate(-12deg);\n      margin-left: 0;\n      margin-top: 48px;\n      margin-bottom: -40px;\n      margin-left: -24px;\n    }\n  }\n  ",
            }),
          ],
        });
      }
      function MDXContent(props = {}) {
        const { wrapper: MDXLayout } = { ...(0, lib.a)(), ...props.components };
        return MDXLayout
          ? (0, jsx_runtime.jsx)(MDXLayout, {
              ...props,
              children: (0, jsx_runtime.jsx)(_createMdxContent, { ...props }),
            })
          : _createMdxContent(props);
      }
    },
    "./node_modules/@storybook/blocks/dist sync recursive": (module) => {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'");
        throw ((e.code = "MODULE_NOT_FOUND"), e);
      }
      (webpackEmptyContext.keys = () => []),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (webpackEmptyContext.id = "./node_modules/@storybook/blocks/dist sync recursive"),
        (module.exports = webpackEmptyContext);
    },
    "./node_modules/@storybook/core/dist/components sync recursive": (module) => {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'");
        throw ((e.code = "MODULE_NOT_FOUND"), e);
      }
      (webpackEmptyContext.keys = () => []),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (webpackEmptyContext.id = "./node_modules/@storybook/core/dist/components sync recursive"),
        (module.exports = webpackEmptyContext);
    },
    "./node_modules/@storybook/core/dist/theming sync recursive": (module) => {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'");
        throw ((e.code = "MODULE_NOT_FOUND"), e);
      }
      (webpackEmptyContext.keys = () => []),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (webpackEmptyContext.id = "./node_modules/@storybook/core/dist/theming sync recursive"),
        (module.exports = webpackEmptyContext);
    },
  },
]);
