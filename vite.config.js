import legacyPlugin from "vite-plugin-legacy";

export default {
  build: {
    sourcemaps: true,
  },
  plugins: [
    legacyPlugin({
      targets: ["defaults", "not IE 11"],
      corejs: true,
      ignoreBrowserslistConfig: false,
    }),
  ],
};
