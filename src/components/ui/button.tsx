import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { Loader } from 'lucide-react';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transitionAll200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-[#5A4BDA] text-[#5A4BDA]-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border text-[#5A4BDA] border-[#5A4BDA] bg-white hover:bg-primary/10 hover:text-primary',
        secondary:
          'bg-secondary text-[#5A4BDA] hover:bg-primary/20',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-[#5A4BDA] underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-7 rounded-md px-3 text-sm',
        lg: 'h-10 md:h-11 md:text-lg rounded-md px-3 md:px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  slot?: string;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, loading, children, variant, slot, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : (slot || 'button');
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
        onClick={loading ? undefined : props.onClick}>
        <>
          <Loader className={cn('transitionAll200 stroke-primary overflow-hidden', {
            ['mr-1 w-4 h-4']: loading,
            ['mr-0 w-0 h-0']: !loading,
          })} />
          {children}
        </>
      </Comp>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
