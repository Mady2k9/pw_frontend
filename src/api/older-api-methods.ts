
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const orgId = process.env.NEXT_PUBLIC_ORG_ID;
const appId = process.env.NEXT_PUBLIC_APP_ID;
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
export const fetchBatchListingAll = async (urlWithoutQuery: string) => {
    return await fetch(
        `${BASE_URL}/gcms/batch-page-snapshot?orgId=${orgId}&appId=${appId}&pageType=BATCH_LISTING&slug=${urlWithoutQuery}`
    ).then((res) => res.json());
};
export const fetchBatchNotForAll = async (urlWithoutQuery: string) => {
    return await fetch(
        `${BASE_URL}/gcms/batch-page-snapshot?orgId=${orgId}&appId=${appId}&pageType=BATCH_LISTING&slug=${urlWithoutQuery}`
    ).then((res) => res.json());
};
