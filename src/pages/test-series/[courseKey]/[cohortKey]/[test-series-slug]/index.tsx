import { PageTitleBar } from "@/widgets/PageTitleBar";
import CommonItemCard from "@/widgets/CommonItemCard";
import { PageTabItemProps, PageTabs } from "@/widgets/PageTabs";
import { useState } from "react";
import TestSeriesDetails from "@/widgets/TestSeriesDetails";
import TestSeriesDetailsTestList from "@/widgets/TestSeriesDetails/TestSeriesDetailsTestList";
import WhyChooseUs from "@/widgets/WhyChooseUs";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import getTestDescriptionServerSideProps from "@/lib/test-series-description-server-side";
import { slugToString, stringToSlug } from "@/lib/utils";
import { useRouter } from "next/router";
import { ItestModeId } from "@/api/interfaces/page";
import { Layout } from "@/components/common/Layout";
import TestSeriesCard from "@/widgets/CommonItemCard/TestSeriesCard";

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
const getBreadcrumbs = ({ cohortKey, courseKey, batchDetails }: {
    courseKey: string,
    cohortKey?: string,
    batchDetails: ItestModeId
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
                label: `${batchDetails.title}`,
                link: `/test-series/${stringToSlug(courseKey)}/${stringToSlug(cohortKey)}/${batchDetails.seoSlug}`,
            });
        }
    }

    return items;
};
export async function getServerSideProps(context: GetServerSidePropsContext) {
    return getTestDescriptionServerSideProps(context);
  }

export default function TestSeriesDescription(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const [activeTab, setActiveTab] = useState<string>(items[0].key);
    const PAGE_SOURCE= 'Details Page'
    const router = useRouter()
    const { courseKey, cohortKey } = router.query;

    // console.log(props.pageData?.testModeId, 'desProps' )

    return <Layout seoSchema={props?.pageData?.seoSchema} className={'pb-[60px] md:pb-0'} footerData={props.footerData}
        seoTags={props?.pageData?.seoTags}
        headerData={props.headerData} page_source={PAGE_SOURCE}>
        <div>
            <PageTitleBar
                inverted={true} title={props?.pageData?.title ? props?.pageData?.title : props?.pageData?.testModeId?.title}
                floatingCard={<TestSeriesCard exploreLink={'/'} buyNowLink={'/'}
                    thumbnail={props.pageData?.testModeId.imageId ? props?.pageData?.testModeId?.imageId?.baseUrl + props?.pageData?.testModeId?.imageId?.key : ''} title={props?.pageData?.testModeId?.title ? props?.pageData?.testModeId?.title : "Testing"} page_source={PAGE_SOURCE}
                    discount={props?.pageData?.testModeId.discount} amount={props?.pageData?.testModeId.price} updatedAmount={props?.pageData?.testModeId.postDiscountPrice}
                    meta={props?.pageData?.testModeId?.meta} whatsappLink={``}
                />}
                breadcrumbs={{
                    items: getBreadcrumbs({
                        courseKey: courseKey as string,
                        cohortKey: cohortKey as string,
                        batchDetails: props.pageData?.title,
                    }),
                    inverted: true
                }}
                descriptionContent={props.pageData?.testModeId.meta}
                // descriptionContent={props.pageData?.testModeId.meta.map((data)=>{
                //    return data.text
                // })}
                description={props?.pageData?.testModeId?.description?.replace( /(<([^>]+)>)/ig, '')} />
            {/* <PageTabs className={'bg-white shadow'} activeItem={activeTab} items={props?.pageData?.tabs} */}
            <PageTabs className={'bg-white shadow'} activeItem={activeTab} items={items}
                handleClick={(e, item) => setActiveTab(item)} />
            <div className={'md:pr-[400px] container py-4 md:py-6 flex flex-col space-y-4 md:space-y-6'}>
                <TestSeriesDetails metaData={props?.pageData?.testModeId} />
                <TestSeriesDetailsTestList />
                <WhyChooseUs whyChooseData={props?.pageData?.testModeId?.label1} />
            </div>
        </div>
    </Layout>
}
