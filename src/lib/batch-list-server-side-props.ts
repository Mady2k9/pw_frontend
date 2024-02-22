import {
  FetchFooter,
  FetchHeader,
} from '@/api/older-api-methods';
import type { GetServerSidePropsContext } from 'next';
import { batchPageSnapshot, fetchBatches } from '@/api/page-apis';
import { IPageData } from '@/api/interfaces/page';
import { FilterId } from '@/widgets/FiltersBar';
import { stringToSlug, uniqueBy } from '@/lib/utils';
import { IBatch } from '@/api/interfaces/batch';

export type Filter = {
  id: FilterId; // Use FilterId type here
  name: string;
  options?: string[];
};

export const FiltersJSON: Filter[] = [{
  id: 'online',
  name: 'Online',
}, {
  id: 'offline',
  name: 'Offline',
}, {
  id: 'pricing',
  name: 'Pricing',
  options: ['free', 'paid'],
}, {
  id: 'language',
  name: 'Language',
  options: ['Hindi', 'English', 'Gujrati', 'Hinglish', 'Other'],
}, {
  id: 'new',
  name: 'Newly Launched',
}];

export function extractFilters(query: any) {
  const filterValues: any = {};
  FiltersJSON.forEach((filter) => {
    if (query[filter.id]) {
      filterValues[filter.id] = query[filter.id];
    }
  });
  return filterValues;
}

export default async function batchListingServerSideProps(context: GetServerSidePropsContext) {
  const { resolvedUrl } = context;
  const urlWithoutQuery = resolvedUrl?.split('?')[0];
  let headerData;
  let footerData;
  let pageData: IPageData | undefined = undefined;
  let filteredBatches: IBatch[] | undefined = undefined;
  const queryFilters = extractFilters(context.query);
  try {
    const result = await Promise.all([
      FetchHeader(),
      FetchFooter(),
      batchPageSnapshot(urlWithoutQuery),
    ]);
    headerData = result[0];
    footerData = result[1];
    pageData = result[2]?.data;
    if (Object.keys(queryFilters).length > 0 && pageData) {
      const cohort = pageData.options.find((option) => (stringToSlug(option.option) === context.query.cohortKey));
      const res = await fetchBatches({ ...queryFilters, cohortIds: cohort?.cohortId });
      filteredBatches = res?.data;
    }
  } catch (error) {
    // console.log(error);
  }
  if (!pageData || !headerData?.data || !footerData?.data) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
      props: {},
    };
  }
  return {
    props: {
      headerData: headerData?.data || {},
      footerData: footerData?.data || {},
      pageData: pageData,
      filteredBatches: filteredBatches || [],
      params: context.params,
    },
  };
}
