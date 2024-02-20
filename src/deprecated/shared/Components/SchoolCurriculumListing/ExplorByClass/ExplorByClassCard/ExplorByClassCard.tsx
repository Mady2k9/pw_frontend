import React from 'react';
import ExploreSubjectCard from './ExploreSubjectCard';

interface Subject {
  name: string;
  image: string;
  Backcolor: string;
  redirectionUrl: string;
  slug: string;
}

interface SchoolClass {
  class: string;
  subjects: Subject[];
  slug: string;
}

interface SchoolData {
  classes: SchoolClass[];
  categoryName: string;
  cohortId: string;
  slug: string;
  schoolclass: string;
}
interface SchoolCategoryData {
  category: SchoolData[];
}

function ExplorByClassCard({ classData }: { classData: SchoolData }) {
    console.log(classData, 'classData123');
  return (
    <>
      {classData?.classes?.map((classItem, index) => (
        <div key={index}>
          <div className="font-bold md:text-[24px] md:leading-[32px] text-[18px] leading-[28px] text-[#1B2124]  md:mt-[32px] mt-[24px] ">
            {classItem.class}
            <ExploreSubjectCard
              classItem={classItem}
              cohortId={classData.cohortId}
              cohertSlug={classData.slug}
              schoolclass={classData.schoolclass}
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default ExplorByClassCard;
