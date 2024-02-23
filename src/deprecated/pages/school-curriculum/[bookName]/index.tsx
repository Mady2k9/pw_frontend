import Footer from '@/deprecated/shared/Components/Molecules/Footer/footer';
import ExplorByClass from '@/deprecated/shared/Components/SchoolCurriculumListing/ExplorByClass/ExplorByClass';
import ExploreOurCatalogue from '@/deprecated/shared/Components/SchoolCurriculumListing/ExploreOurCatalogue/ExploreOurCatalogue';
import SchoolCrDemo from '@/deprecated/shared/Components/SchoolCurriculumListing/SchoolCrDemo/SchoolCrDemo';
import SchoolNavbar from '@/deprecated/shared/Components/SchoolCurriculumListing/SchoolNavbar/SchoolNavbar';
import classData from '../../../jsonFiles/schoolsAllclassData.json';


import React from 'react';
import { useRouter } from 'next/router';
import { FetchHeader } from '@/deprecated/common/fetcher-service/FetchHeader';
import { FetchFooter, FetchHomePage } from '@/api/older-api-methods';
import SchoolHeader from '@/deprecated/shared/Components/SchoolCurriculum/header/SchoolHeader';

function SchoolCurriculumBookPage({ footerData }: { footerData: any }) {
  const router = useRouter();

  const temp = classData[router.query.bookName as keyof typeof classData];
  return (
    <>
      <SchoolHeader/>
      <SchoolNavbar />
      <ExplorByClass data={temp} />
      <SchoolCrDemo />
      <ExploreOurCatalogue />
     <Footer footerData={footerData} showFreeLearning={false} />
    </>
  );
}

export default SchoolCurriculumBookPage;

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

