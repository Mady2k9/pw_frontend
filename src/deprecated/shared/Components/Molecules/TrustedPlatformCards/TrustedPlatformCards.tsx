import styles from './TrustedPlatformCards.module.css';
import Counter from '../Counter/Counter';
import { useEffect, useState, memo } from 'react';
import Image from '../../Atoms/Image/Image';
const TrustedPlatforCard = ({
  statsCardData,
  bgColor,
}: {
  statsCardData: {
    title: string;
    stats: string;
    icon: string;
  };
  bgColor: string;
}) => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (typeof window?.innerWidth !== 'undefined') {
      if (window.innerWidth <= 670) {
        setHeight(30);
        setWidth(15);
      } else if (window.innerWidth <= 768) {
        setHeight(48);
        setWidth(24);
      } else {
        setHeight(55);
        setWidth(25);
      }
    }
  }, []);
  return (
    <div
      className={`${styles.parent} lg:h-[265px] lg:w-[265px] md:w-[230px] md:h-[200px] h-[158px] w-[158px] md:rounded-[16px] rounded-[4px] flex flex-col items-center lg:justify-start justify-center overflow-hidden `}
      style={{ backgroundColor: bgColor }}
    >
      <div
        className={` ${styles.child} duration-300 flex flex-col items-center justify-center`}
      >
        <div
          className={`lg:text-[40px] md:text-[38px] text-2xl flex flex-row items-center justify-center  font-[700]`}
          style={{ lineHeight: height + 'px' }}
        >
          <Counter number={statsCardData.stats} height={height} width={width} />
        </div>
        <div className="md:text-lg text-[#3D3D3D] text-sm font-[500]">
          {statsCardData.title}
        </div>
      </div>
      {height >= 50 && (
        <Image
          bgImagetitle={statsCardData?.icon}
          className={`${styles.child} mt-[3px]  transform hover:translate-y-0 opacity-50 w-full h-[110px] bg-center bg-contain bg-no-repeat`}
        />
      )}
    </div>
  );
};

export default memo(TrustedPlatforCard);
