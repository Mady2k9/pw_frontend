import React from 'react';
import { Image } from '@/components/ui/image';
import rightStars from '../../../../assets/Images/Schools/right-star.webp';
import leftStars from '../../../../assets/Images/Schools/StatsStars.webp';
import styles from './NumberSpeak.module.css';
function NumbersSpeak() {
  return (
    <div>
      <div className="bg-[#FFFBE6] relative py-12">
        <div className='mx-auto xl:max-w-6xl w-full'>
        <div className="font-[700] md:leading-[48px] md:text-[32px] leading-[30px] text-[20px] text-[#1B2124] text-center px-6">
          Our Numbers Speak For Themselves
        </div>
        <Image
         src={leftStars.src}
         alt='StarImage'
          className={
            'xl:w-[200px] xl:h-[180px] md:w-[98px] md:h-[97px] w-[88px] h-[84px]  bg-center bg-no-repeat bg-cover absolute xl:top-[84px] md:top-[98px] top-[223px] xl:left-[-75px] md:left-[-29px]  left-[-40px]'
          }
        />
        <div className="flex lg:flex-row flex-col justify-center px-5 w-full  mt-[32px] xl:gap-[32px] md:gap-4">
          <div className="flex flex-col items-center gap-[10px]">
            <div
              className={`md:leading-[100px] md:text-[80px] leading-[80px] text-[64px] font-[700] ${styles.numberSpeak}`}
              style={{
                color: 'var(--Foundation-Orange-orange-200, #FFBC8E)',
                textShadow: '2px 4px 0px #000',
              }}
            >
              400+
            </div>

            <div className="leading-[28px] text-[18px] font-[500px] text-[#3D3D3D] text-center">
              Workbooks & Reading Materials
            </div>
          </div>
          <div className="flex flex-col items-center gap-[10px] ">
            <div
              className={`md:leading-[100px] md:text-[80px] leading-[80px] text-[64px] font-[700] ${styles.numberSpeak}`}
              style={{
                color: 'var(--Foundation-Orange-orange-200, #FFBC8E)',
                textShadow: '2px 4px 0px #000',
              }}
            >
              5000+
            </div>

            <div className="leading-[28px] text-[18px] font-[500px] text-[#3D3D3D] text-center">
            <p>Animation and Video <br/>Lectures </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[10px] px-4">
            <div
              className={`md:leading-[100px] md:text-[80px] leading-[80px] text-[64px]  font-[700] ${styles.numberSpeak}`}
              style={{
                color: 'var(--Foundation-Orange-orange-200, #FFBC8E)',
                textShadow: '2px 4px 0px #000',
              }}
            >
              10000+
            </div>
            <div className="leading-[28px] text-[18px] font-[500px] text-[#3D3D3D] text-center">
           <p> Practice tests for Regular <br/>Revision</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[10px]">
            <div
              className={`md:leading-[100px] md:text-[80px] leading-[80px] text-[64px]  font-[700] ${styles.numberSpeak}`}
              style={{
                color: 'var(--Foundation-Orange-orange-200, #FFBC8E)',
                textShadow: '2px 4px 0px #000',
              }}
            >
              5000+
            </div>
            <div className="leading-[28px] text-[18px] font-[500px] text-[#3D3D3D] text-center">
            Lesson Plans
            </div>
          </div>
        </div>
        <Image
          src={`${rightStars.src}`}
          alt='right'
          className={
            'xl:w-[145px] xl:h-[201px] lg:w-[78px] lg:h-[107px] w-[40px] h-[55px] bg-center bg-no-repeat bg-cover absolute xl:top-[75px] lg:top-[95px] top-[235px] right-0'
          }
        />
      </div>
      </div>
    </div>
  );
}

export default NumbersSpeak;
