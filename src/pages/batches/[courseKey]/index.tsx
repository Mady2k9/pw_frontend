import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import BatchListPage from '@/widgets/BatchList/BatchListPage';
import batchListingServerSideProps from '@/lib/batch-list-server-side-props';
import { Layout } from '@/components/common/Layout';
import { useRouter } from 'next/router';


export async function getServerSideProps(context: GetServerSidePropsContext) {
  return batchListingServerSideProps(context);
}

export default function CourseBatches(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const page_source= 'Batch Listing Page';
  if (!props.pageData) {
    return router.replace('');
  }
  return <Layout noIndex={true}  footerData={props.footerData} seoSchema={props.pageData.seoSchema} seoTags={props.pageData.seoTags} headerData={props.headerData} page_source={page_source}>
    <BatchListPage {...props.pageData} params={props.params} />
  </Layout>;
}
