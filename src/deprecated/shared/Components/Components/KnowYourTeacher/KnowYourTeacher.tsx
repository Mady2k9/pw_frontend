import { Key } from 'react';
import Carousel from '../../Atoms/Carousel/Carousel';
import TeachersCard from '../../Molecules/TeachersCard/TeachersCard';

const KnowYourTeacher = ({ teacherData }: { teacherData: any }) => {
  const array = teacherData?.map((teacher: any, key: number) => (
    <div key={key}>
      <TeachersCard teacher={teacher} />
    </div>
  ));
  if (!teacherData || teacherData.length < 0) return <></>;
  return (
    <div
      className="p-[24px] bg-white rounded-[6px]"
      style={{ boxShadow: '0px 1px 8px 0px rgba(0, 0, 0, 0.08)' }}
    >
      <div className="md:text-[32px] text-[20px] font-[700] md:leading-[48px] leading-[30px] text-[#1B2124] mb-[10px]">
        Know your Teachers
      </div>
      <Carousel
        array={array}
        className="gap-4"
        hideArrow={teacherData?.length <= 3}
      />
    </div>
  );
};

export default KnowYourTeacher;
