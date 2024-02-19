import { memo, useEffect, useState } from 'react';
import Carousel from '../Caraousel/Caraousel';
import TransitionWrapper from '../TransitionWrapper/TransitionWrapper';

const AcademicResults = ({
  academicResultData,
  showClassesScrollData,
}: {
  academicResultData: any;
  showClassesScrollData?: boolean;
}) => {
  const [sectionProps, setSectionProps] = useState([]);

  const allImg: any = [];
  academicResultData?.sectionProps?.map((exam: any) => {
    exam?.imageOption?.map((imageOption: any) => allImg.push(imageOption));
  });
  const compareByDisplayOrder = (a: any, b: any) =>
    a?.displayOrder - b?.displayOrder;
  const sortedResultData = academicResultData?.sectionProps?.sort(
    compareByDisplayOrder
  );
  const academicResultArray = [
    {
      exam: 'ALL',
      imageOption: allImg,
      displayOrder: 0,
    },
    ...sortedResultData,
  ];
  const [selectedExam, setSelectedExam] = useState(academicResultArray[0]);
  useEffect(() => {
    const arr: any = [];
    selectedExam?.imageOption?.map((img: any) => {
      arr.push({
        mwebImage: img.mWebImage,
        dwebImage: img.dWebImage,
        displayOrder: selectedExam.displayOrder,
        redirectionUrl: img.redirectionUrl,
        exam: selectedExam.exam,
      });
    });
    setSectionProps(arr);
  }, [selectedExam]);
  return (
    <>
      <div className="w-full flex flex-col items-center  justify-center ">
        {showClassesScrollData && (
          <div className="overflow-x-scroll overflow-y-hidden w-full px-0">
            <TransitionWrapper>
              <div className="w-[100%] snap-none md:px-0 px-[2px] z-10 ">
                <div
                  className={`flex flex-row  md:my-[16px] my-[16px] flex-nowrap md:items-center md:justify-start`}
                >
                  {academicResultArray.map((cohort: any) => {
                    return (
                      <div
                        key={cohort?.exam}
                        className={`md:text-[14px] cursor-pointer hover:bg-[#F1EFFF] hover:text-[#5A4BDA] hover:border-[#5A4BDA] transition-all duration-200 whitespace-nowrap text-ellipsis text-[12px] md:mx-[10px] mx-[8px] leading-[20px] my-[5px] px-[16px] md:py-[8px] py-[7px]  text-center border rounded-[28px] ${
                          cohort.exam === selectedExam.exam
                            ? 'bg-[#F1EFFF] text-[#5A4BDA] border-[#5A4BDA]'
                            : 'border-[#D9DCE1] text-[#3D3D3D]'
                        }  `}
                        onClick={() => setSelectedExam(cohort)}
                      >
                        {cohort?.exam}
                      </div>
                    );
                  })}
                </div>
              </div>
            </TransitionWrapper>
          </div>
        )}
        <TransitionWrapper>
          <Carousel
            carouselData={sectionProps}
            imageUpperDiv={'sm:px-0 px-4'}
            containerClass={'h-full  max-w-6xl'}
            mwebImageClassName={' w-full h-full rounded-lg bg-contain'}
            dwebImageClassName={' w-full h-full  rounded-lg bg-cover'}
            setIntervalTime={5000}
            showPrimaryArrow={sectionProps?.length > 1}
          />
        </TransitionWrapper>
      </div>
    </>
  );
};

export default memo(AcademicResults);
