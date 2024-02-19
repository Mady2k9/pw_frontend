import { useEffect, useRef, useState } from 'react';
import Alakh from '../../../../assets/Images/Alakh.webp';
import Image from '../../Atoms/Image/Image';
import VideoComponentPopup from '../../Molecules/VideoComponentPopup/VideoComponentPopup';
import batchEventTracker from '../../BatchEventTracker/BatchEventtracker';
const BatchOrientation = ({ orientationVideo }: { orientationVideo: any }) => {
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
    batchEventTracker.PwOrientationVideoClick();
    document.body.style.overflow = 'hidden';
    setShowVideoPopup(true);
  };
  // const getYtUrl = (url: string) => {
  //   if (url?.includes('embed')) return url + '&autoplay=1';
  // };
  return (
    <>
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
            <VideoComponentPopup
              src={`${orientationVideo?.introSection?.introVideoUrl}`}
              title={'YT-video'}
              className={'h-full w-full  rounded-lg'}
            />
          </div>
        </div>
      ) : null}
      <div className="mt-[20px] px-[16px] items-center bg-gradient-to-b from-[#FFF6E5] to-[#FFFBF4] flex flex-row  rounded-[4px]">
        <div className="my-[20px]">
          <div className="md:text-[20px] text-base md:leading-[30px]  font-[700]">
            {orientationVideo?.introSection?.customTitle}
          </div>
          <div className="md:text-[16px] text-[12px] md:leading-[24px] leading-[18px] font-[500] text-[#3D3D3D] ">
            Know important details and get oriented with your batch teachers.
            Click here to watch the video
          </div>
        </div>
        <div></div>
        <div className="flex flex-col items-center justify-center whitespace-nowrap ">
          <div className="relative w-[65px] h-[70px] items-center flex ">
            <Image
              bgImagetitle={`${Alakh.src}`}
              className={
                'h-full w-full bg-center bg-contain bg-no-repeat opacity-50 md:block hidden'
              }
            />
            {orientationVideo?.isIntroSectionEnabled && (
              <div
                className="absolute md:bottom-[-10px] md:right-[-10px] right-0  h-[48px] w-[48px] cursor-pointer"
                onClick={handleShowVideo}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <circle cx="23.9988" cy="23.3992" r="13.2" fill="white" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.79883 24.0008C4.79883 13.3969 13.395 4.80078 23.9988 4.80078C34.6027 4.80078 43.1988 13.3969 43.1988 24.0008C43.1988 34.6046 34.6027 43.2008 23.9988 43.2008C13.395 43.2008 4.79883 34.6046 4.79883 24.0008ZM20.1363 17.0209C20.7142 16.7054 21.4183 16.7306 21.9722 17.0867L30.3722 22.4867C30.8874 22.8179 31.1988 23.3883 31.1988 24.0008C31.1988 24.6133 30.8874 25.1837 30.3722 25.5149L21.9722 30.9149C21.4183 31.271 20.7142 31.2962 20.1363 30.9807C19.5584 30.6651 19.1988 30.0592 19.1988 29.4008V18.6008C19.1988 17.9423 19.5584 17.3364 20.1363 17.0209Z"
                    fill="#1B2124"
                  />
                </svg>
              </div>
            )}
          </div>

          <div className="text-[14px] leading-[20px] font-[500] opacity-50 md:block hidden">
            Orientation Video
          </div>
          <div className="text-[10px] leading-[16px] font-[500] opacity-50 md:block hidden">
            Click to watch
          </div>
        </div>
      </div>
    </>
  );
};

export default BatchOrientation;
