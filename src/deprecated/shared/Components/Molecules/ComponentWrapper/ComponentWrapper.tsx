import { ReactNode } from 'react';
import TransitionWrapper from '../TransitionWrapper/TransitionWrapper';

const ComponentWrapper = ({
  title,
  subTitle,
  children,
  classname,
}: {
  title: string;
  subTitle: string;
  children: ReactNode;
  classname?: string;
}) => {
  return (
    <div
      className={`${classname}  mt-6 md:mt-10 mx-auto lg:max-w-6xl xl:px-0 px-4 w-full flex flex-col items-center justify-center `}
    >
      <TransitionWrapper>
        <h2 className="md:text-[32px] text-[20px] md:leading-[48px] leading-[30px] font-[700] my-[8px] text-center ">
          {title}
        </h2>
      </TransitionWrapper>
      <TransitionWrapper>
        <div className="md:text-[18px] text-[14px] text-[#3D3D3D] md:leading-[24px] text-center leading-[20px] font-[500] ">
          {subTitle}
        </div>
      </TransitionWrapper>
      {children}
    </div>
  );
};

export default ComponentWrapper;
