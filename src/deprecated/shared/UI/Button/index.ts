export { default } from './Button';
export { default as ButtonInternal } from './ButtonInternal';

//TODO: Need to add more variants
export enum ButtonVariant {
  Default,
  Primary,
  Danger,
  PrimaryDanger,
  Success,
  PrimarySuccess,
}

export enum ButtonSize {
  XSmall,
  Small,
  Normal,
  Large,
  XLarge,
}
