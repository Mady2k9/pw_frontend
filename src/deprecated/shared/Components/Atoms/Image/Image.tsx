import React, { memo } from 'react';

function Image({
  bgImagetitle,
  className,
  onClick,
  placeholder,
}: {
  placeholder?: string;
  bgImagetitle: string;
  className: string;
  onClick?: () => void;
}) {
  return (
    <div
      className={className}
      style={{ backgroundImage: `url(${bgImagetitle || placeholder})` }}
      onClick={onClick}
    />
  );
}

export default memo(Image);
