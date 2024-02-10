import BatchListPage from "@/widgets/BatchList/BatchListPage";
import batchListingServerSideProps from "@/lib/batch-list-server-side-props";
import type {InferGetServerSidePropsType} from "next";

export async function getServerSideProps({ params }: { params: any }) {
    return batchListingServerSideProps(params);
}

export default function CohortBatches(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return <BatchListPage {...props}/>
}
