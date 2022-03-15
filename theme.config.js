module.exports = {
  /**
   * i18n settings
   * comment out this section if you don't need i18n
   */
  i18n: {
    locales: [
      {
        title: 'English',
        value: 'en-US',
      },
      {
        title: '中文',
        value: 'zh-CN',
      },
    ],
    defaultLocale: 'en-US',
  },
  /**
   * site meta
   */
  site: {
    author: {
      name: 'n0ruSh',
      link: 'https://github.com/n0rush',
    },
    title: 'Nextjs tailwind starter blog',
    logo: '/assets/logo.jpeg',
  },
  navLinks: [
    {
      title: 'Blog',
      path: '/blogs',
    },
    {
      title: 'Tag',
      path: '/tags',
    },
  ],
};
