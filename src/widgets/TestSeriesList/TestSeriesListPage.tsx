import {PageTitleBar} from "@/widgets/PageTitleBar";
import {PageTabItemProps, PageTabs} from "@/widgets/PageTabs";
import BatchCohortSlider from "@/widgets/BatchList/BatchCohortSlider";
import {useState} from "react";
import SEO from "@/widgets/SEO";
import FiltersBar from "@/widgets/FiltersBar";
import TestSeriesShortList from "@/widgets/TestSeriesList/TestSeriesShortList";
import {useRouter} from "next/router";
import ResultsSection from "@/widgets/ResultsSection";
import FAQ from "@/widgets/FAQ";
import DownloadAppBanner from "@/widgets/DownloadAppBanner";

const items = [{
    title: 'All Tests',
    link: '/test-series/neet',
    key: 'all'
}, {
    title: 'Class 12+',
    link: '/test-series/neet/class-12+',
    key: 'class-12+'
}, {
    title: 'Class 12',
    link: '/test-series/neet/class',
    key: 'class-12'
}];
export default function TestSeriesListPage(props: any) {
    const [activeTab, setActiveTab] = useState<string>(items[0].key);
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
                    label: "Tests Series",
                    link: '/test-series'
                },]
            }}
            description={'Physics Wallah offers an affordable Class 11 IIT JEE online course in India, featuring top faculties, up-to-date syllabus, and best-in-class doubt resolution. Explore lectures, study materials, and mock test series for a state-of-the-art learning experience. '}
            title={<><span className={'text-primary'}>Test Series</span> new Tests</>}/>
        <PageTabs activeItem={activeTab} items={items} handleClick={(e, item) => {
            e.preventDefault();
            setActiveTab(item);
        }}/>
        <div className={'container py-4 space-y-8 md:space-y-10'}>
            <TestSeriesShortList title={'Class 11 IIT-JEE Batches'} testSeries={[]} showMoreLink={'/'}/>
            <TestSeriesShortList title={'Class 12 IIT-JEE Batches'} testSeries={[]} showMoreLink={'/'}/>
        </div>
        {/*<ResultsSection title={'Academic Excellence : Results'}*/}
        {/*                description={'Giving wings to a millions dreams, a million more to go'}/>*/}
        <div
            className={'container'}
            dangerouslySetInnerHTML={{
                __html: `<div class="font-bold text-[#1B2124] xl:text-[32px] xl:leading-[48px] text-[20px] leading-[30px] ">Class 11 IIT JEE Courses</div><div class="py-4 flex flex-col text-left gap-4"><div class=" flex flex-col gap-1.5"><div class="text-[#3d3d3d] md:text-lg text-sm font-bold"><strong>Best Online Course for IIT-JEE Class 11</strong></div><div class="text-[#757575] md:text-sm text-xs font-normal ">The JEE Exam 2025 is one of the toughest exams in the country. Every year, hundreds of thousands of students prepare for the JEE Exam. The best time to begin JEE preparation is in 11th grade. For students in class 11, PW has come up with the best JEE Mains and Advanced courses. In these courses, students will learn from the country\'s best educators at an affordable price. The online courses for IIT JEE comprise live lectures and notes designed per the latest exam pattern of the IIT JEE examination.</div></div><div class=" flex flex-col gap-1.5"><div class="text-[#3d3d3d] md:text-lg text-sm font-bold">Syllabus Covered</div><div class="text-[#757575] md:text-sm text-xs font-[500]">This course will cover the complete syllabus for JEE Exam for Class 11th (Physics, Chemistry, and Mathematics).</div></div><div class=" flex flex-col gap-1.5"><div class="text-[#3d3d3d] md:text-lg text-sm font-bold">Eligibility Criteria</div><ul class="list-disc pl-7"><li><div class="text-[#757575] md:text-sm text-xs font-[500]">Class 11th students and students who have just passed the Class 10th exam and want to crack JEE exam are eligible to sit in this examination.</div></li><li><div class="text-[#757575] md:text-sm text-xs font-[500]">Category Rating- IIT JEE Class 11th: 4.82/5 (1,153,769).</div></li></ul></div><div class=" flex flex-col gap-1.5"><div class="text-[#3d3d3d] md:text-lg text-sm font-bold">Why Join Physics Wallah To Crack IIT JEE?</div><ul class="list-disc pl-7"><li><div class="text-[#757575] md:text-sm text-xs font-[500]">PW launched 26 new YT channels in 2022, which helped us increase the total number of students on YouTube from 8.7 million to 22 million.</div></li><li><div class="text-[#757575] md:text-sm text-xs font-[500]">We have produced industry-best results, with 15000+ PWians qualifying in JEE, NEET, and NDA exams. 1 out of 5 students selected for JEE and 1 out of 6 chosen for both the NEET and NDA exams were PWians.</div></li><li><div class="text-[#757575] md:text-sm text-xs font-[500]">Our flagship programs, JEE and NEET, have continued to grow 2x. At the same time, Foundation and Defense Wallah have seen a surge of 3x in student enrollment.</div></li><li><div class="text-[#757575] md:text-sm text-xs font-[500]">PW is delivering magnificent results. Last year, one in every five students was chosen for the JEE exam, and one in every six was chosen for the NEET exam.</div></li></ul></div><div class=" flex flex-col gap-2"><div class="text-[#3d3d3d] md:text-lg text-sm font-bold"><strong>Most Engaging Batches for Class 11th IIT JEE</strong></div></div><div class=" flex flex-col gap-2"><div class="text-[#3d3d3d] md:text-base text-sm font-[600]"><strong>Arjuna JEE 2023</strong></div><div class="text-[#757575] md:text-sm text-xs font-[500]">This batch will cover the Class 11th syllabus (JEE Main and JEE Advanced). Students will get live classes, recorded video lectures, notes, and daily practice problems with video solutions. This batch will also provide a bridge (Basics of Class 11th) course. The syllabus of the Arjuna batch will be completed by Jan 2023.</div></div><div class=" flex flex-col gap-2"><div class="text-[#3d3d3d] md:text-base text-sm font-[600]">Arjuna JEE Fast Track Batch</div><div class="text-[#757575] md:text-sm text-xs font-[500]">Arjuna JEE Fast Track is a three-month course for Class 11th students preparing for JEE Mains and Advanced. This batch will cover the 11th grade (JEE Mains and Advanced) syllabus. With this course, students will get recorded video lectures, the best in doubt-solving faculty, notes, and DPP with video solutions.</div></div><div class=" flex flex-col gap-2"><div class="text-[#3d3d3d] md:text-base text-sm font-[600]">Course highlights</div><div class="text-[#757575] md:text-sm text-xs font-[500]">Students can enroll in batches designed for the IIT JEE full course or the IIT JEE crash course according to their requirements; the courses will provide you with the following:</div><ul class="list-disc pl-7"><li><div class="text-[#757575] md:text-sm text-xs font-[500]">Class 11th (JEE Mains and Advance) syllabus for session 2023-24: Core subjects like physics, chemistry, and mathematics will be covered.</div></li><li><div class="text-[#757575] md:text-sm text-xs font-[500]">We have produced industry-best results, with 15000+ PWians qualifying in JEE, NEET, and NDA exams. 1 out of 5 students selected for JEE and 1 out of 6 chosen for both the NEET and NDA exams were PWians.</div></li><li><div class="text-[#757575] md:text-sm text-xs font-[500]">Our flagship programs, JEE and NEET, have continued to grow 2x. At the same time, Foundation and Defense Wallah have seen a surge of 3x in student enrollment.</div></li><li><div class="text-[#757575] md:text-sm text-xs font-[500]">PW is delivering magnificent results. Last year, one in every five students was chosen for the JEE exam, and one in every six was chosen for the NEET exam.</div></li></ul></div><div class=" flex flex-col gap-2"><div class="text-[#3d3d3d] md:text-base text-sm font-[600]"><strong>Benefits of the courses</strong></div><ul class="list-disc pl-7"><li><div class="text-[#757575] md:text-sm text-xs font-[500]">Class 11th (JEE Mains and Advance) syllabus for session 2023-24: Core subjects like physics, chemistry, and mathematics will be covered.</div></li><li><div class="text-[#757575] md:text-sm text-xs font-[500]">We have produced industry-best results, with 15000+ PWians qualifying in JEE, NEET, and NDA exams. 1 out of 5 students selected for JEE and 1 out of 6 chosen for both the NEET and NDA exams were PWians.</div></li><li><div class="text-[#757575] md:text-sm text-xs font-[500]">Our flagship programs, JEE and NEET, have continued to grow 2x. At the same time, Foundation and Defense Wallah have seen a surge of 3x in student enrollment.</div></li><li><div class="text-[#757575] md:text-sm text-xs font-[500]">PW is delivering magnificent results. Last year, one in every five students was chosen for the JEE exam, and one in every six was chosen for the NEET exam.</div></li></ul></div></div>`
            }}/>
        <FAQ items={[]}/>
        {/*<DownloadAppBanner/>*/}
    </>
}
