// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: "/", static: true },
    src: { url: "/src" },
  },
  optimize: {
    bundle: true,
    minify: true,
    target: "es2018",
  },
  buildOptions: {
    out: "dist",
  },
  plugins: ["@snowpack/plugin-babel"],
};
