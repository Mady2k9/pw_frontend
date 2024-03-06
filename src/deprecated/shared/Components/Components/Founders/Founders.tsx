import React, { memo, useEffect, useRef, useState } from 'react';
import FounderBgImage from '../../../../assets/Images/founders-bg.svg';
import FounderBgMobImage from '../../../../assets/Images/Our-Founder-mweb.webp';
import Image from '../../Atoms/Image/Image';
import UpArrow from '../../../../assets/Images/chevron_up.webp';
import FounderDetails from './FounderDetails';
import FounderCard from './FounderCard';
import CoFounderDetails from './CoFounderDetails';
import CoFounderCard from './CoFounderCard';

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
        className="mx-auto md:bg-bottom bg-cover md:bg-no-repeat sm:block hidden"
        style={{
          backgroundImage: `url(${FounderBgImage.src})`,
        }}
      >
        <div className="max-w-6xl px-[16px] m-auto pb-[37px]">
          <div className="xl:text-left w-full">
            <div className="pb-[16px] pt-[32px]">
              <h2 className="font-[600] md:text-[32px] md:leading-[48px] text-[20px] leading-[30px] text-white">
                Our Founders
              </h2>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
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
                    <span className="pt-1">
                      {(isShown && isShown) || isShownOnClick
                        ? 'Read Less about Alakh Pandey'
                        : 'Read More about Alakh Pandey'}
                    </span>
                    <span className="pt-[2px]">
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
                      <CoFounderCard isShown={isShownBox} />
                    </div>
                  ) : (
                    ''
                  )}

                  {isShownBox || isShownOnClickBox ? (
                    <div className="animate-in slide-in-from-bottom-64 duration-700">
                      <CoFounderDetails />
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
                    <span className="pt-1">
                      {(isShownBox && isShownBox) || isShownOnClickBox
                        ? 'Read Less about Prateek Maheshwari'
                        : 'Read More about Prateek Maheshwari'}
                    </span>
                    <span className="pt-[2px]">
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

      <div
        className="mx-auto bg-bottom bg-cover bg-no-repeat sm:hidden block"
        style={{
          backgroundImage: `url(${FounderBgMobImage.src})`,
        }}
      >
        <div className="px-[16px] m-auto pb-[28px]">
          <div className="w-full">
            <div className="pb-[16px] pt-[32px]">
              <h2 className="font-[700] md:text-[32px] md:leading-[48px] text-[20px] leading-[30px] text-white">
                Our Founders
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <div className="flex flex-col md:h-[440px] h-[363px] bg-white text-center rounded-md justify-between">
                <div
                  className="w-full px-8 md:pt-8 pt-3 pb-4 overflow-y-scroll"
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

                <div className="md:py-4 py-2 border-t border-[#bebdbd] cursor-default">
                  <div
                    ref={componentRef}
                    onClick={() => handleOnClick()}
                    className="flex text-sm md:text-[16px] px-4 md:px-0 justify-center text-[#5A4BDA] font-[700] leading-6"
                  >
                    <span className="pt-1">
                      {(isShown && isShown) || isShownOnClick
                        ? 'Read Less about Alakh Pandey'
                        : 'Read More about Alakh Pandey'}
                    </span>
                    <span className="pt-[2px]">
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

              <div className="flex flex-col md:h-[440px] h-[363px] bg-white text-center rounded-md justify-between">
                <div
                  className="w-full px-8 md:pt-8 pt-3 pb-4 overflow-y-scroll"
                  onMouseEnter={() => setIsShownBox(true)}
                  onMouseLeave={() => setIsShownBox(false)}
                >
                  {!isShownBox && !isShownOnClickBox ? (
                    <div
                      className={'animate-in slide-in-from-top-64 duration-700'}
                    >
                      <CoFounderCard isShown={isShownBox} />
                    </div>
                  ) : (
                    ''
                  )}

                  {isShownBox || isShownOnClickBox ? (
                    <div className="animate-in slide-in-from-bottom-64 duration-700">
                      <CoFounderDetails />
                    </div>
                  ) : (
                    ''
                  )}
                </div>

                <div className="md:py-4 py-2 border-t border-[#bebdbd] cursor-default">
                  <div
                    ref={componentRef}
                    onClick={() => handleOnClickBox()}
                    className="flex text-sm md:text-[16px] px-4 md:px-0 justify-center text-[#5A4BDA] font-[700] leading-6"
                  >
                    <span className="pt-1">
                      {(isShownBox && isShownBox) || isShownOnClickBox
                        ? 'Read Less about Prateek Maheshwari'
                        : 'Read More about Prateek Maheshwari'}
                    </span>
                    <span className="pt-[2px]">
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
