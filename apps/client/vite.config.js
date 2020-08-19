const config = {
  alias: {
    "react-is": `@esm-bundle/react-is`,
  },
  jsx: "react",
  plugins: [
    require(`vite-plugin-react`),
    require(`./vite-plugin--babel-runtime`),
    require(`./vite-plugin--material-ui`),
  ],
  optimizeDeps: {
    exclude: ["@vrm/screens"],
    include: [
      `prop-types`,
      `@material-ui/core`,
      `@material-ui/icons`,
      `hoist-non-react-statics`,
      `shallowequal`,
    ],
  },
};

module.exports = config;
