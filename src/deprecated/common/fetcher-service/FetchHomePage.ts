const BASE_URL = process.env.NEXT_PUBLIC_BE_DATA_URL;
const orgId = process.env.NEXT_PUBLIC_ORG_ID;
const appId = process.env.NEXT_PUBLIC_HOMEPAGE_APP_ID;
export const FetchHomePage = async () => {
  return await fetch(
    `${BASE_URL}/widget/page-snapshot?orgId=${orgId}&appId=${appId}&pageType=HOMEPAGE&slug=pw.live`
  ).then((res) => res.json());
};
