import React from 'react';
import Link from 'next/link';
import Input from '../../Atoms/Input/Input';
import Image from '../../Atoms/Image/Image';

function DownloadNumberLink() {
  return (
    <>
      <div className="flex ">
        <div className="bg-white xl:h-[48px] h-[40px] px-[16px] py-[12px] flex gap-1 xl:gap-10 justify-evenly items-center mb-6 rounded-tl-md rounded-bl-md">
          <div className="flex gap-1 items-center">
            <div className="text-[#757575] my-auto xl:text-base text-sm">
              IN +91
            </div>
            <Image
              bgImagetitle="/question-answer/down-arrow-btn.webp"
              className="w-[10px] h-[5px] bg-center bg-no-repeat bg-contain "
            />
          </div>
          <Input
            type="text"
            className="max-[720px]:w-[95px] outline-0 p-0 text-sm sm:text-base border-none rounded-md focus:ring-white"
            placeholder="Phone Number"
          />
        </div>
        <Link href="#">
          <div className="xl:w-[132px] xl:h-[48px] w-[97px] h-[40px] flex justify-center bg-black rounded-tr-md rounded-br-md cursor-pointer">
            <div className="text-white xl:text-base text-sm font-semibold my-auto">
              Get Link
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default DownloadNumberLink;
