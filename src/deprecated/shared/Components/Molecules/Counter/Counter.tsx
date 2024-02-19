import { memo } from 'react';
import SingleCounter from './SingleCounter';

const Counter = ({
  number,
  height,
  width,
}: {
  number: string;
  height: number;
  width: number;
}) => {
  const digits = number.match(/[0-9]+/g) || [];
  const digitsToDisplay = digits[0]?.split('');
  const stringsToDisplay = number.replace(/[0-9]/g, '');
  return (
    <div className="flex flex-row">
      {digitsToDisplay?.map((_digit: string, index) => (
        <SingleCounter
          key={index}
          digit={Number(_digit)}
          height={height}
          width={width}
        />
      ))}
      <div className="ml-[2px]">{stringsToDisplay}</div>
    </div>
  );
};

export default memo(Counter);
