export const FetchHeader = async () => {
  return await fetch(
    `${process.env.NEXT_PUBLIC_BE_DATA_URL}/widget/header?orgId=${process.env.NEXT_PUBLIC_ORG_ID}&appId=${process.env.NEXT_PUBLIC_HOMEPAGE_APP_ID}`
  ).then((res) => res.json());
};
