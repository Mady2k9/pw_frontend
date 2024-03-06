import { PageTitleBar } from '@/widgets/PageTitleBar';
import { MainBanner } from '@/widgets/MainBanner';
import ExamCategorySection from '@/widgets/ExamCategorySection';
import ResultsSection from '@/widgets/ResultsSection';
import FeaturesSection from '@/widgets/FeaturesSection';
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { IPageData, IWidgetJson } from '@/api/interfaces/page';
import { Layout } from '@/components/common/Layout';
import { useRouter } from 'next/router';
import testSeriesHomePageServerSideProps from '@/lib/test-series-home-page-server-side-props';
import { ReactNode, useMemo } from 'react';
import { ExamCategoryProps } from '@/widgets/ExamCategorySection/ExamCategoryCard';
import DownloadAppBanner from '@/widgets/DownloadAppBanner';
import FAQ from '@/widgets/FAQ';
import TestPassCard from '@/widgets/TestPassCard';
import TestPassShortList from '@/widgets/TestSeriesList/TestPassShortList';


export async function getServerSideProps(context: GetServerSidePropsContext) {
  return testSeriesHomePageServerSideProps(context);
}

const getWidgets = (pageData: IPageData) => {
  const widgets: {
    widget: ReactNode
  } [] = [];
  pageData?.widgetOrder?.map((widget) => {
    switch (widget) {
      case 'CAROUSEL':
        widgets.push({
          widget: <MainBanner stretched={true}
                              items={pageData.widgetJson['CAROUSEL']?.sectionProps?.map((banner: any) => {
                                return {
                                  image: banner.dwebImage,
                                  mWebImage: banner.mwebImage,
                                  alt: banner.altTag,
                                  link: banner.redirectionUrl,
                                  displayOrder: banner.displayOrder
                                };
                              })} />,
        });
        break;
      case 'TEST_PASS':
        const testPassData = pageData?.widgetJson[widget];
        widgets.push({
          widget: <TestPassShortList title={testPassData?.sectionTitle}
                                     description={testPassData?.sectionSubTitle}
                                     items={testPassData?.sectionProps || []}
          />,
        });
        break;
      case 'TEST_SERIES':
        const data = pageData?.widgetJson[widget];
        widgets.push({
          widget: <FeaturesSection title={data?.sectionTitle}
                                   description={data?.sectionSubTitle}
                                   features={data?.sectionProps?.map((section: any) => {
                                     return {
                                       icon: section.icon,
                                       title: section.title,
                                       description: section.subTitle,
                                     };
                                   }) || []}
          />,
        });
        break;
      case 'APP_DOWNLOAD':
        const downloadData = pageData?.widgetJson[widget];
        widgets.push({
          widget: <div className={'container'}>
            <DownloadAppBanner config={downloadData} />
          </div>,
        });
        break;
      case 'EXAM_CATEGORIES':
        const widgetData = pageData?.widgetJson[widget];
        const categories: ExamCategoryProps[] = [];
        widgetData?.sectionProps?.map((category: IWidgetJson) => {
          const categoryData: any = category;
          categories.push({
            name: categoryData['categoryName'],
            icon: categoryData['icon'],
            color: categoryData?.cta?.['backGroundColor'],
            slug: categoryData?.cta?.['ctaRedirectionUrl'],
            actionName: categoryData?.cta?.['text'],
            actionColor: categoryData?.cta?.['textColor'],
            displayOrder: categoryData.displayOrder,
            exams: categoryData?.options?.map((option: any) => {
              return {
                slug: option.redirectionUrl,
                name: option.className,
              };
            }) || [],
          });
        });
        widgets.push({
          widget: <ExamCategorySection title={widgetData?.sectionTitle}
                                       description={widgetData?.sectionSubTitle}
                                       categories={categories}
                                       />,
        });
        break;
        case "RESULTS":
          const result = pageData?.widgetJson[widget];
          widgets.push({
            widget: <div className={'container'}>
                <ResultsSection results={result?.sectionProps} title={'Academic Excellence : Results'}
                      description={'Giving wings to a millions dreams, a million more to go'} />
            </div>,
          });
          break;
    }
  })
  ;
  return widgets;
};

export default function TestSeriesPage(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const Widgets = useMemo(() => {
    return getWidgets(props.pageData!);
  }, [props.pageData]);
  if (!props.pageData) {
    return router.replace('');
  }
  return <Layout noIndex={true} footerData={props.footerData} seoTags={props.pageData!.seoTags}
                 headerData={props.headerData}
                 page_source={'TEST_SERIES'}>
    <PageTitleBar breadcrumbs={{
      items: [{
        label: 'Test Series',
        link: '/test-series',
      }],
    }} />
    <div className={'flex flex-col gap-8 md:gap-10'}>
      {
        Widgets.map((widget, index) => {
          return widget.widget;
        })
      }
    </div>

    <div className={'flex flex-col gap-4 md:gap-6 mt-6'}>
      <div
        className={'container'}
        dangerouslySetInnerHTML={{
          __html: `<div class="font-bold text-[#1B2124] xl:text-[32px] xl:leading-[48px] text-[20px] leading-[30px] ">Class 11 IIT JEE Courses</div><div class="py-4 flex flex-col text-left gap-4"><div class=" flex flex-col gap-1.5"><div class="text-[#3d3d3d] md:text-lg text-sm font-bold"><strong>Best Online Course for IIT-JEE Class 11</strong></div><div class="text-[#757575] md:text-sm text-xs font-normal ">The JEE Exam 2025 is one of the toughest exams in the country. Every year, hundreds of thousands of students prepare for the JEE Exam. The best time to begin JEE preparation is in 11th grade. For students in class 11, PW has come up with the best JEE Mains and Advanced courses. In these courses, students will learn from the country\'s best educators at an affordable price. The online courses for IIT JEE comprise live lectures and notes designed per the latest exam pattern of the IIT JEE examination.</div></div><div class=" flex flex-col gap-1.5"><div class="text-[#3d3d3d] md:text-lg text-sm font-bold">Syllabus Covered</div><div class="text-[#757575] md:text-sm text-xs font-[500]">This course will cover the complete syllabus for JEE Exam for Class 11th (Physics, Chemistry, and Mathematics).</div></div><div class=" flex flex-col gap-1.5"><div class="text-[#3d3d3d] md:text-lg text-sm font-bold">Eligibility Criteria</div><ul class="list-disc pl-7"><li><div class="text-[#757575] md:text-sm text-xs font-[500]">Class 11th students and students who have just passed the Class 10th exam and want to crack JEE exam are eligible to sit in this examination.</div></li><li><div class="text-[#757575] md:text-sm text-xs font-[500]">Category Rating- IIT JEE Class 11th: 4.82/5 (1,153,769).</div></li></ul></div><div class=" flex flex-col gap-1.5"><div class="text-[#3d3d3d] md:text-lg text-sm font-bold">Why Join Physics Wallah To Crack IIT JEE?</div><ul class="list-disc pl-7"><li><div class="text-[#757575] md:text-sm text-xs font-[500]">PW launched 26 new YT channels in 2022, which helped us increase the total number of students on YouTube from 8.7 million to 22 million.</div></li><li><div class="text-[#757575] md:text-sm text-xs font-[500]">We have produced industry-best results, with 15000+ PWians qualifying in JEE, NEET, and NDA exams. 1 out of 5 students selected for JEE and 1 out of 6 chosen for both the NEET and NDA exams were PWians.</div></li><li><div class="text-[#757575] md:text-sm text-xs font-[500]">Our flagship programs, JEE and NEET, have continued to grow 2x. At the same time, Foundation and Defense Wallah have seen a surge of 3x in student enrollment.</div></li><li><div class="text-[#757575] md:text-sm text-xs font-[500]">PW is delivering magnificent results. Last year, one in every five students was chosen for the JEE exam, and one in every six was chosen for the NEET exam.</div></li></ul></div><div class=" flex flex-col gap-2"><div class="text-[#3d3d3d] md:text-lg text-sm font-bold"><strong>Most Engaging Batches for Class 11th IIT JEE</strong></div></div><div class=" flex flex-col gap-2"><div class="text-[#3d3d3d] md:text-base text-sm font-[600]"><strong>Arjuna JEE 2023</strong></div><div class="text-[#757575] md:text-sm text-xs font-[500]">This batch will cover the Class 11th syllabus (JEE Main and JEE Advanced). Students will get live classes, recorded video lectures, notes, and daily practice problems with video solutions. This batch will also provide a bridge (Basics of Class 11th) course. The syllabus of the Arjuna batch will be completed by Jan 2023.</div></div><div class=" flex flex-col gap-2"><div class="text-[#3d3d3d] md:text-base text-sm font-[600]">Arjuna JEE Fast Track Batch</div><div class="text-[#757575] md:text-sm text-xs font-[500]">Arjuna JEE Fast Track is a three-month course for Class 11th students preparing for JEE Mains and Advanced. This batch will cover the 11th grade (JEE Mains and Advanced) syllabus. With this course, students will get recorded video lectures, the best in doubt-solving faculty, notes, and DPP with video solutions.</div></div><div class=" flex flex-col gap-2"><div class="text-[#3d3d3d] md:text-base text-sm font-[600]">Course highlights</div><div class="text-[#757575] md:text-sm text-xs font-[500]">Students can enroll in batches designed for the IIT JEE full course or the IIT JEE crash course according to their requirements; the courses will provide you with the following:</div><ul class="list-disc pl-7"><li><div class="text-[#757575] md:text-sm text-xs font-[500]">Class 11th (JEE Mains and Advance) syllabus for session 2023-24: Core subjects like physics, chemistry, and mathematics will be covered.</div></li><li><div class="text-[#757575] md:text-sm text-xs font-[500]">We have produced industry-best results, with 15000+ PWians qualifying in JEE, NEET, and NDA exams. 1 out of 5 students selected for JEE and 1 out of 6 chosen for both the NEET and NDA exams were PWians.</div></li><li><div class="text-[#757575] md:text-sm text-xs font-[500]">Our flagship programs, JEE and NEET, have continued to grow 2x. At the same time, Foundation and Defense Wallah have seen a surge of 3x in student enrollment.</div></li><li><div class="text-[#757575] md:text-sm text-xs font-[500]">PW is delivering magnificent results. Last year, one in every five students was chosen for the JEE exam, and one in every six was chosen for the NEET exam.</div></li></ul></div><div class=" flex flex-col gap-2"><div class="text-[#3d3d3d] md:text-base text-sm font-[600]"><strong>Benefits of the courses</strong></div><ul class="list-disc pl-7"><li><div class="text-[#757575] md:text-sm text-xs font-[500]">Class 11th (JEE Mains and Advance) syllabus for session 2023-24: Core subjects like physics, chemistry, and mathematics will be covered.</div></li><li><div class="text-[#757575] md:text-sm text-xs font-[500]">We have produced industry-best results, with 15000+ PWians qualifying in JEE, NEET, and NDA exams. 1 out of 5 students selected for JEE and 1 out of 6 chosen for both the NEET and NDA exams were PWians.</div></li><li><div class="text-[#757575] md:text-sm text-xs font-[500]">Our flagship programs, JEE and NEET, have continued to grow 2x. At the same time, Foundation and Defense Wallah have seen a surge of 3x in student enrollment.</div></li><li><div class="text-[#757575] md:text-sm text-xs font-[500]">PW is delivering magnificent results. Last year, one in every five students was chosen for the JEE exam, and one in every six was chosen for the NEET exam.</div></li></ul></div></div>`,
        }} />
      {
        props.pageData?.faqs && <div className={'container'}>
          <FAQ items={props.pageData?.faqs} />
        </div>
      }
    </div>

  </Layout>;
}
