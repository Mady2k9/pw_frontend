import React from 'react';
import ExploreSubjectCard from './ExploreSubjectCard';

interface Subject {
  name: string;
  image: string;
  Backcolor: string;
}

interface SchoolClass {
  class: string;
  subjects: Subject[];
}

interface SchoolData {
  classes: SchoolClass[];
}

function ExplorByClassCard({ classData }: { classData: SchoolData }) {
  //console.log(classData, 'classData');

  return (
    <>
      {classData.classes.map((classItem: SchoolClass) => (
        <div key={classItem.class}>
          <div className="font-bold md:text-[24px] md:leading-[32px] text-[18px] leading-[28px] text-[#1B2124]  mt-[32px]">
            {classItem.class}
            <ExploreSubjectCard classItem={classItem} />
          </div>
        </div>
      ))}
    </>
  );
}

export default ExplorByClassCard;
