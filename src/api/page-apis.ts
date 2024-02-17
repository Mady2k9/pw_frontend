import {IBatches, IPageData, ITopMenuItem} from "@/api/interfaces/page";
import {jsonToQueryString, queryStringToJson} from "@/lib/utils";
import {IBatch} from "@/api/interfaces/batch";

const orgId = process.env.NEXT_PUBLIC_ORG_ID;
const appId = process.env.NEXT_PUBLIC_APP_ID;
const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function getTestPageSnapshot(slug: string): Promise<{ data: IPageData }> {
    return fetch(
        `${baseUrl}/gcms/test-page-snapshot?orgId=${orgId}&appId=${appId}&pageType=TEST_HOMEPAGE&slug=${slug}`
    ).then((res) => res.json());
}

export async function batchPageSnapshot(slug: string, type: 'BATCH_LISTING' | 'BATCH_DESCRIPTION' = 'BATCH_LISTING'): Promise<{
    data: IPageData
}> {
    return fetch(
        `${baseUrl}/gcms/batch-page-snapshot?orgId=${orgId}&appId=${appId}&pageType=${type}&slug=${slug}`
    ).then((res) => res.json());
}

export async function fetchBatches(filters: any): Promise<{ data: IBatch[] }> {
    return fetch(
        `${baseUrl}/gcms/batch/list${jsonToQueryString(filters)}`
    ).then((res) => res.json());
}

export async function getHeaderData(): Promise<{ data: ITopMenuItem[] }> {
    return fetch(
        `${baseUrl}/widget/header?orgId=${orgId}&appId=${appId}`
    ).then((res) => res.json());
}
