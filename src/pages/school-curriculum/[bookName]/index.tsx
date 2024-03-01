import {  FetchFooter } from '@/api/older-api-methods';
import React from 'react';
import SchoolCurriculumBookPage from '@/deprecated/pages/school-curriculum/[bookName]';

function SchoolCurriculumBook(props: any) {
  return (
    <>
      <SchoolCurriculumBookPage {...props} />
    </>
  );
}

export default SchoolCurriculumBook;

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
