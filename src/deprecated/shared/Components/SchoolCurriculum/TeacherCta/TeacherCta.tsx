import React, { useState } from 'react';
import Button from '../ReusableButton/ReusableButton'
import Image from '../../Atoms/Image/Image';
import Modal from '../Modal/Modal';
import TeacherBg from '../../../../assets/Images/teachers-bg.webp';

import Teacher1Web from '../../../../assets/Images/teacher1-web.png';
import Teacher2Web from '../../../../assets/Images/teacher2-web.png';
import Teacher3Web from '../../../../assets/Images/teacher3-web.png';
import Teacher4Web from '../../../../assets/Images/teacher4-web.png';
import Teacher5Web from '../../../../assets/Images/teacher5-web.png';
import Teacher6Web from '../../../../assets/Images/teacher6-web.png';

import Teacher1Mob from '../../../../assets/Images/teacher1-mob.png';
import Teacher2Mob from '../../../../assets/Images/teacher2-mob.png';
import Teacher3Mob from '../../../../assets/Images/teacher3-mob.png';
import Teacher4Mob from '../../../../assets/Images/teacher4-mob.png';
import Teacher5Mob from '../../../../assets/Images/teacher5-mob.png';
import Teacher6Mob from '../../../../assets/Images/teacher6-mob.png';
import FadeinAnimations from './Teacher.module.css';

function TeacherCta() {
  const [isCardVisible, setCardVisible] = useState(false);
  const handleButtonClick = () => {
    setCardVisible(!isCardVisible);
  };
  return (
    <div className="mx-auto xl:max-w-6xl w-full  px-3 md:mt-16 md:mb-28 mt-[32px] mb-[40px]">
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
            bgImagetitle={`${Teacher1Web.src}`}
            className={`hidden lg:block w-[80px] h-[80px] bg-center bg-no-repeat bg-cover absolute right-[158px] bottom-[36px] ${FadeinAnimations.fadeInAnimation1}`}
          />
          <Image
            bgImagetitle={`${Teacher1Mob.src}`}
            className={`md:hidden w-[41px] h-[41px] bg-center bg-no-repeat bg-cover absolute left-[24px] bottom-[51px] ${FadeinAnimations.fadeInAnimation1}`}
          />
          <Image
            bgImagetitle={`${Teacher3Web.src}`}
            className={`hidden lg:block w-[60px] h-[60px] bg-center bg-no-repeat bg-cover absolute right-[178px] top-[26px] ${FadeinAnimations.fadeInAnimation2}`}
          />
          <Image
            bgImagetitle={`${Teacher2Mob.src}`}
            className={`md:hidden w-[48px] h-[48px] bg-center bg-no-repeat bg-cover absolute right-[138px] bottom-[18px] ${FadeinAnimations.fadeInAnimation2}`}
          />
          <Image
            bgImagetitle={`${Teacher2Web.src}`}
            className={`hidden lg:block w-[86px] h-[86px] bg-center bg-no-repeat bg-cover absolute right-[72px] top-[105px] ${FadeinAnimations.fadeInAnimation3}`}
          />
          <Image
            bgImagetitle={`${Teacher3Mob.src}`}
            className={`md:hidden w-[35px] h-[35px] bg-center bg-no-repeat bg-cover absolute right-[23px] bottom-[66px] ${FadeinAnimations.fadeInAnimation3}`}
          />

          <Image
            bgImagetitle={`${Teacher4Web.src}`}
            className={`hidden lg:block w-[56px] h-[56px] bg-center bg-no-repeat bg-cover absolute left-[201px] bottom-[36px] ${FadeinAnimations.fadeInAnimation4}`}
          />
          <Image
            bgImagetitle={`${Teacher4Mob.src}`}
            className={`md:hidden w-[38px] h-[38px] bg-center bg-no-repeat bg-cover absolute left-[19px] top-[33px] ${FadeinAnimations.fadeInAnimation4}`}
          />
          <Image
            bgImagetitle={`${Teacher6Web.src}`}
            className={`hidden lg:block w-[55px] h-[55px] bg-center bg-no-repeat bg-cover absolute left-[167px] top-[31px] ${FadeinAnimations.fadeInAnimation5}`}
          />
          <Image
            bgImagetitle={`${Teacher6Mob.src}`}
            className={`md:hidden w-[35px] h-[35px] bg-center bg-no-repeat bg-cover absolute right-[27px] top-[30px] ${FadeinAnimations.fadeInAnimation5}`}
          />
          <Image
            bgImagetitle={`${Teacher5Web.src}`}
            className={`hidden lg:block w-[87px] h-[87px] bg-center bg-no-repeat bg-cover absolute left-[62px] top-[105px] ${FadeinAnimations.fadeInAnimation6}`}
          />
          <Image
            bgImagetitle={`${Teacher5Mob.src}`}
            className={`md:hidden w-[42px] h-[42px] bg-center bg-no-repeat bg-cover absolute left-[137px] top-[17px] ${FadeinAnimations.fadeInAnimation6}`}
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
