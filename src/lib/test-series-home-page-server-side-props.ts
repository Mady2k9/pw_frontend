import {
  FetchFooter,
  FetchHeader,
} from '@/api/older-api-methods';
import type { GetServerSidePropsContext } from 'next';
import {  getTestPageSnapshot } from '@/api/page-apis';
import { IPageData } from '@/api/interfaces/page';
const PAGE_KEY = '/test-series';

export default async function testSeriesHomePageServerSideProps(context: GetServerSidePropsContext) {
  let headerData;
  let footerData;
  let pageData: IPageData | undefined = undefined;
  try {
    const result = await Promise.all([
      FetchHeader(),
      FetchFooter(),
      getTestPageSnapshot(PAGE_KEY),
    ]);
    headerData = result[0];
    footerData = result[1];
    pageData = result[2]?.data;
  } catch (error) {
    // console.log(error);
  }
  if (!pageData) {
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
      pageData: pageData || {},
    },
  };
}
