import cn from 'clsx';
import React from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

export interface FAQProps {
  items: { title: string; description: string }[];
  heading: string;
}

const FAQ: React.FC<FAQProps> = (props) => {
  const { items, heading } = props;

  return (
    <div className="w-full sm:py-10 py-6">
      <div className="max-w-6xl px-3 xl:px-0 mx-auto text-[#1B2124]">
        <div className="text-start sm:text-[32px] sm:leading-[48px] text-[20px] leading-[30px] font-[700]">
          {heading}
        </div>

        <div className="sm:mt-8 mt-4">
          {items.map((item, index) => {
            return (
              <div key={index} className="mb-4">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        className={cn(
                          'transition-all bg-[#F1F5FE] hover:bg-[#deeaf8] w-full p-4 rounded-lg flex justify-between',
                          {
                            [' transition-all rounded-t-lg rounded-b-none']:
                              open,
                          }
                        )}
                      >
                        <div className="w-full text-left sm:text-[18px] sm:leading-[28px] text-[14px] leading-[22px] font-[600]">
                          <p>{item.title}</p>
                        </div>
                        <ChevronDownIcon
                          className={cn(
                            'transition-all stroke-2 duration-500 h-6 w-6 rotate-0',
                            {
                              ['rotate-180']: open,
                            }
                          )}
                        />
                      </Disclosure.Button>
                      <Transition
                        enter="transition-opacity duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-500"
                        leaveFrom="h-auto"
                        leaveTo="h-0 hidden"
                      >
                        <Disclosure.Panel className="bg-[#FAFAFA] p-4 rounded-b-lg sm:text-[16px] sm:leading-[24px] text-[12px] leading-[18px] font-[500]">
                          <p>{item.description}</p>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
