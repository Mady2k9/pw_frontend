import React from 'react';
import ExploreCard from './ExploreCard';
import Carousel from '@/deprecated/shared/Components/Atoms/Carousel/Carousel';

function ExploreSubjectCard({ classItem }: { classItem: any }) {
  const array = [<ExploreCard key={1} classItem={classItem} />];

  return (
    <>
      {classItem.subjects.length > 4 ? (
        <div className="mx-auto xl:max-w-6xl w-full pt-[24px] md:py-4 py-2">
          <Carousel array={array} className="gap-5" />
        </div>
      ) : (
        <div className="flex flex-row justify-start md:mt-6 mt-3 gap-5 overflow-x-scroll md:py-4 py-2">
          <ExploreCard classItem={classItem} />
        </div>
      )}
    </>
  );
}

export default ExploreSubjectCard;
