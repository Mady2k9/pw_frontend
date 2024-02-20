import React from 'react';
import { FetchHomePage, FetchHeader, FetchFooter } from '@/api/older-api-methods';
import OnboringPage from '@/deprecated/pages/school-curriculum/[bookName]/[onboringPage]';


function index({ footerData }: { footerData: any }) {
  return (
    <>
      <OnboringPage footerData={footerData} />
    </>
  );
}

export default index;
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
