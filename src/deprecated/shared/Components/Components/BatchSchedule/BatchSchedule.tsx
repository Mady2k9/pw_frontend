import { useEffect, useRef, useState } from 'react';
import BatchSchedulecard from '../../Molecules/BatchScheduleCard/BatchScheduleCard';

const BatchSchedule = ({ schedules }: { schedules: any }) => {
  const minimumSubjectToShow = schedules.length > 3 ? 3 : schedules.length;
  const subjectRefs = useRef<HTMLDivElement[]>([]);
  const [showSubject, setShowSubject] = useState(minimumSubjectToShow);
  const [containerHeight, setContainerHeight] = useState(0);
  const handleSubject = () => {
    setShowSubject((prev: number) =>
      prev === minimumSubjectToShow ? schedules.length : minimumSubjectToShow
    );
  };

  useEffect(() => {
    if (subjectRefs.current[0]) {
      // const height = subjectRefs.current[0].offsetHeight * showSubject;
      const height = subjectRefs.current.reduce((total, h) => {
        return total + h.offsetHeight;
      }, 0);
      setContainerHeight(height);
    }
  }, [showSubject]);
  const cardBgColors = [
    { background: '#EFF8FF', bullet: '#2E90FA' },
    { background: '#F4F3FF', bullet: '#7A5AF8' },
    { background: '#FEFBE8', bullet: '#EAAA08' },
  ];
  return (
    <div
      className="p-[24px] bg-white rounded-[6px] "
      style={{ boxShadow: '0px 1px 8px 0px rgba(0, 0, 0, 0.08)' }}
    >
      <div className="md:text-[32px] text-[20px] font-[700] md:leading-[48px] text-[#1B2124] leading-[30px]">
        Batch Schedule
      </div>
      <div
        className="flex flex-col overflow-hidden bg-white transition-all duration-500 ease-in-out mt-[16px]"
        style={{
          height: containerHeight,
        }}
      >
        {schedules.slice(0, showSubject).map((subject: any, i: number) => (
          <div
            key={i}
            ref={(el) => {
              if (el !== null) {
                subjectRefs.current[i] = el;
              }
            }}
            className="py-[8px]"
          >
            <BatchSchedulecard
              subject={subject}
              colorTheme={cardBgColors[i % 3]}
            />
          </div>
        ))}
      </div>
      {schedules.length > 3 && (
        <div
          className="w-full border border-[#D9DCE1] text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] font-[600] rounded-[6px] cursor-pointer py-[14px] flex items-center justify-center mt-[8px]"
          onClick={handleSubject}
        >
          {showSubject == 3
            ? `+${schedules.length - showSubject} more subject`
            : 'Show Less'}
        </div>
      )}
    </div>
  );
};

export default BatchSchedule;
