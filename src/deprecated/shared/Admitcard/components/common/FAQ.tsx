import cn from 'clsx';
import s from '../../styles/FAQ.module.css';
import React from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import ChevronDown from '../../icons/ChevronDown';
import ChevronUp from '../../icons/ChevronUp';
import Typography from './Typography';

export interface FAQProps {
  //   items: { title: string; description: string }[];
  items: any[] | undefined;
  multipleOpen?: boolean;
  hideFAQTitle?: boolean;
}

const FAQ: React.FC<FAQProps> = (props) => {
  const { items, hideFAQTitle = false } = props;
  const rootClassName = cn(s.root, {});

  return (
    <div className={rootClassName}>
      {!hideFAQTitle && <p className="font-bold text-lg">FAQ&apos;s</p>}
      <div className={s.faqWrapper}>
        {items?.map((item, index) => {
          return (
            <div key={index} className="mb-4">
              <Disclosure>
                {({ open }) => (
                  /* Use the `open` state to conditionally change the direction of an icon. */
                  <>
                    <Disclosure.Button className={s.faqItemButton}>
                      <div className="w-full text-left">
                        <Typography
                          capitalize={true}
                          variant="small"
                          weight={600}
                        >
                          {item.title}
                        </Typography>
                      </div>
                      {open ? (
                        <ChevronUp></ChevronUp>
                      ) : (
                        <ChevronDown></ChevronDown>
                      )}
                    </Disclosure.Button>
                    <Transition
                      enter="transition-opacity duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition-opacity duration-500"
                      leaveFrom="h-auto"
                      leaveTo="h-0 hidden"
                    >
                      <Disclosure.Panel className={s.faqItemContent}>
                        <Typography
                          variant="small"
                          weight={500}
                          html={item.description}
                        />
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
  );
};

export default FAQ;
