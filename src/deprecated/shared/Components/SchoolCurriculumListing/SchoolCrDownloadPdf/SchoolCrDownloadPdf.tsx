import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { AccessAllCardData } from '../ExplorByClass/schoolsAllclassDatajson';
import { Image } from '@/components/ui/image';
import arrow from '../../../../assets/Images/Schools/arrow-down-tray.webp'
const tabs = [
  {
    id: 'tab1',
    label: 'Bloom',
    pdfPath: "https://drive.google.com/file/d/1TNuLvc37XrKFc39mVb73X3qpKChLcVLC/view?usp=drivesdk"  
  },
  {
    id: 'tab2',
    label: 'euNext',
    pdfPath: "https://drive.google.com/file/d/1SJLc5zwffXhbf1dUuAOEJVEIdbO_Vwib/view?usp=drivesdk"
  
  },
  {
    id: 'tab3',
    label: 'Spark',
    pdfPath: 'https://drive.google.com/file/d/1f_0zsopVPdWwGsmXn3WWRTgBKLccH3EW/view',  
  },
];


function SchoolCrDownloadPdf() {
  const [isHovered, setHovered] = useState(false);
  const routes = useRouter();
  const tabUrl = routes.query.bookName as keyof typeof AccessAllCardData;

  const handleDownload = (pdfPath: string) => {
  if(pdfPath != ''){
    const link = document.createElement('a');
    link.href = pdfPath;
    link.target = '_blank';
    link.download = 'downloaded_testeSeries.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  };
 console.log(tabUrl,tabs,"tabUrl");
  return (
    <>
           {tabs.map((tab) => (
          <div key={tab?.id} className={(tabUrl  === tab?.label) && tab.pdfPath !='' ? '' : 'hidden'}>                     
        <div
          className="flex flex-row bg-[#FFF] rounded-lg w-[200px] h-[48px] p-3 items-center gap-[10px] cursor-pointer transition-transform transform  hover:translate-y-1 animate__animated"
          style={{
            boxShadow: `${isHovered ? '' : '0px 4px 0px 0px #1B2124'}`,
            border: '1px solid var(--PW-Gray-Palette-900-PW-Neutral, #1B2124)',
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => handleDownload(tab?.pdfPath)}
        >
          <Image
            src={arrow.src}
            alt='arrow-down'
            className={'w-[20px] h-[20px] '}
          />
          <div className="text-[#1B2124] text-[18px] leading-[28px] font-[600] text-center  ">
            Download PDF
          </div>
        </div>

        </div>
        ))}
    </>
  );
}

export default SchoolCrDownloadPdf;

