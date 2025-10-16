import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Script src="//web.webpushs.com/js/push/edfda228f62ea629c72b26849bc50dde_1.js" strategy="beforeInteractive" />
    <link rel="manifest" href="manifest.json" />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
