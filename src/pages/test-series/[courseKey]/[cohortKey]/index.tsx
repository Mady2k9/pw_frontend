import batchListingServerSideProps from "@/lib/batch-list-server-side-props";
import type {InferGetServerSidePropsType} from "next";
import TestSeriesListPage from "@/widgets/TestSeriesList/TestSeriesListPage";

export async function getServerSideProps({params}: { params: any }) {
    return batchListingServerSideProps(params);
}

export default function CohortBatches(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return <TestSeriesListPage {...props}/>
}
