import Footer from '@/deprecated/shared/Components/Molecules/Footer/footer';
import InterestingUs from '@/deprecated/shared/Components/SchoolCurriculum/InterestingUs/InterestingUs';
import NumbersSpeak from '@/deprecated/shared/Components/SchoolCurriculum/NumbersSpeak/NumbersSpeak';
import PublishingPartners from '@/deprecated/shared/Components/SchoolCurriculum/PublishingPartners/PublishingPartners';
import TeacherCta from '@/deprecated/shared/Components/SchoolCurriculum/TeacherCta/TeacherCta';
import Testonomial from '@/deprecated/shared/Components/SchoolCurriculum/Testonomial/Testonomial';
import { FetchFooter } from '@/api/older-api-methods';
import React, { useEffect, useRef, useState } from 'react';
import Caraousel from '@/deprecated/shared/Components/Molecules/Caraousel/Caraousel';
import carausel1 from '../../assets/Images/Schools/Banner.png'
import SchoolsMarQue from '@/deprecated/shared/Components/SchoolCurriculum/SchoolsMarQue/SchoolsMarQue';
import { FetchHeader } from '@/deprecated/common/fetcher-service/FetchHeader';
import { FetchHomePage } from '@/deprecated/common/fetcher-service/FetchHomePage';
import SchoolHeader from '@/deprecated/shared/Components/SchoolCurriculum/header/SchoolHeader';
import BLOOMBannerMWeb from '../../assets/Images/Schools/BLOOMBannerMWeb.webp';
import BLOOMBannerWb from '../../assets/Images/Schools/BLOOMBannerWb.webp';
import TeacherWeb from '../../assets/Images/Schools/Teacher-Training-Programme.webp';
import TeacherMWeb from '../../assets/Images/Schools/Teacher-Training.webp';
import SchoolsCrWeb from '../../assets/Images/Schools/SCHOOLcrWeb.webp';
import SchoolsCrMWeb from '../../assets/Images/Schools/SchoolsCrmweb.webp';
import SchoolsBanner1 from '../../assets/Images/Schools/1.webp';
import SchoolsBanner2 from '../../assets/Images/Schools/2.webp';
import SparksMweb from '../../assets/Images/Schools/SparkMwebBanner.webp';
import Sparksweb from '../../assets/Images/Schools/SparkWebBanner.webp';
import EuNextMWeb from '../../assets/Images/Schools/WebBannerEuMweb.webp';
import EuNextWeb from '../../assets/Images/Schools/WebBannerEuWeb.webp';

const CaraouselImages =[
  {
    dwebImage:SchoolsBanner1.src,
    mwebImage:SchoolsBanner2.src,
    altTag: "test1",
    redirectionUrl: '',
    displayOrder: 1,
  },
  {
    dwebImage:SchoolsCrWeb.src,
    mwebImage:SchoolsCrMWeb.src,
    altTag: "test2",
    redirectionUrl: '',
    displayOrder: 2,
  },
  {
    dwebImage:BLOOMBannerWb.src,
    mwebImage:BLOOMBannerMWeb.src,
    altTag: "test3",
    redirectionUrl: '',
    displayOrder: 3,
  },
  {
    dwebImage:EuNextWeb.src,
    mwebImage:EuNextMWeb.src,
    altTag: "test4",
    redirectionUrl: '',
    displayOrder: 4,
  },
  {
    dwebImage:Sparksweb.src,
    mwebImage:SparksMweb.src,
    altTag: "test5",
    redirectionUrl: '',
    displayOrder: 5,
  },
  {
    dwebImage:TeacherWeb.src,
    mwebImage:TeacherMWeb.src,
    altTag: "test6",
    redirectionUrl: '',
    displayOrder: 6,
  }  
]
function SchoolCurriculumPage({ footerData }: { footerData: any }) {
  const [isInViewport, setIsInViewport] = useState(false);
  const animations = useRef(null);

  const handleIntersection = (entries: any) => {
    entries.forEach((entry: { isIntersecting: any }) => {
      if (entry.isIntersecting) {
        setIsInViewport(true);
      }
    });
  };
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection);
    if (animations.current) {
      observer.observe(animations.current);
    }
   
   
    return () => {
      observer.disconnect();
     
    };
  }, []);
  return (
    
    <>
      <SchoolHeader  />
      <Caraousel carouselData={CaraouselImages} containerClass={'mx-auto'} mwebImageClassName={'bg-cover w-full h-full'} dwebImageClassName={'bg-cover w-full h-full'} setIntervalTime={5000} showSecondaryArrow />
      <InterestingUs isInViewport={isInViewport} refValue={animations}/>     
      <PublishingPartners />
      <NumbersSpeak />
      <Testonomial />  
      <SchoolsMarQue />  
      <TeacherCta isInViewport={isInViewport} refValue={animations}/>
      {/* <Footer footerData={footerData.data} /> */}
      <Footer footerData={footerData} showFreeLearning={false} />
    </>
  );
}

export default SchoolCurriculumPage;

export async function getServerSideProps() {
  let headerData;
  let footerData;
  let HomePageData;
  try {
    const result = await Promise.all([
      FetchHeader(),
      FetchFooter(),
      FetchHomePage(),
    ]);
    headerData = result[0];
    footerData = result[1];
    HomePageData = result[2];
    console.log(footerData,"footerData");
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      headerData: headerData?.data || {},
      footerData: footerData || {},
      HomePageData: HomePageData || {},
    },
  };
}
