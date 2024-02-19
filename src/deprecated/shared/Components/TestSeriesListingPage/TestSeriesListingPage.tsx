import { useEffect, useRef, useState } from 'react';
// import TabAllData from '../../../AllFilesJsonData/TabDataJson';
import { useRouter } from 'next/router';

const TestSeriesListingPage = ({ params }: { params: any }) => {
  const router = useRouter();
  const CohortTabRef = useRef<HTMLDivElement>(null);
  const [cohortTabPosition, setCohortTabPosition] = useState(false);
  const [selectedCohort, setSelectedcohort] = useState(0);

  const handleCohortTab = (entries: Array<any>) => {
    entries.forEach((entry: { isIntersecting: any }) => {
      if (!entry.isIntersecting && !cohortTabPosition) {
        setCohortTabPosition(true);
      } else if (cohortTabPosition) {
        setCohortTabPosition(false);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleCohortTab);
    if (CohortTabRef.current) {
      observer.observe(CohortTabRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);
  useEffect(() => {
    // const getUrl = router.asPath.split('/');
    // const option = getUrl[3];
    // if (option) {
    //   const cohort = TabAllData.filter(
    //     (tab: any) => tab?.name?.replace(' ', '-').toLowerCase() === option
    //   );
    //   const index = TabAllData.findIndex(
    //     (tab: any) => tab.name === cohort?.[0]?.name
    //   );
    //   handleSelectedCohort(index, cohort[0]);
    // } else {
    //   handleSelectedCohort(0, TabAllData[0]);
    // }
  }, []);
  const handleSelectedCohort = (key: number, cohort: any) => {
    setSelectedcohort(key);
    const getUrl = router.asPath;
    const urlForAll = getUrl.split('/').slice(1, 3);
    const url = urlForAll.join('/');
    if (cohort?.name != 'All Batches') {
      router?.push(
        '/' + url + '/' + cohort?.name?.replace(' ', '-').toLowerCase()
      );
    } else {
      router.push('/' + url);
    }
  };
  const getUrl = router.asPath.split('/');
  return (
    <>
      {/*<Header headerData={params?.headerData} showLogin />*/}
      {/*<CourseHeroSection*/}
      {/*  mainHeading={'IIT JEE'}*/}
      {/*  description={*/}
      {/*    'Physics Wallah offers an affordable Class 11 IIT JEE online course in India, featuring top faculties, up-to-date syllabus, and best-in-class doubt resolution. Explore lectures, study materials, and mock test series for a state-of-the-art learning experience.'*/}
      {/*  }*/}
      {/*  initialValue={'Test Series'}*/}
      {/*/>*/}
      {/*<div*/}
      {/*  className={*/}
      {/*    cohortTabPosition*/}
      {/*      ? 'sticky top-[60px] sm:top-[80px] z-50 border-b-[1px] bg-white'*/}
      {/*      : ''*/}
      {/*  }*/}
      {/*  ref={CohortTabRef}*/}
      {/*>*/}
      {/*  <CohortTab*/}
      {/*    selectedCohort={selectedCohort}*/}
      {/*    handleSelectedCohort={handleSelectedCohort}*/}
      {/*    tabData={TabAllData}*/}
      {/*  />*/}
      {/*</div>*/}
      {/*{getUrl.length <= 3 ? (*/}
      {/*  <>*/}
      {/*    {ShowAllCoursesSection.map((data) => (*/}
      {/*      <TestSeriesCardSectionAllCourses*/}
      {/*        key={data?.mainHeading}*/}
      {/*        mainHeading={data?.mainHeading}*/}
      {/*        viewAllUrl={data.url}*/}
      {/*        BatchData={data?.results}*/}
      {/*      />*/}
      {/*    ))}*/}
      {/*  </>*/}
      {/*) : (*/}
      {/*  <>*/}
      {/*    <TestSeriesCardSectionForExams mainHeading={''} showBatchCards />*/}
      {/*  </>*/}
      {/*)}*/}
      {/*<AcademicResults*/}
      {/*  academicResultData={params?.HomePageData?.data?.widgetJson?.RESULTS}*/}
      {/*/>*/}
      {/*<DescriptionContent />*/}
      {/*<FAQ items={Items} heading="Frequently Asked Questions" />*/}
      {/*<DownloadAppSection />*/}
      {/*<Footer footerData={params?.footerData} showFreeLearning />*/}
    </>
  );
};

export default TestSeriesListingPage;
