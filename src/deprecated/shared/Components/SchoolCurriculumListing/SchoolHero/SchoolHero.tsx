import React from 'react';
import SchoolHerodata from './SchoolHerodata';
type SchoolHeroProps = {
  content: string;
  label: string;
  bgImg: string;
};

const SchoolHero: React.FC<SchoolHeroProps> = ({ content, label, bgImg }) => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className="  bg-bottom  bg-cover bg-no-repeat h-[556px]  sm:block hidden "
      >
        <SchoolHerodata content={content} label={label} />
      </div>
      <div
        style={{ backgroundImage: `url(/RectangleSchool.webp)` }}
        className="  bg-center  bg-cover bg-no-repeat h-[556px] px-2 sm:hidden block "
      >
        <SchoolHerodata content={content} label={label} />
      </div>
    </>
  );
};

export default SchoolHero;
