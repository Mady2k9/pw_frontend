import {PageTitleBar} from "@/widgets/PageTitleBar";
import {PageTabItemProps, PageTabs} from "@/widgets/PageTabs";
import BatchShortList from "@/widgets/BatchList/BatchShortList";
import {useState} from "react";
import SEO from "@/widgets/SEO";

const items = [{
    title: 'All Batches',
    link: '/batches/neet',
    key: 1
}, {
    title: 'Class 12+',
    link: '/batches/neet/class-12+',
    key: 2
}, {
    title: 'Class 12',
    link: '/batches/neet/class',
    key: 3
}];
export default function BatchListPage(props: any){
    const [activeTab, setActiveTab] = useState<PageTabItemProps>(items[0]);
    const batchListingData = props?.batchlistingAll?.data;
    return <>
        <SEO
            title={batchListingData?.seoTags?.pageMetaTags?.metaTitle}
            description={batchListingData?.seoTags?.pageMetaTags?.metaDescription}
            keyword={batchListingData?.seoTags?.pageMetaTags?.metaKeywords}
            canonical={batchListingData?.seoTags?.canonicalLink}
        />
        <PageTitleBar
            breadcrumbs={{
                items: [{
                    label: "Course",
                    link: '/'
                }]
            }}
            description={'Physics Wallah offers an affordable Class 11 IIT JEE online course in India, featuring top faculties, up-to-date syllabus, and best-in-class doubt resolution. Explore lectures, study materials, and mock test series for a state-of-the-art learning experience. '}
            title={<><span className={'text-primary'}>Batches</span> new Batches</>}/>
        <PageTabs activeItem={activeTab} items={items} handleClick={(e, item) => setActiveTab(item)}/>
        <div className={'container py-4 space-y-8 md:space-y-10'}>
            <BatchShortList title={'Class 11 IIT-JEE Batches'} batches={[]} showMoreLink={'/'}/>
            <BatchShortList title={'Class 12 IIT-JEE Batches'} batches={[]} showMoreLink={'/'}/>
        </div>

    </>
}
