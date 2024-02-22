import React, { memo } from 'react';

function Image({
  bgImagetitle,
  className,
  onClick,
}: {
  bgImagetitle: string;
  className: string;
  onClick?: () => void;
}) {
  return (
    <div
      className={className}
      style={{ backgroundImage: `url(${bgImagetitle})` }}
      onClick={onClick}
    />
  );
}

export default memo(Image);
