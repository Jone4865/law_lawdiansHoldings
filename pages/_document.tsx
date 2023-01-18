import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>감동기획</title>
        <meta name="Keywords" content="kamdongplan" />
        <meta name="Keywords" content="kamdong" />
        {/* <meta property="og:url" content="http://realfiex.com/" /> */}
        <meta property="og:title" content="감동기획" />
        <meta
          property="og:description"
          content="고객이 감동할때까지, 감동기획"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:article:author"
          content="고객이 감동할때까지, 감동기획"
        />
        <meta property="og:image" content="/img/meta_img.png" />
        <meta property="og:image:width" content="450" />
        <meta property="og:image:height" content="260" />
      </Head>
      <body>
        <script src="http://code.jquery.com/jquery-latest.js"></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
