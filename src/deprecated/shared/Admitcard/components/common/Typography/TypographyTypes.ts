import React from 'react';

export type Variant =
  | 'display1'
  | 'display2'
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'subHeading'
  | 'regular'
  | 'small'
  | 'tiny'
  | 'label';
export const ComponentsMap: {
  [P in Variant]: React.ComponentType<any> | string;
} = {
  display1: 'div',
  display2: 'div',
  heading1: 'h1',
  heading2: 'h2',
  heading3: 'h3',
  heading4: 'h4',
  subHeading: 'div',
  small: 'span',
  tiny: 'span',
  regular: 'span',
  label: 'label',
};
