import BatchListPage from '@/widgets/BatchList/BatchListPage';
import batchListingServerSideProps from '@/lib/batch-list-server-side-props';
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { Layout } from '@/components/common/Layout';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return batchListingServerSideProps(context);
}

export default function CohortBatches(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const page_source= 'Batch Listing Page';
  if (!props.pageData) {
    return router.replace('');
  }
  return <Layout noIndex={true}  seoSchema={props.pageData.seoSchema} footerData={props.footerData} seoTags={props.pageData.seoTags} headerData={props.headerData} page_source={page_source}>
    <BatchListPage {...props.pageData} filteredBatches={props.filteredBatches} params={props.params} />
  </Layout>;
}
