import React, { useState } from 'react';
import SchoolHero from '../SchoolHero/SchoolHero';
import TabButton from './Tab.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Tab {
  id: string;
  label: string;
  content: string;
  to: string;
  bgImg: string;
}

interface TabsProps {
  tabs: Tab[];
}

const TabComponent: React.FC<TabsProps> = ({ tabs }) => {
  const routes = useRouter();
  const tabUrl = routes.query.tab;
  const [activeTab, setActiveTab] = useState(tabUrl || tabs[0].to);
  return (
    <>
      <div className="w-full bg-[#F8F8F8]">
        <div className="max-w-6xl mx-auto ml-auto">
          <div className="flex max-w-[20%] pt-4 ms-4 xl:ms-0">
            {tabs.map((tab, index: number) => (
              <Link
                key={index}
                href={{
                  pathname: `/school-curriculum/desc`,
                  query: { tab: tab.to },
                }}
                passHref
              >
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.to)}
                  className={`flex-1 md:px-12 py-2 px-4 font-[600] md:leading-[28px] md:text-[18px] leading-[20px] text-[14px]  ${
                    activeTab === tab.to
                      ? `bg-[#FFF0E7] text-[#FF6D0A] z-10 ${TabButton.content}`
                      : `bg-[#EAECEF] text-[#757575] ${TabButton.inactiveTab}`
                  } focus:outline-none`}
                >
                  {tab.label}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full">
        {tabs.map((tab) => (
          <div key={tab.id} className={activeTab === tab.to ? '' : 'hidden'}>
            <SchoolHero
              content={tab.content}
              label={tab.label}
              bgImg={tab.bgImg}
            />
          </div>
        ))}
      </div>
    </>
  );
};
export default TabComponent;
