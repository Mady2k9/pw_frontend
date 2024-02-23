import React from 'react';
import { FetchHomePage, FetchHeader, FetchFooter } from '@/api/older-api-methods';
import Verifications from '@/deprecated/shared/Components/SchoolsonboringPage/Verifications/Verifications';
import Footer from '@/deprecated/shared/Components/Molecules/Footer/footer';
import SchoolHeader from '@/deprecated/shared/Components/SchoolCurriculum/header/SchoolHeader';

function OnboringPage({ footerData }: { footerData: any }) {
  return (
    <>
      <SchoolHeader  />
      <Verifications />
       <Footer footerData={footerData} />
    </>
  );
}

export default OnboringPage;
export async function getServerSideProps() {
  let HomePageData;
  let headerData;
  let footerData;

  try {
    const result = await Promise.all([
      FetchHomePage(),
      FetchHeader(),
      FetchFooter(),
    ]);
    HomePageData = result[0];
    headerData = result[1];
    footerData = result[2];
  } catch (error) {
    // console.log(error);
  }
  return {
    props: {
      HomePageData: HomePageData || {},
      headerData: headerData?.data || {},
      footerData: footerData || {},
    },
  };
}
