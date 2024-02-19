import React, { memo } from 'react';

function Text({ style, title }: { style: string; title: string }) {
  return <div className={style}>{title}</div>;
}

export default memo(Text);
