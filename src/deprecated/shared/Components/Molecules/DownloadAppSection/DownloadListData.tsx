import React, { memo } from 'react';
import Image from '../../Atoms/Image/Image';

export interface caraouselProps {
  title: string;
  blueTickImage: string;
  className: string;
}
const DownloadListData: React.FC<caraouselProps> = ({
  title,
  blueTickImage,
  className,
}) => {
  return (
    <div className="flex items-center gap-2.5 my-[10px]">
      <Image
        bgImagetitle={blueTickImage}
        className="w-4 h-4 bg-center bg-no-repeat bg-cover"
      />
      <div className={className}>{title}</div>
    </div>
  );
};

export default memo(DownloadListData);
