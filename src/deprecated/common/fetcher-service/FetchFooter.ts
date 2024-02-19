export const FetchFooter = async () => {
  //console.log('BASE_URL', BASE_URL);
  return await fetch(
    `${process.env.NEXT_PUBLIC_BE_DATA_URL}/widget/footer?orgId=${process.env.NEXT_PUBLIC_ORG_ID}&appId=${process.env.NEXT_PUBLIC_HOMEPAGE_APP_ID}`
  ).then((res) => res.json());
};
