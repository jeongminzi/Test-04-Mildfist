import type { Preview } from "@storybook/react";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          "🎨 Foundations",
          ["Colors", "Typography", "Spacing", "Radius", "Shadow"],
          "🌍 Design System",
          "🎯 Feature Components",
          "📄 Pages",
        ],
      },
    },
    backgrounds: {
      default: "surface",
      values: [
        { name: "surface", value: "#ffffff" },
        { name: "muted", value: "#f6f6f3" },
        { name: "inverse", value: "#211922" },
      ],
    },
  },
};

export default preview;
