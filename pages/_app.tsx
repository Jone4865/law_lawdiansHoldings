import "../public/fonts/style.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>방배사</title>
        <meta name="Keywords" content="bangbaesa" />
        <meta name="Keywords" content="bangbae" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_SURVICE_URL} />
        <meta property="og:title" content="방배사" />
        <meta property="og:description" content="방배사, 기쁨을 선물하세요." />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:article:author"
          content="방배사, 기쁨을 선물하세요."
        />
        <meta property="og:image" content="/img/meta_img.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="500" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
