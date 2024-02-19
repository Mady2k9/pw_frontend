import React from 'react';
import TestonomialCard from '../TestonomialCard/TestonomialCard';
import SchoolCarousel from '../SchoolCarousel/SchoolCarousel';

function Testonomial() {
  const array = [<TestonomialCard key={1} />];
  return (
    <>
      <div className="font-bold leading-[48px] text-[32px] text-[#1B2124] text-center pt-[40px] pb-[5px]">
        What students are saying
      </div>
      <div className="mx-auto xl:max-w-6xl w-full pt-[24px] pl-3">
        <SchoolCarousel array={array} className="gap-4" />
      </div>
    </>
  );
}

export default Testonomial;
