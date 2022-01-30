const themeConfig = require('./theme.config');
const { prop } = require('ramda');

const i18n = themeConfig.i18n
module.exports = {
  i18n: {
    ...i18n,
    locales: i18n.locales.map(prop('value'))
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};