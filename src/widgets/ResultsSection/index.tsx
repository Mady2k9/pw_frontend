import { Pill } from '@/components/ui/pill';
import { useMemo, useState } from 'react';
import { MainBanner } from '@/widgets/MainBanner';

interface ResultsSectionProps {
  title?: string;
  description?: string;
  results: any[];
  hideCategories?: boolean;
}

export default function ResultsSection({ title, hideCategories, description, results }: ResultsSectionProps) {
  const Categories = results?.map((result) => {
    return result?.exam;
  });
  const [activePill, setActivePill] = useState<string>(Categories?.[0]);
  const images = useMemo(() => {
    const res = results?.find((result) => {
      return result.exam === activePill;
    });
    if (res && !res.imageOption) {
      res.imageOption = [{
        dWebImage: res.dwebImage || res.dWebImage,
        mWebImage: res.mwebImage || res.mWebImage,
      }];
    }
    return res?.imageOption || [];
  }, [activePill, results]);
  if (!results?.length) {
    return <></>;
  }
  return (
    <div className={' py-4  md:py-8'}>
      {title && <h2 className={'text-xl md:text-4xl font-bold text-center '}>{title}</h2>}
      {description &&
        <p className={'text-center text-sm md:text-lg font-medium text-light max-w-3xl mx-auto mt-3'}>{description}</p>}
      {!hideCategories && <div className={'w-full overflow-x-auto scrollbar-hide py-1 my-4'}>
        <div className={'flex flex-nowrap justify-start md:justify-center gap-3'}>
          {
            Categories.map((category, index) => (
              <Pill onClick={() => setActivePill(category)} key={index}
                    variant={category === activePill ? 'active' : 'default'}>
                <span>{category}</span>
              </Pill>
            ))
          }
        </div>
      </div>}
      <div className={'rounded-md overflow-hidden'}>
        <MainBanner
          items={images.map((banner: {
            dWebImage?: string | string[],
            mWebImage?: string | string[],
            dwebImage?: string | string[],
            mwebImage?: string | string[],
            redirectionUrl: string
          }) => {
            let dWebImage = banner.dWebImage || banner.dwebImage;
            let mWebImage = banner.mWebImage || banner.mwebImage;
            if (typeof dWebImage === 'object') {
              dWebImage = dWebImage[0];
            }
            if (typeof mWebImage === 'object') {
              mWebImage = mWebImage[0];
            }
            return {
              image: dWebImage,
              mWebImage: mWebImage,
              alt: title || `${activePill} Results`,
              link: banner.redirectionUrl,
            };
          })} />
      </div>
    </div>
  );
}
