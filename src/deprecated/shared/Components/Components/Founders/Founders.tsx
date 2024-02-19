import React, { memo, useEffect, useRef, useState } from 'react';
import FounderBgImage from '../../../../assets/Images/founders-bg.svg';
import Image from '../../Atoms/Image/Image';
import UpArrow from '../../../../assets/Images/chevron_up.webp';
import FounderDetails from './FounderDetails';
import FounderCard from './FounderCard';

const FoundersSection = () => {
  const [showDropDownOpen, setShowDropDownOpen] = useState(false);
  const [showDropDownOpenBox, setShowDropDownOpenBox] = useState(false);
  const handleDropDownOpen = () => {
    setShowDropDownOpen(!showDropDownOpen);
  };
  const componentRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        componentRef.current &&
        !componentRef?.current?.contains(event.target as Node)
      ) {
        setShowDropDownOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);
  useEffect(() => {
    const handleOutsideClicka = (event: MouseEvent) => {
      if (
        componentRef.current &&
        !componentRef?.current?.contains(event.target as Node)
      ) {
        setShowDropDownOpenBox(false);
      }
    };
    document.addEventListener('click', handleOutsideClicka);
    return () => {
      document.removeEventListener('click', handleOutsideClicka);
    };
  });
  const [isShown, setIsShown] = useState(false);
  const [isShownOnClick, setIsShownOnClick] = useState(false);

  const handleOnClick = () => {
    if (isShownOnClick == true) {
      setIsShownOnClick(false);
    } else {
      setIsShownOnClick(true);
    }
  };

  const [isShownBox, setIsShownBox] = useState(false);
  const [isShownOnClickBox, setIsShownOnClickBox] = useState(false);

  const handleOnClickBox = () => {
    if (isShownOnClickBox == true) {
      setIsShownOnClickBox(false);
    } else {
      setIsShownOnClickBox(true);
    }
  };
  return (
    <>
      <div
        className="mx-auto md:bg-bottom bg-cover md:bg-no-repeat"
        style={{
          backgroundImage: `url(${FounderBgImage.src})`,
        }}
      >
        <div className="max-w-6xl px-[16px] m-auto pb-[37px]">
          <div className="xl:text-left w-full">
            <div className="py-[32px]">
              <h2 className="font-[600] md:text-[32px] md:leading-[48px] text-[20px] leading-[30px] text-white">
                Our Founders
              </h2>
            </div>

            <div className="grid xl:grid-cols-2 grid-cols-1 gap-6">
              <div className="flex flex-col md:h-[440px] h-[460px] bg-white text-center rounded-md">
                <div
                  className="w-full px-8 pt-8 pb-4 overflow-y-scroll"
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                >
                  {!isShown && !isShownOnClick ? (
                    <div
                      className={'animate-in slide-in-from-top-64 duration-700'}
                    >
                      <FounderCard isShown={isShown} />
                    </div>
                  ) : (
                    ''
                  )}

                  {isShown || isShownOnClick ? (
                    <div className="animate-in slide-in-from-bottom-64 duration-700">
                      <FounderDetails />
                    </div>
                  ) : (
                    ''
                  )}
                </div>

                <div className="py-4 border-t border-[#bebdbd] cursor-default">
                  <div
                    ref={componentRef}
                    onClick={() => handleOnClick()}
                    className="flex text-sm md:text-[16px] px-4 md:px-0 justify-center text-[#5A4BDA] font-[700] leading-6"
                  >
                    <span>
                      {(isShown && isShown) || isShownOnClick
                        ? 'Read Less about Alakh Pandey'
                        : 'Read More about Alakh Pandey'}
                    </span>
                    <span>
                      <Image
                        bgImagetitle={UpArrow.src}
                        className={`w-[30px] h-[30px]  bg-center bg-no-repeat bg-contain ${
                          (isShown && isShown) || isShownOnClick
                            ? 'rotate-180'
                            : ''
                        }`}
                      />
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:h-[440px] h-[475px] bg-white text-center rounded-md">
                <div
                  className="w-full px-8 pt-8 pb-4 overflow-y-scroll"
                  onMouseEnter={() => setIsShownBox(true)}
                  onMouseLeave={() => setIsShownBox(false)}
                >
                  {!isShownBox && !isShownOnClickBox ? (
                    <div
                      className={'animate-in slide-in-from-top-64 duration-700'}
                    >
                      <FounderCard isShown={isShownBox} />
                    </div>
                  ) : (
                    ''
                  )}

                  {isShownBox || isShownOnClickBox ? (
                    <div className="animate-in slide-in-from-bottom-64 duration-700">
                      <FounderDetails />
                    </div>
                  ) : (
                    ''
                  )}
                </div>

                <div className="py-4 border-t border-[#bebdbd] cursor-default">
                  <div
                    ref={componentRef}
                    onClick={() => handleOnClickBox()}
                    className="flex text-sm md:text-[16px] px-4 md:px-0 justify-center text-[#5A4BDA] font-[700] leading-6"
                  >
                    <span>
                      {(isShownBox && isShownBox) || isShownOnClickBox
                        ? 'Read Less about Alakh Pandey'
                        : 'Read More about Alakh Pandey'}
                    </span>
                    <span>
                      <Image
                        bgImagetitle={UpArrow.src}
                        className={`w-[30px] h-[30px]  bg-center bg-no-repeat bg-contain ${
                          (isShownBox && isShownBox) || isShownOnClickBox
                            ? 'rotate-180'
                            : ''
                        }`}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(FoundersSection);
