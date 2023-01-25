import "../public/fonts/style.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const AppKey = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}`;
  return (
    <>
      <Head>
        <title>방배사</title>
        <meta name="Keywords" content="LawdiansHoldings" />
        <meta name="Keywords" content="LawdiansHoldings" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_SURVICE_URL} />
        <meta property="og:title" content="로디언즈 홀딩스" />
        <meta
          property="og:description"
          content="세상을 바꾸는 비전과 기술의 현실화, 로디언즈 홀딩스"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:article:author"
          content="세상을 바꾸는 비전과 기술의 현실화, 로디언즈 홀딩스"
        />
        <meta property="og:image" content="/img/meta_img.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="500" />
        <script type="text/javascript" src={AppKey}></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
