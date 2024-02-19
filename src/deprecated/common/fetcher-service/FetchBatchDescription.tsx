export const FetchBatchDescription = async (slug: string) => {
  return await fetch(
    `${process.env.NEXT_PUBLIC_BE_DATA_URL}/gcms/batch-page-snapshot?orgId=${process.env.NEXT_PUBLIC_ORG_ID}&appId=${process.env.NEXT_PUBLIC_HOMEPAGE_APP_ID}&pageType=BATCH_DESCRIPTION&slug=${slug}`
  ).then((res) => res.json());
};
