import { useState } from 'react';
import ReusableButton from '../ReusableButton/ReusableButton';
import Modal from '../Modal/Modal';
import HeroBackground from '../../../../assets/Images/Schools/HeroBackground.webp';
import Heromwebs from '../../../../assets/Images/Schools/Heromwebs.webp';

function Herosection() {
  const [isCardVisible, setCardVisible] = useState(false);
  const handleButtonClick = () => {
    setCardVisible(!isCardVisible);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${HeroBackground.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        className="xl:pt-[80px] pt-[24px] xl:pb-[200px] pb-[60px] bg-bottom bg-cover bg-no-repeat sm:block hidden"
      >
        <div className="mx-auto xl:max-w-6xl w-full  xl:px-0  px-3 flex flex-col justify-center items-center relative">
          <div className="text-center md:text-[24px] md:leading-[32px] text-[18px] leading-[28px] font-semibold text-[#1B2124]">
            PW School Curriculum
          </div>
          <div className=" xl:text-[64px] xl:leading-[80px] text-[40px] leading-[50px] font-semibold text-[#1B2124] mt-4 flex flex-col lg:flex-row ">
            Fostering Growth
            <div className="flex flex-row gap-3 md:mx-2 mx-auto">
              <span className=""> & </span>
              <div
                className=" text-center xl:w-[286px] xl:h-[80px] w-[183px] h-[58px] bg-[#FF6D0A] rounded-lg transform rotate-4 mt-3 md:mt-0"
                style={{
                  transform: 'rotate(4deg)',
                  boxShadow: '0px 4px 0px 0px #000',
                  border:
                    '1px solid var(--PW-Gray-Palette-900-PW-Neutral, #1B2124)',
                }}
              >
                <div className="text-white">Curiosity</div>
              </div>
            </div>
          </div>
          <div className="text-center mx-auto md:w-[53%] px-5  xl:text-[20px] xl:leading-[30px]  text-[16px] leading-[24px] font-semibold text-[#757575] mt-5 mb-10">
            Our School Curriculum is designed to nurture inquisitive minds and
            prepare students for a bright future.
          </div>
          <div>
            <ReusableButton
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
      <div
        style={{
          backgroundImage: `url(${Heromwebs.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        className="xl:pt-[80px] pt-[24px] xl:pb-[200px] pb-[60px] bg-bottom bg-cover bg-no-repeat sm:hidden block h-[500px]"
      >
        <div className="mx-auto xl:max-w-6xl w-full  xl:px-0  px-3 flex flex-col justify-center items-center relative">
          <div className="text-center text-[18px] leading-[28px] font-semibold text-[#1B2124]">
            PW School Curriculum
          </div>
          <div className="  text-[40px] leading-[50px] font-semibold text-[#1B2124] mt-4 flex flex-col lg:flex-row ">
            Fostering Growth
            <div className="flex flex-row gap-3 md:mx-2 mx-auto">
              <span className=""> & </span>
              <div
                className=" text-center  w-[187px] h-[58px] bg-[#FF6D0A] rounded-lg transform rotate-4 mt-3"
                style={{
                  transform: 'rotate(4deg)',
                  boxShadow: '0px 4px 0px 0px #000',
                  border:
                    '1px solid var(--PW-Gray-Palette-900-PW-Neutral, #1B2124)',
                }}
              >
                <div className="text-white">Curiosity</div>
              </div>
            </div>
          </div>
          <div className="text-center mx-auto md:w-[53%] px-5  xl:text-[20px] xl:leading-[30px]  text-[16px] leading-[24px] font-semibold text-[#757575] mt-5 mb-10">
            Our School Curriculum is designed to nurture inquisitive minds and
            prepare students for a bright future.
          </div>
          <div>
            <ReusableButton
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
    </>
  );
}

export default Herosection;
