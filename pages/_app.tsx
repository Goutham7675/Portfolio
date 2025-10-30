import "@/common/styles/global.css";

import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { MotionConfig } from "framer-motion";
import type { AppProps } from "next/app";
import Head from "next/head";

import { ThemeProvider } from "@/modules/themeContext";
import { MouseVariantProvider } from "@/modules/customMouse";

const ArticulatCF = localFont({
  src: "../common/fonts/ArticulatCF-Bold.otf",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>S. S. Goutham Reddy Portfolio</title>
        <meta
          name="description"
          content="Portfolio site of Software Developer S. S. Goutham Reddy."
        />
        <meta
          name="keywords"
          content="goutham reddy, goutham, software developer, portfolio, developer, web developer, full stack, resume"
        />
        <meta
          name="google-site-verification"
          content="fZIGN9tZ-qZQT9oPQRkI0K-gzZc4XkbzeJmMHUH0hoc"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="__font" className={ArticulatCF.className}>
        <MotionConfig transition={{ ease: "easeInOut", duration: 1 }}>
          <ThemeProvider>
            <MouseVariantProvider>
              <Component {...pageProps} />
            </MouseVariantProvider>
          </ThemeProvider>
        </MotionConfig>
      </div>
      <Analytics />
    </>
  );
}
