import {
    fetchBatchListingAll,
    fetchBatchNotForAll,
    FetchFooter,
    FetchHeader,
    FetchHomePage
} from "@/api/older-api-methods";

export default async function batchListingServerSideProps(params: any){
    let HomePageData;
    let headerData;
    let footerData;
    let batchlistingAll;
    let batchNotForAll;
    try {
        const result = await Promise.all([
            FetchHomePage(),
            FetchHeader(),
            FetchFooter(),
            fetchBatchListingAll(),
            fetchBatchNotForAll(),
        ]);
        HomePageData = result[0];
        headerData = result[1];
        footerData = result[2];
        batchlistingAll = result[3];
        batchNotForAll = result[4];
    } catch (error) {
        // console.log(error);
    }
    return {
        props: {
            HomePageData: HomePageData || {},
            headerData: headerData?.data || {},
            footerData: footerData || {},
            batchlistingAll: batchlistingAll || {},
            batchNotForAll: batchNotForAll || {},
            params: params,
        },
    };
}
