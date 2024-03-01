import React from 'react';
import PublishingCard from '../PublishingCard/PublishingCard';
import schoolCardData from '../../../../jsonFiles/schoolcardData.json';
import TransitionWrapper from '../../Molecules/TransitionWrapper/TransitionWrapper';
import Curve from '../../../../assets/Images/Schools/Curve.webp';
import student from '../../../../assets/Images/Schools/student-raising-hand.webp';

function PublishingPartners() {
  const partnersData = schoolCardData?.schoolCardData || [];
  return (
    <>
      <TransitionWrapper>
        <div className="relative md:mt-[215px] mt-[130px] flex justify-center items-center">
          <div className="absolute   xl:top-[-179px] md:top-[-102px] lg:top-[-95px] top-[-114px] 2xl:top-[-145px]">
            <img
              src={student.src}
              className="xl:w-[207px] w-[117px]"
              alt="student"
            />
            
          </div>
        </div>
      </TransitionWrapper>
      <div className="">
        <div className="">
          <img src={Curve.src} alt="Curve" className="" />
        </div>
        <div className="bg-[#FFF0E7] pb-5">
          {partnersData.map((partner, index) => (
            <>
              <TransitionWrapper>
                <div className="font-bold md:leading-[48px] md:text-[32px] leading-[30px] text-[20px] text-[#1B2124] text-center">
                  {partner.sectionTitle}
                </div>
              </TransitionWrapper>
              <TransitionWrapper>
                <div className="mx-auto  pt-[32px] flex flex-wrap gap-5  justify-center px-3 py-6">
                  <PublishingCard data={partner.sectionProps} />
                </div>
              </TransitionWrapper>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default PublishingPartners;
