import { memo, useRef, useState } from 'react';
import styles from './ExamCategoryCard.module.css';
import Image from '../../Atoms/Image/Image';
import { CardOptionsType, ExamCategoryCardType } from './ExamCategoryCardType';
import eventTracker from '../../EventTracker/eventTracker';
import chevronUpDownIcon from '../../../../assets/Images/Right-Icon-Chip.webp';
import { useRouter } from 'next/router';

const ExamCategoryCard = ({
  examCategoryCardData,
  bgColor,
}: {
  examCategoryCardData: any;
  bgColor: string;
}) => {
  const [visibleCohorts, setVisibleCohorts] = useState(
    examCategoryCardData?.options?.length <= 4 ? 4 : 3
  );
  const [showMoreButton, setShowMoreButton] = useState(true);
  const [hoverRotateIcon, setHoverRotateIcon] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleMoreButton = () => {
    if (showMoreButton) setVisibleCohorts(examCategoryCardData?.options.length);
    else setVisibleCohorts(examCategoryCardData.options.length <= 4 ? 4 : 3);
    setShowMoreButton(!showMoreButton);
  };

  const ctaExploreCategory = 'Explore Category';

  const batchEventTrigger = (
    exam: string,
    sub_exam: string,
    class_name: string,
    came_from: string
  ) => {
    eventTracker.batchListingVisit(exam, sub_exam, class_name, came_from);
  };
  const handlePushUrl = (name: string) => {
    const getUrl = router.asPath;
    console.log(getUrl.split('/').length, 'abcsss');
    if (getUrl.includes('test-series')) {
      router.push(getUrl + '/' + name.replace(' ', '-').toLowerCase());
    } else {
      router.push('/batches/' + name.replace(' ', '-').toLowerCase());
    }
  };
  return (
    <div
      className={` ${styles.cardContainer} group border-[0.25px] max-[330px]:w-[300px] w-[328px] sm:w-full hover:border-[#3D3D3D] lg:p-[24px] md:p-[20px] p-[16px] relative flex flex-row rounded-md overflow-hidden transition-all duration-200`}
    >
      <div className="flex flex-col md:w-[232px] w-[226px]">
        <div className=" flex flex-row whitespace-nowrap lg:text-[24px] md:text-[20px] text-[18px] font-[700] md:leading-[30px] lg:leading-[32px] leading-[20px] ">
          <div ref={titleRef} className="w-[220px] overflow-hidden">
            {examCategoryCardData?.categoryName}
          </div>
        </div>
        <div
          className={`flex flex-row items-start lg:pt-[16px] pt-[12px] flex-wrap md:w-[232px] w-[220px] ${
            visibleCohorts === 4 ? 'overflow-y' : ''
          }`}
        >
          {examCategoryCardData?.options
            ?.slice(0, visibleCohorts)
            ?.map((options: CardOptionsType, key: number) => {
              return (
                <a
                  onClick={(e) => {
                    batchEventTrigger(
                      '',
                      examCategoryCardData?.categoryName,
                      options?.className,
                      'exam_cards'
                    );
                  }}
                  href={`/batches/${examCategoryCardData?.categoryName
                    ?.toLowerCase()
                    ?.replace(' ', '-')}/${options?.className
                    .replace(' ', '-')
                    .toLowerCase()}`}
                  key={key}
                  className="md:text-[14px] cursor-pointer text-[12px] md:mr-[8px] mr-[5px] leading-[20px] my-[5px] lg:px-[20px] px-[12px] md:py-[10px] py-[7px] text-[#3D3D3D] text-center border border-1 border-[#D9DCE1] rounded-[28px] "
                >
                  {options.className}
                </a>
              );
            })}
          {examCategoryCardData?.options?.length > 4 && (
            <div
              className="md:text-[14px] cursor-pointer text-[12px] md:mr-[4px] mr-[5px] flex flex-row items-center justify-center md:gap-2 gap-1 leading-[20px] my-[5px] lg:px-[20px] px-[16px] md:py-[10px] py-[7px] text-[#3D3D3D] text-center border border-1 border-[#D9DCE1] rounded-[28px]  "
              onClick={handleMoreButton}
            >
              {showMoreButton ? 'More' : 'Less'}
              <Image
                bgImagetitle={`${chevronUpDownIcon.src}`}
                className={`w-[8px] h-[20px] bg-center bg-cover bg-no-repeat ${
                  showMoreButton ? '' : 'rotate-180'
                }`}
              />
            </div>
          )}
        </div>
        <a
          onClick={() =>
            batchEventTrigger(
              '',
              examCategoryCardData?.categoryName,
              '',
              'exam_cards'
            )
          }
          href={`/batches/${examCategoryCardData?.categoryName
            ?.toLowerCase()
            ?.replace(' ', '-')}`}
          className={` lg:mt-[20px] md:mt-[16px] mt-[12px] flex flex-row items-center ${styles.exploreCategoryButton} hover:text-[#5A4BDA] duration-200 text-[#1B2124]`}
        >
          <div
            onClick={() => handlePushUrl(examCategoryCardData?.categoryName)}
            className={`${styles.exploreCategoryArrow} cursor-pointer  pr-[12px] lg:text-[16px] text-[14px] md:leading-[24px] leading-[20px]  `}
          >
            {examCategoryCardData.cta.text}
          </div>
          <div
            className={`${styles.exploreCategoryArrow} bg-[#F8F8F8] duration-200  md:px-[12px] px-[10px] md:py-[4px] py-[4px] rounded-[100px] flex items-center `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.9697 3.96967C13.2626 3.67678 13.7374 3.67678 14.0303 3.96967L21.5303 11.4697C21.671 11.6103 21.75 11.8011 21.75 12C21.75 12.1989 21.671 12.3897 21.5303 12.5303L14.0303 20.0303C13.7374 20.3232 13.2626 20.3232 12.9697 20.0303C12.6768 19.7374 12.6768 19.2626 12.9697 18.9697L19.1893 12.75H3C2.58579 12.75 2.25 12.4142 2.25 12C2.25 11.5858 2.58579 11.25 3 11.25H19.1893L12.9697 5.03033C12.6768 4.73744 12.6768 4.26256 12.9697 3.96967Z"
                fill="#1B2124"
              />
            </svg>
          </div>
        </a>
      </div>
      <div className="md:w-[106px] flex items-center w-[56px]">
        <div
          className="md:h-[135%] h-[165%] absolute  aspect-square flex items-center rounded-full"
          style={{ backgroundColor: bgColor }}
        >
          <Image
            bgImagetitle={examCategoryCardData?.icon}
            className={`md:w-[46px] group-hover:scale-110 transition-all duration-300 w-10 md:h-[46px] h-10 xl:w-[72px] xl:h-[72px] md:ml-10 xl:ml-8 ml-6 bg-center bg-cover bg-no-repeat scale-100`}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(ExamCategoryCard);
