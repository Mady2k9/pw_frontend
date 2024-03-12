import { PageTitleBar } from "@/widgets/PageTitleBar";
import { PageTabItemProps, PageTabs } from "@/widgets/PageTabs";
import { ReactElement, useEffect, useMemo, useState } from "react";
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
import { scrollToElement, scrollWrapperLeftToElement } from "@/lib/dom.utils";
import PhoneIcon from "@/deprecated/shared/Components/Molecules/PhoneIcon/PhoneIcon";
import FAQ from "@/widgets/FAQ";


export async function getServerSideProps(context: GetServerSidePropsContext) {
    return getTestDescriptionServerSideProps(context);
}

export default function TestSeriesDescription(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const PAGE_SOURCE = 'TEST-SERIES_DETAILS_PAGE';
    const router = useRouter();
    const { courseKey, cohortKey } = router.query;
    const baseUrlForApi = process.env.NEXT_PUBLIC_API_URL;
    const baseUrl = process.env.NEXT_PUBLIC_APP_BASE_URL;
    const [testData, setTestData] = useState<any>()


    const testDatas = async () => {
        await fetch(`${baseUrlForApi}/gcms/tests?categoryModeId=${props?.pageData?.testModeId?.categoryModeId}`)
            .then(response => response.json())
            .then(data => setTestData(data))
            .catch(error => console.error('Error:', error));
    }
    useEffect(() => {
        testDatas()
    }, [])
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
    const getWidgets = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
        const items: {
            title: string,
            link: string,
            key: string,
            widget: ReactElement
        }[] = [];
        if (props?.pageData) {
            props.pageData.tabs.forEach((tab) => {
                if (tab === 'Test' && testData?.data?.length > 0) {
                    items.push({
                        title: tab,
                        link: `#${stringToSlug(tab)}`,
                        key: stringToSlug(tab),
                        widget: <div id={`${stringToSlug(tab)}`}>
                            <TestSeriesDetailsTestList testData={testData} url={`${baseUrl}/study/test-series?childUrl=/test-series/${props?.pageData?.testModeId?.categoryId}/mode/${props?.pageData?.testModeId?.categoryModeId}`} />
                        </div>,
                    });
                } else if (tab === 'Inclusions' && props?.pageData?.testModeId?.meta && props?.pageData?.testModeId?.meta?.length > 0) {
                    items.push({
                        title: tab,
                        link: `#${stringToSlug(tab)}`,
                        key: stringToSlug(tab),
                        widget: <div id={`${stringToSlug(tab)}`}>
                            <TestSeriesDetails metaData={props?.pageData?.testModeId} 
                            cohortKey={cohortKey? cohortKey:''}
                            />
                        </div>,
                    });
                } else if (tab === 'Why Choose Us' && props?.pageData?.testModeId?.label1 && props?.pageData?.testModeId?.label1?.length > 0) {
                    items.push({
                        title: tab,
                        link: `#${stringToSlug(tab)}`,
                        key: stringToSlug(tab),
                        widget: <div id={`${stringToSlug(tab)}`}>
                            <WhyChooseUs whyChooseData={props?.pageData?.testModeId?.label1} />
                        </div>,
                    });
                } else {
                    console.log(tab);
                }
            });
        }

        return items;
    };
    const Widgets = useMemo(() => {
        return getWidgets(props);
    }, [props, testData]);
    useEffect(() => {
        let visibleElements: Record<string, IntersectionObserverEntry> = {};

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const id = entry.target.id;
                    if (entry.isIntersecting) {
                        visibleElements[id] = entry;
                    } else {
                        delete visibleElements[id];
                    }
                    const visibleEntries = Object.values(visibleElements);
                    if (visibleEntries.length > 0) {
                        const topMostElement = visibleEntries.reduce((prev, current) => {
                            return (prev.target.getBoundingClientRect().top < current.target.getBoundingClientRect().top) ? prev : current;
                        });
                        scrollWrapperLeftToElement(document.getElementById('page-tabs-wrapper')!, document.getElementById(`${topMostElement.target.id}-tab`), false);

                        setActiveTab(topMostElement.target.id);
                    }
                });
            },
            {
                root: null,
                rootMargin: `-120px 0px 0px 0px`,
                threshold: 0.1,
            },
        );
        Widgets.forEach((tab) => {
            const slug = tab.key;
            const element = document.getElementById(slug);
            if (element) observer.observe(element);
        });

        return () => {
            Widgets.forEach((tab) => {
                const slug = tab.key;
                const element = document.getElementById(slug);
                if (element) observer.unobserve(element);
            });
        };
    }, [Widgets]);
    const [activeTab, setActiveTab] = useState<string>(Widgets[0].key);
    const testSeriesCard = useMemo(() => {
        if (!props.pageData) {
            return <></>;
        }
        return <div className={'w-full sm:w-auto'}>
            <TestSeriesCard 
            buyNowLink={`${baseUrl}/study/test-series?childUrl=/test-series/${props?.pageData?.testModeId?.categoryId}/mode/${props?.pageData?.testModeId?.categoryModeId}`}
                thumbnail={props.pageData?.testModeId?.imageId ? props?.pageData?.testModeId?.imageId?.baseUrl + props?.pageData?.testModeId?.imageId?.key : ''} title={props?.pageData?.testModeId?.title ? props?.pageData?.testModeId?.title : "Testing"} page_source={PAGE_SOURCE}
                discount={props?.pageData?.testModeId?.discount} amount={props?.pageData?.testModeId?.price} updatedAmount={props?.pageData?.testModeId?.postDiscountPrice}
                meta={props?.pageData?.testModeId?.meta} whatsappLink={props?.pageData?.slug}
            />
        </div>;
    }, [props]);
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
                            <Image src={data?.icon?.baseUrl + data?.icon?.key} className="sm:w-8 sm:h-8 w-6 h-6 bg-center bg-no-repeat bg-cover" />
                            <HtmlContentWidget content={data?.text} />
                        </div>
                    })}
                </div>}
                descriptionContent={props?.pageData?.testModeId?.description} />
                 <PhoneIcon page_source={PAGE_SOURCE} />
            <PageTabs className={'bg-white shadow'} activeItem={activeTab} items={Widgets}
                handleClick={(e, item) => {
                    e.preventDefault();
                    scrollToElement(document.getElementById(item)!, true);
                }} />
            <div className={'w-full container py-4 md:py-6 flex lg:flex-row-reverse justify-between flex-col space-y-3 md:space-y-0 space-x-4 space-x-reverse'}>
                <div className={'relative lg:z-10 lg:mt-[-320px] mt-[0px]'}>
                    <div
                        className=" md:mb-6 lg:mb-0 lg:min-w-[360px] sm:w-[360px] min-w-[280px] lg:m-0 mx-auto sticky top-[156px]">
                        {testSeriesCard}
                    </div>
                </div>
                <div className={'lg:w-[67%] w-full flex flex-col space-y-4 md:space-y-6'}>
                    {
                        Widgets.map((widget, index) => {
                            return <div className={'flex flex-col space-y-4 md:space-y-6 ' + index} key={index}>
                                {widget.widget}
                            </div>;
                        })
                    }
                </div>
            </div>
        </div>
        <div className="container sm:py-6 py-4">
        {props?.pageData?.faqs && props?.pageData?.faqs?.length > 0 && <FAQ items={props?.pageData?.faqs} pageSource={PAGE_SOURCE} />}
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
