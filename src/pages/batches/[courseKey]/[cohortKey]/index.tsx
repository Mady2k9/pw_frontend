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
  if (!props.pageData) {
    return router.replace('');
  }
  return <Layout  seoSchema={props.pageData.seoSchema}  footerData={props.footerData} seoTags={props.pageData.seoTags} headerData={props.headerData}>
    <BatchListPage {...props.pageData} filteredBatches={props.filteredBatches} params={props.params} />
  </Layout>;
}
