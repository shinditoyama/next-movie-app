import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { RecoilRoot } from "recoil";
import { SWRConfig } from "swr";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <SWRConfig
        value={{
          fetcher: (url) => fetch(url).then((res) => res.json()),
        }}
      >
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </SWRConfig>
    </RecoilRoot>
  );
}

export default MyApp;
