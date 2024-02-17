import type { InferGetServerSidePropsType } from 'next'
import BatchListPage from "@/widgets/BatchList/BatchListPage";
import batchListingServerSideProps from "@/lib/batch-list-server-side-props";
import TestSeriesListPage from "@/widgets/TestSeriesList/TestSeriesListPage";

export default function CourseBatches(props ={}) {
   return <TestSeriesListPage {...props}/>
}
