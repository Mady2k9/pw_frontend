import React from 'react';
import TestonomialCard from '../TestonomialCard/TestonomialCard';
import SchoolCarousel from '../SchoolCarousel/SchoolCarousel';

function Testonomial() {
  const array = [<TestonomialCard key={0}/>];
  return (
    <>
      <div className="font-bold md:leading-[48px] md:text-[32px] leading-[30px] text-[20px] text-[#1B2124] text-center pt-[20px] pb-[5px]">
        What students are saying
      </div>
      <div className="mx-auto xl:max-w-6xl w-full pt-[24px] pl-3">
        <SchoolCarousel array={array} className="gap-5" />
      </div>
    </>
  );
}

export default Testonomial;
