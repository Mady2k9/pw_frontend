import cn from 'classnames';
import React, {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  useState,
} from 'react';
import { Eye, EyeOff, X } from 'lucide-react';

export enum InputSize {
  XSmall,
  Small,
  Normal,
  Large,
}

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  postText?: string;
  error?: string;
  preText?: string;
  allowClear?: boolean;
  invalid?: boolean;
  size?: InputSize;
}

const TextInput: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  {
    label,
    error,
    preText,
    postText,
    allowClear = false,
    invalid = false,
    size = InputSize.Normal,
    onChange,
    onBlur,
    onFocus,
    hint,
    ...props
  },
  ref
) => {
  const [focused, setFocused] = useState(false);
  const [obstructInput, setObstructInput] = useState(props.type === 'password');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  const handleClear = () => {
    // setValue('');
  };
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    if (onFocus) {
      onFocus(e);
    }
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    if (onBlur) {
      onBlur(e);
    }
  };
  const rootClassName = cn('group relative');
  const inputRootClassName = cn(
    'group w-full border flex items-center space-x-1.5 relative mt-2 rounded-md border transition-all duration-200',
    {
      'border-primary': focused,
      'bg-gray-100 border-gray-200 cursor-not-allowed': props.disabled,
      'border-rose-400': error || invalid,
      'bg-white': !props.disabled,
      'py-1 px-1.5 ': size === InputSize.XSmall,
      'py-1 px-2 ': size === InputSize.Small,
      'py-1.5 px-2': size === InputSize.Normal,
      'py-2 px-2.5': size === InputSize.Large,
    }
  );
  const inputClassName = cn(
    'block flex-1 bg-transparent rounded-md border-0 focus:ring-0 focus:outline-none text-gray-900 ring-0 placeholder:text-gray-400',
    {
      'text-xs leading-5': size === InputSize.XSmall,
      'placeholder:text-rose-300': error || invalid,
      'cursor-not-allowed': props.disabled,
      'text-sm leading-6': size === InputSize.Small,
      'sm:text-sm sm:leading-6': size === InputSize.Normal,
      'text-large sm:text-base leading-7 sm:leading-6':
        size === InputSize.Large,
    }
  );
  return (
    <div className={rootClassName}>
      {label && (
        <label className="block text-sm font-medium leading-4 text-gray-600">
          {label} {props.required && '*'}
        </label>
      )}
      <div className={inputRootClassName}>
        {preText && (
          <div className="pointer-events-none inset-y-0 flex items-center">
            <span className="text-gray-500 sm:text-sm">{preText}</span>
          </div>
        )}
        <input
          ref={ref}
          {...props}
          type={
            props.type === 'password'
              ? obstructInput
                ? 'password'
                : 'text'
              : props.type
          }
          onFocus={handleFocus}
          autoComplete={'off'}
          onBlur={handleBlur}
          onChange={handleChange}
          className={inputClassName}
        />
        {postText && (
          <div className="pointer-events-none inset-y-0 flex items-center">
            <span className="text-gray-500 sm:text-sm">{postText}</span>
          </div>
        )}
        {allowClear && props.value && (
          <div onClick={handleClear} className={'bg-stone-50 rounded-full p-1'}>
            <X className="cursor-pointer h-3 w-3 text-gray-400" />
          </div>
        )}
        {props.type === 'password' && (
          <div
            onClick={() => setObstructInput(!obstructInput)}
            className={'rounded-full'}
          >
            {obstructInput ? (
              <Eye className="cursor-pointer h-5 w-5 text-gray-400" />
            ) : (
              <EyeOff className="cursor-pointer h-5 w-5 text-gray-400" />
            )}
          </div>
        )}
      </div>
      {hint && (
        <label className="block text-xs leading-3 text-gray-500 mt-1">
          {hint}
        </label>
      )}
      <label
        className={cn(
          'block text-xs leading-3 text-red-500 transition-all duration-200',
          {
            'h-auto opacity-100  mt-1': !!error,
            'h-0 opacity-0': !error,
          }
        )}
      >
        {error || ''}
      </label>
    </div>
  );
};
export default forwardRef<HTMLInputElement, Props>(TextInput);
