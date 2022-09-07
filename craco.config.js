const path = require("path");

module.exports = {
  mode: "development",
  devServer: {
    port: 3000,
  },
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@theme": path.resolve(__dirname, "./src/theme"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@store": path.resolve(__dirname, "./src/store"),
    },
  },
};
