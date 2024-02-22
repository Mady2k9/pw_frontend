import {PageTitleBar} from "@/widgets/PageTitleBar";
import CommonItemCard from "@/widgets/CommonItemCard";
import {PageTabItemProps, PageTabs} from "@/widgets/PageTabs";
import {useState} from "react";
import TestSeriesDetails from "@/widgets/TestSeriesDetails";
import TestSeriesDetailsTestList from "@/widgets/TestSeriesDetails/TestSeriesDetailsTestList";
import WhyChooseUs from "@/widgets/WhyChooseUs";

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

export async function getServerSideProps({params}: { params: any }) {
    return {
        props:{}
    }
}

export default function TestSeriesDescription() {
    const [activeTab, setActiveTab] = useState<string>(items[0].key);
    const PAGE_SOURCE= 'Details Page'
    return <div>
        <PageTitleBar
            inverted={true} title={'Lakshya JEE 2024 Test Series -12th JEE'}
            floatingCard={<CommonItemCard exploreLink={'/'} buyNowLink={'/'}
                                          thumbnail={''} title={'Lakshaya JEE Mains & Advanced 2023'} page_source={PAGE_SOURCE}/>}
            breadcrumbs={{
                items: [
                    {
                        label: "Test series",
                        link: '/test-series'
                    }, {
                        label: "Neet",
                        link: '/test-series/neet/'
                    }, {
                        label: "Test series Name",
                        link: '/test-series/neet/class-12/lakshya-jee-2024-test-series-12th-jee'
                    }
                ],
                inverted: true
            }}
            descriptionContent={`
                                <ul class="list-disc">
                                <li>
                                <div class="text-[#757575] md:text-sm text-xs font-[500]">PW launched 26 new YT channels in 2022, which helped us increase the total number of students on YouTube from 8.7 million to 22 million.</div>
                                </li>
                                <li>
                                <div class="text-[#757575] md:text-sm text-xs font-[500]">We have produced industry-best results, with 15000+ PWians qualifying in JEE, NEET, and NDA exams. 1 out of 5 students selected for JEE and 1 out of 6 chosen for both the NEET and NDA exams were PWians.</div>
                                </li>
                                <li>
                                <div class="text-[#757575] md:text-sm text-xs font-[500]">Our flagship programs, JEE and NEET, have continued to grow 2x. At the same time, Foundation and Defense Wallah have seen a surge of 3x in student enrollment.</div>
                                </li>
                                <li>
                                <div class="text-[#757575] md:text-sm text-xs font-[500]">PW is delivering magnificent results. Last year, one in every five students was chosen for the JEE exam, and one in every six was chosen for the NEET exam.</div>
                                </li>
                                </ul>`
            }
            description={'Unlock your full potential to maximise your IIT JEE success with our intensive test series.'}/>
        <PageTabs className={'bg-white shadow'} activeItem={activeTab} items={items}
                  handleClick={(e, item) => setActiveTab(item)}/>
        <div className={'md:pr-[400px] container py-4 md:py-6 flex flex-col space-y-4 md:space-y-6'}>
            <TestSeriesDetails/>
            <TestSeriesDetailsTestList/>
            <WhyChooseUs/>
        </div>
    </div>
}
