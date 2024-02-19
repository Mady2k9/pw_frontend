import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { HeaderItemsData } from './HeaderType.d';
import { ToggleMenuFunction } from './header';
import SecondLevelTransitionMweb from './SecondLevelTransitionMweb';
const FirstLevelTransitionMweb = ({
  data,
  toggleMenu,
}: {
  data: HeaderItemsData;
  toggleMenu: ToggleMenuFunction;
}) => {
  const [showTransition, setShowTransition] = useState(false);
  const [showDropDown, setShowDropDown] = useState('');
  const handleShowTransition = () => {
    setShowTransition(!showTransition);
  };
  return (
    <>
      <div
        className="flex  justify-between items-center border-b-[1px] border-[#D9DCE1] p-4 cursor-pointer mt-2.5"
        onClick={() => setShowTransition(true)}
      >
        <div className="font-semibold text-base">{data.menuTitle}</div>
        <ChevronRightIcon className="w-5 h-5 cursor-pointer" />
      </div>
      <Transition appear show={showTransition} as={Fragment}>
        <Dialog as="div" className="" onClose={handleShowTransition}>
          <div className="fixed w-[100vw] h-full inset-0 overflow-y-auto z-30">
            <div className="flex items-center h-full justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-600"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="ease-in duration-600"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="w-[100vw] h-full transform overflow-y-auto  bg-white text-left align-middle shadow-xl transition-all">
                  <div>
                    <div className="flex justify-between px-3 pt-3 pb-5">
                      <div className="flex items-center">
                        <ChevronLeftIcon
                          className="w-[18px] h-[18px] gap-4 mr-2 cursor-pointer"
                          onClick={handleShowTransition}
                        />
                        <div className="font-semibold text-base">
                          {data.menuTitle}
                        </div>
                      </div>
                      <span className="w-7 h-7 cursor-pointer">
                        <XMarkIcon
                          onClick={() => {
                            toggleMenu();
                            handleShowTransition();
                          }}
                        />
                      </span>
                    </div>
                    <div>
                      {data.menuItems?.map((item, index) => (
                        <SecondLevelTransitionMweb
                          key={index}
                          setShowDropDown={setShowDropDown}
                          showDropDown={showDropDown}
                          item={item}
                        />
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default FirstLevelTransitionMweb;
