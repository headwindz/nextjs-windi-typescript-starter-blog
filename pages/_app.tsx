import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import '@arco-design/web-react/dist/css/arco.css';
import 'windi.css';
import '../styles/index.css';
import '../styles/prism.css';
import { BackTop, Button } from '@arco-design/web-react';
import { IconUp } from '@arco-design/web-react/icon';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
      <BackTop>
        <Button
          type="secondary"
          shape="circle"
          iconOnly
          size="large"
          className="right-20 bottom-8"
        >
          <IconUp />
        </Button>
      </BackTop>
    </ThemeProvider>
  );
}
