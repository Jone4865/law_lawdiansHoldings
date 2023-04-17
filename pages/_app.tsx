import { useState } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/Header/Header";
import "../public/fonts/style.css";
import "../styles/globals.css";
import Side from "../components/Side/Side";

export default function App({ Component, pageProps }: AppProps) {
  const AppKey = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}`;
  const [modal, setModal] = useState(false);

  const setModalState = (modal: boolean) => {
    setModal(modal);
  };
  return (
    <>
      <Head>
        <meta
          name="naver-site-verification"
          content="5f24168dbafe2b2c50a338f8ebfd50eeea3a877e"
        />
        <title>로디언즈 홀딩스 | 세상을 바꾸는 비전과 기술의 현실화</title>
        <meta name="Keywords" content="LawdiansHoldings" />
        <meta name="Keywords" content="로디언즈" />
        <meta name="Keywords" content="로디언즈 홀딩스" />
        <meta name="Keywords" content="블록체인 STO" />
        <meta name="Keywords" content="정보보호관리체계" />
        <meta name="Keywords" content="기술혁신중소기업" />
        <meta name="Keywords" content="그루" />
        <meta name="Keywords" content="두리안" />
        <meta name="Keywords" content="찐부" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_SURVICE_URL} />
        <meta
          property="og:title"
          content="로디언즈 홀딩스 | 세상을 바꾸는 비전과 기술의 현실화"
        />
        <meta
          property="og:description"
          content="국내 최고의 블록체인기술 보유, 플랫폼 개발 및 운영, 안전하고 신뢰할 수 있는 플랫폼 서비스 제공"
        />
        <meta
          name="description"
          content="국내 최고의 블록체인기술 보유, 플랫폼 개발 및 운영, 안전하고 신뢰할 수 있는 플랫폼 서비스 제공"
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
        <script type="text/javascript"></script>
      </Head>
      <Header setModalState={setModalState} />
      <Component {...pageProps} />
      <Side modal={modal} setModalState={setModalState} />
    </>
  );
}
