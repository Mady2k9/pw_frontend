const DescriptionTabNav = ({
  tabs,
  activeTab,
  handleScrollToComponent,
}: {
  tabs: any;
  activeTab: any;
  handleScrollToComponent: any;
}) => {
  return (
    <div className={` w-full  bg-white max-h-[48px] border-b-[1px]`}>
      <div
        className="max-w-6xl mx-auto flex px-4 xl:px-0  overflow-x-scroll transition-all ease-in-out gap-[16px] md:gap-[48px]"
        id={'batch-description-page-tab-wrapper'}
      >
        {tabs?.map((tab: string, key: number) => (
          <div
            id={`${tab}-text`}
            key={key}
            className={`cursor-pointer relative  ${
              tab == activeTab ? 'text-[#1d1d1e] font-[600]' : 'text-[#757575]'
            }  `}
          >
            <div
              id={`${tab}-tab`}
              className="absolute opacity-0 bottom-0 rounded-t-lg h-[4px] w-full bg-[#5A4BDA] "
            />
            <div
              className="py-[12px] px-2 xl:px-0 whitespace-nowrap sm:text-base text-xs "
              onClick={() => handleScrollToComponent(tab)}
            >
              {tab}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DescriptionTabNav;
