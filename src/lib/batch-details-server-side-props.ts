import type {GetServerSidePropsContext} from "next";
import {IPageData} from "@/api/interfaces/page";
import {IBatch} from "@/api/interfaces/batch";
import {FetchFooter, FetchHeader} from "@/api/older-api-methods";
import {batchPageSnapshot} from "@/api/page-apis";

export default async function batchDetailsServerSideProps(context: GetServerSidePropsContext) {
    const {resolvedUrl} = context;
    const urlWithoutQuery = resolvedUrl?.split('?')[0];
    let headerData;
    let footerData;
    let pageData: IPageData | undefined = undefined;
    let batch: IBatch | undefined = undefined;
    try {
        const result = await Promise.all([
            FetchHeader(),
            FetchFooter(),
            batchPageSnapshot(urlWithoutQuery, 'BATCH_DESCRIPTION')
        ]);
        headerData = result[0];
        footerData = result[1];
        pageData = result[2]?.data;
        // @ts-ignore
        batch = pageData.batches[0]


    } catch (error) {
        // console.log(error);
    }
    if (!pageData || !batch) {
        return {
            redirect: {
                permanent: false,
                destination: "/",
            },
            props: {},
        }
    }
    pageData.batches = {};
    return {
        props: {
            headerData: headerData?.data || {},
            footerData: footerData?.data || {},
            pageData: pageData,
            batch,
            params: context.params,
        },
    };
}
