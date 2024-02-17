import {PageTitleBar} from "@/widgets/PageTitleBar";
import {MainBanner} from "@/widgets/MainBanner";
import ExamCategorySection from "@/widgets/ExamCategorySection";
import ResultsSection from "@/widgets/ResultsSection";
import FAQ from "@/widgets/FAQ";
import FeaturesSection from "@/widgets/FeaturesSection";
import DownloadAppBanner from "@/widgets/DownloadAppBanner";
import type {GetServerSidePropsContext, InferGetServerSidePropsType} from "next";
import {getTestPageSnapshot} from "@/api/page-apis";
import {ICMSErrorResponse} from "@/api/interfaces/api-error";

const banners = [
    {
        "mwebImage": "https://d2bps9p1kiy4ka.cloudfront.net/5b09189f7285894d9130ccd0/961cb3ae-c1df-405b-9382-9a14f986675b.webp",
        "dwebImage": "https://d2bps9p1kiy4ka.cloudfront.net/5b09189f7285894d9130ccd0/5a4c751c-5f04-42f5-b58b-61f17b89641a.webp",
        "redirectionUrl": "https://www.pw.live",
        "displayOrder": 2,
        "altTag": "22"
    },
    {
        "displayOrder": 3,
        "mwebImage": "https://d2bps9p1kiy4ka.cloudfront.net/5b09189f7285894d9130ccd0/7c37ac3c-2a8d-4bde-b377-199e7c13b436.png",
        "dwebImage": "https://d2bps9p1kiy4ka.cloudfront.net/5b09189f7285894d9130ccd0/252c4326-f89b-44cb-9ff0-894ffd3cad91.png",
        "redirectionUrl": "https://www.pw.live",
        "altTag": "33"
    }
];
const PAGE_KEY = '/test-series';

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const testPageSnapshot = await getTestPageSnapshot(PAGE_KEY);
    if (!testPageSnapshot?.data) {
        return {
            redirect: {
                permanent: false,
                destination: "/",
            },
            props: {},
        };
    }
    // const Widgets = testPageSnapshot?.data?.widgetOrder.map((widget: string) => {
    //     return testPageSnapshot?.data?.widgetJson[widget];
    // }).filter((d: any) => !!d);

    return {
        props: {

        },
    }
}

export default function TestSeriesPage(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return <>
        <PageTitleBar breadcrumbs={{
            items: [{
                label: "Test Series",
                link: '/test-series'
            }]
        }}>
        </PageTitleBar>
        <MainBanner stretched={true} items={banners.map((banner) => {
            return {
                image: banner.dwebImage,
                mWebImage: banner.mwebImage,
                alt: banner.altTag,
                link: banner.redirectionUrl
            }
        })}/>
        <div className={'flex flex-col gap-4 md:gap-6'}>
            <ExamCategorySection title={'Unlock Success with PW Test Series'}
                                 categories={[{
                                     slug: 'iit-jee',
                                     name: 'IIT JEE',
                                     exploreActionText: 'Explore Tests',
                                     exams: [{
                                         slug: '11',
                                         name: 'Class 11'
                                     }, {
                                         slug: '12',
                                         name: 'Class 12'
                                     }, {
                                         slug: 'dropper',
                                         name: 'Dropper'
                                     }, {
                                         slug: '11',
                                         name: 'Class 11'
                                     }, {
                                         slug: '12',
                                         name: 'Class 12'
                                     }, {
                                         slug: 'dropper',
                                         name: 'Dropper'
                                     }]
                                 }, {
                                     slug: 'neet',
                                     name: 'NEET',
                                     exploreActionText: 'Explore Tests',
                                     exams: [{
                                         slug: '11',
                                         name: 'Class 11'
                                     }, {
                                         slug: '12',
                                         name: 'Class 12'
                                     }, {
                                         slug: 'dropper',
                                         name: 'Dropper'
                                     }]
                                 }, {
                                     slug: 'iit-jee',
                                     name: 'IIT JEE',
                                     exploreActionText: 'Explore Tests',
                                     exams: [{
                                         slug: '11',
                                         name: 'Class 11'
                                     }, {
                                         slug: '12',
                                         name: 'Class 12'
                                     }, {
                                         slug: 'dropper',
                                         name: 'Dropper'
                                     }, {
                                         slug: '11',
                                         name: 'Class 11'
                                     }, {
                                         slug: '12',
                                         name: 'Class 12'
                                     }, {
                                         slug: 'dropper',
                                         name: 'Dropper'
                                     }]
                                 }, {
                                     slug: 'neet',
                                     name: 'NEET',
                                     exploreActionText: 'Explore Tests',
                                     exams: [{
                                         slug: '11',
                                         name: 'Class 11'
                                     }, {
                                         slug: '12',
                                         name: 'Class 12'
                                     }, {
                                         slug: 'dropper',
                                         name: 'Dropper'
                                     }]
                                 }, {
                                     slug: 'neet',
                                     name: 'NEET',
                                     exploreActionText: 'Explore Tests',
                                     exams: [{
                                         slug: '11',
                                         name: 'Class 11'
                                     }, {
                                         slug: '12',
                                         name: 'Class 12'
                                     }, {
                                         slug: 'dropper',
                                         name: 'Dropper'
                                     }]
                                 }, {
                                     slug: 'iit-jee',
                                     name: 'IIT JEE',
                                     exploreActionText: 'Explore Tests',
                                     exams: [{
                                         slug: '11',
                                         name: 'Class 11'
                                     }, {
                                         slug: '12',
                                         name: 'Class 12'
                                     }, {
                                         slug: 'dropper',
                                         name: 'Dropper'
                                     }, {
                                         slug: '11',
                                         name: 'Class 11'
                                     }, {
                                         slug: '12',
                                         name: 'Class 12'
                                     }, {
                                         slug: 'dropper',
                                         name: 'Dropper'
                                     }]
                                 },]}
                                 description={'Unlock the doors to Physics Wallah\'s cutting-edge test engine, a powerful tool that propels you forward on your journey to realizing your dreams and aspirations.'}/>
            <FeaturesSection title={'Why PW Test Series?'}
                             description={'Discover the key features of our PW Test Series'}
                             features={[{
                                 title: 'Designed by Top Faculties',
                                 description: 'Attempt exclusive tests designed by the best faculties across the country'
                             }, {
                                 title: 'Latest Pattern',
                                 description: 'Stay up to date with the latest test patterns with our test series'
                             }, {
                                 title: 'Elaborate Results',
                                 description: 'Get detailed test performance reports and dashboard'
                             }, {
                                 title: 'State & All India Rank',
                                 description: 'See where you stand amongst your peers in your state and country'
                             }, {
                                 title: '24x7 Doubt Support',
                                 description: 'Get your doubts solved by our expert faculty 24x7.'
                             }, {
                                 title: 'Personalized Study Plan',
                                 description: 'Get a personalized study plan based on your performance.'
                             },]}
            />
            <ResultsSection results={[]} title={'Academic Excellence : Results'}
                            description={'Giving wings to a millions dreams, a million more to go'}/>
            <div
                className={'container'}
                dangerouslySetInnerHTML={{
                    __html: `<div class="font-bold text-[#1B2124] xl:text-[32px] xl:leading-[48px] text-[20px] leading-[30px] ">Class 11 IIT JEE Courses</div><div class="py-4 flex flex-col text-left gap-4"><div class=" flex flex-col gap-1.5"><div class="text-[#3d3d3d] md:text-lg text-sm font-bold"><strong>Best Online Course for IIT-JEE Class 11</strong></div><div class="text-[#757575] md:text-sm text-xs font-normal ">The JEE Exam 2025 is one of the toughest exams in the country. Every year, hundreds of thousands of students prepare for the JEE Exam. The best time to begin JEE preparation is in 11th grade. For students in class 11, PW has come up with the best JEE Mains and Advanced courses. In these courses, students will learn from the country\'s best educators at an affordable price. The online courses for IIT JEE comprise live lectures and notes designed per the latest exam pattern of the IIT JEE examination.</div></div><div class=" flex flex-col gap-1.5"><div class="text-[#3d3d3d] md:text-lg text-sm font-bold">Syllabus Covered</div><div class="text-[#757575] md:text-sm text-xs font-[500]">This course will cover the complete syllabus for JEE Exam for Class 11th (Physics, Chemistry, and Mathematics).</div></div><div class=" flex flex-col gap-1.5"><div class="text-[#3d3d3d] md:text-lg text-sm font-bold">Eligibility Criteria</div><ul class="list-disc pl-7"><li><div class="text-[#757575] md:text-sm text-xs font-[500]">Class 11th students and students who have just passed the Class 10th exam and want to crack JEE exam are eligible to sit in this examination.</div></li><li><div class="text-[#757575] md:text-sm text-xs font-[500]">Category Rating- IIT JEE Class 11th: 4.82/5 (1,153,769).</div></li></ul></div><div class=" flex flex-col gap-1.5"><div class="text-[#3d3d3d] md:text-lg text-sm font-bold">Why Join Physics Wallah To Crack IIT JEE?</div><ul class="list-disc pl-7"><li><div class="text-[#757575] md:text-sm text-xs font-[500]">PW launched 26 new YT channels in 2022, which helped us increase the total number of students on YouTube from 8.7 million to 22 million.</div></li><li><div class="text-[#757575] md:text-sm text-xs font-[500]">We have produced industry-best results, with 15000+ PWians qualifying in JEE, NEET, and NDA exams. 1 out of 5 students selected for JEE and 1 out of 6 chosen for both the NEET and NDA exams were PWians.</div></li><li><div class="text-[#757575] md:text-sm text-xs font-[500]">Our flagship programs, JEE and NEET, have continued to grow 2x. At the same time, Foundation and Defense Wallah have seen a surge of 3x in student enrollment.</div></li><li><div class="text-[#757575] md:text-sm text-xs font-[500]">PW is delivering magnificent results. Last year, one in every five students was chosen for the JEE exam, and one in every six was chosen for the NEET exam.</div></li></ul></div><div class=" flex flex-col gap-2"><div class="text-[#3d3d3d] md:text-lg text-sm font-bold"><strong>Most Engaging Batches for Class 11th IIT JEE</strong></div></div><div class=" flex flex-col gap-2"><div class="text-[#3d3d3d] md:text-base text-sm font-[600]"><strong>Arjuna JEE 2023</strong></div><div class="text-[#757575] md:text-sm text-xs font-[500]">This batch will cover the Class 11th syllabus (JEE Main and JEE Advanced). Students will get live classes, recorded video lectures, notes, and daily practice problems with video solutions. This batch will also provide a bridge (Basics of Class 11th) course. The syllabus of the Arjuna batch will be completed by Jan 2023.</div></div><div class=" flex flex-col gap-2"><div class="text-[#3d3d3d] md:text-base text-sm font-[600]">Arjuna JEE Fast Track Batch</div><div class="text-[#757575] md:text-sm text-xs font-[500]">Arjuna JEE Fast Track is a three-month course for Class 11th students preparing for JEE Mains and Advanced. This batch will cover the 11th grade (JEE Mains and Advanced) syllabus. With this course, students will get recorded video lectures, the best in doubt-solving faculty, notes, and DPP with video solutions.</div></div><div class=" flex flex-col gap-2"><div class="text-[#3d3d3d] md:text-base text-sm font-[600]">Course highlights</div><div class="text-[#757575] md:text-sm text-xs font-[500]">Students can enroll in batches designed for the IIT JEE full course or the IIT JEE crash course according to their requirements; the courses will provide you with the following:</div><ul class="list-disc pl-7"><li><div class="text-[#757575] md:text-sm text-xs font-[500]">Class 11th (JEE Mains and Advance) syllabus for session 2023-24: Core subjects like physics, chemistry, and mathematics will be covered.</div></li><li><div class="text-[#757575] md:text-sm text-xs font-[500]">We have produced industry-best results, with 15000+ PWians qualifying in JEE, NEET, and NDA exams. 1 out of 5 students selected for JEE and 1 out of 6 chosen for both the NEET and NDA exams were PWians.</div></li><li><div class="text-[#757575] md:text-sm text-xs font-[500]">Our flagship programs, JEE and NEET, have continued to grow 2x. At the same time, Foundation and Defense Wallah have seen a surge of 3x in student enrollment.</div></li><li><div class="text-[#757575] md:text-sm text-xs font-[500]">PW is delivering magnificent results. Last year, one in every five students was chosen for the JEE exam, and one in every six was chosen for the NEET exam.</div></li></ul></div><div class=" flex flex-col gap-2"><div class="text-[#3d3d3d] md:text-base text-sm font-[600]"><strong>Benefits of the courses</strong></div><ul class="list-disc pl-7"><li><div class="text-[#757575] md:text-sm text-xs font-[500]">Class 11th (JEE Mains and Advance) syllabus for session 2023-24: Core subjects like physics, chemistry, and mathematics will be covered.</div></li><li><div class="text-[#757575] md:text-sm text-xs font-[500]">We have produced industry-best results, with 15000+ PWians qualifying in JEE, NEET, and NDA exams. 1 out of 5 students selected for JEE and 1 out of 6 chosen for both the NEET and NDA exams were PWians.</div></li><li><div class="text-[#757575] md:text-sm text-xs font-[500]">Our flagship programs, JEE and NEET, have continued to grow 2x. At the same time, Foundation and Defense Wallah have seen a surge of 3x in student enrollment.</div></li><li><div class="text-[#757575] md:text-sm text-xs font-[500]">PW is delivering magnificent results. Last year, one in every five students was chosen for the JEE exam, and one in every six was chosen for the NEET exam.</div></li></ul></div></div>`
                }}/>
            {/*{*/}
            {/*    props.faqs && <FAQ items={props.faqs}/>*/}
            {/*}*/}
            {/*<DownloadAppBanner/>*/}
        </div>
    </>
}
