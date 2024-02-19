import React, { useEffect, useRef, useState } from 'react';
import Image from '../../Atoms/Image/Image';
import { CardData } from './TestonomialCardType';
import testonomialVideo from '../../../../jsonFiles/testonomialVideo.json';
import dynamic from 'next/dynamic';
const DynamicVideoComponent = dynamic(
  () => import('../../Molecules/VideoComponentPopup/VideoComponentPopup'),
  {
    ssr: false,
  }
);
function TestonomialCard() {
  const [showVideoPopup, setShowVideoPopup] = useState(false);
  const videoContainerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        videoContainerRef.current &&
        videoContainerRef?.current?.contains(event.target as Node)
      ) {
        setShowVideoPopup(false);
        document.body.style.overflow = 'auto';
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);
  const handleShowVideo = () => {
    document.body.style.overflow = 'hidden';
    setShowVideoPopup(true);
  };
  const getYtUrl = (url: string) => {
    if (url?.includes('embed')) return url + '&autoplay=1';
  };
  return (
    <>
      {testonomialVideo.Videocards.map((cardData: CardData) => (
        <div
          key={cardData?.name}
          className={`border border-black rounded-lg  bg-[#FFF0E7] mb-3.5 py-6 md:mx-3 mx-auto relative `}
          style={{
            backgroundColor: cardData.backgroundColor,
            border: '1px solid var(--PW-Gray-Palette-900-PW-Neutral, #1B2124)',
            boxShadow: '0px 4px 0px 0px #000',
          }}
        >
          {showVideoPopup ? (
            <div
              className="fixed h-screen inset-0 bg-black/20 z-50 flex justify-between items-center"
              aria-hidden="true"
              ref={videoContainerRef}
            >
              <div
                className={
                  'mx-auto bg-black rounded-lg aspect-video absolute z-50 left-0 right-0 max-[345px]:w-[315px] h-[228px] w-[360px] sm:w-[700px] sm:h-[450px] xl:w-[1000px] xl:h-[560px]'
                }
              >
                <div className="absolute -top-3 -right-3 bg-black text-white w-10 h-10 flex flex-col items-center justify-center rounded-full cursor-pointer duration-200 transition-all text-2xl pb-1">
                  x
                </div>
                <DynamicVideoComponent
                  src={`${getYtUrl(
                    'https://www.youtube.com/embed/47H01638-9w?si=6zAj5IrAToauPPQp'
                  )}`}
                  title={'YT-video'}
                  className={'h-full w-full  rounded-lg'}
                />
              </div>
            </div>
          ) : null}

          <div className="flex flex-col justify-between  px-[22px]">
            <Image
              bgImagetitle={cardData?.image}
              className={
                'md:w-[320px] md:h-[202px] w-[208px] h-[117px] bg-no-repeat bg-cover rounded-lg'
              }
            />

            <div className="relative ">
              <img
                onClick={handleShowVideo}
                src="playbuttonwebp.webp"
                alt="playbuttonwebp.webp"
                className={
                  'w-[48px] h-[48px]  cursor-pointer  transition-transform transform hover:translate-y-1  animate__animated absolute top-[-69px] left-[12px] z-10 border-0 rounded-full'
                }
              />
              <div className="w-[38px] h-[38px] rounded-full bg-black absolute left-[17px]   top-[-60px] z-0"></div>
            </div>

            <div className="mt-7">
              <div className="font-semibold leading-[24px] text-[16px] text-[#3D3D3D] ">
                {cardData?.name}
              </div>
              <hr className="my-[6px] bg-coolGray-700 h-0.5" />
              <div className="font-semibold leading-[24px] text-[16px] text-[#3D3D3D]">
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
