import type { Preview } from "@storybook/react";
import "../src/app/globals.css"; // Import your Tailwind CSS styles

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      // Configure docs addon
      source: {
        state: "open",
      },
    },
    a11y: {
      // Configure a11y addon
      element: "#storybook-root",
      manual: false,
    },
  },
};

export default preview;
