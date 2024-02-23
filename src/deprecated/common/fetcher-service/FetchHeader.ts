const BASE_URL = process.env.NEXT_PUBLIC_BE_DATA_URL;
const orgId = process.env.NEXT_PUBLIC_ORG_ID;
const appId = process.env.NEXT_PUBLIC_HOMEPAGE_APP_ID;
export const FetchHeader = async () => {
  return await fetch(
    `${BASE_URL}/widget/header?orgId=${orgId}&appId=${appId}`
  ).then((res) => res.json());
};
