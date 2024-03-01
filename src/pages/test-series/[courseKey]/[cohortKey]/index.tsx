import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { Layout } from '@/components/common/Layout';
import { useRouter } from 'next/router';
import testSeriesListServerSideProps from '@/lib/test-series-list-server-side-props';
import TestSeriesListPage from '@/widgets/TestSeriesList/TestSeriesListPage';


export async function getServerSideProps(context: GetServerSidePropsContext) {
  return testSeriesListServerSideProps(context);
}

export default function CourseCohortTestSeries(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  if (!props.pageData) {
    return router.replace('');
  }
  return <Layout noIndex={true}  footerData={props.footerData} seoTags={props.pageData.seoTags} headerData={props.headerData} page_source={'TEST_SERIES_COHORT_LISTING'}>
    <TestSeriesListPage {...props.pageData} params={props.params} />
  </Layout>;
}
