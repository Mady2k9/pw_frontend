import React, { memo } from 'react';

function Button({
  className,
  title,
  backGroundColor,
  textColor,
  hoverColor,
  ctaRedirectionUrl,
  onClick,
  disabled = false,
}: {
  className: string;
  title: string;
  backGroundColor?: string;
  textColor?: string;
  hoverColor?: string;
  ctaRedirectionUrl?: string;
  onClick?: (arg0?: any) => void;
  disabled?: boolean;
}) {
  const handleOnClick = () => {
    if (onClick) onClick();
    if (ctaRedirectionUrl) window.open(ctaRedirectionUrl, '_blank');
  };
  return (
    <button
      onClick={handleOnClick}
      className={`text-[${textColor}] bg-[${backGroundColor}] hover:bg-[${hoverColor}] ${className}`}
      disabled={disabled}
    >
      {title}
    </button>
  );
}

export default memo(Button);
