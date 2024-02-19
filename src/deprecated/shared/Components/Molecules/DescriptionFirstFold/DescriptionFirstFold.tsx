import { useEffect, useRef } from 'react';
import backgroundImage from '@/assets/Images/Background.webp';
import pointerImage1 from '@/assets/Images/Hero-section-Pointer-1.webp';
import pointerImage2 from '@/assets/Images/Hero-Section-Pointer-2.webp';
import pointerImage3 from '@/assets/Images/Hero-Section-Pointer-3.webp';
import Image from '../../Atoms/Image/Image';
import { formatDate } from '@/deprecated/shared/Components/BatchCard/BatchPrice';
const DescriptionFirstFold = ({
  setIsInViewPart,
  title,
  description,
  batch,
}: {
  setIsInViewPart: (arg0: boolean) => void;
  title: string;
  description: string;
  meta: any;
  batch: any;
}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const handleIntersection = (entries: any) => {
    entries.forEach((entry: { isIntersecting: any }) => {
      if (entry.isIntersecting) {
        setIsInViewPart(true);
      } else setIsInViewPart(false);
    });
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
    <div
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
      ref={targetRef}
      className=" m-auto bg-center bg-cover bg-no-repeat"
    >
      <div className="py-[36px]  text-white mx-auto max-w-6xl xl:px-0 px-4 w-full ">
        <div className=" text-2xl sm:text-[40px] font-[700] sm:leading-[50px]">
          {title}
        </div>
        <div className="text-[12px] leading-[18px] sm:text-[14px] font-[500] py-[12px] sm:leading-[20px]">
          {description}
        </div>
        <div className="flex flex-col gap-[12px]">
          {batch.byName && (
            <div className="flex flex-row items-center   gap-2">
              <Image
                bgImagetitle={`${pointerImage1.src}`}
                className={
                  'bg-center bg-cover bg-no-repeat sm:w-[30px] sm:h-[30px] h-6 w-6'
                }
              />
              <div className="sm:text-[16px] sm:leading-[24px] text-xs font-[500] ">
                {batch.byName}
              </div>
            </div>
          )}
          <div className="flex flex-row items-center  gap-2">
            <Image
              bgImagetitle={`${pointerImage2.src}`}
              className={
                'bg-center bg-cover bg-no-repeat sm:w-[30px] sm:h-[30px] w-6 h-6'
              }
            />
            <div className="text-xs sm:text-[16px] flex-nowrap font-[500] sm:leading-[24px]">
              {batch.meta
                ?.filter((f: any) => f.value)
                .slice(0, 2)
                ?.map((data: any, i: number) => {
                  return (
                    <span className={''} key={i}>
                      {data.value
                        ? `${data.value} ${data.key?.replace(
                            /_/g,
                            ' '
                          )}`.toLowerCase()
                        : ''}
                      ,{' '}
                    </span>
                  );
                })}{' '}
              & More
            </div>
          </div>
          <div className="flex flex-row items-center  gap-2">
            <Image
              bgImagetitle={`${pointerImage3.src}`}
              className={
                'bg-center bg-cover bg-no-repeat sm:w-[30px] sm:h-[30px] w-6 h-6 '
              }
            />
            <div className="text-xs sm:text-[16px] font-[500] sm:leading-[24px]">
              Starts on {formatDate(batch.startDate)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionFirstFold;
