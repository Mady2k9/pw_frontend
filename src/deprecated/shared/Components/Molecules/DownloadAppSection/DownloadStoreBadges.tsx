import React, { memo } from 'react';
import Image from '../../Atoms/Image/Image';

export interface caraouselProps {
  badgeStoreUrl: string;
  badgeStoreImage: string;
  className: string;
  onClick: () => void;
}
const DownloadStoreBadges: React.FC<caraouselProps> = ({
  badgeStoreUrl,
  badgeStoreImage,
  className,
  onClick,
}) => {
  return (
    <a
      href={badgeStoreUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="store-icons"
    >
      <Image
        onClick={onClick}
        bgImagetitle={badgeStoreImage}
        className={className}
      />
    </a>
  );
};

export default memo(DownloadStoreBadges);
