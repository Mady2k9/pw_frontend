// import { COMPONENTS } from '@/pages/test-series/[textName]/[cohort]/[testdescription]/index';
// import React, { useEffect, useRef, useState } from 'react';
// import { AccessState } from './TestSeriesCardJson';
// import TestSeriesCard from '../../TestSeriesCard/TestSeriesCard';
// import ChooseUs from '../../TestSeriesDetail/ChooseUs/ChooseUs';
// import Inclusions from '../../TestSeriesDetail/Inclusions/Inclusions';
// import Test from '../../TestSeriesDetail/Test/Test';
// import TestseriesData from '../../../../jsonFiles/testseriesDescriptions.json';
// import TestSeriesDescriptionTabNav from '../../Molecules/TestSeriesDescriptionTabNav/TestSeriesDescriptionTabNav';
// import Header from '../../Molecules/Header/header';
// import BannerSections from '../../TestSeriesDetail/BannerSections/BannerSections';
// import { FetchFooter } from '@/deprecated/common/fetcher-service/FetchFooter';
// import { FetchHeader } from '@/deprecated/common/fetcher-service/FetchHeader';
// import result from 'postcss/lib/result';
// import TestSeriesActions from '../../TestSeriesCard/TestSeriesActions';
// import TestSeriesPrice from '../../TestSeriesCard/TestSeriesPrice';
// import { ResultType } from '../../TestSeriesCardSection/TestSeriesCardType';
// import Footer from '../../Molecules/Footer/footer';
// import PhoneIcon from '../../Molecules/PhoneIcon/PhoneIcon';
// import TestSeriesDetailsCard from '../TestSeriesDetailsCard/TestSeriesDetailsCard';

function MidelNavebar({
  headerData,
  footerData,
}: {
  headerData: any;
  footerData: any;
}) {
  // const [isVisible, setIsVisible] = useState(false);
  // const [isMobileView, setIsMobileView] = useState(false);
  //
  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobileView(window.innerWidth < 768);
  //   };
  //
  //   handleResize();
  //
  //   window.addEventListener('resize', handleResize);
  //
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);
  //
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollThreshold = 400;
  //     const scrollPosition = window.scrollY;
  //     setIsVisible(scrollPosition > scrollThreshold);
  //   };
  //
  //   window.addEventListener('scroll', handleScroll);
  //
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  // const components = [
  //   COMPONENTS.INCLUSION,
  //   COMPONENTS.TEST,
  //   COMPONENTS.CHOOSEUS,
  //   COMPONENTS.EXPERIENCE,
  // ];
  // const [activeTab, setActiveTab] = useState(COMPONENTS.INCLUSION);
  // const [isInViewPort, setIsInViewPart] = useState(true);
  // const componentRefs = {
  //   [COMPONENTS.INCLUSION]: useRef(null),
  //   [COMPONENTS.TEST]: useRef(null),
  //   [COMPONENTS.CHOOSEUS]: useRef(null),
  //   [COMPONENTS.EXPERIENCE]: useRef(null),
  // };
  // const handleScrollToComponent = (component: keyof typeof COMPONENTS) => {
  //   const componentRef = componentRefs[component];
  //   if (componentRef?.current) {
  //     (componentRef?.current as HTMLElement).scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'center',
  //     });
  //   }
  //   setActiveTab(component);
  // };
  // const handleOnScroll = () => {
  //   components.forEach((component) => {
  //     const componentRef = componentRefs[component];
  //     if (componentRef?.current) {
  //       const rect = (
  //         componentRef.current as HTMLDivElement
  //       ).getBoundingClientRect();
  //       const isComponentVisible =
  //         rect.top <= window.innerHeight * 0.75 &&
  //         rect.bottom >= window.innerHeight * 0.25;
  //       if (isComponentVisible) {
  //         setActiveTab(component);
  //       }
  //     }
  //   });
  // };
  // useEffect(() => {
  //   handleOnScroll();
  //   window.addEventListener('scroll', handleOnScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleOnScroll);
  //   };
  // });
  // const [scrollPosition, setScrollPosition] = useState(0);
  //
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollPosition(window.scrollY);
  //   };
  //
  //   window.addEventListener('scroll', handleScroll);
  //
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  //
  // const scrollThreshold = 255;
  //
  // const showBatchCardDetails = scrollPosition > scrollThreshold;
  // const secenData = TestseriesData?.data?.sectionTwo;
  // const sectionThreeData = TestseriesData?.data?.sectionThree;
  return (
    <div>
      {/*{isInViewPort ? (*/}
      {/*  <Header headerData={headerData} showLogin />*/}
      {/*) : (*/}
      {/*  <div className="sticky z-20 top-0">*/}
      {/*    <Header headerData={headerData} showLogin />*/}
      {/*    <TestSeriesDescriptionTabNav*/}
      {/*      tabs={components}*/}
      {/*      activeTab={activeTab}*/}
      {/*      handleScrollToComponent={handleScrollToComponent}*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*)}*/}
      {/*<BannerSections setIsInViewPart={setIsInViewPart} />*/}
      {/*<div className={`${isInViewPort ? '' : 'opacity-0'}`}>*/}
      {/*  <TestSeriesDescriptionTabNav*/}
      {/*    tabs={components}*/}
      {/*    activeTab={activeTab}*/}
      {/*    handleScrollToComponent={handleScrollToComponent}*/}
      {/*  />*/}
      {/*</div>*/}
      {/*<div className="bg-[#F8F8F8] w-full relative">*/}
      {/*  <div className="sm:flex h-full w-full max-w-6xl px-3  mx-auto xl:px-0 ">*/}
      {/*    <div className="lg:w-4/12  w-full sm:pl-2  mt-[-10px] sm:hidden block">*/}
      {/*      <div className="sticky top-[120px] z-0  pt-[20px] ">*/}
      {/*        <TestSeriesDetailsCard*/}
      {/*          key={AccessState[0]?.results[0]?.title}*/}
      {/*          result={AccessState[0]?.results[0]}*/}
      {/*          showBatchCardDetails={showBatchCardDetails}*/}
      {/*          showExploreButton={false}*/}
      {/*        />*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className="lg:w-8/12 sm:w-7/12 w-full flex-col sm:pr-2 py-4 ">*/}
      {/*      <div*/}
      {/*        ref={componentRefs[COMPONENTS.INCLUSION]}*/}
      {/*        className="sm:w-[400px] lg:w-[650px] xl:w-[740px]"*/}
      {/*      >*/}
      {/*        <Inclusions ref={undefined} />*/}
      {/*      </div>*/}
      {/*      <div*/}
      {/*        ref={componentRefs[COMPONENTS.TEST]}*/}
      {/*        className="sm:w-[400px] lg:w-[650px] xl:w-[740px]"*/}
      {/*      >*/}
      {/*        <Test secenData={secenData} />*/}
      {/*      </div>*/}
      {/*      <div*/}
      {/*        ref={componentRefs[COMPONENTS.CHOOSEUS]}*/}
      {/*        className="sm:w-[400px] lg:w-[650px] xl:w-[740px]"*/}
      {/*      >*/}
      {/*        <ChooseUs sectionThreeData={sectionThreeData} />*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className="lg:w-4/12 w-full  sm:pl-2  mt-[-400px] sm:block hidden">*/}
      {/*      <div className="sticky top-[140px] z-[10] mb-3.5">*/}
      {/*        <TestSeriesDetailsCard*/}
      {/*          key={AccessState[0]?.results[0]?.title}*/}
      {/*          result={AccessState[0]?.results[0]}*/}
      {/*          showBatchCardDetails={showBatchCardDetails}*/}
      {/*          showExploreButton={false}*/}
      {/*          showNewChip={false}*/}
      {/*        />*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    {isMobileView && isVisible ? (*/}
      {/*      <div className="fixed bottom-0 left-0 w-full p-[10px] bg-[#FFF] shadow">*/}
      {/*        <div className="flex flex-row justify-between pr-4">*/}
      {/*          <TestSeriesPrice*/}
      {/*            originalCost={AccessState[0]?.results[0]?.originalCost}*/}
      {/*            updatedCost={AccessState[0]?.results[0]?.updatedCost}*/}
      {/*            discount={'Discount of 10% applied'}*/}
      {/*            showExploreButton={false}*/}
      {/*          />*/}
      {/*          <TestSeriesActions />*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    ) : (*/}
      {/*      <PhoneIcon />*/}
      {/*    )}*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<Footer footerData={footerData} />*/}
    </div>
  );
}

export default MidelNavebar;
export async function getServerSideProps() {
  // let headerData;
  // let footerData;
  //
  // try {
  //   const result = await Promise.all([FetchHeader(), FetchFooter()]);
  //   headerData = result[0];
  //   footerData = result[1];
  // } catch (error) {
  //   console.log(error);
  // }
  return {
    props: {
      // headerData: headerData?.data || {},
      // footerData: footerData || {},
    },
  };
}
