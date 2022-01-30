module.exports = {
  i18n: {
    locales: [{
      title: 'English',
      value: 'en-US',
    }, {
      title: '中文',
      value: 'zh-CN'
    }],
    defaultLocale: 'en-US'
  },
  site: {
    author: {
      name: 'n0ruSh',
      link: 'https://github.com/n0rush'
    },
    title: "Nextjs tailwind starter blog",
    logo: '/assets/logo.svg',
  },
  navLinks: [
    {
      title: "Blog",
      path: "/blogs",
    },
    {
      title: "Tag",
      path: "/tags",
    },
  ],
  fontClass: 'font-mono'
};
