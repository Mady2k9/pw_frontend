import React, { memo } from 'react';
import Button from '../../Atoms/Button/Button';

const LoginButton = ({
  className,
  ButtonText,
  redirectionUrl,
  onClick,
}: {
  ButtonText: string;
  className: string;
  redirectionUrl: string;
  onClick?: () => void;
}) => {
  return (
    // <a href={redirectionUrl} rel="noreferrer">
    <Button
      className={className}
      title={ButtonText}
      onClick={onClick}
      ctaRedirectionUrl={redirectionUrl}
    />
    // </a>
  );
};

export default memo(LoginButton);
