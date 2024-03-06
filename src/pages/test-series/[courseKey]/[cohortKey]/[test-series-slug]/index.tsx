import { PageTitleBar } from "@/widgets/PageTitleBar";
import CommonItemCard from "@/widgets/CommonItemCard";
import { PageTabItemProps, PageTabs } from "@/widgets/PageTabs";
import { useEffect, useMemo, useState } from "react";
import TestSeriesDetails from "@/widgets/TestSeriesDetails";
import TestSeriesDetailsTestList from "@/widgets/TestSeriesDetails/TestSeriesDetailsTestList";
import WhyChooseUs from "@/widgets/WhyChooseUs";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import getTestDescriptionServerSideProps from "@/lib/test-series-description-server-side";
import { slugToString, stringToBase64, stringToSlug } from "@/lib/utils";
import { useRouter } from "next/router";
import { ItestModeId } from "@/api/interfaces/page";
import { Layout } from "@/components/common/Layout";
import TestSeriesCard from "@/widgets/CommonItemCard/TestSeriesCard";
import HtmlContentWidget from "@/widgets/HtmlContentWidget/HtmlContentWidget";
import { Image } from "@/components/ui/image";
import { Button } from "@/components/ui/button";
import PriceDisplay from "@/widgets/PriceDisplay";

const items = [{
    title: 'Inclusion',
    link: '#Inclusion',
    key: 'Inclusion'
}, {
    title: 'Tests',
    link: '#Tests-List',
    key: 'Tests'
}, {
    title: 'Why Choose Us',
    link: '#Why Choose Us',
    key: 'Why Choose Us'
}, {
    title: 'What You Will Experience',
    link: '#What You Will Experience',
    key: 'What You Will Experience'
}];

export async function getServerSideProps(context: GetServerSidePropsContext) {
    return getTestDescriptionServerSideProps(context);
}

export default function TestSeriesDescription(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const getBreadcrumbs = ({ cohortKey, courseKey, batchDetails }: {
        courseKey: string,
        cohortKey?: string,
        batchDetails?: string
    }) => {
        const items: { label: string, link: string }[] = [{
            label: `${slugToString(courseKey).toUpperCase()} Test Series`,
            link: `/test-series/${stringToSlug(courseKey)}`,
        }];
        if (cohortKey) {
            items.push({
                label: `${slugToString(cohortKey)} ${stringToSlug(courseKey).toUpperCase()} Test Series`,
                link: `/test-series/${stringToSlug(courseKey)}/${stringToSlug(cohortKey)}`,
            });
            if (batchDetails) {
                items.push({
                    label: `${props?.pageData?.testModeId?.title}`,
                    link: `/test-series/${stringToSlug(courseKey)}/${stringToSlug(cohortKey)}/${props.pageData?.testModeId?.slug}`,
                });
            }
        }
        return items;
    };
    const [activeTab, setActiveTab] = useState<string>(items[0].key);
    const PAGE_SOURCE = 'Details Page'
    const router = useRouter()
    const { courseKey, cohortKey } = router.query;
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const [testData, setTestData] = useState<any>()


    const testDatas = async () => {
        await fetch(`${baseUrl}/gcms/tests?categoryModeId=${props?.pageData?.testModeId?.categoryModeId}`)
            .then(response => response.json())
            .then(data => setTestData(data))
            .catch(error => console.error('Error:', error));
    }
    useEffect(() => {
        testDatas()
    }, [])
    const testSeriesCard = useMemo(() => {
        if (!props.pageData) {
            return <></>;
        }
        return <div className={'w-full sm:w-auto'}>
            <TestSeriesCard 
            buyNowLink={`${baseUrl}/study/auth?encoded_redirect_url=${stringToBase64(`${baseUrl}/test-series?childUrl=/test-series/${props?.pageData?.testModeId?.categoryId}/mode/${props?.pageData?.testModeId?.categoryModeId}`)}`}
                thumbnail={props.pageData?.testModeId?.imageId ? props?.pageData?.testModeId?.imageId?.baseUrl + props?.pageData?.testModeId?.imageId?.key : ''} title={props?.pageData?.testModeId?.title ? props?.pageData?.testModeId?.title : "Testing"} page_source={PAGE_SOURCE}
                discount={props?.pageData?.testModeId?.discount} amount={props?.pageData?.testModeId?.price} updatedAmount={props?.pageData?.testModeId?.postDiscountPrice}
                meta={props?.pageData?.testModeId?.meta} whatsappLink={props?.pageData?.slug}
            />
        </div>;
    }, [props]);
    console.log(props.pageData, 'desProps')

    return <Layout seoSchema={props?.pageData?.seoSchema} className={'pb-[60px] md:pb-0'} footerData={props.footerData}
        seoTags={props?.pageData?.seoTags}
        headerData={props.headerData} page_source={PAGE_SOURCE}>
        <div>
            <PageTitleBar
                inverted={true} title={props?.pageData?.title ? props?.pageData?.title : props?.pageData?.testModeId?.title}
                breadcrumbs={{
                    items: getBreadcrumbs({
                        courseKey: courseKey as string,
                        cohortKey: cohortKey as string,
                        batchDetails: props.pageData?.testModeId?.title,
                    }),
                    inverted: true
                }}
                descriptionElement={<div>
                    {props?.pageData?.testModeId?.meta?.map((data) => {
                        return <div key={data?.text} className="flex items-center">
                            <Image src={data?.icon?.baseUrl + data?.icon?.key} className="w-8 h-8 bg-center bg-no-repeat bg-cover" />
                            <HtmlContentWidget content={data?.text} />
                        </div>
                    })}
                </div>}
                descriptionContent={props?.pageData?.testModeId?.description} />
            {/* <PageTabs className={'bg-white shadow'} activeItem={activeTab} items={props?.pageData?.tabs} */}
             <PageTabs className={'bg-white shadow'} activeItem={activeTab} items={items}
                handleClick={(e, item) => setActiveTab(item)} />
            <div className={'w-full container py-4 md:py-6 flex lg:flex-row-reverse justify-between flex-col space-y-4 md:space-y-0 space-x-4 space-x-reverse'}>
                <div className={'relative lg:z-10 lg:mt-[-320px] mt-[0px]'}>
                    <div
                        className="mb-4 md:mb-6 lg:mb-0 lg:min-w-[360px] sm:w-[360px] min-w-[280px] lg:m-0 mx-auto sticky top-[156px]">
                        {testSeriesCard}
                    </div>
                </div>
                <div className={'lg:w-[67%] w-full flex flex-col space-y-4 md:space-y-6'}>
               {props?.pageData?.testModeId?.meta && props?.pageData?.testModeId?.meta?.length> 0 &&
               <TestSeriesDetails metaData={props?.pageData?.testModeId} />
               }
                {testData?.data?.length > 0 && <TestSeriesDetailsTestList testData={testData} />}
                {props?.pageData?.testModeId?.label1 && props?.pageData?.testModeId?.label1?.length > 0 && <WhyChooseUs whyChooseData={props?.pageData?.testModeId?.label1} />}
            </div>
            </div>
        </div>
        {
            props?.pageData?.testModeId?.price &&
            <div className={'fixed md:hidden bottom-0 px-4 left-0 right-0 py-2 flex items-center card-shadow bg-white'}>
                <div className={'flex-1'}>
                    <PriceDisplay compact={true} amount={props?.pageData?.testModeId.price} discount={props?.pageData?.testModeId.discount}
                        total={props?.pageData?.testModeId.postDiscountPrice} />
                </div>
                <Button className={'flex-1'}>Buy Now</Button>
            </div>
        }
    </Layout>
}
