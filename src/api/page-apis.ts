import { IBatches, IPageData, ITopMenuItem } from '@/api/interfaces/page';
import { jsonToQueryString, queryStringToJson } from '@/lib/utils';
import { IBatch } from '@/api/interfaces/batch';

const orgId = process.env.NEXT_PUBLIC_ORG_ID;
const appId = process.env.NEXT_PUBLIC_APP_ID;
const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function getTestPageSnapshot(slug: string): Promise<{ data: IPageData }> {
  return fetch(
   `${baseUrl}/gcms/test-page-snapshot?orgId=${orgId}&appId=${appId}&pageType=TEST_HOMEPAGE&slug=/test-series` ).then((res) => res.json());
}
export async function getTestListSnapshot(slug: string): Promise<{ data: IPageData }> {
  return fetch(
    `${baseUrl}/gcms/test-page-snapshot?orgId=${orgId}&appId=${appId}&pageType=TEST_CAT_LISTING&slug=${slug}`,
  ).then((res) => res.json());
}
export async function getTestDescriptionSnapshot(slug: string): Promise<{ data: IPageData }> {
  return fetch(
    `${baseUrl}/gcms/test-page-snapshot?orgId=${orgId}&appId=${appId}&pageType=TEST_MODE_DESCRIPTION&slug=${slug}`,
  ).then((res) => res.json());
}

export async function fetchTestSeries (params: {cohortId: string, page: number}) {
  return fetch(`${baseUrl}/gcms/test-category?cohortId=${params.cohortId}&limit=6&orgId=${orgId}&page=${params.page}`
  ).then((res) => res.json())
}

export async function batchPageSnapshot(slug: string, type: 'BATCH_LISTING' | 'BATCH_DESCRIPTION' = 'BATCH_LISTING'): Promise<{
  data: IPageData
}> {
  console.log(`${baseUrl}/gcms/batch-page-snapshot?orgId=${orgId}&appId=${appId}&pageType=${type}&slug=${slug}`);
  return fetch(
    `${baseUrl}/gcms/batch-page-snapshot?orgId=${orgId}&appId=${appId}&pageType=${type}&slug=${slug}`,
  ).then((res) => res.json());
}

export async function fetchBatches(filters: any): Promise<{ data: IBatch[] }> {
  return fetch(
    `${baseUrl}/gcms/batch/list${jsonToQueryString(filters)}`,
  ).then((res) => res.json());
}

export async function getHeaderData(): Promise<{ data: ITopMenuItem[] }> {
  return fetch(
    `${baseUrl}/widget/header?orgId=${orgId}&appId=${appId}`,
  ).then((res) => res.json());
}
