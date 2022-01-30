import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import "../styles/index.css";
import "@arco-design/web-react/dist/css/arco.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
