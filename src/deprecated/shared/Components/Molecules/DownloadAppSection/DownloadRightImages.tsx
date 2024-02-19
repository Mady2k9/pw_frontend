import React, { memo } from 'react';
import Image from '../../Atoms/Image/Image';

function DownloadRightImages(props: { src: string; className: string }) {
  const { src, className } = props;
  return <Image bgImagetitle={src} className={className} />;
}

export default memo(DownloadRightImages);
