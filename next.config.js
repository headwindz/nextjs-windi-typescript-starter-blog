const themeConfig = require('./theme.config');
const { prop } = require('ramda');
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin');
const { withContentlayer } = require('next-contentlayer');

const i18nConfig = themeConfig.i18n
  ? {
      i18n: {
        ...themeConfig.i18n,
        locales: themeConfig.i18n.locales.map(prop('value')),
      },
    }
  : {};

module.exports = withContentlayer()({
  reactStrictMode: true,
  ...i18nConfig,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    // @ts-ignore
    config.plugins.push(new WindiCSSWebpackPlugin());
    return config;
  },
});
