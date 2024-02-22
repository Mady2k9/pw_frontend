const BASE_URL = process.env.NEXT_PUBLIC_BE_DATA_URL;

const orgId = process.env.NEXT_PUBLIC_ORG_ID;
const appId = process.env.NEXT_PUBLIC_HOMEPAGE_APP_ID;
export const FetchFooter = async () => {
  console.log('BASE_URL', BASE_URL);
  return await fetch(
    `${BASE_URL}/widget/footer?orgId=${orgId}&appId=${appId}`
  ).then((res) => res.json());
};
