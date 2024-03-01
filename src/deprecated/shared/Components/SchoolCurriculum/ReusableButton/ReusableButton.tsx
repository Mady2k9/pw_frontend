import React, { memo, useState } from 'react';

function Button({
  className,
  title,
  backGroundColor,
  textColor,
  hoverColor,
  ctaRedirectionUrl,
  handleClick,
  disabled = false,
}: {
  className: string;
  title: string;
  backGroundColor?: string;
  textColor?: string;
  hoverColor?: string;
  ctaRedirectionUrl?: string;
  handleClick?: (arg0?: any) => void;
  disabled?: boolean;
}) {
  const handleOnClick = () => {
    if (handleClick) handleClick();
    if (ctaRedirectionUrl) window.open(ctaRedirectionUrl, '_blank');
  };
  const [isHovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };
  return (
    <button
      onClick={handleOnClick}
      className={`text-[${textColor}] bg-[${backGroundColor}] hover:bg-[${hoverColor}] ${className} transition-transform transform  hover:translate-y-1 animate__animated`}
      disabled={disabled}
      style={{ boxShadow: `${isHovered ? '' : '0px 4px 0px 0px #989DA5'}` }}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      {title}
    </button>
  );
}

export default memo(Button);
