const title = 'India’s Most Affordable E-Commerce Platform for Students';
const description =
  'store.pw.live: Online-Shopping | PW Study Materials, Stationeries, Pen-drive Course, Merchandise, Books, Electronics.';
const DefaultStoreMeta = {
  title: title,
  titleTemplate: '%s - PW Store',
  description: description,
  openGraph: {
    title: title,
    description: description,
    type: 'website',
    url: 'https://store.pw.live/',
    site_name: 'PW Store',
    images: [
      {
        url: 'https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/6a80d3a6-4435-4a28-9f82-7a5ccfae9558.png',
        width: '800',
        height: '600',
        alt: description,
      },
    ],
  },
  twitter: {
    creator: '@PhysicswallahAP',
    site: '@PhysicswallahAP',
    card: 'summary',
  },
};
export default DefaultStoreMeta;
