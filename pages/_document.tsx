import Document, { Html, Head, Main, NextScript } from 'next/document'
import themeConfig from '../theme.config';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className={`text-slate-700 dark:text-slate-200 ${themeConfig.fontClass}`}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
