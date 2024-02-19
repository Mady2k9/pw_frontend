const BatchInclusion = ({ description }: { description: string }) => {
  return (
    <>
      <div className="md:text-[32px] text-[20px] font-[700] md:leading-[48px] leading-[30px] text-[#1B2124]">
        This batch includes
      </div>
      <div
        className="flex flex-col gap-3 my-[16px]"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </>
  );
};

export default BatchInclusion;
