import Footer from '@/deprecated/shared/Components/Molecules/Footer/footer';
import Herosection from '@/deprecated/shared/Components/SchoolCurriculum/Herosection/Herosection';
import InterestingUs from '@/deprecated/shared/Components/SchoolCurriculum/InterestingUs/InterestingUs';
import NumbersSpeak from '@/deprecated/shared/Components/SchoolCurriculum/NumbersSpeak/NumbersSpeak';
import PublishingPartners from '@/deprecated/shared/Components/SchoolCurriculum/PublishingPartners/PublishingPartners';
import TeacherCta from '@/deprecated/shared/Components/SchoolCurriculum/TeacherCta/TeacherCta';
import Testonomial from '@/deprecated/shared/Components/SchoolCurriculum/Testonomial/Testonomial';
import SchoolHeader from '@/deprecated/shared/Components/SchoolCurriculum/header/SchoolHeader';
import { FetchFooter } from '@/api/older-api-methods';
import React, { useEffect, useRef, useState } from 'react';
import Caraousel from '@/deprecated/shared/Components/Molecules/Caraousel/Caraousel';
import carausel1 from '../../assets/Images/Schools/Banner.png'
import Header from '@/deprecated/shared/Components/Molecules/Header/header';
import SchoolsMarQue from '@/deprecated/shared/Components/SchoolCurriculum/SchoolsMarQue/SchoolsMarQue';

const CaraouselImages =[
  {
    dwebImage:carausel1.src,
    mwebImage:carausel1.src,
    altTag: "test1",
    redirectionUrl: '',
    displayOrder: 1,
  },
  {
    dwebImage:carausel1.src,
    mwebImage:carausel1.src,
    altTag: "test1",
    redirectionUrl: '',
    displayOrder: 1,
  },
  {
    dwebImage:carausel1.src,
    mwebImage:carausel1.src,
    altTag: "test1",
    redirectionUrl: '',
    displayOrder: 1,
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
  console.log(footerData,'footerData');
  return (
    
    <>
      {/* <SchoolHeader isHomePage={true} /> */}
      <Herosection />
      {/* <Header headerData={[]} showLogin /> */}


      <Caraousel carouselData={CaraouselImages} containerClass={''} mwebImageClassName={''} dwebImageClassName={''} setIntervalTime={5000} showSecondaryArrow />
      <InterestingUs isInViewport={isInViewport} refValue={animations}/>     
      <PublishingPartners />
      <NumbersSpeak />
      <Testonomial />  
      <SchoolsMarQue />  
      <TeacherCta isInViewport={isInViewport} refValue={animations}/>
      {/* <Footer footerData={footerData.data} /> */}
    </>
  );
}

export default SchoolCurriculumPage;

export async function getServerSideProps() { 
  let footerData;
  try {
    const result = await Promise.all([
      FetchFooter(),
    ]); 
    footerData = result[0];
  } catch (error) {
  }
  return {
    props: {
      footerData: footerData || {},
    },
  }}