import React from 'react';
//import SchoolHero from '../SchoolHero/SchoolHero';/Users/madhuresh/Downloads/Assets 3/Hero_Spark.webp /Users/madhuresh/Downloads/Assets 3/Hero_euNext.webp
import TabComponent from '../Tabs/Tabs';
import HeroBloom from '../../../../assets/Images/Schools/Rectangle7.webp';
import Spark from '../../../../assets/Images/Schools/Hero_Spark.webp';
import euNext from '../../../../assets/Images/Schools/Hero_euNext.webp';
import euNextMweb from '../../../../assets/Images/Schools/euNextmweb.webp';
import SparkMweb from '../../../../assets/Images/Schools/SparkMweb.webp';
import BloomMweb from '../../../../assets/Images/Schools/BloomMweb.webp';

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
      bgImg: HeroBloom.src,
      smbgImmg: BloomMweb.src,
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
      bgImg: euNext.src,
      smbgImmg:euNextMweb.src,
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
      bgImg: Spark.src,
      smbgImmg:SparkMweb.src,
    },
  ];

  return (
    <>
      <TabComponent tabs={tabs} />
    </>
  );
}

export default SchoolNavbar;
