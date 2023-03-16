module.exports = {
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/_variables.scss";`,
      },
    },
  },
};
