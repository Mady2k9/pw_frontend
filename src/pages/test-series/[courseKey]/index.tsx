import type { InferGetServerSidePropsType } from 'next'
import BatchListPage from "@/widgets/BatchList/BatchListPage";
import batchListingServerSideProps from "@/lib/batch-list-server-side-props";


export async function getServerSideProps({ params }: { params: any }) {
   return batchListingServerSideProps(params);
}

export default function CourseBatches(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
   return <BatchListPage {...props}/>
}
