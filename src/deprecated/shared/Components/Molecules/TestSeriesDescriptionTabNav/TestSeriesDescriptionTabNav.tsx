import { useEffect, useRef } from 'react';

const TestSeriesDescriptionTabNav = ({
  tabs,
  activeTab,
  setShowBatchCardDetails,
  handleScrollToComponent,
}: {
  tabs: any;
  activeTab: any;
  setShowBatchCardDetails?: any;
  handleScrollToComponent: any;
}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const handleIntersection = (entries: any) => {
    // entries.forEach((entry: { isIntersecting: any }) => {
    //   if (entry.isIntersecting) {
    //     setShowBatchCardDetails(true);
    //   } else setShowBatchCardDetails(false);
    // });
  };
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection);
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={targetRef} className="w-full bg-white max-h-[48px]">
      <div className="max-w-6xl mx-auto flex px-4 xl:px-0 overflow-x-scroll gap-1.5 md:gap-8">
        {tabs?.map((cohort: string, key: number) => (
          <div
            key={key}
            className={`cursor-pointer relative  ${
              cohort == activeTab ? 'text-[#5A4BDA]' : 'text-[##757575]'
            }  `}
          >
            {cohort == activeTab ? (
              <div className="absolute bottom-0 rounded-t-lg h-[4px] w-full bg-[#5A4BDA] " />
            ) : (
              ''
            )}
            <div
              className="py-[12px] px-2 xl:px-0 whitespace-nowrap text-base "
              onClick={() => handleScrollToComponent(cohort)}
            >
              {cohort}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TestSeriesDescriptionTabNav;
