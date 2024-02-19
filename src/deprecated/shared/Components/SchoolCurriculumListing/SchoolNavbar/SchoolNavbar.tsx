import React from 'react';
//import SchoolHero from '../SchoolHero/SchoolHero';
import TabComponent from '@/deprecated/shared/Components/SchoolCurriculumListing/Tabs/Tabs';

function SchoolNavbar() {
  const tabs = [
    {
      id: 'tab1',
      label: 'Bloom',
      to: 'Bloom',
      content: `The "Bloom Series" for K-2 grades is an innovative and comprehensive
      educational resource designed in accordance with the National
      Education Policy (NEP) 2020. Tailored for Nursery, Lower KG, Upper
      KG, Grade 1, and Grade 2 students, this series covers a wide range
      of subjects, ensuring a holistic and engaging learning experience.`,
      bgImg: '/Rectangle7.webp',
    },
    {
      id: 'tab2',
      label: 'euNext',
      to: 'euNext',
      content: `The "euNext Series" for K-2 grades is an innovative and comprehensive
      educational resource designed in accordance with the National
      Education Policy (NEP) 2020. Tailored for Nursery, Lower KG, Upper
      KG, Grade 1, and Grade 2 students, this series covers a wide range
      of subjects, ensuring a holistic and engaging learning experience.`,
      bgImg: '/Rectangle7.webp',
    },
    {
      id: 'tab3',
      label: 'Spark',
      to: 'Spark',
      content: `The "Spark Series" for K-2 grades is an innovative and comprehensive
      educational resource designed in accordance with the National
      Education Policy (NEP) 2020. Tailored for Nursery, Lower KG, Upper
      KG, Grade 1, and Grade 2 students, this series covers a wide range
      of subjects, ensuring a holistic and engaging learning experience.`,
      bgImg: '/Rectangle7.webp',
    },
  ];
  return (
    <>
      <TabComponent tabs={tabs} />
    </>
  );
}

export default SchoolNavbar;
