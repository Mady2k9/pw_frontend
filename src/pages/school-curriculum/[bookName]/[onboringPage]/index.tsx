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
 
  let footerData;

  try {
    const result = await Promise.all([
     
      FetchFooter(),
    ]);
   
    footerData = result[0];
  } catch (error) {
    // console.log(error);
  }
  return {
    props: {
     
      footerData: footerData || {},
    },
  };
}
