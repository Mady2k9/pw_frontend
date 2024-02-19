import blueTick from '../../../../assets/Images/blue-tick.webp';
import Image from '../../Atoms/Image/Image';
const OtherDetails = ({ description }: { description: string }) => {
  const array = [
    'Special Live Doubts After Chapter Completion',
    'Daily Practice Problems & Detailed Video Solution will be provided.',
    'Test After Every 10 Days to help Students improve rheir problem solving skills.',
    'Syllabus Completion by the mid January 2022.',
    'Dedicated Subjectwise Doubt Solving Faculties.',
  ];
  return (
    <div
      className="p-[24px] bg-white rounded-[6px]"
      style={{ boxShadow: '0px 1px 8px 0px rgba(0, 0, 0, 0.08)' }}
    >
      <div className="sm:text-[32px] sm:leading-[48px] text-[20px] leading-[30px] font-[700]  mb-[16px]">
        Other Details
      </div>
      {array.map((text, key) => (
        <div
          className="mt-[16px]"
          key={key}
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      ))}
    </div>
  );
};

export default OtherDetails;
