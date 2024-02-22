import { useMemo } from 'react';
import { getFullName } from '@/deprecated/shared/utility';
import { formatDate } from '@/deprecated/shared/Components/BatchCard/BatchPrice';
import batchEventTracker from '@/lib/BatchEventTracker/BatchEventTracker';

const BatchSchedulecard = ({
  subject,
  colorTheme,
}: {
  subject: any;
  colorTheme: { background: string; bullet: string };
}) => {
  const handleClick = () => {
    batchEventTracker.scheduleDownLoad();
    const pdfUrl = subject.fileId?.baseUrl + subject.fileId?.key;
    window.open(pdfUrl, '_blank');
  };
  const teachersName = useMemo(() => {
    return subject?.teacherIds
      ?.map((teacher: any) => {
        return getFullName(teacher);
      })
      .join(' & ');
  }, [subject?.teacherIds]);
  return (
    <div
      className="p-[16px] flex flex-row justify-between flex-wrap   md:gap-4 gap-0 items-center"
      style={{ backgroundColor: colorTheme.background }}
    >
      <div className="relative w-full ">
        <div
          className=" absolute top-0 left-0  w-[4px]  rounded-8"
          style={{ backgroundColor: colorTheme.bullet }}
        />
        <div className="flex flex-col pl-[14px]">
          <div className="sm:text-[20px] sm:leading-[30px] text-sm font-[700]">
            {subject.subject}
          </div>

          <div className="justify-between  flex flex-col sm:flex-row sm:gap-4 gap-2 sm:items-center items-start ">
            <div className=" flex flex-col sm:flex-row gap-1 sm:items-center items-start min-h-full ">
              <div className="md:text-[14px]  text-[12px] md:leading-[20px] leading-[18px] font-[500] text-[#3D3D3D] flex flex-row  whitespace-nowrap">
                {formatDate(subject?.schedules[0]?.startTime) +
                  ' to ' +
                  formatDate(subject?.schedules[0]?.endTime)}
                <div className="bg-[#D9DCE1] min-h-full w-[1px] mx-[16px] sm:block hidden" />
              </div>

              {subject.lectureCount && (
                <div className="md:text-[14px] text-[12px] md:leading-[20px] leading-[18px] font-[500] text-[#3D3D3D] flex flex-row ">
                  {subject.lectureCount} Lecture
                  <div className="bg-[#D9DCE1] min-h-full w-[1px] mx-[16px] sm:block hidden" />
                </div>
              )}

              <div className="md:text-[14px] text-[12px] md:leading-[20px] leading-[18px] font-[500] text-[#3D3D3D] flex flex-row flex-wrap gap-1 ">
                {teachersName}
              </div>
            </div>
            {subject.fileId && (
              <div
                className="px-[20px] py-[10px] inline-block bg-black text-[#ffffff] rounded-[6px] text-[14px] eading-[20px] font-[600] cursor-pointer"
                onClick={handleClick}
              >
                Download
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatchSchedulecard;
