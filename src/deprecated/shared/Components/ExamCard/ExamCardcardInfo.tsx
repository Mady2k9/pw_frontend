import Image from '../Atoms/Image/Image';
const ExamCardcardInfo = ({
  desImages,
  title,
  subTitle,
}: {
  desImages: string;
  title: string;
  subTitle: string;
}) => {
  return (
    <>
      <div className="flex  gap-2">
        <Image
          bgImagetitle={desImages}
          className={'h-5 w-5 bg-center bg-no-repeat bg-contain'}
        />
        <div className="font-medium text-sm">
          <span className="text-[12px] leading-[18px] font-[700] text-[#3d3d3d]">
            {title}
          </span>
          <span className="text-[12px] leading-[18px] font-[500]  text-[#3d3d3d]">
            {' '}
            {subTitle}{' '}
          </span>
        </div>
      </div>
    </>
  );
};
export default ExamCardcardInfo;
