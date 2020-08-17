// @ts-check
const reactPlugin = require("vite-plugin-react");

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  jsx: "react",
  plugins: [reactPlugin],
  optimizeDeps: {
    exclude: ["@vrm/screens"],
  },
};

module.exports = config;
