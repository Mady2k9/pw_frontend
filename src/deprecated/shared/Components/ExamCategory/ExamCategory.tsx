import { useState, memo } from 'react';
import ExamCategoryCard from '../Molecules/ExamCategoryCard/ExamCategoryCard';
// import ExamCategoryCard from '../../Remote/ExamCategoryCard/ExamCategoryCard';

const ExamCategory = ({
  showAllCategoriesBtn,
  showCardNumbers,
  heading,
  subHeading,
}: {
  showAllCategoriesBtn?: boolean;
  showCardNumbers?: number;
  heading?: boolean;
  subHeading?: boolean;
}) => {
  const [showMore, setShowMore] = useState(showCardNumbers);
  const toggleViewCategories = () => {
    if (showMore === 6) setShowMore(categories.length);
    else setShowMore(6);
  };
  const categories = [
    {
      title: 'NEET',
      color: '#FFF2F2',
      image: '',
      cohorts: [
        'class 11',
        'class 12',
        'class 12',
        'class 12',
        'class 12',
        'class 11',
        'class 12',
        'class 12',
        'class 12',
        'class 11',
        'dropper',
      ],
    },
    {
      title: 'NEET',
      color: '#FFF2F2',
      image: '',
      cohorts: [
        'class 11',
        'class 12',
        'class 12',
        'class 12',
        'class 12',
        'class 11',
        'class 12',
        'class 12',
        'class 12',
        'class 11',
        'dropper',
      ],
    },
    {
      title: 'NEET',
      color: '#FFF2F2',
      image: '',
      cohorts: [
        'class 11',
        'class 12',
        'class 12',
        'class 12',
        'class 12',
        'class 11',
        'class 12',
        'class 12',
        'class 12',
        'class 11',
        'dropper',
      ],
    },
    {
      title: 'NEET',
      color: '#FFF2F2',
      image: '',
      cohorts: [
        'class 11',
        'class 12',
        'class 12',
        'class 12',
        'class 12',
        'class 11',
        'class 12',
        'class 12',
        'class 12',
        'class 11',
        'dropper',
      ],
    },
    {
      title: 'NEET',
      color: '#FFF2F2',
      image: '',
      cohorts: [
        'class 11',
        'class 12',
        'class 12',
        'class 12',
        'class 12',
        'class 11',
        'class 12',
        'class 12',
        'class 12',
        'class 11',
        'dropper',
      ],
    },
    {
      title: 'NEET',
      color: '#FFF2F2',
      image: '',
      cohorts: [
        'class 11',
        'class 12',
        'class 12',
        'class 12',
        'class 12',
        'class 11',
        'class 12',
        'class 12',
        'class 12',
        'class 11',
        'dropper',
      ],
    },
    {
      title: 'NEET',
      color: '#FFF2F2',
      image: '',
      cohorts: [
        'class 11',
        'class 12',
        'class 12',
        'class 12',
        'class 12',
        'class 11',
        'class 12',
        'class 12',
        'class 12',
        'class 11',
        'dropper',
      ],
    },
    {
      title: 'NEET',
      color: '#FFF2F2',
      image: '',
      cohorts: [
        'class 11',
        'class 12',
        'class 12',
        'class 12',
        'class 12',
        'class 11',
        'class 12',
        'class 12',
        'class 12',
        'class 11',
        'dropper',
      ],
    },
    {
      title: 'NEET',
      color: '#FFF2F2',
      image: '',
      cohorts: [
        'class 11',
        'class 12',
        'class 12',
        'class 12',
        'class 12',
        'class 11',
        'class 12',
        'class 12',
        'class 12',
        'class 11',
        'dropper',
      ],
    },
    {
      title: 'NEET',
      color: '#FFF2F2',
      image: '',
      cohorts: [
        'class 11',
        'class 12',
        'class 12',
        'class 12',
        'class 12',
        'class 11',
        'class 12',
        'class 12',
        'class 12',
        'class 11',
        'dropper',
      ],
    },
    {
      title: 'NEET',
      color: '#FFF2F2',
      image: '',
      cohorts: [
        'class 11',
        'class 12',
        'class 12',
        'class 12',
        'class 12',
        'class 11',
        'class 12',
        'class 12',
        'class 12',
        'class 11',
        'dropper',
      ],
    },
  ];
  return (
    <div className="mx-auto my-10 lg:max-w-6xl w-full xl:px-0  px-3 flex flex-col items-center justify-center ">
      {heading && (
        <div className="md:text-[32px] text-[20px] md:leading-[48px] leading-[30px] font-[700] my-[8px] text-center">
          Exam Categories
        </div>
      )}
      {subHeading && (
        <div className="md:text-[16px] text-[14px] text-[#3D3D3D] md:leading-[24px] leading-[20px] font-[500] ">
          PW is preparing students for 24 exam categories. Scroll down to find
          the one you are preparing for.
        </div>
      )}
      <div className="grid xl:grid-cols-3 md:grid-cols-2 items-start justify-center grid-cols-1 gap-4 my-[32px]">
        {/* {categories?.slice(0, showMore)?.map((cat, key) => (
          // <ExamCategoryCard
          //   key={key}
          //   examCategoryCardData={{
          //     title: cat.title,
          //     color: cat.color,
          //     image: cat.image,
          //     cohorts: cat?.cohorts || [],
          //   }}
          //   bgColor={''}
          // />
        ))} */}
      </div>
      {showAllCategoriesBtn && (
        <div
          className="text-[18px] leading-[28px] font-[600] cursor-pointer underline text-[#5A4BDA] "
          onClick={toggleViewCategories}
        >
          {showMore && showMore > 6
            ? 'View Less'
            : 'Explore from Categories(' + categories.length + ')'}
        </div>
      )}
    </div>
  );
};

export default memo(ExamCategory);
