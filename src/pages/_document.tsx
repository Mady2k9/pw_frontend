import { Html, Head, Main, NextScript } from 'next/document';
import SoftwareAppSchema from '@/deprecated/schema/SoftwareAppSchema';
import OrganisationAppSchema from '@/deprecated/schema/OrganisationAppSchema';

function GoogleTagManager() {
  return {
    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-TGJHCW7D');`,
  };
}

function GTMNoScript() {
  return {
    __html: `<iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-TGJHCW7D"
        height="0"
        width="0"
        style="display:none;visibility:hidden"
      ></iframe>`,
  };
}

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script dangerouslySetInnerHTML={GoogleTagManager()} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={OrganisationAppSchema()}
          key="OrganisationAppSchema"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={SoftwareAppSchema()}
          key="SoftwareAppSchema"
        />
      </Head>

      <body>


      <Main />
      <NextScript />
      </body>
      <noscript
        dangerouslySetInnerHTML={GTMNoScript()}
      />
    </Html>
  );
}
