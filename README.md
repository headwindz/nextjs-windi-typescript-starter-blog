> This project is still WIP

<div align="center">
  <h1>Nextjs Windi Typescript Starter Blog</h1>
</div>

<div align="center">

A starter blogging template powered by [nextjs], [windicss] and [typescript]

[![license-img]][license-link] [![version-img]][version-link]

[nextjs]: https://nextjs.org
[windicss]: https://windicss.org
[typescript]: https://www.typescriptlang.org/
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg
[license-link]: https://github.com/n0ruSh/nextjs-windi-typescript-starter-blog/blob/main/LICENSE
[version-img]: https://img.shields.io/github/package-json/v/n0ruSh/nextjs-windi-typescript-starter-blog
[version-link]: https://github.com/n0ruSh/nextjs-windi-typescript-starter-blog/blob/main/package.json#L3

</div>

# 💖 Used by

- [Demo](https://nextjs-windi-typescript-starter-blog-n0rush.vercel.app/) - this repo

## 🎉 Features

- Written in Typescript, with native type support.
- i18n
- Responsive design - mobile friendly
- Light and dark mode support
- Current best web engineering practices: lint + prettier + husky + commintlint + lint-staged
- Support for tags
- [] Powerful search with Algolia
- [] PR workflow - Run checks/lints on PR and preview

## 🔨 Usage

1. Clone the repo
1. Customize `theme.config.ts`
1. Customize `data/intro/index.md` and `data/intro/index.zh-CN.md` (about author)
1. Update blogs `data/blogs/*` with your own blogs
1. Update `components/footer/index.tsx` to customize social information
1. Deploy on Vercel

## 📦 Installation

```bash
$ yarn
```

## Development

First, run the development server:

```bash
yarn run dev
```

Open your browser and visit [http://localhost:3000](http://localhost:3000).

## Overview

- `theme.config.js` - Theme configuration
- `next.config.js` - Nextjs configuration
- `windi.config.ts` - Windicss configuration
- `pages/*` - Static pages
- `data/*` - MDX data that is used for introduction and blogs
- `public/*` - Static assets
- `interface/index.ts` - Common types
- `styles/index.css` - Common custom variant
- `styles/prism.css` - Prism theme for code blocks

## 🙏 Credit

Inspired by the following awesome work:

[leerob.io](https://github.com/leerob/leerob.io)

[antfu.me](https://github.com/antfu/antfu.me)

[tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog)

## 🎈 License

This project is [MIT licensed](./LICENSE).
