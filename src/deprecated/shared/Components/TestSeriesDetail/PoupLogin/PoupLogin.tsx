import React from 'react';
import Image from '../../Atoms/Image/Image';
import Button from '../../Atoms/Button/Button';

function PoupLogin() {
  return (
    <div className="bg-[#FFF] absolute z-20 left-[200px] ">
      <div className="bg-[#F1EFFF] w-[100vh] ">
        <Image
          bgImagetitle={'/Mockup_web.webp'}
          className={'h-[300px] w-[100%] bg-center bg-no-repeat bg-contain'}
        />
      </div>
      <div className="flex flex-col px-5 pt-6">
        <div className="text-[#3D3D3D]  text-[24px]  leading-[32px] font-[600] text-center">
          Get access to free practice tests on PW
        </div>
        <div className="text-[#3D3D3D]  text-[16px]  leading-[24px] font-[500] text-center">
          Verify your mobile number to proceed
        </div>

        <div className="flex items-center rounded-lg border  border-gray-300">
          <div className="flex-shrink-0  inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-90">
            Ind +91
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </div>
          <label
            htmlFor="phone-input"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Phone number:
          </label>
          <div className="relative w-full">
            <input
              type="text"
              id="phone-input"
              className="block "
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="123-456-7890"
              required
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center py-[32px] ">
        <Button
          className={'w-[296px] h-[54px] bg-[#D2CCFF] rounded-lg border'}
          title={'Verify & Proceed'}
        />
      </div>
    </div>
  );
}

export default PoupLogin;
