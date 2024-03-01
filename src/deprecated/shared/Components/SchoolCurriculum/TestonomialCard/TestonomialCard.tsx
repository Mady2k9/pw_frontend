import React, { useEffect, useRef, useState } from 'react';
import { Image } from '@/components/ui/image';
import { CardData } from './TestonomialCardType';
import{AccessVideoData} from './testonomialVideojson';
import dynamic from 'next/dynamic';
import playbuttonwebp from '../../../../assets/Images/Schools/playbuttonwebp.webp';
import CommaIcon from '../../../../assets/Images/Schools/comma.webp';
import TestonomialCardPop from '../TestonomialCardPop/TestonomialCardPop';

const DynamicVideoComponent = dynamic(
  () => import('../../Molecules/VideoComponentPopup/VideoComponentPopup'),
  {
    ssr: false,
  }
);

function TestonomialCard() {
  const [showVideoPopups, setShowVideoPopups] = useState<boolean[]>([]);
  const videoContainerRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [isCardVisible, setCardVisible] = useState(false);


  useEffect(() => {
    videoContainerRefs.current = Array.from(
      { length: AccessVideoData.Videocards.length },
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

  const handleButtonClick = () => {
    setCardVisible(!isCardVisible);
  };
  return (
    <>
      {AccessVideoData.Videocards.map((cardData: CardData, index) => (
        <div
          key={cardData?.name}
          className={`border border-black rounded-lg w-[360px] bg-[#FFF0E7] mb-3.5    relative `}
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
                  'mx-auto bg-black rounded-lg aspect-video absolute z-50 left-0 right-0 max-[345px]:w-[315px] h-[228px] w-[360px] sm:w-[700px] sm:h-[450px] xl:w-[1000px] xl:h-[400px]'
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

          <div
            className=" justify-between sm:min-w-[360px] min-h-[304px] min-w-[286px] p-4 sm:p-6 sm:gap-y-[18px] gap-y-[12px] flex flex-col rounded "
          >
            {cardData.image ? (<Image
              src={cardData?.image}
              alt='image1'
              className={
                'md:w-[320px] md:h-[202px] w-full  bg-no-repeat bg-cover rounded-lg'
              }
            />) : (<div>

              <div>
                <Image
                  src={`${CommaIcon.src}`}
                  alt='CommaIcon'
                  className={
                    'mb-2.5 sm:mb-4 h-[28px] w-[37px] bg-center bg-no-repeat bg-contain '
                  }
                />

                <div className="text-[#3D3D3D] font-medium sm:text-base text-sm ">
                  {cardData.Details.length > 250 ? (
                    <>
                      {`${cardData.Details.slice(0,260)}... `}
                      <span className="text-red-500 hover:underline cursor-pointer" 
                      onClick={handleButtonClick}
                      >

                        Read More
                        {isCardVisible && <TestonomialCardPop 
                        data={{
                          details: cardData.Details,
                          parentImage: cardData.parentImage,
                          parentName : cardData?.name,
                          classData : cardData?.class,
                                }} />}
                      </span>
                    </>
                  ) : (
                    cardData.Details
                  )}
                </div>
              </div>
            </div>)}

            {cardData.image && (
              <div className="relative">
                <Image
                  onClick={() => handleShowVideo(index)}
                  src={playbuttonwebp.src}
                  alt="playbuttonwebp.webp"
                  className={
                    'w-[48px] h-[48px]  cursor-pointer  transition-transform transform hover:translate-y-1  animate__animated absolute top-[-69px] left-[12px] z-10 border-0 rounded-full'
                  }
                />
                <div className="w-[38px] h-[38px] rounded-full bg-black absolute left-[17px]   top-[-60px] z-0"></div>
              </div>
            )}

            <div className="mt-5 flex flex-row items-center gap-3">
              <Image src={cardData?.parentImage} alt='parent Image' className={'h-10 w-10 bg-no-repeat bg-cover rounded-full'} />
              <div>
                <div className="font-semibold md:leading-[24px] md:text-[16px] leading-[20px] text-[14px] text-[#3D3D3D] ">
                  {cardData?.name}
                </div>
                <hr className="my-[6px] bg-coolGray-700 h-0.5 " />
                <div className="font-semibold md:leading-[24px] md:text-[16px] leading-[20px] text-[14px] text-[#3D3D3D]">
                  {cardData?.class}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default TestonomialCard;
