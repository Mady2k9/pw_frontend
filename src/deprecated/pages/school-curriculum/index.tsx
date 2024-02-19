import Footer from '@/deprecated/shared/Components/Molecules/Footer/footer';
import Herosection from '@/deprecated/shared/Components/SchoolCurriculum/Herosection/Herosection';
import InterestingUs from '@/deprecated/shared/Components/SchoolCurriculum/InterestingUs/InterestingUs';
import NumbersSpeak from '@/deprecated/shared/Components/SchoolCurriculum/NumbersSpeak/NumbersSpeak';
import PublishingPartners from '@/deprecated/shared/Components/SchoolCurriculum/PublishingPartners/PublishingPartners';
import TeacherCta from '@/deprecated/shared/Components/SchoolCurriculum/TeacherCta/TeacherCta';
import Testonomial from '@/deprecated/shared/Components/SchoolCurriculum/Testonomial/Testonomial';
import SchoolHeader from '@/deprecated/shared/Components/SchoolCurriculum/header/SchoolHeader';
import React from 'react';

function SchoolCurriculumPage({ footerData }: { footerData: any }) {
  return (
    <>
      <SchoolHeader isHomePage={true} />
      <Herosection />
      <InterestingUs />
      <PublishingPartners />
      <NumbersSpeak />
      <Testonomial />
      <TeacherCta />
      <Footer footerData={footerData} />
    </>
  );
}

export default SchoolCurriculumPage;
