import React, { useState } from 'react';
import Image from '../../Atoms/Image/Image';

function SchoolCrDownloadPdf() {
  const [isHovered, setHovered] = useState(false);

  const pdfPath =
    'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.target = '_blank';
    link.download = 'downloaded_testeSeries.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div
      className="flex flex-row bg-[#FFF] rounded-lg w-[200px] p-3 items-center gap-[10px] cursor-pointer transition-transform transform  hover:translate-y-1 animate__animated"
      style={{
        boxShadow: `${isHovered ? '' : '0px 4px 0px 0px #1B2124'}`,
        border: '1px solid var(--PW-Gray-Palette-900-PW-Neutral, #1B2124)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleDownload}
    >
      <Image
        bgImagetitle={'/arrow-down-tray.webp'}
        className={'w-[20px] h-[20px] '}
      />
      <div className="text-[#1B2124] text-[18px] leading-[28px] font-[600] text-center  ">
        Download PDF
      </div>
    </div>
  );
}

export default SchoolCrDownloadPdf;
