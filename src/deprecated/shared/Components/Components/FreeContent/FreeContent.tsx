import Carousel from '../../Atoms/Carousel/Carousel';
import FreeContentCard from '../../Molecules/FreeContentCard/FreeContentCard';

const FreeContent = ({
  PAGE_SOURCE,
  freeContent,
  redirectSlug,
}: {
  freeContent: any[];
  PAGE_SOURCE: string;
  redirectSlug?: string;
}) => {
  if (!freeContent?.length) {
    return <></>;
  }
  return (
    <div
      className="p-[24px] bg-white rounded-[6px] flex flex-col"
      style={{ boxShadow: '0px 1px 8px 0px rgba(0, 0, 0, 0.08)' }}
    >
      <div className="md:text-[32px] text-[20px] font-[700] md:leading-[48px] leading-[30px] text-[#1B2124]">
        Free Content
      </div>
      <div className="my-[14px]">
        <Carousel
          array={freeContent.map((c: any, index: number) => {
            return (
              <FreeContentCard
                content={c}
                PAGE_SOURCE={PAGE_SOURCE}
                key={index}
              />
            );
          })}
          className="gap-2 py-[2px]"
        />
      </div>
      <a
        href={`/study/batches/${redirectSlug}/batch-overview`}
        className="w-full"
      >
        <div className="w-full flex justify-center cursor-pointer text-[18px] leading-[28px] font-[600] text-[#5A4BDA] bg-[#F1EFFF] hover:bg-[#D9D6FE] py-[14px] rounded-[6px]">
          View All
        </div>
      </a>
    </div>
  );
};

export default FreeContent;
