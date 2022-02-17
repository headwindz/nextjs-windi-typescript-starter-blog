import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import '@arco-design/web-react/dist/css/arco.css';
import { BackTop } from '@arco-design/web-react';
import 'windi.css';
import '../styles/index.css';
import '../styles/prism.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
      <BackTop />
    </ThemeProvider>
  );
}
