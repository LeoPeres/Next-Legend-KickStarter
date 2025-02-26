import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../src/stories/Introduction.mdx", // Introduction page
    "../src/stories/ui/**/*.mdx", // UI components documentation
    "../src/stories/ui/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/stories/composition/**/*.mdx", // Composition examples
    "../src/stories/composition/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/stories/docs/**/*.mdx", // Documentation pages
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
  webpackFinal: async (config) => {
    if (config.module && config.module.rules) {
      // Find the CSS rule
      const cssRule = config.module.rules.find(
        (rule) =>
          rule && typeof rule === "object" && rule.test && rule.test.toString().includes("css")
      );

      // If found, modify it to use our PostCSS config
      if (cssRule && typeof cssRule === "object") {
        if (cssRule.use && Array.isArray(cssRule.use)) {
          const postcssLoader = cssRule.use.find(
            (loader) =>
              typeof loader === "object" &&
              loader &&
              loader.loader &&
              loader.loader.includes("postcss")
          );
          if (postcssLoader && typeof postcssLoader === "object") {
            postcssLoader.options = {
              postcssOptions: {
                plugins: [
                  require("tailwindcss")({
                    config: path.resolve(__dirname, "../tailwind.config.ts"),
                  }),
                  require("autoprefixer"),
                ],
              },
            };
          }
        }
      }
    }

    // Add path aliases to match Next.js configuration
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@": path.resolve(__dirname, "../src"),
      };
    }

    return config;
  },
};
export default config;
