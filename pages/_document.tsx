import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const AppKey = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}`;

  return (
    <Html lang="en">
      <Head />
      <body>
        <script src="http://code.jquery.com/jquery-latest.js"></script>
        <script type="text/javascript" src={AppKey}></script>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
