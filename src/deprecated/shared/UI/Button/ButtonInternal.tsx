import cn from 'classnames';
import React, { ReactNode, useCallback, useMemo } from 'react';
import { ButtonSize, ButtonVariant } from '.';

export interface Props {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: ReactNode;
  disabled?: boolean;
  compress?: boolean; // Icon-only on small devices
}

export default function ButtonInternal({
  variant,
  size,
  loading,
  icon,
  disabled,
  compress,
  children,
}: Props): JSX.Element {
  const iconSize = useMemo(() => {
    switch (size) {
      case ButtonSize.XSmall:
        return 18;
      case ButtonSize.Small:
        return 18;
      default:
      case ButtonSize.Normal:
        return 20;
      case ButtonSize.Large:
      case ButtonSize.XLarge:
        return 22;
    }
  }, [size]);

  const iconWeight = useMemo(() => {
    // "thin" | "light" | "regular" | "bold" | "fill" | "duotone"
    switch (size) {
      case ButtonSize.XSmall:
      case ButtonSize.Small:
        return 'light';
      case ButtonSize.Normal:
      case ButtonSize.Large:
      case ButtonSize.XLarge:
      default:
        return 'regular';
    }
  }, [size]);

  enum Color {
    Red = 0,
    Blue,
    Green,
  }

  const colorBuilder = useCallback(
    (color: Color, fill: boolean): string => {
      let res = '';
      if (fill) {
        const colorVariants = [
          'bg-red-600 focus:ring-red-300',
          'bg-blue-600 focus:ring-blue-300',
          'bg-green-600 focus:ring-green-300',
        ];

        res = 'text-white focus:ring-2 ' + colorVariants[color];
        if (!disabled) {
          const colors = [
            'hover:bg-red-700',
            'hover:bg-blue-700',
            'hover:bg-green-700',
          ];
          res += ' ' + colors[color];
        }
      } else {
        const colorVariants = [
          'border-red-600 text-red-600 focus:ring-red-300',
          'border-blue-600 text-blue-600 focus:ring-blue-300',
          'border-blue-600 text-green-600 focus:ring-green-300',
        ];
        res = `border focus:ring-1` + colorVariants[color];
        if (!disabled) {
          const colors = [
            'hover:bg-red-50',
            'hover:bg-blue-50',
            'hover:bg-green-50',
          ];
          res += ' ' + colors[color];
        }
      }
      return res;
    },
    [disabled]
  );

  const rootClassName = cn(
    'select-none items-center focus:outline-none transition-colors duration-300 transform rounded-lg lg:flex',
    {
      // Sizes:
      ['text-xs px-1 md:px-3 h-7']: size === ButtonSize.XSmall,
      ['text-sm px-2 md:px-3 h-9']: size === ButtonSize.Small,
      ['text-sm px-3 md:px-5 h-10']: size === ButtonSize.Normal,
      ['text-base font-medium px-5 h-12']: size === ButtonSize.Large,
      ['text-base font-medium px-6 h-14']: size === ButtonSize.XLarge,
      // Default color:
      ['border text-gray-600 hover:bg-gray-100 focus:ring-gray-300 focus:ring-1']:
        variant === ButtonVariant.Default || !variant,
      ['hover:bg-gray-100']:
        (variant === ButtonVariant.Default || !variant) && !disabled,
      // Colors:
      [colorBuilder(Color.Blue, true)]: variant === ButtonVariant.Primary,
      [colorBuilder(Color.Red, false)]: variant === ButtonVariant.Danger,
      [colorBuilder(Color.Red, true)]: variant === ButtonVariant.PrimaryDanger,
      [colorBuilder(Color.Green, false)]: variant === ButtonVariant.Success,
      [colorBuilder(Color.Green, true)]:
        variant === ButtonVariant.PrimarySuccess,
      // Disabled:
      ['cursor-not-allowed opacity-60']: disabled,
    }
  );

  return (
    <div className={rootClassName}>
      <div
        className={cn(
          'flex items-center truncate w-full h-full justify-center',
          {
            ['gap-0.5']: size === ButtonSize.XSmall,
            ['gap-1']: size === ButtonSize.Small,
            ['gap-1.5']: size === ButtonSize.Normal,
            ['gap-2']:
            size === ButtonSize.Large || size === ButtonSize.XLarge,
          }
        )}
      >
        {loading === true && '...'}
        {icon}
        {compress && (
          <span className={cn({ 'hidden md:inline': !!icon })}>
              {children}
            </span>
        )}
        {!compress && <>{children}</>}
      </div>
    </div>
  );
}
