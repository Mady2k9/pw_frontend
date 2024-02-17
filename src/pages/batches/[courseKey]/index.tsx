import type {GetServerSidePropsContext, InferGetServerSidePropsType} from 'next'
import BatchListPage from "@/widgets/BatchList/BatchListPage";
import batchListingServerSideProps from "@/lib/batch-list-server-side-props";
import {MainBanner} from "@/widgets/MainBanner";
import {Layout} from "@/components/common/Layout";
import {useRouter} from "next/router";


export async function getServerSideProps(context: GetServerSidePropsContext) {
    return batchListingServerSideProps(context);
}

export default function CourseBatches(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const router = useRouter();
    if (!props.pageData) {
        return router.replace('');
    }
    return <Layout seoTags={props.pageData.seoTags} headerData={props.headerData}>
        <BatchListPage {...props.pageData} params={props.params}/>
    </Layout>
}
