const withTM = require("next-transpile-modules")(["@crud-beer/ui"], {
  resolveSymlinks: true,
});

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withTM(nextConfig);
