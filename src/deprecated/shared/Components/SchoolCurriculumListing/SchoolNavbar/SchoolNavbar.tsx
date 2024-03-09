import React from 'react';
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
      content: `Our Most premium innovative and NEP-compliant curriculum for Grades K-8. This curriculum is designed on the philosophy of learning through activities and participation. It is build on the pedagogical approaches drawn from best curriculums globally. This series covers a wide range of subjects, ensuring a holistic and engaging learning experience.`,
      bgImg: HeroBloom.src,
      smbgImmg: BloomMweb.src,
    },
    {
      id: 'tab2',
      label: 'EuNext',
      to: 'EuNext',
      content: `Our affordable, updated and NCERT aligned books for K-8 grades. These books are designed with keeping simplicity and learner friendliness as the core objective. EuNext covers all the major subjects in a comprehensive manner.`,
      bgImg: euNext.src,
      smbgImmg:euNextMweb.src,
    },
    {
      id: 'tab3',
      label: 'Spark',
      to: 'SPARK',
      content: `Our Skill/Tech-based Curriculum for grades 6 to 10. Spark covers all the technical skill based subjects which CBSE board mandates to be taught from grade 6 onwards. Subjects include coding, AI/ML, AR/VR/XR, Financial Literacy and other skill modules offered by CBSE. `,
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
