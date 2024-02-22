import Footer from '@/deprecated/shared/Components/Molecules/Footer/footer';
import SchoolHeader from '@/deprecated/shared/Components/SchoolCurriculum/header/SchoolHeader';
import ExplorByClass from '@/deprecated/shared/Components/SchoolCurriculumListing/ExplorByClass/ExplorByClass';
import ExploreOurCatalogue from '@/deprecated/shared/Components/SchoolCurriculumListing/ExploreOurCatalogue/ExploreOurCatalogue';
import SchoolCrDemo from '@/deprecated/shared/Components/SchoolCurriculumListing/SchoolCrDemo/SchoolCrDemo';
import SchoolNavbar from '@/deprecated/shared/Components/SchoolCurriculumListing/SchoolNavbar/SchoolNavbar';
import classData from '../../../jsonFiles/schoolsAllclassData.json';


import React from 'react';
import { useRouter } from 'next/router';

function SchoolCurriculumBookPage({ footerData }: { footerData: any }) {
  const router = useRouter();

  const temp = classData[router.query.bookName as keyof typeof classData];
  return (
    <>
      <SchoolHeader isHomePage={false} />
      <SchoolNavbar />
      <ExplorByClass data={temp} />
      <SchoolCrDemo />
      <ExploreOurCatalogue />
      {/* <Footer footerData={footerData.data} /> */}
    </>
  );
}

export default SchoolCurriculumBookPage;
