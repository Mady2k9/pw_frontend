import React, { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import { ButtonSize, ButtonVariant } from '.';
import ButtonInternal from './ButtonInternal';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: ReactNode;
  compress?: boolean; // Icon-only on small devices
}

const Button: React.FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>((props: ButtonProps, ref) => {
  const {
    variant = ButtonVariant.Default,
    size = ButtonSize.Normal,
    onClick,
    children,
    loading = false,
    disabled = false,
    icon,
    compress,
    ...rest
  } = props;
  return (
    <button
      title={children?.toString()}
      ref={ref}
      data-variant={variant}
      onClick={onClick}
      {...rest}
      disabled={loading || disabled}
    >
      <ButtonInternal
        variant={variant}
        size={size}
        loading={loading}
        icon={icon}
        disabled={loading || disabled}
        compress={compress}
      >
        {children}
      </ButtonInternal>
    </button>
  );
});
Button.displayName = 'Button';
export default Button;
