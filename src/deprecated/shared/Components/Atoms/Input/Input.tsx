import React, { ChangeEvent, memo } from 'react';

function Input({
  type,
  placeholder,
  className,
  value,
  disabled,
  handleOnChange,
  maxLength,
}: {
  type: string;
  placeholder: string;
  className: string;
  value?: string;
  disabled?: boolean;
  handleOnChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number | undefined;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      onChange={handleOnChange}
      disabled={disabled}
      value={value}
      maxLength={maxLength}
    />
  );
}

export default memo(Input);
