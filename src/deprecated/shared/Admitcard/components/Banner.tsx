import React from 'react';
import AlakhSir from '../../../assets/Images/admitcard/alakhsir.webp';
import Ellipse from '../../../assets/Images/admitcard/ring.webp';
import Chat from '../../../assets/Images/admitcard/chat.svg';
import Reward from '../../../assets/Images/admitcard/reward.svg';
import GroupLines from '../../../assets/Images/admitcard/Group 1116599049.svg';
import Lines from '../../../assets/Images/admitcard/highlight.webp';

const Banner = () => {
  return (
    <div className="bg-[rgb(248,248,248)] flex w-full relative">
      <div className="mx-auto lg:max-w-6xl flex md:flex-row flex-col xl:h-[545px] sm:h-[700px]">
        <div className="w-full flex xl:flex-row flex-col mt-[40px] justify-between">
          <div className="flex flex-col xl:w-[45%] sm:w-[60%] w-[80%] xl:text-left text-center relative mx-auto">
            <img
              src={GroupLines.src}
              height={70}
              width={70}
              alt={'Group Lines'}
              loading="lazy"
              className="sm:mb-[-15px] sm:ml-[-40px] h-8 mb-[-10px] ml-[-40px] md:h-16 md:ml-[-35px] lg:ml-[-25px] xl:ml-[-45px]"
            ></img>
            <h2 className="md:text-[40px] md:leading-[50px] font-[700] text-[24px] leading-[30px] relative flex items-center justify-center flex-col">
              Submit Your Admit Card & Get JEE Prep Package!
              <img
                src={Lines.src}
                height={250}
                width={250}
                alt={'Underline'}
                loading="lazy"
              ></img>
            </h2>
            <p className="md:text-[18px] text-[14px] md:leading-[28px] leading-[20px] font-[600] py-[6px] text-[#3D3D3D] mt-2 md:mt-0">
              Win JEE prep package and other exciting prizes
            </p>
          </div>

          <div className="relative xl:w-[40%] sm:w-[50%] w-[40%] flex items-center justify-center md:h-[442px] mx-auto h-[400px]">
            <img
              src={Ellipse.src}
              height={352}
              width={352}
              alt={'Circle'}
              className="mt-[65px]"
            ></img>
            <img
              src={AlakhSir.src}
              height={442}
              width={265}
              alt={'Alakh Sir'}
              className="absolute xs:bottom-10 md:bottom-0 lg:left-[125px] md:left[75px]"
            ></img>
            <div className="bg-white flex flex-col md:flex-row rounded-lg absolute md:w-[200px] items-center md:top-[100px] lg:right-[-100px] md:right-[-160px] right-[-85px] w-[120px] top-[60px] shadow-black shadow-md">
              <div className="mt-1 md:m-2 flex flex-col justify-center items-center align-middle">
                <img
                  src={Reward.src}
                  alt="Reward"
                  className="h-[24px] w-[24px] md:h-[50px] md:w-[50px]"
                />
              </div>
              <div className="m-2 text-center md:text-left">
                <p className="md:text-[16px] md:leading-[24px] font-[600] text-[12px]">
                  Get Exciting <br />
                  Rewards
                </p>
                <p className="md:text-[12px] font-[500] text-[10px] text-[#757575]">
                  Rewards, recognition & more
                </p>
              </div>
            </div>
            <div className="bg-white flex flex-col md:flex-row rounded-lg absolute md:w-[200px] items-center lg:top-[210px] lg:left-[-65px] md:top-[200px] md:left-[-150px] top-[150px] left-[-100px] shadow-black shadow-md">
              <div className="mt-1 md:m-2 flex flex-col justify-center">
                <img
                  src={Chat.src}
                  alt="Reward"
                  className="h-[24px] w-[24px] md:h-[50px] md:w-[50px]"
                />
              </div>
              <div className="m-2 text-center md:text-left">
                <p className="md:text-[16px] md:leading-[24px] font-[600] text-[12px]">
                  JEE Preparation <br />
                  Package
                </p>
                <p className="md:text-[12px] md:leading-[28px] font-[500] text-[10px] text-[#757575]">
                  Tests, PYQs & More
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
