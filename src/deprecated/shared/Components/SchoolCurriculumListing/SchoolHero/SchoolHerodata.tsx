import React from 'react';
import Button from '../../SchoolCurriculum/ReusableButton/ReusableButton';
import { useRouter } from 'next/router';

type SchoolHeroProps = {
  content: string;
  label: string;
};

const SchoolHerodata: React.FC<SchoolHeroProps> = ({ content, label }) => {
  const router = useRouter();
  const scrollToB = () => {
    const bComponent = document.getElementById('b');

    if (bComponent) {
      bComponent.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <div className="mx-auto xl:max-w-6xl w-full xl:px-0 md:px-4  px-3 pt-12 ">
        <div className="flex flex-col gap-10 ">
          <div className="font-bold xl:text-[40px] xl:leading-[50px] text-[24px] leading-[32px]">
            {label}
          </div>
          <div className="font-medium xl:text-[18px] xl:leading-[28px] xl:w-[70%] text-[14px] leading-[20px]">
            {content}
          </div>
          <Button
            className={
              'xl:w-[200px] xl:h-[52px] w-[176px] h-[48px] text-[#fff] text-[16px] md:text-[18px] md:leading-[28px] font-[600] rounded-lg bg-[#1B2124] flex items-center justify-center cursor-pointer'
            }
            title={`Explore ${label}`}
            handleClick={scrollToB}
          />
        </div>
      </div>
    </>
  );
};

export default SchoolHerodata;
