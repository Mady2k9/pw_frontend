import { Html, Head, Main, NextScript } from 'next/document';

function GoogleTagManager() {
  return {
    __html: `{
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-TLKGKK9');
          }`,
  };
}

function GTMNoScript() {
  return {
    __html: ` <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-TLKGKK9"
        height="0"
        width="0"
        style="display:none;visibility:hidden"
      ></iframe>
    </noscript>`,
  };
}

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
      <Main />
      <NextScript />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={GoogleTagManager()}
        key="GoogleTagManager"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={GTMNoScript()}
        key="GTM"
      />
      </body>

    </Html>
  );
}
