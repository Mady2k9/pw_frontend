import React, {
  FunctionComponent,
  JSXElementConstructor,
  useMemo,
} from 'react';
import cn from 'clsx';
import s from '../../../styles/Typography.module.css';
import { ComponentsMap, Variant } from './TypographyTypes';

interface TypographyProps {
  variant?: Variant;
  children?: React.ReactNode | any;
  html?: string;
  capitalize?: boolean;
  weight?: number;
  maxLines?: number;
  onClick?: () => any;
}

const Typography: FunctionComponent<TypographyProps> = ({
  variant = 'regular',
  children,
  capitalize,
  weight = 500,
  maxLines,
  html,
  onClick,
}) => {
  const Component:
    | JSXElementConstructor<any>
    | React.ReactElement<any>
    | React.ComponentType<any>
    | string = ComponentsMap![variant!];

  const htmlContentProps = html
    ? {
        dangerouslySetInnerHTML: { __html: html },
      }
    : {};
  const _children = useMemo(() => {
    if (typeof children === 'string' && children?.length && capitalize) {
      return children.charAt(0).toUpperCase() + children.slice(1);
    }
    return children;
  }, [children]);
  return (
    <Component
      className={cn(
        s.root,
        {
          ['font-thin']: weight === 100,
          ['font-extralight']: weight === 200,
          ['font-light']: weight === 300,
          ['font-normal']: weight === 400,
          ['font-medium']: weight === 500,
          ['font-semibold']: weight === 600,
          ['font-bold']: weight === 700,
          ['font-extrabold']: weight === 800,
          ['font-black']: weight === 900,
        },
        {
          [s[variant]]: true,
        }
      )}
      onClick={onClick}
      {...htmlContentProps}
    >
      {_children}
    </Component>
  );
};

export default Typography;
