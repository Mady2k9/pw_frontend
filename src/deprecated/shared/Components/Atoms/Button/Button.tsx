import React, { memo } from 'react';

function Button({
  className,
  title,
  onClick,
  disabled = false,
}: {
  className: string;
  title: string;
  onClick?: (arg0?: any) => void;
  disabled?: boolean;
}) {
  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      {title}
    </button>
  );
}

export default memo(Button);
