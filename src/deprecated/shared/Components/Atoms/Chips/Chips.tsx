import React, { memo } from 'react';

function Chips({ className, title }: { className: string; title: string }) {
  return <div className={className}>{title}</div>;
}

export default memo(Chips);
