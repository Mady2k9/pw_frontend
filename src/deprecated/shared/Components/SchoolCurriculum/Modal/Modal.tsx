import { Fragment, useEffect, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import schoolCardData from '../../../../jsonFiles/schoolcardData.json';
import Image from '../../Atoms/Image/Image';
import PoupCard from './PoupCard';
import { useRouter } from 'next/router';
import arrowSmall from '../../../../assets/Images/Schools/arrow-small-right.webp';
import stars from '../../../../assets/Images/Schools/Group-1.webp';
import satrsMweb from '../../../../assets/Images/Schools/Group-2.webp';

export default function Modal() {
  const partnersData = schoolCardData?.schoolCardData || [];
  const [open, setOpen] = useState(true);
  const [isHovered, setHovered] = useState(false);
  const [childState, setChildState] = useState<string | null>(null);
  const cancelButtonRef = useRef(null);
  const router = useRouter();
  const handleChildStateChange = (selectedCard: string) => {
    setChildState(selectedCard);
  };

  const handleContinueClick = () => {
    router.push(
      `/school-curriculum/${encodeURIComponent(
        childState !== null ? childState : 'Bloom'
      )}`
    );
    setOpen(false);
  };
console.log(partnersData,'partnersData');
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-[73] inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <div
          className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block
         sm:p-0"
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className="inline-block align-bottom bg-white rounded-3xl
               text-left 
            overflow-hidden shadow-xl 
            transform transition-all 
            sm:my-8 sm:align-middle relative "
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex sm:items-start ">
                  
                    <div className="mt-3 text-start sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h2"
                        className="font-bold text-[20px] xl:text-[32px] leading-[30px] xl:leading-[48px] text-gray-900 flex justify-center"
                      >
                        Which Publisher would you like to explore?
                        <div
                          className="sm:hidden block"
                          onClick={() => setOpen(false)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                          >
                            <path
                              d="M17.1747 15.9993L20.7551 12.4272C20.9119 12.2704 21 12.0578 21 11.8361C21 11.6143 20.9119 11.4017 20.7551 11.2449C20.5983 11.0881 20.3857 11 20.1639 11C19.9422 11 19.7296 11.0881 19.5728 11.2449L16.0007 14.8253L12.4287 11.2449C12.2719 11.0881 12.0592 11 11.8375 11C11.6157 11 11.4031 11.0881 11.2463 11.2449C11.0895 11.4017 11.0014 11.6143 11.0014 11.8361C11.0014 12.0578 11.0895 12.2704 11.2463 12.4272L14.8267 15.9993L11.2463 19.5713C11.1683 19.6488 11.1063 19.7408 11.064 19.8423C11.0218 19.9438 11 20.0526 11 20.1625C11 20.2724 11.0218 20.3813 11.064 20.4827C11.1063 20.5842 11.1683 20.6763 11.2463 20.7537C11.3237 20.8317 11.4158 20.8937 11.5173 20.936C11.6187 20.9782 11.7276 21 11.8375 21C11.9474 21 12.0562 20.9782 12.1577 20.936C12.2592 20.8937 12.3512 20.8317 12.4287 20.7537L16.0007 17.1733L19.5728 20.7537C19.6502 20.8317 19.7423 20.8937 19.8437 20.936C19.9452 20.9782 20.054 21 20.1639 21C20.2739 21 20.3827 20.9782 20.4842 20.936C20.5856 20.8937 20.6777 20.8317 20.7551 20.7537C20.8332 20.6763 20.8951 20.5842 20.9374 20.4827C20.9797 20.3813 21.0014 20.2724 21.0014 20.1625C21.0014 20.0526 20.9797 19.9438 20.9374 19.8423C20.8951 19.7408 20.8332 19.6488 20.7551 19.5713L17.1747 15.9993Z"
                              fill="#1B2124"
                            />
                          </svg>
                        </div>
                      </Dialog.Title>
                      {/* {partnersData.map((partner, index) => ( */}
                        <div
                          // key={index}
                          className="mx-auto max-w-5xl pt-[32px] flex  flex-row gap-5  overflow-x-scroll slideBarRemove"
                        >
                          <PoupCard
                            data={partnersData[0].sectionProps}
                            onStateChange={handleChildStateChange}
                          />
                        </div>
                      {/* ))} */}
                    </div>
                 
                  <div
                    className="sm:block hidden absolute top-6 right-7"
                    onClick={() => setOpen(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M17.1747 15.9993L20.7551 12.4272C20.9119 12.2704 21 12.0578 21 11.8361C21 11.6143 20.9119 11.4017 20.7551 11.2449C20.5983 11.0881 20.3857 11 20.1639 11C19.9422 11 19.7296 11.0881 19.5728 11.2449L16.0007 14.8253L12.4287 11.2449C12.2719 11.0881 12.0592 11 11.8375 11C11.6157 11 11.4031 11.0881 11.2463 11.2449C11.0895 11.4017 11.0014 11.6143 11.0014 11.8361C11.0014 12.0578 11.0895 12.2704 11.2463 12.4272L14.8267 15.9993L11.2463 19.5713C11.1683 19.6488 11.1063 19.7408 11.064 19.8423C11.0218 19.9438 11 20.0526 11 20.1625C11 20.2724 11.0218 20.3813 11.064 20.4827C11.1063 20.5842 11.1683 20.6763 11.2463 20.7537C11.3237 20.8317 11.4158 20.8937 11.5173 20.936C11.6187 20.9782 11.7276 21 11.8375 21C11.9474 21 12.0562 20.9782 12.1577 20.936C12.2592 20.8937 12.3512 20.8317 12.4287 20.7537L16.0007 17.1733L19.5728 20.7537C19.6502 20.8317 19.7423 20.8937 19.8437 20.936C19.9452 20.9782 20.054 21 20.1639 21C20.2739 21 20.3827 20.9782 20.4842 20.936C20.5856 20.8937 20.6777 20.8317 20.7551 20.7537C20.8332 20.6763 20.8951 20.5842 20.9374 20.4827C20.9797 20.3813 21.0014 20.2724 21.0014 20.1625C21.0014 20.0526 20.9797 19.9438 20.9374 19.8423C20.8951 19.7408 20.8332 19.6488 20.7551 19.5713L17.1747 15.9993Z"
                        fill="#1B2124"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className=" px-4 sm:px-6 sm:flex flex sm:flex-row  items-center justify-center mb-4">
                <div
                  className={
                    'md:w-[200px] w-[164px] h-[48px] text-[#fff] font-semibold text-sm rounded-lg bg-[#1B2124] flex items-center justify-center cursor-pointer transition-transform transform  hover:translate-y-1 animate__animated'
                  }
                  onClick={handleContinueClick}
                  style={{
                    boxShadow: `${isHovered ? '' : '0px 4px 0px 0px #989DA5'}`,
                  }}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  Continue
                  <Image
                    bgImagetitle={arrowSmall.src}
                    className={
                      'w-5 h-5 bg-center bg-no-repeat bg-cover rounded-lg ml-3'
                    }
                  />
                  
                </div>
              </div>
              <div>
                <Image
                  bgImagetitle={stars.src}
                  className={
                    'w-[190px] h-[140px] bg-center bg-cover bg-no-repeat absolute xl:bottom-[-20px] xl:right-[-35px] sm:block hidden'
                  }
                />
                <Image
                  bgImagetitle={satrsMweb.src}
                  className={
                    'w-[58px] h-[75px] bg-center bg-cover bg-no-repeat absolute  bottom-[-10px] right-[-0px] sm:hidden block'
                  }
                />
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
