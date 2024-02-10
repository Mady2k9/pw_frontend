
const BASE_URL = process.env.NEXT_PUBLIC_BE_DATA_URL;
const orgId = process.env.NEXT_PUBLIC_ORG_ID;
const appId = process.env.NEXT_PUBLIC_HOMEPAGE_APP_ID;
export const FetchHomePage = async () => {
    return await fetch(
        `${BASE_URL}/widget/page-snapshot?orgId=${orgId}&appId=${appId}&pageType=HOMEPAGE&slug=pw.live`
    ).then((res) => res.json());
};
export const FetchHeader = async () => {
    return await fetch(
        `${BASE_URL}/widget/header?orgId=${orgId}&appId=${appId}`
    ).then((res) => res.json());
};
export const FetchFooter = async () => {
    //console.log('BASE_URL', BASE_URL);
    return await fetch(
        `${BASE_URL}/widget/footer?orgId=${orgId}&appId=${appId}`
    ).then((res) => res.json());
};
export const fetchBatchListingAll = async () => {
    return await fetch(
        `https://dev-api.penpencil.co/gcms/batch-page-snapshot?orgId=5eb393ee95fab7468a79d189&appId=65b80bc4fe63f20d389095a1&pageType=BATCH_LISTING&slug=%2Fbatches%2Fiit-jee`
    ).then((res) => res.json());
};
export const fetchBatchNotForAll = async () => {
    return await fetch(
        `https://dev-api.penpencil.co/gcms/batch-page-snapshot?orgId=5eb393ee95fab7468a79d189&appId=65b81620cfdf665a38f40886&pageType=BATCH_LISTING&slug=%2Fbatches%2Fiit-jee%2Fclass-12`
    ).then((res) => res.json());
};
