import React, { useEffect, useRef, useState } from 'react';
import Image from '../../Atoms/Image/Image';
import { CardData } from './TestonomialCardType';
import testonomialVideo from '../../../../jsonFiles/testonomialVideo.json';
import dynamic from 'next/dynamic';
import playbuttonwebp from '../../../../assets/Images/Schools/playbuttonwebp.webp';
const DynamicVideoComponent = dynamic(
  () => import('../../Molecules/VideoComponentPopup/VideoComponentPopup'),
  {
    ssr: false,
  }
);

function TestonomialCard() {
  const [showVideoPopups, setShowVideoPopups] = useState<boolean[]>([]);
  const videoContainerRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    videoContainerRefs.current = Array.from(
      { length: testonomialVideo.Videocards.length },
      () => null
    );
  }, []);

  const handleShowVideo = (index: number) => {
    setShowVideoPopups((prevState) => {
      const updatedState = [...prevState];
      updatedState[index] = true;
      return updatedState;
    });
    document.body.style.overflow = 'hidden';
  };

  const handleCloseVideo = (index: number) => {
    setShowVideoPopups((prevState) => {
      const updatedState = [...prevState];
      updatedState[index] = false;
      return updatedState;
    });
    document.body.style.overflow = 'auto';
  };

  const getYtUrl = (url: string) => {
    if (url?.includes('embed')) return url + '&autoplay=1';
  };

  return (
    <>
      {testonomialVideo.Videocards.map((cardData: CardData, index) => (
        <div
          key={cardData?.name}
          className={`border border-black rounded-lg w-[360px] bg-[#FFF0E7] mb-3.5 py-6   relative `}
          style={{
            backgroundColor: cardData.backgroundColor,
            border: '1px solid var(--PW-Gray-Palette-900-PW-Neutral, #1B2124)',
            boxShadow: '0px 4px 0px 0px #000',
          }}
        >
          {showVideoPopups[index] && (
            <div
              className="fixed h-screen inset-0 bg-black/20 z-50 flex justify-between items-center"
              aria-hidden="true"
              ref={(ref) => (videoContainerRefs.current[index] = ref)}
            >
              <div
                className={
                  'mx-auto bg-black rounded-lg aspect-video absolute z-50 left-0 right-0 max-[345px]:w-[315px] h-[228px] w-[360px] sm:w-[700px] sm:h-[450px] xl:w-[1000px] xl:h-[560px]'
                }
              >
                <div
                  className="absolute -top-3 -right-3 bg-black text-white w-10 h-10 flex flex-col items-center justify-center rounded-full cursor-pointer duration-200 transition-all text-2xl pb-1"
                  onClick={() => handleCloseVideo(index)}
                >
                  x
                </div>
                <DynamicVideoComponent
                  src={`${getYtUrl(cardData.videoLink)}`}
                  title={'YT-video'}
                  className={'h-full w-full  rounded-lg'}
                />
              </div>
            </div>
          )}

          <div className="flex flex-col justify-between  px-[20px]">
            <Image
              bgImagetitle={cardData?.image}
              className={
                'md:w-[320px] md:h-[202px] w-[208px] h-[117px] bg-no-repeat bg-cover rounded-lg'
              }
            />

            <div className="relative ">
              <img
                onClick={() => handleShowVideo(index)}
                src={playbuttonwebp.src}
                alt="playbuttonwebp.webp"
                className={
                  'w-[48px] h-[48px]  cursor-pointer  transition-transform transform hover:translate-y-1  animate__animated absolute top-[-69px] left-[12px] z-10 border-0 rounded-full'
                }
              />
              <div className="w-[38px] h-[38px] rounded-full bg-black absolute left-[17px]   top-[-60px] z-0"></div>
            </div>

            <div className="mt-7">
              <div className="font-semibold md:leading-[24px] md:text-[16px] leading-[20px] text-[14px] text-[#3D3D3D] ">
                {cardData?.name}
              </div>
              <hr className="my-[6px] bg-coolGray-700 h-0.5" />
              <div className="font-semibold md:leading-[24px] md:text-[16px] leading-[20px] text-[14px] text-[#3D3D3D]">
                {cardData?.class}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default TestonomialCard;
