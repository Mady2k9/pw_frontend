import React, { useState } from 'react';
import SchoolHero from '../SchoolHero/SchoolHero';
import TabButton from './Tab.module.css';
// import Link from 'next/link';
import { useRouter } from 'next/router';
import {AccessAllCardData} from '../ExplorByClass/schoolsAllclassDatajson'


interface Tab {
  id: string;
  label: string;
  content: string;
  to: string;
  bgImg: string;
  smbgImmg : string;
  clickable?: boolean; 
}

interface TabsProps {
  tabs: Tab[];
}

const TabComponent: React.FC<TabsProps> = ({ tabs }) => {
  const routes = useRouter();
  const tabUrl = routes.query.bookName as keyof typeof AccessAllCardData;
  const [activeTab, setActiveTab] = useState<string>(tabUrl || tabs[0].to);
  const handleActiveTab = (tab: string) => {
    setActiveTab(tab);
    routes.push(`/school-curriculum/${tab}`);
  };
  
  return (
    <>
      <div className="w-full bg-[#F8F8F8]">
        <div className="max-w-6xl mx-auto ml-auto px-4 xl:px-0">
          <div className="flex pt-4 ms-4 xl:ms-0 ">
            {tabs.map((tab, index) => (
              <div
                className={`flex w-[135px]`}
                style={
                  activeTab === tab.to
                    ? { zIndex: 70 }
                    : index == 1
                    ? { zIndex: (3 + index) * 10 }
                    : { zIndex: (3 - index) * 10 }
                }
                key={tab.id}
              >
                <div
                  className={`flex-1 py-2   leading-[28px] text-[18px] w-[10px] ${
                    activeTab === tab.to
                      ? `bg-[#FFF0E7] text-[#FF6D0A]  ${TabButton.contentLeft}`
                      : `bg-[#EAECEF] text-[#757575]  ${TabButton.contentLeftInActive}`
                  } focus:outline-none`}
                ></div>
                <button
                  key={tab.id}
                  onClick={() => handleActiveTab(tab.to)}
                  className={`flex-1 md:px-12 py-2 px-4 font-[600] md:leading-[28px] md:text-[18px] leading-[20px] text-[14px] bg-[#EAECEF] text-[#757575] focus:outline-none w-[100px
                  ${
                    activeTab === tab.to
                      ? `bg-[#FFF0E7] text-[#FF6D0A]`
                      : `bg-[#EAECEF] text-[#757575]`
                  } focus:outline-none`}
                >
                  {tab.label}
                </button>
                <div
                  className={`flex-1 py-2   leading-[28px] text-[18px] w-[10px] ${
                    activeTab === tab.to
                      ? `bg-[#FFF0E7] text-[#FF6D0A]  ${TabButton.contentRight}`
                      : `bg-[#EAECEF] text-[#757575]  ${TabButton.contentRightInActive}`
                  } focus:outline-none`}
                >
                  &nbsp;
                </div>
              </div>
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
              smbgImmg={tab.smbgImmg}
            />
          </div>
        ))}
      </div>
    </>
  );
};
export default TabComponent;
