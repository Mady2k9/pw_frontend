import {
    FetchFooter,
    FetchHeader,
  } from '@/api/older-api-methods';
  import type { GetServerSidePropsContext } from 'next';
  import { getTestDescriptionSnapshot } from '@/api/page-apis';
  import { IPageData } from '@/api/interfaces/page';
  
  
  export default async function getTestDescriptionServerSideProps(context: GetServerSidePropsContext) {
    const { resolvedUrl } = context;
    const urlWithoutQuery = resolvedUrl;
    console.log(resolvedUrl,'resolvedUrl', urlWithoutQuery)
    let headerData;
    let footerData;
    let pageData: IPageData | undefined = undefined;
    try {
      const result = await Promise.all([
        FetchHeader(),
        FetchFooter(),
        getTestDescriptionSnapshot(urlWithoutQuery),
      ]);
      headerData = result[0];
      footerData = result[1];
      pageData = result[2]?.data;
      console.log('response', pageData)
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
        pageData: pageData,
        params: context.params,
      },
    };
  }
  