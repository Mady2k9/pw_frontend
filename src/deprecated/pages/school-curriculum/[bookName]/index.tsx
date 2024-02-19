import Footer from '@/deprecated/shared/Components/Molecules/Footer/footer';
import SchoolHeader from '@/deprecated/shared/Components/SchoolCurriculum/header/SchoolHeader';
import ExplorByClass from '@/deprecated/shared/Components/SchoolCurriculumListing/ExplorByClass/ExplorByClass';
import ExploreOurCatalogue from '@/deprecated/shared/Components/SchoolCurriculumListing/ExploreOurCatalogue/ExploreOurCatalogue';
import SchoolCrDemo from '@/deprecated/shared/Components/SchoolCurriculumListing/SchoolCrDemo/SchoolCrDemo';
import SchoolNavbar from '@/deprecated/shared/Components/SchoolCurriculumListing/SchoolNavbar/SchoolNavbar';
import React from 'react';

function SchoolCurriculumBookPage({ footerData }: { footerData: any }) {
  return (
    <>
      <SchoolHeader isHomePage={false} />
      <SchoolNavbar />
      <ExplorByClass />
      <SchoolCrDemo />
      <ExploreOurCatalogue />
      <Footer footerData={footerData.data} />
    </>
  );
}

export default SchoolCurriculumBookPage;
