import React from 'react';
import Button from '../Atoms/Button/Button';

function DownloadPdf() {
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
    <div>
      <Button
        className={
          'bg-[#F1EFFF] w-full text-[#5A4BDA] text-[16px] leading-[24px] font-[600] text-center h-[48px] rounded-lg'
        }
        title={'View Schedule'}
        onClick={handleDownload}
      />
    </div>
  );
}

export default DownloadPdf;
