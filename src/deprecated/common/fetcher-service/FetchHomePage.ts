export const FetchHomePage = async () => {
  return await fetch(
    `${process.env.NEXT_PUBLIC_BE_DATA_URL}/widget/page-snapshot?orgId=${process.env.NEXT_PUBLIC_ORG_ID}&appId=${process.env.NEXT_PUBLIC_HOMEPAGE_APP_ID}&pageType=HOMEPAGE&slug=pw.live`
  ).then((res) => res.json());
};
