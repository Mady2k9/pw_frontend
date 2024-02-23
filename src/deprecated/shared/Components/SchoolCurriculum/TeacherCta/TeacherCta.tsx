import React, { useState } from 'react';
import Button from '../ReusableButton/ReusableButton'
import {Image} from '@/components/ui/image';
import Modal from '../Modal/Modal';
import TeacherBg from '../../../../assets/Images/Schools/teachers-bg.webp';
import Teacher1Web from '../../../../assets/Images/Schools/teacher1-web.webp';
import Teacher2Web from '../../../../assets/Images/Schools/teacher2-web.webp';
import Teacher3Web from '../../../../assets/Images/Schools/teacher3-web.webp';
import Teacher4Web from '../../../../assets/Images/Schools/teacher4-web.webp';
import Teacher5Web from '../../../../assets/Images/Schools/teacher5-web.webp';
import Teacher6Web from '../../../../assets/Images/Schools/teacher6-web.webp';
import Teacher1Mob from '../../../../assets/Images/Schools/teacher1-mob.webp';
import Teacher2Mob from '../../../../assets/Images/Schools/teacher2-mob.webp';
import Teacher3Mob from '../../../../assets/Images/Schools/teacher3-mob.webp';
import Teacher4Mob from '../../../../assets/Images/Schools/teacher4-mob.webp';
import Teacher5Mob from '../../../../assets/Images/Schools/teacher5-mob.webp';
import Teacher6Mob from '../../../../assets/Images/Schools/teacher6-mob.webp';

function TeacherCta({isInViewport,refValue}:{isInViewport:boolean, refValue:any}) {
  const [isCardVisible, setCardVisible] = useState(false);
  const handleButtonClick = () => {
    setCardVisible(!isCardVisible);
  };
  return (
    <div className="mx-auto xl:max-w-6xl w-full  sm:px-3 md:px-0 md:mt-10 md:mb-28 mt-[32px] mb-[40px]"
    ref={refValue}>
      <div
        style={{
          backgroundImage: `url(${TeacherBg.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          //  border: '1px solid #1B2124',
          boxShadow: '0px 4px 0px 0px #000',
        }}
        className="rounded-xl relative"
      >
        <div className="flex flex-col xl:p-24 py-24 px-10 gap-4 items-center">
          <div className="font-bold text-[20px] xl:text-[32px] leading-[30px] xl:leading-[48px] text-[#FFF] text-center ">
            Teachers Love PW School Curriculum
          </div>
          <div className="text-[14px] xl:text-[16px] leading-[20px] xl:leading-[24px] font-[500] lg:pb-5 px-3 lg:px-32 text-white text-center mx-auto">
            Teachers nationwide appreciate the PW School curriculum, renowned
            for its innovative approach to education through interactive
            learning modes.
          </div>
          
          <Image
           src={`${Teacher1Web.src}`}
           alt='Teacher image 1'
            className={`hidden lg:block w-[80px] h-[80px] bg-center bg-no-repeat bg-cover absolute right-[158px] bottom-[36px] opacity-0 ${isInViewport? 'animate-in fade-in opacity-100 delay-500 duration-1000':''}`}
          />
          <Image
           src={`${Teacher1Mob.src}`}
           alt='Teacher image 2'
            className={`md:hidden w-[41px] h-[41px] bg-center bg-no-repeat bg-cover absolute left-[24px] bottom-[51px] opacity-0 ${isInViewport? 'animate-in fade-in opacity-100 delay-500 duration-1000':''}`}
          />
          <Image
           src={`${Teacher3Web.src}`}
           alt='Teacher image 3'
            className={`hidden lg:block w-[60px] h-[60px] bg-center bg-no-repeat bg-cover absolute right-[178px] top-[26px] opacity-0 ${isInViewport? 'animate-in fade-in opacity-100 delay-700 duration-1000':''}`}
          />
          <Image
           src={`${Teacher2Mob.src}`}
           alt='Teacher image 4'
            className={`md:hidden w-[48px] h-[48px] bg-center bg-no-repeat bg-cover absolute right-[138px] bottom-[18px] opacity-0 ${isInViewport? 'animate-in fade-in opacity-100 delay-700 duration-1000':''}`}
          />
          <Image
           src={`${Teacher2Web.src}`}
           alt='Teacher image 5'
            className={`hidden lg:block w-[86px] h-[86px] bg-center bg-no-repeat bg-cover absolute right-[72px] top-[105px] opacity-0 ${isInViewport? 'animate-in fade-in opacity-100 delay-400 duration-1000':''}`}
          />
          <Image
           src={`${Teacher3Mob.src}`}
           alt='Teacher image 6'
            className={`md:hidden w-[35px] h-[35px] bg-center bg-no-repeat bg-cover absolute right-[23px] bottom-[66px] opacity-0 ${isInViewport? 'animate-in fade-in opacity-100 delay-400 duration-1000':''}`}
          />
 
          <Image
           src={`${Teacher4Web.src}`}
           alt='Teacher image 7'
            className={`hidden lg:block w-[56px] h-[56px] bg-center bg-no-repeat bg-cover absolute left-[201px] bottom-[36px] opacity-0 ${isInViewport? 'animate-in fade-in opacity-100 delay-400 duration-1000':''}`}
          />
          <Image
           src={`${Teacher4Mob.src}`}
           alt='Teacher image 8'
            className={`md:hidden w-[38px] h-[38px] bg-center bg-no-repeat bg-cover absolute left-[19px] top-[33px] opacity-0 ${isInViewport? 'animate-in fade-in opacity-100 delay-400 duration-1000':''}`}
          />
         <Image
           src={`${Teacher6Web.src}`}
           alt='Teacher image 9'
            className={`hidden lg:block w-[55px] h-[55px] bg-center bg-no-repeat bg-cover absolute left-[167px] top-[31px] opacity-0 ${isInViewport? 'animate-in fade-in opacity-100 delay-1000 duration-1000':''}`}
          />
          <Image
           src={`${Teacher6Mob.src}`}
           alt='Teacher image 10'
            className={`md:hidden w-[35px] h-[35px] bg-center bg-no-repeat bg-cover absolute right-[27px] top-[30px] opacity-0 ${isInViewport? 'animate-in fade-in opacity-100 delay-1000 duration-1000':''}`}
          />
           <Image
           src={`${Teacher5Web.src}`}
           alt='Teacher image 11'
            className={`hidden lg:block w-[87px] h-[87px] bg-center bg-no-repeat bg-cover absolute left-[62px] top-[105px] opacity-0 ${isInViewport? 'animate-in fade-in opacity-100 delay-700 duration-1000':''}`}
          />
          <Image
           src={`${Teacher5Mob.src}`}
           alt='Teacher image 12'
            className={`md:hidden w-[42px] h-[42px] bg-center bg-no-repeat bg-cover absolute left-[137px] top-[17px] opacity-0 ${isInViewport? 'animate-in fade-in opacity-100 delay-700 duration-1000':''}`}
          /> 
          <Button
            className={
              'xl:w-[200px] xl:h-[52px] w-[176px] h-[48px] text-[#fff] text-[16px] md:text-[18px] md:leading-[28px] font-[600] rounded-lg bg-[#1B2124] flex items-center justify-center cursor-pointer'
            }
            title={'Get Started'}
            handleClick={handleButtonClick}
          />
          {isCardVisible && <Modal />}
        </div>
      </div>
    </div>
  );
}

export default TeacherCta;
