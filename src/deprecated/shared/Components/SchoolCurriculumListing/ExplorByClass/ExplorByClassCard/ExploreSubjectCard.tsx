import React from 'react';
import ExploreCard from './ExploreCard';
// import {Carousel} from '@/components/ui/carousel';
import { SchoolDatas } from './SchoolDataType';
import Carousel from '../../../Atoms/Carousel/Carousel';
interface Subject {
  name: string;
  image: string;
  Backcolor: string;
  redirectionUrl: string;
}

interface SchoolClass {
  class: string;
  subjects: Subject[];
}
interface ExploreSubjectCardProps {
  classItem: SchoolClass;
  cohortId: string;
  cohertSlug: string;
  schoolclass: string;
}

function ExploreSubjectCard({
  classItem,
  cohortId,
  cohertSlug,
  schoolclass,
}: ExploreSubjectCardProps) {
  const array = [
    <ExploreCard
      key={''}
      classItem={classItem}
      cohortId={cohortId}
      cohertSlug={cohertSlug}
      schoolclass={schoolclass}
    />,
  ];
  console.log(schoolclass, 'cohertSlug');
  return (
    <div className="md:mt-[24px] mt-[16px] ">
      {classItem.subjects.length > 4 ? (
        <div className="mx-auto xl:max-w-6xl w-full   py-2">
          <Carousel array={array} className="gap-5" />
        </div>
      ) : (
        <div className="flex flex-row justify-start w-full  gap-5 overflow-x-scroll slideBarRemove">
          <ExploreCard
            key={classItem.class}
            classItem={classItem}
            cohortId={cohortId}
            cohertSlug={cohertSlug}
            schoolclass={schoolclass}
          />
        </div>
      )}
    </div>
  );
}

export default ExploreSubjectCard;
