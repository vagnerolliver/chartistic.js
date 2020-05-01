/* eslint-disable */
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
            @import 'node_modules/chartist/dist/scss/chartist';
            @import '@/variables';
          `
        },
      },
    },
};
